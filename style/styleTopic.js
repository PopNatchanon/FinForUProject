import { StyleSheet, Dimensions } from 'react-native';

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
        paddingBottom: 12,
        padding: 4,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
        marginTop: 5,
    },
    FlashSale_Product: {
        flex: 1,
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
        backgroundColor: '#0A55A6',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ///--------------------------------Recommend_Brand-----------------------------------------///

    Brand_ImageBackground: {
        height: 150,
        width: '100%',
        marginBottom: -130
    },
    Recommend_Brand_StoreBoxPro: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    Recommend_Brand_Pro: {
        height: 80,
        width: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Recommend_Brand_Proimage: {
        height: 60,
        width: 60,
    },
    Recommend_Brand_ProButton: {
        height: 30,
        width: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    Recommend_Brand_Product: {
        height: 170,
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 10,
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
        paddingHorizontal: 10,
        borderRightColor: 'black',
        borderRightWidth: 1,
        height: 20,
        marginTop: 10,
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
        borderWidth: 1, borderColor: '#0A55A6',
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
    },
    Header_DetailText: {
        marginTop: 5,
    },
    Store_Image: {
        width: '100%',
        height: 100,
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
        height: 90,
        width: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        marginLeft: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    Store_Name: {
        backgroundColor: '#0A55A6',
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
        height: 40,
        width: 200,
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 10,
    },
    Store_Button: {
        justifyContent: 'center',
        width: 90,
        borderColor: '#0A55A6',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
    },
    Store_BoxIcon: {
        height: 40,
        width: 200,
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 10,
    },
    Store_Icon: {
        justifyContent: 'center',
        width: 90,
        flexDirection: 'row',
    },
    Store_Detail: {
        width: '95%',
        padding: 5,
        margin: 10,
    },
    Store_BoxText_Product: {
        backgroundColor: '#0A55A6',
        width: 130,
        margin: 10,
    },
    Store_Text_Product: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    Store_Product: {
        width: '100%',
        height: 160,
        justifyContent: 'space-around',
        alignItems: 'center',
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

})