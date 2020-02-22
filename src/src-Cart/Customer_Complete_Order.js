///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Customer_Complete_Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow navigation={this.props.navigation} />
        <ScrollView>
          <Customer_Product />
          <TodayProduct noTitle navigation={this.props.navigation} />
        </ScrollView>
        <ExitAppModule navigation={this.props.navigation} />
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
    return (
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: '#FFFFFF' }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}> ขอบคุณสำหรับคำสั่งซื้อ </Text>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ 2223994239012 ของท่าน</Text>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 10, paddingBottom: 10, }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { textAlign: 'center', marginTop: 10 }]}>โปรดรอรับสินค้า</Text>
          <View style={{ backgroundColor: '#F8F8F8', width: '90%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 5, }}>
            <View style={{ height: 80, width: 80, backgroundColor: '#FFFFFF', borderColor: '#D7D7D7', borderWidth: 1, padding: 5, borderRadius: 5, }}>
              <FastImage style={{ height: '100%', width: '100%', }}
                source={{
                  uri: ip + '/MySQL/uploads/products/2019-10-10-1570677650.png',
                }}
              />
            </View>
            <View style={{ width: '75%' }}>
              <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
              <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { textAlign: 'right' }]}>22 ม.ค.-24 ม.ค.</Text>
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
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยอดรวม (1 ชิ้น)</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ฿ 15,000.00</Text>
              </View>
              <View style={{ backgroundColor: '#D7D7D7', width: '100%', height: 3, marginTop: 10, }}></View>
              <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>รวมทั้งสิ้น</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿ 15,000.00</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity>
              <View style={{ backgroundColor: '#0A55A6', paddingHorizontal: 10, padding: 10, borderRadius: 5, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ช้อปต่อไม่รอแล้วนะ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>พิเศษสำหรับคุณ</Text>
      </View>
    );
  }
}
