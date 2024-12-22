from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.applications.vgg16 import preprocess_input
from pydantic import BaseModel
import numpy as np
from PIL import Image
import re
from io import BytesIO
import uvicorn
import pytesseract
import os
import json
import httpx
from dotenv import load_dotenv

load_dotenv()

MODEL_PATH = os.getenv('MODEL_PATH')
CORS_ORIGIN = os.getenv('CORS_ORIGIN')
JSON_PATH = os.getenv('JSON_PATH')
TESSERACT_CMD = os.getenv('TESSERACT_CMD')
os.environ['TESSDATA_PREFIX'] = 'C:/Program Files/Tesseract-OCR/tessdata'

pytesseract.pytesseract.tesseract_cmd = os.getenv('TESSERACT_CMD')

app = FastAPI()

origins = [
    CORS_ORIGIN, 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True, 
    allow_methods=["*"],  
    allow_headers=["*"], 
)
model = None
washing_machine_model = None
refrigerator_model = None

@app.on_event("startup")
async def startup_event():
    global model, washing_machine_model, refrigerator_model
    try:
        model = load_model(os.getenv('MODEL_PATH'))
        washing_machine_model = load_model('D:/app/backend/models/vgg16_WM_submodel.h5')
        refrigerator_model = load_model('D:/app/backend/models/vgg16_ref_submodel.h5')
        print("Model is ready.")
    except Exception as e:
        print(f"Failed to start properly: {e}")

class QueryParams(BaseModel):
    appliance_type: str
    kwh_value: int 

@app.post("/fetch-data")
async def fetch_data(params: QueryParams):
    base_url = 'https://data.energystar.gov/resource/'
    try:
        with open(JSON_PATH, 'r') as file:
            mapping = json.load(file)
        
        if params.appliance_type in mapping:
            appliance_code = mapping[params.appliance_type]["code"] + ".json"
            aec_code = mapping[params.appliance_type]["aec"]
        else:
            raise ValueError("Appliance type not found in mapping")

        query = f"$where={aec_code} <= {params.kwh_value}"
        limit = "$limit=5"
        full_url = f"{base_url}{appliance_code}?{query}&{limit}"

        async with httpx.AsyncClient() as client:
            response = await client.get(full_url)
            response.raise_for_status() 
            return response.json() 

    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="JSON decoding error")
    except httpx.RequestError as exc:
        raise HTTPException(status_code=500, detail=f"Request error: {str(exc)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

@app.post("/upload/")
async def create_upload_file(energy_sticker: UploadFile = None, appliance_photo: UploadFile = File(...)):

    kwh_value = None

    # Check if the appliance photo is provided
    if not appliance_photo or not appliance_photo.filename:
        raise HTTPException(status_code=400, detail="Appliance photo file is required.")
    
    if energy_sticker and energy_sticker.filename:
        try:
            contents = await energy_sticker.read()
            image = Image.open(BytesIO(contents))
            kwh_value = extract_largest_kwh_value(image)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Failed to process energy sticker: {str(e)}")
    
    # Process the appliance photo and predict the class
    try:
        contents_appliance_photo = await appliance_photo.read()
        image_appliance_photo = Image.open(BytesIO(contents_appliance_photo))
        predicted_class = predict_appliance_class(image_appliance_photo)  
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process appliance photo: {str(e)}")
    
    # Handle subclass predictions based on predicted class
    try:
        if predicted_class == "Refrigerator":
            subclass = await predict_refrigerator_subclass(image_appliance_photo)  
        elif predicted_class == "Washing Machine":
            subclass = await predict_washing_machine_subclass(image_appliance_photo) 
    except Exception as e:
        subclass = "NA"

    # If energy sticker not provided, lookup AEC value in JSON
    if kwh_value is None:
        try:
            with open(JSON_PATH, 'r' ) as file:
                data = json.load(file)
                if predicted_class in ("Refrigerator", "Washing Machine"):
                    if subclass in data[predicted_class]:
                        kwh_value = data[predicted_class][subclass]
                    else:
                        raise ValueError("Invalid Subclass")
                else: 
                    if predicted_class in data: 
                        kwh_value =  data[predicted_class]
                    else: 
                        raise ValueError("Invalid Main Class")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error fetching AEC {str(e)}")
    
    # Calculate cost and fetch related appliances
    try:
        total_cost = "Not calculated"
        if kwh_value is not None:
            total_cost = calculate_cost(kwh_value, 0.1)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching appliances: {str(e)}")

    return {"totalCost": total_cost, "predictedClass": predicted_class , "subclass": subclass}


def extract_largest_kwh_value(image):
    try:
        text = pytesseract.image_to_string(image, lang='eng')
        kwh_values = re.findall(r'(\d+)\s*kWh', text)
        kwh_numbers = [int(value) for value in kwh_values]
        return max(kwh_numbers) if kwh_numbers else None
    except Exception as e:
        return None


def calculate_cost(kwh, unit_cost):
    return round(float(kwh) * unit_cost, 2)

class_names = ['Air Conditioner', 'Dish Washer', 'Microwave', 'Refrigerator', 'Washing Machine']

def predict_appliance_class(image):
    image_resized = image.resize((224, 224))
    img_array = img_to_array(image_resized)
    img_batch = np.expand_dims(img_array, axis=0) 
    img_preprocessed = preprocess_input(img_batch) 
    
    # Make prediction
    predictions = model.predict(img_preprocessed)
    predicted_index = np.argmax(predictions, axis=1)[0] 
    # Map the predicted index to the corresponding class name
    predicted_class_name = class_names[predicted_index]
    return predicted_class_name

refrigerator_class_names = ['Compact', 'Bottom Freezer', 'Top Freezer']

async def predict_refrigerator_subclass(image):
    image_resized = image.resize((224, 224))
    img_array = img_to_array(image_resized)
    img_batch = np.expand_dims(img_array, axis=0)
    img_preprocessed = preprocess_input(img_batch)
    predictions = refrigerator_model.predict(img_preprocessed)
    predicted_index = np.argmax(predictions, axis=1)[0]
    predicted_class_name = refrigerator_class_names[predicted_index]
    return predicted_class_name

washing_machine_class_names = ['Top Load', 'Front Load']

async def predict_washing_machine_subclass(image):
    image_resized = image.resize((224, 224))
    img_array = img_to_array(image_resized)
    img_batch = np.expand_dims(img_array, axis=0)
    img_preprocessed = preprocess_input(img_batch)
    predictions = washing_machine_model.predict(img_preprocessed)
    predicted_index = np.argmax(predictions, axis=1)[0]
    predicted_class_name = washing_machine_class_names[predicted_index]
    return predicted_class_name


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")
