///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ImageBackground,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { Form, TextValidator } from 'react-native-validator-form';
import ModalDropdown from 'react-native-modal-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesLogin from '../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Register_OTPScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#071727' }}>
        <ScrollView>
          <Logo />
          <Login {...this.props} />
          <Register />
        </ScrollView>
        <ExitAppModule {...this.props} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Logo
export class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <ImageBackground
          style={stylesLogin.Logo_Box}
          source={{
            uri: `${ip}/MySQL/uploads/icon_5/11111-10.jpg`,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        >
          <FastImage
            style={stylesLogin.Logo}
            source={require('../../icon/unicorn-fin-logoaaaa.png')}
            resizeMode={FastImage.resizeMode.contain} />
        </ImageBackground>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Login
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNow: 0,
      date: new Date(),
      DataMo: [],
      DataDay: [],
      DataYear: [],
      item1: false,
      show: false,
      user: {},
    };
  }
  componentDidMount() {
    const { user } = this.state;
    this.getDataYear()
    this.getDataMo(new Date())
    this.getDataDay(new Date())
    Form.addValidationRule('isPasswordMatch', (value) => {
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
  }
  componentWillUnmount() {
    Form.removeValidationRule('isPasswordMatch');
  }
  getDataYear = () => {
    var dates = new Date().getFullYear();
    var box = [];
    for (min = 1950; min <= parseInt(dates); min = min + 1) {
      box.push(String(min))
    }
    this.setState({ DataYear: box, date: new Date() })
  }
  getDataMo = (itemValue) => {
    const { date } = this.state
    if (itemValue != null) {
      const item = String(itemValue)
      this.setState({ date: new Date(date).setFullYear(item) })
      var box = [];
      for (min = 0; min <= 11; min = min + 1) {
        box.push(String(min))
      }
      this.setState({ DataMo: box })
    }
  }
  getDataDaySet = (itemValue) => {
    const { date } = this.state
    if (itemValue != null) {
      const item = String(itemValue)
      this.setState({ date: new Date(date).setDate(item) })
    }
  }
  getDataDay = (itemValue) => {
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    var value = months_thai.lastIndexOf(itemValue)
    const { date } = this.state
    if (value != null) {
      const item = String(value)
      this.setState({ date: new Date(date).setMonth(item) })
      var box = [];
      for (min = 1; min <= 31; min = min + 1) {
        box.push(String(min))
      }
      this.setState({ DataDay: box })
    }
  }
  DataYear() {
    const { DataYear } = this.state
    return (
      DataYear.map((item) => {
        return (
          item
        )
      })
    )
  }
  DataMo() {
    const { DataMo } = this.state
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    var months_eng = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ]
    return (
      DataMo.map((item) => {
        return (
          months_thai[item]
        )
      })
    )
  }
  DataDay() {
    const { DataDay } = this.state
    return (
      DataDay.map((item) => {
        return (
          item
        )
      })
    )
  }
  getData = () => {
    const { navigation, } = this.props
    const { date, user, } = this.state;
    user.birth_date = new Date(date).getDate();
    user.birth_mon = new Date(date).getMonth() + 1;
    user.birth_year = new Date(date).getFullYear();
    this.setState({ user });
    fetch(`${finip}/auth/register_customer`, {
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
          fetch(`${finip}/auth/login_customer`, {
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
                navigation.goBack();
                navigation.replace('MainScreen');
              } else {
                navigation.goBack();
                navigation.replace('MainScreen');
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
  handleSubmit = () => {
    this.refs.form.submit();
  }
  EmailInput = (event) => {
    const { user } = this.state;
    user.email = event;
    this.setState({ user });
  }
  // PassMailInput(event) {
  //   const { user } = this.state;
  //   user.passmail = event;
  //   this.setState({ user });
  // }
  UnameInput = (event) => {
    const { user } = this.state;
    user.name = event;
    this.setState({ user });
  }
  PassInput = (event) => {
    const { user } = this.state;
    user.password = event;
    this.setState({ user });
  }
  RepeatPassInput = (event) => {
    const { user } = this.state;
    user.repassword = event;
    this.setState({ user });
  }
  TelphoneInput = (event) => {
    const { user } = this.state;
    user.telphone = event;
    this.setState({ user });
  }
  GenderInput = (event) => {
    const { user } = this.state;
    user.gender = event.value;
    this.setState({ user });
  }
  setStateItem1 = () => {
    const { item1 } = this.state
    this.setState({ item1: !item1 })
  }
  get FormBody() {
    const { activeNow, date, item1, user, } = this.state
    activeNow < 2 &&
      this.setState({ activeNow: activeNow + 1, date: new Date('2000') })
    let DataDay = this.DataDay()
    let DataMo = this.DataMo()
    let DataYear = this.DataYear()
    var day = new Date(date).getDate()
    var month = new Date(date).getMonth();
    var year = new Date(date).getFullYear();
    var months_thai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
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
      <Form
        ref="form"
        onSubmit={this.getData.bind(this)}>
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
          onChangeText={this.EmailInput.bind(this)}
          style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
          errorStyle={{
            container: {
              bottom: -10,
              left: 4,
              position: 'absolute'
            },
            text: {
              color: 'red'
            },
            underlineValidColor: 'gray',
            underlineInvalidColor: 'red'
          }} />
        <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          รหัสยืนยันผ่านอีเมล</Text>
        <TextValidator
          name="pass"
          label="text"
          type="text"
          value={user.passmail}
          maxLength={6}
          onChangeText={this.PassMailInput.bind(this)}
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
          }} />
        <View style={stylesLogin.Countdownstyle}>
          <Text style={[stylesLogin.CountdownstyleSubmit, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
            ส่ง</Text>
        </View>
        <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          ชื่อ</Text>
        <TextValidator
          name="name"
          label="text"
          validators={['required', 'isString']}
          errorMessages={['กรุณากรอกชื่อ', 'กรุณากรอกชื่อให้ถูกต้อง']}
          type="text"
          value={user.name}
          onChangeText={this.UnameInput.bind(this)}
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
          }} />
        {/* <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          รหัสผ่าน</Text>
        <TextValidator
          name="password"
          label="text"
          validators={['required', 'isString', 'minStringLength:6']}
          errorMessages={['กรุณากรอกรหัสผ่าน', 'กรุณากรอกรหัสผ่านให้ถูกต้อง', 'กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัว']}
          type="text"
          secureTextEntry
          value={user.password}
          onChangeText={this.PassInput.bind(this)}
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
          }} />
        <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          ยืนยันรหัสผ่าน</Text>
        <TextValidator
          name="repassword"
          label="text"
          validators={['isPasswordMatch', 'required',]}
          errorMessages={['รหัสผ่านไม่ตรงกัน', 'กรุณายืนยันรหัสผ่าน',]}
          type="text"
          secureTextEntry
          value={user.repassword}
          onChangeText={this.RepeatPassInput.bind(this)}
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
          }} /> */}
        <Text style={[stylesLogin.Login_Box_Textlabel, stylesFont.FontSize5, stylesFont.FontFamilyBold]}>
          หมายเลขโทรศัพท์</Text>
        <TextValidator
          name="telphone"
          label="text"
          validators={['required',]}
          errorMessages={['กรุณากรอกหมายเลขโทรศัพท์',]}
          type="text"
          value={user.telphone}
          onChangeText={this.TelphoneInput.bind(this)}
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
          }} />
        <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
          <View style={stylesMain.FlexRow}>
            <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
              <ModalDropdown
                options={DataDay}
                style={[stylesMain.ItemCenterVertical]}
                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: 70, textAlign: 'center' }]}
                renderButtonText={this.getDataDaySet.bind(this)}>
                <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: 70 }]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
                    width: 70, textAlign: 'center', marginLeft: -10, marginRight: -10
                  }]}>
                    {day}</Text>
                  <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
                </View>
              </ModalDropdown>
            </View>
            <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
              <ModalDropdown
                options={DataMo}
                style={[stylesMain.ItemCenterVertical]}
                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: 120, textAlign: 'center' }]}
                renderButtonText={this.getDataDay.bind(this)}>
                <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: 120 }]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
                    width: 120, textAlign: 'center', marginLeft: -10, marginRight: -10
                  }]}>
                    {months_thai[month]}</Text>
                  <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
                </View>
              </ModalDropdown>
            </View>
            <View style={stylesLogin.DateBoxBody}>
              <ModalDropdown
                options={DataYear}
                style={[stylesMain.ItemCenterVertical]}
                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: 80, textAlign: 'center' }]}
                renderButtonText={this.getDataMo.bind(this)}>
                <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: 80 }]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
                    width: 80, textAlign: 'center', marginLeft: -10, marginRight: -10
                  }]}>
                    {year}</Text>
                  <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
                </View>
              </ModalDropdown>
            </View>
          </View>
        </View>
        <View style={stylesLogin.DataGenderBox}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
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
              textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
                marginLeft: 12,
              }]}
              activeColor='#111'
              circleSize={15}
              selectedBtn={this.GenderInput.bind(this)} />
          </View>
        </View>
        <View style={stylesLogin.RegisterScreen_CheckBox}>
          <CheckBox
            checked={item1}
            onPress={() => this.setStateItem1()} />
          <View style={stylesLogin.RegisterScreen_Check_Box}>
            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ฉันยอมรับเงื่อนไขของ FIN ข้อตกลงการใช้งาน และยินยอมดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน นโยบายส่วนตัว</Text>
          </View>
        </View>
        <View style={[stylesMain.ItemCenter, { marginBottom: 10 }]}>
          <TouchableOpacity activeOpacity={
            item1 == true ?
              0.2 :
              1
          }
            onPress={
              item1 == true ?
                () => this.handleSubmit() :
                null
            }>
            <View style={[stylesLogin.Login_Box_Text_B, {
              backgroundColor:
                item1 == true ?
                  mainColor :
                  '#ECECEC'
            }]}>
              <Text style={[stylesLogin.Login__Text, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical]}>
                สมัครสมาชิก</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Form>
    )
  }
  render() {
    return (
      <View style={stylesLogin.Login_Box}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF', }]}>สมัครสมาชิก</Text>
        <View style={stylesLogin.RegisterScreen_Box_Login}>
          {this.FormBody}
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Register
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: false,
    };
  }
  setStateItem1 = () => {
    const { item1 } = this.state
    this.setState({ item1: !item1 })
  }
  render() {
    const { item1 } = this.state
    return (
      <View style={[stylesMain.ItemCenter, { marginBottom: 10 }]}>
        <View style={[stylesMain.FlexRow, { marginTop: 10, }]}>
          <View style={{ height: 50, width: 250, marginTop: 20, marginLeft: 20, }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
              ฉันต้องการรับข้อเสนอและโปรโมชันสุดพิเศษจาก FIN</Text>
          </View>
          <CheckBox
            size={30}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item1}
            onPress={() => this.setStateItem1()} />
        </View>
        <View>
          <Text style={[stylesFont.FontCenter, stylesFont.FontSize5, stylesFont.FontFamilyText, { color: '#FFFFFF', marginTop: -10 }]}>
            ---------- สมัครสมาชิกด้วยช่องทางอื่น ----------</Text>
        </View>
        <View style={stylesLogin.Register_Box_Button}>
          <TouchableOpacity>
            <View style={{ marginLeft: 10, width: 140, height: 50 }}>
              <FastImage
                style={stylesLogin.Register_Box_image}
                source={require('../../icon/logoutappfacebook.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ marginLeft: 10, width: 140, height: 50 }}>
              <FastImage
                style={stylesLogin.Register_Box_image}
                source={require('../../icon/logoutapp14.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}