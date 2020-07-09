///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View, TouchableOpacity, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData,  setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
import stylesFont from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { FlashSale_Product } from './FlashSaleScreen';
import { Slide } from './src_Promotion/DealScreen';
import { GetServices, TabBar } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData,  setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(HighlightScreen);
function HighlightScreen(props) {
  const { getFetchData } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  let getUpdateIndex = (value) => setSelectedIndex(value.selectedIndex);
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar1 {...props} backArrow titleHead='ไฮไลท์ประจำสัปดาห์' />
    <ScrollView stickyHeaderIndices={[2]}>
      <Slide {...props} dataService={undefined} />
      <Highlight_Brand />
      <Button_Bar {...props} dataService={getFetchData['publish_mobile']?.data} getUpdateIndex={value => getUpdateIndex(value)} />
      <Highlight_Product />
    </ScrollView>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export let Button_Bar = (props) => {
  const { dataService, getUpdateIndex } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  var item2 = [{ name: 'ทั้งหมด' }];
  let updateIndex = value => { getUpdateIndex(value.selectedIndex); setSelectedIndex(value.selectedIndex); };
  dataService?.category?.map((value) => item2.push({ name: value.name }));
  return <View style={{ width: '100%', height: 40, backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderWidth: 1, }}>
    <ScrollView horizontal>
      <TabBar sendData={value => updateIndex(value)} item={item2} noLimit numberBox numberOfLines={1} activeColor={'#fff'}
        activeFontColor={'#111'} tagBottomColor={mainColor} tagBottom type='tag' />
    </ScrollView>
  </View>;
}
///----------------------------------------------------------------------------------------------->>>>
export let Highlight_Product = (props) => {
  const [activeDataService, setActiveDataService] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var dataBody = { type: 'sale' };
  var uri = `${ip}/MySQL/DataServiceMain.php`;
  activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
  let getData = value => { setActiveDataService(false); setDataService(value); };
  let dataNewHighlight = (dataService?.map((item, index) => {
    var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
    return <>
      <View style={[stylesMain.FlexRow, stylesMain.FrameBackground]}>
        <View style={[stylesTopic.FlashSale_ProductBox_Image, { margin: 5 }]}>
          <FastImage source={{ uri: dataMySQL, }} style={stylesMain.BoxProduct1Image} />
        </View>
        <View style={{ width: '50%' }}>
          <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>{item.name}</Text>
          <NumberFormat value={item.full_price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
            <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyBoldBold, { fontSize: 14, marginLeft: 10, }]}>
              {value}</Text>} />
        </View>
        <View style={{ width: '20%', justifyContent: 'flex-end' }}>
          <TouchableOpacity>
            <View style={[stylesTopic.FlashSale_ProductBox_Icon]}>
              <IconAntDesign RightItem name="shoppingcart" size={30} color='#FFFFFF' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>;
  }));
  return <View>
    <View style={{ alignItems: 'center' }}>
      <View>
        {dataNewHighlight}
      </View>
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Highlight_Brand = (props) => <View style={{ marginVertical: 10 }}>
  <View style={{ height: 100, width: '100%', flexDirection: 'row', justifyContent: 'space-around', }}>
    <View style={{ width: '48%', }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_banner01.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={{ width: '48%', }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_banner01.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
  </View>
  <ScrollView horizontal style={{ marginTop: 10 }}>
    <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
    <View style={{ height: 60, width: 120, marginLeft: 5, borderColor: '#ECECEC', borderWidth: 1 }}>
      <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, }} resizeMode={FastImage.resizeMode.stretch} />
    </View>
  </ScrollView>
</View>;