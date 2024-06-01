import {StyleSheet}  from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 359,
        alignItems: 'flex-end',
        marginBottom: 20
    },

    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    icon: {
        resizeMode: 'contain',
        marginBottom: 10
    },

    text: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '400',
    }
})

export default styles;