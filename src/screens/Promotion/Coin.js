///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import BottomSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
import stylesPromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TodayProduct, ExitAppModule, } from '../Main/Main';
import { Button_Bar, Slide } from './Deal/Deal';
import { GetData, GetServices, ProductBox, TabBar, LoadingScreen, } from '../../customComponents/Tools';
import { AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> set value
const LOADING_ICON = require('../../../images/icon.png');
const LOADING_ICON_STYLE = { height: '100%', width: '100%' };
const { cacheOnly, } = FastImage.cacheControl;
const { contain, cover, stretch, } = FastImage.resizeMode;
const { Text_Head, } = stylesDeal;
const { CoinCollects, CoinCollectBox, CoinCollectImage, CoinPageBodyBoxBody2Box, } = stylesProfile;
const { CampaignBody, CampaignBody_Box, CampaignBody_BoxImage, CampaignBody_BoxText, CampaignBody_Icon_Button, } = stylesPromotionDeal;
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize5, FontSize6, FontSize7, FontSize8, } = stylesFont;
const { BoxProduct1Image, FlexRow, ItemCenter, ItemCenterVertical, SafeAreaViews, } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Coin);
function Coin(props) {
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeDataService, setActiveDataService] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    var uri = `${finip}/coupon/fin_coin_mobile`
    let getData = (v) => { setActiveDataService(false); setDataService(v); };
    let getSource = (v) => { setActiveGetCurrentUser(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, })
    }, [activeGetCurrentUser]);
    useEffect(() => {
        !activeGetCurrentUser && activeDataService && cokie &&
            GetServices({ Authorization: cokie, getDataSource: v => getData(v), uriPointer: uri, });
    }, [!activeGetCurrentUser && activeDataService && cokie]);
    return <SafeAreaView style={SafeAreaViews}>
        {(activeGetCurrentUser || activeDataService) && <LoadingScreen key='LoadingScreen' />}
        <AppBar {...props} backArrow chatBar searchBar titleHead={'FIN COINS'} />
        <ScrollView>
            <Slide dataService={dataService?.banner} />
            <CoinCollect currentUser={currentUser} cokie={cokie} />
            <LinearGradient colors={['#E21B1B', '#E65A5A']} style={
                { marginVertical: 3, borderBottomRightRadius: 50, width: 180, borderColor: '#C4C4C4', borderWidth: 1 }}>
                <Text style={[FontFamilyBold, FontSize5, Text_Head]}>FIN จัดหนักรับ COIN</Text>
            </LinearGradient>
            <TodayProduct {...props} noTitle loadData={dataService?.product_pro_coin} />
        </ScrollView>
        <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
            <Button_Bar {...props} />
        </View>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const CoinCollect = (props) => {
    const { cokie, currentUser } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [id_promotion, setId_promotion] = useState(undefined);
    const [pathlist, setPathlist] = useState(0);
    const IconCoin = require('../../../icon/bitcoin2.png');
    const item = [{ name: 'คูปองทั้งหมด' }, { name: 'ท่องเที่ยว' }, { name: 'ส่วนลด' }, { name: 'อื่นๆ' }];
    const uri = `${finip}/coupon/save_coupon_voucher`;
    const dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        device: "mobile_device",
        id_promotion_voucher: id_promotion ?? '',
        type_voucher: '',
    };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    const getPathlist = (v) => setPathlist(v.selectedIndex);
    const getVoucher = (v) => { setActiveGetServices(true); setId_promotion(v); };
    useEffect(() => {
        activeGetServices && currentUser && cokie &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeGetServices && currentUser && cokie]);
    return <View>
        <LinearGradient colors={['#CE2629', '#F84B4E', '#FCBCBD']} end={{ x: 0.7, y: 1 }} start={{ x: 0, y: 0.5 }} style={CoinCollects}>
            <View style={[FlexRow, ItemCenter, ItemCenterVertical, { width, }]}>
                <FastImage source={IconCoin} style={CoinCollectImage} />
                <View style={CoinCollectBox}>
                    <Text style={[FontFamilyText, FontSize6, { marginTop: 10, marginLeft: 20, }]}>FIN COIN</Text>
                    <View style={ItemCenter}>
                        <NumberFormat displayType={'text'} thousandSeparator={true} renderText={(v) => <Text style={[FontFamilyBold,
                            FontSize3]}>{v}</Text>} value={dataService?.coin} />
                    </View>
                </View>
            </View>
        </LinearGradient>
        <View style={{ marginVertical: 3, }}>
            <TabBar fontSizeStyle={12} inactiveBoxColor={'#fff'} inactiveColor={mainColor} inactiveFontColor={mainColor} item={item}
                sendData={(v) => getPathlist(v)} type='box' widthBox={98} />
        </View>
        <View>
            {dataService?.coupon?.map((v, i) => <CoinPageBody cokie={cokie} currentUser={currentUser} dataService={v} getVoucher={(v2) =>
                getVoucher(v2)} key={i} />)}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> CoinPageBody
