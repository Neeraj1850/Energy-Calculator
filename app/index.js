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
    
          <AppName />
          <UploadCard />
          <TouchableOpacity style={styles.button}>
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
      alignItems: 'center',
      gap: 30
    },
    button: {
      backgroundColor: '#D9D9D9',
      borderRadius: 20,
      alignSelf: 'center',
      elevation: 10,
      marginBottom: 130
    },
    text: {
      padding: 10,
      fontFamily: 'InterSemiBold',
      textAlign: 'center',
      fontSize: 12,
      alignSelf: 'center'
    }
  });
export default Home;