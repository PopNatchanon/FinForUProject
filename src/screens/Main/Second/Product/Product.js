///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
} from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { BannerBar_ONE, ExitAppModule, TodayProduct, } from '../../Main';
import { Button_Bar, } from '../../Exclusive/Exclusive';
import { GetServices, ProductBox, SlideTab2, FlatProduct, } from '../../../../customComponents/Tools';
import { Slide, } from '../../../Promotion/Deal/Deal';
import { Store_Detail, } from '../../RecommendStore/RecommendStore';
import { NavigationNavigate, AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const getCartDataCount = (cartData) => {
    let cartDataCount = 0;
    cartData?.map((v) => v.product.map((v2) => { return cartDataCount += v2.quantity * 1; }));
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
export default connect(mapStateToProps, mapDispatchToProps)(Product);
function Product(props) {
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [sliderVisible, setSliderVisible] = useState(false);
    const data = [{
        title: 'หมวดหมู่', subtitle: [
            { name: 'กระเป๋าสะพายข้าง' }, { name: 'กระเป๋าสะพายหลัง' }, { name: 'กระเป๋าสตางค์' }, { name: 'กระเป๋าใส่นามบัตร' },
            { name: 'กระเป๋าใส่เหรียญ' }, { name: 'กระเป๋าถือ' }, { name: 'อื่นๆ' }]
    },
    { title: 'แบรนด์', subtitle: [{ name: 'BP world' }, { name: 'Tokyo boy' }, { name: 'JJ' }, { name: 'ETONWEAG' }] }];
    var dataBody = { type: 'todayproduct' };
    var uri = `${ip}/mysql/DataServiceMain.php`;
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    let setSlider = (value) => setSliderVisible(value);;
    useEffect(() => {
        activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value) });
    }, [activeDataService]);

    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow cartBar enableSearch />
        <ScrollView stickyHeaderIndices={[5]}>
            <Slide {...props} />
            <Second_Store {...props} />
            <Second_Product_Brand {...props} />
            <View style={{ marginBottom: 2 }}></View>
            <BannerBar_ONE />
            <View style={{ marginBottom: 3 }}></View>
            <Button_Bar setSliderVisible={(value) => setSlider(value)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
            {dataService && <TodayProduct {...props} noTitle loadData={dataService} typeip prepath='mysql' />}
        </ScrollView>
        <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={(value) => setSlider(value)} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Store
export let Second_Store = (props) => {
    const { navigation } = props;
    return <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ร้านค้ามือสองที่แนะนำ</Text>
        </View>
        <View style={stylesMain.FlexRow}>
            <View style={[stylesMain.BoxStoreSecond]}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'Main_RecommendStore', navigation })}>
                    <FastImage style={[stylesMain.BoxStore1Image]} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop2.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.BoxStoreSecond]}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'Main_RecommendStore', navigation })}>
                    <FastImage style={[stylesMain.BoxStore1Image]} source={{ uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop3.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Second_Product_Brand
export let Second_Product_Brand = (props) => {
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    var dataBody = { type: 'sale' };
    var uri = `${ip}/mysql/DataServiceMain.php`;
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    useEffect(() => {
        activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value) })
    }, [activeDataService]);
    return <View style={stylesMain.FrameBackground2}>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>สินค้ามือสองแบรนด์ดัง</Text>
            </View>
        </View>
        {dataService && <FlatProduct {...props} custumNavigation='Second_Product_Brand' dataService={dataService} mode='row4'
            nameFlatProduct='Second_Product_Brand' nameSize={11} priceSize={12} dispriceSize={12} />}
    </View>;
};