///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetData, GetServices, SlideTab2, LoadingScreen } from '../customComponents/Tools';
import { Slide } from './src_Promotion/DealScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Product_for_youScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArray: true,
      activeGetServices: true,
      activeGetCurrentUser: true,
      data: [],
      filterValue: { popular: 'popular' },
      sliderVisible: false,
    };
  }
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible })
  }
  getData = (dataService) => {
    this.setState({ activeGetServices: false, dataService })
  }
  getSource = (value) => {
    this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie });
  }
  setStatefilterValue = (value) => {
    const { dataServiceBU, filterValue, } = this.state;
    filterValue.minvalue = (value && value.minvalue ? value.minvalue : '');
    filterValue.maxvalue = (value && value.maxvalue ? value.maxvalue : '');
    filterValue.id_type = value.selectedIndex != -1 && value.selectedIndex != '' && value.listIndex == 0 ?
      dataServiceBU.category[value.selectedIndex].id_type : ''
    this.setState({ activeGetServices: true, filterValue, sliderVisible: false });
  }
  setStateMainfilterValue = (value) => {
    const { filterValue, } = this.state;
    filterValue.popular = value.selectedIndex == 0 ? 'popular' : '';
    filterValue.best_sale = value.selectedIndex == 1 ? 'best_sale' : '';
    filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
    filterValue.sort_price = value.selectedIndex == 3 ? value.actionReturn : '';
    this.setState({ activeGetServices: true, filterValue });
  }
  render() {
    const { navigation } = this.props;
    const {
      activeArray, activeGetCurrentUser, activeGetServices, cokie, currentUser, dataService, filterValue, modeStore, SearchText,
      sliderVisible,
    } = this.state;
    var uri = `${finip}/publish_store/foryou_mobile`;
    var dataBody = {
      popular: filterValue && filterValue.popular ? filterValue.popular : '',
      lastest: filterValue && filterValue.lastest ? filterValue.lastest : '',
      best_sale: filterValue && filterValue.best_sale ? filterValue.best_sale : '', // << ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
      sort_price: filterValue && filterValue.sort_price ? filterValue.sort_price : '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
      min_price: filterValue && filterValue.minvalue ? Number(filterValue.minvalue) : '',
      max_price: filterValue && filterValue.maxvalue ? Number(filterValue.maxvalue) : '',
    };
    var data = [{
      title: 'หมวดหมู่',
      subtitle: [{
        name: 'กระเป๋าสะพายข้าง'
      }, {
        name: 'กระเป๋าสะพายหลัง'
      }, {
        name: 'กระเป๋าสตางค์'
      }, {
        name: 'กระเป๋าใส่นามบัตร'
      }, {
        name: 'กระเป๋าใส่เหรียญ'
      }, {
        name: 'กระเป๋าถือ'
      }, {
        name: 'อื่นๆ'
      }]
    }, {
      title: 'แบรนด์',
      subtitle: [{
        name: 'BP world'
      }, {
        name: 'Tokyo boy'
      }, {
        name: 'JJ'
      }, {
        name: 'ETONWEAG'
      }]
    }]
    activeGetCurrentUser == false && activeGetServices == true &&
      GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), })
    activeGetCurrentUser == true &&
      GetData({ getCokie: true, getSource: this.getSource.bind(this), getUser: true, })
    return (
      <SafeAreaView style={stylesMain.SafeAreaView} key='foryou'>
        {
          (activeGetCurrentUser == true || activeGetServices == true) &&
          <LoadingScreen key='LoadingScreen' />
        }
        <AppBar1 {...this.props} backArrow titleHead='FIN คัดมาเพื่อคุณ' />
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide dataService={dataService && dataService.banner} />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar filterValue={this.setStateMainfilterValue.bind(this)}
            setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{
              getSlider: sliderVisible, count: 0
            }} />
          {
            dataService && dataService.product &&
            <TodayProduct {...this.props} noTitle loadData={dataService.product} />
          }
        </ScrollView>
        <SlideTab2 data={data} filterValue={this.setStatefilterValue.bind(this)} sliderVisible={sliderVisible}
          setStateSliderVisible={this.setSlider.bind(this)} />
        <ExitAppModule {...this.props} />
      </SafeAreaView>
    );
  }
}