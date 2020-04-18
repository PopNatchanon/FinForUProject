///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
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
import { AppBar1, ExitAppModule, Second_product, GetData } from '../MainScreen';
import { GetCoupon, GetServices, ProductBox, LoadingScreen, } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class DealScreen extends Component {
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
    var uri = finip + '/coupon/coupon_findeal_mobile';
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {[
          (activeGetCurrentUser == true || activeGetServices == true) &&
          <LoadingScreen key='LoadingScreen' />,
          activeGetCurrentUser == false && activeGetServices == true &&
          <GetServices Authorization={keycokie} uriPointer={uri} getDataSource={this.getData.bind(this)} key='GetServices'
          // showConsole='coupon_findeal_mobile'
          />,
          activeGetCurrentUser == true &&
          <GetData getCokie={true} getSource={this.getSource.bind(this)} getUser={true} key='GetData' />
        ]}
        <AppBar1 titleHead={'ดีลสุดคุ้ม'} backArrow searchBar chatBar navigation={navigation} />
        <ScrollView>
          {[
            dataService &&
            <Slide dataService={dataService.banner} key='Slide' navigation={navigation} />,
            dataService &&
            <Deal_Calendar dataService={dataService.carlendar_banner} key='Deal_Calendar' />,
            currentUser && keycokie &&
            <Deal_Today currentUser={currentUser} keycokie={keycokie} navigation={navigation} />,
            dataService &&
            <Deal_Exclusive dataService={dataService.exclusive} key='Deal_Exclusive' navigation={navigation} />,
            dataService &&
            <ProDed_Store dataService={dataService.store} key='ProDed_Store' navigation={navigation} />,
            dataService &&
            <ProDed_New_Store dataService={dataService.store} key='ProDed_New_Store' />,
            dataService &&
            <Second_product Header_Second key='Second_product' loadData={{
              product_second: dataService.product_second, list_store2_1: dataService.second_1, list_store2_2: dataService.second_2,
              mobile_bar: dataService.second_1, mobile_slide: dataService.second_3,
            }} navigation={navigation} />,
            /* <Second_Store navigation={navigation} /> */
            dataService &&
            <Shop_Deal_ForU dataService={dataService.product_foryou} key='Shop_Deal_ForU' navigation={navigation} />
          ]}
        </ScrollView>
        <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
          <Button_Bar navigation={navigation} />
        </View>
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Slide
export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  _renderItem = item => {
    var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
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
export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={[stylesDeal.Button_Bar, { bottom: '7%', }]}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('DealScreen')}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../icon/Icon_Deal/01.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CoinScreen')}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../icon/Icon_Deal/02.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CampaignScreen')}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../icon/Icon_Deal/03.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('The_BestFinScreen')}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../icon/Icon_Deal/04.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('Installment_payScreen')}>
          <View style={[stylesDeal.Button_Bar_Box]}>
            <FastImage style={stylesMain.Button_Bar_icon}
              source={require('../../icon/Icon_Deal/05.jpg')}
              resizeMode={FastImage.resizeMode.contain} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Deal_Calendar
