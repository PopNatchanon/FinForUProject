///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData,  setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../../../style/StylesMainScreen'
import stylesFont from '../../../style/stylesFont';
import stylesPromotionDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../style/styleTopic';
import stylesProfile from '../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Button_Bar } from '../../HighlightScreen';
import { GetServices, GetCoupon, GetData, TabBar, LoadingScreen, NavigationNavigateScreen } from '../../../customComponents/Tools';
import { TodayProduct, Slide, AppBar1, ExitAppModule, } from '../../MainScreen';
import { Store_Detail } from '../../Recommend_Store';
import { ProductBox } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData,  setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Deal_Topic);
function Deal_Topic(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [id_category, setId_Category] = useState(undefined);
    var dataBody2 = {
        device: 'mobile_device',
        id_category: id_category ?? ''
    };
    var uri = `${finip}/coupon/coupon_day_mobile`;
    var uri2 = `${finip}/highlight/exclusive_deal`;
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); setCokie(value.keycokie); };
    let getUpdateIndex = (value) => {
        var id_category = dataService2.category[value - 1] == undefined ? '' : dataService2.category[value - 1].id_type;
        setActiveGetServices2(true); setId_Category(id_category);
    };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (value) => getSource(value), getUser: true, })
    }, [activeGetCurrentUser]);
    useEffect(() => {
        !activeGetCurrentUser && activeGetServices &&
            GetServices({ Authorization: cokie, uriPointer: uri, getDataSource: (value) => getData(value), });
    }, [!activeGetCurrentUser && activeGetServices]);
    useEffect(() => {
        selectedIndex == 1 && !activeGetCurrentUser && activeGetServices2 && GetServices({
            dataBody: dataBody2, uriPointer: uri2, getDataSource: (value) => getData2(value), showConsole: 'exclusive_deal'
        });
    }, [selectedIndex == 1 && !activeGetCurrentUser && activeGetServices2]);
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                return <View style={stylesMain.SafeAreaView}>
                    <AppBar1 {...props} backArrow titleHead='ดีลสุดคุ้ม' />
                    <ScrollView>
                        {dataService && dataService.banner && <Slide banner={dataService.banner} />}
                        {currentUser && <Deal_CuponToday {...props} currentUser={currentUser} cokie={cokie} />}
                        {<Button_Bar {...props} />}
                        {dataService && dataService.store.map((value, index) => {
                            const value2 = dataService.product_store.filter((value2) => value2.id_store == value.id_store);
                            return <Deal_ProductToday dataService={value} dataService2={value2} key={index} />;
                        })}
                    </ScrollView>
                </View>;
            case 1:
                return <View>
                    <AppBar1 {...props} backArrow titleHead='ดีลสุด Exclusive' />
                    <ScrollView stickyHeaderIndices={[2]}>
                        {dataService && dataService.banner && <Slide banner={dataService.banner} />}
                        <View style={{ marginBottom: 10 }}></View>
                        {dataService2 && <Button_Bar {...props} category={dataService2.category} key='Button_Bar'
                            getUpdateIndex={(value) => getUpdateIndex(value)} />}
                        {dataService2 && <TodayProduct {...props} key='TodayProduct' noTitle loadData={dataService2.product} />}
                    </ScrollView>
                </View>;
            case 2:
                return <View>
                    <AppBar1 {...props} backArrow titleHead='ร้านค้ามือสองลดราคา' />
                    <ScrollView stickyHeaderIndices={[2]}>
                        <Slide />
                        <View style={{ marginBottom: 10 }}></View>
                        <Button_Bar />
                        {/* <Store_Detail /> */}
                    </ScrollView>
                </View>;
            case 3:
                return <View>
                    <AppBar1 {...props} backArrow titleHead='สินค้ามือสองลดราคา' />
                    <ScrollView stickyHeaderIndices={[2]}>
                        <Slide />
                        <View style={{ marginBottom: 10 }}></View>
                        <Button_Bar {...props} />
                        {dataService ?
                            <TodayProduct {...props} noTitle loadData={dataService} typeip prepath='mysql' /> :
                            null}
                    </ScrollView>
                </View>;
            case 4:
                return <View>
                    <AppBar1 {...props} backArrow titleHead='ร้านค้าที่มีดีล' />
                    <ScrollView stickyHeaderIndices={[2]}>
                        <Slide />
                        <View style={{ marginBottom: 10 }}></View>
                        <Button_Bar />
                        {/* <Store_Detail /> */}
                    </ScrollView>
                </View>;
            case 5:
                return <View style={[stylesMain.SafeAreaView, stylesMain.ItemCenter]}>
                    <Not_Internet {...props} />
                </View>;
        };
    };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {(activeGetCurrentUser || activeGetServices || activeGetServices2) && <LoadingScreen key='LoadingScreen' />}
        {PathList()}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export let Deal_CuponToday = (props) => {
    const { cokie, currentUser, } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [id_promotion, setId_Promotion] = useState('');
    var dataBody = {
        id_customer: currentUser.id_customer, device: 'mobile_device', id_promotion,
    };
    var uri = `${finip}/coupon/save_coupon_fin`;
    let getCoupon = (value) => {
        const id_promo = value.id_promotion;
        value.list == 'fin' ? activeGetServices = true : value.list == 'shop' ? activeGetServices2 = true : null;
        setActiveGetServices(true);
        setId_Promotion(id_promo);
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    useEffect(() => {
        activeGetServices && currentUser && cokie &&
            GetServices({ Authorization: cokie, dataBody, uriPointer: uri, getDataSource: value => getData(value), });
    }, [activeGetServices && currentUser && cokie]);
    return <View>
        <View style={{ padding: 10, }}>
            <View style={stylesPromotionDeal.Deal_Today_Box}>
                <Text style={stylesFont.FontFamilyText}>คูปองส่วนลดจาก FIN</Text>
                <ScrollView horizontal>
                    {dataService && dataService.coupon.map((value, index) => {
                        return <GetCoupon codeList={value.my_coupon == 'no' ? 'available' : ''} colorCoupon='#86CFFF'
                            couponText={value.name} getCoupon={value => getCoupon(value)} key={index} saveCoupon
                            setDataService={{ list: 'fin', id_promotion: value.id_promotion }} textDetail={value.detail}
                            timeOut={value.end_period} />
                    })}
                </ScrollView>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Deal_ProductToday = (props) => {
    const { dataService, dataService2 } = props;
    const image_store = `${finip}/${dataService.store_path}/${dataService.image_store}`;
    return <View style={stylesMain.SafeAreaView}>
        <View style={[stylesMain.FrameBackground, { borderColor: '#ECECEC', borderWidth: 1 }]}>
            <View style={[stylesMain.FlexRow, { margin: 5 }]}>
                <FastImage style={{ height: 40, width: 40, marginTop: 10, borderRadius: 20, }} source={{ uri: image_store, }} />
                <View style={stylesProfileTopic.Follow_store_Box_text}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataService.store_name}</Text>
                </View>
            </View>
            <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', padding: 5 }}>
                {dataService2 && dataService2.map((value, index) => {
                    const image_produxt = `${finip}/${value.path_image_product}/${value.image_product}`;
                    if (index < 3) return <View key={index} style={[stylesMain.ItemCenter,
                    { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5 }]}>
                        <View style={{ height: '80%', width: '100%' }}>
                            <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: image_produxt }}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                        <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                            {/* <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: mainColor }]}>฿3,xxx</Text> */}
                        </View>
                    </View>;
                })}
                <View style={[stylesMain.ItemCenter,
                { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5, backgroundColor: mainColor }]}>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#FFFFFF' }]}>50%</Text>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', paddingHorizontal: 5, borderRadius: 5 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>เก็บ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>;
};