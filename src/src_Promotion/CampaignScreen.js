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
import { AppBar, Slide } from './DealScreen';
export const { width, height } = Dimensions.get('window');

export default class CampaignScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <AppBar navigation={this.props.navigation}/>
        <ScrollView>
          <Slide/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///-------------------------------------------------------------------------///
