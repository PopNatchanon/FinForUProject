///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import DatePicker from 'react-native-datepicker';
import RNFetchBlob from 'rn-fetch-blob'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesLogin from '../../../style/stylesLoginScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from '../../MainScreen';
import { GetData, GetServices, GetServicesBlob } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
import { Seller_SettingImage } from '../../src_Seller/Seller_Profile_Edit';
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
    activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value), });
  }, [activeGetSource]);
  let pathList = () => {
    switch (selectedIndex) {
      case 0:
        return <Edit_Profile {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      case 1:
        return <Edit_Address {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      case 2:
        return <Edit_Chat {...props} />;
      case 3:
        return <View>
          <Edit_Bell {...props} />
        </View>;
      case 4:
        return <View>
          <Language_Screen {...props} />
        </View>;
      case 5:
        return <View>
          <Edit_Setting_Bell {...props} />
        </View>;
      case 6:
        return <View>
          <Edit_Setting_Email {...props} />
        </View>;
      case 7:
        return <Edit_Pass {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
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
  const [activeNow, setActiveNow] = useState(0);
  const [checked, setChecked] = useState(true);
  const [dataBody2, setDataBody2] = useState(undefined);
  const [date, setDate] = useState(undefined);
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
  const nameSheetRef = useRef(null);
  const genderSheetRef = useRef(null);
  const birthdaySheetRef = useRef(null);
  const phone_numberSheetRef = useRef(null);
  var dataBody = { id_customer: currentUser?.id_customer ?? '', };
  var uri = `${finip}/profile/profile_mobile`;
  var uri2 = `${finip}/profile/update_profile_mobile`;
  let getDataYear = () => {
    var dates = new Date().getFullYear();
    var box = [];
    for (var min = 1950; min <= parseInt(dates); min = min + 1) { box.push(String(min)); };
    setDate(new Date()); setDataYear(box);
  };
  let getDataMo = (itemValue) => {
    if (itemValue != null) {
      const item = String(itemValue);
      var box = [];
      for (var min = 0; min <= 11; min = min + 1) { box.push(String(min)); };
      setDate(new Date(date).setFullYear(item)); setDataMo(box);
    };
  };
  let getDataDay = (itemValue) => {
    if (itemValue != null) {
      const item = String(itemValue);
      var box = [];
      for (var min = 1; min <= 31; min = min + 1) { box.push(String(min)); };
      setDate(new Date(date).setMonth(item)); setDataDay(box);
    };
  };
  let dataYears = () => dataYear?.map((item) => <Picker.Item label={item} value={item} key={item} />);
  let dataMos = () => {
    var months_thai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม",
      "พฤศจิกายน", "ธันวาคม"];
    var months_eng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
      'December'];
    return dataMo.map((item) => <Picker.Item label={months_thai[item]} value={item} key={item} />);
  };
  let dataDays = () => dataDay.map((item) => <Picker.Item label={item} value={item} key={item} />);
  let saveProfile = async () => {
    var o = path && path.path.split('/');
    var body2 = [];
    body2.push({ name: 'id_customer', data: currentUser.id_customer });
    body2.push({ name: 'first_name', data: name });
    body2.push({ name: 'gender', data: gender ? 'male' : 'female' });
    path && body2.push({ name: 'file', filename: o[o.length - 1], type: path.mime, data: RNFetchBlob.wrap(path.path) });
    body2.push({ name: 'birth_day', data: birth_day });
    body2.push({ name: 'telephone', data: phone });
    setActiveGetServices2(true);
    setDataBody2(body2);
  };
  let saveName = async () => { setName(inputName); nameSheetRef.current.close(); };
  let saveGender = async () => { setGender(inputGender); genderSheetRef.current.close(); };
  let saveBirth_day = async () => { setBirth_day(inputBirth_day); birthdaySheetRef.current.close(); };
  let savePhone = async () => { setPhone(inputPhone); phone_numberSheetRef.current.close(); };
  dataYear == undefined && getDataYear()
  dataMo == undefined && getDataMo(new Date())
  dataDay == undefined && getDataDay(new Date())
  let nameSheetBody = () => <>
    <View style={stylesProfileTopic.Edit_Profile}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อผู้ใช้</Text>
      <View style={stylesProfileTopic.Edit_Profile_Box}>
        <TextInput fontSize={15} placeholder="ชื่อ" maxLength={30} value={inputName} onChangeText={(value) => setInputName(value)} />
      </View>
    </View>
    <TouchableOpacity onPress={() => saveName()}>
      <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
      </View>
    </TouchableOpacity>
  </>;
  let genderSheetBody = () => <>
    <View style={stylesProfileTopic.Edit_Profile}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
      <View style={stylesMain.FlexRow}>
        <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={inputGender} onPress={() =>
          setInputGender(true)} />
        <IconFontisto name='male' size={20} style={{ marginTop: 15, marginLeft: -10, color: mainColor }} />
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15, marginLeft: 10 }]}>ชาย</Text>
        <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!inputGender} onPress={() =>
          setInputGender(false)} />
        <IconFontisto name='female' size={20} style={{ marginTop: 15, marginLeft: -10, color: '#ff1ac6' }} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15, marginLeft: 10 }]}>หญิง</Text>
      </View>
    </View>
    <TouchableOpacity onPress={() => saveGender()}>
      <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
      </View>
    </TouchableOpacity>
  </>;
  let birthdaySheetBody = () => {
    // currentUser.map((item) => {
    //   activeNow < 2 ?
    //     this.setState({ activeNow: activeNow + 1, birth_day: item.date_of_birth }) :
    //     null
    // })
    // const { date, } = this.state;
    // let DataDay = dataDays()
    // let DataMo = dataMos()
    // let DataYear = dataYears()
    // var day = new Date(date).getDate()
    // var month = new Date(date).getMonth();
    // var year = new Date(date).getFullYear();
    return <>
      <View style={stylesProfileTopic.Edit_Profile}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วันเกิด</Text>
        <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
          <DatePicker style={{ width: 300 }} date={inputBirth_day} mode="date" placeholder="select date" format="DD-MM-YYYY"
            minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
            customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }}
            onDateChange={(value) => setInputBirth_day(value)} />
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
  }
  let phone_numberSheetBody = () => <>
    <View style={stylesProfileTopic.Edit_Profile}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เบอร์โทรศัพท์</Text>
      <View style={stylesProfileTopic.Edit_Profile_Box}>
        <TextInput fontSize={15} placeholder="เบอร์โทรศัพท์" maxLength={10} value={inputPhone} onChangeText={(value) =>
          setInputPhone(value)} />
      </View>
    </View>
    <TouchableOpacity onPress={() => savePhone()}>
      <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
      </View>
    </TouchableOpacity>
  </>;
  let setCurrentUser = () => dataSevice && dataSevice.list_profile.map((value) => {
    var checked;
    if (value.gender == 'male') { checked = true } else { checked = false };
    const bday = new Date(value.date_of_birth);
    var dob = `${bday.getDate()}-${(bday.getMonth() + 1)}-${bday.getFullYear()}`;
      /*name*/setName(value.name); setInputName(value.name);  /*gender*/setGender(checked); setInputGender(checked);
      /*telphone*/setPhone(value.telphone); setInputPhone(value.telphone);  /*birth_day*/setBirth_day(dob); setInputBirth_day(dob);
      /*image*/ setImage_Path(value.image_path); setImage(value.image);
  });
  let getData = (value) => { setActiveGetServices(false); setDataSevice(value); };
  let getData2 = (value) => {
    setActiveGetServices2(false); setDataSevice2(value); route.params.getDataSource(value); navigation.goBack();
  };
  let sendImageProfile = (value) => setPath(value);
  useEffect(() => {
    !activeGetSource && activeGetServices && cokie && currentUser && uri &&
      GetServices({ uriPointer: uri, dataBody: dataBody, Authorization: cokie, getDataSource: (value) => getData(value) });
  }, [!activeGetSource && activeGetServices && cokie && currentUser && uri]);
  useEffect(() => {
    activeGetServices2 && cokie && uri2 && GetServicesBlob({
      FormData: true, uriPointer: uri2, dataBody: dataBody2, Authorization: cokie, getDataSource: (value) => getData2(value),
      showConsole: 'update_profile_mobile'
    });
  }, [activeGetServices2 && cokie && uri2]);
  name == null && setCurrentUser();
  return <>
    {/* ชื่อ-นามสกุล */}
    <BottomSheet ref={nameSheetRef} height={150} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", } }}>
      {nameSheetBody()}
    </BottomSheet>
    {/* เพศ */}
    <BottomSheet ref={genderSheetRef} height={150} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", } }}>
      {genderSheetBody()}
    </BottomSheet>
    {/* วันเกิด */}
    <BottomSheet ref={birthdaySheetRef} height={150} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", } }}>
      {birthdaySheetBody()}
    </BottomSheet>
    {/* เบอร์โทรศัพท์ */}
    <BottomSheet ref={phone_numberSheetRef} height={150} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", } }}>
      {phone_numberSheetBody()}
    </BottomSheet>
    <AppBar {...props} backArrow titleHead='แก้ไขโปรไฟล์' />
    <ScrollView>
      <Seller_SettingImage image_path={image_path} image={image} sendImageProfile={(value) => sendImageProfile(value)} />
      <View style={{ marginTop: 20, height, }}>
        <TouchableOpacity onPress={() => { setInputName(name); nameSheetRef.current.open(); }}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>ชื่อ-นามสกุล</Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
          </View></TouchableOpacity>
        <TouchableOpacity onPress={() =>
          NavigationNavigate({ goScreen: 'Setting_Topic', setData: { selectedIndex: 7 }, navigation })}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>เปลี่ยนรหัสผ่าน</Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setInputGender(gender); genderSheetRef.current.open(); }}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>เพศ</Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setInputBirth_day(birth_day); birthdaySheetRef.current.open(); }}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>วันเกิด</Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setInputPhone(phone); phone_numberSheetRef.current.open(); }}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>โทรศัพท์</Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <View style={{ alignItems: 'center', height: 40 }}>
      <TouchableOpacity TouchableOpacity onPress={() => saveProfile()}>
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
    id_customer: currentUser ? currentUser.id_customer : '',/*current_password*/currentPassword, confirmPassword,
    /*new_password*/newPassword,
  };
  !activeGetSource && activeGetServices &&
    GetServices({ uriPointer: uri, dataBody: dataBody, Authorization: cokie, getDataSource: (value) => getData(value), });
  let setStateConfirmPassword = (value) => setConfirmPassword(value);
  let setStateCurrentPassword = (value) => setCurrentPassword(value);
  let setStateNewPassword = (value) => setNewPassword(value);
  let getData = (value) => {
    value.status_cahnge == 'Incomplete' && alert(value.Massage);
    value.status_cahnge == 'Complete' && [alert(value.Massage), navigation.goBack()];
    setActiveGetServices(false); setDataSevice(value);
  };
  return <>
    <AppBar {...this.props} backArrow titleHead='เปลี่ยนรหัสผ่าน' />
    <ScrollView>
      <View style={stylesProfileTopic.Edit_Pass}>
        <View style={{ width: '80%' }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5 }]}>รหัสผ่านปัจจุบัน</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '80%', height: 55 }]} secureTextEntry
              placeholder="" maxLength={50} value={currentPassword} onChangeText={(value) => setStateCurrentPassword(value)} />
            <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
          </View>
          {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>กรุณาระบุรหัสผ่านใหม่ด่านล่าง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BFBFBF', marginLeft: 10, }]}>
                ประกอบไปด้วยตัวเลขและตัวอักษร อย่างน้อย 6 อักษร</Text> */}
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>รหัสผ่านใหม่</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '80%', height: 55 }]} secureTextEntry
              placeholder="" maxLength={50} value={newPassword} onChangeText={(value) => setStateNewPassword(value)} />
            <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>พิมพ์รหัสผ่านใหม่อีกครั้ง</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '80%', height: 55 }]} secureTextEntry
              placeholder="" maxLength={50} value={confirmPassword} onChangeText={(value) => setStateConfirmPassword(value)} />
            <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
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
  getData = (value) => { setActiveReset(false); setDataService(value); };
  getData2 = (value) => { setActiveReset(true); setDataService2(value); };
  useEffect(() => {
    currentUser && cokie && currentUser.id_customer && activeReset &&
      GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: (value) => getData(value) });
  }, [currentUser && cokie && currentUser.id_customer && activeReset]);
  return <View style={{ flex: 1, height: '100%' }}>
    <AppBar {...props} backArrow titleHead={type_special == 'tax' ? 'ที่อยู่ในใบกำกับภาษี' : 'ที่อยู่ของฉัน'} />
    <ScrollView style={{ height: 1000 }}>
      {dataService && dataService.list_address && !activeReset && dataService.list_address.map((value, index) => {
        return <Address_Customar {...props} dataService={value} index={index} key={index} type={type} type_special={type_special}
          updateData2={(value) => getData2(value)} />
      })}
    </ScrollView>
    <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
      <TouchableOpacity onPress={() => NavigationNavigate({
        goScreen: 'Customer_account', setData: { type_special, updateData2: (value) => getData2(value), }, navigation
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
  const { dataService, index, navigation, route, type, type_special, updateData2 } = props;
  let returnValue = (value) => { route.params.updateData(value); navigation.goBack(); };
  return <TouchableOpacity key={index} onPress={() => type == 'select' ?
    returnValue(dataService.id_address) : NavigationNavigate({
      goScreen: 'Customer_account', setData: {
        type: 'edit', type_special, id_address: dataService.id_address, updateData2: value => updateData2(value),
      }, navigation
    })}>
    <View style={stylesProfileTopic.Address_Customar}>
      <View style={stylesProfileTopic.Address_Customar_Box}>
        <View style={stylesMain.FlexRow}>
          <IconEvilIcons name='location' size={30} color={mainColor} />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
        </View>
        {dataService.main_address == 1 && <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>
          [ค่าเริ่มต้น]</Text>}
      </View>
      <View style={{ marginLeft: 50, marginBottom: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
          {`${dataService.customer_name} | ${dataService.telephone_number}`}</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8, width: '90%', }]}>{dataService.address}</Text>
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
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingChat.publicChat}
        onPress={() => setSettingChat({ ...settingChat, publicChat: !settingChat.publicChat })} />
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Bell
export let Edit_Bell = (props) => {
  const { navigation, } = props;
  return <SafeAreaView>
    <AppBar {...props} backArrow titleHead='ตั้งค่าการแจ้งเตือน' />
    <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Setting_Topic', setData: { selectedIndex: 5 }, navigation })}>
      <View style={stylesProfileTopic.BoxTopic}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือน</Text>
        </View>
        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Setting_Topic', setData: { selectedIndex: 6 }, navigation })}>
      <View style={stylesProfileTopic.BoxTopic}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือนทาง E-mail</Text>
        </View>
        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
      </View>
    </TouchableOpacity>
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Language_Screen
export let Language_Screen = (props) => {
  const [settingLanguage, setSettingLanguage] = useState('th');
  return <SafeAreaView>
    <AppBar {...props} backArrow titleHead='ภาษา' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={settingLanguage == 'en'} onPress={() => setSettingLanguage('en')} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>English</Text>
      </View>
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={settingLanguage == 'th'} onPress={() => setSettingLanguage('th')} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ไทย</Text>
      </View>
    </View>
    <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 620, }}>
      <TouchableOpacity>
        <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>;
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
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.alertOnMobile}
        onPress={() => setSettingAlert({ ...settingAlert, alertOnMobile: !settingAlert.alertOnMobile })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.updateBuy}
        onPress={() => setSettingAlert({ ...settingAlert, updateBuy: !settingAlert.updateBuy })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>พูดคุย</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.chat}
        onPress={() => setSettingAlert({ ...settingAlert, chat: !settingAlert.chat })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>โปรโมชั่น</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.promotion}
        onPress={() => setSettingAlert({ ...settingAlert, promotion: !settingAlert.promotion })} />
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
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingEmail.alertEmail}
        onPress={() => setSettingEmail({ ...settingEmail, alertEmail: !settingEmail.alertEmail })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingEmail.updateBuy}
        onPress={() => setSettingEmail({ ...settingEmail, updateBuy: !settingEmail.updateBuy })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>จดหมายข่าว</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingEmail.mailNews}
        onPress={() => setSettingEmail({ ...settingEmail, mailNews: !settingEmail.mailNews })} />
    </View>
  </SafeAreaView>;
};