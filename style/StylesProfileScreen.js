import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    Appbar: {
        backgroundColor: '#0A55A6',
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
        // opacity: 0.5,
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
    Menu: {
        backgroundColor: '#fff',
        marginTop: '3%',
    },
    Menubar: {
        padding: 4,
        height: 45,
        flexDirection: 'row',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
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
    },
    MenubarSubLine1Image: {
        width: 50,
        height: 50,
    },
    MenubarSubLine1Name: {
        marginTop: 8,
    },
    MenubarSubLine2: {
        marginTop: 18,
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
        marginTop: 10,
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
        marginTop: 10,
        paddingVertical: 6,
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
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ECECEC',
        backgroundColor: '#fff',
        // padding: 10,
        paddingVertical: 10,
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
        marginTop: 10
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
        padding: 10,
    },
    FinMinssionBoxPlan1Image: {
        backgroundColor: '#ECECEC',
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    FinMinssionBoxPlan1Code: {
        marginTop: 6,
        padding: 4,
        backgroundColor: '#0A55A6',
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
        height: 30,
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
        marginTop: 10,
        backgroundColor: '#11B7DC',
        height: 110,
        width
    },
    CoinCollectImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    CoinCollectBox: {
        marginLeft: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#0A55A6',
        width: 160,
        height: 60,
        backgroundColor: 'white'
    },
    CoinPageBody: {
        marginTop: 10,
        width: width * 0.96,
        height: 200,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        backgroundColor: 'white'
    },
    CoinPageBodyBox: {
        width: '100%',
        height: 60,
        backgroundColor: 'white'
    },
    CoinPageBodyBoxBody1: {
        flex: 2,
        padding: 4,
        width,
        height,
        // backgroundColor: '#456789'
    },
    CoinPageBodyBoxBody2: {
        flex: 1,
        width: '10%',
        height,
        // backgroundColor: '#456123'
    },
    CoinPageBodyBoxBody2Box: {
        backgroundColor: '#0A55A6',
        width: 100,
        height: 30,
        marginTop: 4,
        borderRadius: 4,
        marginRight: 4,
    },
})
