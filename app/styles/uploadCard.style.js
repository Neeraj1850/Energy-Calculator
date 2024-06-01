import { StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7EC48D',
        borderRadius: 10,
        height: 349,
        width: 321,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        alignItems: 'center'
    },
    uploadContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        color: 'black',
        height: 32,
        width: 250,
        justifyContent: 'center'
    },
    text : {
        color: 'black',
        fontSize: 14,
        textAlign: 'left',
        paddingLeft: 8
    },
    uploadButton : {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        justifyContent: 'center', // Centers children vertically inside the button
        alignItems: 'center', // Centers children horizontally inside the button
        height: 25,
        width: 50,
        alignSelf: 'center'
    },
    textButton: {
        color: 'black', // Ensures text color is black
        fontSize: 12,
        textAlign: 'center' // Ensures text is centered, might be redundant due to alignItems in parent
    }
})

export default styles