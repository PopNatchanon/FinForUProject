///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView, Image,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { Address_Customar } from '../../src_profile/src_Setting/Setting_Topic';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import DocumentPicker from 'react-native-document-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesFont, { normalize } from '../../../style/stylesFont';
import stylesLogin from '../../../style/stylesLoginScreen';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../navigator/IpConfig';
import { ExitAppModule } from '../../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Setting_TopicStore);
function Setting_TopicStore(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification {...props} />
                    {/* แก้ไขเอกสารการจดแจ้ง */}
                </View>;
            case 1:
                return <View>
                    <AppBar {...props} backArrow titleHead='เพิ่มบัญชีธนาคาร' saveBar />
                    <Edit_Bank {...props} />
                    {/* แก้ไขบัญชีธนาคาร */}
                </View>;
            case 2:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} />
                    {/* หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า */}
                </View>;
            case 3:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} DetailHead='สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม' />
                </View>;
            case 4:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} DetailHead='ใบทะเบียนภาษีมูลค่าเพิ่ม' />
                </View>;
            case 5:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} DetailHead='ใบจดทะเบียนเครื่องหมายการค้า' />
                </View>;
            case 6:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} DetailHead='หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)' />
                </View>;
            case 7:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} DetailHead='สำเนาบัญชีธนาคารของผู้ขาย' />
                </View>;
            case 8:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                    <Notification_From {...props} DetailHead='สำเนาบัญชีธนาคารของผู้ขาย' />
                </View>;
            case 9:
                return <View>
                    <AppBar {...props} backArrow titleHead='ที่อยู่ร้านค้าของฉัน' />
                    <Setting_Address_Store {...props} />
                </View>;
            case 10:
                return <View>
                    <AppBar {...props} backArrow titleHead='เพิ่มเลขพัสดุ' />
                    <Up_Code_Number />
                </View>;
            case 11:
                return <View>
                    <AppBar {...props} backArrow titleHead='แก้ไขเลขพัสดุ' />
                    <Up_Code_Number />
                </View>;
        };
    };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {PathList()}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------แก้ไขเอกสารการจดแจ้ง--------------------------------------///
