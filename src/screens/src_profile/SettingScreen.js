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
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen'
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { NavigationNavigateScreen } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={navigation} titleHead='ตั้งค่าบัญชี' />
                <ScrollView>
                    <View>
                        <ListMenu navigation={navigation} />
                    </View>
                </ScrollView>
                <ExitAppModule navigation={navigation} />
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
        try {
            this.handleClose()
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
        const { navigation } = this.props
        return (
            <>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            บัญชีของฉัน
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_Topic', setData: { selectedIndex: 0 }, navigation
                })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                หน้าของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_Topic', setData: { selectedIndex: 1 }, navigation
                })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ที่อยู่ของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            การตั้งค่า
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_Topic', setData: { selectedIndex: 2 }, navigation
                })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ตั้งค่าการแชท
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_Topic', setData: { selectedIndex: 3 }, navigation
                })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ตั้งค่าการแจ้งเตือน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_Topic', setData: { selectedIndex: 4 }, navigation
                })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            ภาษา
                            </Text>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <View style={stylesProfile.ListMenuList}>
                    <View style={stylesProfile.ListMenuListSub}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                            ช่วยเหลือ
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 5 }, navigation
                })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ศูนย์ช่วยเหลือ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => console.log('กฎและข้อบังคับ')}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                กฎและข้อบังคับ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => console.log('ให้คะแนนเราสิ')}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                                ให้คะแนนเราสิ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleOpen()} style={{ marginTop: 10 }}>
                    <View style={stylesProfileTopic.Button_Logout}>
                        <View style={stylesProfileTopic.Button_LogoutBox}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ออกจากระบบ</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
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
                        <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()}
                            containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ไม่</SCLAlertButton>
                        <SCLAlertButton theme="danger" textStyle={stylesFont.FontFamilyText} onPress={() => this.logoutPress()}
                            containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ใช่</SCLAlertButton>
                    </View>
                </SCLAlert>
            </>
        )
    }
}