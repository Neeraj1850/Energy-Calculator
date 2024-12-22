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
                kwh_value: parseInt(power),
                appliance_type: appliance.toString()
            };
            try {
                const response = await fetch('http://10.0.0.176:8000/fetch-data/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',  
                    },
                    body: JSON.stringify(body)
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

    if (loading) {
        return (
            <View style={mainStyle.container}>
                <ActivityIndicator size="large" color="#d9d9d9" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={mainStyle.scrollView}>
            {data.map((appliance, index) => (
                <Card
                    key={index}
                    type={appliance.model_number}
                    brand={appliance.brand_name}
                    powerConsumption={
                        (appliance.type === "Washing Machine" || appliance.type === "Dishwasher") ? 
                        appliance.annual_energy_use_kwh_year: appliance.annual_energy_use_kwh_yr}
                    upc={appliance.upc}
                />
            ))}
        </ScrollView>
    );
};

const Card = ({ type, brand, powerConsumption, upc }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Model:</Text>
                <Text style={styles.value}>{type}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Brand:</Text>
                <Text style={styles.value}>{brand}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>UPC:</Text>
                <Text style={styles.value}>{upc || 'Unknown'}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Power{'\n'}Consumption:</Text>
                <Text style={styles.value}>${powerConsumption}/Year</Text>
            </View>
        </View>
    );
};

export default AlternativesInfo;
