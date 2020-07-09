///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import {
  activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
  setDataRefresh, setDataStart, setFetchToStart
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, AppBar1, BannerBar_ONE, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, ProductBox, SlideTab2, NavigationNavigateScreen, FlatProduct, } from '../customComponents/Tools';
import { Slide, } from './src_Promotion/DealScreen';
import { Store_Detail, } from './Recommend_Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
  reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
  activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
  setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
function SecondScreen(props) {
  const { route } = props;
  const selectedIndex = route.params?.selectedIndex;
  let PathList = () => {
    switch (selectedIndex) {
      case 0:
        return <SafeAreaView style={stylesMain.SafeAreaView}>
          <AppBar {...props} backArrow cartBar />
          <Second_Product {...props} />
        </SafeAreaView>;
      case 1:
        return <SafeAreaView style={stylesMain.SafeAreaView}>
          <AppBar1 {...props} titleHead={'ร้านค้ามือสองที่แนะนำ'} backArrow />
          <Secon_Store />
        </SafeAreaView>;
    };
  };
  return <View style={{ flex: 1 }}>
    {PathList()}
    <ExitAppModule {...props} />
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Product
export let Second_Product = (props) => {
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  const [sliderVisible, setSliderVisible] = useState(false);
  const data = [{
    title: 'หมวดหมู่', subtitle: [
      { name: 'กระเป๋าสะพายข้าง' }, { name: 'กระเป๋าสะพายหลัง' }, { name: 'กระเป๋าสตางค์' }, { name: 'กระเป๋าใส่นามบัตร' },
      { name: 'กระเป๋าใส่เหรียญ' }, { name: 'กระเป๋าถือ' }, { name: 'อื่นๆ' }]
  },
  { title: 'แบรนด์', subtitle: [{ name: 'BP world' }, { name: 'Tokyo boy' }, { name: 'JJ' }, { name: 'ETONWEAG' }] }];
  var dataBody = { type: 'todayproduct' };
  var uri = `${ip}/mysql/DataServiceMain.php`;
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  let setSlider = (value) => setSliderVisible(value);;
  useEffect(() => {
    activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value) });
  }, [activeDataService]);
  return <View style={{ flex: 1 }}>
    <ScrollView stickyHeaderIndices={[5]}>
      <Slide {...props} />
      <Second_Store {...props} />
      <Second_Product_Brand {...props} />
      <View style={{ marginBottom: 2 }}></View>
      <BannerBar_ONE />
      <View style={{ marginBottom: 3 }}></View>
      <Button_Bar setSliderVisible={(value) => setSlider(value)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
      {dataService && <TodayProduct {...props} noTitle loadData={dataService} typeip prepath='mysql' />}
    </ScrollView>
    <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={(value) => setSlider(value)} />
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Store
export let Second_Store = (props) => {
  const { navigation } = props;
  return <View style={stylesMain.FrameBackground2}>
    <View style={stylesMain.FrameBackgroundTextBox}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ร้านค้ามือสองที่แนะนำ</Text>
    </View>
    <View style={stylesMain.FlexRow}>
      <View style={[stylesMain.BoxStoreSecond]}>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'Recommend_Store', navigation })}>
          <FastImage style={[stylesMain.BoxStore1Image]} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`, }}
            resizeMode={FastImage.resizeMode.stretch} />
        </TouchableOpacity>
      </View>
      <View style={[stylesMain.BoxStoreSecond]}>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'Recommend_Store', navigation })}>
          <FastImage style={[stylesMain.BoxStore1Image]} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`, }}
            resizeMode={FastImage.resizeMode.stretch} />
        </TouchableOpacity>
      </View>
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Product_Brand
export let Second_Product_Brand = (props) => {
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var dataBody = { type: 'sale' };
  var uri = `${ip}/mysql/DataServiceMain.php`;
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  useEffect(() => {
    activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value) })
  }, [activeDataService]);
  return <View style={stylesMain.FrameBackground2}>
    <View style={stylesMain.FrameBackgroundTextBox}>
      <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>สินค้ามือสองแบรนด์ดัง</Text>
      </View>
    </View>
    {dataService && <FlatProduct {...props} custumNavigation='Second_Product_Brand' dataService={dataService} mode='row4'
      nameFlatProduct='Second_Product_Brand' nameSize={11} priceSize={12} dispriceSize={12} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Secon_Store
export let Secon_Store = (props) => {
  return <View style={{ flex: 1 }}>
    <ScrollView>
      <Slide />
      <View style={{ alignItems: 'center', marginTop: 10, }}>
        <View style={{
          backgroundColor: mainColor, width: 170, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5,
        }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สินค้าที่คุณอาจชอบ</Text>
        </View>
      </View>
    </ScrollView>
  </View>;
};