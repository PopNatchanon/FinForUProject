///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
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
        <AppBar {...props} backArrow titleHead='บัตรประชาชน' />
        <ID_card />
        {/* <ExitAppModule /> */}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let ID_card = (props) => {
    const [date, setDate] = useState(new Date());
    const [filename, setFilename] = useState('ชื่อไฟล์ที่อัพ');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    let onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate); setShow(Platform.OS === 'ios');
    };
    let showMode = currentMode => { setMode(currentMode); setShow(true); };
    let showDatepicker = () => showMode('date');
    let upload_IDcode = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.images, DocumentPicker.types.pdf,], });
            console.log(res.uri, res.type, res.name, res.size);
            var patt = new RegExp(DocumentPicker.types.images);
            if (res.type !== DocumentPicker.types.pdf) {
                console.log(patt.exec(res.type));
                if (patt.exec(res.type) === null) { alert('ไฟล์ไม่ถูกต้อง'); }
                else { setFilename(res.name); };
            } else { setFilename(res.name); };
        } catch (err) { if (DocumentPicker.isCancel(err)) { } else { throw err; }; };
    };
    return <>
        <ScrollView>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>บัตรประชาชน</Text>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10, }]}>
                <View style={[{
                    backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, justifyContent: 'center',
                    paddingHorizontal: 10, width: '68%',
                }]}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#C5C5C5' }]}>{filename}</Text>
                </View>
                <TouchableOpacity onPress={() => upload_IDcode()} style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                { backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, width: '30%', }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>อัพโหลด</Text>
                    <IconEntypo name='upload' size={25} style={{ color: mainColor, marginLeft: 5 }} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#C5C5C5', textAlign: 'center' }]}>
                สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG .PDF</Text>
            <View style={{
                backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, marginHorizontal: 10, padding: 10,
            }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginBottom: 10 }]}>โปรดระบุวันหมดอายุ</Text>
                <View>
                    <TouchableOpacity onPress={(value) => showDatepicker(value)} style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                        { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '60%', }]}>
                            <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                        </View>
                    </TouchableOpacity>
                    {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(value) => onChange(value)}
                        testID="dateTimePicker" value={date} />}
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>บันทึก</Text>
        </TouchableOpacity>
    </>;
};