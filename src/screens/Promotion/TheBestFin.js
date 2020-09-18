///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
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
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../customComponents';
import { Button_Bar, Slide } from './Deal/Deal';
import { FlatProduct, GetServices, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { BoxText_Row, Second_Stores, Second_Store_SlideA, Second_Store_SlideB, Second_Store_SlideB_Box, Store_Sales, Store_Sale_Box,
  Store_Sale_BoxA, Store_Sale_BoxA_Boximage, Store_Sale_BoxA_Carousel, Store_Sale_BoxA_image, Store_Sale_BoxB_Boximage, Store_Sale_BoxB_image,
  Store_Sale_Image, Text_Head, } = stylesDeal;
const { FontFamilyBold, FontSize5, FontSize7 } = stylesFont;
const { FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(TheBestFin);
function TheBestFin(props) {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var uri = `${finip}/coupon/superfin`;
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  useEffect(() => {
    activeGetServices && GetServices({ uriPointer: uri, getDataSource: value => getData(value) });
  }, [activeGetServices]);
  const Props = { ...props, dataService }
  return <SafeAreaView style={SafeAreaViews}>
    <AppBar {...Props} backArrow chatBar searchBar titleHead={'สุดคุ้มสุดฟิน'} />
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
      {/* <Slide {...props} banner={dataService?.banner} isOutData /> */}
      <Fin_sale {...props} dataService={dataService?.product_discount80} />
      <Store_Sale {...props} dataService={dataService ?? undefined} />
      <Product_Cool {...props} dataService={dataService?.product_cool} />
      {/* <Second_product {...props} loadData={{
        product_second: dataService.product_sec, list_store2_1: dataService.discount_sec_xl,
        list_store2_2: dataService.discount_sec_l, list_store2_3: dataService.discount_sec_m,
        mobile_bar: dataService.mobile_bar, mobile_slide: dataService.mobile_slide,
      }} Header_Second /> */}
      <Second_Store {...props} dataService={dataService ?? undefined} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderColor: '#ECECEC', borderTopWidth: 1, }}>
      <Button_Bar {...props} />
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Fin_sale
export let Fin_sale = (props) => {
  const { dataService } = props;
  return <>
    <View style={FrameBackground}>
      <View style={BoxText_Row}>
        <LinearGradient colors={['#009A98', '#59D3D1']} style={{ borderBottomRightRadius: 100, paddingRight: 20 }}>
          <Text style={[FontFamilyBold, FontSize5, Text_Head]}>Fin จัดหนักลดสูงสุด 80 % </Text>
        </LinearGradient>
        <Text style={[FontFamilyBold, FontSize7, { color: mainColor, margin: 5 }]}>ดูทั้งหมด</Text>
      </View>
      {dataService && <FlatProduct {...props} dataService={dataService} dispriceSize={15} numberOfColumn={1}
        mode='row3' nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} />}
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Store_Sale
export let Store_Sale = (props) => {
  const { dataService } = props;
  var discount_l = [];
  var discount_m = [];
  var discount_xl;
  dataService?.discount_m?.map((v) => discount_m.push({ uri: `${finip}/${v.image_path}/${v.image}`, }));
  dataService?.discount_l?.map((v) => discount_l.push({ uri: `${finip}/${v.image_path}/${v.image}`, }));
  dataService?.discount_xl?.map((v) => discount_xl = { uri: `${finip}/${v.image_path}/${v.image}`, });
  let Store_Sale_Boxs = <View style={Store_Sales}>
    <View style={Store_Sale_Box}>
      {/* BoxA */}
      <View style={Store_Sale_BoxA}>
        <View style={Store_Sale_BoxA_Carousel}>
          <FastImage resizeMode={FastImage.resizeMode.stretch} source={discount_xl} style={Store_Sale_Image} />
        </View>
        <View style={Store_Sale_BoxA_Boximage}>
          {discount_m && discount_m.map((v, i) => <View key={i} style={Store_Sale_BoxA_image}>
            <FastImage resizeMode={FastImage.resizeMode.stretch} source={v} style={Store_Sale_Image} />
          </View>)}
        </View>
      </View>
      {/* BoxB */}
      <View style={Store_Sale_BoxB_Boximage}>
        {discount_l && discount_l.map((v, i) => <View key={i} style={Store_Sale_BoxB_image}>
          <FastImage resizeMode={FastImage.resizeMode.stretch} source={v} style={Store_Sale_Image} />
        </View>)}
      </View>
    </View>
  </View>;
  return <View>
    <View style={[FrameBackground, { paddingTop: 3 }]}>
      <View style={BoxText_Row}>
        <LinearGradient colors={['#009A98', '#59D3D1']} style={{ borderBottomRightRadius: 100, paddingRight: 20 }}>
          <Text style={[FontFamilyBold, FontSize5, Text_Head]}>ร้านนี้มีของลด</Text>
        </LinearGradient>
        <Text style={[FontFamilyBold, FontSize7, { color: mainColor, margin: 5 }]}>ดูทั้งหมด</Text>
      </View>
      {Store_Sale_Boxs}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Cool
export let Product_Cool = (props) => {
  const { dataService } = props;
  return <>
    <View style={[FrameBackground, { paddingTop: 3 }]}>
      <View style={BoxText_Row}>
        <LinearGradient colors={['#009A98', '#59D3D1']} style={{ borderBottomRightRadius: 100, paddingRight: 20 }}>
          <Text style={[FontFamilyBold, FontSize5, Text_Head]}>สินค้าราคาโคตรคูล </Text>
        </LinearGradient>
        <Text style={[FontFamilyBold, FontSize7, { color: mainColor, margin: 5 }]}>ดูทั้งหมด</Text>
      </View>
      {dataService && <FlatProduct {...props} dataService={dataService} dispriceSize={15} numberOfColumn={2}
        mode='row3' nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} />}
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Store
export let Second_Store = (props) => {
  const { dataService, } = props;
  var discount_sec_l = [];
  var discount_sec_m = [];
  var discount_sec_xl;
  dataService?.discount_sec_l?.map((v) => discount_sec_l.push({ uri: `${finip}/${v.image_path}/${v.image}` }));
  dataService?.discount_sec_m?.map((v) => discount_sec_m.push({ uri: `${finip}/${v.image_path}/${v.image}` }));
  dataService?.discount_sec_xl?.map((v) => discount_sec_xl = { uri: `${finip}/${v.image_path}/${v.image}` });
  let Second_StoreBody = <View style={Second_Stores}>
    <View style={Second_Store_SlideA}>
      <FastImage resizeMode={FastImage.resizeMode.cover} source={discount_sec_xl} style={Store_Sale_Image} />
    </View>
    <View style={Second_Store_SlideB}>
      {discount_sec_m && discount_sec_m.map((v, i) => <View key={i} style={Second_Store_SlideB_Box}>
        <FastImage resizeMode={FastImage.resizeMode.stretch} source={v} style={{ height: '80%', width: '100%', }} />
        <View style={[ItemCenter, { backgroundColor: mainColor, height: '20%', paddingHorizontal: 5 }]}>
          <Text numberOfLines={1} style={[FontFamilyBold, FontSize7, { color: '#FFFFFF' }]}>
            โปรท้าฝน คาร์ซีทมือสอง ลดสูงสุด 5,000 บาท หมดแล้วหมดเลย อย่าช้า กดเลื่อนลงไปดูสินค้า  </Text>
        </View>
      </View>)}
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 3, }}>
      <ScrollView horizontal>
        {discount_sec_l && discount_sec_l.map((v, i) => <View key={i} style={{ width: 140, height: 70, marginLeft: 3 }}>
          <FastImage resizeMode={FastImage.resizeMode.stretch} source={v} style={Store_Sale_Image} />
        </View>)}
      </ScrollView>
    </View>
  </View>
  return <View style={[FrameBackground, { paddingTop: 3 }]}>
    <View style={BoxText_Row}>
      <LinearGradient colors={['#009A98', '#59D3D1']} style={{ borderBottomRightRadius: 100, paddingRight: 20 }}>
        <Text style={[FontFamilyBold, FontSize5, Text_Head]}>ร้านมือสองลดราคา </Text>
      </LinearGradient>
      <Text style={[FontFamilyBold, FontSize7, { color: mainColor, margin: 5 }]}>ดูทั้งหมด</Text>
    </View>
    {Second_StoreBody}
    <View style={BoxText_Row}>
      <LinearGradient colors={['#009A98', '#59D3D1']} style={{ borderBottomRightRadius: 100, paddingRight: 20 }}>
        <Text style={[FontFamilyBold, FontSize5, Text_Head]}>ร้านมือสองลดราคา </Text>
      </LinearGradient>
      <Text style={[FontFamilyBold, FontSize7, { color: mainColor, margin: 5 }]}>ดูทั้งหมด</Text>
    </View>
    {dataService?.product_sec && <FlatProduct {...props} dataService={dataService.product_sec} dispriceSize={15} mode='row3_new'
      numberOfColumn={2} nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} />}
  </View>;
};