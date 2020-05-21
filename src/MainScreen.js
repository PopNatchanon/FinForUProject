///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Animated, BackHandler, Dimensions, SafeAreaView,
    // ScrollView, 
    Text, TextInput, TouchableOpacity, View, YellowBox, Image
} from 'react-native';
import {
    PanGestureHandler,
    ScrollView,
    State,
} from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import BottomSheet from "react-native-raw-bottom-sheet";
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import CookieManager from '@react-native-community/cookies';
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
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    BrowerScreen, GetServices, GetData, ProductBox, Toolbar, TabBar, LoadingScreen, RenderHeader,
    FlatProduct, FlatComponent, NavigationNavigateScreen,
} from './customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main // complete_last_function
export default class MainScreen extends React.PureComponent {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeDataService2: true,
            activeExit: true,
            activeLoading: true,
            dataService: [],
        };
    };
    componentDidMount() {
        this.SetTimeLoading = setTimeout(() => this.setState({ activeLoading: false }), 8000);
    };
    componentWillUnmount() {
        this.abortController.abort()
        clearTimeout(this.SetTimeLoading);
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    getData2 = (dataService2) => {
        this.setState({ dataService2, activeDataService2: false });
    };
    render() {
        const { navigation } = this.props;
        const { activeDataService, activeDataService2, activeLoading, dataService, dataService2 } = this.state;
        const browerProps = navigation.getParam('browerProps');
        var uri = `${finip}/home/publish_mobile`;
        let itemT = [
            /////--------------------------------------------->>>Start
            {
                nameComponent: 'Slide',
                renderComponent: <Slide />
            },
            {
                nameComponent: 'Guarantee',
                renderComponent: <Guarantee />
            },
            {
                nameComponent: 'Category',
                renderComponent: <Category navigation={navigation} />
            },
            {
                nameComponent: 'Trend_Hit',
                renderComponent: <Trend_Hit />
            },
            {
                nameComponent: 'Button_Bar',
                renderComponent: <Button_Bar navigation={navigation} />
            },
            {
                nameComponent: 'FlashSale',
                renderComponent: <FlashSale navigation={navigation} />
            },
            {
                nameComponent: 'Fin_Service',
                renderComponent: <Fin_Service navigation={navigation} />
            },
            {
                nameComponent: 'Recommend_Brand',
                renderComponent: <Recommend_Brand navigation={navigation} loadData={dataService.brand} />
            },
            {
                nameComponent: 'BannerBar_TWO',
                renderComponent: <BannerBar_TWO />
            },
            {
                nameComponent: 'Exclusive',
                renderComponent: <Exclusive navigation={navigation} loadData={dataService.exclusive} />
            },
            {
                nameComponent: 'NewStore',
                renderComponent: <NewStore navigation={navigation} loadData={dataService.dont_miss} />
            },
            {
                nameComponent: 'Fin_Mall',
                renderComponent: <Fin_Mall navigation={navigation} loadData={{ product_hit: dataService.product_hit }} />
            },
            {
                nameComponent: 'BannerBar_ONE',
                renderComponent: <BannerBar_ONE />
            },
            {
                nameComponent: 'Highlight',
                renderComponent: <Highlight navigation={navigation} loadData={dataService.hi_week} />
            },
            {
                nameComponent: 'PromotionPopular',
                renderComponent: <PromotionPopular navigation={navigation} loadData={dataService.recommend_store} />
            },
            {
                nameComponent: 'Popular_store',
                renderComponent: <Popular_store navigation={navigation} loadData={dataService.store_good} />
            },
            {
                nameComponent: 'Popular_product',
                renderComponent: <Popular_product navigation={navigation} loadData={{
                    product_hit: dataService.product_hit, best_price: dataService.best_price,
                    best_sale: dataService.best_sale, best_cool: dataService.best_cool
                }} />
            },
            {
                nameComponent: 'Product_for_you',
                renderComponent: <Product_for_you navigation={navigation} loadData={dataService.for_you} />
            },
            // {
            //     nameComponent: 'CategoryProduct',
            //     renderComponent: <CategoryProduct navigation={navigation} />
            // },
            // {
            //     nameComponent: 'Category_Image_Total',
            //     renderComponent: <Category_Image_Total sizeBox={1} />
            // },
            // {
            //     nameComponent: 'Category_Image_Total',
            //     renderComponent: <Category_Image_Total sizeBox={2} />
            // },
            {
                nameComponent: 'Second_product',
                renderComponent: <Second_product navigation={navigation} loadData={{
                    product_second: dataService.product_second, list_store2_1: dataService.list_store2_1,
                    list_store2_2: dataService.list_store2_2, list_store2_3: dataService.list_store2_3,
                    mobile_bar: dataService.mobile_bar, mobile_slide: dataService.mobile_slide,
                }} />
            },
            {
                nameComponent: 'BannerBar_THREE',
                renderComponent: <BannerBar_THREE />
            },
            {
                nameComponent: 'FIN_Supermarket',
                renderComponent: <FIN_Supermarket navigation={navigation} loadData={{ product_hit: dataService.product_hit }} />
            },
            {
                nameComponent: 'TodayProduct',
                renderComponent: <TodayProduct navigation={navigation} loadData={dataService.for_you2} />
            },
            /////--------------------------------------------->>>End
        ];
        // this.FlatMainScreen && console.log(this.FlatMainScreen.recordInteraction())
        activeDataService == true && GetServices({
            abortController: this.abortController, uriPointer: uri, getDataSource: this.getData.bind(this)
        });
        const uri2 = `${ip}/MySQL/DataServiceMain.php`
        const dataBody2 = {
            type: 'categorylist'
        }
        activeDataService2 == true && GetServices({ uriPointer: uri2, dataBody: dataBody2, getDataSource: this.getData2.bind(this) })
        var data = []
        var S
        var M
        var L
        if (dataService2) {
            for (var n = 0; n < dataService2.length; n = n + 5) {
                S = [dataService2[0 + n]]
                M = [dataService2[1 + n], dataService2[2 + n]]
                L = [dataService2[3 + n], dataService2[4 + n]]
                data.push({ S, M, L })
            }
        }
        data.map((value, index) => {
            return itemT.splice(18 + index, 0, {
                nameComponent: `Category_Image_Total${index}`,
                renderComponent: <Category_Image_Total dataService={value} />
            })
        })
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                {
                    (activeDataService == true || activeLoading == true) &&
                    <LoadingScreen key='LoadingScreen' />
                }
                <AppBar navigation={navigation} style={{ flex: 5, }} />
                <FlatComponent componentPage='MainScreen' component={itemT} onLayout={({
                    nativeEvent: { layout: { height } } }) => this.heightFlat = height} />
                <Botton_PopUp_FIN />
                <Toolbar navigation={navigation} style={{ flex: 5, }} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    };
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
    };
    componentDidMount() {
        YellowBox.ignoreWarnings(["Require cycle:", "*"]);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    };
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    };
    componentDidCatch() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }
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
    handleBackButton = () => {
        const { backClickCount } = this.state;
        const { navigation } = this.props;
        var routeProps = navigation.dangerouslyGetParent().state.routes.length;
        return routeProps == 1 ? (
            backClickCount == 1 ? BackHandler.exitApp() : this._spring(),
            true
        ) : (
                navigation.pop(),
                true
            );
    };
    render() {
        return (
            <Animatable.View style={[stylesMain.animatedView, { opacity: this.springValue, transform: [{ translateY: this.transformValue }] }]}>
                <View style={stylesMain.animatedViewSub}>
                    <Text style={[stylesMain.exitTitleText, stylesFont.FontFamilyText]}>กดอีกครั้งเพื่อออก</Text>
                </View>
            </Animatable.View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> AppBar ค้นหา
export class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRefresh: true,
            activeGetCurrentUser: true,
            text: '',
        };
    };
    componentDidMount() {
        const { activeGetCurrentUser, } = this.state;
        activeGetCurrentUser == true && GetData({ getSource: this.getSource.bind(this), getUser: true, });
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser });
    };
    getData = (dataService) => {
        this.setState({ activeRefresh: false, dataService });
    }
    setText = (text) => {
        this.setState({ text });
    };
    setSubmit = () => {
        const { navigation } = this.props
        const { text, } = this.state;
        text != undefined && text != ' ' &&
            NavigationNavigateScreen({ goScreen: 'SearchScreen', setData: { SearchText: text }, navigation });
    };
    render() {
        const { ABDColor, ABGColor, AIColor, leftBar, navigation, rightBar, searchBar, SearchText } = this.props;
        const { activeRefresh, currentUser, dataService, text, } = this.state;
        const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo);
        const AIconFeather = Animatable.createAnimatableComponent(IconFeather);
        const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5);
        var uri;
        var dataBody;
        currentUser && (
            uri = `${finip}/cart/cart_mobile`,
            dataBody = {
                id_customer: currentUser.id_customer
            }
        );
        dataService && console.log(dataService.cart_list.length)
        currentUser && dataBody && activeRefresh == true &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), showConsole: 'AppBar' });
        return (
            <Animatable.View style={[stylesMain.Appbar, stylesMain.FlexRow, {
                backgroundColor: ABGColor ? ABGColor : '#fff',
                borderColor: ABDColor ? ABDColor : '#ECECEC',
            }]}>
                {[

                    leftBar == 'backarrow' &&
                    <View key={'backarrow'} style={{ flex: 5 }}>
                        <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40, height: 50 }]}
                            activeOpacity={1}
                            onPress={() => NavigationNavigateScreen({ goScreen: 'goBack', navigation })}>
                            <AIconEntypo name="chevron-left" size={30} style={{ color: AIColor ? AIColor : '#111', }} />
                        </TouchableOpacity>
                    </View>,
                    searchBar ?
                        <TouchableOpacity key={'searchBar'} activeOpacity={1}
                        // onPress={() => NavigationNavigateScreen('goBack')}
                        >
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                                {
                                    /* <FastImage
                                        style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                        source={require('../images/sj.png')}
                                        resizeMode={FastImage.resizeMode.stretch} /> */
                                }
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                    width:
                                        rightBar == 'storebar' ?
                                            leftBar == 'backarrow' ?
                                                width - 140 :
                                                width - 120 :
                                            rightBar == 'chat' ?
                                                width - 140 :
                                                width - 120,
                                }]}>
                                    <TextInput
                                        style={[
                                            stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter
                                        ]}
                                        placeholder="ค้นหาสินค้า/ร้านค้า"
                                        value={text}
                                        maxLength={30}
                                        onSubmitEditing={this.setSubmit}
                                        onChangeText={this.setText} />
                                </View>
                                <IconAntDesign name="search1" size={20}
                                    style={[stylesMain.ItemCenterVertical, { marginRight: 4 }]} />
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity key={'searchBar'} activeOpacity={1} onPress={
                            () => NavigationNavigateScreen({
                                goScreen: SearchText ? 'goBack' : 'SearchScreen', setData: { modeStore: false }, navigation
                            })}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical, { flex: 90 }]}>
                                {
                                    /* <FastImage
                                        style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                        source={require('../images/sj.png')}
                                        resizeMode={FastImage.resizeMode.stretch} /> */
                                }
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                    height: 30,
                                    width:
                                        rightBar == 'storebar' ?
                                            leftBar == 'backarrow' ?
                                                width - 140 :
                                                width - 120 :
                                            rightBar == 'chat' ?
                                                width - 140 :
                                                width - 120,
                                }]}>
                                    <Text style={[
                                        stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter,
                                        stylesMain.ItemCenterVertical
                                    ]}>
                                        {
                                            SearchText ?
                                                SearchText :
                                                'ค้นหาสินค้า/ร้านค้า'
                                        }</Text>
                                </View>
                                <IconAntDesign name="search1" size={20} style={[stylesMain.ItemCenterVertical, {
                                    marginRight: 4
                                }]} />
                            </View>
                        </TouchableOpacity>,
                    rightBar == 'storebar' ?
                        <View key={'storebar'} style={[stylesMain.ItemCenter, stylesMain.FlexRow, { flex: 10 }]}>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40, flex: 50 }]}
                                onPress={null/*() => navigation.push('CartScreen')*/}>
                                <AIconFeather name="filter" size={25} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40, flex: 50 }]}
                                onPress={null/*() => navigation.push('CartScreen')*/}>
                                <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                        </View> :
                        <View key={'storebar'} style={[stylesMain.FlexRow, stylesMain.ItemCenterVertical, { flex: 10 }]}>
                            {
                                leftBar == 'backarrow' ?
                                    rightBar == 'chat' &&
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40, flex: 50 }]}
                                        onPress={
                                            currentUser ?
                                                () => NavigationNavigateScreen({
                                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation
                                                }) :
                                                () => NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true })}>
                                        <IconAntDesign name="message1" size={25} />
                                    </TouchableOpacity> :
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40, flex: 50 }]}
                                        onPress={
                                            currentUser ?
                                                () => NavigationNavigateScreen({
                                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation
                                                }) :
                                                () => NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true })}>
                                        <IconAntDesign name="message1" size={25} />
                                    </TouchableOpacity>
                            }
                            <TouchableOpacity style={[stylesMain.ItemCenter, {
                                width:
                                    leftBar == 'backarrow' ?
                                        rightBar == 'chat' ?
                                            40 :
                                            50 :
                                        40,
                                flex: 50
                            }]} onPress={
                                currentUser ?
                                    () => NavigationNavigateScreen({ goScreen: 'CartScreen', navigation }) :
                                    () => NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true })}>
                                {
                                    dataService && dataService.cart_list.length > 0 &&
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, {
                                        backgroundColor: 'red', color: '#fff', width: 17, height: 17, borderRadius: 15, textAlign: 'center',
                                        textAlignVertical: 'center', position: 'absolute', elevation: 1, left: 25, bottom: 15
                                    }]}>{dataService.cart_list.length}</Text>
                                }
                                <IconAntDesign name="shoppingcart" size={25} />
                            </TouchableOpacity>
                        </View>
                ]}
            </Animatable.View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> AppBar สีคราม
