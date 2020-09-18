///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, DimensionsProps, ExitApp, Toolbar, NavigationNavigate, } from '../../customComponents';
import { GetServices } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { height, width } = DimensionsProps;
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7 } = stylesFont;
const { BackgroundAreaView, BoxStore3Text, FlexRow, FrameBackground, FrameBackgroundTextBox, FrameBackgroundTextEnd, FrameBackgroundTextStart,
    SafeAreaViewNB } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Bell);
function Bell(props) {
    return <SafeAreaView style={[BackgroundAreaView, SafeAreaViewNB]}>
        <AppBar titleHead='การแจ้งเตือน' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <View>
        <ScrollView>
            {/* <Popular_store {...props} /> */}
            <Pro_for_U {...props} />
            <Update_buy {...props} />
        </ScrollView>
        <Toolbar {...props} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export const Popular_store = (props) => {
    const { navigation } = props;
    const Deal_Store = [{
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
        name: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท',
    }, {
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`,
        name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ',
    }, {
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`,
        name: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก (Buy more save more) จะช่วยให้ลูกค้าเพิ่มปริมาณการซื้อ เช่น ซื้อ 2 ชิ้นลด 50 บาท, ซื้อ 3 กล่องประหยัดทันที 100 บาท',
    }, {
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop4.jpg`,
        name: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ (Loyalty Program) ลูกค้าขาจรกลายเป็นลูกค้าประจำได้ง่ายๆ เพียงแค่เราสร้างระบบสมาชิก หรือโปรแกรมสะสมแต้มรับส่วนลด แลกของรางวัล',
    }, {
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`,
        name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ',
    }, {
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop6.jpg`,
        name: 'โปรโมชั่นแลกซื้อ (Redeem Offer) เช่น ซื้อสินค้าครบ 500 บาท',
    }, {
        image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`,
        name: 'ชิงโชค (Lucky Draw) ส่งชิงโชคเพื่อแลกของรางวัลใหญ่ เช่น ตั๋วเครื่องบิน ที่พัก ฯลฯ หลักการง่ายๆ คือ ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ',
    }];
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const uri = `${ip}/mysql/DataServiceMain.php`;
    const dataBody = { type: 'store' };
    const getDataSource = (v) => { setActiveGetServices(false); setDataService(v); };
    useEffect(() => {
        activeGetServices && GetServices({ dataBody, getDataSource: (v) => getDataSource(v), uriPointer: uri, });
    }, [activeGetServices]);
    const dataNewStore = Deal_Store.map((v, i) => {
        const ImageD = { uri: v.image };
        // const ImageD = { uri: `${ip}/mysql/uploads/slide/${v.image}` };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() =>
            NavigationNavigate({ ...props, goScreen: 'Store', setData: { id_store: v.id_store }, })}>
            <View style={{
                aspectRatio: 0.65, borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, height: 'auto', marginHorizontal: 2.5,
                width: width * 0.33,
            }}>
                <FastImage source={ImageD} style={{ borderRadius: 5, height: height * 0.18, width: '100%', }} />
                <View style={{ paddingHorizontal: 3 }}>
                    <Text numberOfLines={3} style={[BoxStore3Text, FontFamilyBold, FontSize7]}>{v.name}</Text>
                </View>
            </View>
        </TouchableOpacity>;
    });
    return <View style={FrameBackground}>
        <View style={[FrameBackgroundTextBox, { paddingTop: 3 }]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ร้านเด็ด</Text>
            <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
        </View>
        <ScrollView horizontal>{dataNewStore}</ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export const Pro_for_U = (props) => {
    const for_U_Store = [
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, name: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`, name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`, name: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก (Buy more save more) จะช่วยให้ลูกค้าเพิ่มปริมาณการซื้อ เช่น ซื้อ 2 ชิ้นลด 50 บาท, ซื้อ 3 กล่องประหยัดทันที 100 บาท', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop4.jpg`, name: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ (Loyalty Program) ลูกค้าขาจรกลายเป็นลูกค้าประจำได้ง่ายๆ เพียงแค่เราสร้างระบบสมาชิก หรือโปรแกรมสะสมแต้มรับส่วนลด แลกของรางวัล', },
        { image: `${ip}/mysql/uploads/slide/NewStore/luxury_shop5.jpg`, name: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ', }]
    const for_U_Item = (
        for_U_Store.map((v, i) => {
            const ImageI = { uri: v.image, };
            return <TouchableOpacity activeOpacity={1} key={i} onPress={() =>
                NavigationNavigate({ ...props, goScreen: 'Bell_Detail_Promotion', })}>
                <View style={[FlexRow, { borderColor: '#ECECEC', borderWidth: 1, marginHorizontal: 3, marginTop: 3, }]}>
                    <FastImage source={ImageI} style={{ height: 80, width: '30%', }} />
                    <Text numberOfLines={3} style={[FontFamilyText, FontSize7, { marginLeft: 5, width: '68%' }]}>{v.name}</Text>
                </View>
            </TouchableOpacity>;
        }))
    return <View style={FrameBackground}>
        <View style={[FrameBackgroundTextBox, { paddingTop: 3 }]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>โปรเด็ดที่คัดมาเพื่อคุณ</Text>
        </View>
        {for_U_Item}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export const Update_buy = (props) => {
    const Updateitem = [
        { image: `${ip}/MySQL/uploads/Test_Product/Bag/B1.jpg`, name: 'ได้รับสินค้าแล้วหรือยัง', detail: 'กรุณาตรวจสอบทั้งหมดที่คุณได้รับของคำสั่งซื้อ 200819G066EA2UG กดรับสินค้า เพื่อ FinShoppingMall จะดำเนินการโอนเงินค่าสินค้าไปยังผู้ขาย' },
        { image: `${ip}/MySQL/uploads/Test_Product/Bag/B2.jpg`, name: 'ยินดีต้อนรับร้านค้าใหม่', detail: 'ยินดีด้วยกับร้านใหม่ นี่คือวิธีการใช้บริการส่งฟรี และ 5 ขั้นตอนแสนง่าย สำหรับการค้าขายใน FinshoppingMall คลิกอ่านเพิ่มเติมเลย' },
        { image: `${ip}/MySQL/uploads/Test_Product/Bag/B3.jpg`, name: 'ให้คะแนนสินค้า', detail: 'ได้ให้คะแนนคุณจากคำสั่งซื้อ 20062817WD5TNY กรุณาให้คะแนนผู้ขายภายใน 18-07-2020' },
        { image: `${ip}/MySQL/uploads/Test_Product/Bag/B4.jpg`, name: 'สินค้าถูกจัดส่งแล้ว', detail: 'พัสดุหมายเลข ะ้206409951024B ของคำสั่งซื้อ 200519ด4ไ0ก87ี จัดส่งสำเร็จแล้ว' },
        { image: `${ip}/MySQL/uploads/Test_Product/Bag/B5.jpg`, name: 'ได้รับสินค้าแล้วหรือยัง', detail: 'กรุณาตรวจสอบทั้งหมดที่คุณได้รับของคำสั่งซื้อ 200819G066EA2UG กดรับสินค้า เพื่อ FinShoppingMall จะดำเนินการโอนเงินค่าสินค้าไปยังผู้ขาย' }]
    const Updatebuy = Updateitem.map((v, i) => {
        const ImageI = { uri: v.image, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() =>
            NavigationNavigate({ ...props, goScreen: 'Bell_Detail_Order', })}>
            <View style={[FlexRow, { borderColor: '#ECECEC', borderWidth: 1, marginHorizontal: 3, marginVertical: 2.5 }]}>
                <FastImage source={ImageI} style={{ height: 80, width: width * 0.30, }} />
                <View style={{ marginLeft: 5, }}>
                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize6, { color: mainColor }]}>{v.name}</Text>
                    <Text numberOfLines={4} style={[FontFamilyText, FontSize7, { color: '#B9B9B9', width: width * 0.65, }]}>
                        {v.detail}</Text>
                </View>
            </View>
        </TouchableOpacity>;
    });
    return <View style={FrameBackground}>
        <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>อัพเดทคำสั่งซื้อ</Text>
        <View>{Updatebuy}</View>
    </View>;
};