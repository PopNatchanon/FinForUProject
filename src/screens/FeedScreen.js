///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, useRef, } from 'react';
import {
  Dimensions, SafeAreaView, Text, View, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Button,
} from 'react-native';
import { connect } from 'react-redux';
import {
  activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
  setDataRefresh, setDataStart, setFetchToStart
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { Modalize } from 'react-native-modalize';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import { normalize } from '../style/stylesFont';
import stylesStore from '../style/StylesStoreScreen';
import stylesDetail from '../style/StylesDetailScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, Botton_PopUp_FIN } from './MainScreen';
import { FeedBox, GetData, GetServices, TabBar, LoadingScreen, } from '../customComponents/Tools';
import { Toolbar, StarReview, NavigationNavigate, AppBar, BorderBottomTab, GetFetch, GenArray } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> set value
const { contain, cover } = FastImage.resizeMode;
const { FontFamilyBold, FontFamilySemiBold, FontFamilyText, FontSize3, FontSize4, FontSize5, FontSize6, FontSize7, FontSize8, } = stylesFont;
const {
  BackgroundAreaView, BoxProduct1Image, FlexRow, FrameBackground, FrameBackgroundTextStart, ItemCenter, ItemCenterVertical, SafeAreaViewNB,
} = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
  reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
  activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
  setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
function FeedScreen(props) {
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
  const [cokie, setCokie] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    GetData({
      getCokie: true, getSource: value => { setCurrentUser(value.currentUser); setCokie(value.keycokie); setActiveGetSource(false); },
      getUser: true,
    });
  }, [activeGetSource]);
  return (
    <SafeAreaView style={[BackgroundAreaView, SafeAreaViewNB,]}>
      {/* {
          activeGetSource  &&
          <LoadingScreen key='LoadingScreen' />
        } */}
      <AppBar {...props} menuBar noBottomColor titleHead='Feed' />
      {currentUser && <MenuBar getActiveSelectedIndex={value => setActiveSelectedIndex(value)}
        sendText={value => { setSelectedIndex(value); setActiveSelectedIndex(true); }} />}
      <Button_Bar {...props} activeSelectedIndex={activeSelectedIndex}
        currentUser={currentUser} getActiveSelectedIndex={value => setActiveSelectedIndex(value)}
        selectedIndex={currentUser ? selectedIndex : 1} />
      <Toolbar {...props} />
      <ExitAppModule {...props} />
    </SafeAreaView>
  );
};
///----------------------------------------------------------------------------------------------->>>> MenuBar
export function MenuBar(props) {
  const { getActiveSelectedIndex, selectedIndex, sendText } = props;
  const item = [
    { icon: <IconFontAwesome5 name='grin-hearts' size={20} />, name: <Text style={FontSize6}>กำลังติดตาม</Text> },
    { icon: <IconFontAwesome5 name='hotjar' size={20} />, name: <Text style={FontSize6}>ฮไลท์</Text> }];
  let rigthItem = <IconFontAwesome name='navicon' size={25} style={{ color: '#FFFF' }} />
  return (
    <View>
      <BorderBottomTab data={item} fontStyle={[FontFamilySemiBold, FontSize6]} sendDataOut={value => sendText(value)} rightIcon={rigthItem} />
    </View>
  );
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export function Button_Bar(props) {
  const { activeSelectedIndex, currentUser, getActiveSelectedIndex, selectedIndex, navigation } = props;
  var uri = `${finip}/${(selectedIndex == 0 ? 'brand/feed_store_follow' : 'brand/feed_highlight')}`;
  var dataBody = { id_customer: currentUser?.id_customer ?? '' };
  const [dataService, setDataService] = useState(null);
  let getDataSource = (value) => { getActiveSelectedIndex(false); setDataService(value); };
  useEffect(() => {
    activeSelectedIndex &&
      GetFetch({ dataBody: selectedIndex == 0 ? dataBody : undefined, getDataSource: (value) => getDataSource(value), uriPointer: uri, });
  }, [activeSelectedIndex || selectedIndex]);
  return <View style={{ flex: 1, height: '100%' }}>
    {selectedIndex == 3 ?
      <Feed_About {...props} /> :
      activeSelectedIndex == false ?
        <Highlights {...props} dataService={dataService?.feed_follow} Follow /> :
        <View style={{ height: height * 0.8, width, }}>
          {GenArray(2).map((_, index) => {
            return <FeedBox {...props} activeModalize={(v) => null} dataService={{}} Follow={true} Header key={index} nodata />
          })}
        </View>}
    {selectedIndex == 0 && <ActionButton buttonColor={mainColor} size={50} onPress={() =>
      NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 1, }, })} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Highlights