export class AppBar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
        };
    };
    componentDidMount() {
        const { activeGetCurrentUser, } = this.state;
        activeGetCurrentUser == true && GetData({ getSource: this.getSource.bind(this), getUser: true, });
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser });
    };
    setText = (text) => {
        this.setState({ text });
    };
    deleteFunction = () => {
        const { propsFunction } = this.props;
        propsFunction();
    };
    render() {
        const {
            backArrow, backArrowColor, ButtomDeleteAll, chatBar, colorBar, deleteBar, getActivePost, goToTop, menuBar, navigation, postBar,
            saveBar, searchBar, settingBar, storeBar, titleHead, backNavigation, UpBankBar,
        } = this.props;
        const { currentUser, } = this.state;
        return (
            <View style={
                colorBar ?
                    colorBar :
                    menuBar ?
                        stylesStore.AppbarMenu :
                        stylesStore.Appbar}>
                <View style={stylesMain.FlexRow}>
                    {
                        backArrow &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 50, height: 50 }]}
                            activeOpacity={1}
                            onPress={
                                goToTop ?
                                    () => NavigationNavigateScreen({ goScreen: 'popToTop', navigation }) :
                                    backNavigation ?
                                        () => ([
                                            navigation.state.params.backNavigation('goBack'),
                                            NavigationNavigateScreen({ goScreen: 'goBack', navigation })
                                        ]) :
                                        () => NavigationNavigateScreen({ goScreen: 'goBack', navigation })
                            }>
                            <IconEntypo style={[stylesStore.Icon_appbar, {
                                color: backArrowColor ? backArrowColor : '#ffffff'
                            }]} name="chevron-left" size={30} />
                        </TouchableOpacity>
                    }
                    <Text style={[
                        stylesStore.Text_appbar, stylesFont.FontSize3, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical
                    ]}>
                        {titleHead && titleHead}</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    {[
                        searchBar &&
                        <TouchableOpacity
                            key={'searchBar'}
                            style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'SearchScreen', setData: { modeStore: false }, navigation
                            })}>
                            <IconAntDesign RightItem name="search1" size={25} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>,
                        settingBar &&
                        <TouchableOpacity
                            key={'settingBar'}
                            style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={() => NavigationNavigateScreen({ goScreen: 'Seller_Setting', navigation })}>
                            <IconMaterialCommunityIcons name="settings-outline" size={25} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>,
                        chatBar &&
                        <TouchableOpacity
                            key={'chatBar'}
                            style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={
                                currentUser ?
                                    () => NavigationNavigateScreen({
                                        goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation
                                    }) :
                                    () => NavigationNavigateScreen({ goScreen: 'LoginScreen', navigation, passHome: true })
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
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 3 }, navigation
                            })}>
                            <IconFontAwesome5 RightItem name="store" size={20} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>,
                        postBar &&
                        <TouchableOpacity
                            key={'postBar'}
                            style={[stylesMain.ItemCenter, { width: 60 }]}
                            onPress={() => getActivePost(true)}>
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
                            onPress={() => this.navigationNavigateScreen('Setting_TopicStore', { selectedIndex: 1 })}>
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
                            onPress={() => this.deleteFunction()}
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
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Slide
export class Slide extends React.PureComponent {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeSlide: 0,
            dataService: [],
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService, });
    };
    getActiveSlide = (activeSlide) => {
        this.setState({ activeSlide });
    };
    _renderItem = item => {
        // var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
        var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
        return (
            <View style={stylesMain.child} key={item.id}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesMain.child}
                    resizeMode='contain'
                    resizeMethod='resize' />
            </View>
        );
    };
    render() {
        // var uri = `${ip}/mysql/DataServiceMain.php`
        // var dataBody = {
        //     type: 'slide'
        // };
        const { banner } = this.props;
        const { activeDataService, dataService, } = this.state;
        var dataBody = {
            slide: 'banner'
        };
        var uri = `${finip}/home/home_mobile`;
        activeDataService == true && banner == undefined &&
            GetServices({ abortController: this.abortController, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) });
        return (
            <View>
                {
                    (banner ? banner : dataService) &&
                    <Carousel
                        renderItem={this._renderItem}
                        data={banner ? banner : dataService}
                        loop
                        autoplay
                        autoplayInterval={3000}
                        pagination={PaginationLight} />
                }
                {/* {
                    dataService && dataService.map((item) => {
                        var dataMySQL = `${finip}/${item.image_path}/mobile/${item.image}`;
                        return (
                            <View style={stylesMain.child} key={item.id}>
                                <FastImage
                                    source={{
                                        uri: dataMySQL,
                                    }}
                                    style={stylesMain.child}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        );
                    })
                } */}
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Guarantee
export class Guarantee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <View style={{
                flexDirection: 'row', width: '100%', height: 'auto',
                aspectRatio: 3.3, justifyContent: 'space-between', marginTop: 5
            }}>
                <View style={{ width: '56%' }}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{
                            uri: `${ip}/MySQL/uploads/Guarantee/455x195-finmall-02.jpg`,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
                <View style={{ width: '42%' }}>
                    <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{
                            uri: `${ip}/MySQL/uploads/Guarantee/290x195 G.png`,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Category
export class Category extends React.Component {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            dataService: [],
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService, });
    };
    get dataCategory() {
        const { navigation } = this.props
        const { dataService } = this.state;
        return dataService &&
            dataService.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/menu/${item.image_head}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                        goScreen: 'CategoryScreen', setData: { id_type: item.id_type }, navigation
                    })} style={stylesMain.Category}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.Category_box}
                            resizeMode={FastImage.resizeMode.cover} />
                        <View style={{ height: 25 }}>
                            <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize8, stylesFont.FontCenter]}>
                                {item.name}</Text>
                        </View>
                    </TouchableOpacity>
                );
            });
    };
    render() {
        const { activeDataService } = this.state;
        var uri = `${finip}/home/category_mobile`;
        activeDataService == true && GetServices({
            abortController: this.abortController, uriPointer: uri, getDataSource: this.getData.bind(this)
        });
        return (
            <View style={stylesMain.FrameBackground2}>
                <ScrollView horizontal>
                    <View style={stylesMain.category_A}>
                        {this.dataCategory}
                    </View>
                </ScrollView>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> 
export class Trend_Hit extends React.Component {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            dataService: [],
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService, });
    };
    get Trend_Box() {
        var { dataService } = this.state;
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
                            <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#CACACA' }]}>37K products</Text>
                        </View>
                    </View>
                );
            });
    };
    render() {
        var { activeDataService } = this.state;
        var uri = `${ip}/mysql/DataServiceMain.php`;
        var dataBody = {
            type: 'Trend_Hit'
        };
        activeDataService == true && GetServices({
            abortController: this.abortController, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this)
        });
        return (
            <>
                <ScrollView horizontal style={{ height: 'auto', aspectRatio: 4, marginTop: 10, width, }}>
                    <View style={{ width: width * 0.70 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-01.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                    <View style={{ width: width * 0.70, marginLeft: 5 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-02.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                    <View style={{ width: width * 0.70, marginLeft: 5 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Trend_Hit/1180x380_trend-03.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                </ScrollView>
                <View style={stylesMain.FrameBackground2}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                            เทรนฮิต</Text>
                        <TouchableOpacity>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyBold]}>
                                <IconMaterialCommunityIcons name='reload' size={20} />
                                   Reload</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 'auto', aspectRatio: 5 }}>
                        {this.Trend_Box}
                    </View>
                </View>
            </>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>>
export class Fin_Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <View style={[stylesMain.FrameBackground2, { height: 'auto', aspectRatio: 4.5 }]}>
                <Image
                    style={stylesMain.BoxProduct1Image}
                    source={{
                        uri: `${ip}/MySQL/uploads/Text/Annotation 2020-05-09 153106.png`
                    }}
                    resizeMode='cover'
                    resizeMethod='resize' />
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { navigation } = this.props
        return (
            <>
                <View style={stylesMain.FrameBackground3}></View>
                <View style={[stylesMain.FlexRow, { width, justifyContent: 'space-around' }]}>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'DealScreen', navigation
                    })}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={require('../icon/Icon_Deal/01.jpg')}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'CoinScreen', navigation
                    })}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={require('../icon/Icon_Deal/02.jpg')}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'CampaignScreen', navigation
                    })}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={require('../icon/Icon_Deal/03.jpg')}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'The_BestFinScreen', navigation
                    })}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={require('../icon/Icon_Deal/04.jpg')}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Installment_payScreen', navigation
                    })}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={require('../icon/Icon_Deal/05.jpg')}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Brand_RCM
