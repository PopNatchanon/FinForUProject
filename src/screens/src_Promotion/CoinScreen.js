///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
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
import ststylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TodayProduct, ExitAppModule, } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { GetData, GetServices, ProductBox, TabBar, LoadingScreen, } from '../../customComponents/Tools';
import { AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(CoinScreen);
function CoinScreen(props) {
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeDataService, setActiveDataService] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    var uri = `${finip}/coupon/fin_coin_mobile`
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, })
    }, [activeGetCurrentUser]);
    useEffect(() => {
        !activeGetCurrentUser && activeDataService && cokie &&
            GetServices({ uriPointer: uri, Authorization: cokie, getDataSource: value => getData(value), });
    }, [!activeGetCurrentUser && activeDataService && cokie]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {(activeGetCurrentUser || activeDataService) && <LoadingScreen key='LoadingScreen' />}
        <AppBar {...props} titleHead={'FIN COINS'} backArrow searchBar chatBar />
        <ScrollView>
            <Slide dataService={dataService?.banner} />
            <CoinCollect currentUser={currentUser} cokie={cokie} />
            <LinearGradient colors={['#E21B1B', '#E65A5A']}
                style={{ marginVertical: 3, marginHorizontal: 5, borderBottomRightRadius: 50, width: 180, borderColor: '#C4C4C4', borderWidth: 1 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN จัดหนักรับ COIN</Text>
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
export let CoinCollect = (props) => {
    const { cokie, currentUser } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [id_promotion, setId_promotion] = useState(undefined);
    const [pathlist, setPathlist] = useState(0);
    const item = [{ name: 'คูปองทั้งหมด' }, { name: 'ท่องเที่ยว' }, { name: 'ส่วนลด' }, { name: 'อื่นๆ' }];
    const uri = `${finip}/coupon/save_coupon_voucher`;
    var dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        device: "mobile_device",
        id_promotion_voucher: id_promotion ?? ''
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getPathlist = (value) => { setPathlist(value.selectedIndex); };
    let getVoucher = (value) => { setActiveGetServices(true); setId_promotion(value); };
    useEffect(() => {
        activeGetServices && currentUser && cokie &&
            GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: value => getData(value) });
    }, [activeGetServices && currentUser && cokie]);
    return <View>
        <View style={stylesProfile.CoinCollect}>
            <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, stylesMain.FlexRow, { width }]}>
                <FastImage source={require('../../../icon/bitcoin2.png')} style={stylesProfile.CoinCollectImage} />
                <View style={stylesProfile.CoinCollectBox}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { marginTop: 10, marginLeft: 20, }]}>FIN COIN</Text>
                    <View style={stylesMain.ItemCenter}>
                        <NumberFormat value={dataService?.coin} displayType={'text'} thousandSeparator={true} renderText={value =>
                            <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyBold]}>{value}</Text>} />
                    </View>
                </View>
            </View>
        </View>
        <View style={{ marginTop: 10 }}>
            <TabBar sendData={value => getPathlist(value)} inactiveBoxColor={'#fff'} inactiveColor={mainColor} type='box' item={item}
                inactiveFontColor={mainColor} widthBox={98} fontSizeStyle={12} />
        </View>
        <View>
            {dataService?.coupon?.map((value, index) => <CoinPageBody currentUser={currentUser} cokie={cokie} getVoucher={value =>
                getVoucher(value)} dataService={value} key={index} />)}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> CoinPageBody
