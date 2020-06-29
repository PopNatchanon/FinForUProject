///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
import { NavigationNavigateScreen } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService, activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Detail_Pro);
function Detail_Pro(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                return <View>
                    <AppBar1 {...props} backArrowtitleHead='รายละเอียดโปรโมชัน' />
                    <Detail_Promotion {...props} />
                </View>;
            case 1:
                return <View>
                    <AppBar1 {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
                    <ScrollView>
                        <Detail_Order />
                        <Detail_Product />
                    </ScrollView>
                    <Detail_Button {...props} />
                </View>;
            case 2:
                return <View>
                    <AppBar1 {...props} backArrow titleHead='รายละเอียดคำสั่งซื้อ' />
                    <Detail_Product_Check />
                </View>;
        };
    };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {PathList()}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Promotion
export let Detail_Promotion = (props) => <View>
    <View style={{ width: '100%', height: 150, marginVertical: 10, alignItems: 'center', }}>
        <FastImage style={{ height: '100%', width: '95%', }} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, }} />
    </View>
    <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
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
        <View style={[stylesMain.FlexRow, { padding: 10, justifyContent: 'space-between' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยอดรวม</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>฿5,000.00</Text>
        </View>
        <View style={[stylesMain.FlexRow,
        { padding: 10, justifyContent: 'space-between', marginTop: 5, borderTopColor: '#EAEAEA', borderTopWidth: 1, }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดรวมทั้งสิ้น</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>฿5,000.00</Text>
        </View>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Detail_Product
export let Detail_Product = (props) => <View style={stylesMain.FrameBackground}>
    <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10, borderColor: '#ECECEC', borderWidth: 1, }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>PPooy</Text>
    </View>
    <View style={{
        borderColor: '#ECECEC', borderWidth: 1, padding: 10, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'
    }}>
        <View style={{ height: 100, width: 100, flexDirection: 'row' }}>
            <FastImage style={{ height: '100%', width: '100%', }}
                source={{ uri: `${ip}/mysql/uploads/products/2019-10-10-1570677650.jpg`, }} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>นาฬิกา TISSOT</Text>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>x 3</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>฿10,000</Text>
        </View>
    </View>
    <View style={{ padding: 10, borderColor: '#ECECEC', borderWidth: 1, }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ 2223994239012 ของท่าน</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Detail_Product_Check
export let Detail_Product_Check = (props) => <View style={stylesMain.FrameBackground}>
    <View style={[stylesMain.FlexRow, { padding: 10, justifyContent: 'space-between', borderColor: '#ECECEC', borderWidth: 1 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ยกเลิกโดย </Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>FIN</Text>
    </View>
    <View style={[stylesMain.FlexRow, { padding: 10, justifyContent: 'space-between', borderColor: '#ECECEC', borderWidth: 1 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>วัน/เวลาที่ยกเลิก</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>19-2-2020/23.00 น.</Text>
    </View>
    <View style={{ padding: 10, justifyContent: 'space-between', borderColor: '#ECECEC', borderWidth: 1 }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เหตุผลการยกเลิก</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 20, }]}>ไม่มีการชำระเงิน</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Detail_Button
export let Detail_Button = (props) => {
    const { navigation } = props;
    return <TouchableOpacity activeOpacity={1} onPress={() =>
        NavigationNavigateScreen({ goScreen: 'Detail_Pro', setData: { selectedIndex: 2 }, navigation })}>
        <View style={{
            width: '100%', backgroundColor: mainColor, height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 10
        }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตรวจสอบรายละเอียด</Text>
        </View>
    </TouchableOpacity>;
};