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
        <Login navigation={this.props.navigation} />
        <Register />
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
          <View>
            <Text style={styles.Login_Box_Text_L}>
              ลืมรหัสผ่าน?
              </Text>
          </View>
          <View style={styles.Login_Box_Text_C}>
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProfileScreen')} >
              <View style={styles.Login_Box_Text_B}>
                <Text style={styles.Login__Text}>
                  เข้าสู่ระบบ
              </Text>
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
        <View style={styles.Register_Box_A}>
          <View><Text style={styles.Register_Box_TextA}> สร้างบัญชี </Text></View>
          <View>
            <Text style={{ textAlign: 'center', margin: 20, justifyContent: 'center', }}>เข้าสู่ระบบด้วยช่องทางอื่น</Text>
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

export class Toolbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.Toolbar}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('MainScreen')} >
          <View >
            <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
            <Text>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('FeedScreen')} >
          <View >
            <IconAntDesign name="tagso" size={25} />
            <Text> Feed</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('NewsScreen')} >
          <View >
            <IconAntDesign name="notification" size={25} />
            <Text>News</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('BellScreen')} >
          <View >
            <IconAntDesign name="bells" size={25} />
            <Text>เตือน</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('LoginScreen')} >
          <View>
            <IconAntDesign name="user" size={25} />
            <Text> ฉัน</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
