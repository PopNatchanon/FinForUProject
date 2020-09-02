///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import SlidingView from 'rn-sliding-view';
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesTopic from '../../../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  TodayProduct, ExitAppModule, Recommend_Brand, } from '../../Main/MainScreen';
import { Slide, } from '../../src_Promotion/DealScreen';
import { GetServices, TabBar, ProductBox, SlideTab2, FlatProduct, } from '../../../customComponents/Tools';
import { Button_Bar, PricesSlide, SlideTab, } from '../Exclusive/ExclusiveScreen';
import { Might_like_Store } from '../../src_profile/Profile_Topic';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(FINSupermarket);
function FINSupermarket(props) {
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar {...props} backArrow titleHead='FIN Supermarket' />
    <ScrollView>
      <View style={{ width: '100%', height: 180, marginTop: 10 }}>
        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/bannersupermarket5.jpg`, }}
          resizeMode={FastImage.resizeMode.stretch} />
      </View>
      {/* <Slide /> */}
      <FIN_Supermarket {...props} />
      <Brand_Supermarket />
      <Product_Today_Supermarket />
      <View style={{ height: 55, width: '100%', marginTop: 10 }}>
        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_banner06.jpg`, }}
          resizeMode={FastImage.resizeMode.contain} />
      </View>
      <Product_Shop />
    </ScrollView>
  </SafeAreaView>;
}

///----------------------------------------------------------------------------------------------->>>>
export let FinMall_Product = (props) => {
  const { navigation } = props;
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var dataBody = { type: 'todayproduct' };
  var uri = `${ip}/mysql/DataServiceMain.php`;
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  useEffect(() => {
    activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  }, [activeDataService]);
  return <View style={stylesMain.FrameBackground}>
    <View style={stylesMain.FrameBackgroundTextBox}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>Fin Mall</Text>
      <TouchableOpacity activeOpacity={1} onPress={() =>
        NavigationNavigate({ goScreen: 'FinMallScreen', setData: { selectedIndex: 1 }, navigation })}>
        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService && <FlatProduct {...props} custumNavigation='FinMall_Product' dataService={dataService} mode='row3'
      nameFlatProduct='FinMall_Product' nameSize={14} priceSize={15} dispriceSize={15} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let FIN_Supermarket = (props) => {
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  const item = [{ name: 'Global Items' }, { name: 'ของใช้ประจำวัน' }, { name: 'Skincare' }];
  var dataBody = { type: 'todayproduct' };
  var uri = `${ip}/mysql/DataServiceMain.php`;
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  useEffect(() => {
    activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  }, [activeDataService]);
  return <View>
    <View style={[stylesMain.FrameBackground2]}>
      <TabBar item={item} radiusBox={4} widthBox={97} inactiveColor={mainColor} overScrollMode={'never'} type='box' />
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <TouchableOpacity style={{ backgroundColor: '#9BB7D6', width: '32%', }}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', color: '#063B76' }]}>
                    Global Items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#AAC48A', width: '32%', }}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', color: '#427007' }]}>
                    ของใช้ประจำวัน</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#D6B59B', width: '32%', }}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', color: '#783907' }]}>
                    Skincare</Text>
                </TouchableOpacity>
              </View> */}
      {dataService && <FlatProduct {...props} dataService={dataService} numberOfColumn={2} nameFlatProduct='DetailScreen' mode='row3'
        nameSize={14} priceSize={15} dispriceSize={15} />}
    </View>
  </View>;
}
///----------------------------------------------------------------------------------------------->>>>
export let Brand_Supermarket = (props) => <>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: 100, marginTop: 10 }}>
    <View style={{ width: '48%', backgroundColor: '#FFFFFF' }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/logo-foodland.png`, }}
        resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={{ width: '48%', backgroundColor: '#FFFFFF' }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/logo-maxvalu.png`, }}
        resizeMode={FastImage.resizeMode.stretch} />
    </View>
  </View>
  <View style={{ height: 100, width: '100%', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap' }}>
    <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '30%', borderColor: '#EAEAEA', borderWidth: 1, marginVertical: 5 }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, }}
        resizeMode={FastImage.resizeMode.contain} />
    </View>
    <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '30%', borderColor: '#EAEAEA', borderWidth: 1, marginVertical: 5 }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, }}
        resizeMode={FastImage.resizeMode.contain} />
    </View>
    <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '30%', borderColor: '#EAEAEA', borderWidth: 1, marginVertical: 5 }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }}
        resizeMode={FastImage.resizeMode.contain} />
    </View>
    <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '30%', borderColor: '#EAEAEA', borderWidth: 1, marginVertical: 5 }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand06.jpg`, }}
        resizeMode={FastImage.resizeMode.contain} />
    </View>
    <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '30%', borderColor: '#EAEAEA', borderWidth: 1, marginVertical: 5 }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, }}
        resizeMode={FastImage.resizeMode.contain} />
    </View>
    <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '30%', borderColor: '#EAEAEA', borderWidth: 1, marginVertical: 5 }}>
      <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, }}
        resizeMode={FastImage.resizeMode.contain} />
    </View>
  </View>
</>;
///----------------------------------------------------------------------------------------------->>>>
export let Product_Today_Supermarket = (props) => {
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var dataBody = { type: 'todayproduct' };
  var uri = `${ip}/mysql/DataServiceMain.php`;
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  useEffect(() => {
    activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  }, [activeDataService]);
  return <View>
    <View style={[stylesMain.FrameBackground, { marginTop: 20 }]}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
        สินค้าประจำวันที่ควรช้อป!!</Text>
      {dataService && <FlatProduct {...props} dataService={dataService} numberOfColumn={2} nameFlatProduct='DetailScreen' mode='row3'
        nameSize={14} priceSize={15} dispriceSize={15} />}
    </View>
  </View>;
}

///----------------------------------------------------------------------------------------------->>>>
export let Product_Shop = (props) => {
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(undefined);
  var dataBody = { type: 'todayproduct' };
  var uri = `${ip}/mysql/DataServiceMain.php`;
  let setSlider = (value) => setSliderVisible(value);
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  useEffect(() => {
    activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  }, [activeDataService]);
  return <View>
    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>สินค้าที่คุณควรช้อป!!!</Text>
    {dataService ? <TodayProduct {...props} noTitle loadData={dataService} typeip prepath='mysql' /> : null}
  </View>;
};
