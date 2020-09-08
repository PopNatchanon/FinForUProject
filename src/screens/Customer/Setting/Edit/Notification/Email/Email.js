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
export const { width, height } = Dimensions.get('window');
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
        <Edit_Setting_Email {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Email
export let Edit_Setting_Email = (props) => {
    const [settingEmail, setSettingEmail] = useState({ alertEmail: true, mailNews: true, updateBuy: true, });
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='การแจ้งเตือนทางE-mail' />
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือนทาง E-mail</Text>
            </View>
            <CheckBox checked={settingEmail.alertEmail} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingEmail({ ...settingEmail, alertEmail: !settingEmail.alertEmail })} size={25} uncheckedIcon='toggle-off' />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
            </View>
            <CheckBox checked={settingEmail.updateBuy} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingEmail({ ...settingEmail, updateBuy: !settingEmail.updateBuy })} size={25} uncheckedIcon='toggle-off' />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>จดหมายข่าว</Text>
            </View>
            <CheckBox checked={settingEmail.mailNews} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
                setSettingEmail({ ...settingEmail, mailNews: !settingEmail.mailNews })} size={25} uncheckedIcon='toggle-off' />
        </View>
    </SafeAreaView>;
};