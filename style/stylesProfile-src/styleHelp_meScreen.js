import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        height: 50,
        flexDirection: 'row',
        width,
        backgroundColor: '#FFF',
    },
    TextInput: {
        backgroundColor:'#FFFF',
        width: 230,
        height: 40,
        // fontSize: 15,
        textAlign: 'center',
      },

})