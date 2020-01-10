import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 50,
        flexDirection: 'row',
        width: '100%',
        borderColor: '#E9E9E9',
        borderWidth: 1,
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
        height: 60,
        width: '100%',
        backgroundColor: '#FFF',
        marginTop: 5,
        padding: 10,
    },
    StoreMe_Up_ProductDetail_Text: {
        fontSize: 15,
        margin: 10,
    },
    StoreMe_Up_ProductDetail_TextMax: {
        fontSize: 12,
        marginLeft: 10,
        color: '#0A55A6',
        marginTop: 5,
        marginBottom: 5,
    },

})