export let CoinPageBody = (props) => {
    const { cokie, currentUser, dataService, getVoucher } = props;
    const { coin_exchange, detail, end_period, id_promotion, image, image_path, my_coupon, } = dataService;
    const [activeGetServices, setActiveGetServices] = useState(false);
    const [dataService2, setDataService2] = useState(false);
    const DetailCoinSheet = useRef(null);
    const dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        device: "mobile_device",
        id_promotion_voucher: id_promotion ?? ''
    };
    const ImageVoucher = { uri: `${finip}/${image_path}/${image}`, };
    const uri = `${finip}/coupon/show_voucher`;
    const getData = (v) => { setActiveGetServices(false); setDataService2(v); };
    useEffect(() => {
        activeGetServices && cokie && currentUser &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeGetServices && cokie && currentUser]);
    const DetailCoin = () => {
        return <View style={{ height: '100%' }}>
            <View style={{ width: '100%', height: 150, }}>
                <FastImage resizeMode={stretch} source={ImageVoucher} style={[BoxProduct1Image, { borderRadius: 5, }]} />
            </View>
            <ScrollView>
                <Text style={[FontFamilyText, FontSize6]}>{detail} ใครกำลังมองหาที่เที่ยวใกล้กรุงเทพ ค้างคืนได้ มาอัพเดต ทริปเที่ยว 2 วัน 1 คืน จาก 3 จังหวัดใกล้กรุงเทพ ซึ่งเป็นทริปเที่ยวยอดนิยม
                ที่จัดง่าย ไปน้อยหรือแก๊งใหญ่ก็ได้ และบางทีเวลาเราไปเที่ยวใกล้กรุงก็อยากจะยกขบวนทั้งครอบครัวหรือว่าเดอะแก๊งค์ขนาดใหญ่ไปเที่ยวแบบค้างคืน
                รวมถึงมีที่พักไซส์บิ๊กที่จุคนได้เยอะแถมมีกิจกรรมให้ทำได้แบบสนุกเพลินลืมเบื่อ เศร้า เหงา เซ็ง ไปเลย</Text>
            </ScrollView>
            <View style={[FlexRow, { justifyContent: 'center', height: 40, paddingTop: 8, }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => DetailCoinSheet.current.close()}>
                    <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 1, paddingHorizontal: 25, }}>
                        <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => my_coupon == 'yes' ? null : my_coupon == 'no' ? getVoucher(id_promotion) : null}>
                    <View style={{
                        backgroundColor: my_coupon == 'yes' ? '#ECECEC' : my_coupon == 'no' ? mainColor : '#ECECEC',
                        borderColor: my_coupon == 'yes' ? '#ECECEC' : my_coupon == 'no' ? mainColor : '#DC3545', borderRadius: 5,
                        borderWidth: 1, marginLeft: 10, paddingHorizontal: 20
                    }}>
                        <Text style={[FontFamilyText, FontSize5, ItemCenterVertical,
                            { color: my_coupon == 'yes' ? '#111111' : my_coupon == 'no' ? '#FFFFFF' : '#DC3545', }]}>{my_coupon == 'yes' ?
                                'แลกแล้ว' : my_coupon == 'no' ? `แลก ${coin_exchange} coin` : `ใช้ ${coin_exchange} coin`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    };
    return <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 3, marginBottom: 3, }}>
        <View style={{ alignItems: 'center', }}>
            <View>
                <BottomSheet customStyles={{ container: { padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, } }} duration={250}
                    height={350} ref={DetailCoinSheet}>{DetailCoin()}</BottomSheet>
                <View style={CampaignBody}>
                    <TouchableOpacity activeOpacity={1} onPress={() => DetailCoinSheet.current.open()}>
                        <View style={[CampaignBody_BoxImage]}>
                            <FastImage resizeMode={stretch} source={ImageVoucher} style={[BoxProduct1Image, { borderRadius: 5, }]} />
                        </View>
                        <View style={[CampaignBody_Box]}>
                            <View style={[CampaignBody_BoxText, { marginLeft: 4, }]}>
                                <Text numberOfLines={2} style={[FontFamilyBold, FontSize7]}>
                                    ได้รับการสนับสนุน จาก Fin Shoppinf Mall {detail}</Text>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize7, { color: '#C4C4C4', }]}>
                                    วันหมดอายุ {end_period}</Text>
                            </View>
                            <View style={[CampaignBody_Icon_Button, ItemCenterVertical]}>
                                <View style={[CoinPageBodyBoxBody2Box, ItemCenter,
                                    { backgroundColor: my_coupon == 'yes' ? '#ECECEC' : my_coupon == 'no' ? mainColor : '#ECECEC', }]}>
                                    <Text style={[ItemCenterVertical, FontFamilyText, FontSize8,
                                        { color: my_coupon == 'yes' ? '#111111' : my_coupon == 'no' ? '#FFFFFF' : '#DC3545', }]}>
                                        {my_coupon == 'yes' ? 'แลกแล้ว' : my_coupon == 'no' ? `แลก ${coin_exchange} coin` :
                                            `ใช้ ${coin_exchange} coin`}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>;
};