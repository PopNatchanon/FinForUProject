///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import axios from 'axios';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { Button_Bar, Slide, } from './DealScreen';
import { GetServices, ProductBox } from '../../src/tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class The_BestFinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 titleHead={'สุดคุ้มสุดฟิน'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Fin_sale navigation={this.props.navigation} />
          <Store_Sale />
          <Product_Cool navigation={this.props.navigation} />
          <Second_Store navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Fin_sale
export class Fin_sale extends Component {
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
      type: 'sale'
    };

    return (
      <View>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={[stylesMain.FrameBackground, { marginTop: 20, }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: -10, width: 160 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> Fin จัดหนักลดสูงสุด 80 %  </Text>
          </View>
          <View style={stylesDeal.Fin_sale_BoxHead}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <ScrollView horizontal>
            <View style={stylesDeal.Fin_sale_BoxProduct}>
              {
                dataService ?
                  <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row3col1' prepath='mysql'
                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                  /> :
                  null
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Store_Sale
export class Store_Sale extends Component {
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
  _renderItem = ({ item, index }) => {
    var dataMySQL = [finip, item.image_path, item.image].join('/');
    return (
      <View key={index}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
    );
  }
  get pagination() {
    const { dataService, activeSlide } = this.state;
    return (
      <View style={{ marginTop: -60 }}>
        <Pagination
          dotsLength={dataService.length}
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
  Store_Sale_Box() {
    return (
      <View style={stylesDeal.Store_Sale}>
        <View style={stylesDeal.Store_Sale_Box}>
          {/* BoxA */}
          <View style={stylesDeal.Store_Sale_BoxA}>
            <View style={stylesDeal.Store_Sale_BoxA_Carousel}>
              <Carousel
                ref={c => this.activeSlide = c}
                data={this.state.dataService}
                renderItem={this._renderItem}
                sliderWidth={width * 0.585}
                itemWidth={width * 0.585}
                sliderHeight={100}
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                autoplayInterval={3000}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
              />
            </View>
            <View style={stylesDeal.Store_Sale_BoxA_Boximage}>
              <View style={stylesDeal.Store_Sale_BoxA_image}>
                <FastImage style={stylesDeal.Store_Sale_Image}
                  source={{
                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                  }}
                />
              </View>
              <View style={stylesDeal.Store_Sale_BoxA_image}>
                <FastImage style={stylesDeal.Store_Sale_Image}
                  source={{
                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                  }}
                />
              </View>
            </View>
          </View>
          {/* BoxB */}
          <View style={stylesDeal.Store_Sale_BoxB_Boximage}>
            <View style={stylesDeal.Store_Sale_BoxB_image}>
              <FastImage style={stylesDeal.Store_Sale_Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
              />
            </View>
            <View style={stylesDeal.Store_Sale_BoxB_image}>
              <FastImage style={stylesDeal.Store_Sale_Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
  render() {
    var uri = finip + '/home/home_mobile'
    var dataBody = {
      slide: 'banner'
    };
    return (
      <View>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={[stylesMain.FrameBackground, { marginTop: 20, }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: -10, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> ร้านนี้มีของลด </Text>
          </View>
          <View style={stylesDeal.Fin_sale_BoxHead}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          {this.Store_Sale_Box()}
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Product_Cool
export class Product_Cool extends Component {
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
      <View>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={[stylesMain.FrameBackground, { marginTop: 20, }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: -10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สินค้าราคาโคตรคูล</Text>
          </View>
          <View style={[stylesDeal.Fin_sale_BoxHead, { marginTop: -10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <View>
            <View style={[stylesDeal.Deal_For_you, { marginTop: 10 }]}>
              {
                dataService ?
                  <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row3col2_2' prepath='mysql'
                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                  /> :
                  null
              }
            </View>
          </View>
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
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
        </View>
      </View>
    );
  }
  get pagination() {
    const { dataService, activeSlide } = this.state;
    return (
      <View style={{ marginTop: -60 }}>
        <Pagination
          dotsLength={dataService.length}
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
  Second_StoreBody() {
    return (
      <View style={stylesDeal.Second_Store}>
        <View style={stylesDeal.Second_Store_SlideA}>
          <Carousel
            ref={c => this.activeSlide = c}
            data={this.state.dataService}
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
              data={this.state.dataService}
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
              data={this.state.dataService}
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
        <View style={{ height: 60, marginTop: 10, width: '90%', justifyContent: 'space-between', flexDirection: 'row', }}>
          <View style={{ width: '33%', backgroundColor: 'red', height: '100%', }}>
            <FastImage style={stylesDeal.Store_Sale_Image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
              }}
            />
          </View>
          <View style={{ width: '33%', backgroundColor: 'red', height: '100%', }}>
            <FastImage style={stylesDeal.Store_Sale_Image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
              }}
            />
          </View>
          <View style={{ width: '33%', backgroundColor: 'red', height: '100%', }}>
            <FastImage style={stylesDeal.Store_Sale_Image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
              }}
            />
          </View>
        </View>
      </View>
    )
  }
  dataFlashSale() {
    return this.state.dataService2.map((item, index) => {
      var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
      return (
        <TouchableOpacity
          activeOpacity={1}
          key={index}
          onPress={
            () => this.props.navigation.navigate(
              'DetailScreen', {
              id_item: item.id_product
            })
          }
        >
          <View style={[stylesMain.BoxProduct4Box, { marginBottom: 4 }]}>
            <View style={stylesMain.BoxProduct1ImageofLines}>
              <FastImage
                source={{
                  uri: dataMySQL,
                }}
                style={[stylesMain.BoxProduct1Image]}
              />
            </View>
            <View style={{ height: 60, paddingHorizontal: 3 }}>
              <View style={[stylesMain.BoxProduct1NameofLines]}>
                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                  {item.name}</Text>
              </View>
              <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                <NumberFormat
                  value={item.full_price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={value =>
                    <Text style={[
                      stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                    ]}>
                      {value + ' '}</Text>
                  }
                />
                {/* <NumberFormat
                  value={throughsale}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={value =>
                    <Text style={[
                      stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                      { marginTop: 3 }
                    ]}>
                      {value}</Text>
                  }
                /> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    })
  }
  render() {
    var uri = finip + '/home/home_mobile';
    var dataBody = {
      slide: 'banner'
    };
    var uri2 = ip + '/mysql/DataServiceMain.php';
    var dataBody2 = {
      type: 'product'
    };
    return (
      <View style={stylesMain.FrameBackground}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <GetServices uriPointer={uri2} dataBody={dataBody2} getDataSource={this.getData2} />
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#95D370', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
        </View>
        {this.Second_StoreBody()}
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>มือสองลดราคา</Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
        </View>
        <View style={[stylesDeal.Deal_For_you, { marginTop: 6 }]}>
          {this.dataFlashSale()}
        </View>
      </View>
    );
  }
}