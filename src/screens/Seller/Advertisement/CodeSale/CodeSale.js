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
        <AppBar {...props} backArrow titleHead='โค้ดส่วนลด' />
        <Code_Sale {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Code_Sale = (props) => {
    const { navigation } = props;
    const [selectedIndex, setSelectedIndex] = useState(0)
    const item = [{ name: 'เร็วๆ นี้' }, { name: 'กำลังดำเนินการ' }, { name: 'หมดอายุแล้ว' }];
    let Code_BOX = <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>BirthDAY</Text>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', width: '60%' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-02-2020 15:00</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-02-2020 16:00</Text>
        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', width: '50%' }]}>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>โค้ดส่วนลด</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ประเภทโค้ด</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ราคาขั้นต่ำ</Text>
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>FINs00wk</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ลดบาท</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>฿100</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, {
            borderBottomWidth: 2, borderTopWidth: 2, justifyContent: 'space-around', paddingVertical: 10, marginVertical: 10
        }]}>
            <View style={{ width: '30%', }}>
                <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 5, borderRadius: 5 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>จำนวน </Text>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center', marginTop: 5 }]}>100</Text>
            </View>
            <View style={{ width: '30%' }}>
                <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 5, borderRadius: 5 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ผู้ซื้อกดรับ </Text>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center', marginTop: 5 }]}>50</Text>
            </View>
            <View style={{ width: '30%' }}>
                <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 5, borderRadius: 5 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ใช้แล้ว </Text>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center', marginTop: 5 }]}>20</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginBottom: 10 }]}>
            <TouchableOpacity style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, width: '49%' }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>แก้ไข</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, width: '49%' }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>ลบ</Text>
            </TouchableOpacity>
        </View>
    </View>;
    return <>
        <View style={stylesMain.FrameBackground}>
            <TabBar sendData={value => setSelectedIndex(value.selectedIndex)} setVertical={4} item={item} />
        </View>
        <ScrollView>
            {Code_BOX}
        </ScrollView>
        <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 10 }]}
            onPress={() => NavigationNavigate({ goScreen: 'Seller_Advertisement_CodeSale_Forms', navigation })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>สร้างโปรโมชันส่วนลด</Text>
        </TouchableOpacity>
    </>;
};