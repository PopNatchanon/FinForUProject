import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        height: 50,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFF'
    },

    ///-----------------------------------ChatScreen-------------------------------------------///

    Chat_Box: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    Chat_Box_text: {
        marginLeft: 10,
        marginTop: 10,
    },
    Chat_Box_icon: {
        flexDirection: 'row',
        marginTop: 10,
    },
    Chat_icon: {
        marginLeft: 10,
    },

    ///-----------------------------------Follow_storeScreen-----------------------------------///

    Follow_store_Box: {
        backgroundColor: '#FFF',
        height: 'auto',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    Follow_store_Box_image: {
        height: 70,
        width: 70,
        marginTop: 10,
        borderRadius: 40,
    },
    Follow_store_Box_text: {
        marginLeft: 10,
        marginTop: 10,
    },
    Follow_store_Button: {
        height: 30,
        width: 100,
        backgroundColor: '#0A55A6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    Might_like_Store: {
        marginTop: 10,
        height: 'auto',
        width: '100%',
        backgroundColor: '#FFFF'
    },
    Might_like_Store_Box: {
        marginBottom: 10,
        height: 'auto',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Might_like_Store_BoxP: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width: 430,
    },
    Might_like_Store_BoxPro: {
        height: 'auto',
        width: 95,
        borderColor: '#ECECEC',
        borderWidth: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Might_like_Store_BoxImage: {
        height: 100,
        width: 90,
    },

    ///-----------------------------------Review_me-----------------------------------///

    Review_me: {
        marginBottom: 5,
        marginTop: 5,
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        padding: 10,
    },
    Review_me_Box: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Review_me_Box_head: {
        height: 30,
        width: 60,
        backgroundColor: '#0A55A6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    Review_me_Box_image: {
        width: '100%',
        height: 100,
        backgroundColor: '#E9E9E9',
        paddingTop: 20,
        padding: 10,
    },
    Review_me_Box_imageA: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Review_me_image: {
        height: 60,
        width: 60,
    },

    ///-----------------------------------Help_me-----------------------------------///

    Help_me_ImageBackground: {
        height: 180,
        width: '100%',
    },
    Help_me_Box_text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
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

    ///-----------------------------------Total_Order-----------------------------------///
    Button_bar: {
        height: 40,
        marginTop: 5,
        backgroundColor:'#FFFFFF',
    },
    Order_BoxStore: {
        paddingHorizontal: 10,
        borderColor: '#EAEAEA',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: 5,
    },
    Order_StorePro: {
        height: 40,
        width: 40,
        backgroundColor: '#A2A2A2',
        borderRadius: 20,
    },
    Order_Box_Button: {
        marginTop: 5,
        flexDirection: 'row',
    },
    Order_Button: {
        padding:10,
        height: 30,
        borderRadius: 5,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Order_Product: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    Order_Product_Pro: {
        height: 80,
        width: 80,
        backgroundColor: '#C4C4C4',
        margin: 10,
    },
    Order_Box_price: {
        borderColor: '#EAEAEA',
        borderTopWidth: 1,
        padding: 10,
    },
    Order_Box_priceText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    ///-----------------------------------Return_products-----------------------------------///

    Up_Image_Box: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 100,
        height: 80,
        borderColor: '#0A55A6',
        borderWidth: 1,
    },

})