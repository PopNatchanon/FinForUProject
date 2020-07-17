///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import Carousel, { PaginationLight } from 'react-native-x-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  ExitAppModule, Second_product, TodayProduct, } from '../../screens/MainScreen';
import {
  GetCoupon, GetData, GetServices, ProductBox, LoadingScreen, FlatProduct,
} from '../../customComponents/Tools';
import { GenArray, NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(DealScreen);
function DealScreen(props) {
  const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  var uri = `${finip}/coupon/coupon_findeal_mobile`;
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
  useEffect(() => {
    !activeGetCurrentUser && activeGetServices && cokie &&
      GetServices({ Authorization: cokie, uriPointer: uri, getDataSource: value => getData(value), });
  }, [!activeGetCurrentUser && activeGetServices && cokie]);
  useEffect(() => {
    activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
  }, [activeGetCurrentUser]);
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    {(activeGetCurrentUser || activeGetServices) && <LoadingScreen />}
    <AppBar {...props} titleHead={'ดีลสุดคุ้ม'} backArrow searchBar chatBar />
    <ScrollView>
      <Slide {...props} dataService={dataService?.banner} />
      <Deal_Calendar dataService={dataService?.carlendar_banner} />
      <Deal_Today {...props} cokie={cokie ?? undefined} currentUser={currentUser ?? undefined} />
      <Deal_Exclusive {...props} dataService={dataService?.exclusive} />
      <ProDed_Store {...props} dataService={dataService?.store} />
      <ProDed_New_Store dataService={dataService?.store} />
      <Second_product {...props} dataService={{
        product_second: dataService?.product_second, list_store2_1: dataService?.second_1, list_store2_2: dataService?.second_2,
        mobile_bar: dataService?.second_1, mobile_slide: dataService?.second_3,
      }} Header_Second key='Second_product' />
      <Shop_Deal_ForU {...props} dataService={dataService?.product_foryou} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
      <Button_Bar {...props} />
    </View>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Slide
export let Slide = (props) => {
  const { dataService } = props;
  let emptyBox = <View style={[stylesDeal.child, { backgroundColor: '#FFFFFF', borderColor: '#CCCCCC', borderWidth: 1, marginTop: 0 }]}>
    <View style={stylesDeal.childSlide}>
    </View>
  </View>;
  let _renderItem = (value) => {
    var dataMySQL = `${finip}/${value.image_path}/${value.image}`;
    return <View style={[stylesDeal.child, { marginTop: 0 }]} key={value.id}>
      <FastImage source={{ uri: dataMySQL, }} style={stylesDeal.childSlide} resizeMode={FastImage.resizeMode.stretch} />
    </View>;
  };
  return <View>
    {dataService && dataService.length > 0 ?
      <Carousel renderItem={_renderItem} data={dataService} loop autoplay autoplayInterval={3000} pagination={PaginationLight} /> : emptyBox}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
  const { navigation } = props;
  return <View style={[stylesDeal.Button_Bar, { bottom: '7%', }]}>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'DealScreen', navigation, noPush: true })}>
      <View style={[stylesDeal.Button_Bar_Box]}>
        <FastImage style={stylesMain.Button_Bar_icon} source={require('../../../icon/Icon_Deal/01.jpg')} resizeMode={FastImage.resizeMode.contain} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'CoinScreen', navigation, noPush: true })}>
      <View style={[stylesDeal.Button_Bar_Box]}>
        <FastImage style={stylesMain.Button_Bar_icon} source={require('../../../icon/Icon_Deal/02.jpg')} resizeMode={FastImage.resizeMode.contain} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'CampaignScreen', navigation, noPush: true })}>
      <View style={[stylesDeal.Button_Bar_Box]}>
        <FastImage style={stylesMain.Button_Bar_icon} source={require('../../../icon/Icon_Deal/03.jpg')} resizeMode={FastImage.resizeMode.contain} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'The_BestFinScreen', navigation, noPush: true })}>
      <View style={[stylesDeal.Button_Bar_Box]}>
        <FastImage style={stylesMain.Button_Bar_icon} source={require('../../../icon/Icon_Deal/04.jpg')} resizeMode={FastImage.resizeMode.contain} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'Installment_payScreen', navigation, noPush: true })}>
      <View style={[stylesDeal.Button_Bar_Box]}>
        <FastImage style={stylesMain.Button_Bar_icon} source={require('../../../icon/Icon_Deal/05.jpg')} resizeMode={FastImage.resizeMode.contain} />
      </View>
    </TouchableOpacity>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Deal_Calendar
