///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
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
import { AppBar, ExitApp } from '../../customComponents';
import { Button_Bar, Slide, } from './Deal/Deal';
import { FlatProduct, GetServices, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { Text_Head } = stylesDeal;
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize5, FontSize8, } = stylesFont;
const { CategoryProductImageHead, CategoryProductStoreBox, CategoryProductStoreImage, FrameBackground, FrameBackgroundTextStart, SafeAreaViews
} = stylesMain;
const { Head_BoxImage, Head_BoxText, Head_Images } = stylesPromotionDeal;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(InstallmentPay);
function InstallmentPay(props) {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  const uri = `${finip}/coupon/installment_data`;
  const getData = (v) => { setActiveGetServices(false); setDataService(v); };
  useEffect(() => {
    activeGetServices && GetServices({ getDataSource: (v) => getData(v), uriPointer: uri, });
  }, [activeGetServices]);
  const Props = { ...props, dataService };
  return <SafeAreaView style={SafeAreaViews}>
    <AppBar {...Props} backArrow chatBar searchBar titleHead={'ผ่อน 0 % สูงสุด 10 เดือน'} />
    <ScrollList {...Props} />
    <ExitApp {...Props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
  const { dataService } = props;
  return <View>
    <ScrollView>
      <Slide {...props} dataService={dataService?.banner} />
      <Head_Image />
      <LinearGradient colors={['#F5DE1E', '#F9EB77']} style={{ borderBottomRightRadius: 100, marginTop: 3, width: 180 }}>
        <Text style={[FontFamilyBold, FontSize5, Text_Head]}>สินค้า 0 % 10 เดือน </Text>
      </LinearGradient>
      <CategoryProduct_pay {...props} dataService={dataService?.category} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
      <Button_Bar {...props} />
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Head_Image
export const Head_Image = (props) => {
  const Image1 = { uri: 'http://www.mmnie.live/assets/themes/default/images/banner_payment.jpg', };
  return <View>
    <View style={Head_BoxImage}>
      <FastImage resizeMode={FastImage.resizeMode.stretch} source={Image1} style={Head_Images} />
    </View>
    <View style={Head_BoxText}>
      <Text style={[FontFamilyText, FontSize8]}>1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต)
    และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป</Text>
      <Text style={[FontFamilyText, FontSize8]}>
        2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ</Text>
      <Text style={[FontFamilyText, FontSize8]}>3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม,
      ยอดการชำระค่าสาธารณูปโภค, และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,
    ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และ ผิดกฏหมายบัตรเครดิต</Text>
      <Text style={[FontFamilyText, FontSize8]}>4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด</Text>
      <Text style={[FontFamilyText, FontSize8]}>5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข
    หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี</Text>
      <Text style={[FontFamilyText, FontSize8]}>6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำ
      การปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
      <Text style={[FontFamilyText, FontSize8]}>7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือน
      ตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตามหลักเกณฑของบริษัทฯ</Text>
      <Text style={[FontFamilyText, FontSize8]}>8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริม
      การตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
    </View>
  </View>
};
///----------------------------------------------------------------------------------------------->>>> Product_Pay
export const CategoryProduct_pay = (props) => {
  const { dataService, } = props;
  return <>
    {dataService && dataService.map((v, i) => {
      const MobileHead = { uri: `${finip}/${v.mobile_head}`, };
      return <View key={i} style={FrameBackground}>
        <FastImage resizeMode={FastImage.resizeMode.cover} source={MobileHead} style={[CategoryProductImageHead]} />
        {v && v.product && <FlatProduct {...props} dataService={v.product} dispriceSize={15} mode='row3_new'
          nameFlatProduct='CategoryProduct_pay' nameSize={14} numberOfColumn={2} priceSize={15} />}
        <Text style={[FontFamilyBold, FontSize3, FrameBackgroundTextStart]}>ร้านนี้ผ่อนได้</Text>
        <ScrollView horizontal>
          {v.store.map((v2, i2) => {
            const ImageStore = { uri: `${finip}/${v2.image_path}/${v2.image}`, };
            return <View key={i2} style={[CategoryProductStoreBox, { borderColor: '#ECECEC', borderWidth: 1, height: 70, padding: 2, }]}>
              <FastImage resizeMode={FastImage.resizeMode.stretch} source={ImageStore} style={CategoryProductStoreImage} />
            </View>;
          })}
        </ScrollView>
      </View>;
    })}
  </>;
};