import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        padding: 20,
        gap: 10,
        justifyContent: 'space-around',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    }
});

export default styles;