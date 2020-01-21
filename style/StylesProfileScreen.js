import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        backgroundColor: '#FFFFFF',
        height: 50,
        flexDirection: 'row',
        width: '100%',
        borderColor: '#ECECEC',
        borderWidth: 1,
        justifyContent: 'space-between',
    },
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
    ///-------------------------------------------------------------------------------///
    HeadbarImage: {
        width,
        height: 150,
        opacity: 0.9,
    },
    HeadbarA: {
        marginTop: -150,
        flexDirection: 'row',
    },
    HeadbarBox1: {
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    HeadbarBox1Sub: {
        width: 80,
        backgroundColor: '#0A55A6',
        marginTop: 8,
        padding: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    HeadbarBox1SubText: {
        color: '#ECECEC',
        fontSize: 14,
    },
    HeadbarBoxImage: {
        backgroundColor: '#ECECEC',
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 10,
        marginLeft: 30,
    },
    HeadbarText: {
        color: '#FFFFFF',
        marginTop: 20,
        marginLeft: 60,
        fontSize: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    HeadbarBox2: {
        color: '#FFFFFF',
        width: 200,
        height: 40,
        marginTop: 20,
        marginLeft: 60,
        backgroundColor: '#0A55A6',
        borderRadius: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    HeadbarBox2Text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ///-----------------------------------------------------------------------------///
    Menubar: {
        marginTop: '4%',
        padding: 4,
        flexDirection: 'row',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    MenubarText1: {
        fontSize: 16,
        fontFamily: 'SukhumvitSet-Bold',
        marginTop: 4,
        marginLeft: 8,
        marginBottom: 4,
    },
    MenubarText2: {
        fontFamily: 'SukhumvitSet-Text',
        color: '#BABABA',
        marginTop: 2,
    },
    ///---------------------------------------------------------------------------///
    MenubarSub: {
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        marginTop: 20,
    },
    MenubarSubLine1: {
        flexDirection: 'row',
    },
    MenubarSubLine1Image: {
        width: 50,
        height: 50,
    },
    MenubarSubLine1Name: {
        fontSize: 14,
        marginTop: 8,
        fontFamily: 'SukhumvitSet-Text',
    },
    MenubarSubLine2: {
        marginTop: 18,
        paddingBottom: 8,
        flexDirection: 'row',
    },
    MenubarSubLine2Box: {
        width: width * (1 / 2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'green'
    },
    MenubarSubLine2BoxImage: {
        width: 28,
        height: 28,
    },
    MenubarSubLine2BoxName: {
        fontSize: 16,
        marginLeft: 8,
        fontFamily: 'SukhumvitSet-Text',
    },
    ///--------------------------------------------------------------------///
    ListMenu: {
        width,
        marginTop: 10,
        borderColor: '#EAEAEA',
        borderWidth: 0.5,
    },
    bgBoxWhite: {
        backgroundColor: '#fff'
    },
    ListMenuList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#EAEAEA',
        borderWidth: 0.5,
    },
    ListMenuListSub: {
        flexDirection: 'row',
    },
    ListMenuListSubIcon: {
        marginTop: 6,
        marginLeft: 40,
    },
    ListMenuListSubName: {
        marginTop: 15,
        marginLeft: 16,
        fontSize: 16,
        fontFamily: 'SukhumvitSet-Text',
    },
    ListMenuListIcon: {
        marginTop: 6,
        marginRight: 8,
    },
    ListbarBoxImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 18,
    },
    ListbarBoxText: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'SukhumvitSet-Text',
    },


})
