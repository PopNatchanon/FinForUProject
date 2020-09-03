///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Image,
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
import { ExitAppModule, Second_product, TodayProduct, } from '../../screens/Main/MainScreen';
import {
  GetCoupon, GetData, GetServices, ProductBox, LoadingScreen, FlatProduct,
} from '../../customComponents/Tools';
import { GenArray, NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> set value
const LOADING_ICON = require('../../../images/icon.png');
const LOADING_ICON_STYLE = { height: '100%', width: '100%' };
const { cacheOnly, } = FastImage.cacheControl;
const { contain, cover, stretch, } = FastImage.resizeMode;
const {
  BoxText_Row, Button_Bars, Button_Bar_Box, child, childSlide, Coupon_BOX, Coupon_BOX_A, Deal_Calendar_Box, Deal_Calendar_BoxN, Deal_Today_Box,
  Deal_Today_BoxImage, ProDed_New_Store_Boximage, ProDed_New_Store_Button, ProDed_Store, Second_Store_Slide_BoxText, Second_Store_Slide_image,
  Text_EndB, Text_EndW,
} = stylesDeal;
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, FontSize8, FontSize9, } = stylesFont;
const {
  BoxProduct1Box2, BoxProduct1Image, BoxProduct2Image, Button_Bar_icon, FlexRow, FrameBackground, FrameBackgroundTextStart, ItemCenter,
  SafeAreaViews,
} = stylesMain;
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
  const uri = `${finip}/coupon/coupon_findeal_mobile`;
  const getData = (v) => { setActiveGetServices(false); setDataService(v); };
  const getSource = (v) => { setActiveGetCurrentUser(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
  useEffect(() => {
    !activeGetCurrentUser && activeGetServices && cokie &&
      GetServices({ Authorization: cokie, uriPointer: uri, getDataSource: (v) => getData(v), });
  }, [!activeGetCurrentUser && activeGetServices && cokie]);
  useEffect(() => {
    activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, });
  }, [activeGetCurrentUser]);
  return <SafeAreaView style={SafeAreaViews}>
    <AppBar {...props} titleHead={'ดีลสุดคุ้ม'} backArrow searchBar chatBar />
    <ScrollView>
      <Slide {...props} dataService={dataService?.banner} />
      <Deal_Calendar dataService={dataService?.carlendar_banner} />
      <Deal_Today {...props} cokie={cokie ?? undefined} currentUser={currentUser ?? undefined} />
      <Deal_Exclusive {...props} dataService={dataService?.exclusive} />
      <ProDed_Stores {...props} dataService={dataService?.store} />
      <ProDed_New_Store dataService={dataService?.store} />
      <Second_product {...props} dataService={{
        list_store2_1: dataService?.second_1, list_store2_2: dataService?.second_2, mobile_bar: dataService?.second_1, mobile_slide:
          dataService?.second_3, product_second: dataService?.product_second,
      }} Header_Second key='Second_product' />
      <Shop_Deal_ForU {...props} dataService={dataService?.product_foryou} />
    </ScrollView>
    <View style={{ backgroundColor: '#ffffff', borderColor: '#ECECEC', borderTopWidth: 1, }}>
      <Button_Bar {...props} />
    </View>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Slide
