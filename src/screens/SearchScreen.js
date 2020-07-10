///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, BannerBar_THREE, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetData, GetServices, SlideTab2, } from '../customComponents/Tools'
import { NavigationNavigate } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
function SearchScreen(props) {
    const { navigation, route } = props;
    const id_types = route.params?.id_type;
    const modeStore = route.params?.modeStore;
    const SearchText = route.params?.SearchText;
    const [activeArray, setActiveArray] = useState(true);
    const [actionFirstEnter, setActionFirstEnter] = useState(true);
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [actionStart, setActionStart] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [count, setCount] = useState(0);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [data, setData] = useState([]);
    const [dataService, setDataService] = useState(undefined);
    const [dataServiceBU, setDataServiceBU] = useState(undefined);
    const [filterValue, setFilterValue] = useState({ popular: 'popular' });
    const [id_type, setId_type] = useState(undefined);
    const [sliderVisible, setSliderVisible] = useState(false);
    var dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        key: SearchText, //<< ใช้ค้นหาสินค้า
        popular: filterValue?.popular ?? '', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        lastest: filterValue?.lastest ?? '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        best_sale: filterValue?.best_sale ?? '', // << ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        sort_price: filterValue?.sort_price ?? '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
        min_price: filterValue?.minvalue ?? '',
        max_price: filterValue?.maxvalue ?? '',
        id_type: filterValue?.id_type ?? '' //<< กรณีเลือกแบบระเลียด
    };
    var dataBody2 = {
        id_customer: currentUser?.id_customer ?? '',
        id_type
    };
    var uri = `${finip}/search/search_product`;
    var uri2 = `${finip}/search/other_store`;
    let getDataSource = (value) => { setActiveGetServices(false); setDataService(value); };
    let getDataSource2 = (value) => { setActiveGetServices(false); setDataService(value); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    let setStart = () => {
        filterValue.id_type = dataServiceBU.category[0].id_type;
        setActiveGetServices(true);
        setActionStart(false);
        setFilterValue(filterValue);
        setId_type(filterValue.id_type);
    };
    let setStatefilterValue = (value) => {
        filterValue.minvalue = value?.minvalue ?? '';
        filterValue.maxvalue = value?.maxvalue ?? '';
        filterValue.id_type = ((value.selectedIndex != -1 && value.selectedIndex != '') && value.listIndex == 0) ?
            dataServiceBU.category[value.selectedIndex].id_type : '';
        setActiveGetServices(true);
        setActionStart(false);
        setFilterValue(filterValue);
        setId_type(filterValue.id_type);
        setSliderVisible(false);
    };
    let setStateMainfilterValue = (value) => {
        filterValue.popular = value.selectedIndex == 0 ? 'popular' : '';
        filterValue.best_sale = value.selectedIndex == 1 ? 'best_sale' : '';
        filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
        filterValue.sort_price = value.selectedIndex == 3 ? value.actionReturn : '';
        setActiveGetServices(true);
        setFilterValue(filterValue);
    };
    useEffect(() => {
        if (actionFirstEnter) { setActionFirstEnter(false); setId_type(id_types); };
    }, [actionFirstEnter]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (value) => getSource(value), getUser: true, });
    }, [activeGetCurrentUser]);
    useEffect(() => {
        modeStore && !activeGetCurrentUser && activeGetServices &&
            GetServices({ uriPointer: uri2, dataBody: dataBody2, getDataSource: (value) => getDataSource(value), });
    }, [modeStore && !activeGetCurrentUser && activeGetServices]);
    useEffect(() => {
        SearchText && !activeGetCurrentUser && activeGetServices &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getDataSource2(value) });
    }, [SearchText && !activeGetCurrentUser && activeGetServices]);
    if (modeStore == undefined && dataService && activeArray) {
        var title = 'หมวดหมู่';
        var subtitle = [];
        for (var n = 0; n < dataService.category.length; n++) { subtitle.push({ name: dataService.category[n].name }); };
        data.push({ title, subtitle });
        setActiveArray(false);
        setData(data);
        setDataServiceBU(dataService);
    };
    if (actionStart && dataService && dataServiceBU && filterValue?.id_type == undefined) { setStart(); };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} searchBar={SearchText ? undefined : true} SearchText={SearchText} backArrow cartBar />
        {modeStore ?
            <ScrollView>
                <HeadBox {...props} SearchText={SearchText} />
                {dataService?.store && dataService.store.map((value, index) => <StoreCard {...props} cokie={cokie}
                    currentUser={currentUser} dataService={value} key={index} />)}
            </ScrollView> :
            SearchText ?
                <ScrollView>
                    <HeadBox {...props} id_type={id_type} SearchText={SearchText} otherOption />
                    {dataService?.store && dataService.store.map((value, index) =>
                        <StoreCard {...props} cokie={cokie} currentUser={currentUser} dataService={value} key={index} />)}
                    <BannerBar_THREE />
                    <Button_Bar filterValue={(value) => setStateMainfilterValue(value)} setSliderVisible={(value) =>
                        setSliderVisible(value)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
                    {!activeGetServices && !actionStart && dataService?.product && <TodayProduct {...props} noTitle
                        loadData={dataService.product} />}
                </ScrollView> : <View></View>}
        <SlideTab2 data={data} filterValue={(value) => setStatefilterValue(value)} sliderVisible={sliderVisible}
            setStateSliderVisible={(value) => setSliderVisible(value)} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> HeadBox
export let HeadBox = (props) => {
    const { id_type, navigation, otherOption, SearchText, } = props;
    return <View>
        <View style={[stylesMain.FrameBackgroundTextBox]}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                ร้านค้าที่เกี่ยวข้องกับ <Text>"{SearchText}"</Text></Text>
            {otherOption && <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'SearchScreen', setData: { modeStore: true, SearchText, id_type }, navigation })}>
                <View style={[stylesMain.FlexRow, { marginRight: 4, marginTop: 8 }]}>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7,
                    stylesMain.ItemCenterVertical, { marginRight: 0, }]}>ร้านค้าอื่นๆ</Text>
                    <IconEntypo name="chevron-right" size={18} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
                </View>
            </TouchableOpacity>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> StoreCard
