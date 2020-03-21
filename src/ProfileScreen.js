///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesProfile from '../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
import { GetCoupon, TabBar, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class StoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { currentUser } = this.state;
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
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataAsync()
    }
    render() {
        const { navigation } = this.props
        const { currentUser } = this.state;
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                <ScrollView>
                    <View>
                        {
                            currentUser &&
                            <Headbar navigation={navigation} currentUser={currentUser} />
                        }
                        <Menubar navigation={navigation} />
                        <Listbar navigation={navigation} />
                    </View>
                </ScrollView>
                <Toolbar navigation={navigation} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Headbar
export class Headbar extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { currentUser, navigation, statusOnline, } = this.props
        if (
            ////>nextProps
            currentUser !== nextProps.currentUser || navigation !== nextProps.navigation || statusOnline !== nextProps.statusOnline
            ////>nextState
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
                navigation.navigate(value, value2)
    }
    render() {
        const { currentUser, statusOnline } = this.props
        const uri = finip + '/' + currentUser.image_path + '/' + currentUser.image
        return (
            <View>
                <TouchableOpacity activeOpacity={1}
                    onPress={this.navigationNavigateScreen.bind(this, 'Setting_Topic', { selectedIndex: 0 })}>
                    <View style={{ backgroundColor: '#4a4a4a', }}>
                        <ImageBackground
                            source={require('../icon/bgprofile.jpg')}
                            style={stylesProfile.HeadbarImage} />
                    </View>
                </TouchableOpacity>
                <View style={stylesProfile.HeadbarA}>
                    <View style={stylesProfile.HeadbarBox1}>
                        <View style={stylesMain.FlexRow}>
                            <View>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this, 'StoreMeScreen')}>
                                    <View style={stylesProfile.HeadbarBox1Sub}>
                                        <Text style={[
                                            stylesProfile.HeadbarBox1SubText, stylesFont.FontFamilyText, stylesFont.FontSize6
                                        ]}>
                                            เริ่มค้าขาย</Text>
                                    </View>
                                </TouchableOpacity>
                                <FastImage
                                    source={{ uri: uri }}
                                    style={[stylesProfile.HeadbarBoxImage, stylesMain.ItemCenter]}>
                                    {/* <IconFontAwesome5 name="user-alt" size={50} color='#1a3263' /> */}
                                </FastImage>
                            </View>
                            <View style={{ marginLeft: 15, marginTop: '21%' }}>
                                <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>
                                    {currentUser.name}</Text>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, {
                                    color:
                                        statusOnline ?
                                            '#BEBDBD' :
                                            '#43e855',
                                }]}>
                                    <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#43e855' }}>
                                    </View> Active อยู่</Text>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>
                                    ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 8 }}>
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'SettingScreen')}>
                                <IconMaterialCommunityIcons RightItem name="settings-outline" style={{ marginRight: 6 }}
                                    size={25} color='#FFFFFF' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'CartScreen')}>
                                <IconFeather RightItem name="shopping-cart" size={25} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Menubar
