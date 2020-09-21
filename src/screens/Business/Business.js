///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, DimensionsProps, ExitApp, NavigationNavigate, } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { width } = DimensionsProps;
const { FontFamilyBold, FontSize5, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
  return <SafeAreaView style={SafeAreaViews}>
    <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
    <Menu_Affiliate {...props} />
    <ExitApp {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Menu_Affiliate = (props) => {
  const Image1 = { uri: ip + '/MySQL/uploads/Affiliate/1458482.png' };
  const Image2 = { uri: ip + '/MySQL/uploads/Affiliate/bank2.png' };
  const Image3 = { uri: ip + '/MySQL/uploads/Affiliate/passbook-512.png' };
  const Image4 = { uri: ip + '/MySQL/uploads/Affiliate/page-icon-png-3.png' };
  const List = [[
    { icon: Image1, name: 'ข้อมูลAffiliate', setNavi: { goScreen: 'Business_Profile', }, style: { alignItems: 'flex-end', } },
    { icon: Image2, name: 'การเงิน', setNavi: { goScreen: 'Business_Finance', }, }], [{
      icon: Image3, name: 'บัญชีธนาคาร', setNavi: { goScreen: 'Seller_Money_PIN', setData: { Withdraw: 'Bank' }, },
      style: { alignItems: 'flex-end', }
    }, { icon: Image4, name: 'เอกสาร', }
  ]];
  return <View style={[FrameBackground, ItemCenter]}>
    <View style={[ItemCenter, { marginVertical: 10, width: '98%', }]}>
      <View style={[ItemCenter, {
        backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, elevation: 1, marginBottom: -10,
        paddingVertical: 5, width: width * 0.40,
      }]}>
        <Text style={[FontFamilyBold, FontSize5, { textAlign: 'center' }]}>สมาชิกAffiliate</Text>
      </View>
      <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, padding: 30, }}>
        {List.map((v, i) => <View key={i} style={[FlexRow, { justifyContent: 'space-between' }]}>
          {v.map((v2, i2) => <View key={i2} style={{ ...v2.style, width: '48%' }}>
            <TouchableOpacity onPress={() => v2.setNavi ? NavigationNavigate({ ...props, ...v2.setNavi, }) : null}>
              <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
                <FastImage source={v2.icon} style={BoxProduct1Image} />
              </View>
              <Text style={[FontFamilyBold, FontSize5, { textAlign: 'center', width: 100, }]}>{v2.name}</Text>
            </TouchableOpacity>
          </View>)}
        </View>)}
      </View>
    </View>
  </View>
};
///----------------------------------------------------------------------------------------------->>>>
export let Bank_book = (props) => {
  return <View>
    <Text>Bank_book</Text>
  </View>
};