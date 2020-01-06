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
    StoreFeed_header: {
        width: width * 0.91,
        borderColor: '#ECECEC',
        borderBottomWidth: 0,
        borderWidth: 1,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    StoreFeed_Image: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    StoreFeed_Text_store: {
        textAlign: 'right',
        marginTop: 10,
        marginLeft: 10,

    },
    StoreFeed_Button_F_Box: {
        marginTop: 10,
        flexDirection:'row',
    },
    StoreFeed_Button_F: {
        backgroundColor: '#0A55A6',
        height: 30,
        width: 90,
        paddingTop: 5,
        borderRadius: 5,
    },
    StoreFeed_Text_F: {
        textAlign: 'center',
        color: '#FFFF'
    },
    StoreFeed: {
        backgroundColor: '#FFFFFF',
        // borderColor: '#ECECEC',
        // borderWidth: 1,
        marginTop: 4,
        padding: 8,
    },
    StoreFeedText: {
        width,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 9,
        // marginBottom:8,
    },
    StoreFeedBoxProduct: {
        width,
        marginTop: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    StoreFeedBox: {
        width: width * 0.91,
        // height: height * 0.5,
        borderColor: '#ECECEC',
        borderWidth: 1,
        // margin: 8,
        
    },
    StoreFeedImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        padding: 4,
        marginLeft:91,
    },
    StoreFeedComBox: {
        padding: 8,
        flex: 1,
        borderTopColor: '#ECECEC',
        borderTopWidth: 1,
    },
    StoreFeedComBox2: {
        padding: 8,
        flex: 1,
        borderTopColor: '#ECECEC',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    StoreFeedComBoxDetail: {
        fontSize: 12,
        marginLeft: 8,
    },
    StoreFeedComBoxTag: {
        fontSize: 10,
        color: '#0A55A6',
        marginLeft: 8,
    },
    StoreFeedComBoxText: {
        fontSize: 8,
        color: '#969BA0',
        marginLeft: 8,
    },
    StoreFeedComBoxIcon: {
        flexDirection: 'row',
    },
    StoreFeedComBoxIconText: {
        marginLeft: 2,
    }
})