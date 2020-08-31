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
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import BottomSheet from "react-native-raw-bottom-sheet";
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import Dash from 'react-native-dash';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
import { Notifications } from 'react-native-notifications';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../style/stylesFont';
import stylesMain, { appBarColor, color_up, mainColor, } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    FlatComponent, FlatProduct, GetData, GetServices, ProductBox,
} from '../customComponents/Tools';
import { AppBar as AAppBar, GenArray, ImageList, NavigationNavigate, Toolbar, } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> set value
const LOADING_ICON = require('../../images/icon.png');
const { cacheOnly, } = FastImage.cacheControl;
const { contain, cover, stretch, } = FastImage.resizeMode;
const {
    FontCenter, FontFamilyBold, FontFamilyBoldBold, FontFamilySemiBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7, FontSize8,
} = stylesFont;
const {
    animatedView, animatedViewSub, BackgroundAreaView, Banner_Bar, Banner_Bar_image, bigSlideImage, Botton_PopUp_Box, Botton_PopUp_Image,
    Botton_PopUp_Text, BoxProduct1Box2, BoxProduct1Box2new, BoxProduct1Image, BoxProduct1ImagePrice, BoxProduct2, BoxProduct2Image,
    BoxProduct2BoxProduct, BoxStore1Box, BoxStore1Box2, BoxStore1Box3, BoxStore1Image, BoxStore2Box2, BoxStore2Image2, Brand_image_Box,
    Button_Bar_Box, Button_Bar_icon, Categorys, CategoryProductImageHead, CategoryProductStoreBox, category_A, Category_box, child,
    exitTitleText, FinMall_Box, FlexRow, FrameBackgroundTextBox, FrameBackgroundTextEnd, FrameBackgroundTextStart, FrameBackground2,
    ItemCenter, ItemCenterVertical, litleSlideImage, PopularText_A, Popular_Box_B, Popular_Box_D, SafeAreaViewNB, Second_StoreFin,
    Second_StoreFin_BoxHead, Second_StoreFin_Image, Second_StoreFin_ImageA, Second_StoreFin_ImageB, Second_StoreFin_ImageB_T,
    Second_Storefooter, Supermarket_BrandBox, Supermarket_Brand_Image, Supermarket_Brand_Shop, Supermarket_Brand_Shop2, Supermarket_Image,
    Supermarket_Product, Supermarket_Store, Time_FlashSale_TimeBox, Time_FlashSale_TimeText,
} = stylesMain;
let Navi = (naviProps) => NavigationNavigate(naviProps);
///----------------------------------------------------------------------------------------------->>>> Main // complete_last_function
const getCartDataCount = (cartData) => {
    var cartDataCount = 0;
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
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
function MainScreen(props) {
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
    let FetchDataMain = () => multiFetchData({
        multiData: [
            { name: 'publish_mobile', uri: `${finip}/home/publish_mobile`, },
            { dataBody: { slide: 'banner' }, name: 'home_mobile', uri: `${finip}/home/home_mobile`, }
        ]
    });
    useEffect(() => {
        if ((getFetchData['publish_mobile'] == undefined || (getFetchData['publish_mobile']?.isFetching)) ||
            (getFetchData['home_mobile'] == undefined || (getFetchData['home_mobile']?.isFetching))) { FetchDataMain(); };
    }, [(getFetchData['publish_mobile'] == undefined || (getFetchData['publish_mobile']?.isFetching)) ||
        (getFetchData['home_mobile'] == undefined || (getFetchData['home_mobile']?.isFetching))]);
    let FetchDataFlash = () => fetchData({ name: 'flash_timer', uri: `${finip}/flashsale/flash_timer`, });
    useEffect(() => {
        if (getFetchData['flash_timer'] == undefined || (getFetchData['flash_timer']?.isFetching)) { FetchDataFlash(); };
    }, [getFetchData['flash_timer']?.isFetching]);
    let itemT = [
        /////--------------------------------------------->>>Start
        {
            // แบรนเนอร์ใหญ่
            nameComponent: 'Slide',
            renderComponent: <Slide {...props} />
        },
        {
            // รับประกัน
            nameComponent: 'Guarantee',
            renderComponent: <Guarantee  {...props} />
        },
        {
            // หมวดหมู่
            nameComponent: 'Category',
            renderComponent: <Category {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // เทรนฮิต
            nameComponent: 'Trend_Hit',
            renderComponent: <Trend_Hit  {...props} />
        },
        {
            // ปุ่มเข้าดีล โปรโมชั่น
            nameComponent: 'Button_Bar',
            renderComponent: <Button_Bar {...props} />
        },
        {
            // สินค้าลดพิเศษ
            nameComponent: 'FlashSale',
            renderComponent: <FlashSale {...props} />
        },
        // {
        //     nameComponent: 'Fin_Service',
        //     renderComponent: <Fin_Service {...props} />
        // },
        {
            // แบรน์แนะนำ
            nameComponent: 'Recommend_Brand',
            renderComponent: <Recommend_Brand {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // แบรนด์เนอร์โฆษณา 2
            nameComponent: 'BannerBar_TWO',
            renderComponent: <BannerBar_TWO />
        },
        {
            // ร้านนี้ห้ามพลาด
            nameComponent: 'Fin_LuxuryShop',
            // renderComponent: <Fin_LuxuryShop  {...props} dataService={getFetchData['publish_mobile']?.data} />
            renderComponent: <NewStore  {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // ฟินมอล กับ Exclusive
            nameComponent: 'Fin_Mall',
            renderComponent: <Fin_Mall {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // แบรนด์เนอร์โฆษณา 1
            nameComponent: 'BannerBar_ONE',
            renderComponent: <BannerBar_ONE />
        },
        {
            // ไฮไลท์ประจำสัปดาห์
            nameComponent: 'Highlight',
            renderComponent: <Highlight {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // ลายแทงร้านค้าแนะนำ
            nameComponent: 'PromotionPopular',
            renderComponent: <PromotionPopular  {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // ร้านที่ใช่อยากให้ช๊อป
            nameComponent: 'Popular_store',
            renderComponent: <Popular_store {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // สินค้ายอดนิยม
            nameComponent: 'Popular_product',
            renderComponent: <Popular_product {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // ฟินคัดมาเพื่อคุณ
            nameComponent: 'Product_for_you',
            renderComponent: <Product_for_you {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // สินค้า และ โฆษณาร้านค้า ทั้ง 20 หมวดหมู่
            nameComponent: 'CategoryProduct',
            renderComponent: <CategoryProduct {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // สินค้า และร้านค้า มือสอง
            nameComponent: 'Second_product',
            renderComponent: <Second_product {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // แบรนด์เนอร์โฆษณา 3
            nameComponent: 'BannerBar_THREE',
            renderComponent: <BannerBar_THREE />
        },
        {
            // ฟินซุปเปอร์มาเก็ต
            nameComponent: 'FIN_Supermarket',
            renderComponent: <FIN_Supermarket {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            // สินค้าคัดสรรมาเพื่อคุณ
            nameComponent: 'TodayProduct',
            renderComponent: <TodayProduct {...props} loadData={getFetchData['publish_mobile']?.data?.for_you2} />
        },
        /////--------------------------------------------->>>End
    ];
    const colors = [AnimatedHeadbg, AnimatedHeadbg2];
    return <SafeAreaView style={[BackgroundAreaView, SafeAreaViewNB,]}>
        <Animated.View style={
            { zIndex: 1, backgroundColor: 'transparent', elevation: 1, height: maxheight, marginTop: -(maxheight), top: maxheight, width, }}>
            <AAppBar {...props} borderBottomColor={AnimatedBorderBottom} cartBar chatBar colorSet={colors} enableAnimated={AnimatedHeadbg}
                enableSearch />
        </Animated.View>
        <FlatComponent animatedView attachNativeEvent component={itemT} componentPage='MainScreen' initialNumToRender={10} onScroll={onScroll}
            scrollEventThrottle={8} showsVerticalScrollIndicator={false} />
        <Botton_PopUp_FIN />
        <Toolbar {...props} style={{ flex: 5, }} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> ExitAppModule
export let ExitAppModule = (props) => {
    const { navigation, route } = props;
    const routeProps = route.name;
    const [backClickCount, setBackClickCount] = useState(0);
    const pathMain = ['MainScreen', 'FeedScreen', 'NewsScreen', 'BellScreen', 'LoginScreen', 'ProfileScreen'];
    const springValue = useRef(new Animated.Value(0));
    const transformValue = useRef(new Animated.Value(100));
    YellowBox.ignoreWarnings(["Require cycle:", "VirtualizedList:", "VirtualizedLists should never", "*"]);
    let handleBackButton = () => {
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
    return <Animatable.View style={[animatedView, { opacity: springValue.current, transform: [{ translateY: transformValue.current }] }]}>
        <View style={animatedViewSub}>
            <Text style={[exitTitleText, FontFamilyText]}>กดอีกครั้งเพื่อออก</Text>
        </View>
    </Animatable.View>;
};
///----------------------------------------------------------------------------------------------->>>> Slide
export let Slide = (props) => {
    const { isOutData, banner, getFetchData, } = props;
    let _renderItem = (v, i) => {
        var ImageSlide;
        // banner ?
        ImageSlide = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}`, };
        // : (dataMySQL = i % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
        return <View style={[child]} key={i}>
            <FastImage resizeMethod='resize' resizeMode={contain} source={ImageSlide} style={[BoxProduct1Image]} />
        </View>;
    };
    return <View style={{ backgroundColor: '#fff' }}>
        <View style={[child, ItemCenter, { position: 'absolute' }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
        {(banner || !isOutData && getFetchData['home_mobile']?.data) ?
            <ImageList {...props} autoplay data={banner ?? getFetchData['home_mobile']?.data} dotsStyle={{ height: 10, width: 10, }} loop
                pagination paginationPosition='down' paginationType='dots' renderItem={_renderItem} /> :
            <View style={[child, ItemCenter]}>
                {/* <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} /> */}
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Guarantee
export let Guarantee = (props) => {
    const TOStyles = { alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 5, padding: 5, width: '49%', };
    const ImageGuaran1 = { uri: `${ip}/MySQL/uploads/Home/001.png`, };
    const ImageGuaran2 = { uri: `${ip}/MySQL/uploads/Guarantee/Samsung-logo.png`, };
    const ImageGuaran3 = { uri: `${ip}/MySQL/uploads/Guarantee/adidas.png`, };
    const ImageGuaran4 = { uri: `${ip}/MySQL/uploads/Guarantee/w4.png`, };
    let item = [
        { text: 'ใบทะเบียนภาษีมูลค่าเพิ่ม', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-001.png` } },
        { text: 'หนังสือจดทะเบียนบริษัท', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-002.png` } },
        { text: 'มีบริการรับประกันการจัดส่ง', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-003.png` } },
        { text: 'ใบจดทะเบียนเครื่องหมายการค้า', image: { uri: `${ip}/MySQL/uploads/Guarantee/warranty_blue-005.png` } }];
    let _renderItem = (v, i) => {
        const ImageGuaran = { uri: `${ip}/MySQL/uploads/Guarantee/02.png`, };
        return <View key={i} style={[FlexRow, { justifyContent: 'space-around', width: width * 0.70, }]}>
            <View style={FlexRow}>
                <View style={{ height: 30, marginRight: 10, width: 30, }}>
                    <FastImage resizeMode={cover} source={v.image} style={BoxProduct1Image} />
                </View>
                <Text style={[FontFamilyBold, FontSize6, { marginTop: 5 }]}>{v.text}</Text>
            </View>
            <View style={[ItemCenter, { height: 30, width: 30 }]}>
                <FastImage resizeMode={cover} source={ImageGuaran} style={{ height: 20, width: 20 }} />
            </View>
        </View>
    };
    return <>
        <View style={
            { aspectRatio: 4.5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginTop: 5, width: '100%', }}>
            <View style={{ width: '54%', }}>
                <FastImage resizeMode={cover} source={ImageGuaran1} style={[BoxProduct1Image, { borderRadius: 5 }]} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '44%', }}>
                <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'FeedsScreen', })} style={TOStyles}>
                    <View style={{ height: '60%', width: width * 0.13 }}>
                        <FastImage resizeMode={cover} source={ImageGuaran2} style={BoxProduct1Image} />
                    </View>
                    <View style={{ backgroundColor: mainColor, borderRadius: 8, marginTop: 10, paddingHorizontal: 10, }}>
                        <Text style={[FontSize7, FontFamilyBold, { color: '#FFFFFF' }]}>ช้อปเลย</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={TOStyles}>
                    <View style={{ height: '60%', width: width * 0.13 }}>
                        <FastImage resizeMode={cover} source={ImageGuaran3} style={BoxProduct1Image} />
                    </View>
                    <View style={{ backgroundColor: mainColor, borderRadius: 8, marginTop: 10, paddingHorizontal: 10, }}>
                        <Text style={[FontSize7, FontFamilyBold, { color: '#FFFFFF' }]}>ช้อปเลย</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
            aspectRatio: 8.5, backgroundColor: '#FFFFFF', borderRadius: 5, flexDirection: 'row', height: 'auto', marginTop: 5,
            paddingHorizontal: 5, width: '100%',
        }}>
            <View style={[ItemCenter, { borderColor: '#ffbf00', borderRadius: 5, borderWidth: 1, width: '30%', }]}>
                <FastImage resizeMode={cover} source={ImageGuaran4} style={[BoxProduct1Image, { borderRadius: 4 }]} />
            </View>
            <View style={{ justifyContent: 'center', width: '30%', }}>
                <Carousel renderItem={_renderItem} data={item} autoplay autoplayInterval={5000} />
            </View>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Category // Loading
export let Category = (props) => {
    const { dataService, fetchData, getFetchData, } = props;
    let FetchDataCate = (id_type) => {
        fetchData({ dataBody: { id_category: id_type }, name: `category_product|${id_type}`, uri: `${finip}/home/product_mobile`, })
    };
    let boxEmpty = GenArray(10).map((_, i) => {
        const ViewStyle = {
            alignItems: 'center', backgroundColor: '#ECECEC', borderColor: '#ECECEC', borderRadius: 8, borderWidth: 1, height: 60,
            justifyContent: 'center', width: 60,
        };
        return <View key={i} style={{ alignItems: 'center', justifyContent: 'center', padding: 2, width: width * 0.199, }}>
            <View style={ViewStyle}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
            <View style={{ height: 25 }} />
        </View>
    });
    let dataCategory = dataService?.category ? dataService?.category.map((v, i) => {
        const { image_head, id_type, image_path, name } = v;
        if (i < dataService?.category.length) {
            useEffect(() => {
                (getFetchData[`category_product|${id_type}`] == undefined || (getFetchData[`category_product|${id_type}`]?.isFetching)) &&
                    FetchDataCate(id_type);
            }, [(getFetchData[`category_product|${id_type}`] == undefined || (getFetchData[`category_product|${id_type}`]?.isFetching))]);
            const uriCate = { uri: `${finip}/${image_path}/menu/${image_head}${Platform.OS == 'android' ? '_.webp' : ''}`, };
            return <TouchableOpacity activeOpacity={1} key={i} style={Categorys} onPress={() =>
                Navi({ ...props, goScreen: 'CategoryScreen', setData: { id_type: id_type }, })}>
                <FastImage defaultSource={LOADING_ICON} source={uriCate} style={Category_box} resizeMode={stretch} />
                <View style={{ height: 25 }}>
                    <Text numberOfLines={2} style={[FontFamilySemiBold, FontSize8, FontCenter]}>{name}</Text>
                </View>
            </TouchableOpacity>;
        }
    }) : boxEmpty;
    return <View style={FrameBackground2}>
        <ScrollView horizontal>
            <View style={category_A}>{dataCategory}</View>
        </ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> ??N
export let Trend_Hit = (props) => {
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const item = [
        { image: { uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-02.jpg`, } },
        { image: { uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-03.jpg` } }];
    const dataBody = { type: 'Trend_Hit', };
    const uriService = `${ip}/mysql/DataServiceMain.php`;
    const uriTrend1 = { uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-01.jpg`, };
    const uriTrend2 = { uri: `${ip}/MySQL/uploads/Home/Button_Gif/Shop.gif`, };
    useEffect(() => {
        activeDataService &&
            GetServices({ uriPointer: uriService, dataBody, getDataSource: v => { setActiveDataService(false); setDataService(v); }, });
    }, [dataBody]);
    let _renderItem = (v, i) => {
        const imageShop = { uri: `${ip}/MySQL/uploads/Home/Button_Gif/Shop2.png`, };
        return <View key={i} style={{ width: width * 0.48 }}>
            <View style={{ height: '88%', }}>
                <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={v.image} style={BoxProduct1Image} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ height: 25, marginTop: -15, width: 90, }}>
                    <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={imageShop} style={[BoxProduct1Image,
                        { borderRadius: 8 }]} />
                </TouchableOpacity>
            </View>
        </View>
    };
    let Trend_Box = () => dataService && dataService?.error == undefined && dataService?.map((v, i) => {
        const ImageTrend = { uri: `${ip}/mysql/${v.image_path}/${v.image}`, };
        return <TouchableOpacity key={i} style={[ItemCenter,
            { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, flexDirection: 'row', width: width * 0.325, }]}>
            <FastImage defaultSource={LOADING_ICON} resizeMode={contain} source={ImageTrend}
                style={{ height: 50, width: 50, marginRight: 5, borderRadius: 5 }} />
            <View>
                <Text numberOfLines={1} style={[FontFamilyBold, FontSize7]}>{v.name}</Text>
                <Text numberOfLines={1} style={[FontFamilyText, FontSize8, { color: '#CACACA' }]}>38K products</Text>
            </View>
        </TouchableOpacity>;
    });
    return <>
        <View style={[FlexRow, { aspectRatio: 5, justifyContent: 'space-between', marginTop: 3, paddingHorizontal: 5, width, }]}>
            <View style={{ width: width * 0.48 }}>
                <View style={{ height: '88%' }}>
                    <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={uriTrend1} style={BoxProduct1Image} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 25, marginTop: -15, width: 90, }}>
                        <FastImage defaultSource={LOADING_ICON} resizeMode={stretch} source={uriTrend2} style={BoxProduct1Image} />
                    </TouchableOpacity>
                </View>
            </View>
            <Carousel autoplay autoplayInterval={4000} data={item} renderItem={_renderItem} />
        </View>
        <View style={FrameBackground2}>
            <View style={[FrameBackgroundTextBox]}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>เทรนฮิต</Text>
                <TouchableOpacity>
                    <Text style={[FontFamilyBold, FontSize7, FrameBackgroundTextEnd,]}>
                        <IconMaterialCommunityIcons name='reload' size={20} />Reload</Text>
                </TouchableOpacity>
            </View>
            <View style={{ aspectRatio: 6, flexDirection: 'row', height: 'auto', justifyContent: 'space-around', paddingHorizontal: 2 }}>
                {Trend_Box()}</View>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Fin_Service = (props) => {
    const ImageFinService = { uri: `${ip}/MySQL/uploads/Text/MB2.jpg` };
    return <View style={[FrameBackground2, { aspectRatio: 4.5, height: 'auto', }]}>
        <Image resizeMode='contain' resizeMethod='resize' source={ImageFinService} style={BoxProduct1Image} />
    </View>
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const ViewStyle = { zIndex: 1, backgroundColor: 'transparent', elevation: 1, justifyContent: 'space-around', marginTop: 3, width, };
    const ImageBestFin = require('../../icon/Icon_Deal/04.jpg');
    const ImageCampaign = require('../../icon/Icon_Deal/03.jpg');
    const ImageCoin = require('../../icon/Icon_Deal/02.jpg');
    const ImageDeal = require('../../icon/Icon_Deal/01.jpg');
    const ImageInstallment = require('../../icon/Icon_Deal/05.jpg');
    return <>
        <View style={[FlexRow, ViewStyle]}>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'DealScreen', })}>
                <View style={[Button_Bar_Box, { elevation: 1 }]}>
                    <FastImage resizeMode={contain} source={ImageDeal} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'CoinScreen', })}>
                <View style={[Button_Bar_Box, { elevation: 1 }]}>
                    <FastImage resizeMode={contain} source={ImageCoin} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'CampaignScreen', })}>
                <View style={[Button_Bar_Box, { elevation: 1 }]}>
                    <FastImage resizeMode={contain} source={ImageCampaign} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'The_BestFinScreen', })}>
                <View style={[Button_Bar_Box, { elevation: 1 }]}>
                    <FastImage resizeMode={contain} source={ImageBestFin} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Installment_payScreen', })}>
                <View style={[Button_Bar_Box, { elevation: 1 }]}>
                    <FastImage resizeMode={contain} source={ImageInstallment} style={Button_Bar_icon} />
                </View>
            </TouchableOpacity>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Brand_RCM
export let Recommend_Brand = (props) => {
    const { dataService, } = props;
    let item_1 = [];
    let item_2 = [];
    if (dataService?.brand.length > 0) {
        for (var n = 0; n < dataService.brand.length; n += 2) {
            if (dataService.brand[n]) { item_1.push(dataService.brand[n]); };
            if (dataService.brand[n + 1]) { item_2.push(dataService.brand[n + 1]); };
        };
    };
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[Brand_image_Box, { backgroundColor: '#ECECEC' }]}>
        <View style={[BoxProduct1Image, ItemCenterVertical]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>);
    let recommendBrand = dataService?.brand && item_1 ? item_1.map((v, i) => {
        const ImageReBrand = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Recommend_Brand', })}>
            <View style={Brand_image_Box}>
                <FastImage resizeMode={contain} source={ImageReBrand} style={[BoxProduct1Image, ItemCenterVertical]} />
            </View>
        </TouchableOpacity>;
    }) : boxEmpty;
    let recommendBrand2 = dataService?.brand && item_2 ? item_2.map((v, i) => {
        // const ImageReBrand2 = { uri: `${ip}/MySQL/uploads/Brand_R/${v.image}`, };
        const ImageReBrand2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Recommend_Brand', })}>
            <View style={Brand_image_Box}>
                <FastImage resizeMode={contain} source={ImageReBrand2} style={[BoxProduct1Image, ItemCenterVertical]} />
            </View>
        </TouchableOpacity>;
    }) : boxEmpty;
    return <View style={[FrameBackground2, { paddingBottom: 0, }]}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>แบรนด์แนะนำ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Recommend_Brand', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal>
            <View>
                <View style={FlexRow}>{recommendBrand}</View>
                <View style={[FlexRow, { marginBottom: 2 }]}>{recommendBrand2}</View>
            </View>
        </ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export let Popular_store = (props) => {
    const { dataService, } = props;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={BoxStore1Box}>
        <View style={[BoxStore1Image, { backgroundColor: '#ECECEC' }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>);
    let PopularStoreItem = dataService?.store_good ? dataService.store_good.map((v, i) => {
        const ImagePopStore = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Recommend_Store', })}>
            <View style={[BoxStore1Box, { marginLeft: 0 }]}>
                <FastImage resizeMode={contain} source={ImagePopStore} style={BoxStore1Image} />
            </View>
        </TouchableOpacity>;
    }) : boxEmpty;
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ร้านที่ใช่อยากให้ช้อป</Text>
        </View>
        <View style={[FlexRow, { aspectRatio: 4, height: 'auto', justifyContent: 'space-between', paddingHorizontal: 5 }]}>
            {PopularStoreItem}</View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Popular_product
export let Popular_product = (props) => {
    const { dataService, } = props;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={{ width: width * 0.22 }}>
        <View style={[Popular_Box_D, { backgroundColor: '#ECECEC', borderRadius: 5, }]}>
            <View style={BoxProduct1Image}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
    </View>);
    let productCate = (type) => type ? type.map((v, i) => {
        const ImageProCate = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return i < 2 && <View style={{ width: width * 0.22 }} key={i}>
            <View style={[Popular_Box_D, { backgroundColor: '#FFFFFF', borderRadius: 5 }]}>
                <FastImage style={BoxProduct1Image} source={ImageProCate} resizeMode={contain} />
            </View>
            <View style={[ItemCenter, { width: width * 0.20, }]}>
                <Text numberOfLines={1} style={[FontSize8, FontFamilyText]}>{v.name}</Text>
                <NumberFormat value={v.full_price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={v2 =>
                    <Text style={[FontFamilyBold, FontSize8, BoxProduct1ImagePrice,]}>{v2}</Text>} />
            </View>
        </View>;
    }) : boxEmpty;
    return <View>
        <View style={[FrameBackground2]}>
            <View style={[FrameBackgroundTextBox]}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>สินค้ายอดนิยม</Text>
            </View>
            <View style={[FlexRow, { aspectRatio: 2.5, height: 'auto', }]}>
                <ScrollView horizontal>
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Popular_productScreen', setData: { id_item: 0, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#F0F6FA' }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { marginLeft: 8, color: '#fff', },]}>สินค้าสุดฮิต</Text>
                            </View>
                            <View style={FlexRow}>{productCate(dataService?.product_hit)}</View>
                        </View>
                    </TouchableOpacity>}
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Popular_productScreen', setData: { id_item: 1, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#EAEEF7' }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { marginLeft: 8, color: '#fff', },]}>สินค้าราคาโดน</Text>
                            </View>
                            <View style={stylesMain.FlexRow}>{productCate(dataService?.best_price)}</View>
                        </View>
                    </TouchableOpacity>}
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Popular_productScreen', setData: { id_item: 2, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#F0F6FA' }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { marginLeft: 8, color: '#fff', },]}>สินค้าขายดี</Text>
                            </View>
                            <View style={stylesMain.FlexRow}>{productCate(dataService?.best_sale)}</View>
                        </View>
                    </TouchableOpacity>}
                    {<TouchableOpacity activeOpacity={1} onPress={() =>
                        Navi({ ...props, goScreen: 'Popular_productScreen', setData: { id_item: 3, }, })}>
                        <View style={[Popular_Box_B, { backgroundColor: '#EAEEF7' }]}>
                            <View style={PopularText_A}>
                                <Text style={[FontFamilyText, FontSize6, { marginLeft: 8, color: '#fff', },]}>สินค้าสุดคูล</Text>
                            </View>
                            <View style={FlexRow}>{productCate(dataService?.best_cool)}</View>
                        </View>
                    </TouchableOpacity>}
                </ScrollView>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export let BannerBar_ONE = (props) => {
    const ImageiBanOne = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 111.jpg` };
    return <View style={Banner_Bar}>
        <FastImage style={Banner_Bar_image} source={ImageiBanOne} resizeMode={stretch} />
    </View>
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export let BannerBar_TWO = (props) => {
    const ImageiBanTwo = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg` };
    return <View style={Banner_Bar}>
        <FastImage style={Banner_Bar_image} source={ImageiBanTwo} resizeMode={stretch} />
    </View>
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export let BannerBar_THREE = (props) => {
    const ImageiBanThree = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg` };
    return <View style={Banner_Bar}>
        <FastImage style={Banner_Bar_image} source={ImageiBanThree} resizeMode={stretch} />
    </View>
};
///----------------------------------------------------------------------------------------------->>>> FlashSale
export let FlashSale = (props) => {
    const { getFetchData, setFetchToStart, } = props;
    const imageGood = require('../../icon/goods.png');
    const dataService2 = [{
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B1.jpg', id_product: 0, last_price: '4250', price: '99000',
        discount: '25', name_product: 'Yamaha T-max530 ', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B2.jpg', id_product: 1, last_price: '5250', price: '99000',
        discount: '25', name_product: 'HONDA INTEGRA 750 ', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B3.jpg', id_product: 2, last_price: '6250', price: '99000',
        discount: '25', name_product: 'X ADV | Red Vs Blu', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B4.jpg', id_product: 3, last_price: '7250', price: '99000',
        discount: '25', name_product: 'Honda X-ADV 2017', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B5.jpg', id_product: 4, last_price: '850', price: '99000',
        discount: '25', name_product: 'Miku Max', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B6.jpg', id_product: 5, last_price: '9250', price: '99000',
        discount: '25', name_product: 'Yamaha 04GEN', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B7.jpg', id_product: 5, last_price: '350', price: '99000',
        discount: '25', name_product: 'AXM-4 Scooter', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B8.jpg', id_product: 5, last_price: '5550', price: '99000',
        discount: '25', name_product: 'Classic luxury rickshaw', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B9.jpg', id_product: 5, last_price: '2250', price: '99000',
        discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B10.jpg', id_product: 5, last_price: '29550', price: '99000',
        discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local'
    },]
    const [curTime, setCurTime] = useState(new Date());
    const [endTime, setEndTime] = useState(undefined);
    const [saveTime, setSaveTime] = useState(undefined);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let intervalID = setInterval(() => {
            setCurTime(new Date());
            if (getFetchData['flash_timer']?.isFetching == false && getFetchData['flash_timer']?.data) {
                var flash_end = getFetchData['flash_timer'].data.flash_end && getFetchData['flash_timer'].data.flash_end.split(':');
                if (saveTime == undefined || (saveTime && flash_end && (saveTime[0] != flash_end[0]))) {
                    setSaveTime(flash_end)
                    setEndTime(new Date().setHours(
                        flash_end ? Number(flash_end[0]) : 0, flash_end ? Number(flash_end[1]) : 0, flash_end ? Number(flash_end[2]) : 0)
                    );
                };
            }
        }, 1000);
        return () => clearInterval(intervalID);
    });
    useEffect(() => {
        var h = 0;
        var m = 0;
        var s = 0;
        if (endTime && getFetchData['flash_timer']?.isFetching == false && getFetchData['flash_timer']?.data) {
            h = Number(new Date(endTime).getHours()) - Number(curTime.getHours());
            if ((Number(new Date(endTime).getDate()) - Number(curTime.getDate())) > 0) {
                h += ((Number(new Date(endTime).getDate()) - Number(curTime.getDate())) * 24);
            };
            m = Number(new Date(endTime).getMinutes()) - Number(curTime.getMinutes());
            s = Number(new Date(endTime).getSeconds()) - Number(curTime.getSeconds());
            if (h > 0 && (m < 0 || s < 0)) {
                h -= 1;
                m += 60;
            };
            if (m > 0 && s < 0) {
                m -= 1;
                s += 60;
            };
            if (getFetchData['flash_timer']?.data && getFetchData['flash_timer']?.isError == false &&
                getFetchData['flash_timer']?.isFetching == false && h <= 0 && m <= 0 && s <= 0) {
                setFetchToStart({ name: 'flash_timer' });
                setEndTime(undefined);
            };
            setHours(h < 10 ? h <= 0 ? '00' : '0' + h : h);
            setMinutes(m < 10 ? m <= 0 ? '00' : '0' + m : m);
            setSeconds(s < 10 ? s <= 0 ? '00' : '0' + s : s);
        };
    }, [curTime])
    return getFetchData['flash_timer']?.data ?
        <View style={FrameBackground2}>
            <View style={[FrameBackgroundTextBox]}>
                <View style={[FlexRow, { flex: 70 }]}>
                    <Text style={[FontFamilyBoldBold, FontSize4, FrameBackgroundTextStart, { color: '#dc3545', flex: 30 }]}>FLASH SALE</Text>
                    <View style={[FlexRow, { alignContent: 'center', alignItems: 'center', flex: 66, }]}>
                        <FastImage source={imageGood} style={{ height: 20, width: 15 }} />
                        {/* <IconFontAwesome name='clock-o' size={30} /> */}
                        <View style={{ flex: 70, flexDirection: 'row', }}>
                            <View style={[Time_FlashSale_TimeBox,]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText,]}>{hours}</Text>
                            </View>
                            <View style={[Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText,]}>{minutes}</Text>
                            </View>
                            <View style={[Time_FlashSale_TimeBox]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText,]}>{seconds}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'FlashSaleScreen', })}>
                    <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd, { flex: 30, }]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {getFetchData['flash_timer'] && getFetchData['flash_timer'].data.product && <FlatProduct {...props}
                custumNavigation='FlashSaleScreen' dataService={getFetchData['flash_timer']?.data?.product} dispriceSize={12} mode='row4'
                nameFlatProduct='FlashSaleProduct' nameSize={11} priceSize={12} />}
        </View> :
        <View style={FrameBackground2}>
            <View style={[FrameBackgroundTextBox]}>
                <View style={[FlexRow, { flex: 70 }]}>
                    <Text style={[FontFamilyBoldBold, FontSize4, FrameBackgroundTextStart, { color: '#dc3545', flex: 30, }]}>FLASH SALE</Text>
                    <View style={[FlexRow, { alignContent: 'center', alignItems: 'center', flex: 68, }]}>
                        <FastImage source={imageGood} style={{ height: 18, width: 20 }} />
                        {/* <IconFontAwesome name='clock-o' size={30} /> */}
                        <View style={{ flex: 70, flexDirection: 'row', }}>
                            <View style={[ItemCenter, Time_FlashSale_TimeBox,]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText,]}>00</Text>
                            </View>
                            <View style={[ItemCenter, Time_FlashSale_TimeBox,]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText,]}>00</Text>
                            </View>
                            <View style={[ItemCenter, Time_FlashSale_TimeBox,]}>
                                <Text style={[FontFamilyBold, FontSize6, Time_FlashSale_TimeText,]}>00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'FlashSaleScreen', })}>
                    <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd, { flex: 30 }]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {dataService2 &&
                    <FlatProduct dataService={dataService2} dispriceSize={15} mode='row3_new2' nameFlatProduct='Second_product' nameSize={14}
                        numberOfColumn={1} priceSize={15} />}
                {/* {[0, 1, 2, 3, 4].map((_, i) => <View key={i} style={[stylesMain.ItemCenter, stylesMain.BoxProduct5Box]}>
                    <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct5ImageofLines, { backgroundColor: '#ECECEC' }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>)} */}
            </View>
        </View>;
};
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export let PromotionPopular = (props) => {
    const { dataService, } = props;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxStore2Box2]}>
        <View style={[BoxStore2Image2, { backgroundColor: '#ECECEC' }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
        <View style={{ backgroundColor: mainColor, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 1, }}>
            <Text numberOfLines={1} style={[FontFamilyText, FontSize7, { color: mainColor, marginLeft: 2 }]}>NaN</Text>
        </View>
    </View>);
    let dataPromotionPopular = dataService?.recommend_store ? dataService.recommend_store.map((v, i) => {
        const ImageiProPop = { uri: `${finip}/${v.image_path}/${v.image}` };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({ ...props, goScreen: 'Recommend_Store', })}>
            <View style={[BoxStore2Box2]}>
                <FastImage resizeMode={cover} source={ImageiProPop} style={[BoxStore2Image2]} />
                <View style={{ backgroundColor: mainColor, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 1, }}>
                    <Text numberOfLines={1} style={[FontFamilyText, FontSize8, { color: '#fff', marginLeft: 2 }]}>{v.detail}</Text>
                </View>
            </View>
        </TouchableOpacity>;
    }) : boxEmpty;
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ลายแทงร้านค้าแนะนำ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Recommend_Store', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <View style={{ aspectRatio: 3.8, height: 'auto', }}>
            <ScrollView horizontal>{dataPromotionPopular}</ScrollView>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export let Product_for_you = (props) => {
    const { dataService, } = props;
    const dataService2 = [{
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B1.jpg', id_product: 0, last_price: '4250', price: '99000',
        discount: '25', name_product: 'Yamaha T-max530 ', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B2.jpg', id_product: 1, last_price: '5250', price: '99000',
        discount: '25', name_product: 'HONDA INTEGRA 750 ', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B3.jpg', id_product: 2, last_price: '6250', price: '99000',
        discount: '25', name_product: 'X ADV | Red Vs Blu', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B4.jpg', id_product: 3, last_price: '7250', price: '99000',
        discount: '25', name_product: 'Honda X-ADV 2017', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B5.jpg', id_product: 4, last_price: '850', price: '99000',
        discount: '25', name_product: 'Miku Max', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B6.jpg', id_product: 5, last_price: '9250', price: '99000',
        discount: '25', name_product: 'Yamaha 04GEN', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B7.jpg', id_product: 5, last_price: '350', price: '99000',
        discount: '25', name_product: 'AXM-4 Scooter', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B8.jpg', id_product: 5, last_price: '5550', price: '99000',
        discount: '25', name_product: 'Classic luxury rickshaw', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B9.jpg', id_product: 5, last_price: '2250', price: '99000',
        discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Bag', image: 'B10.jpg', id_product: 5, last_price: '29550', price: '99000',
        discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local'
    }]
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC' }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119 }]}>
            <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <View style={[FrameBackground2]}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>FIN คัดมาเพื่อคุณ</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Product_for_youScreen', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        {/* dataService.for_you */}
        {dataService?.for_you.length > 0 ?
            <FlatProduct {...props} dataService={dataService?.for_you} dispriceSize={15} mode='row3_new2' nameFlatProduct='Product_for_you'
                nameSize={14} numberOfColumn={2} priceSize={15} /> :
            <View>
                <View style={FlexRow}>{boxEmpty}</View>
                <View style={FlexRow}>{boxEmpty}</View>
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Highlight
export let Highlight = (props) => {
    const { dataService, } = props;
    const dataService2 = [{
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '1.jpg', id_product: 0, last_price: '74250', price: '99000',
        discount: '25', name_product: 'Yamaha T-max530 ', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '2.jpg', id_product: 1, last_price: '145000', price: '155000',
        discount: '10', name_product: 'HONDA INTEGRA 750 ', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '3.jpg', id_product: 2, last_price: '129000', price: '139000',
        discount: '10', name_product: 'X ADV | Red Vs Blu', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '4.jpg', id_product: 3, last_price: '139000', price: '149000',
        discount: '50', name_product: 'Honda X-ADV 2017', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '5.jpg', id_product: 4, last_price: '119000', price: '129000',
        discount: '10', name_product: 'Miku Max', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '6.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'Yamaha 04GEN', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '7.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'AXM-4 Scooter', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '8.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'Classic luxury rickshaw', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '9.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'BMW C400X Resmi Dipasarkan', type: 'local'
    }, {
        image_path: 'MySQL/uploads/Test_Product/Highlight', image: '10.jpg', id_product: 5, last_price: '359000', price: '359000',
        discount: '25', name_product: 'Serbi Yamaha X - Ride', type: 'local'
    }]
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[ItemCenter, BoxProduct1Box2]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 113 }]}>
            <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.010, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
        <View style={{ height: 40, paddingHorizontal: 3 }} />
    </View>);
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ไฮไลท์ประจำสัปดาห์</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'HighlightScreen', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}> ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        {/* dataService.hi_week */}
        {dataService ?
            <FlatProduct {...props} dataService={dataService?.hi_week} dispriceSize={15} mode='row3_new2' nameFlatProduct='Second_product'
                nameSize={14} numberOfColumn={1} priceSize={15} /> :
            <View style={{ flexDirection: 'row' }}>{boxEmpty}</View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> NewStore
export let NewStore = (props) => {
    const { dataService, } = props;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxStore1Box, { backgroundColor: '#ECECEC' }]}>
        <View style={BoxStore1Image}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>);
    let dataNewStore = dataService?.dont_miss ? dataService?.dont_miss.map((v, i) => {
        const ImageRecom = { uri: `${finip}/${v.image_path}/${v.image}` };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({
            ...props, goScreen: 'Recommend_Store',
            setData: { id_slide: v.id, name_path: 'store_total', uri_path: 'publish_store/store_total', },
        })}>
            <View style={[BoxStore1Box, { marginLeft: 0 }]}>
                <FastImage resizeMode={contain} source={ImageRecom} style={BoxStore1Image} />
            </View>
        </TouchableOpacity>;
    }) : boxEmpty;
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ร้านค้าห้ามพลาด!!่</Text>
        </View>
        <View style={[FlexRow, { aspectRatio: 4, height: 'auto', justifyContent: 'space-between', paddingHorizontal: 5, }]}>
            {dataNewStore}</View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Exclusive
