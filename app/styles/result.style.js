import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        width: '90%', // Dynamic width for better responsiveness
        alignSelf: 'center',
    },
    infoBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%', // Full width of the container
    },
    label: {
        fontSize: 15,
        fontWeight: '300',
        color: '#000',
    },
    value: {
        fontSize: 15,
        fontWeight: '300',
        color: '#000',
        textAlign: 'right',
    },
});

export default styles;
