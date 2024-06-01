import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        display: 'flex', // React Native uses flex by default
        flexDirection: 'row', // Align children horizontally
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 40

    },
    icon: {
        height: screenWidth * 0.06, // Example: 9% of screen width
        width: screenWidth * 0.06, // Maintain square aspect ratio
        resizeMode: 'contain', // Ensures the SVG scales correctly
    },
    text: {
        color: '#ffffff',
        fontSize: screenWidth * 0.06, // Example: 6% of screen width
        fontWeight: '700',
    }
})

export default styles;