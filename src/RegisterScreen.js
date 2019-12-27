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
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../style/stylesLoginScreen';
import { CheckBox } from 'react-native-elements';

import {
  Input,
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
        <Logo />
        <Login />
        <Register />
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
        <Image
          style={styles.Logo}
          source={require('../images/sj.png')}
          resizeMethod='resize'
        ></Image>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Login_Box}>
        <View style={styles.RegisterScreen_Box_Login}>
          <Input
            label='ชื่อเต็ม'
            labelStyle={styles.Login_Box_Textlabel}
            inputStyle={styles.Login_Box_Text}
          />
          <Input
            label='รหัสผ่าน'
            labelStyle={styles.Login_Box_Textlabel}
            rightIcon={{ type: 'feather', name: 'eye-off' }}
          />
          <Text style={styles.RegisterScreen_Text}>*กรอกตัวอย่างน้อย 6 ตัว ประกอบไปด้วยตัวเลขและตัวอักษร</Text>

          <View style={styles.RegisterScreen_CheckBox}>
            <CheckBox
              checked={this.state.item1}
              onPress={() => this.setState({ item1: !this.state.item1 })}
            />
            <View style={styles.RegisterScreen_Check_Box}><Text style={styles.RegisterScreen_Check_Text}>ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text></View>
          </View>

          <View style={styles.Login_Box_Text_C}>
            <View style={styles.Login_Box_Text_B}>
              <Text style={styles.Login__Text}>สมัครสมาชิก</Text></View>
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
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ flexDirection: 'row', marginTop: 10, }}>
          <View style={{ height: 50, width: 250,marginTop: 20, marginLeft:20,}}>
            <Text>ฉันต้องการรับข้อเสนอและโปรโมชันสุดพิเศษจาก FIN</Text>
          </View>
          <CheckBox
            size={30}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={this.state.item1}
            onPress={() => this.setState({ item1: !this.state.item1 })}
          />
        </View>
      </View>
    );
  }
}
