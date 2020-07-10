///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, ActivityIndicator,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesProfile from '../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from './MainScreen';
import { GetCoupon, GetData, TabBar, GetServices, LoadingScreen } from '../customComponents/Tools';
import { Toolbar, NavigationNavigate } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
function ProfileScreen(props) {
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataSevice, setDataSevice] = useState(undefined);
    var dataBody = { id_customer: currentUser?.id_customer ?? '', };
    var uri = `${finip}/profile/profile_mobile`;
    let getData = (value) => { setActiveGetServices(false); setDataSevice(value); };
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetServices && !activeGetSource && dataBody && currentUser?.id_customer && GetServices({
            uriPointer: uri, dataBody, Authorization: cokie, getDataSource: (value) => getData(value)
        });
    }, [activeGetServices && !activeGetSource && dataBody && currentUser?.id_customer]);
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: (value) => getSource(value) });
    }, [activeGetSource]);
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        <ScrollView>
            <View>
                <Headbar {...props} currentUser={currentUser} dataSevice={dataSevice} getDataSources={() => setActiveGetServices(true)} />
                <Menubar {...props} />
                <Listbar {...props} currentUser={currentUser} cokie={cokie} />
            </View>
        </ScrollView>
        <Toolbar {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Headbar
export let Headbar = (props) => {
    const { dataSevice, getDataSources, navigation, statusOnline, } = props;
    var uri;
    dataSevice?.list_profile && (uri = `${finip}/${dataSevice.list_profile[0].image_path}/${dataSevice.list_profile[0].image}`);
    return <View>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({
            goScreen: 'Setting_Topic', setData: { selectedIndex: 0, getDataSource: (value) => getDataSources(value) }, navigation
        })}>
            <View style={{ backgroundColor: '#4a4a4a', }}>
                <ImageBackground source={require('../../icon/bgprofile.jpg')} style={stylesProfile.HeadbarImage} />
            </View>
        </TouchableOpacity>
        <View style={stylesProfile.HeadbarA}>
            <View style={stylesProfile.HeadbarBox1}>
                <View style={stylesMain.FlexRow}>
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={() =>
                            NavigationNavigate({ goScreen: 'SellerScreen', navigation })}>
                            <View style={stylesProfile.HeadbarBox1Sub}>
                                <Text style={[stylesProfile.HeadbarBox1SubText, stylesFont.FontFamilyText,
                                stylesFont.FontSize6]}>เริ่มค้าขาย</Text>
                            </View>
                        </TouchableOpacity>
                        {dataSevice?.list_profile ?
                            <FastImage source={{ uri: uri }} style={[stylesProfile.HeadbarBoxImage, stylesMain.ItemCenter]} /> :
                            <View style={[stylesProfile.HeadbarBoxImage, stylesMain.ItemCenter]}>
                                <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                            </View>}
                    </View>
                    <View style={{ marginLeft: 15, marginTop: '21%' }}>
                        <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>
                            {dataSevice?.list_profile[0]?.name ?? ' '}</Text>
                        <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: statusOnline ? '#BEBDBD' : '#43e855', }]}>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#43e855' }}></View>Active อยู่</Text>
                        <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>
                            ผู้ติดตาม {dataSevice?.who_follow_me ?? 0}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 8 }}>
                    <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'SettingScreen', navigation })}>
                        <IconMaterialCommunityIcons RightItem name="settings-outline" style={{ marginRight: 6 }} size={25}
                            color='#FFFFFF' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'CartScreen', navigation })}>
                        <IconFeather RightItem name="shopping-cart" size={25} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Menubar
