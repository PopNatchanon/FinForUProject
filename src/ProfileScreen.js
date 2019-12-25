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
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconsEntypo from 'react-native-vector-icons/Entypo';
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
                <Headbar navigation={this.props.navigation} />
                <Menubar />
            </SafeAreaView>
        );
    }
}

export class Headbar extends Component {
    constructor(props) {
        super(props)
    }///----------------,
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../icon/bgprofile.jpg')}
                    style={styles.HeadbarImage}
                    resizeMethod='resize'
                />
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

export class Menubar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <View style={{ marginTop: '8%', padding: 4, flexDirection: 'row', borderBottomColor: '#EAEAEA', borderBottomWidth: 1, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, marginBottom: 8, }}>
                            รายการสั่งซื้อของฉัน
                    </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#0A55A6' }}>
                            รายการการสั่งซื้อทั้งหมด <IconsEntypo name='chevron-right' size={20} />
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
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#EAEAEA', marginTop: 20, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                        <Image
                            source={require('../icon/two-money-cards.png')}
                            style={{ marginRight: 'auto', marginLeft: 'auto', width: 50, height: 50 }}
                            resizeMethod='resize'
                        />
                        <Text style={{ marginRight: 'auto', marginLeft: 'auto', fontSize: 14, marginTop: 8 }}>
                            รอจ่ายเงิน
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../icon/month-calendar.png')}
                            style={{ marginRight: 'auto', marginLeft: 'auto', width: 50, height: 50 }}
                            resizeMethod='resize'
                        />
                        <Text style={{ marginRight: 'auto', marginLeft: 'auto', fontSize: 14, marginTop: 8 }}>
                            เตรียมจัดส่ง
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../icon/truck-facing-right.png')}
                            style={{ marginRight: 'auto', marginLeft: 'auto', width: 50, height: 50 }}
                            resizeMethod='resize'
                        />
                        <Text style={{ marginRight: 'auto', marginLeft: 'auto', fontSize: 14, marginTop: 8 }}>
                            ดำเนินการส่ง
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../icon/truck-facing-right.png')}
                            style={{ marginRight: 'auto', marginLeft: 'auto', width: 50, height: 50 }}
                            resizeMethod='resize'
                        />
                        <Text style={{ marginRight: 'auto', marginLeft: 'auto', fontSize: 14, marginTop: 8 }}>
                            รีวิวสินค้า
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 18, paddingBottom: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../icon/repeat.png')}
                            style={{ width: 28, height: 28 }}
                            resizeMethod='resize'
                        />
                        <Text style={{ fontSize: 16, marginLeft: 8 }}>
                            คืนสินค้า/คืนเงิน
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../icon/box.png')}
                            style={{ width: 28, height: 28 }}
                            resizeMethod='resize'
                        />
                        <Text style={{ fontSize: 16, marginLeft: 8 }}>
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
                <View>
                    <View>

                    </View>
                </View>
            </View>
        )
    }
}