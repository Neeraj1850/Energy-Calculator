import React from 'react';
import { ScrollView, Text, View } from "react-native";
import styles from "../styles/textBox.style";

const HelpPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.titleText}>Help Guide: Getting the Most from Ecowatt</Text>
                <Text style={styles.contentText}>
                    To ensure Ecowatt provides you with the most accurate energy consumption estimates, please follow these
                    guidelines when using our app.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.titleText}>Uploading Your Photos</Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>High Clarity Images:</Text> Capture clear, high-resolution photos of your appliances to facilitate precise analysis. Ensure good lighting and focus to improve recognition accuracy.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Energy Stickers:</Text> While uploading the energy sticker on an appliance is optional, providing this can yield exact consumption data. If the sticker is not uploaded, the estimate will be based on the closest match available in our database.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.titleText}>Understanding Your Results</Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Precise vs. Estimated Data:</Text> If you upload energy stickers, you'll receive specific consumption data for your appliances. Without stickers, the app will provide an estimate based on similar models in our database.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.titleText}>Benefits of Using Ecowatt</Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Detailed Insights:</Text> Learn about your energy usage and how you can improve efficiency.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Cost-Effective Solutions:</Text> Discover more energy-efficient appliances that can save you money.
                </Text>
                <Text style={styles.contentText}>
                    <Text style={styles.boldText}>Eco-Friendly Choices:</Text> Make informed decisions that benefit the environment by reducing your energy consumption.
                </Text>
            </View>
        </ScrollView>
    );
}

export default HelpPage;
