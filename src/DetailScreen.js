import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import stylesDetail from '../style/StylesDetailScreen'
import stylesMain from '../style/StylesMainScreen'
import stylesFont from '../style/stylesFont'
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import { finip, ip } from '../navigator/IpConfig'
import { AppBar } from './MainScreen';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataid_product: [],
    };
  }
  getid_product() {
    // var id_product = 107
    var id_product = this.props.navigation.getParam('id_item')
    // console.log('getid_product1: ' + this.props.navigation.getParam('id_item'))
    // console.log('getid_product2: ' + id_item)
    // console.log(url);
    var dataBody = {
      id_product: id_product
    };
    fetch([finip, 'product/product_deatil_mobile'].join('/'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log("responseJson")
        // console.log(responseJson)
        this.setState({
          dataid_product: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }
  componentDidMount() {
    this.getid_product();
  }
  render() {
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNoBackground, stylesMain.BackgroundAreaView]}>
        <AppBar leftBar='backarrow' navigation={this.props.navigation} />
        <ScrollView>
          <Detail_Image navigation={this.props.navigation} dataid_product={this.state.dataid_product} />
          <Store navigation={this.props.navigation} dataid_product={this.state.dataid_product} />
          <Conpon />
          <Selector />
          <Detail_Category dataid_product={this.state.dataid_product} />
          <Detail dataid_product={this.state.dataid_product} />
          <Reviews />
          <BannerBar />
          <Same_Store navigation={this.props.navigation} dataid_product={this.state.dataid_product} />
          <Similar_Product navigation={this.props.navigation} dataid_product={this.state.dataid_product} />
          <Might_like navigation={this.props.navigation} dataid_product={this.state.dataid_product} />
        </ScrollView>
        <Buy_bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///--------------------------------------------------------------------------///

export class Detail_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      imageLength: 1,
      imageLengthActive: 0,
    };
  }
  componentDidMount() {
  }
  imageGallery(image_path, image_gallery) {
    const image = {} = image_gallery.split(';')
    const length = image.length
    this.state.imageLengthActive == 0 ?
      this.setState({ imageLength: length, imageLengthActive: 1 }) :
      null
    var count = 0
    var myJSON = new Array()
    var item
    while (length > count) {
      // console.log(image[count])
      item = { "image_path": image_path, "image": image[count] };
      myJSON.push(item)
      count++
    }
    // console.log(myJSON)
    return (
      myJSON
    )
  }
  _renderItem = ({ item, indexs }) => {
    // console.log(item)
    var dataMySQL = [finip, item.image_path, item.image].join('/');
    return (
      <View style={stylesDetail.Image_Box} key={indexs}>
        <FastImage
          source={{
            uri: dataMySQL,
          }}
          style={stylesDetail.Image}
        />
      </View>
    );
  }
  render() {
    const { activeSlide } = this.state;
    let id_product = this.props.dataid_product.map((item, indexs) => {
      let dataMySQL
      {
        item.image_gallery ?
          dataMySQL = this.imageGallery(item.image_path, item.image_gallery) :
          dataMySQL = this.props.dataid_product;
      }
      // console.log(width)
      return (
        <View style={stylesDetail.Detail_Image} key={indexs}>
          <Carousel
            ref={c => this.activeSlide = c}
            data={dataMySQL}
            renderItem={this._renderItem}
            sliderWidth={width * 1}
            itemWidth={width * 1}
            sliderHeight={400}
            loop={true}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
          />
          <View style={{ flex: 1, }}>
            <View style={[stylesMain.ItemCenter, stylesDetail.ImageSlide]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                {activeSlide + 1}/{this.state.imageLength}</Text>
            </View>
          </View>
          <View style={stylesDetail.Price_Box}>
            <View style={stylesDetail.Price_Text_Name_Box}>
              <Text style={[stylesDetail.Price_Text_Name, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                {item.name}</Text>
              <View style={stylesDetail.Price_Icon_Box}>
                <Icons style={stylesDetail.Price_Icon} name='heart' size={20} />
                <IconEntypo style={stylesDetail.Price_Icon} name='share' size={20} />
              </View>
            </View>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={
                value =>
                  <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                    {value}</Text>}
            />
            <View style={[stylesDetail.Price_Text_IconBox, stylesMain.BottomSpace]}>
              <View style={stylesDetail.Price_Text_IconBoxStar}>
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={20} color='#FFAC33' />
                <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#111' }]}>
                  5</Text>
                <Text style={stylesDetail.Price_Text_Icon}>|</Text>
                <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                  สินค้าแนะนำ</Text>
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

///--------------------------------------------------------------------------///

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let id_store = this.props.dataid_product.map((item, indexs) => {
      // console.log(item)
      var dataMySQL = [finip, item.store_path, item.store_img].join('/');
      // console.log(dataMySQL)
      return (
        <View style={[stylesMain.FrameBackground, stylesMain.BottomSpace]} key={indexs}>
          <View style={stylesDetail.Store_Box1}>
            <View style={stylesDetail.Store_Box2}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                <FastImage
                  source={{
                    uri: dataMySQL,
                  }}
                  style={[stylesDetail.Store_Image, { marginLeft: 10, }]}
                />
              </TouchableOpacity>
              <View style={stylesDetail.Store_Text_Box}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                    {item.store_name}</Text>
                </TouchableOpacity>
                <Text style={[stylesDetail.Store_Text, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                <Text style={[stylesDetail.Store_Text, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  <IconEntypo name='location-pin' size={15} />
                  {item.store_address}</Text>
              </View>
              <View style={stylesDetail.Store_Buttom_Box}>
                <Text style={[stylesDetail.Store_Text_Button, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                  ติดตาม</Text>
              </View>
            </View>
          </View>
          <View style={stylesDetail.Store_Bar_A}>
            <View style={stylesDetail.Store_Bar}>
              <View>
                <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize1]}>
                  100</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                  รายการสินค้า</Text>
              </View>
              <Text style={{ fontSize: 25, }}>|</Text>
              <View>
                <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize1]}>
                  90%</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                  จัดส่งตรงเวลา</Text>
              </View>
              <Text style={{ fontSize: 25, }}>|</Text>
              <View>
                <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize1]}>
                  90%</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
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
///--------------------------------------------------------------------------///

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
          <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize2, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
            คูปอง </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={stylesDetail.Coupon_Box_Pon}>
              <Text style={[stylesDetail.Coupon_Box_Pon_Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                ลด ฿100.00</Text>
            </View>
            <View style={stylesDetail.Coupon_Box_Pon}>
              <Text style={[stylesDetail.Coupon_Box_Pon_Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                ลด ฿300.00</Text>
            </View>
            <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} />
          </View>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

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
          <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize2, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
            ตัวเลือก </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize3, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical]}>
              ตัวอย่างเช่น สี ขนาด</Text>
            <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} />
          </View>
        </View>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Detail_Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let id_store = this.props.dataid_product.map((item, indexs) => {
      return (
        <View style={[stylesMain.FrameBackground]} key={indexs}>
          <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
              ข้อมูลจำเพาะ</Text>
          </View>
          <View style={[stylesMain.BottomSpace, { flexDirection: 'row' }]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { marginLeft: 10 }]}>
                หมวดหมู่</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
              {item.type_name}</Text>
          </View>
          <View style={[stylesMain.BottomSpace, { flexDirection: 'row' }]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { marginLeft: 10 }]}>
                ยี่ห้อ</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
              Rayban</Text>
          </View>
          <View style={[stylesMain.BottomSpace, { flexDirection: 'row' }]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { marginLeft: 10 }]}>
                จำนวนสินค้า</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
              3041</Text>
          </View>
          <View style={[stylesMain.BottomSpace, { flexDirection: 'row' }]}>
            <View style={{ width: '25%' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { marginLeft: 10 }]}>
                ส่งจาก</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
              {item.store_address}</Text>
          </View>
        </View>
      );
    })
    return (
      <View>{id_store}</View >
    )
  }
}

///--------------------------------------------------------------------------///

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeText: false,
    };
  }
  render() {
    let id_store = this.props.dataid_product.map((item, indexs) => {
      const count = {} = item.detail.split('\n')
      // console.log(item.detail.length)
      // console.log(item.detail)
      // console.log(count.length)
      // console.log(count)
      return (
        <View style={stylesMain.FrameBackground} key={indexs}>
          <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
              รายละเอียดสินค้า</Text>
          </View>
          <View style={stylesDetail.Detail_Text_Box}>
            <Animated.Text style={[stylesDetail.Detail_Text, stylesFont.FontFamilyText, stylesFont.FontSize3, {
              height:
                item.detail.length > 300 || count.length > 4 ?
                  this.state.activeText == true ?
                    null :
                    100 :
                  null,
            }]}>
              {item.detail}</Animated.Text>
            {
              item.detail.length > 300 || count.length > 4 ?
                <TouchableOpacity onPress={() => {
                  this.state.activeText == true ?
                    this.setState({ activeText: false }) :
                    this.setState({ activeText: true })
                }}>
                  <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter]}>
                    <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, { fontFamily: 'SukhumvitSet-Text', }]}>
                      {
                        this.state.activeText == true ?
                          'ย่อ' :
                          'ดูเพิ่มเติม'
                      }</Text>
                    <IconEntypo name={this.state.activeText == true ? 'chevron-up' : 'chevron-down'} size={25} color='#0A55A6' />
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

///--------------------------------------------------------------------------///

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
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
            คะแนนสินค้า</Text>
          <View style={stylesMain.FlexRow} >
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize3, { marginRight: 0 }]}>
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
            <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize2]}>
              5/5</Text>
            <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize2]}>
              ( 10 รีวิว)</Text>
          </View>
        </View>
        <View style={stylesDetail.Reviews_Box}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
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
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                  p********n</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, stylesMain.BottomSpace]}>
                  สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.BottomSpace]}>
                  16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
              </View>
            </View>
            <View style={stylesDetail.Comment_R}>
              <FastImage
                style={stylesDetail.Comment_R_Image}
                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
              />
              <View style={stylesDetail.Comment_R_Text}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                  p********n</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
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
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.BottomSpace]}>
                  16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
              </View>
            </View>
            <View style={stylesDetail.Comment_R}>
              <FastImage
                style={stylesDetail.Comment_R_Image}
                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
              />
              <View style={stylesDetail.Comment_R_Text}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                  p********n</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#FFAC33' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                  <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, stylesMain.BottomSpace]}>
                  สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.BottomSpace]}>
                  16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


