import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView, Button } from "react-native";
import InfoIcon from "../../svgs/infoIcon";
import styles from "../../styles/uploadCard.style";
import mainStyle from "../../styles/general.style";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { router } from "expo-router";

const Home = () => {

  const [applianceImage, setApplianceImage] = useState()
  const [stickerImage, setStickerImage] = useState()

  const pickApplianceImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setApplianceImage(result.assets[0])
    }
  };

  const pickStickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setStickerImage(result.assets[0])
    }
  };

  const resultPage = async () => {
    if (applianceImage && stickerImage) {
        router.navigate({
          pathname: 'Home/Result',
          params: {
            applianceImageURI: applianceImage.uri,
            applianceImageName: applianceImage.fileName,
            applianceImageMIME: applianceImage.mimeType,
            stickerImageURI: stickerImage.uri,
            stickerImageName: stickerImage.fileName,
            stickerImageMIME: stickerImage.mimeType
          }
        });
    } else {
      alert('Please select image first')
    }
    
  };

  return (
    <SafeAreaView style={mainStyle.container}>
        <View style={styles.container}>
            <View style={styles.miniContainer}>
                <View style={styles.uploadContainerBox}>
                    <View style={styles.uploadContainer}>
                        <Text style={styles.text}>Appliance Upload</Text>
                    </View>
                    <TouchableOpacity>
                      <InfoIcon />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={mainStyle.button} onPress={() => pickApplianceImage()}>
                    <Text style={mainStyle.text}>Upload</Text>
                </TouchableOpacity>     
            </View>
            <View style={styles.miniContainer}>
                <View style={styles.uploadContainerBox}>
                    <View style={styles.uploadContainer}>
                        <Text style={styles.text}>Energy Sticker Upload (optional)</Text>
                    </View>
                    <TouchableOpacity>
                      <InfoIcon />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={mainStyle.button} onPress={() => pickStickerImage()}>
                    <Text style={mainStyle.text}>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity 
          style={mainStyle.button}
          onPress={() => resultPage()}>
          <Text style={mainStyle.text}>Calculate</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );

}



export default Home;