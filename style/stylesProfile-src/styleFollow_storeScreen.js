import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        height: 50,
        flexDirection: 'row',
        width,
        backgroundColor: '#FFF',
    },
    Follow_store_Box: {
        backgroundColor: '#FFF',
        height: 'auto',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    Follow_store_Box_image: {
        height: 70,
        width: 70,
        marginTop: 10,
        borderRadius: 40,
    },
    Follow_store_Box_text: {
        marginLeft: 10,
        marginTop: 10,
    },
    Follow_store_Button: {
        height: 30,
        width: 100,
        backgroundColor: '#0A55A6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    Might_like_Store: {
        marginTop:10,
        height: 'auto',
        width: '100%',
        backgroundColor: '#FFFF'
    },
    Might_like_Store_Box: {
        marginBottom: 10,
        height: 'auto',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Might_like_Store_BoxP: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#ECECEC',
        borderWidth: 1,
        width: 430,
    },
    Might_like_Store_BoxPro: {
        height: 'auto',
        width: 95,
        borderColor: '#ECECEC',
        borderWidth: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Might_like_Store_BoxImage:{
        height: 100,
        width: 90,
    },
})