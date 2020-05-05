///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
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
import { GetData, GetServices, TabBar, ProductBox, SlideTab2, LoadingScreen } from './tools/Tools';
import { Button_Bar, PricesSlide, SlideTab, } from './ExclusiveScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
import { Might_like_Store } from './src_profile/Profile_Topic';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FinMallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
      dataService: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, loadData } = this.props
    if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible })
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow navigation={navigation} titleHead='FIN Mall' />
        <FIN_Mall navigation={navigation} />
      </SafeAreaView>
    );
  }
}

///----------------------------------------------------------------------------------------------->>>>
export class FIN_Mall extends React.Component {
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
    console.log(value)
    const { dataServiceBU, filterValue, } = this.state;
    filterValue.minvalue = (value && value.minvalue ? value.minvalue : '');
    filterValue.maxvalue = (value && value.maxvalue ? value.maxvalue : '');
    filterValue.id_type = value.selectedIndex != -1 && value.selectedIndex != '' && value.listIndex == 0 ?
      dataServiceBU.category[value.selectedIndex].id_type : ''
    console.log(filterValue)
    this.setState({ activeGetServices: true, filterValue, sliderVisible: false });
  }
  setStateMainfilterValue = (value) => {
    const { filterValue, } = this.state;
    console.log(value);
    filterValue.popular = value.selectedIndex == 0 ? 'popular' : '';
    filterValue.best_sale = value.selectedIndex == 1 ? 'best_sale' : '';
    filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
    filterValue.sort_price = value.selectedIndex == 3 ? value.actionReturn : '';
    // console.log(filterValue);
    this.setState({ activeGetServices: true, filterValue });
  }
  render() {
    const { navigation } = this.props;
    const { activeGetCurrentUser, activeGetServices, dataService, filterValue,
      sliderVisible, } = this.state;
    var uri = finip + '/finmall/finmall_mobile';
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
    return (
      <View key='FINMall'>
        {[
          (activeGetCurrentUser == true || activeGetServices == true) &&
          <LoadingScreen key='LoadingScreen' />,
          activeGetCurrentUser == false && activeGetServices == true &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)}
            showConsole='exclusive_mobile' />,
          activeGetCurrentUser == true &&
          <GetData getCokie={true} getSource={this.getSource.bind(this)} getUser={true} key={'GetData'} />
        ]}
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide dataService={dataService && dataService.banner} />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar filterValue={this.setStateMainfilterValue.bind(this)}
            setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{
              getSlider: sliderVisible, count: 0
            }} />
          {
            dataService && dataService.product &&
            <TodayProduct noTitle navigation={navigation} loadData={dataService.product} />
          }
        </ScrollView>
        <SlideTab2 data={data} filterValue={this.setStatefilterValue.bind(this)} sliderVisible={sliderVisible}
          setStateSliderVisible={this.setSlider.bind(this)} />
        <ExitAppModule navigation={navigation} />
      </View>
    );
  }
}