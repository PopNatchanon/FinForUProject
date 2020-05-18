///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, TodayProduct, } from '../MainScreen';
import { GetServices, NavigationNavigateScreen } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Customer_Complete_Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getDataasync = async () => {
    const currentUser = await AsyncStorage.getItem('@MyKey')
    this.setState({ currentUser: JSON.parse(currentUser) })
  }
  componentDidMount() {
    this.getDataasync()
    CookieManager.get(`${finip}/auth/login_customer`)
      .then((res) => {
        var keycokie = res.token
        this.setState({ keycokie })
      });
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  getData2(dataService2) {
    this.setState({ dataService2 })
  }
  render() {
    const { navigation } = this.props
    const { currentUser, dataService, dataService2, keycokie } = this.state
    var no_invoice = navigation.getParam('no_invoice');
    var uri = `${finip}/purchase_data/thank_you_bill`;
    var dataBody = {
      id_customer: currentUser && currentUser.id_customer,
      no_invoice,
    };
    var uri2 = `${ip}/mysql/DataServiceMain.php`;
    var dataBody2 = {
      type: 'product',
    };
    currentUser && currentUser.id_customer && keycokie &&
      GetServices({
        Authorization: keycokie, uriPointer: uri, dataBody, showConsole: 'thank_you_bill', getDataSource: this.getData.bind(this),
      })
    GetServices({ uriPointer: uri2, dataBody: dataBody2, getDataSource: this.getData2.bind(this), })
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow goToTop navigation={navigation} />
        <ScrollView>
          {[
            dataService &&
            <Customer_Product dataService={dataService} no_invoice={no_invoice} key={'Customer_Product'} />,
            dataService2 &&
            <TodayProduct noTitle navigation={navigation} loadData={dataService2} key={'TodayProduct'} />
          ]}
        </ScrollView>
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Customer_Product
export class Customer_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService, navigation, no_invoice } = this.props
    return dataService.result.map((value) => {
      const dataMySQL = `${finip}/${value.image_path}/${value.image_main}`
      return (
        <View>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: '#FFFFFF' }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}> ขอบคุณสำหรับคำสั่งซื้อ </Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
              หมายเลขคำสั่งซื้อ {no_invoice} ของท่าน</Text>
          </View>
          <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 10, paddingBottom: 10, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { textAlign: 'center', marginTop: 10 }]}>โปรดรอรับสินค้า</Text>
            <View style={{
              backgroundColor: '#F8F8F8', width: '90%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 5,
            }}>
              <View style={{
                height: 80, width: 80, backgroundColor: '#FFFFFF', borderColor: '#D7D7D7', borderWidth: 1, padding: 5, borderRadius: 5,
              }}>
                <FastImage style={{ height: '100%', width: '100%', }}
                  source={{
                    uri: dataMySQL,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{ width: '75%' }}>
                <Text numberOfLines={1} style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { marginLeft: 8 }]}>{value.name}</Text>
                {/* <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { textAlign: 'right' }]}>22 ม.ค.-24 ม.ค.</Text> */}
                <View style={{ backgroundColor: '#D7D7D7', width: '100%', height: 3, marginTop: 10, }}></View>
                <View style={{ alignItems: 'flex-end', margin: 10, }}>
                  <TouchableOpacity>
                    <View style={{ backgroundColor: '#0A55A6', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 5 }}>
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF', }]}>ดูคำสั่งซื้อ</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สรุปคำสั่งซื้อ</Text>
            <View style={{ alignItems: 'center', }}>
              <View style={{ backgroundColor: '#F8F8F8', width: '95%', borderRadius: 5, padding: 10 }}>
                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยอดรวม ({value.quantity} ชิ้น)</Text>
                  <NumberFormat
                    value={value.bill_total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={value2 =>
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{value2}</Text>
                    } />
                </View>
                <View style={{ backgroundColor: '#D7D7D7', width: '100%', height: 3, marginTop: 10, }}></View>
                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>รวมทั้งสิ้น</Text>
                  <NumberFormat
                    value={value.bill_total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={value2 =>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}>{value2}</Text>
                    } />
                </View>
              </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'popToTop', navigation })}>
                <View style={{ backgroundColor: '#0A55A6', paddingHorizontal: 10, padding: 10, borderRadius: 5, }}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ช้อปต่อไม่รอแล้วนะ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>พิเศษสำหรับคุณ</Text>
        </View>
      );
    })
  }
}