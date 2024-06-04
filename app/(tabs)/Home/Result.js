import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../../styles/result.style'
import mainStyle from '../../styles/general.style';
import { router } from 'expo-router';

const ResultInfo = () => {
    return (
        <SafeAreaView style={mainStyle.container}>
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
                    <Text style={styles.label}>Power{'\n'}Consumption:</Text>
                    <Text style={styles.value}>$100/Month</Text>
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
