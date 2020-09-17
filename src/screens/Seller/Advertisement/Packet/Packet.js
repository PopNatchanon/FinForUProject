///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { height, width } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import FastImage from 'react-native-fast-image';
import { CheckBox } from 'react-native-elements';
import PINCode from '@haskkor/react-native-pincode';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesProfile from '../../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='แพคเกจปัจจุบันที่ใช้อยู่' />
        <Seller_Advertisement_Packet {...props} backArrow />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement_Packet = (props) => {
    const { navigation } = props;
    return <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>ชื่อแพคเกจ </Text>
        <View style={stylesMain.ItemCenter}>
            <View style={stylesSeller.Seller_AdvertisementPacketBox}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>แพคเกจโฆษณา ขนาด S</Text>
            </View>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>รายละเอียด</Text>
        <View style={stylesMain.ItemCenter}>
            <View style={stylesSeller.Seller_AdvertisementPacketBox}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ระยะเวลาของแพคเกจ 30 วัน </Text>
            </View>
        </View>
        <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Advertisement_Packet_Buy', navigation })}>
                <View style={[stylesSeller.Seller_Return_Button, { margin: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ซื้อแพคเกจ</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};