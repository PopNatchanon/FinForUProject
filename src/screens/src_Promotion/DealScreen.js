///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import Carousel, { PaginationLight } from 'react-native-x-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
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
import { AppBar1, ExitAppModule, Second_product, TodayProduct, } from '../../screens/MainScreen';
import {
  GetCoupon, GetData, GetServices, ProductBox, LoadingScreen, NavigationNavigateScreen, FlatProduct,
} from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class DealScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGetServices: true,
      activeGetCurrentUser: true,
    };
  }
  getData = (dataService) => {
    this.setState({ activeGetServices: false, dataService })
  }
  getSource(value) {
    this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, keycokie: value.keycokie })
  }
  render() {
    const { navigation } = this.props
    const { activeGetCurrentUser, activeGetServices, currentUser, dataService, keycokie } = this.state
    var uri = `${finip}/coupon/coupon_findeal_mobile`;
    activeGetCurrentUser == false && activeGetServices == true &&
      GetServices({ Authorization: keycokie, uriPointer: uri, getDataSource: this.getData.bind(this), })
    activeGetCurrentUser == true &&
      GetData({ getCokie: true, getSource: this.getSource.bind(this), getUser: true, })
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {
          (activeGetCurrentUser == true || activeGetServices == true) &&
          <LoadingScreen key='LoadingScreen' />
        }
        <AppBar1 {...this.props} titleHead={'ดีลสุดคุ้ม'} backArrow searchBar chatBar />
        <ScrollView>
          {[
            dataService &&
            <Slide {...this.props} dataService={dataService.banner} key='Slide' />,
            dataService &&
            <Deal_Calendar dataService={dataService.carlendar_banner} key='Deal_Calendar' />,
            currentUser && keycokie &&
            <Deal_Today {...this.props} currentUser={currentUser} key='Deal_Today' keycokie={keycokie} />,
            dataService &&
            <Deal_Exclusive {...this.props} dataService={dataService.exclusive} key='Deal_Exclusive' />,
            dataService &&
            <ProDed_Store {...this.props} dataService={dataService.store} key='ProDed_Store' />,
            dataService &&
            <ProDed_New_Store dataService={dataService.store} key='ProDed_New_Store' />,
            dataService &&
            <Second_product {...this.props} Header_Second key='Second_product' loadData={{
              product_second: dataService.product_second, list_store2_1: dataService.second_1, list_store2_2: dataService.second_2,
              mobile_bar: dataService.second_1, mobile_slide: dataService.second_3,
            }} />,
            /* <Second_Store {...this.props} /> */
            dataService &&
            <Shop_Deal_ForU {...this.props} dataService={dataService.product_foryou} key='Shop_Deal_ForU' />
          ]}
        </ScrollView>
        <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
          <Button_Bar {...this.props} />
        </View>
        <ExitAppModule {...this.props} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Slide
export class Slide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  _renderItem = item => {
    var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
    return (
      <View style={stylesDeal.child} key={item.id}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={stylesDeal.childSlide}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
    );
  }
  render() {
    const { dataService } = this.props
    return (
      <View>
        {
          dataService &&
          <Carousel
            renderItem={this._renderItem}
            data={dataService}
            loop
            autoplay
            autoplayInterval={3000}
            pagination={PaginationLight} />
        }
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={[stylesDeal.Button_Bar, { bottom: '7%', }]}>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'DealScreen', navigation, onPush
        })}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../../icon/Icon_Deal/01.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'CoinScreen', navigation, onPush
        })}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../../icon/Icon_Deal/02.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'CampaignScreen', navigation, onPush
        })}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../../icon/Icon_Deal/03.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'The_BestFinScreen', navigation, onPush
        })}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../../icon/Icon_Deal/04.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'Installment_payScreen', navigation, onPush
        })}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../../icon/Icon_Deal/05.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Deal_Calendar
