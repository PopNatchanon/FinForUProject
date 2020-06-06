///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ImageBackground,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height, } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import { Form, TextValidator, } from 'react-native-validator-form';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesLogin from '../style/stylesLoginScreen';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from './MainScreen'
import { Toolbar, NavigationNavigateScreen, } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{ backgroundColor: '#071727', flex: 1 }}>
        <ScrollView>
          <Logo />
          <Login navigation={navigation} />
          <Register navigation={navigation} />
        </ScrollView>
        <Toolbar navigation={navigation} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Logo
export class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <ImageBackground
          style={stylesLogin.Logo_Box}
          source={{
            uri: `${ip}/MySQL/uploads/icon_5/sign-in-bg02.jpg`,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        >
          <FastImage
            style={stylesLogin.Logo}
            source={require('../../images/add_cart_fin.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageBackground>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Login
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      eye: true,
    }
  }
  storeData = async (item) => {
    try {
      await AsyncStorage.setItem('@MyKey', JSON.stringify(item))
    } catch (e) {
      // saving error
    }
  }
  storeLogin = async (item) => {
    try {
      await AsyncStorage.setItem('@MyLongin', JSON.stringify(item))
    } catch (e) {
      // saving error
    }
  }
  clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      // clear error
    }
  }
  getData = async () => {
    const { navigation } = this.props
    const { user } = this.state;
    fetch(`${finip}/auth/login_customer`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.clearAll()
        this.storeData(responseJson.data)
        if (responseJson.data != null) {
          var userser = { email: user.email, password: user.password }
          this.storeLogin(userser)
          NavigationNavigateScreen({ goScreen: 'MainScreen', navigation });
        } else {
          this.setState({ errorMessage: responseJson, showErrorMessage: true })
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }
  handleSubmit = () => {
    this.refs.form.submit();
  }
  EmailInput = (event) => {
    const { user } = this.state;
    user.email = event;
    this.setState({ user });
  }
  PassInput = (event) => {
    const { user } = this.state;
    user.password = event;
    this.setState({ user });
  }
  setStateEye = (eye) => {
    this.setState({ eye })
  }
  render() {
    const { showErrorMessage, errorMessage, eye, user, } = this.state;
    return (
      <View style={stylesLogin.Login_Box}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF', margin: 5 }]}>เข้าสู่ระบบ</Text>
        <View style={stylesLogin.Login_BoxA}>
          <Form
            ref="form"
            onSubmit={this.getData.bind(this)}>
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
              อีเมล</Text>
            <TextValidator
              name="email"
              label="text"
              validators={['required']}
              errorMessages={['กรุณากรอกอีเมล']}
              type="text"
              keyboardType="email-address"
              value={user.email}
              onChangeText={this.EmailInput.bind(this)}
              style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
              errorStyle={{
                container: {
                  bottom: -12,
                  left: 4,
                  position: 'absolute'
                },
                text: {
                  color: 'red',
                  fontFamily: 'SukhumvitSet-Text',
                },
                underlineValidColor: 'gray',
                underlineInvalidColor: 'red'
              }} />
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
              รหัสผ่าน</Text>
            <TextValidator
              name="pass"
              label="text"
              type="text"
              validators={['required']}
              errorMessages={['กรุณารหัสผ่าน']}
              value={user.password}
              // maxLength={6}
              secureTextEntry={eye}
              onChangeText={this.PassInput.bind(this)}
              style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
              errorStyle={{
                container: {
                  bottom: -12,
                  left: 4,
                  position: 'absolute'
                },
                text: {
                  color: 'red',
                  fontFamily: 'SukhumvitSet-Text',
                },
                underlineValidColor: 'gray',
                underlineInvalidColor: 'red'
              }} />
            <TouchableOpacity style={stylesLogin.eyestyle}
              onPress={() => this.setStateEye(!eye)}>
              <View>
                <IconFeather RightItem name={eye == false ? "eye" : "eye-off"} size={20} style={{ marginTop: 5 }} />
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 4 }}>
              <Text style={[stylesLogin.Login_Box_Text_L, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                ลืมรหัสผ่าน?</Text>
            </View>
            <View style={[stylesMain.ItemCenter]}>
              <TouchableOpacity onPress={() => this.handleSubmit()}>
                <View style={[stylesLogin.Login_Box_Text_B, stylesMain.ItemCenter]}>
                  <Text style={[
                    stylesLogin.Login__Text, stylesFont.FontFamilyText, stylesFont.FontSize4, stylesMain.ItemCenterVertical
                  ]}>เข้าสู่ระบบ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Form>
        </View>
        <SCLAlert
          theme="danger"
          show={showErrorMessage}
          subtitle={errorMessage && errorMessage.message}
          subtitleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}
          titleContainerStyle={{ marginBottom: -40 }}
          onRequestClose={() => this.setState({ showErrorMessage: false })}
        >
          <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
            <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => this.setState({ showErrorMessage: false })}
              containerStyle={{ padding: 10, paddingHorizontal: 40 }}>OK</SCLAlertButton>
          </View>
        </SCLAlert>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Register
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={stylesLogin.Register_Box}>
        <View style={stylesLogin.Register_Box_A}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ width: 120, }} onPress={() => NavigationNavigateScreen({ goScreen: 'RegisterScreen', navigation })}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginTop: 10, color: '#f5df89', }]}>
                สมัครสมาชิกใหม่
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[stylesFont.FontCenter, stylesFont.FontSize4, stylesFont.FontFamilyText, { margin: 10, color: '#FFFFFF' }]}>
              เข้าสู่ระบบด้วยช่องทางอื่น</Text>
          </View>
          <View style={stylesLogin.Register_Box_Button}>
            <TouchableOpacity>
              <View style={{ marginLeft: 10, width: 140, height: 50 }}>
                <FastImage
                  style={stylesLogin.Register_Box_image}
                  source={require('../../icon/logoutappfacebook.png')}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginLeft: 10, width: 140, height: 50 }}>
                <FastImage
                  style={stylesLogin.Register_Box_image}
                  source={require('../../icon/logoutapp14.png')}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}