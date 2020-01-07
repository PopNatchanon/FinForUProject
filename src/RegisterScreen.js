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
  Picker
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../style/stylesLoginScreen';
import { Form, TextValidator } from 'react-native-validator-form';
import { CheckBox } from 'react-native-elements';
import RadioGroup from 'react-native-radio-button-group';
import DatePicker from 'react-native-datepicker'

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
      user: {},
    };
    this.UnameInput = this.UnameInput.bind(this);
    this.PassInput = this.PassInput.bind(this);
    this.RepeatPassInput = this.RepeatPassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const { user } = this.state;
    const { email } = this.props;
    user.email = email;
    this.setState({ user });
    // custom rule will have name 'isPasswordMatch'
    Form.addValidationRule('isPasswordMatch', (value) => {
      // console.log('isPasswordMatch')
      // console.log(value)
      if (value !== this.state.user.pass) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    Form.removeValidationRule('isPasswordMatch');
  }

  getData() {
    const { user } = this.state;
    // console.log('Database Process')
    console.log(user)
  }

  handleSubmit() {
    this.refs.form.submit();
  }

  UnameInput(event) {
    const { user } = this.state;
    user.name = event;
    this.setState({ user });
  }

  PassInput(event) {
    const { user } = this.state;
    user.pass = event;
    this.setState({ user });
  }

  RepeatPassInput(event) {
    const { user } = this.state;
    user.repeatpass = event;
    this.setState({ user });
  }

  // getInitialState() {
  //   return {
  //     selectedOption: null,
  //   }
  // }

  render() {
    const { user } = this.state;
    return (
      <View style={styles.Login_Box}>
        <View style={styles.RegisterScreen_Box_Login}>
          <Form
            ref="form"
            onSubmit={this.getData}
          >
            <Text style={styles.Login_Box_Textlabel}>
              ชื่อเต็ม
            </Text>
            <TextValidator
              name="name"
              label="text"
              validators={['required', 'isString']}
              errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']}
              type="text"
              value={user.name}
              onChangeText={this.UnameInput}
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
              name="pass"
              label="text"
              validators={['required', 'isString', 'minStringLength:6']}
              errorMessages={['กรุณากรอกรหัสผ่าน', 'กรุณากรอกรหัสผ่านให้ถูกต้อง', 'กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัว']}
              type="text"
              secureTextEntry
              value={user.pass}
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
                underlineValidColor: 'gray',//rightIcon={{ type: 'feather', name: 'eye-off' }}
                underlineInvalidColor: 'red'
              }}
            />
            {/* <Text style={styles.RegisterScreen_Text}>*กรอกตัวอย่างน้อย 6 ตัว ประกอบไปด้วยตัวเลขและตัวอักษร</Text> */}
            <Text style={styles.Login_Box_Textlabel}>
              ยืนยันรหัสผ่าน
            </Text>
            <TextValidator
              name="repeatpass"
              label="text"
              validators={['isPasswordMatch', 'required',]}
              errorMessages={['รหัสผ่านไม่ตรงกัน', 'กรุณายืนยันรหัสผ่าน',]}
              type="text"
              secureTextEntry
              value={user.repeatpass}
              onChangeText={this.RepeatPassInput}
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
              <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                placeholder="วัน/เดือน/ปีเกิด"
                format="DD/MM/YYYY"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 14 }}>
              <Text>
                เพศ
              </Text>
              <View>
                <RadioGroup
                  horizontal
                  options={[
                    { id: 0, label: 'ชาย' },
                    { id: 1, label: 'หญิง' },
                  ]
                  }
                  activeButtonId={0}
                  circleStyle={{ width: 18, height: 18, fillColor: 'black' }}
                />
              </View>
            </View>

            <View style={styles.RegisterScreen_CheckBox}>
              <CheckBox
                checked={this.state.item1}
                onPress={() => this.setState({ item1: !this.state.item1 })}
              />
              <View style={styles.RegisterScreen_Check_Box}><Text style={styles.RegisterScreen_Check_Text}>ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text></View>
            </View>
            <View style={styles.Login_Box_Text_C}>
              <View style={styles.Login_Box_Text_C}>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <View style={styles.Login_Box_Text_B}>
                    <Text style={styles.Login__Text}>สมัครสมาชิก</Text>
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
