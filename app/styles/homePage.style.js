import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4F9C80',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: 40
    },
    button: {
      backgroundColor: '#D9D9D9',
      borderRadius: 20,
      alignSelf: 'center',
      elevation: 10,
      marginBottom: 130
    },
    text: {
      padding: 10,
      fontFamily: 'InterSemiBold',
      textAlign: 'center',
      fontSize: 12,
      alignSelf: 'center'
    }
});

export default styles;