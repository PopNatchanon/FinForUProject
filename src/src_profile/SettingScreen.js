///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height } = Dimensions.get('window');
import RNRestart from 'react-native-restart';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen'
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='ตั้งค่าบัญชี' />
                <ScrollView>
                    <View>
                        <ListMenu navigation={this.props.navigation} />
                    </View>
                </ScrollView>
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class ListMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    logoutPress = async () => {
        this.handleClose()
        try {
            await AsyncStorage.clear()
            RNRestart.Restart();
        } catch (e) {
            // clear error
        }
    }
    handleOpen = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    get _renderHeader() {
        return (
            <IconMaterialIcons name='exit-to-app' size={50} color='white' />
        )
    }
    render() {
        return (
            <View>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            บัญชีของฉัน
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 0 })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                หน้าของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 1 })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ที่อยู่ของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            การตั้งค่า
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 2 })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ตั้งค่าการแชท
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 3 })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ตั้งค่าการแจ้งเตือน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 4 })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            ภาษา
                            </Text>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            ช่วยเหลือ
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 5 })} >
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ศูนย์ช่วยเหลือ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                กฎและข้อบังคับ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ให้คะแนนเราสิ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <View style={stylesProfileTopic.Button_Logout} >
                        <TouchableOpacity style={{ marginTop: 10 }} onPress={this.handleOpen}>
                            <View style={stylesProfileTopic.Button_LogoutBox}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]} >ออกจากระบบ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginTop: 5 }]}>FIN Shopping V 1.0.01</Text>
                </View>
                <SCLAlert
                    theme="danger"
                    headerIconComponent={this._renderHeader}
                    show={this.state.show}
                    title="ออกจากระบบ"
                    titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
                    subtitle="คุณต้องการออกจากระบบหรือไม่?"
                    subtitleStyle={stylesFont.FontFamilyText}
                    onRequestClose={() => null}
                >
                    <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
                        <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={this.handleClose} containerStyle={{ width: 150, }}>ไม่</SCLAlertButton>
                        <SCLAlertButton theme="danger" textStyle={stylesFont.FontFamilyText} onPress={this.logoutPress} containerStyle={{ width: 150, }}>ใช่</SCLAlertButton>
                    </View>
                </SCLAlert>
            </View>
        )
    }
}