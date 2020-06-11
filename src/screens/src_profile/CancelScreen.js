///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { From_Order_Box } from './Total_Order';
import { GetServices, LoadingScreen, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CancelScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoading: true,
    };
  }
  getDataAsync = async () => {
    const currentUser = await AsyncStorage.getItem('@MyKey')
    this.setState({ currentUser: JSON.parse(currentUser) })
  }
  componentDidMount() {
    this.getDataAsync()
    CookieManager.get(`${finip}/auth/login_customer`)
      .then((res) => {
        var keycokie = res.token
        this.setState({ keycokie })
      });
  }
  IsLoading = (IsLoading) => {
    this.setState({ IsLoading })
  }
  PathList() {
    const { route } = this.props
    const { currentUser, keycokie, } = this.state
    const selectedIndex = route.params?.selectedIndex
    // const selectedIndex = 0
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <CancelScreen_Product {...this.props} currentUser={currentUser} keycokie={keycokie}
              setLoading={this.IsLoading.bind(this)} />
          </View>
        )
      case 1:
        return (
          <View>
            <CancelScreen_From />
          </View>
        )
    }
  }
  render() {
    const { navigation } = this.props
    const { IsLoading, } = this.state
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {
          IsLoading == true &&
          <LoadingScreen />
        }
        <AppBar1 {...this.props} backArrow titleHead='ยกเลิกสินค้า' />
        <ScrollView>
          {this.PathList()}
        </ScrollView>
        <ExitAppModule {...this.props} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> CancelScreen_Product
export class CancelScreen_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSelectedIndex: true,
    };
  }
  getData = (dataService) => {
    const { setLoading } = this.props
    this.setState({ activeSelectedIndex: false, dataService })
    setLoading(false)
  }
  render() {
    const { currentUser, keycokie, navigation, } = this.props
    const { activeSelectedIndex, dataService, } = this.state
    var uri = `${finip}/purchase_data/view_purchase`
    var dataBody = {
      id_customer: currentUser && currentUser.id_customer,
      type_purchase: 'cancel',
      device: "mobile_device",
    };
    activeSelectedIndex == true && currentUser && keycokie &&
      GetServices({
        uriPointer: uri, Authorization: keycokie, showConsole: 'view_purchase', dataBody,
        getDataSource: this.getData.bind(this),
      })
    return (
      <>
        {
          activeSelectedIndex == false && ([
            <Text key={'all'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
              marginLeft: 10, marginTop: 10,
            }]}>
              รายการคำสั่งซื้อ</Text>,
            dataService && dataService.purchase.length > 0 ?
              dataService.purchase.map((value, index) => {
                return <From_Order_Box {...this.props} dataService={value} key={index} />
              }) :
              <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                <IconFeather name='edit' size={50} color='#A2A2A2' />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                  ยังไม่มีคำสั่งซื้อ</Text>
              </View>
          ])
        }
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> CancelScreen_From
export class CancelScreen_From extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Cancel_Product />
          <Cancel_Detail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Cancel_Product
export class Cancel_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <View style={stylesMain.FrameBackground}>
          <View style={stylesProfileTopic.Order_Product}>
            <View style={stylesMain.FlexRow}>
              <View style={stylesProfileTopic.Order_Product_Pro}>
                <FastImage style={stylesMain.BoxProduct1Image}
                  source={{
                    uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
                  }}
                />
              </View>
              <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                <Text>x 1</Text>
              </View>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor }]}>฿10,000.00</Text>
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Cancel_Detail
export class Cancel_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>สาเหตุการยกเลิกสินค้า </Text>
        <View style={stylesProfileTopic.Cancel_Detail}>
          <View style={stylesProfileTopic.Cancel_Detail_Box}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 35, width: '100%' }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="เปลี่ยนใจ" value="java" />
              <Picker.Item label="ต้องการเปลี่ยนวิธิการจัดส่ง" value="js" />
              <Picker.Item label="เปลี่ยนที่อยู่การจัดส่ง" value="js1" />
              <Picker.Item label="มีสินค้าที่ถูกกว่า" value="js2" />
            </Picker>
          </View>
          <Cancel_Alert />
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> 
export class Cancel_Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  handleOpen = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  get _renderHeader() {
    return (
      <IconFontAwesome name='close' size={50} color='white' />
    )
  }
  render() {
    return (
      <View>
        <View style={stylesProfileTopic.Cancel_Detail_ButtonBox}>
          <TouchableOpacity>
            <View style={stylesProfileTopic.Cancel_Detail_Button}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleOpen()}>
            <View style={[stylesProfileTopic.Cancel_Detail_Button, { marginLeft: 10 }]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
        <SCLAlert
          theme="danger"
          headerIconComponent={this._renderHeader}
          show={this.state.show}
          title="ยกเลิกสินค้า"
          titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
          subtitle="กรุณารอการตรวจสอบจากร้านค้า"
          subtitleStyle={stylesFont.FontFamilyText}
          onRequestClose={() => null}
        >
          <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
            <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
            <SCLAlertButton theme="danger" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
          </View>
        </SCLAlert>
      </View>
    );
  }
}