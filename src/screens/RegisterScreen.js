///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ImageBackground,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { Form, TextValidator } from 'react-native-validator-form';
import ModalDropdown from 'react-native-modal-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesLogin from '../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService, activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Register_OTPScreen);
function Register_OTPScreen(props) {
  return <SafeAreaView style={{ flex: 1, backgroundColor: '#071727' }}>
    <ScrollView>
      <Logo />
      <Login {...props} />
      <Register />
    </ScrollView>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Logo
export let Logo = (props) => <View>
  <ImageBackground style={stylesLogin.Logo_Box} source={{ uri: `${ip}/MySQL/uploads/icon_5/11111-10.jpg`, }}
    resizeMode={FastImage.resizeMode.stretch} >
    <FastImage style={stylesLogin.Logo} source={require('../../icon/unicorn-fin-logoaaaa.png')}
      resizeMode={FastImage.resizeMode.contain} />
  </ImageBackground>
</View>;
///----------------------------------------------------------------------------------------------->>>> Login
export let Login = (props) => {
  const { navigation, } = props;
  const [activeNow, setActiveNow] = useState(0);
  const [date, setDate] = useState(new Date());
  const [dataDay, setDataDay] = useState(undefined);
  const [dataMo, setDataMo] = useState(undefined);
  const [dataYear, setDataYear] = useState(undefined);
  const [item1, setItem1] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const FormLoginRef = useRef(null)
  useEffect(() => {
    Form.addValidationRule('isPasswordMatch', (value) => {
      if (value !== user?.password) { return false; };
      return true;
    });
    return Form.removeValidationRule('isPasswordMatch');
  });
  let getDataYear = () => {
    var dates = new Date().getFullYear();
    var box = [];
    for (var min = 1950; min <= parseInt(dates); min = min + 1) { box.push(String(min)); };
    setDataYear(box);
    setDate(new Date());
  };
  let getDataMo = (itemValue) => {
    if (itemValue != null) {
      const item = String(itemValue);
      var box = [];
      for (var min = 0; min <= 11; min = min + 1) { box.push(String(min)); };
      setDataMo(box);
      setDate(new Date(date).setFullYear(item));
    };
  };
  let getDataDaySet = (itemValue) => {
    if (itemValue != null) {
      const item = String(itemValue);
      setDate(new Date(date).setDate(item));
    };
  };
  let getDataDay = (itemValue) => {
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    var value = months_thai.lastIndexOf(itemValue);
    if (value != null) {
      const item = String(value);
      var box = [];
      for (var min = 1; min <= 31; min = min + 1) { box.push(String(min)); };
      setDate(new Date(date).setMonth(item));
      setDataDay(box);
    };
  };
  let dataYears = () => dataYear?.map((item) => { return (item); });
  let dataMos = () => {
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    var months_eng = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return dataMo?.map((item) => { return (months_thai[item]); });
  };
  let dataDays = () => dataDay?.map((item) => { return (item); });
  let getData = () => {
    user.birth_date = new Date(date).getDate();
    user.birth_mon = new Date(date).getMonth() + 1;
    user.birth_year = new Date(date).getFullYear();
    setUser(user);
    fetch(`${finip}/auth/register_customer`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => response.json()).then((responseJson) => {
      if (responseJson.result == 'Complete') {
        fetch(`${finip}/auth/login_customer`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user?.email, password: user?.password }),
        }).then((response) => response.json()).then((responseJson) => {
          var userser = {};
          responseJson.map((item) => {
            userser.id_customer = item.id_customer;
            userser.name = item.name;
            userser.email = item.email;
            userser.telphone = item.telphone;
            userser.image = item.image;
            userser.image_path = item.image_path;
            userser.gender = item.gender;
            userser.address = item.address;
          });
          clearAll();
          storeData(userser);
          if (userser.address != null) {
            navigation.goBack();
            navigation.replace('MainScreen');
          } else {
            navigation.goBack();
            navigation.replace('MainScreen');
          };
        }).catch((error) => { console.error(error); });
      } else { alert(responseJson.result) };
    }).catch((error) => { console.error(error); });
  };
  let handleSubmit = () => { FormLoginRef.current.submit(); };
  let emailInput = (event) => {
    user.email = event;
    setUser(user);
  };
  // PassMailInput(event) {
  //   const { user } = this.state;
  //   user.passmail = event;
  //   this.setState({ user });
  // }
  let unameInput = (event) => {
    user.name = event;
    setUser(user);
  };
  let passInput = (event) => {
    user.password = event;
    setUser(user);
  };
  let repeatPassInput = (event) => {
    user.repassword = event;
    setUser(user);
  };
  let telphoneInput = (event) => {
    user.telphone = event;
    setUser(user);
  };
  let genderInput = (event) => {
    user.gender = event?.value;
    setUser(user);
  };
  let setStateItem1 = () => {
    setItem1(!item1);
  };
  dataYear == undefined && getDataYear()
  dataMo == undefined && getDataMo(new Date())
  dataDay == undefined && getDataDay(new Date())
  let FormBody = () => {
    // activeNow < 2 && setState({ activeNow: activeNow + 1, date: new Date('2000') });
    let DataDay = dataDays();
    let DataMo = dataMos();
    let DataYear = dataYears();
    var day = new Date(date).getDate();
    var month = new Date(date).getMonth();
    var year = new Date(date).getFullYear();
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    const data = [{ label: 'ชาย', value: 'male', }, { label: 'หญิง', value: 'female', }];
    return <Form ref={FormLoginRef} onSubmit={(value) => getData(value)}>
      <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>อีเมล</Text>
      <TextValidator name="email" label="text" validators={['required']} errorMessages={['กรุณากรอกอีเมล']} type="text"
        keyboardType="email-address" value={user?.email} onChangeText={(value) => emailInput(value)} style={[stylesFont.FontFamilyText,
        stylesFont.FontSize6]} errorStyle={{
          container: { bottom: -10, left: 4, position: 'absolute' }, ext: { color: 'red' }, underlineValidColor: 'gray',
          underlineInvalidColor: 'red'
        }} />
      <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>รหัสยืนยันผ่านอีเมล</Text>
      <TextValidator name="pass" label="text" type="text" value={user?.passmail} maxLength={6} onChangeText={(value) =>
        PassMailInput(value)} style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} errorStyle={{
          container: { bottom: -12, left: 4, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray',
          underlineInvalidColor: 'red'
        }} />
      <View style={stylesLogin.Countdownstyle}>
        <Text style={[stylesLogin.CountdownstyleSubmit, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ส่ง</Text>
      </View>
      <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>ชื่อ</Text>
      <TextValidator name="name" label="text" validators={['required', 'isString']} type="text" value={user?.name}
        errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']} onChangeText={(value) => unameInput(value)}
        style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} errorStyle={{
          container: { bottom: -12, left: 4, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray',
          underlineInvalidColor: 'red'
        }} />
      {/* <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          รหัสผ่าน</Text>
        <TextValidator
          name="password"
          label="text"
          validators={['required', 'isString', 'minStringLength:6']}
          errorMessages={['กรุณากรอกรหัสผ่าน', 'กรุณากรอกรหัสผ่านให้ถูกต้อง', 'กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัว']}
          type="text"
          secureTextEntry
          value={user?.password}
          onChangeText={(value) => passInput(value)}
          style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
          errorStyle={{
            container: {
              bottom: -12,
              left: 4,
              position: 'absolute'
            },
            text: {
              color: 'red'
            },
            underlineValidColor: 'gray',
            underlineInvalidColor: 'red'
          }} />
        <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          ยืนยันรหัสผ่าน</Text>
        <TextValidator
          name="repassword"
          label="text"
          validators={['isPasswordMatch', 'required',]}
          errorMessages={['รหัสผ่านไม่ตรงกัน', 'กรุณายืนยันรหัสผ่าน',]}
          type="text"
          secureTextEntry
          value={user?.repassword}
          onChangeText={(value) => repeatPassInput(value)}
          style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
          errorStyle={{
            container: {
              bottom: -12,
              left: 4,
              position: 'absolute'
            },
            text: {
              color: 'red'
            },
            underlineValidColor: 'gray',
            underlineInvalidColor: 'red'
          }} /> */}
      <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>หมายเลขโทรศัพท์</Text>
      <TextValidator name="telphone" label="text" validators={['required',]} errorMessages={['กรุณากรอกหมายเลขโทรศัพท์',]} type="text"
        value={user?.telphone} onChangeText={(value) => telphoneInput(value)} style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
        errorStyle={{
          container: { bottom: -12, left: 4, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray',
          underlineInvalidColor: 'red'
        }} />
      <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
        <View style={stylesMain.FlexRow}>
          <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
            <ModalDropdown options={DataDay} style={[stylesMain.ItemCenterVertical]} dropdownTextStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6, { width: 70, textAlign: 'center' }]} renderButtonText={(value) => getDataDaySet(value)}>
              <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: 70 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                { width: 70, textAlign: 'center', marginLeft: -10, marginRight: -10 }]}>{day}</Text>
                <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
              </View>
            </ModalDropdown>
          </View>
          <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
            <ModalDropdown options={DataMo} style={[stylesMain.ItemCenterVertical]} dropdownTextStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6, { width: 120, textAlign: 'center' }]} renderButtonText={(value) => getDataDay(value)}>
              <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: 120 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                { width: 120, textAlign: 'center', marginLeft: -10, marginRight: -10 }]}>{months_thai[month]}</Text>
                <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
              </View>
            </ModalDropdown>
          </View>
          <View style={stylesLogin.DateBoxBody}>
            <ModalDropdown options={DataYear} style={[stylesMain.ItemCenterVertical]} dropdownTextStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6, { width: 80, textAlign: 'center' }]} renderButtonText={(value) => getDataMo(value)}>
              <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: 80 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                { width: 80, textAlign: 'center', marginLeft: -10, marginRight: -10 }]}>{year}</Text>
                <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
              </View>
            </ModalDropdown>
          </View>
        </View>
      </View>
      <View style={stylesLogin.DataGenderBox}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
        <View style={{ marginTop: -10, }}>
          <RadioButtonRN data={data} initial={1} style={{ flexDirection: 'row', }} box={false} boxStyle={{ width: 70, }} textStyle={[
            stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 12, }]} activeColor='#111' circleSize={15}
            selectedBtn={(value) => genderInput(value)} />
        </View>
      </View>
      <View style={stylesLogin.RegisterScreen_CheckBox}>
        <CheckBox checked={item1} onPress={() => setStateItem1()} />
        <View style={stylesLogin.RegisterScreen_Check_Box}>
          <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>
            ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text>
        </View>
      </View>
      <View style={[stylesMain.ItemCenter, { marginBottom: 10 }]}>
        <TouchableOpacity activeOpacity={item1 ? 0.2 : 1} onPress={() => item1 ? handleSubmit() : null}>
          <View style={[stylesLogin.Login_Box_Text_B, { backgroundColor: item1 ? mainColor : '#ECECEC' }]}>
            <Text style={[stylesLogin.Login__Text, stylesFont.FontFamilyText, stylesFont.FontSize5,
            stylesMain.ItemCenterVertical]}>สมัครสมาชิก</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Form>;
  };
  return <View style={stylesLogin.Login_Box}>
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF', }]}>สมัครสมาชิก</Text>
    <View style={stylesLogin.RegisterScreen_Box_Login}>
      {FormBody()}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Register
