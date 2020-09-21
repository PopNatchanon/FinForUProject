///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize6 } = stylesFont;
const { FlexRow, FrameBackground, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProductCheck);
function ProductCheck(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
        <Detail_Product_Check />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Product_Check
export const Detail_Product_Check = (props) => {
    return <View style={FrameBackground}>
        <View style={[FlexRow, { borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }]}>
            <Text style={[FontFamilyText, FontSize6]}> ยกเลิกโดย </Text>
            <Text style={[FontFamilyBold, FontSize6]}>FIN</Text>
        </View>
        <View style={[FlexRow, { borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }]}>
            <Text style={[FontFamilyText, FontSize6]}>วัน/เวลาที่ยกเลิก</Text>
            <Text style={[FontFamilyText, FontSize6]}>19-2-2020/23.00 น.</Text>
        </View>
        <View style={{ borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }}>
            <Text style={[FontFamilyText, FontSize6]}>เหตุผลการยกเลิก</Text>
            <Text style={[FontFamilyText, FontSize6, { marginLeft: 20, }]}>ไม่มีการชำระเงิน</Text>
        </View>
    </View>
};