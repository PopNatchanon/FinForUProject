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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import {
    ButtonGroup,
    Button,
} from 'react-native-elements'
import FastImage from 'react-native-fast-image';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/StylesProfileScreen'
import { ip } from '../../navigator/IpConfig';
export const { width, height } = Dimensions.get('window');

export default class StoreMeScreen extends Component {
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
                        <ListMenu navigation={this.props.navigation} />
                    </View>
                </ScrollView>
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
                <View style={styles.Appbar} >
                    <View style={{flexDirection:'row',}}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                            <IconEntypo name='chevron-left' size={35} />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 5, }}>ร้านค้าของฉัน</Text>
                    </View>
                    <View style={{flexDirection:'row', padding:5,}}>
                        <IconMaterialCommunityIcons style={{ marginRight:10, }}name="settings-outline"  size={25} />
                        <IconAntDesign name='message1' size={25}/>
                    </View>
                </View>
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
                                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>
                                    ppooo
                                </Text>
                                <Text style={{ fontSize: 10, color: '#FFFFFF' }}>
                                    ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2
                                </Text>
                            </View>
                        </View>

                    </View>
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
                <View style={{height:40, width:'100%',marginTop:60,flexDirection:'row', justifyContent:'space-between', borderColor:'#E9E9E9',borderWidth:1,}}>
                    <View>
                        <Text style={styles.MenubarText1}>
                          การขายของฉัน
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.MenubarText2}>
                        ดูประวัติการขาย <IconEntypo name='chevron-right' size={20} color='#0A55A6'/>
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
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../../icon/truck-facing-right.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                        ที่ต้องจัดส่ง
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../../icon/box.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                        ยกเลิก
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../../icon/repeat.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                        คืนสินค้า/คืนเงิน
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <IconFeather name='more-horizontal' size={50} />
                        <Text style={styles.MenubarSubLine1Name}>
                        เพิ่มเติม
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

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMe_Up_Product')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                            <IconAntDesign RightItem name="plussquareo" size={35} color='#0A55A6' style={styles.ListMenuListSubIcon} />

                                <Text style={styles.ListMenuListSubName}>
                                 เพิ่มสินค้า
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ChatScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                            <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35} style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                ออเดอร์ล่าสุด
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('InterestedScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                            <IconMaterialCommunityIcons name="car-estate"  size={35} color='#B6B6B4' style={styles.ListMenuListSubIcon}/>
                                <Text style={styles.ListMenuListSubName}>
                                การจัดส่งของฉัน 
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Follow_storeScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconAntDesign RightItem name="linechart" size={30} color='#0A55A6' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                สถิติร้านค้าของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Review_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconMaterialCommunityIcons RightItem name="star" size={35} color='#EAD295' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                คะแนนของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Help_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconEntypo RightItem name="megaphone" size={35} color='#EB6417' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                โปรโมทสินค้า ADS
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Help_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconFeather RightItem name="help-circle" size={35} color='#00A3FF' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                ช่วยเหลือ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Help_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconsFontAwesome5 RightItem name="store-alt" size={30} color='#06BBBB' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                ร้านค้าของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

