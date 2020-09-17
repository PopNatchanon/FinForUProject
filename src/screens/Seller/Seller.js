///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor, } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../customComponents';
import { TodayProduct } from '../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup Value
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, FontSize8, } = stylesFont;
const { BoxProduct2Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews, } = stylesMain;
const { HeadbarA, HeadbarBox1, HeadbarBoxImage, HeadbarImage, ListMenus, ListMenuList, ListMenuListIcon, ListMenuListSub, Menu, Menubars,
    MenubarSubs, MenubarSubLine1, MenubarSubLine1Image, MenubarSubLine1Name, } = stylesProfile;
const Navi = (naviProps) => NavigationNavigate(naviProps);
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Seller);
function Seller(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow chatBar settingBar titleHead='ร้านของฉัน' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Headbar {...props} />
        <Menubar {...props} />
        <SetList {...props} />
        <Seller_Product {...props} />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Headbar = (props) => {
    const Image1 = require('../../../icon/bgprofile.jpg');
    const Image2 = { uri: `${ip}/MySQL/uploads/addmin/logo_a.jpg`, };
    return <View>
        <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Seller_ProfileEdit', })}>
            <ImageBackground source={Image1} style={HeadbarImage} />
            <View style={HeadbarA}>
                <View style={HeadbarBox1}>
                    <View style={[FlexRow, { marginVertical: 15, }]}>
                        <View><FastImage source={Image2} style={HeadbarBoxImage} /></View>
                        <View style={{ marginLeft: 15, marginTop: '10%', }}>
                            <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF', }]}>ppooo</Text>
                            <Text style={[FontFamilyText, FontSize7, { color: '#FFFFFF', }]}>ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Menubar = (props) => <View style={Menu}>
    <View style={[Menubars, { height: 35, }]}>
        <View style={FlexRow}>
            <IconsFontAwesome5 RightItem name="store" size={20} color={mainColor} />
            <Text style={[FontFamilyBold, FontSize5]}>การขายของฉัน</Text>
        </View>
        <View style={FlexRow}>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                Navi({ ...props, goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 0, }, })}>
                <Text style={[FontFamilyBold, FontSize6, { color: '#BABABA', }]}>ดูประวัติการขาย</Text>
            </TouchableOpacity>
            <IconEntypo name='chevron-right' size={25} color={mainColor} />
        </View>
    </View>
    <MenubarSub {...props} />
</View>;
///----------------------------------------------------------------------------------------------->>>>
export const MenubarSub = (props) => {
    const Image1 = require('../../../icon/truck-facing-right.png');
    const Image2 = require('../../../icon/box.png');
    const Image3 = require('../../../icon/repeat.png');
    const ListMenuItem = [{
        name: 'ที่ต้องจัดส่ง', setNavi: { goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 1, }, },
        icon: <FastImage source={Image1} style={MenubarSubLine1Image} />,
    }, {
        name: 'ยกเลิก', setNavi: { goScreen: 'Seller_Cencel', },
        icon: <FastImage source={Image2} style={MenubarSubLine1Image} />,
    }, {
        name: 'คืนสินค้า/คืนเงิน', setNavi: { goScreen: 'Seller_Return_Product', },
        icon: <FastImage source={Image3} style={MenubarSubLine1Image} />,
    }, {
        name: 'คลัง', setNavi: { goScreen: 'Seller_StoreProduct', },
        icon: <IconFeather name='more-horizontal' size={50} />,
    }];
    return <View style={MenubarSubs}>
        <View style={MenubarSubLine1}>
            {ListMenuItem.map((v, i) => <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, ...v.setNavi, })}>
                <View style={{ alignItems: 'center', width: width * (1 / 4), }}>
                    {v.icon}
                    <Text style={[FontFamilyText, FontSize6, MenubarSubLine1Name]}>{v.name}</Text>
                </View>
            </TouchableOpacity>)}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
