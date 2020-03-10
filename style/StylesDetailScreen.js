import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    Icon_appbar: {
        marginTop: 5,
    },
    ///--------------------------------Detail_Image------------------------------------------///
    ImageSlide: {
        width: 50,
        height: 20,
        borderColor: '#ECECEC',
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        marginTop: -30,
        marginBottom: -2,
        marginLeft: width - 60
    },
    Detail_Image: {
        marginTop: 5,
        width,
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
    BottomTitle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingBottom: 6,
    },
    Price_Box: {
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
    },
    Price_Text_Name: {
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
        marginLeft: 12,
        color: '#0A55A6',
    },
    ///--------------------------------------------------------------------------///
    Store_Box1: {
        width,
        flexDirection: 'row',
        marginTop: 8,
    },
    Store_Box2: {
        width,
        flexDirection: 'row',
        marginLeft: 5,
    },
    Store_Text_Box: {
        marginLeft: 10,
    },
    Store_Text: {
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
        marginTop: 8,
        flexDirection: 'column',
    },
    Store_Bar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Store_Bar_int: {
        textAlign: 'center',
        color: '#0A55A6',
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
        marginTop: 10,
        paddingVertical: 8,
    },
    Coupon_Text: {
        marginLeft: 15,
    },
    Coupon_Box: {
        width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Coupon_Icon: {
        marginRight: 15,
    },
    Coupon_Box_Pon: {
        borderRadius: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#0A55A6',
        backgroundColor: '#C0DBF9'
    },
    ///--------------------------------------------------------------------------///
    Detail_Text: {
        padding: 6,
    },
    Detail_Box: {
        borderTopColor: '#ECECEC',
        borderTopWidth: 1,
        height: 40,
        flexDirection: 'row',
    },
    Detail_Text_A: {
        color: '#0A55A6',
    },
    ///-------------------------------------------------------------------------///
    Score_iconB: {
        marginLeft: 4,
        marginRight: 8,
        marginTop: 10,
    },
    ///--------------------------------------------------------------------------///
    Reviews_Image: {
        height: 80,
        width: 80,
        marginLeft: 10,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius:5,
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
        color: '#0A55A6',
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
    PopularProduct: {
        backgroundColor: '#FFFFFF',
        marginTop: 8,
        padding: 8,
    },
    PopularProductText: {
        width,
        fontSize: 16,
        marginTop: 12,
        marginLeft: 9,
    },
    PopularProductBoxProduct: {
        width,
        marginTop: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        height: 50,
        backgroundColor: '#fff',
        width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Buy_bar_Iconshop: {
        width: 100,
        height: 40,
        flexDirection: 'row',
        borderColor: '#C4C4C4',
        backgroundColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 4,
    },
    Buy_bar_IconBuy: {
        backgroundColor: '#0A55A6',
        width: 100,
        height: 40,
        borderRadius: 4,
        borderColor: '#0A55A6',
        borderWidth: 1,
    },
    Buy_bar_IconBuytext: {
        color: '#FFF',
    },
    ///--------------------------------------------------------------------------///
    Selector_BottomSheet_BoxImage: {
        height: 80, width: 80,
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
    },
    Selector_BottomSheet_itemCount: {
        width: 50, height: 40,
        borderColor: '#ECECEC', borderWidth: 1,
    },
    Selector_BottomSheet_itemCount_TextInput: {
        width: '40%', height: 40, borderColor: '#ECECEC', borderWidth: 1
    },
    Selector_BottomSheet_BoxButtom: {
        flexDirection: 'row', margin: 10,
        justifyContent: 'space-between', width: '100%'
    },
})