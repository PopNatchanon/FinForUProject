///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useEffect, useState } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData,  setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import SlidingView from 'rn-sliding-view';
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, Recommend_Brand, } from './MainScreen';
import { Slide, } from './src_Promotion/DealScreen';
import { GetData, GetServices, TabBar, ProductBox, SlideTab2, LoadingScreen } from '../customComponents/Tools';
import { Button_Bar, PricesSlide, SlideTab, } from './ExclusiveScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
import { Might_like_Store } from './src_profile/Profile_Topic';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData,  setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(FinMallScreen)
function FinMallScreen(props) {
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar1 {...props} backArrow titleHead='FIN Mall' />
    <FIN_Mall {...props} />
  </SafeAreaView>;
}
///----------------------------------------------------------------------------------------------->>>>
export let FIN_Mall = (props) => {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const [dataServiceBU, setDataServiceBU] = useState(undefined);
  const [filterValue, setFilterValue] = useState({ popular: 'popular' });
  const [sliderVisible, setSliderVisible] = useState(false);
  var data = [{
    title: 'หมวดหมู่', subtitle: [{ name: 'กระเป๋าสะพายข้าง' }, { name: 'กระเป๋าสะพายหลัง' }, { name: 'กระเป๋าสตางค์' },
    { name: 'กระเป๋าใส่นามบัตร' }, { name: 'กระเป๋าใส่เหรียญ' }, { name: 'กระเป๋าถือ' }, { name: 'อื่นๆ' }]
  }, { title: 'แบรนด์', subtitle: [{ name: 'BP world' }, { name: 'Tokyo boy' }, { name: 'JJ' }, { name: 'ETONWEAG' }] }];
  var dataBody = {
    popular: filterValue?.popular ?? '',
    lastest: filterValue?.lastest ?? '',
    best_sale: filterValue?.best_sale ?? '', // << ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
    sort_price: filterValue?.sort_price ?? '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
    min_price: filterValue?.minvalue ? Number(filterValue.minvalue) : '',
    max_price: filterValue?.maxvalue ? Number(filterValue.maxvalue) : '',
  };
  var uri = `${finip}/finmall/finmall_mobile`;
  let setSlider = (value) => setSliderVisible(value);
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  let getSource = (value) => { setActiveGetCurrentUser(false); cokie(value.keycokie); currentUser(value.currentUser); };
  let setStatefilterValue = (value) => {
    filterValue.minvalue = (value && value.minvalue ? value.minvalue : '');
    filterValue.maxvalue = (value && value.maxvalue ? value.maxvalue : '');
    filterValue.id_type = value.selectedIndex != -1 && value.selectedIndex != '' && value.listIndex == 0 ?
      dataServiceBU.category[value.selectedIndex].id_type : '';
    setActiveGetServices(true);
    setFilterValue(filterValue);
    setSliderVisible(false);
  };
  let setStateMainfilterValue = (value) => {
    filterValue.popular = value.selectedIndex == 0 ? 'popular' : '';
    filterValue.best_sale = value.selectedIndex == 1 ? 'best_sale' : '';
    filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
    filterValue.sort_price = value.selectedIndex == 3 ? value.actionReturn : '';
    setActiveGetServices(true);
    setFilterValue(filterValue);
  };
  useEffect(() => {
    activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
  }, [activeGetCurrentUser]);
  useEffect(() => {
    !activeGetCurrentUser && activeGetServices && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  }, [!activeGetCurrentUser && activeGetServices]);
  return <View key='FINMall'>
    {(activeGetCurrentUser || activeGetServices) && <LoadingScreen key='LoadingScreen' />}
    <ScrollView stickyHeaderIndices={[2]}>
      <Slide dataService={dataService && dataService.banner} />
      <View style={{ marginBottom: 10 }}></View>
      <Button_Bar filterValue={value => setStateMainfilterValue(value)} setSliderVisible={value => setSlider(value)}
        getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
      {dataService && dataService.product && <TodayProduct {...props} noTitle loadData={dataService.product} />}
    </ScrollView>
    <SlideTab2 data={data} filterValue={value => setStatefilterValue(value)} sliderVisible={sliderVisible} setStateSliderVisible={value =>
      setSlider(value)} />
    <ExitAppModule {...props} />
  </View>;
};