export let Deal_Calendar = (props) => {
  const { dataService } = props;
  let emptyBox = GenArray(8).map((_, index) => <View key={index} style={[stylesDeal.Deal_Calendar_BoxN,
  { backgroundColor: '#ECECEC', borderRadius: 0, }]}>
    <View style={stylesMain.BoxProduct1Image}></View>
  </View>);
  return <>
    <View style={[stylesMain.FrameBackground, /* { backgroundColor: '#B5F5D1', width: '100%' } */]}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ดีลเด็ดตามปฏิทิน</Text>
      <View style={stylesDeal.Deal_Calendar_Box}>
        {dataService?.length > 0 ? dataService?.map((value, index) => {
          const image_carlendar = `${finip}/${value.image_path}/${value.image}`
          return <View key={index} style={stylesDeal.Deal_Calendar_BoxN}>
            <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: image_carlendar, }} resizeMode={FastImage.resizeMode.cover} />
          </View>
        }) : emptyBox}
      </View>
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Deal_Today
export let Deal_Today = (props) => {
  const { currentUser, cokie, navigation } = props;
  const [activeServices, setActiveServices] = useState({ activeGetServices: true, activeGetServices2: true });
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  const [id_promotion, setId_promotion] = useState('');
  var dataBody = {
    id_customer: currentUser?.id_customer,
    device: 'mobile_device',
    id_promotion: id_promotion,
  };
  var dataBody2 = {
    id_customer: currentUser?.id_customer,
    device: 'mobile_device',
    id_promotion_shop: id_promotion,
  };
  var uri = `${finip}/coupon/save_coupon_fin`;
  var uri2 = `${finip}/coupon/save_coupon_shop`;
  let getCoupon = (value) => {
    value.list == 'fin' ?
      activeServices.activeGetServices = true : value.list == 'shop' ?
        activeServices.activeGetServices2 = true : null;
    setActiveServices(activeServices);
    setId_promotion(value.id_promotion);
  };
  let getData = (value) => { activeServices.activeGetServices = false; setActiveServices(activeServices); setDataService(value); };
  let getData2 = (value) => { activeServices.activeGetServices2 = false; setActiveServices(activeServices); setDataService2(value); };
  useEffect(() => {
    activeServices.activeGetServices && currentUser && cokie &&
      GetServices({ Authorization: cokie, dataBody, uriPointer: uri, getDataSource: value => getData(value) });
  }, [activeServices.activeGetServices && currentUser && cokie]);
  useEffect(() => {
    activeServices.activeGetServices2 && currentUser && cokie &&
      GetServices({ Authorization: cokie, dataBody: dataBody2, uriPointer: uri2, getDataSource: value => getData2(value) });
  }, [activeServices.activeGetServices2 && currentUser && cokie]);
  let emptyBox = GenArray(2).map((_, index) => <View key={index} style={[stylesDeal.Coupon_BOX, { marginLeft: 3 }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
      <View style={{ width: width * 0.31, height: 80, marginLeft: 5, paddingHorizontal: 2, justifyContent: 'center' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>{' '}</Text>
        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize9,]}>{' '}</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>{' '}</Text>
      </View>
      <TouchableOpacity>
        <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#007bff', }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{' '}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>);
  let emptyBox2 = GenArray(2).map((_, index) => <View key={index} style={[stylesDeal.Coupon_BOX, { marginLeft: 3 }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
      <View style={{ width: width * 0.31, height: 80, marginLeft: 5, paddingHorizontal: 2, justifyContent: 'center' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>{' '}</Text>
        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize9,]}>{' '}</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>{' '}</Text>
      </View>
      <TouchableOpacity>
        <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#E43333', }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{' '}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>);
  return <View style={[stylesMain.FrameBackground,/*{ backgroundColor: '#AF5F92', }*/]}>
    <View style={stylesDeal.BoxText_Row}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ดีลเด็ดประจำวัน</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 0 }, navigation })}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { marginRight: 10, marginTop: 4 }]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    <View style={stylesDeal.Deal_Today_Box}>
      <View style={{ borderColor: '#0A55A6', borderTopWidth: 3, marginHorizontal: 5 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#00adb5' }]}> คูปองส่วนลดจาก FIN</Text>
      </View>
      <ScrollView horizontal>
        <View style={stylesDeal.Deal_Today_BoxImage}>
          {dataService?.coupon?.length > 0 ?
            dataService.coupon.map((value, index) => {
              return <GetCoupon codeList={value.my_coupon == 'no' ? 'available' : ''} colorCoupon='#86CFFF' couponText={value.name}
                getCoupon={value => getCoupon(value)} key={index} saveCoupon marginL={3} textDetail={value.detail}
                timeOut={value.end_period} setDataService={{ list: 'fin', id_promotion: value.id_promotion }} />
            }) : emptyBox}
        </View>
      </ScrollView>
    </View>
    <View>
      <View style={stylesDeal.Deal_Today_Box}>
        <View style={{ borderColor: '#0A55A6', borderTopWidth: 3, marginHorizontal: 5, marginTop: 5 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#00adb5' }]}> คูปองส่วนลดจากร้าน</Text>
        </View>
        <ScrollView horizontal>
          <View style={stylesDeal.Deal_Today_BoxImage}>
            {dataService2?.coupon?.length > 0 ? dataService2.coupon.map((value, index) => {
              return <GetCoupon codeList={value.my_coupon == 'no' ? 'available' : ''} colorCoupon='#E43333' couponText={value.name}
                getCoupon={value => getCoupon(value)} key={index} saveCoupon marginL={3} textDetail={value.detail}
                timeOut={value.end_period} setDataService={{ list: 'shop', id_promotion: value.id_promotion }} />
            }) : emptyBox2}
          </View>
        </ScrollView>
      </View>
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Deal_Exclusive
export let Deal_Exclusive = (props) => {
  const { dataService, navigation } = props;
  let emptyBox = GenArray(3).map((_, index) => <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2,
  { overflow: 'hidden' }]}>
    <View style={[stylesMain.ItemCenter, { backgroundColor: '#ECECEC', width: 119 }]}>
      <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
      </View>
    </View>
    <View style={{ height: 55, paddingHorizontal: 3 }} />
  </View>);
  return <LinearGradient
    colors={['#890A00', '#E41100']}
    style={[stylesMain.FrameBackground, { width: '100%' }]}>
    {/* <View style={[stylesMain.FrameBackground, { backgroundColor: '#8E1006', width: '100%' }]}> */}
    <View style={stylesDeal.BoxText_Row}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginTop: 10 }]}>ดีลสุด Exclusive</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 1 }, navigation })}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService?.length > 0 ?
      <FlatProduct {...props} custumNavigation='Deal_Exclusive' dataService={dataService} numberOfColumn={2} mode='row3'
        nameFlatProduct='Deal_Exclusive' nameSize={14} priceSize={15} dispriceSize={15} /> :
      <View>
        <View style={{ flexDirection: 'row' }}>
          {emptyBox}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {emptyBox}
        </View>
      </View>}
    {/* </View> */}
  </LinearGradient>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Store
