///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
  Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, Second_product, Slide } from '../MainScreen';
import { Button_Bar, } from './DealScreen';
import { GetServices, ProductBox, FlatProduct } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService, activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(The_BestFinScreen);
function The_BestFinScreen(props) {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var uri = `${finip}/coupon/superfin`;
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  useEffect(() => {
    activeGetServices && GetServices({ uriPointer: uri, getDataSource: value => getData(value) });
  }, [activeGetServices]);
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar1 {...props} titleHead={'สุดคุ้มสุดฟิน'} backArrow searchBar chatBar />
    <ScrollView>
      <Slide {...props} banner={dataService?.banner} isOutData />
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
    <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
      <Button_Bar {...props} />
    </View>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Fin_sale
export let Fin_sale = (props) => {
  const { dataService } = props;
  return <>
    <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
      <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 180 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>Fin จัดหนักลดสูงสุด 80 % </Text>
      </View>
      <View style={stylesDeal.Fin_sale_BoxHead}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: mainColor }]}>ดูทั้งหมด</Text>
      </View>
      {dataService && <FlatProduct {...props} custumNavigation='CategoryProduct_pay' dataService={dataService} numberOfColumn={1}
        mode='row3' nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} dispriceSize={15} />}
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Store_Sale
export let Store_Sale = (props) => {
  const { dataService } = props;
  var discount_l = [];
  var discount_m = [];
  var discount_xl;
  dataService?.discount_m?.map((value) => discount_m.push(`${finip}/${value.image_path}/${value.image}`));
  dataService?.discount_l?.map((value) => discount_l.push(`${finip}/${value.image_path}/${value.image}`));
  dataService?.discount_xl?.map((value) => discount_xl = `${finip}/${value.image_path}/${value.image}`);
  let Store_Sale_Box = <View style={stylesDeal.Store_Sale}>
    <View style={stylesDeal.Store_Sale_Box}>
      {/* BoxA */}
      <View style={stylesDeal.Store_Sale_BoxA}>
        <View style={stylesDeal.Store_Sale_BoxA_Carousel}>
          <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: discount_xl, }} resizeMode={FastImage.resizeMode.stretch} />
        </View>
        <View style={stylesDeal.Store_Sale_BoxA_Boximage}>
          {discount_m && discount_m.map((value, index) => <View key={index} style={stylesDeal.Store_Sale_BoxA_image}>
            <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: value, }} resizeMode={FastImage.resizeMode.stretch} />
          </View>)}
        </View>
      </View>
      {/* BoxB */}
      <View style={stylesDeal.Store_Sale_BoxB_Boximage}>
        {discount_l && discount_l.map((value, index) => <View key={index} style={stylesDeal.Store_Sale_BoxB_image}>
          <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: value, }} resizeMode={FastImage.resizeMode.stretch} />
        </View>)}
      </View>
    </View>
  </View>;
  return <View>
    <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
      <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 100 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านนี้มีของลด</Text>
      </View>
      <View style={stylesDeal.Fin_sale_BoxHead}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: mainColor }]}>ดูทั้งหมด</Text>
      </View>
      {Store_Sale_Box}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Cool
export let Product_Cool = (props) => {
  const { dataService } = props;
  return <>
    <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
      <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 140 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>สินค้าราคาโคตรคูล </Text>
      </View>
      <View style={[stylesDeal.Fin_sale_BoxHead, { marginTop: -10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: mainColor }]}>ดูทั้งหมด</Text>
      </View>
      {dataService && <FlatProduct {...props} custumNavigation='CategoryProduct_pay' dataService={dataService} numberOfColumn={2}
        mode='row3' nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} dispriceSize={15} />}
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Store
export let Second_Store = (props) => {
  const { dataService, } = props;
  var discount_sec_l = [];
  var discount_sec_m = [];
  var discount_sec_xl;
  dataService?.discount_sec_l?.map((value) => discount_sec_l.push(`${finip}/${value.image_path}/${value.image}`));
  dataService?.discount_sec_m?.map((value) => discount_sec_m.push(`${finip}/${value.image_path}/${value.image}`));
  dataService?.discount_sec_xl?.map((value) => discount_sec_xl = `${finip}/${value.image_path}/${value.image}`);
  let Second_StoreBody = <View style={stylesDeal.Second_Store}>
    <View style={stylesDeal.Second_Store_SlideA}>
      <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: discount_sec_xl, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={stylesDeal.Second_Store_SlideB}>
      {discount_sec_m && discount_sec_m.map((value, index) => <View key={index} style={stylesDeal.Second_Store_SlideB_Box}>
        <FastImage style={stylesMain.BoxStore1Image} source={{ uri: value, }} />
      </View>)}
    </View>
    <View style={{ marginVertical: 10, width: '90%', flexDirection: 'row', justifyContent: 'space-around' }}>
      <ScrollView horizontal>
        {discount_sec_l && discount_sec_l.map((value, index) => <View key={index} style={{ width: 160, height: 80, marginLeft: 5 }}>
          <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: value, }} resizeMode={FastImage.resizeMode.stretch} />
        </View>)}
      </ScrollView>
    </View>
  </View>
  return <View style={stylesMain.FrameBackground}>
    <View style={stylesDeal.BoxText_Row}>
      <View style={[stylesDeal.BoxText_T, { backgroundColor: '#95D370', marginLeft: -3, width: 140 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา </Text>
      </View>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB, { color: mainColor }]}>ดูทั้งหมด</Text>
    </View>
    {Second_StoreBody}
    <View style={stylesDeal.BoxText_Row}>
      <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', marginLeft: -3, width: 140 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา </Text>
      </View>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB, { color: mainColor }]}>ดูทั้งหมด</Text>
    </View>
    {dataService?.product_sec && <FlatProduct {...props} custumNavigation='CategoryProduct_pay' dataService={dataService.product_sec}
      mode='row3_new' numberOfColumn={2} nameFlatProduct='CategoryProduct_pay' nameSize={14} priceSize={15} dispriceSize={15} />}
  </View>;
};