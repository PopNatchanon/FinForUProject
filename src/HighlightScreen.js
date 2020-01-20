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
import styles from '../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
import { FlashSale_Product } from './FlashSaleScreen';
export const { width, height } = Dimensions.get('window');

export default class HighlightScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} />
        <Slide />
        <Button_Bar />
        <ScrollView>
          <FlashSale_Product/>
          <FlashSale_Product/>
          <FlashSale_Product/>
          <FlashSale_Product/>
          <FlashSale_Product/>
          <FlashSale_Product/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

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
      name: 'ทั้งหมด'
    }, {
      name: 'อัญมณีและ..'
    }, {
      name: 'ทอง'
    }, {
      name: 'เครื่องเงิน'
    }, {
      name: 'พระและ..'
    }, {
      name: 'นาฬิกา'
    }, {
      name: 'กระเป๋า'
    }, {
      name: 'บ้านและสวน'
    }, {
      name: 'รองเท้า'
    }, {
      name: 'สุขภาพและ..'
    }]
    return (
      <View style={{ width: '100%', height: 40, backgroundColor:'#FFFFFF',}}>
        <ScrollView horizontal>
          <TabBar
            sendData={this.updateIndex}
            item={item}
            noLimit
            // widthBox={98}
            activeColor={'#fff'}
            activeFontColor={'#0A55A6'}
            type='tag'
          />
        </ScrollView>
      </View>
    );
  }
}
