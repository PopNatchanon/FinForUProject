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
                {/* <ListMenu /> */}
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
                <View style={styles.Menubar}>
                    <View>
                        <Text style={styles.MenubarText1}>
                            รายการสั่งซื้อของฉัน
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.MenubarText2}>
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
                        <Text style={styles.MenubarSubLine2BoxText}>
                            คืนสินค้า/คืนเงิน
                        </Text>
                    </View>
                    <View style={styles.MenubarSubLine2Box}>
                        <Image
                            source={require('../icon/box.png')}
                            style={styles.MenubarSubLine2BoxImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.MenubarSubLine2BoxText}>
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
    // getItem(icon, name) {
    //     return (
    //         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //             <View style={{ flexDirection: 'row' }}>
    //                 <Image
    //                     source={require('../icon/' + icon + '.png')}
    //                     style={{ width: 48, height: 35, marginTop: 6, marginLeft: 40 }}
    //                     resizeMethod='resize'
    //                 />
    //                 <Text style={{ marginTop: 15, marginLeft: 16, fontSize: 16 }}>
    //                     {name}
    //                 </Text>
    //             </View>
    //             <IconsEntypo name='chevron-right' style={{ marginTop: 6 }} size={35} />
    //         </View>
    //     )
    // }
    render() {
        return (
            <View>
                <View style={{ height: 50, width, borderColor: '#EAEAEA', borderWidth: 1, marginTop: 10 }}>
                    {/* {this.getItem('chat_64px', 'แชท')} */}
                </View>
            </View>
        )
    }
}