export class Recommend_Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    get recommendBrand() {
        const { loadData, navigation } = this.props;
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Brand', navigation
                    })}>
                        <View style={stylesMain.Brand_image_Box}>
                            <FastImage
                                style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]}
                                source={{
                                    uri: dataMySQL,

                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={[stylesMain.FrameBackground2, stylesMain.FrameBackground_Height]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        แบรนด์แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Brand', navigation
                    })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={stylesMain.FrameBackground_Box}>
                        {this.recommendBrand}
                    </View>
                </ScrollView>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    get PopularStoreItem() {
        const { loadData, navigation } = this.props;
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                // var { dataService } = this.state
                // return dataService &&
                //     dataService.map((item, index) => {
                //         var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Store', navigation
                    })}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{
                                    uri: dataMySQL,
                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                    </TouchableOpacity>
                );
            });
    };
    render() {
        // var uri = `${ip}/mysql/DataServiceMain.php`
        // var dataBody = {
        //     type: 'store2'
        // };
        return (
            <View style={stylesMain.FrameBackground2}>
                {/* <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} /> */}
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านที่ใช่อยากให้ช้อป</Text>
                </View>
                <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 3.3, justifyContent: 'space-between' }]} >
                    {this.PopularStoreItem}
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Popular_product
export class Popular_product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    productCate = (type) => {
        return type.map((item, index) => {
            var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
            return index < 2 && (
                <View style={stylesMain.Popular_Box_D} key={index}>
                    <FastImage
                        style={stylesMain.Popular_image_Box}
                        source={{
                            uri: dataMySQL,
                        }}
                        resizeMode={FastImage.resizeMode.contain} />
                    <View style={{ padding: 3 }}>
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

                                ]}>
                                    {value}</Text>
                            } />
                    </View>
                </View>
            );
        });
    };
    render() {
        const { loadData, navigation } = this.props;
        return (
            <View>
                <View style={[stylesMain.FrameBackground2]}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้ายอดนิยม</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'Popular_productScreen', setData: { id_item: 0, loadData: loadData }, navigation
                            })}>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[stylesMain.FlexRow]}>
                        <ScrollView horizontal>
                            {[
                                loadData.product_hit &&
                                <TouchableOpacity
                                    key={'product_hit'}
                                    activeOpacity={1}
                                    onPress={() => NavigationNavigateScreen({
                                        goScreen: 'Popular_productScreen', setData: { id_item: 0, loadData: loadData }, navigation
                                    })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[
                                                {
                                                    marginLeft: 8, color: '#fff'
                                                }, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                                สินค้าสุดฮิต</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.product_hit)}
                                        </View>
                                    </View>
                                </TouchableOpacity>,
                                loadData.best_price &&
                                <TouchableOpacity
                                    key={'best_price'}
                                    activeOpacity={1}
                                    onPress={() => NavigationNavigateScreen({
                                        goScreen: 'Popular_productScreen', setData: { id_item: 1, loadData: loadData }, navigation
                                    })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{
                                                marginLeft: 8, color: '#fff'
                                            }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                สินค้าราคาโดน</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.best_price)}
                                        </View>
                                    </View>
                                </TouchableOpacity>,
                                loadData.best_sale &&
                                <TouchableOpacity
                                    key={'best_sale'}
                                    activeOpacity={1}
                                    onPress={() => NavigationNavigateScreen({
                                        goScreen: 'Popular_productScreen', setData: { id_item: 2, loadData: loadData }, navigation
                                    })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{
                                                marginLeft: 8, color: '#fff'
                                            }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                สินค้าขายดี</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.best_sale)}
                                        </View>
                                    </View>
                                </TouchableOpacity>,
                                loadData.best_cool &&
                                <TouchableOpacity
                                    key={'best_cool'}
                                    activeOpacity={1}
                                    onPress={() => NavigationNavigateScreen({
                                        goScreen: 'Popular_productScreen', setData: { id_item: 3, loadData: loadData }, navigation
                                    })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{
                                                marginLeft: 8, color: '#fff'
                                            }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                สินค้าสุดคูล</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.best_cool)}
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
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export class BannerBar_ONE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 111.jpg`
                    }}
                    resizeMode={FastImage.resizeMode.cover} />
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export class BannerBar_TWO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 222.jpg`
                    }}
                    resizeMode={FastImage.resizeMode.cover} />
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export class BannerBar_THREE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: `${ip}/MySQL/uploads/Resize/BannerTap/banner 1920-220แม่2.jpg`
                    }}
                    resizeMode={FastImage.resizeMode.contain} />
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> FlashSale
export class FlashSale extends React.PureComponent {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            curTime: new Date(),
            dataService: [],
            endTime: new Date(),
        };
    };
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    };
    componentWillUnmount() {
        this.abortController.abort()
        clearInterval(this.intervalID);
    };
    tick() {
        this.setState({ curTime: new Date() });
    };
    getData = (dataService) => {
        var flash_end = dataService.flash_end && dataService.flash_end.split(':');
        this.setState({ activeDataService: false, dataService, endTime: new Date().setHours(flash_end[0], flash_end[1], flash_end[2]) });
    };
    render() {
        const { navigation } = this.props;
        const { activeDataService, curTime, dataService, endTime, } = this.state;
        var uri = `${finip}/flashsale/flash_timer`;
        activeDataService == true && GetServices({
            abortController: this.abortController, uriPointer: uri, getDataSource: this.getData.bind(this)
        });
        var Hours = 0;
        var Minutes = 0;
        var Seconds = 0;
        endTime && ([
            Hours = Number(new Date(endTime).getHours()) - Number(new Date(curTime).getHours()),
            (Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) > 0 && (
                Hours = Hours + ((Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) * 24)
            ),
            Minutes = Number(new Date(endTime).getMinutes()) - Number(new Date(curTime).getMinutes()),
            Seconds = Number(new Date(endTime).getSeconds()) - Number(new Date(curTime).getSeconds()),
            activeDataService == false && Hours <= 0 && Minutes <= 0 && Seconds <= 0 && (
                this.setState({ activeDataService: true, dataService: [] })
            ),
            Hours > 0 && (Minutes < 0 || Seconds < 0) && ([
                Hours = Hours - 1,
                Minutes = 60 + Minutes
            ]),
            Minutes > 0 && Seconds < 0 && ([
                Minutes = Minutes - 1,
                Seconds = 60 + Seconds
            ])
        ]);
        return (
            activeDataService == false && dataService &&
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, flex: 70 }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBoldBold, stylesFont.FontSize3, {
                            color: '#dc3545', flex: 34
                        }]}>
                            FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4, flex: 66 }]}>
                            <View style={{ flexDirection: 'row', flex: 30 }}>
                                <IconFontAwesome name='clock-o' size={30} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>จบใน</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 70 }}>
                                <View style={[stylesMain.Time_FlashSale_TimeBox,]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                        {Hours < 10 ? Hours <= 0 ? '00' : '0' + Hours : Hours}</Text>
                                </View>
                                <View style={[stylesMain.Time_FlashSale_TimeBox]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                        {Minutes < 10 ? Minutes <= 0 ? '00' : '0' + Minutes : Minutes}</Text>
                                </View>
                                <View style={[stylesMain.Time_FlashSale_TimeBox]}>
                                    <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                        {Seconds < 10 ? Seconds <= 0 ? '00' : '0' + Seconds : Seconds}</Text>
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
                    dataService && dataService.product &&
                    <FlatProduct custumNavigation='FlashSaleScreen' navigation={navigation} dataService={dataService.product}
                        mode='row4' nameFlatProduct='FlashSaleProduct' nameSize={11} priceSize={12} dispriceSize={12} />
                }
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export class PromotionPopular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    get dataPromotionPopular() {
        const { loadData, navigation } = this.props;
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                // var { dataService } = this.state
                // return dataService &&
                //     dataService.map((item, index) => {
                //         var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Store', navigation
                    })}
                        key={index}>
                        <View style={[stylesMain.BoxStore2Box2]}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[stylesMain.BoxStore2Image2]}
                                resizeMode={FastImage.resizeMode.cover} />
                            <View style={{
                                paddingHorizontal: 4, padding: 1, backgroundColor: '#0A55A6', borderBottomLeftRadius: 8, borderBottomRightRadius: 8
                            }}>
                                <Text numberOfLines={1} style={[
                                    stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#fff', marginLeft: 2 }
                                ]}>
                                    {item.detail}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            });
    };
    render() {
        const { navigation } = this.props
        // var uri = `${ip}/mysql/DataServiceMain.php`
        // var dataBody = {
        //     type: 'Promotion'
        // };
        return (
            <View style={stylesMain.FrameBackground2}>
                {/* <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} /> */}
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Recommend_Store', navigation
                    })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 'auto', aspectRatio: 2.8 }}>
                    <ScrollView horizontal>
                        {this.dataPromotionPopular}
                    </ScrollView>
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export class Product_for_you extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { loadData, navigation } = this.props;
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        FIN คัดมาเพื่อคุณ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Product_for_youScreen', navigation
                    })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {
                    loadData && loadData.length > 0 &&
                    <FlatProduct navigation={navigation} dataService={loadData} NumberOfcolumn={2} nameFlatProduct='Product_for_you'
                        mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                }
                {/* <ScrollView horizontal>
                    <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
                        {
                            loadData &&
                            <ProductBox numberOfItem={12} dataService={loadData} navigation={navigation} typeip='fin' mode='row3col2'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                        }
                    </View>
                </ScrollView> */}
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Highlight
export class Highlight extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { loadData, navigation } = this.props;
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ไฮไลท์ประจำสัปดาห์</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'HighlightScreen', navigation
                    })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {
                    loadData &&
                    <FlatProduct navigation={navigation} dataService={loadData} NumberOfcolumn={1}
                        nameFlatProduct='Second_product' mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                }
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> NewStore
export class NewStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
        };
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    get dataNewStore() {
        const { loadData, navigation } = this.props;
        // var { dataService } = this.state
        // loadData && (dataService = loadData)
        return loadData &&
            loadData.map((item, index) => {
                // return dataService &&
                //     dataService.map((item, index) => {
                // console.log('dataNewStore')
                // console.log(item)
                // var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
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
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxStore1Image}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                    </TouchableOpacity>
                );
            });
    };
    render() {
        // var uri = `${ip}/mysql/DataServiceMain.php`
        // var dataBody = {
        //     type: 'store1'
        // };
        return (
            <View style={stylesMain.FrameBackground2}>
                {/* <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} /> */}
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าห้ามพลาด!!่</Text>
                </View>
                <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 3.3, justifyContent: 'space-between' }]}>
                    {this.dataNewStore}
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Exclusive
export class Exclusive extends React.PureComponent {
    constructor(props) {
        super(props);
    };
    render() {
        const { loadData, navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        สินค้าสุด Exclusive</Text>
                    <TouchableOpacity
                        onPress={() => NavigationNavigateScreen({ goScreen: 'ExclusiveScreen', navigation })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {
                    loadData &&
                    <FlatProduct navigation={navigation} dataService={loadData} NumberOfcolumn={1} nameFlatProduct='ExclusiveProduct'
                        mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                }
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export class CategoryProduct extends React.Component {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeProductMobile: true,
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getActiveProductMobile = (activeProductMobile) => {
        this.setState({ activeProductMobile });
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    get dataCategory() {
        const { navigation, NoStoreReCom, } = this.props;
        const { activeProductMobile, dataService } = this.state;
        return dataService &&
            dataService.map((item, index) => {
                // var dataMySQL = `${ip}/mysql/${item.image_path}/${item.image}`;
                var dataMySQL = `${finip}/${item.mobile_head}`;
                return (
                    <View style={[stylesMain.FrameBackground2, {
                        marginTop: activeProductMobile == false ? 10 : 0,
                        backgroundColor: activeProductMobile == false ? item.bg_m : 'transparent',
                        paddingBottom: activeProductMobile == false ? 4 : 0,
                    }]} key={index}>
                        <>
                            {
                                activeProductMobile == false &&
                                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                                    goScreen: 'CategoryScreen', setData: { id_type: item.id_type }, navigation,
                                })}>
                                    <FastImage
                                        source={{
                                            uri: dataMySQL,
                                        }}
                                        style={[stylesMain.CategoryProductImageHead]}
                                        resizeMode={FastImage.resizeMode.contain} />
                                </TouchableOpacity>
                            }
                            <CategoryProductSubProduct activeProductMobile={activeProductMobile}
                                getActiveProductMobile={this.getActiveProductMobile.bind(this)} navigation={navigation} headerData={item}
                                id_type={item.id_type} />
                        </>
                        {
                            NoStoreReCom ?
                                <View style={{ marginBottom: 10, }}>
                                    <View style={{ marginTop: 10, }}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                            marginLeft: 8, color: '#fff'
                                        }]}>
                                            ร้านนี้ผ่อนได้ </Text>
                                    </View>
                                    <CategoryProductSubStore navigation={navigation} id_type={item.id_type} />
                                </View> :
                                <View style={{ marginBottom: 0, }}>
                                    <CategoryProductSubPromotion navigation={navigation} id_type={item.id_type} />
                                    <CategoryProductSubStore navigation={navigation} id_type={item.id_type} />
                                </View>
                        }
                    </View>
                );
            });
    };
    render() {
        const { activeDataService } = this.state;
        var uri = `${finip}/home/category_mobile`;
        activeDataService == true && GetServices({
            abortController: this.abortController, uriPointer: uri, getDataSource: this.getData.bind(this)
        });
        return (
            <View>
                {
                    this.dataCategory
                }
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export class CategoryProductSubProduct extends React.PureComponent {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            dataService: [],
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getData = (dataService) => {
        const { getActiveProductMobile } = this.props;
        getActiveProductMobile(false);
        this.setState({ dataService, activeDataService: false });
    };
    render() {
        const { activeProductMobile, headerData, id_type, navigation } = this.props;
        const { dataService, } = this.state;
        var uri = `${finip}/home/product_mobile`;
        var dataBody = {
            id_type: id_type
        };
        activeProductMobile == true && id_type &&
            GetServices({
                abortController: this.abortController, nameFunction: headerData.name, uriPointer: uri, dataBody,
                getDataSource: this.getData.bind(this),
            });
        return (
            <>
                {
                    dataService && dataService.length > 0 &&
                    <FlatProduct navigation={navigation} dataService={dataService} NumberOfcolumn={2} nameFlatProduct='CategoryProduct'
                        mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                }
                {/* {
                        dataService && dataService.length > 0 &&
                        <ProductBox  numberOfItem={12} dataService={dataService} navigation={navigation} typeip='fin' mode='row3col2'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                    } */}
            </>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export class CategoryProductSubStore extends React.PureComponent {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    setActiveSlide = (index) => {
        this.setState({ activeSlide: index });
    };
    _renderItem = (item, index) => {
        var dataMySQL = `${finip}/${item.item.image_path}/${item.item.image}`;
        var dataMySQL2;
        item.item2 && (
            dataMySQL2 = `${finip}/${item.item2.image_path}/${item.item2.image}`
        );
        return (
            <TouchableOpacity activeOpacity={1} key={index} style={stylesMain.FlexRow}>
                <View style={[stylesMain.CategoryProductStoreBox]}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
                <View style={[stylesMain.CategoryProductStoreBox]}>
                    <Image
                        source={{
                            uri: dataMySQL2,
                        }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
            </TouchableOpacity>
        );
    };
    render() {
        const { id_type, } = this.props;
        const { activeDataService, dataService } = this.state;
        var item = [];
        if (dataService && dataService.banner && dataService.banner.length > 0)
            for (var n = 0; n < dataService.banner.length; n += 2) {
                item.push({
                    item: dataService.banner[n],
                    item2: dataService.banner[n + 1]
                });
            };
        var uri = `${finip}/home/publish_cate_mobile`
        var dataBody = {
            promotion: 'shop',
            id_type: id_type,
        };
        activeDataService == true && GetServices({
            abortController: this.abortController, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this)
        });
        return (
            <>
                {
                    dataService && dataService.banner && dataService.banner.length > 0 && (
                        <Carousel
                            key={'banner'}
                            renderItem={this._renderItem}
                            data={item}
                            loop
                            autoplay
                            autoplayInterval={3000}
                            pagination={PaginationLight} />
                    )
                }
            </>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export class CategoryProductSubPromotion extends React.Component {
    abortController = new AbortController();
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeDataService2: true,
            failFetchDataService: 0,
            failFetchDataService2: 0,
        };
    };
    componentWillUnmount() {
        this.abortController.abort()
    };
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    };
    getData2 = (dataService2) => {
        this.setState({ dataService2, activeDataService2: false });
    };
    dataCategoryProductSubPromotion(dataService, type) {
        var dataMySQL = dataService && dataService.banner &&
            `${finip}/${(dataService.banner[0].path_mobile)}/${(dataService.banner[0].image)}`
        if (dataMySQL == false) { return <></> }
        return (
            <View style={[type == 0 ? stylesMain.BoxStore1Box2 : stylesMain.BoxStore1Box3,
            { borderWidth: 0, }]} key={dataService.banner[0].id} >
                {
                    dataService &&
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        resizeMode='cover'
                        resizeMethod='resize'
                        style={[stylesMain.BoxProduct1Image, { borderRadius: 6, }]} />
                }
            </View>
        );
    };
    render() {
        const { id_type } = this.props;
        const {
            activeDataService, activeDataService2, dataService, dataService2, failFetchDataService, failFetchDataService2
        } = this.state;
        var uri = `${finip}/home/publish_cate_mobile`;
        var dataBody = {
            promotion: 'promotions_1',
            id_type: id_type,
        };
        var dataBody2 = {
            promotion: 'promotions_2',
            id_type: id_type,
        };
        dataService && dataService.error == 'TypeError: Network request failed' &&
            this.setState({ activeDataService: true, dataService: undefined, failFetchDataService: failFetchDataService + 1 })
        dataService2 && dataService2.error == 'TypeError: Network request failed' &&
            this.setState({ activeDataService2: true, dataService2: undefined, failFetchDataService2: failFetchDataService2 + 1 })
        activeDataService == true && failFetchDataService < 5 &&
            GetServices({ abortController: this.abortController, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) });
        activeDataService2 == true && failFetchDataService2 < 5 &&
            GetServices({
                abortController: this.abortController, uriPointer: uri, dataBody: dataBody2, getDataSource: this.getData2.bind(this)
            });
        return (
            <>
                <View style={[stylesMain.FlexRow, { width: '100%' }]}>
                    {
                        dataService && dataService.banner && dataService2 && dataService2.banner && ([
                            (
                                dataService.banner.length > 0 &&
                                this.dataCategoryProductSubPromotion(dataService, 0)
                            ),
                            (
                                dataService2.banner.length > 0 &&
                                this.dataCategoryProductSubPromotion(dataService2, 1)
                            ),
                        ])
                    }
                </View>
            </>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Second_product
export class Second_product extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
        };
    };
    renderItem1 = (item) => {
        return item.map((item, index) => {
            var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
            return (
                <View key={index} style={{ width: width * 0.64, height: 196 }}>
                    <Image
                        source={{
                            uri: dataMySQL,
                            width: width * 0.64,
                            height: 196,
                        }}
                        style={stylesMain.bigSlideImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
            );
        });
    };
    renderItem2 = (item) => {
        return item.map((item, index) => {
            var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
            return (
                <View key={index} style={{ width: width * 0.32, height: 130 }}>
                    <Image
                        source={{
                            uri: dataMySQL,
                            width: width * 0.32,
                            height: 130,
                        }}
                        style={stylesMain.litleSlideImage}
                        resizeMode='stretch'
                        resizeMethod='resize' />
                </View>
            );
        });
    };
    get Second_Storeheader() {
        const { Header_Second, loadData, navigation, } = this.props;
        var url;
        loadData.mobile_bar &&
            loadData.mobile_bar.map((item) => { (url = `${finip}/${item.image_path}/${item.image}`) });
        return (
            <View key={'mobile_bar'} style={[stylesMain.FrameBackground2, {
                marginTop: 0, backgroundColor: loadData.bg_m, borderBottomWidth: null
            }]}>
                <View>
                    {
                        Header_Second ?
                            <View>
                                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                                    มือสองลดราคา</Text>
                            </View> :
                            <TouchableOpacity activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'SecondScreen', setData: { selectedIndex: 0 }, navigation,
                                })}>
                                <Image
                                    style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                                    source={{ uri: url }}
                                    resizeMode='cover'
                                    resizeMethod='resize' />
                            </TouchableOpacity>
                    }
                    {
                        loadData.product_second &&
                        <FlatProduct navigation={navigation} dataService={loadData.product_second} NumberOfcolumn={2}
                            nameFlatProduct='Second_product' mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                    }
                    {/* <ScrollView horizontal>
                        <View style={[stylesMain.ProductForYouFlexBox, { height: 370 }]}>
                            {
                                loadData.product_second &&
                                <ProductBox numberOfItem={12} dataService={loadData.product_second} navigation={navigation} typeip='fin' mode='row3col1'
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                            }
                        </View>
                    </ScrollView> */}
                </View>
            </View>
        );
    };
    get Second_Storebody() {
        const { Header_Second, loadData, navigation, } = this.props;
        return (
            <View key={'Header_Second'} style={stylesMain.Second_StoreFin}>
                <View style={stylesMain.Second_StoreFin_BoxHead}>
                    {
                        Header_Second ?
                            <View>
                                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                                    ร้านมือสองลดราคา</Text>
                            </View> :
                            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
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
                    {[
                        loadData.list_store2_1 &&
                        <View key={'list_store2_1'} style={stylesMain.Second_StoreFin_ImageA}>
                            <View>
                                {this.renderItem1(loadData.list_store2_1)}
                            </View>
                            {this.pagination}
                        </View>,
                        loadData.list_store2_2 &&
                        <View key={'list_store2_2'}>
                            <View style={stylesMain.Second_StoreFin_ImageB}>
                                <View style={stylesMain.Second_StoreFin_ImageB_T}>
                                    {this.renderItem2([loadData.list_store2_2[0]])}
                                </View>
                                <View style={[stylesMain.Second_StoreFin_ImageB_T]}>
                                    {this.renderItem2([loadData.list_store2_2[1]])}
                                </View>
                            </View>
                        </View>
                    ]}
                </View>
            </View>
        );
    };
    _renderFooter = (item, index) => {
        var dataMySQL = `${finip}/${item.item.image_path}/${item.item.image}`;
        var dataMySQL2;
        item.item2 && (
            dataMySQL2 = `${finip}/${item.item2.image_path}/${item.item2.image}`
        );
        return (
            <TouchableOpacity activeOpacity={1} key={index} style={stylesMain.FlexRow}>
                <View style={[stylesMain.CategoryProductStoreBox]}>
                    <Image
                        source={{
                            uri: dataMySQL,
                            width: '98%',
                            height: 90,
                        }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
                <View style={[stylesMain.CategoryProductStoreBox]}>
                    <Image
                        source={{
                            uri: dataMySQL2,
                            width: '98%',
                            height: 90,
                        }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode='cover'
                        resizeMethod='resize' />
                </View>
            </TouchableOpacity>
        );
    };
    get Second_Storefooter() {
        const { loadData } = this.props;
        var item = [];
        if (loadData.mobile_slide)
            for (var n = 0; n < loadData.mobile_slide.length; n += 2) {
                item.push({
                    item: loadData.mobile_slide[n],
                    item2: loadData.mobile_slide[n + 1]
                });
            };
        return (
            <View key={'mobile_slide'} style={stylesMain.Second_Storefooter}>
                <ScrollView horizontal>
                    <View style={stylesMain.FlexRow}>
                        {
                            loadData.mobile_slide &&
                            <Carousel
                                renderItem={this._renderFooter}
                                data={item}
                                loop
                                autoplay
                                autoplayInterval={3000}
                                pagination={PaginationLight} />
                        }
                    </View>
                </ScrollView>
            </View>
        );
    };
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                {[
                    this.Second_Storeheader,
                    this.Second_Storebody,
                    this.Second_Storefooter
                ]}
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>>
export class Fin_Mall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    productCate = (type) => {
        return type.map((item, index) => {
            var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
            return (
                <View style={stylesMain.Popular_Box_D} key={index}>
                    <FastImage
                        style={stylesMain.Popular_image_Box}
                        source={{
                            uri: dataMySQL,

                        }}
                        resizeMode={FastImage.resizeMode.contain} />
                    <View style={{ padding: 3 }}>
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

                                ]}>
                                    {value}</Text>
                            } />
                    </View>
                </View>
            );
        });
    };
    render() {
        const { loadData, navigation } = this.props;
        return (
            <View style={stylesMain.FrameBackground2}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>Fin Mall </Text>
                <View style={stylesMain.FinMall_Box}>
                    <ScrollView horizontal >
                        <View style={[stylesMain.ItemCenter, stylesMain.FinMall_Box_Image]}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: `${ip}/MySQL/uploads/Image_FinMall/Finmall_Banner.jpg`,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                        </View>
                        <View style={stylesMain.FinMall_ScrollView}>
                            {
                                loadData.product_hit &&
                                <TouchableOpacity
                                    key={'product_hit'}
                                    activeOpacity={1}
                                    onPress={() => NavigationNavigateScreen({ goScreen: 'FinMallScreen', navigation })}>
                                    <View style={stylesMain.FlexRow}>
                                        {this.productCate(loadData.product_hit)}
                                    </View>
                                </TouchableOpacity>
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> FIN_Supermarket
export class FIN_Supermarket extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { loadData, navigation } = this.props;
        const { product_hit } = loadData;
        return (
            <View style={stylesMain.FrameBackground2}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                    FIN Supermarket  </Text>
                <Slide />
                <View style={stylesMain.Supermarket_Product}>
                    {
                        product_hit &&
                        <FlatProduct navigation={navigation} dataService={product_hit} NumberOfcolumn={1} radiusBox={5}
                            nameFlatProduct='FIN_Supermarket' mode='row3' nameSize={14} priceSize={15} dispriceSize={15} />
                    }
                </View>
                <View style={[stylesMain.FlexRow, stylesMain.Supermarket_Store]}>
                    <TouchableOpacity
                        onPress={() => NavigationNavigateScreen({ goScreen: 'FINSupermarket', navigation })}
                        style={{ width: width * 0.64, }}>
                        <Image
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_banner01.jpg`,
                            }}
                            resizeMode='stretch'
                            resizeMethod='resize' />
                    </TouchableOpacity>
                    <View style={{ width: width * 0.35, justifyContent: 'space-between' }}>
                        <View style={stylesMain.Supermarket_Image}>
                            <Image
                                style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: `${ip}/MySQL/uploads/Image_FinMall/supermarket-04.jpg`,
                                }}
                                resizeMode='stretch'
                                resizeMethod='resize' />
                        </View>
                        <View style={stylesMain.Supermarket_Image}>
                            <Image
                                style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: `${ip}/MySQL/uploads/Image_FinMall/supermarket-04.jpg`,
                                }}
                                resizeMode='stretch'
                                resizeMethod='resize' />
                        </View>
                    </View>
                </View>
                <View style={stylesMain.Supermarket_BrandBox}>
                    <View style={stylesMain.Supermarket_Brand_Image}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/logo-foodland.png`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={stylesMain.Supermarket_Brand_Image}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/logo-maxvalu.png`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                </View>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: `${ip}/MySQL/uploads/Image_FinMall/market_banner06.jpg`,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
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
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand01.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                        <View style={[stylesMain.ItemCenter]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>LOOKS</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>สุดยอดแห่งบิวตี้ไอเท็มและสินค้าเพื่อสุขภาพ</Text>
                        </View>
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                        <FastImage
                            style={{ height: 50, width: 100 }}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                        <View style={[stylesMain.ItemCenter]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Betagro</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>เบทาโกร</Text>
                        </View>
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                        <FastImage
                            style={{ height: 50, width: 100 }}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                        <View style={[stylesMain.ItemCenter]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Exclusive Brands</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>สินค้าคุณภาพ คุ้มค่า คุ้มราคา</Text>
                        </View>
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                        <FastImage
                            style={{ height: 50, width: 100 }}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                        <View style={[stylesMain.ItemCenter]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>Ole</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]} numberOfLines={1}>หวานสดใสหอมติดผิว</Text>
                        </View>
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop]}>
                        <FastImage
                            style={{ height: 50, width: 100 }}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`,
                            }}
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
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand02.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand03.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand04.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand05.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand06.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/Image_FinMall/market_brand07.jpg`,
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                </ScrollView>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class TodayProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { loadData, navigation, noTitle, onShow, prepath, typeip, } = this.props
        onShow && console.log(onShow)
        return (
            <View style={[stylesMain.BoxProduct2, { backgroundColor: 'transparent' }]}>
                {
                    noTitle ?
                        null :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้าคัดสรรเพื่อคุณ</Text>
                }
                <View style={stylesMain.BoxProduct2BoxProduct}>
                    {
                        loadData &&
                        <ProductBox dataService={loadData} navigation={navigation} onShow={onShow} typeip={
                            typeip ?
                                'ip' :
                                'fin'
                        } mode='row3colall' pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                            prepath={
                                prepath ?
                                    prepath :
                                    null
                            } />
                    }
                </View>
            </View>
        );
    };
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
            [
                {
                    nativeEvent: {
                        translationX: this._translateX,
                        translationY: this._translateY,
                    },
                },
            ],
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
        }
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
                            elevation: 1,
                            height: 60,
                            width: 60,
                            left: width - 65,
                            marginTop: -60,
                            transform: [
                                { translateX: this._translateX },
                                { translateY: this._translateY },
                            ]
                        }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ activeSliding: !activeSliding })}>
                                <FastImage
                                    style={[stylesMain.Botton_PopUp_Image, {
                                        backfaceVisibility: 'hidden', backgroundColor: '#fff', borderRadius: 60, borderColor: '#DCDCDC',
                                        borderWidth: 1, marginBottom: -20
                                    }]}
                                    source={require('../icon/1589958803447.png')}
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
                    containerStyle={{
                        backgroundColor: null,
                        width: '100%',
                        top: '50%'
                    }}
                    position="right">
                    <TouchableOpacity onPress={() => this.toggleComponentVisibility(!activeSliding)}>
                        <View style={stylesMain.Botton_PopUp_Box}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                source={require('../images/0044-03.png')}
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
export class Category_Image_Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService, sizeBox } = this.props
        console.log('Category_Image_Total')
        console.log(dataService)

        return (
            <View style={{ marginTop: 10 }}>
                <View style={{ height: 'auto', aspectRatio: 3.5, }}>
                    {
                        dataService.S.map((value, index) => {
                            return (
                                <FastImage
                                    key={index}
                                    style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: `${ip}/MySQL/${value.image_path}/${value.image}`,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            )
                        })
                    }
                </View>
                <View style={[stylesMain.FlexRow, { width: '100%', height: 'auto', aspectRatio: 3, justifyContent: 'space-between', marginTop: 5 }]}>
                    {
                        dataService.M.map((value, index) => {
                            return (
                                <View key={index} style={{ width: width * 0.49 }}>
                                    <FastImage
                                        style={stylesMain.BoxProduct1Image}
                                        source={{
                                            uri: `${ip}/MySQL/${value.image_path}/${value.image}`,
                                        }}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
                <View style={[stylesMain.FlexRow, { width: '100%', height: 'auto', aspectRatio: 2.5, justifyContent: 'space-between', marginTop: 5 }]}>
                    {
                        dataService.L.map((value, index) => {
                            return (
                                <View key={index} style={{ width: width * 0.49 }}>
                                    <FastImage
                                        style={stylesMain.BoxProduct1Image}
                                        source={{
                                            uri: `${ip}/MySQL/${value.image_path}/${value.image}`,
                                        }}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}
