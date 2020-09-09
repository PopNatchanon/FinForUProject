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
        <AppBar {...props} backArrow titleHead='ถอนเงิน' />
        <Confirm_Bank {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Confirm_Bank = (props) => {
    const { navigation } = props;
    const [money, setMoney] = useState(undefined);
    return <>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10, paddingBottom: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>ถอนเงินไปที่</Text>
            <View style={stylesMain.FlexRow}>
                <FastImage style={{ height: 100, width: 100, borderWidth: 3 }}
                    source={{ uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`, }} />
                <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>ธนาคารกรุงเทพ</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>* *** *** *232</Text>
                </View>
            </View>
        </View>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>จำนวนเงินที่ทำการถอน</Text>
            <View style={{
                width: '100%', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '90%' }]} placeholder="" maxLength={50}
                    value={money} onChangeText={(value) => setMoney(value)}>
                </TextInput>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>THB</Text>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ระยะเวลาดำเนินการ : 3-5 วันทำการ</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Money_PIN_Mail', navigation })}
                style={[stylesMain.ItemCenter,
                { width: '80%', height: 50, backgroundColor: mainColor, borderRadius: 5, marginVertical: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, , { color: '#FFFFFF' }]}>ยืนยันการถอนเงิน</Text>
            </TouchableOpacity>
        </View>
    </>;
};