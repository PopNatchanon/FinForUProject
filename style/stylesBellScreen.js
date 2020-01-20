import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    SafeAreaView: {
        flex: 1,
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

    Popular_Store: {
        width,
        borderColor: '#ECECEC',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        marginTop: 10,
    },
    Popular_StoreBox: {
        width: 150,
        height: 200,
        padding: 5,
        borderRadius: 8,
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 10,
    },
    Popular_StoreImage: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
        borderColor: '#ECECEC',
    },
    Popular_StoreTextBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Popular_StoreText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginTop: 6,
    },
    Popular_StoreText_bar: {
        fontSize: 11,
    },

    ///-------------------------------------------------------------------------///
    Pro_for_U: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    Pro_for_UText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginTop: 6,
    },
    Pro_for_UBox: {
        flexDirection: 'row',
        paddingRight: 40,
        padding: 10,
        marginTop: 10,
        height: 'auto',
        width: width - 20,
        backgroundColor: '#FFFF',
    },
    Pro_for_UImage: {
        height: 80,
        width: 100,
    },

    ///-------------------------------------------------------------------------///

    Update_buyText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginTop: 6,
    },
})