import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    Toolbar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
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
        paddingRight: 10,
    },
    Login_Box_Text: {
        marginTop: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingLeft: 'auto',
        paddingRight: 'auto',
        width: '100%',
        height: 40,
    },
    Login_Box_Textlabel: {
        marginLeft: 4,
        marginTop: 10,
    },
    Login_Box_Text_L: {
        marginTop: 5,
        textAlign: 'right',
        color: '#0A55A6',
    },
    Login_Box_Text_C: {
        width: 300,
        marginBottom: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    Login_Box_Text_B: {
        width: 120,
        height: 40,
        backgroundColor: '#0A55A6',
        borderRadius: 10,
    },
    Login__Text: {
        color: '#FFF',
        textAlign: 'center',
    },
    ///--------------------------------------------------------------------------///
    Register_Box: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    Register_Box_A: {
        // height: 250,
        width: 300,
        // backgroundColor:'black',
    },
    Register_Box_TextA: {
        textAlign: 'right',
        color: '#0A55A6',
    },
    Register_Box_Button: {
        marginTop: 10,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Register_Box_image: {
        marginLeft: 10,
        height: 40,
        width: 120,
        borderRadius: 5,
        resizeMode: 'stretch',
    },
    ///--------------------------------------------------------------------------///
    Register_OTP_Box_A: {
        height: 300,
        width: 300,
    },
    ///--------------------------------------------------------------------------///
    RegisterScreen_Text: {
        fontSize: 11,
        textAlign: 'center',
        color: '#FF0000',
    },
    RegisterScreen_CheckBox: {
        flexDirection: 'row',
        width: 300,
        marginTop: 8,
    },
    RegisterScreen_Check_Box: {
        width: 230,
        marginTop: 5,
    },
    RegisterScreen_Box_Login: {
        // height: 350,
        width: 300,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 10,
    },
    DateBox: {
        marginTop: 14,
        marginLeft: 10,
        padding: 2
    },
    DateBoxBody: {
        height: 30,
        width: 80,
        borderWidth: 1,
        marginHorizontal: 2,
        backgroundColor: '#fff'
    },
    DataGenderBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 14
    },
    ///--------------------------------------------------------------------------///
    Countdownstyle: {
        marginTop: -40,
        width: 70,
        backgroundColor: '#0A55A6',
        borderRadius: 10,
        marginLeft: '75%',
        marginBottom: 20,
    },
    CountdownstyleSubmit: {
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 2,
        color: '#FFF',
    },
    eyestyle: {
        marginTop: -48,
        backgroundColor: '#F3F3F3',
        paddingBottom: 2,
        padding: 10,
        marginLeft: '86%',
    },
})