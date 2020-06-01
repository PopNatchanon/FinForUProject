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
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import ststylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, Slide, } from '../MainScreen';
import { Button_Bar, } from './DealScreen';
import { TabBar, GetData, GetServices, LoadingScreen, NavigationNavigateScreen, } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CampaignScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDataService: true,
      activeGetCurrentUser: true,
    };
  }
  getSource = (value) => {
    this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, });
  }
  getData = (dataService) => {
    this.setState({ dataService, activeDataService: false })
  }
  render() {
    const { navigation } = this.props
    const { activeGetCurrentUser, activeDataService, currentUser, dataService, } = this.state
    var uri = `${finip}/campaign/campaign_data`
    var dataBody = {
      "id_category": ""
    }
    activeGetCurrentUser == false && activeDataService == true &&
      GetServices({ dataBody, uriPointer: uri, getDataSource: this.getData.bind(this), })
    activeGetCurrentUser == true &&
      GetData({ getSource: this.getSource.bind(this), getUser: true, })
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {
          (activeGetCurrentUser == true || activeDataService == true) &&
          <LoadingScreen key='LoadingScreen' />
        }
        <AppBar1 titleHead={'แคมเปญ'} backArrow searchBar chatBar navigation={navigation} />
        <ScrollView>
          {
            dataService &&
            <Slide banner={dataService && dataService.banner} />
          }
          <Campaign_tag dataService={dataService && dataService} navigation={navigation} currentUser={currentUser} />
        </ScrollView>
        <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
          <Button_Bar navigation={navigation} />
        </View>
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Campaign_tag
export class Campaign_tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathlist: 0,
      activeGetServices: true,
    }
  }
  getcategory = (id_category) => {
    this.setState({ activeGetServices: true, id_category });
  }
  getPathlist = (pathlist) => {
    this.setState({ pathlist });
  }
  render() {
    const { currentUser, dataService, navigation } = this.props
    const item = [{
      name: 'แคมเปญทั้งหมด'
    },]
    dataService && dataService.category.map((value) => {
      return item.push({ name: value.name })
    })
    return (
      <View>
        <View style={{ backgroundColor: '#FFFFFF', padding: 5, marginTop: 5 }}>
          <ScrollView horizontal>
            <TabBar
              sendData={this.getcategory.bind(this)}
              inactiveBoxColor={'#fff'}
              inactiveColor={mainColor}
              inactiveFontColor={mainColor}
              item={item}
              noLimit
              numberBox
              numberOfLines={1}
              widthBox={98}
              fontSizeStyle={12}
              type='box'
            />
          </ScrollView>
        </View>
        <View>
          {
            dataService && dataService.campaign_data.map((value, index) => {
              return <CampaignBody currentUser={currentUser} dataService={value} key={index} navigation={navigation} />
            })
          }
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> CampaignBody
export class CampaignBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeGetServices: false,
    }
  }
  get Campaign() {
    const { dataService, navigation } = this.props
    var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image}`;
    return (
      <View style={ststylePromotionDeal.CampaignBody}>
        <View style={[ststylePromotionDeal.CampaignBody_BoxImage, { padding: 5 }]}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={stylesMain.BoxProduct1Image}
          />
        </View>
        <View style={[ststylePromotionDeal.CampaignBody_Box]}>
          <View style={ststylePromotionDeal.CampaignBody_BoxText}>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{dataService.name} </Text>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService.description}</Text>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{`วันหมดอายุ : ${dataService.end}`}</Text>
          </View>
          <View style={[ststylePromotionDeal.CampaignBody_Icon_Button, stylesMain.ItemCenterVertical]}>
            <View style={[ststylePromotionDeal.CampaignBody_Icon, stylesMain.ItemCenterVertical]}>
              <IconEntypo name='share' size={20} color='#FFFFFF' />
            </View>
            <TouchableOpacity onPress={() => NavigationNavigateScreen({
              goScree: 'Detail_Campaign', setData: { selectedIndex: 0, id_campaign: dataService.id_campaign }, navigation
            })}>
              <View style={[ststylePromotionDeal.CampaignBody_Button, stylesMain.ItemCenterVertical]}>
                <Text style={[stylesFont.FontFamilyBold, ststylePromotionDeal.CampaignBody_ButtonText, stylesMain.ItemCenterVertical]}>
                  รายละเอียด</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    )
  }
  render() {
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={{ alignItems: 'center' }}>
          <View>
            {this.Campaign}
          </View>
        </View>
      </View>
    )
  }
}