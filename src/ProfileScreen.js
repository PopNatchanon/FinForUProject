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
import AsyncStorage from '@react-native-community/async-storage';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../style/StylesProfileScreen'
import { finip, ip } from '../navigator/IpConfig';
export const { width, height } = Dimensions.get('window');
import { Toolbar, TabBar } from './tools/Tools'

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        }
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
        // console.log(currentUser)
        // console.log('profile:' + currentUser)
    }
    componentDidMount() {
        this.getDataasync()
    }
    render() {
        const { currentUser } = this.state;
        // console.log(currentUser)
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <ScrollView>
                    <View>
                        <Headbar navigation={this.props.navigation} currentUser={currentUser} />
                        <Menubar />
                        <Listbar navigation={this.props.navigation} />
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
        const { currentUser } = this.props;
        // console.log(currentUser)
        const uri = [finip, currentUser.image_path, currentUser.image].join('/')
        return (
            <View>
                <ImageBackground
                    source={require('../icon/bgprofile.jpg')}
                    style={styles.HeadbarImage}

                />
                <View style={styles.HeadbarA}>
                    <View style={styles.HeadbarBox1}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreMeScreen')} >
                                    <View style={styles.HeadbarBox1Sub}>
                                        <Text style={styles.HeadbarBox1SubText}>
                                            เริ่มค้าขาย
                                    </Text>
                                    </View>
                                </TouchableOpacity>
                                <FastImage
                                    source={{ uri: uri }}
                                    style={styles.HeadbarBoxImage}
                                />
                            </View>
                            <View style={{ marginLeft: 15, marginTop: '25%' }}>
                                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>
                                    {currentUser.name}
                                </Text>
                                <Text style={{ fontSize: 10, color: '#BEBDBD' }}>
                                    Active อยู่
                                </Text>
                                <Text style={{ fontSize: 10, color: '#FFFFFF' }}>
                                    ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 8 }}>
                            <IconMaterialCommunityIcons RightItem name="settings-outline" style={{ marginRight: 6 }} size={25} color='#FFFFFF' />
                            <IconFeather RightItem name="shopping-cart" size={25} color='#FFFFFF' />
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
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../icon/two-money-cards.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            รอจ่ายเงิน
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../icon/month-calendar.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            เตรียมจัดส่ง
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../icon/truck-facing-right.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            ดำเนินการส่ง
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: width * (1 / 4) }}>
                        <FastImage
                            source={require('../icon/rating.png')}
                            style={styles.MenubarSubLine1Image}

                        />
                        <Text style={styles.MenubarSubLine1Name}>
                            รีวิวสินค้า
                        </Text>
                    </View>
                </View>
                <View style={styles.MenubarSubLine2}>
                    <View style={styles.MenubarSubLine2Box}>
                        <FastImage
                            source={require('../icon/repeat.png')}
                            style={styles.MenubarSubLine2BoxImage}

                        />
                        <Text style={styles.MenubarSubLine2BoxName}>
                            คืนสินค้า/คืนเงิน
                        </Text>
                    </View>
                    <View style={styles.MenubarSubLine2Box}>
                        <FastImage
                            source={require('../icon/box.png')}
                            style={styles.MenubarSubLine2BoxImage}

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

