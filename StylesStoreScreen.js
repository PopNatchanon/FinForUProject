import { StyleSheet, Dimensions } from 'react-native';
import { Row } from 'reactstrap';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    ///------------------------------------------------------------------------------------------///

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
        height: 50,
        width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
    },
    Text_All: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    ///--------------------------------------------------------------------///
    StoreHead: {
        width,
        height: 132,
    },
    StoreHeadImage: {
        width,
        height: 132,
        flex: 1,
        flexDirection: 'row',
        // opacity: 0.5,
        // justifyContent: 'space-around',
    },
    StoreHeadFace: {
        width: 55,
        height: 55,
        borderRadius: 30,
        marginTop: 40,
        marginLeft: 19,
        // opacity: 1,
    },
    StoreHeadText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 40,
        marginLeft: 23,
        // opacity: 1,
    },
    StoreHeadTextOther: {
        fontSize: 12,
        marginLeft: 23,
        color: '#BEBDBD',
        // opacity: 1,
    },
    StoreHeadTextOther2: {
        fontSize: 12,
        marginLeft: 23,
        color: '#FFFFFF',
        // opacity: 1,
    },
})