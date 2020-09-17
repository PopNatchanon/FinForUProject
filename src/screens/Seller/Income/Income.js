///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../customComponents';
import { TabBar, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize1, FontSize5, FontSize7 } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
const { Order_Product_Pro } = stylesProfileTopic;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='รายได้ของฉัน' />
        <My_income />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let My_income = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const items1 = [{ name: 'ยังไม่สำเร็จ' }, { name: 'สำเร็จแล้ว' },];
    let dataItem = (items1) => {
        return <View style={[FlexRow, { backgroundColor: '#FFFFFF', height: 30, justifyContent: 'center', width: '100%', }]}>
            <TabBar item={items1} numberBox sendData={(v) => setSelectedIndex(v.selectedIndex)} radiusBox={4} />
        </View>;
    };
    return <>
        <View style={{ marginTop: 5, width: '100%', }}>{dataItem(items1)}</View>
        <ScrollView>
            <View style={[ItemCenter, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10 }]}>
                <View style={[ItemCenter, { borderColor: mainColor, borderRadius: 75, borderWidth: 5, height: 150, width: 150, }]}>
                    <Text style={[FontFamilyBold, FontSize1, { color: mainColor }]}>฿100,000</Text>
                </View>
            </View>
            <View style={[FrameBackground, { marginTop: -50 }]}>
                <Product_income />
                <Product_income />
                <Product_income />
                <Product_income />
                <Product_income />
                <Product_income />
            </View>
        </ScrollView>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Product_income = (props) => {
    const Image1 = { uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, };
    return <View style={{ borderColor: '#ECECEC', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
        <View style={FlexRow}>
            <View style={Order_Product_Pro}>
                <FastImage source={Image1} style={BoxProduct1Image} />
            </View>
            <View>
                <Text style={[FontFamilyBold, FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                <Text style={[FontFamilyText, FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                <Text style={[FontFamilyText, FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                <Text style={[FontFamilyText, FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                <Text>x 1</Text>
            </View>
        </View>
        <Text style={[FontFamilyText, FontSize5, { color: mainColor }]}>฿10,000.00</Text>
    </View>;
};