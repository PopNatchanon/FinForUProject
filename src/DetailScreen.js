///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Animated, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Modal,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import BottomSheet from "react-native-raw-bottom-sheet";
import Carousel from 'react-native-snap-carousel';
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SmartGallery from "react-native-smart-gallery";
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
import { GetServices, ProductBox, TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
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
  }
  componentDidMount() {
    this.getDataAsync()
    CookieManager.get(finip + '/auth/login_customer')
      .then((res) => {
        var keycokie = res.token
        this.setState({ keycokie })
      });
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    const {
      activeSlide, BuyProduct, currentUser, dataService, getStarReview, keycokie, scrollY, setActive, setShowItemImage, showItemImage,
    } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextProps
      activeSlide !== nextState.activeSlide || BuyProduct !== nextState.BuyProduct || currentUser !== nextState.currentUser ||
      dataService !== nextState.dataService || getStarReview !== nextState.getStarReview || keycokie !== nextState.keycokie ||
      scrollY !== nextState.scrollY || setActive !== nextState.setActive || setShowItemImage !== nextState.setShowItemImage ||
      showItemImage !== nextState.showItemImage
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
  getStarReview = (getStarReview) => {
    this.setState({ getStarReview })
  }
  setShowImage = (setShowItemImage) => {
    this.setState({ setShowItemImage, setActive: false })
  }
  BuyProduct = (BuyProduct) => {
    this.setState({ BuyProduct })
  }
  render() {
    const { navigation } = this.props
    const {
      currentUser, BuyProduct, dataService, getStarReview, keycokie, scrollY, setActive, setShowItemImage, showItemImage
    } = this.state
    var id_product = navigation.getParam('id_item')
    var uri = finip + '/product/product_detail_mobile';
    var dataBody = {
      id_product: id_product
    };
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {
          showItemImage == true &&
          <Show_Image showImage={this.showImage.bind(this)} setShowItemImage={setShowItemImage} />
        }
        <GetServices uriPointer={uri}
          showConsole={'product_detail_mobile'}
          dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        <Animatable.View style={{ height: 50, }}>
          <View style={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            overflow: 'hidden',
          }}>
            <AppBar leftBar='backarrow' navigation={navigation} />
          </View>
        </Animatable.View>
        {[
          dataService &&
          <ScrollView
            key={'MainScrollView'}
            scrollEventThrottle={16}
            onScroll={
              Animated.event([{
                nativeEvent: { contentOffset: { y: scrollY } }
              }])
            }
            style={{ height: '100%' }}>
            {/* <View style={{ marginTop: -50 }}></View> */}
            {[
              dataService.product_data &&
              <Detail_Image key={'Detail_Image'} dataService={dataService.product_data} navigation={navigation}
                showImage={this.showImage.bind(this)} setShowImage={this.setShowImage.bind(this)} setActive={setActive} />,
              <Detail_Data key={'Detail_Data'} currentUser={currentUser} dataService={dataService} getStarReview={getStarReview}
                id_product={id_product} keycokie={keycokie} navigation={navigation} />,
              <Store key={'Store'} currentUser={currentUser} dataService={dataService} keycokie={keycokie} navigation={navigation} />,
              currentUser && dataService.product_data &&
              <Conpon key={'Conpon'} dataService={dataService.product_data} currentUser={currentUser} />
            ]}
            <Selector dataService={dataService} BuyProduct={BuyProduct} currentUser={currentUser} keycokie={keycokie} navigation={navigation}
              sendProduct={this.BuyProduct.bind(this)} />
            <Detail_Category dataService={dataService} />
            <Detail dataService={dataService} />
            {
              dataService.product_data &&
              <Reviews dataService={dataService.product_data} getStarReview={this.getStarReview.bind(this)} currentUser={currentUser}
                navigation={navigation} />
            }
            <BannerBar />
            <Same_Store dataService={dataService} navigation={navigation} />
            <Similar_Product dataService={dataService} navigation={navigation} />
            <Might_like dataService={dataService} navigation={navigation} />
          </ScrollView>,
          dataService && dataService.product_data &&
          <Buy_bar key={'Buy_bar'} navigation={navigation} currentUser={currentUser} dataService={dataService}
            BuyProduct={this.BuyProduct.bind(this)} />
        ]}
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
    const { dataService, navigation, setActive, setShowImage, showImage, } = this.props
    const { activeSlide, imageLength, imageLengthActive, } = this.state
    if (
      ////>nextProps
      dataService !== nextProps.dataService || navigation !== nextProps.navigation || setActive !== nextProps.setActive ||
      setShowImage !== nextProps.setShowImage || showImage !== nextProps.showImage ||
      ////>nextState
      activeSlide !== nextState.activeSlide || imageLength !== nextState.imageLength || imageLengthActive !== nextState.imageLengthActive
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
      <TouchableOpacity activeOpacity={1} onPress={this.sendShowImage.bind(this)}>
        <View style={{ width: width * 1, height: width * 0.8, /*backgroundColor: '#d9d9d9'*/ }}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={[stylesMain.BoxProduct1Image, { opacity: 0.9 }]}
            key={index}
            resizeMode={FastImage.resizeMode.contain} />
        </View>
      </TouchableOpacity>
    );
  }
  setStateActiveSlide = (index) => {
    this.setState({ activeSlide: index })
  }
  get id_product() {
    const { dataService, setActive, setShowImage } = this.props;
    const { activeSlide, imageLength, } = this.state;
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
              sliderHeight={width * 0.8}
              // loop={true}
              onSnapToItem={this.setStateActiveSlide.bind(this)} />
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
      activeLike: false,
      activeService2: true,
      dataService2: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { currentUser, dataService, getStarReview, id_product, keycokie } = this.props;
    const { activeLike, activeService2, dataService2, newDataService } = this.state
    if (
      ////>nextProps
      currentUser !== nextProps.currentUser || dataService !== nextProps.dataService || getStarReview !== nextProps.getStarReview ||
      id_product !== nextProps.id_product || keycokie !== nextProps.keycokie ||
      ////>nextState
      activeLike !== nextState.activeLike || activeService2 !== nextState.activeService2 || dataService2 !== nextState.dataService2 ||
      newDataService !== nextState.newDataService
    ) {

      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2, activeLike: false, activeService2: false })
  }
  setStateLike = () => {
    this.setState({ activeLike: true, activeService2: true })
  }
  starReview(star, starSize) {
    let starBox = []
    for (var n = 0; n < 5; n++) {
      if (star > n) {
        starBox.push(
          <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
            starSize ?
              starSize :
              20
          } color='#FFAC33' />
        )
      } else {
        starBox.push(
          <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
            starSize ?
              starSize :
              20
          } color='#E9E9E9' />
        )
      }
    }
    return starBox
  }
  get body() {
    const { dataService, getStarReview } = this.props
    const { dataService2, newDataService } = this.state
    var dataBody
    if (dataService.detail_product !== undefined && newDataService === undefined) {
      var newData = []
      for (var n = 0; n < dataService.detail_product.length; n++) {
        dataBody = {
          id_product: dataService.product_data[0].id_product,
          detail_color: dataService.detail_product[n].detail_1
        }
        fetch(finip + '/product/get_value_size', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataBody),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            for (var m = 0; m < responseJson.data_size.length; m++) {
              newData.push(responseJson.data_size[m])
            }
          })
          .catch((error) => {
            console.error(error)
          })
      }
      this.setState({ newDataService: newData })
    }
    console.log('---------------------------------->newDataService<----------------------------------')
    console.log(newDataService)
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        return (
          <View style={[stylesMain.FrameBackground2, { marginTop: 0, borderTopWidth: 0 }]} key={index}>
            <View style={[stylesDetail.Price_Box, { borderTopWidth: 0 }]}>
              <View style={stylesDetail.Price_Text_Name_Box}>
                <View style={[stylesMain.FlexRow, { paddingVertical: 10, }]}>
                  <NumberFormat
                    value={dataService.price_data}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={
                      value =>
                        <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                          {value}</Text>} />
                  {/* <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                    {item.full_price ? null : ' - '}</Text>*/}
                  <NumberFormat
                    value={item.maxvalue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={
                      value =>
                        <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                          {value}</Text>} />
                  {
                    dataService.show_discount !== '' && dataService.show_discount !== undefined &&
                    <View style={[stylesMain.Box_On_sale, { borderRadius: 20 }]}>
                      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>
                        {dataService.show_discount}</Text>
                    </View>
                  }
                </View>
                <View style={stylesDetail.Price_Icon_Box}>
                  {
                    dataService2 &&
                    <TouchableOpacity onPress={this.setStateLike.bind(this)}>
                      <IconFontAwesome style={[stylesDetail.Price_Icon, {
                        color: dataService2.message == 'like' ? '#ff0066' : '#111111'
                      }]} name={dataService2.message == 'like' ? 'heart' : 'heart-o'} size={20} />
                    </TouchableOpacity>
                  }
                  <IconEntypo style={stylesDetail.Price_Icon} name='share' size={20} />
                </View>
              </View>
              <Text numberOfLines={2} style={[stylesDetail.Price_Text_Name, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                {item.name}</Text>
              <View style={[stylesDetail.Price_Text_IconBox, stylesMain.BottomSpace]}>
                <View style={stylesDetail.Price_Text_IconBoxStar}>
                  {
                    getStarReview &&
                    this.starReview(getStarReview)
                  }
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
    const { currentUser, id_product, dataService, keycokie } = this.props
    const { activeLike, activeService2 } = this.state
    const uri = finip + '/favorite_data/favorite_product';
    var dataBody = {
      id_customer: currentUser && currentUser.id_customer,
      id_product: id_product,
      activity: activeLike == true ? 'like' : 'check'
    };
    return (
      <View>
        {
          dataService.product_data && keycokie && currentUser && id_product && activeService2 == true &&
          <GetServices uriPointer={uri} dataBody={dataBody} Authorization={keycokie} getDataSource={this.getData.bind(this)}
          // showConsole={'favorite_product'} 
          />
        }
        {this.body}
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Store
export class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFollow: false,
      activeService2: true,
      dataService2: []
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { currentUser, dataService, navigation, keycokie } = this.props
    const { activeFollow, activeService2, dataService2, ImageStore } = this.state
    if (
      ////>nextProps
      currentUser !== nextProps.currentUser || dataService !== nextProps.dataService || navigation !== nextProps.navigation ||
      keycokie !== nextProps.keycokie ||
      ////>nextState
      activeFollow !== nextState.activeFollow || activeService2 !== nextState.activeService2 || dataService2 !== nextState.dataService2 ||
      ImageStore !== nextState.ImageStore
    ) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2, activeFollow: false, activeService2: false })
  }
  setStateFollow = () => {
    this.setState({ activeFollow: true, activeService2: true })
  }
  LoadingStore = (ImageStore) => {
    this.setState({ ImageStore })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  get id_store() {
    const { dataService } = this.props
    const { dataService2, ImageStore } = this.state
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
                <TouchableOpacity onPress={this.setStateFollow.bind(this)}>
                  <View style={stylesDetail.Store_Buttom_Box}>
                    <Text style={[stylesDetail.Store_Text_Button, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                      {dataService2.output}</Text>
                  </View>
                </TouchableOpacity>
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
                    อัตราการตอบกลับแชท</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })
  }
  render() {
    const { currentUser, dataService, keycokie } = this.props
    const { activeFollow, activeService2 } = this.state
    const uri = finip + '/brand/follow_data';
    var id_store
    dataService.product_data &&
      dataService.product_data.map((item, index) => id_store = item.id_store)
    var dataBody = {
      id_customer: currentUser && currentUser.id_customer,
      id_store: id_store,
      follow: activeFollow == true ? 'active' : ''
    };
    return (
      <View>
        {
          dataService.product_data && keycokie && currentUser && activeService2 == true &&
          <GetServices uriPointer={uri} dataBody={dataBody} Authorization={keycokie} getDataSource={this.getData.bind(this)}
          // showConsole={'follow_data'} 
          />
        }
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
      dataService2: [],
      activeDate: true,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { currentUser, dataService, } = this.props
    const { activeDate, dataService2 } = this.state
    if (
      ////>nextProps
      currentUser !== nextState.currentUser || dataService !== nextProps.dataService ||
      ////>nextState
      activeDate !== nextState.activeDate || dataService2 !== nextState.dataService2
    ) {
      return true
    }
    return false
  }
  get_id_promotion = () => {
    this.setState({ activeDate: true })
  }
  get ConponSheetBody() {
    const { dataService2 } = this.state
    const { currentUser } = this.props
    return (
      dataService2 && dataService2.store_coupon_m && dataService2.store_coupon_m.length > 0 &&
      <>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>รับคูปอง</Text>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ส่วนลดร้านค้า</Text>
          <ScrollView>
            {
              dataService2 && dataService2.store_coupon_m && dataService2.store_coupon_m.length > 0 ?
                dataService2.store_coupon_m.map((item, index) => {
                  return <Coupon_Detail_BottomSheet dataService={item} currentUser={currentUser}
                    get_id_promotion={this.get_id_promotion.bind(this)} key={index} />
                }) :
                null
            }
          </ScrollView>
        </View>
      </>
    )
  }
  ConponSheetButtom = () => {
    this.setState({ activeDate: true })
    this.ConponSheet.open();
  }
  getData = (dataService2) => {
    this.setState({ dataService2, activeDate: false })
  }
  render() {
    const { activeDate, dataService2, } = this.state
    const { currentUser, dataService, } = this.props
    var uri
    var dataBody
    dataService && currentUser &&
      dataService.map((item) => (
        uri = finip + '/coupon/get_store_coupon',
        dataBody = {
          id_customer: currentUser.id_customer,
          id_product: item.id_product
        }
      ))
    return (
      <>
        {[
          currentUser && activeDate &&
          <GetServices uriPointer={uri}
            // showConsole={'get_store_coupon'} 
            dataBody={dataBody}
            getDataSource={this.getData.bind(this)}
            key={'get_store_coupon'} />,
          dataService2 && dataService2.store_coupon_m && dataService2.store_coupon_m.length > 0 ?
            <View key={'ConponSheet'}>
              <BottomSheet
                ref={ref => {
                  this.ConponSheet = ref;
                }}
                height={height * 0.5}
                duration={250}
                customStyles={{
                  container: {
                    paddingTop: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }
                }}>
                {this.ConponSheetBody}
              </BottomSheet>
              <View style={stylesDetail.Coupon}>
                <TouchableOpacity activeOpacity={1} onPress={this.ConponSheetButtom.bind(this)}>
                  <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
                    <Text style={[
                      stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical
                    ]}>
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
            </View> :
            <View key={'ConponSheet'}></View>
        ]}
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Selector
export class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSelect: true,
      activeSelect2: false,
      activeSelect3: false,
      itemCount: 1,
      selectedIndex: 0,
      selectedIndex2: 0,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { BuyProduct, currentUser, dataService, keycokie, navigation, sendProduct, } = this.props
    const {
      activeSelect, activeSelect2, activeSelect3, BuyProduct2, dataService2, dataService3, itemCount, selectedIndex,
      selectedIndex2, sendDataCart,
    } = this.state
    if (
      ////>nextProps
      BuyProduct !== nextProps.BuyProduct || currentUser !== nextProps.currentUser || dataService !== nextProps.dataService ||
      keycokie !== nextProps.keycokie || navigation !== nextProps.navigation || sendProduct !== nextProps.sendProduct ||
      ////>nextState
      activeSelect !== nextState.activeSelect || activeSelect2 !== nextState.activeSelect2 || activeSelect3 !== nextState.activeSelect3 ||
      BuyProduct2 !== nextState.BuyProduct2 || dataService2 !== nextState.dataService2 || dataService3 !== nextState.dataService3 ||
      itemCount !== nextState.itemCount || selectedIndex !== nextState.selectedIndex ||
      selectedIndex2 !== nextState.selectedIndex2 || sendDataCart !== nextState.sendDataCart
    ) {
      return true
    }
    return false
  }
  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex, activeSelect: true })
  }
  updateIndex2 = (selectedIndex2) => {
    this.setState({ selectedIndex2, activeSelect2: true })
  }
  setStateItemCount = (value) => {
    this.setState({ itemCount: value * 1 })
  }
  getData = (dataService2) => {
    this.setState({ dataService2, activeSelect: false, activeSelect2: true })
  }
  getData2 = (dataService3) => {
    this.setState({ dataService3, activeSelect2: false, itemCount: dataService3.amount_data < 1 ? 0 : 1 })
  }
  getData3 = (dataService3) => {
    const { BuyProduct2 } = this.state
    const { navigation } = this.props
    this.SelectorSheet.close();
    BuyProduct2 == 'gocart' &&
      navigation.push('CartScreen')
    this.setState({ activeSelect3: false })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  sendDataCart = (BuyProduct, sendDataCart) => {
    this.setState({ sendDataCart, activeSelect3: true, BuyProduct2: BuyProduct })
  }
  get SelectorSheetBody() {
    const { BuyProduct, currentUser, dataService, keycokie } = this.props
    const {
      activeSelect, activeSelect2, activeSelect3, dataService2, dataService3, itemCount, selectedIndex, selectedIndex2,
      sendDataCart,
    } = this.state
    var items = []
    dataService.detail_product &&
      dataService.detail_product.map((item) => {
        items.push({ name: item.detail_1, price: item.price })
      })
    var items2 = []
    dataService2 &&
      dataService2.data_size.map((item) => {
        items2.push({ name: item.detail_2, amount: item.amount, price: item.price })
      })
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        var uri
        var dataBody
        item && items && (
          uri = finip + '/product/get_value_size',
          dataBody = {
            id_product: item.id_product,
            detail_color: items[selectedIndex].name
          }
        )
        var sale_price
        var full_price
        var amount_product
        var dis_price
        dataService2 && dataService3 && activeSelect2 == false && (
          sale_price = dataService3.price_data,
          sale_price = sale_price.replace(",", ""),
          sale_price != items2[selectedIndex2].price && (
            full_price = items2[selectedIndex2].price
          ),
          amount_product = dataService3.amount_data,
          dis_price = dataService3.dis_price
        )
        var uri2
        var dataBody2
        dataService2 && activeSelect2 == true && (
          uri2 = finip + '/product/get_product_amount',
          dataBody2 = {
            detail_color: items[selectedIndex].name,
            val_size: items2[selectedIndex2].name,
            id_product: item.id_product,
          }
        )
        var uri3 = finip + '/product/add_to_cart'
        var dataMySQL = [finip, item.image_full_path, item.image].join('/');
        return (
          <View style={{ flex: 1, paddingHorizontal: 15 }} key={index}>
            {
              activeSelect == true &&
              <GetServices
                uriPointer={uri}
                dataBody={dataBody}
                getDataSource={this.getData.bind(this)} />
            }
            {
              dataService2 && activeSelect2 == true &&
              <GetServices
                uriPointer={uri2}
                dataBody={dataBody2}
                getDataSource={this.getData2.bind(this)} />
            }
            {
              sendDataCart && activeSelect3 == true &&
              <GetServices
                uriPointer={uri3}
                // showConsole={'add_to_cart'}
                Authorization={keycokie}
                dataBody={sendDataCart}
                getDataSource={this.getData3.bind(this)} />
            }
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ตัวเลือก</Text>
            <ScrollView>
              <View style={{ flexDirection: 'row' }}>
                <View style={stylesDetail.Selector_BottomSheet_BoxImage}>
                  <FastImage
                    source={{
                      uri: dataMySQL,
                    }}
                    style={stylesMain.BoxProduct1Image}
                    resizeMode={FastImage.resizeMode.contain} />
                </View>
                {
                  dataService2 && dataService3 &&
                  <View style={{ width: '70%', marginLeft: 10 }}>
                    <View style={stylesMain.FlexRow}>
                      <NumberFormat
                        value={sale_price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'฿'}
                        renderText={
                          value =>
                            <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
                              {value}</Text>
                        } />
                      <NumberFormat
                        value={dis_price && dis_price}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={'%'}
                        renderText={
                          value =>
                            value &&
                            <View style={[stylesMain.ItemCenter, {
                              height: 20, backgroundColor: '#fb3449', marginTop: 5, marginLeft: 5, width: 50, borderRadius: 20
                            }]}>
                              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, stylesMain.ItemCenterVertical, {
                                color: '#FFFFFF'
                              }]}>
                                {value}</Text>
                            </View>
                        } />
                    </View>
                    <NumberFormat
                      value={full_price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'฿'}
                      renderText={
                        value =>
                          value &&
                          <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize4,
                          stylesMain.BoxProduct1ImagePriceThrough, { marginTop: 0, }]}>
                            {value}</Text>
                      } />
                    <NumberFormat
                      value={amount_product}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={
                        value =>
                          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
                            คลัง {value}</Text>
                      } />
                  </View>
                }
              </View>
              <View style={{ padding: 10 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สี</Text>
                <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap', alignItems: 'center' }]}>
                  <TabBar
                    sendData={this.updateIndex.bind(this)}
                    item={items}
                    type='box'
                    noLimit
                    numberBox
                    radiusBox={4} />
                </View>
              </View>
              {
                items2 &&
                <View style={{ padding: 10 }}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ขนาด</Text>
                  <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap', alignItems: 'center' }]}>
                    <TabBar
                      sendData={this.updateIndex2.bind(this)}
                      item={items2}
                      type='box'
                      noLimit
                      numberBox
                      radiusBox={4} />
                  </View>
                </View>
              }
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', width: '90%', }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>จำนวน</Text>
                <TouchableOpacity activeOpacity={1} onPress={
                  itemCount > 1 ?
                    this.setStateItemCount.bind(this, itemCount - 1) :
                    null
                }>
                  <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount, {
                    borderTopLeftRadius: 5, borderBottomLeftRadius: 5,
                  }]}>
                    {
                      dataService3 &&
                      <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, {
                        color:
                          itemCount > 1 ?
                            '#111' :
                            '#CECECE'
                      }]}>
                        -</Text>
                    }
                  </View>
                </TouchableOpacity>
                <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText, stylesDetail.Selector_BottomSheet_itemCount_TextInput]}>
                  <TextInput style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]} keyboardType={'numeric'}
                    maxLength={6} min={1}
                    onChangeText={this.setStateItemCount.bind(this)}>
                    {itemCount}
                  </TextInput>
                </View>
                {
                  dataService3 &&
                  <TouchableOpacity activeOpacity={1} onPress={
                    itemCount < dataService3.amount_data ?
                      this.setStateItemCount.bind(this, itemCount + 1) :
                      null
                  }>
                    <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount, {
                      borderTopRightRadius: 5, borderBottomRightRadius: 5,
                    }]}>
                      < Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, {
                        color:
                          itemCount < dataService3.amount_data ?
                            '#111' :
                            '#CECECE'
                      }]}>
                        +</Text>
                    </View>
                  </TouchableOpacity>
                }
              </View>
              <View style={[stylesDetail.Selector_BottomSheet_BoxButtom, { justifyContent: BuyProduct != 'null' ? 'center' : 'space-between' }]}>
                {
                  (BuyProduct == 'addcart' || BuyProduct == 'null') && currentUser && dataService2 &&
                  <TouchableOpacity activeOpacity={itemCount > 0 ? 0.8 : 1} onPress={
                    itemCount > 0 ?
                      this.sendDataCart.bind(this,
                        'addcart', {
                        id_product: item.id_product, amount: itemCount, color_value: items[selectedIndex].name,
                        size_value: items2[selectedIndex2].name, feature_product: dataService.feature_product,
                        id_customer: currentUser.id_customer, buy_now: "cart"
                      }) :
                      null
                  }>
                    <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                      width: BuyProduct == 'addcart' ? 320 : 160
                    }]}>
                      <IconAntDesign name='shoppingcart' size={25} />
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>
                        เพิ่มลงรถเข็น</Text>
                    </View>
                  </TouchableOpacity>
                }
                {
                  (BuyProduct == 'gocart' || BuyProduct == 'null') && currentUser && dataService2 &&
                  <TouchableOpacity activeOpacity={itemCount > 0 ? 0.8 : 1} onPress={
                    itemCount > 0 ?
                      this.sendDataCart.bind(this, 'gocart', {
                        id_product: item.id_product, amount: itemCount, color_value: items[selectedIndex].name,
                        size_value: items2[selectedIndex2].name, feature_product: dataService.feature_product,
                        id_customer: currentUser.id_customer, buy_now: "cart"
                      }) :
                      null
                  }>
                    <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                      width: BuyProduct == 'gocart' ? 320 : 160
                    }]}>
                      <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
                        ซื้อเลย</Text>
                    </View>
                  </TouchableOpacity>
                }
              </View>
            </View>
          </View>
        )
      })
  }
  sendProduct = (typeSelect) => {
    const { sendProduct } = this.props
    sendProduct(typeSelect)
  }
  closeTap = () => {
    const { sendProduct } = this.props
    sendProduct(null)
  }
  render() {
    const { BuyProduct, currentUser, dataService, } = this.props
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
          onClose={this.closeTap.bind(this)}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }
          }}>
          {this.SelectorSheetBody}
        </BottomSheet>
        {
          dataService.detail_product && dataService.detail_product.length > 0 &&
          <View style={stylesDetail.Coupon}>
            <TouchableOpacity activeOpacity={1} onPress={
              currentUser ?
                this.sendProduct.bind(this, 'null') :
                this.navigationNavigateScreen.bind(this, 'LoginScreen')
            }>
              <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
                <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
                  ตัวเลือก </Text>
                <View style={stylesMain.FlexRow}>
                  <Text style={[
                    stylesDetail.Coupon_Text, stylesFont.FontSize6, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical
                  ]}>
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
    if (
      ////>nextProps
      dataService !== nextProps.dataService
      ////>nextState
    ) {
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
                {item.brand_product ? item.brand_product : 'No Brand'}</Text>
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
    const { dataService } = this.props
    const { activeText, showMoreButton, } = this.state
    if (
      ////>nextProps
      dataService !== nextProps.dataService ||
      ////>nextState
      activeText !== nextState.activeText || showMoreButton !== nextState.showMoreButton
    ) {
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
    const { dataService } = this.props
    const { activeText, showMoreButton, } = this.state
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
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService2 } = this.state
    const { currentUser, dataService, getStarReview, navigation, } = this.props
    if (
      ////>nextProps
      dataService2 !== nextState.dataService2 ||
      ////>nextState
      currentUser !== nextProps.currentUser || dataService !== nextProps.dataService || getStarReview !== nextProps.getStarReview ||
      navigation !== nextProps.navigation
    ) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  customerReview(review) {
    return review &&
      review.map((item, index) => {
        if (index < 5) {
          var img_rate = item.img_rate.split(";")
          let imagereview = []
          img_rate.map((item2, index2) => {
            var path = finip + '/' + item.path_rate + '/' + item2
            imagereview.push(
              <FastImage
                key={index2}
                style={stylesDetail.Reviews_Image}
                source={{ uri: path }} />
            )
          })
          return <View style={stylesDetail.Comment_R} key={index}>
            <FastImage
              style={stylesDetail.Comment_R_Image}
              source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
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
        starBox.push(
          <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
            starSize ?
              starSize :
              20
          } color='#FFAC33' />
        )
      } else {
        starBox.push(
          <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
            starSize ?
              starSize :
              20
          } color='#E9E9E9' />
        )
      }
    }
    return starBox
  }
  render() {
    const { dataService, currentUser, getStarReview } = this.props
    const { dataService2 } = this.state
    var uri = finip + '/product/product_review_mobile'
    var dataBody
    currentUser && dataService && (
      dataBody = {
        id_customer: currentUser.id_customer,
        id_product: dataService[0].id_product,
        id_store: dataService[0].id_store,
      }
    )
    return (
      <View style={stylesMain.FrameBackground}>
        {
          dataService && dataBody &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
            คะแนนร้านค้า</Text>
          <TouchableOpacity style={stylesMain.FlexRow} onPress={this.navigationNavigateScreen.bind(this, 'Reviews_score',
            { id_store: dataService[0].id_store, id_product: dataService[0].id_product })}>
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
                (
                  getStarReview(dataService2.rating_total),
                  this.starReview(dataService2.rating_total)
                )
              }
              <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                {dataService2.rating_total}/5</Text>
              <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                ( {dataService2.review ? dataService2.review.length : '0'} รีวิว)</Text>
            </View>
          </View>
        }
        <View style={stylesDetail.Reviews_Box}>
          {/* <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
            ภาพจากผู้ซื้อ</Text> */}
          <View>
            {/* <ScrollView horizontal>
              <View style={stylesDetail.Reviews_Image_Box}>
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
                <FastImage
                  style={stylesDetail.Reviews_Image}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }} />
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
        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg' }} />
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
    if (
      ////>nextProps
      dataService !== nextProps.dataService || navigation !== nextProps.navigation ||
      ////>nextState
      dataService2 !== nextState.dataService2
    ) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
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
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Same_StoreScreen', {
            type_product: 'this_store', id_type: id_type, id_store: id_store
          })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService2 &&
            <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row3col1' pointerUrl='DetailScreen'
              pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
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
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService, navigation } = this.props
    const { dataService2 } = this.state
    if (
      ////>nextProps
      dataService !== nextProps.dataService || navigation !== nextProps.navigation ||
      ////>nextState
      dataService2 !== nextState.dataService2
    ) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    const { dataService, navigation } = this.props
    const { dataService2 } = this.state
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
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            สินค้าที่คล้ายกัน</Text>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Same_StoreScreen', {
            type_product: 'same_product', id_type: id_type, id_store: id_store
          })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService2 &&
            <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row3col1' pointerUrl='DetailScreen'
              pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
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
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService, navigation } = this.props
    const { dataService2 } = this.state
    if (
      ////>nextProps
      dataService !== nextProps.dataService || navigation !== nextProps.navigation ||
      ////>nextState
      dataService2 !== nextState.dataService2
    ) {
      return true
    }
    return false
  }
  getData = (dataService2) => {
    this.setState({ dataService2 })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    const { dataService, navigation } = this.props
    const { dataService2 } = this.state
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
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        }
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
            คุณอาจชอบสิ่งนี้</Text>
          <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Same_StoreScreen', {
            type_product: 'youlike', id_type: id_type, id_store: id_store
          })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDetail.PopularProductBoxProduct}>
          {
            dataService2 &&
            <ProductBox dataService={dataService2} navigation={navigation} typeip='fin' mode='row2colall' pointerUrl='DetailScreen'
              pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
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
    const { BuyProduct, currentUser, dataService, navigation, } = this.props
    if (
      ////>nextProps
      BuyProduct !== nextProps.BuyProduct || currentUser !== nextProps.currentUser || dataService !== nextProps.dataService ||
      navigation !== nextProps.navigation
      ////>nextState
    ) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  BuyProduct = (typeSelect) => {
    const { BuyProduct } = this.props
    BuyProduct(typeSelect)
  }
  get dataServices() {
    const { dataService, currentUser } = this.props
    return dataService.product_data &&
      dataService.product_data.map((item, index) => {
        return (
          < View style={stylesDetail.Buy_bar} key={index}>
            < View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
              <TouchableOpacity activeOpacity={1} onPress={
                currentUser ?
                  this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 }) :
                  this.navigationNavigateScreen.bind(this, 'LoginScreen')

              }>
                <IconAntDesign name='message1' size={22} style={[stylesMain.ItemCenterVertical]} />
                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
                  แชท</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 30 }}>|</Text>
            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: item.id_store })}>
              <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                <IconFontisto name='shopping-store' size={22} style={stylesMain.ItemCenterVertical} />
                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
                  ร้านค้า</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={
              currentUser ?
                this.BuyProduct.bind(this, 'addcart') :
                this.navigationNavigateScreen.bind(this, 'LoginScreen')
            }>
              <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                <IconAntDesign name='shoppingcart' size={25} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>
                  เพิ่มลงรถเข็น</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={
              currentUser ?
                this.BuyProduct.bind(this, 'gocart') :
                this.navigationNavigateScreen.bind(this, 'LoginScreen')
            }>
              <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>
                  ซื้อเลย</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    if (
      ////>nextProps
      dataService !== nextProps.dataService || navigation !== nextProps.navigation || setShowItemImage !== nextProps.setShowItemImage ||
      showImage !== nextProps.showImage
      ////>nextState
    ) {
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
    console.log('dataMySQL|setShowItemImage')
    console.log(dataMySQL)
    return dataMySQL
  }
  render() {
    const { showImage } = this.props
    var dataMySQL = this.setShowItemImage()
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={true}
        onRequestClose={() => {
          showImage(false);
        }}>
        <View style={[{ height, width }]}>
          <SmartGallery
            images={dataMySQL} />
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
      activeId_promotion: true
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { currentUser, dataService, get_id_promotion } = this.props
    const { activeId_promotion, id_promotion, keycokie, } = this.state
    if (
      ////>nextProps
      currentUser !== nextProps.currentUser || dataService !== nextProps.dataService ||
      get_id_promotion !== nextProps.get_id_promotion ||
      ////>nextState
      activeId_promotion !== nextState.activeId_promotion || id_promotion !== nextState.id_promotion || keycokie !== nextState.keycokie
    ) {
      return true
    }
    return false
  }
  componentDidMount() {
    CookieManager.get(finip + '/auth/login_customer')
      .then((res) => {
        var keycokie = res.token
        this.setState({ keycokie })
      });
  }
  saveTicket = (id_promotion) => {
    this.setState({ id_promotion, activeId_promotion: true })
  }
  getData = (dataService2) => {
    const { get_id_promotion, } = this.props
    if (dataService2.Status == 'Add Coupon Completed !') {
      get_id_promotion(dataService2.Status)
      this.setState({ activeId_promotion: false })
    }
  }
  render() {
    const { currentUser, dataService, } = this.props
    const { activeId_promotion, id_promotion, keycokie, } = this.state
    var uri
    var dataBody
    currentUser && id_promotion && (
      uri = finip + '/coupon/save_coupon_shop',
      dataBody = {
        id_customer: currentUser.id_customer,
        id_promotion_shop: id_promotion
      }
    )
    return (
      <View style={{
        width: '100%', height: 80, borderWidth: 1,
        backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#C0DBF9',
        flexDirection: 'row', justifyContent: 'space-between',  borderRadius: 5, marginVertical: 5,
        opacity: dataService.ticket_picked == 'ticket_picked' ? 0.6 : 1,
      }}>
        {
          dataBody && id_promotion && activeId_promotion == true &&
          <GetServices uriPointer={uri} dataBody={dataBody}
            // showConsole={'save_coupon_shop'} 
            Authorization={keycokie}
            getDataSource={this.getData.bind(this)} />
        }
        <View >
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService.name}</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService.detail}</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize9]}>2020.02.22-2020.03.01</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <TouchableOpacity activeOpacity={dataService.ticket_picked == 'ticket_picked' ? 1 : 0.2}
            onPress={dataService.ticket_picked == 'ticket_picked' ? null : this.saveTicket.bind(this, dataService.id_promotion)}>
            <View style={{
              backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#0A55A6',
            }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                {dataService.ticket_picked == 'ticket_picked' ? 'เก็บคูปองแล้ว' : 'เก็บคูปอง'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}