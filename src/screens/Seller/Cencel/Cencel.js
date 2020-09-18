///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../customComponents';
import { Order_Me_Box } from '../TotelOrder/TotelOrder';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Cencel);
function Cencel(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ยกเลิกสินค้า' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Order_Me_Box {...props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
        <Order_Me_Box {...props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
        <Order_Me_Box {...props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
        <Order_Me_Box {...props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
        <Order_Me_Box {...props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
    </ScrollView>;
};