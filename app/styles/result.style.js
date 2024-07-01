import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        width: '90%', 
        alignSelf: 'center',
        elevation: 20
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center'
    },
    label: {
        fontSize: 15,
        fontFamily: 'InterRegular',
        color: '#000',
        flex: 1, 
        flexWrap: 'wrap',
    },
    value: {
        fontSize: 15,
        flex: 1, 
        fontFamily: 'InterRegular',
        color: '#000',
        textAlign: 'right',
        flexWrap: 'wrap', 
    }
});

export default styles;