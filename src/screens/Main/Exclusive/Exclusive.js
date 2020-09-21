///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesTopic from '../../../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TodayProduct, ExitAppModule, } from '../Main';
import { GetData, GetServices, TabBar, SlideTab2, LoadingScreen } from '../../../customComponents/Tools';
import { Slide, } from '../../Promotion/Deal/Deal';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
import { AppBar, BorderLRBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Exclusive)
function Exclusive(props) {
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
    <AppBar {...props} titleHead={'สินค้าสุด Exclusive'} backArrow searchBar chatBar />
    <ScrollView stickyHeaderIndices={[2]}>
      <Slide {...props} dataService={dataService?.banner} />
      <View style={{ marginBottom: 10 }} />
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
  const item = [{
    name: <Text style={stylesFont.FontSize6}>ยอดนิยม</Text>
  }, {
    name: <Text style={stylesFont.FontSize6}>สินค้าขายดี</Text>
  }, {
    name: <Text style={stylesFont.FontSize6}>ล่าสุด</Text>
  }, {
    actionItem: [{
      name: <IconMaterialIcons name='unfold-more' size={15} style={[stylesMain.ItemCenterVertical, { marginLeft: 2 }]} />,
      value: 0,
    }, {
      name: <IconMaterialIcons name='arrow-upward' size={15} style={[stylesMain.ItemCenterVertical, { marginLeft: 2 }]} />,
      value: 'min',
    }, {
      name: <IconMaterialIcons name='arrow-downward' size={15} style={[stylesMain.ItemCenterVertical, { marginLeft: 2 }]} />,
      value: 'max',
    }], name: <Text style={stylesFont.FontSize6}>ราคา</Text>
  }];
  let leftItem = <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>เรียงตาม</Text>
  let rightItem = {
    icon: <IconFeather RightItem name="filter" size={18} color={mainColor} />,
    text: <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ตัวกรอง</Text>
  }
  let updateIndex = (value, value2) => {
    value == 5 && setSliderVisible(true);
    (value != selectedIndex || value2 != 0) && value != 4 && value != 5 && filterValue({ actionReturn: value2, selectedIndex: value });
    value != selectedIndex && value != 4 && value != 5 && setSelectedIndex(value);
  };
  return <View>
    {/* <View style={stylesTopic.Button_Bar}> */}
    <BorderLRBar data={item} borderBottomWidth={4} noOpacityLeftIcon leftIcon={leftItem} leftType='text' rightIcon={rightItem}
      rightType='mix' typeActive='font' sendDataOut={(value, value2) => updateIndex(value, value2)} />
    {/* </View> */}
  </View>;
};