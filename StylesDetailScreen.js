import { StyleSheet, Dimensions } from 'react-native';
import { Row } from 'reactstrap';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Toolbar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
    },
    SafeAreaView: {
        flex: 1,
    },
    LOGO: {
        height: 40,
        width: 80,
        resizeMode: 'stretch',
    },
    TextInput: {
        width: 230,
        height: 40,
        fontSize: 15,
        textAlign: 'center',
    },
    Appbar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 50,
        width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
    },
    Icon_appbar: {
        marginTop: 5,
    },

    Text_All: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    ///--------------------------------------------------------------------------///

    Icon_Back: {
        borderRadius: 20,
        width: 30,
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: '#ECECEC',
    },
    Detail_Image: {
        marginTop: 5,
        backgroundColor: 'blue',
        width,
        height: 400,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Image_Box: {
        width: 400,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: 300,
        height: 300,
        resizeMode: 'stretch',
    },

    ///--------------------------------------------------------------------------///

    Price_Box: {
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
        height: 150,
    },
    Price_Text_Name: {
        fontSize: 18,
        margin: 5,
    },
    Price_Icon: {
        margin: 5,
    },
    Price_Icon_Box: {
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    Price_Text_Name_Box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Price_Text_Int: {
        marginTop: 5,
        fontSize: 16,
        color: '#0A55A6',
        marginLeft: 5,
    },
    Price_Text_IconBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Price_Text_IconBoxStar: {
        marginTop: 5,
        flexDirection: 'row',
        marginLeft: 5,
    },
    Price_IconStar: {
        paddingTop: 5,
        marginBottom: 5,
    },
    Price_Text_Icon: {
        fontSize: 20,
        marginLeft: 15,
    },
    Price_Text_RCM: {
        paddingTop: 5,
        fontSize: 16,
        marginLeft: 15,
        color: '#0A55A6',
    },
    ///--------------------------------------------------------------------------///

    Store: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
        height: 160,
        marginTop: 10,
        paddingTop: 10,
        flexDirection: 'column',
    },
    Store_Box: {
        height: 90,
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Store_Box2: {
        flexDirection: 'row',
    },
    Store_Image: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginLeft: 10,
    },
    Store_Text_Box: {
        height: 100,
        width: 50,
        marginLeft: 10.,
    },
    Store_Text: {
        fontSize: 12,
        width: 180,
        marginTop: 5,
    },
    Store_Buttom_Box: {
        height: 20,
        flexDirection: 'row',
    },
    Store_Text_Button: {
        borderRadius: 10,
        textAlign: 'center',
        height: 20,
        width: 60,
        marginRight: 10,
        borderColor: '#ECECEC',
        borderWidth: 1
    },
    Store_Bar_A: {
        height: 80,
        flexDirection: 'column',
    },
    Store_Bar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Store_Bar_int: {
        textAlign: 'center',
        fontSize: 20,
        color: '#0A55A6',
    },
    Store_Bar_Text: {
        fontSize: 15,
    },

    ///--------------------------------------------------------------------------///

    Coupon: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    Coupon_Text: {
        fontSize: 15,
        marginLeft: 15,
    },
    Coupon_Box: {
        height: 90,
        width,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    Coupon_Box_Pon: {
        borderColor: '#0A55A6',
        borderWidth: 1,
        marginLeft: 10,
        height: 30,
        width: 90,
        marginRight: 10,
        paddingTop: 5,
    },
    Coupon_Icon: {
        marginRight: 15,
    },
    Coupon_Box_Pon_Text: {
        fontSize: 15,
        textAlign: 'center',
    },

    ///--------------------------------------------------------------------------///

    Selector: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    Selector_Box: {
        flexDirection: 'row',
    },
    Selector_Icon: {
        marginLeft: 10,
    },

    ///--------------------------------------------------------------------------///

    Detail: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
        height: 150,
        marginTop: 10,
        flexDirection: 'column',
        paddingTop: 10,
    },
    Detail_Text_Box: {
        height: 120,
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Detail_Text: {
        height: 80,
        marginLeft: 5,
    },
    Detail_Box: {
        height: 25,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    Detail_Text_A: {
        fontSize: 15,
        color: '#0A55A6',
    },

    ///--------------------------------------------------------------------------///

    Score: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
        height: 80,
        marginTop: 10,
        flexDirection: 'column',
        paddingTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Reviews: {
        height: 50,
    },
    Reviews_Box:{
        paddingTop:10,
        width,
        height: 200,
        borderColor: '#ECECEC',
        borderWidth: 1,      
    },
    Reviews_Image: {
        height: 80,
        width:80,
    },
    Reviews_Image_Box:{
        width,
        height:100,   
    },

    ///--------------------------------------------------------------------------///

    Banner_Bar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        marginTop: 10,
    },
    Banner_Bar_image: {
        width,
        height: 70,
        resizeMode: 'stretch',
    },

    ///--------------------------------------------------------------------------///

    Same_Store: {
        width,
        height: 150,
        backgroundColor: 'green',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Similar_Product: {
        width,
        height: 150,
        backgroundColor: 'yellow',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Might_like: {
        width,
        height: 600,
        backgroundColor: 'orange',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///
})