export class Listbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0,
        }
    }
    PathList() {
        switch (this.state.pathlist) {
            case 0:
                return (
                    <ListMenu navigation={this.props.navigation} />
                )
            case 2:
                return (
                    <ViewCode navigation={this.props.navigation} />
                )
            case 3:
                return (
                    <CoinCollect navigation={this.props.navigation} />
                )
        }
    }
    render() {
        // console.log(this.state.pathlist)
        return (
            <View>
                <View style={{ width, flexDirection: 'row', borderColor: '#EAEAEA', borderWidth: 1, marginTop: 10 }}>
                    <View style={{ width: width * (1 / 4), flexDirection: 'column', alignItems: 'center', }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ pathlist: 0 }) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <View style={{ width: 60, height: 60, marginTop: 18, alignItems: 'center', backgroundColor: '#0A55A6', borderRadius: 30, }}>
                                    <IconAntDesign name='home' size={40} style={{ marginTop: 'auto', marginBottom: 'auto', color: '#fff' }} />
                                </View>
                                <Text style={styles.ListbarBoxText}>
                                    หน้าหลัก
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', width: width * (1 / 4), alignItems: 'center' }}>
                        <View style={{ width: 60, height: 60, marginTop: 18, alignItems: 'center', backgroundColor: '#B6B6B4', borderRadius: 30, }}>
                            <IconFeather name='home' size={40} style={{ marginTop: 'auto', marginBottom: 'auto', color: '#fff' }} />
                        </View>
                        <Text style={styles.ListbarBoxText}>
                            โปรโมชัน
                        </Text>
                    </View>
                    <View style={{ width: width * (1 / 4), flexDirection: 'column', alignItems: 'center', }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ pathlist: 2 }) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <FastImage
                                    source={require('../icon/bitcoin2.png')}
                                    style={styles.ListbarBoxImage}
                                />
                                <Text style={styles.ListbarBoxText}>
                                    โค้ดส่วนลด
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', width: width * (1 / 4), alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ pathlist: 3 }) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <FastImage
                                    source={require('../icon/bitcoin2.png')}
                                    style={styles.ListbarBoxImage}
                                />
                                <Text style={styles.ListbarBoxText}>
                                    Fin coin ของฉัน
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    {this.PathList()}
                </View>
            </View >
        );
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

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('LatestScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconMaterialIcons RightItem name="access-time" color='#D0B216' size={35} style={styles.ListMenuListSubIcon} />

                                <Text style={styles.ListMenuListSubName}>
                                    ดูล่าสุด
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ChatScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconAntDesign RightItem name="wechat" size={35} color='#0A55A6' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                    แชท
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('InterestedScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconAntDesign RightItem name="heart" size={35} color='#D74024' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                    สิ่งที่สนใจ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Follow_storeScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconFontisto RightItem name="shopping-store" size={30} color='#0A55A6' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                    ร้านค้าที่ติดตาม
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Review_meScreen')} >
                        <View style={styles.ListMenuList}>
                            <View style={styles.ListMenuListSub}>
                                <IconMaterialCommunityIcons RightItem name="star-box" size={35} color='#EAD295' style={styles.ListMenuListSubIcon} />
                                <Text style={styles.ListMenuListSubName}>
                                    รีวิวของฉัน
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
                </View>
            </View>
        )
    }
}

