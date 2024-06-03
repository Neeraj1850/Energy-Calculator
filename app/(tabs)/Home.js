import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AppName from "../components/AppName";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import UploadCard from "../components/UploadCard";
import styles from "../styles/homePage.style";


const Home = () => {
    return (
    <SafeAreaView style={styles.container}>
          <UploadCard />
          <TouchableOpacity style={styles.button} onPress={() => {
            router.replace('./resultPage2')
          }}>
            <Text style={styles.text}>Calculate</Text>
          </TouchableOpacity>
        
    </SafeAreaView>
    );
}
  

export default Home;