///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../../customComponents';
import { ExitAppModule } from '../../../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProductCheck);
function ProductCheck(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
        <Detail_Product_Check />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Product_Check
export let Detail_Product_Check = (props) => <View style={stylesMain.FrameBackground}>
    <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ยกเลิกโดย </Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>FIN</Text>
    </View>
    <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>วัน/เวลาที่ยกเลิก</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>19-2-2020/23.00 น.</Text>
    </View>
    <View style={{ borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เหตุผลการยกเลิก</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 20, }]}>ไม่มีการชำระเงิน</Text>
    </View>
</View>;