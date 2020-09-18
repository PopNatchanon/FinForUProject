///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
import { TabBar, } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6 } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(CodeSale);
function CodeSale(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='โค้ดส่วนลด' />
        <Code_Sale {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Code_Sale = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const item = [{ name: 'เร็วๆ นี้' }, { name: 'กำลังดำเนินการ' }, { name: 'หมดอายุแล้ว' }];
    let Code_BOX = <View style={[FrameBackground, { padding: 10 }]}>
        <Text style={[FontFamilyBold, FontSize4]}>BirthDAY</Text>
        <View style={[FlexRow, { justifyContent: 'space-between', width: '60%' }]}>
            <Text style={[FontFamilyText, FontSize6]}>25-02-2020 15:00</Text>
            <Text style={[FontFamilyText, FontSize6]}>25-02-2020 16:00</Text>
        </View>
        <View style={[FlexRow, { justifyContent: 'space-around', width: '50%' }]}>
            <View>
                <Text style={[FontFamilyBold, FontSize6]}>โค้ดส่วนลด</Text>
                <Text style={[FontFamilyBold, FontSize6]}>ประเภทโค้ด</Text>
                <Text style={[FontFamilyBold, FontSize6]}>ราคาขั้นต่ำ</Text>
            </View>
            <View>
                <Text style={[FontFamilyText, FontSize6]}>FINs00wk</Text>
                <Text style={[FontFamilyText, FontSize6]}>ลดบาท</Text>
                <Text style={[FontFamilyText, FontSize6]}>฿100</Text>
            </View>
        </View>
        <View style={[FlexRow, {
            borderBottomWidth: 2, borderTopWidth: 2, justifyContent: 'space-around', marginVertical: 10, paddingVertical: 10,
        }]}>
            <View style={{ width: '30%', }}>
                <View style={[ItemCenter, { backgroundColor: mainColor, borderRadius: 5, paddingVertical: 5 }]}>
                    <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF' }]}>จำนวน </Text>
                </View>
                <Text style={[FontFamilyText, FontSize6, { marginTop: 5, textAlign: 'center' }]}>100</Text>
            </View>
            <View style={{ width: '30%' }}>
                <View style={[ItemCenter, { backgroundColor: mainColor, borderRadius: 5, paddingVertical: 5 }]}>
                    <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF' }]}>ผู้ซื้อกดรับ </Text>
                </View>
                <Text style={[FontFamilyText, FontSize6, { marginTop: 5, textAlign: 'center' }]}>50</Text>
            </View>
            <View style={{ width: '30%' }}>
                <View style={[ItemCenter, { backgroundColor: mainColor, borderRadius: 5, paddingVertical: 5, }]}>
                    <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF' }]}>ใช้แล้ว </Text>
                </View>
                <Text style={[FontFamilyText, FontSize6, { marginTop: 5, textAlign: 'center', }]}>20</Text>
            </View>
        </View>
        <View style={[FlexRow, { justifyContent: 'space-between', marginBottom: 10 }]}>
            <TouchableOpacity style={[ItemCenter, { borderColor: mainColor, borderWidth: 1, width: '49%' }]}>
                <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}>แก้ไข</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ItemCenter, { borderColor: mainColor, borderWidth: 1, width: '49%' }]}>
                <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}>ลบ</Text>
            </TouchableOpacity>
        </View>
    </View>;
    return <>
        <View style={FrameBackground}>
            <TabBar item={item} sendData={(v) => setSelectedIndex(v.selectedIndex)} setVertical={4} />
        </View>
        <ScrollView>{Code_BOX}</ScrollView>
        <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Advertisement_CodeSale_Forms', })}
            style={[ItemCenter, { backgroundColor: mainColor, paddingVertical: 10 }]}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>สร้างโปรโมชันส่วนลด</Text>
        </TouchableOpacity>
    </>;
};