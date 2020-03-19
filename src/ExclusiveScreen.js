///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, } from './MainScreen';
import { GetServices, TabBar, SlideTab2, } from './tools/Tools';
import { Slide, } from './src_Promotion/DealScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class ExclusiveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
      sliderVisible: false,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    const { dataService, sliderVisible } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible
    ) {
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
  render() {
    const { navigation } = this.props
    const { dataService, sliderVisible } = this.state
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'todayproduct'
    };
    const data = [{
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
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        <AppBar1 titleHead={'สินค้าสุด Exclusive'} backArrow searchBar chatBar navigation={navigation} />
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar setSliderVisible={this.setSlider.bind(this)} />
          {
            dataService &&
            <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' />
          }
        </ScrollView>
        <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { setSliderVisible } = this.props;
    const { selectedIndex } = this.state;
    if (
      ////>nextProps
      setSliderVisible !== nextProps.setSliderVisible ||
      ////>nextState
      selectedIndex !== nextState.selectedIndex
    ) {
      return true
    }
    return false
  }
  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }
  setSliderVisible = () => {
    const { setSliderVisible } = this.props;
    setSliderVisible(true)
  }
  render() {
    const item = [{
      name: 'ยอดนิยม'
    }, {
      name: 'สินค้าขายดี'
    }, {
      name: 'ล่าสุด'
    }, {
      name: 'ราคา'
    }]
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
              activeFontColor={'#0A55A6'}
              type='tag' />
          </View>
          <TouchableOpacity onPress={this.setSliderVisible}>
            <View style={[stylesMain.ItemCenterVertical, stylesTopic.Button_Bar_Icon, { borderLeftColor: 'black', borderLeftWidth: 1.2 }]}>
              <IconFeather RightItem name="filter" size={18} color='#0A55A6' />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ตัวกรอง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}