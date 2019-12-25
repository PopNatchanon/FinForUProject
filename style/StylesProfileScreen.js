import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    ///-------------------------------------------------------------------------------///
    HeadbarImage: {
        width,
        height: 132,
        opacity: 0.9,
        flex: 1,
    },
    HeadbarA: {
        flexDirection: 'row',
    },
    HeadbarBox1: {
        width: '30%',
    },
    HeadbarBoxImage: {
        backgroundColor: '#ECECEC',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 12,
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
        marginTop: '8%',
        padding: 4,
        flexDirection: 'row',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    MenubarText1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginBottom: 8,
    },
    MenubarText2: {
        color: '#0A55A6',
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
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 50,
        height: 50,
    },
    MenubarSubLine1Name: {
        marginRight: 'auto',
        marginLeft: 'auto',
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
})