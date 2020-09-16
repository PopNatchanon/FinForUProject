///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../../customComponents';
import { ExitAppModule } from '../../../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Promotion);
function Promotion(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='รายละเอียดโปรโมชัน' />
        <Detail_Promotion {...props} />
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