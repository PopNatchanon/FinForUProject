import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
    ButtonGroup,
    Button,
} from 'react-native-elements'
import styles from '../style/StylesProfileScreen'
import { ip } from '../IpConfig'
export const { width, height } = Dimensions.get('window');

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <ScrollView>
                    <View>
                        <Headbar navigation={this.props.navigation} />
                        <Menubar />
                        <Listbar />
                        <ListMenu />
                    </View>
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

export class Headbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../icon/bgprofile.jpg')}
                    style={styles.HeadbarImage}
                    resizeMethod='resize'
                />
                {/* <View style={styles.HeadbarA}>
                    <View style={styles.HeadbarBox1}>
                        <Image style={styles.HeadbarBoxImage} />
                    </View>
                    <View>
                        <Text style={styles.HeadbarText}>
                            เข้าสู่ระบบเพื่อการช๊อปที่ดียิ่งขึ้น
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={
                                () => this.props.navigation.navigate(
                                    'LoginScreen'
                                )
                            }
                        >
                            <View style={styles.HeadbarBox2}>
                                <Text style={styles.HeadbarBox2Text}>
                                    เข้าสู่ระบบ/สมัครสมาชิก
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <View style={styles.HeadbarA}>
                    <View style={styles.HeadbarBox1}>
                        <Image style={styles.HeadbarBoxImage} />
                    </View>
                    <View>
                        <Text style={styles.HeadbarText}>
                            เข้าสู่ระบบเพื่อการช๊อปที่ดียิ่งขึ้น
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={
                                () => this.props.navigation.navigate(
                                    'LoginScreen'
                                )
                            }
                        >
                            <View style={styles.HeadbarBox2}>
                                <Text style={styles.HeadbarBox2Text}>
                                    เข้าสู่ระบบ/สมัครสมาชิก
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


export class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Toolbar}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={
                        () => this.props.navigation.popToTop()
                    }
                >
                    <View >
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>
                <View >
                    <IconAntDesign name="tagso" size={25} />
                    <Text> Feed</Text>
                </View>
                <View >
                    <IconAntDesign name="notification" size={25} />
                    <Text>News</Text>
                </View>
                <View >
                    <IconAntDesign name="bells" size={25} />
                    <Text>เตือน</Text>
                </View>
                <View>
                    <IconAntDesign name="user" size={25} />
                    <Text> ฉัน</Text>
                </View>
            </View>
        )
    }
}

export class Menubar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <View style={styles.Menubar}>
                    <View>
                        <Text style={styles.MenubarText1}>
                            รายการสั่งซื้อของฉัน
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.MenubarText2}>
                            รายการการสั่งซื้อทั้งหมด <IconEntypo name='chevron-right' size={20} />
                        </Text>
                    </View>
                </View>
                <MenubarSub />
            </View>
        )
    }
}

export class MenubarSub extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.MenubarSub}>
                <View style={styles.MenubarSubLine1}>
                    <View>
                        <Image
                            source={require('../icon/two-money-cards.png')}
                            style={styles.MenubarSubLine1Image}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            รอจ่ายเงิน
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../icon/month-calendar.png')}
                            style={styles.MenubarSubLine1Image}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            เตรียมจัดส่ง
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../icon/truck-facing-right.png')}
                            style={styles.MenubarSubLine1Image}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            ดำเนินการส่ง
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../icon/rating.png')}
                            style={styles.MenubarSubLine1Image}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            รีวิวสินค้า
                        </Text>
                    </View>
                </View>
                <View style={styles.MenubarSubLine2}>
                    <View style={styles.MenubarSubLine2Box}>
                        <Image
                            source={require('../icon/repeat.png')}
                            style={styles.MenubarSubLine2BoxImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine2BoxName}>
                            คืนสินค้า/คืนเงิน
                        </Text>
                    </View>
                    <View style={styles.MenubarSubLine2Box}>
                        <Image
                            source={require('../icon/box.png')}
                            style={styles.MenubarSubLine2BoxImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine2BoxName}>
                            ยกเลิกสินค้า
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export class ListMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.ListMenu}>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35} style={styles.ListMenuListSubIcon} />
                            <Text style={styles.ListMenuListSubName}>
                                ดูล่าสุด
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                    </View>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <IconAntDesign RightItem name="wechat" size={35} color='#0A55A6' style={styles.ListMenuListSubIcon} />
                            <Text style={styles.ListMenuListSubName}>
                                แชท
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                    </View>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <IconAntDesign RightItem name="heart" size={35} color='#D74024' style={styles.ListMenuListSubIcon} />
                            <Text style={styles.ListMenuListSubName}>
                                สิ่งที่สนใจ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                    </View>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <IconFontisto RightItem name="shopping-store" size={30} color='#0A55A6' style={styles.ListMenuListSubIcon} />
                            <Text style={styles.ListMenuListSubName}>
                                ร้านค้าที่ติดตาม
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                    </View>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <IconMaterialCommunityIcons RightItem name="star-box" size={35} color='#EAD295' style={styles.ListMenuListSubIcon} />
                            <Text style={styles.ListMenuListSubName}>
                                รีวิวของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                    </View>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={styles.ListMenuListSubIcon} />
                            <Text style={styles.ListMenuListSubName}>
                                ช่วยเหลือ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                    </View>
                </View>
            </View>
        )
    }
}

export class Listbar extends Component {
    render() {
        return (
            <View>
                <View style={{ width, flexDirection: 'row', justifyContent: 'space-around', borderColor: '#EAEAEA', borderWidth: 1, marginTop: 10 }}>
                    <View style={{ flexDirection: 'column', width: 100, }}>
                        <Image
                            source={require('../icon/bitcoin2.png')}
                            style={styles.ListbarBoxImage}
                        />
                        <Text style={styles.ListbarBoxText}>
                            หน้าหลัก
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: 100, }}>
                        <View style={{ width: 60, height: 60, marginTop: 18, backgroundColor: '#B6B6B4', borderRadius: 30, }}>
                            <Image
                                source={require('../icon/truck-facing-right.png')}
                                style={{ height: 40, width: 40, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
                            />
                        </View>
                        <Text style={styles.ListbarBoxText}>
                            ส่งฟรี
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: 100, }}>
                        <Image
                            source={require('../icon/bitcoin2.png')}
                            style={styles.ListbarBoxImage}
                        />
                        <Text style={styles.ListbarBoxText}>
                            คูปองสะสม
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: 100, }}>
                        <Image
                            source={require('../icon/bitcoin2.png')}
                            style={styles.ListbarBoxImage}
                        />
                        <Text style={styles.ListbarBoxText}>
                            Fin coin ของฉัน
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
