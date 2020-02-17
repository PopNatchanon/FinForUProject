import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    StoreMe_Setting_BoxTopic: {
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        padding:5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text: {
        fontSize: 18,
    },
    StoreMe_Up_Image: {
        width: '100%',
        height: 180,
        backgroundColor: '#FFFF',
    },
    StoreMe_Up_ImageA: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    StoreMe_Up_Image_Box: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 130,
        height: 130,
        borderColor: '#0A55A6',
        borderWidth: 1,
    },
    StoreMe_Up_ProductDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height:45,
        backgroundColor: '#FFF',
        marginTop: 5,
        paddingLeft:10,
        alignItems:'center',
    },
    BottomSheet: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomSheet_Box: {
        borderRadius:10,
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
        marginVertical:10,
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
        height: 40,
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
        width: 90,
        borderColor: '#D4D4D4',
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 15,
        marginTop: 10,
    },
    cate_BoxA: {
        width: '100%',
        flexDirection: 'row',
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



})