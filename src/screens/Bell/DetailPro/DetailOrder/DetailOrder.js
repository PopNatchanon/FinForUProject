///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../../customComponents';
import { ExitAppModule } from '../../../Main/MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(DetailOrder);
function DetailOrder(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
        <ScrollView>
            <Detail_Order />
            <Detail_Product />
        </ScrollView>
        <Detail_Button {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Order
export let Detail_Order = (props) => <View>
    <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิกแล้ว</Text>
        <Text style={[stylesFont.FontFamilyText, { marginLeft: 20, }]}>
            คำสั่งซื้อของคุณถูกยกเลิกแล้วเนื่องจากคุณไม่ชำระเงินตามเวลาที่กำหนด</Text>
    </View>
    <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
        <Text style={[stylesFont.FontFamilyText, { marginLeft: 20, }]}>
            PPooo 3123 หมู่ที่7 ตำบลบ้านพร้าว, อำเภอป่าพะยอม, จังหวัดพัทลุง, 93210 (+66)0800000000</Text>
    </View>
    <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สรุปยอดรวมทั้งสิ้น</Text>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10, }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยอดรวม</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>฿5,000.00</Text>
        </View>
        <View style={[stylesMain.FlexRow,
        { borderTopColor: '#EAEAEA', borderTopWidth: 1, justifyContent: 'space-between', marginTop: 5, padding: 10, }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดรวมทั้งสิ้น</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>฿5,000.00</Text>
        </View>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Detail_Product
export let Detail_Product = (props) => <View style={stylesMain.FrameBackground}>
    <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between', padding: 10, }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>PPooy</Text>
    </View>
    <View style={{
        borderColor: '#ECECEC', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, padding: 10,
    }}>
        <View style={{ flexDirection: 'row', height: 100, width: 100, }}>
            <FastImage source={{ uri: `${ip}/mysql/uploads/products/2019-10-10-1570677650.jpg`, }}
                style={{ height: '100%', width: '100%', }} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>นาฬิกา TISSOT</Text>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>x 3</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>฿10,000</Text>
        </View>
    </View>
    <View style={{ borderColor: '#ECECEC', borderWidth: 1, padding: 10, }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ 2223994239012 ของท่าน</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Detail_Button
export let Detail_Button = (props) => <TouchableOpacity activeOpacity={1} onPress={() =>
    NavigationNavigate({ goScreen: 'DetailProductCheck', navigation: props.navigation, })}>
    <View style={{
        alignItems: 'center', backgroundColor: mainColor, height: 50, justifyContent: 'center', marginTop: 10, width: '100%',
    }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตรวจสอบรายละเอียด</Text>
    </View>
</TouchableOpacity>;