///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { CoinCollect } from '../ProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class CoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 titleHead={'FIN COINS'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 100 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN COIN</Text>
          </View>
          <CoinCollect />
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 160 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN จัดหนักรับ COIN เพิ่ม</Text>
          </View>
          <TodayProduct noTitle />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

