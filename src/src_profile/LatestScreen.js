// หน้าดูล่าสุด
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
import { PopularProduct } from '../StoreScreen';
import { ip } from '../../navigator/IpConfig';

export const { width, height } = Dimensions.get('window');

export default class LatestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} />
        <ScrollView>
          <PopularProduct navigation={this.props.navigation} noHeadText />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///----------------------------------Appbar----------------------------------------///

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { Title } = this.props
    return (
      <View style={stylesPro.Appbar} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
        </TouchableOpacity>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { marginTop: 5 }]}>{Title ? Title : 'ดูล่าสุด'}</Text>
      </View>
    );
  }
}

///-----------------------------------------------------------------------------///



