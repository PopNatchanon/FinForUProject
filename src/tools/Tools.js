///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Modal, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import { WebView } from 'react-native-webview';
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Toolbar
export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { currentUser } = this.state
        const { navigation } = this.props
        if (currentUser !== nextState.currentUser || navigation !== nextProps.navigation) {
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
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.replace(value)
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
                    onPress={routeSelcet != 'MainScreen' ? this.navigationNavigateScreen.bind(this, 'MainScreen') : null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="home" size={25} color={routeSelcet == 'MainScreen' ? '#0A55A6' : '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'MainScreen' ? '#0A55A6' : '#111'
                        }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={routeSelcet != 'FeedScreen' ? this.navigationNavigateScreen.bind(this, 'FeedScreen') : null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="tagso" size={25} color={routeSelcet == 'FeedScreen' ? '#0A55A6' : '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'FeedScreen' ? '#0A55A6' : '#111'
                        }}> Feed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={routeSelcet != 'NewsScreen' ? this.navigationNavigateScreen.bind(this, 'NewsScreen') : null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="notification" size={25} color={routeSelcet == 'NewsScreen' ? '#0A55A6' : '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'NewsScreen' ? '#0A55A6' : '#111'
                        }}>News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                    onPress={routeSelcet != 'BellScreen' ? this.navigationNavigateScreen.bind(this, 'BellScreen') : null}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="bells" size={25} color={routeSelcet == 'BellScreen' ? '#0A55A6' : '#111'} />
                        <Text style={{
                            fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'BellScreen' ? '#0A55A6' : '#111'
                        }}>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {
                    currentUser == null ?
                        <TouchableOpacity activeOpacity={1}
                            onPress={routeSelcet != 'LoginScreen' ? this.navigationNavigateScreen.bind(this, 'LoginScreen') : null}>
                            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                                <IconAntDesign name="user" size={25} color={routeSelcet == 'LoginScreen' ? '#0A55A6' : '#111'} />
                                <Text style={{
                                    fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'LoginScreen' ? '#0A55A6' : '#111'
                                }}>ฉัน</Text>
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1}
                            onPress={routeSelcet != 'ProfileScreen' ? this.navigationNavigateScreen.bind(this, 'ProfileScreen') : null}>
                            <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                                <IconAntDesign name="user" size={25} color={routeSelcet == 'ProfileScreen' ? '#0A55A6' : '#111'} />
                                <Text numberOfLines={1} style={{
                                    fontSize: 13, fontFamily: 'SukhumvitSet-Text', color: routeSelcet == 'ProfileScreen' ? '#0A55A6' : '#111'
                                }}>{u_name}</Text>
                            </View>
                        </TouchableOpacity>
                }
            </View >
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
        const { currentUser, PassSetValue, pathlist } = this.state
        const { activeColor, fontColor, item, noSpace, sendData, setVertical, spaceColor, widthBox, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor, direction, alignBox, noLimit, limitBox, SetValue, fontSizeStyle, numberBox, NoSelectTab, tagBottom, numberOfLines, tagBottomColor,
        } = this.props
        if (currentUser !== nextState.currentUser || PassSetValue !== nextState.PassSetValue || pathlist !== nextState.pathlist || activeColor !== nextProps.activeColor || fontColor !== nextProps.fontColor || item !== nextProps.item || noSpace !== nextProps.noSpace || sendData !== nextProps.sendData || setVertical !== nextProps.setVertical || spaceColor !== nextProps.spaceColor || widthBox !== nextProps.widthBox || activeWidth !== nextProps.activeWidth || type !== nextProps.type || radiusBox !== nextProps.radiusBox || activeFontColor !== nextProps.activeFontColor || inactiveFontColor !== nextProps.inactiveFontColor || inactiveColor !== nextProps.inactiveColor || inactiveBoxColor !== nextProps.inactiveBoxColor || direction !== nextProps.direction || alignBox !== nextProps.alignBox || noLimit !== nextProps.noLimit || limitBox !== nextProps.limitBox || SetValue !== nextProps.SetValue || fontSizeStyle !== nextProps.fontSizeStyle || numberBox !== nextProps.numberBox || NoSelectTab !== nextProps.NoSelectTab || tagBottom !== nextProps.tagBottom || numberOfLines !== nextProps.numberOfLines || tagBottomColor !== nextProps.tagBottomColor) {
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
    // fontColor='#fff'
    />*/
    setSelectTab = (pathlist, PassSetValue) => {
        this._isMounted = true;
        const { sendData } = this.props
        if (this._isMounted) {
            this.setState({ pathlist, PassSetValue })
            sendData(pathlist)
        }
    }
    get tab() {
        const {
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, limitBox, SetValue, fontSizeStyle, numberBox,
            NoSelectTab, tagBottom, numberOfLines, setVertical, tagBottomColor,
        } = this.props;
        const { PassSetValue, pathlist } = this.state
        const countItem = item.length;
        PassSetValue < 1 &&
            SetValue &&
            this.setSelectTab.bind(SetValue, PassSetValue + 1)
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
                                    borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                                    borderRightWidth: type == 'tag' ? index == countItem - 1 ? null : 0.5 : null,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    borderBottomColor: type == 'box' ?
                                        null :
                                        activeColor ? activeColor : '#0A55A6',
                                    borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4,
                                    paddingLeft: numberBox ? width * (1 / 60) : null,
                                    paddingVertical: setVertical ? setVertical : null
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
                                            borderLeftWidth: noSpace ? 0.5 : null,
                                            borderRightWidth: noSpace ? 0.5 : null,
                                            borderWidth: 1,
                                            borderColor: activeColor ? activeColor : '#0A55A6',
                                            backgroundColor: activeColor ? activeColor : '#0A55A6',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: radiusBox ? radiusBox : 0,
                                        } :
                                        null
                                ]}>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize: fontSizeStyle ? fontSizeStyle : 16,
                                        color: type == 'box' ?
                                            activeFontColor ? activeFontColor : fontColor ? fontColor : 'white' :
                                            activeFontColor ? activeFontColor : fontColor ? fontColor : 'black'
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
                                    borderLeftWidth: type == 'tag' ? index == 0 ? null : 0.5 : null,
                                    borderRightWidth: type == 'tag' ? index == countItem - 1 ? null : 0.5 : null,
                                    borderBottomColor: type == 'box' ?
                                        null :
                                        spaceColor ? spaceColor : '#fff',
                                    borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4,
                                    alignContent: 'center', alignItems: 'center',
                                    paddingLeft: numberBox ? width * (1 / 60) : null,
                                    paddingVertical: setVertical ? setVertical : null
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
                                            borderLeftWidth: noSpace ? 0.5 : null,
                                            borderRightWidth: noSpace ? 0.5 : null,
                                            borderWidth: 1,
                                            backgroundColor: inactiveBoxColor ? inactiveBoxColor : null,
                                            borderColor: inactiveColor ? inactiveColor : 'black',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: radiusBox ? radiusBox : 0,
                                        } :
                                        null
                                ]}>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize: fontSizeStyle ? fontSizeStyle : 16,
                                        color: inactiveFontColor ? inactiveFontColor : fontColor ? fontColor : 'black'
                                    }]}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                    }{
                        item.subname &&
                        <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, {
                                borderBottomColor: tagBottom ? pathlist == index ? tagBottom : tagBottomColor ? tagBottomColor : '#fff' : null,
                                borderBottomWidth: tagBottom ? 4 : null,
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
                                    borderBottomWidth: tagBottom ? 4 : null,
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
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, numberBox,
        } = this.props;
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
                                borderLeftWidth: noSpace ? 0.5 : null,
                                borderRightWidth: noSpace ? 0.5 : null,
                                flexDirection: direction == 'column' ? 'column' : 'row',
                                justifyContent:
                                    alignBox == 'center' ?
                                        'center' :
                                        alignBox == 'right' ?
                                            'flex-end' :
                                            'flex-start'
                            } :
                            {
                                borderWidth: type == 'tag' ? null : noSpace ? null : 1,
                                backgroundColor: spaceColor ? spaceColor : null,
                                borderColor: type == 'tag' ? null : spaceColor ? spaceColor : '#ECECEC',
                                flexDirection: direction == 'column' ? 'column' : 'row',
                                width: noLimit ? null : '100%',
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
        const { dataBody, getDataSource, uriPointer } = this.props
        if (dataBody !== nextProps.dataBody || getDataSource !== nextProps.getDataSource || uriPointer !== nextProps.uriPointer) {
            return true
        }
        return false
    }
    getDataSource = async () => {
        this._isMounted = true;
        const { dataBody, uriPointer, getDataSource } = this.props
        fetch(uriPointer, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataBody),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                getDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getDataSource()
    }
    render() {
        return (<View></View>)
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
            colorCoupon, couponText, textDetail, timeOut, useCoupon, flexRow, codeList
        } = this.props
        return (
            <View style={[flexRow ? stylesDeal.Coupon_BOX2 : stylesDeal.Coupon_BOX, {
                backgroundColor: codeList != 'available' ? '#C4C4C4' : null
            }]}>
                <View style={{
                    opacity: codeList != 'available' ? 0.4 : null,
                    flexDirection: 'row',
                    justifyContent: flexRow ? null : 'flex-end',
                    marginBottom: codeList != 'available' ? -70 : null,
                }}>
                    <View style={{ width: 92, height: 70, marginLeft: 8 }}>
                        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>{textDetail}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน {timeOut ? timeOut : 'NaN'}</Text>
                    </View>
                    <View style={[flexRow ? stylesDeal.Coupon_BOX_A2 : stylesDeal.Coupon_BOX_A, { backgroundColor: colorCoupon ? colorCoupon : '#86CFFF', }]}>
                        <View style={stylesDeal.Coupon_BOX_B}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>{couponText}</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={stylesDeal.Coupon_BOX_Text}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{useCoupon ? 'ใช้โค้ด' : 'เก็บ'}</Text>
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
        const { dataService, dispriceSize, typeip, mode, nameSize, postpath, prepath, priceSize, navigation, pointerUrl, pointerid_store } = this.props
        if (dataService !== nextProps.dataService || dispriceSize !== nextProps.dispriceSize || typeip !== nextProps.typeip || mode !== nextProps.mode || nameSize !== nextProps.nameSize || postpath !== nextProps.postpath || prepath !== nextProps.prepath || priceSize !== nextProps.priceSize || navigation !== nextProps.navigation || pointerUrl !== nextProps.pointerUrl || pointerid_store !== nextProps.pointerid_store) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.push(value, value2)
    }
    get ProductBoxRender() {
        const { dataService, dispriceSize, typeip, mode, nameSize, postpath, prepath, priceSize, pointerUrl, pointerid_store } = this.props
        return dataService.map((item, index) => {
            var throughsale = Number(item.full_price) + (item.full_price * 0.5)
            var discount = 55
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
                    onPress={this.navigationNavigateScreen.bind(this, pointerUrl, pointerid_store ? { id_item: item.id_product } : null)}
                >
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
                        { marginBottom: mode == 'row3col2_2' ? 4 : null }
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
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={
                                    mode == 'row4col1' ?
                                        stylesMain.BoxProduct5Image :
                                        mode == 'row3colall' || mode == '5item' ?
                                            stylesMain.BoxProduct2Image :
                                            stylesMain.BoxProduct1Image
                                }
                                resizeMode={FastImage.resizeMode.contain}
                            />
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
                                        value={item.full_price}
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
                                        }
                                    />
                                    <View style={[stylesMain.Box_On_sale, { borderRadius: 10 }]}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF' }]}>{'-' + discount + '%'}</Text>
                                    </View>
                                </View>
                                <NumberFormat
                                    value={throughsale}
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
                                    }
                                />
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
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, Follow, Header, typeip, postpath, prepath, navigation, } = this.props
        if (dataService !== nextProps.dataService || Follow !== nextProps.Follow || Header !== nextProps.Header || typeip !== nextProps.typeip || postpath !== nextProps.postpath || prepath !== nextProps.prepath || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation, } = this.props
        navigation.push(value, value2)
    }
    get FeedBoxRender() {
        const { dataService, Follow, Header, typeip, postpath, prepath } = this.props
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
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: item.p_id_store })}>
                                <View style={stylesMain.FlexRow}>
                                    <FastImage
                                        style={stylesMain.BoxProduct4PlusImage}
                                        source={{
                                            uri: dataMySQL_s,
                                        }}
                                    />
                                    <Text style={[
                                        stylesMain.BoxProduct4PlusImageText, stylesFont.FontFamilyBold, stylesFont.FontSize5
                                    ]}>
                                        {item.s_name}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={stylesMain.BoxProduct4PlusButtonBox}>
                                {Follow ?
                                    null :
                                    <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                                        <Text style={[
                                            stylesMain.BoxProduct4PlusButtonFollowText, stylesFont.FontFamilyText, stylesFont.FontSize6
                                        ]}>
                                            ติดตาม</Text>
                                    </View>
                                }
                                <IconEntypo name='dots-three-vertical' size={25} />
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
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={stylesMain.BoxProduct4ComBox}>
                            <Text style={[stylesMain.BoxProduct4ComBoxDetail, stylesStore.SukhumvitSetText]}>
                                {item.detail}</Text>
                            <Text style={[stylesMain.BoxProduct4ComBoxTag, stylesStore.SukhumvitSetText]}>
                                ที่สุดสำหรับคุณ</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[stylesMain.BoxProduct4ComBoxText, stylesStore.SukhumvitSetText]}>
                                    200 การเข้าชม</Text>
                                <Text style={[stylesMain.BoxProduct4ComBoxText, stylesStore.SukhumvitSetText]}>
                                    เมื่อ 3 วันที่ผ่านมา</Text>
                            </View>
                        </View>
                        <View style={stylesMain.BoxProduct4ComBox2}>
                            <View style={stylesMain.BoxProduct4ComBoxIcon}>
                                <IconFontAwesome5 name='heart' size={20} />
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                    ถูกใจ</Text>
                            </View>
                            <View style={stylesMain.BoxProduct4ComBoxIcon}>
                                <IconFontAwesome5 name='comment-dots' size={20} />
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                    แสดงความคิดเห็น</Text>
                            </View>
                            <View style={stylesMain.BoxProduct4ComBoxIcon}>
                                <IconFontAwesome5 name='share-square' size={20} />
                                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                    แชร์</Text>
                            </View>
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
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
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
    render() {
        const { url } = this.props
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    source={{
                        uri: url
                    }}
                    style={{ flex: 1 }}
                />
            </View>
        )
    }
}