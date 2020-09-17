///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, Text, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from '../../../../customComponents';
import { Order_Me_Box } from '../../TotelOrder/TotelOrder';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyText, FontSize5 } = stylesFont;
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Product);
function Product(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='คืนสินค้า/คืนเงิน' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Text style={[FontFamilyText, FontSize5, { margin: 10 }]}>คืนสินค้า/คืนเงิน</Text>
        <Order_Me_Box {...props} Cause_cancel Contact_buyer detail_order_cancel />
        <Order_Me_Box {...props} Cause_cancel Contact_buyer detail_order_cancel />
        <Order_Me_Box {...props} Cause_cancel Contact_buyer detail_order_cancel />
        <Order_Me_Box {...props} Cause_cancel Contact_buyer detail_order_cancel />
        <Order_Me_Box {...props} Cause_cancel Contact_buyer detail_order_cancel />
    </ScrollView>;
};