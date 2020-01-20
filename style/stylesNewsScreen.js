import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    ///------------------------------------------------------------------------------------------///

    SafeAreaView: {
        flex: 1,
    },
    SafeAreaView_A: {
        backgroundColor: '#E9E9E9',
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
        marginLeft: 20,
    },

    ///-------------------------------------------------------------------------///

    Button_Bar: {
        backgroundColor: '#0A55A6',
        height: 50,
        width,
        flexDirection: 'row',
    },

    ///-------------------------------------------------------------------------///

    Toolbar: {
        backgroundColor: '#FFFFFF',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
    },

    ///-------------------------------------------------------------------------///

    header_News: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    header_image: {
        height: 300,
        width: width - 50,
    },
    header_icon_Box: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: width - 20,
        marginTop: 5,
    },
    header_icon: {
        marginLeft: 5,
    },
    header_Box: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        // height: 370,
        width: width - 20,
        backgroundColor: '#ffff',
    },
    body_Box: {
        padding: 10,
        height: 120,
        width: width - 20,
        backgroundColor: '#FFF',
        marginTop: 10,
    },
    body_Box_A: {
        flexDirection: 'row',
        width,
    },
    body_image: {
        height: 100,
        width: width - 250,
    },
    body_Text: {
        width: 200,
        marginLeft: 10,
        fontFamily: 'SukhumvitSet-Text'
    },
})