export let CoinPageBody = (props) => {
    const { cokie, currentUser, dataService, getVoucher } = props;
    const [activeGetServices, setActiveGetServices] = useState(false);
    const [dataService2, setDataService2] = useState(false);
    const DetailCoinSheet = useRef(null);
    var dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        device: "mobile_device",
        id_promotion_voucher: dataService?.id_promotion ?? ''
    };
    var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image}`;
    var uri = `${finip}/coupon/show_voucher`;
    let getData = (value) => { setActiveGetServices(false); setDataService2(value); };
    useEffect(() => {
        activeGetServices && currentUser && cokie &&
            GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: value => getData(value) });
    }, [activeGetServices && currentUser && cokie]);
    let DetailCoin = () => {
        var dataMySQL2 = `${finip}/${dataService.image_path}/${dataService.image}`;
        return <View style={{ height: '100%' }}>
            <View style={{ width: '100%', height: 150, marginBottom: 8, }}>
                <FastImage style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]} source={{ uri: dataMySQL2, }}
                    resizeMode={FastImage.resizeMode.stretch} />
            </View>
            <ScrollView>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataService.detail}</Text>
            </ScrollView>
            <View style={[stylesMain.FlexRow, { justifyContent: 'center', height: 40, paddingTop: 8, }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => DetailCoinSheet.current.close()}>
                    <View style={{ paddingHorizontal: 25, borderColor: mainColor, borderWidth: 1, borderRadius: 5 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    dataService.my_coupon == 'yes' ? null : dataService.my_coupon == 'no' ? getVoucher(dataService.id_promotion) : null}>
                    <View style={{
                        borderColor: dataService.my_coupon == 'yes' ? '#ECECEC' : dataService.my_coupon == 'no' ? mainColor : '#DC3545',
                        borderWidth: 1, marginLeft: 10, backgroundColor: dataService.my_coupon == 'yes' ? '#ECECEC' :
                            dataService.my_coupon == 'no' ? mainColor : '#ECECEC', borderRadius: 5, paddingHorizontal: 20
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                            color: dataService.my_coupon == 'yes' ? '#111111' : dataService.my_coupon == 'no' ? '#FFFFFF' : '#DC3545',
                        }]}>{dataService.my_coupon == 'yes' ? 'แลกแล้ว' : dataService.my_coupon == 'no' ?
                            `แลก ${dataService.coin_exchange} coin` : `ใช้ ${dataService.coin_exchange} coin`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    };
    return <View style={stylesMain.FrameBackground}>
        <View style={{ alignItems: 'center' }}>
            <View>
                <BottomSheet ref={DetailCoinSheet} height={500} duration={250}
                    customStyles={{ container: { padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
                    {DetailCoin()}
                </BottomSheet>
                <View style={ststylePromotionDeal.CampaignBody}>
                    <TouchableOpacity activeOpacity={1} onPress={() => DetailCoinSheet.current.open()}>
                        <View style={[ststylePromotionDeal.CampaignBody_BoxImage, { padding: 5 }]}>
                            <FastImage source={{ uri: dataMySQL, }} style={stylesMain.BoxProduct1Image} />
                        </View>
                        <View style={[ststylePromotionDeal.CampaignBody_Box]}>
                            <View style={[ststylePromotionDeal.CampaignBody_BoxText, { marginLeft: 4 }]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                    {dataService.detail}</Text>
                                <Text numberOfLines={1} style={stylesFont.FontFamilyText}>วันหมดอายุ {dataService.end_period}</Text>
                            </View>
                            <View style={[ststylePromotionDeal.CampaignBody_Icon_Button, stylesMain.ItemCenterVertical]}>
                                <View style={[stylesProfile.CoinPageBodyBoxBody2Box, stylesMain.ItemCenter, {
                                    backgroundColor: dataService.my_coupon == 'yes' ? '#ECECEC' : dataService.my_coupon == 'no' ?
                                        mainColor : '#ECECEC'
                                }]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize8, {
                                        color: dataService.my_coupon == 'yes' ? '#111111' : dataService.my_coupon == 'no' ? '#FFFFFF' :
                                            '#DC3545'
                                    }]}>{dataService.my_coupon == 'yes' ? 'แลกแล้ว' :
                                        dataService.my_coupon == 'no' ? `แลก ${dataService.coin_exchange} coin` :
                                            `ใช้ ${dataService.coin_exchange} coin`}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>;
};