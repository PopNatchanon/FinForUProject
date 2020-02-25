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
import { AppBar1, ExitAppModule } from './MainScreen';
import { FlashSale_Product } from './FlashSaleScreen';
import { Slide } from './src_Promotion/DealScreen';
import { GetServices, TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from './navigator/IpConfig';
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
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
          <FlashSale_Product navigation={navigation} />
        </ScrollView>
        <ExitAppModule navigation={navigation} />
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
      dataService: [],
    };
    this.updateIndex = this.updateIndex.bind(this)
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    const { dataService } = this.state
    var uri = finip + '/home/category_mobile';
    var item2 = [{
      name: 'ทั้งหมด'
    }]
    dataService.map((item) => { return item2.push({ name: item.name }) })
    return (
      <View style={{ width: '100%', height: 40, backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderWidth: 1, }}>
        <GetServices uriPointer={uri} getDataSource={this.getData} />
        <ScrollView horizontal>
          <TabBar
            sendData={this.updateIndex}
            item={item2}
            noLimit
            numberBox
            numberOfLines={1}
            activeColor={'#fff'}
            activeFontColor={'#111'}
            tagBottomColor={'#0A55A6'}
            tagBottom
            type='tag'
          />
        </ScrollView>
      </View>
    );
  }
}
