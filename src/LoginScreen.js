///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { Form, TextValidator } from 'react-native-validator-form';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesLogin from '../style/stylesLoginScreen';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={[stylesMain.SafeAreaView]}>
        <ScrollView>
          <Logo />
          <Login navigation={this.props.navigation} />
          <Register navigation={this.props.navigation} />
        </ScrollView>
        <Toolbar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Logo
export class Logo extends Component {
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
          source={require('../images/sj.png')}
        />
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Login
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
    this.EmailInput = this.EmailInput.bind(this);
    this.PassInput = this.PassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }
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
        responseJson.map((item) => {
          userser.id_customer = item.id_customer
          userser.name = item.name
          userser.email = item.email
          userser.telphone = item.telphone
          userser.image = item.image
          userser.image_path = item.image_path
          userser.gender = item.gender
          userser.address = item.address
        })
        this.clearAll()
        this.storeData(userser)
        if (userser.address != null) {
          this.props.navigation.replace('MainScreen');
        } else {
          this.props.navigation.replace('MainScreen');
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }
  handleSubmit() {
    this.refs.form.submit();
  }
  EmailInput(event) {
    const { user } = this.state;
    user.email = event;
    this.setState({ user });
  }
  PassInput(event) {
    const { user } = this.state;
    user.password = event;
    this.setState({ user });
  }
  render() {
    const { user, eye } = this.state;
    return (
      <View style={stylesLogin.Login_Box}>
        <View style={stylesLogin.Login_BoxA}>
          <Form
            ref="form"
            onSubmit={this.getData}
         >
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
              onChangeText={this.EmailInput}
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
              }}
            />
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
              รหัสผ่าน</Text>
            <TextValidator
              name="pass"
              label="text"
              type="text"
              value={user.password}
              // maxLength={6}
              secureTextEntry={eye == false ? false : true}
              onChangeText={this.PassInput}
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
              }}
            />
            <TouchableOpacity style={stylesLogin.eyestyle}
              onPress={() => { eye == false ? this.setState({ eye: true }) : this.setState({ eye: false }) }}>
              <View>
                <IconFeather RightItem name={eye == false ? "eye" : "eye-off"} size={20} style={{ marginTop: 5 }} />
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 4 }}>
              <Text style={[stylesLogin.Login_Box_Text_L, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                ลืมรหัสผ่าน?</Text>
            </View>
            <View style={[stylesMain.ItemCenter]}>
              <TouchableOpacity onPress={this.handleSubmit}>
                <View style={[stylesLogin.Login_Box_Text_B, stylesMain.ItemCenter]}>
                  <Text style={[stylesLogin.Login__Text, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical]}
                 >เข้าสู่ระบบ</Text>
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
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesLogin.Register_Box}>
        <View style={stylesLogin.Register_Box_A}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
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
              source={require('../icon/face_icon.png')}
            />
            <FastImage
              style={stylesLogin.Register_Box_image}
              source={require('../icon/googla_icon.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}