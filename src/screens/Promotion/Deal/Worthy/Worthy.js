///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen'
import stylesPromotionDeal from '../../../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../customComponents';
import { Button_Bar } from '../../../Main/Highlight/Highlight';
import { GetCoupon, GetServices, GetData, } from '../../../../customComponents/Tools';
import { Slide } from '../Deal';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize5, FontSize6, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Worthy);
function Worthy(props) {
    const { route } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [id_category, setId_Category] = useState(undefined);
    const dataBody2 = { device: 'mobile_device', id_category: id_category ?? '' };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    const getData2 = (v) => { setActiveGetServices2(false); setDataService2(v); };
    const getSource = (v) => { setActiveGetCurrentUser(false); setCurrentUser(v.currentUser); setCokie(v.keycokie); };
    const Props = { ...props, currentUser, dataService };
    const selectedIndex = route.params?.selectedIndex;
    const uri = `${finip}/coupon/coupon_day_mobile`;
    const uri2 = `${finip}/highlight/exclusive_deal`;
    const getUpdateIndex = (v) => {
        const id_category = dataService2.category[v - 1] == undefined ? '' : dataService2.category[v - 1].id_type;
        setActiveGetServices2(true); setId_Category(id_category);
    };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, })
    }, [activeGetCurrentUser]);
    useEffect(() => {
        !activeGetCurrentUser && activeGetServices &&
            GetServices({ Authorization: cokie, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [!activeGetCurrentUser && activeGetServices]);
    useEffect(() => {
        selectedIndex == 1 && !activeGetCurrentUser && activeGetServices2 &&
            GetServices({ dataBody: dataBody2, getDataSource: (v) => getData2(v), showConsole: 'exclusive_deal', uriPointer: uri2, });
    }, [selectedIndex == 1 && !activeGetCurrentUser && activeGetServices2]);
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ดีลสุดคุ้ม' />
        <ScrollList {...Props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { currentUser, dataService } = props;
    return <ScrollView>
        {dataService && dataService.banner && <Slide dataService={dataService?.banner} />}
        {currentUser && <Deal_CuponToday {...props} />}
        <Button_Bar {...props} />
        {dataService && dataService.store.map((v, i) => {
            const value = dataService.product_store.filter((v2) => v2.id_store == v.id_store);
            return <Deal_ProductToday dataService={v} dataService2={value} key={i} />;
        })}
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export const Deal_CuponToday = (props) => {
    const { cokie, currentUser, } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [id_promotion, setId_Promotion] = useState('');
    const dataBody = { device: 'mobile_device', id_customer: currentUser.id_customer, id_promotion, };
    const uri = `${finip}/coupon/save_coupon_fin`;
    const getCoupon = (v) => {
        const id_promo = v.id_promotion; v.list == 'fin' ? activeGetServices = true : v.list == 'shop' ? activeGetServices2 = true : null;
        setActiveGetServices(true); setId_Promotion(id_promo);
    };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    useEffect(() => {
        activeGetServices && currentUser && cokie &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeGetServices && currentUser && cokie]);
    return <View>
        <View style={{ padding: 10, }}>
            <View style={stylesPromotionDeal.Deal_Today_Box}>
                <Text style={FontFamilyText}>คูปองส่วนลดจาก FIN</Text>
                <ScrollView horizontal>
                    {dataService && dataService.coupon.map((v, i) => <GetCoupon codeList={v.my_coupon == 'no' ? 'available' : ''}
                        colorCoupon='#86CFFF' couponText={v.name} getCoupon={v => getCoupon(v)} key={i} saveCoupon
                        setDataService={{ id_promotion: v.id_promotion, list: 'fin', }} textDetail={v.detail}
                        timeOut={v.end_period} />)}
                </ScrollView>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Deal_ProductToday = (props) => {
    const { dataService, dataService2 } = props;
    const ImageStore = { uri: `${finip}/${dataService.store_path}/${dataService.image_store}`, };
    return <View>
        <View style={[FrameBackground, { borderColor: '#ECECEC', borderWidth: 1 }]}>
            <View style={[FlexRow, { margin: 5 }]}>
                <FastImage source={ImageStore} style={{ borderRadius: 20, height: 40, marginTop: 10, width: 40, }} />
                <View style={stylesProfileTopic.Follow_store_Box_text}>
                    <Text style={[FontFamilyBold, FontSize5]}>{dataService.store_name}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5, width: '100%', }}>
                {dataService2 && dataService2.map((value, index) => {
                    const image_produxt = `${finip}/${value.path_image_product}/${value.image_product}`;
                    if (index < 3) return <View key={index} style={[ItemCenter,
                        { borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5, width: '25%', }]}>
                        <View style={{ height: '80%', width: '100%' }}>
                            <FastImage resizeMode={FastImage.resizeMode.contain} source={{ uri: image_produxt }}
                                style={BoxProduct1Image} />
                        </View>
                        <View style={{ borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, paddingHorizontal: 5 }}>
                            {/* <Text style={[FontFamilyBold, FontSize7, { color: mainColor }]}>฿3,xxx</Text> */}
                        </View>
                    </View>;
                })}
                <View style={[ItemCenter,
                    { backgroundColor: mainColor, borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5, width: '25%', }]}>
                    <View>
                        <Text style={[FontFamilyBold, FontSize2, { color: '#FFFFFF' }]}>50%</Text>
                        <TouchableOpacity>
                            <View style={[ItemCenter, { backgroundColor: '#FFFFFF', paddingHorizontal: 5, borderRadius: 5 }]}>
                                <Text style={[FontFamilyBold, FontSize6, { color: mainColor }]}>เก็บ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>;
};