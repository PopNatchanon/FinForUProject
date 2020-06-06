import { StyleSheet, Dimensions } from 'react-native';
import { mainColor } from '../StylesMainScreen';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    Appbar: {
        width: '100%',
        height: 50,
        backgroundColor: mainColor,
        flexDirection: 'row',
    },
    Account_Box: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        marginTop: 2,
        padding: 10,
    },
})