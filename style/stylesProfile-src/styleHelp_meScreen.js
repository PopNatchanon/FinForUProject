import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        height: 50,
        flexDirection: 'row',
        width,
        backgroundColor: '#FFF',
    },
    Help_me_ImageBackground: {
        height: 180,
        width: '100%',
    },
    Help_me_Box_text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    Help_me_Text: {
        color: '#FFFF',
        fontSize: 20,
    },
    Help_me_Textinput: {
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    TextInput: {
        width: 230,
        height: 40,
        // fontSize: 15,
        textAlign: 'center',
    },
    Question_Box: {
        justifyContent: 'center',
        marginTop: 10,
        width: '100%',
        height: 40,
        backgroundColor: '#FFF',
    },
    Topic: {
        marginTop: 10,
        height,
        width: '100%',
        backgroundColor: '#FFF'
    },
    Topic_Box: {
        marginTop: 10,
        height: 50,
        width: 430,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
    },
    Topic_Box_icon: {
        color: '#0A55A6',
        marginLeft: 10,
        marginRight: 10,
    },

})