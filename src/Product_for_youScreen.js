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
import { TodayProduct } from './MainScreen';
import { Button_Bar } from './ExclusiveScreen';
export const { width, height } = Dimensions.get('window');

export default class Product_for_youScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
          <AppBar navigation={this.props.navigation} Title='FIN คัดมาเพื่อคุณ' />
          <Slide/>
          <Button_Bar/>
          <ScrollView>
              <TodayProduct noTitle/>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------------///