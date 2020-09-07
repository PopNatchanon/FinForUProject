///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState } from 'react';
import {
    Dimensions, SafeAreaView, Text, TouchableOpacity, View, ScrollView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { CheckBox } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesFont from '../../../../style/stylesFont';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Order_Me_Box } from '../../TotelOrder/TotelOrder';
import { NavigationNavigate, AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Product);
function Product(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='คืนสินค้า/คืนเงิน' />
        <ScrollView>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>คืนสินค้า/คืนเงิน</Text>
            <Order_Me_Box {...props} Cause_cancel detail_order_cancel Contact_buyer />
            <Order_Me_Box {...props} Cause_cancel detail_order_cancel Contact_buyer />
            <Order_Me_Box {...props} Cause_cancel detail_order_cancel Contact_buyer />
            <Order_Me_Box {...props} Cause_cancel detail_order_cancel Contact_buyer />
            <Order_Me_Box {...props} Cause_cancel detail_order_cancel Contact_buyer />
        </ScrollView>
    </SafeAreaView>;
};