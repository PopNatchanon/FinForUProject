import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar_New_account: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        paddingTop: 10,
    },
    Appbar_Order: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        paddingTop: 10,
    },
    Account: {
        width: '100%',
        height: 100,
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: 10,
    },
    Account_Box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Order: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        marginTop: 10,
    },
    Order_Head: {
        width: '100%',
        height: 60,
        padding: 5,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        flexDirection: 'row',
    },
    Order_Head_store: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 10,
    },
    Order_product: {
        borderColor: '#E9E9E9',
        borderWidth: 1,
        flexDirection: 'row',
        height: 130,
        width: '100%',
        padding: 10,
        justifyContent: 'space-around',
    },
    Order_product_Box: {
        marginRight: 10,
        height: 100,
        width: 100,
        borderColor:'#ECECEC',
        borderWidth:1,
        padding:10
    },
    Order_product_Boxprice: {
        height: 100,
        width: 100,
        justifyContent: 'flex-end',
    },
    Order_product_BoxText: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    Option_payment: {
        width: '100%',
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Option_payment_Boxprice: {
        width: '100%',
        backgroundColor: '#FFFF',
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Payment_Box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        height: 50,
        borderColor: '#EAEAEA',
        borderWidth: 1,
        padding: 10,
    },
    Payment_Box_Text: {
        flexDirection: 'row',
    },
   
})