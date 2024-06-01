import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppName from "./components/AppName";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import UploadCard from "./components/UploadCard";
import { StyleSheet } from "react-native";
import StatusBar from "./components/StatusBar";

const Home = () => {
    return (
    <SafeAreaView style={styles.safeArea}>
        <Stack.Screen options={{
                headerTitle: "",
                 headerShown: false  // 
        }}/>
        <AppName style={styles.child} />
        <UploadCard style={styles.child} />
        <TouchableOpacity style={[styles.button, styles.child]}>
            <Text style={styles.text}>Calculate</Text>
        </TouchableOpacity>
        <StatusBar />
    </SafeAreaView>
    );
}
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#4F9C80',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    child: {
      marginVertical: 30,  // Add vertical margins to each child
    },
    button: {
      backgroundColor: '#D9D9D9',
      borderRadius: 20,
      alignSelf: 'center',
    },
    text: {
      padding: 10,
      textAlign: 'center',
      fontSize: 12,
      alignSelf: 'center'
    }
  });
export default Home;