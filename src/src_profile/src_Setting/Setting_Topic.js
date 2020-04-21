///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import DatePicker from 'react-native-datepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesLogin from '../../../style/stylesLoginScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, GetData } from '../../MainScreen';
import { GetServices } from '../../tools/Tools';
import { Seller_SettingImage } from '../../src_Seller/Seller_Profile_Edit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Setting_Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    const { currentUser } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      currentUser !== nextState.currentUser
    ) {
      return true
    }
    return false
  }
  componentDidMount() {
    this.getDataAsync()
  }
  getDataAsync = async () => {
    const currentUser = await AsyncStorage.getItem('@MyKey')
    this.setState({ currentUser: JSON.parse(currentUser) })
  }
  PathList() {
    const { navigation, } = this.props
    const { currentUser } = this.state
    const selectedIndex = navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <Edit_Profile navigation={navigation} currentUser={currentUser} />
          </View>
        )
      case 1:
        return (
          <Edit_Address navigation={navigation} currentUser={currentUser} />
        )
      case 2:
        return (
          <Edit_Chat navigation={navigation} />
        )
      case 3:
        return (
          <View>
            <Edit_Bell navigation={navigation} />
          </View>
        )
      case 4:
        return (
          <View>
            <Language_Screen navigation={navigation} />
          </View>
        )
      case 5:
        return (
          <View>
            <Edit_Setting_Bell navigation={navigation} />
          </View>
        )
      case 6:
        return (
          <View>
            <Edit_Setting_Email navigation={navigation} />
          </View>
        )
      case 7:
        return (
          <View>
            <Edit_Pass navigation={navigation} />
          </View>
        )
    }
  }
  render() {
    const { navigation, } = this.props
    return (
      <SafeAreaView style={[stylesMain.SafeAreaView]}>
        {this.PathList()}
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Profile
export class Edit_Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNow: 0,
      checked: true,
      currentUser: [],
      date: "",
      activeGetServices: true,
      activeGetSource: true,
      // date: new Date(),
      // DataDay: [],
      // DataMo: [],
      // DataYear: [],
    };
  }
  componentDidMount() {
    this.getDataYear()
    this.getDataMo(new Date())
    this.getDataDay(new Date())
    this.getDataAsync()
  }
  getDataAsync = async () => {
    var currentUser = []
    const data = await AsyncStorage.getItem('@MyKey')
    currentUser.push(JSON.parse(data))
    this.setState({ currentUser })
  }
  getDataYear() {
    var dates = new Date().getFullYear();
    var box = [];
    for (var min = 1950; min <= parseInt(dates); min = min + 1) {
      box.push(String(min))
    }
    this.setState({ DataYear: box, date: new Date() })
  }
  getDataMo(itemValue) {
    const { date } = this.state
    if (itemValue != null) {
      const item = String(itemValue)
      this.setState({ date: new Date(date).setFullYear(item) })
      var box = [];
      for (var min = 0; min <= 11; min = min + 1) {
        box.push(String(min))
      }
      this.setState({ DataMo: box })
    }
  }
  getDataDay(itemValue) {
    const { date } = this.state
    if (itemValue != null) {
      const item = String(itemValue)
      this.setState({ date: new Date(date).setMonth(item) })
      var box = [];
      for (var min = 1; min <= 31; min = min + 1) {
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

  SaveProfile = async () => {
    const uri = finip + '/profile/update_profile_mobile'
    const dataBody = {
      id_customer: this.props.currentUser.id_customer,
      name: this.state.Name,
      gender: this.state.checked == true ? 'male' : 'female',
      file: this.props.currentUser.image,
      birth_day: this.props.currentUser.birth_day
    }
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    })
      .then((response) => response.json())
      .then((responseJson) => {
      })
      .catch((error) => {
        console.error(error);
      })
  }
  SaveName = async () => {
    const { InputName } = this.state
    this.setState({ Name: InputName })
    this.NameSheet.close()
  }
  SaveGender = async () => {
    const { InputGender } = this.state
    this.setState({ Gender: InputGender })
    this.GenderSheet.close()
  }
  SaveBirth_day = async () => {
    const { InputBirth_day } = this.state
    this.setState({ Birth_day: InputBirth_day })
    this.BirthdaySheet.close()
  }
  SavePhone = async () => {
    const { InputPhone } = this.state
    this.setState({ Phone: InputPhone })
    this.Phone_numberSheet.close()
  }
  NameSheetBody() {
    const { InputName } = this.state
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อผู้ใช้</Text>
          <View style={stylesProfileTopic.Edit_Profile_Box}>
            <TextInput
              fontSize={15}
              placeholder="ชื่อ"
              maxLength={30}
              value={InputName}
              onChangeText={(InputName) => this.setState({ InputName })}
            />
          </View>
        </View>
        <TouchableOpacity onPress={this.SaveName.bind(this)}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  GenderSheetBody() {
    const { InputGender } = this.state
    console.log(this.state.InputGender)
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              size={25}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={InputGender}
              onPress={() => this.setState({ InputGender: true })}
            />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15 }]}>ชาย</Text>
            <CheckBox
              size={25}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={!InputGender}
              onPress={() => this.setState({ InputGender: false })}
            />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15 }]}>หญิง</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.SaveGender.bind(this)}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  BirthdaySheetBody() {
    const { InputBirth_day } = this.state
    const { activeNow } = this.state
    const { currentUser } = this.state
    console.log(this.state.birth_day)
    // currentUser.map((item) => {
    //   console.log(item.date_of_birth)
    //   activeNow < 2 ?
    //     this.setState({ activeNow: activeNow + 1, birth_day: item.date_of_birth }) :
    //     null
    // })
    // const { date, } = this.state;
    // let DataDay = this.DataDay()
    // let DataMo = this.DataMo()
    // let DataYear = this.DataYear()
    // var day = new Date(date).getDate()
    // var month = new Date(date).getMonth();
    // var year = new Date(date).getFullYear();
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> วันเกิด</Text>
          <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
            <DatePicker
              style={{ width: 300 }}
              date={InputBirth_day}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1920-12-01"
              maxDate="2020-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                // dateInput: {
                //   marginLeft: 36
                // }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(InputBirth_day) => { this.setState({ InputBirth_day }) }}
            />
            {/* <View style={stylesMain.FlexRow}>
              <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
                <Picker
                  selectedValue={String(day)}
                  style={stylesMain.BoxProduct1Image}
                  itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize7, { backgroundColor: '#fff' }]}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ date: new Date(date).setDate(itemValue) })
                  }}>
                  {DataDay}
                </Picker>
              </View>
              <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
                <Picker
                  selectedValue={String(month)}
                  style={stylesMain.BoxProduct1Image}
                  itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize7, { backgroundColor: '#fff' }]}
                  onValueChange={(itemValue, itemIndex) => {
                    this.getDataDay(itemValue)
                  }}>
                  {DataMo}
                </Picker>
              </View>
              <View style={stylesLogin.DateBoxBody}>
                <Picker
                  selectedValue={String(year)}
                  style={stylesMain.BoxProduct1Image}
                  itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize7, { backgroundColor: '#fff' }]}
                  onValueChange={(itemValue, itemIndex) => {
                    this.getDataMo(itemValue)
                  }}>
                  {DataYear}
                </Picker>
              </View>
            </View> */}
          </View>
        </View>
        <TouchableOpacity onPress={this.SaveBirth_day.bind(this)}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  Phone_numberSheetBody() {
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เบอร์โทรศัพท์</Text>
          <View style={stylesProfileTopic.Edit_Profile_Box}>
            <TextInput
              fontSize={15}
              placeholder="เบอร์โทรศัพท์"
              maxLength={10}
              value={this.state.InputPhone}
              onChangeText={(InputPhone) => this.setState({ InputPhone })}
            />
          </View>
        </View>
        <TouchableOpacity onPress={this.SavePhone.bind(this)}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  setCurrentUser = () => {
    const { dataSevice } = this.state
    dataSevice && dataSevice.list_profile.map((item) => {
      console.log(item)
      var checked
      if (item.gender == 'male') {
        checked = true
      } else {
        checked = false
      }
      this.setState({
        Name: item.name, InputName: item.name, checked,
        Gender: checked, InputGender: checked,
        Phone: item.telphone, InputPhone: item.telphone,
        birth_day: item.date_of_birth, Inputbirth_day: item.date_of_birth
      })
    })
  }
  getSource = (value) => {
    this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie })
  }
  getData = (dataSevice) => {
    this.setState({ activeGetServices: false, dataSevice })
  }
  render() {
    const { currentUser, Name, Phone, Gender, birth_day, activeGetSource, activeGetServices, cokie, } = this.state
    const uri = finip + '/profile/profile_mobile'

    var dataBody = {
      id_customer: currentUser ? currentUser.id_customer : '',
    }
    currentUser != null && Name == null &&
      this.setCurrentUser()
    console
    return (
      <View>
        {/* ชื่อ-นามสกุล */}
        <BottomSheet
          ref={ref => {
            this.NameSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}>
          {this.NameSheetBody()}
        </BottomSheet>
        {/* เพศ */}
        <BottomSheet
          ref={ref => {
            this.GenderSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}>
          {this.GenderSheetBody()}
        </BottomSheet>
        {/* วันเกิด */}
        <BottomSheet
          ref={ref => {
            this.BirthdaySheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}>
          {this.BirthdaySheetBody()}
        </BottomSheet>
        {/* เบอร์โทรศัพท์ */}
        <BottomSheet
          ref={ref => {
            this.Phone_numberSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}>
          {this.Phone_numberSheetBody()}
        </BottomSheet>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขโปรไฟล์' />
        {[
          activeGetSource == false && activeGetServices == true &&
          <GetServices key='GetServices' uriPointer={uri} dataBody={dataBody} Authorization={cokie}
            showConsole={'getDataSource'} getDataSource={this.getData.bind(this)} />,
          activeGetSource == true &&
          <GetData key='GetData' getCokie={true} getUser={true} getSource={this.getSource.bind(this)} />
        ]}
        <Seller_SettingImage />
        <ScrollView>
          <View style={{ marginTop: 20, }}>
            <TouchableOpacity onPress={() => { (this.setState({ InputName: Name }), this.NameSheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    ชื่อ-นามสกุล
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
              </View></TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push('Setting_Topic', { selectedIndex: 7 })}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    เปลี่ยนรหัสผ่าน
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { (this.setState({ InputGender: Gender }), this.GenderSheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    เพศ
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { (this.setState({ InputBirth_day: birth_day }), this.BirthdaySheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    วันเกิด
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { (this.setState({ InputPhone: Phone }), this.Phone_numberSheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    โทรศัพท์
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
              </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', }}>
              {/* <TouchableOpacity TouchableOpacity onPress={this.SaveProfile.bind(this)}> */}
              <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
              </View>
              {/* </TouchableOpacity> */}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Pass
export class Edit_Pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    const { Pass1, Pass2, Pass3, } = this.props
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      Pass1 !== nextState.Pass1 || Pass2 !== nextState.Pass2 || Pass3 !== nextState.Pass3
    ) {
      return true
    }
    return false
  }
  setStatePass1 = (Pass1) => {
    this.setState({ Pass1 })
  }
  setStatePass2 = (Pass2) => {
    this.setState({ Pass2 })
  }
  setStatePass3 = (Pass3) => {
    this.setState({ Pass3 })
  }
  render() {
    const { navigation, } = this.props
    const { Pass1, Pass2, Pass3, } = this.props
    return (
      <View>
        <AppBar1 backArrow navigation={navigation} titleHead='เปลี่ยนรหัสผ่าน' />
        <View style={stylesProfileTopic.Edit_Pass}>
          <View style={{ width: '80%' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>รหัสผ่านปัจจุบัน</Text>
            <View style={stylesProfileTopic.Edit_Pass_TextInput}>
              <TextInput
                fontSize={15}
                placeholder=""
                maxLength={50}
                value={Pass1}
                onChangeText={this.setStatePass1.bind(this, Pass1)} />
              <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>กรุณาระบุรหัสผ่านใหม่ด่านล่าง</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BFBFBF', marginLeft: 10, }]}>
              ประกอบไปด้วยตัวเลขและตัวอักษร อย่างน้อย 6 อักษร</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10, }]}>รหัสผ่านใหม่</Text>
            <View style={stylesProfileTopic.Edit_Pass_TextInput}>
              <TextInput
                fontSize={15}
                placeholder=""
                maxLength={50}
                value={Pass2}
                onChangeText={this.setStatePass2.bind(this, Pass2)} />
              <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10, }]}>พิมพ์รหัสผ่านใหม่อีกครั้ง</Text>
            <View style={stylesProfileTopic.Edit_Pass_TextInput}>
              <TextInput
                fontSize={15}
                placeholder=""
                maxLength={50}
                value={Pass3}
                onChangeText={this.setStatePass3.bind(this, Pass3)} />
              <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 410, }}>
          <TouchableOpacity>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เปลี่ยนรหัสผ่าน</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Address
export class Edit_Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeReset: true,
    };
  }
  componentDidMount() {
    CookieManager.get(finip + '/auth/login_customer')
      .then((res) => {
        var keycokie = res.token
        this.setState({ keycokie })
      });
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  getData = (dataService) => {
    this.setState({ dataService, activeReset: false })
  }
  getData2 = (dataService2) => {
    this.setState({ dataService2, activeReset: true })
  }
  render() {
    const { currentUser, navigation } = this.props
    const { activeReset, dataService, keycokie } = this.state
    const no_invoice = navigation.getParam('no_invoice')
    const type = navigation.getParam('type')
    const type_special = navigation.getParam('type_special')
    var uri = [finip,
      type == 'select' ?
        '/bill/bill_list' :
        'profile/my_address'
    ].join('/');
    var dataBody = type == 'select' ?
      {
        id_customer: currentUser && currentUser.id_customer,
        no_invoice: no_invoice,
      } : {
        id_customer: currentUser && currentUser.id_customer,
      };

    return (
      <View style={{ flex: 1, height: '100%' }}>
        {
          currentUser && keycokie && currentUser.id_customer && activeReset == true &&
          <GetServices uriPointer={uri} dataBody={dataBody} Authorization={keycokie}
            getDataSource={this.getData.bind(this)} key={'zzz'} />
        }
        <AppBar1 backArrow navigation={navigation} titleHead={type_special == 'tax' ? 'ที่อยู่ในใบกำกับภาษี' : 'ที่อยู่ของฉัน'} />
        <ScrollView style={{ height: 1000 }}>
          {
            dataService && dataService.list_address && activeReset == false &&
            dataService.list_address.map((value, index) => {
              return <Address_Customar dataService={value} index={index} key={index} navigation={navigation} type={type}
                type_special={type_special} updateData2={this.getData2.bind(this)} />
            })
          }
        </ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Customer_account', {
            type_special, updateData2: this.getData2.bind(this),
          })}>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Address_Customar
export class Address_Customar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getData2 = (dataService2) => {
    const { updateData2 } = this.props
    updateData2(dataService2)
  }
  returnValue = (value) => {
    const { navigation } = this.props
    navigation.state.params.updateData(value);
    navigation.goBack();
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    const { dataService, index, type, type_special } = this.props
    return (
      <TouchableOpacity key={index} onPress={
        type == 'select' ?
          this.returnValue.bind(this, dataService.id_address) :
          this.navigationNavigateScreen.bind(this, 'Customer_account', {
            type: 'edit', type_special, id_address: dataService.id_address, updateData2: this.getData2.bind(this),
          })
      }>
        <View style={stylesProfileTopic.Address_Customar}>
          <View style={stylesProfileTopic.Address_Customar_Box}>
            <View style={stylesMain.FlexRow}>
              <IconEvilIcons name='location' size={30} color='#0A55A6' />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
            </View>
            {
              dataService.main_address == 1 &&
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#0A55A6' }]}>[ค่าเริ่มต้น]</Text>
            }
          </View>
          <View style={{ marginLeft: 50, marginBottom: 10, }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
              {dataService.customer_name} | {dataService.telephone_number}</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8, width: '90%', }]}>
              {dataService.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Chat
export class Edit_Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    const { item1, } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      item1 !== nextState.item1
    ) {
      return true
    }
    return false
  }
  setStateItem1 = (item1) => {
    this.setState({ item1 })
  }
  render() {
    const { navigation, } = this.props
    const { item1, } = this.state
    return (
      <>
        <AppBar1 backArrow navigation={navigation} titleHead='ตั้งค่าการแชท' />
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={{ margin: 10 }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อนุญาตให้ทำการแชทจากหน้าโปรไฟล์</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#CECECE' }]}>
              เปิดใช้งานเพื่ออนุญาตให้ผู้ใช้สามารถพูดคุยผ่านหน้าโปรไฟล์ได้</Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item1}
            onPress={this.setStateItem1.bind(this, !item1)} />
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Bell
export class Edit_Bell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    if (
      ////>nextProps
      navigation !== nextProps.navigation
      ////>nextState
    ) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    const { navigation, } = this.props
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={navigation} titleHead='ตั้งค่าการแจ้งเตือน' />
        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Setting_Topic', { selectedIndex: 5 })}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                การแจ้งเตือน
            </Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Setting_Topic', { selectedIndex: 6 })}>
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                การแจ้งเตือนทาง E-mail
            </Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Language_Screen
export class Language_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked2: true,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    const { checked, checked2 } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      checked !== nextState.checked || checked2 !== nextState.checked2
    ) {
      return true
    }
    return false
  }
  setStateChecked = (checked, checked2) => {
    this.setState({ checked, checked2 })
  }
  render() {
    const { navigation, } = this.props
    const { checked, checked2 } = this.state
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={navigation} titleHead='ภาษา' />
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              checked={checked}
              onPress={this.setStateChecked.bind(this, true, false)} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>
              English
               </Text>
          </View>
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              checked={checked2}
              onPress={this.setStateChecked.bind(this, false, true)} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>
              ไทย
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 620, }}>
          <TouchableOpacity>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Bell
export class Edit_Setting_Bell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    const { item1, item2, item3, item4 } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      item1 !== nextState.item1 || item2 !== nextState.item2 || item3 !== nextState.item3 || item4 !== nextState.item4
    ) {
      return true
    }
    return false
  }
  setStateItem1 = (item1) => {
    this.setState({ item1 })
  }
  setStateItem2 = (item2) => {
    this.setState({ item2 })
  }
  setStateItem3 = (item3) => {
    this.setState({ item3 })
  }
  setStateItem4 = (item4) => {
    this.setState({ item4 })
  }
  render() {
    const { navigation, } = this.props
    const { item1, item2, item3, item4 } = this.state
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={navigation} titleHead='การแจ้งเตือน' />
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              การแจ้งเตือน
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item1}
            onPress={this.setStateItem1.bind(this, !item1)} />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              อัพเดทคำสั่งซื้อ
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item2}
            onPress={this.setStateItem2.bind(this, !item2)} />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              พูดคุย
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item3}
            onPress={this.setStateItem3.bind(this, !item3)} />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              โปรโมชั่น
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item4}
            onPress={this.setStateItem4.bind(this, !item4)} />
        </View>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Email
export class Edit_Setting_Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, } = this.props
    const { item1, item2, item3 } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      item1 !== nextState.item1 || item2 !== nextState.item2 || item3 !== nextState.item3
    ) {
      return true
    }
    return false
  }
  setStateItem1 = (item1) => {
    this.setState({ item1 })
  }
  setStateItem2 = (item2) => {
    this.setState({ item2 })
  }
  setStateItem3 = (item3) => {
    this.setState({ item3 })
  }
  render() {
    const { navigation, } = this.props
    const { item1, item2, item3 } = this.state
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={navigation} titleHead='การแจ้งเตือนทางE-mail' />
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              การแจ้งเตือนทาง E-mail
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item1}
            onPress={this.setStateItem1.bind(this, !item1)} />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              อัพเดทคำสั่งซื้อ
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item2}
            onPress={this.setStateItem2.bind(this, !item2)} />
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
              จดหมายข่าว
             </Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={item3}
            onPress={this.setStateItem3.bind(this, !item3)} />
        </View>
      </SafeAreaView>
    );
  }
}