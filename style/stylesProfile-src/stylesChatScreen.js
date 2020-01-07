import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        backgroundColor:'#FFFFFF',
        height: 50,
        flexDirection: 'row',
        width,
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Chat_Box: {
        backgroundColor:'#FFFFFF',
        height: 'auto',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginTop: 5,
    },
    Chat_Box_image: {
        height: 70,
        width: 70,
        marginTop: 10,
        borderRadius: 40,
    },
    Chat_Box_text:{
        marginLeft: 10, 
        marginTop: 10,
    },
    Chat_Box_icon:{
        flexDirection: 'row',
         marginTop:10,
    },
    Chat_icon:{
        marginLeft: 10,
    },
})