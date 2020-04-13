import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    ///--------------------------------------DealScreen---------------------------------------///
    Icon_appbar: {
        color: '#FFFF',
        marginLeft: 10,
    },
    Text_appbar: {
        color: '#FFFF',
        marginTop: 5,
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
    Box_Icon: {
        flexDirection: 'row',
        marginTop: 5,
        margin: 10,
    },
    Button_Bar: {
        marginBottom: -20,
        width: '100%',
        flexDirection: 'row',
    },
    Button_Bar_Box: {
        width: width * (1 / 5),
        alignItems: 'center',
        alignContent: 'center',
    },
    Button_Bar_BoxICON: {
        height: 50,
        width: 50,
        backgroundColor: '#C4C4C4',
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 7,
    },
    Button_Bar_BoxText: {
        textAlign: 'center',
    },
    BoxText_Row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Text_Head: {
        color: '#FFFFFF',
        marginTop: 3,
        marginLeft: 8,
    },
    Text_EndB: {
        margin: 10,
        color: '#111111',
    },
    Text_EndW: {
        margin: 10,
        color: '#FFFFFF',
    },
    BoxText_T: {
        width: 140,
        height: 30,
        borderBottomEndRadius: 180,
    },
    Deal_Calendar_Box: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    Deal_Calendar_BoxN: {
        width: 80,
        height: 110,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    Deal_Today_Box: {
        height: 110,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    Deal_Today_BoxImage: {
        padding: 10,
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    Deal_Today_Coinimage: {
        height: 70,
        width: 200,
        borderRadius: 5,
    },
    Deal_Exclusive: {
        height: 'auto',
        width: '100%',
        justifyContent: 'space-around',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    Deal_Exclusive_Box: {
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        width: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    Deal_Exclusive_BoxImageIcon: {
        height: height * 0.20,
        width: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    Deal_Exclusive_Image: {
        height: 130,
        width: 120,
    },
    Second_Store: {
        width: '100%',
        alignItems: 'center',
    },
    Second_Store_SlideA: {
        height: 160,
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
        padding: 6,
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
        backgroundColor: '#0A55A6',
        height: 20,
        width: 60,
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    Deal_For_you: {
        height: 'auto',
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Deal_For_youBox: {
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        width: width * 0.3,
        marginTop: 10,
    },
    ///--------------------------------CampaignScreen-----------------------------------------///
    CampaignBody: {
        marginTop: 10,
        width: width * 0.96,
        height: 200,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        backgroundColor: 'white',
    },
    CampaignBody_BoxImage: {
        width: '100%',
        height: 140,
    },
    CampaignBody_Image: {
        width: '100%',
        height: '100%',
    },
    CampaignBody_Box: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: 60,
    },
    CampaignBody_BoxText: {
        padding: 4,
        width: '64%',
    },
    CampaignBody_Icon_Button: {
        flexDirection: 'row',
        padding: 5,
        width: '36%',
        // marginLeft: 50,
    },
    CampaignBody_Icon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0b912',
        height: 30,
        width: 30,
        marginTop: 3,
    },
    CampaignBody_Button: {
        backgroundColor: '#0A55A6',
        width: 80,
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: 2,
        height: 35,
    },
    CampaignBody_ButtonText: {
        justifyContent: 'center',
        color: '#FFFFFF',
        margin: 5,
    },
    ///--------------------------------The_BestFinScreen-----------------------------------------///
    Fin_sale_BoxHead: {
        height: 12,
        width: '100%',
        alignItems: 'flex-end',
        marginTop: -15,
        paddingRight: 10,
        marginBottom: 8,
    },
    Fin_sale_BoxProduct: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    Store_Sale: {
        height: 230,
        width: '100%',
        marginTop: 20,
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
    ///--------------------------------Installment_payScreen-----------------------------------------///
    Head_BoxImage: {
        height: 120,
        marginTop: 10,
    },
    Head_Image: {
        width: '100%',
        height: '100%',
    },
    Head_BoxText: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    ///--------------------------------Detail_Campaign-----------------------------------------///
    Head_BoxImageDetail: {
        width: '100%',
        height: 250,
        marginTop: 5,
    },
    Cate_Campaign: {
        height: 100,
        width: width * (1 / 4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    Cate_CampaignBoxImage: {
        borderColor: '#EAEAEA',
        borderWidth: 1,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    Cate_CampaignImage: {
        height: 50,
        width: 50,
    },
    Cate_CampaignBox: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    Cate_CampaignBoxA: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Code_New_year: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
    },
    New_year_New: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingBottom: 10
    },
    New_year_NewBoxText_Head: {
        backgroundColor: '#000000',
        height: 80,
        width: '100%',
        marginTop: 10,
        padding: 10,
    },
    New_year_NewProduct: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: -20,
    },
    New_year_NewProduct_Box: {
        marginTop: 10,
        width: width * 0.3,
        borderColor: '#ECECEC',
        borderWidth: 1,
        backgroundColor: '#FFFF'
    },
    ///--------------------------------รูปแบบคูปอง-----------------------------------------///
    Coupon_BOX: {
        marginLeft: 10,
        height: 70,
        width: 170,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    Coupon_BOX2: {
        margin: 4,
        height: 70,
        width: 170,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    Coupon_BOX_A: {
        height: 68,
        width: 70,
        alignItems: 'center',
        paddingTop: 5,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    Coupon_BOX_A2: {
        height: 68,
        width: 68,
        alignItems: 'center',
        paddingTop: 5,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    Coupon_BOX_B: {
        height: 30,
        width: 50,
        backgroundColor: '#597B91',
        alignItems: 'center',
        borderRadius: 5
    },
    Coupon_BOX_Text: {
        backgroundColor: '#FFFFFF',
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 5
    }
})