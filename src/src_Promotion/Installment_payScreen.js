///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesPromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { Button_Bar, Slide, } from './DealScreen';
import { CategoryProduct } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Installment_payScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 titleHead={'ผ่อน 0 % สูงสุด 10 เดือน'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Head_Image />
          <Product_Pay />
          <CategoryProduct NoStoreReCom navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
        <ExitAppModule navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Head_Image
export class Head_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <View style={stylesPromotionDeal.Head_BoxImage}>
          <FastImage style={stylesPromotionDeal.Head_Image}
            source={{
              uri: ip + '/MySQL/uploads/slide/lazada-ผ่อน-0-10-เดือน.jpg',
            }}
          />
        </View>
        <View style={stylesPromotionDeal.Head_BoxText}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต) และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม, ยอดการชำระค่าสาธารณูปโภค,</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และ
            ผิดกฏหมายบัตรเครดิต </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตาม
            หลักเกณฑของบริษัทฯ</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
            8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Product_Pay
export class Product_Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <View style={[stylesPromotionDeal.BoxText_T, { backgroundColor: '#C4C4C4' }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> สินค้า 0 % 10 เดือน </Text>
        </View>
      </View>
    );
  }
}