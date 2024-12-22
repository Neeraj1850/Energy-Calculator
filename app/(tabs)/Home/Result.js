import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../../styles/result.style'
import mainStyle from '../../styles/general.style';
import { router, useLocalSearchParams } from 'expo-router';

const ResultInfo = () => {
    const { 
            applianceImageURI,
            applianceImageName,
            applianceImageMIME,
            stickerImageURI,
            stickerImageName,
            stickerImageMIME
        } = useLocalSearchParams();

    const [loading, setloading] = useState(false)
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if(applianceImageURI && stickerImageURI){
            setloading(true)
            const formData = new FormData();
            formData.append('appliance_photo', {
                uri: applianceImageURI.replaceAll('%','%25'),
                name: applianceImageName,
                type: applianceImageMIME
            });
            formData.append('energy_sticker', {
                uri: stickerImageURI.replaceAll('%','%25'),
                name: stickerImageName,
                type: stickerImageMIME
            });
        
            try {
                const response = await fetch('http://10.0.0.176:8000/upload/',{
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json',
                    }
                })
                if(!response.ok){
                    throw new Error(`Error ${response.status} ${response.statusText}`)
                }
                const data = await response.json()
                setData(data)
            } catch (error) {
                alert('Fetch Error',error)
            } finally {
                setloading(false)
            }
        } else {
            alert('Failed to fetch Image')
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const alternativesPage = () => {
        if(data) {
            const kwh = (data.totalCost)/0.33
            router.navigate({
                pathname: 'Home/Alternatives',
                params: {
                    power: kwh,
                    appliance: data.predictedClass
                }
            })
        } else {
            alert ('Error fetching data')
        }
    }

    return (
        <SafeAreaView style={mainStyle.container}>
        {loading ? (<ActivityIndicator size= 'large' color='#d9d9d9' />) : (
        <><View style={styles.container}>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Appliance:</Text>
                <Text style={styles.value}>{data?.predictedClass}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Type:</Text>
                <Text style={styles.value}>{data?.subclass}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Power{'\n'}Consumption:</Text>
                <Text style={styles.value}>{`$${data?.totalCost}/Year`}</Text>
            </View>
        </View>
        {data && data.predictedClass !== "Microwave" && (
            <TouchableOpacity style={mainStyle.button}>
                <Text style={mainStyle.text} onPress={() => alternativesPage()}>Alternatives</Text>
            </TouchableOpacity>
        )}
        </>
            
    )}
        
    </SafeAreaView>
    );
};

export default ResultInfo;