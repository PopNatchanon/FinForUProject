///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, AppBar1, BannerBar_ONE, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, ProductBox, SlideTab2, } from './tools/Tools';
import { Slide, } from './src_Promotion/DealScreen';
import { Store_Detail, } from './Recommend_Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class SecondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  get PathList() {
    const { navigation } = this.props;
    const selectedIndex = navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar leftBar='backarrow' navigation={navigation} />
            <Second_Product navigation={navigation} />
          </SafeAreaView>
        )
      case 1:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar1 titleHead={'ร้านค้ามือสองที่แนะนำ'} backArrow navigation={navigation} />
            <Secon_Store />
          </SafeAreaView>
        )
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        {this.PathList}
        <ExitAppModule navigation={navigation} />
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Product
export class Second_Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDataService: true,
      dataService: [],
      sliderVisible: false,
    };
  }
  setSlider = (sliderVisible) => {
    this.setState({ sliderVisible })
  }
  getData = (dataService) => {
    this.setState({ activeDataService: false, dataService })
  }
  render() {
    const { navigation } = this.props
    const { activeDataService, dataService, sliderVisible } = this.state
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
    activeDataService == true && GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
    return (
      <View style={{ flex: 1 }}>
        <ScrollView stickyHeaderIndices={[5]}>
          <Slide />
          <Second_Store navigation={navigation} />
          <Second_Product_Brand navigation={navigation} />
          <BannerBar_ONE />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
          {
            dataService &&
            <TodayProduct
              noTitle
              navigation={navigation}
              loadData={dataService}
              typeip
              prepath='mysql' />
          }
        </ScrollView>
        <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Store
export class Second_Store extends React.Component {
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
        navigation.push(value, value2)
  }
  render() {
    return (
      <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
            ร้านค้ามือสองที่แนะนำ</Text>
        </View>
        <View style={stylesMain.FlexRow}>
          <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')}>
            <View style={stylesMain.BoxStore1Box}>
              <FastImage
                style={stylesMain.BoxStore1Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                }}
                resizeMode={FastImage.resizeMode.stretch} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')}>
            <View style={stylesMain.BoxStore1Box}>
              <FastImage
                style={stylesMain.BoxStore1Image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                }}
                resizeMode={FastImage.resizeMode.stretch} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Second_Product_Brand
export class Second_Product_Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDataService: true,
      dataService: [],
    };
  }
  getData = (dataService) => {
    this.setState({ activeDataService: false, dataService })
  }
  render() {
    const { navigation } = this.props
    const { dataService } = this.state
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    activeDataService == true && GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
    return (
      <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
              สินค้ามือสองแบรนด์ดัง</Text>
          </View>
        </View>
        <ScrollView horizontal>
          {
            dataService &&
            <ProductBox
              dataService={dataService}
              navigation={navigation}
              typeip='ip'
              mode='row4col1'
              prepath='mysql'
              pointerUrl='DetailScreen'
              pointerid_store
              nameSize={11}
              priceSize={12}
              dispriceSize={12} />
          }
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Secon_Store
export class Secon_Store extends React.Component {
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
            <View style={{
              backgroundColor: '#0A55A6', width: 170, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5,
            }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สินค้าที่คุณอาจชอบ</Text>
            </View>
          </View>
          {/* <Store_Detail /> */}
        </ScrollView>
      </View>
    );
  }
}