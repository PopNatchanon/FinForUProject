///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from './MainScreen';
import { FlashSale_Product } from './FlashSaleScreen';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class HighlightScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow navigation={navigation} titleHead='ไฮไลท์ประจำสัปดาห์' />
        <ScrollView>
          <Slide />
          <Button_Bar />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Main
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
      name: 'ทั้งหมด',
      subname: ' '
    }, {
      name: 'อัญมณีและ..',
      subname: ' '
    }, {
      name: 'ทอง',
      subname: ' '
    }, {
      name: 'เครื่องเงิน',
      subname: ' '
    }, {
      name: 'พระและ..',
      subname: ' '
    }, {
      name: 'นาฬิกา',
      subname: ' '
    }, {
      name: 'กระเป๋า',
      subname: ' '
    }, {
      name: 'บ้านและสวน',
      subname: ' '
    }, {
      name: 'รองเท้า',
      subname: ' '
    }, {
      name: 'สุขภาพและ..',
      subname: ' '
    }]
    return (
      <View style={{ width: '100%', height: 40, backgroundColor: '#FFFFFF', }}>
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
