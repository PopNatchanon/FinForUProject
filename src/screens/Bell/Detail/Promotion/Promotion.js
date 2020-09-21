///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyText, FontSize7 } = stylesFont;
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Promotion);
function Promotion(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='รายละเอียดโปรโมชัน' />
        <Detail_Promotion {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail_Promotion
export let Detail_Promotion = (props) => {
    const Image1 = { uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, };
    return <View>
        <View style={{ alignItems: 'center', height: 150, marginVertical: 10, width: '100%', }}>
            <FastImage source={Image1} style={{ height: '100%', width: '95%', }} />
        </View>
        <View style={{ backgroundColor: '#FFFFFF', padding: 10, }}>
            <Text style={[FontFamilyText, FontSize7]}>1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป (ผ่านวงเงินบัตรเครดิต) และ รวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่ง
            ชำระเริ่มต้น 3,000 บาทขึ้นไป</Text>
            <Text style={[FontFamilyText, FontSize7]}>2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ</Text>
            <Text style={[FontFamilyText, FontSize7]}>3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม, ยอดการชำระค่าสาธารณูปโภค, และ ค่าบริการ
            อื่นๆ จากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม, ยอดใช้จ่าย ที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และผิดกฏหมาย
            บัตรเครดิต</Text>
            <Text style={[FontFamilyText, FontSize7]}>4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด</Text>
            <Text style={[FontFamilyText, FontSize7]}>5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้ว
            ทุกกรณี</Text>
            <Text style={[FontFamilyText, FontSize7]}>6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อ
            แจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
            <Text style={[FontFamilyText, FontSize7]}>7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ ของ
            บริษัทฯ หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตามหลักเกณฑของบริษัทฯ</Text>
            <Text style={[FontFamilyText, FontSize7]}>8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดย
            ไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
        </View>
    </View>
};