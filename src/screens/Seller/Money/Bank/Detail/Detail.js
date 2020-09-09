///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { width, height } = Dimensions.get('window');
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
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfile from '../../../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} deleteBar backArrow titleHead='บัญชีธนาคาร' />
        <Bank_detail />
    </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export let Bank_detail = (props) => {
    return <>
        <ScrollView>
            <View style={stylesMain.ItemCenter}>
                <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }]}>
                    <IconAntDesign name='checkcircle' size={20} color='#1BBE83' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#1BBE83', marginLeft: 10, }]}>
                        ตรวจสอบแล้ว</Text>
                </View>
                <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }]}>
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ชื่อธนาคาร</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>กรุงไทย (KTB)</Text>
                    </View>
                    <View style={{ height: 60, width: 60, marginLeft: 10 }}>
                        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: ip + '/MySQL/uploads/message/BBL-LOGO.jpg', }} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ชื่อบัญชีธนาคาร</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ยนะ ชนะ</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>เลขที่บัญชี</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>*******345</Text>
                </View>
                <View style={[stylesMain.FlexRow,
                { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10, justifyContent: 'space-between' }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>หน้าบัญชีธนาคาร</Text>
                    <TouchableOpacity style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor, marginRight: 10 }]}>
                            ดูเอกสาร</Text>
                        <IconEntypo name='eye' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={[stylesMain.ItemCenter, { height: 50, backgroundColor: mainColor }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ตั้งเป็นบัญชีตั้งต้น</Text>
        </TouchableOpacity>
    </>;
};