export class Deal_Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService } = this.props
    return (
      <>
        <View style={[stylesMain.FrameBackground,
          // { backgroundColor: '#B5F5D1', width: '100%' }
        ]}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ดีลเด็ดตามปฏิทิน</Text>
          <View style={stylesDeal.Deal_Calendar_Box}>
            {
              dataService && dataService.map((value, index) => {
                const image_carlendar = `${finip}/${value.image_path}/${value.image}`
                return <View key={index} style={stylesDeal.Deal_Calendar_BoxN}>
                  <FastImage style={stylesMain.BoxProduct1Image}
                    source={{
                      uri: image_carlendar,
                    }}
                    resizeMode={FastImage.resizeMode.cover} />
                </View>
              })
            }
          </View>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Deal_Today
export class Deal_Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeServices: { activeGetServices: true, activeGetServices2: true },
      id_promotion: '',
    };
  }
  getData = (dataService) => {
    const { activeServices } = this.state;
    activeServices.activeGetServices = false;
    this.setState({ activeServices, dataService });
  }
  getData2 = (dataService2) => {
    const { activeServices } = this.state;
    activeServices.activeGetServices2 = false;
    this.setState({ activeServices, dataService2 });
  }
  getCoupon = (value) => {
    const { activeServices } = this.state;
    const id_promotion = value.id_promotion;
    value.list == 'fin' ?
      (
        activeServices.activeGetServices = true
      ) : (
        value.list == 'shop' ?
          (
            activeServices.activeGetServices2 = true
          ) :
          null
      );
    this.setState({ activeServices, id_promotion, })
  }
  render() {
    const { currentUser, keycokie, navigation } = this.props
    const { activeServices, dataService, dataService2, id_promotion } = this.state
    const uri = `${finip}/coupon/save_coupon_fin`
    var dataBody = {
      id_customer: currentUser.id_customer,
      device: 'mobile_device',
      id_promotion,
    }
    const uri2 = `${finip}/coupon/save_coupon_shop`
    var dataBody2 = {
      id_customer: currentUser.id_customer,
      device: 'mobile_device',
      id_promotion_shop: id_promotion,
    }
    activeServices.activeGetServices == true && currentUser && keycokie &&
      GetServices({ Authorization: keycokie, dataBody, uriPointer: uri, getDataSource: this.getData.bind(this) })
    activeServices.activeGetServices2 == true && currentUser && keycokie &&
      GetServices({ Authorization: keycokie, dataBody: dataBody2, uriPointer: uri2, getDataSource: this.getData2.bind(this) })
    return (
      <View style={[stylesMain.FrameBackground,
        // { backgroundColor: '#AF5F92', }
      ]}>
        <View style={stylesDeal.BoxText_Row}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ดีลเด็ดประจำวัน</Text>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Deal_Topic', setData: { selectedIndex: 0 }, navigation })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDeal.Deal_Today_Box}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#00adb5' }]}> คูปองส่วนลดจาก FIN</Text>
          <ScrollView horizontal>
            <View style={stylesDeal.Deal_Today_BoxImage}>
              {
                dataService && dataService.coupon.map((value, index) => {
                  return <GetCoupon codeList={value.my_coupon == 'no' ? 'available' : ''} colorCoupon='#86CFFF' couponText={value.name}
                    getCoupon={this.getCoupon.bind(this)} key={index} saveCoupon setDataService={{
                      list: 'fin',
                      id_promotion: value.id_promotion
                    }} textDetail={value.detail} timeOut={value.end_period} />
                })
              }
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={stylesDeal.Deal_Today_Box}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#00adb5' }]}> คูปองส่วนลดจากร้าน</Text>
            <ScrollView horizontal>
              <View style={stylesDeal.Deal_Today_BoxImage}>
                {
                  dataService2 && dataService2.coupon.map((value, index) => {
                    return <GetCoupon codeList={value.my_coupon == 'no' ? 'available' : ''} colorCoupon='#E43333' couponText={value.name}
                      getCoupon={this.getCoupon.bind(this)} key={index} saveCoupon setDataService={{
                        list: 'shop',
                        id_promotion: value.id_promotion
                      }}
                      textDetail={value.detail} timeOut={value.end_period} />
                  })
                }
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Deal_Exclusive
export class Deal_Exclusive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
  }
  render() {
    const { dataService, navigation } = this.props
    return (
      <View style={[stylesMain.FrameBackground,
      { backgroundColor: '#CABA5A', width: '100%' }
      ]}>
        <View style={stylesDeal.BoxText_Row}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ดีลสุด Exclusive</Text>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Deal_Topic', setData: { selectedIndex: 1 }, navigation })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={stylesDeal.Deal_Exclusive}> */}
        {
          dataService &&
          <FlatProduct {...this.props} custumNavigation='Deal_Exclusive' dataService={dataService} numberOfColumn={2}
            mode='row3' nameFlatProduct='Deal_Exclusive' nameSize={14} priceSize={15} dispriceSize={15} />
        }
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Store
export class Second_Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGetServices: true,
      activeGetServices2: true,
      dataService: [],
      dataService2: [],
      activeSlide: 0,
    };
  }
  getData(dataService) {
    this.setState({ activeGetServices: false, dataService })
  }
  getData2(dataService2) {
    this.setState({ activeGetServices2: false, dataService2 })
  }
  _renderItem = ({ item, index }) => {
    var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image}`
    return (
      <View key={index}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={stylesDeal.Second_Store_Slide_image}
        />
        <View style={stylesDeal.Second_Store_Slide_BoxText}>
          <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
        </View>
      </View>
    );
  }
  get pagination() {
    const { dataService2, activeSlide } = this.state;
    return (
      <View style={{ marginTop: -60 }}>
        <Pagination
          dotsLength={dataService2.length}
          activeDotIndex={activeSlide}
          // containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0.1)' }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 30,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 255, 255, 0.92)',
            borderWidth: 2,
          }}
          inactiveDotStyle={{
            width: 15,
            height: 5,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          carouselRef={this.activeSlide}
          tappableDots={!!this.activeSlide}
          // inactiveDotOpacity={0.6}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
  render() {
    const { navigation } = this.props
    const { activeGetServices, activeGetServices2, dataService } = this.state
    var uri = `${ip}/mysql/DataServiceMain.php`
    var dataBody = {
      type: 'sale'
    };
    var uri2 = `${finip}/home/home_mobile`;
    var dataBody2 = {
      slide: 'banner'
    };
    activeGetServices == true && GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
    activeGetServices2 == true && GetServices({ uriPointer: uri, dataBody: dataBody2, getDataSource: this.getData2.bind(this) })
    return (
      <View style={[stylesMain.FrameBackground, { width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ร้านมือสองลดราคา</Text>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Deal_Topic', setData: { selectedIndex: 2 }, navigation })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        {this.sildeView()}
        <View style={stylesDeal.BoxText_Row}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>มือสองลดราคา</Text>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Deal_Topic', setData: { selectedIndex: 3 }, navigation })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        {
          dataService &&
          <FlatProduct {...this.props} custumNavigation='Second_Store' dataService={dataService}
            mode='row3' nameFlatProduct='Second_Store' nameSize={14} priceSize={15} dispriceSize={15} />
        }
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> ProDed_Store
export class ProDed_Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  dataNewStore() {
    const { dataService } = this.props
    return dataService.map((item, index) => {
      var dataMySQL = `${finip}/${item.store_path}/${item.image_store}`;
      return (
        <View style={stylesDeal.ProDed_Store} key={index}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={{ height: 100, width: 100, }}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}> ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่! </Text>
        </View>
      )
    })
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={[stylesMain.FrameBackground,
      { backgroundColor: '#9887E0', width: '100%' }
      ]}>
        <View style={stylesDeal.BoxText_Row}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ร้านนี้มีดีล</Text>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({
            goScreen: 'Deal_Topic', setData: { selectedIndex: 4 }, navigation
          })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {this.dataNewStore()}
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> ProDed_New_Store
export class ProDed_New_Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService } = this.props
    return (
      <View style={[stylesMain.FrameBackground,
      { backgroundColor: '#F9AFF5', width: '100%' }
      ]}>
        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ดีลสุดฟินร้านใหม่</Text>
        <View style={{ paddingLeft: 10 }}>
          <ScrollView horizontal>
            {/* <View style={{ height: 220, flexDirection:'row'}}> */}
            {
              dataService && dataService.map((item, index) => {
                var dataMySQL = `${finip}/${item.store_path}/${item.image_store}`;
                return <View key={index} style={stylesDeal.ProDed_New_Store_Boximage}>
                  <View style={{ width: 60, height: 60 }}>
                    <FastImage
                      source={{
                        uri: dataMySQL,
                      }}
                      style={stylesMain.BoxProduct1Image}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                  </View>
                  <TouchableOpacity>
                    <View style={stylesDeal.ProDed_New_Store_Button}>
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class Shop_Deal_ForU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService, navigation } = this.props
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesDeal.BoxText_Row}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ช้อปทุกดีลเฉพาะคุณ</Text>
        </View>
        <View style={stylesMain.BoxProduct2BoxProduct}>
          {
            dataService &&
            <TodayProduct {...this.props} noTitle  loadData={dataService} />
          }
        </View>
      </View>
    );
  }
}