import {StyleSheet}  from "react-native";

const styles = StyleSheet.create({
 
    container: {
        position: 'absolute',
        right: 0,       // Aligns the container to the right of the screen
        bottom: 0,      // Aligns the container to the bottom of the screen
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 20
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