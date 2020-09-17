///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
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
        <AppBar {...props} backArrow titleHead='ข้อมูลโค้ดส่วนลด' />
        <Form_Code_Sale {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Form_Code_Sale = (props) => {
    const { navigation } = props;
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [code, setCode] = useState(undefined);
    const [EXP_Day, setEXP_Day] = useState(undefined);
    const [EXP_Time, setEXP_Time] = useState(undefined);
    const [MFG_Day, setMFG_Day] = useState(undefined);
    const [MFG_Time, setMFG_Time] = useState(undefined);
    const [min_Price, setMin_Price] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    let onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    let showMode = currentMode => { setShow(true); setMode(currentMode); };
    let setStateChecked = (value, value2) => { setChecked(value); setChecked2(value2); };
    return <ScrollView>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ชื่อโค้ด</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                placeholder="สูงสุด100ตัวอักษร" maxLength={100} value={name} onChangeText={(name) => this.setState({ name })}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '30%' }]}>โค้ดส่วนลด</Text>
            <View style={[stylesMain.ItemCenter, { backgroundColor: '#EAEAEA', width: '30%', paddingVertical: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Fin</Text>
            </View>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right' }]} placeholder="สูงสุด6ตัวอักษร"
                maxLength={6} value={code} onChangeText={(value) => setCode(value)}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>วันที่เริ่มต้น</Text>
            <View>
                <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                    <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                    { borderWidth: 2, width: '90%', borderRadius: 5, paddingVertical: 5, borderColor: '#C5C5C5' }]}>
                        <IconFontAwesome name='calendar' size={20} color='rgb(29, 70, 204)' />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                    </View>
                </TouchableOpacity>
                {show && <DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="spinner"
                    onChange={(event, selectedDate) => onChange(event, selectedDate)} />}
            </View>
            {/* <DatePicker style={{ width: 300 }} date={MFG_Day} mode="date" placeholder="select date" format="DD-MM-YYYY"
                minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }} onDateChange={(value) =>
                    setMFG_Day(value)} /> */}
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>เวลาเริ่มต้น</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]} placeholder="ระบุ"
                maxLength={6} value={MFG_Time} onChangeText={(value) => setMFG_Time(value)}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>วันที่สิ้นสุด</Text>
            <View>
                <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                    <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                    { borderWidth: 2, width: '90%', borderRadius: 5, paddingVertical: 5, borderColor: '#C5C5C5' }]}>
                        <IconFontAwesome name='calendar' size={20} color='rgb(29, 70, 204)' />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                    </View>
                </TouchableOpacity>
                {show && <DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="spinner"
                    onChange={(event, selectedDate) => onChange(event, selectedDate)} />}
            </View>
            {/* <DatePicker style={{ width: 300 }} date={EXP_Day} mode="date" placeholder="select date" format="DD-MM-YYYY"
                minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }} onDateChange={(value) =>
                    setEXP_Day(value)} /> */}
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>เวลาสิ้นสุด</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]} placeholder="ระบุ"
                maxLength={6} value={EXP_Time} onChangeText={(value) => setEXP_Time(value)}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ประเภทโค้ด</Text>
            <View style={stylesMain.FlexRow}>
                <CheckBox checked={checked} onPress={() => setStateChecked(true, false)} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ลด%</Text>
                <CheckBox checked={checked2} onPress={() => setStateChecked(false, true)} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ลดบาท</Text>
            </View>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ราคาขั้นต่ำ</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                placeholder="ระบุราคาขั้นต่ำในการใช้คูปอง" maxLength={10} value={min_Price} onChangeText={(value) =>
                    setMin_Price(value)} />
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Advertisement_Campaign_Product', navigation })}
            style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '30%' }]}>เลือกสินค้าที่ใช้ได้</Text>
            <IconEntypo name='chevron-right' size={40} color={mainColor} />
        </TouchableOpacity>
    </ScrollView>;
};