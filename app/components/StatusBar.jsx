import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import ApplianceIcon from '../images/ApplianceIcon.png';
import BillIcon from '../images/BillIcon.png';
import HelpIcon from '../images/HelpIcon.png';
import AboutIcon from '../images/AboutIcon.png';
import styles from "../styles/statusbar.style";

const StatusBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={ApplianceIcon}/>
                <Text style={styles.text}>Appliance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={BillIcon}/>
                <Text style={styles.text}>Utility Bill</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={HelpIcon}/>
                <Text style={styles.text}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={AboutIcon}/>
                <Text style={styles.text}>About</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default StatusBar;