///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Share, Image, FlatList,
    StyleSheet, Platform, PixelRatio,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { WebView } from 'react-native-webview';
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
import RNFetchBlob from 'rn-fetch-blob'
import SplashScreen from 'react-native-splash-screen';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CommonActions, StackActions, } from '@react-navigation/native';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../style/stylePromotion-src/styleDealScreen';
import stylesDetail from '../style/StylesDetailScreen'
import stylesFont, { normalize } from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Toolbar
export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
        }
    }
    componentDidMount() {
        this.props?.customerData?.isChecked == false && this.props?.checkCustomer()
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser })
    }
    render() {
        const { navigation, route } = this.props
        const { activeGetCurrentUser, currentUser } = this.state;
        var u_name = null;
        if (currentUser != null) {
            currentUser.name &&
                (u_name = currentUser.name)
        }
        var routeSelcet = route.name
        activeGetCurrentUser && GetData({ getSource: this.getSource.bind(this), getUser: true })
        return (
            <View style={stylesMain.Toolbar}>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'MainScreen' ?
                            () => NavigationNavigateScreen({ goScreen: 'MainScreen', navigation, noPush: true }) :
                            null
                    }>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="home" size={25}
                            color={
                                routeSelcet == 'MainScreen' ?
                                    mainColor :
                                    '#111'
                            } />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'MainScreen' ?
                                    mainColor :
                                    '#111'
                        }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'FeedScreen' ?
                            () => NavigationNavigateScreen({ goScreen: 'FeedScreen', navigation, noPush: true }) :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="tagso" size={25}
                            color={
                                routeSelcet == 'FeedScreen' ?
                                    mainColor :
                                    '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'FeedScreen' ?
                                    mainColor :
                                    '#111'
                        }}> Feed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'NewsScreen' ?
                            () => NavigationNavigateScreen({ goScreen: 'NewsScreen', navigation, noPush: true }) :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="notification" size={25}
                            color={
                                routeSelcet == 'NewsScreen' ?
                                    mainColor :
                                    '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'NewsScreen' ?
                                    mainColor :
                                    '#111'
                        }}>News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'BellScreen' ?
                            () => NavigationNavigateScreen({ goScreen: 'BellScreen', navigation, noPush: true }) :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="bells" size={25}
                            color={
                                routeSelcet == 'BellScreen' ?
                                    mainColor :
                                    '#111'
                            } />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'BellScreen' ?
                                    mainColor :
                                    '#111'
                        }}>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {
                    currentUser == null ?
                        <TouchableOpacity activeOpacity={1}
                            onPress={
                                routeSelcet != 'LoginScreen' ?
                                    () => NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, noPush: true }) :
                                    null}>
                            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                                <IconAntDesign name="user" size={25} color={
                                    routeSelcet == 'LoginScreen' ?
                                        mainColor :
                                        '#111'
                                } />
                                <Text style={{
                                    fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                                    color:
                                        routeSelcet == 'LoginScreen' ?
                                            mainColor :
                                            '#111'
                                }}>ฉัน</Text>
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1}
                            onPress={
                                routeSelcet != 'ProfileScreen' ?
                                    () => NavigationNavigateScreen({ goScreen: 'ProfileScreen', navigation, noPush: true }) :
                                    null
                            }>
                            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                                <IconAntDesign name="user" size={25} color={
                                    routeSelcet == 'ProfileScreen' ?
                                        mainColor :
                                        '#111'
                                } />
                                <Text numberOfLines={1} style={{
                                    fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                                    color:
                                        routeSelcet == 'ProfileScreen' ?
                                            mainColor :
                                            '#111'
                                }}>
                                    ฉัน
                                {/* {u_name} */}
                                </Text>

                            </View>
                        </TouchableOpacity>
                }
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> TabBar
export class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathlist: 0,
            pathlist2: 0,
            PassSetValue: 0,
        }
    }
    /*
    // v0.0a.14.04.2020
    // <TabBar
    // /////ส่งออกมาจากTabBarและส่งค่าที่คลิกไปยังฟังก์ชันgetData
    // sendData={this.getData}
    // /////|Arrey| ส่งค่าArreyที่ต้องการสร้างTabเข้าในฟังก์ชัน
    // item={item}
    // /////|color| กำหนดสีเส้นหรือปุ่มในTabที่เลือกอยู่
    // activeColor='#fff'   
    // /////|color| กำหนดสีเส้นขอบในTabที่ไม่ได้เลือก
    // inactiveColor='#fff'
    // /////|color| กำหนดสีปุ่มในTabที่ไม่ได้เลือก
    // inactiveBoxColor="#fff"
    // /////|number| กำหนดความหนาของเส้นขอบ
    // activeWidth={4}          
    // /////|space|nospace| กำหนดรูปแบบระยะของแต่ละbox
    // noSpace='true'false|   
    // /////|0-100| กำหนดระยะห่างของแต่ละbox มีค่า 0-100
    // widthBox={98}
    // /////|row|column|  กำหนดแนวของbox
    // direction='column'     
    // /////|number|  กำหนดความกลมมลของbox
    // radiusBox={8}            
    // /////|right|left|center| กำหนดตำแหน่งของbox
    // alignBox='center'        
    // /////|color| กำหนดสีตัวอักษรในboxที่เลือก
    // activeFontColor='#fff'         
    // /////|color| กำหนดสีตัวอักษรในboxที่ไม่ได้เลือกเลือก
    // inactiveFontColor='#fff'   
    // /////|none|box| กำหนดรูปแบบของbox
    // type='box'
    // /////|color| กำหนดสีพื้นหลังสำหรับไม่มีbox
    // spaceColor='#fff'
    // /////|color| กำหนดสีตัวอักษรทั้งหมด
    // fontColor='#fff' />*/
    setSelectTab = (selectedIndex, PassSetValue, list) => {
        const { item, sendData } = this.props
        var { pathlist2 } = this.state
        list ? ([
            list == 'swap' && pathlist2 < item[selectedIndex].actionList.length - 1 ?
                pathlist2++ :
                pathlist2 = 0,
            this.setState({ pathlist2 }),
            sendData({ selectedIndex, actionReturn: item[selectedIndex].actionReturn[pathlist2] })
        ]) :
            sendData({ selectedIndex, })
        this.setState({ pathlist: selectedIndex, PassSetValue })
    }
    get tab() {
        const {
            activeColor, activeFontColor, bottomColor, fontColor, fontSizeStyle, inactiveBoxColor, inactiveColor, inactiveFontColor, item,
            limitBox, noLimit, NoSelectTab, noSpace, numberBox, numberofBox, numberOfLines, radiusBox, SetValue, setHorizontal, setVertical,
            spaceColor, tagBottom, tagBottomColor, type, widthBox,
        } = this.props
        const { PassSetValue, pathlist, pathlist2 } = this.state
        const countItem = item.length;
        SetValue && console.log(`SetValue = > ${SetValue}`)
        SetValue >= 0 && SetValue != pathlist &&
            this.setSelectTab(SetValue)
        return item.map((item, index) => {
            return (
                <TouchableOpacity key={index} activeOpacity={
                    type == 'box' ?
                        0.2 :
                        1
                } onPress={
                    NoSelectTab ?
                        pathlist == index ?
                            () => this.setSelectTab(-1) :
                            () => this.setSelectTab(index + '') :
                        item.actionItem && pathlist == index ?
                            () => this.setSelectTab(index + '', undefined, 'swap') :
                            item.actionItem ?
                                () => this.setSelectTab(index + '', undefined, 'set') :
                                () => this.setSelectTab(index + '')
                }>
                    {
                        pathlist == index ?
                            <View style={[
                                stylesMain.ItemCenterVertical, {
                                    width:
                                        type == 'box' ?
                                            noSpace ?
                                                null :
                                                noLimit ?
                                                    numberBox ?
                                                        '100%' :
                                                        numberofBox ?
                                                            width * (1 / numberofBox) :
                                                            width * (1 / 4) : width * (1 / countItem) :
                                            noSpace ?
                                                widthBox ?? width * (1 / countItem) :
                                                noLimit ?
                                                    numberofBox ?
                                                        width * (1 / numberofBox) :
                                                        width * (1 / 4.2) :
                                                    limitBox ?
                                                        limitBox * (1 / countItem) :
                                                        width * (1 / countItem),
                                    borderLeftWidth:
                                        type == 'tag' ?
                                            index == 0 ?
                                                null :
                                                0.5 :
                                            null,
                                    borderRightWidth:
                                        type == 'tag' ?
                                            index == countItem - 1 ?
                                                null :
                                                0.5 :
                                            null,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    borderBottomColor:
                                        type == 'box' ?
                                            null :
                                            activeColor ?? mainColor,
                                    borderBottomWidth:
                                        type == 'tag' ?
                                            null :
                                            type == 'box' ?
                                                null :
                                                4,
                                    alignContent: 'center', alignItems: 'center',
                                    paddingLeft:
                                        numberBox ?
                                            width * (1 / 60) :
                                            null,
                                    paddingVertical:
                                        setVertical ?? null,
                                    paddingHorizontal:
                                        setHorizontal ?? null
                                }]}>
                                <View style={[
                                    stylesMain.ItemCenterVertical,
                                    type == 'box' ?
                                        {
                                            width:
                                                noLimit ?
                                                    numberBox ?
                                                        width * (1 / 3) :
                                                        width * (1 / 4.2) :
                                                    numberofBox ?
                                                        width * (1 / numberofBox) :
                                                        widthBox >= 0 ?
                                                            widthBox <= 100 ?
                                                                width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) :
                                                                width * (1 / (countItem * 1.2)) :
                                                            width * (1 / (countItem * 1.2)),
                                            padding: 6,
                                            borderLeftWidth:
                                                noSpace ?
                                                    0.5 :
                                                    null,
                                            borderRightWidth:
                                                noSpace ?
                                                    0.5 :
                                                    null,
                                            borderWidth: 1,
                                            borderColor:
                                                activeColor ?? mainColor,
                                            backgroundColor:
                                                activeColor ?? mainColor,
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius:
                                                radiusBox ?? 0,
                                        } :
                                        {
                                            flexDirection: 'row'
                                        }
                                ]}>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize:
                                            fontSizeStyle ?? 16,
                                        color: type == 'box' ?
                                            activeFontColor ?? fontColor ?? 'white' :
                                            activeFontColor ?? fontColor ?? 'black',
                                        textAlignVertical: 'center'
                                    }]}>
                                        {item.name}
                                    </Text>
                                    {
                                        item.nameline2 &&
                                        <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                            fontSize:
                                                fontSizeStyle ?? 16,
                                            color: type == 'box' ?
                                                activeFontColor ?? fontColor ?? 'white' :
                                                activeFontColor ?? fontColor ?? 'black',
                                            textAlignVertical: 'center'
                                        }]}>
                                            {item.nameline2}
                                        </Text>
                                    }
                                    {
                                        item.actionItem && item.actionItem[item.actionList[pathlist2]]
                                    }
                                </View>
                            </View> :
                            <View style={[
                                stylesMain.ItemCenterVertical, {
                                    width:
                                        type == 'box' ?
                                            noSpace ?
                                                null :
                                                noLimit ?
                                                    numberBox ?
                                                        '100%' :
                                                        numberofBox ?
                                                            width * (1 / numberofBox) :
                                                            width * (1 / 4) : width * (1 / countItem) :
                                            noSpace ?
                                                widthBox ?? width * (1 / countItem) :
                                                noLimit ?
                                                    numberofBox ?
                                                        width * (1 / numberofBox) :
                                                        width * (1 / 4.2) :
                                                    limitBox ?
                                                        limitBox * (1 / countItem) :
                                                        width * (1 / countItem),
                                    borderLeftWidth:
                                        type == 'tag' ?
                                            index == 0 ?
                                                null :
                                                0.5 :
                                            null,
                                    borderRightWidth:
                                        type == 'tag' ?
                                            index == countItem - 1 ?
                                                null :
                                                0.5 :
                                            null,
                                    borderBottomColor:
                                        type == 'box' ?
                                            null :
                                            spaceColor ?? '#fff',
                                    borderBottomWidth:
                                        type == 'tag' ?
                                            null :
                                            type == 'box' ?
                                                null :
                                                4,
                                    alignContent: 'center', alignItems: 'center',
                                    paddingLeft:
                                        numberBox ?
                                            width * (1 / 60) :
                                            null,
                                    paddingVertical:
                                        setVertical ?? null,
                                    paddingHorizontal:
                                        setHorizontal ?? null
                                }]}>
                                <View style={[
                                    stylesMain.ItemCenterVertical,
                                    type == 'box' ?
                                        {
                                            width:
                                                noLimit ?
                                                    numberBox ?
                                                        width * (1 / 3) :
                                                        width * (1 / 4.2) :
                                                    numberofBox ?
                                                        width * (1 / numberofBox) :
                                                        widthBox >= 0 ?
                                                            widthBox <= 100 ?
                                                                width * (1 / (countItem * (1 + ((100 - widthBox) / 100)))) :
                                                                width * (1 / (countItem * 1.2)) :
                                                            width * (1 / (countItem * 1.2)),
                                            padding: 6,
                                            borderLeftWidth:
                                                noSpace ?
                                                    0.5 :
                                                    null,
                                            borderRightWidth:
                                                noSpace ?
                                                    0.5 :
                                                    null,
                                            borderWidth: 1,
                                            backgroundColor:
                                                inactiveBoxColor ?? null,
                                            borderColor:
                                                inactiveColor ?? 'black',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius:
                                                radiusBox ?? 0,
                                        } :
                                        {
                                            flexDirection: 'row'
                                        }
                                ]}>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize:
                                            fontSizeStyle ?? 16,
                                        color:
                                            inactiveFontColor ?? fontColor ?? 'black',
                                        textAlignVertical: 'center'
                                    }]}>
                                        {item.name}
                                    </Text>
                                    {
                                        item.nameline2 &&
                                        <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                            fontSize:
                                                fontSizeStyle ?? 16,
                                            color:
                                                inactiveFontColor ?? fontColor ?? 'black',
                                            textAlignVertical: 'center'
                                        }]}>
                                            {item.nameline2}
                                        </Text>
                                    }
                                    {
                                        item.actionItem && item.actionItem[0]
                                    }
                                </View>
                            </View>
                    }{
                        item.subname &&
                        <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, {
                                borderBottomColor:
                                    tagBottom ?
                                        pathlist == index ?
                                            tagBottom :
                                            tagBottomColor ?? '#fff' :
                                        null,
                                borderBottomWidth:
                                    tagBottom ?
                                        4 :
                                        null,
                                width: '90%', textAlign: 'center'
                            }]}>
                                {item.subname}
                            </Text>
                        </View>
                    }{
                        tagBottomColor &&
                            item.subname ?
                            null :
                            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                <View style={[{
                                    borderBottomColor:
                                        tagBottom ?
                                            pathlist == index ?
                                                tagBottomColor ?? mainColor :
                                                '#fff' :
                                            null,
                                    borderBottomWidth:
                                        tagBottom ?
                                            4 :
                                            null,
                                    width: '90%', textAlign: 'center'
                                }]}></View>
                            </View>
                    }
                </TouchableOpacity>
            )
        })
    }
    render() {
        const {
            alignBox, bottomColor, direction, noLimit, noSpace, numberBox, numberofBox, spaceColor, type,
        } = this.props
        return (
            numberBox ?
                (
                    this.tab
                ) :
                (
                    <View style={[
                        stylesMain.ItemCenterVertical,
                        type == 'box' ?
                            {
                                borderLeftWidth:
                                    noSpace ?
                                        0.5 :
                                        null,
                                borderRightWidth:
                                    noSpace ?
                                        0.5 :
                                        null,
                                flexDirection:
                                    direction == 'column' ?
                                        'column' :
                                        'row',
                                justifyContent:
                                    alignBox == 'center' ?
                                        'center' :
                                        alignBox == 'right' ?
                                            'flex-end' :
                                            'flex-start',
                                width:
                                    noLimit ?
                                        null :
                                        '100%',
                                flexWrap:
                                    numberofBox ?
                                        'wrap' :
                                        'nowrap'
                            } :
                            {
                                borderWidth:
                                    type == 'tag' ?
                                        null :
                                        noSpace ?
                                            null :
                                            1,
                                backgroundColor:
                                    spaceColor ?? null,
                                borderColor:
                                    type == 'tag' ?
                                        null :
                                        spaceColor ?? '#ECECEC',
                                borderBottomColor:
                                    bottomColor ?? spaceColor ?? '#ECECEC',
                                flexDirection:
                                    direction == 'column' ?
                                        'column' :
                                        'row',
                                width:
                                    noLimit ?
                                        null :
                                        '100%',
                            }
                    ]}>
                        {this.tab}
                    </View>
                )
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> promiseConnectServices
function promiseConnectServices(promise, nojson) {
    return promise.then(data => {
        return nojson ? [null, data.text()] : [null, data.json()]
    }).catch(err => [err])
}
///----------------------------------------------------------------------------------------------->>>> promiseProcessData
function promiseProcessData(promise) {
    return promise.then(data => {
        return [null, data]
    }).catch(err => [err])
}
///----------------------------------------------------------------------------------------------->>>> GetData_new
export async function GetData_new(props) {
    SplashScreen.hide();
    const { getCokie, getSource, getUser, } = props;
    const [cokie, setCokie] = useState(getCokie ? getCokie : false);
    const [user, setUser] = useState(getUser ? getUser : false);
    const [value, setValue] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [dataCokie, setDataCokie] = useState(undefined);
    const [dataCustomer, setDataCustomer] = useState(undefined);
    const [dataProcessCustomer, setDataProcessCustomer] = useState(undefined);
    useEffect(() => {
        [setError, setResult] = promiseProcessData(AsyncStorage.multiGet(['@MyKey', '@MyLongin']))
    });
    console.log('error')
    console.log(error)
    console.log('result')
    console.log(result)
    // [error, result] = await promiseProcessData(AsyncStorage.multiGet(['@MyKey', '@MyLongin']));
    // if (error) {
    //     console.log(error)
    //     getCokie  && (value.keycokie = undefined)
    //     getUser  && (value.currentUser = undefined);
    //     return getSource(value)
    // }
    // if (result[1][1] === undefined) {
    //     console.log(result[1][1])
    //     getCokie  && (value.keycokie = undefined)
    //     getUser  && (value.currentUser = undefined);
    //     return getSource(value)
    // }
    // const currentUser = result[0][1];
    // const autoLogin = result[1][1];
    // if (currentUser && autoLogin) {
    //     [error, dataCokie] = await promiseProcessData(CookieManager.get(`${finip}/auth/login_customer`))
    //     if (error) {
    //         console.log(error)
    //         getCokie  && (value.keycokie = undefined)
    //         getUser  && (value.currentUser = undefined);
    //         return getSource(value)
    //     }
    //     if (dataCokie === undefined) {
    //         console.log(`dataCokie`);
    //         getCokie  && (value.keycokie = undefined)
    //         getUser  && (value.currentUser = undefined);
    //         return getSource(value)
    //     };
    //     var keycokie = dataCokie.token
    //     if (keycokie === undefined && autoLogin) {
    //         [error, dataCustomer] = await promiseConnectServices(
    //             fetch(`${finip}/auth/login_customer`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                     signal: abortController ? abortController.signal : undefined
    //                 },
    //                 body: autoLogin,
    //             })
    //         );
    //         if (error) {
    //             console.log(`AutoLogin:Phase 1`);
    //             console.log(`ERROR:FETCH => ${error}`);
    //             getCokie  && (value.keycokie = undefined)
    //             getUser  && (value.currentUser = undefined);
    //             return getSource(value)
    //         };
    //         if (dataCustomer === undefined) {
    //             console.log(`AutoLogin':Phase 1`);
    //             console.log('No Data!');
    //             getCokie  && (value.keycokie = undefined)
    //             getUser  && (value.currentUser = undefined);
    //             return getSource(value)
    //         };
    //         [error, dataProcessCustomer] = await promiseProcessData(dataCustomer)
    //         if (error) {
    //             console.log(`AutoLogin:Phase 2`);
    //             console.log(`ERROR:FETCH => ${error}`);
    //             getCokie  && (value.keycokie = undefined)
    //             getUser  && (value.currentUser = undefined);
    //             return getSource(value)
    //         };
    //         if (dataProcessCustomer === undefined) {
    //             console.log(`AutoLogin':Phase 2`);
    //             console.log('No Data!');
    //             getCokie  && (value.keycokie = undefined)
    //             getUser  && (value.currentUser = undefined);
    //             return getSource(value)
    //         };
    //     }
    //     getCokie  && (value.keycokie = dataCokie.token)
    //     getUser  && (value.currentUser = JSON.parse(currentUser));
    //     return getSource(value)
    // }
}
///----------------------------------------------------------------------------------------------->>>> GetData
export async function GetData(props) {
    SplashScreen.hide();
    const { abortController, getCokie, getSource, getUser, } = props;
    var activeLogin;
    var value = {};
    let error, result, dataCokie, dataCustomer, dataProcessCustomer;
    abortController && console.log('GetData');
    [error, result] = await promiseProcessData(AsyncStorage.multiGet(['@MyKey', '@MyLongin']));
    if (error) {
        console.log(error)
        getCokie && (value.keycokie = undefined)
        getUser && (value.currentUser = undefined);
        return getSource(value)
    }
    if (result[1][1] === undefined) {
        console.log(result[1][1])
        getCokie && (value.keycokie = undefined)
        getUser && (value.currentUser = undefined);
        return getSource(value)
    }
    const currentUser = result[0][1];
    const autoLogin = result[1][1];
    if (currentUser && autoLogin) {
        [error, dataCokie] = await promiseProcessData(CookieManager.get(`${finip}/auth/login_customer`))
        if (error) {
            console.log(error)
            getCokie && (value.keycokie = undefined)
            getUser && (value.currentUser = undefined);
            return getSource(value)
        }
        if (dataCokie === undefined) {
            console.log(`dataCokie`);
            getCokie && (value.keycokie = undefined)
            getUser && (value.currentUser = undefined);
            return getSource(value)
        };
        var keycokie = dataCokie.token
        if (keycokie === undefined && autoLogin) {
            [error, dataCustomer] = await promiseConnectServices(
                fetch(`${finip}/auth/login_customer`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        signal: abortController ? abortController.signal : undefined
                    },
                    body: autoLogin,
                })
            );
            if (error) {
                console.log(`AutoLogin:Phase 1`);
                console.log(`ERROR:FETCH => ${error}`);
                getCokie && (value.keycokie = undefined)
                getUser && (value.currentUser = undefined);
                return getSource(value)
            };
            if (dataCustomer === undefined) {
                console.log(`AutoLogin':Phase 1`);
                console.log('No Data!');
                getCokie && (value.keycokie = undefined)
                getUser && (value.currentUser = undefined);
                return getSource(value)
            };
            [error, dataProcessCustomer] = await promiseProcessData(dataCustomer)
            if (error) {
                console.log(`AutoLogin:Phase 2`);
                console.log(`ERROR:FETCH => ${error}`);
                getCokie && (value.keycokie = undefined)
                getUser && (value.currentUser = undefined);
                return getSource(value)
            };
            if (dataProcessCustomer === undefined) {
                console.log(`AutoLogin':Phase 2`);
                console.log('No Data!');
                getCokie && (value.keycokie = undefined)
                getUser && (value.currentUser = undefined);
                return getSource(value)
            };
        }
        getCokie && (value.keycokie = dataCokie.token)
        getUser && (value.currentUser = JSON.parse(currentUser));
        return getSource(value)
    }
}
///----------------------------------------------------------------------------------------------->>>> GetServices
export async function GetServices(props) {
    const {
        abortController, Authorization, dataBody, uriPointer, getDataSource, nojson, showConsole, nameFunction,
    } = props;
    if (showConsole) {
        console.log(showConsole);
        Authorization && (
            console.log(`Authorization => ${Authorization}`)
        );
        console.log(`uri => ${uriPointer}`);
        console.log(`dataBody`);
        console.log(dataBody);
    };
    abortController && console.log(`GetServices => ${uriPointer}`);
    let error, rawData, processData;
    [error, rawData] = await promiseConnectServices(
        fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Authorization,
                signal: abortController ? abortController.signal : undefined
            },
            body: JSON.stringify(dataBody),
        }), nojson
    );
    if (error) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 1`);
        console.log(`ERROR:FETCH => ${error}`);
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        if (error == 'TypeError: Network request failed') return getDataSource({ error: 'Network request failed' })
        return getDataSource({ error });
    };
    if (rawData === undefined) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 1`);
        console.log('No Data!');
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ data: 'No Data' });
    };
    showConsole &&
        console.log('Complete Connect To Server');
    [error, processData] = await promiseProcessData(rawData);
    if (error) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 2`);
        console.log(`ERROR:FETCH => ${error}`);
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ error });
    };
    if (processData === undefined || processData == '404') {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}':Phase 2`);
        processData == '404' ? console.log(processData) : console.log('No Data!');
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ data: processData == '404' ? processData : 'Error converting to Json.' });
    };
    if (showConsole) {
        console.log('Complete Converting To JSON');
        console.log(processData);
    };
    return getDataSource(processData);
};
///----------------------------------------------------------------------------------------------->>>> GetServices
export async function GetServicesBlob(props) {
    const {
        abortController, Authorization, dataBody, uriPointer, getDataSource, nojson, showConsole, nameFunction,
    } = props
    showConsole && (
        console.log(`${showConsole}'Blob`),
        Authorization && (
            console.log(`Authorization => ${Authorization}`)
        ),
        console.log(`uri => ${uriPointer}`),
        console.log(`dataBody`),
        console.log(dataBody)
    );
    abortController && console.log(`GetServicesBlob => ${uriPointer}`);
    let error, rawData, processData;
    [error, rawData] = await promiseConnectServices(RNFetchBlob.fetch(
        'POST',
        uriPointer,
        {
            Authorization: Authorization,
            'Content-Type': 'multipart/form-data',
            signal: abortController ? abortController.signal : undefined
        },
        dataBody
    ), nojson);
    if (error) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 1`);
        console.log(`ERROR:FETCH => ${error}`);
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ error });
    };
    if (rawData === undefined) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 1`);
        console.log('No Data!');
        abortController && abortController.abort();
        return getDataSource({ data: 'No Data' });
    };
    showConsole &&
        console.log('Complete Connect To Server');
    [error, processData] = await promiseProcessData(rawData);
    if (error) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 2`);
        console.log(`ERROR:FETCH => ${error}`);
        console.log(uriPointer);
        dataBody && console.log(dataBody);
        abortController && abortController.abort();
        return getDataSource({ error });
    };
    if (processData === undefined) {
        console.log(`${(showConsole ? nameFunction ? `${showConsole}|${nameFunction}` : showConsole : nameFunction)}'Blob:Phase 2`);
        console.log('No Data!');
        abortController && abortController.abort();
        return getDataSource({ data: 'Error converting to Json.' });
    }
    showConsole && ([
        console.log('Complete Converting To JSON'),
        console.log(processData),
    ])
    return getDataSource(processData);
}
///----------------------------------------------------------------------------------------------->>>> GetCoupon
export function GetCoupon(props) {
    const {
        codeList, colorCoupon, couponText, getCoupon, flexRow, marginL, saveCoupon, setDataService, textDetail, timeOut, useCoupon,
    } = props
    return (
        <View style={[
            flexRow ?
                stylesDeal.Coupon_BOX2 :
                stylesDeal.Coupon_BOX, {
                backgroundColor:
                    codeList != 'available' ?
                        '#C4C4C4' :
                        null,
                marginLeft: marginL ?? 10
            }]}>
            <View style={{
                opacity:
                    codeList != 'available' ?
                        0.4 :
                        null,
                flexDirection: 'row',
                justifyContent:
                    flexRow ?
                        null :
                        'flex-end',
                marginBottom:
                    codeList != 'available' ?
                        -70 :
                        null,
            }}>
                <View style={{ width: width * 0.31, height: 80, marginLeft: 5, paddingHorizontal: 2, justifyContent: 'center' }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>{couponText}</Text>
                    <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize9,]}>{textDetail}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน {
                        timeOut ?
                            timeOut :
                            ''
                    }</Text>
                </View>
                <TouchableOpacity onPress={() => { getCoupon(setDataService) }}>
                    <View style={[
                        flexRow ?
                            stylesDeal.Coupon_BOX_A2 :
                            stylesDeal.Coupon_BOX_A, {
                            backgroundColor:
                                colorCoupon ?
                                    colorCoupon :
                                    '#007bff',
                        }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{
                            useCoupon ?
                                'ใช้โค้ด' :
                                'เก็บ'
                        }</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {
                codeList != 'available' &&
                <View style={{
                    backgroundColor: '#C1C1C1', opacity: 0.7, width: 0.31, height: 80, marginTop: -10, borderRadius: 5,
                    alignItems: 'center'
                }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesMain.ItemCenterVertical, {
                        color: '#FFFFFF',
                    }]}>
                        {
                            codeList == 'usedCode' ?
                                'ใช้แล้ว' :
                                saveCoupon ?
                                    'เก็บแล้ว' :
                                    'หมดอายุ'
                        }
                    </Text>
                </View>
            }
        </View>
    )
}
///----------------------------------------------------------------------------------------------->>>> ProductBox
export function ProductBox(props) {
    const {
        dataService, dispriceSize, mode, navigation, nameSize, noNavigation, numberOfItem, onShow, pointerUrl, pointerid_store, postpath,
        prepath, priceSize, radiusBox, typeip, getDataService,
    } = props
    onShow && ([console.log('ProductBoxRender'), console.log(dataService)])
    return dataService.map((item, index) => {
        onShow && ([console.log('ProductBoxRender|||map'), console.log(item)])
        if (index < (numberOfItem ? numberOfItem : dataService.length)) {
            var discount
            item.discount && (
                discount = item.discount.replace("%", "")
            )
            var dataMySQL = typeip == 'ip' ? `${ip}/${(prepath ? postpath ? `${prepath}/${item.image_path}/${postpath}` :
                `${prepath}/${item.image_path}` : postpath ? `${item.image_path}/${postpath}` : `${item.image_path}`)}` :
                `${finip}/${(item.path_image_product ? item.path_image_product :
                    item.image_path)}/${(item.image_product ? item.image_product : item.image_main ? item.image_main : item.image)}`;
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={index}
                    onPress={
                        noNavigation ?
                            () => getDataService({
                                id_product: item.id_product, name: item.name_product ? item.name_product : item.name
                            }) :
                            () => NavigationNavigateScreen({
                                goScreen: pointerUrl, setData: (pointerid_store ? { id_product: item.id_product } : null), navigation
                            })}>
                    <View style={[stylesMain.ItemCenter,
                    mode == 'row4col1' ?
                        stylesMain.BoxProduct5Box :
                        mode == 'row3col2' ?
                            stylesMain.BoxProduct1Box2 :
                            mode == 'row3col2_2' ?
                                stylesMain.BoxProduct4Box :
                                mode == 'row3colall' ?
                                    stylesMain.BoxProduct2Box :
                                    mode == 'row2colall' ?
                                        stylesMain.BoxProduct3Box :
                                        mode == '5item' ?
                                            stylesDeal.Deal_Exclusive_Box :
                                            stylesMain.BoxProduct1Box,
                    {
                        marginBottom: mode == 'row3col2_2' ? 4 : null,
                        borderRadius: radiusBox ? radiusBox : 0
                    }
                    ]}>
                        <View style={[stylesMain.ItemCenter,
                        mode == 'row4col1' ?
                            stylesMain.BoxProduct5ImageofLines :
                            mode == 'row3colall' ?
                                stylesMain.BoxProduct2ImageofLines :
                                mode == 'row2colall' ?
                                    stylesMain.BoxProduct3ImageofLines :
                                    mode == '5item' ?
                                        stylesMain.BoxProduct1ImageofLines2 :
                                        stylesMain.BoxProduct1ImageofLines
                        ]}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[stylesMain.BoxProduct2Image,
                                {
                                    borderTopLeftRadius: radiusBox ? radiusBox : 0,
                                    borderTopRightRadius: radiusBox ? radiusBox : 0,
                                    marginVertical: height * 0.015
                                }
                                ]}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                        <View style={{
                            height:
                                mode == 'row4col1' ?
                                    55 :
                                    60,
                            paddingHorizontal: 3
                        }}>
                            <View style={[
                                stylesMain.BoxProduct1NameofLines
                            ]}>
                                <Text numberOfLines={1} style={[
                                    stylesFont.FontFamilySemiBold,
                                    {
                                        fontSize: nameSize ? nameSize : 16,
                                    }
                                ]}>
                                    {item.name_product ? item.name_product : item.name}</Text>
                            </View>
                            <View style={[
                                stylesMain.BoxProduct1PriceofLines,
                            ]}>
                                <View style={[stylesMain.FlexRow, { paddingVertical: 2 }]}>
                                    <NumberFormat
                                        value={
                                            item.price_discount ?
                                                item.price_discount :
                                                item.full_price ?
                                                    item.full_price :
                                                    item.price
                                        }
                                        fixedDecimalScale
                                        decimalScale={0}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'฿'}
                                        renderText={value =>
                                            <Text style={[
                                                stylesMain.BoxProduct1ImagePrice,
                                                stylesFont.FontFamilyBoldBold, {
                                                    fontSize: priceSize ? priceSize : 14,
                                                }
                                            ]}>
                                                {value}</Text>
                                        } />
                                    {
                                        discount > 0 &&
                                        <NumberFormat
                                            value={item.discount && item.discount}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={'%'}
                                            renderText={
                                                value =>
                                                    value &&
                                                    <View style={[stylesMain.Box_On_sale, { borderRadius: 10 }]}>
                                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, {
                                                            color: '#FFFFFF'
                                                        }]}>
                                                            {`-${value}`}</Text>
                                                    </View>
                                            } />
                                    }
                                </View>
                                {
                                    item.price_discount &&
                                    <NumberFormat
                                        value={item.price}
                                        fixedDecimalScale
                                        decimalScale={0}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'฿'}
                                        renderText={value =>
                                            <Text style={[
                                                stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontFamilyText, {
                                                    marginTop: -4,
                                                    fontSize: dispriceSize ? dispriceSize : 14
                                                }
                                            ]}>
                                                {value}</Text>
                                        } />
                                }
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    })
}
///----------------------------------------------------------------------------------------------->>>> FlatComponent
export function FlatComponent(props) {
    const { animatedView, component, componentPage, } = props
    const AFlatList = Animatable.createAnimatableComponent(FlatList);
    return (
        component && (
            animatedView ?
                <Animated.FlatList
                    // ref={c => this.FlatMainScreen = c}
                    {...props}
                    scrollEnabled={true}
                    data={component}
                    keyExtractor={(value, index) => `Component:${componentPage ? componentPage : index}_${value.nameComponent}`}
                    renderItem={(value) => value.item.renderComponent}
                /> :
                <FlatList
                    // ref={c => this.FlatMainScreen = c}
                    {...props}
                    scrollEnabled={true}
                    data={component}
                    keyExtractor={(value, index) => `Component:${componentPage ? componentPage : index}_${value.nameComponent}`}
                    renderItem={(value) => value.item.renderComponent}
                />
        )
    )
}
///----------------------------------------------------------------------------------------------->>>> FlatProduct
export function FlatProduct(props) {
    const { dataService, nameFlatProduct, noMarginTop, numberOfColumn, } = props
    var itemT = []
    if (numberOfColumn == 2 && dataService && dataService.length > 0)
        for (var n = 0; n < dataService.length; n += 2) {
            itemT.push({
                item: dataService[n],
                item2: dataService[n + 1]
            })
        }
    return (
        <FlatList
            horizontal
            scrollEnabled={true}
            initialNumToRender={10}
            data={numberOfColumn == 2 ? itemT : dataService}
            keyExtractor={(value, index) => (nameFlatProduct ? nameFlatProduct : 'Product') + index}
            // ListHeaderComponent={this.renderHeader}
            ListHeaderComponentStyle={{
                flexDirection: 'column'
            }}
            renderItem={(value) =>
                <View style={{
                    height: 'auto',
                    marginTop: noMarginTop != true && numberOfColumn == 2 ? 3 : undefined,
                }}>
                    {
                        (numberOfColumn == 2 ? value.item.item : value.item) &&
                        <RenderProduct {...props} item={numberOfColumn == 2 ? value.item.item : value.item} />
                    }
                    {
                        numberOfColumn == 2 && value.item.item2 &&
                        <RenderProduct {...props} item={value.item.item2} />
                    }
                </View>
            }
        />
    )
}
///----------------------------------------------------------------------------------------------->>>> NavigationNavigateScreen
export function NavigationNavigateScreen(props) {
    const {
        goScreen, setConsole, passHome, navigation: { dispatch, goBack, popToTop, push, replace, }, setData, noPush
    } = props
    const navigationActions = CommonActions.reset({
        index: 0,
        actions: [StackActions.replace({ routeName: goScreen, params: setData })],
    })
    console.log(goScreen)
    console.log(setData)
    setConsole && (
        console.log(setConsole.consolename),
        console.log(setConsole.consolelog)
    )
    goScreen == 'goBack' ?
        goBack() :
        passHome ?
            dispatch(navigationActions) :
            goScreen == 'popToTop' ?
                popToTop() :
                noPush ?
                    replace(goScreen, setData) :
                    push(goScreen, setData);

}
///----------------------------------------------------------------------------------------------->>>> RenderProduct
export function RenderProduct(props) {
    const {
        custumNavigation, item, dispriceSize, getDataService, mode, navigation, nameSize, noNavigation, priceSize, radiusBox, onShow,
    } = props
    onShow && ([
        console.log('///----------------------------------------------------------------------------------------------->>>> RenderProduct'),
        console.log(item)
    ])
    var dataMySQL = `${finip}/${(item.path_image_product ? item.path_image_product :
        item.image_path)}/${(item.image_product ? item.image_product : item.image_main ? item.image_main : item.image)}`;
    var discount
    item.discount && (
        discount = item.discount.replace("%", "")
    )
    return (
        <TouchableOpacity activeOpacity={1} onPress={() =>
            noNavigation ?
                getDataService({ id_product, name }) :
                NavigationNavigateScreen({
                    navigation, goScreen: custumNavigation ? custumNavigation : 'DetailScreen', setData: {
                        id_product: item.id_product
                    }
                })}>
            <View style={[stylesMain.ItemCenter,
            mode == 'row4' ?
                stylesMain.BoxProduct5Box :
                mode == 'row3' ?
                    stylesMain.BoxProduct1Box2 :
                    mode == 'row3_new' ?
                        stylesMain.BoxProduct1Box2new :
                        mode == 'row3_2' ?
                            stylesMain.BoxProduct4Box :
                            mode == 'row3_all' ?
                                stylesMain.BoxProduct2Box :
                                mode == 'row2_all' ?
                                    stylesMain.BoxProduct3Box :
                                    mode == '5item' ?
                                        stylesDeal.Deal_Exclusive_Box :
                                        stylesMain.BoxProduct1Box,
            {
                marginBottom: mode == 'row3_2' ? 4 : null,
                borderRadius: radiusBox ? radiusBox : 0
            }
            ]}>
                <View style={[stylesMain.ItemCenter,
                mode == 'row4' ?
                    stylesMain.BoxProduct5ImageofLines :
                    mode == 'row3_all' ?
                        stylesMain.BoxProduct2ImageofLines :
                        mode == 'row2_all' ?
                            stylesMain.BoxProduct3ImageofLines :
                            mode == '5item' ?
                                stylesMain.BoxProduct1ImageofLines2 :
                                stylesMain.BoxProduct1ImageofLines
                ]}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={[stylesMain.BoxProduct2Image,
                        {
                            borderTopLeftRadius: radiusBox ? radiusBox : 0,
                            borderTopRightRadius: radiusBox ? radiusBox : 0,
                            marginVertical: height * 0.015,
                        }
                        ]}
                        resizeMode={FastImage.resizeMode.contain} />
                </View>
                <View style={{
                    height: 55,
                    paddingHorizontal: 3
                }}>
                    <View style={[
                        stylesMain.BoxProduct1NameofLines
                    ]}>
                        <Text numberOfLines={1} style={[
                            stylesFont.FontFamilySemiBold,
                            {
                                fontSize: nameSize ? nameSize : 16,
                            }
                        ]}>
                            {item.name_product ? item.name_product : item.name}</Text>
                    </View>
                    <View style={[
                        stylesMain.BoxProduct1PriceofLines,
                    ]}>
                        <View style={[stylesMain.FlexRow, { paddingVertical: 2 }]}>
                            <NumberFormat
                                value={
                                    item.price_discount ?
                                        item.price_discount :
                                        item.full_price ?
                                            item.full_price :
                                            item.price
                                }
                                fixedDecimalScale
                                decimalScale={0}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'฿'}
                                renderText={value =>
                                    <Text numberOfLines={1} style={[
                                        stylesMain.BoxProduct1ImagePrice,
                                        stylesFont.FontFamilyBoldBold, {
                                            fontSize: priceSize ? priceSize : 14,
                                        }
                                    ]}>
                                        {value}</Text>
                                } />
                            {
                                discount > 0 &&
                                <NumberFormat
                                    value={item.discount && item.discount}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'%'}
                                    renderText={
                                        value =>
                                            value &&
                                            <View style={[stylesMain.Box_On_sale, { borderRadius: 10 }]}>
                                                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, {
                                                    color: '#FFFFFF'
                                                }]}>
                                                    {`-${value}`}</Text>
                                            </View>
                                    } />
                            }
                        </View>
                        {
                            item.price_discount &&
                            <NumberFormat
                                value={item.price}
                                fixedDecimalScale
                                decimalScale={0}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'฿'}
                                renderText={value =>
                                    <Text numberOfLines={1} style={[
                                        stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontFamilyText, {
                                            marginTop: -4,
                                            fontSize: dispriceSize ? dispriceSize : 14
                                        }
                                    ]}>
                                        {value}</Text>
                                } />
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
///----------------------------------------------------------------------------------------------->>>> RenderSubStore
export function RenderSubStore(props) {
    const { item } = props
    var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
    return (
        <TouchableOpacity activeOpacity={1} style={stylesMain.FlexRow}>
            <View style={[stylesMain.CategoryProductStoreBox]}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesMain.CategoryProductStoreImage}
                    resizeMode='cover'
                    resizeMethod='resize' />
            </View>
        </TouchableOpacity>
    );
}
///----------------------------------------------------------------------------------------------->>>> FeedBox
export class FeedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFeed: false
        };
    }
    componentDidMount() {
        // this.intervalID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }
    tick() {
        const { activeFeed } = this.state
        this.setState({ activeFeed: false });
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    onShare = async () => {
        try {
            const result = await Share.share({
                message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    setStateButton_Like_heart = () => {
        const { like, } = this.state
        this.setState({ like: !like, activeFeed: true })
    }
    actionOption = (selected, id_store, id_feed) => {
        const { navigation, userOwner } = this.props
        userOwner && (
            selected == 0 && NavigationNavigateScreen({
                goScreen: 'Post_Feed', setData: {
                    selectedIndex: 1, id_store, id_feed, actionPost: 'edit', getDataSource: this.getDataSource.bind(this)
                }, navigation
            })
        )
    }
    getDataSource = (activeRef) => {
        const { getDataSource } = this.props
        getDataSource(activeRef)
    }
    get FeedBoxRender() {
        const { atStore, dataService, Follow, Header, navigation, postpath, prepath, typeip, userOwner } = this.props
        const { like, } = this.state
        // const options = userOwner ? ['แก้ไข', 'ลบ'] : ['รายงานความไม่เหมาะสม']
        var dataMySQL_p = `${finip}/${dataService.image_path}/${dataService.image}`;
        var dataMySQL_s = `${finip}/${dataService.store_path}/${dataService.store_image}`;
        // console.log(dataService)
        return (
            <>
                <BottomSheet
                    ref={ref => {
                        this.Setting_Sheet = ref;
                    }}
                    height={230}
                    // duration={250}
                    customStyles={{
                        container: {
                            paddingHorizontal: 25,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }
                    }}
                >
                    <View>
                        <TouchableOpacity style={[stylesMain.FlexRow, { marginTop: 10 }]}>
                            <IconMaterialCommunityIcons name='bookmark-outline' size={25} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>บันทึกโพสต์</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เพิ่มสิ่งนี้ลงในรายการที่บันทึกไว้ของคุณ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.FlexRow, { marginTop: 10 }]}>
                            <IconAntDesign name='warning' size={25} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รายงานโพสต์</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ฉันกังวลเกี่ยวกับโพสต์นี้</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.FlexRow, { marginTop: 10 }]}>
                            <IconFontAwesome name='bell-o' size={25} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>การแจ้งเตือน</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เปิดการแจ้งเตือนสำหรับโพสต์นี้</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.FlexRow, { marginTop: 10 }]}>
                            <IconEntypo name='link' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20 }]}>คัดลอกลิงก์</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
                <View style={stylesMain.BoxProduct4Box}>
                    {
                        Header &&
                        <View style={stylesMain.BoxProduct4PlusHeader}>
                            <TouchableOpacity onPress={() => atStore ? undefined : NavigationNavigateScreen({
                                goScreen: 'StoreScreen', setData: {
                                    id_store: dataService.id_store ? dataService.id_store : dataService.p_id_store
                                }, navigation
                            })}>
                                <View style={stylesMain.FlexRow}>
                                    <FastImage
                                        style={stylesMain.BoxProduct4PlusImage}
                                        source={{
                                            uri: dataMySQL_s,
                                        }} />
                                    <Text style={[
                                        stylesMain.BoxProduct4PlusImageText, stylesFont.FontFamilyBold, stylesFont.FontSize5
                                    ]}>
                                        {dataService.store_name}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={stylesMain.BoxProduct4PlusButtonBox}>
                                {
                                    Follow ?
                                        null :
                                        <TouchableOpacity onPress={() => undefined}>
                                            <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                                                <Text style={[
                                                    stylesMain.BoxProduct4PlusButtonFollowText, stylesFont.FontFamilyText,
                                                    stylesFont.FontSize6
                                                ]}>
                                                    ติดตาม</Text>
                                            </View>
                                        </TouchableOpacity>
                                }
                                <TouchableOpacity activeOpacity={1} onPress={() => { this.Setting_Sheet.open(); }}>
                                    <IconEntypo name='dots-three-vertical' size={25} />
                                </TouchableOpacity>
                                {/* <ModalDropdown
                                options={options}
                                onSelect={(selected) => { this.actionOption(selected, dataService.id_store, dataService.id_feed) }}
                                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}
                                dropdownStyle={{ paddingHorizontal: 10, height: 44, borderRadius: 5 }}>
                                <IconEntypo name='dots-three-vertical' size={25} />
                            </ModalDropdown> */}
                            </View>
                        </View>
                    }
                    <View>
                        <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                            <FastImage
                                source={{
                                    uri: dataMySQL_p,
                                }}
                                style={stylesMain.BoxProduct4Image}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                        <View style={stylesMain.BoxProduct4ComBox}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                {dataService.detail}</Text>
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: mainColor }]}>
                                ที่สุดสำหรับคุณ</Text>
                            {/* <View style={stylesMain.FlexRow}>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#9F9C9C' }]}>
                                    200 การเข้าชม</Text>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#9F9C9C' }]}>
                                    เมื่อ 3 วันที่ผ่านมา</Text>
                            </View> */}
                        </View>
                        <View style={stylesMain.BoxProduct4ComBox2}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.setStateButton_Like_heart()} style={
                                stylesMain.BoxProduct4ComBoxIcon}>
                                <IconFontAwesome name={like ? 'heart' : 'heart-o'} size={20} style={{
                                    color: like ? '#ff0066' : '#111111'
                                }} />
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ถูกใจ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                                goScreen: 'Deal_Topic', setData: { selectedIndex: 9 }, navigation
                            })}>
                                <View style={stylesMain.BoxProduct4ComBoxIcon}>
                                    <IconFontAwesome5 name='comment-dots' size={20} />
                                    <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                        แสดงความคิดเห็น</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesMain.BoxProduct4ComBoxIcon} onPress={() => this.onShare()}>
                                <IconEntypo name='share' size={20} />
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    แชร์</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }
    render() {
        return (
            this.FeedBoxRender
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> LoadingScreen
export class LoadingScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true,
        };
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { modalVisible } = this.state
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={this.setModalVisible.bind(this, !this.state.modalVisible)}>
                <View style={[stylesMain.ItemCenter, { height, width }]}>
                    <View style={{ height, width, backgroundColor: '#555555', opacity: 0.5, position: 'absolute' }}></View>
                    <View style={[stylesMain.ItemCenterVertical, { height: 80, width: 80, borderRadius: 8, backgroundColor: '#ECECEC' }]}>
                        <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                    </View>
                </View>
            </Modal>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> BrowerScreen
export function BrowerScreen(props) {
    const { url } = props
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{
                    uri: url
                }}
                style={{ flex: 1 }} />
        </View>
    )
}
///----------------------------------------------------------------------------------------------->>>> SlideTab2
export class SlideTab2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {},
        }
    }
    setStateSliderVisible = () => {
        const { setStateSliderVisible } = this.props
        setStateSliderVisible(false)
    }
    filterValue = (event, type) => {
        const { filter } = this.state;
        type == 'tab' ?
            ([
                filter.selectedIndex = event.selectedIndex ? event.selectedIndex : '',
                filter.listIndex = event.listIndex != undefined ? event.listIndex : '',
            ]) :
            type == 'price' && ([
                filter.minvalue = event.minvalue ? event.minvalue : '',
                filter.maxvalue = event.maxvalue ? event.maxvalue : '',
            ])
        this.setState({ filter });
    }
    render() {
        const { data, filterValue, sliderVisible } = this.props
        const { filter } = this.state
        return (
            <SlidingView
                disableDrag
                componentVisible={sliderVisible}
                containerStyle={{
                    backgroundColor: null,
                    justifyContent: 'center',
                    alignContent: 'stretch',
                    width: '100%'
                }}
                position="right"
                changeVisibilityCallback={this.setStateSliderVisible.bind(this)}>
                <View style={stylesMain.FlexRow}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this.setStateSliderVisible()}>
                        <View style={stylesTopic.BackgroundLeft}></View>
                    </TouchableOpacity>
                    <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNB]}>
                        <View>
                            <ScrollView>
                                {
                                    data && data.map((item, index) => {
                                        return <SlideTab filterValue={this.filterValue.bind(this)} item={item} listIndex={index}
                                            key={index} />
                                    })
                                }
                                <PricesSlide filterValue={this.filterValue.bind(this)} />
                            </ScrollView>
                            <View style={[stylesMain.FlexRow, { height: 70 }]}>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                        color: mainColor
                                    }]}>
                                        รีเซ็ต</Text>
                                </View>
                                <TouchableOpacity onPress={() => { filterValue(filter) }}>
                                    <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: mainColor }]}>
                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                            color: '#fff'
                                        }]}>
                                            เสร็จสิ้น</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SlidingView>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> SlideTab
