///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TodayProduct, ExitAppModule, } from '../Main';
import { Button_Bar, } from '../Exclusive/Exclusive';
import { GetData, GetServices, SlideTab2, LoadingScreen } from '../../../customComponents/Tools';
import { Slide } from '../../Promotion/Deal/Deal';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
import { AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProductForYou);
function ProductForYou(props) {
  const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const [dataServiceBU, setDataServiceBU] = useState(undefined);
  const [filterValue, setFilterValue] = useState({ popular: 'popular' });
  const [modeStore, setModeStore] = useState(undefined);
  const [searchText, setSearchText] = useState(undefined);
  const [sliderVisible, setSliderVisible] = useState(false);
  var data = [{
    title: 'หมวดหมู่', subtitle: [{ name: 'กระเป๋าสะพายข้าง' }, { name: 'กระเป๋าสะพายหลัง' }, { name: 'กระเป๋าสตางค์' },
    { name: 'กระเป๋าใส่นามบัตร' }, { name: 'กระเป๋าใส่เหรียญ' }, { name: 'กระเป๋าถือ' }, { name: 'อื่นๆ' }]
  }, {
    title: 'แบรนด์', subtitle: [{ name: 'BP world' }, { name: 'Tokyo boy' }, { name: 'JJ' }, { name: 'ETONWEAG' }]
  }];
  var dataBody = {
    popular: filterValue?.popular ?? '',
    lastest: filterValue?.lastest ?? '',
    best_sale: filterValue?.best_sale ?? '', // << ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
    sort_price: filterValue?.sort_price ?? '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
    min_price: filterValue?.minvalue ? Number(filterValue.minvalue) : '',
    max_price: filterValue?.maxvalue ? Number(filterValue.maxvalue) : '',
  };
  var uri = `${finip}/publish_store/foryou_mobile`;
  let setSlider = (value) => setSliderVisible(value);;
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
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
    activeGetCurrentUser && GetData({ getCokie: true, getSource: (value) => getSource(value), getUser: true, });
  }, [activeGetCurrentUser])
  useEffect(() => {
    !activeGetCurrentUser && activeGetServices && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value), });
  }, [!activeGetCurrentUser && activeGetServices])
  return <SafeAreaView style={stylesMain.SafeAreaView} key='foryou'>
    {(activeGetCurrentUser || activeGetServices) && <LoadingScreen key='LoadingScreen' />}
    <AppBar {...props} backArrow titleHead='FIN คัดมาเพื่อคุณ' />
    <ScrollView stickyHeaderIndices={[2]}>
      <Slide dataService={dataService && dataService.banner} />
      <View style={{ marginBottom: 10 }} />
      <Button_Bar filterValue={(value) => setStateMainfilterValue(value)} setSliderVisible={(value) => setSlider(value)}
        getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
      {dataService && dataService.product && <TodayProduct {...props} noTitle loadData={dataService.product} />}
    </ScrollView>
    <SlideTab2 data={data} filterValue={(value) => setStatefilterValue(value)} sliderVisible={sliderVisible}
      setStateSliderVisible={(value) => setSlider(value)} />
    <ExitAppModule {...props} />
  </SafeAreaView>;
};