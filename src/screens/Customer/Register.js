///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ImageBackground,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { Form, TextValidator } from 'react-native-validator-form';
import ModalDropdown from 'react-native-modal-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesLogin from '../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
import { AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Register);
function Register(props) {
  return <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <AppBar {...props} backArrow titleHead='สมัครสมาชิก' helpkBar />
    <ScrollView>
      <Logo />
      <Logins {...props} />
      <Registers />
    </ScrollView>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Logo
export let Logo = (props) => <View style={{ alignItems: 'center', }}>
  <FastImage style={stylesLogin.Logo} source={require('../../../images/logoFin_Font1.png')}
    resizeMode={FastImage.resizeMode.contain} />
</View>;
///----------------------------------------------------------------------------------------------->>>> Login
export let Logins = (props) => {
  const { navigation, } = props;
  const [checked, setChecked] = useState(new Date());
  const [activeDate, setActiveDate] = useState(false);
  const [activeNow, setActiveNow] = useState(0);
  const [date, setDate] = useState(new Date());
  const [dataDay, setDataDay] = useState(undefined);
  const [dataMo, setDataMo] = useState(undefined);
  const [dataYear, setDataYear] = useState(undefined);
  const [item1, setItem1] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [user, setUser] = useState({});
  const FormLoginRef = useRef(null)
  let onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); setDate(currentDate);
    setActiveDate(true);
  };
  let showMode = currentMode => { setShow(true); setMode(currentMode); };
  useEffect(() => {
    Form.addValidationRule('isPasswordMatch', (value) => {
      if (value !== user?.password) { return false; };
      return true;
    });
    return Form.removeValidationRule('isPasswordMatch');
  });

  let handleSubmit = () => { FormLoginRef.current.submit(); };
  let emailInput = (event) => {
    user.email = event;
    setUser(user);
  };
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
  let FormBody = () => {
    return <Form ref={FormLoginRef} onSubmit={(value) => getData(value)}>
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 5 }]}>อีเมล</Text>
      <View style={stylesMain.FlexRow}>
        <IconFontisto name='email' size={30} style={{ color: '#C4C4C4', }} />
        <TextValidator name="email" label="text" validators={['required']} placeholder='example@mail.com' errorMessages={['กรุณากรอกอีเมล']} type="text"
          keyboardType="email-address" value={user?.email} onChangeText={(value) => emailInput(value)} style={[stylesFont.FontFamilyText,
          stylesFont.FontSize7, { width: width * 0.8, }]} errorStyle={{
            container: { bottom: -10, left: 10, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
            underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
          }} />
      </View>
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 5 }]}>รหัสผ่าน</Text>
      <View style={stylesMain.FlexRow}>
        <IconSimpleLineIcons name='lock' size={30} style={{ color: '#C4C4C4', }} />
        <TextValidator name="pass" label="text" type="text" placeholder='Please enter your password' value={user?.passmail} validators={['required']} errorMessages={['กรุณากรอกรหัสผ่าน']}
          maxLength={6} onChangeText={(value) => PassMailInput(value)} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: width * 0.8, }]}
          errorStyle={{
            container: { bottom: -10, left: 10, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
            underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
          }} />
      </View>
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 5 }]}>รหัสผ่านอีกครั้ง</Text>
      <View style={stylesMain.FlexRow}>
        <IconSimpleLineIcons name='lock' size={30} style={{ color: '#C4C4C4' }} />
        <TextValidator name="pass" label="text" type="text" placeholder='Please enter your password' value={user?.passmail} maxLength={6} validators={['required']}
          onChangeText={(value) => PassMailInput(value)} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: width * 0.8, }]} errorMessages={['กรุณากรอกรหัสผ่านอีกครั้ง']}
          errorStyle={{
            container: { bottom: -10, left: 10, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
            underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
          }} />
      </View>
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 5 }]}>ชื่อผู้ใช้</Text>
      <View style={stylesMain.FlexRow}>
        <IconSimpleLineIcons name='user' size={25} style={{ color: '#C4C4C4' }} />
        <TextValidator name="name" label="text" validators={['required', 'isString']} placeholder='Please enter your name ' type="text" value={user?.name}
          errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']} onChangeText={(value) => unameInput(value)}
          style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: width * 0.8, left: 5 }]} errorStyle={{
            container: { bottom: -10, left: 10, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
            underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
          }} />
      </View>
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 5 }]}>หมายเลขโทรศัพท์</Text>
      <View style={stylesMain.FlexRow}>
        <IconSimpleLineIcons name='phone' size={25} style={{ color: '#C4C4C4' }} />
        <TextValidator name="telphone" label="text" validators={['required',]} placeholder='Please enter number phone' errorMessages={['กรุณากรอกหมายเลขโทรศัพท์',]} type="text"
          value={user?.telphone} onChangeText={(value) => telphoneInput(value)}
          style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: width * 0.8, left: 5 }]}
          errorStyle={{
            container: { bottom: -10, left: 10, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
            underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
          }} />
      </View>
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 5 }]}>วันเดือนปีเกิด</Text>
      <TouchableOpacity onPress={() => showMode('date')} >
        <View style={stylesMain.FlexRow}>
          <IconFontAwesome color='#C4C4C4' name='birthday-cake' size={25} />
          <View style={{ marginLeft: 10, borderWidth: 1, borderColor: '#C4C4C4', width: 150, alignItems: 'center', borderRadius: 5 }}>
            {activeDate ? <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
              {`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</Text> :
              <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyBold, { color: '#C4C4C4' }]}>Choose a birthday</Text>}
          </View>
        </View>
      </TouchableOpacity>
      {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(event, selectedDate) =>
        onChange(event, selectedDate)} testID="dateTimePicker" value={date} />}
      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { marginTop: 10 }]}>เพศ</Text>
      <View style={stylesMain.FlexRow}>
        <View style={stylesMain.FlexRow}>
          <IconFontisto name='male' size={20} color='#C4C4C4' style={{ marginTop: 13 }} />
          <CheckBox size={20} title='ชาย' />
        </View>
        <View style={stylesMain.FlexRow}>
          <IconFontisto name='female' size={20} color='#C4C4C4' style={{ marginTop: 13 }} />
          <CheckBox size={20} title='หญิง' />
        </View>
      </View>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={item1} onPress={() => setStateItem1()} size={20} containerStyle={{ marginLeft: -10 }} />
        <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { width: width * 0.80 }]}>
          ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text>
      </View>
      <View style={[stylesMain.ItemCenter, { marginBottom: 10 }]}>
        <TouchableOpacity activeOpacity={item1 ? 0.2 : 1} onPress={() => item1 ? handleSubmit() : null}>
          <View style={[stylesLogin.Login_Box_Text_B, { backgroundColor: item1 ? mainColor : '#ECECEC' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { color: '#FFFFFF', paddingHorizontal: 20 }]}>สมัครสมาชิก</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Form>;
  };
  return <View style={stylesLogin.Login_Box}>
    {/* <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3,]}>สมัครสมาชิก</Text> */}
    <View style={stylesLogin.RegisterScreen_Box_Login}>
      {FormBody()}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Register
export let Registers = (props) => {
  const [item1, setItem1] = useState(false)
  return <View style={[stylesMain.ItemCenter, { marginBottom: 10, top: -20 }]}>
    <View style={[stylesMain.FlexRow, { marginTop: 10, }]}>
      <View style={{ height: 50, marginTop: 20, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
          ฉันต้องการรับข้อเสนอและโปรโมชันสุดพิเศษจาก FIN</Text>
      </View>
      <CheckBox size={30} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} onPress={() =>
        setItem1(!item1)} />
    </View>
    <View>
      <Text style={[stylesFont.FontCenter, stylesFont.FontSize5, stylesFont.FontFamilyText, { marginTop: -10 }]}>---------- สมัครสมาชิกด้วยช่องทางอื่น ----------</Text>
    </View>
    <View style={{ width: width * 0.90 }}>
      <TouchableOpacity>
        <View style={[stylesMain.FlexRow, stylesLogin.Register_Box_Button, { backgroundColor: '#d34836', }]}>
          <View style={[stylesMain.ItemCenter, { height: 30, width: 30, backgroundColor: '#FFFFFF', borderRadius: 15 }]}>
            <IconFontAwesome name='google-plus' size={20} color='#d34836' />
          </View>
          <View style={[stylesMain.ItemCenter, { width: '90%' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', }]}>เข้าสู่ระบบด้วย Gmail</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[stylesMain.FlexRow, stylesLogin.Register_Box_Button, { backgroundColor: '#3b5998', }]}>
          <View style={[stylesMain.ItemCenter, { height: 30, width: 30, backgroundColor: '#FFFFFF', borderRadius: 15 }]}>
            <IconFontAwesome name='facebook' size={20} color='#3b5998' />
          </View>
          <View style={[stylesMain.ItemCenter, { width: '90%' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>เข้าสู่ระบบด้วย Facebook</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[stylesMain.FlexRow, stylesLogin.Register_Box_Button, { backgroundColor: '#00C300', }]}>
          <View style={[stylesMain.ItemCenter, { height: 30, width: 30, backgroundColor: '#FFFFFF', borderRadius: 15 }]}>
            <IconFontisto name='line' size={20} color='#00C300' />
          </View>
          <View style={[stylesMain.ItemCenter, { width: '90%' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>เข้าสู่ระบบด้วย Line</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <View style={[stylesMain.FlexRow, stylesLogin.Register_Box_Button, { backgroundColor: '#24201c', }]}>
          <View style={[stylesMain.ItemCenter, { height: 30, width: 30, backgroundColor: '#FFFFFF', borderRadius: 15 }]}>
            <IconFontAwesome name='apple' size={20} color='#24201c' />
          </View>
          <View style={[stylesMain.ItemCenter, { width: '90%' }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>เข้าสู่ระบบด้วย Apple ID</Text>
          </View>
        </View>
      </TouchableOpacity> */}
    </View>
  </View>;
};