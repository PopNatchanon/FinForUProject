///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
import { GetServices } from '../../../customComponents/Tools';
import { TodayProduct, } from '../../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6 } = stylesFont;
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrder);
function CompleteOrder(props) {
  const { route } = props;
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [activeProduct, setActiveProduct] = useState(true);
  const [activeThank_you_bill, setActiveThank_you_bill] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dataService, setDataService] = useState(undefined);
  const [dataService2, setDataService2] = useState(undefined);
  const dataBody = { id_customer: currentUser?.id_customer, no_invoice, };
  const dataBody2 = { type: 'product', };
  const getData = (v) => { setActiveThank_you_bill(false); setDataService(v); };
  const getData2 = (v) => { setActiveProduct(false); setDataService2(v); };
  const getSource = (v) => { setActiveGetSource(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
  const no_invoice = route.params?.no_invoice;
  const Props = { ...props, dataService, dataService2, no_invoice };
  const uri = `${finip}/purchase_data/thank_you_bill`;
  const uri2 = `${ip}/mysql/DataServiceMain.php`;
  useEffect(() => {
    activeGetSource && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, });
  }, [activeGetSource]);
  useEffect(() => {
    activeThank_you_bill && cokie && currentUser?.id_customer &&
      GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), showConsole: 'thank_you_bill', uriPointer: uri, });
  }, [activeThank_you_bill && cokie && currentUser?.id_customer]);
  useEffect(() => {
    activeProduct && GetServices({ dataBody: dataBody2, getDataSource: (v) => getData2(v), uriPointer: uri2, });
  }, [activeProduct]);
  return <SafeAreaView style={SafeAreaViews}>
    <AppBar {...Props} backArrow goToTop />
    <ScrollList {...Props} />
    <ExitApp {...Props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
  const { dataService, dataService2, } = props;
  return <ScrollView>
    {dataService && <Customer_Product {...props} />}
    {dataService2 && <TodayProduct {...props} noTitle loadData={dataService2} />}
  </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>> Customer_Product
export let Customer_Product = (props) => {
  const { dataService, no_invoice } = props;
  return dataService.result.map((v) => {
    const Image1 = { uri: `${finip}/${v.image_path}/${v.image_main}`, };
    return <View>
      <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', height: 150, justifyContent: 'center', }}>
        <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}> ขอบคุณสำหรับคำสั่งซื้อ </Text>
        <Text style={[FontFamilyBold, FontSize6]}>หมายเลขคำสั่งซื้อ {no_invoice} ของท่าน</Text>
      </View>
      <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 10, paddingBottom: 10, }}>
        <Text style={[FontFamilyBold, FontSize4, { marginTop: 10, textAlign: 'center', }]}>โปรดรอรับสินค้า</Text>
        <View style={
          { backgroundColor: '#F8F8F8', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '90%', }}>
          <View style={
            { backgroundColor: '#FFFFFF', borderColor: '#D7D7D7', borderRadius: 5, borderWidth: 1, height: 80, padding: 5, width: 80, }}>
            <FastImage resizeMode={FastImage.resizeMode.contain} source={Image1} style={{ height: '100%', width: '100%', }} />
          </View>
          <View style={{ width: '75%' }}>
            <Text numberOfLines={1} style={[FontSize6, FontFamilyText, { marginLeft: 8 }]}>{v.name}</Text>
            {/* <Text style={[FontSize6, FontFamilyText, { textAlign: 'right' }]}>22 ม.ค.-24 ม.ค.</Text> */}
            <View style={{ backgroundColor: '#D7D7D7', height: 3, marginTop: 10, width: '100%', }} />
            <View style={{ alignItems: 'flex-end', margin: 10, }}>
              <TouchableOpacity>
                <View style={{ backgroundColor: mainColor, borderRadius: 5, paddingHorizontal: 15, paddingVertical: 5 }}>
                  <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF', }]}>ดูคำสั่งซื้อ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, }}>
        <Text style={[FontFamilyBold, FontSize5]}>สรุปคำสั่งซื้อ</Text>
        <View style={{ alignItems: 'center', }}>
          <View style={{ backgroundColor: '#F8F8F8', borderRadius: 5, padding: 10, width: '95%', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
              <Text style={[FontFamilyText, FontSize6]}>ยอดรวม ({v.quantity} ชิ้น)</Text>
              <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v2) => <Text style={[FontFamilyText, FontSize6]}>{v2}</Text>}
                thousandSeparator value={v.bill_total} />
            </View>
            <View style={{ backgroundColor: '#D7D7D7', height: 3, marginTop: 10, width: '100%', }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
              <Text style={[FontFamilyBold, FontSize5]}>รวมทั้งสิ้น</Text>
              <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v2) => <Text style={[FontFamilyBold, FontSize5,
                { color: mainColor }]}>{v2}</Text>} thousandSeparator value={v.bill_total} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'popToTop', })}>
            <View style={{ backgroundColor: mainColor, borderRadius: 5, padding: 10, paddingHorizontal: 10, }}>
              <Text style={[FontFamilyText, FontSize5, { color: '#FFFFFF' }]}>ช้อปต่อไม่รอแล้วนะ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[FontFamilyText, FontSize5, { margin: 10 }]}>พิเศษสำหรับคุณ</Text>
    </View>;
  });
};