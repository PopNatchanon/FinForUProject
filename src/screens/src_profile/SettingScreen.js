///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
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
import { AppBar, NavigationNavigate, } from '../../customComponents';
import { ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
function SettingScreen(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ตั้งค่าบัญชี' />
        <ScrollView>
            <ListMenu {...props} />
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export let ListMenu = (props) => {
    const { navigation } = props;
    const [show, setShow] = useState(false);
    let logoutPress = async () => {
        try { setShow(false); await AsyncStorage.clear(); RNRestart.Restart(); }
        catch (e) { };
    };
    let _renderHeader = <IconMaterialIcons color='white' name='exit-to-app' size={50} />;
    return <>
        <View style={stylesProfile.ListMenuList}>
            <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>บัญชีของฉัน</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_Topic', navigation, setData: { selectedIndex: 0 }, })}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>หน้าของฉัน</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_Topic', navigation, setData: { selectedIndex: 1 }, })}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ที่อยู่ของฉัน</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <View style={stylesProfile.ListMenuList}>
            <View style={stylesProfile.ListMenuListSub}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การตั้งค่า</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_Topic', navigation, setData: { selectedIndex: 2 }, })}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ตั้งค่าการแชท</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_Topic', navigation, setData: { selectedIndex: 3 }, })}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ตั้งค่าการแจ้งเตือน</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_Topic', navigation, setData: { selectedIndex: 4 }, })}>
            <View style={stylesProfileTopic.BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ภาษา</Text>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <View style={stylesProfile.ListMenuList}>
            <View style={stylesProfile.ListMenuListSub}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ช่วยเหลือ</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Profile_Topic', navigation, setData: { selectedIndex: 5 }, })}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ศูนย์ช่วยเหลือ</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => console.log('กฎและข้อบังคับ')}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>กฎและข้อบังคับ</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => console.log('ให้คะแนนเราสิ')}>
            <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ให้คะแนนเราสิ</Text>
                </View>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(true)} style={{ marginTop: 10 }}>
            <View style={stylesProfileTopic.Button_Logout}>
                <View style={stylesProfileTopic.Button_LogoutBox}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ออกจากระบบ</Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginTop: 5 }]}>FIN Shopping V 1.0.01</Text>
        </View>
        <SCLAlert headerIconComponent={_renderHeader} show={show} subtitle="คุณต้องการออกจากระบบหรือไม่?"
            subtitleStyle={stylesFont.FontFamilyText} theme="danger" onRequestClose={() => null} title="ออกจากระบบ"
            titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => setShow(false)}
                    textStyle={stylesFont.FontFamilyText} theme="default">ไม่</SCLAlertButton>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => logoutPress()}
                    textStyle={stylesFont.FontFamilyText} theme="danger">ใช่</SCLAlertButton>
            </View>
        </SCLAlert>
    </>;
};