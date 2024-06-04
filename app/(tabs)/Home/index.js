import React from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { router } from "expo-router";
import UploadCard from "../../components/UploadCard";
import mainStyle from "../../styles/general.style";

const Home = () => {
    return (
    <SafeAreaView style={mainStyle.container}>
          <UploadCard />
          <TouchableOpacity style={mainStyle.button} onPress={() => {
            router.navigate('Home/Result')
          }}>
            <Text style={mainStyle.text}>Calculate</Text>
          </TouchableOpacity>
        
    </SafeAreaView>
    );
}

export default Home;