export let Exclusive = (props) => {
    const { loadData, } = props;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2, ItemCenter,]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 115 }]}>
            <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3, }} />
    </View>);
    return <View style={FrameBackground2}>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>สินค้าสุด Exclusive</Text>
            <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'ExclusiveScreen', })}>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        {loadData ?
            <FlatProduct {...props} dataService={loadData} dispriceSize={15} mode='row3' nameFlatProduct='ExclusiveProduct' nameSize={14}
                numberOfColumn={1} priceSize={15} /> :
            <View style={{ flexDirection: 'row' }}>{boxEmpty}</View>}
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
    const ImageHead = { uri: `${finip}/${image_path}/${image_menu}` };
    let dataCategory = <View style={[FrameBackground2, { backgroundColor: mobile_bg }]}>
        <>
            {<TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'CategoryScreen', setData: { id_type: id_type }, })}>
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
    return <View>{dataCategory}</View>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export function CategoryProduct(props) {
    const { dataService, getFetchData, NoStoreReCom, } = props;
    let dataCategory = dataService?.category?.map((v, i) => {
        const { id_type, image_menu, image_path, mobile_bg, } = v;
        let productItem = [];
        let promo1Item = [];
        let promo2Item = [];
        let shopItem = [];
        getFetchData[`category_product|${id_type}`]?.data?.product?.map((v2) => { productItem.push(v2) });
        dataService.cate_promotions_1.map((v2) => v2.map((v3) => v3.id_type == id_type ? promo1Item.push(v3) : null));
        dataService.cate_promotions_2.map((v2) => v2.map((v3) => v3.id_type == id_type ? promo2Item.push(v3) : null));
        dataService.cate_shop.map((v2) => v2.map((v3) => v3.id_type == id_type ? shopItem.push(v3) : null));
        if (i < 20 /*getFetchData['category_mobile'].length*/) {
            const ImageHead = { uri: `${finip}/${image_path}/head_mobile/${image_menu}${Platform.OS == 'android' ? '_.webp' : ''}` };
            const mix_color = color_up(mobile_bg);
            return <View key={i} style={[FrameBackground2, { backgroundColor: mobile_bg, paddingBottom: 3, }]}>
                <>
                    {<TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'CategoryScreen', setData: { id_type: id_type }, })}>
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
    return <View>{dataCategory}</View>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export let CategoryProductSubProduct = (props) => {
    const { dataService, } = props;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC' }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119 }]}>
            <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <>
        {dataService.length > 0 ?
            <FlatProduct {...props} dispriceSize={13} mode='row3_new2' nameFlatProduct='CategoryProduct' nameSize={14} noMarginTop
                numberOfColumn={2} priceSize={15} /> :
            <View>
                <View style={FlexRow}>{boxEmpty}</View>
                <View style={FlexRow}>{boxEmpty}</View>
            </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export let CategoryProductSubStore = (props) => {
    const { mix_color, shop } = props;
    let _renderBanner = function (v) {
        const ImageSubStore = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}` };
        const SubStoreStyle = [BoxProduct1Image, { backgroundColor: mix_color }];
        // var dataMySQL = `${ip}/MySQL/uploads/Image Home/15.CategoryProduct/Category_S/${v.image}`;
        return <TouchableOpacity activeOpacity={1} key={v.id}>
            <View style={{ backgroundColor: mix_color, height: 57.8, marginLeft: 5, width: width * 0.56, }}>
                <Image resizeMethod='resize' resizeMode='stretch' source={ImageSubStore} style={SubStoreStyle} />
            </View>
        </TouchableOpacity>;
    };
    return <>
        {shop && shop.length > 0 ?
            <Carousel autoplay autoplayInterval={3000} data={shop} loop pagination={PaginationLight} renderItem={_renderBanner} /> :
            <View style={{ backgroundColor: mix_color, height: 57.8, marginLeft: 5, width: width * 0.56, }}>
                <View style={BoxProduct1Image} />
            </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export let CategoryProductSubPromotion = (props) => {
    const { mix_color, promo_1, promo_2, shop } = props;
    let boxEmptySmall = <View style={[BoxStore1Box3, { backgroundColor: mix_color, height: 66, marginTop: 3, width: '100%', }]}>
        <View style={BoxProduct1Image}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>;
    let dataCategoryProductSubPromotionSmall = promo_2 ? promo_2.map((v, i) => {
        // var dataMySQL = `${ip}/MySQL/uploads/Image Home/15.CategoryProduct/Category_M/${v.image}`;
        const ImagePromoSmall = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}` };
        return <View key={i} style={[BoxStore1Box3, { height: 66, marginTop: 3, width: '100%', }]}>
            {v && <Image resizeMethod='resize' resizeMode='cover' source={ImagePromoSmall} style={BoxProduct1Image} />}
        </View>;
    }) : boxEmptySmall;
    let boxEmptyBig = <View style={[BoxStore1Box2, { backgroundColor: mix_color, borderWidth: 0, marginBottom: 3, marginTop: 3, }]}>
        <View style={BoxProduct1Image}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>;
    let dataCategoryProductSubPromotionBig = promo_1 ? promo_1.map((v, i) => {
        // var dataMySQL = `${ip}/MySQL/uploads/Image Home/15.CategoryProduct/Category_L/${v.image}`;
        const ImagePromoBig = { uri: `${finip}/${v.image_path}/mobile/${v.image}${Platform.OS == 'android' ? '_.webp' : ''}` };
        return <View key={i} style={[BoxStore1Box2, { borderWidth: 0, marginBottom: 3, marginTop: 3, }]}>
            {v && <Image resizeMethod='resize' resizeMode='cover' source={ImagePromoBig} style={BoxProduct1Image} />}
        </View>;
    }) : boxEmptyBig;
    return <>
        <View style={[FlexRow, { marginTop: 3, width: '100%', }]}>
            <View style={{ flexDirection: 'column', marginRight: 6, width: width * 0.56, }}>
                {dataCategoryProductSubPromotionSmall}
                <View style={{ marginTop: 6, width: width * 0.56, }}>
                    <CategoryProductSubStore {...props} mix_color={mix_color} shop={shop} />
                </View>
            </View>
            {dataCategoryProductSubPromotionBig}
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Second_product
export let Second_product = (props) => {
    const { dataService, Header_Second, } = props;
    const MobileBarStyle = { backgroundColor: '#ECECEC', borderBottomWidth: 0.5, borderColor: '#DCDCDC', borderWidth: 1, marginTop: 0, };
    const VStyle = { marginTop: 0 };
    const dataService2 = [{
        id_product: 0, image: '1.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '169000',
        name_product: 'ขาย Ford Fiesta 1.6 5d ปี 11', type: 'local'
    }, {
        id_product: 1, image: '2.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '30',
        name_product: 'สินค้ามือสองสภาพดีราคาไม่แพงราคาถูกๆ', type: 'local'
    }, {
        id_product: 2, image: '3.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '50',
        name_product: 'สินค้ามือสอง [Second Hand] กล่องใส่ SD Card สภาพนางฟ้า 💥💥 ถ่ายจากของจริง', type: 'local'
    }, {
        id_product: 3, image: '4.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '780',
        name_product: '(สินค้ามือสอง✌🏻) กระเป๋าสตางค์ Charles&Keith Classic Zipped Wallet', type: 'local'
    }, {
        id_product: 4, image: '5.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '3200',
        name_product: 'Ipad2 WiFi 16 GB สินค้ามือสองคุณภาพดี ราคาแบ่งปัน', type: 'local'
    }, {
        id_product: 5, image: '6.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '4599',
        name_product: '【HOT】Second hand ไอโพน6plus แท้100% อุปกรณ์ครบชุด สภาพใหม่ มือสอง[สินค้าที่มีอยู่ มือสอง]', type: 'local'
    }, {
        id_product: 6, image: '7.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '3999',
        name_product: 'สินค้าที่มีอยู่ มือสอง】มือสอง Apple 6 plus iPhone 6 plus ในสภาพที่ดีอุปกรณ์ของแท้ ', type: 'local'
    }, {
        id_product: 7, image: '8.jpg', image_path: 'MySQL/uploads/Test_Product/Second_product', last_price: '1850',
        name_product: 'Lighting L116T SMART LED Video Light สินค้ามือสอง', type: 'local'
    }];
    let renderItem1 = dataService?.list_store2_1 ? dataService.list_store2_1.map((v, i) => {
        const ImageStore2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <View key={i} style={{ height: 196, width: width * 0.64, }}>
            <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageStore2} style={bigSlideImage} />
        </View>;
    }) : <View style={{ height: 196, width: width * 0.64, }}>
            <View style={[bigSlideImage, { backgroundColor: '#ECECEC' }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>;
    let boxEmptyBody = GenArray(10).map((_, i) => <View key={i} style={Second_StoreFin_ImageB_T}>
        <View style={{ height: 130, width: width * 0.32, }}>
            <View style={[litleSlideImage, { backgroundColor: '#ECECEC' }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
    </View>);
    let renderItem2 = dataService?.list_store2_2 ? dataService.list_store2_2.map((v, i) => {
        const ImageStore2 = { uri: `${finip}/${v.image_path}/${v.image}`, };
        return <View key={i} style={Second_StoreFin_ImageB_T}>
            <View style={{ height: 130, width: width * 0.32, }}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={ImageStore2} style={litleSlideImage} />
            </View>
        </View>;
    }) : boxEmptyBody;
    let boxEmptyHeader = GenArray(10).map((_, i) => <View key={i} style={[BoxProduct1Box2new, ItemCenter, { borderColor: '#DCDCDC' }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', width: 119 }]}>
            <View style={[BoxProduct2Image, ItemCenter, { marginVertical: height * 0.015, }]}>
                <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    var header_url;
    dataService?.mobile_bar?.map((v) =>
        // header_url = `${finip}/${v.image_path}/${v.image}` });
        header_url = { uri: `${ip}/MySQL/uploads/Category_Total/Second/header.jpg` });
    let Second_Storeheader = <View key={'mobile_bar'} style={[FrameBackground2, { borderBottomWidth: null, marginTop: 0, }]}>
        <View>
            {Header_Second ?
                <View>
                    <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>มือสองลดราคา</Text>
                </View> :
                dataService?.mobile_bar ?
                    <TouchableOpacity {...props} dataService={dataService2} dispriceSize={15} mode='row3_new2'
                        nameFlatProduct='Second_product' nameSize={14} noMarginTop numberOfColumn={2} priceSize={15}>
                        <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={header_url}
                            style={[CategoryProductImageHead, VStyle]} />
                    </TouchableOpacity> :
                    <View style={[CategoryProductImageHead, MobileBarStyle]} />}
            {dataService?.product_second ?
                <FlatProduct {...props} dataService={dataService?.product_second} dispriceSize={15} mode='row3_new2'
                    nameFlatProduct='Second_product' nameSize={14} noMarginTop numberOfColumn={2} priceSize={15} /> :
                <View>
                    <View style={FlexRow}>{boxEmptyHeader}</View>
                    <View style={FlexRow}>{boxEmptyHeader}</View>
                </View>}
        </View>
    </View>;
    let Second_Storebody = <View key={'Header_Second'} style={Second_StoreFin}>
        <View style={[FrameBackgroundTextBox, Second_StoreFin_BoxHead]}>
            {Header_Second ?
                <View>
                    <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ร้านมือสองลดราคา</Text>
                </View> :
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ร้านค้ามือสองแนะนำโดย FIN</Text>}
            <View>
                <TouchableOpacity activeOpacity={1}
                    onPress={() => Navi({ ...props, goScreen: 'SecondScreen', setData: { selectedIndex: 1 }, })}>
                    <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={Second_StoreFin_Image}>
            <View key={'list_store2_1'} style={Second_StoreFin_ImageA}>
                <View>{renderItem1}</View>
            </View>
            <View key={'list_store2_2'}>
                <View style={Second_StoreFin_ImageB}>{renderItem2}</View>
            </View>
        </View>
    </View>;
    let boxEmptyFooter = GenArray(10).map((_, i) => <View key={i} style={[CategoryProductStoreBox]}>
        <View style={[BoxProduct1Image, { backgroundColor: '#ECECEC' }]}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>);
    let _renderFooter = (v, i) => {
        const ImageFooter1 = { uri: `${finip}/${v.item.image_path}/${v.item.image}` };
        const ImageFooter2 = v.item2 ? { uri: `${finip}/${v.item2.image_path}/${v.item2.image}` } : undefined;
        return <TouchableOpacity activeOpacity={1} key={i} style={FlexRow}>
            <View style={[CategoryProductStoreBox]}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageFooter1}
                    style={BoxProduct1Image} />
            </View>
            <View style={[CategoryProductStoreBox]}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={ImageFooter2}
                    style={BoxProduct1Image} />
            </View>
        </TouchableOpacity>;
    };
    var item = [];
    if (dataService?.mobile_slide) for (var n = 0; n < dataService.mobile_slide.length; n += 2) {
        item.push({ item: dataService.mobile_slide[n], item2: dataService.mobile_slide[n + 1] });
    };
    let Second_Storefooters = <View key={'mobile_slide'} style={Second_Storefooter}>
        <ScrollView horizontal>
            <View style={FlexRow}>
                {dataService?.mobile_slide ?
                    <Carousel autoplay autoplayInterval={3000} data={item} loop pagination={PaginationLight} renderItem={_renderFooter} /> :
                    <View style={FlexRow}>{boxEmptyFooter}</View>}
            </View>
        </ScrollView>
    </View>;
    return <View style={FrameBackground2}>
        {[Second_Storeheader, Second_Storebody, Second_Storefooters]}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Fin_Mall = (props) => {
    const { dataService, } = props;
    const ViewStyle = { marginTop: 10, paddingLeft: 2.5, width: width * 0.225, };
    const renText = (v, color) => <Text style={[BoxProduct1ImagePrice, FontFamilyBold, FontSize8, { color }]}>{v}</Text>;
    let productFinmall = (type, n) => type.map((v, i) => {
        const { full_price, image, image_path, name, } = v;
        if (i < 2) {
            const Image1 = { uri: `${finip}/${image_path}/${image}` };
            // var dataMySQL = n == 0 ?
            //     i == 0 ?
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_5206014401000.jpg` :
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_99368145334.jpg` :
            //     i == 0 ?
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200710_15010144107.jpg` :
            //         `${ip}/MySQL/uploads/Test_Product/Finmall/20200711_66232114742.jpg`;
            return <View style={{ marginTop: 5, paddingLeft: 2.5, width: width * 0.228, }} key={i}>
                <View style={{ aspectRatio: 1, backgroundColor: '#FFFFFF', height: 'auto', width: width * 0.20, }}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='contain' source={Image1}
                        style={BoxProduct1Image} />
                </View>
                <View style={[ItemCenter, { width: width * 0.20 }]}>
                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF' }]}>{name}</Text>
                    <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#FFFFFF')} thousandSeparator
                        value={full_price} />
                </View>
            </View>;
        };
    });
    return <View style={[FlexRow, FinMall_Box]}>
        <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>Fin Mall</Text>
            <View style={{ backgroundColor: '#691F50', borderRadius: 5, justifyContent: 'space-between', marginBottom: 3, padding: 3, }}>
                {dataService ?
                    <TouchableOpacity key='product_hit' activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'FinMallScreen', })}>
                        <View style={FlexRow}>{productFinmall(dataService.product_hit, 0)}</View>
                    </TouchableOpacity> :
                    <View style={FlexRow}>
                        {GenArray(10).map((_, i) => <View style={ViewStyle} key={i}>
                            <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                <View style={BoxProduct1Image}>
                                    <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
                                </View>
                            </View>
                            <View style={[ItemCenter, { width: width * 0.20 }]}>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#691F50' }]}>NaN</Text>
                                <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#691F50')} thousandSeparator
                                    value={0} />
                            </View>
                        </View>)}
                    </View>}
            </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>สินค้าสุด Exclusive</Text>
            <View style={{ backgroundColor: '#19508B', borderRadius: 5, justifyContent: 'space-between', padding: 3, }}>
                {dataService ?
                    <TouchableOpacity activeOpacity={1} key='exclusive' onPress={() => Navi({ ...props, goScreen: 'ExclusiveScreen', })}>
                        <View style={FlexRow}>{productFinmall(dataService.exclusive, 1)}</View>
                    </TouchableOpacity> :
                    <View style={FlexRow}>
                        {GenArray(10).map((_, i) => <View key={i} style={ViewStyle}>
                            <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                <View style={BoxProduct1Image}>
                                    <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
                                </View>
                            </View>
                            <View style={[ItemCenter, { width: width * 0.20 }]}>
                                <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#19508B' }]}>NaN</Text>
                                <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#19508B')} thousandSeparator
                                    value={0} />
                            </View>
                        </View>)}
                    </View>}
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> FIN_Supermarket
export let FIN_Supermarket = (props) => {
    const { dataService, } = props;
    const NaviStyle = { marginRight: 5, width: width * 0.60, };
    const imageBannerBar = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 333.jpg` };
    const imageFood1 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_L/775-325_food1.jpg`, };
    const imageFood1_1 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food1.jpg`, };
    const imageFood4 = { uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food4.jpg`, };
    const LogoFoodland = { uri: `${ip}/MySQL/uploads/Image_FinMall/logo-foodland.png`, };
    const LogoMaxvalu = { uri: `${ip}/MySQL/uploads/Image_FinMall/logo-maxvalu.png`, };
    // Banner ใหญ่ตรง Supermaket
    const item = [
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food1.jpg` },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food2.jpg` },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food3.jpg` },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food4.jpg` }];
    // สินค้าใน Supermaket
    const Supermarketitem = [{
        id_product: 0, image: 'A1.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '85',
        name_product: 'อิควลสารให้ความหวานแทนน้ำตาลจากหญ้าหวาน 2กรัม แพค 40ซอง', type: 'local'
    }, {
        id_product: 1, image: 'A2.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '149',
        name_product: 'แสนดีข้าวขาวหอมคัดพิเศษ 5กก', type: 'local'
    }, {
        id_product: 2, image: 'A3.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '45',
        name_product: 'ชิกเก้นออฟเดอะซีปลาทูน่ารสน้ำมันมะกอกและพริก 80กรัม', type: 'local'
    }, {
        id_product: 3, image: 'A4.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '21',
        name_product: 'ชาวเกาะกะทิยูเอชที 250มล', type: 'local'
    }, {
        id_product: 4, image: 'A5.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '23.50',
        name_product: 'มะลินมข้นหวาน 380กรัม', type: 'local'
    }, {
        id_product: 5, image: 'A6.jpg', image_path: 'MySQL/uploads/Supermarket', last_price: '7',
        name_product: 'ปรุงทิพย์เกลือป่น 500กรัม', type: 'local'
    }];
    // แบรนด์แนะนำอันแรก
    const Brand_Supermaket = [{
        Detall: 'สุดยอดแห่งบิวตี้ไอเท็มและสินค้าเพื่อสุขภาพ', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, name: 'LOOKS',
    }, { Detall: 'เบทาโกร', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, name: 'Betagro', },
    { Detall: 'สินค้าคุณภาพ คุ้มค่า คุ้มราคา', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, name: 'Exclusive Brands', },
    { Detall: 'หวานสดใสหอมติดผิว', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, name: 'Ole', },
    { Detall: 'หวานสดใสหอมติดผิว', image: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, name: 'LOOKS', }];
    // แบรนด์แนะนำอันที่สอง
    const Brand_Supermaket2 = [
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, },
        { image: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }];
    // ---------------------------------------------------------------------------
    let SupermaketBox = Brand_Supermaket.map((v, i) => {
        const imageSuper = { uri: v.image, };
        return <View key={i} style={[ItemCenter, Supermarket_Brand_Shop]}>
            <Image defaultSource={LOADING_ICON} resizeMode='stretch' source={imageSuper} style={{ height: 50, width: 100 }} />
            <View style={[ItemCenter]}>
                <Text style={[FontFamilyBold, FontSize7]}>{v.name}</Text>
                <Text numberOfLines={1} style={[FontFamilyText, FontSize7]}>{v.Detall}</Text>
            </View>
        </View>;
    });
    // ---------------------------------------------------------------------------
    let SupermaketBox2 = Brand_Supermaket2.map((v, i) => {
        const imageSuper = { uri: v.image, };
        return <View key={i} style={[ItemCenter, Supermarket_Brand_Shop2]}>
            <Image defaultSource={LOADING_ICON} resizeMode='stretch' source={imageSuper} style={BoxProduct1Image} />
        </View>;
    });
    // --------------------------------------------------------------------------
    let _renderItem = (v, i) => {
        const imageRender = { uri: v.image, };
        return <View key={i} style={{ aspectRatio: 2.5, height: 'auto', width, }}>
            <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='cover' source={imageRender} style={BoxProduct1Image} />
        </View>;
    };
    // --------------------------------------------------------------------------
    return <View style={{ backgroundColor: '#FFFFFF' }}>
        <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>FIN Supermarket</Text>
        <View>
            <Carousel autoplay autoplayInterval={4000} data={item} renderItem={_renderItem} pagination={PaginationLight} loop />
        </View>
        <View style={Supermarket_Product}>
            {/* dataService.product_hit */}
            {dataService && <FlatProduct {...props} dataService={Supermarketitem} dispriceSize={15} mode='row3'
                nameFlatProduct='FIN_Supermarket' nameSize={14} numberOfColumn={1} priceSize={15} radiusBox={5} />}
        </View>
        <View style={[FlexRow, Supermarket_Store]}>
            <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'FINSupermarket', })} style={NaviStyle}>
                <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={imageFood1} style={BoxProduct1Image} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'space-between', width: width * 0.36, }}>
                <View style={Supermarket_Image}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={imageFood1_1}
                        style={BoxProduct1Image} />
                </View>
                <View style={Supermarket_Image}>
                    <Image defaultSource={LOADING_ICON} resizeMethod='resize' resizeMode='stretch' source={imageFood4}
                        style={BoxProduct1Image} />
                </View>
            </View>
        </View>
        <View style={Supermarket_BrandBox}>
            <View style={Supermarket_Brand_Image}>
                <FastImage resizeMode={stretch} source={LogoFoodland} style={BoxProduct1Image} />
            </View>
            <View style={Supermarket_Brand_Image}>
                <FastImage resizeMode={stretch} source={LogoMaxvalu} style={BoxProduct1Image} />
            </View>
        </View>
        <View style={Banner_Bar}>
            <FastImage resizeMode={stretch} source={imageBannerBar} style={Banner_Bar_image} />
        </View>
        <View style={[FrameBackgroundTextBox]}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>แบรนด์แนะนำ</Text>
            <TouchableOpacity>
                <Text style={[FontFamilyText, FontSize7, FrameBackgroundTextEnd,]}>ดูทั้งหมด</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal>{SupermaketBox}</ScrollView>
        <ScrollView horizontal>{SupermaketBox2}</ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export let TodayProduct = (props) => {
    const { loadData, noTitle, onShow, prepath, } = props;
    const dataService2 = [{
        id_product: 0, image: '1.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '4250',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 1, image: '2.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '145000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 2, image: '3.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '129000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 3, image: '4.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '139000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 4, image: '5.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '119000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 5, image: '6.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 6, image: '7.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 7, image: '8.jpg', image_path: 'MySQL/uploads/Test_Product', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 8, image: '9.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 9, image: '10.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 10, image: '11.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 11, image: '12.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 12, image: '13.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 13, image: '14.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 14, image: '15.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 15, image: '16.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 16, image: '17.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }, {
        id_product: 17, image: '18.jpg', image_path: 'MySQL/uploads/Test_Product/Deal', last_price: '359000',
        name_product: 'Hydrating Hand Sanitizer', type: 'local',
    }];
    onShow && console.log(onShow);
    return <View style={[BoxProduct2, { backgroundColor: 'transparent' }]}>
        {noTitle ? null : <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>สินค้าคัดสรรเพื่อคุณ</Text>}
        <View style={BoxProduct2BoxProduct}>
            {loadData ? <ProductBox {...props} dataService={loadData} dispriceSize={15} mode='row3colall_new' nameSize={14}
                pointerid_store={true} pointerUrl='DetailScreen' prepath={prepath ?? null} priceSize={15} /> :
                <ProductBox dataService={GenArray(3)} mode='row3colall_new' nodata />}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Botton_PopUp_FIN = (props) => {
    const [activeShow, setActiveShow] = useState(true);
    const [activeSliding, setActiveSliding] = useState(false);
    const translationXRef = useRef(new Animated.Value(0));
    const translationYRef = useRef(new Animated.Value(0));
    const _lastOffset = { x: 0, y: 0 };
    const ImageStyle = { backfaceVisibility: 'hidden', marginBottom: -50, right: 50 };
    const SlidingStyle = { backgroundColor: null, top: '50%', width: '100%', };
    const imagePopUP = require('../../icon/PopUP.png');
    const imagePopUP2 = require('../../images/0044-03.png');
    const _onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translationXRef.current, translationY: translationYRef.current, }, },], { useNativeDriver: false }
    );
    let _onHandlerStateChange = event => {
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
                transform: [{ translateX: translationXRef.current }, { translateY: translationYRef.current }]
            }}>
                <TouchableOpacity activeOpacity={1} onPress={() => setActiveSliding(!activeSliding)}>
                    <FastImage resizeMode={cover} source={imagePopUP} style={[Botton_PopUp_Image, ImageStyle]} />
                    <TouchableOpacity onPress={() => setActiveShow(!activeShow)} style={{ bottom: 28, height: 20, left: 30, width: 20, }}>
                        <View style={{ backgroundColor: 'transparent', borderWidth: 0, elevation: 0, }}>
                            <IconAntDesign name='closecircle' size={20} style={BoxProduct1Image} />
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>}
        <SlidingView componentVisible={activeSliding} containerStyle={SlidingStyle} disableDrag position="right">
            <TouchableOpacity onPress={() => setActiveSliding(!activeSliding)}>
                <View style={Botton_PopUp_Box}>
                    <FastImage resizeMode={contain} source={imagePopUP2} style={BoxProduct1Image}>
                        <View style={Botton_PopUp_Text}>
                            <Text style={[FontFamilyBold, { color: '#FFFFFF' }]}>สวัสดีครับ</Text>
                            <Text style={[FontFamilyBold, { color: '#FFFFFF' }]}>ต้องการให้น้องฟินช่วยด้านใดดีครับ</Text>
                        </View>
                    </FastImage>
                </View>
            </TouchableOpacity>
        </SlidingView>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Category_Image_Total = (props) => {
    const { dataService, } = props;
    const { S, M, L, } = dataService;
    const BoxStyle = { height: 'auto', justifyContent: 'space-between', marginTop: 5, width: '100%', };
    return <View style={{ marginTop: 10 }}>
        <View style={{ aspectRatio: 3.5, height: 'auto', }}>
            {S.map((v, i) => {
                const imageS = { uri: `${ip}/MySQL/${v.image_path}/${v.image}`, };
                return <View key={i}>
                    <FastImage resizeMode={contain} source={imageS} style={BoxProduct1Image} />
                </View>;
            })}
        </View>
        <View style={[BoxStyle, FlexRow, { aspectRatio: 3, }]}>
            {M.map((v, i) => {
                const imageM = { uri: `${ip}/MySQL/${v.image_path}/${v.image}`, };
                return <View key={i} style={{ width: width * 0.49 }}>
                    <FastImage resizeMode={contain} source={imageM} style={BoxProduct1Image} />
                </View>;
            })}
        </View>
        <View style={[BoxStyle, FlexRow, { aspectRatio: 2.5, }]}>
            {L.map((v, i) => {
                const imageL = { uri: `${ip}/MySQL/${v.image_path}/${v.image}`, };
                return <View key={i} style={{ width: width * 0.49 }}>
                    <FastImage resizeMode={contain} source={imageL} style={BoxProduct1Image} />
                </View>;
            })}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Not_Internet = (props) => {
    const imageWifi = { uri: `${ip}/mysql/uploads/icon_5/wifi-connected-png-8.png` };
    return <View style={ItemCenter}>
        <FastImage source={imageWifi} style={{ height: 200, width: 200 }} />
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
export let Fin_LuxuryShop = (props) => {
    const { dataService, } = props;
    const imageShop = { uri: `${ip}/MySQL/uploads/bannerTEST/banner/banner_ร้านที่ใช่อยากให้ช้อป/ร้านที่ใช้อยากให้ช้อป-01.jpg` };
    const imageShop1 = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg` };
    const imageShop2 = { uri: `${ip}/MySQL/uploads/bannerTEST/banner/banner_ร้านที่ใช่อยากให้ช้อป/ร้านที่ใช้อยากให้ช้อป-02.jpg` };
    const imageShop3 = { uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg` };
    const ViewStyle = { backgroundColor: '#691F50', borderRadius: 5, justifyContent: 'space-between', marginBottom: 3, padding: 3, };
    const renText = (v, color) => <Text style={[BoxProduct1ImagePrice, FontFamilyBold, FontSize8, { color }]}>{v}</Text>;
    let boxEmpty = GenArray(10).map((_, i) => <View key={i} style={[BoxStore1Box, { backgroundColor: '#ECECEC' }]}>
        <View style={BoxStore1Image}>
            <FastImage cache={cacheOnly} resizeMode={contain} source={LOADING_ICON} style={BoxProduct1Image} />
        </View>
    </View>);
    let dataNewStore = dataService?.dont_miss ? dataService?.dont_miss.map((v, i) => {
        const imageNewStore = { uri: `${finip}/${v.image_path}/${v.image}` };
        return <TouchableOpacity activeOpacity={1} key={i} onPress={() => Navi({
            ...props, goScreen: 'Recommend_Store',
            setData: { id_slide: v.id, name_path: 'store_total', uri_path: 'publish_store/store_total', },
        })}>
            <View style={[BoxStore1Box, { marginLeft: 0 }]}>
                <FastImage resizeMode={contain} source={imageNewStore} style={BoxStore1Image} />
            </View>
        </TouchableOpacity>;
    }) : boxEmpty;
    let productFinmall = (type, n) => type.map((v, i) => {
        const { full_price, name } = v;
        if (i < 2) {
            // var dataMySQL = `${finip}/${v.image_path}/${v.image}`;
            const imageFinmall = n == 0 ?
                i == 0 ?
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_5206014401000.jpg` } :
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200213_99368145334.jpg` } :
                i == 0 ?
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200710_15010144107.jpg` } :
                    { uri: `${ip}/MySQL/uploads/Test_Product/Finmall/20200711_66232114742.jpg` };
            return <View key={i} style={{ marginTop: 5, paddingLeft: 2.5, width: width * 0.228, }}>
                <View style={{ aspectRatio: 1, backgroundColor: '#FFFFFF', height: 'auto', width: width * 0.20, }}>
                    <FastImage resizeMode={contain} source={imageFinmall} style={BoxProduct1Image} />
                </View>
                <View style={[ItemCenter, { width: width * 0.20 }]}>
                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#FFFFFF' }]}>{name}</Text>
                    <NumberFormat displayType='text' prefix='฿' renderText={(v2) => renText(v2, '#FFFFFF')} thousandSeparator
                        value={full_price} />
                </View>
            </View>;
        };
    });
    return <View style={[FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 3, }]}>
        <View style={{ padding: 3, width: '49.9%', }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>FIN Luxury Shop!!</Text>
            <View>
                <View style={{ height: 100, width: '100%', }}>
                    <FastImage resizeMode={cover} source={imageShop} style={{ height: '100%' }} />
                </View>
                <View style={{ marginTop: 3 }}>
                    <FastImage resizeMode={cover} source={imageShop1} style={{ height: 40 }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, }}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>Fin Mall</Text>
                <View style={ViewStyle}>
                    {dataService ?
                        <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'FinMallScreen', })}>
                            <View style={FlexRow}>{productFinmall(dataService?.product_hit, 0)}</View>
                        </TouchableOpacity> :
                        <View style={FlexRow}>
                            {GenArray(10).map((_, i) => <View key={i} style={{ marginTop: 10, paddingLeft: 2.5, width: width * 0.225, }}>
                                <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                    <View style={BoxProduct1Image} />
                                </View>
                                <View style={[ItemCenter, { width: width * 0.20 }]}>
                                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#691F50' }]}>NaN</Text>
                                    <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#691F50')} thousandSeparator
                                        value={0} />
                                </View>
                            </View>)}
                        </View>}
                </View>
            </View>
        </View>
        <View style={{ padding: 3, width: '49.9%', }}>
            <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>ร้านค้าห้ามพลาด!!</Text>
            <View>
                <View style={{ height: 100, width: '100%', }}>
                    <FastImage resizeMode={cover} source={imageShop2} style={{ height: '100%' }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 5, width: width * 0.485, }}>
                <Text style={[FontFamilyBold, FontSize5, FrameBackgroundTextStart,]}>สินค้าสุด Exclusive</Text>
                <View style={{ backgroundColor: '#19508B', borderRadius: 5, justifyContent: 'space-between', padding: 3, }}>
                    {dataService ?
                        <TouchableOpacity activeOpacity={1} key='exclusive' onPress={() => Navi({ ...props, goScreen: 'ExclusiveScreen', })}>
                            <View style={FlexRow}>{productFinmall(dataService?.exclusive, 1)}</View>
                        </TouchableOpacity> :
                        <View style={FlexRow}>
                            {GenArray(10).map((_, i) => <View key={i} style={{ marginTop: 10, paddingLeft: 2.5, width: width * 0.225, }}>
                                <View style={{ backgroundColor: '#ECECEC', height: height * 0.115, padding: 5, width: width * 0.20, }}>
                                    <View style={BoxProduct1Image} />
                                </View>
                                <View style={[ItemCenter, { width: width * 0.20 }]}>
                                    <Text numberOfLines={1} style={[FontFamilyBold, FontSize8, { color: '#19508B', }]}>NaN</Text>
                                    <NumberFormat displayType='text' prefix='฿' renderText={(v) => renText(v, '#19508B')} thousandSeparator
                                        value={0} />
                                </View>
                            </View>)}
                        </View>}
                </View>
            </View>
            <View style={{ backgroundColor: 'blue', marginTop: 3, }}>
                <FastImage source={imageShop3} style={{ height: 40, }} />
            </View>
        </View>
    </View>;
};