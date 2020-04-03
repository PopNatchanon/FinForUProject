import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    Appbar: {
        backgroundColor: '#0A55A6',
        height: 50,
        width,
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
        marginTop: 5,
        margin: 10,
    },
    Text_appbar: {
        color: '#FFFF',
        marginTop: 6,
        fontSize: 15,
    },
    ///--------------------------------------------------------------------------///
    Product_Cart: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        // height: 200,
        width,
    },
    ///--------------------------------------------------------------------------///
    Bar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width,
    },
    Bar_Code: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
    },
    Bar_Code_Box: {
        width: 200,
        height: 40,
        borderColor: '#ECECEC',
        borderWidth: 1,
    },
    Bar_Code_Box_Text: {
        width: 60,
        height: 35,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#0A55A6',
    },
    Bar_Code_Text: {
        textAlign: 'center',
        color: '#FFFF',
    },
    Bar_Buy: {
        height: 40,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Bar_Buy_select: {
        // height: 40,
        flexDirection: 'row',
    },
    Boxselect: {
        borderColor: 'black',
        borderWidth: 1,
        width: 15,
        height: 15,
    },
    Bar_Buy_price: {
        // height: 60,
        flexDirection: 'row',
        // backgroundColor:'#785213'
    },
    BOX_Buy: {
        width: 80,
        height: 35,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#0A55A6',
    },
    BOX_Buy_Text: {
        textAlign: 'center',
        color: '#FFFF',
    },
}) 