export let Register = (props) => {
  const [item1, setItem1] = useState(false)
  return <View style={[stylesMain.ItemCenter, { marginBottom: 10 }]}>
    <View style={[stylesMain.FlexRow, { marginTop: 10, }]}>
      <View style={{ height: 50, width: 250, marginTop: 20, marginLeft: 20, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
          ฉันต้องการรับข้อเสนอและโปรโมชันสุดพิเศษจาก FIN</Text>
      </View>
      <CheckBox size={30} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} onPress={() =>
        setItem1(!item1)} />
    </View>
    <View>
      <Text style={[stylesFont.FontCenter, stylesFont.FontSize5, stylesFont.FontFamilyText,
      { color: '#FFFFFF', marginTop: -10 }]}>---------- สมัครสมาชิกด้วยช่องทางอื่น ----------</Text>
    </View>
    <View style={stylesLogin.Register_Box_Button}>
      <TouchableOpacity>
        <View style={{ marginLeft: 10, width: 140, height: 50 }}>
          <FastImage style={stylesLogin.Register_Box_image} source={require('../../icon/logoutappfacebook.png')}
            resizeMode={FastImage.resizeMode.contain} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{ marginLeft: 10, width: 140, height: 50 }}>
          <FastImage style={stylesLogin.Register_Box_image} source={require('../../icon/logoutapp14.png')}
            resizeMode={FastImage.resizeMode.contain} />
        </View>
      </TouchableOpacity>
    </View>
  </View>;
};