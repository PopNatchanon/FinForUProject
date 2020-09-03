///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../customComponents';
import { ExitAppModule } from '../../Main/MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Detail_Pro);
function Detail_Pro(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    let pathList = () => {
        switch (selectedIndex) {
            case 0:
                return <View>
                    <AppBar {...props} backArrow titleHead='รายละเอียดโปรโมชัน' />
                    <Detail_Promotion {...props} />
                </View>;
            case 1:
                return <View>
                    <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
                    <ScrollView>
                        <Detail_Order />
                        <Detail_Product />
                    </ScrollView>
                    <Detail_Button {...props} />
                </View>;
            case 2:
                return <View>
                    <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
                    <Detail_Product_Check />
                </View>;
            case 3:
                return <View>
                    <AppBar {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
                </View>;
        };
    };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {pathList()}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Promotion
export let Detail_Promotion = (props) => <View>
    <View style={{ alignItems: 'center', height: 150, marginVertical: 10, width: '100%', }}>
        <FastImage source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, }} style={{ height: '100%', width: '95%', }} />
    </View>
    <View style={{ backgroundColor: '#FFFFFF', padding: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป
        (ผ่านวงเงินบัตรเครดิต) และ รวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
            2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม,
        ยอดการชำระค่าสาธารณูปโภค, และ ค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม, ยอดใช้จ่าย
        ที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และผิดกฏหมายบัตรเครดิต</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
            4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
            5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า
        กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>7.บริษัทฯ
        ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร
        ไม่ตรงตามหลักเกณฑของบริษัทฯ</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข
        และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
    </View>
</View>;
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
///----------------------------------------------------------------------------------------------->>>> Detail_Button
export let Detail_Button = (props) => <TouchableOpacity activeOpacity={1} onPress={() =>
    NavigationNavigate({ goScreen: 'Detail_Pro', navigation: props.navigation, setData: { selectedIndex: 2 }, })}>
    <View style={{
        alignItems: 'center', backgroundColor: mainColor, height: 50, justifyContent: 'center', marginTop: 10, width: '100%',
    }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตรวจสอบรายละเอียด</Text>
    </View>
</TouchableOpacity>;