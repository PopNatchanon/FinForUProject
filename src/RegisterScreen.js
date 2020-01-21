import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Picker
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../style/stylesLoginScreen';
import { Form, TextValidator } from 'react-native-validator-form';
import { CheckBox } from 'react-native-elements';
import RadioButtonRN from 'radio-buttons-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ip, finip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import RNRestart from 'react-native-restart';

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
        <ScrollView>
          <Logo />
          <Login navigation={this.props.navigation} />
          <Register />
        </ScrollView>
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
      date: new Date(),
      mode: 'date',
      show: false,
    };
    this.EmailInput = this.EmailInput.bind(this);
    this.PassMailInput = this.PassMailInput.bind(this);
    this.UnameInput = this.UnameInput.bind(this);
    this.UfamilyInput = this.UfamilyInput.bind(this);
    this.PassInput = this.PassInput.bind(this);
    this.RepeatPassInput = this.RepeatPassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const { user } = this.state;
    Form.addValidationRule('isPasswordMatch', (value) => {
      // console.log('isPasswordMatch')
      // console.log(value)
      if (value !== user.password) {
        return false;
      }
      return true;
    });
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
  componentWillUnmount() {
    Form.removeValidationRule('isPasswordMatch');
  }

  getData() {
    const { user, date, gender } = this.state;
    // console.log('Database Process')
    // console.log("this.state")
    // console.log(this.state)
    user.date = new Date(date).getDate();
    user.month = new Date(date).getMonth() + 1;
    user.year = new Date(date).getFullYear();
    user.gender = gender;
    // console.log([date2, month2, year2].join('/'))
    this.setState({ user });
    // console.log("user")
    // console.log(user)
    fetch(finip + '/auth/register_customer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.result)
        if (responseJson.result == 'Complete') {

          fetch(finip + '/auth/login_customer', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, password: user.password }),
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
                this.props.navigation.goBack();
                this.props.navigation.replace('MainScreen');
              } else {
                this.props.navigation.goBack();
                this.props.navigation.replace('MainScreen');
              }
              // RNRestart.Restart();
            })
            .catch((error) => {
              console.error(error);
            })
          // this.props.navigation.replace('ProfileScreen');

        } else {
          alert(responseJson.result)
          // this.props.navigation.goBack();
        }
        // this.props.navigation.replace('ProfileScreen', { email: user.email });
      })
      .catch((error) => {
        console.error(error);
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

  PassMailInput(event) {
    const { user } = this.state;
    user.passmail = event;
    this.setState({ user });
  }
  UnameInput(event) {
    const { user } = this.state;
    user.name = event;
    this.setState({ user });
  }
  UfamilyInput(event) {
    const { user } = this.state;
    user.family = event;
    this.setState({ user });
  }

  PassInput(event) {
    const { user } = this.state;
    user.password = event;
    this.setState({ user });
  }

  RepeatPassInput(event) {
    const { user } = this.state;
    user.repassword = event;
    this.setState({ user });
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  render() {
    const { user, show, date, mode, gender } = this.state;
    var day = new Date(date).getDate()
    var month = new Date(date).getMonth() + 1;
    var year = new Date(date).getFullYear();
    const data = [
      {
        label: 'ชาย',
        value: 'male',
      },
      {
        label: 'หญิง',
        value: 'female',

      }
    ];
    return (
      <View style={styles.Login_Box}>
        <View style={styles.RegisterScreen_Box_Login}>
          <Form
            ref="form"
            onSubmit={this.getData}
          ><Text style={styles.Login_Box_Textlabel}>
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
              value={user.passmail}
              maxLength={6}
              onChangeText={this.PassMailInput}
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
            <View style={styles.Countdownstyle}>
              <Text style={styles.CountdownstyleSubmit}
              >
                ส่ง
          </Text>
            </View>
            <Text style={styles.Login_Box_Textlabel}>
              ชื่อ
            </Text>
            <TextValidator
              name="name"
              label="text"
              validators={['required', 'isString']}
              errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']}
              type="text"
              value={user.name}
              onChangeText={this.UnameInput}
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
            <Text style={styles.Login_Box_Textlabel}>
              นามสกุล
            </Text>
            <TextValidator
              name="name"
              label="text"
              validators={['required', 'isString']}
              errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']}
              type="text"
              value={user.family}
              onChangeText={this.UfamilyInput}
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
            <Text style={styles.Login_Box_Textlabel}>
              รหัสผ่าน
            </Text>
            <TextValidator
              name="password"
              label="text"
              validators={['required', 'isString', 'minStringLength:6']}
              errorMessages={['กรุณากรอกรหัสผ่าน', 'กรุณากรอกรหัสผ่านให้ถูกต้อง', 'กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัว']}
              type="text"
              secureTextEntry
              value={user.password}
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
                underlineValidColor: 'gray',//rightIcon={{ type: 'feather', name: 'eye-off' }}
                underlineInvalidColor: 'red'
              }}
            />
            {/* <Text style={styles.RegisterScreen_Text}>*กรอกตัวอย่างน้อย 6 ตัว ประกอบไปด้วยตัวเลขและตัวอักษร</Text> */}
            <Text style={styles.Login_Box_Textlabel}>
              ยืนยันรหัสผ่าน
            </Text>
            <TextValidator
              name="repassword"
              label="text"
              validators={['isPasswordMatch', 'required',]}
              errorMessages={['รหัสผ่านไม่ตรงกัน', 'กรุณายืนยันรหัสผ่าน',]}
              type="text"
              secureTextEntry
              value={user.repassword}
              onChangeText={this.RepeatPassInput}
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
                underlineValidColor: 'gray',//rightIcon={{ type: 'feather', name: 'eye-off' }}
                underlineInvalidColor: 'red'
              }}
            />
            {/* <Text style={styles.RegisterScreen_Text}>*กรอกตัวอย่างน้อย 6 ตัว ประกอบไปด้วยตัวเลขและตัวอักษร</Text> */}
            <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 14 }}>
              <TouchableOpacity onPress={this.datepicker}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontFamily: 'SukhumvitSet-Text', }}>{day}/</Text>
                  <Text style={{ fontFamily: 'SukhumvitSet-Text', }}>{month}/</Text>
                  <Text style={{ fontFamily: 'SukhumvitSet-Text', }}>{year}</Text>
                </View>
              </TouchableOpacity>
              {show && <DateTimePicker
                value={date}
                mode={mode}
                style={{ fontFamily: 'SukhumvitSet-Text', }}
                // format="DD-MM-YYYY"
                display="spinner"
                maximumDate={new Date()}
                onChange={this.setDate} />
              }
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 14 }}>
              <Text style={{ fontFamily: 'SukhumvitSet-Text', }}>
                เพศ
              </Text>
              <View style={{ marginTop: -10, }}>
                <RadioButtonRN
                  data={data}
                  initial={1}
                  style={{
                    flexDirection: 'row',
                  }}
                  box={false}
                  boxStyle={{
                    width: 70,
                  }}
                  textStyle={{
                    marginLeft: 12,
                  }}
                  activeColor='#111'
                  circleSize={15}
                  selectedBtn={(e) => this.setState({ gender: e.value })}
                />
              </View>
            </View>

            <View style={styles.RegisterScreen_CheckBox}>
              <CheckBox
                checked={this.state.item1}
                onPress={() => this.setState({ item1: !this.state.item1 })}
              />
              <View style={styles.RegisterScreen_Check_Box}><Text style={[styles.RegisterScreen_Check_Text, { fontFamily: 'SukhumvitSet-Text' }]}>ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text></View>
            </View>
            <View style={styles.Login_Box_Text_C}>
              <View style={styles.Login_Box_Text_C}>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <View style={styles.Login_Box_Text_B}>
                    <Text style={[styles.Login__Text, { fontFamily: 'SukhumvitSet-Text' }]}>สมัครสมาชิก</Text>
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
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ flexDirection: 'row', marginTop: 10, }}>
          <View style={{ height: 50, width: 250, marginTop: 20, marginLeft: 20, }}>
            <Text style={{ fontFamily: 'SukhumvitSet-Text' }}>ฉันต้องการรับข้อเสนอและโปรโมชันสุดพิเศษจาก FIN</Text>
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
