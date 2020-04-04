///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    ActivityIndicator, Dimensions, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Share,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { WebView } from 'react-native-webview';
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesDetail from '../../style/StylesDetailScreen'
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
import stylesTopic from '../../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Toolbar
export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { currentUser } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            currentUser !== nextState.currentUser
        ) {
            return true
        }
        return false
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataasync()
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.replace(value, value2)
    }
    render() {
        const { currentUser } = this.state;
        var u_name = null;
        if (currentUser != null) {
            currentUser.name &&
                (u_name = currentUser.name)
        }
        var routeProps = this.props.navigation.dangerouslyGetParent().state.routes
        var routeLength = this.props.navigation.dangerouslyGetParent().state.routes.length
        var routeSelcet
        routeProps.map((item, index) => {
            routeLength == index + 1 && (
                routeSelcet = item.routeName
            )
        })
        return (
            <View style={stylesMain.Toolbar}>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'MainScreen' ?
                            this.navigationNavigateScreen.bind(this, 'MainScreen') :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="home" size={25}
                            color={
                                routeSelcet == 'MainScreen' ?
                                    '#0A55A6' :
                                    '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'MainScreen' ?
                                    '#0A55A6' :
                                    '#111'
                        }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'FeedScreen' ?
                            this.navigationNavigateScreen.bind(this, 'FeedScreen') :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="tagso" size={25}
                            color={
                                routeSelcet == 'FeedScreen' ?
                                    '#0A55A6' :
                                    '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'FeedScreen' ?
                                    '#0A55A6' :
                                    '#111'
                        }}> Feed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'NewsScreen' ?
                            this.navigationNavigateScreen.bind(this, 'NewsScreen') :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="notification" size={25}
                            color={
                                routeSelcet == 'NewsScreen' ?
                                    '#0A55A6' :
                                    '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'NewsScreen' ?
                                    '#0A55A6' :
                                    '#111'
                        }}>News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={
                        routeSelcet != 'BellScreen' ?
                            this.navigationNavigateScreen.bind(this, 'BellScreen') :
                            null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="bells" size={25}
                            color={
                                routeSelcet == 'BellScreen' ?
                                    '#0A55A6' :
                                    '#111'
                            } />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                            color:
                                routeSelcet == 'BellScreen' ?
                                    '#0A55A6' :
                                    '#111'
                        }}>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {
                    currentUser == null ?
                        <TouchableOpacity activeOpacity={1}
                            onPress={
                                routeSelcet != 'LoginScreen' ?
                                    this.navigationNavigateScreen.bind(this, 'LoginScreen') :
                                    null}>
                            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                                <IconAntDesign name="user" size={25} color={
                                    routeSelcet == 'LoginScreen' ?
                                        '#0A55A6' :
                                        '#111'
                                } />
                                <Text style={{
                                    fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                                    color:
                                        routeSelcet == 'LoginScreen' ?
                                            '#0A55A6' :
                                            '#111'
                                }}>ฉัน</Text>
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1}
                            onPress={
                                routeSelcet != 'ProfileScreen' ?
                                    this.navigationNavigateScreen.bind(this, 'ProfileScreen') :
                                    null
                            }>
                            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                                <IconAntDesign name="user" size={25} color={
                                    routeSelcet == 'ProfileScreen' ?
                                        '#0A55A6' :
                                        '#111'} />
                                <Text numberOfLines={1} style={{
                                    fontSize: 13, fontFamily: 'SukhumvitSet-Text',
                                    color:
                                        routeSelcet == 'ProfileScreen' ?
                                            '#0A55A6' :
                                            '#111'
                                }}>{u_name}</Text>
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
            PassSetValue: 0,
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const {
            activeColor, activeFontColor, activeWidth, alignBox, direction, fontColor, fontSizeStyle, inactiveBoxColor, inactiveColor,
            inactiveFontColor, item, limitBox, noLimit, NoSelectTab, noSpace, numberBox, numberOfLines, radiusBox, sendData, SetValue,
            setVertical, spaceColor, tagBottom, tagBottomColor, type, widthBox,
        } = this.props
        const { currentUser, PassSetValue, pathlist } = this.state
        if (
            ////>nextProps
            activeColor !== nextProps.activeColor || activeFontColor !== nextProps.activeFontColor ||
            activeWidth !== nextProps.activeWidth || alignBox !== nextProps.alignBox || direction !== nextProps.direction ||
            fontColor !== nextProps.fontColor || fontSizeStyle !== nextProps.fontSizeStyle ||
            inactiveBoxColor !== nextProps.inactiveBoxColor || inactiveColor !== nextProps.inactiveColor ||
            inactiveFontColor !== nextProps.inactiveFontColor || item !== nextProps.item || limitBox !== nextProps.limitBox ||
            noLimit !== nextProps.noLimit || NoSelectTab !== nextProps.NoSelectTab || noSpace !== nextProps.noSpace ||
            numberBox !== nextProps.numberBox || numberOfLines !== nextProps.numberOfLines || radiusBox !== nextProps.radiusBox ||
            sendData !== nextProps.sendData || SetValue !== nextProps.SetValue || setVertical !== nextProps.setVertical ||
            spaceColor !== nextProps.spaceColor || tagBottom !== nextProps.tagBottom || tagBottomColor !== nextProps.tagBottomColor ||
            type !== nextProps.type || widthBox !== nextProps.widthBox ||
            ////>nextState
            currentUser !== nextState.currentUser || PassSetValue !== nextState.PassSetValue || pathlist !== nextState.pathlist
        ) {
            return true
        }
        return false
    }
    /*
    // v0.9.25022020
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
    setSelectTab = (pathlist, PassSetValue) => {
        const { sendData } = this.props
        this.setState({ pathlist, PassSetValue })
        sendData(pathlist)
    }
    get tab() {
        const {
            activeColor, activeFontColor, fontColor, fontSizeStyle, inactiveBoxColor, inactiveColor, inactiveFontColor, item, limitBox,
            noLimit, NoSelectTab, noSpace, numberBox, numberOfLines, radiusBox, SetValue, setVertical, spaceColor, tagBottom,
            tagBottomColor, type, widthBox,
        } = this.props
        const { PassSetValue, pathlist } = this.state
        const countItem = item.length;
        PassSetValue < 1 && SetValue &&
            this.setSelectTab(SetValue, PassSetValue + 1)
        return item.map((item, index) => {
            return (
                <TouchableOpacity key={index} activeOpacity={
                    type == 'box' ?
                        0.2 :
                        1
                } onPress={
                    NoSelectTab ?
                        pathlist == index ?
                            this.setSelectTab.bind(this, -1) :
                            this.setSelectTab.bind(this, index) :
                        this.setSelectTab.bind(this, index)
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
                                                        width * (1 / 4) :
                                                    width * (1 / countItem) :
                                            noSpace ?
                                                widthBox ?
                                                    widthBox :
                                                    width * (1 / countItem) :
                                                noLimit ?
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
                                            activeColor ?
                                                activeColor :
                                                '#0A55A6',
                                    borderBottomWidth:
                                        type == 'tag' ?
                                            null :
                                            type == 'box' ?
                                                null :
                                                4,
                                    paddingLeft:
                                        numberBox ?
                                            width * (1 / 60) :
                                            null,
                                    paddingVertical:
                                        setVertical ?
                                            setVertical :
                                            null
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
                                                activeColor ?
                                                    activeColor :
                                                    '#0A55A6',
                                            backgroundColor:
                                                activeColor ?
                                                    activeColor :
                                                    '#0A55A6',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius:
                                                radiusBox ?
                                                    radiusBox :
                                                    0,
                                        } :
                                        null
                                ]}>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize:
                                            fontSizeStyle ?
                                                fontSizeStyle :
                                                16,
                                        color: type == 'box' ?
                                            activeFontColor ?
                                                activeFontColor :
                                                fontColor ?
                                                    fontColor :
                                                    'white' :
                                            activeFontColor ?
                                                activeFontColor :
                                                fontColor ?
                                                    fontColor :
                                                    'black'
                                    }]}>
                                        {item.name}
                                    </Text>
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
                                                        width * (1 / 4) : width * (1 / countItem) :
                                            noSpace ?
                                                widthBox ? widthBox : width * (1 / countItem) :
                                                noLimit ?
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
                                            spaceColor ?
                                                spaceColor :
                                                '#fff',
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
                                        setVertical ?
                                            setVertical :
                                            null
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
                                                inactiveBoxColor ?
                                                    inactiveBoxColor :
                                                    null,
                                            borderColor:
                                                inactiveColor ?
                                                    inactiveColor :
                                                    'black',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius:
                                                radiusBox ?
                                                    radiusBox :
                                                    0,
                                        } :
                                        null
                                ]}>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize:
                                            fontSizeStyle ?
                                                fontSizeStyle :
                                                16,
                                        color:
                                            inactiveFontColor ?
                                                inactiveFontColor :
                                                fontColor ?
                                                    fontColor :
                                                    'black'
                                    }]}>
                                        {item.name}
                                    </Text>
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
                                            tagBottomColor ?
                                                tagBottomColor :
                                                '#fff' :
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
                                                tagBottomColor ?
                                                    tagBottomColor :
                                                    '#0A55A6' :
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
            alignBox, direction, noLimit, noSpace, numberBox, spaceColor, type,
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
                            } :
                            {
                                borderWidth:
                                    type == 'tag' ?
                                        null :
                                        noSpace ?
                                            null :
                                            1,
                                backgroundColor:
                                    spaceColor ?
                                        spaceColor :
                                        null,
                                borderColor:
                                    type == 'tag' ?
                                        null :
                                        spaceColor ?
                                            spaceColor :
                                            '#ECECEC',
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
///----------------------------------------------------------------------------------------------->>>> GetServices
export class GetServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { Authorization, dataBody, getDataSource, noSendError, showConsole, uriPointer } = this.props
        if (
            ////>nextProps
            Authorization !== nextProps.Authorization || dataBody !== nextProps.dataBody || getDataSource !== nextProps.getDataSource ||
            noSendError !== nextProps.noSendError || showConsole !== nextProps.showConsole || uriPointer !== nextProps.uriPointer
            ////>nextState
        ) {
            return true
        }
        return false
    }
    getDataSource = async () => {
        const { Authorization, dataBody, uriPointer, getDataSource, noSendError, showConsole, } = this.props
        showConsole && (
            console.log(showConsole),
            console.log('Authorization'),
            console.log(Authorization),
            console.log('dataBody'),
            console.log(dataBody),
            console.log('uriPointer'),
            console.log(uriPointer)
        )
        fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Authorization
            },
            body: JSON.stringify(dataBody),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                showConsole && (
                    console.log('responseJson'),
                    console.log(responseJson)
                )
                getDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    componentDidMount() {
        this.getDataSource()
    }
    render() {
        return <></>
    }
}
///----------------------------------------------------------------------------------------------->>>> GetCoupon
export class GetCoupon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const {
            codeList, colorCoupon, couponText, flexRow, textDetail, timeOut, useCoupon,
        } = this.props
        if (
            ////>nextProps
            codeList !== nextProps.codeList || colorCoupon !== nextProps.colorCoupon || couponText !== nextProps.couponText ||
            flexRow !== nextProps.flexRow || textDetail !== nextProps.textDetail || timeOut !== nextProps.timeOut ||
            useCoupon !== nextProps.useCoupon
            ////>nextState
        ) {
            return true
        }
        return false
    }
    get setCoupon() {
        const {
            codeList, colorCoupon, couponText, flexRow, textDetail, timeOut, useCoupon,
        } = this.props
        return (
            <View style={[
                flexRow ?
                    stylesDeal.Coupon_BOX2 :
                    stylesDeal.Coupon_BOX, {
                    backgroundColor:
                        codeList != 'available' ?
                            '#C4C4C4' :
                            null
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
                    <View style={{ width: 92, height: 70, marginLeft: 8 }}>
                        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>{textDetail}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน {
                            timeOut ?
                                timeOut :
                                'NaN'
                        }</Text>
                    </View>
                    <View style={[
                        flexRow ?
                            stylesDeal.Coupon_BOX_A2 :
                            stylesDeal.Coupon_BOX_A, {
                            backgroundColor:
                                colorCoupon ?
                                    colorCoupon :
                                    '#86CFFF',
                        }]}>
                        <View style={stylesDeal.Coupon_BOX_B}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>{couponText}</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={stylesDeal.Coupon_BOX_Text}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{
                                    useCoupon ?
                                        'ใช้โค้ด' :
                                        'เก็บ'
                                }</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    codeList != 'available' &&
                    <View style={{ backgroundColor: '#C1C1C1', opacity: 0.7, width: 169, height: 68 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                            color: '#fff', textAlign: 'center'
                        }]}>
                            {
                                codeList == 'usedCode' ?
                                    'ใช้แล้ว' :
                                    'หมดอายุ'
                            }
                        </Text>
                    </View>
                }
            </View>
        )
    }
    render() {
        return (
            this.setCoupon
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> ProductBox
export class ProductBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const {
            dataService, dispriceSize, mode, nameSize, navigation, pointerUrl, pointerid_store, postpath, prepath, priceSize, radiusBox,
            typeip,
        } = this.props
        const { ImageStore } = this.state
        if (
            ////>nextProps
            dataService !== nextProps.dataService || dispriceSize !== nextProps.dispriceSize || mode !== nextProps.mode ||
            nameSize !== nextProps.nameSize || navigation !== nextProps.navigation || pointerUrl !== nextProps.pointerUrl ||
            pointerid_store !== nextProps.pointerid_store || postpath !== nextProps.postpath || prepath !== nextProps.prepath ||
            priceSize !== nextProps.priceSize || radiusBox !== nextProps.radiusBox || typeip !== nextProps.typeip ||
            ////>nextState
            ImageStore !== nextState.ImageStore

        ) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    LoadingStore = (ImageStore) => {
        this.setState({ ImageStore })
    }
    get ProductBoxRender() {
        const {
            dataService, dispriceSize, mode, nameSize, pointerUrl, pointerid_store, postpath, prepath, priceSize, radiusBox, typeip,
        } = this.props
        const { ImageStore } = this.state
        return dataService.map((item, index) => {
            var discount
            item.discount && (
                discount = item.discount.replace("%", "")
            )
            var url
            { typeip == 'ip' ? url = ip : url = finip }
            var dataMySQL = typeip == 'ip' ?
                [url,
                    prepath ?
                        postpath ?
                            prepath + '/' + item.image_path + '/' + postpath :
                            prepath + '/' + item.image_path :
                        postpath ?
                            item.image_path + '/' + postpath :
                            item.image_path,
                    item.image].join('/') :
                [url, item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={index}
                    onPress={this.navigationNavigateScreen.bind(this, pointerUrl, pointerid_store ? { id_item: item.id_product } : null)}>
                    <View style={[
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
                        <View style={
                            mode == 'row4col1' ?
                                stylesMain.BoxProduct5ImageofLines :
                                mode == 'row3colall' ?
                                    stylesMain.BoxProduct2ImageofLines :
                                    mode == 'row2colall' ?
                                        stylesMain.BoxProduct3ImageofLines :
                                        mode == '5item' ?
                                            stylesMain.BoxProduct1ImageofLines2 :
                                            stylesMain.BoxProduct1ImageofLines
                        }>
                            {
                                ImageStore == 'false' &&
                                <Text style={[stylesMain.BoxProduct5Image, { textAlign: 'center', textAlignVertical: 'center' }]}>
                                    Loading Image...</Text>
                            }
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[
                                    mode == 'row4col1' ?
                                        stylesMain.BoxProduct5Image :
                                        mode == 'row3colall' || mode == '5item' ?
                                            stylesMain.BoxProduct2Image :
                                            stylesMain.BoxProduct1Image,
                                    {
                                        borderTopLeftRadius: radiusBox ? radiusBox : 0,
                                        borderTopRightRadius: radiusBox ? radiusBox : 0
                                    }
                                ]}
                                onError={this.LoadingStore.bind(this, false)}
                                onLoad={this.LoadingStore.bind(this, true)}
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
                                    {item.name}</Text>
                            </View>
                            <View style={[
                                stylesMain.BoxProduct1PriceofLines,
                            ]}>
                                <View style={[stylesMain.FlexRow, { paddingVertical: 2 }]}>
                                    <NumberFormat
                                        value={item.price_discount ? item.price_discount : item.full_price ? item.full_price : item.price}
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
                                                            {'-' + value}</Text>
                                                    </View>
                                            } />
                                    }
                                </View>
                                {
                                    item.price_discount &&
                                    <NumberFormat
                                        value={item.price}
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
        })
    }
    render() {
        return (
            this.ProductBoxRender
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> FeedBox
export class FeedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFeed: false
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, Follow, Header, navigation, postpath, prepath, typeip, } = this.props
        const { activeFeed, Button_Follow_After, } = this.state
        if (
            ////>nextProps
            dataService !== nextProps.dataService || Follow !== nextProps.Follow || Header !== nextProps.Header ||
            navigation !== nextProps.navigation || postpath !== nextProps.postpath || prepath !== nextProps.prepath ||
            typeip !== nextProps.typeip ||
            ////>nextState
            activeFeed !== nextState.activeFeed || Button_Follow_After !== nextState.Button_Follow_After
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
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
                message: 'หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n' + finip,
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
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    setStateButton = (length) => {
        var Button_Follow_After = []
        for (var n = 0; n < length; n++) {
            Button_Follow_After[n] = { check: true, like: false }
        }
        this.setState({ Button_Follow_After, activeFeed: true, })
    }
    setStateButton_Follow_After = (index) => {
        const { Button_Follow_After, } = this.state
        Button_Follow_After[index].check = !Button_Follow_After[index].check
        this.setState({ Button_Follow_After, activeFeed: true })
    }
    setStateButton_Like_heart = (index) => {
        const { Button_Follow_After, } = this.state
        Button_Follow_After[index].like = !Button_Follow_After[index].like
        this.setState({ Button_Follow_After, activeFeed: true })
    }
    get FeedBoxRender() {
        const { Button_Follow_After, } = this.state
        const { dataService, Follow, Header, typeip, postpath, prepath, } = this.props
        Button_Follow_After == null && dataService.length > 0 && (
            this.setStateButton(dataService.length)
        )
        return dataService.map((item, index) => {
            var url
            { typeip == 'ip' ? url = ip : url = finip }
            var dataMySQL_p
            Header ?
                dataMySQL_p = typeip == 'ip' ?
                    [url,
                        prepath ?
                            postpath ?
                                prepath + '/' + item.image_path + '/' + postpath :
                                prepath + '/' + item.image_path :
                            postpath ?
                                item.image_path + '/' + postpath :
                                item.image_path,
                        item.p_image].join('/') :
                    [url, item.image_path, item.p_image].join('/') :
                dataMySQL_p = typeip == 'ip' ?
                    [url,
                        prepath ?
                            postpath ?
                                prepath + '/' + item.image_path + '/' + postpath :
                                prepath + '/' + item.image_path :
                            postpath ?
                                item.image_path + '/' + postpath :
                                item.image_path,
                        item.image].join('/') :
                    [url, item.image_path, item.image].join('/');
            var dataMySQL_s = ip + '/' + 'mysql/uploads/slide/NewStore' + '/' + item.s_image;
            return (
                <View style={stylesMain.BoxProduct4Box} key={index}>
                    {
                        Header &&
                        <View style={stylesMain.BoxProduct4PlusHeader}>
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', {
                                id_item: item.p_id_store
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
                                        {item.s_name}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={stylesMain.BoxProduct4PlusButtonBox}>
                                {
                                    Follow ?
                                        null :
                                        <TouchableOpacity onPress={this.setStateButton_Follow_After.bind(this, index)}>
                                            <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                                                <Text style={[
                                                    stylesMain.BoxProduct4PlusButtonFollowText, stylesFont.FontFamilyText,
                                                    stylesFont.FontSize6
                                                ]}>
                                                    {Button_Follow_After[index].check == true ? 'ติดตาม' : 'กำลังติดตาม'}</Text>
                                            </View>
                                        </TouchableOpacity>
                                }
                                <ModalDropdown
                                    options={['รายงานความไม่เหมาะสม']}
                                    dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}
                                    dropdownStyle={{ paddingHorizontal: 10, height: 44, borderRadius: 5 }}>
                                    <IconEntypo name='dots-three-vertical' size={25} />
                                </ModalDropdown>
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
                                {item.detail}</Text>
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                                ที่สุดสำหรับคุณ</Text>
                            <View style={stylesMain.FlexRow}>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#9F9C9C' }]}>
                                    200 การเข้าชม</Text>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#9F9C9C' }]}>
                                    เมื่อ 3 วันที่ผ่านมา</Text>
                            </View>
                        </View>
                        <View style={stylesMain.BoxProduct4ComBox2}>
                            <TouchableOpacity activeOpacity={1} onPress={this.setStateButton_Like_heart.bind(this, index)} style={
                                stylesMain.BoxProduct4ComBoxIcon}>
                                {
                                    Button_Follow_After &&
                                    <IconFontAwesome name={Button_Follow_After[index].like == true ? 'heart' : 'heart-o'} size={20} style={{
                                        color: Button_Follow_After[index].like == true ? '#ff0066' : '#111111'
                                    }} />
                                }
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ถูกใจ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Deal_Topic', {selectedIndex: 9})}>
                                <View style={stylesMain.BoxProduct4ComBoxIcon}>
                                    <IconFontAwesome5 name='comment-dots' size={20} />
                                    <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                        แสดงความคิดเห็น</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesMain.BoxProduct4ComBoxIcon} onPress={this.onShare}>
                                <IconFontAwesome5 name='share-square' size={20} />
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    แชร์</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        })
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { modalVisible } = this.state
        if (
            ////>nextProps
            ////>nextState
            modalVisible !== nextState.modalVisible
        ) {
            return true
        }
        return false
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
export class BrowerScreen extends React.Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        const { url } = this.props
        if (url !== nextProps.url) {
            return true
        }
        return false
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { url } = this.props
        if (
            ////>nextProps
            url !== nextProps.url
            ////>nextState
        ) {
            return true
        }
        return false
    }
    render() {
        const { url } = this.props
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
}
///----------------------------------------------------------------------------------------------->>>> SlideTab2
export class SlideTab2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeText: false,
            selectedIndex: null,
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { data, navigation, setStateSliderVisible, sliderVisible, } = this.props
        const { activeText, dataService, selectedIndex, } = this.state
        if (
            ////>nextProps
            data !== nextProps.data || navigation !== nextProps.navigation || setStateSliderVisible !== nextProps.setStateSliderVisible ||
            sliderVisible !== nextProps.sliderVisible ||
            ////>nextState
            activeText !== nextState.activeText || dataService !== nextState.dataService || selectedIndex !== nextState.selectedIndex
        ) {
            return true
        }
        return false
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }
    dataItem(item) {
        const { selectedIndex } = this.state
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap' }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    SetValue={selectedIndex != null ? selectedIndex : -1}
                    item={item}
                    type='box'
                    noLimit
                    numberBox
                    NoSelectTab
                    radiusBox={4} />
            </View>
        )
    }
    setStateActiveText = (activeText) => {
        this.setState({ activeText })
    }
    setStateSliderVisible = () => {
        const { setStateSliderVisible } = this.props
        setStateSliderVisible(false)
    }
    render() {
        const { data, sliderVisible } = this.props
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
                        onPress={this.setStateSliderVisible.bind(this)}>
                        <View style={stylesTopic.BackgroundLeft}></View>
                    </TouchableOpacity>
                    <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNB]}>
                        <View>
                            <ScrollView>
                                {
                                    data.map((item, index) => {
                                        return <SlideTab item={item} key={index} />
                                    })
                                }
                                <PricesSlide />
                            </ScrollView>
                            <View style={[stylesMain.FlexRow, { height: 70 }]}>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                        color: '#0A55A6'
                                    }]}>
                                        รีเซ็ต</Text>
                                </View>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                        color: '#fff'
                                    }]}>
                                        เสร็จสิ้น</Text>
                                </View>
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
            activeText: false,
            selectedIndex: null,
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { item, navigation, } = this.props
        const { activeText, selectedIndex, } = this.state
        if (
            ////>nextProps
            item !== nextProps.item || navigation !== nextProps.navigation ||
            ////>nextState
            activeText !== nextState.activeText || selectedIndex !== nextState.selectedIndex
        ) {
            return true
        }
        return false
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }
    dataItem(item) {
        const { selectedIndex } = this.state
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap' }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    SetValue={selectedIndex != null ? selectedIndex : -1}
                    item={item}
                    type='box'
                    noLimit
                    numberBox
                    NoSelectTab
                    radiusBox={4} />
            </View>
        )
    }
    setStateActiveText = (activeText) => {
        this.setState({ activeText })
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
                                activeText == true ?
                                    85 + ((Math.ceil(item.subtitle.length / 2) - 1) * 35) :
                                    85 + (35 * 1)
                        }}>
                            {
                                activeText == true ?
                                    this.dataItem(item.subtitle) :
                                    <ScrollView scrollEnabled={false}>
                                        {this.dataItem(item.subtitle)}
                                    </ScrollView>
                            }
                            {item.subtitle.length > 4 &&
                                <TouchableOpacity
                                    onPress={this.setStateActiveText.bind(this, !activeText)}>
                                    <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter, {
                                        borderTopWidth: null,
                                    }]}>
                                        <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, {
                                            fontFamily: 'SukhumvitSet-Text',
                                        }]}>
                                            {
                                                activeText == true ?
                                                    'ย่อ' :
                                                    'ดูเพิ่มเติม'
                                            }</Text>
                                        <IconEntypo name={activeText == true ? 'chevron-up' : 'chevron-down'} size={25} color='#0A55A6' />
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
                                stylesTopic.maxMinValue]} />
                            <Text style={[stylesMain.ItemCenterVertical, { fontSize: 28, marginHorizontal: 8 }]}>-</Text>
                            <TextInput placeholder='สูงสุด' style={[
                                stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesFont.FontSize6,
                                stylesTopic.maxMinValue]} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}