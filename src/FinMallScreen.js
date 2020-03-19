///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, TabBar, ProductBox, SlideTab2, } from './tools/Tools';
import { Slide, } from './src_Promotion/DealScreen';
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
    var uri = finip + '/home/category_mobile';
    const { navigation } = this.props
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar1 backArrow navigation={this.props.navigation} titleHead='FIN Mall' />
            <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
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
  render() {
    const navigation = this.props
    return (
      <View>
        <Slide />
        <FinMall_Product navigation={navigation} />
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class FinMall_Product extends React.Component {
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
    const { loadData, navigation } = this.props
    return (
      <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
          <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
            Fin Mall</Text>
          <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'FinMallScreen', { selectedIndex: 1 })}>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
              ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {
            loadData &&
            <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
              pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
            />
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
    };
  }

  render() {
    return (
      <View>
        <Text> FIN Supermarket </Text>
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
    const { navigation } = this.props
    const { dataService, sliderVisible } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible
    ) {
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
    const { navigation } = this.props
    const { dataService, sliderVisible } = this.state
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
            dataService &&
            <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' />
          }
        </ScrollView>
        <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}