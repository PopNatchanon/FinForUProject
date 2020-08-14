///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, useRef } from 'react';
import {
  Animated, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Modal,
} from 'react-native';
import { connect } from 'react-redux';
import {
  activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
  setDataRefresh, setDataStart, setFetchToStart
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import BottomSheet from "react-native-raw-bottom-sheet";
import Carousel, { PaginationLight } from 'react-native-x-carousel';
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SmartGallery from "react-native-smart-gallery";
import WebView from 'react-native-webview';
import HTML from 'react-native-render-html';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../style/StylesDetailScreen'
import stylesFont, { normalize } from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
import {
  GetServices, ProductBox, TabBar, FlatComponent, GetData, FlatProduct, LoadingScreen,
} from '../customComponents/Tools';
import { StarReview, NavigationNavigate, AppBar, ImageList } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main // complete_last_function
const getCartDataCount = (cartData) => {
  var cartDataCount = 0;
  cartData?.map((value) => value.product.map((value2) => { return cartDataCount += value2.quantity * 1; }));
  return cartDataCount
};
const mapStateToProps = (state) => ({
  cartData: state.cartData, cartDataCount: getCartDataCount(state.cartData.data), customerData: state.customerData,
  getFetchData: state.singleFetchDataFromService, reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
  activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
  setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
function DetailScreen(props) {
  const { getFetchData, route } = props;
  const id_product = route.params?.id_product;
  const [activeDataService, setActiveDataService] = useState(true);
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [buyProduct, setBuyProduct] = useState(undefined);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const [getStarReview, setStarReview] = useState(undefined);
  activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
  var uri = `${finip}/product/product_detail_mobile`;
  var dataBody = { id_product: id_product };
  activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value) });
  let getData = (value) => { setActiveDataService(false); setDataService(value); };
  let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
  let itemT = [
    /////--------------------------------------------->>>Start
    {
      nameComponent: 'Detail_Image',
      renderComponent: <Detail_Image {...props} dataService={dataService?.product_data} />
    },
    {
      nameComponent: 'Detail_Data',
      renderComponent: <Detail_Data {...props} cokie={cokie} currentUser={currentUser} dataService={dataService ?? undefined}
        getStarReview={getStarReview} id_product={id_product} />
    },
    {
      nameComponent: 'Detail_Store',
      renderComponent: <Store {...props} currentUser={currentUser} dataService={dataService} cokie={cokie} />
    },
    {
      nameComponent: 'Selector_Conpon',
      renderComponent: <Conpon dataService={dataService?.product_data} cokie={cokie} currentUser={currentUser} />
    },
    {
      nameComponent: 'Selector_Product',
      renderComponent: <Selector {...props} buyProduct={buyProduct} dataService={dataService} cokie={cokie} currentUser={currentUser}
        sendBuyProduct={value => setBuyProduct(value)} />
    },
    {
      nameComponent: 'Detail_Category',
      renderComponent: <Detail_Category dataService={dataService} />
    },
    {
      nameComponent: 'Detail_Product',
      renderComponent: <Detail dataService={dataService} />
    },
    {
      nameComponent: 'Reviews',
      renderComponent: <Reviews {...props} currentUser={currentUser} dataService={dataService?.product_data}
        getStarReview={(value) => setStarReview(value)} />
    },
    {
      nameComponent: 'BannerBar',
      renderComponent: <BannerBar />
    },
    {
      nameComponent: 'Same_Store',
      renderComponent: <Same_Store {...props} dataService={dataService} />
    },
    {
      nameComponent: 'Similar_Product',
      renderComponent: <Similar_Product {...props} dataService={dataService} />
    },
    {
      nameComponent: 'Might_like',
      renderComponent: <Might_like {...props} dataService={dataService} />
    },
    /////--------------------------------------------->>>End
  ];
  return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
    {getFetchData['cart_mobile']?.isFetching && <LoadingScreen />}
    {/* {
        showItemImage  &&
        <Show_Image key='Show_Image' />
      } */}
    {/* <Animatable.View style={{ height: 50, }}>
          <View style={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            overflow: 'hidden',
          }}> */}
    <AppBar {...props} backArrow cartBar enableSearch />
    {/* </View>
        </Animatable.View> */}
    {dataService && <FlatComponent component={itemT} key='Main' />}
    {dataService?.product_data && <Buy_bar {...props} sendBuyProduct={value => setBuyProduct(value)} key={'Buy_bar'}
      currentUser={currentUser} dataService={dataService} />}
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Image
export let Detail_Image = (props) => {
  const { dataService, } = props;
  const [currentImage, setCurrentImage] = useState(1);
  const [imageLength, setImageLength] = useState(1);
  const [imageLengthActive, setImageLengthActive] = useState(0);
  let setStateImageLength = (length) => { setImageLength(length); setImageLengthActive(1); };
  let imageGallery = (image_full_path, gallery_image) => {
    const image = {} = gallery_image.split(';');
    const length = image.length;
    imageLengthActive == 0 && setStateImageLength(length);
    var count = 0;
    var myJSON = new Array();
    var item;
    while (length > count) {
      item = { "image_full_path": image_full_path, "image": image[count] };
      myJSON.push(item);
      count++;
    }
    return myJSON;
  };
  let sendShowImage = () => { };
  let _renderItem = (item, index) => {
    var dataMySQL = `${finip}/${item.image_full_path}/${item.image}`;
    return <TouchableOpacity activeOpacity={1} key={index} onPress={() => sendShowImage()}>
      <View style={{ width: width, height: height / 2, maxHeight: height, /*backgroundColor: '#d9d9d9'*/ }}>
        <FastImage source={{ uri: dataMySQL, }} style={[stylesMain.BoxProduct1Image, { opacity: 0.9 }]}
          resizeMode={FastImage.resizeMode.contain} />
      </View>
    </TouchableOpacity>;
  };
  let id_product = dataService?.map((item, index) => {
    let dataMySQL;
    item.gallery_image ? dataMySQL = imageGallery(item.image_full_path, item.gallery_image) : dataMySQL = dataService;
    // dataMySQL &&
    //   getActive  &&
    //   setShowImage(dataMySQL);
    return <View style={[stylesMain.FrameBackground2, { marginTop: 0, borderTopWidth: 0 }]} key={index}>
      <View>
        <ImageList {...props} activeZoom data={dataMySQL} dotsStyle={{ width: 10, height: 10 }}
          pagination paginationPosition='down-right' paginationType='number' renderItem={_renderItem} />
        {/* <Carousel onPage={value => setCurrentImage(value.current)} renderItem={_renderItem} data={dataMySQL} /> */}
      </View>
    </View>;
  });
  return <View>
    {id_product}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Data
export let Detail_Data = (props) => {
  const { currentUser, id_product, dataService, cokie, getStarReview } = props;
  const [activeLike, setActiveLike] = useState(false);
  const [activeService2, setActiveService2] = useState(true);
  const [dataService2, setDataService2] = useState(true);
  const [newDataService, setNewDataService] = useState(true);
  const uri = `${finip}/favorite_data/favorite_product`;
  var dataBody = {
    id_customer: currentUser?.id_customer,
    id_product: id_product,
    activity: activeLike ? 'like' : 'check'
  };
  let getDataSource = value => { setActiveLike(false); setActiveService2(false); setDataService2(value); }
  let setStateLike = () => { setActiveLike(true); setActiveService2(true); };
  useEffect(() => {
    dataService?.product_data && cokie && currentUser && id_product && activeService2 && GetServices({
      uriPointer: uri, dataBody, Authorization: cokie, getDataSource: value => getDataSource(value)
    });
  }, [dataService?.product_data && cokie && currentUser && id_product && activeService2]);
  let body = () => {
    var dataBody;
    if (dataService?.detail_product !== undefined && newDataService === undefined) {
      var newData = [];
      for (var n = 0; n < dataService?.detail_product?.length; n++) {
        dataBody = {
          id_product: dataService?.product_data[0]?.id_product,
          detail_color: dataService?.detail_product[n]?.detail_1
        };
        fetch(`${finip}/product/get_value_size`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataBody),
        }).then((response) => response.json()).then((responseJson) => {
          for (var m = 0; m < responseJson.data_size.length; m++) { newData.push(responseJson.data_size[m]); };
        }).catch((error) => { console.error(error); });
      };
      setNewDataService(newData);
    };
    return dataService?.product_data?.map((item, index) => <View key={index} style={[stylesMain.FrameBackground2,
    { marginTop: 0, borderTopWidth: 0, paddingBottom: 0, }]}>
      <View style={[stylesDetail.Price_Box, { borderTopWidth: 0 }]}>
        <View style={stylesDetail.Price_Text_Name_Box}>
          <View style={[stylesMain.FlexRow, { paddingTop: 10, }]}>
            <NumberFormat value={dataService.price_data} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
              <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>{value}</Text>} />
            {/* <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                    {item.full_price ? null : ' - '}</Text>*/}
            <NumberFormat value={item.maxvalue} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
              <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>{value}</Text>} />
            {dataService?.show_discount !== '' && dataService?.show_discount !== undefined &&
              <View style={[stylesMain.Box_On_sale, { borderRadius: 20 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>{dataService?.show_discount}</Text>
              </View>}
          </View>
          <View style={stylesDetail.Price_Icon_Box}>
            {dataService2 && <TouchableOpacity onPress={() => setStateLike()}>
              <IconFontAwesome style={[stylesDetail.Price_Icon, { color: dataService2.message == 'like' ? '#ff0066' : '#111111' }]}
                name={dataService2.message == 'like' ? 'heart' : 'heart-o'} size={20} />
            </TouchableOpacity>}
            <IconEntypo style={stylesDetail.Price_Icon} name='share' size={20} />
          </View>
        </View>
        <Text numberOfLines={2} style={[stylesDetail.Price_Text_Name, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
          {item.name}</Text>
        <View style={[stylesDetail.Price_Text_IconBox, stylesMain.BottomSpace]}>
          <View style={stylesDetail.Price_Text_IconBoxStar}>
            {getStarReview && StarReview(getStarReview)}
            <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#111' }]}>
            </Text>
          </View>
        </View>
      </View>
    </View>);
  };
  return <View>
    {body()}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Store
export let Store = (props) => {
  const { cokie, currentUser, dataService, navigation } = props;
  const [activeFollow, setActiveFollow] = useState(false);
  const [activeService2, setActiveService2] = useState(true);
  const [dataService2, setDataService2] = useState(undefined);
  const uri = `${finip}/brand/follow_data`;
  var id_store;
  dataService?.product_data?.map((item, index) => id_store = item.id_store);
  var dataBody = {
    id_customer: currentUser?.id_customer,
    id_store: id_store,
    follow: activeFollow ? 'active' : ''
  };
  let getDataSource = value => { setActiveFollow(false); setActiveService2(false); setDataService2(value); };
  let setStateFollow = () => { setActiveFollow(true); setActiveService2(true); };
  useEffect(() => {
    dataService?.product_data && cokie && currentUser && activeService2 && GetServices({
      uriPointer: uri, dataBody, Authorization: cokie, getDataSource: value => getDataSource(value)
    });
  }, [dataService?.product_data && cokie && currentUser && activeService2]);
  let StoreBox = dataService?.product_data?.map((item, index) => {
    var dataMySQL = `${finip}/${item.store_path}/${item.store_img}`;
    return <View style={[stylesMain.FrameBackground, stylesMain.BottomSpace]} key={index}>
      <View style={stylesDetail.Store_Box1}>
        <View style={stylesDetail.Store_Box2}>
          <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'StoreScreen', setData: { id_store: item.id_store }, navigation })}>
            <FastImage source={{ uri: dataMySQL, }} style={[stylesDetail.Store_Image,
            { marginLeft: 10, backgroundColor: 'transparent' }]} />
          </TouchableOpacity>
          <View style={stylesDetail.Store_Text_Box}>
            <TouchableOpacity onPress={() =>
              NavigationNavigate({ goScreen: 'StoreScreen', setData: { id_store: item.id_store }, navigation })}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{item.store_name}</Text>
            </TouchableOpacity>
            <Text style={[stylesDetail.Store_Text, stylesFont.FontFamilyText, stylesFont.FontSize8]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
            <Text style={[stylesDetail.Store_Text, stylesFont.FontFamilyText, stylesFont.FontSize7]}><IconEntypo name='location-pin'
              size={15} />{item.store_address}</Text>
          </View>
          <TouchableOpacity onPress={() => setStateFollow()}>
            <View style={stylesDetail.Store_Buttom_Box}>
              <Text style={[stylesDetail.Store_Text_Button, stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataService2?.output}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesDetail.Store_Bar_A}>
        <View style={stylesDetail.Store_Bar}>
          <View>
            <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize4]}>100</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>รายการสินค้า</Text>
          </View>
          <Text style={{ fontSize: 25, }}>|</Text>
          <View>
            <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize4]}>90%</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>จัดส่งตรงเวลา</Text>
          </View>
          <Text style={{ fontSize: 25, }}>|</Text>
          <View>
            <Text style={[stylesDetail.Store_Bar_int, stylesFont.FontFamilyText, stylesFont.FontSize4]}>90%</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อัตราการตอบกลับแชท</Text>
          </View>
        </View>
      </View>
    </View>;
  });
  return <View>
    {StoreBox}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Conpon