const SetList = (props) => {
    const ListMenuItem = [{
        name: 'เพิ่มสินค้า', setNavi: { goScreen: 'Seller_UpProduct', },
        icon: <IconAntDesign color={mainColor} name="plussquareo" RightItem size={35} />,
    }, {
        name: 'ออเดอร์ล่าสุด', setNavi: { goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 0, }, },
        icon: <IconMaterialIcons color='#D0B216' name="access-time" RightItem size={35} />,
    }, {
        name: 'การจัดส่งของฉัน', setNavi: { goScreen: 'Seller_TotelOrder', setData: { selectedIndex: 2, }, },
        icon: <IconsFontAwesome5 color='#9E9E9E' name="car-side" RightItem size={30} />,
    }, {
        name: 'รายได้ของฉัน', setNavi: { goScreen: 'Seller_Income', },
        icon: <IconsFontAwesome color='#5CCFA8' name="bank" RightItem size={30} />,
    }, {
        name: 'ถอนเงิน', setNavi: { goScreen: 'Seller_Money', },
        icon: <IconsFontAwesome5 color='#154FC6' name="money-bill" RightItem size={30} />,
    }, {
        name: 'จัดการโฆษณา', setNavi: { goScreen: 'Seller_Advertisement', },
        icon: <IconEntypo color='#FC6B00' name="megaphone" RightItem size={35} />,
    }, {
        name: 'สถิติร้านค้าของฉัน', setNavi: { goScreen: 'Seller_Statistics', },
        icon: <IconEntypo color={mainColor} name="bar-graph" RightItem size={30} />,
    }, {
        name: 'คะแนนของฉัน', setNavi: { goScreen: 'Seller_Scores', },
        icon: <IconsFontAwesome color='#FFAC33' name="star" RightItem size={35} />,
    }, {
        name: 'คลังสินค้าของฉัน', setNavi: { goScreen: 'Seller_StoreProduct', },
        icon: <IconsFontAwesome5 color='#06BBBB' name="store-alt" RightItem size={30} />,
    }, {
        name: 'ช่วยเหลือ', setNavi: { goScreen: 'Customer_Topic_Help', },
        icon: <IconFeather color='#00A3FF' name="help-circle" RightItem size={35} />,
    }];
    const SetListProps = { ...props, ListMenuItem, };
    return <ListMenu {...SetListProps} />;
};
///----------------------------------------------------------------------------------------------->>>>
export const ListMenu = (props) => {
    return <View>
        <View style={ListMenus}>
            {props.ListMenuItem.map((v, i) => <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, ...v.setNavi, })}>
                <View style={[ItemCenter, ListMenuList]}>
                    <View style={[ItemCenter, ListMenuListSub]}>
                        <View style={[ItemCenter, { width: 65 }]}>{v.icon}</View>
                        <Text style={[FontFamilyText, FontSize6]}>{v.name}</Text>
                    </View>
                    <IconEntypo color={mainColor} name='chevron-right' size={35} style={ListMenuListIcon} />
                </View>
            </TouchableOpacity>)}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Seller_Product = (props) => <View style={FrameBackground}>
    <View style={{ padding: 10 }}>
        <Text style={[FontFamilyText, FontSize5]}>รายการสินค้าของฉัน</Text>
    </View>
    <TodayProduct {...props} noTitle />
</View>;
///----------------------------------------------------------------------------------------------->>>>
export const Seller_Product_Box = (props) => {
    const Image1 = { uri: `${ip}/MySQL/uploads/products/2019-10-09-1570615168.png`, };
    return <TouchableOpacity style={{ borderColor: '#ECECEC', borderWidth: 1, padding: 10, width: '30%', }}>
        <View style={{ alignItems: 'center', marginHorizontal: 8, }}>
            <FastImage source={Image1} style={BoxProduct2Image} />
        </View>
        <View style={{ marginTop: 10, }}>
            <Text numberOfLines={1} style={[FontFamilyText, FontSize7]}>ห้องพัก Deluxe Pool Villa</Text>
            <Text style={[FontFamilyText, FontSize6, { color: mainColor, }]}>฿10,000</Text>
        </View>
        <View style={[FlexRow, { justifyContent: 'space-between', }]}>
            <View style={FlexRow}>
                <IconsFontAwesome5 color='#949494' name='heart' size={10} />
                <Text style={[FontFamilyText, FontSize8, { color: '#949494', }]}>300</Text>
                <IconFeather color='#949494' name='eye' size={10} />
                <Text style={[FontFamilyText, FontSize8, { color: '#949494', }]}>300</Text>
            </View>
            <View style={FlexRow}>
                <Text style={[FontFamilyText, FontSize8, { color: '#949494', }]}>ขายแล้ว</Text>
                <Text style={[FontFamilyText, FontSize8, { color: '#949494', }]}>0</Text>
            </View>
        </View>
    </TouchableOpacity>;
};

