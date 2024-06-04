import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100

    },
    icon: {
        resizeMode: 'contain',
        elevation: 10
    },
    text: {
        color: '#ffffff',
        fontFamily: 'InterBold',
        fontSize: screenWidth * 0.06,
        elevation: 10
    }
})

export default styles;