export let Conpon = (props) => {
  const { currentUser, dataService, } = props;
  const [activeDate, setActiveDate] = useState(true);
  const [dataService2, setDataService2] = useState(undefined);
  const conponSheet = useRef(null);
  var uri;
  var dataBody;
  dataService && currentUser && dataService.map((item) => {
    uri = `${finip}/coupon/get_store_coupon`;
    dataBody = { id_customer: currentUser?.id_customer, id_product: item.id_product };
  });
  let ConponSheetButtom = () => { setActiveDate(true); conponSheet.current.open(); }
  let getDataSource = value => { setActiveDate(false); setDataService2(value); }
  useEffect(() => {
    currentUser && activeDate && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getDataSource(value) });
  }, [currentUser && activeDate]);
  let ConponSheetBody = dataService2?.store_coupon_m?.length > 0 && <>
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>รับคูปอง</Text>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ส่วนลดร้านค้า</Text>
      <ScrollView>
        {dataService2?.store_coupon_m?.length > 0 ?
          dataService2?.store_coupon_m.map((item, index) => <Coupon_Detail_BottomSheet {...props} dataService={item}
            get_id_promotion={() => setActiveDate(true)} key={index} />) : null}
      </ScrollView>
    </View>
  </>;
  return <>
    {dataService2?.store_coupon_m?.length > 0 ?
      <View key={'ConponSheet'}>
        <BottomSheet ref={conponSheet} height={height * 0.5} duration={250}
          customStyles={{ container: { paddingTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
          {ConponSheetBody}
        </BottomSheet>
        <View style={stylesDetail.Coupon}>
          <TouchableOpacity activeOpacity={1} onPress={() => ConponSheetButtom()}>
            <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
              <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
                คูปอง</Text>
              <View style={stylesMain.FlexRow}>
                <View style={[stylesDetail.Coupon_Box_Pon, stylesMain.ItemCenter]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ลด ฿100.00</Text>
                </View>
                <View style={[stylesDetail.Coupon_Box_Pon, stylesMain.ItemCenter]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ลด ฿300.00</Text>
                </View>
                <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} color={mainColor} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View> : <View key={'ConponSheet'}></View>}
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Selector
export let Selector = (props) => {
  const { activeCartList, buyProduct, cokie, currentUser, dataService, navigation, sendBuyProduct, } = props;
  const [activeSelect, setActiveSelect] = useState(true);
  const [activeSelect2, setActiveSelect2] = useState(false);
  const [activeSelect3, setActiveSelect3] = useState(false);
  const [buyProduct2, setBuyProduct2] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  const [dataService3, setDataService3] = useState(undefined);
  const [itemCount, setItemCount] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const [sendDataCart, setSendDataCart] = useState(undefined);
  const selectorSheet = useRef(null);
  let fsendDataCart = (buyProduct, sendDataCart) => { setSendDataCart(sendDataCart); setActiveSelect3(true); setBuyProduct2(buyProduct); };
  let getData3 = (value) => {
    setActiveSelect3(false);
    activeCartList({ id_customer: currentUser.id_customer });
    selectorSheet.current.close();
    buyProduct2 == 'gocart' && navigation.push('CartScreen');
  };
  let updateIndex = (value) => { setSelectedIndex(value.selectedIndex); setActiveSelect(true); };
  let updateIndex2 = (value) => { setSelectedIndex2(value.selectedIndex); setActiveSelect2(true); };
  let getDataSource = value => { setDataService2(value); setActiveSelect(false); setActiveSelect2(true); }
  let getDataSource2 = value => { setDataService3(value); setActiveSelect2(false); setItemCount(value.amount_data < 1 ? 0 : 1); }
  let SelectorSheetBody = () => {
    var items = [];
    dataService?.detail_product?.map((item) => items.push({ name: item.detail_1, price: item.price }));
    var items2 = [];
    dataService2?.data_size?.map((item) => items2.push({ name: item.detail_2, amount: item.amount, price: item.price }));
    return dataService?.product_data?.map((item, index) => {
      var uri;
      var dataBody;
      item && items && (
        uri = `${finip}/product/get_value_size`,
        dataBody = {
          id_product: item.id_product,
          detail_color: items[selectedIndex].name
        }
      );
      var sale_price;
      var full_price;
      var amount_product;
      var dis_price;
      dataService2 && dataService3 && !activeSelect2 && (
        sale_price = dataService3.price_data,
        sale_price = sale_price.replace(",", ""),
        sale_price != items2[selectedIndex2].price && (full_price = items2[selectedIndex2].price),
        amount_product = dataService3.amount_data,
        dis_price = dataService3.dis_price
      );
      var uri2;
      var dataBody2;
      dataService2 && activeSelect2 && (
        uri2 = `${finip}/product/get_product_amount`,
        dataBody2 = {
          detail_color: items[selectedIndex].name,
          val_size: items2[selectedIndex2].name,
          id_product: item.id_product,
        }
      );
      var uri3 = `${finip}/product/add_to_cart`;
      var dataMySQL = `${finip}/${item.image_full_path}/${item.image}`;
      activeSelect && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getDataSource(value), });
      dataService2 && activeSelect2 && GetServices({
        uriPointer: uri2, dataBody: dataBody2, getDataSource: value => getDataSource2(value),
      });
      sendDataCart && activeSelect3 && GetServices({
        uriPointer: uri3, Authorization: cokie, dataBody: sendDataCart, getDataSource: value => getData3(value)
      });
      return <View style={{ flex: 1, paddingHorizontal: 15 }} key={index}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ตัวเลือก</Text>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View style={stylesDetail.Selector_BottomSheet_BoxImage}>
              <FastImage source={{ uri: dataMySQL, }} style={stylesMain.BoxProduct1Image} resizeMode={FastImage.resizeMode.contain} />
            </View>
            {dataService2 && dataService3 && <View style={{ width: '70%', marginLeft: 10 }}>
              <View style={stylesMain.FlexRow}>
                <NumberFormat value={sale_price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
                  <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize2]}>{value}</Text>} />
                <NumberFormat value={dis_price && dis_price} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  renderText={value => value && <View style={[stylesMain.ItemCenter,
                  { height: 20, backgroundColor: '#fb3449', marginTop: 5, marginLeft: 5, width: 50, borderRadius: 20 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, stylesMain.ItemCenterVertical, { color: '#FFFFFF' }]}>
                      {value}</Text>
                  </View>} />
              </View>
              <NumberFormat value={full_price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value => value &&
                <Text style={[stylesDetail.Price_Text_Int, stylesFont.FontFamilyBold, stylesFont.FontSize4,
                stylesMain.BoxProduct1ImagePriceThrough, { marginTop: 0, }]}>{value}</Text>} />
              <NumberFormat value={amount_product} displayType={'text'} thousandSeparator={true} renderText={value =>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>คลัง {value}</Text>} />
            </View>}
          </View>
          <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สี</Text>
            <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap', alignItems: 'center' }]}>
              <TabBar sendData={updateIndex} item={items} type='box' noLimit numberBox radiusBox={4} />
            </View>
          </View>
          {items2 && <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ขนาด</Text>
            <View style={[stylesMain.FlexRow, { width: '100%', flexWrap: 'wrap', alignItems: 'center' }]}>
              <TabBar sendData={updateIndex2} item={items2} type='box' noLimit numberBox radiusBox={4} />
            </View>
          </View>}
        </ScrollView>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', width: '90%', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>จำนวน</Text>
            <TouchableOpacity activeOpacity={1} onPress={itemCount > 1 ? () => setItemCount(itemCount - 1) : null}>
              <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount,
              { borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }]}>
                {dataService3 && <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4,
                { color: itemCount > 1 ? '#111' : '#CECECE' }]}>-</Text>}
              </View>
            </TouchableOpacity>
            <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText, stylesDetail.Selector_BottomSheet_itemCount_TextInput]}>
              <TextInput style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]} keyboardType={'numeric'} maxLength={6} min={1}
                onChangeText={value => setItemCount(value * 1)}>{itemCount}</TextInput>
            </View>
            {dataService3 && <TouchableOpacity activeOpacity={1} onPress={itemCount < dataService3.amount_data ? () =>
              setItemCount(itemCount + 1) : null}>
              <View style={[stylesMain.ItemCenter, stylesDetail.Selector_BottomSheet_itemCount,
              { borderTopRightRadius: 5, borderBottomRightRadius: 5, }]}>
                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4,
                { color: itemCount < dataService3.amount_data ? '#111' : '#CECECE' }]}>+</Text>
              </View>
            </TouchableOpacity>}
          </View>
          <View style={[stylesDetail.Selector_BottomSheet_BoxButtom,
          { justifyContent: buyProduct != 'null' ? 'center' : 'space-between' }]}>
            {(buyProduct == 'addcart' || buyProduct == 'null') && currentUser && dataService2 && <TouchableOpacity
              activeOpacity={itemCount > 0 ? 0.8 : 1} onPress={() => itemCount > 0 ? fsendDataCart('addcart', {
                id_product: item.id_product, amount: itemCount, color_value: items[selectedIndex].name,
                size_value: items2[selectedIndex2].name, feature_product: dataService?.feature_product,
                id_customer: currentUser.id_customer, buy_now: "cart"
              }) : null}>
              <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical,
              { width: buyProduct == 'addcart' ? 320 : 160 }]}>
                <IconAntDesign name='shoppingcart' size={25} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>เพิ่มลงรถเข็น</Text>
              </View>
            </TouchableOpacity>}
            {(buyProduct == 'gocart' || buyProduct == 'null') && currentUser && dataService2 && <TouchableOpacity
              activeOpacity={itemCount > 0 ? 0.8 : 1} onPress={() => itemCount > 0 ? fsendDataCart('gocart', {
                id_product: item.id_product, amount: itemCount, color_value: items[selectedIndex].name,
                size_value: items2[selectedIndex2].name, feature_product: dataService?.feature_product,
                id_customer: currentUser.id_customer, buy_now: "cart"
              }) : null}>
              <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical,
              { width: buyProduct == 'gocart' ? 320 : 160 }]}>
                <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>ซื้อเลย</Text>
              </View>
            </TouchableOpacity>}
          </View>
        </View>
      </View>;
    });
  };
  dataService?.detail_product && buyProduct && selectorSheet.current.open();
  return <>
    <BottomSheet ref={selectorSheet} height={height * 0.5} duration={250} onClose={() => sendBuyProduct(null)}
      customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
      {SelectorSheetBody()}
    </BottomSheet>
    {dataService?.detail_product?.length > 0 && <View style={stylesDetail.Coupon}>
      <TouchableOpacity activeOpacity={1} onPress={() => currentUser ?
        sendBuyProduct('null') : NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
        <View style={[stylesDetail.Coupon_Box, stylesMain.ItemCenterVertical]}>
          <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize5, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical]}>
            ตัวเลือก</Text>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesDetail.Coupon_Text, stylesFont.FontSize6, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical]}>
              ตัวอย่างเช่น สี ขนาด</Text>
            <IconEntypo style={stylesDetail.Coupon_Icon} name='chevron-right' size={30} color={mainColor} />
          </View>
        </View>
      </TouchableOpacity>
    </View>}
  </>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Category
