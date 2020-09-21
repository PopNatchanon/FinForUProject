///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from 'react-native-elements';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews, } = stylesMain;
const { Seller_Up_ProductDetail, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Forms);
function Forms(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ข้อมูลโค้ดส่วนลด' />
        <Form_Code_Sale {...props} />
        <ExitApp {...props} />
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
    let onChange = (e, s) => { const currentDate = s || date; setDate(currentDate); setShow(Platform.OS === 'ios'); };
    let showMode = (c) => { setShow(true); setMode(c); };
    let setStateChecked = (v, v2) => { setChecked(v); setChecked2(v2); };
    return <ScrollView>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>ชื่อโค้ด</Text>
            <TextInput maxLength={100} onChangeText={(v) => setName(v)} placeholder="สูงสุด100ตัวอักษร" style={[FontFamilyText, FontSize5,
                { textAlign: 'right', width: '80%' }]} value={name} />
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '30%' }]}>โค้ดส่วนลด</Text>
            <View style={[ItemCenter, { backgroundColor: '#EAEAEA', paddingVertical: 5, width: '30%', }]}>
                <Text style={[FontFamilyText, FontSize5]}>Fin</Text>
            </View>
            <TextInput maxLength={6} onChangeText={(v) => setCode(v)} placeholder="สูงสุด6ตัวอักษร" style={[FontFamilyText, FontSize5,
                { textAlign: 'right' }]} value={code} />
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>วันที่เริ่มต้น</Text>
            <View>
                <TouchableOpacity onPress={() => showMode('date')} style={ItemCenter}>
                    <View style={[FlexRow, ItemCenter,
                        { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '90%', }]}>
                        <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                        <Text style={[FontFamilyBold, FontSize6, { marginLeft: 10 }]}>
                            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                    </View>
                </TouchableOpacity>
                {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(e, s) => onChange(e, s)}
                    testID="dateTimePicker" value={date} />}
            </View>
            {/* <DatePicker style={{ width: 300 }} date={MFG_Day} mode="date" placeholder="select date" format="DD-MM-YYYY"
                minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }} onDateChange={(value) =>
                    setMFG_Day(value)} /> */}
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>เวลาเริ่มต้น</Text>
            <TextInput maxLength={6} onChangeText={(v) => setMFG_Time(v)} placeholder="ระบุ" style={[FontFamilyText, FontSize5,
                { textAlign: 'right', width: '80%' }]} value={MFG_Time} />
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>วันที่สิ้นสุด</Text>
            <View>
                <TouchableOpacity onPress={() => showMode('date')} style={ItemCenter}>
                    <View style={[FlexRow, ItemCenter,
                        { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '90%', }]}>
                        <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                        <Text style={[FontFamilyBold, FontSize6, { marginLeft: 10 }]}>
                            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                    </View>
                </TouchableOpacity>
                {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(e, s) => onChange(e, s)}
                    testID="dateTimePicker" value={date} />}
            </View>
            {/* <DatePicker style={{ width: 300 }} date={EXP_Day} mode="date" placeholder="select date" format="DD-MM-YYYY"
                minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }} onDateChange={(value) =>
                    setEXP_Day(value)} /> */}
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>เวลาสิ้นสุด</Text>
            <TextInput maxLength={6} onChangeText={(v) => setEXP_Time(v)} placeholder="ระบุ" style={[FontFamilyText, FontSize5,
                { textAlign: 'right', width: '80%' }]} value={EXP_Time} />
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>ประเภทโค้ด</Text>
            <View style={FlexRow}>
                <CheckBox checked={checked} onPress={() => setStateChecked(true, false)} />
                <Text style={[FontFamilyText, FontSize5, { margin: 10, }]}>ลด%</Text>
                <CheckBox checked={checked2} onPress={() => setStateChecked(false, true)} />
                <Text style={[FontFamilyText, FontSize5, { margin: 10, }]}>ลดบาท</Text>
            </View>
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '20%' }]}>ราคาขั้นต่ำ</Text>
            <TextInput maxLength={10} onChangeText={(v) => setMin_Price(v)} placeholder="ระบุราคาขั้นต่ำในการใช้คูปอง" style={[FontFamilyText,
                FontSize5, { textAlign: 'right', width: '80%', }]} value={min_Price} />
        </View>
        <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Advertisement_Campaign_Product', })}
            style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5, { width: '30%' }]}>เลือกสินค้าที่ใช้ได้</Text>
            <IconEntypo name='chevron-right' size={40} color={mainColor} />
        </TouchableOpacity>
    </ScrollView>;
};