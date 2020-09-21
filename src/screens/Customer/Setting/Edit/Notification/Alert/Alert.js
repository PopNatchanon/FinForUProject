///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
export const { height, width } = Dimensions.get('window');
import RNFetchBlob from 'rn-fetch-blob';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../../../style/stylesFont';
import stylesLogin from '../../../../../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, GetFetch, } from '../../../../../../customComponents';
import { ExitAppModule, } from '../../../../../Main/Main';
import { GetData, GetServicesBlob } from '../../../../../../customComponents/Tools';
import { Seller_SettingImage } from '../../../../../Seller/ProfileEdit/ProfileEdit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
    }, [activeGetSource]);
    return <SafeAreaView style={[stylesMain.SafeAreaView]}>
        <Edit_Setting_Bell {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Bell
export let Edit_Setting_Bell = (props) => {
    const [settingAlert, setSettingAlert] = useState({ alertOnMobile: true, chat: true, promotion: true, updateBuy: true, });
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='การแจ้งเตือน' />
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือน</Text>
            </View>
            <CheckBox checked={settingAlert.alertOnMobile} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingAlert({ ...settingAlert, alertOnMobile: !settingAlert.alertOnMobile })} size={25} uncheckedIcon='toggle-off' />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
            </View>
            <CheckBox checked={settingAlert.updateBuy} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingAlert({ ...settingAlert, updateBuy: !settingAlert.updateBuy })} size={25} uncheckedIcon='toggle-off' />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>พูดคุย</Text>
            </View>
            <CheckBox checked={settingAlert.chat} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingAlert({ ...settingAlert, chat: !settingAlert.chat })} size={25} uncheckedIcon='toggle-off' />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>โปรโมชั่น</Text>
            </View>
            <CheckBox checked={settingAlert.promotion} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingAlert({ ...settingAlert, promotion: !settingAlert.promotion })} size={25} uncheckedIcon='toggle-off' />
        </View>
    </SafeAreaView>;
};