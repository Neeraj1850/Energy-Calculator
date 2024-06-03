import {StyleSheet}  from "react-native";

const styles = StyleSheet.create({
 
    container: {
        flexDirection: 'row',
    },

    button: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 10,

    },

    icon: {
        resizeMode: 'contain',
        marginBottom: 8,
        elevation: 10
    },

    text: {
        color: 'white',
        fontFamily: 'InterRegular',
        fontSize: 12,
        elevation: 10
    }
})

export default styles;