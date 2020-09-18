///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Froms);
function Froms(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <Register_Affiliate_From {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Register_Affiliate_From = (props) => {
    const [activeData, setActiveData] = useState(false);
    const [checked, setChecked] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [last_name, setLast_Name] = useState(undefined);
    const [Line_ID, setLine_ID] = useState(undefined);
    const [mode, setMode] = useState('date');
    const [name, setName] = useState(undefined);
    const [prefixName, setPrefixName] = useState({ Miss: false, Mr: false, Mrs: false, });
    const [show, setShow] = useState(false);
    const getLast_Name = (v) => { setActiveData(true); setLast_Name(v); };
    const getLine_ID = (v) => { setActiveData(true); setLine_ID(v); };
    const getName = (v) => { setActiveData(true); setName(v); };
    const onChange = (e, s) => { const currentDate = s || date; setShow(Platform.OS === 'ios'); setDate(currentDate); };
    const setPrefix = (v, v2, v3) => setPrefixName({ Miss: v3, Mr: v, Mrs: v2, });
    const showMode = (c) => { setShow(true); setMode(c); };
    return <>
        <ScrollView>
            <Text style={[FontFamilyBold, FontSize5, { margin: 5 }]}>เอกสารการสมัครสมาชิก</Text>
            <View style={[FrameBackground, { paddingHorizontal: 10 }]}>
                <Text style={[FontFamilyBold, FontSize5]}>คำนำหน้า</Text>
                <View style={[FlexRow, { height: 25, justifyContent: 'space-around' }]}>
                    <View style={[FlexRow]}>
                        <CheckBox checked={prefixName.Mr} checkedIcon='dot-circle-o' onPress={() => setPrefix(true, false, false)} size={25}
                            uncheckedIcon='circle-o' />
                        <Text style={[FontFamilyText, FontSize6, { marginTop: 2 }]}>นาย</Text>
                    </View>
                    <View style={[FlexRow]}>
                        <CheckBox checked={prefixName.Mrs} checkedIcon='dot-circle-o' onPress={() => setPrefix(false, true, false)} size={25}
                            uncheckedIcon='circle-o' />
                        <Text style={[FontFamilyText, FontSize6, { marginTop: 2 }]}>นาง</Text>
                    </View>
                    <View style={[FlexRow]}>
                        <CheckBox checked={prefixName.Miss} checkedIcon='dot-circle-o' onPress={() => setPrefix(false, false, true)} size={25}
                            uncheckedIcon='circle-o' />
                        <Text style={[FontFamilyText, FontSize6, { marginTop: 2 }]}>นางสาว</Text>
                    </View>
                </View>
            </View>
            <View style={[FrameBackground, FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={{ width: '49%', }}>
                    <Text style={[FontFamilyBold, FontSize5]}>ชื่อ</Text>
                    <TextInput onChangeText={(v) => getName(v)} style={{ borderRadius: 5, borderWidth: 1, }}>
                        <Text style={[FontFamilyBold, FontSize5,]}>{name}</Text>
                    </TextInput>
                </View>
                <View style={{ width: '49%', }}>
                    <Text style={[FontFamilyBold, FontSize5]}>นามสกุล</Text>
                    <TextInput onChangeText={(v) => getLast_Name(v)} style={{ borderRadius: 5, borderWidth: 1, }}>
                        <Text style={[FontFamilyBold, FontSize5,]}>{last_name}</Text>
                    </TextInput>
                </View>
            </View>
            <View style={[FrameBackground, { paddingHorizontal: 10 }]}>
                <Text style={[FontFamilyBold, FontSize5]}>วัน/เดือน/ปีเกิด</Text>
                <View>
                    <TouchableOpacity onPress={() => showMode('date')} style={ItemCenter}>
                        <View style={[FlexRow, ItemCenter,
                            { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '60%', }]}>
                            <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                            <Text style={[FontFamilyBold, FontSize6, { marginLeft: 10 }]}>
                                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                        </View>
                    </TouchableOpacity>
                    {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(e, s) => onChange(e, s)}
                        testID="dateTimePicker" value={date} />}
                </View>
            </View>
            <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Business_IdCard', })}>
                <View style={[FrameBackground, FlexRow, { paddingHorizontal: 10 }]}>
                    <View style={{ width: '95%' }}>
                        <Text style={[FontFamilyBold, FontSize5]}>สำเนาบัตรประชาชน</Text>
                        <View>
                            <Text style={[FontFamilyText, FontSize7]}>
                                เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
                        </View>
                    </View>
                    <View style={ItemCenter}>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} />
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={[FontFamilyBold, FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
            <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Money_Bank', })}>
                <View style={[FlexRow, FrameBackground, { paddingHorizontal: 10 }]}>
                    <View style={{ width: '95%' }}>
                        <Text style={[FontFamilyBold, FontSize5]}>บัญชีธนาคาร</Text>
                        <View>
                            <Text style={[FontFamilyText, FontSize7]}>
                                เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
                        </View>
                    </View>
                    <View style={ItemCenter}>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} />
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={[FontFamilyBold, FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
            <View style={[FrameBackground, { paddingHorizontal: 10 }]}>
                <Text style={[FontFamilyBold, FontSize5]}>Line ID</Text>
                <TextInput onChangeText={(value) => getLine_ID(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
                    <Text style={[FontFamilyBold, FontSize5,]}>{Line_ID}</Text>
                </TextInput>
            </View>
            <View style={FlexRow}>
                <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                <View style={ItemCenter}>
                    <View style={FlexRow}>
                        <Text style={[FontFamilyBold, FontSize7]}>ฉันยอมรับเงื่อนไขของ FIN</Text>
                        <TouchableOpacity>
                            <Text style={[FontFamilyBold, FontSize7, { color: '#36B680' }]}>ข้อตกลงการใช้งาน</Text>
                        </TouchableOpacity>
                        <Text style={[FontFamilyBold, FontSize7]}> และยินยอม</Text>
                    </View>
                    <View style={FlexRow}>
                        <Text style={[FontFamilyBold, FontSize7]}>ดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน </Text>
                        <TouchableOpacity>
                            <Text style={[FontFamilyBold, FontSize7, { color: '#36B680' }]}>นโยบายส่วนตัว</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Business', })} style={[ItemCenter,
            { backgroundColor: '#0A55A6', height: 50 }]}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
        </TouchableOpacity>
    </>;
};