export class ViewCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0
        }
        this.getData = this.getData.bind(this);
    }
    PathList() {
        switch (this.state.pathlist) {
            case 0:
                return (
                    <MyCode />
                )
        }
    }
    getData(val) {
        // console.log(val);
        this.setState({
            pathlist: val
        });
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
                <View style={{ marginTop: 10, borderWidth: 1, borderColor: '#ECECEC', padding: 10, }}>
                    <Text style={{ fontSize: 14 }}>
                        โ่ค้ดส่วนลดของฉัน
                    </Text>
                </View>
                <View style={{ marginTop: 10, }}>
                    <TabBar
                        sendData={this.getData}
                        item={item}
                    // activeColor='red'
                    // type='box'
                    />
                </View>
                <View>
                    {this.PathList()}
                </View>
            </View>
        )
    }
}
export class MyCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    render() {
        return (
            <View>
                <View style={{ width, borderWidth: 1, borderColor: '#ECECEC', marginTop: 10, padding: 10, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: width * 0.7, alignItems: 'center', alignContent: 'center' }}>
                            <TextInput
                                placeholder="ใส่โค้ดส่วนลด"
                                value={this.state.text}
                                maxLength={9}
                                width={width * 0.7}
                                placeholderTextColor={'white'}
                                style={{ color: 'white', backgroundColor: '#D7D7D7', borderRadius: 6, padding: 4, }}
                                onChangeText={(text) => this.setState({ text })}
                            ></TextInput>
                        </View>
                        <View>
                            <View style={{ backgroundColor: '#6791BE', borderRadius: 6, padding: 8, marginLeft: 6 }}>
                                <Text style={{ color: '#FFF' }}>
                                    เก็บโค้ดส่วนลด
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: width * 0.98, borderBottomWidth: 0.5, borderWidth: 1, borderColor: '#ECECEC', marginTop: 10 }}>
                        <Text style={{ paddingLeft: 20, padding: 2, }}>
                            FIN Mission
                        </Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderColor: '#ECECEC', }}>
                        <View style={{ width: width * 0.98, borderBottomWidth: 0.5, borderWidth: 1, borderColor: '#ECECEC', padding: 10, flexDirection: 'row' }}>
                            <FastImage
                                style={{ backgroundColor: '#ECECEC', width: 60, height: 60, borderRadius: 40, }}
                            />
                            <View style={{ marginLeft: 16 }}>
                                <Text style={{ marginTop: 5 }}>ติดตาม ร้าน Ppooo</Text>
                                <View style={{ marginTop: 6, padding: 4, backgroundColor: '#0A55A6', alignContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', }}>โค้ดส่วนลด 80%</Text>
                                </View>
                            </View>
                            <View style={{ borderWidth: 1, borderRadius: 20, paddingTop: 4, padding: 15, height: 30, marginLeft: '36%', }}>
                                <Text>ติดตาม</Text>
                            </View>
                        </View>
                        <View style={{ width: width * 0.98, borderBottomWidth: 0.5, borderWidth: 1, borderColor: '#ECECEC', padding: 10, flexDirection: 'row' }}>
                            <FastImage
                                style={{ backgroundColor: '#ECECEC', width: 60, height: 60, borderRadius: 40, }}
                            />
                            <View style={{ marginLeft: 16 }}>
                                <Text style={{ marginTop: 5 }}>ติดตาม ร้าน Ppooo</Text>
                                <View style={{ marginTop: 6, padding: 4, backgroundColor: '#0A55A6', alignContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', }}>โค้ดส่วนลด 80%</Text>
                                </View>
                            </View>
                            <View style={{ borderWidth: 1, borderRadius: 20, paddingTop: 4, padding: 15, height: 30, marginLeft: '36%', }}>
                                <Text>ติดตาม</Text>
                            </View>
                        </View>
                        <View style={{ width: width * 0.98, borderBottomWidth: 0.5, borderWidth: 1, borderColor: '#ECECEC', padding: 10, flexDirection: 'row' }}>
                            <FastImage
                                style={{ backgroundColor: '#ECECEC', width: 60, height: 60, borderRadius: 40, }}
                            />
                            <View style={{ marginLeft: 16 }}>
                                <Text style={{ marginTop: 5 }}>ติดตาม ร้าน Ppooo</Text>
                                <View style={{ marginTop: 6, padding: 4, backgroundColor: '#0A55A6', alignContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', }}>โค้ดส่วนลด 80%</Text>
                                </View>
                            </View>
                            <View style={{ borderWidth: 1, borderRadius: 20, paddingTop: 4, padding: 15, height: 30, marginLeft: '36%', }}>
                                <Text>ติดตาม</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 4 }}>
                        <View style={{ width: width * 0.98, borderWidth: 1, borderColor: '#6791BE', borderRadius: 4, padding: 4, alignContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#6791BE' }}>ดูภารกิจทั้งหมด</Text>
                        </View>

                    </View>
                </View>
            </View >
        )
    }
}
export class CoinCollect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0
        }
        this.getData = this.getData.bind(this);
    }
    PathList() {
        switch (this.state.pathlist) {
            case 0:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
        }
    }
    getData(val) {
        // console.log(val);
        this.setState({
            pathlist: val
        });
    }
    render() {
        const item = [{
            name: 'คูปองทั้งหมด'
        }, {
            name: 'ท่องเที่ยว'
        }, {
            name: 'ส่วนลด'
        }, {
            name: 'อื่นๆ'
        }]
        const coin = 1000;
        return (
            <View>
                <View style={{ marginTop: 10, backgroundColor: '#11B7DC', height: 110, width }}>
                    <View style={{ width, marginTop: 'auto', marginBottom: 'auto', flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <FastImage
                            source={require('../icon/bitcoin2.png')}
                            style={{

                                width: 60,
                                height: 60,
                                borderRadius: 30,
                            }}
                        />
                        <View style={{ marginLeft: 40, borderRadius: 40, borderWidth: 1, borderColor: '#0A55A6', width: 160, height: 60, backgroundColor: 'white' }}>
                            <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 10 }}>
                                FIN COIN
                            </Text>
                            <View style={{ alignItems: 'center', alignContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    <NumberFormat
                                        value={coin}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={
                                            value => <Text style={
                                                styles.PopularProductImagePrice
                                            }>
                                                {value}
                                            </Text>
                                        }
                                    />
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TabBar
                        sendData={this.getData}
                        inactiveBoxColor={'#fff'}
                        inactiveColor={'#0A55A6'}
                        inactiveFontColor={'#0A55A6'}
                        item={item}
                        widthBox={98}
                        type='box'
                    />
                </View>
                <View>
                    {this.PathList()}
                </View>
            </View>
        )
    }
}

export class CoinPageBody extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginTop: 10, width: width * 0.96, height: 200, borderWidth: 1, borderColor: '#EAEAEA',backgroundColor:'white' }}>
                    <View style={{ width: '100%', height: 140 }}>
                        <FastImage
                            source={{
                                uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',

                            }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor:'white' }}>
                        <View style={{ padding: 4, width: width * 0.65 }}>
                            <Text>ส่วนลด 10% สำหรับร้าน เพชร </Text>
                        </View>
                        <View style={{ backgroundColor: '#0A55A6', width: 120, alignItems: 'center', marginTop: 4, borderRadius: 4 }}>
                            <Text style={{ marginBottom: 'auto', marginTop: 'auto', color: '#fff' }}>แลก 10 coin</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}