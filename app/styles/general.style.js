import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#4F9C80',
        justifyContent: 'center',
        width: '100%'
    },
    scrollView: {
        padding: 30,
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#4F9C80'
    },
    horizontalScrollView: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 30,
      justifyContent: 'flex-start',
      gap: 20,
      backgroundColor: '#4F9C80'
    },
    button: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        alignSelf: 'center',
        elevation: 10
      },
      text: {
        padding: 10,
        fontFamily: 'InterSemiBold',
        textAlign: 'center',
        fontSize: 12,
        alignSelf: 'center'
      }
})

export default mainStyle;