export class Menubar extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (
            ////>nextProps
            navigation !== nextProps.navigation
            ////>nextState
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
                navigation.navigate(value, value2)
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={stylesProfile.Menu}>
                <View style={stylesProfile.Menubar}>
                    <View>
                        <Text style={[
                            stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize5
                        ]}>
                            รายการสั่งซื้อของฉัน</Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <TouchableOpacity activeOpacity={0.9}
                            onPress={this.navigationNavigateScreen.bind(this, 'Total_Order', { selectedIndex: 0 })}>
                            <Text style={[
                                stylesProfile.MenubarText2, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6
                            ]}>รายการการสั่งซื้อทั้งหมด <IconEntypo name='chevron-right' size={20} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <MenubarSub navigation={navigation} />
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> MenubarSub
export class MenubarSub extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (
            ////>nextProps
            navigation !== nextProps.navigation
            ////>nextState
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
                navigation.navigate(value, value2)
    }
    render() {
        return (
            <View style={stylesProfile.MenubarSub}>
                <View style={stylesMain.FlexRow}>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={this.navigationNavigateScreen.bind(this, 'Total_Order', { selectedIndex: 1 })}>
                        <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <FastImage
                                source={require('../icon/two-money-cards.png')}
                                style={stylesProfile.MenubarSubLine1Image} />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                รอจ่ายเงิน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={this.navigationNavigateScreen.bind(this, 'Total_Order', { selectedIndex: 2 })}>
                        <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <FastImage
                                source={require('../icon/month-calendar.png')}
                                style={stylesProfile.MenubarSubLine1Image} />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                เตรียมจัดส่ง</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={this.navigationNavigateScreen.bind(this, 'Total_Order', { selectedIndex: 3 })}>
                        <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <FastImage
                                source={require('../icon/truck-facing-right.png')}
                                style={stylesProfile.MenubarSubLine1Image} />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ดำเนินการส่ง</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={this.navigationNavigateScreen.bind(this, 'Total_Order', { selectedIndex: 4 })}>
                        <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <FastImage
                                source={require('../icon/rating.png')}
                                style={stylesProfile.MenubarSubLine1Image} />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                รีวิวสินค้า</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[stylesProfile.MenubarSubLine2, stylesMain.FlexRow]}>
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Return_products', { selectedIndex: 0 })}>
                        <View style={[stylesProfile.MenubarSubLine2Box, stylesMain.ItemCenter, stylesMain.FlexRow]}>
                            <FastImage
                                source={require('../icon/repeat.png')}
                                style={stylesProfile.MenubarSubLine2BoxImage} />
                            <Text style={[stylesProfile.MenubarSubLine2BoxName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คืนสินค้า/คืนเงิน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'CancelScreen', { selectedIndex: 0 })}>
                        <View style={[stylesProfile.MenubarSubLine2Box, stylesMain.ItemCenter, stylesMain.FlexRow]}>
                            <FastImage
                                source={require('../icon/box.png')}
                                style={stylesProfile.MenubarSubLine2BoxImage} />
                            <Text style={[stylesProfile.MenubarSubLine2BoxName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ยกเลิกสินค้า</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Listbar
export class Listbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0,
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { pathlist } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            pathlist !== nextState.pathlist
        ) {
            return true
        }
        return false
    }
    get PathList() {
        const { navigation } = this.props
        const { pathlist } = this.state
        switch (pathlist) {
            case 0:
                return (
                    <ListMenu navigation={navigation} />
                )
            case 2:
                return (
                    <ViewCode navigation={navigation} />
                )
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
                navigation.navigate(value, value2)
    }
    setStatePathList = (pathlist) => {
        this.setState({ pathlist })
    }
    render() {
        return (
            <View>
                <View style={[stylesProfile.ListbarMain, stylesMain.FlexRow]}>
                    <TouchableOpacity activeOpacity={0.9} onPress={this.setStatePathList.bind(this, 0)}>
                        <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#0A81A6' }]}>
                                <IconAntDesign name='home' size={40} style={[stylesMain.ItemCenterVertical, { color: '#fff' }]} />
                            </View>
                            <Text style={[
                                stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesFont.FontCenter
                            ]}>
                                หน้าหลัก</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={this.navigationNavigateScreen.bind(this, 'DealScreen')}>
                        <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#128BCE' }]}>
                                <IconMaterialCommunityIcons name='octagram-outline' size={40}
                                    style={stylesProfile.ListbarMainRadiusIcon} />
                            </View>
                            <Text style={[
                                stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesFont.FontCenter
                            ]}>
                                โปรโมชัน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={this.setStatePathList.bind(this, 2)}>
                        <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#0A55A6' }]}>
                                <IconMaterialCommunityIcons name='ticket' size={40} style={stylesProfile.ListbarMainRadiusIcon} />
                            </View>
                            <Text style={[
                                stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesFont.FontCenter
                            ]}>
                                โค้ดส่วนลด</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={this.navigationNavigateScreen.bind(this, 'CoinScreen')}>
                        <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                            <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#fadf2d' }]}>
                                <FastImage
                                    source={require('../icon/bitcoin2.png')}
                                    style={stylesProfile.ListbarBoxImage} />
                            </View>
                            <Text style={[
                                stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesFont.FontCenter
                            ]}>
                                Fin coin ของฉัน</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.PathList}
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> ListMenu
export class ListMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (
            ////>nextProps
            navigation !== nextProps.navigation
            ////>nextState
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
                navigation.navigate(value, value2)
    }
    render() {
        return (
            <View>
                <View style={stylesProfile.ListMenu}>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 0 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35}
                                    style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[
                                    stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesFont.FontCenter
                                ]}>
                                    ดูล่าสุด</Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconAntDesign RightItem name="wechat" size={35} color='#0A55A6'
                                    style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[
                                    stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesFont.FontCenter
                                ]}>
                                    แชท</Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 2 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconAntDesign RightItem name="heart" size={35} color='#D74024' style={
                                    stylesProfile.ListMenuListSubIcon} />
                                <Text style={[
                                    stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesFont.FontCenter
                                ]}>
                                    สิ่งที่สนใจ</Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 3 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconFontisto RightItem name="shopping-store" size={30} color='#0A55A6' style={
                                    stylesProfile.ListMenuListSubIcon} />
                                <Text style={[
                                    stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesFont.FontCenter
                                ]}>
                                    ร้านค้าที่ติดตาม</Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 4 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconMaterialCommunityIcons RightItem name="star-box" size={35} color='#EAD295' style={
                                    stylesProfile.ListMenuListSubIcon} />
                                <Text style={[
                                    stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesFont.FontCenter
                                ]}>
                                    รีวิวของฉัน</Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 5 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={
                                    stylesProfile.ListMenuListSubIcon} />
                                <Text style={[
                                    stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesFont.FontCenter
                                ]}>
                                    ช่วยเหลือ</Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> ViewCode
export class ViewCode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { pathlist } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            pathlist !== nextState.pathlist
        ) {
            return true
        }
        return false
    }
    get PathList() {
        const { pathlist } = this.state
        switch (pathlist) {
            case 0:
                return (
                    <MyCode codeList={'available'} />
                )
            case 1:
                return (
                    <MyCode codeList={'usedCode'} />
                )
            case 2:
                return (
                    <MyCode codeList={'timeOut'} />
                )
        }
    }
    getData = (pathlist) => {
        this.setState({ pathlist });
    }
    render() {
        const item = [{
            name: 'โค้ดที่ใช้ได้'
        }, {
            name: 'โค้ดที่ใช้ไปแล้ว'
        }, {
            name: 'โ่ค้ดที่หมดอายุ'
        }]
        return (
            <View>
                <View style={stylesProfile.ViewCode}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
                        โ่ค้ดส่วนลดของฉัน</Text>
                </View>
                <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
                    <TabBar
                        sendData={this.getData.bind(this)}
                        item={item}
                        setVertical={4} />
                </View>
                <View>
                    {this.PathList}
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> MyCode
export class MyCode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { codeList } = this.props
        const { text } = this.state
        if (
            ////>nextProps
            codeList !== nextProps.codeList ||
            ////>nextState
            text !== nextState.text
        ) {
            return true
        }
        return false
    }
    setStateText = (text) => {
        this.setState({ text })
    }
    render() {
        const { codeList } = this.props
        const { text } = this.state
        return (
            codeList == 'available' ?
                <View>
                    <View style={stylesProfile.ViewCode}>
                        <View style={stylesMain.FlexRow}>
                            <View style={[stylesMain.ItemCenter, { width: '70%', }]}>
                                <TextInput
                                    placeholder="ใส่โค้ดส่วนลด"
                                    value={text}
                                    maxLength={9}
                                    width={'90%'}
                                    placeholderTextColor={'white'}
                                    style={[stylesProfile.ViewCodeInputCode, stylesFont.FontSize6]}
                                    onChangeText={this.setStateText.bind(this)} />
                            </View>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <View style={[stylesProfile.ViewCodeTextCode]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFF' }]}>
                                        เก็บโค้ดส่วนลด</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={stylesMain.ItemCenter}>
                        <View style={stylesProfile.FinMinssion}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { paddingLeft: 20, padding: 2 }]}>
                                FIN Mission</Text>
                        </View>
                        <View style={stylesProfile.FinMinssionBox}>
                            <View style={[stylesMain.FlexRow, stylesProfile.FinMinssionBoxPlan1]}>
                                <FastImage
                                    style={stylesProfile.FinMinssionBoxPlan1Image} />
                                <View style={{ marginLeft: 16 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>
                                        ติดตาม ร้าน Ppooo</Text>
                                    <View style={[stylesProfile.FinMinssionBoxPlan1Code, stylesMain.ItemCenter]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: 'white' }]}>
                                            โค้ดส่วนลด 80%</Text>
                                    </View>
                                </View>
                                <View style={stylesProfile.FinMinssionBoxPlan1Follow}>
                                    <View style={[stylesProfile.FinMinssionBoxPlan1FollowBox, stylesMain.ItemCenter,]}>
                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                            ติดตาม</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[stylesMain.FlexRow, stylesProfile.FinMinssionBoxPlan1]}>
                                <FastImage
                                    style={stylesProfile.FinMinssionBoxPlan1Image} />
                                <View style={{ marginLeft: 16 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>
                                        ติดตาม ร้าน Ppooo</Text>
                                    <View style={[stylesProfile.FinMinssionBoxPlan1Code, stylesMain.ItemCenter]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: 'white' }]}>
                                            โค้ดส่วนลด 80%</Text>
                                    </View>
                                </View>
                                <View style={stylesProfile.FinMinssionBoxPlan1Follow}>
                                    <View style={[stylesProfile.FinMinssionBoxPlan1FollowBox, stylesMain.ItemCenter,]}>
                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                            ติดตาม</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[stylesMain.FlexRow, stylesProfile.FinMinssionBoxPlan1]}>
                                <FastImage
                                    style={stylesProfile.FinMinssionBoxPlan1Image} />
                                <View style={{ marginLeft: 16 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>
                                        ติดตาม ร้าน Ppooo</Text>
                                    <View style={[stylesProfile.FinMinssionBoxPlan1Code, stylesMain.ItemCenter]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: 'white' }]}>
                                            โค้ดส่วนลด 80%</Text>
                                    </View>
                                </View>
                                <View style={stylesProfile.FinMinssionBoxPlan1Follow}>
                                    <View style={[stylesProfile.FinMinssionBoxPlan1FollowBox, stylesMain.ItemCenter,]}>
                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                            ติดตาม</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: 4, backgroundColor: '#fff', }}>
                            <View style={[stylesProfile.AllFinMinssion, stylesMain.ItemCenter]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#6791BE' }]}>
                                    ดูภารกิจทั้งหมด</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.BoxProduct2BoxProduct, { backgroundColor: '#fff', paddingTop: 2 }]}>
                            <GetCoupon
                                flexRow
                                useCoupon
                                codeList={codeList}
                                colorCoupon='#86CFFF'
                                timeOut={'14-02-2020'}
                                couponText={'10%'}
                                textDetail={'รับเงินคืน 10% Coins'} />
                            <GetCoupon
                                flexRow
                                useCoupon
                                codeList={codeList}
                                colorCoupon='#E43333'
                                timeOut={'1-03-2020'}
                                couponText={'25%'}
                                textDetail={'รับเงินคืน 25% Coins'} />
                            <GetCoupon
                                flexRow
                                useCoupon
                                codeList={codeList}
                                colorCoupon='#E43333'
                                timeOut={'28-02-2020'}
                                couponText={'50%'}
                                textDetail={'รับเงินคืน 50% Coins'} />
                            <GetCoupon
                                flexRow
                                useCoupon
                                codeList={codeList}
                                colorCoupon='#86CFFF'
                                timeOut={'14-02-2020'}
                                couponText={'10%'}
                                textDetail={'รับเงินคืน 10% Coins'} />
                        </View>
                    </View>
                </View> :
                codeList == 'usedCode' ?
                    <View style={[stylesMain.BoxProduct2BoxProduct, { backgroundColor: '#fff', paddingTop: 2 }]}>
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#86CFFF'
                            timeOut={'14-02-2020'}
                            couponText={'10%'}
                            textDetail={'รับเงินคืน 10% Coins'} />
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#E43333'
                            timeOut={'1-03-2020'}
                            couponText={'25%'}
                            textDetail={'รับเงินคืน 25% Coins'} />
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#E43333'
                            timeOut={'28-02-2020'}
                            couponText={'50%'}
                            textDetail={'รับเงินคืน 50% Coins'} />
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#86CFFF'
                            timeOut={'14-02-2020'}
                            couponText={'10%'}
                            textDetail={'รับเงินคืน 10% Coins'} />
                    </View> :
                    <View style={[stylesMain.BoxProduct2BoxProduct, { backgroundColor: '#fff', paddingTop: 2 }]}>
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#86CFFF'
                            timeOut={'14-02-2020'}
                            couponText={'10%'}
                            textDetail={'รับเงินคืน 10% Coins'} />
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#E43333'
                            timeOut={'1-03-2020'}
                            couponText={'25%'}
                            textDetail={'รับเงินคืน 25% Coins'} />
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#E43333'
                            timeOut={'28-02-2020'}
                            couponText={'50%'}
                            textDetail={'รับเงินคืน 50% Coins'} />
                        <GetCoupon
                            flexRow
                            useCoupon
                            codeList={codeList}
                            colorCoupon='#86CFFF'
                            timeOut={'14-02-2020'}
                            couponText={'10%'}
                            textDetail={'รับเงินคืน 10% Coins'} />
                    </View>
        )
    }
}