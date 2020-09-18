///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(IdCard);
function IdCard(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='บัตรประชาชน' />
        <ID_card />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ID_card = (props) => {
    const [date, setDate] = useState(new Date());
    const [filename, setFilename] = useState('ชื่อไฟล์ที่อัพ');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (e, s) => { const currentDate = s || date; setDate(currentDate); setShow(Platform.OS === 'ios'); };
    const showMode = (c) => { setMode(c); setShow(true); };
    const showDatepicker = () => showMode('date');
    const upload_IDcode = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.images, DocumentPicker.types.pdf,], });
            console.log(res.uri, res.type, res.name, res.size);
            const patt = new RegExp(DocumentPicker.types.images);
            if (res.type !== DocumentPicker.types.pdf) {
                console.log(patt.exec(res.type));
                if (patt.exec(res.type) === null) { alert('ไฟล์ไม่ถูกต้อง'); }
                else { setFilename(res.name); };
            } else { setFilename(res.name); };
        } catch (err) { if (DocumentPicker.isCancel(err)) { } else { throw err; }; };
    };
    return <>
        <ScrollView>
            <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>บัตรประชาชน</Text>
            <View style={[FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10, }]}>
                <View style={[{
                    backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, justifyContent: 'center',
                    paddingHorizontal: 10, width: '68%',
                }]}>
                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize6, { color: '#C5C5C5' }]}>{filename}</Text>
                </View>
                <TouchableOpacity onPress={() => upload_IDcode()} style={[FlexRow, ItemCenter,
                    { backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, width: '30%', }]}>
                    <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}>อัพโหลด</Text>
                    <IconEntypo name='upload' size={25} style={{ color: mainColor, marginLeft: 5 }} />
                </TouchableOpacity>
            </View>
            <Text style={[FontFamilyBold, FontSize7, { color: '#C5C5C5', textAlign: 'center' }]}>
                สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG .PDF</Text>
            <View style={
                { backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, marginHorizontal: 10, padding: 10, }}>
                <Text style={[FontFamilyBold, FontSize5, { marginBottom: 10 }]}>โปรดระบุวันหมดอายุ</Text>
                <View>
                    <TouchableOpacity onPress={(v) => showDatepicker(v)} style={ItemCenter}>
                        <View style={[FlexRow, ItemCenter,
                            { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '60%', }]}>
                            <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                            <Text style={[FontFamilyBold, FontSize6, { marginLeft: 10 }]}>
                                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                        </View>
                    </TouchableOpacity>
                    {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(v) => onChange(v)}
                        testID="dateTimePicker" value={date} />}
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={[ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>บันทึก</Text>
        </TouchableOpacity>
    </>;
};