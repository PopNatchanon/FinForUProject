///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View, Dimensions, ActivityIndicator,
} from 'react-native';
import { connect, } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { BannerBar_TWO, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { Slide } from '../screens/src_Promotion/DealScreen'
import { GetServices, ProductBox, SlideTab2, LoadingScreen, FlatProduct, } from '../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const getCartDataCount = (cartData) => {
    var cartDataCount = 0;
    cartData?.map((value) => value.product.map((value2) => {
        return cartDataCount += value2.quantity * 1;
    }));
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
        setFilterValue(filterValue);
        setSliderVisible(false);
    };
    let setStateMainfilterValue = (value) => {
        filterValue.lastest = value == 2 ? 'lastest' : '';
        filterValue.sort_by = value == 3 ? value.actionReturn : '';
        setActiveGetServices(true);
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
export let Recommend_Store = (props) => {
    const { navigation, recommend } = props;
    let boxEmpty = [0, 1, 2].map((_, index) => <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxStore1Box, {
        width: width * 0.40, backgroundColor: '#ECECEC', borderRadius: 5
    }]}>
        <ActivityIndicator size={50} color={mainColor} />
    </View>);
    let dataPromotionPopular = recommend?.length > 0 ?
        recommend.map((item, index) => {
            var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
            return <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Recommend_Store', navigation })} key={index}>
                <View style={[stylesMain.BoxStore1Box, { width: width * 0.40, }]}>
                    <FastImage source={{ uri: dataMySQL, }} style={[stylesMain.BoxStore1Image, { borderRadius: 5 }]} resizeMode={FastImage.resizeMode.cover} />
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
            <ScrollView horizontal>
                {dataPromotionPopular}
            </ScrollView>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Brand
export let Product_Brand = (props) => {
    const { loadData, } = props;
    let boxEmpty = [0, 1, 2, 3, 4, 5, 6, 7].map((_, index) =>
        <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2new, { borderColor: '#DCDCDC' }]}>
            <View style={[stylesMain.ItemCenter,
            { backgroundColor: '#ECECEC', width: 119, borderBottomWidth: 0.5, borderBottomColor: '#DCDCDC' }]}>
                <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                    <ActivityIndicator size={50} color={mainColor} />
                </View>
            </View>
            <View style={{ height: 55, paddingHorizontal: 3 }} />
        </View>);
    return <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สินค้าแบรนด์ดัง</Text>
        </View>
        {loadData?.length > 0 ?
            <FlatProduct {...props} dataService={loadData} numberOfColumn={1} radiusBox={5} nameFlatProduct='Product_Brand' mode='row3_new'
                custumNavigation='DetailScreen' nameSize={14} priceSize={15} dispriceSize={15} /> :
            <ScrollView horizontal>
                {boxEmpty}
            </ScrollView>}
    </View>;
};