///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
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
import { AppBar1, ExitAppModule, Second_product, Slide } from '../MainScreen';
import { Button_Bar, } from './DealScreen';
import { GetServices, ProductBox } from '../../src/tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class The_BestFinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  render() {
    const { navigation } = this.props
    const { dataService, } = this.state
    var uri = finip + '/coupon/superfin'
    // console.log('dataService')
    // console.log(dataService)
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
        <AppBar1 titleHead={'สุดคุ้มสุดฟิน'} backArrow searchBar chatBar navigation={navigation} />
        <ScrollView>
          <Slide banner={dataService && dataService.banner} />
          <Fin_sale navigation={navigation} dataService={dataService && dataService.product_discount80} />
          <Store_Sale navigation={navigation} dataService={dataService && dataService} />
          <Product_Cool navigation={navigation} dataService={dataService && dataService.product_cool} />
          {/* <Second_product navigation={navigation} loadData={{
            product_second: dataService && dataService.product_sec, list_store2_1: dataService && dataService.discount_sec_xl,
            list_store2_2: dataService && dataService.discount_sec_l, list_store2_3: dataService && dataService.discount_sec_m,
            mobile_bar: dataService && dataService.mobile_bar, mobile_slide: dataService && dataService.mobile_slide,
          }} Header_Second /> */}
          <Second_Store navigation={navigation} dataService={dataService && dataService} />
        </ScrollView>
        <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
          <Button_Bar navigation={navigation} />
        </View>
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Fin_sale
export class Fin_sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation, dataService } = this.props
    return (
      <>
        <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 180 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>Fin จัดหนักลดสูงสุด 80 % </Text>
          </View>
          <View style={stylesDeal.Fin_sale_BoxHead}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <ScrollView horizontal>
            <View style={stylesDeal.Fin_sale_BoxProduct}>
              {
                dataService ?
                  <ProductBox dataService={dataService} navigation={navigation} mode='row3col1'
                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                  /> :
                  null
              }
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Store_Sale
export class Store_Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Store_Sale_Box() {
    const { dataService } = this.props
    // console.log('Store_Sale')
    // console.log(dataService)
    var discount_xl
    dataService && dataService.discount_xl.map((value) => {
      return discount_xl = [finip, value.image_path, value.image].join('/');
    })
    var discount_l = []
    dataService && dataService.discount_l.map((value) => {
      return discount_l.push([finip, value.image_path, value.image].join('/'));
    })
    var discount_m = []
    dataService && dataService.discount_m.map((value) => {
      return discount_m.push([finip, value.image_path, value.image].join('/'));
    })
    return (
      <View style={stylesDeal.Store_Sale}>
        <View style={stylesDeal.Store_Sale_Box}>
          {/* BoxA */}
          <View style={stylesDeal.Store_Sale_BoxA}>
            <View style={stylesDeal.Store_Sale_BoxA_Carousel}>
              <FastImage style={stylesDeal.Store_Sale_Image}
                source={{
                  uri: discount_xl,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
            <View style={stylesDeal.Store_Sale_BoxA_Boximage}>
              {
                discount_m && discount_m.map((value, index) => {
                  return (
                    <View key={index} style={stylesDeal.Store_Sale_BoxA_image}>
                      <FastImage style={stylesDeal.Store_Sale_Image}
                        source={{
                          uri: value,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                    </View>
                  )
                })
              }
            </View>
          </View>
          {/* BoxB */}
          <View style={stylesDeal.Store_Sale_BoxB_Boximage}>
            {
              discount_l && discount_l.map((value, index) => {
                return (
                  <View key={index} style={stylesDeal.Store_Sale_BoxB_image}>
                    <FastImage style={stylesDeal.Store_Sale_Image}
                      source={{
                        uri: value,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View>
        <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 100 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านนี้มีของลด </Text>
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
    };
  }

  render() {
    const { dataService } = this.props
    // console.log('COOL')
    // console.log(dataService)
    return (
      <>
        <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 140 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>สินค้าราคาโคตรคูล </Text>
          </View>
          <View style={[stylesDeal.Fin_sale_BoxHead, { marginTop: -10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
          </View>
          <ScrollView horizontal>
            <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
              {
                dataService ?
                  <ProductBox dataService={dataService} typeip='fin' mode='row3col2'
                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                  /> :
                  null
              }
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Store
export class Second_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  // _renderItem = ({ item, index }) => {
  //   var dataMySQL = [finip, item.image_path, item.image].join('/');
  //   return (
  //     <View key={index}>
  //       <FastImage
  //         source={{
  //           uri: dataMySQL,
  //         }}
  //         style={stylesDeal.Second_Store_Slide_image}
  //       />
  //       <View style={stylesDeal.Second_Store_Slide_BoxText}>
  //         <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ร้าน K.O.D สินค้ามือสอง ลดสูงสุด 50 %</Text>
  //       </View>
  //     </View>
  //   );
  // }
  get Second_StoreBody() {
    const { dataService } = this.props
    // console.log('StoreBody')
    // console.log(dataService)
    var discount_sec_xl
    dataService && dataService.discount_sec_xl.map((value) => {
      return discount_sec_xl = [finip, value.image_path, value.image].join('/');
    })
    var discount_sec_l = []
    dataService && dataService.discount_sec_l.map((value) => {
      return discount_sec_l.push([finip, value.image_path, value.image].join('/'));
    })
    var discount_sec_m = []
    dataService && dataService.discount_sec_m.map((value) => {
      return discount_sec_m.push([finip, value.image_path, value.image].join('/'));
    })
    return (
      <View style={stylesDeal.Second_Store}>
        <View style={stylesDeal.Second_Store_SlideA}>
          <FastImage style={stylesDeal.Store_Sale_Image}
            source={{
              uri: discount_sec_xl,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
        <View style={stylesDeal.Second_Store_SlideB}>
          {
            discount_sec_l && discount_sec_l.map((value, index) => {
              return (
                <View key={index} style={stylesDeal.Second_Store_SlideB_Box}>
                  <FastImage
                    style={stylesMain.BoxStore1Image}
                    source={{
                      uri: value,
                    }} />
                </View>
              )
            })
          }
        </View>
        <View style={{ height: 100, marginVertical: 10, width: '90%', flexDirection: 'row', }}>
          {
            discount_sec_m && discount_sec_m.map((value, index) => {
              return (
                <View key={index} style={{ width: '35%', height: '100%', }}>
                  <FastImage style={stylesDeal.Store_Sale_Image}
                    source={{
                      uri: value,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
  render() {
    const { dataService, navigation } = this.props
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#95D370', marginLeft: -3, width: 140 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา </Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
        </View>
        {this.Second_StoreBody}
        <View style={stylesDeal.BoxText_Row}>
          <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', marginLeft: -3, width: 140 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา </Text>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, stylesDeal.Text_EndB, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
        </View>
        <ScrollView horizontal>
          <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
            {
              dataService ?
                <ProductBox dataService={dataService.product_sec} navigation={navigation} mode='row3col2'
                  pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                /> :
                null
            }
          </View>
        </ScrollView>

      </View>
    );
  }
}