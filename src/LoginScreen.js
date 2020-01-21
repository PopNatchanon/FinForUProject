import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Form, TextValidator } from 'react-native-validator-form';
import AsyncStorage from '@react-native-community/async-storage';
import { ip, finip } from '../navigator/IpConfig';

import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../style/stylesLoginScreen';
import RNRestart from 'react-native-restart';
import { Toolbar } from './tools/Tools'

import {
  Input,
} from 'react-native-elements';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
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

///--------------------------------------------------------------------------///


export class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Logo_Box}>
        <FastImage
          style={styles.Logo}
          source={require('../images/sj.png')}
        />
      </View>
    );
  }
}

///--------------------------------------------------------------------------///


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

    // console.log('Done.')
  }

  getData = async () => {
    const { user } = this.state;
    // console.log('Database Process')
    // console.log(user)
    // console.log(user.email)
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
        // console.log("responseJson")
        // console.log(responseJson)
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
        // user.name = responseJson.map((item) => { return (item.name) })
        // console.log('userser')
        this.clearAll()
        // console.log(userser)
        this.storeData(userser)
        // user = JSON.stringify(responseJson)
        // console.log(user)
        if (userser.address != null) {
          this.props.navigation.replace('MainScreen');
        } else {
          this.props.navigation.replace('MainScreen');
          // this.props.navigation.navigate('Customer_account');
        }
        // RNRestart.Restart();
      })
      .catch((error) => {
        console.error(error);
      })
    // this.props.navigation.replace('ProfileScreen');
  }


  handleSubmit() {
    this.refs.form.submit();
  }

  EmailInput(event) {
    // console.log(event)
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
      <View style={styles.Login_Box}>
        <View style={styles.Login_BoxA}>
          <Form
            ref="form"
            onSubmit={this.getData}
          >
            <Text style={styles.Login_Box_Textlabel}>
              อีเมล
              </Text>
            <TextValidator
              name="email"
              label="text"
              validators={['required', 'matchRegexp:^[a-zA-Z]+([\.-]?[a-zA-Z0-9]+[\_]?)+([\.-]?[a-zA-Z0-9]+[\_]?)@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,3})+$']}
              errorMessages={['กรุณากรอกอีเมล', 'กรุณากรอกอีเมลให้ถูกต้อง']}
              type="text"
              keyboardType="email-address"
              value={user.email}
              onChangeText={this.EmailInput}
              style={{ fontFamily: 'SukhumvitSet-Text', }}
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
            <Text style={styles.Login_Box_Textlabel}>
              รหัสผ่าน
              </Text>
            <TextValidator
              name="pass"
              label="text"
              type="text"
              value={user.password}
              // maxLength={6}
              secureTextEntry={eye == false ? false : true}
              onChangeText={this.PassInput}
              style={{ fontFamily: 'SukhumvitSet-Text', }}
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
            <TouchableOpacity style={styles.eyestyle} onPress={() => { eye == false ? this.setState({ eye: true }) : this.setState({ eye: false }) }}>
              <View >
                <IconFeather RightItem name={eye == false ? "eye" : "eye-off"} size={20} style={{ marginTop: 5 }} />
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 4 }}>
              <Text style={[styles.Login_Box_Text_L, { fontFamily: 'SukhumvitSet-Text', }]}>
                ลืมรหัสผ่าน?
              </Text>
            </View>
            <View style={styles.Login_Box_Text_C}>
              <View style={styles.Login_Box_Text_C}>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <View style={styles.Login_Box_Text_B}>
                    <Text style={[styles.Login__Text, { fontFamily: 'SukhumvitSet-Text', }]}>เข้าสู่ระบบ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Register_Box}>
        <View style={styles.Register_Box_A}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
            <View><Text style={[styles.Register_Box_TextA, { fontFamily: 'SukhumvitSet-Text', }]}> สร้างบัญชี </Text></View>
          </TouchableOpacity>
          <View>
            <Text style={{ textAlign: 'center', margin: 10, fontFamily: 'SukhumvitSet-Text', }}>เข้าสู่ระบบด้วยช่องทางอื่น</Text>
          </View>
          <View style={styles.Register_Box_Button}>
            <FastImage
              style={styles.Register_Box_image}
              source={require('../icon/face_icon.png')}
            />
            <FastImage
              style={styles.Register_Box_image}
              source={require('../icon/googla_icon.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///