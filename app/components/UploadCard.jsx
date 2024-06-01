import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/uploadCard.style";

const UploadCard = () => {
    return(
        <View style={styles.container}>
            <View style={styles.uploadContainer}>
               <Text style={styles.text}>Appliance Upload</Text>
            </View>
            <TouchableOpacity style={styles.uploadButton}>
                <Text style={styles.textButton}>Upload</Text>
            </TouchableOpacity>
            <View style={styles.uploadContainer}>
               <Text style={styles.text}>Energy Sticker Upload (optional)</Text>
            </View>
            <TouchableOpacity style={styles.uploadButton}>
                <Text style={styles.textButton}>Upload</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UploadCard;