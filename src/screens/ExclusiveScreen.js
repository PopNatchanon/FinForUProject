///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
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
export default class ExclusiveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArray: true,
      activeGetServices: true,
      activeGetSource: true,
      data: [],
      filterValue: { popular: 'popular' },
      sliderVisible: false,
    };
  };
  componentDidMount() {
    const { activeGetSource, } = this.state;
    activeGetSource == true && GetData({ getCokie: true, getUser: true, getSource: this.getSource.bind(this) });
  };
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible });
  };
  getData = (dataService) => {
    this.setState({ activeGetServices: false, dataService });
  };
  getSource = (value) => {
    this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie, });
  };
  setStatefilterValue = (value) => {
    const { dataServiceBU, filterValue, } = this.state;
    filterValue.minvalue = (value && value.minvalue ? value.minvalue : '');
    filterValue.maxvalue = (value && value.maxvalue ? value.maxvalue : '');
    filterValue.id_type = value.selectedIndex != -1 && value.selectedIndex != '' && value.listIndex == 0 ?
      dataServiceBU.category[value.selectedIndex].id_type : '';
    this.setState({ activeGetServices: true, filterValue, sliderVisible: false });
  };
  setStateMainfilterValue = (value) => {
    const { filterValue, } = this.state;
    filterValue.popular = value.selectedIndex == 0 ? 'popular' : '';
    filterValue.best_sale = value.selectedIndex == 1 ? 'best_sale' : '';
    filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
    filterValue.sort_price = value.selectedIndex == 3 ? value.actionReturn : '';
    this.setState({ activeGetServices: true, filterValue });
  };
  render() {
    const { activeGetSource, activeGetServices, dataService, filterValue, sliderVisible, } = this.state;
    var uri = `${finip}/highlight/exclusive_mobile`;
    var dataBody = {
      popular: filterValue && filterValue.popular ? filterValue.popular : '', // ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
      lastest: filterValue && filterValue.lastest ? filterValue.lastest : '', //..ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
      best_sale: filterValue && filterValue.best_sale ? filterValue.best_sale : '', //  ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
      sort_price: filterValue && filterValue.sort_price ? filterValue.sort_price : '', // เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
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
    }];
    activeGetSource == false && activeGetServices == true &&
      GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), });
    return (
      <SafeAreaView style={stylesMain.SafeAreaView} key='Exclusive'>
        {
          (activeGetSource == true || activeGetServices == true) &&
          <LoadingScreen key='LoadingScreen' />
        }
        <AppBar1 {...this.props} titleHead={'สินค้าสุด Exclusive'} backArrow searchBar chatBar />
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
  };
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  };
  updateIndex = (value) => {
    const { filterValue } = this.props;
    filterValue(value.selectedIndex);
    this.setState({ selectedIndex: value.selectedIndex });
  };
  setSliderVisible = () => {
    const { setSliderVisible } = this.props;
    setSliderVisible(true);
  };
  render() {
    const item = [{
      name: 'ยอดนิยม'
    }, {
      name: 'สินค้าขายดี'
    }, {
      name: 'ล่าสุด'
    }, {
      actionItem: [
        <IconMaterialIcons name='unfold-more' size={15} style={[stylesMain.ItemCenterVertical, { color: '#6C6C6C', marginLeft: 2 }]} />,
        <IconMaterialIcons name='arrow-upward' size={15} style={[stylesMain.ItemCenterVertical, { color: mainColor, marginLeft: 2 }]} />,
        <IconMaterialIcons name='arrow-downward' size={15} style={[stylesMain.ItemCenterVertical, { color: mainColor, marginLeft: 2 }]} />
      ],
      actionList: [1, 2],
      actionReturn: ['min', 'max'],
      name: 'ราคา'
    }];
    return (
      <View>
        <View style={stylesTopic.Button_Bar}>
          <View style={[stylesMain.ItemCenterVertical, stylesTopic.Button_Bar_BoxText]}>
            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
              เรียงตาม</Text>
          </View>
          <View>
            <TabBar
              sendData={this.updateIndex.bind(this)}
              item={item}
              limitBox={width * 0.7}
              setVertical={2}
              activeColor={'#fff'}
              activeFontColor={mainColor}
              type='tag' />
          </View>
          <TouchableOpacity onPress={() => this.setSliderVisible()}>
            <View style={[stylesMain.ItemCenterVertical, stylesTopic.Button_Bar_Icon, { borderLeftColor: 'black', borderLeftWidth: 1.2 }]}>
              <IconFeather RightItem name="filter" size={18} color={mainColor} />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ตัวกรอง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};