export class SlideTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabBar: true,
            activeText: false,
            filter: {},
            selectedIndex: 0,
        }
    }
    updateIndex = (value) => {
        const { filterValue, listIndex } = this.props
        const { filter } = this.state
        filter.selectedIndex = value.selectedIndex
        filter.listIndex = listIndex
        filterValue(filter, 'tab')
        this.setState({ activeTabBar: false, selectedIndex: value.selectedIndex })
    }
    setStateActiveText = (activeText) => {
        this.setState({ activeTabBar: true, activeText })
    }
    dataItem(item) {
        const { activeTabBar, selectedIndex } = this.state
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap' }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    SetValue={activeTabBar ? selectedIndex != null ? selectedIndex : -1 : undefined}
                    item={item}
                    type='box'
                    noLimit
                    numberBox
                    radiusBox={4} />
            </View>
        )
    }
    dataContainer(item) {
        const { activeText } = this.state
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                    marginLeft: 8, marginTop: 8,
                }]}>
                    {item.title}</Text>
                <View style={stylesMain.SafeAreaViewNB}>
                    <View style={{ width: '100%' }}>
                        <View style={{
                            width: '100%',
                            height:
                                activeText ?
                                    85 + ((Math.ceil(item.subtitle.length / 2) - 1) * 35) :
                                    85 + (35 * 1)
                        }}>
                            {
                                activeText ?
                                    this.dataItem(item.subtitle) :
                                    <ScrollView scrollEnabled={false}>
                                        {this.dataItem(item.subtitle)}
                                    </ScrollView>
                            }
                            {item.subtitle.length > 4 &&
                                <TouchableOpacity
                                    onPress={() => this.setStateActiveText(!activeText)}>
                                    <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter, {
                                        borderTopWidth: null,
                                    }]}>
                                        <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, {
                                            fontFamily: 'SukhumvitSet-Text',
                                        }]}>
                                            {
                                                activeText ?
                                                    'ย่อ' :
                                                    'ดูเพิ่มเติม'
                                            }</Text>
                                        <IconEntypo name={activeText ? 'chevron-up' : 'chevron-down'} size={25} color={mainColor} />
                                    </View>
                                </TouchableOpacity>
                            }
                            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                <View style={{
                                    width: '80%', backgroundColor: '#fff', marginTop: 8, borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 3,
                                }}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        const { item } = this.props
        return (
            this.dataContainer(item)
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PricesSlide
export class PricesSlide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {},
        }
    }
    setStateMin = (minvalue) => {
        const { filterValue } = this.props
        const { filter } = this.state
        filter.minvalue = minvalue
        filterValue(filter, 'price')
    }
    setStateMax = (maxvalue) => {
        const { filterValue } = this.props
        const { filter } = this.state
        filter.maxvalue = maxvalue
        filterValue(filter, 'price')
    }
    render() {
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                    marginLeft: 8, marginTop: 8,
                }]}>
                    ราคา</Text>
                <View style={stylesMain.SafeAreaViewNB}>
                    <View style={{ width: '100%' }}>
                        <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { width: '100%', height: 80 }]}>
                            <TextInput placeholder='ต่ำสุด' style={[
                                stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesFont.FontSize6,
                                stylesTopic.maxMinValue]} onChangeText={this.setStateMin.bind(this)} />
                            <Text style={[stylesMain.ItemCenterVertical, { fontSize: 28, marginHorizontal: 8 }]}>-</Text>
                            <TextInput placeholder='สูงสุด' style={[
                                stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesFont.FontSize6,
                                stylesTopic.maxMinValue]} onChangeText={this.setStateMax.bind(this)} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
