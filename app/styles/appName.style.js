import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Align children horizontally
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        resizeMode: 'contain', // Ensures the SVG scales correctly
        elevation: 10
    },
    text: {
        color: '#ffffff',
        fontFamily: 'InterBold',
        fontSize: screenWidth * 0.06, // Example: 6% of screen width
        elevation: 10
    }
})

export default styles;