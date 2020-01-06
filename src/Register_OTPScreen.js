import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import DropdownAlert from 'react-native-dropdownalert';
import { Form, TextValidator } from 'react-native-validator-form';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../style/stylesLoginScreen';
import { ip } from '../navigator/IpConfig';

import {
  Input,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

export default class Register_OTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Login navigation={this.props.navigation} />
        <Register navigation={this.props.navigation} />
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
          resizeMethod='resize'
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
    };
    this.EmailInput = this.EmailInput.bind(this);
    this.PassInput = this.PassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    const { user } = this.state;
    // console.log('Database Process')
    // console.log(email)
    var url = ip + '/mysql/DataServiceLogRegOtp.php';
    var dataBody = {
      type: 'email',
      email: user.email
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      // console.log('Database Compelete')
      // console.log(getData.data);
      var item = getData.data;
      var c_email = item.map((item) => { return (item.c_email) });
      // console.log('Map Compelete')
      // console.log(c_email);
      if (c_email == 1) {
        alert('อีเมลนี้ถูกใช้แล้วค่ะ');
      } else {
        this.props.navigation.navigate('RegisterScreen', { email: user.email });
      }
    })
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
    user.pass = event;
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <View>
        <DropdownAlert ref={ref => this.dropDownAlertRef = ref} warnImageSrc='null' />
        <Logo />
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
                validators={['required', 'isEmail']}
                errorMessages={['กรุณากรอกอีเมล', 'กรุณากรอกอีเมลให้ถูกต้อง']}
                type="text"
                keyboardType="email-address"
                value={user.email}
                onChangeText={this.EmailInput}
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
              <Text style={styles.Login_Box_Textlabel}>
                รหัสยืนยันผ่านอีเมล
              </Text>
              <TextValidator
                name="pass"
                label="text"
                type="text"
                value={user.pass}
                maxLength={6}
                onChangeText={this.PassInput}
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
              <View style={styles.Countdownstyle}>
                <Text style={styles.CountdownstyleSubmit}
                >
                  ส่ง
                </Text>
              </View>
              <View style={styles.Login_Box_Text_C}>
                <View style={styles.Login_Box_Text_C}>
                  <TouchableOpacity onPress={this.handleSubmit}>
                    <View style={styles.Login_Box_Text_B}>
                      <Text style={styles.Login__Text}>ถัดไป</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Form>
          </View>
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
        <View style={styles.Register_OTP_Box_A}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <View><Text style={styles.Register_Box_TextA}> เข้าสู่ระบบ</Text></View>
          </TouchableOpacity>

          <View>
            <Text style={{ textAlign: 'center', margin: 10, }}>เข้าสู่ระบบด้วยช่องทางอื่น</Text>
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