export const Slide = (props) => {
  const { dataService } = props;
  const emptyBox = <View style={[child, { backgroundColor: '#FFFFFF', borderColor: '#CCCCCC', borderWidth: 1, marginTop: 0 }]}>
    <View style={childSlide}>
      <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={LOADING_ICON_STYLE} />
    </View>
  </View>;
  const _renderItem = (v) => {
    const imageSlide = { uri: `${finip}/${v.image_path}/${v.image}`, };
    return <View style={[child, { marginTop: 0 }]} key={v.id}>
      <FastImage resizeMode={stretch} source={imageSlide} style={childSlide} />
    </View>;
  };
  return <View>
    {dataService && dataService.length > 0 ?
      <Carousel autoplay autoplayInterval={3000} data={dataService} loop pagination={PaginationLight} renderItem={_renderItem} /> : emptyBox}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export const Button_Bar = (props) => {
  const IconDeal01 = require('../../../icon/Icon_Deal/01.jpg');
  const IconDeal02 = require('../../../icon/Icon_Deal/02.jpg');
  const IconDeal03 = require('../../../icon/Icon_Deal/03.jpg');
  const IconDeal04 = require('../../../icon/Icon_Deal/04.jpg');
  const IconDeal05 = require('../../../icon/Icon_Deal/05.jpg');
  return <View style={[Button_Bars, /*{ bottom: '7%', }*/]}>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'DealScreen', noPush: true, })}>
      <View style={[Button_Bar_Box]}>
        <FastImage resizeMode={contain} source={IconDeal01} style={Button_Bar_icon} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'CoinScreen', noPush: true, })}>
      <View style={[Button_Bar_Box]}>
        <FastImage resizeMode={contain} source={IconDeal02} style={Button_Bar_icon} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'CampaignScreen', noPush: true, })}>
      <View style={[Button_Bar_Box]}>
        <FastImage resizeMode={contain} source={IconDeal03} style={Button_Bar_icon} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'The_BestFinScreen', noPush: true, })}>
      <View style={[Button_Bar_Box]}>
        <FastImage resizeMode={contain} source={IconDeal04} style={Button_Bar_icon} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'Installment_payScreen', noPush: true, })}>
      <View style={[Button_Bar_Box]}>
        <FastImage resizeMode={contain} source={IconDeal05} style={Button_Bar_icon} />
      </View>
    </TouchableOpacity>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Deal_Calendar
