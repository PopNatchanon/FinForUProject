import { StyleSheet, Dimensions } from 'react-native';

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
        width: '100%',
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
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
    },
    Store_Box: {
        height: 90,
        width,
        flexDirection: 'row',
    },
    Store_Box2: {
        width,
        flexDirection: 'row',
        marginLeft: 5,
    },
    Store_Image: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginLeft: 10,
    },
    Store_Text_Box: {
        marginLeft: 10,

    },
    Store_Text: {
        fontSize: 12,
        width: 180,
        marginTop: 5,
    },
    Store_Buttom_Box: {
        height: 20,
        width: 60,
        marginLeft: width - 340,
        marginTop: 10,

    },
    Store_Text_Button: {
        borderRadius: 10,
        textAlign: 'center',
        height: 20,
        width: 80,
        borderColor: '#ECECEC',
        borderWidth: 1,
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
    Store_Box: {
        height: 100,
        width,
        flexDirection: 'row',
    },
    Store_Image: {
        height: 50,
        width: 50,
        borderRadius: 30,
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
    Detail_Catagory: {
        width,
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Detail_Catagory_TextTop: {
        paddingTop: 10,
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 30,
    },
    Detail_Catagory_TextBox: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        width: 300,
        height: 'auto'
    },
    Detail_Catagory_TextBoxA: {
        marginLeft: 30,
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
        padding: 6,
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
    Score_icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Score_iconA: {
        marginTop: 5,
        flexDirection: 'row',
    },
    Score_iconB: {
        marginLeft: 10,
    },
    Score_icontext: {
        fontSize: 15,
        color: '#0A55A6',
    },

    ///--------------------------------------------------------------------------///

    Reviews: {
        height: 100,
    },
    Reviews_Box: {
        paddingTop: 10,
        height: 'auto',
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Reviews_Image: {
        height: 80,
        width: 80,
        marginLeft: 10,
    },
    Reviews_Image_Box: {
        height: 100,
        flexDirection: 'row',
        marginTop: 10,
    },
    ///--------------------------------------------------------------------------///
    Comment_R: {
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
    },
    Comment_R_Image: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 5,
    },
    Comment_R_Text: {
        height: 'auto',
        width: 250,
        marginTop: 10,
        marginLeft: 5,
        flexDirection: 'column',
    },
    Comment_R_Iconstar: {
        marginTop: 5,
        flexDirection: 'row',
        marginLeft: 5,
        marginBottom: 10,
    },
    Comment_Image_A: {
        flexDirection: 'row',
        height: 80,
    },
    Comment_text_day: {
        fontSize: 9,
        color: '#0A55A6',
    },
    Comment_text_iconheart: {
        marginTop: 10,
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
        borderColor: '#ECECEC',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
    },
    Same_StoreTextBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Same_StoreText: {
        fontSize: 16,
        // fontWeight: 'bold',
        marginLeft: 8,
        marginTop: 6,
    },
    Same_StoreBox: {
        width: 106,
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 10,
    },
    Same_StoreImage: {
        width: 99,
        height: 98,
        resizeMode: 'contain',
        // borderColor: '#ECECEC',
        borderRadius: 5,
    },
    Same_StoreImageName: {
        fontSize: 10,
        marginTop: 6,
        marginLeft: 6,
    },
    Same_StoreIconBoxI: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Same_StoreIcon: {
        paddingTop: 4,
        marginBottom: 4,
        marginLeft: 6,
    },
    Same_StoreIconStar: {
        paddingTop: 5,
        marginBottom: 5,
    },
    Same_StoreIconBox: {
        flexDirection: 'row',
    },
    Same_StoreIconBoxStar: {
        flexDirection: 'row',
        marginLeft: 6,
    },
    Same_StoreImagePrice: {
        fontSize: 8,
        marginTop: 6,
        marginLeft: 6,
        color: '#0A55A6',
    },

    ///--------------------------------------------------------------------------///

    Similar_Product: {
        width,
        height: 150,
        backgroundColor: 'yellow',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    PopularProduct: {
        backgroundColor: '#FFFFFF',
        // borderColor: '#ECECEC',
        // borderWidth: 1,
        marginTop: 8,
        padding: 8,
    },
    PopularProductText: {
        width,
        fontSize: 16,
        // fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 9,
        // marginBottom:8,
    },
    PopularProductBoxProduct: {
        width,
        marginTop: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    PopularProductBox: {
        width: width * 0.442,
        borderColor: '#ECECEC',
        borderWidth: 1,
        margin: 8,

    },
    PopularProductImage: {
        width: '100%',
        height: height * 0.3,
        resizeMode: 'stretch',
        padding: 4,
    },
    PopularProductImageName: {
        fontSize: 12,
        marginTop: 12,
        marginLeft: 8,
    },
    PopularProductImagePrice: {
        fontSize: 10,
        marginTop: 12,
        marginLeft: 8,
        color: '#0A55A6',
    },
    PopularProductIconBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PopularProductIcon: {
        marginBottom: 5,
        marginRight: 8,
    },
    PopularProductIconStar: {
        paddingTop: 8,
        marginBottom: 5,
    },
    PopularProductIconBoxI: {
        flexDirection: 'row',
    },
    PopularProductIconBoxStar: {
        flexDirection: 'row',
        marginLeft: 8,
    },

    ///--------------------------------------------------------------------------///

    Buy_bar: {
        height: 60,
        width,
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-evenly',
        borderColor: '#ECECEC',
        borderWidth: 1,
        // backgroundColor:'blue',
    },
    // Buy_bar_Iconchat: {
    //     borderColor: '#ECECEC',
    //     borderWidth: 1,
    // },
    // Buy_bar_Iconstore: {
    //     borderColor: '#ECECEC',
    //     borderWidth: 1,
    // },
    Buy_bar_Iconshop: {
        width: 120,
        height: 40,
        flexDirection: 'row',
        borderColor: '#C4C4C4',
        backgroundColor: '#E9E9E9',
        borderWidth: 1,
        paddingTop: 10,
        borderRadius: 4,
    },
    Buy_bar_IconBuy: {
        backgroundColor: '#0A55A6',
        width: 110,
        height: 40,
        paddingTop: 10,
        borderRadius: 4,
        borderColor: '#C4C4C4',
        borderWidth: 1,
    },
    Buy_bar_IconBuytext: {
        textAlign: 'center',
        color: '#FFF',
    },

    ///--------------------------------------------------------------------------///
})