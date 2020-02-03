import React, { Component, PureComponent } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import stylesTopic from '../style/styleTopic';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
import { FlashSale_Product } from './FlashSaleScreen';
import { TodayProduct } from './MainScreen';
import SlidingView from 'rn-sliding-view';
export const { width, height } = Dimensions.get('window');

export default class ExclusiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
    };
    this.setSlider = this.setSlider.bind(this)
  }
  setSlider(value) {
    const { sliderVisible } = this.state
    this.setState({ sliderVisible: value })
    console.log('run')
    console.log('sliderVisible')
    console.log(sliderVisible)
  }
  render() {
    const { sliderVisible } = this.state
    console.log('Main')
    console.log('sliderVisible')
    console.log(sliderVisible)
    return (
      <SafeAreaView style={stylesMain.SafeAreaView} >
        <AppBar navigation={this.props.navigation} Title='สินค้าสุด Exclusive' />
        <Slide />
        <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
        <ScrollView>
          <TodayProduct noTitle navigation={this.props.navigation} />
        </ScrollView>
        <SlidingView
          disableDrag
          componentVisible={sliderVisible}
          containerStyle={{
            backgroundColor: null,
            justifyContent: 'center',
            alignContent: 'stretch',
            width: '100%'
          }}
          position="right"
          changeVisibilityCallback={() => this.setState({ sliderVisible: !sliderVisible })}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ sliderVisible: !sliderVisible })}
            >
              <View style={{ width: width * 0.25, height: '100%' }}></View>
            </TouchableOpacity>
            <View style={{ width: width * 0.75, height: '100%', backgroundColor: '#fff' }}><SlideTab /></View>
          </View>
        </SlidingView>
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------------///

export class SlideTab extends Component {
  render() {
    return (
      <View>
        <View style={{ width: '100%', backgroundColor: '#D5D5D5', height: 30 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, stylesMain.ItemCenterVertical, { marginLeft: 8 }]}>
            ค้นหาแบบละเอียด</Text>
        </View>
      </View>
    )
  }
}

///-------------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      sliderVisible: false,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    const { getSliderVisible } = this.props;
    while (getSliderVisible.count < 1) {
      getSliderVisible.count = getSliderVisible.count + 1
      var Slider = getSliderVisible.getSlider
      console.log(getSliderVisible)
      this.setState({ sliderVisible: Slider, getSliderVisible })
    }
    const { sliderVisible } = this.state;
    console.log('Sub')
    console.log('sliderVisible')
    console.log(sliderVisible)
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
          <View style={stylesTopic.Button_Bar_BoxText}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>เรียงตาม</Text>
          </View>
          <View>
            <TabBar
              sendData={this.updateIndex}
              item={item}
              limitBox={350}
              // widthBox={98}
              activeColor={'#fff'}
              activeFontColor={'#0A55A6'}
              type='tag'
            />
          </View>
          <TouchableOpacity onPress={() => {
            this.setState({ sliderVisible: !sliderVisible })
            this.props.setSliderVisible(!sliderVisible)
          }}>
            <View style={stylesTopic.Button_Bar_Icon}>
              <IconFeather RightItem name="filter" size={20} color='#0A55A6' />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ตัวกรอง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slidingText: {
    textAlign: 'center',
    marginTop: 20,
    width: '100%',
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
});
///-------------------------------------------------------------------------------///
