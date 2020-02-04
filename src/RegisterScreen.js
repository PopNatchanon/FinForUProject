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
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesLogin from '../style/stylesLoginScreen';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import { Form, TextValidator } from 'react-native-validator-form';
import { CheckBox } from 'react-native-elements';
import RadioButtonRN from 'radio-buttons-react-native';
import { ip, finip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { Picker } from "native-base";
export const { width, height } = Dimensions.get('window');

export default class Register_OTPScreen extends Component {
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
      <View style={stylesLogin.Logo_Box}>
        <FastImage
          style={stylesLogin.Logo}
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
      show: false,
      DataYear: [],
      DataMo: [],
      DataDay: [],
      activeNow: 0,
    };
    this.EmailInput = this.EmailInput.bind(this);
    // this.PassMailInput = this.PassMailInput.bind(this);
    this.UnameInput = this.UnameInput.bind(this);
    this.PassInput = this.PassInput.bind(this);
    this.RepeatPassInput = this.RepeatPassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    const { user } = this.state;
    this.getDataYear()
    this.getDataMo(new Date())
    this.getDataDay(new Date())
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
  getDataYear() {
    var dates = new Date().getFullYear();
    var box = [];
    for (min = 1950; min <= parseInt(dates); min = min + 1) {
      box.push(String(min))
    }
    this.setState({ DataYear: box, date: new Date() })
  }
  getDataMo(itemValue) {
    const { date } = this.state
    if (itemValue != null) {
      // console.log(itemValue)
      const item = String(itemValue)
      this.setState({ date: new Date(date).setFullYear(item) })
      var box = [];
      for (min = 0; min <= 11; min = min + 1) {
        box.push(String(min))
      }
      this.setState({ DataMo: box })
    }
  }
  getDataDay(itemValue) {
    const { date } = this.state
    if (itemValue != null) {
      // console.log(itemValue)
      const item = String(itemValue)
      this.setState({ date: new Date(date).setMonth(item) })
      var box = [];
      for (min = 1; min <= 31; min = min + 1) {
        box.push(String(min))
      }
      this.setState({ DataDay: box })
    }
  }
  DataYear() {
    return (
      this.state.DataYear.map((item) => {
        return (
          <Picker.Item label={item} value={item} key={item} />
        )
      })
    )
  }
  DataMo() {
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    var months_eng = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ]
    return (
      this.state.DataMo.map((item) => {
        return (
          <Picker.Item label={months_thai[item]} value={item} key={item} />
        )
      })
    )
  }
  DataDay() {
    return (
      this.state.DataDay.map((item) => {
        return (
          <Picker.Item label={item} value={item} key={item} />
        )
      })
    )
  }
  getData() {
    const { user, date, gender } = this.state;
    user.date = new Date(date).getDate();
    user.month = new Date(date).getMonth() + 1;
    user.year = new Date(date).getFullYear();
    user.gender = gender;
    this.setState({ user });
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
                this.props.navigation.goBack();
                this.props.navigation.replace('MainScreen');
              } else {
                this.props.navigation.goBack();
                this.props.navigation.replace('MainScreen');
              }
            })
            .catch((error) => {
              console.error(error);
            })
        } else {
          alert(responseJson.result)
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
    // console.log(event)
    const { user } = this.state;
    user.email = event;
    this.setState({ user });
  }
  // PassMailInput(event) {
  //   const { user } = this.state;
  //   user.passmail = event;
  //   this.setState({ user });
  // }
  UnameInput(event) {
    const { user } = this.state;
    user.name = event;
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
  render() {
    const { activeNow } = this.state
    activeNow < 2 ?
      this.setState({ activeNow: activeNow + 1, date: new Date('2000') }) :
      null
    const { user, date, } = this.state;
    let DataDay = this.DataDay()
    let DataMo = this.DataMo()
    let DataYear = this.DataYear()
    var day = new Date(date).getDate()
    var month = new Date(date).getMonth();
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
      <View style={stylesLogin.Login_Box}>
        <View style={stylesLogin.RegisterScreen_Box_Login}>
          <Form
            ref="form"
            onSubmit={this.getData}
          >
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize2, stylesFont.FontFamilyBold]}>
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
              style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
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
            {/* <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize2, stylesFont.FontFamilyBold]}>
              รหัสยืนยันผ่านอีเมล</Text>
            <TextValidator
              name="pass"
              label="text"
              type="text"
              value={user.passmail}
              maxLength={6}
              onChangeText={this.PassMailInput}
              style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
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
            <View style={stylesLogin.Countdownstyle}>
              <Text style={[stylesLogin.CountdownstyleSubmit, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                ส่ง</Text>
            </View> */}
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize2, stylesFont.FontFamilyBold]}>
              ชื่อ</Text>
            <TextValidator
              name="name"
              label="text"
              validators={['required', 'isString']}
              errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']}
              type="text"
              value={user.name}
              onChangeText={this.UnameInput}
              style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
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
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize2, stylesFont.FontFamilyBold]}>
              รหัสผ่าน</Text>
            <TextValidator
              name="password"
              label="text"
              validators={['required', 'isString', 'minStringLength:6']}
              errorMessages={['กรุณากรอกรหัสผ่าน', 'กรุณากรอกรหัสผ่านให้ถูกต้อง', 'กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัว']}
              type="text"
              secureTextEntry
              value={user.password}
              onChangeText={this.PassInput}
              style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
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
            <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize2, stylesFont.FontFamilyBold]}>
              ยืนยันรหัสผ่าน</Text>
            <TextValidator
              name="repassword"
              label="text"
              validators={['isPasswordMatch', 'required',]}
              errorMessages={['รหัสผ่านไม่ตรงกัน', 'กรุณายืนยันรหัสผ่าน',]}
              type="text"
              secureTextEntry
              value={user.repassword}
              onChangeText={this.RepeatPassInput}
              style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
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
            <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
              <View style={stylesMain.FlexRow}>
                <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
                  <Picker
                    selectedValue={String(day)}
                    style={{ height: '100%', width: '100%' }}
                    itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4, { backgroundColor: '#fff' }]}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState({ date: new Date(date).setDate(itemValue) })
                    }}>
                    {DataDay}
                  </Picker>
                </View>
                <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
                  <Picker
                    selectedValue={String(month)}
                    style={{ height: '100%', width: '100%' }}
                    itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4, { backgroundColor: '#fff' }]}
                    onValueChange={(itemValue, itemIndex) => {
                      this.getDataDay(itemValue)
                    }}>
                    {DataMo}
                  </Picker>
                </View>
                <View style={stylesLogin.DateBoxBody}>
                  <Picker
                    selectedValue={String(year)}
                    style={{ height: '100%', width: '100%' }}
                    itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4, { backgroundColor: '#fff' }]}
                    onValueChange={(itemValue, itemIndex) => {
                      this.getDataMo(itemValue)
                    }}>
                    {DataYear}
                  </Picker>
                </View>
              </View>
            </View>
            <View style={stylesLogin.DataGenderBox}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
                เพศ</Text>
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
                  textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3, {
                    marginLeft: 12,
                  }]}
                  activeColor='#111'
                  circleSize={15}
                  selectedBtn={(e) => this.setState({ gender: e.value })}
                />
              </View>
            </View>
            <View style={stylesLogin.RegisterScreen_CheckBox}>
              <CheckBox
                checked={this.state.item1}
                onPress={() => this.setState({ item1: !this.state.item1 })}
              />
              <View style={stylesLogin.RegisterScreen_Check_Box}><Text style={[stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text></View>
            </View>
            <View style={stylesLogin.Login_Box_Text_C}>
              <TouchableOpacity onPress={this.handleSubmit}>
                <View style={stylesLogin.Login_Box_Text_B}>
                  <Text style={[stylesLogin.Login__Text, stylesFont.FontFamilyText, stylesFont.FontSize2, stylesMain.ItemCenterVertical]}>
                    สมัครสมาชิก</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Form>
        </View>
      </View >
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
      <View style={[stylesMain.ItemCenter, { marginBottom: 10 }]}>
        <View style={[stylesMain.FlexRow, { marginTop: 10, }]}>
          <View style={{ height: 50, width: 250, marginTop: 20, marginLeft: 20, }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
              ฉันต้องการรับข้อเสนอและโปรโมชันสุดพิเศษจาก FIN</Text>
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
        <View>
          <Text style={[stylesFont.FontCenter, stylesFont.FontSize2, stylesFont.FontFamilyText, { margin: 10 }]}>
            สมัครสมาชิกด้วยช่องทางอื่น</Text>
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
    );
  }
}
