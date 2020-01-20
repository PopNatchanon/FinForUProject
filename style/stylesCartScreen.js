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
        height: 200,
        width,

    },

    ///--------------------------------------------------------------------------///

    Bar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 110,
        width,

    },
    Bar_Code: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,

    },
    Bar_Code_Box: {
        width: 200,
        height: 30,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingTop: 5,
    },
    Bar_Code_Box_Text: {
        width: 60,
        height: 35,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 5,
        backgroundColor: '#0A55A6',
    },
    Bar_Code_Text: {
        textAlign: 'center',
        color: '#FFFF',
    },
    Bar_Buy: {
        height: 60,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    Bar_Buy_select: {
        height: 40,
        flexDirection: 'row',
    },
    Boxselect: {
        borderColor: 'black',
        borderWidth: 1,
        width: 15,
        height: 15,
        marginTop: 5,

    },
    Bar_Buy_price: {
        height: 40,
        flexDirection: 'row',
    },
    BOX_Buy: {
        width: 80,
        height: 35,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 5,
        backgroundColor: '#0A55A6',
    },
    BOX_Buy_Text: {
        textAlign: 'center',
        color: '#FFFF',
    },
}) 