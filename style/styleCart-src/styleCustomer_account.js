import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    Appbar: {
        width: '100%',
        height: 50,
        backgroundColor: '#0A55A6',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Account_Box: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        marginTop: 2,
        padding: 10,
    },
})