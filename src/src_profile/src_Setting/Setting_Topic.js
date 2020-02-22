///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
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
import { AppBar1, ExitAppModule } from '../../MainScreen';
import { StoreMe_SettingImage } from '../../src_storeMe/StoreMe_Profile_Edit';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class Setting_Topic extends Component {
  PathList() {
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <Edit_Profile navigation={this.props.navigation} />
          </View>
        )
      case 1:
        return (
          <View>
            <Edit_Address navigation={this.props.navigation} />
          </View>
        )
      case 2:
        return (
          <View>
            <Edit_Chat navigation={this.props.navigation} />
          </View>
        )
      case 3:
        return (
          <View>
            <Edit_Bell navigation={this.props.navigation} />
          </View>
        )
      case 4:
        return (
          <View>
            <Language_Screen navigation={this.props.navigation} />
          </View>
        )
      case 5:
        return (
          <View>
            <Edit_Setting_Bell navigation={this.props.navigation} />
          </View>
        )
      case 6:
        return (
          <View>
            <Edit_Setting_Email navigation={this.props.navigation} />
          </View>
        )
      case 7:
        return (
          <View>
            <Edit_Pass navigation={this.props.navigation} />
          </View>
        )
    }
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {this.PathList()}
        <ExitAppModule navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Edit_Profile
