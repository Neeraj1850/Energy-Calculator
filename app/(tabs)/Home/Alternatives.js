import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../../styles/result.style';
import mainStyle from '../../styles/general.style';
import { useLocalSearchParams } from 'expo-router';

const AlternativesInfo = () => {
    const { power, appliance } = useLocalSearchParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);  

    const fetchData = async () => {
        if (power && appliance) {
            setLoading(true);
            const body = {
                kwh_value: power,
                appliance_type: appliance
            };
            try {
                const response = await fetch('http://10.0.0.176:8000/alternatives/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(body),
                });
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                alert('Fetch Error', error.message);
            } finally {
                setLoading(false);
            }
        } else {
            alert('Error', 'Failed to fetch params');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);  

    return (
        <ScrollView contentContainerStyle={mainStyle.scrollView}>
            {loading ? (
                <ActivityIndicator size= 'large' color='#d9d9d9' />
            ) : (
                data.map((appliance, index) => (
                    <Card
                        key={index}
                        type={appliance.model_num}  
                        brand={appliance.brand_name}
                        powerConsumption={(appliance.aec * 0.33).toFixed(2)}
                    />
                ))
            )}
        </ScrollView>
    );
};

const Card = ({ type, brand, powerConsumption }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Model Number:</Text>
                <Text style={styles.value}>{type}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Brand:</Text>
                <Text style={styles.value}>{brand}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Power{'\n'}Consumption:</Text>
                <Text style={styles.value}>{powerConsumption} $/Yr</Text>
            </View>
        </View>
    );
};

export default AlternativesInfo;