export let Detail_Category = (props) => {
  const { dataService } = props;
  let id_store = dataService?.product_data?.map((item, index) => <View style={[stylesMain.FrameBackground]} key={index}>
    <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ข้อมูลจำเพาะ</Text>
    </View>
    <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
      <View style={{ width: '25%' }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>หมวดหมู่</Text>
      </View>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{item.type_name}</Text>
    </View>
    <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
      <View style={{ width: '25%' }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ยี่ห้อ</Text>
      </View>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{item.brand_product ? item.brand_product : 'No Brand'}</Text>
    </View>
    <View style={[stylesMain.BottomSpace, stylesMain.FlexRow]}>
      <View style={{ width: '25%' }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ส่งจาก</Text>
      </View>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{item.store_address}</Text>
    </View>
  </View>
  );
  return <View>
    {id_store}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Detail
export let Detail = (props) => {
  const { dataService } = props;
  const [activeText, setActiveText] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  let id_store = dataService?.product_data?.map((item, index) => <View style={stylesMain.FrameBackground} key={index}>
    <View style={[stylesMain.FrameBackgroundTextBox, stylesDetail.BottomTitle, stylesMain.MarginBottomTitle]}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>รายละเอียดสินค้า</Text>
    </View>
    <View style={[{ marginTop: normalize(-5), }]}>
      <View style={[{ paddingHorizontal: 6, maxHeight: activeText == false ? 94 : '100%', overflow: 'hidden', }]}
        onLayout={({ nativeEvent: { layout: { height } } }) => setShowMoreButton(height >= normalize(94))}>
        <WebView source={{ html: '<h1>Hello world</h1>' }} />
        {/* <HTML html={item.detail} baseFontStyle={{ fontFamily: 'ThaiSansNeue-Bold', }}
                  imagesMaxWidth={Dimensions.get('window').width} /> */}
      </View>
      {showMoreButton && <TouchableOpacity onPress={() => setActiveText(!activeText)}>
        <View style={[stylesDetail.Detail_Box, stylesMain.ItemCenter]}>
          <Text style={[stylesDetail.Detail_Text_A, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold]}>
            {activeText ? 'ย่อ' : 'ดูเพิ่มเติม'}</Text>
          <IconEntypo name={activeText ? 'chevron-up' : 'chevron-down'} size={25} color={mainColor} />
        </View>
      </TouchableOpacity>}
    </View>
  </View>);
  return <View>
    {id_store}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Reviews
export let Reviews = (props) => {
  const { dataService, currentUser, getStarReview, navigation } = props;
  const [activeDataService2, setActiveDataService2] = useState(true);
  const [dataService2, setDataService2] = useState(undefined);
  var uri = `${finip}/product/product_review_mobile`;
  var dataBody;
  currentUser && dataService && (
    dataBody = {
      id_customer: currentUser.id_customer,
      id_product: dataService[0].id_product,
      id_store: dataService[0].id_store,
    }
  );
  let getDataSource = value => { getStarReview(value.rating_total); setActiveDataService2(false); setDataService2(value); };
  useEffect(() => {
    activeDataService2 && dataService && dataBody && GetServices({
      uriPointer: uri, dataBody, getDataSource: value => getDataSource(value)
    });
  }, [activeDataService2 && dataService && dataBody]);
  let customerReviews = (review) => review && review != 'ยังไม่มีการรีวิว' ?
    review.map((item, index) => {
      if (index < 5) {
        var img_rate = item.img_rate.split(";");
        let imagereview = [];
        img_rate.map((item2, index2) => {
          var path = `${finip}/${item.path_rate}/${item2}`;
          imagereview.push(<FastImage key={index2} style={stylesDetail.Reviews_Image} source={{ uri: path }} />);
        });
        return <View style={stylesDetail.Comment_R} key={index}>
          <FastImage style={stylesDetail.Comment_R_Image} source={{ uri: `${ip}/MySQL/uploads/products/2019-06-09-1560016588.jpg` }} />
          <View style={stylesDetail.Comment_R_Text}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name ?? 'ไม่ระบุตัวตน'}</Text>
            <View style={stylesDetail.Comment_R_Iconstar}>{StarReview(item.rating, 15)}
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{item.detail}</Text>
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
    </View>;
  return dataService2 && dataService2.error === undefined ?
    <View style={stylesMain.FrameBackground}>
      <View style={stylesMain.FrameBackgroundTextBox}>
        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>คะแนนร้านค้า</Text>
        <TouchableOpacity style={stylesMain.FlexRow} onPress={() => NavigationNavigate({
          goScreen: 'Reviews_score', setData: { id_store: dataService[0].id_store, id_product: dataService[0].id_product }, navigation
        })}>
          <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize6, { marginRight: 0 }]}>
            ดูทั้งหมด</Text>
          <IconFeather style={stylesDetail.Score_iconB} name='edit' size={20} color={mainColor} />
        </TouchableOpacity>
      </View>
      <View style={stylesDetail.Price_Text_IconBox}>
        <View style={stylesDetail.Price_Text_IconBoxStar}>
          {StarReview(dataService2?.rating_total)}
          <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
            {dataService2?.rating_total}/5</Text>
          <Text style={[stylesDetail.Price_Text_RCM, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
            ( {dataService2?.review ? dataService2?.review?.length : '0'} รีวิว)</Text>
        </View>
      </View>
      <View>
        {customerReviews(dataService2?.review)}
      </View>
    </View> : <></>;
};
///----------------------------------------------------------------------------------------------->>>> BannerBar
export let BannerBar = (props) => {
  return <View style={stylesDetail.Banner_Bar}>
    <FastImage style={stylesDetail.Banner_Bar_image} source={{ uri: `${ip}/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg` }} />
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Same_Store
export let Same_Store = (props) => {
  const { dataService, navigation } = props;
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService2, setDataService2] = useState(undefined);
  var dataBody;
  var id_type;
  var id_store;
  dataService?.product_data?.map((item) => {
    id_type = item.id_type
    id_store = item.id_store
    dataBody = {
      id_type: item.id_type,
      id_store: item.id_store,
      type_product: "this_store",
    };
  });
  let getDataSource = value => { setActiveDataService(false); setDataService2(value); }
  useEffect(() => {
    activeDataService && dataBody !== undefined && GetServices({
      uriPointer: `${finip}/product/product_other_mobile`, dataBody, getDataSource: value => getDataSource(value)
    })
  }, [activeDataService]);
  return <View style={stylesMain.FrameBackground}>
    <View style={stylesMain.FrameBackgroundTextBox}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สินค้าจากร้านเดียวกัน</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({
        goScreen: 'Same_StoreScreen', setData: { type_product: 'this_store', id_type: id_type, id_store: id_store }, navigation
      })}>
        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService2 && <FlatProduct {...props} dataService={dataService2} numberOfColumn={1} nameFlatProduct='DetailScreen' mode='row3'
      nameSize={14} priceSize={15} dispriceSize={15} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Similar_Product
export let Similar_Product = (props) => {
  const { dataService, navigation } = props;
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService2, setDataService2] = useState(undefined);
  var dataBody;
  var id_type;
  var id_store;
  dataService?.product_data?.map((item) => {
    id_type = item.id_type
    id_store = item.id_store
    dataBody = {
      id_type: item.id_type,
      id_store: item.id_store,
      type_product: "same_product",
    };
  });
  let getDataSource = value => { setActiveDataService(false); setDataService2(value); };
  useEffect(() => {
    activeDataService && dataBody !== undefined && GetServices({
      uriPointer: `${finip}/product/product_other_mobile`, dataBody, getDataSource: value => getDataSource(value)
    })
  }, [activeDataService]);
  return <View style={stylesMain.FrameBackground}>
    <View style={stylesMain.FrameBackgroundTextBox}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สินค้าที่คล้ายกัน</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({
        goScreen: 'Same_StoreScreen', setData: { type_product: 'same_product', id_type: id_type, id_store: id_store }, navigation
      })}>
        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    {dataService2 && <FlatProduct {...props} dataService={dataService2} numberOfColumn={1} nameFlatProduct='DetailScreen' mode='row3'
      nameSize={14} priceSize={15} dispriceSize={15} />}
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Might_like
export let Might_like = (props) => {
  const { dataService, navigation } = props;
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService2, setDataService2] = useState(undefined);
  var dataBody;
  var id_type;
  var id_store;
  dataService?.product_data?.map((item) => {
    id_type = item.id_type;
    id_store = item.id_store;
    dataBody = {
      id_type: item.id_type,
      id_store: item.id_store,
      type_product: "youlike",
    };
  });
  let getDataSource = value => { setActiveDataService(false); setDataService2(value); };
  useEffect(() => {
    activeDataService && dataBody !== undefined && GetServices({
      uriPointer: `${finip}/product/product_other_mobile`, dataBody, getDataSource: value => getDataSource(value)
    });
  }, [activeDataService]);
  return <View style={stylesMain.FrameBackground}>
    <View style={stylesMain.FrameBackgroundTextBox}>
      <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>คุณอาจชอบสิ่งนี้</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({
        goScreen: 'Same_StoreScreen', setData: { type_product: 'youlike', id_type: id_type, id_store: id_store }, navigation
      })}>
        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
    <View style={stylesDetail.PopularProductBoxProduct}>
      {dataService2 && <ProductBox {...props} dataService={dataService2} mode='row2colall' pointerUrl='DetailScreen' pointerid_store
        nameSize={14} priceSize={15} dispriceSize={15} />}
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export let Buy_bar = (props) => {
  const { currentUser, sendBuyProduct, dataService, navigation, } = props;
  let BuyProductTab = (typeSelect) => sendBuyProduct(typeSelect);
  let dataServicesTab = dataService?.product_data?.map((item, index) => <View style={stylesDetail.Buy_bar} key={index}>
    <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
      <TouchableOpacity activeOpacity={1} onPress={() => currentUser ?
        NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation }) :
        NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
        <IconAntDesign name='message1' size={22} style={[stylesMain.ItemCenterVertical]} />
        <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>แชท</Text>
      </TouchableOpacity>
    </View>
    <Text style={{ fontSize: 30 }}>|</Text>
    <TouchableOpacity onPress={() =>
      NavigationNavigate({ goScreen: 'StoreScreen', setData: { id_store: item.id_store }, navigation })}>
      <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
        <IconFontisto name='shopping-store' size={22} style={stylesMain.ItemCenterVertical} />
        <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText, stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
          ร้านค้า</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => currentUser ?
      BuyProductTab('addcart') : NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
      <View style={[stylesDetail.Buy_bar_Iconshop, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
        <IconAntDesign name='shoppingcart' size={25} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontCenter, { marginLeft: 10 }]}>เพิ่มลงรถเข็น</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => currentUser ?
      BuyProductTab('gocart') : NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
      <View style={[stylesDetail.Buy_bar_IconBuy, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
        <Text style={[stylesDetail.Buy_bar_IconBuytext, stylesFont.FontFamilyText, stylesFont.FontCenter]}>ซื้อเลย</Text>
      </View>
    </TouchableOpacity>
  </View>);
  return dataServicesTab;
};
///----------------------------------------------------------------------------------------------->>>> Show_Image
// export let Show_Image = (props) => {
//   const { showItem, showImage } = props;
//   var dataMySQL = () => {
//     var dataArrayMySQL = new Array();
//     showItem &&
//       showItem.map((item) => {
//         var items = { uri: `${finip}/${item.image_full_path}/${item.image}` };
//         dataArrayMySQL.push(items);
//       });
//     return dataArrayMySQL;
//   };
//   return (
//     <Modal
//       animationType='fade'
//       transparent={true}
//       visible={true}
//       onRequestClose={() => {
//         showImage(false);
//       }}>
//       <View style={[{ height, width }]}>
//         <SmartGallery
//           images={dataMySQL()} />
//       </View>
//     </Modal>
//   );
// };
///----------------------------------------------------------------------------------------------->>>>
export let Coupon_Detail_BottomSheet = (props) => {
  const { dataService, cokie, currentUser, get_id_promotion, } = props;
  const [activeId_promotion, setActiveId_promotion] = useState(true);
  const [id_promotion, setId_promotion] = useState(undefined);
  var dataBody;
  var uri;
  currentUser && id_promotion && (
    uri = `${finip}/coupon/save_coupon_shop`,
    dataBody = {
      id_customer: currentUser.id_customer,
      id_promotion_shop: id_promotion
    }
  );
  let saveTicket = (value) => { setActiveId_promotion(true); setId_promotion(value); };
  let getData = (value) => {
    if (value.Status == 'Add Coupon Completed !') { get_id_promotion(value.Status); setActiveId_promotion(false); };
  };
  useEffect(() => {
    dataBody && id_promotion && activeId_promotion && GetServices({
      uriPointer: uri, dataBody, Authorization: cokie, getDataSource: (value) => getData(value)
    });
  }, [dataBody && id_promotion && activeId_promotion])
  return <View style={{
    width: '100%', height: 100, borderWidth: 1, backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#C0DBF9',
    flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 5, marginVertical: 10,
    opacity: dataService.ticket_picked == 'ticket_picked' ? 0.6 : 1,
  }}>
    <View style={{ width: '60%' }}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.name}</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.detail}</Text>
    </View>
    <View style={{ justifyContent: 'space-between' }}>
      <View style={{ backgroundColor: '#C4C4C4' }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>2020.02.22-2020.03.01</Text>
      </View>
      <TouchableOpacity activeOpacity={dataService.ticket_picked == 'ticket_picked' ? 1 : 0.2} onPress={() =>
        dataService.ticket_picked == 'ticket_picked' ? null : saveTicket(dataService.id_promotion)}>
        <View style={[stylesMain.ItemCenter, {
          backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : mainColor, paddingHorizontal: 10, borderRadius: 5
        }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
            {dataService.ticket_picked == 'ticket_picked' ? 'เก็บคูปองแล้ว' : 'เก็บคูปอง'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>;
};