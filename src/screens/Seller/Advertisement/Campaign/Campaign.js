///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
import { TabBar, } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize7, } = stylesFont;
const { BoxProduct1Image, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
function Campaign(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='FIN แคมเปญ' />
        <Seller_Fin_Campaign {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Fin_Campaign = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const Image1 = { uri: `${ip}/mysql/uploads/products/Campaign9999.png`, };
    const item = [{ name: 'เร็วๆ นี้' }, { name: 'กำลังดำเนินการ' }, { name: 'หมดอายุแล้ว' }];
    return <View>
        <View style={{ backgroundColor: '#fff' }}>
            <TabBar item={item} sendData={(v) => setSelectedIndex(v.selectedIndex)} setVertical={4} />
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, }}>
            <View style={{ height: 90, width: '40%' }}>
                <FastImage source={Image1} style={BoxProduct1Image} />
            </View>
            <View style={{ padding: 10, width: '60%', }}>
                <Text style={[FontFamilyText, FontSize7]}>มาเข้าร่วมแคมเปญกับเราสิ! สิทธิพิเศษสำหรับร้านค้าใน Fin เข้าร่วมแคมเปญ
                 " 9 Baht คอลเลคชั่นราคาต่ำกว่า 199 บาท ! (วันที่่ 5 - 11 มี.ค.) " เลย</Text>
                <Text style={[FontFamilyBold, FontSize7]}>การเข้าร่วมโปรโมชั่นจะสิ้นสุดภายใน3 วัน 1 ชั่วโมง</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 10 }} onPress={() =>
                    NavigationNavigate({ ...props, goScreen: 'Seller_Advertisement_Campaign_Product', })}>
                    <View style={[ItemCenter, { backgroundColor: '#7ED0E8', borderRadius: 5, height: 30, width: 130, }]}>
                        <Text style={[FontFamilyBold, FontSize7, { color: '#FFFFFF' }]}>เข้าร่วมโปรโมชั่น ตอนนี้!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};