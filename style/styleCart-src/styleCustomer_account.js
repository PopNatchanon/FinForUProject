
import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Account_Box: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#FFF',
        height: 'auto',
        marginTop: 5,
        padding: 5,
    },
    TextInput: {
        textAlign: 'center',
    },
    Text:{
     marginTop:15,
     fontSize:15,    },
})