import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, Text, TouchableOpacity, View, ScrollView,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height } = Dimensions.get('window');
import RNRestart from 'react-native-restart';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesSeller from '../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../../screens/MainScreen';
import { NavigationNavigateScreen } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> Main

export default class Seller_Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 {...this.props} backArrow titleHead='ตั้งค่าร้านค้า' />
                <ScrollView>
                    <Seller_Setting_Topic {...this.props} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
///------------------------------------------------------------------------------/// 
export class Seller_Setting_Topic extends Component {
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
            <View>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>บัญชีร้านของฉัน</Text>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Profile_Edit', navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>หน้าร้านของฉัน</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setData: { selectedIndex: 0 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เอกสารการจดแจ้ง</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setData: { selectedIndex: 9 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ที่อยู่ร้านค้าของฉัน</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>การตั้งค่า</Text>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 2 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ตั้งค่าการแชท</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 3 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ตั้งค่าการแจ้งเตือน</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 4 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ภาษา</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ช่วยเหลือ</Text>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 5 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ศูนย์ช่วยเหลือ</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>กฎและข้อบังคับ</Text>
                    <IconEntypo name='chevron-right' size={35} color={mainColor} />
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ให้คะแนนเราสิ</Text>
                    <IconEntypo name='chevron-right' size={35} color={mainColor} />
                </View>
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
            </View>
        );
    }
}