export const Deal_Calendar = (props) => {
  const { dataService } = props;
  const emptyBox = GenArray(4).map((_, i) => <View key={i} style={[Deal_Calendar_BoxN, { backgroundColor: '#ECECEC', borderRadius: 0, }]}>
    <FastImage resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
  </View>);
  return <>
    <View style={[FrameBackground, /* { backgroundColor: '#B5F5D1', width: '100%' } */]}>
      {/* <LinearGradient colors={['#BB9C00', '#FBD100','#BB9C00']}> */}
      <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ดีลเด็ดตามปฏิทิน</Text>
      <View style={[Deal_Calendar_Box]}>
        {dataService?.length > 0 ? dataService?.map((v, i) => {
          const imageCarlendar = { uri: `${finip}/${v.image_path}/${v.image}`, };
          return <View key={i} style={Deal_Calendar_BoxN}>
            <FastImage resizeMode={cover} source={imageCarlendar} style={BoxProduct1Image} />
          </View>
        }) : emptyBox}
      </View>
      {/* </LinearGradient> */}
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Deal_Today
export const Deal_Today = (props) => {
  const { currentUser, cokie, navigation } = props;
  const [activeServices, setActiveServices] = useState({ activeGetServices: true, activeGetServices2: true });
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  const [id_promotion, setId_promotion] = useState('');
  const dataBody = {
    id_customer: currentUser?.id_customer,
    device: 'mobile_device',
    id_promotion: id_promotion,
  };
  const dataBody2 = {
    id_customer: currentUser?.id_customer,
    device: 'mobile_device',
    id_promotion_shop: id_promotion,
  };
  const uri = `${finip}/coupon/save_coupon_fin`;
  const uri2 = `${finip}/coupon/save_coupon_shop`;
  const getCoupon = (v) => {
    v.list == 'fin' ? activeServices.activeGetServices = true : v.list == 'shop' ? activeServices.activeGetServices2 = true : null;
    setActiveServices(activeServices);
    setId_promotion(v.id_promotion);
  };
  const getData = (v) => { activeServices.activeGetServices = false; setActiveServices(activeServices); setDataService(v); };
  const getData2 = (v) => { activeServices.activeGetServices2 = false; setActiveServices(activeServices); setDataService2(v); };
  useEffect(() => {
    activeServices.activeGetServices && currentUser && cokie &&
      GetServices({ Authorization: cokie, dataBody, uriPointer: uri, getDataSource: (v) => getData(v) });
  }, [activeServices.activeGetServices && currentUser && cokie]);
  useEffect(() => {
    activeServices.activeGetServices2 && currentUser && cokie &&
      GetServices({ Authorization: cokie, dataBody: dataBody2, uriPointer: uri2, getDataSource: (v) => getData2(v) });
  }, [activeServices.activeGetServices2 && currentUser && cokie]);
  const emptyBox = GenArray(2).map((_, i) => <View key={i} style={[Coupon_BOX, { marginLeft: 3, }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
      <View style={{ height: 80, justifyContent: 'center', marginLeft: 5, paddingHorizontal: 2, width: width * 0.31, }}>
        <Text style={[FontFamilyBold, FontSize7]}>{' '}</Text>
        <Text numberOfLines={3} style={[FontFamilyText, FontSize9]}>{' '}</Text>
        <Text style={[FontFamilyText, FontSize8]}>{' '}</Text>
      </View>
      <TouchableOpacity>
        <View style={[Coupon_BOX_A, { backgroundColor: '#007bff', }]}>
          <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>{' '}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>);
  const emptyBox2 = GenArray(2).map((_, i) => <View key={i} style={[Coupon_BOX, { marginLeft: 3, }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
      <View style={{ height: 80, justifyContent: 'center', marginLeft: 5, paddingHorizontal: 2, width: width * 0.31, }}>
        <Text style={[FontFamilyBold, FontSize7]}>{' '}</Text>
        <Text numberOfLines={3} style={[FontFamilyText, FontSize9,]}>{' '}</Text>
        <Text style={[FontFamilyText, FontSize8]}>{' '}</Text>
      </View>
      <TouchableOpacity>
        <View style={[Coupon_BOX_A, { backgroundColor: '#E43333', }]}>
          <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>{' '}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>);
  return <View style={[FrameBackground, { paddingBottom: 0, }/*{ backgroundColor: '#AF5F92', }*/]}>
    <View style={BoxText_Row}>
      <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ดีลเด็ดประจำวัน</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Deal_Topic', setData: { selectedIndex: 0, }, })}>
        <Text style={[FontFamilyBold, FontSize7, { marginRight: 10, marginTop: 4, }]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    <View style={Deal_Today_Box}>
      <View style={{ borderColor: '#001666', borderTopWidth: 3, marginHorizontal: 5, }}>
        <Text style={[FontFamilyBold, FontSize6, { color: '#00adb5' }]}>คูปองส่วนลดจาก FIN</Text>
      </View>
      <ScrollView horizontal>
        <View style={Deal_Today_BoxImage}>
          {dataService?.coupon?.length > 0 ? dataService.coupon.map((v, i) => {
            const { detail, end_period, id_promotion, my_coupon, name, } = v;
            return <GetCoupon codeList={my_coupon == 'no' ? 'available' : ''} colorCoupon='#007bff' couponText={name} getCoupon={v =>
              getCoupon(v)} key={i} marginL={3} saveCoupon setDataService={{ id_promotion: id_promotion, list: 'fin', }} textDetail={detail}
              timeOut={end_period} />
          }) : emptyBox}
        </View>
      </ScrollView>
    </View>
    <View>
      <View style={Deal_Today_Box}>
        <View style={{ borderColor: '#001666', borderTopWidth: 3, marginHorizontal: 5, }}>
          <Text style={[FontFamilyBold, FontSize6, { color: '#00adb5', }]}>คูปองส่วนลดจากร้าน</Text>
        </View>
        <ScrollView horizontal>
          <View style={Deal_Today_BoxImage}>
            {dataService2?.coupon?.length > 0 ? dataService2.coupon.map((v, i) => {
              const { detail, end_period, id_promotion, my_coupon, name, } = v;
              return <GetCoupon codeList={my_coupon == 'no' ? 'available' : ''} colorCoupon='#E43333' couponText={name} getCoupon={v =>
                getCoupon(v)} key={i} marginL={3} saveCoupon setDataService={{ id_promotion: id_promotion, list: 'shop', }}
                textDetail={detail} timeOut={end_period} />
            }) : emptyBox2}
          </View>
        </ScrollView>
      </View>
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Deal_Exclusive
export const Deal_Exclusive = (props) => {
  const { dataService, } = props;
  const dataService2 = [
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B1.jpg', id_product: 0, last_price: '4250', price: '99000', discount: '25', name_product: 'Yamaha T-max530 ', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B2.jpg', id_product: 1, last_price: '5250', price: '99000', discount: '25', name_product: 'HONDA INTEGRA 750 ', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B3.jpg', id_product: 2, last_price: '6250', price: '99000', discount: '25', name_product: 'X ADV | Red Vs Blu', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B4.jpg', id_product: 3, last_price: '7250', price: '99000', discount: '25', name_product: 'Honda X-ADV 2017', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B5.jpg', id_product: 4, last_price: '850', price: '99000', discount: '25', name_product: 'Miku Max', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B6.jpg', id_product: 5, last_price: '9250', price: '99000', discount: '25', name_product: 'Yamaha 04GEN', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B7.jpg', id_product: 5, last_price: '350', price: '99000', discount: '25', name_product: 'AXM-4 Scooter', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B8.jpg', id_product: 5, last_price: '5550', price: '99000', discount: '25', name_product: 'Classic luxury rickshaw', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B9.jpg', id_product: 5, last_price: '2250', price: '99000', discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local' },
    { image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B10.jpg', id_product: 5, last_price: '29550', price: '99000', discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local' },
  ]
  const emptyBox = GenArray(3).map((_, i) => <View key={i} style={[BoxProduct1Box2, ItemCenter, { overflow: 'hidden', }]}>
    <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119, }]}>
      <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.015, }]}>
        <FastImage resizeMode={contain} source={LOADING_ICON} style={LOADING_ICON_STYLE} />
      </View>
    </View>
    <View style={{ height: 55, paddingHorizontal: 3, }} />
  </View>);
  return <LinearGradient colors={['#750404', '#F94040']} style={[FrameBackground, { width: '100%', }]}>
    {/* <View style={[stylesMain.FrameBackground, { backgroundColor: '#8E1006', width: '100%' }]}> */}
    <View style={BoxText_Row}>
      <Text style={[FrameBackgroundTextStart, FontFamilyBold, FontSize5, { color: '#FFFFFF', marginTop: 5, }]}>ดีลสุด Exclusive</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Deal_Topic', setData: { selectedIndex: 1, }, })}>
        <Text style={[FontFamilyBold, FontSize7, Text_EndW]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService2?.length > 0 ?
      <FlatProduct {...props} custumNavigation='Deal_Exclusive' dataService={dataService2} dispriceSize={15} mode='row3_new2'
        nameFlatProduct='Deal_Exclusive' nameSize={14} numberOfColumn={2} priceSize={15} /> :
      <View>
        <View style={FlexRow}>{emptyBox}</View>
        <View style={FlexRow}>{emptyBox}</View>
      </View>}
    {/* </View> */}
  </LinearGradient>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Store
export const Second_Store = (props) => {
  const [activeGetServices, setActiveGetServices] = useState(true);
  const [activeGetServices2, setActiveGetServices2] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  const uri = `${ip}/mysql/DataServiceMain.php`
  const dataBody = { type: 'sale' };
  const uri2 = `${finip}/home/home_mobile`;
  const dataBody2 = { slide: 'banner' };
  const getData = (v) => { setActiveGetServices(false); setDataService(v); };
  const getData2 = (v) => { setActiveGetServices2(false); setDataService2(v); };
  activeGetServices && GetServices({ dataBody, uriPointer: uri, getDataSource: (v) => getData(v), });
  activeGetServices2 && GetServices({ dataBody: dataBody2, uriPointer: uri, getDataSource: (v) => getData2(v), });
  const _renderItem = ({ item, index }) => {
    const imageSale = { uri: `${finip}/${dataService.image_path}/${dataService.image}`, };
    return <View key={index}>
      <FastImage source={imageSale} style={Second_Store_Slide_image} />
      <View style={Second_Store_Slide_BoxText}>
        <Text numberOfLines={1} style={[FontFamilyText, FontSize7]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
      </View>
    </View>;
  };
  const pagination = () => {
    return <View style={{ marginTop: -60 }}>
      <Pagination activeDotIndex={activeSlide} carouselRef={activeSlide} dotsLength={dataService2.length} dotStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(255, 255, 255, 0.92)', borderRadius: 30, borderWidth: 2, height: 15, width: 15,
      }} inactiveDotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', borderRadius: 5, height: 5, width: 15, }} inactiveDotScale={0.6}
        tappableDots={!!activeSlide} />
    </View>;
  };
  return <View style={[FrameBackground, { width: '100%', }]}>
    <View style={BoxText_Row}>
      <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ร้านมือสองลดราคา</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Deal_Topic', setData: { selectedIndex: 2 }, })}>
        <Text style={[FontFamilyBold, FontSize7, Text_EndB]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {sildeView()}
    <View style={BoxText_Row}>
      <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>มือสองลดราคา</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Deal_Topic', setData: { selectedIndex: 3 }, })}>
        <Text style={[FontFamilyBold, FontSize7, Text_EndB]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService && <FlatProduct {...props} custumNavigation='Second_Store' dataService={dataService} dispriceSize={15} mode='row3'
      nameFlatProduct='Second_Store' nameSize={14} priceSize={15} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> ProDed_Store
export const ProDed_Stores = (props) => {
  const { dataService, } = props;
  const emptyBox = GenArray(4).map((_, i) => <View key={i} style={ProDed_Store}>
    <View style={{ height: 100, width: 100, }}>
      <FastImage resizeMode={contain} source={LOADING_ICON} style={LOADING_ICON_STYLE} />
    </View>
    <Text style={[FontFamilyText, FontSize8]}>{' '}</Text>
  </View>);
  const dataNewStore = () => dataService?.length > 0 ? dataService?.map((v, i) => {
    const ImageStore = { uri: `${finip}/${v.store_path}/${v.image_store}`, };
    return <View key={i} style={ProDed_Store}>
      <FastImage resizeMode={stretch} source={ImageStore} style={{ height: 100, width: 100, }} />
      <Text style={[FontFamilyText, FontSize8]}>ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!</Text>
    </View>;
  }) : emptyBox;
  return <LinearGradient colors={['#58003A', '#D1008A']} style={[FrameBackground, { width: '100%', }]}>
    {/* <View style={[stylesMain.FrameBackground, { backgroundColor: '#691f50', width: '100%' }]}> */}
    <View style={BoxText_Row}>
      <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart, { color: '#FFFFFF', marginTop: 10, }]}>ร้านนี้มีดีล</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Deal_Topic', setData: { selectedIndex: 4, }, })}>
        <Text style={[FontFamilyBold, FontSize7, Text_EndW]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal>{dataNewStore()}</ScrollView>
    {/* </View> */}
  </LinearGradient>;
};
///----------------------------------------------------------------------------------------------->>>> ProDed_New_Store
export const ProDed_New_Store = (props) => {
  const { dataService, } = props;
  const emptyBox = GenArray(5).map((_, i) => <View key={i} style={ProDed_New_Store_Boximage}>
    <View style={{ height: 60, width: 60, }}>
      <FastImage resizeMode={contain} source={LOADING_ICON} style={LOADING_ICON_STYLE} />
    </View>
    <View style={ProDed_New_Store_Button}>
      <Text style={[FontFamilyText, FontSize7, { color: '#FFFFFF', }]}>{' '}</Text>
    </View>
  </View>);
  return <LinearGradient colors={['#2D014F', '#00C0D2']} /*colors={['#302b63', '#2a69ae']}*/ style={[FrameBackground, { width: '100%', }]}>
    <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart, { color: '#FFFFFF', marginVertical: 5, }]}>ดีลสุดฟินร้านใหม่</Text>
    <View style={{ paddingLeft: 5, }}>
      <ScrollView horizontal>
        {dataService?.length > 0 ? dataService.map((v, i) => {
          const ImageStore = { uri: `${finip}/${v.store_path}/${v.image_store}`, };
          return <View key={i} style={ProDed_New_Store_Boximage}>
            <View style={{ height: 60, width: 60, }}>
              <FastImage resizeMode={stretch} source={ImageStore} style={BoxProduct1Image} />
            </View>
            <TouchableOpacity>
              <LinearGradient colors={['#10162d', '#284d8f']} style={ProDed_New_Store_Button}>
                <Text style={[FontFamilyText, FontSize7, { color: '#FFFFFF', }]}>เข้าชมร้าน</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>;
        }) : emptyBox}
      </ScrollView>
    </View>
  </LinearGradient>;
};
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export const Shop_Deal_ForU = (props) => {
  const { dataService, } = props;
  return <View style={FrameBackground}>
    <View style={BoxText_Row}>
      <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ช้อปทุกดีลเฉพาะคุณ</Text>
    </View>
    <View>{<TodayProduct {...props} loadData={dataService ?? undefined} noTitle />}</View>
  </View>;
};