///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView, Image,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesFont, { normalize } from '../../../../../style/stylesFont';
import stylesLogin from '../../../../../style/stylesLoginScreen';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices } from '../../../../../customComponents/Tools';
import { Address_Customar } from '../../../../Customer/Setting/Edit/Address/Address';
import { NavigationNavigate, AppBar } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../../navigator/IpConfig';
import { ExitAppModule } from '../../../../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
        <Document {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------แก้ไขเอกสารการจดแจ้ง--------------------------------------///
export let Document = (props) => {
    const { navigation } = props;
    return <View>
        <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขบัญชีธนาคาร</Text>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_Bank', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>บัญชีธนาคาร</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขเอกสารจดแจ้ง</Text>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_DocumentCompany', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                    หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_DocumentIdCard', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                    สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_DocumentVat', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบทะเบียนภาษีมูลค่าเพิ่ม</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_DocumentTrademark', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบจดทะเบียนเครื่องหมายการค้า</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_DocumentCertificate', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                    หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Setting_Edit_DocumentBank', navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>สำเนาบัญชีธนาคารของผู้ขาย</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
    </View>;
};