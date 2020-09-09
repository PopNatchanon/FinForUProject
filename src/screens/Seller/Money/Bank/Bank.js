///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
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
        <AppBar {...props} UpBankBar backArrow titleHead='บัญชีธนาคาร' />
        <Bank_Totel {...props} Bank_True Bank_Default />
        <Bank_Totel {...props} Bank_False Bank_Edit />
    </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export let Bank_Totel = (props) => {
    const { Bank_True, Bank_False, Bank_Default, Bank_Edit, navigation } = props;
    return <TouchableOpacity onPress={() =>
        NavigationNavigate({ goScreen: 'Seller_Money_Bank_Detail', navigation })}
        style={[stylesMain.FlexRow, {
            backgroundColor: '#FFFFFF', width: '95%', padding: 10, borderColor: '#C4C4C4', borderWidth: 1, borderRadius: 5,
            marginTop: 10, height: 'auto', aspectRatio: 3, justifyContent: 'space-between'
        }]}>
        <View style={[stylesMain.FlexRow, { width: '70%' }]}>
            <View style={{ height: 80, width: 80 }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/message/BBL-LOGO.jpg`, }} />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กรุงไทย (KTB)</Text>
                {Bank_True && <View style={stylesMain.FlexRow}>
                    <IconAntDesign name='checkcircle' size={15} color='#1BBE83' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#1BBE83', marginLeft: 10, }]}>
                        ตรวจสอบแล้ว</Text>
                </View>}
                {Bank_False && <View style={stylesMain.FlexRow}>
                    <IconAntDesign name='closecircleo' size={15} color='#EC3535' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#EC3535', marginLeft: 10, }]}>
                        ไม่ผ่านการตรวจสอบ</Text>
                </View>}
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>*******345</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยนะ ชนะ</Text>
            </View>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
            {Bank_Default && <View style={{
                borderColor: '#1BBE83', borderWidth: 1, backgroundColor: '#ABEAD3', paddingHorizontal: 10, borderRadius: 5
            }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#1BBE83' }]}>ค่าเริ่มต้น</Text>
            </View>}
            {Bank_Edit && <View style={{
                borderColor: '#BE1B68', borderWidth: 1, backgroundColor: '#EAABAD', paddingHorizontal: 10, borderRadius: 5
            }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#BE1B68' }]}>ค่าเริ่มต้น</Text>
            </View>}
        </View>
    </TouchableOpacity>;
};