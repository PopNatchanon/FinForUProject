///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6 } = stylesFont;
const { FlexRow, FrameBackground, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Order);
function Order(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
        <ScrollList {...props} />
        <Detail_Button {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Detail_Order />
        <Detail_Product />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Order
export const Detail_Order = (props) => {
    return <View>
        <View style={FrameBackground}>
            <Text style={[FontFamilyBold, FontSize5]}>ยกเลิกแล้ว</Text>
            <Text style={[FontFamilyText, { marginLeft: 20, }]}>คำสั่งซื้อของคุณถูกยกเลิกแล้วเนื่องจากคุณไม่ชำระเงินตามเวลาที่กำหนด</Text>
        </View>
        <View style={FrameBackground}>
            <Text style={[FontFamilyBold, FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
            <Text style={[FontFamilyText, { marginLeft: 20, }]}>
                PPooo 3123 หมู่ที่7 ตำบลบ้านพร้าว, อำเภอป่าพะยอม, จังหวัดพัทลุง, 93210 (+66)0800000000</Text>
        </View>
        <View style={FrameBackground}>
            <Text style={[FontFamilyBold, FontSize5]}>สรุปยอดรวมทั้งสิ้น</Text>
            <View style={[FlexRow, { justifyContent: 'space-between', padding: 10, }]}>
                <Text style={[FontFamilyText, FontSize6]}>ยอดรวม</Text>
                <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>฿5,000.00</Text>
            </View>
            <View style={[FlexRow,
                { borderTopColor: '#EAEAEA', borderTopWidth: 1, justifyContent: 'space-between', marginTop: 5, padding: 10, }]}>
                <Text style={[FontFamilyText, FontSize5]}>ยอดรวมทั้งสิ้น</Text>
                <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}>฿5,000.00</Text>
            </View>
        </View>
    </View>
};
///----------------------------------------------------------------------------------------------->>>> Detail_Product
export const Detail_Product = (props) => {
    const Image1 = { uri: `${ip}/mysql/uploads/products/2019-10-10-1570677650.jpg`, };
    return <View style={FrameBackground}>
        <View style={[FlexRow, { borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }]}>
            <Text style={[FontFamilyBold, FontSize5]}>PPooy</Text>
        </View>
        <View style={
            { borderColor: '#ECECEC', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, padding: 10, }}>
            <View style={{ flexDirection: 'row', height: 100, width: 100, }}>
                <FastImage source={Image1} style={{ height: '100%', width: '100%', }} />
                <Text style={[FontFamilyText, FontSize6]}>นาฬิกา TISSOT</Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={[FontFamilyText, FontSize6]}>x 3</Text>
                <Text style={[FontFamilyText, FontSize6]}>฿10,000</Text>
            </View>
        </View>
        <View style={{ borderColor: '#ECECEC', borderWidth: 1, padding: 10, }}>
            <Text style={[FontFamilyBold, FontSize6]}>หมายเลขคำสั่งซื้อ 2223994239012 ของท่าน</Text>
        </View>
    </View>
};
///----------------------------------------------------------------------------------------------->>>> Detail_Button
export const Detail_Button = (props) => {
    return <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'Bell_Detail_ProductCheck', })}>
        <View style={
            { alignItems: 'center', backgroundColor: mainColor, height: 50, justifyContent: 'center', marginTop: 10, width: '100%', }}>
            <Text style={[FontFamilyText, FontSize5, { color: '#FFFFFF' }]}>ตรวจสอบรายละเอียด</Text>
        </View>
    </TouchableOpacity>
};