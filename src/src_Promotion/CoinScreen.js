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
import { AppBar1, TodayProduct, ExitAppModule } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { CoinCollect } from '../ProfileScreen';
import { GetServices, ProductBox } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  render() {
    const { dataService } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <AppBar1 titleHead={'FIN COINS'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 100 ,marginTop:10}]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN COIN</Text>
          </View>
          <CoinCollect />
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 160 ,marginTop:10}]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN จัดหนักรับ COIN เพิ่ม</Text>
          </View>
          {
            dataService ?
              <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
              null
          }
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
        <ExitAppModule navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///----------------------------------------------------------------------------------------------->>>>

