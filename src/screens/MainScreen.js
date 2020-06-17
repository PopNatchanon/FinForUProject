///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, useRef } from 'react';
import {
    Animated, BackHandler, Dimensions, SafeAreaView,
    // ScrollView, 
    Text, TextInput, TouchableOpacity, View, YellowBox, Image, ActivityIndicator, StatusBar
} from 'react-native';
import {
    PanGestureHandler,
    ScrollView,
    State,
} from 'react-native-gesture-handler';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import BottomSheet from "react-native-raw-bottom-sheet";
import Carousel, { PaginationLight } from 'react-native-x-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { Notifications } from 'react-native-notifications';
import NumberFormat from 'react-number-format';
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import SplashScreen from 'react-native-splash-screen';
import SlidingView from 'rn-sliding-view';
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
import stylesMain, { color_up, mainColor, } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    BrowerScreen, GetServices, GetData, ProductBox, Toolbar, TabBar, LoadingScreen, RenderHeader,
    FlatProduct, FlatComponent, NavigationNavigateScreen,
} from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main // complete_last_function
const mapStateToProps = (state) => ({
    customerData: state.customerData,
    getFetchData: state.singleFetchDataFromService,
    activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({
    checkCustomer,
    fetchData,
    multiFetchData,
    setActiveFetch,
    setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
function MainScreen(props) {
    const { fetchData, getFetchData, multiFetchData } = props;
    const [activeTime, setActiveTime] = useState(true);
    // const { browerProps, mode } = route.params;
    const scrollY = new Animated.Value(0);
    // const AFlatComponent = Animatable.createAnimatableComponent(FlatComponent);
    const maxheight = 55;
    const AnimatedHeadbg = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['transparent', mainColor],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    const AnimatedCart = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['#ECECEC', mainColor],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    useEffect(() => { setTimeout(() => setActiveTime(false), 5000); })
    let FetchDataMain = () => {
        multiFetchData({
            multiData: [
                { name: 'publish_mobile', uri: `${finip}/home/publish_mobile`, },
                // { name: 'category_mobile', uri: `${finip}/home/category_mobile`, },
                { dataBody: { slide: 'banner' }, name: 'home_mobile', uri: `${finip}/home/home_mobile`, }
            ]
        })
    }
    useEffect(() => {
        if ((getFetchData['publish_mobile'] == undefined || (getFetchData['publish_mobile']?.isFetching)) ||
            // (getFetchData['category_mobile'] == undefined || (getFetchData['category_mobile']?.isFetching)) ||
            (getFetchData['home_mobile'] == undefined || (getFetchData['home_mobile']?.isFetching))) { FetchDataMain(); };
    }, [(getFetchData['publish_mobile'] == undefined || (getFetchData['publish_mobile']?.isFetching)) ||
        // (getFetchData['category_mobile'] == undefined || (getFetchData['category_mobile']?.isFetching)) ||
        (getFetchData['home_mobile'] == undefined || (getFetchData['home_mobile']?.isFetching))]);
    let FetchDataFlash = () => { fetchData({ name: 'flash_timer', uri: `${finip}/flashsale/flash_timer`, }) };
    useEffect(() => {
        if (getFetchData['flash_timer'] == undefined || (getFetchData['flash_timer']?.isFetching)) { FetchDataFlash(); };
    }, [getFetchData['flash_timer']?.isFetching]);
    // const item_id_type = getFetchData['category_mobile']?.isFetching == false && getFetchData['category_mobile']?.data.map((value) => {
    //     return value.id_type
    // });
    // let FetchDataCate = () => getFetchData['category_mobile']?.isFetching == false && item_id_type.map((value, index) => {
    //     if (getFetchData[`category_product|${value}`] == undefined || (getFetchData[`category_product|${value}`]?.isFetching == true)) {
    //         multiFetchData({
    //             multiData: [
    //                 { dataBody: { id_type: value }, name: `category_product|${value}`, uri: `${finip}/home/product_mobile`, },
    //                 {
    //                     dataBody: { promotion: 'promotions_1', id_type: value, }, name: `promo_1|${value}`,
    //                     uri: `${finip}/home/publish_cate_mobile`,
    //                 },
    //                 {
    //                     dataBody: { promotion: 'promotions_2', id_type: value, }, name: `promo_2|${value}`,
    //                     uri: `${finip}/home/publish_cate_mobile`,
    //                 },
    //                 {
    //                     dataBody: { promotion: 'shop', id_type: value, }, name: `shop|${value}`,
    //                     uri: `${finip}/home/publish_cate_mobile`,
    //                 }
    //             ]
    //         })
    //     }
    // });
    // useEffect(() => {
    //     getFetchData['category_mobile']?.isFetching == false &&
    //         FetchDataCate();
    // }, [getFetchData['category_mobile']?.isFetching == false]);
    let itemT = [
        /////--------------------------------------------->>>Start
        {
            nameComponent: 'Slide',
            renderComponent: <Slide {...props} />
        },
        // {
        //     nameComponent: 'Guarantee',
        //     renderComponent: <Guarantee  {...props} />
        // },
        {
            nameComponent: 'Category',
            renderComponent: <Category {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        //     {
        //         nameComponent: 'Trend_Hit',
        //         renderComponent: <Trend_Hit  {...props} />
        //     },
        {
            nameComponent: 'Button_Bar',
            renderComponent: <Button_Bar {...props} />
        },
        {
            nameComponent: 'FlashSale',
            renderComponent: <FlashSale {...props} />
        },
        // {
        //     nameComponent: 'Fin_Service',
        //     renderComponent: <Fin_Service {...props} />
        // },
        {
            nameComponent: 'Recommend_Brand',
            renderComponent: <Recommend_Brand {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'BannerBar_TWO',
            renderComponent: <BannerBar_TWO />
        },
        {
            nameComponent: 'NewStore',
            renderComponent: <NewStore  {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        // {
        //     nameComponent: 'Fin_Mall',
        //     renderComponent: <Fin_Mall {...props} dataService={getFetchData['publish_mobile'] && getFetchData['publish_mobile'].data} />
        // },
        {
            nameComponent: 'BannerBar_ONE',
            renderComponent: <BannerBar_ONE />
        },
        {
            nameComponent: 'Highlight',
            renderComponent: <Highlight {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'PromotionPopular',
            renderComponent: <PromotionPopular  {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'Popular_store',
            renderComponent: <Popular_store {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'Popular_product',
            renderComponent: <Popular_product {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'Product_for_you',
            renderComponent: <Product_for_you {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'CategoryProduct',
            renderComponent: <CategoryProduct {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'Second_product',
            renderComponent: <Second_product {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'BannerBar_THREE',
            renderComponent: <BannerBar_THREE />
        },
        {
            nameComponent: 'FIN_Supermarket',
            renderComponent: <FIN_Supermarket {...props} dataService={getFetchData['publish_mobile']?.data} />
        },
        {
            nameComponent: 'TodayProduct',
            renderComponent: <TodayProduct {...props} loadData={getFetchData['publish_mobile']?.data?.for_you2} />
        },
        /////--------------------------------------------->>>End
    ];
    // getFetchData['category_mobile'] && getFetchData['category_mobile'].data && getFetchData['category_mobile'].data.map((value, index) => {
    //     return itemT.splice(14 + index, 0, {
    //         nameComponent: `CategoryProduct${index}`,
    //         renderComponent: <CategoryProduct_new {...props} dataService={value} />
    //     })
    // })
    return (
        <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
            {/* {
                activeTime ?
                    <LoadingScreen key='LoadingScreen' /> :
                    <></>
            } */}
            <Animated.View style={{
                zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1, marginTop: -(maxheight),
            }}>
                <AppBar {...props} ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} cartBar chatBar />
            </Animated.View>
            <FlatComponent
                animatedView
                attachNativeEvent
                componentPage='MainScreen'
                component={itemT}
                initialNumToRender={10}
                scrollEventThrottle={8}
                showsVerticalScrollIndicator={false}
                // stickyHeaderIndices={[0]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false, }
                )} />
            <Botton_PopUp_FIN />
            <Toolbar {...props} style={{ flex: 5, }} />
            <ExitAppModule {...props} />
        </SafeAreaView >
    );
};
///----------------------------------------------------------------------------------------------->>>> ExitAppModule
export class ExitAppModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backClickCount: 0,
        };
        this.springValue = new Animated.Value(0);
        this.transformValue = new Animated.Value(100)
        this.handleBackButton = this._handleBackButton.bind(this)
    };
    componentDidMount() {
        YellowBox.ignoreWarnings(["Require cycle:", "*"]);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    };
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    };
    _spring = () => {
        this.setState({ backClickCount: 1 }, () => {
            Animated.sequence([
                Animated.timing(
                    this.transformValue,
                    {
                        toValue: -.08 * height,
                        friction: 5,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.springValue,
                    {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.springValue,
                    {
                        toValue: 1,
                        duration: 700,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.springValue,
                    {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.transformValue,
                    {
                        toValue: 100,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
            ]).start(() => {
                this.setState({ backClickCount: 0 });
            });
        });
    };
    _handleBackButton = () => {
        const { backClickCount } = this.state;
        const { navigation, route } = this.props;
        var routeProps = route.name;
        const pathMain = ['MainScreen', 'FeedScreen', 'NewsScreen', 'BellScreen', 'LoginScreen', 'ProfileScreen']
        console.log(pathMain.indexOf(routeProps) != -1)
        return pathMain.indexOf(routeProps) != -1 ?
            (backClickCount == 1 ? BackHandler.exitApp() : this._spring(), true) :
            (navigation.pop(), true);
    };
    render() {
        return (
            <Animatable.View style={[stylesMain.animatedView, {
                opacity: this.springValue, transform: [{ translateY: this.transformValue }]
            }]}>
                <View style={stylesMain.animatedViewSub}>
                    <Text style={[stylesMain.exitTitleText, stylesFont.FontFamilyText]}>กดอีกครั้งเพื่อออก</Text>
                </View>
            </Animatable.View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> AppBar ค้นหา
export let AppBar = (props) => {
    const {
        ABDColor, ABDColor_All, ABGColor, AIColor, ABICartColor, backArrow, cartBar, chatBar, filterBar, otherBar, searchBar, SearchText,
    } = props;
    const {
        fetchData, getActive, getFetchData, navigation,
    } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [cartMobile, setCartMobile] = useState(0);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [text, setText] = useState(undefined);
    useEffect(() => {
        activeGetCurrentUser && GetData({
            getSource: value => {
                setActiveGetCurrentUser(false);
                setCurrentUser(value.currentUser);
            }, getUser: true,
        });
    }, [activeGetCurrentUser]);
    useEffect(() => {
        (currentUser?.id_customer && (getFetchData['cart_mobile'] == undefined || getFetchData['cart_mobile']?.isFetching)) &&
            fetchData({ dataBody: { id_customer: currentUser.id_customer }, name: 'cart_mobile', uri: `${finip}/cart/cart_mobile`, });
    }, [(currentUser?.id_customer && (getFetchData['cart_mobile'] == undefined || getFetchData['cart_mobile']?.isFetching))])
    cartMobile != getFetchData['cart_mobile']?.data?.cart_list.length && getFetchData['cart_mobile']?.data?.cart_list.length >= 0 &&
        setCartMobile(getFetchData['cart_mobile']?.data?.cart_list.length)
    let setSubmit = () => {
        const { text, } = this.state;
        text != undefined && text != ' ' &&
            NavigationNavigateScreen({ goScreen: 'SearchScreen', setData: { SearchText: text }, navigation });
    };
    const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo);
    const AIconFeather = Animatable.createAnimatableComponent(IconFeather);
    const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5);
    const AStatusBar = Animatable.createAnimatableComponent(StatusBar);
    var allWidth = width - 20;
    backArrow && (allWidth -= 30);
    cartBar && (allWidth -= 30);
    chatBar && (allWidth -= 30);
    filterBar && (allWidth -= 30);
    otherBar && (allWidth -= 30);
    return (
        <Animatable.View style={[stylesMain.Appbar, stylesMain.FlexRow, {
            width, height: 55, borderWidth: 0, borderBottomWidth: 1,
            backgroundColor: ABGColor ?? mainColor,
            borderColor: ABDColor_All ?? ABDColor ?? mainColor,
            borderBottomColor: ABDColor ?? mainColor,
            borderColor: 'transparent',
        }]}>
            {/* <AStatusBar backgroundColor={ABGColor ?? mainColor} translucent /> */}
            {[
                backArrow &&
                <View key={'backarrow'}>
                    <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]} activeOpacity={1}
                        onPress={() => { NavigationNavigateScreen({ goScreen: 'goBack', navigation }); }}>
                        <AIconEntypo name="chevron-left" size={25} style={{ color: AIColor ?? '#fff', }} />
                    </TouchableOpacity>
                </View>,
                searchBar ?
                    <TouchableOpacity key={'searchBar'} activeOpacity={1} style={{ marginRight: 3 }}>
                        <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical, { height: 30 }]}>
                            <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: allWidth, }]}>
                                <TextInput style={[stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5,
                                stylesFont.FontCenter]}
                                    placeholder="ค้นหาสินค้า/ร้านค้า"
                                    value={text}
                                    maxLength={30}
                                    onSubmitEditing={setSubmit}
                                    onChangeText={value => setText(value)} />
                            </View>
                            <IconAntDesign name="search1" size={18} style={[{ top: 4, left: allWidth - 25, position: 'absolute' }]} />
                        </View>
                    </TouchableOpacity> :
                    <TouchableOpacity key={'searchBar'} activeOpacity={1}
                        style={{ marginRight: 3 }} onPress={() => {
                            NavigationNavigateScreen({
                                goScreen: SearchText ? 'goBack' : 'SearchScreen', setData: { modeStore: false }, navigation
                            });
                        }}>
                        <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical, { height: 30 }]}>
                            <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { height: 30, width: allWidth, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter,
                                stylesMain.ItemCenterVertical]}>{SearchText ?? 'ค้นหาสินค้า/ร้านค้า'}</Text>
                            </View>
                            <IconAntDesign name="search1" size={18} style={[{ top: 4, left: allWidth - 25, position: 'absolute', }]} />
                        </View>
                    </TouchableOpacity>,
                <View key={'storebar'} style={[stylesMain.ItemCenter, stylesMain.FlexRow, stylesMain.ItemCenterVertical]}>
                    {[
                        filterBar &&
                        <TouchableOpacity key='filterBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}
                            onPress={null/*() => navigation.push('CartScreen')*/}>
                            <AIconFeather name="filter" size={25} style={{ color: AIColor ?? '#fff' }} />
                        </TouchableOpacity>,
                        otherBar &&
                        <TouchableOpacity key='otherBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}
                            onPress={null/*() => navigation.push('CartScreen')*/}>
                            <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor ?? '#fff' }} />
                        </TouchableOpacity>,
                        chatBar &&
                        <TouchableOpacity key='chatBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}
                            onPress={currentUser ?
                                () => { NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation }); } :
                                () => { NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true }); }}>
                            <IconAntDesign name="message1" size={25} style={{ color: '#fff' }} />
                        </TouchableOpacity>,
                        cartBar &&
                        <TouchableOpacity key='cartBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}
                            onPress={
                                currentUser ?
                                    () => { NavigationNavigateScreen({ goScreen: 'CartScreen', navigation }); } :
                                    () => { NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true }); }}>
                            {
                                ((getFetchData['cart_mobile'] && getFetchData['cart_mobile']?.isError) || cartMobile <= 0) ?
                                    <></> :
                                    <Animated.Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, {
                                        backgroundColor: 'red', color: '#fff', width: 17, height: 17, borderRadius: 15, textAlign: 'center',
                                        textAlignVertical: 'center', position: 'absolute', elevation: 1, left: 18, bottom: 15,
                                        borderColor: ABICartColor ?? mainColor, borderWidth: 1,
                                    }]}>{cartMobile}</Animated.Text>
                            }
                            <IconAntDesign name="shoppingcart" size={25} style={{ color: '#fff' }} />
                        </TouchableOpacity>
                    ]}
                </View>
            ]}
        </Animatable.View>
    );
};
///----------------------------------------------------------------------------------------------->>>> AppBar สีคราม
export let AppBar1 = (props) => {
    const {
        ABDColor, ABDColor_All, ABGColor, backArrow, backArrowColor, backNavigation, ButtomDeleteAll, chatBar, colorBar, deleteBar,
        getActivePost, goToTop, menuBar, navigation, propsFunction, postBar, saveBar, searchBar, settingBar, storeBar, titleHead, UpBankBar,
    } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        activeGetCurrentUser == true &&
            GetData({
                getSource: value => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); }, getUser: true,
            });
    }, [activeGetCurrentUser]);
    return (
        <View style={[colorBar ?? menuBar ? stylesStore.AppbarMenu : stylesStore.Appbar, {
            width, height: 55, borderWidth: 0, borderBottomWidth: 1,
            backgroundColor: ABGColor ?? mainColor,
            borderColor: ABDColor_All ?? ABDColor ?? mainColor,
            borderBottomColor: ABDColor ?? mainColor,
            borderColor: 'transparent',
        }]}>
            {/* <AStatusBar backgroundColor={mainColor} /> */}
            <View style={stylesMain.FlexRow}>
                {
                    backArrow &&
                    <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 50, height: 50 }]}
                        activeOpacity={1} onPress={
                            goToTop ?
                                () => { NavigationNavigateScreen({ goScreen: 'popToTop', navigation }); } :
                                backNavigation ?
                                    () => {
                                        navigation.state.params.backNavigation('goBack');
                                        NavigationNavigateScreen({ goScreen: 'goBack', navigation });
                                    } :
                                    () => { NavigationNavigateScreen({ goScreen: 'goBack', navigation }); }
                        }>
                        <IconEntypo style={[stylesStore.Icon_appbar, { color: backArrowColor ?? '#ffffff' }]} name="chevron-left"
                            size={30} />
                    </TouchableOpacity>
                }
                <Text style={[stylesStore.Text_appbar, stylesFont.FontSize4, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical
                ]}>{titleHead ?? ''}</Text>
            </View>
            <View style={stylesMain.FlexRow}>
                {[
                    searchBar &&
                    <TouchableOpacity
                        key={'searchBar'}
                        style={[stylesMain.ItemCenter, { width: 40 }]}
                        onPress={() => {
                            NavigationNavigateScreen({ goScreen: 'SearchScreen', setData: { modeStore: false }, navigation });
                        }}>
                        <IconAntDesign RightItem name="search1" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                            marginRight: 8
                        }]} />
                    </TouchableOpacity>,
                    settingBar &&
                    <TouchableOpacity
                        key={'settingBar'}
                        style={[stylesMain.ItemCenter, { width: 40 }]}
                        onPress={() => { NavigationNavigateScreen({ goScreen: 'Seller_Setting', navigation }); }}>
                        <IconMaterialCommunityIcons name="settings-outline" size={25} style={[stylesStore.Icon_appbar,
                        stylesMain.ItemCenterVertical, { marginRight: 8 }]} />
                    </TouchableOpacity>,
                    chatBar &&
                    <TouchableOpacity
                        key={'chatBar'}
                        style={[stylesMain.ItemCenter, { width: 40 }]}
                        onPress={currentUser ?
                            () => { NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation }); } :
                            () => { NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true }); }
                        }>
                        <IconAntDesign RightItem name="message1" size={25} style={[
                            stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                marginRight: 8
                            }]} />
                    </TouchableOpacity>,
                    storeBar &&
                    <TouchableOpacity
                        key={'storeBar'}
                        style={[stylesMain.ItemCenter, { width: 40 }]}
                        onPress={() => {
                            NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 3 }, navigation
                            });
                        }}>
                        <IconFontAwesome5 RightItem name="store" size={20} style={[
                            stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                marginRight: 8
                            }]} />
                    </TouchableOpacity>,
                    postBar &&
                    <TouchableOpacity
                        key={'postBar'}
                        style={[stylesMain.ItemCenter, { width: 60 }]}
                        onPress={() => { getActivePost(true); }}>
                        <Text style={[
                            stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize4, {
                                width: 60,
                                marginRight: 8,
                            }]}>
                            โพสต์</Text>
                    </TouchableOpacity>,
                    saveBar &&
                    <TouchableOpacity
                        key={'saveBar'}
                        style={[stylesMain.ItemCenter, { width: 60 }]}>
                        <Text style={[
                            stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize4, {
                                width: 60,
                                marginRight: 8,
                            }]}>
                            บันทึก</Text>
                    </TouchableOpacity>,
                    UpBankBar &&
                    <TouchableOpacity
                        key={'UpBankBar'}
                        style={[stylesMain.ItemCenter, { width: 80 }]}
                        onPress={() => {
                            NavigationNavigateScreen({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 1 }, navigation });
                        }}>
                        <Text style={[
                            stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize4, {
                                width: 80,
                                marginRight: 8,
                            }]}>
                            เพิ่มบัญชี</Text>
                    </TouchableOpacity>,
                    deleteBar &&
                    <TouchableOpacity
                        key={'deleteBar'}
                        onPress={() => propsFunction()}
                        style={[stylesMain.ItemCenter, { width: 60 }]}>
                        <Text style={[
                            stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize4, {
                                width: 60,
                                textAlign: 'center'
                            }]}>
                            {
                                ButtomDeleteAll == true ? 'เสร็จสิ้น' : 'ลบ'
                            }</Text>
                    </TouchableOpacity>
                ]}
            </View>
        </View >
    );
};
///----------------------------------------------------------------------------------------------->>>> Slide
export let Slide = (props) => {
    const { getFetchData, banner, } = props;
    let _renderItem = (item, index) => {
        var dataMySQL;
        banner ?
            (dataMySQL = `${finip}/${item.image_path}/${item.image}`) :
            (dataMySQL = index % 2 == 0 ? `${ip}/mysql/uploads/Banner_Mobile/T-10.jpg` : `${ip}/mysql/uploads/Banner_Mobile/T-5.jpg`);
        return (
            <View style={stylesMain.child} key={item.id}>
                <Image
                    source={{ uri: dataMySQL }}
                    style={stylesMain.child}
                    resizeMode='contain'
                    resizeMethod='resize' />
            </View>
        );
    };
    return (
        <View>
            {
                (banner || getFetchData['home_mobile']?.data) ?
                    <Carousel
                        renderItem={_renderItem}
                        data={banner ?? getFetchData['home_mobile']?.data}
                        loop
                        autoplay
                        autoplayInterval={3000}
                        pagination={PaginationLight} /> :
                    <View style={[stylesMain.child, stylesMain.ItemCenter, { backgroundColor: '#fff' }]}>
                        <ActivityIndicator size='large' color={mainColor} />
                    </View>
            }
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> Guarantee
export let Guarantee = (props) => {
    let item = [{
        text: 'ใบทะเบียนภาษีมูลค่าเพิ่ม',
        image: `${ip}/MySQL/uploads/Guarantee/warranty_blue-001.png`
    }, {
        text: 'หนังสือจดทะเบียนบริษัท',
        image: `${ip}/MySQL/uploads/Guarantee/warranty_blue-002.png`
    }, {
        text: 'มีบริการรับประกันการจัดส่ง',
        image: `${ip}/MySQL/uploads/Guarantee/warranty_blue-003.png`
    }, {
        text: 'ใบจดทะเบียนเครื่องหมายการค้า',
        image: `${ip}/MySQL/uploads/Guarantee/warranty_blue-005.png`
    }];
    let _renderItem = (item, index) => {
        return (
            <View key={index} style={[stylesMain.FlexRow, { width: width * 0.70, justifyContent: 'space-around', }]}>
                <View style={stylesMain.FlexRow}>
                    <View style={{ height: 30, width: 30, marginRight: 10 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{ uri: item.image, }}
                            resizeMode={FastImage.resizeMode.cover} />
                    </View>
                    <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyBold, { marginTop: 5 }]}>{item.text}</Text>
                </View>
                <View style={[stylesMain.ItemCenter, { height: 30, width: 30 }]}>
                    <FastImage
                        style={{ height: 20, width: 20 }}
                        source={{ uri: `${ip}/MySQL/uploads/Guarantee/02.png`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                </View>
            </View>
        );
    };
    return (
        <>
            <View style={{
                flexDirection: 'row', width: '100%', height: 'auto', paddingHorizontal: 5,
                aspectRatio: 4.5, justifyContent: 'space-between', marginTop: 5
            }}>
                <View style={{ width: '54%', }}>
                    <FastImage
                        style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
                        source={{ uri: `${ip}/MySQL/uploads/Home/001.png`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                </View>
                <View style={{ width: '44%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: '49%', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 5, borderRadius: 5 }}>
                        <View style={{ height: '60%', width: width * 0.13 }}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                source={{ uri: `${ip}/MySQL/uploads/Guarantee/Samsung-logo.png`, }}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                        <View style={{ backgroundColor: mainColor, paddingHorizontal: 15, borderRadius: 8, marginTop: 10 }} >
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>ช้อปเลย</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '49%', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 5, borderRadius: 5 }}>
                        <View style={{ height: '60%', width: width * 0.13 }}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                source={{ uri: `${ip}/MySQL/uploads/Guarantee/adidas.png`, }}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                        <View style={{ backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 8, marginTop: 10 }} >
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>ช้อปเลย</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', width: '100%', height: 'auto', paddingHorizontal: 5,
                aspectRatio: 8.5, marginTop: 5, backgroundColor: '#FFFFFF', borderRadius: 5
            }}>
                <View style={[stylesMain.ItemCenter, { width: '30%', borderColor: '#f5df89', borderWidth: 2 }]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Guarantee/w4.png`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                </View>
                <View style={{ width: '30%', justifyContent: 'center' }}>
                    <Carousel
                        renderItem={_renderItem}
                        data={item}
                        // loop
                        autoplay
                        autoplayInterval={5000}
                    />
                </View>
            </View>
        </>
    );
};
///----------------------------------------------------------------------------------------------->>>> Category // Loading
export let Category = (props) => {
    const { dataService, navigation } = props;
    let boxEmpty = (
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,].map((_, index) => {
            return (
                <View key={index} style={{ width: width * 0.199, justifyContent: 'center', alignItems: 'center', padding: 2, }}>
                    <View style={{
                        backgroundColor: '#ECECEC', borderColor: '#ECECEC', borderWidth: 1, borderRadius: 8, height: 60, width: 60,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <ActivityIndicator style={stylesMain.ItemCenterVertical} color={mainColor} size='large' />
                    </View>
                    <View style={{ height: 25 }}>
                    </View>
                </View>
            )
        })
    )
    let dataCategory = (
        dataService?.category ?
            dataService?.category.map((item, index) => {
                if (index < dataService?.category.length) {
                    var dataMySQL = `${finip}/${item.image_path}/menu/mobile/${item.image_head}`;
                    return (
                        <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                            goScreen: 'CategoryScreen', setData: { id_type: item.id_type }, navigation
                        })} style={stylesMain.Category}>
                            <FastImage
                                source={{ uri: dataMySQL, }}
                                style={stylesMain.Category_box}
                                resizeMode={FastImage.resizeMode.cover} />
                            <View style={{ height: 25 }}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize8, stylesFont.FontCenter]}>
                                    {item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
            }) :
            boxEmpty
    );
    return (
        <View style={stylesMain.FrameBackground2}>
            <ScrollView horizontal>
                <View style={stylesMain.category_A}>
                    {dataCategory}
                </View>
            </ScrollView>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> ??N
export let Trend_Hit = (props) => {
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const item = [
        { image: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-02.jpg` },
        { image: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-03.jpg` },
    ]
    var uri = `${ip}/mysql/DataServiceMain.php`;
    var dataBody = {
        type: 'Trend_Hit',
    };
    useEffect(() => {
        activeDataService == true &&
            GetServices({
                uriPointer: uri, dataBody, getDataSource: value => {
                    setActiveDataService(false);
                    setDataService(value);
                },
            });
    }, [dataBody]);
    let _renderItem = (item, index) => {
        return (
            <View key={index} style={{ width: width * 0.48 }}>
                <View style={{ height: '88%', }}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: item.image, }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 25, width: 90, marginTop: -15 }}>
                        <FastImage
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 8 }]}
                            source={{ uri: `${ip}/MySQL/uploads/Home/Button_Gif/Shop2.png`, }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    let Trend_Box = () => {
        return dataService &&
            dataService.map((item, index) => {
                var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
                return (
                    <View key={index} style={[stylesMain.ItemCenter, {
                        width: width * 0.32, borderWidth: 1,
                        flexDirection: 'row', borderColor: '#ECECEC', borderRadius: 5,
                    }]}>
                        <View style={{ height: 50, width: 50 }}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{
                                    uri: dataMySQL,
                                }}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                        <View >
                            <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>{item.name}</Text>
                            <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#CACACA' }]}>
                                37K products</Text>
                        </View>
                    </View>
                );
            });
    };
    return (
        <>
            <View style={[stylesMain.FlexRow, {
                height: 'auto', aspectRatio: 5, marginTop: 10, justifyContent: 'space-between', width, paddingHorizontal: 5
            }]}>
                <View style={{ width: width * 0.48 }}>
                    <View style={{ height: '88%' }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{ uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-01.jpg`, }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{ height: 25, width: 90, marginTop: -15 }}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                source={{ uri: `${ip}/MySQL/uploads/Home/Button_Gif/Shop.gif`, }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Carousel
                    renderItem={_renderItem}
                    data={item}
                    // loop
                    autoplay
                    autoplayInterval={4000}
                />
            </View>
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                        เทรนฮิต</Text>
                    <TouchableOpacity>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyBold]}>
                            <IconMaterialCommunityIcons name='reload' size={20} />
                                   Reload</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 'auto', aspectRatio: 5 }}>
                    {Trend_Box()}
                </View>
            </View>
        </>
    );
};
///----------------------------------------------------------------------------------------------->>>>
export let Fin_Service = (props) => {
    return (
        <View style={[stylesMain.FrameBackground2, { height: 'auto', aspectRatio: 4.5 }]}>
            <Image
                style={stylesMain.BoxProduct1Image}
                source={{ uri: `${ip}/MySQL/uploads/Text/MB2.jpg` }}
                resizeMode='contain'
                resizeMethod='resize' />
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const { navigation } = props;
    return (
        <>
            <View style={[stylesMain.FlexRow, {
                width, justifyContent: 'space-around', marginTop: 2, backgroundColor: 'transparent', elevation: 1
            }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'DealScreen', navigation
                })}>
                    <View style={[stylesMain.Button_Bar_Box, { elevation: 1 }]}>
                        <FastImage style={stylesMain.Button_Bar_icon}
                            source={require('../../icon/Icon_Deal/01.jpg')}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'CoinScreen', navigation
                })}>
                    <View style={[stylesMain.Button_Bar_Box, { elevation: 1 }]}>
                        <FastImage style={stylesMain.Button_Bar_icon}
                            source={require('../../icon/Icon_Deal/02.jpg')}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'CampaignScreen', navigation
                })}>
                    <View style={[stylesMain.Button_Bar_Box, { elevation: 1 }]}>
                        <FastImage style={stylesMain.Button_Bar_icon}
                            source={require('../../icon/Icon_Deal/03.jpg')}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'The_BestFinScreen', navigation
                })}>
                    <View style={[stylesMain.Button_Bar_Box, { elevation: 1 }]}>
                        <FastImage style={stylesMain.Button_Bar_icon}
                            source={require('../../icon/Icon_Deal/04.jpg')}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Installment_payScreen', navigation
                })}>
                    <View style={[stylesMain.Button_Bar_Box, { elevation: 1 }]}>
                        <FastImage style={stylesMain.Button_Bar_icon}
                            source={require('../../icon/Icon_Deal/05.jpg')}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.FrameBackground3, { bottom: 45, marginBottom: -45 }]}></View>
        </>
    );
};
///----------------------------------------------------------------------------------------------->>>> Brand_RCM
export let Recommend_Brand = (props) => {
    const { dataService, navigation, } = props;
    let item_1 = [];
    let item_2 = [];
    if (dataService?.brand.length > 0) {
        for (var n = 0; n < dataService.brand.length; n += 2) {
            if (dataService.brand[n]) {
                item_1.push(dataService.brand[n]);
            };
            if (dataService.brand[n + 1]) {
                item_2.push(dataService.brand[n + 1]);
            };
        };
    };
    let boxEmpty = (
        [0, 1, 2, 3, 4, 5].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.Brand_image_Box, { backgroundColor: '#ECECEC' }]}>
                    <View style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]} />
                </View>
            )
        })
    )
    let recommendBrand = (
        dataService?.brand && item_1 ?
            item_1.map((item, index) => {
                var dataMySQL = `${ip}/MySQL/uploads/Brand_R/${item.image}`;
                // var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Brand', navigation
                    })}>
                        <View style={stylesMain.Brand_image_Box}>
                            <FastImage
                                style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]}
                                source={{ uri: dataMySQL, }}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                );
            }) : boxEmpty
    );
    let recommendBrand2 = (
        dataService?.brand && item_2 ?
            item_2.map((item, index) => {
                var dataMySQL = `${ip}/MySQL/uploads/Brand_R/${item.image}`;
                // var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Brand', navigation
                    })}>
                        <View style={stylesMain.Brand_image_Box}>
                            <FastImage
                                style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]}
                                source={{ uri: dataMySQL, }}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                );
            }) : boxEmpty
    );
    return (
        <View style={[stylesMain.FrameBackground2, { paddingBottom: 0, }]}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                    แบรนด์แนะนำ</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Recommend_Brand', navigation
                })}>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <View>
                    <View style={{ flexDirection: 'row', }}>{recommendBrand}</View>
                    <View style={{ flexDirection: 'row', marginBottom: 2 }}>{recommendBrand2}</View>
                </View>
            </ScrollView>
        </View >
    );
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export let Popular_store = (props) => {
    const { dataService, navigation, } = props;
    let boxEmpty = (
        [0, 1].map((_, index) => {
            return (
                <View key={index} style={stylesMain.BoxStore1Box}>
                    <View style={[stylesMain.BoxStore1Image, { backgroundColor: '#ECECEC' }]} />
                </View>
            );
        })
    );
    let PopularStoreItem = (
        dataService?.store_good ?
            dataService.store_good.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Store', navigation
                    })}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{ uri: dataMySQL, }}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                    </TouchableOpacity>
                );
            }) :
            boxEmpty
    );
    return (
        <View style={stylesMain.FrameBackground2}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                    ร้านที่ใช่อยากให้ช้อป</Text>
            </View>
            <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 3.3, justifyContent: 'space-between' }]} >
                {PopularStoreItem}
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> Popular_product
export let Popular_product = (props) => {
    const { dataService, navigation, } = props;
    let boxEmpty = (
        [0, 1].map((_, index) => {
            return (
                <View key={index} style={{ width: width * 0.22 }}>
                    <View style={[stylesMain.Popular_Box_D, { backgroundColor: '#ECECEC', padding: 5, borderRadius: 5 }]}>
                        <View style={stylesMain.Popular_image_Box} />
                    </View>
                    <View style={[stylesMain.ItemCenter, { width: width * 0.20, }]}>
                    </View>
                </View>
            )
        })
    )
    let productCate = (type) => {
        return type ?
            type.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return index < 2 && (
                    <View style={{ width: width * 0.22 }} key={index}>
                        <View style={[stylesMain.Popular_Box_D, { backgroundColor: '#FFFFFF', padding: 5, borderRadius: 5 }]}>
                            <FastImage
                                style={stylesMain.Popular_image_Box}
                                source={{ uri: dataMySQL, }}
                                resizeMode={FastImage.resizeMode.stretch} />
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: width * 0.20, }]}>
                            <Text numberOfLines={1} style={[stylesFont.FontSize8, stylesFont.FontFamilyText]}>{item.name}</Text>
                            <NumberFormat
                                value={item.full_price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'฿'}
                                renderText={value =>
                                    <Text style={[
                                        stylesMain.BoxProduct1ImagePrice,
                                        stylesFont.FontSize8,
                                        stylesFont.FontFamilyBold,
                                    ]}>{value}</Text>
                                } />
                        </View>
                    </View>
                );
            }) :
            boxEmpty;
    };
    return (
        <View>
            <View style={[stylesMain.FrameBackground2]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        สินค้ายอดนิยม</Text>
                </View>
                <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 2.6, }]}>
                    <ScrollView horizontal>
                        {[
                            <TouchableOpacity
                                key={'product_hit'}
                                activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Popular_productScreen', setData: { id_item: 0, }, navigation
                                })}>
                                <View style={[stylesMain.Popular_Box_B, { backgroundColor: '#F0F6FA' }]}>
                                    <View style={stylesMain.PopularText_A}>
                                        <Text style={[
                                            {
                                                marginLeft: 8, color: '#fff',
                                            }, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                            สินค้าสุดฮิต</Text>
                                    </View>
                                    <View style={stylesMain.FlexRow}>
                                        {productCate(dataService?.product_hit)}
                                    </View>
                                </View>
                            </TouchableOpacity>,
                            <TouchableOpacity
                                key={'best_price'}
                                activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Popular_productScreen', setData: { id_item: 1, }, navigation
                                })}>
                                <View style={[stylesMain.Popular_Box_B, { backgroundColor: '#EAEEF7' }]}>
                                    <View style={stylesMain.PopularText_A}>
                                        <Text style={[{
                                            marginLeft: 8, color: '#fff'
                                        }, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                            สินค้าราคาโดน</Text>
                                    </View>
                                    <View style={stylesMain.FlexRow}>
                                        {productCate(dataService?.best_price)}
                                    </View>
                                </View>
                            </TouchableOpacity>,
                            <TouchableOpacity
                                key={'best_sale'}
                                activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Popular_productScreen', setData: { id_item: 2, }, navigation
                                })}>
                                <View style={[stylesMain.Popular_Box_B, { backgroundColor: '#F0F6FA' }]}>
                                    <View style={stylesMain.PopularText_A}>
                                        <Text style={[{
                                            marginLeft: 8, color: '#fff'
                                        }, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                            สินค้าขายดี</Text>
                                    </View>
                                    <View style={stylesMain.FlexRow}>
                                        {productCate(dataService?.best_sale)}
                                    </View>
                                </View>
                            </TouchableOpacity>,
                            <TouchableOpacity
                                key={'best_cool'}
                                activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Popular_productScreen', setData: { id_item: 3, }, navigation
                                })}>
                                <View style={[stylesMain.Popular_Box_B, { backgroundColor: '#EAEEF7' }]}>
                                    <View style={stylesMain.PopularText_A}>
                                        <Text style={[{
                                            marginLeft: 8, color: '#fff'
                                        }, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                            สินค้าสุดคูล</Text>
                                    </View>
                                    <View style={stylesMain.FlexRow}>
                                        {productCate(dataService?.best_cool)}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ]}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export let BannerBar_ONE = (props) => {
    return (
        <View style={stylesMain.Banner_Bar}>
            <FastImage
                style={stylesMain.Banner_Bar_image}
                source={{ uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 111.jpg` }}
                resizeMode={FastImage.resizeMode.stretch} />
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export let BannerBar_TWO = (props) => {
    return (
        <View style={stylesMain.Banner_Bar}>
            <FastImage
                style={stylesMain.Banner_Bar_image}
                source={{ uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg` }}
                resizeMode={FastImage.resizeMode.stretch} />
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export let BannerBar_THREE = (props) => {
    return (
        <View style={stylesMain.Banner_Bar}>
            <FastImage
                style={stylesMain.Banner_Bar_image}
                source={{ uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg` }}
                resizeMode={FastImage.resizeMode.stretch} />
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> FlashSale
export let FlashSale = (props) => {
    const { getFetchData, navigation, setFetchToStart, } = props;
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
                    console.log('saveTimeZXZZXZ')
                    saveTime && console.log((saveTime[0] != flash_end[0]))
                    saveTime && console.log('saveTime')
                    saveTime && console.log(saveTime)
                    flash_end && console.log('flash_end')
                    flash_end && console.log(flash_end)
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
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        };
    }, [curTime])
    return (
        getFetchData['flash_timer']?.data ?
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, flex: 70 }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBoldBold, stylesFont.FontSize4, {
                            color: '#dc3545', flex: 34
                        }]}>FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4, flex: 66 }]}>
                            <IconFontAwesome name='clock-o' size={30} />
                            <View style={{ flexDirection: 'row', flex: 70, paddingTop: 6 }}>
                                <View style={[stylesMain.Time_FlashSale_TimeBox,]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        {hours < 10 ? hours <= 0 ? '00' : '0' + hours : hours}</Text>
                                </View>
                                <View style={[stylesMain.Time_FlashSale_TimeBox]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        {minutes < 10 ? minutes <= 0 ? '00' : '0' + minutes : minutes}</Text>
                                </View>
                                <View style={[stylesMain.Time_FlashSale_TimeBox]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        {seconds < 10 ? seconds <= 0 ? '00' : '0' + seconds : seconds}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'FlashSaleScreen', navigation
                    })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText, { flex: 30 }]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {
                    getFetchData['flash_timer'] && getFetchData['flash_timer'].data.product &&
                    <FlatProduct {...props} custumNavigation='FlashSaleScreen' dataService={getFetchData['flash_timer'].data.product}
                        mode='row4' nameFlatProduct='FlashSaleProduct' nameSize={11} priceSize={12} dispriceSize={12} />
                }
            </View> :
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, flex: 70 }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBoldBold, stylesFont.FontSize4, {
                            color: '#dc3545', flex: 34
                        }]}>
                            FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4, flex: 66 }]}>
                            <IconFontAwesome name='clock-o' size={30} />
                            <View style={{ flexDirection: 'row', flex: 70, paddingTop: 6 }}>
                                <View style={[stylesMain.Time_FlashSale_TimeBox, stylesMain.ItemCenter]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        00</Text>
                                </View>
                                <View style={[stylesMain.Time_FlashSale_TimeBox, stylesMain.ItemCenter]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        00</Text>
                                </View>
                                <View style={[stylesMain.Time_FlashSale_TimeBox, stylesMain.ItemCenter]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'FlashSaleScreen', navigation
                    })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText, { flex: 30 }]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {
                        [0, 1, 2, 3, 4].map((_, index) => {
                            return (
                                <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct5Box]}>
                                    <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct5ImageofLines, {
                                        backgroundColor: '#ECECEC'
                                    }]}>
                                        <View style={[
                                            stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }
                                        ]}>
                                        </View>
                                    </View>
                                    <View style={{
                                        height: 55,
                                        paddingHorizontal: 3
                                    }} />
                                </View>
                            )
                        })
                    }
                </View>
            </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export let PromotionPopular = (props) => {
    const { dataService, navigation, } = props;
    let boxEmpty = (
        [0, 1, 2].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.BoxStore2Box2]}>
                    <View style={[stylesMain.BoxStore2Image2, { backgroundColor: '#ECECEC' }]}></View>
                    <View style={{
                        paddingHorizontal: 4, padding: 1, backgroundColor: mainColor, borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8
                    }}>
                        <Text numberOfLines={1} style={[
                            stylesFont.FontFamilyText, stylesFont.FontSize7, { color: mainColor, marginLeft: 2 }
                        ]}>
                            NaN</Text>
                    </View>
                </View>
            )
        })
    )
    let dataPromotionPopular = (
        dataService?.recommend_store ?
            dataService.recommend_store.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Store', navigation
                    })} key={index}>
                        <View style={[stylesMain.BoxStore2Box2]}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[stylesMain.BoxStore2Image2]}
                                resizeMode={FastImage.resizeMode.cover} />
                            <View style={{
                                paddingHorizontal: 4, padding: 1, backgroundColor: mainColor, borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8
                            }}>
                                <Text numberOfLines={1} style={[
                                    stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#fff', marginLeft: 2 }
                                ]}>{item.detail}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }) : boxEmpty
    );
    return (
        <View style={stylesMain.FrameBackground2}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                    ลายแทงร้านค้าแนะนำ</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Recommend_Store', navigation
                })}>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 'auto', aspectRatio: 2.8 }}>
                <ScrollView horizontal>{dataPromotionPopular}</ScrollView>
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export let Product_for_you = (props) => {
    const { dataService, navigation, } = props;
    let boxEmpty = (
        [0, 1, 2, 3, 4, 5].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2]}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#ECECEC', width: 115 }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>
            )
        })
    );
    return (
        <View style={[stylesMain.FrameBackground2]}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                    FIN คัดมาเพื่อคุณ</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Product_for_youScreen', navigation
                })}>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {
                dataService?.for_you.length > 0 ?
                    <FlatProduct {...props} dataService={dataService.for_you} numberOfColumn={2} nameFlatProduct='Product_for_you'
                        mode='row3' nameSize={14} priceSize={15} dispriceSize={15} /> :
                    <View style={{ flexDirection: 'column', flexWrap: 'wrap', height: (115 + 55) * 2, }}>{boxEmpty}</View>
            }
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> Highlight
export let Highlight = (props) => {
    const { dataService, navigation, } = props;
    let boxEmpty = (
        [0, 1, 2, 3].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2]}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#ECECEC', width: 115 }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>
            )
        })
    )
    return (
        <View style={stylesMain.FrameBackground2}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                    ไฮไลท์ประจำสัปดาห์</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'HighlightScreen', navigation
                })}>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {
                dataService ?
                    <FlatProduct {...props} dataService={dataService.hi_week} numberOfColumn={1} nameFlatProduct='Second_product'
                        mode='row3' nameSize={14} priceSize={15} dispriceSize={15} /> :
                    <View style={{ flexDirection: 'row' }}>{boxEmpty}</View>
            }
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> NewStore
export let NewStore = (props) => {
    const { dataService, navigation, } = props;
    let boxEmpty = (
        [0, 1].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.BoxStore1Box, { backgroundColor: '#ECECEC' }]}>
                    <View style={stylesMain.BoxStore1Image} />
                </View>
            )
        })
    )
    let dataNewStore = (
        dataService?.dont_miss ?
            dataService?.dont_miss.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index}
                        onPress={() => NavigationNavigateScreen({
                            goScreen: 'Recommend_Store', setData: {
                                id_slide: item.id, uri_path: 'publish_store/store_total', name_path: 'store_total'
                            }, navigation
                        })}
                    >
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                source={{ uri: dataMySQL, }}
                                style={stylesMain.BoxStore1Image}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                    </TouchableOpacity>
                );
            }) : boxEmpty
    );
    return (
        <View style={stylesMain.FrameBackground2}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                    ร้านค้าห้ามพลาด!!่</Text>
            </View>
            <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 3.3, justifyContent: 'space-between' }]}>
                {dataNewStore}
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> Exclusive
export let Exclusive = (props) => {
    const { loadData, navigation } = props;
    let boxEmpty = (
        [0, 1, 2, 3, 4, 5].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2]}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#ECECEC', width: 115 }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>
            )
        })
    );
    return (
        <View style={stylesMain.FrameBackground2}>
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                    สินค้าสุด Exclusive</Text>
                <TouchableOpacity
                    onPress={() => NavigationNavigateScreen({ goScreen: 'ExclusiveScreen', navigation })}>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {
                loadData ?
                    <FlatProduct {...props} dataService={loadData} numberOfColumn={1} nameFlatProduct='ExclusiveProduct'
                        mode='row3' nameSize={14} priceSize={15} dispriceSize={15} /> :
                    <View style={{ flexDirection: 'row' }}>{boxEmpty}</View>
            }
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export function CategoryProduct_new(props) {
    const { dataService, fetchData, getFetchData, navigation, NoStoreReCom, } = props;
    var mix_color = color_up(dataService.bg_m);
    useEffect(() => {
        if (getFetchData[`category_product|${dataService.id_type}`] == undefined ||
            (getFetchData[`category_product|${dataService.id_type}`]?.isFetching)) {
            fetchData({
                dataBody: { id_type: dataService.id_type }, name: `category_product|${dataService.id_type}`,
                uri: `${finip}/home/product_mobile`,
            })
            fetchData({
                dataBody: { promotion: 'promotions_1', id_type: dataService.id_type, }, name: `promo_1|${dataService.id_type}`,
                uri: `${finip}/home/publish_cate_mobile`,
            })
            fetchData({
                dataBody: { promotion: 'promotions_2', id_type: dataService.id_type, }, name: `promo_2|${dataService.id_type}`,
                uri: `${finip}/home/publish_cate_mobile`,
            })
            fetchData({
                dataBody: { promotion: 'shop', id_type: dataService.id_type, }, name: `shop|${dataService.id_type}`,
                uri: `${finip}/home/publish_cate_mobile`,
            })
        }
    }, [getFetchData[`category_product|${dataService.id_type}`] == undefined ||
        (getFetchData[`category_product|${dataService.id_type}`]?.isFetching)]);
    var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image_menu}`;
    let dataCategory = (
        <View style={[stylesMain.FrameBackground2, { backgroundColor: dataService.bg_m, }]}>
            <>
                {
                    <TouchableOpacity onPress={() => NavigationNavigateScreen({
                        goScreen: 'CategoryScreen', setData: { id_type: dataService.id_type }, navigation,
                    })}>
                        <FastImage
                            source={{ uri: dataMySQL, }}
                            style={[stylesMain.CategoryProductImageHead]}
                            resizeMode={FastImage.resizeMode.contain} />
                    </TouchableOpacity>
                }
                <CategoryProductSubProduct {...props} id_type={dataService.id_type} />
            </>
            {
                NoStoreReCom ?
                    <View style={{ marginBottom: 10, }}>
                        <View style={{ marginTop: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 8, color: '#fff' }]}>
                                ร้านนี้ผ่อนได้ </Text>
                        </View>
                        <CategoryProductSubStore {...props} id_type={dataService.id_type} mix_color={mix_color} />
                    </View> :
                    <View style={{ marginBottom: 0, }}>
                        <CategoryProductSubPromotion {...props} id_type={dataService.id_type} mix_color={mix_color} />
                    </View>
            }
        </View>
    );
    return (<View>{dataCategory}</View>);
};
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export function CategoryProduct(props) {
    const { dataService, navigation, NoStoreReCom, } = props;
    let dataCategory = (
        dataService?.category?.map((item, index) => {
            // console.log('CategoryProduct')
            // console.log(item.id_type)
            let productItem = []
            let promo1Item = []
            let promo2Item = []
            let shopItem = []
            dataService.product.map((value) =>
                value.product.map((value2) =>
                    value2.id_type == item.id_type ? productItem.push(value2) : null
                )
            );
            dataService.cate_promotions_1.map((value) =>
                value.map((value2) =>
                    value2.id_type == item.id_type ? promo1Item.push(value2) : null
                )
            );
            dataService.cate_promotions_2.map((value) =>
                value.map((value2) =>
                    value2.id_type == item.id_type ? promo2Item.push(value2) : null
                )
            );
            dataService.cate_shop.map((value) =>
                value.map((value2) =>
                    value2.id_type == item.id_type ? shopItem.push(value2) : null
                )
            );
            // console.log(productItem)
            var mix_color = color_up(item.bg_m);
            if (index < 20 /*getFetchData['category_mobile'].length*/) {
                var dataMySQL = `${finip}/${item.image_path}/${item.image_menu}`;
                return (
                    <View key={index} style={[stylesMain.FrameBackground2, { backgroundColor: item.bg_m, paddingBottom: 3, }]}>
                        <>
                            {
                                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                                    goScreen: 'CategoryScreen', setData: { id_type: item.id_type }, navigation,
                                })}>
                                    <FastImage
                                        source={{ uri: dataMySQL, }}
                                        style={[stylesMain.CategoryProductImageHead]}
                                        resizeMode={FastImage.resizeMode.contain} />
                                </TouchableOpacity>
                            }
                            <CategoryProductSubProduct {...props} dataService={productItem} />
                        </>
                        {
                            NoStoreReCom ?
                                <View style={{ marginBottom: 10, }}>
                                    <View style={{ marginTop: 10, }}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                            marginLeft: 8, color: '#fff'
                                        }]}>ร้านนี้ผ่อนได้</Text>
                                    </View>
                                    <CategoryProductSubStore {...props} mix_color={mix_color} shop={shopItem} />
                                </View> :
                                <View style={{ marginBottom: 0, }}>
                                    <CategoryProductSubPromotion {...props} mix_color={mix_color} promo_1={promo1Item} promo_2={promo2Item}
                                        shop={shopItem} />
                                </View>
                        }
                    </View>
                );
            };
        })
    );
    return (
        <View>{dataCategory}</View>
    );
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export let CategoryProductSubProduct = (props) => {
    const { dataService, id_type, } = props;
    let boxEmpty = (
        [0, 1, 2,].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2new, { borderColor: '#DCDCDC' }]}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#ECECEC', width: 119 }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>
            );
        }));
    return (
        <>
            {
                dataService.length > 0 ?
                    <FlatProduct {...props} numberOfColumn={2} nameFlatProduct='CategoryProduct' mode='row3_new' nameSize={14}
                        priceSize={15} dispriceSize={13} noMarginTop /> :
                    <View>
                        <View style={{ flexDirection: 'row' }}>{boxEmpty}</View>
                        <View style={{ flexDirection: 'row' }}>{boxEmpty}</View>
                    </View>
            }
        </>
    );
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export let CategoryProductSubStore = (props) => {
    const { getFetchData, mix_color, shop } = props;
    let _renderBanner = function (value) {
        var dataMySQL = `${finip}/${value.image_path}/mobile/${value.image}`;
        return (
            <TouchableOpacity activeOpacity={1} key={value.id}>
                <View style={{ width: width * 0.56, height: 57.8, marginLeft: 5, backgroundColor: mix_color }}>
                    <Image
                        source={{ uri: dataMySQL, }}
                        style={[stylesMain.CategoryProductStoreImage, { backgroundColor: mix_color }]}
                        resizeMode='stretch'
                        resizeMethod='resize' />
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <>
            {
                shop &&
                    shop.length > 0 ?
                    <Carousel
                        key={'banner'}
                        renderItem={_renderBanner}
                        data={shop}
                        loop
                        autoplay
                        autoplayInterval={3000}
                        pagination={PaginationLight} /> :
                    <View style={{ width: width * 0.56, height: 57.8, marginLeft: 5, backgroundColor: mix_color }}>
                        <View style={stylesMain.CategoryProductStoreImage} />
                    </View>
            }
        </>
    );
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export let CategoryProductSubPromotion = (props) => {
    const { getFetchData, mix_color, promo_1, promo_2, shop } = props;
    let boxEmptySmall = (
        <View style={[stylesMain.BoxStore1Box3, { width: '100%', marginTop: 3, height: 66, backgroundColor: mix_color, }]} >
            <View style={stylesMain.BoxProduct1Image} />
        </View>
    );
    let dataCategoryProductSubPromotionSmall = (
        promo_2 ?
            promo_2.map((value, index) => {
                var dataMySQL = `${finip}/${value.image_path}/mobile/${value.image}`
                return (
                    <View style={[stylesMain.BoxStore1Box3, { width: '100%', marginTop: 3, height: 66, }]} key={index} >
                        {
                            value &&
                            <Image
                                source={{ uri: dataMySQL, }}
                                resizeMode='cover'
                                resizeMethod='resize'
                                style={stylesMain.BoxProduct1Image} />
                        }
                    </View>
                );
            }) :
            boxEmptySmall
    );
    let boxEmptyBig = (
        <View style={[stylesMain.BoxStore1Box2, { borderWidth: 0, marginTop: 3, marginBottom: 3, backgroundColor: mix_color, }]}>
            <View style={stylesMain.BoxProduct1Image} />
        </View>
    );
    let dataCategoryProductSubPromotionBig = (
        promo_1 ?
            promo_1.map((value, index) => {
                var dataMySQL = `${finip}/${value.image_path}/mobile/${value.image}`;
                return (
                    <View style={[stylesMain.BoxStore1Box2, { borderWidth: 0, marginTop: 3, marginBottom: 3, }]} key={index}>
                        {
                            value &&
                            <Image
                                source={{ uri: dataMySQL, }}
                                resizeMode='cover'
                                resizeMethod='resize'
                                style={stylesMain.BoxProduct1Image} />
                        }
                    </View>
                );
            }) :
            boxEmptyBig
    );
    return (
        <>
            <View style={[stylesMain.FlexRow, { width: '100%', marginTop: 2 }]}>
                <View style={{ width: width * 0.56, flexDirection: 'column', marginRight: 6 }}>
                    {dataCategoryProductSubPromotionSmall}
                    <View style={{ width: width * 0.56, marginTop: 6 }}>
                        <CategoryProductSubStore {...props} mix_color={mix_color} shop={shop} />
                    </View>
                </View>
                {dataCategoryProductSubPromotionBig}
            </View>
        </>
    );
};
///----------------------------------------------------------------------------------------------->>>> Second_product
export let Second_product = (props) => {
    const { dataService, Header_Second, navigation, } = props;
    let renderItem1 = (
        dataService?.list_store2_1 ?
            dataService.list_store2_1.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <View key={index} style={{ width: width * 0.64, height: 196 }}>
                        <Image
                            source={{ uri: dataMySQL, }}
                            style={stylesMain.bigSlideImage}
                            resizeMode='cover'
                            resizeMethod='resize' />
                    </View>
                );
            }) :
            <View style={{ width: width * 0.64, height: 196, }}>
                <View style={[stylesMain.bigSlideImage, { backgroundColor: '#ECECEC' }]}>
                </View>
            </View >
    );
    let boxEmptyBody = (
        [0, 1,].map((_, index) => {
            return (
                <View key={index} style={stylesMain.Second_StoreFin_ImageB_T}>
                    <View style={{ width: width * 0.32, height: 130 }}>
                        <View style={[stylesMain.litleSlideImage, { backgroundColor: '#ECECEC' }]}></View>
                    </View>
                </View>
            );
        })
    )
    let renderItem2 = (
        dataService?.list_store2_2 ?
            dataService.list_store2_2.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <View key={index} style={stylesMain.Second_StoreFin_ImageB_T}>
                        <View style={{ width: width * 0.32, height: 130 }}>
                            <Image
                                source={{ uri: dataMySQL, }}
                                style={stylesMain.litleSlideImage}
                                resizeMode='stretch'
                                resizeMethod='resize' />
                        </View>
                    </View>
                );
            }) :
            boxEmptyBody
    );
    let boxEmptyHeader = (
        [0, 1, 2,].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2new, { borderColor: '#DCDCDC' }]}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#ECECEC', width: 119 }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
                        </View>
                    </View>
                    <View style={{ height: 55, paddingHorizontal: 3 }} />
                </View>
            )
        })
    )
    var header_url;
    dataService?.mobile_bar.map((item) => { header_url = `${finip}/${item.image_path}/${item.image}` });
    let Second_Storeheader = (
        <View key={'mobile_bar'} style={[stylesMain.FrameBackground2, { marginTop: 0, borderBottomWidth: null }]}>
            <View>
                {
                    Header_Second ?
                        <View>
                            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                มือสองลดราคา</Text>
                        </View> :
                        dataService &&
                            dataService.mobile_bar ?
                            <TouchableOpacity activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'SecondScreen', setData: { selectedIndex: 0 }, navigation,
                                })}>
                                <Image
                                    style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                                    source={{ uri: header_url }}
                                    resizeMode='cover'
                                    resizeMethod='resize' />
                            </TouchableOpacity> :
                            <View style={[stylesMain.CategoryProductImageHead, {
                                borderColor: '#DCDCDC', borderWidth: 1, borderBottomWidth: 0.5, marginTop: 0, backgroundColor: '#ECECEC'
                            }]}></View>
                }
                {
                    dataService ?
                        <FlatProduct {...props} dataService={dataService.product_second} numberOfColumn={2} noMarginTop
                            nameFlatProduct='Second_product' mode='row3_new' nameSize={14} priceSize={15} dispriceSize={15} /> :
                        <View>
                            <View style={{ flexDirection: 'row' }}>{boxEmptyHeader}</View>
                            <View style={{ flexDirection: 'row' }}>{boxEmptyHeader}</View>
                        </View>
                }
            </View>
        </View>
    );
    let Second_Storebody = (
        <View key={'Header_Second'} style={stylesMain.Second_StoreFin}>
            <View style={stylesMain.Second_StoreFin_BoxHead}>
                {
                    Header_Second ?
                        <View>
                            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                ร้านมือสองลดราคา</Text>
                        </View> :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                            ร้านค้ามือสองแนะนำโดย FIN </Text>
                }
                <View>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => NavigationNavigateScreen({
                            goScreen: 'SecondScreen', setData: { selectedIndex: 1 }, navigation,
                        })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={stylesMain.Second_StoreFin_Image}>
                <View key={'list_store2_1'} style={stylesMain.Second_StoreFin_ImageA}>
                    <View>{renderItem1}</View>
                </View>
                <View key={'list_store2_2'}>
                    <View style={stylesMain.Second_StoreFin_ImageB}>{renderItem2}</View>
                </View>
            </View>
        </View>
    );
    let boxEmptyFooter = (
        [0, 1].map((_, index) => {
            return (
                <View key={index} style={[stylesMain.CategoryProductStoreBox]}>
                    <View style={[stylesMain.CategoryProductStoreImage, { backgroundColor: '#ECECEC' }]}></View>
                </View>
            )
        })
    )
    let _renderFooter = (item, index) => {
        var dataMySQL = `${finip}/${item.item.image_path}/${item.item.image}`;
        var dataMySQL2;
        item.item2 && (
            dataMySQL2 = `${finip}/${item.item2.image_path}/${item.item2.image}`
        );
        return (
            <TouchableOpacity activeOpacity={1} key={index} style={stylesMain.FlexRow}>
                <View style={[stylesMain.CategoryProductStoreBox]}>
                    <Image
                        source={{ uri: dataMySQL, }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
                <View style={[stylesMain.CategoryProductStoreBox]}>
                    <Image
                        source={{ uri: dataMySQL2, }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
            </TouchableOpacity>
        );
    };
    var item = [];
    if (dataService?.mobile_slide)
        for (var n = 0; n < dataService.mobile_slide.length; n += 2) {
            item.push({ item: dataService.mobile_slide[n], item2: dataService.mobile_slide[n + 1] });
        };
    let Second_Storefooter = (
        <View key={'mobile_slide'} style={stylesMain.Second_Storefooter}>
            <ScrollView horizontal>
                <View style={stylesMain.FlexRow}>
                    {
                        dataService?.mobile_slide ?
                            <Carousel
                                renderItem={_renderFooter}
                                data={item}
                                loop
                                autoplay
                                autoplayInterval={3000}
                                pagination={PaginationLight} /> :
                            <View style={stylesMain.FlexRow}>{boxEmptyFooter}</View>
                    }
                </View>
            </ScrollView>
        </View>
    );
    return (
        <View style={stylesMain.FrameBackground2}>{[Second_Storeheader, Second_Storebody, Second_Storefooter]}</View>
    );
};
///----------------------------------------------------------------------------------------------->>>>
export let Fin_Mall = (props) => {
    const { dataService, navigation, } = props;
    let productFinmail = (type) => {
        return type.map((item, index) => {
            if (index < 2) {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <View style={{ width: width * 0.22, marginTop: 10, paddingLeft: 2.5 }} key={index}>
                        <View style={{ height: height * 0.115, width: width * 0.20, backgroundColor: '#FFFFFF', padding: 5 }}>
                            <FastImage
                                style={stylesMain.Popular_image_Box}
                                source={{ uri: dataMySQL, }}
                                resizeMode={FastImage.resizeMode.stretch} />
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: width * 0.20 }]}>
                            <Text numberOfLines={1} style={[stylesFont.FontSize8, stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>
                                {item.name}</Text>
                            <NumberFormat
                                value={item.full_price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'฿'}
                                renderText={value =>
                                    <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyBold,
                                    { color: '#FFFFFF' }
                                    ]}>{value}</Text>
                                } />
                        </View>
                    </View>
                );
            }
        });
    };
    return (
        <View style={[stylesMain.FlexRow, stylesMain.FinMall_Box]}>
            <View style={{ width: width * 0.48, backgroundColor: '#FFFFFF', paddingHorizontal: 5 }}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>Fin Mall</Text>
                <View style={{ backgroundColor: '#691F50', borderRadius: 5, padding: 3, justifyContent: 'space-between' }}>
                    {
                        dataService ?
                            <TouchableOpacity
                                key={'product_hit'}
                                activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({ goScreen: 'FinMallScreen', navigation })}>
                                <View style={stylesMain.FlexRow}>
                                    {productFinmail(dataService.product_hit)}
                                </View>
                            </TouchableOpacity> :
                            <View style={stylesMain.FlexRow}>
                                {
                                    [0, 1].map((_, index) => {
                                        return (
                                            <View style={{ width: width * 0.22, marginTop: 10, paddingLeft: 2.5 }} key={index}>
                                                <View style={{
                                                    height: height * 0.115, width: width * 0.20, backgroundColor: '#ECECEC', padding: 5
                                                }}>
                                                    <View style={stylesMain.Popular_image_Box} />
                                                </View>
                                                <View style={[stylesMain.ItemCenter, { width: width * 0.20 }]}>
                                                    <Text numberOfLines={1} style={[stylesFont.FontSize8, stylesFont.FontFamilyBold, {
                                                        color: '#691F50'
                                                    }]}>NaN</Text>
                                                    <NumberFormat
                                                        value={0}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'฿'}
                                                        renderText={value =>
                                                            <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8,
                                                            stylesFont.FontFamilyBold, { color: '#691F50' }
                                                            ]}>{value}</Text>
                                                        } />
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                    }
                </View>
            </View>
            <View style={{ width: width * 0.48, backgroundColor: '#FFFFFF', paddingHorizontal: 5 }}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>สินค้าสุด Exclusive</Text>
                <View style={{ backgroundColor: '#19508B', padding: 3, borderRadius: 5, justifyContent: 'space-between' }}>
                    {
                        dataService ?
                            <TouchableOpacity
                                key={'exclusive'}
                                activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({ goScreen: 'ExclusiveScreen', navigation })}>
                                <View style={stylesMain.FlexRow}>
                                    {productFinmail(dataService.exclusive)}
                                </View>
                            </TouchableOpacity> :
                            <View style={stylesMain.FlexRow}>
                                {
                                    [0, 1].map((_, index) => {
                                        return (
                                            <View style={{ width: width * 0.22, marginTop: 10, paddingLeft: 2.5 }} key={index}>
                                                <View style={{
                                                    height: height * 0.115, width: width * 0.20, backgroundColor: '#ECECEC', padding: 5
                                                }}>
                                                    <View style={stylesMain.Popular_image_Box} />
                                                </View>
                                                <View style={[stylesMain.ItemCenter, { width: width * 0.20 }]}>
                                                    <Text numberOfLines={1} style={[stylesFont.FontSize8, stylesFont.FontFamilyBold, {
                                                        color: '#19508B'
                                                    }]}>NaN</Text>
                                                    <NumberFormat
                                                        value={0}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'฿'}
                                                        renderText={value =>
                                                            <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8,
                                                            stylesFont.FontFamilyBold, { color: '#19508B' }
                                                            ]}>{value}</Text>
                                                        } />
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                    }
                </View>
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> FIN_Supermarket
export let FIN_Supermarket = (props) => {
    const { dataService, navigation, } = props;
    const item = [
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food1.jpg` },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food2.jpg` },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food3.jpg` },
        { image: `${ip}/MySQL/uploads/Banner_Super/600-225_food4.jpg` },
    ]
    let _renderItem = (item, index) => {
        return (
            <View key={index} style={{ width, height: 'auto', aspectRatio: 2.5, marginBottom: 10 }}>
                <Image
                    source={{ uri: item.image, }}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='cover'
                    resizeMethod='resize' />
            </View>
        );
    };
    return (
        <View style={stylesMain.FrameBackground2}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>FIN Supermarket</Text>
            <View>
                <Carousel
                    renderItem={_renderItem}
                    data={item}
                    loop
                    autoplay
                    autoplayInterval={4000}
                    pagination={PaginationLight}
                />
            </View>
            <View style={stylesMain.Supermarket_Product}>
                {
                    dataService &&
                    <FlatProduct {...props} dataService={dataService.product_hit} numberOfColumn={1}
                        radiusBox={5} nameFlatProduct='FIN_Supermarket' mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                }
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.Supermarket_Store]}>
                <TouchableOpacity
                    onPress={() => NavigationNavigateScreen({ goScreen: 'FINSupermarket', navigation })}
                    style={{ width: width * 0.60, marginRight: 5 }}>
                    <Image
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Banner_Super/Banner_L/775-325_food1.jpg`, }}
                        resizeMode='stretch'
                        resizeMethod='resize' />
                </TouchableOpacity>
                <View style={{ width: width * 0.36, justifyContent: 'space-between' }}>
                    <View style={stylesMain.Supermarket_Image}>
                        <Image
                            style={stylesMain.BoxProduct1Image}
                            source={{ uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food1.jpg`, }}
                            resizeMode='stretch'
                            resizeMethod='resize' />
                    </View>
                    <View style={stylesMain.Supermarket_Image}>
                        <Image
                            style={stylesMain.BoxProduct1Image}
                            source={{ uri: `${ip}/MySQL/uploads/Banner_Super/Banner_M/430-180_food4.jpg`, }}
                            resizeMode='stretch'
                            resizeMethod='resize' />
                    </View>
                </View>
            </View>
            <View style={stylesMain.Supermarket_BrandBox}>
                <View style={stylesMain.Supermarket_Brand_Image}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/logo-foodland.png`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
                <View style={stylesMain.Supermarket_Brand_Image}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/logo-maxvalu.png`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
            </View>
            <FastImage
                style={stylesMain.Banner_Bar_image}
                source={{ uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 333.jpg` }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={stylesMain.FrameBackgroundTextBox}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                    แบรนด์แนะนำ</Text>
                <TouchableOpacity>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal >
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                    <FastImage
                        style={{ height: 50, width: 100 }}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                    <View style={[stylesMain.ItemCenter]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>LOOKS</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>
                            สุดยอดแห่งบิวตี้ไอเท็มและสินค้าเพื่อสุขภาพ</Text>
                    </View>
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                    <FastImage
                        style={{ height: 50, width: 100 }}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                    <View style={[stylesMain.ItemCenter]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Betagro</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>เบทาโกร</Text>
                    </View>
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                    <FastImage
                        style={{ height: 50, width: 100 }}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                    <View style={[stylesMain.ItemCenter]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Exclusive Brands</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>สินค้าคุณภาพ คุ้มค่า คุ้มราคา</Text>
                    </View>
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                    <FastImage
                        style={{ height: 50, width: 100 }}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                    <View style={[stylesMain.ItemCenter]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Ole</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>หวานสดใสหอมติดผิว</Text>
                    </View>
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                    <FastImage
                        style={{ height: 50, width: 100 }}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                    <View style={[stylesMain.ItemCenter]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Ole</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>หวานสดใสหอมติดผิว</Text>
                    </View>
                </View>
            </ScrollView>
            <ScrollView horizontal >
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand06.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
                <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand07.jpg`, }}
                        resizeMode={FastImage.resizeMode.stretch} />
                </View>
            </ScrollView>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export let TodayProduct = (props) => {
    const { loadData, noTitle, onShow, prepath, typeip, } = props;
    onShow && console.log(onShow);
    return (
        <View style={[stylesMain.BoxProduct2, { backgroundColor: 'transparent' }]}>
            {
                noTitle ? null : <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                    สินค้าคัดสรรเพื่อคุณ</Text>
            }
            <View style={stylesMain.BoxProduct2BoxProduct}>
                {
                    loadData &&
                    <ProductBox {...props} dataService={loadData} typeip={typeip ? 'ip' : 'fin'} mode='row3colall' pointerUrl='DetailScreen'
                        pointerid_store nameSize={14} priceSize={15} dispriceSize={15} prepath={prepath ?? null} />
                }
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>>
export class Botton_PopUp_FIN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeShow: true,
            activeSliding: false,
            rotate: 0,
        };
        this._translateX = new Animated.Value(0);
        this._translateY = new Animated.Value(0);
        this._lastOffset = { x: 0, y: 0 };
        this._onGestureEvent = Animated.event(
            [{ nativeEvent: { translationX: this._translateX, translationY: this._translateY, }, },],
            { useNativeDriver: false }
        );
    };
    _onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this._lastOffset.x += event.nativeEvent.translationX;
            this._lastOffset.y += event.nativeEvent.translationY;
            this._translateX.setOffset(this._lastOffset.x < -(width * 0.5) ? -(width - 68) : 0);
            this._translateX.setValue(0);
            this.setState({ rotate: this._lastOffset.x < -(width * 0.5) ? 1 : 0 })
            this._translateY.setOffset(this._lastOffset.y > 0 ? 0 :
                this._lastOffset.y < -(height - 185) ? -(height - 185) : this._lastOffset.y);
            this._translateY.setValue(0);
        };
    };
    render() {
        const { activeSliding, activeShow } = this.state;
        return (
            <>
                {
                    activeShow == true &&
                    <PanGestureHandler
                        {...this.props}
                        onGestureEvent={this._onGestureEvent}
                        onHandlerStateChange={this._onHandlerStateChange}>
                        <Animated.View style={{
                            elevation: 1, height: 60, width: 60, left: width - 65, marginTop: -60,
                            transform: [{ translateX: this._translateX }, { translateY: this._translateY },]
                        }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ activeSliding: !activeSliding })}>
                                <FastImage
                                    style={[stylesMain.Botton_PopUp_Image, {
                                        backfaceVisibility: 'hidden', backgroundColor: '#fff', borderRadius: 60, borderColor: '#DCDCDC',
                                        borderWidth: 1, marginBottom: -20
                                    }]}
                                    source={require('../../icon/1589958803447.png')}
                                    resizeMode={FastImage.resizeMode.contain} />
                                <TouchableOpacity onPress={() => this.setState({ activeShow: !activeShow })} style={{
                                    width: 20, height: 20, left: 40, bottom: 40
                                }}>
                                    <IconAntDesign name='closecircle' size={20} style={{ elevation: 1, color: 'red' }} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </Animated.View>
                    </PanGestureHandler>
                }
                <SlidingView
                    disableDrag
                    componentVisible={activeSliding}
                    containerStyle={{ backgroundColor: null, width: '100%', top: '50%' }}
                    position="right">
                    <TouchableOpacity onPress={() => this.setState({ activeSliding: !activeSliding })}>
                        <View style={stylesMain.Botton_PopUp_Box}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                source={require('../../images/0044-03.png')}
                                resizeMode={FastImage.resizeMode.contain}>
                                <View style={stylesMain.Botton_PopUp_Text}>
                                    <Text style={[stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>สวัสดีครับ</Text>
                                    <Text style={[stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>ต้องการให้น้องฟินช่วยด้านใดดีครับ</Text>
                                </View>
                            </FastImage>
                        </View>
                    </TouchableOpacity>
                </SlidingView>
            </>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>>
export let Category_Image_Total = (props) => {
    const { dataService, sizeBox } = props;
    return (
        <View style={{ marginTop: 10 }}>
            <View style={{ height: 'auto', aspectRatio: 3.5, }}>
                {
                    dataService.S.map((value, index) => {
                        return (
                            <FastImage
                                key={index}
                                style={stylesMain.BoxProduct1Image}
                                source={{ uri: `${ip}/MySQL/${value.image_path}/${value.image}`, }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        )
                    })
                }
            </View>
            <View style={[stylesMain.FlexRow, {
                width: '100%', height: 'auto', aspectRatio: 3, justifyContent: 'space-between', marginTop: 5
            }]}>
                {
                    dataService.M.map((value, index) => {
                        return (
                            <View key={index} style={{ width: width * 0.49 }}>
                                <FastImage
                                    style={stylesMain.BoxProduct1Image}
                                    source={{ uri: `${ip}/MySQL/${value.image_path}/${value.image}`, }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        )
                    })
                }
            </View>
            <View style={[stylesMain.FlexRow, {
                width: '100%', height: 'auto', aspectRatio: 2.5, justifyContent: 'space-between', marginTop: 5
            }]}>
                {
                    dataService.L.map((value, index) => {
                        return (
                            <View key={index} style={{ width: width * 0.49 }}>
                                <FastImage
                                    style={stylesMain.BoxProduct1Image}
                                    source={{ uri: `${ip}/MySQL/${value.image_path}/${value.image}`, }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>>
export let Not_Internet = (props) => {
    const { navigation } = props
    return (
        <View style={stylesMain.ItemCenter}>
            <FastImage style={{ height: 200, width: 200 }}
                source={{ uri: `${ip}/mysql/uploads/icon_5/wifi-connected-png-8.png`, }}
            />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: 300, textAlign: 'center', color: '#969BA0' }]}>WHOOPS! ดูเหมือนว่าจะมีปัญหาในการเชื่อมต่อเซิร์ฟเวอร์ ลองพยายามตรวจสอบ
                การเชื่อมต่ออินเตอร์เน็ตแล้วลองใหม่อีกครั้ง </Text>
            <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'goBack', navigation })}>
                <View style={[stylesMain.ItemCenter, { padding: 10, backgroundColor: mainColor, borderRadius: 5, marginTop: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>โหลดอีกครั้ง</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};