export class Deal_Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService } = this.props
    return (
      <View style={{ paddingHorizontal: 2 }}>
        <View style={[stylesMain.FrameBackground, { backgroundColor: '#B5F5D1', width: '100%' }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#5094EE', marginLeft: -3, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลเด็ดตามปฏิทิน</Text>
          </View>
          <View style={stylesDeal.Deal_Calendar_Box}>
            {
              dataService && dataService.map((value, index) => {
                const image_carlendar = finip + '/' + value.image_path + '/' + value.image
                return <View key={index} style={stylesDeal.Deal_Calendar_BoxN}>
                  <FastImage style={{ height: '100%', width: '100%' }}
                    source={{
                      uri: image_carlendar,
                    }}
                  />
                </View>
              })
            }
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Deal_Today
export class Deal_Today extends Component {
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
    const { currentUser, keycokie } = this.props
    const { activeServices, dataService, dataService2, id_promotion } = this.state
    const uri = finip + '/coupon/save_coupon_fin'
    var dataBody = {
      id_customer: currentUser.id_customer,
      device: 'mobile_device',
      id_promotion,
    }
    const uri2 = finip + '/coupon/save_coupon_shop'
    var dataBody2 = {
      id_customer: currentUser.id_customer,
      device: 'mobile_device',
      id_promotion_shop: id_promotion,
    }
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#AF5F92', width: '100%' }]}>
        {[
          activeServices.activeGetServices == true && currentUser && keycokie &&
          <GetServices Authorization={keycokie} dataBody={dataBody} uriPointer={uri} getDataSource={this.getData.bind(this)}
            key='save_coupon_fin' showConsole='save_coupon_fin'
          />,
          activeServices.activeGetServices2 == true && currentUser && keycokie &&
          <GetServices Authorization={keycokie} dataBody={dataBody2} uriPointer={uri2} getDataSource={this.getData2.bind(this)}
            key='save_coupon_shop' showConsole='save_coupon_shop'
          />
        ]}
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#D5CD5B', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลเด็ดประจำวัน</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.push('Deal_Topic', { selectedIndex: 0 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, }}>
          <View style={stylesDeal.Deal_Today_Box}>
            <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
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
        </View>
        <View>
          <View style={{ padding: 10, }}>
            <View style={stylesDeal.Deal_Today_Box}>
              <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจากร้าน</Text>
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
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Deal_Exclusive
export class Deal_Exclusive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
  }
  render() {
    const { dataService, navigation } = this.props
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#CABA5A', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#6170F8', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลสุด Exclusive</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.push('Deal_Topic', { selectedIndex: 1 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDeal.Deal_Exclusive}>
          <View style={stylesDeal.Deal_Exclusive_BoxImageIcon}>
            <FastImage style={stylesDeal.Deal_Exclusive_Image}
              source={{
                uri: ip + '/MySQL/uploads/Unicorn/04.png',
              }}
            />
          </View>
          {
            dataService ?
              <ProductBox dataService={dataService} navigation={navigation} mode='5item' numberOfItem={5}
                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
              /> :
              null
          }
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Store
export class Second_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
      dataService2: [],
      activeSlide: 0,
    };
    this.getData = this.getData.bind(this)
    this.getData2 = this.getData2.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  getData2(dataService2) {
    this.setState({ dataService2 })
  }
  _renderItem = ({ item, index }) => {
    var dataMySQL = [finip, item.image_path, item.image].join('/');
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
  sildeView() {
    const { dataService2 } = this.state
    return (
      <View style={stylesDeal.Second_Store}>
        <View style={stylesDeal.Second_Store_SlideA}>
          <Carousel
            ref={c => this.activeSlide = c}
            data={dataService2}
            renderItem={this._renderItem}
            sliderWidth={width * 0.89}
            itemWidth={width * 0.89}
            sliderHeight={160}
            loop={true}
            autoplay={true}
            autoplayDelay={3000}
            autoplayInterval={3000}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
          />
        </View>
        <View style={stylesDeal.Second_Store_SlideB}>
          <View style={stylesDeal.Second_Store_SlideB_Box}>
            <Carousel
              ref={c => this.activeSlide = c}
              data={dataService2}
              renderItem={this._renderItem}
              sliderWidth={width * 0.43}
              itemWidth={width * 0.43}
              sliderHeight={120}
              loop={true}
              autoplay={true}
              autoplayDelay={3000}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
          </View>
          <View style={stylesDeal.Second_Store_SlideB_Box}>
            <Carousel
              ref={c => this.activeSlide = c}
              data={dataService2}
              renderItem={this._renderItem}
              sliderWidth={width * 0.43}
              itemWidth={width * 0.43}
              sliderHeight={120}
              loop={true}
              autoplay={true}
              autoplayDelay={3000}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
          </View>
        </View>
      </View>
    )
  }
  render() {
    const { dataService } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    var uri2 = finip + '/home/home_mobile';
    var dataBody2 = {
      slide: 'banner'
    };
    return (
      <View style={[stylesMain.FrameBackground, { width: '100%' }]}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <GetServices uriPointer={uri2} dataBody={dataBody2} getDataSource={this.getData2} />
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#95D370', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push('Deal_Topic', { selectedIndex: 2 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        {this.sildeView()}
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>มือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push('Deal_Topic', { selectedIndex: 3 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row', }}>
            {
              dataService ?
                <ProductBox dataService={dataService} navigation={navigation} typeip={'ip'} mode='row3col1'
                  pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                  prepath='mysql'
                /> :
                null
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> ProDed_Store
export class ProDed_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  dataNewStore() {
    const { dataService } = this.props
    return dataService.map((item, index) => {
      var dataMySQL = finip + '/' + item.store_path + '/' + item.image_store;
      return (
        <View style={stylesDeal.ProDed_Store} key={index}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={{ height: 100, width: 100, }}
          />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}> ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่! </Text>
        </View>
      )
    })
  }
  render() {
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#9887E0', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#F1F193', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 3, marginLeft: 8 }]}>ร้านนี้มีดีล</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.push('Deal_Topic', { selectedIndex: 4 })}>
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
export class ProDed_New_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService } = this.props
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#F9AFF5', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#F1F193', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 3, marginLeft: 8 }]}>ดีลสุดฟินร้านใหม่</Text>
          </View>
        </View>
        <View style={stylesDeal.ProDed_New_Store}>
          <ScrollView horizontal>
            <View style={[stylesDeal.ProDed_New_Store_Box, { height: 235, flexDirection: 'column', flexWrap: 'wrap', }]}>
              {
                dataService && dataService.map((item, index) => {
                  var dataMySQL = finip + '/' + item.store_path + '/' + item.image_store;
                  return <View key={index} style={stylesDeal.ProDed_New_Store_Boximage}>
                    <FastImage
                      source={{
                        uri: dataMySQL,
                      }}
                      style={{ height: 60, width: 60, }}
                    />
                    <TouchableOpacity>
                      <View style={stylesDeal.ProDed_New_Store_Button}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                })
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class Shop_Deal_ForU extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService, navigation } = this.props
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#5ACAC8', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#CB2342', marginLeft: -3, width: 130 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ช้อปทุกดีลเฉพาะคุณ</Text>
          </View>
        </View>
        <View style={stylesDeal.Deal_For_you}>
          {
            dataService &&
            <ProductBox dataService={dataService} navigation={navigation} mode='5item'
              pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
            />
          }
        </View>
      </View>
    );
  }
}