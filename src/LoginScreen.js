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
import styles from '../style/stylesLoginScreen';

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
        <View style={styles.Login_BoxA}>
          <Input
            label='เบอร์มือถือ/อีเมล'
            labelStyle={styles.Login_Box_Textlabel}
            inputStyle={styles.Login_Box_Text}
          />
          <Input
            label='รหัสผ่าน '
            labelStyle={styles.Login_Box_Textlabel}
            rightIcon={{ type: 'feather', name: 'eye-off' }}
          />
          <View><Text style={styles.Login_Box_Text_L}>ลืมรหัสผ่าน?</Text></View>
          <View style={styles.Login_Box_Text_C}>
            <View style={styles.Login_Box_Text_B}>
              <Text style={styles.Login__Text}>เข้าสู่ระบบ</Text></View>
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
        <View style={styles.Register_Box_A}>
          <View><Text style={styles.Register_Box_TextA}> สร้างบัญชี </Text></View>
        <View>
          <Text style={{textAlign:'center', margin:20,}}>เข้าสู่ระบบด้วยช่องทางอื่น</Text>
        </View>
        <View style={styles.Register_Box_Button}>
          <Image style={styles.Register_Box_image} source={require('../icon/face_icon.png')}></Image>
          <Image style={styles.Register_Box_image} source={require('../icon/googla_icon.png')}></Image>
        </View>
        
        </View>
      </View>
    );
  }
}
