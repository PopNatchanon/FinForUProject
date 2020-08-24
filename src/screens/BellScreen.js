///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
import { GetServices } from '../customComponents/Tools';
import { Toolbar, NavigationNavigate, AppBar } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(BellScreen);
function BellScreen(props) {
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        <AppBar titleHead='การแจ้งเตือน' />
        <ScrollView>
            <Popular_store {...props} />
            <Pro_for_U {...props} />
            <Update_buy {...props} />
        </ScrollView>
        <Toolbar {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export let Popular_store = (props) => {
    const { navigation } = props;
    const Deal_Store = [
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, name: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`, name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`, name: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก (Buy more save more) จะช่วยให้ลูกค้าเพิ่มปริมาณการซื้อ เช่น ซื้อ 2 ชิ้นลด 50 บาท, ซื้อ 3 กล่องประหยัดทันที 100 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop4.jpg`, name: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ (Loyalty Program) ลูกค้าขาจรกลายเป็นลูกค้าประจำได้ง่ายๆ เพียงแค่เราสร้างระบบสมาชิก หรือโปรแกรมสะสมแต้มรับส่วนลด แลกของรางวัล', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`, name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop6.jpg`, name: 'โปรโมชั่นแลกซื้อ (Redeem Offer) เช่น ซื้อสินค้าครบ 500 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`, name: 'ชิงโชค (Lucky Draw) ส่งชิงโชคเพื่อแลกของรางวัลใหญ่ เช่น ตั๋วเครื่องบิน ที่พัก ฯลฯ หลักการง่ายๆ คือ ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },]
    const text = 'ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!';
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    var uri = `${ip}/mysql/DataServiceMain.php`;
    var dataBody = { type: 'store' };
    let getDataSource = value => { setActiveGetServices(false); setDataService(value); };
    useEffect(() => {
        activeGetServices && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getDataSource(value) });
    }, [activeGetServices]);
    let dataNewStore = (
        Deal_Store.map((value, index) => {
            // var dataMySQL = `${ip}/mysql/uploads/slide/${item.image}`;
            return <TouchableOpacity activeOpacity={1} key={index} onPress={() =>
                NavigationNavigate({ goScreen: 'StoreScreen', setData: { id_item: item.id_store }, navigation })}>
                <View style={stylesMain.BoxStore3Box}>
                    <FastImage source={{ uri: value.image }} style={stylesMain.BoxStore3Image} />
                    <Text numberOfLines={3} style={[stylesMain.BoxStore3Text, stylesFont.FontFamilyText, stylesFont.FontSize7,
                    { height: height * 0.15 }]}>{value.name}</Text>
                </View>
            </TouchableOpacity>;
        }));
    return <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]}>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ร้านเด็ด</Text>
            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ดูทั้งหมด</Text>
        </View>
        <ScrollView horizontal>

            {dataNewStore}
        </ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export let Pro_for_U = (props) => {
    const { navigation } = props;
    const for_U_Store = [
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, name: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`, name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`, name: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก (Buy more save more) จะช่วยให้ลูกค้าเพิ่มปริมาณการซื้อ เช่น ซื้อ 2 ชิ้นลด 50 บาท, ซื้อ 3 กล่องประหยัดทันที 100 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop4.jpg`, name: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ (Loyalty Program) ลูกค้าขาจรกลายเป็นลูกค้าประจำได้ง่ายๆ เพียงแค่เราสร้างระบบสมาชิก หรือโปรแกรมสะสมแต้มรับส่วนลด แลกของรางวัล', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`, name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop6.jpg`, name: 'โปรโมชั่นแลกซื้อ (Redeem Offer) เช่น ซื้อสินค้าครบ 500 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`, name: 'ชิงโชค (Lucky Draw) ส่งชิงโชคเพื่อแลกของรางวัลใหญ่ เช่น ตั๋วเครื่องบิน ที่พัก ฯลฯ หลักการง่ายๆ คือ ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },]
    let for_U_Item = (
        for_U_Store.map((value, index) => {
            return <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Detail_Pro', setData: { selectedIndex: 0 }, navigation })}>
                <View style={[stylesMain.FlexRow, { marginTop: 5, backgroundColor: '#FFFFFF', padding: 5, marginHorizontal: 3 }]}>
                    <FastImage style={stylesMain.BoxStore4Image}
                        source={{ uri: value.image }} />
                    <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5, width: width * 0.70 }]}>
                        {value.name}</Text>
                </View>
            </TouchableOpacity>
        }))
    return <View>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                โปรเด็ดที่คัดมาเพื่อคุณ</Text>
        </View>
        <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView,]}>
            {for_U_Item}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export let Update_buy = (props) => {
    const { navigation } = props;
    return <View>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>อัพเดทคำสั่งซื้อ</Text>
        </View>
        <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Detail_Pro', setData: { selectedIndex: 1 }, navigation })}>
                <View style={stylesMain.BoxStore4Box}>
                    <FastImage style={stylesMain.BoxStore4Image}
                        source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, }} />
                    <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง</Text>
                </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxStore4Box}>
                <FastImage style={stylesMain.BoxStore4Image} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, }} />
                <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                    กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
            </View>
            <View style={stylesMain.BoxStore4Box}>
                <FastImage style={stylesMain.BoxStore4Image} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, }} />
                <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                    คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง??</Text>
            </View>
            <View style={stylesMain.BoxStore4Box}>
                <FastImage style={stylesMain.BoxStore4Image} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, }} />
                <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                    กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
            </View>
        </View>
    </View>;
};