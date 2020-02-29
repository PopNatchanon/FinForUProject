///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Animated, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Modal
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SmartGallery from "react-native-smart-gallery";
import BottomSheet from "react-native-raw-bottom-sheet";
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
import { AppBar, ExitAppModule } from './MainScreen';
import { GetServices, ProductBox, GetCoupon, TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
      scrollY: new Animated.Value(0),
      setActive: true,
    };
    this.getData = this.getData.bind(this)
    this.showImage = this.showImage.bind(this)
    this.setShowImage = this.setShowImage.bind(this)
  }
  showImage(showItemImage) {
    this.setState({ showItemImage })
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  setShowImage(setShowItemImage) {
    this.setState({ setShowItemImage, setActive: false })
  }
  render() {
    const { dataService, showItemImage, setShowItemImage, setActive } = this.state
    const { navigation } = this.props
    var id_product = navigation.getParam('id_item')
    var uri = finip + '/product/product_deatil_mobile';
    var dataBody = {
      id_product: id_product
    };
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {
          showItemImage == true ?
            <Show_Image showImage={this.showImage} setShowItemImage={setShowItemImage} /> :
            null
        }
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        {/* <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}>
          <Animatable.View style={{ marginTop: AnimatedHead }}>
          </Animatable.View>
        </View> */}
        <Animatable.View style={{ height: 50, }}>
          <View style={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            overflow: 'hidden',
          }}>
            <AppBar leftBar='backarrow' navigation={navigation}
            // ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbd} AIBGColor={AnimatedHeadi}
            />
          </View>
        </Animatable.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={
            Animated.event([{
              nativeEvent: { contentOffset: { y: this.state.scrollY } }
            }])
          }
        >
          {/* <View style={{ marginTop: -50 }}></View> */}
          <Detail_Image dataService={dataService} navigation={navigation} showImage={this.showImage} setShowImage={this.setShowImage}
            setActive={setActive} />
          <Detail_Data dataService={dataService} navigation={navigation} />
          <Store dataService={dataService} navigation={navigation} />
          <Conpon />
          <Selector dataService={dataService} />
          <Detail_Category dataService={dataService} />
          <Detail dataService={dataService} />
          <Reviews />
          <BannerBar />
          <Same_Store dataService={dataService} navigation={navigation} />
          <Similar_Product dataService={dataService} navigation={navigation} />
          <Might_like dataService={dataService} navigation={navigation} />
        </ScrollView>
        <Buy_bar navigation={navigation} />
        <ExitAppModule navigation={navigation} />
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
      <TouchableOpacity activeOpacity={1} onPress={() => [this.props.showImage(true)]} >
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
      </TouchableOpacity>
    );
  }
  id_product() {
    const { activeSlide, imageLength, } = this.state;
    const { dataService, setActive, } = this.props;
    return dataService.map((item, index) => {
      let dataMySQL
      item.gallery_image ?
        dataMySQL = this.imageGallery(item.image_full_path, item.gallery_image) :
        dataMySQL = dataService;
      dataMySQL ?
        setActive == true ?
          [
            this.props.setShowImage(dataMySQL)
          ] :
          null :
        null
      return (
        <View style={[stylesMain.FrameBackground2, { marginTop: 0, borderTopWidth: 0 }]} key={index}>
          <View>
            <Carousel
              ref={c => this.activeSlide = c}
              data={dataMySQL}
              renderItem={this._renderItem}
              sliderWidth={width * 1}
              itemWidth={width * 1}
              sliderHeight={width * 1}
              // loop={true}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <View style={{ flex: 1, }}>
              <View style={[stylesMain.ItemCenter, stylesDetail.ImageSlide]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                  {activeSlide + 1}/{imageLength}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
  }
  render() {
    return (
      <View>{this.id_product()}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Data
export class Detail_Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  id_product() {
    const { dataService } = this.props;
    return dataService.map((item, index) => {
      return (
        <View style={[stylesMain.FrameBackground2, { marginTop: 0, borderTopWidth: 0 }]} key={index}>
          <View style={[stylesDetail.Price_Box, { borderTopWidth: 0 }]}>
            <View style={stylesDetail.Price_Text_Name_Box}>
              <View style={[stylesMain.FlexRow, { paddingVertical: 10, }]}>
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
                <View style={[stylesMain.Box_On_sale, { borderRadius: 20 }]}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>-55%</Text>
                </View>
              </View>
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
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
  }
  render() {
    return (
      <View>{this.id_product()}</View>
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
  ConponSheetBody() {
    return (
      <>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>รับคูปอง</Text>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ส่วนลดร้านค้า</Text>
          <ScrollView>
            <Coupon_Detail_BottomSheet />
            <Coupon_Detail_BottomSheet />
            <Coupon_Detail_BottomSheet />
            <Coupon_Detail_BottomSheet />
          </ScrollView>
        </View>
      </>
    )
  }
  render() {
    return (
      <>
        <BottomSheet
          ref={ref => {
            this.ConponSheet = ref;
          }}
          height={height * 0.5}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 10,
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
        >
          {this.ConponSheetBody()}
        </BottomSheet>
        <View style={stylesDetail.Coupon}>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.ConponSheet.open(); }}>
            <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
              <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
                คูปอง </Text>
              <View style={stylesMain.FlexRow}>
                <View style={[stylesDetail.Coupon_Box_Pon, stylesMain.ItemCenter]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                    ลด ฿100.00</Text>
                </View>
                <View style={[stylesDetail.Coupon_Box_Pon, stylesMain.ItemCenter]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                    ลด ฿300.00</Text>
                </View>
                <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} color='#0A55A6' />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Selector
export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 1,
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  dataItem(item) {
    return (
      <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap', alignItems: 'center' }]}>
        <TabBar
          sendData={this.updateIndex}
          item={item}
          type='box'
          noLimit
          numberBox
          radiusBox={4}
        />
      </View>
    )
  }
  SelectorSheetBody() {
    const items = [{
      name: 'สีดำ'
    }, {
      name: 'สีขาว'
    }, {
      name: 'สีเขียว'
    }, {
      name: 'สีเหลือง'
    }]
    const { dataService } = this.props
    const { itemCount } = this.state
    return dataService.map((item, index) => {
      // console.log(item)
      var dataMySQL = [finip, item.image_full_path, item.image].join('/');
      return (
        <View style={{ flex: 1, paddingHorizontal: 15 }} key={index}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ตัวเลือก</Text>
          <ScrollView>
            <View style={{ flexDirection: 'row'}}>
              <View style={stylesDetail.Selector_BottomSheet_BoxImage}>
                <FastImage
                  source={{
                    uri: dataMySQL,
                  }}
                  style={stylesMain.BoxProduct1Image}
                />
              </View>
              <View style={{ width: '70%', marginLeft: 10 }}>
                <NumberFormat
                  value={item.full_price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={
                    value =>
                      <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        {value}</Text>}
                />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{item.name}</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สี</Text>
              {this.dataItem(items)}
            </View>
          </ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: '90%', }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>จำนวน</Text>
              <TouchableOpacity onPress={() => {
                if (itemCount > 1) {
                  this.setState({ itemCount: itemCount - 1 })
                }
              }}>
                <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount, { borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }]}>
                  <Text style={[stylesMain.ItemCenterVertical]}>
                    -</Text>
                </View>
              </TouchableOpacity>
              <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText, stylesDetail.Selector_BottomSheet_itemCount_TextInput]}>
                <TextInput style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]} keyboardType={'numeric'}
                  maxLength={6}
                  onChangeText={(value) => { value > 0 ? this.setState({ itemCount: value * 1 }) : this.setState({ itemCount: 1 }) }}>
                  {itemCount}
                </TextInput>
              </View>
              <TouchableOpacity onPress={() => {
                this.setState({ itemCount: itemCount + 1 })
              }}>
                <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount, { borderTopRightRadius: 5, borderBottomRightRadius: 5, }]}>
                  <Text style={[stylesMain.ItemCenterVertical]}>
                    +</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={stylesDetail.Selector_BottomSheet_BoxButtom}>
              <TouchableOpacity>
                <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical,{width:160}]}>
                  <IconAntDesign name='shoppingcart' size={25} />
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>
                    เพิ่มลงรถเข็น</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical,{width:160}]}>
                  <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
                    ซื้อเลย</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    })
  }
  render() {
    return (
      <>
        <BottomSheet
          ref={ref => {
            this.SelectorSheet = ref;
          }}
          height={height * 0.5}
          duration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }
          }}
        >
          {this.SelectorSheetBody()}
        </BottomSheet>
        <View style={stylesDetail.Coupon}>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.SelectorSheet.open(); }}>
            <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
              <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
                ตัวเลือก </Text>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize6, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical]}>
                  ตัวอย่างเช่น สี ขนาด</Text>
                <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} color='#0A55A6' />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
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
                pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
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
                pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
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
                pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
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
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 1 })}>
            <IconAntDesign name='message1' size={22} style={[stylesMain.ItemCenterVertical]} />
            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
              แชท</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 30 }}>|</Text>
        <TouchableOpacity onPress={() => id_store ? navigation.navigate('StoreScreen', { id_item: id_store }) : null}>
          <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
            <IconFontisto name='shopping-store' size={22} style={stylesMain.ItemCenterVertical} />
            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
              ร้านค้า</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
            <IconAntDesign name='shoppingcart' size={25} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>
              เพิ่มลงรถเข็น</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
            <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
              ซื้อเลย</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Show_Image
