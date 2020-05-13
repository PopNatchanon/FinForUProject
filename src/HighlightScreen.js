///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View, TouchableOpacity, Text,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
import stylesFont from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { FlashSale_Product } from './FlashSaleScreen';
import { Slide } from './src_Promotion/DealScreen';
import { GetServices, TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from './navigator/IpConfig';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Main
export default class HighlightScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow navigation={navigation} titleHead='ไฮไลท์ประจำสัปดาห์' />
        <ScrollView stickyHeaderIndices={[2]}>
          <Slide />
          <Highlight_Brand />
          <Button_Bar />
          <Highlight_Product />
        </ScrollView>
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Button_Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      dataService: [],
    };
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  updateIndex(value) {
    const { getUpdateIndex } = this.props
    getUpdateIndex(value.selectedIndex)
    this.setState({ selectedIndex: value.selectedIndex })
  }
  render() {
    const { category } = this.props
    const { dataService } = this.state
    var uri = finip + '/home/category_mobile';
    var item2 = [{
      name: 'ทั้งหมด'
    }]
    dataService && dataService.map((item) => { return item2.push({ name: item.name }) })
    category && category.map((item) => { return item2.push({ name: item.name }) })
    category == undefined &&
      GetServices({ uriPointer: uri, getDataSource: this.getData.bind(this), })
    return (
      <View style={{ width: '100%', height: 40, backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderWidth: 1, }}>
        <ScrollView horizontal>
          <TabBar
            sendData={this.updateIndex.bind(this)}
            item={item2}
            noLimit
            numberBox
            numberOfLines={1}
            activeColor={'#fff'}
            activeFontColor={'#111'}
            tagBottomColor={'#0A55A6'}
            tagBottom
            type='tag' />
        </ScrollView>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Highlight_Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeDataService: true,
      dataService: [],
    }
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ activeDataService: false, dataService })
  }
  dataNewHighlight() {
    const { dataService } = this.state
    return dataService.map((item, index) => {
      var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
      return (
        <>
          <View style={[stylesMain.FlexRow, stylesMain.FrameBackground]}>
            <View style={[stylesTopic.FlashSale_ProductBox_Image, { margin: 5 }]}>
              <FastImage
                source={{
                  uri: dataMySQL,
                }}
                style={stylesMain.BoxProduct1Image}
              />
            </View>
            <View style={{ width: '50%' }}>
              <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>
                {item.name}</Text>
              <NumberFormat
                value={item.full_price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'฿'}
                renderText={value =>
                  <Text style={[
                    stylesMain.BoxProduct1ImagePrice,
                    stylesFont.FontFamilyBoldBold, {
                      fontSize: 14, marginLeft: 10,
                    }
                  ]}>
                    {value}</Text>
                } />
            </View>
            <View style={{ width: '20%', justifyContent: 'flex-end' }}>
              <TouchableOpacity>
                <View style={[stylesTopic.FlashSale_ProductBox_Icon]}>
                  <IconAntDesign RightItem name="shoppingcart" size={30} color='#FFFFFF' />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )
    })
  }
  render() {
    const { activeDataService } = this.state
    var uri = ip + '/mysql/DataServiceMain.php';
    var dataBody = {
      type: 'sale'
    };
    activeDataService == true && GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData, })
    return (
      <View>
        <View style={{ alignItems: 'center' }}>
          <View>
            {this.dataNewHighlight()}
          </View>
        </View>
      </View>
    )
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Highlight_Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ marginVertical: 10 }}>
        <View style={{ height: 100, width: '100%', flexDirection: 'row', justifyContent: 'space-around', }}>
          <View style={{ width: '48%', }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_banner01.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ width: '48%', }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_banner01.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
        </View>
        <ScrollView horizontal style={{ marginTop: 10 }}>
          <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand04.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand03.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand02.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand01.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
            <FastImage
              style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
              source={{
                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand05.jpg',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
