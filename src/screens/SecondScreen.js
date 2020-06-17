///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, AppBar1, BannerBar_ONE, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, ProductBox, SlideTab2, NavigationNavigateScreen, FlatProduct, } from '../customComponents/Tools';
import { Slide, } from './src_Promotion/DealScreen';
import { Store_Detail, } from './Recommend_Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData,
  getFetchData: state.singleFetchDataFromService,
  activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({
  checkCustomer,
  fetchData,
  multiFetchData,
  setActiveFetch,
  setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)
function SecondScreen(props) {
  const { navigation, route } = props
  const selectedIndex = route.params?.selectedIndex
  let PathList = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar {...props} backArrow cartBar />
            <Second_Product {...props} />
          </SafeAreaView>
        )
      case 1:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar1 {...props} titleHead={'ร้านค้ามือสองที่แนะนำ'} backArrow />
            <Secon_Store />
          </SafeAreaView>
        )
    }
  }
  return (
    <View style={{ flex: 1 }}>
      {PathList()}
      <ExitAppModule {...props} />
    </View>
  );
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
    var uri = `${ip}/mysql/DataServiceMain.php`;
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
          <Second_Store {...this.props} />
          <Second_Product_Brand {...this.props} />
          <BannerBar_ONE />
          <View style={{ marginBottom: 10 }}></View>
          <Button_Bar setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
          {
            dataService &&
            <TodayProduct
              {...this.props}
              noTitle
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
  render() {
    const { navigation } = this.props
    return (
      <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
            ร้านค้ามือสองที่แนะนำ</Text>
        </View>
        <View style={stylesMain.FlexRow}>
          <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'Recommend_Store', navigation })}>
            <View style={stylesMain.BoxStore1Box}>
              <FastImage
                style={stylesMain.BoxStore1Image}
                source={{
                  uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`,
                }}
                resizeMode={FastImage.resizeMode.stretch} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'Recommend_Store', navigation })}>
            <View style={stylesMain.BoxStore1Box}>
              <FastImage
                style={stylesMain.BoxStore1Image}
                source={{
                  uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`,
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
    var uri = `${ip}/mysql/DataServiceMain.php`;
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
        {
          dataService &&
          <FlatProduct {...this.props} custumNavigation='Second_Product_Brand' dataService={dataService}
            mode='row4' nameFlatProduct='Second_Product_Brand' nameSize={11} priceSize={12} dispriceSize={12} />
        }
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
              backgroundColor: mainColor, width: 170, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5,
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