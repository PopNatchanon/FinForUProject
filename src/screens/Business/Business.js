///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
    <Menu_Affiliate {...props} />
    <ExitApp {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Menu_Affiliate = (props) => <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter,]}>
  <View style={[stylesMain.ItemCenter, { marginVertical: 10, width: '98%', }]}>
    <View style={[stylesMain.ItemCenter, {
      backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, elevation: 1, marginBottom: -10,
      paddingVertical: 5, width: width * 0.40,
    }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center' }]}>สมาชิกAffiliate</Text>
    </View>
    <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, padding: 30, }}>
      <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
        <View style={{ alignItems: 'flex-end', width: '48%', }}>
          <TouchableOpacity onPress={() =>
            NavigationNavigate({ ...props, goScreen: 'Business_Profile', })}>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/1458482.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>ข้อมูลAffiliate</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%' }}>
          <TouchableOpacity onPress={() =>
            NavigationNavigate({ ...props, goScreen: 'Business_Finance', })}>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/bank2.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>การเงิน</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginTop: 20 }]}>
        <View style={{ alignItems: 'flex-end', width: '48%', }}>
          <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({
            ...props, goScreen: 'Seller_Money_PIN', setData: { Withdraw: 'Bank' },
          })}>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/passbook-512.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>บัญชีธนาคาร</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%' }}>
          <TouchableOpacity>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/page-icon-png-3.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>เอกสาร</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
</View>;
///----------------------------------------------------------------------------------------------->>>>
export let Bank_book = (props) => {
  return <View>
    <Text>Bank_book</Text>
  </View>
};