export let Menubar = (props) => {
    const { navigation } = props;
    return <View style={stylesProfile.Menu}>
        <View style={[stylesMain.ItemCenter, stylesProfile.Menubar]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>รายการสั่งซื้อของฉัน</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={() => NavigationNavigate({
                goScreen: 'Total_Order', setData: { selectedIndex: 0 }, navigation
            })} style={{ flexDirection: 'row' }}>
                <Text style={[stylesProfile.MenubarText2, stylesFont.FontFamilyText, stylesFont.FontSize6]}>รายการการสั่งซื้อทั้งหมด</Text>
                <IconEntypo name='chevron-right' size={20} style={stylesProfile.MenubarText2} />
            </TouchableOpacity>
        </View>
        <MenubarSub {...props} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> MenubarSub
export let MenubarSub = (props) => {
    const { navigation } = props;
    return <View style={stylesProfile.MenubarSub}>
        <View style={stylesMain.FlexRow}>
            <TouchableOpacity activeOpacity={0.9} onPress={() =>
                NavigationNavigate({ goScreen: 'Total_Order', setData: { selectedIndex: 1 }, navigation })}>
                <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <FastImage source={require('../../icon/two-money-cards.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>รอจ่ายเงิน</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() =>
                NavigationNavigate({ goScreen: 'Total_Order', setData: { selectedIndex: 2 }, navigation })}>
                <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <FastImage source={require('../../icon/month-calendar.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ที่ต้องได้รับ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() =>
                NavigationNavigate({ goScreen: 'Total_Order', setData: { selectedIndex: 2 }, navigation })}>
                <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <FastImage source={require('../../icon/truck-facing-right.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ดำเนินการส่ง</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() =>
                NavigationNavigate({ goScreen: 'Total_Order', setData: { selectedIndex: 3 }, navigation })}>
                <View style={[stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <FastImage source={require('../../icon/rating.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>รีวิวสินค้า</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={[stylesProfile.MenubarSubLine2, stylesMain.FlexRow]}>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Return_products', setData: { selectedIndex: 0 }, navigation })}>
                <View style={[stylesProfile.MenubarSubLine2Box, stylesMain.ItemCenter, stylesMain.FlexRow]}>
                    <FastImage source={require('../../icon/repeat.png')} style={stylesProfile.MenubarSubLine2BoxImage} />
                    <Text style={[stylesProfile.MenubarSubLine2BoxName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        คืนสินค้า/คืนเงิน</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'CancelScreen', setData: { selectedIndex: 0 }, navigation })}>
                <View style={[stylesProfile.MenubarSubLine2Box, stylesMain.ItemCenter, stylesMain.FlexRow]}>
                    <FastImage source={require('../../icon/box.png')} style={stylesProfile.MenubarSubLine2BoxImage} />
                    <Text style={[stylesProfile.MenubarSubLine2BoxName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        ยกเลิกสินค้า</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Listbar
export let Listbar = (props) => {
    const { currentUser, cokie, navigation } = props;
    const [pathlist, setPathlist] = useState(0);
    let PathList = () => {
        switch (pathlist) {
            case 0: return <ListMenu {...props} />;
            case 2: return <ViewCode {...props} currentUser={currentUser} cokie={cokie} />;
        };
    };
    return <View>
        <View style={[stylesProfile.ListbarMain, stylesMain.FlexRow]}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setPathlist(0)}>
                <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#0A81A6' }]}>
                        <IconAntDesign name='home' size={40} style={[stylesMain.ItemCenterVertical, { color: '#fff' }]} />
                    </View>
                    <Text style={[stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6,
                    stylesFont.FontCenter]}>หน้าหลัก</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => NavigationNavigate({ goScreen: 'DealScreen', navigation })}>
                <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#128BCE' }]}>
                        <IconMaterialCommunityIcons name='octagram-outline' size={40} style={stylesProfile.ListbarMainRadiusIcon} />
                    </View>
                    <Text style={[stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6,
                    stylesFont.FontCenter]}>โปรโมชัน</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setPathlist(2)}>
                <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#0A55A6' }]}>
                        <IconMaterialCommunityIcons name='ticket' size={40} style={stylesProfile.ListbarMainRadiusIcon} />
                    </View>
                    <Text style={[stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6,
                    stylesFont.FontCenter]}>โค้ดส่วนลด</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => NavigationNavigate({ goScreen: 'CoinScreen', navigation })}>
                <View style={[stylesMain.FlexColumn, stylesMain.ItemCenter, { width: width * (1 / 4) }]}>
                    <View style={[stylesMain.ItemCenter, stylesProfile.ListbarMainRadius, { backgroundColor: '#fadf2d' }]}>
                        <FastImage source={require('../../icon/bitcoin2.png')} style={stylesProfile.ListbarBoxImage} />
                    </View>
                    <Text style={[stylesProfile.ListbarBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6,
                    stylesFont.FontCenter]}>Fin coin ของฉัน</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View>
            {PathList()}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> ListMenu
export let ListMenu = (props) => {
    const { navigation } = props;
    return <View>
        <View style={stylesProfile.ListMenu}>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 0 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35}
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>ดูล่าสุด</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Business', setData: { selectedIndex: 0 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconFontAwesome RightItem name="users" size={30} color='#7CB4F0' style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>สมาชิกAffiliate</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconAntDesign RightItem name="wechat" size={35} color={mainColor} style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>แชท</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 2 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconAntDesign RightItem name="heart" size={35} color='#D74024' style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>สิ่งที่สนใจ</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 3 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconFontisto RightItem name="shopping-store" size={30} color={mainColor}
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>ร้านค้าที่ติดตาม</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 4 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconMaterialCommunityIcons RightItem name="star-box" size={35} color='#EAD295'
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>รีวิวของฉัน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 5 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesFont.FontCenter]}>ช่วยเหลือ</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> ViewCode
export let ViewCode = (props) => {
    const { currentUser, cokie } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataSevice, setDataSevice] = useState(undefined);
    const [pathlist, setPathlist] = useState(0);
    const item = [{ name: 'โค้ดที่ใช้ได้' }, { name: 'โค้ดที่ใช้ไปแล้ว' }, { name: 'โค้ดที่หมดอายุ' }];
    var dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        device: "mobile_device",
    };
    var uri = `${finip}/profile/coupon_shop`;
    var uri2 = `${finip}/profile/coupon_used`;
    var uri3 = `${finip}/profile/coupon_timeout`;
    let getDataSource = (value) => { setActiveGetServices(false); setDataSevice(value); };
    let sendData = (value) => { setActiveGetServices(true); setPathlist(value.selectedIndex); };
    useEffect(() => {
        activeGetServices && GetServices({
            uriPointer: pathlist == 0 ? uri : pathlist == 1 ? uri2 : uri3, dataBody, Authorization: cokie, getDataSource: (value) =>
                getDataSource(value)
        });
    }, [activeGetServices]);
    return <View>
        <View style={stylesProfile.ViewCode}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>โค้ดส่วนลดของฉัน</Text>
        </View>
        <View style={{ marginTop: 3, backgroundColor: '#fff' }}>
            <TabBar item={item} sendData={(value) => sendData(value)} setVertical={4} />
        </View>
        <View>
            <MyCode {...props} key='MyCode' dataSevice={dataSevice}
                codeList={pathlist == 0 ? 'available' : pathlist == 1 ? 'usedCode' : 'timeOut'} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> MyCode
export let MyCode = (props) => {
    const { codeList, dataSevice, currentUser, cokie } = props;
    const [activeFollow, setActiveFollow] = useState(false);
    const [data, setData] = useState([]);
    const [follow, setFollow] = useState(false);
    const [id_store, setId_store] = useState(undefined);
    const [text, setText] = useState(undefined);
    var dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        id_store,
        follow: follow ? 'active' : ''
    };
    var uri = `${finip}/brand/follow_data`;
    let followStore = (value, value2) => { setActiveFollow(true); setId_store(value); setFollow(value2); };
    let getData = (value) => {
        data[data.map((value2) => value2.id_store).indexOf(value.m)].follow = value.output;
        setData(data);
        setActiveFollow(false);
    };
    useEffect(() => {
        activeFollow && currentUser && cokie && GetServices({
            Authorization: cokie, dataBody, uriPointer: uri, getDataSource: (value) => getData(value), showConsole: 'MyCode'
        });
    }, [activeFollow && currentUser && cokie]);
    if (data[0] == undefined && dataSevice) {
        dataSevice.store.map((value) => ([(data.every((value2) => value2.id_store != value.id_store)) ?
            ([data.push({ id_store: value.id_store, promotion_name: [value.promotion_name], store_name: value.store_name }),]) :
            ([data[data.map((value2) => value2.id_store).indexOf(value.id_store)].promotion_name.push(value.promotion_name),]),]));
        setData(data);
    };
    !activeFollow && data.map((value) => value.follow === undefined && followStore(value.id_store, false));
    return (codeList == 'available' ?
        <View>
            {activeFollow && <LoadingScreen key='LoadingScreen' />}
            <View style={stylesProfile.ViewCode}>
                <View style={stylesMain.FlexRow}>
                    <View style={[stylesMain.ItemCenter, { width: '70%', }]}>
                        <TextInput placeholder="ใส่โค้ดส่วนลด" value={text} maxLength={9} width={'90%'} placeholderTextColor={'white'}
                            style={[stylesProfile.ViewCodeInputCode, stylesFont.FontSize6]} onChangeText={(value) => setText(value)} />
                    </View>
                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                        <View style={[stylesProfile.ViewCodeTextCode]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFF' }]}>เก็บโค้ดส่วนลด</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={stylesMain.ItemCenter}>
                <View style={stylesProfile.FinMinssion}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { paddingLeft: 20, padding: 2 }]}>FIN Mission</Text>
                </View>
                <View style={stylesProfile.FinMinssionBox}>
                    {data && data.map((value, index) => <View key={index} style={[stylesMain.FlexRow, stylesProfile.FinMinssionBoxPlan1]}>
                        <FastImage style={stylesProfile.FinMinssionBoxPlan1Image} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>
                                ติดตามร้าน {value.store_name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {value.promotion_name.map((value2, index2) => index2 < 3 && <View key={index2}
                                    style={[stylesProfile.FinMinssionBoxPlan1Code, stylesMain.ItemCenter]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: 'white' }]}>{value2}</Text>
                                </View>)}
                                {value.promotion_name.length > 3 && <View key={'otherpromotion_name'}
                                    style={[stylesProfile.FinMinssionBoxPlan1Code, stylesMain.ItemCenter, { width: 30 }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: 'white' }]}>
                                        +{value.promotion_name.length - 3}</Text>
                                </View>}
                            </View>
                        </View>
                        <View style={stylesProfile.FinMinssionBoxPlan1Follow}>
                            <TouchableOpacity onPress={() => followStore(value.id_store, true)}>
                                <View style={[stylesProfile.FinMinssionBoxPlan1FollowBox, stylesMain.ItemCenter,]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                        {value.follow}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>)}
                </View>
                <View style={{ marginVertical: 3, backgroundColor: '#fff', }}>
                    <View style={[stylesProfile.AllFinMinssion, stylesMain.ItemCenter]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#6791BE' }]}>ดูภารกิจทั้งหมด</Text>
                    </View>
                </View>
                <View style={[stylesMain.BoxProduct2BoxProduct, { backgroundColor: '#fff', paddingTop: 2 }]}>
                    {dataSevice?.coupon?.map((value, index) => <GetCoupon key={index} flexRow useCoupon codeList={codeList}
                        colorCoupon='#007bff' timeOut={value.date_end} couponText={value.name_promotion}
                        textDetail={value.detail_promotion} />)}
                </View>
            </View>
        </View> :
        codeList == 'usedCode' ?
            <View style={[stylesMain.BoxProduct2BoxProduct, { backgroundColor: '#fff', paddingTop: 2 }]}>
                {dataSevice?.coupon?.map((value, index) => <GetCoupon key={index} flexRow useCoupon codeList={codeList}
                    colorCoupon='#007bff' timeOut={value.date_end} couponText={value.name_promotion}
                    textDetail={value.detail_promotion} />)}
            </View> : <View style={[stylesMain.BoxProduct2BoxProduct, { backgroundColor: '#fff', paddingTop: 2 }]}>
                {dataSevice?.coupon?.map((value, index) => <GetCoupon key={index} flexRow useCoupon codeList={codeList}
                    colorCoupon='#007bff' timeOut={value.date_end} couponText={value.name_promotion}
                    textDetail={value.detail_promotion} />)}
            </View>);
};