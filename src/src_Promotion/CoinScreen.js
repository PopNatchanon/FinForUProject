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
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide, Button_Bar } from './DealScreen';
import { CoinCollect } from '../ProfileScreen';
import { TodayProduct } from '../MainScreen';
export const { width, height } = Dimensions.get('window');


export default class CoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} Title='FIN COINS' />
        <ScrollView>
          <Slide />
          <View style={styles.Box_Text_Head}><Text>FIN COIN </Text></View>
          <CoinCollect />
          <View style={styles.Box_Text_Head}><Text> FIN จัดหนักรับ COIN เพิ่ม </Text></View>
          <TodayProduct noTitle/>
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