export let Second_Store = (props) => {
  const { navigation } = props;
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [activeGetServices2, setActiveGetServices2] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  var uri = `${ip}/mysql/DataServiceMain.php`
  var dataBody = { type: 'sale' };
  var uri2 = `${finip}/home/home_mobile`;
  var dataBody2 = { slide: 'banner' };
  activeGetServices && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value) });
  activeGetServices2 && GetServices({ uriPointer: uri, dataBody: dataBody2, getDataSource: (value) => getData2(value) });
  let getData = (value) => { setActiveGetServices(false); setDataService(value); };
  let getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
  let _renderItem = ({ item, index }) => {
    var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image}`
    return <View key={index}>
      <FastImage source={{ uri: dataMySQL, }} style={stylesDeal.Second_Store_Slide_image} />
      <View style={stylesDeal.Second_Store_Slide_BoxText}>
        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
      </View>
    </View>;
  };
  let pagination = () => {
    return <View style={{ marginTop: -60 }}>
      <Pagination dotsLength={dataService2.length} activeDotIndex={activeSlide} dotStyle={{
        width: 15, height: 15, borderRadius: 30, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(255, 255, 255, 0.92)',
        borderWidth: 2,
      }} inactiveDotStyle={{ width: 15, height: 5, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.92)', }}
        carouselRef={activeSlide} tappableDots={!!activeSlide} inactiveDotScale={0.6} />
    </View>;
  }
  return <View style={[stylesMain.FrameBackground, { width: '100%' }]}>
    <View style={stylesDeal.BoxText_Row}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ร้านมือสองลดราคา</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 2 }, navigation })}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {sildeView()}
    <View style={stylesDeal.BoxText_Row}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>มือสองลดราคา</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 3 }, navigation })}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService && <FlatProduct {...props} custumNavigation='Second_Store' dataService={dataService} mode='row3'
      nameFlatProduct='Second_Store' nameSize={14} priceSize={15} dispriceSize={15} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> ProDed_Store
export let ProDed_Store = (props) => {
  const { dataService, navigation } = props
  let emptyBox = GenArray(4).map((_, index) => <View style={stylesDeal.ProDed_Store} key={index}>
    <View style={{ height: 100, width: 100, }}></View>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{' '}</Text>
  </View>);
  let dataNewStore = () => dataService?.length > 0 ? dataService?.map((item, index) => {
    var dataMySQL = `${finip}/${item.store_path}/${item.image_store}`;
    return <View style={stylesDeal.ProDed_Store} key={index}>
      <FastImage source={{ uri: dataMySQL, }} style={{ height: 100, width: 100, }} resizeMode={FastImage.resizeMode.stretch} />
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!</Text>
    </View>;
  }) : emptyBox;
  return <LinearGradient colors={['#691f50', '#BD3790']} style={[stylesMain.FrameBackground, { width: '100%' }]}>
    {/* <View style={[stylesMain.FrameBackground, { backgroundColor: '#691f50', width: '100%' }]}> */}
    <View style={stylesDeal.BoxText_Row}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginTop: 10 }]}>ร้านนี้มีดีล</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 4 }, navigation })}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal>
      {dataNewStore()}
    </ScrollView>
    {/* </View> */}
  </LinearGradient>;
};
///----------------------------------------------------------------------------------------------->>>> ProDed_New_Store
export let ProDed_New_Store = (props) => {
  const { dataService } = props;
  let emptyBox = GenArray(5).map((_, index) => <View key={index} style={stylesDeal.ProDed_New_Store_Boximage}>
    <View style={{ width: 60, height: 60 }}>
    </View>
    <View style={stylesDeal.ProDed_New_Store_Button}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>{' '}</Text>
    </View>
  </View>)
  return <LinearGradient colors={['#302b63', '#2a69ae']} style={[stylesMain.FrameBackground, { width: '100%' }]}>
    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginVertical: 5 }]}>ดีลสุดฟินร้านใหม่</Text>
    <View style={{ paddingLeft: 10 }}>
      <ScrollView horizontal>
        {dataService?.length > 0 ? dataService.map((item, index) => {
          var dataMySQL = `${finip}/${item.store_path}/${item.image_store}`;
          return <View key={index} style={stylesDeal.ProDed_New_Store_Boximage}>
            <View style={{ width: 60, height: 60 }}>
              <FastImage source={{ uri: dataMySQL, }} style={stylesMain.BoxProduct1Image} resizeMode={FastImage.resizeMode.stretch} />
            </View>
            <TouchableOpacity>
              <View style={stylesDeal.ProDed_New_Store_Button}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
              </View>
            </TouchableOpacity>
          </View>
        }) : emptyBox}
      </ScrollView>
    </View>
  </LinearGradient>
    // <LinearGradient colors={['#0f0c29','#302b63','#24243e']}>
    //   <View style={{ height: 100 }}>

    //   </View>
    // </LinearGradient>
    ;
};
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export let Shop_Deal_ForU = (props) => {
  const { dataService, } = props
  return <View style={stylesMain.FrameBackground}>
    <View style={stylesDeal.BoxText_Row}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ช้อปทุกดีลเฉพาะคุณ</Text>
    </View>
    <View>
      {<TodayProduct {...props} noTitle loadData={dataService ?? undefined} />}
    </View>
  </View>;
};