export let StoreCard = (props) => {
    const { cokie, currentUser, dataService, navigation } = props;
    const [activeFollow, setActiveFollow] = useState(false);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService2, setDataService2] = useState(undefined);
    var dataBody = {
        id_customer: currentUser && currentUser.id_customer,
        id_store: dataService.id_store,
        follow: activeFollow ? "active" : '',
    };
    var dataMySQL = `${finip}/${dataService.store_path}/${dataService.image_store}`;
    var uri = `${finip}/brand/follow_data`;
    let getData = (value) => { setActiveFollow(true); setActiveGetServices(true); setDataService2(value); };
    let setStateFollow = () => { setActiveFollow(true); setActiveGetServices(true); };
    useEffect(() => {
        activeGetServices && GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: (value) => getData(value) });
    }, [activeGetServices]);
    return <View style={stylesMain.BoxStore5Box}>
        <TouchableOpacity style={stylesMain.FlexRow} onPress={() =>
            NavigationNavigate({ goScreen: 'StoreScreen', setData: { id_item: 24 }, navigation })}>
            <View style={[stylesMain.BoxStore5Image, stylesMain.ItemCenterVertical, { width: 45, height: 45, marginRight: 10, }]}>
                <FastImage source={{ uri: dataMySQL, }} style={[stylesMain.BoxStore5Image]} />
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataService.store_name}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    ผู้ติดตาม : {dataService2 && dataService2.number_follow}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#AAAAAA' }]}>
                    จำนวนสินค้า <Text style={{ color: mainColor }}> {dataService.amount_product}</Text> |  คะแนน <Text style={{
                        color: mainColor
                    }}>{dataService.rating}</Text></Text>
            </View>
            <View style={stylesMain.FlexRow}>
                <View style={[
                    stylesMain.ItemCenter, { width: 70, height: 25, backgroundColor: mainColor, borderRadius: 6, marginHorizontal: 2 }]}>
                    <TouchableOpacity onPress={() => setStateFollow()}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                            {dataService2?.output}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ width: 70, height: 25, backgroundColor: mainColor, borderRadius: 6, marginHorizontal: 2 }]}>
                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: '100%', height: '100%' }]} onPress={() =>
                        NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation })}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>พูดคุย</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    </View>;
};