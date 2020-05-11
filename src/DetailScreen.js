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
import WebView from 'react-native-webview';
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
      activeDataService: true,
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
  showImage = (showItemImage) => {
    this.setState({ showItemImage })
  }
  getData = (dataService) => {
    this.setState({ activeDataService: false, dataService })
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
      activeDataService, currentUser, BuyProduct, dataService, getStarReview, keycokie, scrollY, setActive, setShowItemImage, showItemImage
    } = this.state
    var id_product = navigation.getParam('id_item')
    var uri = finip + '/product/product_detail_mobile';
    var dataBody = {
      id_product: id_product
    };
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {[
          showItemImage == true &&
          <Show_Image key='Show_Image' showImage={this.showImage.bind(this)} setShowItemImage={setShowItemImage} />,
          activeDataService == true &&
          <GetServices uriPointer={uri} key='GetServices'
            // showConsole={'product_detail_mobile'}
            dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        ]}
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
export class Detail_Image extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      imageLength: 1,
      imageLengthActive: 0,
    };
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
    };
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
    // console.log('---------------------------------->newDataService<----------------------------------')
    // console.log(newDataService)
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
          currentUser && activeDate == true &&
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
  updateIndex = (value) => {
    this.setState({ selectedIndex: value.selectedIndex, activeSelect: true })
  }
  updateIndex2 = (value) => {
    this.setState({ selectedIndex2: value.selectedIndex, activeSelect2: true })
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
        console.log(item)
        return (
          <View style={stylesMain.FrameBackground} key={index}>
            <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
              <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                รายละเอียดสินค้า</Text>
            </View>
            <WebView
              originWhitelist={['*']}
              source={{ html: '<p>Converse Chuck Taylor All Star 70’s&nbsp;</p><p>การกลับมาอีกครั้งของ All Star 70’s โมเดลที่นำเอาความคลาสสิก และกลิ่นอายของรองเท้า Converse ในปี 1970 กลับมาโลดแล่นใหม่อีกครั้ง โดยยังคงรายละเอียดของทรงรองเท้า, ขอบยาง, เชือกรองเท้า, รูตาไก่ และป้ายส้นแบบวินเทจไว้อย่างครบถ้วน โดยจะมีด้วยกัน 2 สี (Parchment และ Black) ทั้งทรง HI (หุ้มข้อ) และ OX (ข้อต่ำ)</p><p>-----------------------------------</p><p><img src=\"data:image/jpeg;base64,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\" data-filename=\"20200212_45887.jpg\" style=\"width: 150px;\"><img src=\"data:image/jpeg;base64,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\" data-filename=\"20200212_49052.jpg\" style=\"width: 150px;\"><br></p><p>- All Star 70’s “Parchment” HI</p><p>- All Star 70’s “Black” HI</p><p>SIZE (US): 4 / 5 / 6 / 7 / 8 / 9 / 10</p><p>PRICE: 2,900 บาท</p><p>MEMBER: รับส่วนลด 5%</p><p><img src=\"data:image/jpeg;base64,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\" data-filename=\"20200212_52521.jpg\" style=\"width: 150px;\"><img src=\"data:image/jpeg;base64,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\" data-filename=\"20200212_82960.jpg\" style=\"width: 150px;\"><br></p><p>-----------------------------------</p><p>- All Star 70’s “Parchment” OX</p><p>- All Star 70’s “Black” OX</p><p>SIZE (US): 4 / 5 / 6 / 7 / 8 / 9 / 10</p><p>PRICE: 2,700 บาท</p><p>MEMBER: รับส่วนลด 5%</p><p>-----------------------------------</p><p>วางจำหน่ายวันนี้แล้วที่</p><p>- Carnival - สยาม สแควร์ ซอย 1 โทร 02-252-8907</p><p>-----------------------------------</p><p>The Converse All Star Chuck ’70 is our re-crafted sneaker that uses modern details to celebrate the original Chuck Taylor All Star from the 1970s. It features a slightly higher rubber foxing, a cushioned footbed that provides long-lasting comfort and a more substantial rubber toe cap. Additional vintage details include stitching on the sidewall and a heavier-grade canvas upper for comfort and durability. They join iconic Chuck Taylor attributes such as the star-centred ankle patch and vulcanised rubber outsole.&nbsp;</p><p>Available now at CARNIVAL (Siam Square Soi. 1)</p><p>#converse #chucktaylor #allstar #allstar70 #carnivalbkk</p>' }}
            />
            {/* <View style={stylesDetail.Detail_Text_Box}>
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
            </View> */}
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
      activeDataService2: true,
    };
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
    const { getStarReview } = this.props
    getStarReview(dataService2.rating_total)
    this.setState({ activeDataService2: false, dataService2 })
  }
  customerReview(review) {
    return review && review != 'ยังไม่มีการรีวิว' ?
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
      }) : <View>
        <Text>{review}</Text>
      </View>
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
    const { dataService, currentUser } = this.props
    const { activeDataService2, dataService2 } = this.state
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
          activeDataService2 == true && dataService && dataBody &&
          <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)}
            showConsole='product_review_mobile' />
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
                this.starReview(dataService2.rating_total)
              }
              <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                {dataService2.rating_total}/5</Text>
              <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                ( {dataService2.review ? dataService2.review.length : '0'} รีวิว)</Text>
            </View>
          </View>
        }
        <View>
          {
            dataService2 &&
            this.customerReview(dataService2.review)
          }
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
    return (
      <View style={stylesDetail.Banner_Bar}>
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
        width: '100%', height: 100, borderWidth: 1,
        backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#C0DBF9',
        flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 5, marginVertical: 10,
        opacity: dataService.ticket_picked == 'ticket_picked' ? 0.6 : 1,
      }}>
        {
          dataBody && id_promotion && activeId_promotion == true &&
          <GetServices uriPointer={uri} dataBody={dataBody}
            // showConsole={'save_coupon_shop'} 
            Authorization={keycokie}
            getDataSource={this.getData.bind(this)} />
        }
        <View style={{ width: '60%' }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.name}</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.detail}</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: '#C4C4C4' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>2020.02.22-2020.03.01</Text>
          </View>
          <TouchableOpacity activeOpacity={dataService.ticket_picked == 'ticket_picked' ? 1 : 0.2}
            onPress={dataService.ticket_picked == 'ticket_picked' ? null : this.saveTicket.bind(this, dataService.id_promotion)}>
            <View style={[stylesMain.ItemCenter, {
              backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#0A55A6', paddingHorizontal: 10,
              borderRadius: 5
            }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                {dataService.ticket_picked == 'ticket_picked' ? 'เก็บคูปองแล้ว' : 'เก็บคูปอง'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}