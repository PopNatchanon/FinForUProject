///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useEffect, useState } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { TabBar, GetData, GetServices, LoadingScreen, } from '../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(CampaignScreen);
function CampaignScreen(props) {
  const [activeDataService, setActiveDataService] = useState(true);
  const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  var dataBody = { id_category: '' };
  var uri = `${finip}/campaign/campaign_data`;
  let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); };
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  useEffect(() => {
    activeGetCurrentUser && GetData({ getSource: value => getSource(value), getUser: true, });
  }, [activeGetCurrentUser]);
  useEffect(() => {
    !activeGetCurrentUser && activeDataService && GetServices({ dataBody, uriPointer: uri, getDataSource: value => getData(value), });
  }, [!activeGetCurrentUser && activeDataService]);
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    {(activeGetCurrentUser || activeDataService) && <LoadingScreen key='LoadingScreen' />}
    <AppBar {...props} backArrow chatBar searchBar titleHead={'แคมเปญ'} />
    <ScrollView>
      <Slide {...props} dataService={dataService?.banner} />
      {/* <Slide {...props} banner={dataService?.banner} isOutData /> */}
      <Campaign_tag {...props} currentUser={currentUser} dataService={dataService ?? undefined} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
      <Button_Bar {...props} />
    </View>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Campaign_tag
export let Campaign_tag = (props) => {
  const { dataService } = props;
  const item = [{ name: 'แคมเปญทั้งหมด' },];
  dataService?.category?.map((value) => item.push({ name: value.name }));
  return <View>
    <View style={{ paddingTop: 3 }}>
      <ScrollView horizontal>
        <TabBar sendData={value => undefined} inactiveBoxColor={'#fff'} inactiveColor={mainColor} inactiveFontColor={mainColor} item={item}
          noLimit numberBox numberOfLines={1} widthBox={98} fontSizeStyle={12} type='box' />
      </ScrollView>
    </View>
    <View>
      {dataService?.campaign_data?.map((value, index) => <CampaignBody {...props} dataService={value} key={index} />)}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> CampaignBody
export let CampaignBody = (props) => {
  const { dataService, navigation } = props;
  var dataMySQL = `${finip}/${dataService?.image_path}/${dataService?.image}`;
  let Campaign = <View style={[stylePromotionDeal.CampaignBody, { paddingVertical: 3 }]}>
    <View style={stylePromotionDeal.CampaignBody_BoxImage}>
      <FastImage source={{ uri: dataMySQL, }} style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={[stylePromotionDeal.CampaignBody_Box]}>
      <View style={stylePromotionDeal.CampaignBody_BoxText}>
        <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{dataService?.name} </Text>
        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService?.description}</Text>
        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7,{ color: '#C4C4C4' }]}>{`วันหมดอายุ : ${dataService?.end}`}</Text>
      </View>
      <View style={[stylePromotionDeal.CampaignBody_Icon_Button, stylesMain.ItemCenterVertical]}>
        <View style={[stylePromotionDeal.CampaignBody_Icon, stylesMain.ItemCenterVertical]}>
          <IconEntypo name='share' size={20} color='#FFFFFF' />
        </View>
        <TouchableOpacity onPress={() => NavigationNavigate({
          goScreen: 'Detail_Campaign', setData: { selectedIndex: 0, id_campaign: dataService?.id_campaign }, navigation
        })}>
          <View style={[stylePromotionDeal.CampaignBody_Button, stylesMain.ItemCenterVertical]}>
            <Text style={[stylesFont.FontFamilyBold, stylePromotionDeal.CampaignBody_ButtonText,
            stylesMain.ItemCenterVertical]}>รายละเอียด</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>;
  return <View style={stylesMain.FrameBackground}>
    <View style={{ alignItems: 'center' }}>
      <View>
        {Campaign}
      </View>
    </View>
  </View>;
};