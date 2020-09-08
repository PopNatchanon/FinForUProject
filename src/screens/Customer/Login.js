///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useRef } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ImageBackground,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height, } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import { Form, TextValidator, } from 'react-native-validator-form';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesLogin from '../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from '../Main/Main'
import { Toolbar, NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Login);
function Login(props) {
  return <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1, }}>
    <AppBar {...props} titleHead='เข้าสู่ระบบ' helpkBar />
    <ScrollView>
      <Logo />
      <Logins {...props} />
      <Register {...props} />
    </ScrollView>
    <Toolbar {...props} />
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Logo
export let Logo = (props) => <View style={{ alignItems: 'center', marginTop: 20 }}>
  {/* <ImageBackground style={stylesLogin.Logo_Box} 
  source={{ uri: `${ip}/MySQL/uploads/icon_5/sign-in-bg02.jpg`, }}
    resizeMode={FastImage.resizeMode.stretch}> */}
  <FastImage style={stylesLogin.Logo} source={require('../../../images/logoFin_Font1.png')} resizeMode={FastImage.resizeMode.contain} />
  {/* </ImageBackground> */}
</View>;
///----------------------------------------------------------------------------------------------->>>> Login
export let Logins = (props) => {
  const { navigation } = props
  const [activeUser, setActiveUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [eye, setEye] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [user, setUser] = useState({});
  const FormLoginRef = useRef(null);
  let storeData = async (item) => {
    try {
      await AsyncStorage.setItem('@MyKey', JSON.stringify(item));
    } catch (e) { };
  };
  let storeLogin = async (item) => {
    try {
      await AsyncStorage.setItem('@MyLongin', JSON.stringify(item));
    } catch (e) { };
  };
  let clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) { };
  };
  let getData = async (value) => {
    fetch(`${finip}/auth/login_customer`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => response.json()).then((responseJson) => {
      clearAll()
      storeData(responseJson.data)
      if (responseJson.data != null) {
        var userser = { email: user.email, password: user.password };
        storeLogin(userser);
        NavigationNavigate({ goScreen: 'Main', navigation });
      } else {
        setErrorMessage(responseJson);
        setShowErrorMessage(true);
      };
    }).catch((error) => { console.error(error); });
  };
  console.log(user);
  let handleSubmit = () => FormLoginRef.current.submit();;
  let EmailInput = (value) => { user.email = value; setUser(user); setActiveUser(!activeUser); };
  let PassInput = (value) => { user.password = value; setUser(user); setActiveUser(!activeUser); };
  let setStateEye = (value) => setEye(value);
  return <View style={stylesLogin.Login_Box}>
    {/* <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { margin: 5 }]}>เข้าสู่ระบบ</Text> */}
    <View style={stylesLogin.Login_BoxA}>
      <Form ref={FormLoginRef} onSubmit={(value) => getData(value)}>
        <View style={[stylesMain.FlexRow, /*{ borderBottomWidth: 1, borderBottomColor: '#C4C4C4' }*/]} >
          <IconSimpleLineIcons name='user' size={25} style={{ top: 5, color: '#C4C4C4' }} />
          {/* <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>อีเมล</Text> */}
          <TextValidator name="email" label="text" validators={['required']} placeholder='Please enter your email address' errorMessages={['กรุณากรอกอีเมล']} type="text"
            keyboardType="email-address" value={user.email} onChangeText={(value) => EmailInput(value)}
            style={[stylesFont.FontFamilyText, { width: width * 0.80, left: 5, fontSize: 15 }]} errorStyle={{
              container: { top: 45, left: 4, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
              underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
            }} />
        </View>
        {/* <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>รหัสผ่าน</Text> */}
        <View style={[stylesMain.FlexRow, { top: 15 }]}>
          <IconSimpleLineIcons name='lock' size={25} style={{ top: 5, color: '#C4C4C4' }} />
          <TextValidator name="pass" label="text" type="text" placeholder='Please enter your password' validators={['required']} errorMessages={['กรุณารหัสผ่าน']}
            value={user.password} secureTextEntry={eye} onChangeText={(value) => PassInput(value)}
            style={[stylesFont.FontFamilyText, { width: width * 0.53, left: 5, fontSize: 15 }]} errorStyle={{
              container: { top: 45, left: 4, position: 'absolute' }, text: { color: 'red', fontFamily: 'ThaiSansNeue-Bold', },
              underlineValidColor: '#C4C4C4', underlineInvalidColor: 'red'
            }} />
          <View style={[stylesMain.FlexRow, { top: 15, width: width * 0.25, justifyContent: 'space-between', left: 5 }]}>
            <TouchableOpacity onPress={() => setStateEye(!eye)}>
              <IconFeather RightItem name={eye == false ? "eye" : "eye-off"} size={20} />
            </TouchableOpacity>
            <Text style={[stylesFont.FontSize7, { color: '#C4C4C4' }]}>|</Text>
            <TouchableOpacity>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: mainColor }]}>ลืมรหัสผ่าน?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Form>
      <View style={{ top: 40 }}>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={[stylesLogin.Login_Box_Text_B, stylesMain.ItemCenter]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesMain.ItemCenter, { color: '#FFFF' }]}>เข้าสู่ระบบ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <SCLAlert theme="danger" show={showErrorMessage} subtitle={errorMessage && errorMessage.message}
      subtitleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize4]} titleContainerStyle={{ marginBottom: -40 }}
      onRequestClose={() => setShowErrorMessage(false)}>
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
        <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => setShowErrorMessage(false)}
          containerStyle={{ padding: 10, paddingHorizontal: 40 }}>OK</SCLAlertButton>
      </View>
    </SCLAlert>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Register
export let Register = (props) => {
  const { navigation } = props;
  return <View style={{ alignItems: 'center' }}>
    <View style={{ alignItems: 'flex-end', width: '85%' }}>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Customer_Register', navigation })}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10, color: mainColor, }]}>สมัครสมาชิกใหม่</Text>
      </TouchableOpacity>
    </View>
    <Text style={[stylesFont.FontCenter, stylesFont.FontSize5, stylesFont.FontFamilyText, { color: '#C4C4C4', margin: 10 }]}>
      ช่องทางอื่น</Text>
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