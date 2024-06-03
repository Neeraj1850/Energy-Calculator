import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#4F9C80',
        padding: 20,
        gap: 20
    },
    section: {
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'column',
        padding: 20,
        gap: 10
    },
    titleText: {
        color: '#000',
        fontFamily: "InterSemiBold",
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    contentText: {
        color: '#000',
        fontFamily: "InterRegular",
    },
    boldText: {
        fontFamily: "InterSemiBold"
    },
});

export default styles;
