///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
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
export class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataasync()
    }
    render() {
        const { currentUser } = this.state;
        var u_name = null;
        if (currentUser != null) {
            u_name = currentUser.name;
        }
        return (
            <View style={stylesMain.Toolbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="tagso" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}> Feed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="notification" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')}>
                    <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                        <IconAntDesign name="bells" size={25} />
                        <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>เตือน</Text>
                    </View>
                </TouchableOpacity>
                {u_name == null ?
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')}>
                        <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                            <IconAntDesign name="user" size={25} />
                            <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>ฉัน</Text>
                        </View>
                    </TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('ProfileScreen')}>
                        <View style={{ alignItems: 'center', width: width * (1 / 5) }}>
                            <IconAntDesign name="user" size={25} />
                            <Text style={{ fontSize: 13, fontFamily: 'SukhumvitSet-Text' }}>
                                {
                                    u_name.length > 6 ?
                                        'บัญชีของ' + u_name.substring(0, 3) + '...' :
                                        'บัญชีของ' + u_name
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathlist: 0,
            PassSetValue: 0,
        }
    }
    // setDataItem() {
    //     const { setData } = this.props
    //     if (setData.activeSetData < 1) {
    //         setData.activeSetData = setData.activeSetData + 1
    //     }
    // }
    /*
    // v0.6.28012020
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
    tab() {
        const {
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, limitBox, SetValue, fontSizeStyle, numberBox,
            NoSelectTab, tagBottom, numberOfLines
        } = this.props;
        const { PassSetValue, pathlist } = this.state
        const countItem = item.length;
        PassSetValue < 1 ?
            SetValue ?
                (this.setState({ pathlist: SetValue, PassSetValue: PassSetValue + 1 }),
                    this.props.sendData(SetValue)) :
                null :
            null
        return item.map((item, index) => {
            return (
                <TouchableOpacity key={index} activeOpacity={
                    type == 'box' ?
                        0.2 :
                        1
                } onPress={() => {
                    NoSelectTab ?
                        (
                            pathlist == index ?
                                (
                                    this.setState({ pathlist: -1 }),
                                    this.props.sendData(-1)
                                ) :
                                (
                                    this.setState({ pathlist: index }),
                                    this.props.sendData(index)
                                )
                        ) :
                        (
                            this.setState({ pathlist: index }),
                            this.props.sendData(index)
                        );
                }}>
                    {
                        pathlist == index ?
                            <View style={{
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
                                borderRightWidth: type == 'tag' ? index == countItem ? null : 0.5 : null,
                                alignContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: type == 'box' ?
                                    null :
                                    activeColor ? activeColor : '#0A55A6',
                                borderBottomWidth: type == 'tag' ? null : type == 'box' ? null : 4,
                                paddingLeft: numberBox ? width * (1 / 60) : null,
                                paddingTop: numberBox ? 10 : null,
                            }}>
                                <View style={
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
                                }>
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
                            <View style={{
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
                                borderRightWidth: type == 'tag' ? index == countItem ? null : 0.5 : null,
                                alignContent: 'center', alignItems: 'center',
                                paddingLeft: numberBox ? width * (1 / 60) : null,
                                paddingTop: numberBox ? 10 : null,
                            }}>
                                <View style={
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
                                }>
                                    <Text numberOfLines={numberOfLines} style={[stylesFont.FontFamilySemiBold, {
                                        fontSize: fontSizeStyle ? fontSizeStyle : 16,
                                        color: inactiveFontColor ? inactiveFontColor : fontColor ? fontColor : 'black'
                                    }]}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                    }
                    {
                        item.subname ?
                            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, {
                                    borderBottomColor: tagBottom ? pathlist == index ? tagBottom : '#fff' : null,
                                    borderBottomWidth: tagBottom ? 4 : null,
                                    width: '90%', textAlign: 'center'
                                }]}>
                                    {item.subname}
                                </Text>
                            </View> :
                            null
                    }
                </TouchableOpacity>
            )
        })
    }
    render() {
        const {
            item, activeColor, activeWidth, type, radiusBox, activeFontColor, inactiveFontColor, inactiveColor, inactiveBoxColor,
            noSpace, direction, alignBox, widthBox, spaceColor, fontColor, noLimit, numberBox, noMarginIop
        } = this.props;
        return (
            numberBox ?
                (
                    this.tab()
                ) :
                (
                    <View style={
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
                                paddingTop: noMarginIop ? null : 10,
                                borderWidth: type == 'tag' ? null : noSpace ? null : 1,
                                backgroundColor: spaceColor ? spaceColor : null,
                                borderColor: type == 'tag' ? null : spaceColor ? spaceColor : '#ECECEC',
                                flexDirection: direction == 'column' ? 'column' : 'row',
                                width: noLimit ? null : '100%',
                            }
                    }>
                        {this.tab()}
                    </View>
                )
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class GetServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }
    getDataSource = async () => {
        const { dataBody, uriPointer } = this.props
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
                this.props.getDataSource(responseJson);
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
///----------------------------------------------------------------------------------------------->>>>
export class GetCoupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    setCoupon() {
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
                    codeList != 'available' ?
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
                        </View> :
                        null
                }
            </View>
        )
    }
    render() {
        return (
            this.setCoupon()
        )
    }
}
export class ProductBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    ProductBoxRender() {
        const { dataService, dispriceSize, typeip, mode, navigation, nameSize, pointerUrl, pointerid_store, postpath, prepath, priceSize } = this.props
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
                    onPress={() => navigation.push(
                        pointerUrl,
                        pointerid_store ?
                            { id_item: item.id_product } :
                            null
                    )}
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
                                <View style={[stylesMain.FlexRow,{paddingVertical:2}]}>
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
                                    <View style={[stylesMain.Box_On_sale,{borderRadius:10}]}>
                                    <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize8,{color:'#FFFFFF'}]}>{'-' + discount + '%'}</Text>
                                    </View>
                                </View>
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText, {
                                                marginTop: 0,
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
            this.ProductBoxRender()
        )
    }
}
export class FeedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    FeedBoxRender() {
        const { dataService, Follow, Header, typeip, navigation, postpath, prepath } = this.props
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
            var dataMySQL_s = [ip + '/mysql/uploads/slide/NewStore', item.s_image].join('/');
            return (
                <View style={stylesMain.BoxProduct4Box} key={index}>
                    {
                        Header ?
                            <View style={stylesMain.BoxProduct4PlusHeader}>
                                <TouchableOpacity onPress={() => { navigation.navigate('StoreScreen', { id_item: item.p_id_store }) }}>
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
                            </View> :
                            null
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
            this.FeedBoxRender()
        )
    }
}
export class LoadingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderVisible: false,
        };
        this.springValue = new Animated.Value(0);
    }
    render() {
        return (
            <View elevation={1} style={[stylesMain.ItemCenter, {
                width, height, opacity: 1, position: 'relative', backgroundColor: '#0A55A6'
            }]}>
                <View style={stylesMain.ItemCenterVertical}>
                    <FastImage
                        style={[{ width: 300, height: 180 }]}
                        source={require('../../images/iconlogo.png')}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
            </View>
        )
    }
}