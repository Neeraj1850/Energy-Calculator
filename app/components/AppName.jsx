import { Text, Image, View } from 'react-native';
import styles from '../styles/appName.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Svg, Path } from 'react-native-svg';

const AppName = () => {
    return(
    <SafeAreaView style={styles.container}>
        <Svg width="22" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" style= 'icon'>
            <Path d="M33 0L11 16.5H22L0 33L27.5 18.8571H16.5L33 0Z" fill="#FFA500"/>
        </Svg>
        <Text style={styles.text}>EcoWatt</Text>
    </SafeAreaView>
        
    )
}

export default AppName;