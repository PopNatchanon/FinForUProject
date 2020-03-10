///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Animated, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Modal, Image
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
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
export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
      scrollY: new Animated.Value(0),
      setActive: true,
    };
  }
  getDataAsync = async () => {
    const currentUser = await AsyncStorage.getItem('@MyKey')
    this.setState({ currentUser: JSON.parse(currentUser) })
    //console.log('Main|currentUser')
    //console.log(currentUser)
  }
  componentDidMount() {
    this.getDataAsync()
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { activeSlide, dataService, scrollY, setActive, setShowItemImage, showItemImage, BuyProduct } = this.state
    const { navigation } = this.props
    if (
      dataService !== nextState.dataService || activeSlide !== nextState.activeSlide || setShowItemImage !== nextState.setShowItemImage
      || scrollY !== nextState.scrollY || setActive !== nextState.setActive || showItemImage !== nextState.showItemImage ||
      BuyProduct !== nextState.BuyProduct || navigation !== nextProps.navigation
    ) {
      return true
    }
    return false
  }
  showImage = (showItemImage) => {
    this.setState({ showItemImage })
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  setShowImage = (setShowItemImage) => {
    this.setState({ setShowItemImage, setActive: false })
  }
  BuyProduct = (BuyProduct) => {
    this.setState({ BuyProduct })
  }
  render() {
    const { dataService, showItemImage, setShowItemImage, setActive, scrollY, currentUser, BuyProduct } = this.state
    const { navigation } = this.props
    var id_product = navigation.getParam('id_item')
    var uri = finip + '/product/product_deatil_mobile';
    var dataBody = {
      id_product: id_product
    };
    console.log('DetailScreen|typeSelect')
    console.log(BuyProduct)
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {
          showItemImage == true &&
          <Show_Image showImage={this.showImage.bind(this)} setShowItemImage={setShowItemImage} />
        }
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        <Animatable.View style={{ height: 50, }}>
          <View style={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            overflow: 'hidden',
          }}>
            <AppBar leftBar='backarrow' navigation={navigation}
            />
          </View>
        </Animatable.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={
            Animated.event([{
              nativeEvent: { contentOffset: { y: scrollY } }
            }])
          }
          style={{ height: '100%' }}
        >
          {/* <View style={{ marginTop: -50 }}></View> */}
          {
            dataService.product_data &&
            <Detail_Image dataService={dataService.product_data} navigation={navigation} showImage={this.showImage.bind(this)}
              setShowImage={this.setShowImage.bind(this)} setActive={setActive} />
          }
          <Detail_Data dataService={dataService} navigation={navigation} />
          <Store dataService={dataService} navigation={navigation} />
          <Conpon dataService={dataService} currentUser={currentUser} />
          <Selector dataService={dataService} BuyProduct={BuyProduct} />
          <Detail_Category dataService={dataService} />
          <Detail dataService={dataService} />
          {
            dataService.product_data &&
            <Reviews dataService={dataService.product_data} currentUser={currentUser} navigation={navigation} />
          }
          <BannerBar />
          <Same_Store dataService={dataService} navigation={navigation} />
          <Similar_Product dataService={dataService} navigation={navigation} />
          <Might_like dataService={dataService} navigation={navigation} />
        </ScrollView>
        {
          dataService.product_data &&
          <Buy_bar navigation={navigation} dataService={dataService} BuyProduct={this.BuyProduct.bind(this)} />
        }
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Image
export class Detail_Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      imageLength: 1,
      imageLengthActive: 0,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { activeSlide, imageLength, imageLengthActive } = this.state
    const { setShowImage, navigation, dataService, setActive, showImage } = this.props
    if (
      activeSlide !== nextState.activeSlide || imageLength !== nextState.imageLength || setShowImage !== nextProps.setShowImage ||
      imageLengthActive !== nextState.imageLengthActive || navigation !== nextProps.navigation || dataService !== nextProps.dataService
      || setActive !== nextProps.setActive || showImage !== nextProps.showImage
    ) {
      return true
    }
    return false
  }
  setStateImageLength = (length) => {
    this.setState({ imageLength: length, imageLengthActive: 1 })
  }
  imageGallery = (image_full_path, gallery_image) => {
    const { imageLengthActive } = this.state
    const image = {} = gallery_image.split(';')
    const length = image.length
    imageLengthActive == 0 &&
      this.setStateImageLength(length)
    var count = 0
    var myJSON = new Array()
    var item
    while (length > count) {
      item = { "image_full_path": image_full_path, "image": image[count] };
      myJSON.push(item)
      count++
    }
    return myJSON
  }
  sendShowImage = () => {
    const { showImage } = this.props
    showImage(true)
  }
  _renderItem = ({ item, index }) => {
    var dataMySQL = [finip, item.image_full_path, item.image].join('/');
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.sendShowImage.bind(this)} >
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
  setStateActiveSlide = (index) => {
    this.setState({ activeSlide: index })
  }
  get id_product() {
    const { activeSlide, imageLength, } = this.state;
    const { dataService, setActive, setShowImage } = this.props;
    return dataService.map((item, index) => {
      let dataMySQL
      item.gallery_image ?
        dataMySQL = this.imageGallery(item.image_full_path, item.gallery_image) :
        dataMySQL = dataService;
      dataMySQL &&
        setActive == true &&
        setShowImage(dataMySQL)
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
              onSnapToItem={this.setStateActiveSlide.bind(this)}
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
      <View>{this.id_product}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Data
export class Detail_Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCountA: 0,
      arrayCountB: 0,
      arrayCountC: 0,
      arrayCountD: 0,
      dataServiceArray: { maxvalue: 0, minvalue: 0, maxfullvalue: 0, minfullvalue: 0 },
      dataServiceArray2: [],
      dataServiceArray3: [],
      RunTime: false,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const {
      dataServiceArray, countItem, RunTime, dataServiceArray2, dataServiceArray3, arrayCountA, arrayCountB, arrayCountC, arrayCountD,
      id_product
    } = this.state
    const { dataService } = this.props;
    //console.log('dataServiceArray')
    //console.log(dataServiceArray)
    if (
      dataServiceArray !== nextState.dataServiceArray || countItem !== nextState.countItem || RunTime !== nextState.RunTime ||
      dataService !== nextProps.dataService || id_product !== nextState.id_product || arrayCountA !== nextState.arrayCountA ||
      arrayCountB !== nextState.arrayCountB || arrayCountC !== nextState.arrayCountC || arrayCountD !== nextState.arrayCountD ||
      dataServiceArray2 !== nextState.dataServiceArray2 || dataServiceArray3 !== nextState.dataServiceArray3
    ) {
      return true
    }
    return false
  }
  // SetData2 = () => {
  //   const { arrayCountA, arrayCountB, arrayCountC, dataServiceArray3 } = this.state;
  //   var { arrayCountD, dataServiceArray } = this.state;
  //   dataServiceArray3 && arrayCountC == 0 && (
  //     this.setState({ arrayCountC: dataServiceArray3.length })
  //   )
  //   if (dataServiceArray3 != null && arrayCountC != 0 && arrayCountA == arrayCountB + 1 && arrayCountC != arrayCountD + 1) {
  //     for (arrayCountD; arrayCountC > arrayCountD; arrayCountD++) {
  //       console.log('dataServiceArray3[' + arrayCountD + ']')
  //       console.log(dataServiceArray3[arrayCountD])
  //       var uri = finip + '/product/get_product_amount'
  //       var dataBody = {
  //         id_product: dataServiceArray3[arrayCountD].id_product,
  //         detail_color: dataServiceArray3[arrayCountD].detail_1,
  //         val_size: dataServiceArray3[arrayCountD].detail_2,
  //       }
  //       this.setState({ arrayCountD })
  //       fetch(uri, {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(dataBody),
  //       })
  //         .then((response) => response.json())
  //         .then((responseJson) => {
  //           if (dataServiceArray3[arrayCountD].ps_id != null && responseJson.ps_id == dataServiceArray3[arrayCountD].ps_id) {
  //             console.log('responseJson:' + arrayCountD)
  //             dataServiceArray3[arrayCountD].amount_data = responseJson.amount_data
  //             dataServiceArray3[arrayCountD].price_data = responseJson.price_data
  //           }
  //           this.setState({ dataServiceArray3 })
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         })
  //     }
  //   }
  // }
  // SetData = () => {
  //   const { arrayCountA, } = this.state;
  //   var { arrayCountB, dataServiceArray2, dataServiceArray3 } = this.state;
  //   const { dataService } = this.props;
  //   var detail_product = dataService.detail_product
  //   var id_product
  //   dataService.product_data && (
  //     dataService.product_data.map((item) => { id_product = item.id_product })
  //   )
  //   detail_product && arrayCountA == 0 && (
  //     this.setState({ arrayCountA: detail_product.length })
  //   )
  //   if (detail_product != null && arrayCountA != 0 && arrayCountA != arrayCountB + 1) {
  //     var n = 0
  //     var p = 0
  //     for (arrayCountB; arrayCountA > arrayCountB; arrayCountB++) {
  //       var uri = finip + '/product/get_value_size'
  //       var dataBody = {
  //         id_product: id_product,
  //         detail_color: detail_product[arrayCountB].detail_1,
  //       }
  //       dataServiceArray2[arrayCountB] = detail_product[arrayCountB]
  //       this.setState({ arrayCountB, dataServiceArray2 })
  //       fetch(uri, {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(dataBody),
  //       })
  //         .then((response) => response.json())
  //         .then((responseJson) => {
  //           var o = 0
  //           for (var m = n; responseJson.data_size.length + n > m; m++) {
  //             dataServiceArray3[m] = responseJson.data_size[o]
  //             dataServiceArray3[m].detail_1 = detail_product[p].detail_1
  //             dataServiceArray3[m].id_product = id_product
  //             o++
  //           }
  //           n = responseJson.data_size.length
  //           p++
  //           this.setState({ dataServiceArray3, arrayCountC: dataServiceArray3.length })
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         })
  //     }
  //   }
  // }
  get id_product() {
    const { dataService } = this.props
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
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
                  <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                    {item.full_price ? null : ' - '}</Text>
                  <NumberFormat
                    value={item.maxvalue}
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
        )
      })
  }
  render() {
    // const { dataServiceArray2 } = this.state
    // //console.log('dataServiceArray2')
    // //console.log(dataServiceArray2)
    return (
      // this.SetData(),
      // this.SetData2(),
      <View>{this.id_product}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Store
export class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { ImageStore } = this.state
    const { dataService, navigation } = this.props
    if (ImageStore !== nextState.ImageStore || dataService !== nextProps.dataService || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  LoadingStore = (ImageStore) => {
    this.setState({ ImageStore })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    navigation.navigate(value, value2)
  }
  get id_store() {
    const { ImageStore } = this.state
    const { dataService } = this.props
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        var dataMySQL = [finip, item.store_path, item.store_img].join('/');
        return (
          <View style={[stylesMain.FrameBackground, stylesMain.BottomSpace]} key={index}>
            <View style={stylesDetail.Store_Box1}>
              <View style={stylesDetail.Store_Box2}>
                <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: item.id_store })}>
                  <FastImage
                    source={{
                      uri: dataMySQL,
                    }}

                    onError={this.LoadingStore.bind(this, false)}
                    onLoad={this.LoadingStore.bind(this, true)}
                    style={[stylesDetail.Store_Image, { marginLeft: 10, backgroundColor: ImageStore == true ? 'transparent' : '#959595' }]} />
                </TouchableOpacity>
                <View style={stylesDetail.Store_Text_Box}>
                  <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: item.id_store })}>
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
  }
  render() {
    return (
      <View>
        {this.id_store}
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Conpon
export class Conpon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  get ConponSheetBody() {
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
    const { currentUser, dataService } = this.props
    //console.log('currentUser')
    //console.log(currentUser)
    //console.log('dataService')
    //console.log(dataService)
    var uri = finip + '/coupon/get_store_coupon';
    // var dataBody = {
    //   id_customer: 'storedata',
    //   id_product: id_item
    // };
    return (
      <>
        {/* {
          id_item !== undefined &&
          <GetServices
            uriPointer={uri}
            dataBody={dataBody}
            getDataSource={this.getData.bind(this)}
          />
        } */}
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
          {this.ConponSheetBody}
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
export class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 1,
      selectedIndex: 0,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { itemCount, selectedIndex } = this.state
    const { dataService, BuyProduct } = this.props
    if (itemCount !== nextState.itemCount || selectedIndex !== nextState.selectedIndex || dataService !== nextProps.dataService ||
      BuyProduct !== nextProps.BuyProduct) {
      return true
    }
    return false
  }
  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }
  setStateItemCount = (value) => {
    this.setState({ itemCount: value * 1 })
  }
  dataItem(item) {
    return (
      <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap', alignItems: 'center' }]}>
        <TabBar
          sendData={this.updateIndex.bind(this)}
          item={item}
          type='box'
          noLimit
          numberBox
          radiusBox={4}
        />
      </View>
    )
  }
  get SelectorSheetBody() {
    // this.SetItem()
    const { dataService, BuyProduct } = this.props
    const { itemCount } = this.state
    var items = []
    dataService.detail_product &&
      dataService.detail_product.map((item) => {
        //console.log(item)
        items.push({ name: item.detail_1 })
      })
    //console.log(items)
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        var dataMySQL = [finip, item.image_full_path, item.image].join('/');
        return (
          <View style={{ flex: 1, paddingHorizontal: 15 }} key={index}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ตัวเลือก</Text>
            <ScrollView>
              <View style={{ flexDirection: 'row' }}>
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
                <TouchableOpacity onPress={this.setStateItemCount.bind(this, itemCount - 1)}>
                  <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount, { borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }]}>
                    <Text style={[stylesMain.ItemCenterVertical]}>
                      -</Text>
                  </View>
                </TouchableOpacity>
                <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText, stylesDetail.Selector_BottomSheet_itemCount_TextInput]}>
                  <TextInput style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]} keyboardType={'numeric'}
                    maxLength={6} min={1}
                    onChangeText={this.setStateItemCount.bind(this)}>
                    {itemCount}
                  </TextInput>
                </View>
                <TouchableOpacity onPress={this.setStateItemCount.bind(this, itemCount + 1)}>
                  <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount, { borderTopRightRadius: 5, borderBottomRightRadius: 5, }]}>
                    <Text style={[stylesMain.ItemCenterVertical]}>
                      +</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={stylesDetail.Selector_BottomSheet_BoxButtom}>
                {
                  (BuyProduct == 'addcart' || BuyProduct == null) &&
                  < TouchableOpacity >
                    <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: BuyProduct ? 320 : 160 }]}>
                      <IconAntDesign name='shoppingcart' size={25} />
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>
                        เพิ่มลงรถเข็น</Text>
                    </View>
                  </TouchableOpacity>
                }
                {
                  (BuyProduct == 'gocart' || BuyProduct == null) &&
                  <TouchableOpacity>
                    <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: BuyProduct ? 320 : 160 }]}>
                      <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
                        ซื้อเลย</Text>
                    </View>
                  </TouchableOpacity>
                }
              </View>
            </View>
          </View >
        )
      })
  }
  render() {
    const { dataService, BuyProduct } = this.props
    dataService.detail_product && BuyProduct &&
      this.SelectorSheet.open()
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
          {this.SelectorSheetBody}
        </BottomSheet>
        {
          dataService.detail_product && dataService.detail_product.length > 1 &&
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
        }
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Category
export class Detail_Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService } = this.props
    if (dataService !== nextProps.dataService) {
      return true
    }
    return false
  }
  get id_store() {
    const { dataService } = this.props
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
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
                  ส่งจาก</Text>
              </View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                {item.store_address}</Text>
            </View>
          </View>
        );
      })
  }
  render() {
    return (
      <View>{this.id_store}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Detail
export class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeText: false,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { showMoreButton, activeText } = this.state
    const { dataService } = this.props
    if (showMoreButton !== nextState.showMoreButton || activeText !== nextState.activeText || dataService !== nextProps.dataService) {
      return true
    }
    return false
  }
  setStateShowMoreButton = (showMoreButton) => {
    this.setState({ showMoreButton })
  }
  setStateActiveText = (activeText) => {
    this.setState({ activeText })
  }
  get id_store() {
    const { showMoreButton, activeText } = this.state
    const { dataService } = this.props
    //console.log('activeText')
    //console.log(activeText)
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        return (
          <View style={stylesMain.FrameBackground} key={index}>
            <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
              <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                รายละเอียดสินค้า</Text>
            </View>
            <View style={stylesDetail.Detail_Text_Box}>
              <Text numberOfLines={activeText == false ? 4 : null} onTextLayout={({ nativeEvent: { lines } }) =>
                this.setStateShowMoreButton(lines.length > 4)
              } style={[
                stylesDetail.Detail_Text, stylesFont.FontFamilyText, stylesFont.FontSize6
              ]}>
                {item.detail}</Text>
              {
                showMoreButton == true &&
                <TouchableOpacity onPress={this.setStateActiveText.bind(this, !activeText)}>
                  <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter]}>
                    <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, { fontFamily: 'SukhumvitSet-Text', }]}>
                      {
                        activeText == true ?
                          'ย่อ' :
                          'ดูเพิ่มเติม'
                      }</Text>
                    <IconEntypo name={activeText == true ? 'chevron-up' : 'chevron-down'} size={25} color='#0A55A6' />
                  </View>
                </TouchableOpacity>
              }
            </View>
          </View>
        );
      })
  }
  render() {
    return (
      <View>{this.id_store}</View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Reviews
export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: []
    };
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      navigation.navigate(value, value2)
  }
  getData = (dataService2) => {
    console.log('getData|dataService2')
    console.log(dataService2)
    this.setState({ dataService2 })
  }
  customerReview(review) {
    return review &&
      review.map((item, index) => {
        if (index < 5) {
          var img_rate = item.img_rate.split(";")
          console.log('img_rate')
          console.log(img_rate)
          let imagereview = []
          img_rate.map((item2, index2) => {
            var path = finip + '/' + item.path_rate + '/' + item2
            imagereview.push(<FastImage
              key={index2}
              style={stylesDetail.Reviews_Image}
              source={{ uri: path }}
            />)
          })
          return <View style={stylesDetail.Comment_R} key={index}>
            <FastImage
              style={stylesDetail.Comment_R_Image}
              source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
            />
            <View style={stylesDetail.Comment_R_Text}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                {item.name ? item.name : 'ไม่ระบุตัวตน'}</Text>
              <View style={stylesDetail.Comment_R_Iconstar}>
                {
                  this.starReview(item.rating, 15)
                }
              </View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                {item.detail}</Text>
              <View style={[stylesDetail.Comment_Image_A, stylesMain.BottomSpace]}>
                {imagereview}
              </View>
              <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                16-11-2019 15:56</Text>
            </View>
          </View>
        }
      })
  }
  starReview(star, starSize) {
    let starBox = []
    for (var n = 0; n < 5; n++) {
      if (star > n) {
        starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={starSize ? starSize : 20} color='#FFAC33' />)
      } else {
        starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} name='star' size={starSize ? starSize : 20} color='#E9E9E9' />)
      }
    }
    return starBox
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, currentUser } = this.props
    var uri = finip + '/product/product_review_mobile'
    var dataBody
    dataService && (
      dataBody = {
        id_product: dataService[0].id_product,
        id_store: dataService[0].id_store,
        id_customer: currentUser.id_customer,
      }
    )
    console.log('dataService')
    console.log(dataService)
    console.log('dataBody')
    console.log(dataBody)
    console.log('dataService2')
    console.log(dataService2)
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataService && dataBody &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
            คะแนนร้านค้า</Text>
          <TouchableOpacity style={stylesMain.FlexRow} onPress={this.navigationNavigateScreen.bind(this, 'Reviews_score')}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize6, { marginRight: 0 }]}>
              ดูทั้งหมด</Text>
            <IconFeather style={stylesDetail.Score_iconB} name='edit' size={20} color='#0A55A6' />
          </TouchableOpacity>
        </View>
        {
          dataService2 &&
          <View style={stylesDetail.Price_Text_IconBox}>
            <View style={stylesDetail.Price_Text_IconBoxStar}>
              {
                this.starReview(dataService2.rating_total)
              }
              <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                {dataService2.rating_total}/5</Text>
              <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                ( 10 รีวิว)</Text>
            </View>
          </View>
        }
        <View style={stylesDetail.Reviews_Box}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
            ภาพจากผู้ซื้อ</Text>
          <View>
            {/* <ScrollView horizontal>
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
            </ScrollView> */}
            {
              dataService2 &&
              this.customerReview(dataService2.review)
            }
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar
export class BannerBar extends React.Component {
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
export class Same_Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    if (dataService2 !== nextState.dataService2 || dataService !== nextProps.dataService || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    navigation.navigate(value, value2)
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    var uri = finip + '/product/product_other_mobile';
    var dataBody
    var id_type
    var id_store
    dataService.product_data &&
      dataService.product_data.map((item) => {
        id_type = item.id_type
        id_store = item.id_store
        dataBody = {
          id_type: item.id_type,
          id_store: item.id_store,
          type_product: "this_store",
        };
      })
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataBody !== undefined &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            สินค้าจากร้านเดียวกัน</Text>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Same_StoreScreen', { type_product: 'this_store', id_type: id_type, id_store: id_store })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService2 &&
            <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row3col1' pointerUrl='DetailScreen'
              pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
            />
          }
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Similar_Product
export class Similar_Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: [],
    };
    this.getData = this.getData.bind(this)
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    if (dataService2 !== nextState.dataService2 || dataService !== nextProps.dataService || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    navigation.navigate(value, value2)
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    var uri = finip + '/product/product_other_mobile';
    var dataBody
    var id_type
    var id_store
    dataService.product_data &&
      dataService.product_data.map((item) => {
        id_type = item.id_type
        id_store = item.id_store
        dataBody = {
          id_type: item.id_type,
          id_store: item.id_store,
          type_product: "same_product",
        };
      })
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataBody !== undefined &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            สินค้าที่คล้ายกัน</Text>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Same_StoreScreen', { type_product: 'same_product', id_type: id_type, id_store: id_store })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService2 &&
            <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row3col1' pointerUrl='DetailScreen'
              pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
            />
          }
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Might_like
export class Might_like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService2: [],
    };
    this.getData = this.getData.bind(this)
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    if (dataService2 !== nextState.dataService2 || dataService !== nextProps.dataService || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    navigation.navigate(value, value2)
  }
  render() {
    const { dataService2 } = this.state
    const { dataService, navigation } = this.props
    var uri = finip + '/product/product_other_mobile';
    var dataBody
    var id_type
    var id_store
    dataService.product_data &&
      dataService.product_data.map((item) => {
        id_type = item.id_type
        id_store = item.id_store
        dataBody = {
          id_type: item.id_type,
          id_store: item.id_store,
          type_product: "youlike",
        };
      })
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataBody !== undefined &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            คุณอาจชอบสิ่งนี้</Text>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Same_StoreScreen', { type_product: 'youlike', id_type: id_type, id_store: id_store })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDetail.PopularProductBoxProduct}>
          {
            dataService2 &&
            <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row2colall' pointerUrl='DetailScreen'
              pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
            />
          }
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export class Buy_bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService, navigation, BuyProduct } = this.props
    if (dataService !== nextProps.dataService || navigation !== nextProps.navigation || BuyProduct !== nextProps.BuyProduct) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    navigation.navigate(value, value2)
  }
  BuyProduct = (typeSelect) => {
    const { BuyProduct } = this.props
    BuyProduct(typeSelect)
  }
  get dataServices() {
    const { dataService } = this.props
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        return (
          < View style={stylesDetail.Buy_bar} key={index}>
            < View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]} >
              <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}>
                <IconAntDesign name='message1' size={22} style={[stylesMain.ItemCenterVertical]} />
                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
                  แชท</Text>
              </TouchableOpacity>
            </View >
            <Text style={{ fontSize: 30 }}>|</Text>
            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: item.id_store })}>
              <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                <IconFontisto name='shopping-store' size={22} style={stylesMain.ItemCenterVertical} />
                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
                  ร้านค้า</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.BuyProduct.bind(this, 'addcart')}>
              <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                <IconAntDesign name='shoppingcart' size={25} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>
                  เพิ่มลงรถเข็น</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.BuyProduct.bind(this, 'gocart')}>
              <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
                  ซื้อเลย</Text>
              </View>
            </TouchableOpacity>
          </View >
        )
      })
  }
  render() {
    return (
      this.dataServices
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Show_Image
export class Show_Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService, navigation, setShowItemImage, showImage } = this.props
    if (dataService !== nextProps.dataService || navigation !== nextProps.navigation || setShowItemImage !== nextProps.setShowItemImage || showImage !== nextProps.showImage) {
      return true
    }
    return false
  }
  setShowItemImage = () => {
    const { setShowItemImage } = this.props
    var dataMySQL = new Array()
    setShowItemImage &&
      setShowItemImage.map((item) => {
        var items = { uri: [finip, item.image_full_path, item.image].join('/') }
        dataMySQL.push(items)
      })
    return dataMySQL
  }
  render() {
    const { showImage } = this.props
    var dataMySQL = this.setShowItemImage.bind(this)
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={true}
        onRequestClose={() => {
          showImage(false);
        }}
      >
        <View style={[{ height, width }]}>
          {/* <SmartGallery
            images={dataMySQL}
          /> */}
        </View>
      </Modal>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Coupon_Detail_BottomSheet extends React.Component {
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

