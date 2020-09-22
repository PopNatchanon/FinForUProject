///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, useRef, useReducer } from 'react';
import ReactNative, {
    ActivityIndicator, Animated, BackHandler, Dimensions, Image, Platform, SafeAreaView,/* ScrollView,*/ StatusBar, Text, TextInput,
    ToastAndroid, TouchableOpacity, View, YellowBox,
} from 'react-native';
import { PanGestureHandler, ScrollView, State, } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
} from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesLayout from '../../style/stylesLayout';
import stylesMain, { appBarColor, color_up, mainColor, } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { FlatComponent, FlatProduct, GetServices, ProductBox, } from '../../customComponents/Tools';
import { AppBar as AAppBar, GenArray, ImageList, NavigationNavigate, Toolbar, IconLoading, EmptyProduct, } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> set value
const LOADING_ICON = require('../../../images/icon.png');
const { cacheOnly, } = FastImage.cacheControl;
const { contain, cover, stretch, } = FastImage.resizeMode;
const { FontCenter, FontFamilyBold, FontFamilyBoldBold, FontFamilySemiBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7,
    FontSize8, FontSize9 } = stylesFont;
const { FRow, H75pW100p, HW100p, HxW75p, HxWfull, } = stylesLayout;
const { animatedView, animatedViewSub, BackgroundAreaView, Banner_Bar, Botton_PopUp_Box, Botton_PopUp_Image, Botton_PopUp_Text,
    BoxProduct1Box2, BoxProduct1Box2new, BoxProduct1ImagePrice, BoxProduct2, BoxProduct2BoxProduct, BoxProduct5Box,
    BoxProduct5ImageofLines, BoxStore1Box, BoxStore1Box2, BoxStore1Box3, BoxStore2Box2, BoxStore2Image2, Brand_image_Box,
    Button_Bar_Box, Button_Bar_icon, Categorys, CategoryProductImageHead, CategoryProductStoreBox, category_A, Category_box, child,
    exitTitleText, FinMall_Box, FrameBackgroundTextBox, FrameBackgroundTextEnd, FrameBackgroundTextStart, FrameBackground2, ItemCenter,
    ItemCenterVertical, litleSlideImage, PopularText_A, Popular_Box_B, Popular_Box_D, SafeAreaViewNB, Second_StoreFin,
    Second_StoreFin_BoxHead, Second_StoreFin_Image, Second_StoreFin_ImageA, Second_StoreFin_ImageB, Second_StoreFin_ImageB_T,
    Second_Storefooter, Supermarket_BrandBox, Supermarket_Brand_Image, Supermarket_Brand_Shop, Supermarket_Brand_Shop2, Supermarket_Image,
    Supermarket_Product, Supermarket_Store, Time_FlashSale_TimeBox, Time_FlashSale_TimeText, } = stylesMain;
