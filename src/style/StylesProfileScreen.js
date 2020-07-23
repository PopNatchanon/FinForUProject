import { StyleSheet, Dimensions } from 'react-native';
import { normalize } from './stylesFont';
import { mainColor } from './StylesMainScreen';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    Appbar: {
        backgroundColor: mainColor,
        height: 50,
        flexDirection: 'row',
        width: '100%',
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
        backgroundColor: mainColor,
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
        backgroundColor: mainColor,
        marginTop: 8,
        padding: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    HeadbarBox1SubText: {
        color: '#ECECEC',
    },
    HeadbarBoxImage: {
        backgroundColor: '#FFFFFF',
        width: normalize(60),
        height: normalize(60),
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
        backgroundColor: mainColor,
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
    Menu: {
        backgroundColor: '#fff',
        marginTop: 25,
    },
    Menubar: {
        padding: 4,
        height: 40,
        flexDirection: 'row',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    MenubarText2: {
        color: mainColor,
    },
    ///---------------------------------------------------------------------------///
    MenubarSub: {
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        marginTop: 6,
    },
    MenubarSubLine1: {
        flexDirection: 'row',
    },
    MenubarSubLine1Image: {
        width: 50,
        height: 50,
    },
    MenubarSubLine1Name: {
        marginTop: 8,
    },
    MenubarSubLine2: {
        marginTop: 8,
        paddingBottom: 8,
    },
    MenubarSubLine2Box: {
        width: width * (1 / 2),
        // backgroundColor:'green'
    },
    MenubarSubLine2BoxImage: {
        width: 28,
        height: 28,
    },
    MenubarSubLine2BoxName: {
        marginLeft: 8,
    },
    ///--------------------------------------------------------------------///
    ListMenu: {
        width,
        marginTop: 3,
        borderColor: '#EAEAEA',
        backgroundColor: '#fff',
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
    },
    ListMenuListIcon: {
        marginTop: 6,
        marginRight: 8,
    },
    ///--------------------------------------------------------------------///
    ListbarBoxImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    ListbarBoxText: {
        marginTop: 8,
    },
    ListbarMain: {
        width,
        borderColor: '#EAEAEA',
        backgroundColor: '#fff',
        borderWidth: 1,
        marginTop: 3,
        paddingVertical: 3,
    },
    ListbarMainRadius: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    ListbarMainRadiusIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#fff'
    },
    ///--------------------------------------------------------------------///
    ViewCode: {
        width,
        marginTop: 3,
        borderWidth: 1,
        borderColor: '#ECECEC',
        backgroundColor: '#fff',
        // padding: 10,
        paddingVertical: 5,
    },
    ViewCodeInputCode: {
        color: 'white',
        backgroundColor: '#D7D7D7',
        borderRadius: 6,
        padding: 4,
    },
    ViewCodeTextCode: {
        backgroundColor: '#6791BE',
        borderRadius: 6,
        padding: 8,
    },
    FinMinssion: {
        width: width * 0.98,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderWidth: 1,
        borderColor: '#ECECEC',
        marginTop: 3
    },
    FinMinssionBox: {
        borderBottomWidth: 0.5,
        borderColor: '#ECECEC',
        backgroundColor: '#fff'
    },
    FinMinssionBoxPlan1: {
        width: width * 0.98,
        borderBottomWidth: 0.5,
        borderWidth: 1,
        borderColor: '#ECECEC',
        padding: 5,
    },
    FinMinssionBoxPlan1Image: {
        backgroundColor: '#ECECEC',
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    FinMinssionBoxPlan1Code: {
        marginTop: 6,
        marginRight: 4,
        padding: 4,
        backgroundColor: mainColor,
    },
    FinMinssionBoxPlan1Follow: {
        width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    FinMinssionBoxPlan1FollowBox: {
        borderWidth: 1,
        borderRadius: 20,
        height: 25,
        width: 90,
    },
    AllFinMinssion: {
        width: width * 0.98,
        borderWidth: 1,
        borderColor: '#6791BE',
        borderRadius: 4,
        padding: 4,
    },
    CoinCollect: {
        height: 100,
    },
    CoinCollectImage: {
        width: 70,
        height: 70,
        borderRadius: 30,
    },
    CoinCollectBox: {
        marginLeft: 40,
        borderRadius: 40,
        borderWidth: 1,
        width: 140,
        height: 80,
        backgroundColor: '#FFFFFF'
    },
    CoinPageBody: {
        marginTop: 10,
        width: width * 0.96,
        height: 200,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        backgroundColor: '#FFFFFF'
    },
    CoinPageBodyBox: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF'
    },
    CoinPageBodyBoxBody1: {
        flex: 2,
        padding: 4,
        width,
        height,
    },
    CoinPageBodyBoxBody2: {
        flex: 1,
        width: '10%',
        height,
    },
    CoinPageBodyBoxBody2Box: {
        backgroundColor: mainColor,
        width: 100,
        height: 30,
        borderRadius: 4,
        marginRight: 4,
    },
})
