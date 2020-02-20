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
import { GetServices, ProductBox } from './tools/Tools';
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
      dataService: [],
    };
    this.getData = this.getData.bind(this)
    this.setSlider = this.setSlider.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  setSlider(value) {
    this.setState({ sliderVisible: value })
  }
  render() {
    const { dataService, sliderVisible } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    return (
      <View style={{ flex: 1 }}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <ScrollView>
          <Slide />
          <Second_Store navigation={navigation} />
          <Second_Product_Brand navigation={navigation} />
          <BannerBar_ONE />
          <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
          {
            dataService ?
              <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
              null
          }
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
    const { dataService } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
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
          {
            dataService ?
              <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row4col1' prepath='mysql'
                pointerUrl='DetailScreen' pointerid_store nameSize={10} priceSize={12} dispriceSize={10}
              /> :
              null
          }
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
