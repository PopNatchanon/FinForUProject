///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  ExitAppModule, TodayProduct, } from '../../Main/Main';
import { GetServices } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrder);
function CompleteOrder(props) {
  const { route } = props;
  const no_invoice = route.params?.no_invoice;
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [activeProduct, setActiveProduct] = useState(true);
  const [activeThank_you_bill, setActiveThank_you_bill] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  var dataBody = {
    id_customer: currentUser && currentUser.id_customer,
    no_invoice,
  };
  var dataBody2 = { type: 'product', };
  var uri = `${finip}/purchase_data/thank_you_bill`;
  var uri2 = `${ip}/mysql/DataServiceMain.php`;
  let getData = (value) => { setActiveThank_you_bill(false); setDataService(value); };
  let getData2 = (value) => { setActiveProduct(false); setDataService2(value); };
  let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
  useEffect(() => {
    activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
  }, [activeGetSource]);
  useEffect(() => {
    activeThank_you_bill && currentUser && currentUser.id_customer && cokie && GetServices({ Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'thank_you_bill', getDataSource: value => getData(value), });
  }, [activeThank_you_bill && currentUser && currentUser.id_customer && cokie]);
  useEffect(() => {
    activeProduct && GetServices({ uriPointer: uri2, dataBody: dataBody2, getDataSource: value => getData2(value), });
  }, [activeProduct]);
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar {...props} backArrow goToTop />
    <ScrollView>
      {dataService && <Customer_Product dataService={dataService} no_invoice={no_invoice} key={'Customer_Product'} />}
      {dataService2 && <TodayProduct {...props} noTitle loadData={dataService2} key={'TodayProduct'} />}
    </ScrollView>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Customer_Product
export let Customer_Product = (props) => {
  const { dataService, navigation, no_invoice } = props;
  return dataService.result.map((value) => {
    const dataMySQL = `${finip}/${value.image_path}/${value.image_main}`
    return <View>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: '#FFFFFF' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}> ขอบคุณสำหรับคำสั่งซื้อ </Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ {no_invoice} ของท่าน</Text>
      </View>
      <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 10, paddingBottom: 10, }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { textAlign: 'center', marginTop: 10 }]}>โปรดรอรับสินค้า</Text>
        <View style={{ backgroundColor: '#F8F8F8', width: '90%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 5, }}>
          <View style={{ height: 80, width: 80, backgroundColor: '#FFFFFF', borderColor: '#D7D7D7', borderWidth: 1, padding: 5, borderRadius: 5, }}>
            <FastImage style={{ height: '100%', width: '100%', }} source={{ uri: dataMySQL, }} resizeMode={FastImage.resizeMode.contain} />
          </View>
          <View style={{ width: '75%' }}>
            <Text numberOfLines={1} style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { marginLeft: 8 }]}>{value.name}</Text>
            {/* <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { textAlign: 'right' }]}>22 ม.ค.-24 ม.ค.</Text> */}
            <View style={{ backgroundColor: '#D7D7D7', width: '100%', height: 3, marginTop: 10, }}></View>
            <View style={{ alignItems: 'flex-end', margin: 10, }}>
              <TouchableOpacity>
                <View style={{ backgroundColor: mainColor, borderRadius: 5, paddingHorizontal: 15, paddingVertical: 5 }}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF', }]}>ดูคำสั่งซื้อ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สรุปคำสั่งซื้อ</Text>
        <View style={{ alignItems: 'center', }}>
          <View style={{ backgroundColor: '#F8F8F8', width: '95%', borderRadius: 5, padding: 10 }}>
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยอดรวม ({value.quantity} ชิ้น)</Text>
              <NumberFormat value={value.bill_total} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value2 =>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{value2}</Text>} />
            </View>
            <View style={{ backgroundColor: '#D7D7D7', width: '100%', height: 3, marginTop: 10, }}></View>
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>รวมทั้งสิ้น</Text>
              <NumberFormat value={value.bill_total} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value2 =>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>{value2}</Text>} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'popToTop', navigation })}>
            <View style={{ backgroundColor: mainColor, paddingHorizontal: 10, padding: 10, borderRadius: 5, }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ช้อปต่อไม่รอแล้วนะ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>พิเศษสำหรับคุณ</Text>
    </View>;
  });
};