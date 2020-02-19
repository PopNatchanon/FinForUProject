import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import FastImage from 'react-native-fast-image';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/StylesProfileScreen'
import { ip } from '../../navigator/IpConfig';
import { AppBar1 } from '../MainScreen';

export const { width, height } = Dimensions.get('window');

export default class StoreMeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
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
                        style={styles.HeadbarImage}
                    />
                    <View style={styles.HeadbarA}>
                        <View style={styles.HeadbarBox1}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <FastImage
                                        style={styles.HeadbarBoxImage}
                                    />
                                </View>
                                <View style={{ marginLeft: 15, marginTop: '20%' }}>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                                        ppooo
                                </Text>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                                        ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2
                                </Text>
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
            <View>
                <View style={{ width: '100%', marginTop: 45, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#E9E9E9', borderWidth: 1, padding: 5 }}>
                    <View style={stylesMain.FlexRow}>
                        <IconsFontAwesome5 RightItem name="store" size={20} color='#0A55A6' />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}> การขายของฉัน </Text>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 0 })} >
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
            <View style={styles.MenubarSub}>
                <View style={styles.MenubarSubLine1}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 1 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <FastImage
                                source={require('../../icon/truck-facing-right.png')}
                                style={styles.MenubarSubLine1Image}
                            />
                            <Text style={[styles.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ที่ต้องจัดส่ง
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Cancel')}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <FastImage
                                source={require('../../icon/box.png')}
                                style={styles.MenubarSubLine1Image}
                            />
                            <Text style={[styles.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ยกเลิก
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Return', { selectedIndex: 0 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <FastImage
                                source={require('../../icon/repeat.png')}
                                style={styles.MenubarSubLine1Image}
                            />
                            <Text style={[styles.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คืนสินค้า/คืนเงิน
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Return', { selectedIndex: 2 })}>
                        <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                            <IconFeather name='more-horizontal' size={50} />
                            <Text style={[styles.MenubarSubLine1Name, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
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
                <View style={styles.ListMenu}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Up_Product')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconAntDesign RightItem name="plussquareo" size={35} color='#0A55A6' style={styles.ListMenuListSubIcon} />

                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    เพิ่มสินค้า
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 0 })} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35} style={styles.ListMenuListSubIcon} />
                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ออเดอร์ล่าสุด
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Topic', { selectedIndex: 2 })} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconMaterialCommunityIcons name="car-estate" size={35} color='#B6B6B4' style={styles.ListMenuListSubIcon} />
                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    การจัดส่งของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Follow_storeScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconAntDesign RightItem name="linechart" size={30} color='#0A55A6' style={styles.ListMenuListSubIcon} />
                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    สถิติร้านค้าของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Review_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconMaterialCommunityIcons RightItem name="star" size={35} color='#EAD295' style={styles.ListMenuListSubIcon} />
                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    คะแนนของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 5 })} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={styles.ListMenuListSubIcon} />
                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ช่วยเหลือ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Help_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconsFontAwesome5 RightItem name="store-alt" size={30} color='#06BBBB' style={styles.ListMenuListSubIcon} />
                                <Text style={[styles.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ร้านค้าของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} color='#0A55A6' />
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
            <View>
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
                        style={{ height: '100%', width: '100%' }}
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