export function starReview(star, starSize) {
    let starBox = []
    for (var n = 0; n < 5; n++) {
        if (star > n) {
            starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20} color='#FFAC33' />);
        } else {
            starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20} color='#E9E9E9' />);
        };
    };
    return starBox;
};
///----------------------------------------------------------------------------------------------->>>>
export let GenArreyNumber = (numberofBox, arrayList) => {
    const numberOfList = arrayList?.length;
    var countOfList = 0;
    var box = [];
    for (var n = 0; n < numberofBox; n++) {
        box.push(numberOfList ? arrayList[countOfList] : n);
        if (numberOfList) {
            if (countOfList == numberOfList - 1) {
                countOfList = 0;
            } else {
                countOfList++;
            };
        };
    };
    return box;
};
///----------------------------------------------------------------------------------------------->>>>
export function ImageGallery(props) {
    const { dataService } = props;
    const [aStoreIndex, setAStoreIndex] = useState({});
    const [bStoreIndex, setBStoreIndex] = useState([]);
    const [cStoreIndex, setCStoreIndex] = useState([]);
    const [randomLayout, setRandomLayout] = useState({});
    let imageColumn = (value, index, boxwidth, boxheight) => {
        return <View key={index} style={{ width: (width * 0.315 * boxwidth) + ((boxwidth - 1) * 5), height: (height * 0.15 * boxheight) + ((boxheight - 1) * 5), marginTop: 5, marginLeft: 5 }}>
            <TouchableOpacity onPress={() => console.log(`click => ${index} boxwidth => ${boxwidth} boxheight => ${boxheight}`)}>
                <FastImage
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: `${ip}/${value?.image_path}/${value?.image}`, }}
                    resizeMode={FastImage.resizeMode.cover} />
            </TouchableOpacity>
        </View >;
    };
    let imageRow = (value, index, boxwidth, boxheight, position, setbox) => {
        if (setbox == 'row3' && cStoreIndex.indexOf(index) == -1) {
            for (var n = 0; n < 3; n++) {
                cStoreIndex.indexOf(index + n) == -1 && cStoreIndex.push(index + n)
                cStoreIndex.indexOf(index + n) == -1 && setCStoreIndex(cStoreIndex);
            };
        }
        if (boxwidth < 3 && boxheight > 1 && aStoreIndex[index] == undefined) {
            var indexbox = [];
            aStoreIndex[index] = {};
            for (var n = 1; n <= boxheight; n++) {
                indexbox.push({ index: index + n, listdata: dataService[index + n] });
                bStoreIndex.indexOf(index + n) == -1 && bStoreIndex.push(index + n)
                bStoreIndex.indexOf(index + n) == -1 && setBStoreIndex(bStoreIndex);
            };
            aStoreIndex[index].data = indexbox;
            setAStoreIndex(aStoreIndex);
        }
        console.log('boxwidth|boxheight')
        console.log(`${boxwidth}|${boxheight}`)
        return <View key={index} style={{ flexDirection: 'row' }}>
            {position == 'left' && boxwidth < 3 && boxheight > 1 && <View>
                {aStoreIndex[index].data.map((value2) => value2.index < dataService.length && imageColumn(value2.listdata, value2.index, 1, 1))}
            </View>}
            <View style={{ width: (width * 0.315 * boxwidth) + ((boxwidth - 1) * 5), height: (height * 0.15 * boxheight) + ((boxheight - 1) * 5), marginTop: 5, marginLeft: 5 }}>
                <TouchableOpacity onPress={() => console.log(`click => ${index} boxwidth => ${boxwidth} boxheight => ${boxheight}`)}>
                    <FastImage
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: `${ip}/${value?.image_path}/${value?.image}`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                </TouchableOpacity>
            </View>
            {position != 'left' && boxwidth < 3 && boxheight > 1 && <View>
                {aStoreIndex[index].data.map((value2) => value2.index < dataService.length && imageColumn(value2?.listdata, value2.index, 1, 1))}
            </View>}
        </View>;
    };
    ///bStoreIndex.indexOf(index) == -1
    let imagebox = dataService ?
        <>
            {/* <View style={{ width, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => console.log(aStoreIndex)} style={{ backgroundColor: '#465468', height: 50, width: 50 }}><Text>a</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('=====================================>aStoreIndex')
                    for (var n = 0; n < dataService.length; n++) {
                        aStoreIndex[n] && console.log(n)
                        aStoreIndex[n] && console.log(aStoreIndex[n].data)
                    }
                }} style={{ backgroundColor: '#465468', height: 50, width: 50 }}><Text>a.2</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(bStoreIndex)} style={{ backgroundColor: '#894562', height: 50, width: 50 }}><Text>b</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(cStoreIndex)} style={{ backgroundColor: '#145788', height: 50, width: 50 }}><Text>c</Text></TouchableOpacity>
            </View> */}
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }}>
                {dataService?.map((value, index) => {
                    if (randomLayout[index] == undefined) {
                        randomLayout[index] = cStoreIndex.indexOf(index) == -1 ?
                            bStoreIndex.indexOf(index) == -1 ?
                                index < dataService.length - 3 ?
                                    Math.floor(Math.random() * 6) :
                                    99 :
                                '999' :
                            99;
                        setRandomLayout(randomLayout);
                    };
                    return randomLayout[index] == 0 ?
                        imageRow(value, index, 1, 1, undefined, 'row3') :
                        randomLayout[index] == 1 ?
                            // index != 1 ?
                            imageRow(value, index, 2, 2, 'right') :
                            // imageRow(value, index, 2, 2, 'left') :
                            randomLayout[index] == 2 ?
                                // index != 0 && index != 1 ?
                                imageRow(value, index, 2, 2, 'left') :
                                // imageRow(value, index, 1, 1, undefined) :
                                randomLayout[index] == 3 ?
                                    imageRow(value, index, 3, 2, undefined) :
                                    randomLayout[index] == 4 ?
                                        imageRow(value, index, 2, 3, 'right') :
                                        randomLayout[index] == 5 ?
                                            imageRow(value, index, 2, 3, 'left') :
                                            randomLayout[index] == 6 ?
                                                imageRow(value, index, 3, 3, undefined) :
                                                randomLayout[index] == 99 ?
                                                    imageRow(value, index, 1, 1, undefined) :
                                                    null
                })}
            </View>
        </> : <></>;
    return imagebox;
};