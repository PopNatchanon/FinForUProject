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
        <AppBar {...props} backArrow titleHead='FIN แคมเปญ' />
        <Seller_Fin_Campaign {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Fin_Campaign = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const item = [{ name: 'เร็วๆ นี้' }, { name: 'กำลังดำเนินการ' }, { name: 'หมดอายุแล้ว' }];
    return <View>
        <View style={{ backgroundColor: '#fff' }}>
            <TabBar sendData={value => setSelectedIndex(value.selectedIndex)} setVertical={4} item={item} />
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 10, marginTop: 10 }}>
            <View style={{ height: 90, width: '40%' }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/mysql/uploads/products/Campaign9999.png`, }} />
            </View>
            <View style={{ width: '60%', padding: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    มาเข้าร่วมแคมเปญกับเราสิ! สิทธิพิเศษสำหรับร้านค้าใน Fin เข้าร่วมแคมเปญ " 9 Baht คอลเลคชั่นราคาต่ำกว่า 199 บาท !
                    (วันที่่ 5 - 11 มี.ค.) " เลย</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>การเข้าร่วมโปรโมชั่นจะสิ้นสุดภายใน3 วัน 1 ชั่วโมง</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 10 }} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Advertisement_Campaign_Product', navigation })}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#7ED0E8', width: 130, borderRadius: 5, height: 30 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>
                            เข้าร่วมโปรโมชั่น ตอนนี้!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};