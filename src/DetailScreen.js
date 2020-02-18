///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';

import axios from 'axios';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../style/StylesDetailScreen'
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from './MainScreen';
import { GetServices, ProductBox } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class DetailScreen extends Component {
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
    var id_product = navigation.getParam('id_item')
    var uri = finip + '/product/product_deatil_mobile';
    var dataBody = {
      id_product: id_product
    };
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <AppBar leftBar='backarrow' navigation={navigation} />
        <ScrollView>
          <Detail_Image dataService={dataService} navigation={navigation} />
          <Store dataService={dataService} navigation={navigation} />
          <Conpon />
          <Selector />
          <Detail_Category dataService={dataService} />
          <Detail dataService={dataService} />
          <Reviews />
          <BannerBar />
          <Same_Store dataService={dataService} navigation={navigation} />
          <Similar_Product dataService={dataService} navigation={navigation} />
          <Might_like dataService={dataService} navigation={navigation} />
        </ScrollView>
        <Buy_bar navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Image
export class Detail_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      imageLength: 1,
      imageLengthActive: 0,
    };
  }
  imageGallery(image_full_path, gallery_image) {
    const { imageLengthActive } = this.state
    const image = {} = gallery_image.split(';')
    const length = image.length
    imageLengthActive == 0 ?
      this.setState({ imageLength: length, imageLengthActive: 1 }) :
      null
    var count = 0
    var myJSON = new Array()
    var item
    while (length > count) {
      item = { "image_full_path": image_full_path, "image": image[count] };
      myJSON.push(item)
      count++
    }
    return (
      myJSON
    )
  }
  _renderItem = ({ item, index }) => {
    var dataMySQL = [finip, item.image_full_path, item.image].join('/');
    return (
      <View style={{ width: width * 1, height: width * 1, /*backgroundColor: '#d9d9d9'*/ }}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={[stylesMain.BoxProduct1Image, { opacity: 0.9 }]}
          key={index}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
  render() {
    const { activeSlide, imageLength } = this.state;
    const { dataService } = this.props;
    let id_product = dataService.map((item, index) => {
      let dataMySQL
      {
        item.gallery_image ?
          dataMySQL = this.imageGallery(item.image_full_path, item.gallery_image) :
          dataMySQL = dataService;
      }
      return (
        <View style={[stylesMain.FrameBackground2, { marginTop: 0, borderTopWidth: 0 }]} key={index}>
          <View style={{ /*backgroundColor: '#f9f9f9' */ }}>
            <Carousel
              ref={c => this.activeSlide = c}
              data={dataMySQL}
              renderItem={this._renderItem}
              sliderWidth={width * 1}
              itemWidth={width * 1}
              sliderHeight={width * 1}
              loop={true}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <View style={{ flex: 1, }}>
              <View style={[stylesMain.ItemCenter, stylesDetail.ImageSlide]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  {activeSlide + 1}/{imageLength}</Text>
              </View>
            </View>
          </View>
          <View style={[stylesDetail.Price_Box, { borderTopWidth: 0 }]}>
            <View style={stylesDetail.Price_Text_Name_Box}>
              <NumberFormat
                value={item.full_price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'฿'}
                renderText={
                  value =>
                    <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                      {value}</Text>}
              />
              <View style={stylesDetail.Price_Icon_Box}>
                <IconFontAwesome5 style={stylesDetail.Price_Icon} name='heart' size={20} />
                <IconEntypo style={stylesDetail.Price_Icon} name='share' size={20} />
              </View>
            </View>
            <Text numberOfLines={2} style={[stylesDetail.Price_Text_Name, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
              {item.name}</Text>
            <View style={[stylesDetail.Price_Text_IconBox, stylesMain.BottomSpace]}>
              <View style={stylesDetail.Price_Text_IconBoxStar}>
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#111' }]}>
                  5</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
    return (
      <View>{id_product}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Store
export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { dataService, navigation } = this.props
    let id_store = dataService.map((item, index) => {
      var dataMySQL = [finip, item.store_path, item.store_img].join('/');
      return (
        <View style={[stylesMain.FrameBackground, stylesMain.BottomSpace]} key={index}>
          <View style={stylesDetail.Store_Box1}>
            <View style={stylesDetail.Store_Box2}>
              <TouchableOpacity onPress={() => navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                <FastImage
                  source={{
                    uri: dataMySQL,
                  }}
                  style={[stylesDetail.Store_Image, { marginLeft: 10, }]}
                />
              </TouchableOpacity>
              <View style={stylesDetail.Store_Text_Box}>
                <TouchableOpacity onPress={() => navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                    {item.store_name}</Text>
                </TouchableOpacity>
                <Text style={[stylesDetail.Store_Text, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                  Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                <Text style={[stylesDetail.Store_Text, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                  <IconEntypo name='location-pin' size={15} />
                  {item.store_address}</Text>
              </View>
              <View style={stylesDetail.Store_Buttom_Box}>
                <Text style={[stylesDetail.Store_Text_Button, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  ติดตาม</Text>
              </View>
            </View>
          </View>
          <View style={stylesDetail.Store_Bar_A}>
            <View style={stylesDetail.Store_Bar}>
              <View>
                <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  100</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  รายการสินค้า</Text>
              </View>
              <Text style={{ fontSize: 25, }}>|</Text>
              <View>
                <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  90%</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  จัดส่งตรงเวลา</Text>
              </View>
              <Text style={{ fontSize: 25, }}>|</Text>
              <View>
                <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  90%</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  อัตตราการตอบกลับแชท</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
    return (
      <View>
        {id_store}
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Conpon
export class Conpon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesDetail.Coupon}>
        <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
          <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
            คูปอง </Text>
          <View style={stylesMain.FlexRow}>
            <View style={stylesDetail.Coupon_Box_Pon}>
              <Text style={[stylesDetail.Coupon_Box_Pon_Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                ลด ฿100.00</Text>
            </View>
            <View style={stylesDetail.Coupon_Box_Pon}>
              <Text style={[stylesDetail.Coupon_Box_Pon_Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                ลด ฿300.00</Text>
            </View>
            <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} />
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Selector
export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesDetail.Coupon}>
        <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
          <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
            ตัวเลือก </Text>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize6, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical]}>
              ตัวอย่างเช่น สี ขนาด</Text>
            <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} />
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Category
export class Detail_Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { dataService } = this.props
    let id_store = dataService.map((item, index) => {
      return (
        <View style={[stylesMain.FrameBackground]} key={index}>
          <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
              ข้อมูลจำเพาะ</Text>
          </View>
          <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>
                หมวดหมู่</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
              {item.type_name}</Text>
          </View>
          <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>
                ยี่ห้อ</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
              {item.brand_product}</Text>
          </View>
          <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>
                จำนวนสินค้า</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
              {item.amount_product}</Text>
          </View>
          <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>
                ส่งจาก</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
              {item.store_address}</Text>
          </View>
        </View>
      );
    })
    return (
      <View>{id_store}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail
export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeText: false,
    };
  }
  render() {
    const { showMoreButton, activeText } = this.state
    const { dataService } = this.props
    let id_store = dataService.map((item, index) => {
      return (
        <View style={stylesMain.FrameBackground} key={index}>
          <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
              รายละเอียดสินค้า</Text>
          </View>
          <View style={stylesDetail.Detail_Text_Box}>
            <Text numberOfLines={activeText == true ? null : 4} onTextLayout={({ nativeEvent: { lines } }) =>
              this.setState({ showMoreButton: lines.length > 4 })
            } style={[
              stylesDetail.Detail_Text, stylesFont.FontFamilyText, stylesFont.FontSize6
            ]}>
              {item.detail}</Text>
            {
              showMoreButton == true ?
                <TouchableOpacity onPress={() => {
                  activeText == true ?
                    this.setState({ activeText: false }) :
                    this.setState({ activeText: true })
                }}>
                  <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter]}>
                    <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, { fontFamily: 'SukhumvitSet-Text', }]}>
                      {
                        activeText == true ?
                          'ย่อ' :
                          'ดูเพิ่มเติม'
                      }</Text>
                    <IconEntypo name={activeText == true ? 'chevron-up' : 'chevron-down'} size={25} color='#0A55A6' />
                  </View>
                </TouchableOpacity> :
                null
            }
          </View>
        </View>
      );
    })
    return (
      <View>{id_store}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Reviews
export class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
            คะแนนสินค้า</Text>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize6, { marginRight: 0 }]}>
              ดูทั้งหมด</Text>
            <IconFeather style={stylesDetail.Score_iconB} name='edit' size={20} color='#0A55A6' />
          </View>
        </View>
        <View style={stylesDetail.Price_Text_IconBox}>
          <View style={stylesDetail.Price_Text_IconBoxStar}>
            <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
            <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
              5/5</Text>
            <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
              ( 10 รีวิว)</Text>
          </View>
        </View>
        <View style={stylesDetail.Reviews_Box}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
            ภาพจากผู้ซื้อ</Text>
          <View>
            <ScrollView horizontal>
              <View style={stylesDetail.Reviews_Image_Box}>
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                />
              </View>
            </ScrollView>
            <View style={stylesDetail.Comment_R}>
              <FastImage
                style={stylesDetail.Comment_R_Image}
                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
              />
              <View style={stylesDetail.Comment_R_Text}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  p********n</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BottomSpace]}>
                  สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                  16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
              </View>
            </View>
            <View style={stylesDetail.Comment_R}>
              <FastImage
                style={stylesDetail.Comment_R_Image}
                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
              />
              <View style={stylesDetail.Comment_R_Text}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  p********n</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                <View style={[stylesDetail.Comment_Image_A, stylesMain.BottomSpace]}>
                  <FastImage
                    style={stylesDetail.Reviews_Image}
                    source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                  />
                  <FastImage
                    style={stylesDetail.Reviews_Image}
                    source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                  />
                  <FastImage
                    style={stylesDetail.Reviews_Image}
                    source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                  />
                </View>
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                  16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
              </View>
            </View>
            <View style={stylesDetail.Comment_R}>
              <FastImage
                style={stylesDetail.Comment_R_Image}
                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
              />
              <View style={stylesDetail.Comment_R_Text}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  p********n</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BottomSpace]}>
                  สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                  16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar
export class BannerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (<View style={stylesDetail.Banner_Bar}>
      <FastImage
        style={stylesDetail.Banner_Bar_image}
        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg' }}
      />
    </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Same_Store
export class Same_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: [],
      countA: 0,
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService2) {
    this.setState({ dataService2 })
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    var uri = finip + '/product/product_other_mobile';
    var dataBody
    dataService.map((item) => {
      dataBody = {
        id_type: item.id_type,
        id_store: item.id_store,
        type_product: "this_store",
      };
    })
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataBody !== undefined ?
            <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
            null
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            สินค้าจากร้านเดียวกัน</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Same_StoreScreen', { type_product: 'this_store' })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService2 ?
              <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row3col1' pointerUrl='DetailScreen'
                pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
              /> :
              null
          }
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Similar_Product
export class Similar_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: [],
      countA: 0,
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService2) {
    this.setState({ dataService2 })
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    var uri = finip + '/product/product_other_mobile';
    var dataBody
    dataService.map((item) => {
      dataBody = {
        id_type: item.id_type,
        id_store: item.id_store,
        type_product: "same_product",
      };
    })
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataBody !== undefined ?
            <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
            null
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            สินค้าที่คล้ายกัน</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Same_StoreScreen', { type_product: 'same_product' })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService2 ?
              <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row3col1' pointerUrl='DetailScreen'
                pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
              /> :
              null
          }
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Might_like
export class Might_like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: [],
      countA: 0,
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService2) {
    this.setState({ dataService2 })
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    var uri = finip + '/product/product_other_mobile';
    var dataBody
    dataService.map((item) => {
      dataBody = {
        id_type: item.id_type,
        id_store: item.id_store,
        type_product: "youlike",
      };
    })
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataBody !== undefined ?
            <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
            null
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            คุณอาจชอบสิ่งนี้</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Same_StoreScreen', { type_product: 'youlike' })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDetail.PopularProductBoxProduct}>
          {
            dataService2 ?
              <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row2colall' pointerUrl='DetailScreen'
                pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
              /> :
              null
          }
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export class Buy_bar extends Component {
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
    var id_item = navigation.getParam('id_item')
    var id_store
    var uri = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'store',
      id_product: id_item,
    };
    dataService.map((item) => { return (item.id_store) })
    dataService.length == 1 ? id_store = dataService.map((item) => { return (item.id_store) }) : null
    return (
      <View style={stylesDetail.Buy_bar}>
        {/* {
          id_item !== undefined ?
            <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
            null
        } */}
        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
          <IconAntDesign name='message1' size={22} style={[stylesMain.ItemCenterVertical]} />
          <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
            แชท</Text>
        </View>
        <Text style={{ fontSize: 30 }}>|</Text>
        <TouchableOpacity onPress={() => id_store ? navigation.navigate('StoreScreen', { id_item: id_store }) : null}>
          <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
            <IconFontisto name='shopping-store' size={22} style={stylesMain.ItemCenterVertical} />
            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
              ร้านค้า</Text>
          </View>
        </TouchableOpacity>
        <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
          <IconAntDesign name='shoppingcart' size={25} />
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter]}>
            เพิ่มลงรถเข็น</Text>
        </View>
        <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
          <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
            ซื้อเลย</Text>
        </View>
      </View>
    );
  }
}