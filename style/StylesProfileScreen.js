import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        backgroundColor:'#FFFFFF',
        height: 50,
        flexDirection: 'row',
        width:'100%',
        borderColor: '#ECECEC',
        borderWidth: 1,
        justifyContent:'space-between',
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
        marginLeft: 'auto',
        marginRight: 'auto',
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
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 8,
        marginBottom: 4,
    },
    MenubarText2: {
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
        justifyContent: 'space-around',
    },
    MenubarSubLine1Image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 50,
        height: 50,
    },
    MenubarSubLine1Name: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 14,
        marginTop: 8,
    },
    MenubarSubLine2: {
        marginTop: 18,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    MenubarSubLine2Box: {
        flexDirection: 'row',
    },
    MenubarSubLine2BoxImage: {
        width: 28,
        height: 28,
    },
    MenubarSubLine2BoxName: {
        fontSize: 16,
        marginLeft: 8,
    },
    ///--------------------------------------------------------------------///
    ListMenu: {
        width,
        marginTop: 10,
        borderColor: '#EAEAEA',
        borderWidth: 0.5,
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
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ListbarBoxText: {
        marginTop: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 14,
    },


})
