import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    ///----------------------------Setting_TopicStore-------------------------------///

    Seller_Setting_BoxTopic: {
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text: {
        fontSize: 18,
    },
    Seller_Up_Image: {
        width: '100%',
        height: 180,
        backgroundColor: '#FFFF',
    },
    Seller_Up_ImageA: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Seller_Up_Image_Box: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 130,
        height: 130,
        borderColor: '#0A55A6',
        borderWidth: 1,
    },
    Seller_Up_ProductDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#FFF',
        marginTop: 5,
        paddingLeft: 10,
        alignItems: 'center',
    },
    BottomSheet: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomSheet_Box: {
        borderRadius: 10,
        height: 50,
        width: 300,
        alignItems: 'flex-end',
        borderColor: '#EAEAEA',
        borderWidth: 1,
        marginTop: 10,
    },
    BottomSheet_BoxTotal: {
        borderColor: '#EAEAEA',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: 300,
        marginTop: 10,
    },
    BottomSheet_Botton: {
        marginVertical: 10,
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
    },
    BottomSheet_Botton_cancel: {
        width: 145,
        height: 50,
        borderColor: '#EAEAEA',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    BottomSheet_Botton_OK: {
        width: 145,
        height: 50,
        backgroundColor: '#0A55A6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    TotalrSheet_botton: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EAEAEA',
        borderWidth: 1,
    },
    Text_ling_Box: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    SelectSheet: {
        flex: 1,
        width: '100%',
        padding: 10,
    },
    SelectSheet_Box: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    SelectSheet_TextInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        borderColor: '#D4D4D4',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 10,
    },
    SizeSheet_Box: {
        justifyContent: 'space-around',
        width: '100%',
        height: 60,
        borderColor: '#CACACA',
        borderBottomWidth: 2,
        flexDirection: 'row',
        paddingTop: 10,
    },
    SizeSheet_Boxsize: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CACACA',
        borderWidth: 1,
        height: 30,
        width: 110,
    },
    Category: {
        marginLeft: 10,
        width: 70,
        height: 80,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CatagorySheet: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    CatagorySheet_Box: {
        borderRadius: 8,
        borderColor: '#EAEAEA',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
    },
    cate_Box: {
        height: 30,
        // width: 90,
        borderColor: '#D4D4D4',
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 15,
        marginTop: 10,
    },
    cate_BoxA: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    WeightSheet_Box: {
        justifyContent: 'center',
        width: '100%',
        height: 80,
        borderColor: '#CACACA',
        borderBottomWidth: 2,
        flexDirection: 'row',
        paddingTop: 5,
    },
    Edit_Box: {
        width: '100%', height: 50,
        backgroundColor: '#FFFFFF'
    },
    Up_Code_Number_BoxTextInput: {
        width: '90%', height: 40,
        borderWidth: 1, borderRadius: 5,
    },

    ///----------------------------Seller_Profile_Edit-------------------------------///
    Seller_SettingImage: {
        height: 100, width: 100,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 50,
        marginTop: -130,
    },
    Seller_SettingImageIconBox: {
        height: 30, width: 110,
        marginTop: -50,
    },
    Seller_SettingImageIconBox_Camara: {
        height: 30, width: 30,
        backgroundColor: '#C4C4C4',
        alignSelf: 'flex-end',
        borderRadius: 15,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Seller_SettingBoxText_Edit: {
        backgroundColor: '#222222',
        height: 30,
        width: 100,
        opacity: 0.1,
    },
    Seller_SettingImageEdit_BG: {
        width: '100%', height: 40,
        flexDirection: 'row-reverse',
        marginTop: -50,
    },
    Seller_SettingImageEdit_Text: {
        textAlign: 'right',
        fontSize: 16,
        marginRight: 10, color: '#FFFFFF'
    },
    Seller_Detail_TextInput: {
        borderColor: '#ECECEC',
        borderWidth: 1,
        width: '95%'
    },
    Seller_Detail_BoxUp_Image: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 130,
        height: 100,
        borderColor: '#0A55A6',
        borderWidth: 1,
    },

    ///----------------------------Seller_Return-------------------------------///

    Seller_Product_Before: {
        height: 50, width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderColor: '#EAEAEA', borderBottomWidth: 1,
    },
    Seller_Product_BeforeBoxFooter: {
        borderColor: '#EAEAEA',
        borderTopWidth: 1, alignItems: 'flex-end',
        justifyContent: 'center', padding: 10,
        height: 80
    },
    Seller_Return_DetailBox: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        height: 300,
        justifyContent: 'space-between'
    },
    Seller_Return_DetailBoxA: {
        width: '65%', height: '100%'
    },
    Seller_Return_DetailBoxB: {
        height: '100%', width: '30%',
        justifyContent: 'space-between'
    },
    Seller_Return_DetailBoxB_Image: {
        width: '100%', height: '30%',
    },
    Seller_Return_DetailB_Image: {
        height: '100%', width: '100%',
        borderColor: '#C8C8C8', borderRadius: 5, borderWidth: 1,
    },
    Seller_Return_Button: {
        height: 30, width: 100,
        backgroundColor: '#0A55A6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, marginTop: 10
    },
    ///----------------------------Treasury_store_Product-------------------------------///
    Treasury_store_Product: {
        justifyContent: 'space-between',
        padding: 10, borderColor: '#EFEFEF', borderWidth: 1
    },
    Treasury_store_Text: {
        width: 100, justifyContent: 'space-between'
    },

    ///----------------------------Seller_Topic-------------------------------///
    Seller_AdvertisementPacketBox: {
        borderColor: '#EAEAEA', borderWidth: 1,
        width: '90%', height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    //   ------------------>
    Seller_Advertisement_PacketTextInput: {
        flexDirection: 'row',
        width: '100%', borderColor: '#EAEAEA',
        borderRadius: 5, borderWidth: 1,
    },
    //   ------------------>
    Seller_Statistics: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        height: 20,
        marginRight: 10
    },
    //   ------------------>
    Up_product_Select: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 5
    },
    //   ------------------>

}) 