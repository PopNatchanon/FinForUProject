///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../navigator/IpConfig';
import { TodayProduct } from '../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Seller);
function Seller(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow settingBar chatBar titleHead='ร้านของฉัน' />
        <ScrollView>
            <View>
                <Headbar {...props} />
                <Menubar {...props} />
                <ListMenu {...props} />
                <Seller_Product {...props} />
            </View>
        </ScrollView>
    </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export let Headbar = (props) => {
    const { navigation } = props;
    return <View>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'Seller_ProfileEdit', navigation })}>
            <ImageBackground source={require('../../../icon/bgprofile.jpg')} style={stylesProfile.HeadbarImage} />
            <View style={stylesProfile.HeadbarA}>
                <View style={stylesProfile.HeadbarBox1}>
                    <View style={[stylesMain.FlexRow, { marginVertical: 15 }]}>
                        <View>
                            <FastImage
                                source={{ uri: `${ip}/MySQL/uploads/addmin/logo_a.jpg` }}
                                style={stylesProfile.HeadbarBoxImage} />
                        </View>
                        <View style={{ marginLeft: 15, marginTop: '10%' }}>
                            <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>ppooo</Text>
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>
                                ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2</Text>
                        </View>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    </View>;
};
///--------------------------------------------------------------------------///
export let Menubar = (props) => {
    const { navigation } = props;
    return <View style={stylesProfile.Menu}>
        <View style={[stylesProfile.Menubar, { height: 35, }]}>
            <View style={stylesMain.FlexRow}>
                <IconsFontAwesome5 RightItem name="store" size={20} color={mainColor} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>การขายของฉัน</Text>
            </View>
            <View style={stylesMain.FlexRow}>
                <TouchableOpacity activeOpacity={1} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 0 }, navigation })}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>ดูประวัติการขาย</Text>
                </TouchableOpacity>
                <IconEntypo name='chevron-right' size={25} color={mainColor} />
            </View>
        </View>
        <MenubarSub {...props} />
    </View>;
};
///--------------------------------------------------------------------------///
export let MenubarSub = (props) => {
    const { navigation } = props;
    return <View style={stylesProfile.MenubarSub}>
        <View style={stylesProfile.MenubarSubLine1}>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 1 }, navigation })}>
                <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                    <FastImage source={require('../../../icon/truck-facing-right.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ที่ต้องจัดส่ง</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Cencel', navigation })}>
                <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                    <FastImage source={require('../../../icon/box.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยกเลิก</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Return_Product', navigation })}>
                <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                    <FastImage source={require('../../../icon/repeat.png')} style={stylesProfile.MenubarSubLine1Image} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        คืนสินค้า/คืนเงิน</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_StoreProduct', navigation })}>
                <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                    <IconFeather name='more-horizontal' size={50} />
                    <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>คลัง</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///--------------------------------------------------------------------------///
export let ListMenu = (props) => {
    const { navigation } = props;
    return <View>
        <View style={stylesProfile.ListMenu}>
            <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'Seller_UpProduct', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconAntDesign RightItem name="plussquareo" size={35} color={mainColor}
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            เพิ่มสินค้า</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 0 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35}
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            ออเดอร์ล่าสุด</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 2 }, navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconsFontAwesome5 name="car-side" size={30} color='#9E9E9E'
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            การจัดส่งของฉัน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Income', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconsFontAwesome RightItem name="bank" size={30} color='#5CCFA8' style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            รายได้ของฉัน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Money', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconsFontAwesome5 RightItem name="money-bill" size={30} color='#154FC6'
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ถอนเงิน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Advertisement', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconEntypo RightItem name="megaphone" size={35} color='#FC6B00' style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            จัดการโฆษณา</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Statistics', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconEntypo RightItem name="bar-graph" size={30} color={mainColor} style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            สถิติร้านค้าของฉัน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Scores', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconsFontAwesome RightItem name="star" size={35} color='#FFAC33'
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            คะแนนของฉัน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_StoreProduct', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconsFontAwesome5 RightItem name="store-alt" size={30} color='#06BBBB'
                            style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            คลังสินค้าของฉัน</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Customer_Topic_Help', navigation })}>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={stylesProfile.ListMenuListSubIcon} />
                        <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ช่วยเหลือ</Text>
                    </View>
                    <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///--------------------------------------------------------------------------///
export let Seller_Product = (props) => <View style={stylesMain.FrameBackground}>
    <View style={{ padding: 10 }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รายการสินค้าของฉัน</Text>
    </View>
    <TodayProduct {...props} noTitle />
</View>;
///--------------------------------------------------------------------------///
export let Seller_Product_Box = (props) => <TouchableOpacity style={{ width: '30%', borderColor: '#ECECEC', borderWidth: 1, padding: 10 }}>
    <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
        <FastImage style={stylesMain.BoxProduct2Image} source={{ uri: `${ip}/MySQL/uploads/products/2019-10-09-1570615168.png`, }} />
    </View>
    <View style={{ marginTop: 10 }}>
        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ห้องพัก Deluxe Pool Villa</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>฿10,000</Text>
    </View>
    <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
        <View style={stylesMain.FlexRow}>
            <IconsFontAwesome5 name='heart' size={10} color='#949494' />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#949494' }]}>300</Text>
            <IconFeather name='eye' size={10} color='#949494' />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#949494' }]}>300</Text>
        </View>
        <View style={stylesMain.FlexRow}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#949494' }]}>ขายแล้ว</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#949494' }]}>0</Text>
        </View>
    </View>
</TouchableOpacity>;

