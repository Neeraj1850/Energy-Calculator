import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../../styles/result.style'
import mainStyle from '../../styles/general.style';
import { router, useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const ResultInfo = () => {

    const {appliance, price} = useLocalSearchParams()

    console.log(appliance, price)

    //const [loading, setLoading] = useState(true);
    //const [applianceData, setApplianceData] = useState(null);
    //const { uri, name, type } = useLocalSearchParams();

    // async function fetchData() {

    //     const formData = new FormData();
    //     formData.append('appliance_photo', {
    //         uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%40anonymous%2Fapp-cafa0c31-fada-4505-80f8-7af3d8daf5cf/ImagePicker/f62aa7cc-9b55-4801-bd73-1684f9f64ecd.webp",
    //         name: 'upload.webp',
    //         type: 'image/webp'
    //     });
        
    //     try {
    //         console.log('Sending FormData', formData._parts[0]);
    //         const response = await fetch('http://10.0.0.176:8000/upload/', {
    //             method: 'POST',
    //             body: formData,
    //             headers: {
    //               'Accept': 'application/json',
    //             },
    //         })
    //         console.log(response)
    //         if (!response.ok) {
    //             throw new Error(`HTTP status ${response.status}`);
    //         }
    //         const responseData = await response.json();
    //         console.log('responseData',responseData)
    //         console.log('Fetch successful:', responseData);
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //         alert('Failed to fetch data');
    //     }
    // }

    
    // fetchData();

    // if (loading) {
    //     return (
    //         <ActivityIndicator style={{
    //             flex: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             backgroundColor: '#4F9C80'
    //         }} size="large" color="#D9D9D9"/>
    //     );
    // }
    return (
        <SafeAreaView style={mainStyle.container}>
            <View style={styles.container}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Appliance:</Text>
                    <Text style={styles.value}>{appliance}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Brand:</Text>
                    <Text style={styles.value}>{NaN}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Type:</Text>
                    <Text style={styles.value}>{NaN}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Power{'\n'}Consumption:</Text>
                    <Text style={styles.value}>{price}</Text>
                </View>
            </View>
            <TouchableOpacity style={mainStyle.button}>
                <Text style={mainStyle.text} onPress={() => {
                    router.navigate('./Alternatives')
                }}>Alternatives</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

export default ResultInfo;
