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
import { GetData } from '../MainScreen';
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
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser })
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
        const { activeGetCurrentUser, currentUser } = this.state;
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
                {
                    activeGetCurrentUser == true &&
                    <GetData getSource={this.getSource.bind(this)} getUser={true} />
                }
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
            activeColor, activeFontColor, fontColor, fontSizeStyle, inactiveBoxColor, inactiveColor, inactiveFontColor, item, limitBox,
            noLimit, NoSelectTab, noSpace, numberBox, numberOfLines, radiusBox, SetValue, setVertical, spaceColor, tagBottom,
            tagBottomColor, type, widthBox,
        } = this.props
        const { PassSetValue, pathlist, pathlist2 } = this.state
        const countItem = item.length;
        SetValue && SetValue != pathlist &&
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
                            this.setSelectTab.bind(this, -1) :
                            this.setSelectTab.bind(this, index) :
                        item.actionItem && pathlist == index ?
                            this.setSelectTab.bind(this, index, undefined, 'swap') :
                            item.actionItem ?
                                this.setSelectTab.bind(this, index, undefined, 'set') :
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
                                        {
                                            flexDirection: 'row'
                                        }
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
                                                    'black',
                                        textAlignVertical: 'center'
                                    }]}>
                                        {item.name}
                                    </Text>
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
                                        {
                                            flexDirection: 'row'
                                        }
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
                                                    'black',
                                        textAlignVertical: 'center'
                                    }]}>
                                        {item.name}
                                    </Text>
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
    getDataSource = async () => {
        const { Authorization, dataBody, uriPointer, getDataSource, nojson, noSendError, noStringify, showConsole, } = this.props
        showConsole && (
            console.log(showConsole),
            Authorization && (
                console.log('Authorization'),
                console.log(Authorization)
            ),
            console.log('uri'),
            console.log(uriPointer),
            console.log('dataBody'),
            console.log(dataBody),
            console.log('JSONdataBody'),
            console.log(JSON.stringify(dataBody))
        )
        fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Authorization
            },
            body: noStringify ? JSON.parse(dataBody) : JSON.stringify(dataBody),
        })
            .then((response) => nojson ? response.text() : response.json())
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
    get setCoupon() {
        const {
            codeList, colorCoupon, couponText, getCoupon, flexRow, saveCoupon, setDataService, textDetail, timeOut, useCoupon,
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
                    <View style={{ backgroundColor: '#C1C1C1', opacity: 0.7, width: 213, height: 80, marginTop: -10, borderRadius: 5, alignItems: 'center' }}>
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
            dataService, dispriceSize, mode, nameSize, numberOfItem, onShow, pointerUrl, pointerid_store, postpath, prepath, priceSize,
            radiusBox, typeip,
        } = this.props
        onShow && ([console.log('ProductBoxRender'), console.log(dataService)])
        const { ImageStore } = this.state
        return dataService.map((item, index) => {
            onShow && ([console.log('ProductBoxRender|||map'), console.log(item)])
            if (index < (numberOfItem ? numberOfItem : dataService.length)) {
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
                        item.image_product ?
                            item.image_product :
                            item.image].join('/') :
                    [
                        url,
                        item.path_image_product ? item.path_image_product : item.image_path,
                        item.image_product ? item.image_product : item.image_main ? item.image_main : item.image
                    ].join('/');
                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={this.navigationNavigateScreen.bind(this, pointerUrl, pointerid_store ? {
                            id_item: item.id_product
                        } : null)}>
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
            }
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
                            <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Deal_Topic', { selectedIndex: 9 })}>
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
                        onPress={this.setStateSliderVisible.bind(this)}>
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
                                        color: '#0A55A6'
                                    }]}>
                                        รีเซ็ต</Text>
                                </View>
                                <TouchableOpacity onPress={() => { filterValue(filter) }}>
                                    <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
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
                    SetValue={activeTabBar == true ? selectedIndex != null ? selectedIndex : -1 : undefined}
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