///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../customComponents';
import { SettingList } from '../Setting/Setting';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Advertisement);
function Advertisement(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='จัดการโฆษณา' />
        <Seller_Advertisement {...props} backArrow />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement = (props) => {
    const ListItem = [{
        subItem: [
            { name: 'แพคเกจปัจจุบันที่ใช้อยู่', setNavi: { goScreen: 'Seller_Advertisement_Packet', }, },
            { name: 'FIN แคมเปญ', setNavi: { goScreen: 'Seller_Advertisement_Campaign', }, },
            { name: 'FIN โค้ดส่วนลด', setNavi: { goScreen: 'Seller_Advertisement_CodeSale', }, }],
    }];
    const ListProps = { ...props, ListItem };
    return <View>
        <SettingList {...ListProps} />
    </View>;
};