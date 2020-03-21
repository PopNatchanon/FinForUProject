///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import SlidingView from 'rn-sliding-view';
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, Recommend_Brand, } from './MainScreen';
import { Slide, } from './src_Promotion/DealScreen';
import { GetServices, TabBar, ProductBox, SlideTab2, } from './tools/Tools';
import { Button_Bar, PricesSlide, SlideTab, } from './ExclusiveScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FinMallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
      dataService: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, loadData } = this.props
    if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible })
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.navigate(value, value2)
  }
  PathList() {
    const { navigation } = this.props
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar1 backArrow navigation={this.props.navigation} titleHead='FIN Mall' />
            <FinMall navigation={navigation} />
          </SafeAreaView>
        )
      case 1:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar1 backArrow navigation={this.props.navigation} titleHead='FIN Mall VIP' />
            <FIN_Mall_VIP navigation={navigation} />
          </SafeAreaView>
        )
    }
  }
  render() {
    return (
      <View style={stylesMain.SafeAreaView}>
        {this.PathList()}
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class FinMall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        navigation.navigate(value, value2)
  }
  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <Slide />
        <FinMall_Product navigation={navigation} />
        <FIN_Supermarket />
        <Brand_Supermarket />
        <Recommend_Brand navigation={navigation} />
        <Product_Shop />
      </ScrollView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class FinMall_Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    const { dataService } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      dataService !== nextState.dataService
    ) {
      return true
    }
    return false
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.navigate(value, value2)
  }
  render() {
    const { navigation } = this.props
    const { dataService } = this.state
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'todayproduct'
    }; return (
      <View style={stylesMain.FrameBackground}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
            Fin Mall
          </Text>
          <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'FinMallScreen', { selectedIndex: 1 })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            dataService &&
            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row3col1' prepath='mysql'
              pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
          }
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class FIN_Supermarket extends React.Component {
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
      type: 'todayproduct'
    };
    return (
      <View>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesMain.FrameBackground}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
            FIN_Supermarket </Text>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
              <TouchableOpacity style={{ backgroundColor: '#9BB7D6', width: '32%', }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', color: '#063B76' }]}>
                  Global Items</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#AAC48A', width: '32%', }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', color: '#427007' }]}>
                  ของใช้ประจำวัน</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#D6B59B', width: '32%', }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', color: '#783907' }]}>
                  Skincare</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal>
              <View style={[stylesMain.ProductForYouFlexBox, { height: 370 }]}>
                {
                  dataService ?
                    <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row3col2' prepath='mysql'
                      pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                    /> :
                    null
                }
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Brand_Supermarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: 100, marginTop: 10 }}>
          <View style={{ width: '23%', }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/Donki.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ width: '23%', }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/Prime-Supermarket.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ width: '48%', backgroundColor: '#FFFFFF' }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/logo-maxvalu.png',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: 100, marginTop: 10 }}>
          <View style={{ width: '48%', backgroundColor: '#FFFFFF' }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/logo-foodland.png',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ width: '23%', backgroundColor: '#FFFFFF' }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/Donki.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ width: '23%', backgroundColor: '#FFFFFF' }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/download.png',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
        </View>
        <View style={stylesMain.FrameBackground}>
          <View style={{ height: 150, width: '100%' }}>
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop6.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Product_Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
      dataService: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService, sliderVisible } = this.state
    const { navigation } = this.props
    if (dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible })
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  render() {
    const { dataService } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'todayproduct'
    };
    return (
      <View>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>สินค้าที่คุณควรช้อป!!!</Text>
        {
          dataService ?
            <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
            null
        }
      </View>
    );
  }
}

///----------------------------------------------------------------------------------------------->>>>
export class FIN_Mall_VIP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVisible: false,
      dataService: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService, sliderVisible } = this.state
    const { navigation } = this.props
    if (dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible })
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  render() {
    const { dataService, sliderVisible } = this.state
    const { navigation } = this.props
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'todayproduct'
    };
    const data = [{
      title: 'หมวดหมู่',
      subtitle: [{
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
    }, {
      title: 'แบรนด์',
      subtitle: [{
        name: 'BP world'
      }, {
        name: 'Tokyo boy'
      }, {
        name: 'JJ'
      }, {
        name: 'ETONWEAG'
      }]
    }]
    return (
      <SafeAreaView>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
          {
            dataService ?
              <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
              null
          }
        </ScrollView>
        <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}