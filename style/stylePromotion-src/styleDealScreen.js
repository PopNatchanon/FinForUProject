import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    SafeAreaView: {
        flex: 1,
        backgroundColor: '#E9E9E9',
    },
    Appbar: {
        backgroundColor: '#0A55A6',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
    },
    Icon_appbar_Text: {
        flexDirection: 'row',

    },
    Icon_appbar: {
        color: '#FFFF',
        marginLeft: 10,
    },
    Text_appbar: {
        color: '#FFFF',
        marginTop: 6,
        fontSize: 15,
    },
    child: {
        marginTop: 10,
        height: 150,
        width,
    },
    childSlide: {
        width,
        height: 150,
    },
    slide: {
        height: 150,
    },
    Button_Bar: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
    },
    Button_Bar_Box: {
        width: width * (1 / 5),
        alignItems: 'center',
        alignContent: 'center',
    },
    Button_Bar_BoxICON: {
        height: 25,
        width: 25,
        backgroundColor: '#C4C4C4',
        borderRadius: 40,
    },
    Button_Bar_BoxText: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
    },
    BoxText_Row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Deal_Box: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
    },
    Text_Head: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 3,
    },
    Text_Totel: {
        margin: 10,
        color: '#FFFFFF',
    },
    BoxText_T: {
        width: 150,
        height: 30,
        marginTop: 10,
    },
    Deal_Calendar: {
        marginTop: 10,
        width: '100%',
        height: 200,
        backgroundColor: '#B5F5D1',
    },
    Deal_Calendar_Box: {
        width: '100%',
        height: 150,
        padding: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    Deal_Calendar_BoxN: {
        width: 100,
        height: 130,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    Deal_Today_Box: {
        height: 110,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    Deal_Today_BoxImage: {
        justifyContent: 'center',
        height: 90,
        flexDirection: 'row',
        padding: 10,
    },
    Deal_Today_Coinimage: {
        height: 70,
        width: 200,
        borderRadius: 5,
    },

    ///--------------------------------------------------------------------------------///

    FlashSale: {
        width,
        borderColor: '#ECECEC',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
    },
    FlashSaleTextBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    FlashSaleText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 6,
    },
    FlashSaleTextEnd: {
        fontSize: 10,
        color: '#0A55A6',
        marginRight: 8,
        marginTop: 10,
    },
    FlashSaleBox: {
        width: 106,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 10,
    },
    FlashSaleImage: {
        width: 99,
        height: 98,
        resizeMode: 'contain',
        // borderColor: '#ECECEC',
        borderRadius: 5,
    },
    FlashSaleImageName: {
        fontSize: 10,
        marginTop: 6,
        marginLeft: 6,
    },
    FlashSaleIconBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    FlashSaleIcon: {
        paddingTop: 4,
        marginBottom: 4,
        marginRight: 6,
    },
    FlashSaleIconStar: {
        paddingTop: 5,
        marginBottom: 5,
    },
    FlashSaleIconBoxI: {
        flexDirection: 'row',
    },
    FlashSaleIconBoxStar: {
        flexDirection: 'row',
        marginLeft: 6,
    },
    FlashSaleImagePrice: {
        fontSize: 8,
        marginTop: 6,
        marginLeft: 6,
        color: '#0A55A6',
    },

    ///--------------------------------------------------------------------------------///
    Deal_Exclusive: {
        height: 'auto',
        width: '100%',
        justifyContent: 'space-around',
        padding: 10,
        flexDirection: 'row',
    },
    Deal_Exclusive_Box: {
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        height: 160,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Deal_Exclusive_BoxImageIcon: {
        height: 160,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Deal_Exclusive_Text: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    Deal_Exclusive_Image: {
        height: 120,
        width: 120,
    },
    Coupon_Store_Box: {
        height: 90,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    Second_Store: {
        height: 300,
        width: '100%',
        alignItems: 'center',
    },
    Second_Store_SlideA: {
        height: 160,
        width: '90%',
        marginTop: 10,
    },
    Second_Store_SlideB: {
        height: 120,
        width: '90%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Second_Store_SlideB_Box: {
        height: '100%',
        width: '48.5%',
    },
    Second_Store_Slide_BoxText: {
        height: '20%',
        width: '100%',
        backgroundColor: '#C4C4C4',
    },
    Second_Store_Slide_image: {
        width: '100%',
        height: '80%',
    },
    ProDed_Store: {
        height: 160,
        width: 120,
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    ProDed_New_Store: {
        height: 'auto',
        width: '100%',
    },
    ProDed_New_Store_Box: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    ProDed_New_Store_Boximage: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 100,
        width: '20%',
        marginRight: 10,
        alignItems: 'center',
        paddingTop: 10,
    },
    ProDed_New_Store_Button: {
        backgroundColor: '#C4C4C4',
        height: 20,
        width: 60,
        marginTop: 5,
        borderRadius: 8,
    },

    ///--------------------------------WorthFinScreen-----------------------------------------///

    Fin_sale_Box: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#ffff',
        marginTop: 10,
    },
    Fin_sale_BoxHead: {
        height: 12,
        width: '100%',
        alignItems: 'flex-end',
        marginTop: -10,
        paddingRight: 10,
    },
    Fin_sale_BoxTextEnd: {
        fontSize: 12,
        color: '#0A55A6',
    },
    Fin_sale_BoxProduct: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    Store_Sale: {
        height: 230,
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    Store_Sale_Image: {
        width: '100%',
        height: '100%',
    },
    Store_Sale_Box: {
        height: '100%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Store_Sale_BoxA: {
        width: '62%',
        justifyContent: 'space-between',
    },
    Store_Sale_BoxA_Carousel: {
        backgroundColor: 'black',
        height: '60%',
    },
    Store_Sale_BoxA_Boximage: {
        height: '38%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Store_Sale_BoxA_image: {
        width: '49%',
        height: '100%'
    },
    Store_Sale_BoxB_Boximage: {
        width: '37%',
        justifyContent: 'space-between',
    },
    Store_Sale_BoxB_image: {
        height: '49%'
    },
    Head_Image_Text: {
        fontSize: 12,
    },

    ///--------------------------------Brand_RCM_Screen-----------------------------------------///

    Brand_RCM_Store: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    Brand_ImageBackground: {
        height: 150,
        width: '100%',
        marginBottom: -130
    },
    Brand_RCM_StoreBoxPro: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    Brand_RCM_Pro: {
        height: 80,
        width: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Brand_RCM_Proimage: {
        height: 60,
        width: 60,
    },
    Brand_RCM_ProButton: {
        height: 30,
        width: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    Brand_RCM_Product: {
        height: 170,
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 10,
    },
    Brand_RCM_Product_Box: {
        width: '29%',
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: '100%',
        alignItems: 'center',
        paddingTop: 5,
    },
    Brand_RCM_Product_Image: {
        height: 110,
        width: 110,
        backgroundColor: '#C4C4C4',
    },
    Brand_RCM_Product_Text: {
        fontSize: 11,
    },

    ///--------------------------------FlashSaleScreen-----------------------------------------///

    Time_FlashSale: {
        height: 40,
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    Time_FlashSale_Text: {
        color: '#0A55A6',
        fontSize: 20,
    },
    Time_FlashSale_TimeBox: {
        height: 30,
        width: 30,
        backgroundColor: '#222222',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 5,
    },
    Time_FlashSale_TimeText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    Time_FlashSale_Tag: {
        height: 50,
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 5,
    },
    Time_FlashSale_TagCate: {
        height: 50,
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        paddingTop: 10,
    },
    
})