export class Edit_Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      date: new Date(),
      DataYear: [],
      DataMo: [],
      DataDay: [],
      activeNow: 0,
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
  NameSheetBody() {
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อ-นามสกุล</Text>
          <View style={stylesProfileTopic.Edit_Profile_Box}>
            <TextInput
              fontSize={15}
              placeholder="ชื่อ"
              maxLength={30}
              value={this.state.Name}
              onChangeText={(Name) => this.setState({ Name })}
            />
          </View>
          <View style={stylesProfileTopic.Edit_Profile_Box}>
            <TextInput
              fontSize={15}
              placeholder="นามสกุล"
              maxLength={30}
              value={this.state.Last}
              onChangeText={(Last) => this.setState({ Last })}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  SexSheetBody() {
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              size={25}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
            />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15 }]}>ชาย</Text>
            <CheckBox
              size={25}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked2}
              onPress={() => this.setState({ checked2: !this.state.checked2, checked: !this.state.checked })}
            />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15 }]}>หญิง</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  BirthdaySheetBody() {
    const { activeNow } = this.state
    activeNow < 2 ?
      this.setState({ activeNow: activeNow + 1, date: new Date('2000') }) :
      null
    const { date, } = this.state;
    let DataDay = this.DataDay()
    let DataMo = this.DataMo()
    let DataYear = this.DataYear()
    var day = new Date(date).getDate()
    var month = new Date(date).getMonth();
    var year = new Date(date).getFullYear();
    return (
      <>
        <View style={stylesProfileTopic.Edit_Profile}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> วันเกิด</Text>
          <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
            <View style={stylesMain.FlexRow}>
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
            </View>
          </View>
        </View>
        <TouchableOpacity>
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
              value={this.state.Phone}
              onChangeText={(Phone) => this.setState({ Phone })}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={{ height: 40, backgroundColor: '#0A55A6', width: 350, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  render() {
    return (
      <View>
        {/* ชื่อ-นามสกุล */}
        <BottomSheet
          ref={ref => {
            this.NameSheet = ref;
          }}
          height={230}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
        >
          {this.NameSheetBody()}
        </BottomSheet>
        {/* เพศ */}
        <BottomSheet
          ref={ref => {
            this.SexSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
        >
          {this.SexSheetBody()}
        </BottomSheet>
        {/* วันเกิด */}
        <BottomSheet
          ref={ref => {
            this.BirthdaySheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
        >
          {this.BirthdaySheetBody()}
        </BottomSheet>
        {/* เบอร์โทรศัพท์ */}
        <BottomSheet
          ref={ref => {
            this.Phone_numberSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
        >
          {this.Phone_numberSheetBody()}
        </BottomSheet>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขโปรไฟล์' />
        <StoreMe_SettingImage />
        <View style={{ marginTop: 20, }}>
          <TouchableOpacity onPress={() => { this.NameSheet.open(); }}>
            <View style={stylesProfileTopic.BoxTopic}>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                  ชื่อ-นามสกุล
            </Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
            </View></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 7 })}>
            <View style={stylesProfileTopic.BoxTopic}>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                  เปลี่ยนรหัสผ่าน
            </Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.SexSheet.open(); }}>
            <View style={stylesProfileTopic.BoxTopic}>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                  เพศ
            </Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.BirthdaySheet.open(); }}>
            <View style={stylesProfileTopic.BoxTopic}>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                  วันเกิด
            </Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.Phone_numberSheet.open(); }}>
            <View style={stylesProfileTopic.BoxTopic}>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                  โทรศัพท์
            </Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 350, }}>
            <TouchableOpacity>
              <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
  render() {
    return (
      <View>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='เปลี่ยนรหัสผ่าน' />
        <View style={stylesProfileTopic.Edit_Pass}>
          <View style={{ width: '80%' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>รหัสผ่านปัจจุบัน</Text>
            <View style={stylesProfileTopic.Edit_Pass_TextInput}>
              <TextInput
                fontSize={15}
                placeholder=""
                maxLength={50}
                value={this.state.Pass1}
                onChangeText={(Pass1) => this.setState({ Pass1 })} />
              <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>กรุณาระบุรหัสผ่านใหม่ด่านล่าง</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BFBFBF', marginLeft: 10, }]}>ประกอบไปด้วยตัวเลขและตัวอักษร อย่างน้อย 6 อักษร</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10, }]}>รหัสผ่านใหม่</Text>
            <View style={stylesProfileTopic.Edit_Pass_TextInput}>
              <TextInput
                fontSize={15}
                placeholder=""
                maxLength={50}
                value={this.state.Pass2}
                onChangeText={(Pass2) => this.setState({ Pass2 })}
              />
              <IconFeather RightItem name='eye-off' size={20} style={{ marginTop: 5, }} />
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10, }]}>พิมพ์รหัสผ่านใหม่อีกครั้ง</Text>
            <View style={stylesProfileTopic.Edit_Pass_TextInput}>
              <TextInput
                fontSize={15}
                placeholder=""
                maxLength={50}
                value={this.state.Pass3}
                onChangeText={(Pass3) => this.setState({ Pass3 })}
              />
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
    };
  }
  render() {
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ที่อยู่ของฉัน' />
        <Address_Customar MainAddress />
        <Address_Customar />
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 475 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Customer_account')}>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  render() {
    const { MainAddress } = this.props
    return (
      <View style={stylesProfileTopic.Address_Customar}>
        <View style={stylesProfileTopic.Address_Customar_Box}>
          <View style={stylesMain.FlexRow}>
            <IconEvilIcons name='location' size={30} color='#0A55A6' />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
          </View>
          {
            MainAddress ?
              null :
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#0A55A6' }]}>[ค่าเริ่มต้น]</Text>
          }
        </View>
        <View style={{ marginLeft: 50, marginBottom: 10, }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>Tester ABC | 099-9999999</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>99 Sukhumvit, Bangkok, 10110</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>PPooy@hotmail.co.th</Text>
        </View>
      </View>
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
  render() {
    return (
      <SafeAreaView >
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ตั้งค่าการแชท' />
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={{ margin: 10 }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อนุญาตให้ทำการแชทจากหน้าโปรไฟล์</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#CECECE' }]}> เปิดใช้งานเพื่ออนุญาตให้ผู้ใช้สามารถพูดคุยผ่านหน้าโปรไฟล์ได้</Text>
          </View>
          <CheckBox
            size={25}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={this.state.item1}
            onPress={() => this.setState({ item1: !this.state.item1 })}
          />
        </View>
      </SafeAreaView>
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
  render() {
    return (
      <SafeAreaView >
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ตั้งค่าการแจ้งเตือน' />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 5 })} >
          <View style={stylesProfileTopic.BoxTopic}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10, }]}>
                การแจ้งเตือน
            </Text>
            </View>
            <IconEntypo name='chevron-right' style={stylesProfileTopic.SettingIcon} size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 6 })}>
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
  render() {
    return (
      <SafeAreaView >
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ภาษา' />
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
            />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>
              English
               </Text>
          </View>
        </View>
        <View style={stylesProfileTopic.BoxTopic}>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              checked={this.state.checked2}
              onPress={() => this.setState({ checked2: !this.state.checked2, checked: !this.state.checked })}
            />
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
  render() {
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='การแจ้งเตือน' />
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
            checked={this.state.item1}
            onPress={() => this.setState({ item1: !this.state.item1 })}
          />
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
            checked={this.state.item2}
            onPress={() => this.setState({ item2: !this.state.item2 })}
          />
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
            checked={this.state.item3}
            onPress={() => this.setState({ item3: !this.state.item3 })}
          />
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
            checked={this.state.item4}
            onPress={() => this.setState({ item4: !this.state.item4 })}
          />
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
  render() {
    return (
      <SafeAreaView>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='การแจ้งเตือนทางE-mail' />
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
            checked={this.state.item1}
            onPress={() => this.setState({ item1: !this.state.item1 })}
          />
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
            checked={this.state.item2}
            onPress={() => this.setState({ item2: !this.state.item2 })}
          />
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
            checked={this.state.item3}
            onPress={() => this.setState({ item3: !this.state.item3 })}
          />
        </View>
      </SafeAreaView>
    );
  }
}