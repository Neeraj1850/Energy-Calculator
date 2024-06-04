import { Text, TouchableOpacity, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import styles from "../styles/uploadCard.style";
import mainStyle from "../styles/general.style";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const ImagePickerExample = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }};

const UploadCard = () => {
    return(
        <View style={styles.container}>
            <View style={styles.miniContainer}>
                <View style={styles.uploadContainerBox}>
                    <View style={styles.uploadContainer}>
                        <Text style={styles.text}>Appliance Upload</Text>
                    </View>
                    <TouchableOpacity>
                        <Svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.miniIcon}>
                            <Path d="M1.25 1C1.25 0.734784 1.3817 0.48043 1.61612 0.292893C1.85054 0.105357 2.16848 0 2.5 0C2.83152 0 3.14946 0.105357 3.38388 0.292893C3.6183 0.48043 3.75 0.734784 3.75 1C3.75 1.26522 3.6183 1.51957 3.38388 1.70711C3.14946 1.89464 2.83152 2 2.5 2C2.16848 2 1.85054 1.89464 1.61612 1.70711C1.3817 1.51957 1.25 1.26522 1.25 1ZM0 4C0 3.63125 0.372396 3.33333 0.833333 3.33333H2.5C2.96094 3.33333 3.33333 3.63125 3.33333 4V8.66667H4.16667C4.6276 8.66667 5 8.96458 5 9.33333C5 9.70208 4.6276 10 4.16667 10H0.833333C0.372396 10 0 9.70208 0 9.33333C0 8.96458 0.372396 8.66667 0.833333 8.66667H1.66667V4.66667H0.833333C0.372396 4.66667 0 4.36875 0 4Z" fill="white"/>
                        </Svg>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={mainStyle.button}>
                    <Text style={mainStyle.text}>Upload</Text>
                </TouchableOpacity>     
            </View>
            <View style={styles.miniContainer}>
                <View style={styles.uploadContainerBox}>
                    <View style={styles.uploadContainer}>
                        <Text style={styles.text}>Energy Sticker Upload (optional)</Text>
                    </View>
                    <TouchableOpacity>
                        <Svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.miniIcon}>
                            <Path d="M1.25 1C1.25 0.734784 1.3817 0.48043 1.61612 0.292893C1.85054 0.105357 2.16848 0 2.5 0C2.83152 0 3.14946 0.105357 3.38388 0.292893C3.6183 0.48043 3.75 0.734784 3.75 1C3.75 1.26522 3.6183 1.51957 3.38388 1.70711C3.14946 1.89464 2.83152 2 2.5 2C2.16848 2 1.85054 1.89464 1.61612 1.70711C1.3817 1.51957 1.25 1.26522 1.25 1ZM0 4C0 3.63125 0.372396 3.33333 0.833333 3.33333H2.5C2.96094 3.33333 3.33333 3.63125 3.33333 4V8.66667H4.16667C4.6276 8.66667 5 8.96458 5 9.33333C5 9.70208 4.6276 10 4.16667 10H0.833333C0.372396 10 0 9.70208 0 9.33333C0 8.96458 0.372396 8.66667 0.833333 8.66667H1.66667V4.66667H0.833333C0.372396 4.66667 0 4.36875 0 4Z" fill="white"/>
                        </Svg>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={mainStyle.button}>
                    <Text style={mainStyle.text}>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UploadCard;