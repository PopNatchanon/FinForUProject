///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, AppBar1, BannerBar_ONE, TodayProduct, } from './MainScreen';
import { Button_Bar, PricesSlide, SlideTab, } from './ExclusiveScreen';
import { GetServices } from './tools/Tools';
import { Slide } from './src_Promotion/DealScreen';
import { Store_Detail } from './Recommend_Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  PathList() {
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar leftBar='backarrow' navigation={this.props.navigation} />
            <Second_Product navigation={this.props.navigation} />
          </SafeAreaView>
        )
      case 1:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar1 titleHead={'ร้านค้ามือสองที่แนะนำ'} backArrow navigation={this.props.navigation} />
            <Secon_Store />
          </SafeAreaView>
        )
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.PathList()}
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Product
export class Second_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
    };
    this.setSlider = this.setSlider.bind(this)
  }
  setSlider(value) {
    this.setState({ sliderVisible: value })
  }
  render() {
    const { sliderVisible } = this.state
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Slide />
          <Second_Store navigation={this.props.navigation} />
          <Second_Product_Brand navigation={this.props.navigation} />
          <BannerBar_ONE />
          <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
          <TodayProduct noTitle navigation={this.props.navigation} />
        </ScrollView>
        <SlidingView
          disableDrag
          componentVisible={sliderVisible}
          containerStyle={{
            backgroundColor: null,
            justifyContent: 'center',
            alignContent: 'stretch',
            width: '100%'
          }}
          position="right"
          changeVisibilityCallback={() => this.setState({ sliderVisible: !sliderVisible })}
        >
          <View style={stylesMain.FlexRow}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ sliderVisible: !sliderVisible })}
            >
              <View style={stylesTopic.BackgroundLeft}></View>
            </TouchableOpacity>
            <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNB]}>
              <View>
                <ScrollView>
                  <SlideTabGet />
                </ScrollView>
                <View style={[stylesMain.FlexRow, { height: 70 }]}>
                  <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                      รีเซ็ต</Text>
                  </View>
                  <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#fff' }]}>
                      เสร็จสิ้น</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SlidingView>
      </View>
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
  render() {
    return (
      <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
            ร้านค้ามือสองที่แนะนำ</Text>
        </View>
        <View style={stylesMain.FlexRow}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Store')}>
            <View style={stylesMain.BoxStore1Box}>
              <FastImage
                style={stylesMain.BoxStore1Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Store')}>
            <View style={stylesMain.BoxStore1Box}>
              <FastImage
                style={stylesMain.BoxStore1Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Product_Brand
export class Second_Product_Brand extends Component {
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
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    let dataFlashSale = this.state.dataService.map((item, indexs) => {
      var throughsale = Number(item.full_price) + (item.full_price * 0.5)
      var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
      return (
        <TouchableOpacity
          activeOpacity={1}
          key={indexs}
          onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}
        >
          <View style={stylesMain.BoxProduct5Box} >
            <View style={stylesMain.BoxProduct5ImageofLines}>
              <FastImage
                source={{
                  uri: dataMySQL,
                }}
                style={stylesMain.BoxProduct5Image}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={{ height: 55, paddingHorizontal: 3 }}>
              <View style={[stylesMain.BoxProduct5NameofLines]}>
                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize8]}>
                  {item.name}</Text>
              </View>
              <View style={[stylesMain.BoxProduct5PriceofLines, stylesMain.FlexRow]}>
                <NumberFormat
                  value={item.full_price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={value =>
                    <Text style={[
                      stylesMain.BoxProduct5ImagePrice, stylesFont.FontSize7, stylesFont.FontFamilyBold,
                    ]}>
                      {value + ' '}</Text>
                  }
                />
                <NumberFormat
                  value={throughsale}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={value =>
                    <Text style={[
                      stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                      { marginTop: 2 }
                    ]}>
                      {value}</Text>
                  }
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    })
    return (
      <View style={stylesMain.FrameBackground2}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesMain.FrameBackgroundTextBox}>
          <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
              สินค้ามือสองแบรนด์ดัง</Text>
          </View>
        </View>
        <ScrollView horizontal>
          {dataFlashSale}
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> SlideTabGet
export class SlideTabGet extends Component {
  render() {
    const item = [{
      name: 'กระเป๋าสะพายข้าง'
    }, {
      name: 'กระเป๋าสะพายหลัง'
    }, {
      name: 'กระเป๋าสตางค์'
    }, {
      name: 'กระเป๋าใส่นามบัตร'
    }, {
      name: 'กระเป๋าใส่เหรียญ'
    }, {
      name: 'กระเป๋าถือ'
    }, {
      name: 'อื่นๆ'
    }]
    const item2 = [{
      name: 'BP world'
    }, {
      name: 'Tokyo boy'
    }, {
      name: 'JJ'
    }, {
      name: 'ETONWEAG'
    }]
    return (
      <View>
        <View style={{ width: '100%' }}>
          <SlideTab Title='หมวดหมู่' item={item} />
          <SlideTab Title='แบรนด์' item={item2} />
          <PricesSlide />
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>> Secon_Store
export class Secon_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Slide />
          <View style={{ alignItems: 'center', marginTop: 10, }}>
            <View style={{ backgroundColor: '#0A55A6', width: 170, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สินค้าที่คุณอาจชอบ</Text></View>
          </View>
          <Store_Detail />
          <Store_Detail />
          <Store_Detail />
          <Store_Detail />
        </ScrollView>
      </View>
    );
  }
}
