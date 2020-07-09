///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData,  setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, } from './MainScreen';
import { GetData, GetServices, TabBar, SlideTab2, LoadingScreen } from '../customComponents/Tools';
import { Slide, } from './src_Promotion/DealScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData,  setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveScreen)
function ExclusiveScreen(props) {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const [dataServiceBU, setDataServiceBU] = useState(undefined);
  const [filterValue, setFilterValue] = useState({ popular: 'popular' });
  const [sliderVisible, setSliderVisible] = useState(false);
  var uri = `${finip}/highlight/exclusive_mobile`;
  var dataBody = {
    popular: filterValue?.popular ?? '', // ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
    lastest: filterValue?.lastest ?? '', //..ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
    best_sale: filterValue?.best_sale ?? '', //  ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
    sort_price: filterValue?.sort_price ?? '', // เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
    min_price: filterValue?.minvalue ?? '',
    max_price: filterValue?.maxvalue ?? '',
  };
  var data = [{
    title: 'หมวดหมู่', subtitle: [{ name: 'กระเป๋าสะพายข้าง' }, { name: 'กระเป๋าสะพายหลัง' }, { name: 'กระเป๋าสตางค์' },
    { name: 'กระเป๋าใส่นามบัตร' }, { name: 'กระเป๋าใส่เหรียญ' }, { name: 'กระเป๋าถือ' }, { name: 'อื่นๆ' }]
  }, { title: 'แบรนด์', subtitle: [{ name: 'BP world' }, { name: 'Tokyo boy' }, { name: 'JJ' }, { name: 'ETONWEAG' }] }];
  let setSlider = (value) => setSliderVisible(value);
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
  let setStatefilterValue = (value) => {
    filterValue.minvalue = value?.minvalue ?? '';
    filterValue.maxvalue = value?.maxvalue ?? '';
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
    activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
  }, [activeGetSource]);
  useEffect(() => {
    !activeGetSource && activeGetServices && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  }, [!activeGetSource && activeGetServices]);
  return <SafeAreaView style={stylesMain.SafeAreaView} key='Exclusive'>
    {(activeGetSource || activeGetServices) && <LoadingScreen key='LoadingScreen' />}
    <AppBar1 {...props} titleHead={'สินค้าสุด Exclusive'} backArrow searchBar chatBar />
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
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
  const { filterValue, setSliderVisible } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const item = [
    { name: 'ยอดนิยม' }, { name: 'สินค้าขายดี' }, { name: 'ล่าสุด' }, {
      actionItem: [
        <IconMaterialIcons name='unfold-more' size={15} style={[stylesMain.ItemCenterVertical, { color: '#6C6C6C', marginLeft: 2 }]} />,
        <IconMaterialIcons name='arrow-upward' size={15} style={[stylesMain.ItemCenterVertical, { color: mainColor, marginLeft: 2 }]} />,
        <IconMaterialIcons name='arrow-downward' size={15} style={[stylesMain.ItemCenterVertical, { color: mainColor, marginLeft: 2 }]} />
      ], actionList: [1, 2], actionReturn: ['min', 'max'], name: 'ราคา'
    }];
  let updateIndex = (value) => { filterValue(value.selectedIndex * 1); setSelectedIndex(value.selectedIndex * 1); };
  let setSliderVisibles = () => setSliderVisible(true);
  return <View>
    <View style={stylesTopic.Button_Bar}>
      <View style={[stylesMain.ItemCenterVertical, stylesTopic.Button_Bar_BoxText]}>
        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>เรียงตาม</Text>
      </View>
      <View>
        <TabBar sendData={value => updateIndex(value)} item={item} limitBox={width * 0.7} setVertical={2} activeColor={'#fff'}
          activeFontColor={mainColor} type='tag' />
      </View>
      <TouchableOpacity onPress={() => setSliderVisibles()}>
        <View style={[stylesMain.ItemCenterVertical, stylesTopic.Button_Bar_Icon, { borderLeftColor: 'black', borderLeftWidth: 1.2 }]}>
          <IconFeather RightItem name="filter" size={18} color={mainColor} />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ตัวกรอง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>;
};