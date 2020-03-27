///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height, } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import { Form, TextValidator, } from 'react-native-validator-form';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesLogin from '../style/stylesLoginScreen';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from './MainScreen'
import { Toolbar, } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    if (
      ////>nextProps
      navigation !== nextProps.navigation
      ////>nextState
    ) {
      return true
    }
    return false
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    if (navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={[stylesMain.SafeAreaView]}>
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
      <View style={stylesLogin.Logo_Box}>
        <FastImage
          style={stylesLogin.Logo}
          source={require('../images/sj.png')} />
      </View>
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
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   const { navigation } = this.props
  //   const { eye, user, } = this.state;
  //   if (
  //     ////>nextProps
  //     navigation !== nextProps.navigation ||
  //     ////>nextProps
  //     eye !== nextState.eye || user !== nextState.user
  //   ) {
  //     return true
  //   }
  //   return false
  // }
  storeData = async (item) => {
    try {
      await AsyncStorage.setItem('@MyKey', JSON.stringify(item))
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
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  getData = async () => {
    const { user } = this.state;
    fetch(finip + '/auth/login_customer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var userser = {};
        CookieManager.get(finip + '/auth/login_customer')
          .then((res) => {
          });
        this.clearAll()
        this.storeData(responseJson.data)
        if (responseJson.data != null) {
          this.navigationNavigateScreen('MainScreen');
        } else {
          this.navigationNavigateScreen('MainScreen');
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
    const { eye, user, } = this.state;
    return (
      <View style={stylesLogin.Login_Box}>
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
              onPress={this.setStateEye.bind(this, !eye)}>
              <View>
                <IconFeather RightItem name={eye == false ? "eye" : "eye-off"} size={20} style={{ marginTop: 5 }} />
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 4 }}>
              <Text style={[stylesLogin.Login_Box_Text_L, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                ลืมรหัสผ่าน?</Text>
            </View>
            <View style={[stylesMain.ItemCenter]}>
              <TouchableOpacity onPress={this.handleSubmit.bind(this)}>
                <View style={[stylesLogin.Login_Box_Text_B, stylesMain.ItemCenter]}>
                  <Text style={[
                    stylesLogin.Login__Text, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical
                  ]}>เข้าสู่ระบบ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Form>
        </View>
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
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    if (
      ////>nextProps
      navigation !== nextProps.navigation
      ////>nextState
    ) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    return (
      <View style={stylesLogin.Register_Box}>
        <View style={stylesLogin.Register_Box_A}>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'RegisterScreen')}>
            <View><Text style={[stylesLogin.Register_Box_TextA, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
              สร้างบัญชี</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={[stylesFont.FontCenter, stylesFont.FontSize5, stylesFont.FontFamilyText, { margin: 10 }]}>
              เข้าสู่ระบบด้วยช่องทางอื่น</Text>
          </View>
          <View style={stylesLogin.Register_Box_Button}>
            <FastImage
              style={stylesLogin.Register_Box_image}
              source={require('../icon/face_icon.png')} />
            <FastImage
              style={stylesLogin.Register_Box_image}
              source={require('../icon/googla_icon.png')} />
          </View>
        </View>
      </View>
    );
  }
}