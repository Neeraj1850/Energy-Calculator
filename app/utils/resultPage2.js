import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/result2.style'; // Importing styles

const ApplianceInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Appliance:</Text>
                <Text style={styles.value}>Refrigerator</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Brand:</Text>
                <Text style={styles.value}>Samsung</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Type:</Text>
                <Text style={styles.value}>Bottom Freezer</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Model:</Text>
                <Text style={styles.value}>#ABCDEF</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>$2000</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>Power Consumption:</Text>
                <Text style={styles.value}>$100/Month</Text>
            </View>
        </View>
    );
};

export default ApplianceInfo;
