import { StyleSheet, Dimensions } from 'react-native';
import { mainColor } from './StylesMainScreen';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    ///---------------------------------CategoryScreen----------------------------------------///
    Image: {
        height: '100%', width: '100%'
    },
    Recommend_Store_Boximage: {
        height: 100, width: 180,
        marginLeft: 10,
        marginVertical: 10,
    },
    ///--------------------------------FlashSaleScreen-----------------------------------------///
    FlashSale_Tag: {
        width: '100%',
        paddingVertical: 6,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
    },
    FlashSale_Product: {
        backgroundColor: '#FFFFFF',
        marginTop: 5,
    },
    FlashSale_ProductBox: {
        height: 130,
        width: '100%',
        borderColor: '#ECECEC',
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
    },
    FlashSale_ProductBox_Image: {
        height: 110,
        width: 110,
        borderColor: '#ECECEC',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlashSale_ProductBox_Icon: {
        height: 40,
        width: 40,
        backgroundColor: mainColor,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ///--------------------------------Recommend_Brand-----------------------------------------///
    Brand_ImageBackground: {
        height: 80,
        width: '100%',
    },
    Recommend_Brand_StoreBoxPro: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -80
    },
    Recommend_Brand_Pro: {
        height: 70,
        width: 70,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 35,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Recommend_Brand_Proimage: {
        height: '100%',
        width: '100%',
    },
    Recommend_Brand_ProButton: {
        height: 25,
        width: 100,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    Recommend_Brand_Product_Box: {
        width: '29%',
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: '100%',
        alignItems: 'center',
        paddingTop: 5,
    },
    Recommend_Brand_Product_Image: {
        height: 110,
        width: 110,
        backgroundColor: '#C4C4C4',
    },
    ///----------------------------------------------------------------------------------------------->>>> ExclusiveScreen
    Button_Bar: {
        width: '100%',
        height: 40,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderTopColor: '#ECECEC',
        borderBottomColor: '#ECECEC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    Button_Bar_BoxText: {
        paddingHorizontal: 9,
        borderRightColor: 'black',
        borderRightWidth: 1.2,
        height: 24,
    },
    Button_Bar_Icon: {
        marginRight: 10,
        height: 40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BackgroundLeft: {
        width: width * 0.25, height: '100%'
    },
    BackgroundRight: {
        width: width * 0.75,
        height: '100%',
        backgroundColor: '#fff',
        borderLeftColor: '#ECECEC',
        borderLeftWidth: 1,
    },
    BoxReset: {
        width: width * 1 / 2.8, height: 40,
        borderWidth: 1, borderColor: mainColor,
        marginHorizontal: 4
    },
    maxMinValue: {
        width: width * 0.3, height: 40,
        borderWidth: 1, borderRadius: 4
    },
    ///--------------------------------Recommend_Store-----------------------------------------///
    Header: {
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header_ImageBackground: {
        height: 180,
        width: '100%',
        marginBottom: -100,
    },
    Header_Text: {
        color: '#FFFFFF',
        fontSize: 25,
        marginBottom: 50,
    },
    Header_BoxDetail: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 5,
    },
    Header_DetailText: {
        marginTop: 5,
    },
    Store_Image: {
        width: '100%',
        height: 70,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    Store_Box: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        marginTop: -30,
        justifyContent: 'space-between',
    },
    Store_Pro: {
        height: 75,
        width: 75,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        marginLeft: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    Store_Name: {
        backgroundColor: mainColor,
        height: 30,
        width: 100,
        borderRadius: 5,
        justifyContent: 'center',
    },
    Store_NameText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    Store_Star: {
        flexDirection: 'row',
        marginTop: 5,
    },
    Store_BoxButton: {
        height: 35,
        width: 190,
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 10,
    },
    Store_Button: {
        justifyContent: 'center',
        width: 60,
        borderColor: mainColor,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
    },
    Store_BoxIcon: {
        alignItems: 'flex-end',
        height: 40,
        width: 125,
        marginRight: 10,
        marginTop: 10,
    },
    Store_Icon: {
        justifyContent: 'center',
        width: 60,
        flexDirection: 'row',
    },
    Store_Detail: {
        width: '95%',
        padding: 5,
        margin: 10,
    },
    Store_BoxText_Product: {
        backgroundColor: mainColor,
        width: 130,
        margin: 10,
    },
    Store_Text_Product: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    Store_Product: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    Store_ProductBox: {
        width: '30%',
        height: 160,
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    ///----------------------------------------------------------------------------///
    Box_Brand: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 50,
        width: '30%',
        borderColor: '#EAEAEA',
        borderWidth: 1,
        marginVertical: 5
    },
    root: {
        backgroundColor: "#ffffff",
        marginTop: 10,
    },
    container: {
        paddingLeft: 10,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: 2,
        backgroundColor: "#CCCCCC"
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 10
    },
    time: {
        fontSize: 11,
        color: "#808080",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },

})