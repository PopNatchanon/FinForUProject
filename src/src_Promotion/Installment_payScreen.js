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
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesPromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, Slide, } from '../MainScreen';
import { Button_Bar, } from './DealScreen';
import { CategoryProduct } from '../MainScreen';
import { GetServices, ProductBox } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Installment_payScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGetServices: true,
    };
  }
  getData = (dataService) => {
    this.setState({ activeGetServices: false, dataService })
  }
  render() {
    const { navigation } = this.props
    const { dataService, } = this.state
    // console.log('Installment_payScreen')
    // console.log(dataService)
    var uri = `${finip}/coupon/installment_data`
    activeGetServices == true && GetServices({ uriPointer: uri, getDataSource: this.getData.bind(this), })
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 titleHead={'ผ่อน 0 % สูงสุด 10 เดือน'} backArrow searchBar chatBar navigation={navigation} />
        <ScrollView>
          <Slide banner={dataService && dataService.banner} />
          <Head_Image />
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 140 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>สินค้า 0 % 10 เดือน </Text>
          </View>
          <CategoryProduct_pay navigation={navigation} dataService={dataService && dataService.category} />
        </ScrollView>
        <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
          <Button_Bar navigation={navigation} />
        </View>
        <ExitAppModule navigation={navigation} />
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
              uri: 'http://www.mmnie.live/assets/themes/default/images/banner_payment.jpg',
            }}
            resizeMode={FastImage.resizeMode.stretch}
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
export class CategoryProduct_pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService, navigation } = this.props
    // console.log('Installment_payScreen')
    // console.log(dataService)
    return (
      <>
        {
          dataService && dataService.map((value, index) => {
            var mobile_head = `${finip}/${value.mobile_head}`;
            {/* console.log('value.store')
            console.log(value.store) */}
            return (
              <View key={index} style={stylesMain.FrameBackground}>
                <FastImage
                  source={{
                    uri: mobile_head,
                  }}
                  style={[stylesMain.CategoryProductImageHead]}
                  resizeMode={FastImage.resizeMode.cover}
                />
                {
                  value && value.product &&
                  <FlatProduct custumNavigation='CategoryProduct_pay' navigation={navigation} dataService={value.product} NumberOfcolumn={2}
                    mode='row3' nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} dispriceSize={15} />
                }
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>ร้านนี้ผ่อนได้</Text>
                <ScrollView horizontal>
                  {
                    value.store.map((value2, index2) => {
                      var image_store = `${finip}/${value2.image_path}/${value2.image}`
                      console.log(image_store)
                      return (
                        <View key={index2} style={[stylesMain.CategoryProductStoreBox,
                        { height: 70, borderWidth: 1, padding: 2, borderColor: '#ECECEC' }]}>
                          <FastImage
                            source={{
                              uri: image_store,
                            }}
                            style={stylesMain.CategoryProductStoreImage}
                            resizeMode={FastImage.resizeMode.stretch} />
                        </View>
                      )
                    })
                  }
                </ScrollView>
              </View>
            )
          })
        }
      </>
    );
  }
}