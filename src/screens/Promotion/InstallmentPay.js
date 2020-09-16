///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
  Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesPromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, CategoryProduct } from '../Main/Main';
import { Button_Bar, Slide, } from './Deal/Deal';
import { GetServices, ProductBox, FlatProduct } from '../../customComponents/Tools';
import { AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(InstallmentPay);
function InstallmentPay(props) {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var uri = `${finip}/coupon/installment_data`;
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  useEffect(() => {
    activeGetServices && GetServices({ uriPointer: uri, getDataSource: value => getData(value), });
  }, [activeGetServices]);
  return <SafeAreaView style={stylesMain.SafeAreaViews}>
    <AppBar {...props} titleHead={'ผ่อน 0 % สูงสุด 10 เดือน'} backArrow searchBar chatBar />
    <ScrollView>
      <Slide {...props} dataService={dataService?.banner} />
      <Head_Image />
      <LinearGradient colors={['#F5DE1E', '#F9EB77']}
        style={{ borderBottomRightRadius: 100, marginTop: 3, width: 180 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>สินค้า 0 % 10 เดือน </Text>
      </LinearGradient>
      <CategoryProduct_pay {...props} dataService={dataService?.category} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
      <Button_Bar {...props} />
    </View>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Head_Image
export let Head_Image = (props) => <View>
  <View style={stylesPromotionDeal.Head_BoxImage}>
    <FastImage style={stylesPromotionDeal.Head_Image} resizeMode={FastImage.resizeMode.stretch}
      source={{ uri: 'http://www.mmnie.live/assets/themes/default/images/banner_payment.jpg', }} />
  </View>
  <View style={stylesPromotionDeal.Head_BoxText}>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต)
    และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
      2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม,
    ยอดการชำระค่าสาธารณูปโภค, และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,
    ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และ ผิดกฏหมายบัตรเครดิต</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์
    รีวอร์ด</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข
    หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า
    กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>7.บริษัทฯ
    ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร
    ไม่ตรงตามหลักเกณฑของบริษัทฯ</Text>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข
    และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
  </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Product_Pay
export let CategoryProduct_pay = (props) => {
  const { dataService, } = props;
  return <>
    {dataService && dataService.map((value, index) => {
      var mobile_head = `${finip}/${value.mobile_head}`;
      return <View key={index} style={stylesMain.FrameBackground}>
        <FastImage source={{ uri: mobile_head, }} style={[stylesMain.CategoryProductImageHead]} resizeMode={FastImage.resizeMode.cover} />
        {value && value.product && <FlatProduct {...props} dataService={value.product}
          numberOfColumn={2} mode='row3_new' nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} dispriceSize={15} />}
        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>ร้านนี้ผ่อนได้</Text>
        <ScrollView horizontal>
          {value.store.map((value2, index2) => {
            var image_store = `${finip}/${value2.image_path}/${value2.image}`;
            return <View key={index2} style={[stylesMain.CategoryProductStoreBox,
            { height: 70, borderWidth: 1, padding: 2, borderColor: '#ECECEC' }]}>
              <FastImage source={{ uri: image_store, }} style={stylesMain.CategoryProductStoreImage}
                resizeMode={FastImage.resizeMode.stretch} />
            </View>;
          })}
        </ScrollView>
      </View>;
    })}
  </>;
};