///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../customComponents';
import { Button_Bar, Slide } from './Deal/Deal';
import { GetData, GetServices, LoadingScreen, TabBar, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize6, FontSize7 } = stylesFont;
const { BoxProduct1Image, FrameBackground, ItemCenterVertical, SafeAreaViews } = stylesMain;
const { CampaignBodys, CampaignBody_Box, CampaignBody_BoxImage, CampaignBody_BoxText, CampaignBody_Button, CampaignBody_ButtonText,
  CampaignBody_Icon, CampaignBody_Icon_Button, } = stylePromotionDeal;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
function Campaign(props) {
  const [activeDataService, setActiveDataService] = useState(true);
  const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const dataBody = { id_category: '' };
  const getSource = (v) => { setActiveGetCurrentUser(false); setCurrentUser(v.currentUser); };
  const getData = (v) => { setActiveDataService(false); setDataService(v); };
  const Props = { ...props, currentUser, dataService };
  const uri = `${finip}/campaign/campaign_data`;
  useEffect(() => {
    activeGetCurrentUser && GetData({ getSource: (v) => getSource(v), getUser: true, });
  }, [activeGetCurrentUser]);
  useEffect(() => {
    !activeGetCurrentUser && activeDataService && GetServices({ dataBody, uriPointer: uri, getDataSource: (v) => getData(v), });
  }, [!activeGetCurrentUser && activeDataService]);
  return <SafeAreaView style={SafeAreaViews}>
    {(activeGetCurrentUser || activeDataService) && <LoadingScreen key='LoadingScreen' />}
    <AppBar {...Props} backArrow chatBar searchBar titleHead={'แคมเปญ'} />
    <ScrollList {...Props} />
    <ExitApp {...Props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
  const { currentUser, dataService } = props;
  return <View>
    <ScrollView>
      <Slide {...props} dataService={dataService?.banner} />
      {/* <Slide {...props} banner={dataService?.banner} isOutData /> */}
      <Campaign_tag {...props} currentUser={currentUser} dataService={dataService ?? undefined} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
      <Button_Bar {...props} />
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Campaign_tag
export let Campaign_tag = (props) => {
  const { dataService } = props;
  const item = [{ name: 'แคมเปญทั้งหมด' },];
  dataService?.category?.map((v) => item.push({ name: v.name }));
  return <View>
    <View style={{ paddingTop: 3 }}>
      <ScrollView horizontal>
        <TabBar fontSizeStyle={12} sendData={(v) => undefined} inactiveBoxColor={'#fff'} inactiveColor={mainColor}
          inactiveFontColor={mainColor} item={item} noLimit numberBox numberOfLines={1} type='box' widthBox={98} />
      </ScrollView>
    </View>
    <View>
      {dataService?.campaign_data?.map((v, i) => <CampaignBody {...props} dataService={v} key={i} />)}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> CampaignBody
export const CampaignBody = (props) => {
  const { dataService, } = props;
  const Image1 = { uri: `${finip}/${dataService?.image_path}/${dataService?.image}`, };
  const Campaign = <View style={[CampaignBodys, { paddingVertical: 3 }]}>
    <View style={CampaignBody_BoxImage}>
      <FastImage resizeMode={FastImage.resizeMode.stretch} source={Image1} style={[BoxProduct1Image, { borderRadius: 5 }]} />
    </View>
    <View style={[CampaignBody_Box]}>
      <View style={CampaignBody_BoxText}>
        <Text numberOfLines={1} style={[FontFamilyBold, FontSize6]}>{dataService?.name} </Text>
        <Text numberOfLines={1} style={[FontFamilyText, FontSize7]}>{dataService?.description}</Text>
        <Text numberOfLines={1} style={[FontFamilyText, FontSize7, { color: '#C4C4C4' }]}>{`วันหมดอายุ : ${dataService?.end}`}</Text>
      </View>
      <View style={[CampaignBody_Icon_Button, ItemCenterVertical]}>
        <View style={[CampaignBody_Icon, ItemCenterVertical]}>
          <IconEntypo color='#FFFFFF' name='share' size={20} />
        </View>
        <TouchableOpacity onPress={() => NavigationNavigate({
          ...props, goScreen: 'Promotion_Sub_DetailCampaign', setData: { id_campaign: dataService?.id_campaign },
        })}>
          <View style={[CampaignBody_Button, ItemCenterVertical]}>
            <Text style={[FontFamilyBold, CampaignBody_ButtonText, ItemCenterVertical]}>รายละเอียด</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>;
  return <View style={FrameBackground}>
    <View style={{ alignItems: 'center' }}>
      <View>{Campaign}</View>
    </View>
  </View>;
};