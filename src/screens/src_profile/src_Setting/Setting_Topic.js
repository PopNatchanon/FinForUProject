///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
export const { width, height } = Dimensions.get('window');
import RNFetchBlob from 'rn-fetch-blob';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesLogin from '../../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, GetFetch, } from '../../../customComponents';
import { ExitAppModule, } from '../../Main/MainScreen';
import { GetData, GetServicesBlob } from '../../../customComponents/Tools';
import { Seller_SettingImage } from '../../Seller/SellerProfileEdit/Seller_Profile_Edit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Setting_Topic);
function Setting_Topic(props) {
  const { route } = props;
  const selectedIndex = route.params?.selectedIndex;
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
  useEffect(() => {
    activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
  }, [activeGetSource]);
  let pathList = () => {
    switch (selectedIndex) {
      case 0:
        return <Edit_Profile {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      // แก้ไขโปรไฟล์ เข้าจาก หน้า Setting ของ Profile
      case 1:
        return <Edit_Address {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      // แก้ไขที่อยู่ เข้าจาก หน้า Setting ของ Profile
      case 2:
        return <Edit_Chat {...props} />;
      // แก้ไขแชท เข้าจาก หน้า Setting ของ Profile
      case 3:
        return <Edit_Bell {...props} />;
      // แก้ไขแการแจ้งเตือน เข้าจากหน้า Setting ของ Profile
      case 4:
        return <Language_Screen {...props} />;
      // แก้ไขภาษา เข้าจากหน้า Setting ของ Profile
      case 5:
        return <Edit_Setting_Bell {...props} />;
      // แก้ไขแการแจ้งเตือน เข้าจากหน้า แก้ไขแการแจ้งเตือน
      case 6:
        return <Edit_Setting_Email {...props} />;
      // แก้ไขแการแจ้งเตือน เข้าจากหน้า แก้ไขแการแจ้งเตือนทาง E-mail
      case 7:
        return <Edit_Pass {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      // แก้ไขรหัสผ่าน เข้าจากหน้า Setting ของ Profile
    };
  };
  return <SafeAreaView style={[stylesMain.SafeAreaView]}>
    {pathList()}
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
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Setting_Topic', navigation, setData: { selectedIndex: 7 }, })}>
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
///----------------------------------------------------------------------------------------------->>>> Edit_Pass
export let Edit_Pass = (props) => {
  const { activeGetSource, cokie, currentUser, navigation, } = props;
  const [activeGetServices, setActiveGetServices] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [dataSevice, setDataSevice] = useState(undefined);
  const [newPassword, setNewPassword] = useState('');
  const uri = `${finip}/profile/change_customer_password`;
  var dataBody = {
    /*current_password*/confirmPassword, currentPassword,/*id_customer*/id_customer: currentUser?.id_customer ?? '',
    /*new_password*/newPassword,
  };
  !activeGetSource && activeGetServices &&
    GetFetch({ Authorization: cokie, dataBody: dataBody, getDataSource: (value) => getData(value), uriPointer: uri, });
  let setStateConfirmPassword = (value) => setConfirmPassword(value);
  let setStateCurrentPassword = (value) => setCurrentPassword(value);
  let setStateNewPassword = (value) => setNewPassword(value);
  let getData = (value) => {
    value.status_cahnge == 'Incomplete' && alert(value.Massage);
    value.status_cahnge == 'Complete' && [alert(value.Massage), navigation.goBack()];
    setActiveGetServices(false); setDataSevice(value);
  };
  return <>
    <AppBar {...props} backArrow titleHead='เปลี่ยนรหัสผ่าน' />
    <ScrollView>
      <View style={stylesProfileTopic.Edit_Pass}>
        <View style={{ width: '80%' }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5 }]}>รหัสผ่านปัจจุบัน</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput maxLength={50} placeholder='' secureTextEntry style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
            { height: 55, width: '80%', }]} onChangeText={(value) => setStateCurrentPassword(value)} value={currentPassword} />
            <IconFeather name='eye-off' RightItem size={20} style={{ marginTop: 5, }} />
          </View>
          {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>กรุณาระบุรหัสผ่านใหม่ด่านล่าง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BFBFBF', marginLeft: 10, }]}>
                ประกอบไปด้วยตัวเลขและตัวอักษร อย่างน้อย 6 อักษร</Text> */}
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>รหัสผ่านใหม่</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput maxLength={50} placeholder='' secureTextEntry style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
            { height: 55, width: '80%', }]} onChangeText={(value) => setStateNewPassword(value)} value={newPassword} />
            <IconFeather name='eye-off' RightItem size={20} style={{ marginTop: 5, }} />
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>พิมพ์รหัสผ่านใหม่อีกครั้ง</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput maxLength={50} placeholder='' secureTextEntry style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
            { height: 55, width: '80%', }]} onChangeText={(value) => setStateConfirmPassword(value)} value={confirmPassword} />
            <IconFeather name='eye-off' RightItem size={20} style={{ marginTop: 5, }} />
          </View>
        </View>
      </View>
    </ScrollView>
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={() => setActiveGetServices(true)}>
        <View style={[stylesProfileTopic.Edit_Profile_Button_Save,
        { backgroundColor: currentPassword != '' && newPassword != '' && confirmPassword != '' ? mainColor : '#CECECE' }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เปลี่ยนรหัสผ่าน</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Address
export let Edit_Address = (props) => {
  const { cokie, currentUser, navigation, route } = props;
  const no_invoice = route.params?.no_invoice;
  const type = route.params?.type;
  const type_special = route.params?.type_special;
  const [activeReset, setActiveReset] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  var dataBody = type == 'select' ?
    { id_customer: currentUser?.id_customer, no_invoice: no_invoice, } : { id_customer: currentUser?.id_customer, };
  var uri = `${finip}/${(type == 'select' ? 'bill/bill_list' : 'profile/my_address')}`;
  let getData = (value) => { setActiveReset(false); setDataService(value); };
  let getData2 = (value) => { setActiveReset(true); setDataService2(value); };
  useEffect(() => {
    activeReset && cokie && currentUser?.id_customer &&
      GetFetch({ Authorization: cokie, dataBody, getDataSource: (value) => getData(value), uriPointer: uri, });
  }, [activeReset && cokie && currentUser?.id_customer]);
  return <View style={{ flex: 1, height: '100%' }}>
    <AppBar {...props} backArrow titleHead={type_special == 'tax' ? 'ที่อยู่ในใบกำกับภาษี' : 'ที่อยู่ของฉัน'} />
    <ScrollView style={{ height: 1000 }}>
      {!activeReset && dataService?.list_address?.map((value, index) => <Address_Customar {...props} dataService={value} index={index}
        key={index} type={type} type_special={type_special} updateData2={(value) => getData2(value)} />)}
    </ScrollView>
    <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
      <TouchableOpacity onPress={() => NavigationNavigate({
        goScreen: 'Customer_account', navigation, setData: { type_special, updateData2: (value) => getData2(value), },
      })}>
        <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Address_Customar
export let Address_Customar = (props) => {
  let returnValue = (value) => { props.route.params.updateData(value); props.navigation.goBack(); };
  return <TouchableOpacity key={props.index} onPress={() => props.type == 'select' ?
    returnValue(props.dataService.id_address) : NavigationNavigate({
      goScreen: 'Customer_account', navigation: props.navigation, setData: {
        id_address: props.dataService.id_address, type: 'edit', type_special: props.type_special, updateData2: value =>
          props.updateData2(value),
      },
    })}>
    <View style={stylesProfileTopic.Address_Customar}>
      <View style={stylesProfileTopic.Address_Customar_Box}>
        <View style={stylesMain.FlexRow}>
          <IconEvilIcons color={mainColor} name='location' size={30} />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
        </View>
        {props.dataService.main_address == 1 && <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>
          [ค่าเริ่มต้น]</Text>}
      </View>
      <View style={{ marginBottom: 10, marginLeft: 50, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
          {`${props.dataService.customer_name} | ${props.dataService.telephone_number}`}</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8, width: '90%', }]}>
          {props.dataService.address}</Text>
      </View>
    </View>
  </TouchableOpacity>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Chat
export let Edit_Chat = (props) => {
  const [settingChat, setSettingChat] = useState({ publicChat: true });
  return <>
    <AppBar {...props} backArrow titleHead='ตั้งค่าการแชท' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={{ margin: 10 }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อนุญาตให้ทำการแชทจากหน้าโปรไฟล์</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#CECECE' }]}>
          เปิดใช้งานเพื่ออนุญาตให้ผู้ใช้สามารถพูดคุยผ่านหน้าโปรไฟล์ได้</Text>
      </View>
      <CheckBox checked={settingChat.publicChat} checkedColor='#95F29F' checkedIcon='toggle-on' size={25} onPress={() =>
        setSettingChat({ ...settingChat, publicChat: !settingChat.publicChat })} uncheckedIcon='toggle-off' />
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Bell
export let Edit_Bell = (props) => <SafeAreaView>
  <AppBar {...props} backArrow titleHead='ตั้งค่าการแจ้งเตือน' />
  <TouchableOpacity onPress={() =>
    NavigationNavigate({ goScreen: 'Setting_Topic', navigation: props.navigation, setData: { selectedIndex: 5 }, })}>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือน</Text>
      </View>
      <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() =>
    NavigationNavigate({ goScreen: 'Setting_Topic', navigation: props.navigation, setData: { selectedIndex: 6 }, })}>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือนทาง E-mail</Text>
      </View>
      <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfileTopic.SettingIcon} />
    </View>
  </TouchableOpacity>
</SafeAreaView>;
///----------------------------------------------------------------------------------------------->>>> Language_Screen
export let Language_Screen = (props) => {
  const [settingLanguage, setSettingLanguage] = useState('th');
  return <>
    <AppBar {...props} backArrow titleHead='ภาษา' />
    <ScrollView>
      <View>
        {/* <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={settingLanguage == 'en'} onPress={() => setSettingLanguage('en')} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>English</Text>
      </View>
    </View> */}
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={stylesMain.FlexRow}>
            <CheckBox checked={settingLanguage == 'th'} onPress={() => setSettingLanguage('th')} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ไทย</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity>
      <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
      </View>
    </TouchableOpacity>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Bell
export let Edit_Setting_Bell = (props) => {
  const [settingAlert, setSettingAlert] = useState({ alertOnMobile: true, chat: true, promotion: true, updateBuy: true, });
  return <SafeAreaView>
    <AppBar {...props} backArrow titleHead='การแจ้งเตือน' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือน</Text>
      </View>
      <CheckBox checked={settingAlert.alertOnMobile} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingAlert({ ...settingAlert, alertOnMobile: !settingAlert.alertOnMobile })} size={25} uncheckedIcon='toggle-off' />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
      </View>
      <CheckBox checked={settingAlert.updateBuy} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingAlert({ ...settingAlert, updateBuy: !settingAlert.updateBuy })} size={25} uncheckedIcon='toggle-off' />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>พูดคุย</Text>
      </View>
      <CheckBox checked={settingAlert.chat} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingAlert({ ...settingAlert, chat: !settingAlert.chat })} size={25} uncheckedIcon='toggle-off' />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>โปรโมชั่น</Text>
      </View>
      <CheckBox checked={settingAlert.promotion} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingAlert({ ...settingAlert, promotion: !settingAlert.promotion })} size={25} uncheckedIcon='toggle-off' />
    </View>
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Email
export let Edit_Setting_Email = (props) => {
  const [settingEmail, setSettingEmail] = useState({ alertEmail: true, mailNews: true, updateBuy: true, });
  return <SafeAreaView>
    <AppBar {...props} backArrow titleHead='การแจ้งเตือนทางE-mail' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือนทาง E-mail</Text>
      </View>
      <CheckBox checked={settingEmail.alertEmail} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingEmail({ ...settingEmail, alertEmail: !settingEmail.alertEmail })} size={25} uncheckedIcon='toggle-off' />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
      </View>
      <CheckBox checked={settingEmail.updateBuy} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingEmail({ ...settingEmail, updateBuy: !settingEmail.updateBuy })} size={25} uncheckedIcon='toggle-off' />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>จดหมายข่าว</Text>
      </View>
      <CheckBox checked={settingEmail.mailNews} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() =>
        setSettingEmail({ ...settingEmail, mailNews: !settingEmail.mailNews })} size={25} uncheckedIcon='toggle-off' />
    </View>
  </SafeAreaView>;
};