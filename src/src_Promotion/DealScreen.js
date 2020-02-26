///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
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
import { AppBar1, ExitAppModule } from '../MainScreen';
import { GetCoupon, GetServices, ProductBox, } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class DealScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 titleHead={'ดีลสุดคุ้ม'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Deal_Calendar />
          <Deal_Today navigation={this.props.navigation} />
          <Deal_Exclusive navigation={this.props.navigation} />
          <ProDed_Store navigation={this.props.navigation} />
          <ProDed_New_Store />
          <Second_Store navigation={this.props.navigation} />
          <Shop_Deal_ForU navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
        <ExitAppModule navigation={this.props.navigation} />
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
      dataService: [],
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  _renderItem = ({ item, index }) => {
    var dataMySQL = [finip, item.image_path, item.image].join('/');
    return (
      <View style={stylesDeal.child} key={index}>
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
  get pagination() {
    const { dataService, activeSlide } = this.state;
    return (
      <View style={{ marginTop: -60, height: 70, marginBottom: -10, }}>
        <Pagination
          dotsLength={dataService.length}
          activeDotIndex={activeSlide}
          // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 30,
            // backgroundColor: 'rgba(0, 0, 0, 0)',
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
    const { dataService } = this.state
    var dataBody = {
      slide: 'banner'
    };
    var uri = finip + '/home/home_mobile';
    return (
      <View>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <Carousel
          ref={c => this.activeSlide = c}
          data={dataService}
          renderItem={this._renderItem}
          sliderWidth={width * 1}
          itemWidth={width * 1}
          sliderHeight={height * 0.5}
          loop={true}
          autoplay={true}
          autoplayDelay={3000}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        {this.pagination}
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
      <View style={stylesDeal.Button_Bar}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('DealScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b01.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>ดีลสุดพิเศษ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CoinScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b02.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>FinCoin</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('CampaignScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b03.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>แคมเปญ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('The_BestFinScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b04.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>สุดคุ้มสุดฟิน</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('Installment_payScreen')}>
          <View style={stylesDeal.Button_Bar_Box}>
            <FastImage style={stylesDeal.Button_Bar_BoxICON}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/b05.png',
              }}
            />
            <Text style={[stylesDeal.Button_Bar_BoxText, stylesFont.FontFamilyText]}>ผ่อนชำระ 0%</Text>
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
    return (
      <View style={{ paddingHorizontal: 2 }}>
        <View style={[stylesMain.FrameBackground, { backgroundColor: '#B5F5D1', width: '100%' }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#5094EE', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลเด็ดตามปฏิทิน</Text>
          </View>
          <View style={stylesDeal.Deal_Calendar_Box}>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded1.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded2.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded6.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Deal_Calendar_BoxN}>
              <FastImage style={{ height: '100%', width: '100%' }}
                source={{
                  uri: ip + '/MySQL/uploads/Deal_Today/ded5.jpg',
                }}
              />
            </View>
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
    };
  }
  render() {
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#AF5F92', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#D5CD5B', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลเด็ดประจำวัน</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 0 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, }}>
          <View style={stylesDeal.Deal_Today_Box}>
            <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
            <ScrollView horizontal>
              <View style={stylesDeal.Deal_Today_BoxImage}>
                <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
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
                  <GetCoupon colorCoupon='#E43333' codeList='available' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                  <GetCoupon colorCoupon='#E43333' codeList='available' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                  <GetCoupon colorCoupon='#E43333' codeList='available' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
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
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  render() {
    const { dataService } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'itemNumber',
      item_Value: 5,
    };
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#CABA5A', width: '100%' }]}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#6170F8', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ดีลสุด Exclusive</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 1 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndW]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDeal.Deal_Exclusive}>
          <View style={stylesDeal.Deal_Exclusive_BoxImageIcon}>
            <Text style={[stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>สินค้าลด 60% </Text>
            <FastImage style={stylesDeal.Deal_Exclusive_Image}
              source={{
                uri: ip + '/MySQL/uploads/icon_brand/ht.png',
              }}
            />
          </View>
          {
            dataService ?
              <ProductBox dataService={dataService} navigation={navigation} typeip={'ip'} mode='5item'
                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                prepath='mysql'
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
          <TouchableOpacity onPress={() => navigation.navigate('Deal_Topic', { selectedIndex: 2 })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB]}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        {this.sildeView()}
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>มือสองลดราคา</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Deal_Topic', { selectedIndex: 3 })}>
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
      dataService: [],
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  dataNewStore() {
    const { dataService } = this.state
    return dataService.map((item, index) => {
      var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
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
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'store'
    };
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#9887E0', width: '100%' }]}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#F1F193', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 3, marginLeft: 8 }]}>ร้านนี้มีดีล</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deal_Topic', { selectedIndex: 4 })} >
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
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#F9AFF5', width: '100%' }]}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#F1F193', marginLeft: -3 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 3, marginLeft: 8 }]}>ดีลสุดฟินร้านใหม่</Text>
          </View>
        </View>
        <View style={stylesDeal.ProDed_New_Store}>
          <View style={stylesDeal.ProDed_New_Store_Box}>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand1.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand2.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand3.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand4.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={stylesDeal.ProDed_New_Store_Box}>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand3.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand9.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand25.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDeal.ProDed_New_Store_Boximage}>
              <FastImage style={{ height: 60, width: 60, }}
                source={{
                  uri: ip + '/MySQL/uploads/icon_brand/brand5.png',
                }}
              />
              <TouchableOpacity>
                <View style={stylesDeal.ProDed_New_Store_Button}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าชมร้าน</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
      type: 'product'
    };
    return (
      <View style={[stylesMain.FrameBackground, { backgroundColor: '#5ACAC8', width: '100%' }]}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#CB2342', marginLeft: -3, width: 130 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ช้อปทุกดีลเฉพาะคุณ</Text>
          </View>
        </View>
        <View style={stylesDeal.Deal_For_you}>
          {
            dataService ?
              <ProductBox dataService={dataService} navigation={navigation} typeip={'ip'} mode='5item'
                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                prepath='mysql'
              /> :
              null
          }
        </View>
      </View>
    );
  }
}