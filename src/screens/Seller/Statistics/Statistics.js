///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
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
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='สถิติร้านร้านค้า' />
        <Seller_Statistics />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Statistics = (props) => {
    return <View>
        <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
            <View style={stylesMain.FlexRow}>
                <IconEntypo name='bar-graph' size={25} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อ</Text>
            </View>
        </View>
        <View style={stylesSeller.Seller_Setting_BoxTopic}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อที่สำเร็จ</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≥ 4.6</Text>
        </View>
        <View style={stylesSeller.Seller_Setting_BoxTopic}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการยกเลิกสินค้า</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≤ 10%</Text>
        </View>
        <View style={stylesSeller.Seller_Setting_BoxTopic}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการคืนสินค้า/คืนเงิน</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≤ 10%</Text>
        </View>
        <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
            <View style={stylesMain.FlexRow}>
                <IconEntypo name='emoji-happy' size={25} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ความพึงพอใจของลูกค้า</Text>
            </View>
        </View>
        <View style={stylesSeller.Seller_Setting_BoxTopic}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราความคิดเห็นโดยรวม</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>5 ≤ 10%</Text>
        </View>
        <View style={stylesSeller.Seller_Setting_BoxTopic}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการตอบกลับ</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>57.00 % ≥ 75%</Text>
        </View>
        <View style={stylesSeller.Seller_Setting_BoxTopic}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เวลาในการตอบกลับ</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>ภายใน 1 วัน ≤ 1วัน</Text>
        </View>
    </View>;
};