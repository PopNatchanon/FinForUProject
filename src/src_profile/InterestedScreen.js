// หน้าสิ่งที่สนใจ
import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import {ip} from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';
import { PopularProduct } from '../StoreScreen';

export const { width, height } = Dimensions.get('window');

export default class InterestedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
      <Appbar  navigation={this.props.navigation} Title='สิ่งที่สนใจ'/>
        <ScrollView>
        <PopularProduct navigation={this.props.navigation} noHeadText/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}



///-----------------------------------------------------------------------------///
