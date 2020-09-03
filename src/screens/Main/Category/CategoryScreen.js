///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View, Dimensions, ActivityIndicator,
} from 'react-native';
import { connect, } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
} from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { BannerBar_TWO, ExitAppModule, TodayProduct, } from '../../Main/MainScreen';
import { Button_Bar, } from '../Exclusive/ExclusiveScreen';
import { Slide } from '../../../screens/Promotion/DealScreen'
import { GetServices, ProductBox, SlideTab2, LoadingScreen, FlatProduct, } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar, GenArray } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> set value
const LOADING_ICON = require('../../../../images/icon.png');
const LOADING_ICON_STYLE = { height: '100%', width: '100%' };
const { cacheOnly, } = FastImage.cacheControl;
const { contain, cover, stretch, } = FastImage.resizeMode;
///----------------------------------------------------------------------------------------------->>>> Main
const getCartDataCount = (cartData) => {
    var cartDataCount = 0;
    cartData?.map((value) => value.product.map((value2) => { return cartDataCount += value2.quantity * 1; }));
    return cartDataCount;
};
const mapStateToProps = (state) => ({
    cartData: state.cartData, cartDataCount: getCartDataCount(state.cartData.data), customerData: state.customerData,
    getFetchData: state.singleFetchDataFromService, reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
function CategoryScreen(props) {
    const { route } = props;
    const id_type = route.params?.id_type;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [filterValue, setFilterValue] = useState({});
    const [sliderVisible, setSliderVisible] = useState(false);
    var dataBody = {
        category_number: id_type,
        sort_by: filterValue && filterValue.sort_by ? filterValue.sort_by : '',
        min_price: filterValue && filterValue.minvalue ? Number(filterValue.minvalue) : '',
        max_price: filterValue && filterValue.maxvalue ? Number(filterValue.maxvalue) : '',
        lastest: filterValue && filterValue.lastest ? filterValue.lastest : '',
    };
    var uri = `${finip}/category/category_mobile`;
    let getDataSource = (value) => { setActiveGetServices(false); setDataService(value); !dataService2 && setDataService2(value); }
    useEffect(() => {
        activeGetServices && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getDataSource(value), });
    }, [activeGetServices]);
    let setStatefilterValue = (value) => {
        filterValue.minvalue = value.minvalue ?? '';
        filterValue.maxvalue = value.maxvalue ?? '';
        setActiveGetServices(true);
        setDataService(undefined);
        setFilterValue(filterValue);
        setSliderVisible(false);
    };
    let setStateMainfilterValue = (value) => {
        filterValue.lastest = value == 2 ? 'lastest' : '';
        filterValue.sort_by = value == 3 ? value.actionReturn : '';
        setActiveGetServices(true);
        setDataService(undefined);
        setFilterValue(filterValue);
    };
    const data = [{
        title: 'หมวดหมู่', subtitle: [{ name: 'กระเป๋าสะพายข้าง' }, { name: 'กระเป๋าสะพายหลัง' }, { name: 'กระเป๋าสตางค์' },
        { name: 'กระเป๋าใส่นามบัตร' }, { name: 'กระเป๋าใส่เหรียญ' }, { name: 'กระเป๋าถือ' }, { name: 'อื่นๆ' }]
    }, { title: 'แบรนด์', subtitle: [{ name: 'BP world' }, { name: 'Tokyo boy' }, { name: 'JJ' }, { name: 'ETONWEAG' }] }];
    return <SafeAreaView style={[stylesMain.SafeAreaView]}>
        <AppBar {...props} backArrow cartBar enableSearch />
        <ScrollView stickyHeaderIndices={[5]}>
            <Slide {...props} dataService={dataService2?.banner} />
            <Recommend_Store {...props} recommend={dataService2?.recommend} />
            <Product_Brand {...props} loadData={dataService2?.product_popular_brand} />
            <BannerBar_TWO />
            <View style={{ marginBottom: 2 }}></View>
            <Button_Bar filterValue={value => setStateMainfilterValue(value)} setSliderVisible={value => setSliderVisible(value)} />
            <TodayProduct {...props} noTitle loadData={dataService?.product} />
        </ScrollView>
        <ExitAppModule {...props} />
        <SlideTab2 data={data} filterValue={value => setStatefilterValue(value)} sliderVisible={sliderVisible}
            setStateSliderVisible={value => setSliderVisible(value)} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Recommend_Store
const { FontFamilyBold, FontSize4 } = stylesFont;
const {
    BoxProduct1Box2new, BoxProduct2Image, BoxStore1Box, BoxStore1Image, FrameBackground, FrameBackgroundTextBox, FrameBackgroundTextStart,
    ItemCenter,
} = stylesMain;
export let Recommend_Store = (props) => {
    const { navigation, recommend } = props;
    const [activeScroll, setActiveScroll] = useState(false);
    let boxEmpty = [0, 1, 2].map((_, i) => <View key={i} style={[BoxStore1Box, ItemCenter,
        { width: width * 0.40, backgroundColor: '#ECECEC', borderRadius: 5 }]}>
        <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={LOADING_ICON_STYLE} />
    </View>);
    let dataPromotionPopular = recommend?.length > 0 ?
        recommend.map((item, index) => {
            const uriRecomStore = { uri: `${finip}/${item.image_path}/${item.image}` };
            !activeScroll && setActiveScroll(true);
            return <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Recommend_Store', navigation })} key={index}>
                <View style={[BoxStore1Box, { width: width * 0.40, }]}>
                    <FastImage source={uriRecomStore} style={[BoxStore1Image, { borderRadius: 5 }]} resizeMode={cover} />
                </View>
            </TouchableOpacity>;
        }) : boxEmpty;
    return <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ร้านค้าที่แนะนำ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'Recommend_Store', navigation })}>
                <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 4.2, }]}>
            <ScrollView horizontal scrollEnabled={activeScroll}>{dataPromotionPopular}</ScrollView>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Brand
export let Product_Brand = (props) => {
    const { loadData, } = props;
    let boxEmpty = GenArray(8).map((_, index) => <View key={index} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC' }]}>
        <View style={[ItemCenter,
            { backgroundColor: '#ECECEC', borderBottomColor: '#DCDCDC', borderBottomWidth: 0.5, width: 119, }]}>
            <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={LOADING_ICON_STYLE} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <View style={FrameBackground}>
        <View style={FrameBackgroundTextBox}>
            <Text style={[FontFamilyBold, FontSize4, FrameBackgroundTextStart,]}>สินค้าแบรนด์ดัง</Text>
        </View>
        {loadData?.length > 0 ?
            <FlatProduct {...props} custumNavigation='DetailScreen' dataService={loadData} dispriceSize={15} mode='row3_new'
                nameFlatProduct='Product_Brand' nameSize={14} numberOfColumn={1} priceSize={15} radiusBox={5} /> :
            <ScrollView horizontal scrollEnabled={false}>{boxEmpty}</ScrollView>}
    </View>;
};