import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    Logo_Box: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    Logo: {
        height: 80,
        width: 200,

    },

    ///--------------------------------------------------------------------------///

    Login_Box: {

        width,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Login_BoxA: {
        height: 300,
        width: 300,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    Login_Box_Text: {
        marginTop: 10,
        width: 100,
        height: 40,
    },
    Login_Box_Textlabel: {
        fontSize: 15,
        marginTop: 10,
    },
    Login_Box_Text_L: {
        marginTop: 5,
        textAlign: 'right',
        color: '#0A55A6',
    },
    Login_Box_Text_C: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Login_Box_Text_B: {
        marginTop: 10,
        width: 150,
        height: 50,
        backgroundColor: '#0A55A6',
        borderRadius: 10,
    },
    Login__Text: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    ///--------------------------------------------------------------------------///

    Register_Box: {
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,
        width,
        height: 200,
    },
    Register_Box_A: {
        height: 200,
        width: 300,
    },
    Register_Box_TextA: {
        marginTop: 5,
        textAlign: 'right',
        color: '#0A55A6',
    },
    Register_Box_Button: {
        width,
        flexDirection: 'row',
        justifyContent:'center',
        // backgroundColor:'#111111',
    },
    Register_Box_image: {
        marginLeft: 10,
        height: 40,
        width: 120,
        borderRadius: 5,
        resizeMode: 'stretch',
    },


})