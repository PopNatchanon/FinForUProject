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
import FastImage from 'react-native-fast-image';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../style/stylesLoginScreen';

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
    };
  }

  render() {
    return (
      <View style={styles.Login_Box}>
        <View style={styles.Login_BoxA}>
          <Input
            label='อีเมล'
            labelStyle={styles.Login_Box_Textlabel}
            inputStyle={styles.Login_Box_Text}
          />
          <Input
            label='รหัส OTP ผ่านอีเมล'
            labelStyle={styles.Login_Box_Textlabel}
            rightIcon={{ type: 'MaterialCommunityIcons', name: 'timer-10' }}
          />
          <View style={styles.Login_Box_Text_C}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
              <View style={styles.Login_Box_Text_B}>
                <Text style={styles.Login__Text}>ถัดไป</Text>
              </View>
            </TouchableOpacity>
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

