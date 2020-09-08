///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
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
import stylesFont from '../../../../../style/stylesFont';
import stylesLogin from '../../../../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, GetFetch, } from '../../../../../customComponents';
import { ExitAppModule, } from '../../../../Main/Main';
import { GetData, GetServicesBlob } from '../../../../../customComponents/Tools';
import { Seller_SettingImage } from '../../../../Seller/ProfileEdit/ProfileEdit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../../navigator/IpConfig';
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
        <Edit_Chat {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Chat
export let Edit_Chat = (props) => {
    const [settingChat, setSettingChat] = useState({ publicChat: true });
    return <>
        <AppBar {...props} backArrow titleHead='ตั้งค่าการแชท' />
        <View style={stylesProfileTopic.BoxTopic}>
            <View style={{ margin: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อนุญาตให้ทำการแชทจากหน้าโปรไฟล์</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#CECECE' }]}>
                    เปิดใช้งานเพื่ออนุญาตให้ผู้ใช้สามารถพูดคุยผ่านหน้าโปรไฟล์ได้</Text>
            </View>
            <CheckBox checked={settingChat.publicChat} checkedColor='#95F29F' checkedIcon='toggle-on' size={25} onPress={() =>
                setSettingChat({ ...settingChat, publicChat: !settingChat.publicChat })} uncheckedIcon='toggle-off' />
        </View>
    </>;
};