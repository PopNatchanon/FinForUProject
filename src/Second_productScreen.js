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
import stylesMain from '../style/StylesMainScreen';
import styles from '../style/stylePromotion-src/styleDealScreen';
import stylesStore from '../style/StylesStoreScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import stylesFont from '../style/stylesFont';
import { Slide } from './src_Promotion/DealScreen';
import { TodayProduct, AppBar, BannerBar_TWO } from './MainScreen';
export const { width, height } = Dimensions.get('window');

export default class Second_productScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar leftBar='backarrow' navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Second_Store />
          <Second_Product_Brand />
          <BannerBar_TWO/>
          <TodayProduct noTitle navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///--------------------------------------------------------------------------///

export class Second_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[stylesMain.FrameBackground, { paddingBottom: 10 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}> ร้านค้ามือสองที่แนะนำ </Text>
          <TouchableOpacity>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: '100%' }]}>
          <View>
            <View style={{ height: 90, width: 200 }}>
              <FastImage
                source={{ uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg', }}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View style={{ width: 200, height: 40, backgroundColor: '#0A55A6' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#FFFFFF', marginLeft: 5 }]}>ร้าน K.O.D สินค้ามือสองดูดีสไตล์ ลดสูงสุดกว่า 80% ทุกรายการ</Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, }}>
            <View style={{ height: 90, width: 200, }}>
              <FastImage
                source={{ uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg', }}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View style={{ width: 200, height: 40, backgroundColor: '#0A55A6' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#FFFFFF', marginLeft: 5 }]}>ร้าน K.O.D สินค้ามือสองดูดีสไตล์ ลดสูงสุดกว่า 80% ทุกรายการ</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Second_Product_Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[stylesMain.FrameBackground,{padding:5}]}>
        <Text  style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}> สินค้ามือสองแบรนด์ดัง </Text>
      </View>
    );
  }
}

