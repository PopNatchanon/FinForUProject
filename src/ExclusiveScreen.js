import React, { Component, PureComponent } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
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
export const { width, height } = Dimensions.get('window');

export default class ExclusiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView} >
        <AppBar navigation={this.props.navigation} Title='สินค้าสุด Exclusive' />
        <Slide />
        <Button_Bar />
        <ScrollView>
          <TodayProduct noTitle navigation={this.props.navigation}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
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
      <View style={stylesTopic.Button_Bar}>
      <View style={stylesTopic.Button_Bar_BoxText}>
        <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>เรียงตาม  </Text>
      </View>
      <View>
          <TabBar
            sendData={this.updateIndex}
            item={item}
            limitBox={325}
            // widthBox={98}
            activeColor={'#fff'}
            activeFontColor={'#0A55A6'}
            type='tag'
          />
      </View>
        <TouchableOpacity>
          <View style={stylesTopic.Button_Bar_Icon}>
            <IconFeather RightItem name="filter" size={20} color='#0A55A6' />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize4]}>ตัวกรอง</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

///-------------------------------------------------------------------------------///
