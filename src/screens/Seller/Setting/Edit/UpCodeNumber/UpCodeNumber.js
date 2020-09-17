///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain from '../../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../../customComponents';
import { Up_Code_Number } from '../../UpCodeNumber/UpCodeNumber';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(UpCodeNumber);
function UpCodeNumber(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='แก้ไขเลขพัสดุ' />
        <Up_Code_Number {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};