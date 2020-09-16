///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
export const { height, width } = Dimensions.get('window');
import RNFetchBlob from 'rn-fetch-blob';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../../style/stylesFont';
import stylesLogin from '../../../../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, GetFetch, } from '../../../../../customComponents';
import { ExitAppModule, } from '../../../../Main/Main';
import { GetData, GetServicesBlob } from '../../../../../customComponents/Tools';
import { Seller_SettingImage } from '../../../../Seller/ProfileEdit/ProfileEdit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
    }, [activeGetSource]);
    return <SafeAreaView style={[stylesMain.SafeAreaView]}>
        <Edit_Profile {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Profile
export let Edit_Profile = (props) => {
    const { activeGetSource, cokie, currentUser, navigation, route } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(false);
    const [dataBody2, setDataBody2] = useState(undefined);
    const [date, setDate] = useState(new Date());
    const [dataDay, setDataDay] = useState(undefined);
    const [dataMo, setDataMo] = useState(undefined);
    const [dataYear, setDataYear] = useState(undefined);
    const [dataSevice, setDataSevice] = useState(undefined);
    const [dataSevice2, setDataSevice2] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [inputName, setInputName] = useState(undefined);
    const [gender, setGender] = useState(undefined);
    const [inputGender, setInputGender] = useState(undefined);
    const [birth_day, setBirth_day] = useState(undefined);
    const [inputBirth_day, setInputBirth_day] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [inputPhone, setInputPhone] = useState(undefined);
    const [image, setImage] = useState(undefined);
    const [image_path, setImage_Path] = useState(undefined);
    const [path, setPath] = useState(undefined);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const birthdaySheetRef = useRef(null);
    const genderSheetRef = useRef(null);
    const nameSheetRef = useRef(null);
    const phone_numberSheetRef = useRef(null);
    var dataBody = { id_customer: currentUser?.id_customer ?? '', };
    var uri = `${finip}/profile/profile_mobile`;
    var uri2 = `${finip}/profile/update_profile_mobile`;
    let getDataDay = (itemValue) => {
        if (itemValue != null) {
            const item = String(itemValue);
            var box = [];
            for (var min = 1; min <= 31; min = min + 1) { box.push(String(min)); };
            setDate(new Date(date).setMonth(item)); setDataDay(box);
        };
    };
    let getDataMo = (itemValue) => {
        if (itemValue != null) {
            const item = String(itemValue);
            var box = [];
            for (var min = 0; min <= 11; min = min + 1) { box.push(String(min)); };
            setDate(new Date(date).setFullYear(item)); setDataMo(box);
        };
    };
    let getDataYear = () => {
        var dates = new Date().getFullYear();
        var box = [];
        for (var min = 1950; min <= parseInt(dates); min = min + 1) { box.push(String(min)); };
        setDate(new Date()); setDataYear(box);
    };
    let dataDays = () => dataDay.map((item) => <Picker.Item key={item} label={item} value={item} />);
    let dataMos = () => {
        var months_thai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม",
            "พฤศจิกายน", "ธันวาคม"];
        var months_eng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
            'December'];
        return dataMo.map((item) => <Picker.Item key={item} label={months_thai[item]} value={item} />);
    };
    let dataYears = () => dataYear?.map((item) => <Picker.Item key={item} label={item} value={item} />);
    let saveBirth_day = async () => { birthdaySheetRef.current.close(); setBirth_day(inputBirth_day); };
    let saveGender = async () => { genderSheetRef.current.close(); setGender(inputGender); };
    let saveName = async () => { nameSheetRef.current.close(); setName(inputName); };
    let savePhone = async () => { phone_numberSheetRef.current.close(); setPhone(inputPhone); };
    let saveProfile = async () => {
        var o = path && path.path.split('/');
        var body2 = [];
        body2.push({ data: currentUser.id_customer, name: 'id_customer', });
        body2.push({ data: name, name: 'first_name', });
        body2.push({ data: gender ? 'male' : 'female', name: 'gender', });
        path && body2.push({ data: RNFetchBlob.wrap(path.path), filename: o[o.length - 1], name: 'file', type: path.mime, });
        body2.push({ data: birth_day, name: 'birth_day', });
        body2.push({ data: phone, name: 'telephone', });
        setActiveGetServices2(true); setDataBody2(body2);
    };
    dataDay == undefined && getDataDay(new Date());
    dataMo == undefined && getDataMo(new Date());
    dataYear == undefined && getDataYear();
    let birthdaySheetBody = () => {
        let onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setDate(currentDate); setShow(Platform.OS === 'ios');
        };
        let showMode = currentMode => { setMode(currentMode); setShow(true); };
        !birth_day && dataSevice?.list_profile?.map((value) => { setDate(value?.date_of_birth); });
        // console.log('birthdaySheetBody')
        // console.log(date)
        // const { date, } = this.state;
        // let DataDay = dataDays()
        // let DataMo = dataMos()
        // let DataYear = dataYears()
        var day = new Date(date).getDate();
        var month = new Date(date).getMonth();
        var year = new Date(date).getFullYear();
        return <>
            <View style={stylesProfileTopic.Edit_Profile}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วันเกิด</Text>
                <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
                    <View>
                        <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                            { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '100%', }]}>
                                <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                                    {`${day}-${month + 1}-${year}`}</Text>
                            </View>
                        </TouchableOpacity>
                        {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(event, selectedDate) =>
                            onChange(event, selectedDate)} testID="dateTimePicker" value={new Date(date)} />}
                    </View>
                    {/* <DatePicker style={{ width: 300 }} date={inputBirth_day} mode="date" placeholder="select date" format="DD-MM-YYYY"
            minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
            customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }}
            onDateChange={(value) => setInputBirth_day(value)} /> */}
                    {/* <View style={stylesMain.FlexRow}>
              <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
                <Picker
                  selectedValue={String(day)}
                  style={stylesMain.BoxProduct1Image}
                  itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize7, { backgroundColor: '#fff' }]}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ date: new Date(date).setDate(itemValue) })
                  }}>
                  {DataDay}
                </Picker>
              </View>
              <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
                <Picker
                  selectedValue={String(month)}
                  style={stylesMain.BoxProduct1Image}
                  itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize7, { backgroundColor: '#fff' }]}
                  onValueChange={(itemValue, itemIndex) => {
                    this.getDataDay(itemValue)
                  }}>
                  {DataMo}
                </Picker>
              </View>
              <View style={stylesLogin.DateBoxBody}>
                <Picker
                  selectedValue={String(year)}
                  style={stylesMain.BoxProduct1Image}
                  itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize7, { backgroundColor: '#fff' }]}
                  onValueChange={(itemValue, itemIndex) => {
                    this.getDataMo(itemValue)
                  }}>
                  {DataYear}
                </Picker>
              </View>
            </View> */}
                </View>
            </View>
            <TouchableOpacity onPress={() => saveBirth_day()}>
                <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
                </View>
            </TouchableOpacity>
        </>;
    };
    let genderSheetBody = () => <>
        <View style={stylesProfileTopic.Edit_Profile}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
            <View style={stylesMain.FlexRow}>
                <CheckBox checked={inputGender} checkedIcon='dot-circle-o' onPress={() => setInputGender(true)} size={25}
                    uncheckedIcon='circle-o' />
                <IconFontisto name='male' size={20} style={{ color: mainColor, marginLeft: -10, marginTop: 15, }} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10, marginTop: 15, }]}>ชาย</Text>
                <CheckBox checked={!inputGender} checkedIcon='dot-circle-o' onPress={() => setInputGender(false)} size={25}
                    uncheckedIcon='circle-o' />
                <IconFontisto name='female' size={20} style={{ color: '#ff1ac6', marginLeft: -10, marginTop: 15, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10, marginTop: 15, }]}>หญิง</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => saveGender()}>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </>;
    let getData = (value) => { setActiveGetServices(false); setDataSevice(value); };
    let getData2 = (value) => {
        setActiveGetServices2(false); setDataSevice2(value); route.params.getDataSource(value); navigation.goBack();
    };
    let nameSheetBody = () => <>
        <View style={stylesProfileTopic.Edit_Profile}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อผู้ใช้</Text>
            <View style={stylesProfileTopic.Edit_Profile_Box}>
                <TextInput fontSize={15} maxLength={30} onChangeText={(value) => setInputName(value)} placeholder="ชื่อ" value={inputName} />
            </View>
        </View>
        <TouchableOpacity onPress={() => saveName()}>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </>;
    let phone_numberSheetBody = () => <>
        <View style={stylesProfileTopic.Edit_Profile}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เบอร์โทรศัพท์</Text>
            <View style={stylesProfileTopic.Edit_Profile_Box}>
                <TextInput fontSize={15} maxLength={10} onChangeText={(value) => setInputPhone(value)} placeholder="เบอร์โทรศัพท์"
                    value={inputPhone} />
            </View>
        </View>
        <TouchableOpacity onPress={() => savePhone()}>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </>;
    let sendImageProfile = (value) => setPath(value);
    let setCurrentUser = () => dataSevice?.list_profile?.map((value) => {
        var checked;
        if (value.gender == 'male') { checked = true } else { checked = false };
        const bday = new Date(value.date_of_birth);
        var dob = `${bday.getDate()}-${(bday.getMonth() + 1)}-${bday.getFullYear()}`;
      /*name*/setName(value.name); setInputName(value.name);/*gender*/setGender(checked); setInputGender(checked);
      /*telphone*/setPhone(value.telphone); setInputPhone(value.telphone);/*birth_day*/setBirth_day(dob); setInputBirth_day(dob);
      /*image*/setImage_Path(value.image_path); setImage(value.image);
    });
    useEffect(() => {
        activeGetServices && !activeGetSource && cokie && currentUser && uri &&
            GetFetch({ Authorization: cokie, dataBody: dataBody, getDataSource: (value) => getData(value), uriPointer: uri, });
    }, [activeGetServices && !activeGetSource && cokie && currentUser && uri]);
    useEffect(() => {
        activeGetServices2 && cokie && uri2 && GetFetch({
            Authorization: cokie, dataBody: dataBody2, type: 'blob', getDataSource: (value) => getData2(value),
            showConsole: 'update_profile_mobile', uriPointer: uri2,
        });
    }, [activeGetServices2 && cokie && uri2]);
    name == null && setCurrentUser();
    return <>
        {/* ชื่อ-นามสกุล */}
        <BottomSheet customStyles={{ container: { alignItems: "center", paddingTop: 20, } }} duration={250} height={150}
            ref={nameSheetRef}>
            {nameSheetBody()}
        </BottomSheet>
        {/* เพศ */}
        <BottomSheet customStyles={{ container: { alignItems: "center", paddingTop: 20, } }} duration={250} height={150}
            ref={genderSheetRef}>
            {genderSheetBody()}
        </BottomSheet>
        {/* วันเกิด */}
        <BottomSheet customStyles={{ container: { alignItems: "center", paddingTop: 20, } }} duration={250} height={150}
            ref={birthdaySheetRef}>
            {birthdaySheetBody()}
        </BottomSheet>
        {/* เบอร์โทรศัพท์ */}
        <BottomSheet customStyles={{ container: { alignItems: "center", paddingTop: 20, } }} duration={250} height={150}
            ref={phone_numberSheetRef}>
            {phone_numberSheetBody()}
        </BottomSheet>
        <AppBar {...props} backArrow titleHead='แก้ไขโปรไฟล์' />
        <ScrollView>
            <Seller_SettingImage image={image} image_path={image_path} sendImageProfile={(value) => sendImageProfile(value)} />
            <View style={{ height, marginTop: 20, }}>
                <TouchableOpacity onPress={() => { setInputName(name); nameSheetRef.current.open(); }}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ชื่อ-นามสกุล</Text>
                        </View>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Customer_Setting_Edit_Pass', navigation, })}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>เปลี่ยนรหัสผ่าน</Text>
                        </View>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setInputGender(gender); genderSheetRef.current.open(); }}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>เพศ</Text>
                        </View>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setInputBirth_day(birth_day); birthdaySheetRef.current.open(); }}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>วันเกิด</Text>
                        </View>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setInputPhone(phone); phone_numberSheetRef.current.open(); }}>
                    <View style={stylesProfileTopic.BoxTopic}>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>โทรศัพท์</Text>
                        </View>
                        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <View style={{ alignItems: 'center', height: 40 }}>
            <TouchableOpacity onPress={() => saveProfile()} TouchableOpacity>
                <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
                </View>
            </TouchableOpacity>
        </View>
    </>;
};