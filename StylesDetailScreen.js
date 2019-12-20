import { StyleSheet, Dimensions } from 'react-native';
import { Row } from 'reactstrap';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Toolbar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
    },
    SafeAreaView: {
        flex: 1,
    },
    LOGO: {
        height: 40,
        width: 80,
        resizeMode: 'stretch',
    },
    TextInput: {
        width: 230,
        height: 40,
        fontSize: 15,
        textAlign: 'center',
    },
    Appbar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 50,
        width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
    },
    Icon_appbar: {
        marginTop: 5,
    },

    Text_All: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    ///--------------------------------------------------------------------------///

    Icon_Back: {
        borderRadius: 20,
        width: 30,
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: '#ECECEC',
    },
    Detail_Image: {
        marginTop: 5,
        backgroundColor: 'blue',
        width,
        height: 400,
        backgroundColor: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1,
    },
    Image: {
        backgroundColor: 'green',
        width,
        height: 300,
    },
    Price: {
        backgroundColor: 'pink',
        width,
        height: 100,
    },

    ///--------------------------------------------------------------------------///

    Store: {
        width,
        height: 150,
        backgroundColor: 'yellow',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Coupon: {
        width,
        height: 80,
        backgroundColor: 'orange',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Selector: {
        width,
        height: 80,
        backgroundColor: 'purple',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Detail: {
        width,
        height: 150,
        backgroundColor: 'blue',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Score: {
        width,
        height: 80,
        backgroundColor: 'green',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Reviews: {
        width,
        height: 150,
        backgroundColor: 'orange',
    },

    ///--------------------------------------------------------------------------///

    Banner_Bar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        marginTop: 10,
    },
    Banner_Bar_image: {
        width,
        height: 70,
        resizeMode: 'stretch',
    },

    ///--------------------------------------------------------------------------///

    Same_Store: {
        width,
        height: 150,
        backgroundColor: 'green',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Similar_Product: {
        width,
        height: 150,
        backgroundColor: 'yellow',
        marginTop: 10,
    },

    ///--------------------------------------------------------------------------///

    Might_like: {
        width,
        height: 600,
        backgroundColor: 'orange',
        marginTop: 10,
    },
    
    ///--------------------------------------------------------------------------///
})