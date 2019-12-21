import { StyleSheet, Dimensions } from 'react-native';

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
        backgroundColor: 'transparent',
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
        opacity: 0.9,
        flex: 1,
        // justifyContent: 'space-around',
    },
    StoreHeadBox: {
        flexDirection: 'row',
    },
    StoreHeadFace: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 60,
        marginLeft: 19,
    },
    StoreHeadText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 70,
        marginLeft: 23,
    },
    StoreHeadTextOther: {
        fontSize: 10,
        marginLeft: 23,
        color: '#BEBDBD',
    },
    StoreHeadTextOther2: {
        fontSize: 10,
        marginLeft: 23,
        color: '#FFFFFF',
    },
    StoreHeadButtom: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 30,
        width: 70,
        height: 20,
        marginLeft: 30,
        marginTop: 6,
    },
    StoreHeadButtomText: {
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    StoreHeadDetails: {
        width,
        flex: 1,
        paddingTop: 10,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderBottomWidth: 1,
        paddingBottom: 14,
    },
    StoreHeadDetailsText1: {
        fontSize: 11,
        marginLeft: 20,
        marginTop: 8,
    },
    StoreHeadDetailsText2_1: {
        fontSize: 11,
        marginLeft: 30,
        marginTop: 8,
    },
    StoreHeadDetailsText2_2: {
        fontSize: 11,
        color: '#0A55A6',
        marginLeft: 30,
        marginTop: 8,
    },
    StoreHeadDetailsText2_3: {
        fontSize: 9,
        color: '#A5A5A5',
        marginLeft: 6,
        marginTop: 8,
    },
    ///-------------------------------------------------------///
    Menubar: {
        width,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginTop: 10,
    },
    ///---------------------------------------------------///

    Banner: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        width,
    },
    BannerBox: {
        borderWidth: 1,
    },
    BannerSlide: {
        width,
        height: 138,
    },
})