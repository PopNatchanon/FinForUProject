///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch } from '../../../customComponents';
import { ExitAppModule } from '../../Main/MainScreen';
import { From_Order_Box } from '../TotalOrder/Total_Order';
import { GetData, LoadingScreen, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
///----------------------------------------------------------------------------------------------->>>>
export default connect(mapStateToProps, mapDispatchToProps)(CancelScreen);
function CancelScreen(props) {
  const { route } = props;
  const selectedIndex = route.params?.selectedIndex;
  const [activeDataCustomer, setActiveDataCustomer] = useState(true);
  const [cokie, setCokie] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  let getSource = (value) => { setActiveDataCustomer(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
  useEffect(() => {
    activeDataCustomer && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true });
  }, [activeDataCustomer]);
  let PathList = () => {
    // const selectedIndex = 0
    switch (selectedIndex) {
      case 0:
        return <View>
          <CancelScreen_Product {...props} cokie={cokie} currentUser={currentUser} setLoading={value => setIsLoading(value)} />
        </View>;
      case 1:
        return <View>
          <CancelScreen_From />
        </View>;
    };
  };
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    {isLoading && <LoadingScreen />}
    <AppBar {...props} backArrow titleHead='ยกเลิกสินค้า' />
    <ScrollView>
      {PathList()}
    </ScrollView>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> CancelScreen_Product
export let CancelScreen_Product = (props) => {
  const { currentUser, cokie, setLoading } = props;
  const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
  const [dataService, setDataService] = useState(undefined);
  var uri = `${finip}/purchase_data/view_purchase`;
  var dataBody = { device: "mobile_device", id_customer: currentUser?.id_customer, type_purchase: 'cancel', };
  let getData = (value) => { setActiveSelectedIndex(false); setDataService(value); setLoading(false); };
  useEffect(() => {
    activeSelectedIndex && cokie && currentUser && GetFetch({
      Authorization: cokie, dataBody, getDataSource: value => getData(value), showConsole: 'view_purchase', uriPointer: uri,
    });
  }, [activeSelectedIndex && cokie && currentUser]);
  return <>{!activeSelectedIndex &&
    <>
      <Text key={'all'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
        รายการคำสั่งซื้อ</Text>
      {dataService?.purchase?.length > 0 ?
        dataService.purchase.map((value, index) => <From_Order_Box {...props} dataService={value} key={index} />) :
        <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
          <IconFeather color='#A2A2A2' name='edit' size={50} />
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ยังไม่มีคำสั่งซื้อ</Text>
        </View>}
    </>}
  </>;
};
///----------------------------------------------------------------------------------------------->>>> CancelScreen_From
export let CancelScreen_From = (props) => <SafeAreaView>
  <ScrollView>
    <Cancel_Product />
    <Cancel_Detail />
  </ScrollView>
</SafeAreaView>;
///----------------------------------------------------------------------------------------------->>>> Cancel_Product
export let Cancel_Product = (props) => <View>
  <View style={stylesMain.FrameBackground}>
    <View style={stylesProfileTopic.Order_Product}>
      <View style={stylesMain.FlexRow}>
        <View style={stylesProfileTopic.Order_Product_Pro}>
          <FastImage source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} style={stylesMain.BoxProduct1Image} />
        </View>
        <View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
          <Text>x 1</Text>
        </View>
      </View>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor }]}>฿10,000.00</Text>
    </View>
  </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Cancel_Detail
export let Cancel_Detail = (props) => {
  const [language, setLanguage] = useState(undefined);
  return <View style={stylesMain.FrameBackground}>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>สาเหตุการยกเลิกสินค้า</Text>
    <View style={stylesProfileTopic.Cancel_Detail}>
      <View style={stylesProfileTopic.Cancel_Detail_Box}>
        <Picker onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)} selectedValue={language}
          style={{ height: 35, width: '100%' }}>
          <Picker.Item label="เปลี่ยนใจ" value="java" />
          <Picker.Item label="ต้องการเปลี่ยนวิธิการจัดส่ง" value="js" />
          <Picker.Item label="เปลี่ยนที่อยู่การจัดส่ง" value="js1" />
          <Picker.Item label="มีสินค้าที่ถูกกว่า" value="js2" />
        </Picker>
      </View>
      <Cancel_Alert />
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>> 
export let Cancel_Alert = (props) => {
  const [show, setShow] = useState(false);
  let handle = (value) => setShow(value);
  let _renderHeader = <IconFontAwesome color='white' name='close' size={50} />;
  return <View>
    <View style={stylesProfileTopic.Cancel_Detail_ButtonBox}>
      <TouchableOpacity>
        <View style={stylesProfileTopic.Cancel_Detail_Button}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handle(true)}>
        <View style={[stylesProfileTopic.Cancel_Detail_Button, { marginLeft: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
    <SCLAlert headerIconComponent={_renderHeader} onRequestClose={() => null} show={show} subtitle="กรุณารอการตรวจสอบจากร้านค้า"
      subtitleStyle={stylesFont.FontFamilyText} theme="danger" title="ยกเลิกสินค้า" titleStyle={[stylesFont.FontFamilyBold,
      stylesFont.FontSize2]}>
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
        <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
          textStyle={stylesFont.FontFamilyText} theme="default">ยกเลิก</SCLAlertButton>
        <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
          textStyle={stylesFont.FontFamilyText} theme="danger">ยืนยัน</SCLAlertButton>
      </View>
    </SCLAlert>
  </View>;
};