export let Notification = (props) => {
    const { navigation } = props;
    return <View>
        <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขบัญชีธนาคาร</Text>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 1 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>บัญชีธนาคาร</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขเอกสารจดแจ้ง</Text>
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 2 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                    หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 3 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                    สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 4 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบทะเบียนภาษีมูลค่าเพิ่ม</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 5 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบจดทะเบียนเครื่องหมายการค้า</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 6 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                    หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 7 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>สำเนาบัญชีธนาคารของผู้ขาย</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------แก้ไขบัญชีธนาคาร--------------------------------------///
export let Edit_Bank = (props) => {
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [filename, setFilename] = useState('ชื่อไฟล์ที่อัพ');
    const [nameCusBank, setNameCusBank] = useState(undefined);
    const [nameBank, setNameBank] = useState('กรุณาเลือกธนาคาร');
    const [numberBank, setNumberBank] = useState('');
    const [selectedItem, setSelectedItem] = useState(undefined);
    var pickerItem = [];
    var url_image;
    var uri = `${finip}/store_transfer/bank_data`;
    dataService?.bank_data?.map((value) => pickerItem.push(value.name_bank));
    selectedItem && (url_image = `${finip}/${selectedItem[0].image_path}/${selectedItem[0].image}`);
    let upload_Bookbank = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.images], });
            console.log(res.uri, res.type, res.name, res.size);
            setFilename(res.name);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) { } else { throw err; };
        };
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getPickerItem = (itemValue) => {
        if (itemValue != null) {
            setNameBank(itemValue);
            setSelectedItem(dataService.bank_data.map((value) => value).filter((value2) => value2.name_bank == itemValue));
        };
    };
    let setStateText = (value) => {
        if (numberBank.length < value.length && !Number.isInteger(value.slice(-1) * 1)) { value = numberBank; }
        else { setNumberBank(value); };
    };
    useEffect(() => {
        activeGetServices && GetServices({ uriPointer: uri, getDataSource: (value) => getData(value) });
    }, [activeGetServices]);
    return <View>
        <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อธนาคาร</Text>
            <View style={[stylesSeller.Edit_Box]}>
                <ModalDropdown options={pickerItem} style={[stylesMain.ItemCenterVertical,]} textStyle={{ fontSize: normalize(20) }}
                    dropdownTextStyle={[stylesFont.FontFamilyText,
                    { width: width * 0.933, textAlign: 'center', fontSize: normalize(20) }]}
                    renderButtonText={(value) => getPickerItem(value)}>
                    <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: width * 1 }]}>
                        <View style={[stylesMain.ItemCenter,
                        { flexDirection: 'row', width: width * 0.8, marginLeft: -10, marginRight: -10 }]}>
                            {selectedItem && selectedItem[0].image && <Image source={{ uri: url_image }}
                                style={{ width: 40, aspectRatio: 1, marginRight: 4 }} />}
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { textAlign: 'center', }]}>{nameBank}</Text>
                        </View>
                        <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
                    </View>
                </ModalDropdown>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หมายเลขบัญชีธนาคาร</Text>
            <View style={stylesSeller.Edit_Box}>
                <TextInput style={stylesFont.FontFamilyText} keyboardType='number-pad' fontSize={15}
                    placeholder="กรุณากรอกหมายเลขบัญชีธนาคาร" editable maxLength={10} value={numberBank} onChangeText={(value) =>
                        setStateText(value)} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อบัญชีธนาคาร</Text>
            <View style={stylesSeller.Edit_Box}>
                <TextInput style={stylesFont.FontFamilyText} fontSize={15} placeholder="กรุณากรอกชื่อบัญชีธนาคาร" multiline editable
                    maxLength={15} value={nameCusBank} onChangeText={(value) => setNameCusBank(value)} />
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หน้าบัญชีธนาคาร</Text>
                <View style={[stylesMain.FlexRow, { height: 50, justifyContent: 'space-around', marginBottom: 10 }]}>
                    <View style={[stylesMain.FlexRow, { paddingHorizontal: 10, justifyContent: 'space-between' }]}>
                        <View style={[{
                            width: '68%', height: 50, backgroundColor: '#FFFFFF', paddingHorizontal: 10, borderColor: '#EAEAEA',
                            borderWidth: 1, borderRadius: 5, justifyContent: 'center'
                        }]}>
                            <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#C5C5C5' }]}>
                                {filename}</Text>
                        </View>
                        <TouchableOpacity onPress={() => upload_Bookbank()} style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                        { width: '30%', borderColor: mainColor, borderWidth: 2, borderRadius: 5, backgroundColor: '#FFFFFF' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>อัพโหลด</Text>
                            <IconEntypo name='upload' size={30} style={{ color: mainColor, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>
                    สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG </Text>
            </View>
        </View>
    </View>;
};
///----------------------------------------แก้ไขเอกสารการจดแจ้ง --------------------------------------///
export let Notification_From = (props) => {
    const { DetailHead } = props;
    const [activeNow, setActiveNow] = useState(0);
    const [activeAvatarSource, setActiveAvatarSource] = useState(false);
    const [avatarSource, setAvatarSource] = useState([]);
    const [date, setDate] = useState(new Date());
    const [checked, setChecked] = useState(true);
    const [dataDay, setDateDay] = useState(undefined);
    const [dataMo, setDateMo] = useState(undefined);
    const [dataYear, setDateYear] = useState(undefined);
    // activeNow < 2 ? this.setState({ activeNow: activeNow + 1, date: new Date('2000') }) : null;
    let UploadImageSingle = (index) => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response; setActiveAvatarSource(!activeAvatarSource); setAvatarSource(avatarSource);
        });
    };
    let UploadImageMultiple = () => {
        const options = { multiple: true, includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item));
            setActiveAvatarSource(!activeAvatarSource); setAvatarSource(avatarSource);
        });
    };
    // UploadImageData = () => {
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
    let getDataYear = () => {
        var dates = new Date().getFullYear();
        var box = [];
        for (var min = 1950; min <= parseInt(dates); min = min + 1) { box.push(String(min)); };
        setDate(new Date()); setDateYear(box);
    };
    let getDataMo = (itemValue) => {
        if (itemValue != null) {
            const item = String(itemValue);
            var box = [];
            for (var min = 0; min <= 11; min = min + 1) { box.push(String(min)); };
            setDate(new Date(date).setFullYear(item)); setDateMo(box);
        };
    };
    let getDataDay = (itemValue) => {
        if (itemValue != null) {
            const item = String(itemValue);
            var box = [];
            for (var min = 1; min <= 31; min = min + 1) { box.push(String(min)); };
            setDate(new Date(date).setMonth(item)); setDateDay(box);
        };
    };
    let dataYears = () => dataYear.map((item) => <Picker.Item label={item} value={item} key={item} />)
    let dataMos = () => {
        var months_thai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม",
            "พฤศจิกายน", "ธันวาคม"];
        var months_eng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
            'December'];
        return dataMo.map((item) => <Picker.Item label={months_thai[item]} value={item} key={item} />);
    };
    let dataDays = () => dataDay.map((item) => <Picker.Item label={item} value={item} key={item} />);
    dataYear == undefined && getDataYear();
    dataMo == undefined && getDataMo(new Date());
    dataDay == undefined && getDataDay(new Date());
    let DataDay = dataDays();
    let DataMo = dataMos();
    let DataYear = dataYears();
    var day = new Date(date).getDate();
    var month = new Date(date).getMonth();
    var year = new Date(date).getFullYear();
    return <View>
        <View style={stylesMain.FrameBackground}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center', marginTop: 10 }]}>
                {DetailHead ? DetailHead : 'หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า'} </Text>
            <View style={{ padding: 10 }}>
                <ScrollView horizontal>
                    {avatarSource ? <>
                        {avatarSource.map((item, index) => <TouchableOpacity onPress={() => UploadImageSingle(index)} key={index}>
                            <View style={[stylesMain.ItemCenter, {
                                marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1,
                            }]}>
                                <FastImage source={{ uri: item.path }} style={[stylesMain.ItemCenterVertical,
                                { height: '100%', width: '100%' }]} />
                            </View>
                        </TouchableOpacity>)}
                        {avatarSource.length < 7 && <TouchableOpacity onPress={() => UploadImageMultiple()}>
                            <View style={[stylesMain.ItemCenter,
                            { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>
                                        +เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                    </> : <TouchableOpacity onPress={() => UploadImageMultiple()}>
                            <View style={[stylesMain.ItemCenter,
                            { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>
                                        +เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                </ScrollView>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: 250, marginTop: 10, color: '#B7B7B7' }]}>
                    *กรุณาอัพโหลดเอกสารที่เป็นปัจจุบัน หากไม่ทำรายการ เราจะทำการถอนการขายสินค้าของท่านบนเว็บของเรา</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 10 }]}>โปรดระบุวันหมดอายุ</Text>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
                        <View style={stylesMain.FlexRow}>
                            <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
                                <Picker selectedValue={String(day)} style={stylesMain.BoxProduct1Image}
                                    itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { backgroundColor: '#fff' }]}
                                    onValueChange={(itemValue, itemIndex) => setDate(new Date(date).setDate(itemValue))}>
                                    {DataDay}
                                </Picker>
                            </View>
                            <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
                                <Picker selectedValue={String(month)} style={stylesMain.BoxProduct1Image}
                                    itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { backgroundColor: '#fff' }]}
                                    onValueChange={(itemValue, itemIndex) => getDataDay(itemValue)}>
                                    {DataMo}
                                </Picker>
                            </View>
                            <View style={stylesLogin.DateBoxBody}>
                                <Picker selectedValue={String(year)} style={stylesMain.BoxProduct1Image}
                                    itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { backgroundColor: '#fff' }]}
                                    onValueChange={(itemValue, itemIndex) => getDataMo(itemValue)}>
                                    {DataYear}
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export let Setting_Address_Store = (props) => {
    const { navigation } = props;
    return <View>
        <Address_Customar MainAddress />
        <Address_Customar />
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 475 }}>
            <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Customer_account', navigation })}>
                <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export let Up_Code_Number = (props) => {
    const [numberCode, setNumberCode] = useState(undefined);
    const [show, setShow] = useState(false);
    handle = (value) => setShow(value);
    let _renderHeader = <IconFontAwesome name='check' size={50} color='white' />;
    return <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>กรอกเลขพัสดุ</Text>
        <View style={{ alignItems: 'center' }}>
            <View style={stylesSeller.Up_Code_Number_BoxTextInput}>
                <TextInput style={stylesFont.FontFamilyText} fontSize={15} placeholder="" multiline editable maxLength={50}
                    value={numberCode} onChangeText={(value) => setNumberCode(value)}>
                </TextInput>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FF0000' }]}>*กรุณาตรวจเลขพัสดุ</Text>
            </View>
            <View style={[stylesSeller.BottomSheet_Botton, { paddingTop: 15 }]}>
                <TouchableOpacity>
                    <View style={stylesSeller.BottomSheet_Botton_cancel}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handle(true)}>
                    <View style={stylesSeller.BottomSheet_Botton_OK}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <SCLAlert theme="success" headerIconComponent={_renderHeader} show={show} title="กรุณาตรวจสอบหมายเลขพัสดุ"
            titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
            subtitle="tnt1237174823403268 " subtitleStyle={stylesFont.FontFamilyText} onRequestClose={() => null}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
                <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
                    containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
                <SCLAlertButton theme="success" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
                    containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
            </View>
        </SCLAlert>
    </View>;
};