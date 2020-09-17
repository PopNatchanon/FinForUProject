///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import DateTimePicker from '@react-native-community/datetimepicker';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, ItemCenterVertical, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(DocumentCertificate);
function DocumentCertificate(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow saveBar titleHead='แก้ไขเอกสารการจดแจ้ง' />
        <Document_From {...props} DetailHead='หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)' />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------แก้ไขเอกสารการจดแจ้ง --------------------------------------///
export const Document_From = (props) => {
    const { DetailHead } = props;
    const [activeNow, setActiveNow] = useState(0);
    const [activeAvatarSource, setActiveAvatarSource] = useState(false);
    const [avatarSource, setAvatarSource] = useState([]);
    const [checked, setChecked] = useState(true);
    const [dataDay, setDateDay] = useState(undefined);
    const [dataMo, setDateMo] = useState(undefined);
    const [dataYear, setDateYear] = useState(undefined);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    // activeNow < 2 ? this.setState({ activeNow: activeNow + 1, date: new Date('2000') }) : null;
    const UploadImageSingle = (index) => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response; setActiveAvatarSource(!activeAvatarSource); setAvatarSource(avatarSource);
        });
    };
    const UploadImageMultiple = () => {
        const options = { multiple: true, includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item));
            setActiveAvatarSource(!activeAvatarSource); setAvatarSource(avatarSource);
        });
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); setDate(currentDate);
    };
    const showMode = currentMode => { setShow(true); setMode(currentMode); };
    // let onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setDate(currentDate); setShow(Platform.OS === 'ios');
    // };
    // let showMode = currentMode => { setMode(currentMode); setShow(true); };
    // let showDatepicker = () => showMode('date');    // UploadImageData = () => {
    //     const { avatarSource } = this.state
    //     var uri = `${ip}/sql/uploadimage/updateimage.php`
    //     avatarSource && (
    //         fetch(uri, {
    //             method: "POST",
    //             body: avatarSource
    //         })
    //             .then(response => response.json())
    //             .then(response => {
    //                 alert("Upload success!");
    //                 this.setState({ avatarSource: null });
    //             })
    //             .catch(error => {
    //                 alert("Upload failed!");
    //             })
    //     )
    // }
    // componentDidMount() {
    //     this.getDataYear();
    //     this.getDataMo(new Date());
    //     this.getDataDay(new Date());
    // };
    // let getDataYear = () => {
    //     var dates = new Date().getFullYear();
    //     var box = [];
    //     for (var min = 1950; min <= parseInt(dates); min = min + 1) { box.push(String(min)); };
    //     setDate(new Date()); setDateYear(box);
    // };
    // let getDataMo = (itemValue) => {
    //     if (itemValue != null) {
    //         const item = String(itemValue);
    //         var box = [];
    //         for (var min = 0; min <= 11; min = min + 1) { box.push(String(min)); };
    //         setDate(new Date(date).setFullYear(item)); setDateMo(box);
    //     };
    // };
    // let getDataDay = (itemValue) => {
    //     if (itemValue != null) {
    //         const item = String(itemValue);
    //         var box = [];
    //         for (var min = 1; min <= 31; min = min + 1) { box.push(String(min)); };
    //         setDate(new Date(date).setMonth(item)); setDateDay(box);
    //     };
    // };
    // let dataYears = () => dataYear.map((item) => <Picker.Item label={item} value={item} key={item} />)
    // let dataMos = () => {
    //     var months_thai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม",
    //         "พฤศจิกายน", "ธันวาคม"];
    //     var months_eng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    //         'December'];
    //     return dataMo.map((item) => <Picker.Item label={months_thai[item]} value={item} key={item} />);
    // };
    // let dataDays = () => dataDay.map((item) => <Picker.Item label={item} value={item} key={item} />);
    // dataYear == undefined && getDataYear();
    // dataMo == undefined && getDataMo(new Date());
    // dataDay == undefined && getDataDay(new Date());
    // let DataDay = dataDays();
    // let DataMo = dataMos();
    // let DataYear = dataYears();
    return <>
        <View style={FrameBackground}>
            <Text style={[FontFamilyText, FontSize5, { marginTop: 10, textAlign: 'center', }]}>
                {DetailHead ? DetailHead : 'หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า'} </Text>
            <View style={{ padding: 10 }}>
                <ScrollView horizontal>
                    {avatarSource ? <>
                        {avatarSource.map((item, index) => <TouchableOpacity onPress={() => UploadImageSingle(index)} key={index}>
                            <View style={[ItemCenter,
                                { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
                                <FastImage source={{ uri: item.path }} style={[ItemCenterVertical, { height: '100%', width: '100%' }]} />
                            </View>
                        </TouchableOpacity>)}
                        {avatarSource.length < 7 && <TouchableOpacity onPress={() => UploadImageMultiple()}>
                            <View style={[ItemCenter,
                                { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
                                <View style={[ItemCenter, ItemCenterVertical]}>
                                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                    <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                    </> : <TouchableOpacity onPress={() => UploadImageMultiple()}>
                            <View style={[ItemCenter,
                                { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
                                <View style={[ItemCenter, ItemCenterVertical]}>
                                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                    <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                </ScrollView>
                <Text style={[FontFamilyText, FontSize7, { color: '#B7B7B7', marginTop: 10, width: 250, }]}>
                    *กรุณาอัพโหลดเอกสารที่เป็นปัจจุบัน หากไม่ทำรายการ เราจะทำการถอนการขายสินค้าของท่านบนเว็บของเรา</Text>
                <Text style={[FontFamilyText, FontSize5, { marginTop: 10 }]}>โปรดระบุวันหมดอายุ</Text>
                <View style={{ alignItems: 'center', width: '100%', }}>
                    <View>
                        <TouchableOpacity onPress={() => showMode('date')} style={ItemCenter}>
                            <View style={[FlexRow, ItemCenter,
                                { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '100%' }]}>
                                <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                                <Text style={[FontFamilyBold, FontSize6, { marginLeft: 10 }]}>
                                    {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                            </View>
                        </TouchableOpacity>
                        {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(event, selectedDate) =>
                            onChange(event, selectedDate)} testID="dateTimePicker" value={date} />}
                    </View>
                    {/* <View style={[stylesLogin.DateBox, ItemCenter]}>
                        <View style={FlexRow}>
                            <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
                                <Picker selectedValue={String(day)} style={BoxProduct1Image}
                                    itemStyle={[FontFamilyText, FontSize6, { backgroundColor: '#fff' }]}
                                    onValueChange={(itemValue, itemIndex) => setDate(new Date(date).setDate(itemValue))}>
                                    {DataDay}
                                </Picker>
                            </View>
                            <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
                                <Picker selectedValue={String(month)} style={BoxProduct1Image}
                                    itemStyle={[FontFamilyText, FontSize6, { backgroundColor: '#fff' }]}
                                    onValueChange={(itemValue, itemIndex) => getDataDay(itemValue)}>
                                    {DataMo}
                                </Picker>
                            </View>
                            <View style={stylesLogin.DateBoxBody}>
                                <Picker selectedValue={String(year)} style={BoxProduct1Image}
                                    itemStyle={[FontFamilyText, FontSize6, { backgroundColor: '#fff' }]}
                                    onValueChange={(itemValue, itemIndex) => getDataMo(itemValue)}>
                                    {DataYear}
                                </Picker>
                            </View>
                        </View>
                    </View> */}
                </View>
            </View>
        </View>
    </>;
};