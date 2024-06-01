import { Text, Image, View } from 'react-native';
import Icon from '../images/Icon.png';
import styles from '../styles/appName.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppName = () => {
    return(
    <SafeAreaView style={styles.container}>
        <Image style={styles.icon} source={Icon} />
        <Text style={styles.text}>EcoWatt</Text>
    </SafeAreaView>
        
    )
}

export default AppName;