const Navi = (naviProps) => NavigationNavigate(naviProps);
///----------------------------------------------------------------------------------------------->>>> Main // complete_last_function
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
export default connect(mapStateToProps, mapDispatchToProps)(Main)
function Main(props) {
    const { fetchData, getFetchData, multiFetchData } = props;
    const [activeTime, setActiveTime] = useState(true);
    const scrollY = new Animated.Value(0);
    const maxheight = 55;
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false, });
    const AnimatedHeadbg = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['#ffffff00', '#10162dff'],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    const AnimatedHeadbg2 = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['#ffffff00', '#284d8fff'],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    const AnimatedBorderBottom = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['#ffffff00', '#ffbf00'],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    useEffect(() => { setTimeout(() => setActiveTime(false), 5000); })
    const FetchDataMain = () => multiFetchData({
        multiData: [
            { name: 'publish_mobile', uri: `${finip}/home/publish_mobile`, },
            { dataBody: { slide: 'banner' }, name: 'home_mobile', uri: `${finip}/home/home_mobile`, }],
    });
    useEffect(() => {
        if ((getFetchData['publish_mobile'] == undefined || (getFetchData['publish_mobile']?.isFetching)) ||
            (getFetchData['home_mobile'] == undefined || (getFetchData['home_mobile']?.isFetching))) { FetchDataMain(); };
    }, [(getFetchData['publish_mobile'] == undefined || (getFetchData['publish_mobile']?.isFetching)) ||
        (getFetchData['home_mobile'] == undefined || (getFetchData['home_mobile']?.isFetching))]);
    const FetchDataFlash = () => fetchData({ name: 'flash_timer', uri: `${finip}/flashsale/flash_timer`, });
    useEffect(() => {
        if (getFetchData['flash_timer'] == undefined || (getFetchData['flash_timer']?.isFetching)) { FetchDataFlash(); };
    }, [getFetchData['flash_timer']?.isFetching]);
    const itemT = [/*////--------------------------------------------->>>Start*/{ // แบรนเนอร์ใหญ่
        nameComponent: 'Slide',
        renderComponent: <Slide {...props} />
    }, { // รับประกัน
        nameComponent: 'Guarantee',
        renderComponent: <Guarantee  {...props} />
    }, { // หมวดหมู่
        nameComponent: 'Category',
        renderComponent: <Category {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // เทรนฮิต
        nameComponent: 'Trend_Hit',
        renderComponent: <Trend_Hit  {...props} />
    }, { // ปุ่มเข้าดีล โปรโมชั่น
        nameComponent: 'Button_Bar',
        renderComponent: <Button_Bar {...props} />
    }, { // สินค้าลดพิเศษ
        nameComponent: 'FlashSale',
        renderComponent: <FlashSale {...props} />
    },/* {
        nameComponent: 'Fin_Service',
        renderComponent: <Fin_Service {...props} />
    },*/{ // แบรน์แนะนำ
        nameComponent: 'Main_RecommendBrand',
        renderComponent: <Recommend_Brand {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // แบรนด์เนอร์โฆษณา 2
        nameComponent: 'BannerBar_TWO',
        renderComponent: <BannerBar_TWO />
    }, { // ร้านนี้ห้ามพลาด
        nameComponent: 'Fin_LuxuryShop',
        // renderComponent: <Fin_LuxuryShop  {...props} dataService={getFetchData['publish_mobile']?.data} />
        renderComponent: <NewStore  {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // ฟินมอล กับ Exclusive
        nameComponent: 'Fin_Mall',
        renderComponent: <Fin_Mall {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // แบรนด์เนอร์โฆษณา 1
        nameComponent: 'BannerBar_ONE',
        renderComponent: <BannerBar_ONE />
    }, { // ไฮไลท์ประจำสัปดาห์
        nameComponent: 'Highlight',
        renderComponent: <Highlight {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // ลายแทงร้านค้าแนะนำ
        nameComponent: 'PromotionPopular',
        renderComponent: <PromotionPopular  {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // ร้านที่ใช่อยากให้ช๊อป
        nameComponent: 'Popular_store',
        renderComponent: <Popular_store {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // สินค้ายอดนิยม
        nameComponent: 'Popular_product',
        renderComponent: <Popular_product {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // ฟินคัดมาเพื่อคุณ
        nameComponent: 'Product_for_you',
        renderComponent: <Product_for_you {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // สินค้า และ โฆษณาร้านค้า ทั้ง 20 หมวดหมู่
        nameComponent: 'CategoryProduct',
        renderComponent: <CategoryProduct {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // สินค้า และร้านค้า มือสอง
        nameComponent: 'Second_product',
        renderComponent: <Second_product {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // แบรนด์เนอร์โฆษณา 3
        nameComponent: 'BannerBar_THREE',
        renderComponent: <BannerBar_THREE />
    }, { // ฟินซุปเปอร์มาเก็ต
        nameComponent: 'FIN_Supermarket',
        renderComponent: <FIN_Supermarket_edit {...props} dataService={getFetchData['publish_mobile']?.data} />
    }, { // สินค้าคัดสรรมาเพื่อคุณ
        nameComponent: 'TodayProduct',
        renderComponent: <TodayProduct {...props} loadData={getFetchData['publish_mobile']?.data?.for_you2} />
    } /*////--------------------------------------------->>>End*/];
    const colors = [AnimatedHeadbg, AnimatedHeadbg2];
    return <SafeAreaView style={[BackgroundAreaView, SafeAreaViewNB]}>
        <Animated.View style={
            { zIndex: 1, backgroundColor: 'transparent', elevation: 1, height: maxheight, marginTop: -(maxheight), top: maxheight, width, }}>
            <AAppBar {...props} borderBottomColor={AnimatedBorderBottom} cartBar chatBar colorSet={colors} enableAnimated={AnimatedHeadbg}
                enableSearch />
        </Animated.View>
        <FlatComponent animatedView attachNativeEvent component={itemT} componentPage='Main' initialNumToRender={10} onScroll={onScroll}
            scrollEventThrottle={8} showsVerticalScrollIndicator={false} />
        <Botton_PopUp_FIN />
        <Toolbar {...props} style={{ flex: 5, }} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> ExitAppModule
export const ExitAppModule = (props) => {
    const { navigation, route } = props;
    const routeProps = route.name;
    const [backClickCount, setBackClickCount] = useState(0);
    const pathMain = ['Main', 'Feed', 'News', 'Bell', 'Customer_Login', 'Customer_Profile'];
    const springValue = useRef(new Animated.Value(0));
    const transformValue = useRef(new Animated.Value(100));
    YellowBox.ignoreWarnings(["Require cycle:", "VirtualizedList:", "VirtualizedLists should never", "*"]);
    const handleBackButton = () => {
        if (pathMain.indexOf(routeProps) != -1) {
            if (backClickCount == 1) { BackHandler.exitApp(); }
            else {
                setBackClickCount(1);
                Animated.sequence([
                    Animated.timing(transformValue.current, {
                        toValue: -.08 * height,
                        friction: 5,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                    Animated.timing(springValue.current, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(springValue.current, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(springValue.current, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(transformValue.current, {
                        toValue: 100,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                ]).start(() => setBackClickCount(0));
            }
        } else { navigation.pop(); }
        return true;
    };
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => backHandler.remove();
    });
    return <Animatable.View style={[animatedView, { opacity: springValue.current, transform: [{ translateY: transformValue.current, }], }]}>
        <View style={animatedViewSub}>
            <Text style={[exitTitleText, FontFamilyText]}>กดอีกครั้งเพื่อออก</Text>
        </View>
    </Animatable.View>;
};
///----------------------------------------------------------------------------------------------->>>> Slide
export const Slide = (props) => {
    const { isOutData, banner, getFetchData, } = props;
    const _renderItem = (v, i) => {
        let ImageSlide;
        // banner ?
        ImageSlide = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}`, };
        // : (dataMySQL = i % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
        return <View key={i} style={[child]}>
            <FastImage resizeMethod='resize' resizeMode={contain} source={ImageSlide} style={[HW100p]} />
        </View>;
    };
    return <View style={{ backgroundColor: '#fff' }}>
        <View style={[child, ItemCenter, { position: 'absolute', }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
        {(banner || !isOutData && getFetchData['home_mobile']?.data) ?
            <ImageList {...props} autoplay data={banner ?? getFetchData['home_mobile']?.data} dotsStyle={{
                activeBGColor: '#ffbf00', activeBorderColor: '#ffbf00', height: 10, inactiveBGColor: '#99999966', inactiveBorderColor: '#99999966', width: 10,
            }} loop pagination paginationPosition='down' paginationType='dots' renderItem={_renderItem} /> :
            <View style={[child, ItemCenter]}>
                {/* <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} /> */}
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Guarantee
export const Guarantee = (props) => {
    const TOStyles = { alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 5, padding: 5, width: '49%', };
    const ImageGuaran1 = { uri: `${ip}/MySQL/uploads/Home/001.png`, };
    const ImageGuaran2 = { uri: `${ip}/MySQL/uploads/Guarantee/Samsung-logo.png`, };
    const ImageGuaran3 = { uri: `${ip}/MySQL/uploads/Guarantee/adidas.png`, };
    const ImageGuaran4 = { uri: `${ip}/MySQL/uploads/Guarantee/w4.png`, };
    const ImageGuaran5 = { uri: `${ip}/MySQL/uploads/Service/Marketing.jpg`, };
    const item = [
        { text: 'ใบทะเบียนภาษีมูลค่าเพิ่ม', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-001.png`, } },
        { text: 'หนังสือจดทะเบียนบริษัท', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-002.png`, } },
        { text: 'มีบริการรับประกันการจัดส่ง', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-003.png`, } },
        { text: 'ใบจดทะเบียนเครื่องหมายการค้า', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-005.png`, } }];
    const _renderItem = (v, i) => {
        const ImageGuaran = { uri: `${ip}/MySQL/uploads/Guarantee/02.png`, };
        return <View key={i} style={[FRow, { justifyContent: 'space-around', width: width * 0.70, }]}>
            <View style={FRow}>
                <View style={{ height: 30, marginRight: 10, width: 30, }}>
                    <FastImage resizeMode={cover} source={v.image} style={HW100p} />
                </View>
                <Text style={[FontFamilyBold, FontSize6, { marginTop: 5, }]}>{v.text}</Text>
            </View>
            <View style={[ItemCenter, { height: 30, width: 30, }]}>
                <FastImage resizeMode={cover} source={ImageGuaran} style={{ height: 20, width: 20, }} />
            </View>
        </View>
    };
    return <View style={[FRow, { aspectRatio: 4.5, justifyContent: 'space-between', paddingHorizontal: 5, marginTop: 5, width: '100%', }]}>
        <View style={{ width: '54%', }}>
            <FastImage resizeMode={cover} source={ImageGuaran1} style={[HW100p, { borderRadius: 5, }]} />
        </View>
        <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'FinService', })}
            style={{ width: '45%', backgroundColor: '#FFFFFF', borderRadius: 5, }}>
            <FastImage resizeMode={cover} source={ImageGuaran5} style={{ height: '100%', borderWidth: 1, borderRadius: 5, borderColor: '#C9C9C9' }} />
            {/* <Text style={[FontFamilyBold, FontSize6, { textAlign: 'center', }]}>FIN Marketing</Text> */}
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Category // Loading
export const Category = (props) => {
    const { dataService, fetchData, getFetchData, } = props;
    const FetchDataCate = (id_type) => {
        fetchData({ dataBody: { id_category: id_type }, name: `category_product|${id_type}`, uri: `${finip}/home/product_mobile`, });
    };
    const BoxEmpty = GenArray(10).map((_, i) => {
        const ViewStyle = {
            alignItems: 'center', backgroundColor: '#ECECEC', borderColor: '#ECECEC', borderRadius: 8, borderWidth: 1, height: 60,
            justifyContent: 'center', width: 60,
        };
        return <View key={i} style={{ alignItems: 'center', justifyContent: 'center', padding: 2, width: width * 0.199, }}>
            <View style={ViewStyle}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
            <View style={{ height: 25, }} />
        </View>
    });
    const DataCategory = dataService?.category ? dataService?.category.map((v, i) => {
        const { image_head, id_type, image_path, name, } = v;
        if (i < dataService?.category.length) {
            useEffect(() => {
                (getFetchData[`category_product|${id_type}`] == undefined || (getFetchData[`category_product|${id_type}`]?.isFetching)) &&
                    FetchDataCate(id_type);
            }, [(getFetchData[`category_product|${id_type}`] == undefined || (getFetchData[`category_product|${id_type}`]?.isFetching))]);
            const ImageCate = { uri: `${finip}/${image_path}/menu/${image_head}${Platform.OS == 'android' ? '_.webp' : ''}`, };
            return <TouchableOpacity activeOpacity={1} key={i} style={Categorys} onPress={() =>
                Navi({ ...props, goScreen: 'Main_Category', setData: { id_type: id_type }, })}>
                <FastImage defaultSource={LOADING_ICON} source={ImageCate} style={Category_box} resizeMode={stretch} />
                <View style={{ height: 25, }}>
                    <Text numberOfLines={2} style={[FontFamilySemiBold, FontSize8, FontCenter]}>{name}</Text>
                </View>
            </TouchableOpacity>;
        }
    }) : BoxEmpty;
    return <View style={FrameBackground2}>
        <ScrollView horizontal>
            <View style={category_A}>{DataCategory}</View>
        </ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> ??N
export const Trend_Hit = (props) => {
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    // const item = [
    //     { image: { uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-02.jpg`, } },
    //     { image: { uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-03.jpg` } }];
    const dataBody = { type: 'Trend_Hit', };
    const uri = `${ip}/mysql/DataServiceMain.php`;
    const ImageTrend1 = { uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-01.jpg`, };
    const ImageTrend2 = { uri: `${ip}/MySQL/uploads/Home/Button_Gif/Shop.gif`, };
    useEffect(() => {
        activeDataService &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: v => { setActiveDataService(false); setDataService(v); }, });
    }, [dataBody]);
    // const _renderItem = (v, i) => {
    //     const ImageShop = { uri: `${ip}/MySQL/uploads/Home/Button_Gif/Shop2.png`, };
    //     return <View key={i} style={{ width: width * 0.48 }}>
    //         <View style={{ height: '88%', }}>
    //             <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={v.image} style={HW100p} />
    //         </View>
    //         <View style={{ alignItems: 'center' }}>
    //             <TouchableOpacity style={{ height: 25, marginTop: -15, width: 90, }}>
    //                 <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={ImageShop} style={[HW100p, { borderRadius: 8 }]} />
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // };
    const Trend_Box = () => dataService && dataService?.error == undefined && dataService?.map((v, i) => {
        const ImageTrend = { uri: `${ip}/mysql/${v.image_path}/${v.image}`, };
        return <TouchableOpacity key={i} style={[FRow, ItemCenter,
            { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: width * 0.325, }]}>
            <FastImage defaultSource={LOADING_ICON} resizeMode={contain} source={ImageTrend}
                style={{ height: 50, width: 50, marginRight: 5, borderRadius: 5, }} />
            <View>
                <Text numberOfLines={1} style={[FontFamilyBold, FontSize7]}>{v.name}</Text>
                <Text numberOfLines={1} style={[FontFamilyText, FontSize8, { color: '#CACACA', }]}>38K products</Text>
            </View>
        </TouchableOpacity>;
    });
    const item = [
        { text: 'ใบทะเบียนภาษีมูลค่าเพิ่ม', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-001.png` } },
        { text: 'หนังสือจดทะเบียนบริษัท', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-002.png` } },
        { text: 'มีบริการรับประกันการจัดส่ง', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-003.png` } },
        { text: 'ใบจดทะเบียนเครื่องหมายการค้า', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-005.png` } }];
    const _renderItem = (v, i) => {
        return <View key={i} style={[FRow, { width: width * 0.47, justifyContent: 'space-around' }]}>
            <FastImage resizeMode={cover} source={v.image} style={{ height: 20, width: 20, }} />
            <Text style={[FontFamilyText, FontSize7, { color: mainColor }]}>{v.text}</Text>
            <IconAntDesign name='checkcircle' size={13} color='#009A16' style={{ top: 3 }} />
        </View>
    };
    return <>
        <View style={[FRow, { aspectRatio: 5, justifyContent: 'space-between', marginTop: 3, paddingHorizontal: 5, width, }]}>
            <View style={{ width: width * 0.48, backgroundColor: '#FFFF' }}>
                <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={ImageTrend1} style={HW100p} />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 25, width: 90, bottom: 25 }}>
                        <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={ImageTrend2} style={HW100p} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFF', width: width * 0.48 }}>
                <View style={{ borderColor: mainColor, borderWidth: 2, height: '100%', borderRadius: 5, paddingHorizontal: 2 }}>
                    <View style={[ItemCenter, { borderBottomColor: mainColor, borderBottomWidth: 2, }]}>
                        <View style={{ backgroundColor: mainColor, paddingHorizontal: 20, borderRadius: width / 2, margin: 3 }}>
                            <Text style={[FontSize5, FontFamilyBold, { color: '#FFFFFF' }]}>Fin</Text>
                        </View>
                    </View>
                    <View style={{ height: 40, justifyContent: 'center' }}>
                        <Carousel autoplay loop autoplayInterval={5000} data={item} renderItem={_renderItem} />
                    </View>
                </View>
            </View>
            {/* <Carousel autoplay autoplayInterval={4000} data={item} renderItem={_renderItem} /> */}
        </View>
        <View style={FrameBackground2}>
            <View style={[FrameBackgroundTextBox]}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>เทรนฮิต</Text>
                <TouchableOpacity>
                    <Text style={[FontFamilyBold, FontSize7, FrameBackgroundTextEnd]}>
                        <IconMaterialCommunityIcons name='reload' size={20} />Reload</Text>
                </TouchableOpacity>
            </View>
            <View style={[FRow, { aspectRatio: 6, height: 'auto', justifyContent: 'space-around', paddingHorizontal: 2, }]}>
                {Trend_Box()}</View>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Fin_Service = (props) => {
    const ImageFinService = { uri: `${ip}/MySQL/uploads/Text/MB2.jpg`, };
    return <View style={[FrameBackground2, { aspectRatio: 4.5, height: 'auto', }]}>
        <Image resizeMode='contain' resizeMethod='resize' source={ImageFinService} style={HW100p} />
    </View>
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export const Button_Bar = (props) => {
    const ViewStyle = { zIndex: 1, backgroundColor: 'transparent', elevation: 1, justifyContent: 'space-around', marginTop: 3, width, };
    const ImageBestFin = require('../../../icon/Icon_Deal/04.jpg');
    const ImageCampaign = require('../../../icon/Icon_Deal/03.jpg');
    const ImageCoin = require('../../../icon/Icon_Deal/02.jpg');
    const ImageDeal = require('../../../icon/Icon_Deal/01.jpg');
    const ImageInstallment = require('../../../icon/Icon_Deal/05.jpg');
    return <>
        <View style={[FRow, ViewStyle]}>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Promotion_Deal', })}>
                <View style={[Button_Bar_Box, { elevation: 1, }]}>
                    <FastImage resizeMode={contain} source={ImageDeal} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Promotion_Coin', })}>
                <View style={[Button_Bar_Box, { elevation: 1, }]}>
                    <FastImage resizeMode={contain} source={ImageCoin} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Promotion_Campaign', })}>
                <View style={[Button_Bar_Box, { elevation: 1, }]}>
                    <FastImage resizeMode={contain} source={ImageCampaign} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Promotion_TheBestFin', })}>
                <View style={[Button_Bar_Box, { elevation: 1, }]}>
                    <FastImage resizeMode={contain} source={ImageBestFin} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Promotion_InstallmentPay', })}>
                <View style={[Button_Bar_Box, { elevation: 1, }]}>
                    <FastImage resizeMode={contain} source={ImageInstallment} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Brand_RCM
export const Recommend_Brand = (props) => {
    const { dataService, } = props;
    const Gborder = require('../../../icon/gold__border_0.png');
    let item_1 = [];
    let item_2 = [];
    if (dataService?.brand.length > 0) {
        for (let n = 0; n < dataService.brand.length; n += 2) {
            if (dataService.brand[n]) { item_1.push(dataService.brand[n]); };
            if (dataService.brand[n + 1]) { item_2.push(dataService.brand[n + 1]); };
        };
    };
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[Brand_image_Box, { backgroundColor: '#ECECEC', }]}>
        <View style={[HW100p, ItemCenterVertical]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>);
    const RecommendBrand = dataService?.brand && item_1 ? item_1.map((v, i) => {
        const uriImage = `${finip}/${v.image_path}/${v.image}`;
        // const ImageReBrand = { uri: `${ip}/MySQL/uploads/Brand_R/Beand/2019-10-18_15-14-31_icon.png`, };
        const ImageReBrand = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() =>
            Navi({ ...props, goScreen: 'Main_RecommendBrand', })}>
            <View style={[Brand_image_Box, { height: 60, width: width * 0.25, }]}>
                <FastImage resizeMode={contain} source={ImageReBrand} style={[HW100p, ItemCenterVertical]} />
                <FastImage resizeMode={stretch} source={Gborder} style={[HW100p, ItemCenterVertical, { position: 'absolute' }]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    const RecommendBrand2 = dataService?.brand && item_2 ? item_2.map((v, i) => {
        // const ImageReBrand2 = { uri: `${ip}/MySQL/uploads/Brand_R/Beand/2019-10-18_15-14-31_icon.png`, };
        const ImageReBrand2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendBrand', })}>
            <View style={Brand_image_Box}>
                <FastImage resizeMode={contain} source={ImageReBrand2} style={[HW100p, ItemCenterVertical]} />
                <FastImage resizeMode={stretch} source={Gborder} style={[HW100p, ItemCenterVertical, { position: 'absolute' }]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    return <View style={[FrameBackground2, { paddingBottom: 0, }]}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>แบรนด์แนะนำ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendBrand', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal>
            <View>
                <View style={FRow}>{RecommendBrand}</View>
                <View style={[FRow, { marginBottom: 2, }]}>{RecommendBrand2}</View>
            </View>
        </ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export const Popular_store = (props) => {
    const { dataService, } = props;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={BoxStore1Box}>
        <View style={[HW100p, { backgroundColor: '#ECECEC', borderColor: '#ECECEC', }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>);
    const PopularStore = dataService?.store_good ? dataService.store_good.map((v, i) => {
        const ImagePopStore = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendStore', })}>
            <View style={[BoxStore1Box, { marginLeft: 0, }]}>
                <FastImage resizeMode={contain} source={ImagePopStore} style={[HW100p, { borderColor: '#ECECEC', }]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>Fin Luxury Shop</Text>
        </View>
        <View style={[FRow, { aspectRatio: 4, height: 'auto', justifyContent: 'space-between', paddingHorizontal: 5, }]}>
            {PopularStore}</View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Popular_product
export const Popular_product = (props) => {
    const { dataService, } = props;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={{ width: width * 0.22, }}>
        <View style={[Popular_Box_D, { backgroundColor: '#ECECEC', borderRadius: 5, }]}>
            <View style={HW100p}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
    </View>);
    const productCate = (type) => type ? type.map((v, i) => {
        const ImageProCate = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return i < 2 && <View style={{ width: width * 0.22, }} key={i}>
            <View style={[Popular_Box_D, { backgroundColor: '#FFFFFF', borderRadius: 5, }]}>
                <FastImage style={HW100p} source={ImageProCate} resizeMode={contain} />
            </View>
            <View style={[ItemCenter, { width: width * 0.20, }]}>
                <Text numberOfLines={1} style={[FontSize8, FontFamilyText]}>{v.name}</Text>
                <NumberFormat value={v.full_price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={v2 =>
                    <Text style={[FontFamilyBold, FontSize8, BoxProduct1ImagePrice]}>{v2}</Text>} />
            </View>
        </View>;
    }) : BoxEmpty;
    return <View>
        <View style={[FrameBackground2]}>
            <View style={[FrameBackgroundTextBox]}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>สินค้ายอดนิยม</Text>
            </View>
            <View style={[FRow, { aspectRatio: 2.5, height: 'auto', }]}>
                <ScrollView horizontal>
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Main_PopularProduct', setData: { id_item: 0, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#F0F6FA', }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { color: '#fff', marginLeft: 8, }]}>สินค้าสุดฮิต</Text>
                            </View>
                            <View style={FRow}>{productCate(dataService?.product_hit)}</View>
                        </View>
                    </TouchableOpacity>}
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Main_PopularProduct', setData: { id_item: 1, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#EAEEF7', }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { color: '#fff', marginLeft: 8, }]}>สินค้าราคาโดน</Text>
                            </View>
                            <View style={FRow}>{productCate(dataService?.best_price)}</View>
                        </View>
                    </TouchableOpacity>}
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Main_PopularProduct', setData: { id_item: 2, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#F0F6FA', }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { color: '#fff', marginLeft: 8, }]}>สินค้าขายดี</Text>
                            </View>
                            <View style={FRow}>{productCate(dataService?.best_sale)}</View>
                        </View>
                    </TouchableOpacity>}
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Main_PopularProduct', setData: { id_item: 3, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#EAEEF7', }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { color: '#fff', marginLeft: 8, }]}>สินค้าสุดคูล</Text>
                            </View>
                            <View style={FRow}>{productCate(dataService?.best_cool)}</View>
                        </View>
                    </TouchableOpacity>}
                </ScrollView>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export const BannerBar_ONE = (props) => {
    const ImageiBanOne = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 111.jpg`, };
    return <View style={Banner_Bar}>
        <FastImage style={HxWfull} source={ImageiBanOne} resizeMode={stretch} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export const BannerBar_TWO = (props) => {
    const ImageiBanTwo = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg`, };
    return <View style={Banner_Bar}>
        <FastImage style={HxWfull} source={ImageiBanTwo} resizeMode={stretch} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export const BannerBar_THREE = (props) => {
    const ImageiBanThree = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg`, };
    return <View style={Banner_Bar}>
        <FastImage style={HxWfull} source={ImageiBanThree} resizeMode={stretch} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> FlashSale
export const FlashSale = (props) => {
    const { getFetchData, setFetchToStart, } = props;
    const ImageGood = require('../../../icon/goods.png');
    const dataService2 = [{
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B1.jpg', id_product: 0, last_price: '4250', price: '99000',
        discount: '25', name_product: 'Yamaha T-max530 ', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B2.jpg', id_product: 1, last_price: '5250', price: '99000',
        discount: '25', name_product: 'HONDA INTEGRA 750 ', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B3.jpg', id_product: 2, last_price: '6250', price: '99000',
        discount: '25', name_product: 'X ADV | Red Vs Blu', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B4.jpg', id_product: 3, last_price: '7250', price: '99000',
        discount: '25', name_product: 'Honda X-ADV 2017', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B5.jpg', id_product: 4, last_price: '850', price: '99000',
        discount: '25', name_product: 'Miku Max', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B6.jpg', id_product: 5, last_price: '9250', price: '99000',
        discount: '25', name_product: 'Yamaha 04GEN', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B7.jpg', id_product: 5, last_price: '350', price: '99000',
        discount: '25', name_product: 'AXM-4 Scooter', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B8.jpg', id_product: 5, last_price: '5550', price: '99000',
        discount: '25', name_product: 'Classic luxury rickshaw', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B9.jpg', id_product: 5, last_price: '2250', price: '99000',
        discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B10.jpg', id_product: 5, last_price: '29550', price: '99000',
        discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local',
    }];
    const [curTime, setCurTime] = useState(new Date());
    const [endTime, setEndTime] = useState(undefined);
    const [saveTime, setSaveTime] = useState(undefined);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurTime(new Date());
            if (!getFetchData['flash_timer']?.isFetching && getFetchData['flash_timer']?.data) {
                const flash_end = getFetchData['flash_timer'].data.flash_end && getFetchData['flash_timer'].data.flash_end.split(':');
                if (saveTime == undefined || (saveTime && flash_end && (saveTime[0] != flash_end[0]))) {
                    setSaveTime(flash_end); setEndTime(new Date().setHours(
                        flash_end ? Number(flash_end[0]) : 0, flash_end ? Number(flash_end[1]) : 0, flash_end ? Number(flash_end[2]) : 0)
                    );
                };
            };
        }, 1000);
        return () => clearInterval(intervalID);
    });
    useEffect(() => {
        let h = 0;
        let m = 0;
        let s = 0;
        if (endTime && !getFetchData['flash_timer']?.isFetching && getFetchData['flash_timer']?.data) {
            h = Number(new Date(endTime).getHours()) - Number(curTime.getHours());
            if ((Number(new Date(endTime).getDate()) - Number(curTime.getDate())) > 0) {
                h += ((Number(new Date(endTime).getDate()) - Number(curTime.getDate())) * 24);
            };
            m = Number(new Date(endTime).getMinutes()) - Number(curTime.getMinutes());
            s = Number(new Date(endTime).getSeconds()) - Number(curTime.getSeconds());
            if (h > 0 && (m < 0 || s < 0)) { h -= 1; m += 60; };
            if (m > 0 && s < 0) { m -= 1; s += 60; };
            if (getFetchData['flash_timer']?.data && !getFetchData['flash_timer']?.isError && !getFetchData['flash_timer']?.isFetching &&
                h <= 0 && m <= 0 && s <= 0) {
                setFetchToStart({ name: 'flash_timer' }); setEndTime(undefined);
            };
            setHours(h < 10 ? h <= 0 ? '00' : '0' + h : h);
            setMinutes(m < 10 ? m <= 0 ? '00' : '0' + m : m);
            setSeconds(s < 10 ? s <= 0 ? '00' : '0' + s : s);
        };
    }, [curTime])
    return getFetchData['flash_timer']?.data ?
        <View style={FrameBackground2}>
            <View style={[FrameBackgroundTextBox]}>
                <View style={[FRow, { flex: 70, }]}>
                    <Text style={[FontFamilyBoldBold, FontSize4, FrameBackgroundTextStart, { color: '#dc3545', flex: 30, }]}>FLASH SALE</Text>
                    <View style={[FRow, { alignContent: 'center', alignItems: 'center', flex: 66, }]}>
                        {/* <FastImage source={ImageGood} style={{ height: 30, width: 15, }} /> */}
                        <IconFontAwesome name='clock-o' size={20} color='#919191' />
                        <View style={[FRow, { flex: 70, }]}>
                            <View style={[Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText]}>{hours}</Text>
                            </View>
                            <View style={[Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText]}>{minutes}</Text>
                            </View>
                            <View style={[Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText]}>{seconds}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_FlashSale', })}>
                    <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd, { flex: 30, }]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {getFetchData['flash_timer'] && getFetchData['flash_timer'].data.product && <FlatProduct {...props}
                custumNavigation='Main_FlashSale' dataService={getFetchData['flash_timer']?.data?.product} dispriceSize={12} mode='row4'
                nameFlatProduct='FlashSaleProduct' nameSize={11} priceSize={12} />}
        </View> :
        <View style={FrameBackground2}>
            <View style={[FrameBackgroundTextBox]}>
                <View style={[FRow, { flex: 70, paddingVertical: 5 }]}>
                    <Text style={[FontFamilyBoldBold, FontSize4, FrameBackgroundTextStart, { color: '#dc3545', flex: 30, }]}>FLASH SALE</Text>
                    <View style={[FRow, { alignContent: 'center', alignItems: 'center', flex: 68, }]}>
                        <IconFontAwesome name='clock-o' size={20} color='#919191' />
                        <View style={[FRow, { flex: 70, }]}>
                            <View style={[ItemCenter, Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText]}>00</Text>
                            </View>
                            <View style={[ItemCenter, Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText]}>00</Text>
                            </View>
                            <View style={[ItemCenter, Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText]}>00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_FlashSale', })}>
                    <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd, { flex: 30, }]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <View style={FRow}>
                {dataService2 &&
                    <FlatProduct dataService={dataService2} dispriceSize={15} mode='row3_new2' nameFlatProduct='Second_product' nameSize={14}
                        numberOfColumn={1} priceSize={15} />}
                {/* {[0, 1, 2, 3, 4].map((_, i) => <View key={i} style={[ItemCenter, BoxProduct5Box]}>
                    <View style={[ItemCenter, BoxProduct5ImageofLines, { backgroundColor: '#ECECEC' }]}>
                        <View style={[ItemCenter, HxW75p, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>)} */}
            </View>
        </View>;
};
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export const PromotionPopular = (props) => {
    const { dataService, } = props;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxStore2Box2]}>
        <View style={[BoxStore2Image2, { backgroundColor: '#ECECEC', }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
        <View style={{ backgroundColor: mainColor, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 1, }}>
            <Text numberOfLines={1} style={[FontFamilyText, FontSize7, { color: mainColor, marginLeft: 2, }]}>NaN</Text>
        </View>
    </View>);
    const PromotionPopulars = dataService?.recommend_store ? dataService.recommend_store.map((v, i) => {
        const ImageProPop = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendStore', })}>
            <View style={[BoxStore2Box2]}>
                <FastImage resizeMode={cover} source={ImageProPop} style={[BoxStore2Image2]} />
                <View style={{ backgroundColor: mainColor, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 1, }}>
                    <Text numberOfLines={1} style={[FontFamilyText, FontSize8, { color: '#fff', marginLeft: 2, }]}>{v.detail}</Text>
                </View>
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ลายแทงร้านค้าแนะนำ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendStore', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <View style={{ aspectRatio: 3.8, height: 'auto', }}>
            <ScrollView horizontal>{PromotionPopulars}</ScrollView>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export const Product_for_you = (props) => {
    const { dataService, } = props;
    const dataService2 = [{
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B1.jpg', id_product: 0, last_price: '4250', price: '99000',
        discount: '25', name_product: 'Yamaha T-max530 ', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B2.jpg', id_product: 1, last_price: '5250', price: '99000',
        discount: '25', name_product: 'HONDA INTEGRA 750 ', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B3.jpg', id_product: 2, last_price: '6250', price: '99000',
        discount: '25', name_product: 'X ADV | Red Vs Blu', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B4.jpg', id_product: 3, last_price: '7250', price: '99000',
        discount: '25', name_product: 'Honda X-ADV 2017', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B5.jpg', id_product: 4, last_price: '850', price: '99000',
        discount: '25', name_product: 'Miku Max', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B6.jpg', id_product: 5, last_price: '9250', price: '99000',
        discount: '25', name_product: 'Yamaha 04GEN', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B7.jpg', id_product: 5, last_price: '350', price: '99000',
        discount: '25', name_product: 'AXM-4 Scooter', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B8.jpg', id_product: 5, last_price: '5550', price: '99000',
        discount: '25', name_product: 'Classic luxury rickshaw', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B9.jpg', id_product: 5, last_price: '2250', price: '99000',
        discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B10.jpg', id_product: 5, last_price: '29550', price: '99000',
        discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local',
    }]
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC', }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119, }]}>
            <View style={[HxW75p, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3, }} />
    </View>);
    return <View style={[FrameBackground2]}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>FIN คัดมาเพื่อคุณ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_ProductForYou', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        {/* dataService.for_you */}
        {dataService?.for_you.length > 0 ?
            <FlatProduct {...props} dataService={dataService?.for_you} dispriceSize={15} mode='row3_new2' nameFlatProduct='Product_for_you'
                nameSize={14} numberOfColumn={2} priceSize={15} /> :
            <View>
                <View style={FRow}>{BoxEmpty}</View>
                <View style={FRow}>{BoxEmpty}</View>
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Highlight
export const Highlight = (props) => {
    const { dataService, } = props;
    const dataService2 = [{
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '1.jpg', id_product: 0, last_price: '74250', price: '99000',
        discount: '25', name_product: 'Yamaha T-max530 ', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '2.jpg', id_product: 1, last_price: '145000', price: '155000',
        discount: '10', name_product: 'HONDA INTEGRA 750 ', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '3.jpg', id_product: 2, last_price: '129000', price: '139000',
        discount: '10', name_product: 'X ADV | Red Vs Blu', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '4.jpg', id_product: 3, last_price: '139000', price: '149000',
        discount: '50', name_product: 'Honda X-ADV 2017', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '5.jpg', id_product: 4, last_price: '119000', price: '129000',
        discount: '10', name_product: 'Miku Max', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '6.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'Yamaha 04GEN', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '7.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'AXM-4 Scooter', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '8.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'Classic luxury rickshaw', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '9.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local',
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '10.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local',
    }];
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[ItemCenter, BoxProduct1Box2]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 113 }]}>
            <View style={[HxW75p, ItemCenter, { marginVertical: height * 0.010, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
        <View style={{ height: 40, paddingHorizontal: 3, }} />
    </View>);
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ไฮไลท์ประจำสัปดาห์</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_Highlight', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}> ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        {/* dataService.hi_week */}
        {dataService ?
            <FlatProduct {...props} dataService={dataService?.hi_week} dispriceSize={15} mode='row3_new2' nameFlatProduct='Second_product'
                nameSize={14} numberOfColumn={1} priceSize={15} /> :
            <View style={FRow}>{BoxEmpty}</View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> NewStore
export const NewStore = (props) => {
    const { dataService, } = props;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxStore1Box, { backgroundColor: '#ECECEC', }]}>
        <View style={[HW100p, { borderColor: '#ECECEC', }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>);
    const NewStores = dataService?.dont_miss ? dataService?.dont_miss.map((v, i) => {
        const ImageRecom = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({
            ...props, goScreen: 'Main_RecommendStore',
            setData: { id_slide: v.id, name_path: 'store_total', uri_path: 'publish_store/store_total', },
        })}>
            <View style={[BoxStore1Box, { marginLeft: 0 }]}>
                <FastImage resizeMode={contain} source={ImageRecom} style={[HW100p, { borderColor: '#ECECEC', }]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ร้านค้าห้ามพลาด!!่</Text>
        </View>
        <View style={[FRow, { aspectRatio: 4, height: 'auto', justifyContent: 'space-between', paddingHorizontal: 5, }]}>{NewStores}</View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Exclusive
export const Exclusive = (props) => {
    const { loadData, } = props;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2, ItemCenter]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 115, }]}>
            <View style={[HxW75p, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3, }} />
    </View>);
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>สินค้าสุด Exclusive</Text>
            <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_Exclusive', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        {loadData ?
            <FlatProduct {...props} dataService={loadData} dispriceSize={15} mode='row3' nameFlatProduct='ExclusiveProduct' nameSize={14}
                numberOfColumn={1} priceSize={15} /> :
            <View style={FRow}>{BoxEmpty}</View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export function CategoryProduct_new(props) {
    const { dataService, getFetchData, NoStoreReCom, } = props;
    const { id_type, image_menu, image_path, mobile_bg } = dataService;
    let productItem = [];
    let promo1Item = [];
    let promo2Item = [];
    let shopItem = [];
    getFetchData[`category_product|${id_type}`]?.data?.product?.map((v2) => { productItem.push(v2) });
    dataService.cate_promotions_1.map((v2) => v2.map((v3) => v3.id_type == id_type ? promo1Item.push(v3) : null));
    dataService.cate_promotions_2.map((v2) => v2.map((v3) => v3.id_type == id_type ? promo2Item.push(v3) : null));
    dataService.cate_shop.map((v2) => v2.map((v3) => v3.id_type == id_type ? shopItem.push(v3) : null));
    const mix_color = color_up(mobile_bg);
    const ImageHead = { uri: `${finip}/${image_path}/${image_menu}`, };
    const DataCategory = <View style={[FrameBackground2, { backgroundColor: mobile_bg, }]}>
        <>
            {<TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_Category', setData: { id_type: id_type, }, })}>
                <FastImage resizeMode={contain} source={ImageHead} style={[CategoryProductImageHead]} />
            </TouchableOpacity>}
            <CategoryProductSubProduct {...props} dataService={productItem} />
        </>
        {NoStoreReCom ?
            <View style={{ marginBottom: 10, }}>
                <View style={{ marginTop: 10, }}>
                    <Text style={[FontFamilyText, FontSize5, { color: '#fff', marginLeft: 8, }]}>ร้านนี้ผ่อนได้</Text>
                </View>
                <CategoryProductSubStore {...props} mix_color={mix_color} shop={shopItem} />
            </View> :
            <View style={{ marginBottom: 0, }}>
                <CategoryProductSubPromotion {...props} mix_color={mix_color} promo_1={promo1Item} promo_2={promo2Item} shop={shopItem} />
            </View>}
    </View>;
    return <View>{DataCategory}</View>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export function CategoryProduct(props) {
    const { dataService, getFetchData, NoStoreReCom, } = props;
    const DataCategory = dataService?.category?.map((v, i) => {
        const { id_type, image_menu, image_path, mobile_bg, } = v;
        let productItem = [];
        let promo1Item = [];
        let promo2Item = [];
        let shopItem = [];
        getFetchData[`category_product|${id_type}`]?.data?.product?.map((v2) => { productItem.push(v2) });
        dataService.cate_promotions_1.map((v2) => v2.map((v3) => v3.id_type == id_type ? promo1Item.push(v3) : null));
        dataService.cate_promotions_2.map((v2) => v2.map((v3) => v3.id_type == id_type ? promo2Item.push(v3) : null));
        dataService.cate_shop.map((v2) => v2.map((v3) => v3.id_type == id_type ? shopItem.push(v3) : null));
        if (i < 1 /*getFetchData['category_mobile'].length*/) {
            const ImageHead = { uri: `${finip}/${image_path}/head_mobile/${image_menu}${Platform.OS == 'android' ? '_.webp' : ''}`, };
            const mix_color = color_up(mobile_bg);
            return <View key={i} style={[FrameBackground2, { backgroundColor: mobile_bg, paddingBottom: 3, }]}>
                <>
                    {<TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_Category', setData: { id_type: id_type, }, })}>
                        <FastImage resizeMode={contain} source={ImageHead} style={[CategoryProductImageHead]} />
                    </TouchableOpacity>}
                    <CategoryProductSubProduct {...props} dataService={productItem} />
                </>
                {NoStoreReCom ?
                    <View style={{ marginBottom: 10, }}>
                        <View style={{ marginTop: 10, }}>
                            <Text style={[FontFamilyText, FontSize5, { color: '#fff', marginLeft: 8, }]}>ร้านนี้ผ่อนได้</Text>
                        </View>
                        <CategoryProductSubStore {...props} mix_color={mix_color} shop={shopItem} />
                    </View> :
                    <View style={{ marginBottom: 0, }}>
                        <CategoryProductSubPromotion {...props} mix_color={mix_color} promo_1={promo1Item} promo_2={promo2Item}
                            shop={shopItem} />
                    </View>}
            </View>;
        };
    });
    return <View>{DataCategory}</View>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export const CategoryProductSubProduct = (props) => {
    const { dataService, } = props;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC', }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119, }]}>
            <View style={[HxW75p, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3, }} />
    </View>);
    return <>
        {dataService.length > 0 ?
            <FlatProduct {...props} dispriceSize={13} mode='row3_new2' nameFlatProduct='CategoryProduct' nameSize={14} noMarginTop
                numberOfColumn={2} priceSize={15} /> :
            <View>
                <View style={FRow}>{BoxEmpty}</View>
                <View style={FRow}>{BoxEmpty}</View>
            </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export const CategoryProductSubStore = (props) => {
    const { mix_color, shop, } = props;
    const _renderBanner = function (v) {
        const ImageSubStore = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}`, };
        const SubStoreStyle = [HW100p, { backgroundColor: mix_color, }];
        // const dataMySQL = `${ip}/MySQL/uploads/Image Home/15.CategoryProduct/Category_S/${v.image}`;
        return <TouchableOpacity activeOpacity={1} key={v.id}>
            <View style={{ backgroundColor: mix_color, height: 57.8, marginLeft: 5, width: width * 0.56, }}>
                <Image resizeMethod='resize' resizeMode='stretch' source={ImageSubStore} style={SubStoreStyle} />
            </View>
        </TouchableOpacity>;
    };
    return <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_RecommendStore', })}>
        {shop && shop.length > 0 ?
            <Carousel autoplay autoplayInterval={3000} data={shop} loop pagination={PaginationLight} renderItem={_renderBanner} /> :
            <View style={{ backgroundColor: mix_color, height: 57.8, marginLeft: 5, width: width * 0.56, }}>
                <View style={HW100p} />
            </View>}
    </TouchableOpacity>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export const CategoryProductSubPromotion = (props) => {
    const { mix_color, promo_1, promo_2, shop, } = props;
    const BoxEmptySmall = <View style={[BoxStore1Box3, { backgroundColor: mix_color, height: 66, marginTop: 3, width: '100%', }]}>
        <View style={HW100p}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>;
    const CategoryProductSubPromotionSmall = promo_2 ? promo_2.map((v, i) => {
        // const dataMySQL = `${ip}/MySQL/uploads/Image Home/15.CategoryProduct/Category_M/${v.image}`;
        const ImagePromoSmall = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}` };
        return <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_RecommendStore', })} key={i} style={[BoxStore1Box3, { height: 66, marginTop: 3, width: '100%', }]}>
            {v && <Image resizeMethod='resize' resizeMode='cover' source={ImagePromoSmall} style={HW100p} />}
        </TouchableOpacity>;
    }) : BoxEmptySmall;
    const BoxEmptyBig = <View style={[BoxStore1Box2, { backgroundColor: mix_color, borderWidth: 0, marginBottom: 3, marginTop: 3, }]}>
        <View style={HW100p}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>;
    const CategoryProductSubPromotionBig = promo_1 ? promo_1.map((v, i) => {
        // const dataMySQL = `${ip}/MySQL/uploads/Image Home/15.CategoryProduct/Category_L/${v.image}`;
        const ImagePromoBig = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}` };
        return <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_RecommendStore', })} key={i} style={[BoxStore1Box2, { borderWidth: 0, marginBottom: 3, marginTop: 3, }]}>
            {v && <Image resizeMethod='resize' resizeMode='cover' source={ImagePromoBig} style={HW100p} />}
        </TouchableOpacity>;
    }) : BoxEmptyBig;
    return <>
        <View style={[FRow, { marginTop: 3, width: '100%', }]}>
            <View style={{ flexDirection: 'column', marginRight: 6, width: width * 0.56, }}>
                {CategoryProductSubPromotionSmall}
                <View style={{ marginTop: 6, width: width * 0.56, }}>
                    <CategoryProductSubStore {...props} mix_color={mix_color} shop={shop} />
                </View>
            </View>
            {CategoryProductSubPromotionBig}
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Second_product
export const Second_product = (props) => {
    const { dataService, Header_Second, } = props;
    const MobileBarStyle = { backgroundColor: '#ECECEC', borderBottomWidth: 0.5, borderColor: '#DCDCDC', borderWidth: 1, marginTop: 0, };
    const VStyle = { marginTop: 0 };
    const RenderItem1 = dataService?.list_store2_1 ? dataService.list_store2_1.map((v, i) => {
        const ImageStore2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <View key={i} style={{ height: 196, width: width * 0.64, }}>
            <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageStore2} style={H75pW100p} />
        </View>;
    }) : <View style={{ height: 196, width: width * 0.64, }}>
            <View style={[H75pW100p, { backgroundColor: '#ECECEC', }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>;
    const BoxEmptyBody = GenArray(10).map((_, i) => <View key={i} style={Second_StoreFin_ImageB_T}>
        <View style={{ height: 130, width: width * 0.32, }}>
            <View style={[litleSlideImage, { backgroundColor: '#ECECEC', }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
    </View>);
    const RenderItem2 = dataService?.list_store2_2 ? dataService.list_store2_2.map((v, i) => {
        const ImageStore2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <View key={i} style={Second_StoreFin_ImageB_T}>
            <View style={{ height: 130, width: width * 0.32, }}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageStore2} style={litleSlideImage} />
            </View>
        </View>;
    }) : BoxEmptyBody;
    const BoxEmptyHeader = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC', }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119, }]}>
            <View style={[HxW75p, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3, }} />
    </View>);
    let ImageHead;
    dataService?.mobile_bar?.map((v) =>
        // ImageHead = { uri: `${finip}/${v.image_path}/${v.image}`, });
    ImageHead = { uri: `${ip}/MySQL/uploads/Category_Total/Second/header.jpg`, });
    const Second_Storeheader = <View key={'mobile_bar'} style={[FrameBackground2, { borderBottomWidth: null, marginTop: 0, }]}>
        <View>
            {Header_Second ?
                <View>
                    <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>มือสองลดราคา</Text>
                </View> :
                dataService?.mobile_bar ?
                    <TouchableOpacity {...props} onPress={() =>
                        Navi({ ...props, goScreen: 'Main_Second_Store', })}>
                        <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageHead}
                            style={[CategoryProductImageHead, VStyle]} />
                    </TouchableOpacity> :
                    <View style={[CategoryProductImageHead, MobileBarStyle]} />}
            {dataService?.product_second ?
                <FlatProduct {...props} dataService={dataService?.product_second} dispriceSize={15} mode='row3_new2'
                    nameFlatProduct='Second_product' nameSize={14} noMarginTop numberOfColumn={2} priceSize={15} /> :
                <View>
                    <View style={FRow}>{BoxEmptyHeader}</View>
                    <View style={FRow}>{BoxEmptyHeader}</View>
                </View>}
        </View>
    </View>;
    const Second_Storebody = <View key={'Header_Second'} style={Second_StoreFin}>
        <View style={[FrameBackgroundTextBox, Second_StoreFin_BoxHead]}>
            {Header_Second ?
                <View>
                    <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ร้านมือสองลดราคา</Text>
                </View> :
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ร้านค้ามือสองแนะนำโดย FIN</Text>}
            <View>
                <TouchableOpacity activeOpacity={1} onPress={() =>
                    Navi({ ...props, goScreen: 'Main_Second_Product', })}>
                    <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={Second_StoreFin_Image}>
            <View key={'list_store2_1'} style={Second_StoreFin_ImageA}>
                <View>{RenderItem1}</View>
            </View>
            <View key={'list_store2_2'}>
                <View style={Second_StoreFin_ImageB}>{RenderItem2}</View>
            </View>
        </View>
    </View>;
    const BoxEmptyFooter = GenArray(10).map((_, i) => <View key={i} style={[CategoryProductStoreBox]}>
        <View style={[HW100p, { backgroundColor: '#ECECEC', }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>);
    const _renderFooter = (v, i) => {
        const ImageFooter1 = { uri: `${finip}/${v.item.image_path}/${v.item.image}`, };
        const ImageFooter2 = v.item2 ? { uri: `${finip}/${v.item2.image_path}/${v.item2.image}`, } : undefined;
        return <TouchableOpacity activeOpacity={1} key={i} style={FRow}>
            <View style={[CategoryProductStoreBox]}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageFooter1} style={HW100p} />
            </View>
            <View style={[CategoryProductStoreBox]}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageFooter2} style={HW100p} />
            </View>
        </TouchableOpacity>;
    };
    let item = [];
    if (dataService?.mobile_slide) for (let n = 0; n < dataService.mobile_slide.length; n += 2) {
        item.push({ item: dataService.mobile_slide[n], item2: dataService.mobile_slide[n + 1], });
    };
    const Second_Storefooters = <View key={'mobile_slide'} style={Second_Storefooter}>
        <ScrollView horizontal>
            <View style={FRow}>
                {dataService?.mobile_slide ?
                    <Carousel  data={item} loop pagination={PaginationLight} renderItem={_renderFooter} /> :
                    <View style={FRow}>{BoxEmptyFooter}</View>}
            </View>
        </ScrollView>
    </View>;
    return <View style={FrameBackground2}>
        {[Second_Storeheader, Second_Storebody, Second_Storefooters]}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Fin_Mall = (props) => {
    const { dataService, } = props;
    const ViewStyle = { marginTop: 10, paddingLeft: 2.5, width: width * 0.225, };
    const RenText = (v, color) => <Text style={[BoxProduct1ImagePrice, FontFamilyBold, FontSize8, { color, }]}>{v}</Text>;
    const ProductFinmall = (type, n) => type.map((v, i) => {
        const { full_price, image, image_path, name, } = v;
        if (i < 2) {
            const Image1 = { uri: `${finip}/${image_path}/${image}` };
            // const dataMySQL = n == 0 ?
            //     i == 0 ?
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_5206014401000.jpg` :
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_99368145334.jpg` :
            //     i == 0 ?
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200710_15010144107.jpg` :
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200711_66232114742.jpg`;
            return <View key={i} style={{ marginTop: 5, paddingLeft: 2.5, width: width * 0.228, }}>
                <View style={{ aspectRatio: 1, backgroundColor: '#FFFFFF', height: 'auto', width: width * 0.20, }}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='contain' source={Image1} style={HW100p} />
                </View>
                <View style={[ItemCenter, { width: width * 0.20, }]}>
                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF', }]}>{name}</Text>
                    <NumberFormat displayType='text' prefix='฿' renderText={(v) => RenText(v, '#FFFFFF')} thousandSeparator
                        value={full_price} />
                </View>
            </View>;
        };
    });
    return <View style={[FRow, FinMall_Box]}>
        <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, paddingVertical: 5 }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>Fin Mall</Text>
            <View style={{ backgroundColor: '#691F50', borderRadius: 5, justifyContent: 'space-between', marginBottom: 3, padding: 3, }}>
                {dataService ?
                    <TouchableOpacity key='product_hit' activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_Fin_Mall', })}>
                        <View style={FRow}>{ProductFinmall(dataService.product_hit, 0)}</View>
                    </TouchableOpacity> :
                    <View style={FRow}>
                        {GenArray(10).map((_, i) => <View style={ViewStyle} key={i}>
                            <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                <View style={HW100p}>
                                    <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
                                </View>
                            </View>
                            <View style={[ItemCenter, { width: width * 0.20, }]}>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#691F50', }]}>NaN</Text>
                                <NumberFormat displayType='text' prefix='฿' renderText={(v) => RenText(v, '#691F50')} thousandSeparator
                                    value={0} />
                            </View>
                        </View>)}
                    </View>}
            </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, paddingVertical: 5 }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>สินค้าสุด Exclusive</Text>
            <View style={{ backgroundColor: '#19508B', borderRadius: 5, justifyContent: 'space-between', padding: 3, }}>
                {dataService ?
                    <TouchableOpacity activeOpacity={1} key='exclusive' onPress={() => Navi({ ...props, goScreen: 'Main_Exclusive', })}>
                        <View style={FRow}>{ProductFinmall(dataService.exclusive, 1)}</View>
                    </TouchableOpacity> :
                    <View style={FRow}>
                        {GenArray(10).map((_, i) => <View key={i} style={ViewStyle}>
                            <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                <View style={HW100p}>
                                    <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
                                </View>
                            </View>
                            <View style={[ItemCenter, { width: width * 0.20, }]}>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#19508B', }]}>NaN</Text>
                                <NumberFormat displayType='text' prefix='฿' renderText={(v) => RenText(v, '#19508B')} thousandSeparator
                                    value={0} />
                            </View>
                        </View>)}
                    </View>}
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> FIN_Supermarket
export const FIN_Supermarket = (props) => {
    const { dataService, } = props;
    const NaviStyle = { marginRight: 5, width: width * 0.60, };
    const ImageBannerBar = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 333.jpg`, };
    const ImageFood1 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_L/775-325_food1.jpg`, };
    const ImageFood1_1 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food1.jpg`, };
    const ImageFood4 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food4.jpg`, };
    const LogoFoodland = { uri: `${ip}/MySQL/uploads/Image_FinMall/logo-foodland.png`, };
    const LogoMaxvalu = { uri: `${ip}/MySQL/uploads/Image_FinMall/logo-maxvalu.png`, };
    // Banner ใหญ่ตรง Supermaket
    const item = [
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food1.jpg`, },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food2.jpg`, },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food3.jpg`, },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food4.jpg`, }];
    // สินค้าใน Supermaket
    const Supermarketitem = [{
        id_product: 0, image: 'A1.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '85',
        name_product: 'อิควลสารให้ความหวานแทนน้ำตาลจากหญ้าหวาน 2กรัม แพค 40ซอง', type: 'local',
    }, {
        id_product: 1, image: 'A2.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '149',
        name_product: 'แสนดีข้าวขาวหอมคัดพิเศษ 5กก', type: 'local',
    }, {
        id_product: 2, image: 'A3.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '45',
        name_product: 'ชิกเก้นออฟเดอะซีปลาทูน่ารสน้ำมันมะกอกและพริก 80กรัม', type: 'local',
    }, {
        id_product: 3, image: 'A4.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '21', name_product: 'ชาวเกาะกะทิยูเอชที 250มล',
        type: 'local',
    }, {
        id_product: 4, image: 'A5.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '23.50', name_product: 'มะลินมข้นหวาน 380กรัม',
        type: 'local',
    }, {
        id_product: 5, image: 'A6.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '7', name_product: 'ปรุงทิพย์เกลือป่น 500กรัม',
        type: 'local',
    }];
    // แบรนด์แนะนำอันแรก
    const Brand_Supermaket = [{
        detail: 'สุดยอดแห่งบิวตี้ไอเท็มและสินค้าเพื่อสุขภาพ', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, name: 'LOOKS',
    }, { detail: 'เบทาโกร', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, name: 'Betagro', },
    { detail: 'สินค้าคุณภาพ คุ้มค่า คุ้มราคา', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, name: 'Exclusive Brands', },
    { detail: 'หวานสดใสหอมติดผิว', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, name: 'Ole', },
    { detail: 'หวานสดใสหอมติดผิว', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, name: 'LOOKS', }];
    // แบรนด์แนะนำอันที่สอง
    const Brand_Supermaket2 = [
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }];
    // ---------------------------------------------------------------------------
    const SupermaketBox = Brand_Supermaket.map((v, i) => {
        const ImageSuper = { uri: v.image, };
        return <View key={i} style={[ItemCenter, Supermarket_Brand_Shop]}>
            <Image defaultSource={LOADING_ICON} resizeMode='stretch' source={ImageSuper} style={{ height: 50, width: 100, }} />
            <View style={[ItemCenter]}>
                <Text style={[FontFamilyBold, FontSize7]}>{v.name}</Text>
                <Text numberOfLines={1} style={[FontFamilyText, FontSize7]}>{v.detail}</Text>
            </View>
        </View>;
    });
    // ---------------------------------------------------------------------------
    const SupermaketBox2 = Brand_Supermaket2.map((v, i) => {
        const ImageSuper = { uri: v.image, };
        return <View key={i} style={[ItemCenter, Supermarket_Brand_Shop2]}>
            <Image defaultSource={LOADING_ICON} resizeMode='stretch' source={ImageSuper} style={HW100p} />
        </View>;
    });
    // --------------------------------------------------------------------------
    const _renderItem = (v, i) => {
        const ImageRender = { uri: v.image, };
        return <View key={i} style={{ aspectRatio: 2.5, height: 'auto', width, }}>
            <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageRender} style={HW100p} />
        </View>;
    };
    // --------------------------------------------------------------------------
    return <View style={{ backgroundColor: '#FFFFFF', }}>
        <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>FIN Supermarket</Text>
        <View>
            <Carousel autoplay autoplayInterval={4000} data={item} renderItem={_renderItem} pagination={PaginationLight} loop />
        </View>
        <View style={Supermarket_Product}>
            {/* dataService.product_hit */}
            {dataService && <FlatProduct {...props} dataService={Supermarketitem} dispriceSize={15} mode='row3'
                nameFlatProduct='FIN_Supermarket' nameSize={14} numberOfColumn={1} priceSize={15} radiusBox={5} />}
        </View>
        <View style={[FRow, Supermarket_Store]}>
            <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Main_Fin_Supermarket', })} style={NaviStyle}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageFood1} style={HW100p} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'space-between', width: width * 0.36, }}>
                <View style={Supermarket_Image}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageFood1_1} style={HW100p} />
                </View>
                <View style={Supermarket_Image}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageFood4} style={HW100p} />
                </View>
            </View>
        </View>
        <View style={Supermarket_BrandBox}>
            <View style={Supermarket_Brand_Image}>
                <FastImage resizeMode={stretch} source={LogoFoodland} style={HW100p} />
            </View>
            <View style={Supermarket_Brand_Image}>
                <FastImage resizeMode={stretch} source={LogoMaxvalu} style={HW100p} />
            </View>
        </View>
        <View style={Banner_Bar}>
            <FastImage resizeMode={stretch} source={ImageBannerBar} style={HxWfull} />
        </View>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>แบรนด์แนะนำ</Text>
            <TouchableOpacity>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal>{SupermaketBox}</ScrollView>
        <ScrollView horizontal>{SupermaketBox2}</ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> FIN_Supermarket
export const FIN_Supermarket_edit = (props) => {
    const { dataService, } = props;
    let item_1 = [];
    let item_2 = [];
    const NaviStyle = { width: width * 0.60, marginLeft: 5 };
    const ImageBannerBar = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 333.jpg`, };
    const ImageFood1 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_L/775-325_food1.jpg`, };
    const ImageFood1_1 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food1.jpg`, };
    const ImageFood4 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food4.jpg`, };
    if (dataService?.brand.length > 0) {
        for (let n = 0; n < dataService.brand.length; n += 2) {
            if (dataService.brand[n]) { item_1.push(dataService.brand[n]); };
            if (dataService.brand[n + 1]) { item_2.push(dataService.brand[n + 1]); };
        };
    };
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={{ backgroundColor: '#ECECEC', height: height * 0.064, width: 100, borderColor: '#C9C9C9', borderWidth: 1, margin: 3 }}>
        <View style={[HW100p, ItemCenterVertical]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>);
    const RecommendBrand = dataService?.brand && item_1 ? item_1.map((v, i) => {
        const ImageReBrand = { uri: `${ip}/MySQL/uploads/Brand_R/${v.image}`, };
        // const ImageReBrand = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendBrand', })}>
            <View style={{ height: height * 0.064, width: 100, borderColor: '#C9C9C9', borderWidth: 1, margin: 2 }}>
                <FastImage resizeMode={contain} source={ImageReBrand} style={[HW100p, ItemCenterVertical]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    const RecommendBrand2 = dataService?.brand && item_2 ? item_2.map((v, i) => {
        const ImageReBrand2 = { uri: `${ip}/MySQL/uploads/Brand_R/${v.image}`, };
        // const ImageReBrand2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Main_RecommendBrand', })}>
            <View style={{ height: height * 0.064, width: 100, borderColor: '#C9C9C9', borderWidth: 1, margin: 2 }}>
                <FastImage resizeMode={contain} source={ImageReBrand2} style={[HW100p, ItemCenterVertical]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    // Banner ใหญ่ตรง Supermaket
    const item = [
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food1.jpg`, },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food2.jpg`, },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food3.jpg`, },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food4.jpg`, }];
    // สินค้าใน Supermaket
    const Supermarketitem = [{
        id_product: 0, image: 'A1.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '85',
        name_product: 'อิควลสารให้ความหวานแทนน้ำตาลจากหญ้าหวาน 2กรัม แพค 40ซอง', type: 'local',
    }, {
        id_product: 1, image: 'A2.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '149',
        name_product: 'แสนดีข้าวขาวหอมคัดพิเศษ 5กก', type: 'local',
    }, {
        id_product: 2, image: 'A3.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '45',
        name_product: 'ชิกเก้นออฟเดอะซีปลาทูน่ารสน้ำมันมะกอกและพริก 80กรัม', type: 'local',
    }, {
        id_product: 3, image: 'A4.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '21',
        name_product: 'ชาวเกาะกะทิยูเอชที 250มล', type: 'local',
    }, {
        id_product: 4, image: 'A5.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '23.50',
        name_product: 'มะลินมข้นหวาน 380กรัม', type: 'local',
    }, {
        id_product: 5, image: 'A6.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '7',
        name_product: 'ปรุงทิพย์เกลือป่น 500กรัม', type: 'local',
    }];
    // --------------------------------------------------------------------------
    const _renderItem = (v, i) => {
        const ImageRender = { uri: v.image, };
        return <View key={i} style={{ aspectRatio: 2.5, height: 'auto', width, }}>
            <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageRender} style={HW100p} />
        </View>;
    };
    // --------------------------------------------------------------------------
    return <View style={{ backgroundColor: '#FFFFFF', }}>
        <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>FIN Supermarket</Text>
        <View>
            <Carousel autoplay autoplayInterval={4000} data={item} renderItem={_renderItem} pagination={PaginationLight} loop />
        </View>
        <View style={[FRow, Supermarket_Store]}>
            <View style={{ justifyContent: 'space-between', width: width * 0.36, }}>
                <View style={Supermarket_Image}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageFood1_1} style={HW100p} />
                </View>
                <View style={Supermarket_Image}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageFood4} style={HW100p} />
                </View>
            </View>
            <View style={NaviStyle}>
                <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={ImageBannerBar} style={{ height: height * 0.06, width: '100%' }} />
                <View style={[FrameBackgroundTextBox]}>
                    <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>แบรนด์แนะนำ</Text>
                    <TouchableOpacity>
                        <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd]}>ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View>
                        <View style={FRow}>{RecommendBrand}</View>
                        <View style={[FRow, { marginBottom: 2, }]}>{RecommendBrand2}</View>
                    </View>
                </ScrollView>
            </View>
        </View>
        <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>สินค้าแนะนำ</Text>
        <View style={Supermarket_Product}>
            {dataService ? <FlatProduct {...props} dataService={dataService.product_hit} dispriceSize={15} mode='row3'
                nameFlatProduct='FIN_Supermarket' nameSize={14} numberOfColumn={1} priceSize={15} radiusBox={5} /> :
                <EmptyProduct />}
        </View>
        <View style={Banner_Bar}>
            <FastImage resizeMode={stretch} source={ImageBannerBar} style={HxWfull} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export const TodayProduct = (props) => {
    const { loadData, noTitle, onShow, prepath, } = props;
    onShow && console.log(onShow);
    return <View style={[BoxProduct2, { backgroundColor: 'transparent', }]}>
        {noTitle ? null : <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>สินค้าคัดสรรเพื่อคุณ</Text>}
        <View style={BoxProduct2BoxProduct}>
            {loadData ? <ProductBox {...props} dataService={loadData} dispriceSize={15} mode='row3colall_new' nameSize={14}
                pointerid_store={true} pointerUrl='Detail' prepath={prepath ?? null} priceSize={15} /> :
                <ProductBox dataService={GenArray(3)} mode='row3colall_new' nodata />}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Botton_PopUp_FIN = (props) => {
    const [activeShow, setActiveShow] = useState(true);
    const [activeSliding, setActiveSliding] = useState(false);
    const translationXRef = useRef(new Animated.Value(0));
    const translationYRef = useRef(new Animated.Value(0));
    const _lastOffset = { x: 0, y: 0 };
    const ImageStyle = { backfaceVisibility: 'hidden', marginBottom: -50, right: 50, };
    const SlidingStyle = { backgroundColor: null, top: '50%', width: '100%', };
    const ImagePopUP = require('../../../icon/PopUP.png');
    const ImagePopUP2 = require('../../../images/0044-03.png');
    const _onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translationXRef.current, translationY: translationYRef.current, }, }], { useNativeDriver: false, }
    );
    const _onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            _lastOffset.x += event.nativeEvent.translationX;
            _lastOffset.y += event.nativeEvent.translationY;
            translationXRef.current.setOffset(_lastOffset.x < -(width * 0.5) ? -(width - 126) : 0);
            translationXRef.current.setValue(0);
            translationYRef.current.setOffset(_lastOffset.y > 0 ? 0 : _lastOffset.y < -(height - 215) ? -(height - 215) : _lastOffset.y);
            translationYRef.current.setValue(0);
        };
    };
    return <>
        {activeShow && <PanGestureHandler {...props} onGestureEvent={_onGestureEvent} onHandlerStateChange={_onHandlerStateChange}>
            <Animated.View style={{
                bottom: 20, elevation: 1, height: 60, left: width - 65, marginTop: -60, width: 60,
                transform: [{ translateX: translationXRef.current }, { translateY: translationYRef.current }],
            }}>
                <TouchableOpacity activeOpacity={1} onPress={() => setActiveSliding(!activeSliding)}>
                    <FastImage resizeMode={cover} source={ImagePopUP} style={[Botton_PopUp_Image, ImageStyle]} />
                    <TouchableOpacity onPress={() => setActiveShow(!activeShow)} style={{ bottom: 28, height: 20, left: 30, width: 20, }}>
                        <View style={{ backgroundColor: 'transparent', borderWidth: 0, elevation: 0, }}>
                            <IconAntDesign name='closecircle' size={20} style={HW100p} />
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>}
        <SlidingView componentVisible={activeSliding} containerStyle={SlidingStyle} disableDrag position="right">
            <TouchableOpacity onPress={() => setActiveSliding(!activeSliding)}>
                <View style={Botton_PopUp_Box}>
                    <FastImage resizeMode={contain} source={ImagePopUP2} style={HW100p}>
                        <View style={Botton_PopUp_Text}>
                            <Text style={[FontFamilyBold, { color: '#FFFFFF', }]}>สวัสดีครับ</Text>
                            <Text style={[FontFamilyBold, { color: '#FFFFFF', }]}>ต้องการให้น้องฟินช่วยด้านใดดีครับ</Text>
                        </View>
                    </FastImage>
                </View>
            </TouchableOpacity>
        </SlidingView>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Category_Image_Total = (props) => {
    const { dataService, } = props;
    const { S, M, L, } = dataService;
    const BoxStyle = { height: 'auto', justifyContent: 'space-between', marginTop: 5, width: '100%', };
    return <View style={{ marginTop: 10, }}>
        <View style={{ aspectRatio: 3.5, height: 'auto', }}>
            {S.map((v, i) => {
                const ImageS = { uri: `${ip}/MySQL/${v.image_path}/${v.image}`, };
                return <View key={i}>
                    <FastImage resizeMode={contain} source={ImageS} style={HW100p} />
                </View>;
            })}
        </View>
        <View style={[BoxStyle, FRow, { aspectRatio: 3, }]}>
            {M.map((v, i) => {
                const ImageM = { uri: `${ip}/MySQL/${v.image_path}/${v.image}`, };
                return <View key={i} style={{ width: width * 0.49, }}>
                    <FastImage resizeMode={contain} source={ImageM} style={HW100p} />
                </View>;
            })}
        </View>
        <View style={[BoxStyle, FRow, { aspectRatio: 2.5, }]}>
            {L.map((v, i) => {
                const ImageL = { uri: `${ip}/MySQL/${v.image_path}/${v.image}`, };
                return <View key={i} style={{ width: width * 0.49, }}>
                    <FastImage resizeMode={contain} source={ImageL} style={HW100p} />
                </View>;
            })}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Not_Internet = (props) => {
    const ImageWifi = { uri: `${ip}/mysql/uploads/icon_5/wifi-connected-png-8.png`, };
    return <View style={ItemCenter}>
        <FastImage source={ImageWifi} style={{ height: 200, width: 200, }} />
        <Text style={[FontFamilyText, FontSize4, { color: '#969BA0', textAlign: 'center', width: 300, }]}>
            WHOOPS! ดูเหมือนว่าจะมีปัญหาในการเชื่อมต่อเซิร์ฟเวอร์ ลองพยายามตรวจสอบ
                การเชื่อมต่ออินเตอร์เน็ตแล้วลองใหม่อีกครั้ง </Text>
        <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'goBack', })}>
            <View style={[ItemCenter, { backgroundColor: mainColor, borderRadius: 5, marginTop: 10, padding: 10, }]}>
                <Text style={[FontFamilyBold, FontSize4, { color: '#FFFFFF' }]}>โหลดอีกครั้ง</Text>
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Fin_LuxuryShop = (props) => {
    const { dataService, } = props;
    const ImageShop = { uri: `${ip}/MySQL/uploads/bannerTEST/banner/banner_ร้านที่ใช่อยากให้ช้อป/ร้านที่ใช้อยากให้ช้อป-01.jpg`, };
    const ImageShop1 = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg`, };
    const ImageShop2 = { uri: `${ip}/MySQL/uploads/bannerTEST/banner/banner_ร้านที่ใช่อยากให้ช้อป/ร้านที่ใช้อยากให้ช้อป-02.jpg`, };
    const ImageShop3 = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg`, };
    const ViewStyle = { backgroundColor: '#691F50', borderRadius: 5, justifyContent: 'space-between', marginBottom: 3, padding: 3, };
    const renText = (v, color) => <Text style={[BoxProduct1ImagePrice, FontFamilyBold, FontSize8, { color, }]}>{v}</Text>;
    const BoxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxStore1Box, { backgroundColor: '#ECECEC', }]}>
        <View style={[HW100p, { borderColor: '#ECECEC', }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={HW100p} />
        </View>
    </View>);
    const dataNewStore = dataService?.dont_miss ? dataService?.dont_miss.map((v, i) => {
        const ImageNewStore = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({
            ...props, goScreen: 'Main_RecommendStore',
            setData: { id_slide: v.id, name_path: 'store_total', uri_path: 'publish_store/store_total', },
        })}>
            <View style={[BoxStore1Box, { marginLeft: 0, }]}>
                <FastImage resizeMode={contain} source={ImageNewStore} style={[HW100p, { borderColor: '#ECECEC', }]} />
            </View>
        </TouchableOpacity>;
    }) : BoxEmpty;
    const ProductFinmall = (type, n) => type.map((v, i) => {
        const { full_price, name, } = v;
        if (i < 2) {
            // const dataMySQL = `${finip}/${v.image_path}/${v.image}`;
            const ImageFinmall = n == 0 ?
                i == 0 ?
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_5206014401000.jpg`, } :
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_99368145334.jpg`, } :
                i == 0 ?
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200710_15010144107.jpg`, } :
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200711_66232114742.jpg`, };
            return <View key={i} style={{ marginTop: 5, paddingLeft: 2.5, width: width * 0.228, }}>
                <View style={{ aspectRatio: 1, backgroundColor: '#FFFFFF', height: 'auto', width: width * 0.20, }}>
                    <FastImage resizeMode={contain} source={ImageFinmall} style={HW100p} />
                </View>
                <View style={[ItemCenter, { width: width * 0.20, }]}>
                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF', }]}>{name}</Text>
                    <NumberFormat displayType='text' prefix='฿' renderText={(v2) => renText(v2, '#FFFFFF')} thousandSeparator
                        value={full_price} />
                </View>
            </View>;
        };
    });
    return <View style={[FRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 3, }]}>
        <View style={{ padding: 3, width: '49.9%', }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>FIN Luxury Shop!!</Text>
            <View>
                <View style={{ height: 100, width: '100%', }}>
                    <FastImage resizeMode={cover} source={ImageShop} style={{ height: '100%', }} />
                </View>
                <View style={{ marginTop: 3, }}>
                    <FastImage resizeMode={cover} source={ImageShop1} style={{ height: 40, }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, }}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>Fin Mall</Text>
                <View style={ViewStyle}>
                    {dataService ?
                        <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Main_Fin_Mall', })}>
                            <View style={FRow}>{ProductFinmall(dataService?.product_hit, 0)}</View>
                        </TouchableOpacity> :
                        <View style={FRow}>
                            {GenArray(10).map((_, i) => <View key={i} style={{ marginTop: 10, paddingLeft: 2.5, width: width * 0.225, }}>
                                <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                    <View style={HW100p} />
                                </View>
                                <View style={[ItemCenter, { width: width * 0.20, }]}>
                                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#691F50', }]}>NaN</Text>
                                    <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#691F50')} thousandSeparator
                                        value={0} />
                                </View>
                            </View>)}
                        </View>}
                </View>
            </View>
        </View>
        <View style={{ padding: 3, width: '49.9%', }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>ร้านค้าห้ามพลาด!!</Text>
            <View>
                <View style={{ height: 100, width: '100%', }}>
                    <FastImage resizeMode={cover} source={ImageShop2} style={{ height: '100%', }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, }}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart]}>สินค้าสุด Exclusive</Text>
                <View style={{ backgroundColor: '#19508B', borderRadius: 5, justifyContent: 'space-between', padding: 3, }}>
                    {dataService ?
                        <TouchableOpacity activeOpacity={1} key='exclusive' onPress={() => Navi({ ...props, goScreen: 'Main_Exclusive', })}>
                            <View style={FRow}>{ProductFinmall(dataService?.exclusive, 1)}</View>
                        </TouchableOpacity> :
                        <View style={FRow}>
                            {GenArray(10).map((_, i) => <View key={i} style={{ marginTop: 10, paddingLeft: 2.5, width: width * 0.225, }}>
                                <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                    <View style={HW100p} />
                                </View>
                                <View style={[ItemCenter, { width: width * 0.20, }]}>
                                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#19508B', }]}>NaN</Text>
                                    <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#19508B')} thousandSeparator
                                        value={0} />
                                </View>
                            </View>)}
                        </View>}
                </View>
            </View>
            <View style={{ backgroundColor: 'blue', marginTop: 3, }}>
                <FastImage source={ImageShop3} style={{ height: 40, }} />
            </View>
        </View>
    </View>;
};