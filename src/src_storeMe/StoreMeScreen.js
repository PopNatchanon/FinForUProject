///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleStoreMe
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
import { AppBar1 } from '../MainScreen';

export default class StoreMeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={this.props.navigation} settingBar chatBar titleHead='ร้านของฉัน' />
                <ScrollView>
                    <View>
                        <Headbar navigation={this.props.navigation} />
                        <Menubar navigation={this.props.navigation} />
                        <ListMenu navigation={this.props.navigation} />
                        <StoreMe_Product />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Headbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMe_Profile_Edit')}>
                    <ImageBackground
                        source={require('../../icon/bgprofile.jpg')}
                        style={stylesProfile.HeadbarImage}
                    />
                    <View style={stylesProfile.HeadbarA}>
                        <View style={stylesProfile.HeadbarBox1}>
                            <View style={[stylesMain.FlexRow, { marginVertical: 15 }]}>
                                <View>
                                    <FastImage
                                        style={stylesProfile.HeadbarBoxImage}
                                    />
                                </View>
                                <View style={{ marginLeft: 15, marginTop: '10%' }}>
                                    <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>
                                        ppooo</Text>
                                    <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>
                                        ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

///--------------------------------------------------------------------------///

export class Menubar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={stylesProfile.Menu}>
                <View style={[stylesProfile.Menubar, { height: 35, }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconsFontAwesome5 RightItem name="store" size={20} color='#0A55A6' />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}> การขายของฉัน </Text>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Totel_Order', { selectedIndex: 0 })} >
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>
                                ดูประวัติการขาย
                            </Text>
                        </TouchableOpacity>
                        <IconEntypo name='chevron-right' size={25} color='#0A55A6' />
                    </View>
                </View>
                <MenubarSub navigation={this.props.navigation} />
            </View>
        )
    }
}

///--------------------------------------------------------------------------///
export class MenubarSub extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={stylesProfile.MenubarSub}>
                <View style={stylesProfile.MenubarSubLine1}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Totel_Order', { selectedIndex: 1 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <FastImage
                                source={require('../../icon/truck-facing-right.png')}
                                style={stylesProfile.MenubarSubLine1Image}
                            />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ที่ต้องจัดส่ง
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Return', { selectedIndex: 3 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <FastImage
                                source={require('../../icon/box.png')}
                                style={stylesProfile.MenubarSubLine1Image}
                            />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ยกเลิก
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Return', { selectedIndex: 0 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <FastImage
                                source={require('../../icon/repeat.png')}
                                style={stylesProfile.MenubarSubLine1Image}
                            />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คืนสินค้า/คืนเงิน
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Return', { selectedIndex: 2 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <IconFeather name='more-horizontal' size={50} />
                            <Text style={[stylesProfile.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คลัง
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
///--------------------------------------------------------------------------///
export class ListMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={stylesProfile.ListMenu}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Up_Product')} >
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconAntDesign RightItem name="plussquareo" size={35} color='#0A55A6' style={stylesProfile.ListMenuListSubIcon} />

                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    เพิ่มสินค้า
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Totel_Order', { selectedIndex: 0 })} >
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35} style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ออเดอร์ล่าสุด
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Totel_Order', { selectedIndex: 2 })} >
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconMaterialCommunityIcons name="car-estate" size={35} color='#9E9E9E' style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    การจัดส่งของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 0 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconEntypo RightItem name="megaphone" size={35} color='#FC6B00' style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    จัดการโฆษณา
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 1 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconEntypo RightItem name="bar-graph" size={30} color='#0A55A6' style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                      สถิติร้านค้าของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 2 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconMaterialCommunityIcons RightItem name="star" size={35} color='#FFAC33' style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    คะแนนของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 5 })} >
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ช่วยเหลือ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Return', { selectedIndex: 2 })}>
                        <View style={stylesProfile.ListMenuList}>
                            <View style={stylesProfile.ListMenuListSub}>
                                <IconsFontAwesome5 RightItem name="store-alt" size={30} color='#06BBBB' style={stylesProfile.ListMenuListSubIcon} />
                                <Text style={[stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    คลังสินค้าของฉัน
                                </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

///--------------------------------------------------------------------------///
export class StoreMe_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={{ padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รายการสินค้าของฉัน</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', padding: 5 }}>
                    <StoreMe_Product_Box />
                    <StoreMe_Product_Box />
                    <StoreMe_Product_Box />
                </View>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class StoreMe_Product_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: '30%', borderColor: '#ECECEC', borderWidth: 1, padding: 10 }}>

                <View style={{ alignItems: 'center', height: 100 }}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{
                            uri: ip + '/MySQL/uploads/products/2019-10-09-1570615168.png',
                        }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ห้องพัก Deluxe Pool Villa</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>฿10,000</Text>
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
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity>
                        <View style={{ borderColor: '#0A55A6', borderWidth: 1, height: 25, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#0A55A6' }]}>โปรโมทตอนนี้</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