///--------------------------------------------------------------------------///

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

///--------------------------------------------------------------------------///

export class Same_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSale: [],
      countA: 0,
    };
  }
  getid_product() {
    this.props.dataid_product.map((item) => {
      // console.log(item)
      var dataBody = {
        id_type: item.id_type,
        id_store: item.id_store,
        type_product: "this_store",
      };
      fetch([finip, 'product/product_other_mobile'].join('/'), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataBody),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log("responseJson")
          // console.log(responseJson)
          this.setState({
            dataSale: responseJson, countA: 1
          })
        })
        .catch((error) => {
          console.error(error);
        })
    })
  }
  componentDidUpdate() {
    this.state.countA == 0 ? this.getid_product() : null;
  }
  render() {
    // console.log(this.state.dataSale)
    let dataSaleProduct = this.state.dataSale.map((item, indexs) => {
      var dataMySQL = [finip, item.image_path, item.image].join('/');
      return (
        <TouchableOpacity activeOpacity={1} key={indexs}
          onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
        >
          <View style={stylesMain.BoxProduct1Box} key={indexs}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={stylesMain.BoxProduct1Image}
            />
            <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
              {item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={value =>
                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  {value}</Text>}
            />
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
            สินค้าจากร้านเดียวกัน</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Same_StoreScreen', { type_product: 'this_store' })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {dataSaleProduct}
        </ScrollView>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class Similar_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSale: [],
      countA: 0,
    };
  }
  getid_product() {
    this.props.dataid_product.map((item) => {
      // console.log(item)
      var dataBody = {
        id_type: item.id_type,
        id_store: item.id_store,
        type_product: "same_product",
      };
      fetch([finip, 'product/product_other_mobile'].join('/'), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataBody),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log("responseJson")
          // console.log(responseJson)
          this.setState({
            dataSale: responseJson, countA: 1
          })
        })
        .catch((error) => {
          console.error(error);
        })
    })
  }
  componentDidUpdate() {
    this.state.countA == 0 ? this.getid_product() : null;
  }
  render() {
    let dataSaleProduct = this.state.dataSale.map((item, indexs) => {
      //   console.log('Sale' + [ indexs, item.image ].join(' ')),
      var dataMySQL = [finip, item.image_path, item.image].join('/');
      return (
        <TouchableOpacity activeOpacity={1} key={indexs}
          onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
        >
          <View style={stylesMain.BoxProduct1Box} key={indexs}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={stylesMain.BoxProduct1Image}
            />
            <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
              {item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={value =>
                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  {value}</Text>}
            />
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
            สินค้าที่คล้ายกัน</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Same_StoreScreen', { type_product: 'same_product' })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {dataSaleProduct}
        </ScrollView>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///s

export class Might_like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourcePopularProduct: [],
      countA: 0,
    };
  }
  getid_product() {
    this.props.dataid_product.map((item) => {
      // console.log(item)
      var dataBody = {
        id_type: item.id_type,
        id_store: item.id_store,
        type_product: "youlike",
      };
      fetch([finip, 'product/product_other_mobile'].join('/'), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataBody),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log("responseJson")
          // console.log(responseJson)
          this.setState({
            dataSourcePopularProduct: responseJson, countA: 1
          })
        })
        .catch((error) => {
          console.error(error);
        })
    })
  }
  componentDidUpdate() {
    this.state.countA == 0 ? this.getid_product() : null;
  }
  render() {
    // console.log( 'Might_like|render' )
    let dataToday = this.state.dataSourcePopularProduct.map((item, indexs) => {
      var dataMySQL = [finip, item.image_path, item.image].join('/');
      // console.log( dataMySQL )
      return (
        <TouchableOpacity activeOpacity={1} key={indexs}
          onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
        >
          <View style={stylesMain.BoxProduct3Box} key={indexs}>
            <FastImage
              source={{
                uri: dataMySQL,
              }}
              style={stylesMain.BoxProduct3Image}
            />
            <Text style={[stylesMain.BoxProduct2ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
              {item.name}</Text>
            <NumberFormat
              value={item.full_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={value =>
                <Text style={[stylesMain.BoxProduct2ImagePrice, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  {value}</Text>
              }
            />
          </View>
        </TouchableOpacity >
      );
    })
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
            คุณอาจชอบสิ่งนี้</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Same_StoreScreen', { type_product: 'youlike' })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDetail.PopularProductBoxProduct}>
          {dataToday}
        </View>
      </View>
    )
  }
}

///--------------------------------------------------------------------------///

export class Buy_bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataid_product: [],
    };
  }
  getid_product() {
    var id_item = this.props.navigation.getParam('id_item')
    var url = ip + '/mysql/DataService_Detail.php';
    // console.log(url);
    var dataBody = {
      type: 'store',
      id_product: id_item,
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      // console.log(getData.data);
      this.setState({
        dataid_product: getData.data,
      })
    })
  }
  componentDidMount() {
    this.getid_product();
  }
  render() {
    var s_id_store = this.state.dataid_product.map((item) => { return (item.s_id_store) })
    // console.log(s_id_store)
    return (
      <View style={stylesDetail.Buy_bar}>
        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
          <IconAntDesign name='message1' size={22} style={[stylesMain.ItemCenterVertical]} />
          <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
            แชท</Text>
        </View>
        <Text style={{ fontSize: 30 }}>|</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: s_id_store })}>
          <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
            <IconFontisto name='shopping-store' size={22} style={stylesMain.ItemCenterVertical} />
            <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
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

///--------------------------------------------------------------------------///
