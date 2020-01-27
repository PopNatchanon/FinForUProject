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
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import { ip } from '../../navigator/IpConfig';
export const { width, height } = Dimensions.get('window');

export default class StoreMeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={[styles.SafeAreaView, { backgroundColor: '#E9E9E9' }]}>
                <Headbar navigation={this.props.navigation} />
                <ScrollView>
                    <View>
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
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                            <IconEntypo name='chevron-left' size={35} />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 5, fontSize: 16, fontFamily: 'SukhumvitSet-Bold' }}>ตั้งค่าบัญชี</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 5, }}>
                        <IconMaterialCommunityIcons style={{ marginRight: 10, }} name="settings-outline" size={25} />
                        <IconAntDesign name='message1' size={25} />
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
    logoutPress = async () => {
        try {
            await AsyncStorage.clear()
            RNRestart.Restart();
        } catch (e) {
            // clear error
        }

        // console.log('Done.')
    }
    render() {
        return (
            <View>
                <View style={[styles.ListMenu, { marginTop: 0 }]}>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={styles.ListMenuListSubName}>
                                บัญชีของฉัน
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    หน้าของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    ที่อยู่ของฉัน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={styles.ListMenuListSubName}>
                                การตั้งค่า
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    ตั้งค่าการแชท
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    ตั้งค่าการแจ้งเตือน
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    ภาษา
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.ListMenuList}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={styles.ListMenuListSubName}>
                                ช่วยเหลือ
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    ศูนย์ช่วยเหลือ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    กฎและข้อบังคับ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                        <View style={[styles.ListMenuList, styles.bgBoxWhite]}>
                            <View style={styles.ListMenuListSub}>
                                <Text style={styles.ListMenuListSubName}>
                                    ให้คะแนนเราสิ
                            </Text>
                            </View>
                            <IconEntypo name='chevron-right' style={styles.ListMenuListIcon} size={35} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.logoutPress()}>
                        <View style={{ width, height: 60, alignContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: width - 30, height: 40, backgroundColor: '#0A55A6', alignContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: 16, color: '#fff', fontFamily: 'SukhumvitSet-Text' }} >ออกจากระบบ</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