export function Highlights(props) {
  const { dataService, selectedIndex, } = props;
  const dataService2 = [{
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_a.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_a.jpg`,
    name_store: 'StoreA', follow_store: '202', score_store: '54.2'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_b.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_b.jpg`,
    name_store: 'StoreB', follow_store: '533', score_store: '33.8'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_c.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_c.jpg`,
    name_store: 'StoreC', follow_store: '52', score_store: '65.1'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_d.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_d.jpg`,
    name_store: 'StoreE', follow_store: '82', score_store: '51.2'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_a.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_a.jpg`,
    name_store: 'StoreF', follow_store: '65', score_store: '63.2'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_b.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_b.jpg`,
    name_store: 'StoreG', follow_store: '22', score_store: '88.6'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_c.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_c.jpg`,
    name_store: 'StoreH', follow_store: '855', score_store: '99.6'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_d.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_d.jpg`,
    name_store: 'StoreI', follow_store: '78', score_store: '33.5'
  }, {
    image_BG: `${ip}/MySQL/uploads/Store/BG_Store/shop_a.png`, image_Pro: `${ip}/MySQL/uploads/Store/Pro_Store/logo_a.jpg`,
    name_store: 'StoreJ', follow_store: '91', score_store: '66.2'
  }];
  const [activeModalize, setActiveModalize] = useState(false);
  let Highlights_Store = dataService2.map((value, index) => {
    const uri1 = { uri: value.image_BG, };
    const uri2 = { uri: value.image_Pro, };
    return <TouchableOpacity key={index}>
      <View style={{ borderColor: '#C4C4C4', borderWidth: 1.5, marginRight: 5, width: 150, }}>
        <View style={{ height: 60 }}>
          <FastImage resizeMode={cover} source={uri1} style={BoxProduct1Image} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <FastImage resizeMode={cover} source={uri2} style={{
            backgroundColor: '#FFFFFF', borderColor: '#C4C4C4', borderWidth: 1, borderRadius: width / 2, height: 60, marginTop: -30, width: 60,
          }} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[FontFamilyBold, FontSize6,]}>{value.name_store}</Text>
          <Text style={[FontFamilyText, FontSize7]}>ผู้ติดตาม {value.follow_store} คน</Text>
          <View style={FlexRow}>{StarReview(5, 15)}</View>
          <Text style={[FontFamilyText, FontSize8,]}>{value.score_store}(46.9 พันคะแนน) </Text>
          <TouchableOpacity>
            <View style={[ItemCenter, { backgroundColor: mainColor, borderRadius: 10, marginVertical: 5, width: width * 0.20, }]}>
              <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF' }]}>ติดตาม</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  });
  function headerStoryList() {
    return selectedIndex == 1 && <View style={[FrameBackground]}>
      <Text style={[FontFamilyBold, FontSize4, FrameBackgroundTextStart,]}>ร้านค้ายอดนิยม</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', marginBottom: 5, paddingLeft: 10, }}>
          {Highlights_Store}
        </View>
      </ScrollView>
    </View>
  }
  return <View style={FrameBackground, BackgroundAreaView}>
    {dataService && <FlatList data={dataService} initialNumToRender={10} keyExtractor={(value, index) => `Feed${index}`}
      ListHeaderComponent={() => headerStoryList()} renderItem={(v) => <>
        <FeedBox {...props} activeModalize={(v) => setActiveModalize(v)} dataService={v.item} Follow={selectedIndex == 1 ? false :
          true} Header />
      </>} scrollEnabled={true} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Feed_Login
export function Feed_Login(props) {
  const { currentUser } = props
  const uri1 = require('../../images/iconlogo.png');
  const uri2 = { uri: `${ip}/MySQL/uploads/addmin/1212.png`, };
  const uriImageUser = { uri: `${finip}/${currentUser.image_path}/${currentUser.image}` };
  return <View style={{ backgroundColor: '#1A1555', flex: 1, marginTop: -6, alignItems: 'center' }}>
    <FastImage resizeMode={contain} source={uri1} style={{ height: height * 0.30, width: width * 0.60, marginTop: 20 }} />
    <Text style={[FontFamilyBold, FontSize3, { color: '#FFFFFF' }]}>ลงชื่อเข้าฟีด</Text>
    <View style={[ItemCenter, { backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: width * 0.75 }]}>
      <TouchableOpacity>
        <View style={[FlexRow, { borderColor: '#0A55A6', borderWidth: 1, borderRadius: 20, padding: 5, width: width * 0.60, }]}>
          <FastImage style={{ height: 40, width: 40, borderRadius: 25, borderWidth: 1 }} source={uriImageUser} resizeMode={cover} />
          <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>{currentUser.name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[FlexRow,
          { borderColor: '#0A55A6', borderRadius: 20, borderWidth: 1, marginTop: 10, padding: 5, width: width * 0.60, }]}>
          <FastImage resizeMode={cover} source={uri2} style={{ height: 40, width: 40, borderRadius: 25, borderWidth: 1 }} />
          <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>Store A</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Feed_About
export function Feed_About(props) {
  const { navigation } = props;
  const uri1 = { uri: `${ip}/MySQL/uploads/Group_image/woman.png`, };
  const uri2 = { uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`, };
  const item_Store = [
    { image: `${ip}/MySQL/uploads/Group_image/Walmart.png`, name: 'BP World', },
    { image: `${ip}/MySQL/uploads/Group_image/central.png`, name: 'Ducati', },
    { image: `${ip}/MySQL/uploads/Group_image/paradise.jpg`, name: 'GUCCI', },
    { image: `${ip}/MySQL/uploads/Group_image/10.jpg`, name: 'LACOSTE', }]
  const item_Group = [{
    image: `${ip}/MySQL/uploads/Group_image/AMARIN.jpg`,
    name: 'เสื้อผ้าคุณผู้หญิง Less is more เสื้อผ้าคุณผู้หญิง Less is more เข้าซูเปอร์มาเก็ตกับพี่หมี เข้าซูเปอร์มาเก็ตกับพี่หมี',
  }, {
    image: `${ip}/MySQL/uploads/Group_image/con7.jpg`,
    name: 'Sneaker อินเทรนด์หนักๆ สาย Sneaker อินเทรนด์หนักๆ สาย Sneaker อินเทรนด์หนักๆ สาย Sneaker อินเทรนด์หนักๆ สาย',
  }, { image: `${ip}/MySQL/uploads/Group_image/HomePro.png`, name: 'ชวนชาว FIN มาต่อจิ๊กซอว์กัน ชวนชาว FIN มาต่อจิ๊กซอว์กัน', },
  { image: `${ip}/MySQL/uploads/Group_image/con1.jpg`, name: 'เข้าซูเปอร์มาเก็ตกับพี่หมี เข้าซูเปอร์มาเก็ตกับพี่หมี ', }];
  let StoreItem = item_Store.map((value, index) => {
    const uriStore = { uri: value.image, };
    return <View key={index} style={[FlexRow, { justifyContent: 'space-between', marginTop: 2, padding: 10 }]}>
      <View style={FlexRow}>
        <FastImage style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 1 }} source={uriStore} resizeMode={cover} />
        <Text style={[FontFamilyText, FontSize6, { margin: 10 }]}>{value.name}</Text>
      </View>
      <TouchableOpacity style={[ItemCenter,
        { backgroundColor: '#0A55A6', borderRadius: 10, paddingHorizontal: 15, height: 30, marginTop: 5 }]}>
        <Text style={[FontFamilyBold, FontSize7, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
      </TouchableOpacity>
    </View>
  });
  let GroupItem = item_Group.map((value, index) => {
    const uriGroup = { uri: value.image, };
    return <TouchableOpacity key={index} onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', setData: { selectedIndex: 12, }, navigation })} style={[FlexRow, { marginTop: 2, padding: 5 }]}>
      <View style={FlexRow}>
        <FastImage resizeMode={cover} style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 1 }} source={uriGroup} />
        <Text numberOfLines={2} style={[FontFamilyText, FontSize6, { margin: 10, width: '80%' }]}>{value.name}</Text>
      </View>
    </TouchableOpacity>;
  });
  return <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 22, }, })}
        style={[FlexRow, { backgroundColor: '#E0EFFF', borderRadius: 5, padding: 10, }]}>
        <FastImage resizeMode={cover} source={uri1} style={{ borderRadius: 25, borderWidth: 1, height: 50, width: 50, }} />
        <Text style={[stylesFont.FontSize3, stylesFont.FontFamilyBold, { margin: 10 }]}>Myn</Text>
      </TouchableOpacity>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, }}>
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 16, }, })}>
          <Text style={[FontFamilyText, FontSize6, { marginLeft: 30 }]}>บันทึกกิจกรรมของฉัน</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, }}>
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 17, }, })}>
          <Text style={[FontFamilyText, FontSize6, { marginLeft: 30 }]}>รายการที่บันทึกไว้</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, }}>
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 18, }, })}>
          <Text style={[FontFamilyText, FontSize6, { marginLeft: 30 }]}>กลุ่มทั้งหมด</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, }}>
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 19, }, })}>
          <Text style={[FontFamilyText, FontSize6, { marginLeft: 30 }]}>การแจ้งเตือน</Text>
        </TouchableOpacity>
      </View>
      <View style={[FlexRow, { backgroundColor: '#E0EFFF', borderRadius: 5, marginTop: 10, padding: 10, }]}>
        <View style={{ height: 100, width: 170, }}>
          <FastImage resizeMode={cover} source={uri2} style={BoxProduct1Image} />
        </View>
        <View style={{ paddingHorizontal: 10, width: '50%', }}>
          <Text style={[FontFamilyBold, FontSize5, { color: '#0A55A6' }]}>J&W Jewery</Text>
          <Text style={[FontFamilyText, FontSize7]}>แหล่งรวมเครื่องประดับสำหรับคุณผู้หญิงที่ตอบโจทย์ผู้หญิงได้ทุกรุ่นทุกวัย</Text>
        </View>
      </View>
      <Text style={[FontFamilyBold, FontSize4, { margin: 5 }]}>กำลังติดตาม</Text>
      {StoreItem}
      <TouchableOpacity style={[FlexRow, ItemCenter]}>
        <Text style={[FontFamilyBold, FontSize5]}>เพิ่มเติม</Text>
        <IconEntypo name='chevron-down' size={25} />
      </TouchableOpacity>
      <Text style={[FontFamilyBold, FontSize4, { margin: 5 }]}>กลุ่มของคุณ</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Post_Feed', navigation, setData: { selectedIndex: 11, }, })}>
        <View style={[FlexRow, { borderRadius: 5, marginBottom: 15, padding: 5, }]}>
          <View style={[ItemCenter, { borderRadius: 25, borderWidth: 1, height: 50, width: 50, }]}>
            <IconAntDesign name='plus' size={30} />
          </View>
          <Text style={[FontFamilyText, FontSize6, { margin: 10 }]}>สร้างกลุ่ม</Text>
        </View>
      </TouchableOpacity>
      {GroupItem}
      <TouchableOpacity style={[FlexRow, ItemCenter]}>
        <Text style={[FontFamilyBold, FontSize5,]}>เพิ่มเติม</Text>
        <IconEntypo name='chevron-down' size={25} />
      </TouchableOpacity>
    </View>
  </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>