import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/result.style'; // Import styles from a separate file

const ApplianceInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoBlock}>
                <Text style={styles.label}>Appliance:</Text>
                <Text style={styles.value}>Refrigerator</Text>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.label}>Brand:</Text>
                <Text style={styles.value}>Samsung</Text>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.label}>Type:</Text>
                <Text style={styles.value}>Bottom Freezer</Text>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.label}>Power Consumption:</Text>
                <Text style={styles.value}>$100/Month</Text>
            </View>
        </View>
    );
};

export default ApplianceInfo;
