import React from 'react';
import { ScrollView, Text, View } from "react-native";
import styles from "../styles/textBox.style";
import mainStyle from '../styles/general.style';

const EcowattFrame = () => {
    return (
        <ScrollView contentContainerStyle={mainStyle.scrollView}>
            <View style={styles.section}>
                <Text style={styles.titleText}>Welcome to Ecowatt!</Text>
                <Text style={styles.contentText}>
                    Ecowatt is a pioneering mobile application designed to estimate your home's energy consumption with
                    cutting-edge machine learning technology. By simply uploading pictures of your appliances and utility bills, 
                    Ecowatt provides you with an accurate assessment of your energy usage.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.titleText}>How it works</Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Capture and Upload:</Text> 
                    Take photos of your electrical appliances and your most recent utility bill.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Analysis:</Text> 
                    Our advanced machine learning model analyzes the images to estimate the energy consumption 
                    of each appliance and your overall household usage.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Insights:</Text> 
                    Get detailed insights into your energy consumption patterns and discover 
                    ways to reduce your energy bills and carbon footprint.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.titleText}>Benefits</Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Personalized Assessments:</Text> 
                    Tailored insights based on your actual appliances and usage.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Cost Savings:</Text> 
                    Identify high-energy-consuming appliances and get suggestions 
                    for energy-efficient practices.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Environmental Impact:</Text> 
                    Understand and minimize your household’s environmental impact.
                </Text>
            </View>
        </ScrollView>
    );
}

export default EcowattFrame;
