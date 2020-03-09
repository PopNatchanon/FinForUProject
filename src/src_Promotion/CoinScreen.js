///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { GetServices, ProductBox, TabBar, } from '../tools/Tools';
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
export class CoinCollect extends Component {
  constructor(props) {
      super(props)
      this.state = {
          pathlist: 0
      }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
      const { pathlist } = this.state
      const { navigation } = this.props
      if (pathlist !== nextState.pathlist || navigation !== nextProps.navigation) {
          return true
      }
      return false
  }
  get PathList() {
      const { pathlist } = this.state
      switch (pathlist) {
          case 0:
              return (
                  <View>
                      <CoinPageBody />
                  </View>
              )
          case 1:
              return (
                  <View>
                      <CoinPageBody />
                  </View>
              )
          case 2:
              return (
                  <View>
                      <CoinPageBody />
                  </View>
              )
          case 3:
              return (
                  <View>
                      <CoinPageBody />
                  </View>
              )
      }
  }
  getData = (pathlist) => {
      this.setState({ pathlist });
  }
  render() {
      const item = [{
          name: 'คูปองทั้งหมด'
      }, {
          name: 'ท่องเที่ยว'
      }, {
          name: 'ส่วนลด'
      }, {
          name: 'อื่นๆ'
      }]
      const coin = 1000;
      return (
          <View>
              <View style={stylesProfile.CoinCollect}>
                  <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, stylesMain.FlexRow, { width }]}>
                      <FastImage
                          source={require('../../icon/bitcoin2.png')}
                          style={stylesProfile.CoinCollectImage}
                      />
                      <View style={stylesProfile.CoinCollectBox}>
                          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { marginTop: 10, marginLeft: 20, }]}>
                              FIN COIN</Text>
                          <View style={stylesMain.ItemCenter}>
                              <NumberFormat
                                  value={coin}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  renderText={
                                      value => <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                                          {value}</Text>
                                  }
                              />
                          </View>
                      </View>
                  </View>
              </View>
              <View style={{ marginTop: 10 }}>
                  <TabBar
                      sendData={this.getData.bind(this)}
                      inactiveBoxColor={'#fff'}
                      inactiveColor={'#0A55A6'}
                      inactiveFontColor={'#0A55A6'}
                      item={item}
                      widthBox={98}
                      fontSizeStyle={12}
                      type='box'
                  />
              </View>
              <View>
                  {this.PathList}
              </View>
          </View>
      )
  }
}
///----------------------------------------------------------------------------------------------->>>> CoinPageBody
export class CoinPageBody extends Component {
  render() {
      return (
          <View style={stylesMain.ItemCenter}>
              <View style={stylesProfile.CoinPageBody}>
                  <View style={{ width: '100%', height: 140 }}>
                      <FastImage
                          source={{
                              uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',
                          }}
                          style={{ width: '100%', height: '100%' }}
                      />
                  </View>
                  <View style={[stylesMain.FlexRow, stylesProfile.CoinPageBodyBox]}>
                      <View style={stylesProfile.CoinPageBodyBoxBody1}>
                          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                              ส่วนลด 10% สำหรับร้าน เพชร</Text>
                      </View>
                      <View style={[stylesProfile.CoinPageBodyBoxBody2, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                          <View style={[stylesProfile.CoinPageBodyBoxBody2Box, stylesMain.ItemCenter]}>
                              <Text style={[
                                  stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#fff' }
                              ]}>
                                  แลก 10 coin</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      )
  }
}
