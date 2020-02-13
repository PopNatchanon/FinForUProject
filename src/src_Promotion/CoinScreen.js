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
import styles from '../../style/stylePromotion-src/styleDealScreen';
import styleMain from '../../style/StylesMainScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { Slide, Button_Bar } from './DealScreen';
import { CoinCollect } from '../ProfileScreen';
import { TodayProduct, AppBar1 } from '../MainScreen';
import stylesFont from '../../style/stylesFont';
export const { width, height } = Dimensions.get('window');


export default class CoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <AppBar1 titleHead={'FIN COINS'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', }]}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>FIN COIN </Text></View>
          <CoinCollect />
          <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', }]}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}> FIN จัดหนักรับ COIN เพิ่ม </Text></View>
          <TodayProduct noTitle />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

