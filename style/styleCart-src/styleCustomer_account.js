
import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Account_Box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        height: 'auto',
        marginTop: 2,
        padding: 5,
    },
    Account_Box_Text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        height: 80,
        marginTop: 2,
        padding: 5,
    },
    TextInput: {
        height: 'auto',
        textAlign: 'center',
    },
    Text: {
        marginTop: 15,
        fontSize: 15,
    },
    Account_main_Box: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 60,
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    Button_Bar: {
        height: 50,
        width: '100%',
        backgroundColor: '#0A55A6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    Button_Bar_Text: {
        color: '#FFF',
        fontSize: 15,
    },
})