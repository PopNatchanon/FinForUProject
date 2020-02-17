///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import ststylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, } from '../MainScreen';
import { Button_Bar, Slide, } from './DealScreen';
import { TabBar, } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CampaignScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 titleHead={'แคมเปญ'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Campaign_tag navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Campaign_tag
export class Campaign_tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathlist: 0
    }
    this.getData = this.getData.bind(this);
  }
  PathList() {
    switch (this.state.pathlist) {
      case 0:
        return (
          <View>
            <CampaignBody navigation={this.props.navigation} />
          </View>
        )
      case 1:
        return (
          <View>
            <CampaignBody />
          </View>
        )
      case 2:
        return (
          <View>
            <CampaignBody />
          </View>
        )
      case 3:
        return (
          <View>
            <CampaignBody />
          </View>
        )
    }
  }
  getData(val) {
    this.setState({
      pathlist: val
    });
  }
  render() {
    const item = [{
      name: 'แคมเปญทั้งหมด'
    }, {
      name: 'เพชร'
    }, {
      name: 'กระเป๋า'
    }, {
      name: 'ทอง'
    }]
    const coin = 1000;
    return (
      <View>
        <View style={{ marginTop: 10 }}>
          <TabBar
            sendData={this.getData}
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
          {this.PathList()}
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> CampaignBody
export class CampaignBody extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={ststylePromotionDeal.CampaignBody}>
          <View style={ststylePromotionDeal.CampaignBody_BoxImage}>
            <FastImage
              source={{
                uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',
              }}
              style={ststylePromotionDeal.CampaignBody_Image}
            />
          </View>
          <View style={[ststylePromotionDeal.CampaignBody_Box]}>
            <View style={ststylePromotionDeal.CampaignBody_BoxText}>
              <Text numberOfLines={2} style={stylesFont.FontFamilyBold}>ส่วนลด 10% สำหรับร้าน เพชร </Text>
              <Text numberOfLines={1} style={stylesFont.FontFamilyText}>วันหมดอายุ 03-02-2020</Text>
            </View>
            <View style={[ststylePromotionDeal.CampaignBody_Icon_Button, stylesMain.ItemCenterVertical]}>
              <View style={[ststylePromotionDeal.CampaignBody_Icon, stylesMain.ItemCenterVertical]}>
                <IconEntypo name='share' size={20} color='#0A55A6' />
              </View>
              <TouchableOpacity activeOpacity={1} onPress={() =>
                this.props.navigation.navigate('Detail_Campaign', { selectedIndex: 0 })}>
                <View style={[ststylePromotionDeal.CampaignBody_Button, stylesMain.ItemCenterVertical]}>
                  <Text style={[stylesFont.FontFamilyBold, ststylePromotionDeal.CampaignBody_ButtonText, stylesMain.ItemCenterVertical]}>รายละเอียด</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}