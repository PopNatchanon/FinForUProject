///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../customComponents';
import { ExitAppModule } from '../../Main/Main';
import { Product_income } from '../../Seller/Income/Income';
import { TabBar } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <Register_Affiliate_From {...props} />
        {/* <ExitAppModule /> */}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Register_Affiliate_From = (props) => {
    const [activeData, setActiveData] = useState(false);
    const [checked, setChecked] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [last_name, setLast_Name] = useState(undefined);
    const [Line_ID, setLine_ID] = useState(undefined);
    const [mode, setMode] = useState('date');
    const [name, setName] = useState(undefined);
    const [prefixName, setPrefixName] = useState({ Miss: false, Mr: false, Mrs: false, });
    const [show, setShow] = useState(false);
    let getLast_Name = (value) => { setActiveData(true); setLast_Name(value); };
    let getLine_ID = (value) => { setActiveData(true); setLine_ID(value); };
    let getName = (value) => { setActiveData(true); setName(value); };
    let onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); setDate(currentDate);
    };
    let setPrefix = (value, value2, value3) => setPrefixName({ Miss: value3, Mr: value, Mrs: value2, });
    let showMode = currentMode => { setShow(true); setMode(currentMode); };
    return <>
        <ScrollView>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>เอกสารการสมัครสมาชิก</Text>
            <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>คำนำหน้า</Text>
                <View style={[stylesMain.FlexRow, { height: 25, justifyContent: 'space-around' }]}>
                    <View style={[stylesMain.FlexRow]}>
                        <CheckBox checked={prefixName.Mr} checkedIcon='dot-circle-o' onPress={() => setPrefix(true, false, false)} size={25}
                            uncheckedIcon='circle-o' />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 2 }]}>นาย</Text>
                    </View>
                    <View style={[stylesMain.FlexRow]}>
                        <CheckBox checked={prefixName.Mrs} checkedIcon='dot-circle-o' onPress={() => setPrefix(false, true, false)} size={25}
                            uncheckedIcon='circle-o' />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 2 }]}>นาง</Text>
                    </View>
                    <View style={[stylesMain.FlexRow]}>
                        <CheckBox checked={prefixName.Miss} checkedIcon='dot-circle-o' onPress={() => setPrefix(false, false, true)} size={25}
                            uncheckedIcon='circle-o' />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 2 }]}>นางสาว</Text>
                    </View>
                </View>
            </View>
            <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={{ width: '49%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อ</Text>
                    <TextInput onChangeText={(value) => getName(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>{name}</Text>
                    </TextInput>
                </View>
                <View style={{ width: '49%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>นามสกุล</Text>
                    <TextInput onChangeText={(value) => getLast_Name(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>{last_name}</Text>
                    </TextInput>
                </View>
            </View>
            <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วัน/เดือน/ปีเกิด</Text>
                <View>
                    <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                        { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '60%', }]}>
                            <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                        </View>
                    </TouchableOpacity>
                    {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(event, selectedDate) =>
                        onChange(event, selectedDate)} testID="dateTimePicker" value={date} />}
                </View>
            </View>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Business_IdCard', navigation: props.navigation, })}>
                <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { paddingHorizontal: 10 }]}>
                    <View style={{ width: '95%' }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สำเนาบัตรประชาชน</Text>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
                        </View>
                    </View>
                    <View style={stylesMain.ItemCenter}>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} />
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Money_Bank', navigation: props.navigation, })}>
                <View style={[stylesMain.FlexRow, stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                    <View style={{ width: '95%' }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>บัญชีธนาคาร</Text>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
                        </View>
                    </View>
                    <View style={stylesMain.ItemCenter}>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} />
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
            <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Line ID</Text>
                <TextInput onChangeText={(value) => getLine_ID(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>{Line_ID}</Text>
                </TextInput>
            </View>
            <View style={stylesMain.FlexRow}>
                <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                <View style={stylesMain.ItemCenter}>
                    <View style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ฉันยอมรับเงื่อนไขของ FIN</Text>
                        <TouchableOpacity>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#36B680' }]}>ข้อตกลงการใช้งาน</Text>
                        </TouchableOpacity>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}> และยินยอม</Text>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน </Text>
                        <TouchableOpacity>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#36B680' }]}>นโยบายส่วนตัว</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Business', navigation: props.navigation,
        })} style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
        </TouchableOpacity>
    </>;
};