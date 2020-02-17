///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Appbar } from '../src_profile/Profile_Topic';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Detail_Pro extends Component {
    PathList() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View>
                        <Appbar navigation={this.props.navigation} Title='รายละเอียดโปรโมชัน' />
                        <Detail_Promotion />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Appbar navigation={this.props.navigation} Title='รายละเอียดคำสั่งซื้อ' />
                        <ScrollView>
                            <Detail_Order />
                            <Detail_Product />
                        </ScrollView>
                        <Detail_Button navigation={this.props.navigation} />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <Appbar navigation={this.props.navigation} Title='รายละเอียดคำสั่งซื้อ' />
                        <Detail_Product_Check />
                    </View>
                )
        }
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <View>
                    {this.PathList()}
                </View>
            </SafeAreaView>

        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Promotion
export class Detail_Promotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={{ width: '100%', height: 150, marginVertical: 10, alignItems: 'center', }}>
                    <FastImage style={{ height: '100%', width: '95%', }}
                        source={{
                            uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                        }}
                    />
                </View>
                <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต)
                        และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป
                    </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ
                    </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม, ยอดการชำระค่าสาธารณูปโภค,
                         และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,
                         ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และผิดกฏหมายบัตรเครดิต
                     </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด
                    </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี
                    </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว
                    </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ
                            หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตามหลักเกณฑของบริษัทฯ
                    </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                    </Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Order
export class Detail_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> ยกเลิกแล้ว </Text>
                    <Text style={[stylesFont.FontFamilyText, { marginLeft: 20, }]}>
                        คำสั่งซื้อของคุณถูกยกเลิกแล้วเนื่องจากคุณไม่ชำระเงินตามเวลาที่กำหนด</Text>
                </View>
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> ที่อยู่ในการจัดส่ง </Text>
                    <Text style={[stylesFont.FontFamilyText, { marginLeft: 20, }]}>
                        PPooo 3123 หมู่ที่7 ตำบลบ้านพร้าว, อำเภอป่าพะยอม, จังหวัดพัทลุง, 93210 (+66)0800000000</Text>
                </View>
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> สรุปยอดรวมทั้งสิ้น </Text>
                    <View style={[stylesMain.FlexRow, { padding: 10, justifyContent: 'space-between' }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยอดรวม</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>฿5,000.00</Text>
                    </View>
                    <View style={[stylesMain.FlexRow, { padding: 10, justifyContent: 'space-between', marginTop: 5, borderTopColor: '#EAEAEA', borderTopWidth: 1, }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดรวมทั้งสิ้น</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿5,000.00</Text>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Product
export class Detail_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesMain.FlexRow, {
                    justifyContent: 'space-between', padding: 10, borderColor: '#ECECEC', borderWidth: 1,
                }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> PPooy </Text>
                </View>
                <View style={{
                    borderColor: '#ECECEC', borderWidth: 1, padding: 10, marginTop: 5, flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ height: 100, width: 100, flexDirection: 'row' }}>
                        <FastImage style={{ height: '100%', width: '100%', }}
                            source={{
                                uri: ip + '/MySQL/uploads/products/2019-10-10-1570677650.png',
                            }}
                        />
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
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Product_Check
export class Detail_Product_Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesMain.FlexRow, {
                    padding: 10, justifyContent: 'space-between', borderColor: '#ECECEC', borderWidth: 1
                }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ยกเลิกโดย </Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>FIN</Text>
                </View>
                <View style={[stylesMain.FlexRow, {
                    padding: 10, justifyContent: 'space-between', borderColor: '#ECECEC', borderWidth: 1
                }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>วัน/เวลาที่ยกเลิก</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>19-2-2020/23.00 น.</Text>
                </View>
                <View style={{ padding: 10, justifyContent: 'space-between', borderColor: '#ECECEC', borderWidth: 1 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เหตุผลการยกเลิก</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 20, }]}>ไม่มีการชำระเงิน</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Button
export class Detail_Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Pro', { selectedIndex: 2 })}>
                <View style={{
                    width: '100%', backgroundColor: '#0A55A6', height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 10
                }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตรวจสอบรายละเอียด</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
