///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../customComponents';
import { Product_income } from '../../Seller/Income/Income';
import { TabBar } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyText, FontSize5, } = stylesFont;
const { FlexRow, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Product);
function Product(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Income {...props} />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Income = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const items1 = [{ name: 'ยังไม่สำเร็จ' }, { name: 'สำเร็จแล้ว' },];
    const dataItem = (v) => <View style={[FlexRow, { backgroundColor: '#FFFFFF', height: 30, justifyContent: 'center', width: '100%', }]}>
        <TabBar item={v} numberBox radiusBox={4} sendData={(v2) => setSelectedIndex(v2.selectedIndex)} />
    </View>;
    return <View>
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, }}>
            <Text style={[FontFamilyText, FontSize5,]}>รายการสินค้า</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>{dataItem(items1)}</View>
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
            <Product_income />
            <Product_income />
            <Product_income />
            <Product_income />
        </View>
    </View>;
};