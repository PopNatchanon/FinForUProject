///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import DatePicker from 'react-native-datepicker';
import RNFetchBlob from 'rn-fetch-blob'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesLogin from '../../../style/stylesLoginScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, } from '../../MainScreen';
import { GetData, GetServices, GetServicesBlob, NavigationNavigateScreen } from '../../../customComponents/Tools';
import { Seller_SettingImage } from '../../src_Seller/Seller_Profile_Edit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData,
  getFetchData: state.singleFetchDataFromService,
  activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Setting_Topic);
function Setting_Topic(props) {
  const { route } = props;
  const selectedIndex = route.params?.selectedIndex;
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  let getSource = (value) => {
    setActiveGetSource(false);
    setCokie(value.keycokie);
    setCurrentUser(value.currentUser);
  };
  useEffect(() => {
    activeGetSource && GetServices({ getCokie: true, getUser: true, getSource: value => getSource(value), });
  }, [activeGetSource]);
  let PathList = () => {
    switch (selectedIndex) {
      case 0:
        return <Edit_Profile {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      case 1:
        return <Edit_Address {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
      case 2:
        return <Edit_Chat {...props} />;
      case 3:
        return <View>
          <Edit_Bell {...props} />
        </View>;
      case 4:
        return <View>
          <Language_Screen {...props} />
        </View>;
      case 5:
        return <View>
          <Edit_Setting_Bell {...props} />
        </View>;
      case 6:
        return <View>
          <Edit_Setting_Email {...props} />
        </View>;
      case 7:
        return <Edit_Pass {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />;
    };
  };
  return <SafeAreaView style={[stylesMain.SafeAreaView]}>
    {PathList()}
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
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
      activeGetServices2: false,
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
    const { currentUser } = this.props
    const { Birth_day, Gender, Name, path, Phone } = this.state
    var o = path && path.path.split('/')
    var dataBody2 = []
    dataBody2.push({ name: 'id_customer', data: currentUser.id_customer })
    dataBody2.push({ name: 'first_name', data: Name })
    dataBody2.push({ name: 'gender', data: Gender ? 'male' : 'female' })
    path && dataBody2.push({ name: 'file', filename: o[o.length - 1], type: path.mime, data: RNFetchBlob.wrap(path.path) })
    dataBody2.push({ name: 'birth_day', data: Birth_day })
    dataBody2.push({ name: 'telephone', data: Phone })
    this.setState({ activeGetServices2: true, dataBody2 })
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
        <TouchableOpacity onPress={() => this.SaveName()}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  GenderSheetBody() {
    const { InputGender } = this.state
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
            <IconFontisto name='male' size={20} style={{ marginTop: 15, marginLeft: -10, color: mainColor }} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15, marginLeft: 10 }]}>ชาย</Text>
            <CheckBox
              size={25}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={!InputGender}
              onPress={() => this.setState({ InputGender: false })}
            />
            <IconFontisto name='female' size={20} style={{ marginTop: 15, marginLeft: -10, color: '#ff1ac6' }} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15, marginLeft: 10 }]}>หญิง</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.SaveGender()}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  BirthdaySheetBody() {
    const { InputBirth_day } = this.state
    // currentUser.map((item) => {
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
              format="DD-MM-YYYY"
              minDate="01-12-1920"
              maxDate="01-06-2020"
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
        <TouchableOpacity onPress={() => this.SaveBirth_day()}>
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
        <TouchableOpacity onPress={() => this.SavePhone()}>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  setCurrentUser = () => {
    const { dataSevice } = this.state
    dataSevice && dataSevice.list_profile.map((value) => {
      var checked
      if (value.gender == 'male') {
        checked = true
      } else {
        checked = false
      }
      const bday = new Date(value.date_of_birth)
      var dob = `${bday.getDate()}-${(bday.getMonth() + 1)}-${bday.getFullYear()}`
      this.setState({
        Name: value.name, InputName: value.name,
        Gender: checked, InputGender: checked,
        Phone: value.telphone, InputPhone: value.telphone,
        Birth_day: dob, Inputbirth_day: dob,
        image_path: value.image_path, image: value.image
      })
    })
  }
  getData = (dataSevice) => {
    this.setState({ activeGetServices: false, dataSevice })
  }
  getData2 = (dataService2) => {
    const { navigation } = this.props
    this.setState({ activeGetServices2: false, dataService2 })
    navigation.state.params.getDataSource(dataService2);
    navigation.goBack()
  }
  sendImageProfile = (value) => {
    this.setState({ path: value })
  }
  render() {
    const { activeGetSource, cokie, currentUser, navigation } = this.props
    const {
      activeGetServices, activeGetServices2, Birth_day, dataBody: dataBody2, Gender, image, image_path, Name, Phone,
    } = this.state
    const uri = `${finip}/profile/profile_mobile`
    var dataBody = {
      id_customer: currentUser ? currentUser.id_customer : '',
    }
    const uri2 = `${finip}/profile/update_profile_mobile`
    currentUser != null && Name == null && this.setCurrentUser()
    activeGetSource == false && activeGetServices && GetServices({ uriPointer: uri, dataBody: dataBody, Authorization: cokie, getDataSource: this.getData.bind(this), })
    activeGetServices2 && GetServicesBlob({ FormData: true, uriPointer: uri2, dataBody: dataBody2, Authorization: cokie, getDataSource: this.getData2.bind(this), })
    return (
      <>
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
        <AppBar1 {...this.props} backArrow titleHead='แก้ไขโปรไฟล์' />
        <ScrollView>
          <Seller_SettingImage image_path={image_path} image={image} sendImageProfile={this.sendImageProfile.bind(this)} />
          <View style={{ marginTop: 20, height, }}>
            <TouchableOpacity onPress={() => { (this.setState({ InputName: Name }), this.NameSheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    ชื่อ-นามสกุล
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
              </View></TouchableOpacity>
            <TouchableOpacity onPress={() => NavigationNavigateScreen({
              goScreen: 'Setting_Topic', setData: { selectedIndex: 7 }, navigation
            })}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    เปลี่ยนรหัสผ่าน
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { (this.setState({ InputGender: Gender }), this.GenderSheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    เพศ
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { (this.setState({ InputBirth_day: Birth_day }), this.BirthdaySheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    วันเกิด
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { (this.setState({ InputPhone: Phone }), this.Phone_numberSheet.open()); }}>
              <View style={stylesProfileTopic.BoxTopic}>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                    โทรศัพท์
            </Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ alignItems: 'center', height: 40 }}>
          <TouchableOpacity TouchableOpacity onPress={() => this.SaveProfile()}>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Pass
export class Edit_Pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGetServices: false,
      current_password: '',
      new_password: '',
      confirm_password: '',
    };
  }
  setStateCurrent_Password = (current_password) => {
    this.setState({ current_password })
  }
  setStateNew_Password = (new_password) => {
    this.setState({ new_password })
  }
  setStateConfirm_Password = (confirm_password) => {
    this.setState({ confirm_password })
  }
  getData = (dataSevice) => {
    const { navigation, } = this.props
    dataSevice.status_cahnge == 'Incomplete' && alert(dataSevice.Massage)
    dataSevice.status_cahnge == 'Complete' && ([alert(dataSevice.Massage), navigation.goBack()])
    this.setState({ activeGetServices: false, dataSevice })
  }
  render() {
    const { activeGetSource, cokie, currentUser, navigation, } = this.props
    const { activeGetServices, current_password, new_password, confirm_password, } = this.state
    const uri = `${finip}/profile/change_customer_password`
    var dataBody = {
      id_customer: currentUser ? currentUser.id_customer : '',
      current_password,
      new_password,
      confirm_password,
    }
    activeGetSource == false && activeGetServices && GetServices({ uriPointer: uri, dataBody: dataBody, Authorization: cokie, getDataSource: this.getData.bind(this), })
    return (
      <>
        <AppBar1 {...this.props} backArrow titleHead='เปลี่ยนรหัสผ่าน' />
        <ScrollView>
          <View style={stylesProfileTopic.Edit_Pass}>
            <View style={{ width: '80%' }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5 }]}>รหัสผ่านปัจจุบัน</Text>
              <View style={stylesProfileTopic.Edit_Pass_TextInput}>
                <TextInput
                  style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '80%', height: 55 }]}
                  secureTextEntry
                  placeholder=""
                  maxLength={50}
                  value={current_password}
                  onChangeText={this.setStateCurrent_Password.bind(this)} />
                <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
              </View>
              {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>กรุณาระบุรหัสผ่านใหม่ด่านล่าง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BFBFBF', marginLeft: 10, }]}>
                ประกอบไปด้วยตัวเลขและตัวอักษร อย่างน้อย 6 อักษร</Text> */}
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>รหัสผ่านใหม่</Text>
              <View style={stylesProfileTopic.Edit_Pass_TextInput}>
                <TextInput
                  style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '80%', height: 55 }]}
                  secureTextEntry
                  placeholder=""
                  maxLength={50}
                  value={new_password}
                  onChangeText={this.setStateNew_Password.bind(this)} />
                <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
              </View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>พิมพ์รหัสผ่านใหม่อีกครั้ง</Text>
              <View style={stylesProfileTopic.Edit_Pass_TextInput}>
                <TextInput
                  style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '80%', height: 55 }]}
                  secureTextEntry
                  placeholder=""
                  maxLength={50}
                  value={confirm_password}
                  onChangeText={this.setStateConfirm_Password.bind(this)} />
                <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { this.setState({ activeGetServices: true }) }}>
            <View style={[stylesProfileTopic.Edit_Profile_Button_Save, { backgroundColor: current_password != '' && new_password != '' && confirm_password != '' ? mainColor : '#CECECE' }]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เปลี่ยนรหัสผ่าน</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
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
    CookieManager.get(`${finip}/auth/login_customer`)
      .then((res) => {
        var keycokie = res.token
        this.setState({ keycokie })
      });
  }
  getData = (dataService) => {
    this.setState({ dataService, activeReset: false })
  }
  getData2 = (dataService2) => {
    this.setState({ dataService2, activeReset: true })
  }
  render() {
    const { currentUser, navigation, route } = this.props
    const { activeReset, dataService, keycokie } = this.state
    const no_invoice = route.params?.no_invoice
    const type = route.params?.type
    const type_special = route.params?.type_special
    var uri = `${finip}/${(type == 'select' ? 'bill/bill_list' : 'profile/my_address')}`;
    var dataBody = type == 'select' ?
      {
        id_customer: currentUser && currentUser.id_customer,
        no_invoice: no_invoice,
      } : {
        id_customer: currentUser && currentUser.id_customer,
      };
    currentUser && keycokie && currentUser.id_customer && activeReset && GetServices({ uriPointer: uri, dataBody, Authorization: keycokie, getDataSource: this.getData.bind(this) })
    return (
      <View style={{ flex: 1, height: '100%' }}>
        <AppBar1 {...this.props} backArrow titleHead={type_special == 'tax' ? 'ที่อยู่ในใบกำกับภาษี' : 'ที่อยู่ของฉัน'} />
        <ScrollView style={{ height: 1000 }}>
          {
            dataService && dataService.list_address && activeReset == false && dataService.list_address.map((value, index) => {
              return <Address_Customar {...this.props} dataService={value} index={index} key={index} type={type}
                type_special={type_special} updateData2={this.getData2.bind(this)} />
            })
          }
        </ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({
            goScreen: 'Customer_account', setData: { type_special, updateData2: this.getData2.bind(this), }, navigation
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
export let Address_Customar = (props) => {
  const { dataService, index, navigation, type, type_special, updateData2 } = props;
  let returnValue = (value) => {
    navigation.state.params.updateData(value);
    navigation.goBack();
  };
  return <TouchableOpacity key={index} onPress={type == 'select' ?
    () => returnValue(dataService.id_address) :
    () => NavigationNavigateScreen({ goScreen: 'Customer_account', setData: { type: 'edit', type_special, id_address: dataService.id_address, updateData2: value => updateData2(value), }, navigation })}>
    <View style={stylesProfileTopic.Address_Customar}>
      <View style={stylesProfileTopic.Address_Customar_Box}>
        <View style={stylesMain.FlexRow}>
          <IconEvilIcons name='location' size={30} color={mainColor} />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
        </View>
        {dataService.main_address == 1 && <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>[ค่าเริ่มต้น]</Text>}
      </View>
      <View style={{ marginLeft: 50, marginBottom: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>{`${dataService.customer_name} | ${dataService.telephone_number}`}</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8, width: '90%', }]}>{dataService.address}</Text>
      </View>
    </View>
  </TouchableOpacity>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Chat
export let Edit_Chat = (props) => {
  const [settingChat, setSettingChat] = useState({ publicChat: true });
  return <>
    <AppBar1 {...props} backArrow titleHead='ตั้งค่าการแชท' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={{ margin: 10 }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อนุญาตให้ทำการแชทจากหน้าโปรไฟล์</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#CECECE' }]}>เปิดใช้งานเพื่ออนุญาตให้ผู้ใช้สามารถพูดคุยผ่านหน้าโปรไฟล์ได้</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingChat.publicChat} onPress={() => setSettingChat({ ...settingChat, publicChat: !settingChat.publicChat })} />
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Bell
export let Edit_Bell = (props) => {
  const { navigation, } = props;
  return <SafeAreaView>
    <AppBar1 {...props} backArrow titleHead='ตั้งค่าการแจ้งเตือน' />
    <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Setting_Topic', setData: { selectedIndex: 5 }, navigation })}>
      <View style={stylesProfileTopic.BoxTopic}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือน</Text>
        </View>
        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Setting_Topic', setData: { selectedIndex: 6 }, navigation })}>
      <View style={stylesProfileTopic.BoxTopic}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือนทาง E-mail</Text>
        </View>
        <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color={mainColor} />
      </View>
    </TouchableOpacity>
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Language_Screen
export let Language_Screen = (props) => {
  const [settingLanguage, setSettingLanguage] = useState('th');
  return <SafeAreaView>
    <AppBar1 {...props} backArrow titleHead='ภาษา' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={settingLanguage == 'en'} onPress={() => setSettingLanguage('en')} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>English</Text>
      </View>
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={settingLanguage == 'th'} onPress={() => setSettingLanguage('th')} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ไทย</Text>
      </View>
    </View>
    <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 620, }}>
      <TouchableOpacity>
        <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Bell
export let Edit_Setting_Bell = (props) => {
  const [settingAlert, setSettingAlert] = useState({ alertOnMobile: true, chat: true, promotion: true, updateBuy: true, });
  return <SafeAreaView>
    <AppBar1 {...props} backArrow titleHead='การแจ้งเตือน' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือน</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.alertOnMobile} onPress={() => setSettingAlert({ ...settingAlert, alertOnMobile: !settingAlert.alertOnMobile })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.updateBuy} onPress={() => setSettingAlert({ ...settingAlert, updateBuy: !settingAlert.updateBuy })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>พูดคุย</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.chat} onPress={() => setSettingAlert({ ...settingAlert, chat: !settingAlert.chat })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>โปรโมชั่น</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingAlert.promotion} onPress={() => setSettingAlert({ ...settingAlert, promotion: !settingAlert.promotion })} />
    </View>
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Setting_Email
export let Edit_Setting_Email = (props) => {
  const [settingEmail, setSettingEmail] = useState({ alertEmail: true, mailNews: true, updateBuy: true, });
  return <SafeAreaView>
    <AppBar1 {...props} backArrow titleHead='การแจ้งเตือนทางE-mail' />
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>การแจ้งเตือนทาง E-mail</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingEmail.alertEmail} onPress={() => setSettingEmail({ ...settingEmail, alertEmail: !settingEmail.alertEmail })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>อัพเดทคำสั่งซื้อ</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingEmail.updateBuy} onPress={() => setSettingEmail({ ...settingEmail, updateBuy: !settingEmail.updateBuy })} />
    </View>
    <View style={stylesProfileTopic.BoxTopic}>
      <View style={[stylesMain.FlexRow, { marginTop: 5 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>จดหมายข่าว</Text>
      </View>
      <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={settingEmail.mailNews} onPress={() => setSettingEmail({ ...settingEmail, mailNews: !settingEmail.mailNews })} />
    </View>
  </SafeAreaView>;
};