export class Show_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  setShowItemImage() {
    const { setShowItemImage } = this.props
    console.log('Show_Image')
    console.log(setShowItemImage)
    var dataMySQL = new Array()
    setShowItemImage ?
      setShowItemImage.map((item) => {
        var items = { uri: [finip, item.image_full_path, item.image].join('/') }
        dataMySQL.push(items)
      }) :
      null
    return dataMySQL
  }
  render() {
    this.setShowItemImage()
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={true}
        onRequestClose={() => {
          this.props.showImage(false);
        }}
      >
        {/* <TouchableOpacity
          style={[{ width: 40 }]}
          activeOpacity={1}
          onPress={() => this.props.showImage(false)}>
          <IconFontisto name="close" size={30} style={{ color: '#785216', margin: 2 }} />
        </TouchableOpacity> */}
        <View style={[{ height, width }]}>
          <SmartGallery
            images={this.setShowItemImage()}
          />
        </View>
      </Modal>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>

export class Coupon_Detail_BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ width: '100%', height: 100, borderWidth: 1, backgroundColor: '#C0DBF9', flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 5, marginVertical: 10 }}>
        <View>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>฿1,000</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ซื้อขั้นต่ำ ฿10,000</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: '#C4C4C4' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>2020.02.22-2020.03.01</Text>
          </View>
          <TouchableOpacity>
            <View style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', paddingHorizontal: 10, borderRadius: 5 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>รับคูปอง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

