///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Animated, BackHandler, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, YellowBox, ActivityIndicator,
    Image, FlatList
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
import AsyncStorage from '@react-native-community/async-storage'
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
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
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
    BrowerScreen, GetServices, GetData, ProductBox, Toolbar, TabBar, LoadingScreen, RenderProduct, RenderHeader, RenderSubStore
} from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class MainScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeExit: true,
            activeFlashSale: true,
            activeLoading: true,
            dataService: [],
        };
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false });
    }
    getActiveDataService = (activeFlashSale) => {
        this.setState({ activeFlashSale });
    }
    render() {
        const { navigation } = this.props;
        const { activeDataService, activeFlashSale, activeLoading, dataService, } = this.state;
        const browerProps = navigation.getParam('browerProps');
        var uri = [finip, 'home/publish_mobile'].join('/');
        let itemT = [
            <Slide />,
            <Category navigation={navigation} />,
            <Button_Bar navigation={navigation} />,
            <FlashSale navigation={navigation} activeDataService={activeFlashSale}
                getActiveDataService={this.getActiveDataService.bind(this)} />,
            <Recommend_Brand navigation={navigation} loadData={dataService.brand} />,
            <BannerBar_TWO />,
            <Exclusive navigation={navigation} loadData={dataService.exclusive} />,
            <NewStore navigation={navigation} loadData={dataService.dont_miss} />,
            <Fin_Mall navigation={navigation} loadData={{ product_hit: dataService.product_hit }} />,
            <BannerBar_ONE />,
            <Highlight navigation={navigation} loadData={dataService.hi_week} />,
            <PromotionPopular navigation={navigation} loadData={dataService.recommend_store} />,
            <Popular_store navigation={navigation} loadData={dataService.store_good} />,
            <Popular_product navigation={navigation} loadData={{
                product_hit: dataService.product_hit, best_price: dataService.best_price,
                best_sale: dataService.best_sale, best_cool: dataService.best_cool
            }} />,
            <Product_for_you navigation={navigation} loadData={dataService.for_you} />,
            <CategoryProduct activeMain={activeDataService} navigation={navigation} />,
            <Second_product navigation={navigation} loadData={{
                product_second: dataService.product_second, list_store2_1: dataService.list_store2_1,
                list_store2_2: dataService.list_store2_2, list_store2_3: dataService.list_store2_3,
                mobile_bar: dataService.mobile_bar, mobile_slide: dataService.mobile_slide,
            }} />,
            <BannerBar_THREE />,
            <FIN_Supermarket navigation={navigation} loadData={{ product_hit: dataService.product_hit }} />,
            <TodayProduct navigation={navigation} loadData={dataService.for_you2} />
        ]
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                {[
                    activeDataService == true &&
                    <LoadingScreen key='LoadingScreen' />,
                    activeDataService == true &&
                    <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} key={'activeDataService'}
                    // showConsole={'Main'}
                    />,
                ]}
                <AppBar navigation={navigation} style={{ flex: 5, }} />
                <FlatList
                    scrollEnabled={true}
                    initialNumToRender={6}
                    data={itemT}
                    keyExtractor={(value, index) => index}
                    // ListHeaderComponent={this.renderHeader}
                    renderItem={(value) => value.item}
                    viewabilityConfig={this.viewabilityConfig}
                />
                <Botton_PopUp_FIN useNativeDriver />
                <Toolbar navigation={navigation} style={{ flex: 5, }} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> ExitAppModule
export class ExitAppModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backClickCount: 0,
        };
        this.springValue = new Animated.Value(0);
        this.transformValue = new Animated.Value(100)
    }
    componentDidMount() {
        YellowBox.ignoreWarnings(["Require cycle:", "*"]);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }
    componentWillUnmount() {
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
    }
    handleBackButton = () => {
        const { backClickCount } = this.state
        const { navigation } = this.props
        var routeProps = navigation.dangerouslyGetParent().state.routes.length
        return routeProps == 1 ? (
            backClickCount == 1 ? BackHandler.exitApp() : this._spring(),
            true
        ) : (
                navigation.pop(),
                true
            )
    }
    render() {
        return (
            <Animatable.View style={[stylesMain.animatedView, { opacity: this.springValue, transform: [{ translateY: this.transformValue }] }]}>
                <View style={stylesMain.animatedViewSub}>
                    <Text style={[stylesMain.exitTitleText, stylesFont.FontFamilyText]}>กดอีกครั้งเพื่อออก</Text>
                </View>
            </Animatable.View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> AppBar ค้นหา
export class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            text: '',
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser });
    }
    setText = (text) => {
        this.setState({ text })
    }
    setSubmit = () => {
        const { text, } = this.state
        text != undefined && text != ' ' &&
            this.navigationNavigateScreen('SearchScreen', { SearchText: text })
    }
    render() {
        const { ABDColor, ABGColor, AIColor, leftBar, rightBar, searchBar, SearchText } = this.props
        const { activeGetCurrentUser, currentUser, text, } = this.state
        const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo)
        const AIconFeather = Animatable.createAnimatableComponent(IconFeather)
        const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5)
        return (
            <Animatable.View style={[stylesMain.Appbar, stylesMain.FlexRow, {
                backgroundColor: ABGColor ? ABGColor : '#fff',
                borderColor: ABDColor ? ABDColor : '#ECECEC'
            }]}>
                {[
                    activeGetCurrentUser == true &&
                    <GetData getSource={this.getSource.bind(this)} getUser={true} key={'GetData'} />,
                    leftBar == 'backarrow' &&
                    <View key={'backarrow'}>
                        <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 50, height: 50 }]}
                            activeOpacity={1}
                            onPress={this.navigationNavigateScreen.bind(this, 'goBack')}>
                            <AIconEntypo name="chevron-left" size={30} style={{ color: AIColor ? AIColor : '#111' }} />
                        </TouchableOpacity>
                    </View>,
                    searchBar ?
                        <TouchableOpacity key={'searchBar'} activeOpacity={1}
                            onPress={this.navigationNavigateScreen.bind(this, 'goBack')}>
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
                            this.navigationNavigateScreen.bind(this, 'SearchScreen', { modeStore: false })}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
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
                        <View key={'storebar'} style={[stylesMain.ItemCenter, stylesMain.FlexRow]}>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40 }]}
                                onPress={null/*() => navigation.push('CartScreen')*/}>
                                <AIconFeather name="filter" size={25} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40 }]}
                                onPress={null/*() => navigation.push('CartScreen')*/}>
                                <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                        </View> :
                        <View key={'storebar'} style={[stylesMain.FlexRow, stylesMain.ItemCenterVertical]}>
                            {
                                leftBar == 'backarrow' ?
                                    rightBar == 'chat' &&
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                        onPress={
                                            currentUser ?
                                                this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 }) :
                                                this.navigationNavigateScreen.bind(this, 'LoginScreen')}>
                                        <IconAntDesign name="message1" size={25} />
                                    </TouchableOpacity> :
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                        onPress={
                                            currentUser ?
                                                this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 }) :
                                                this.navigationNavigateScreen.bind(this, 'LoginScreen')}>
                                        <IconAntDesign name="message1" size={25} />
                                    </TouchableOpacity>
                            }
                            <TouchableOpacity style={[stylesMain.ItemCenter, {
                                width:
                                    leftBar == 'backarrow' ?
                                        rightBar == 'chat' ?
                                            40 :
                                            50 :
                                        40
                            }]} onPress={
                                currentUser ?
                                    this.navigationNavigateScreen.bind(this, 'CartScreen') :
                                    this.navigationNavigateScreen.bind(this, 'LoginScreen')}>
                                <IconAntDesign name="shoppingcart" size={25} />
                            </TouchableOpacity>
                        </View>
                ]}
            </Animatable.View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> AppBar สีคราม
export class AppBar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                value == 'popToTop' ?
                    navigation.popToTop() :
                    navigation.push(value, value2)
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser });
    }
    setText = (text) => {
        this.setState({ text })
    }
    deleteFunction = () => {
        const { propsFunction } = this.props
        propsFunction()
    }
    render() {
        const {
            backArrow, backArrowColor, ButtomDeleteAll, chatBar, colorBar, deleteBar, getActivePost, goToTop, menuBar, postBar, saveBar,
            searchBar, settingBar, storeBar, titleHead,
        } = this.props;
        const { activeGetCurrentUser, currentUser, } = this.state
        return (
            <View style={
                colorBar ?
                    colorBar :
                    menuBar ?
                        stylesStore.AppbarMenu :
                        stylesStore.Appbar}>
                {
                    activeGetCurrentUser == true &&
                    <GetData getSource={this.getSource.bind(this)} getUser={true} key={'GetData'} />
                }
                <View style={stylesMain.FlexRow}>
                    {
                        backArrow &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 50, height: 50 }]}
                            activeOpacity={1}
                            onPress={
                                goToTop ?
                                    this.navigationNavigateScreen.bind(this, 'popToTop') :
                                    this.navigationNavigateScreen.bind(this, 'goBack')
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
                            onPress={this.navigationNavigateScreen.bind(this, 'SearchScreen', { modeStore: false })}>
                            <IconAntDesign RightItem name="search1" size={25} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>,
                        settingBar &&
                        <TouchableOpacity
                            key={'settingBar'}
                            style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={this.navigationNavigateScreen.bind(this, 'Seller_Setting')}>
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
                                    this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 }) :
                                    this.navigationNavigateScreen.bind(this, 'LoginScreen')
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
                            onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 3 })}>
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
                        deleteBar &&
                        <TouchableOpacity
                            key={'deleteBar'}
                            onPress={this.deleteFunction.bind(this)}
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
    }
}
///----------------------------------------------------------------------------------------------->>>> Slide
export class Slide extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeSlide: 0,
            dataService: [],
        };
    }
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService, })
    }
    getActiveSlide = (activeSlide) => {
        this.setState({ activeSlide })
    }
    _renderItem = item => {
        // var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
        var dataMySQL = [finip, item.image_path, item.image].join('/');
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
    }
    render() {
        // var uri = ip + '/mysql/DataServiceMain.php';
        // var dataBody = {
        //     type: 'slide'
        // };
        const { banner } = this.props
        const { activeDataService, dataService, } = this.state
        var dataBody = {
            slide: 'banner'
        };
        var uri = [finip, 'home/home_mobile'].join('/')
        return (
            <View>
                {
                    activeDataService == true && banner == undefined &&
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                }
                <Carousel
                    renderItem={this._renderItem}
                    data={banner ? banner : dataService}
                    loop
                    autoplay
                    autoplayInterval={3000}
                    pagination={PaginationLight} />
                {/* {
                    dataService && dataService.map((item) => {
                        var dataMySQL = [finip, item.image_path, 'mobile', item.image].join('/');
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
    }
}
///----------------------------------------------------------------------------------------------->>>> Category
export class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            dataService: [],
        };
    }
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService, })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get dataCategory() {
        const { dataService } = this.state
        return dataService &&
            dataService.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + 'menu' + '/' + item.image_head;
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={this.navigationNavigateScreen.bind(this,
                        'CategoryScreen', { id_type: item.id_type })} style={stylesMain.Category}>
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
                )
            })
    }
    render() {
        const { activeDataService } = this.state
        var uri = finip + '/home/category_mobile'
        return (
            <View style={stylesMain.FrameBackground2}>
                {
                    activeDataService == true &&
                    <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
                }
                <ScrollView horizontal>
                    <View style={stylesMain.category_A}>
                        {this.dataCategory}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> 
export class Trend_Hit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService, })
    }
    get Trend_Box() {
        var { dataService } = this.state
        return dataService &&
            dataService.map((item, index) => {
                var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
                return (
                    <View style={{ justifyContent: 'space-between' }}>
                        <View style={{ height: 80, borderWidth: 1 }}>
                            <View key={index} style={{ height: 50, width: 50 }}>
                                <FastImage
                                    style={stylesMain.BoxStore1Image}
                                    source={{
                                        uri: dataMySQL,
                                    }}
                                    resizeMode={FastImage.resizeMode.stretch} />
                            </View>
                            <Text></Text>
                        </View>
                    </View>

                )
            })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'Trend_Hit'
        };
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                    เทรนฮิต</Text>
                <ScrollView horizontal>
                    {this.Trend_Box}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Fin_Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[stylesMain.FrameBackground2, { height: 80, }]}>
                <Image
                    style={stylesMain.BoxProduct1Image}
                    source={{
                        uri: ip + '/MySQL/uploads/Text/Annotation 2020-05-09 153106.png',
                    }}
                    resizeMode='contain'
                    resizeMethod='resize' />
            </View>
        );
    }
}


///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        return (
            <>
                <View style={stylesMain.FrameBackground3}></View>
                <View style={stylesMain.FlexRow}>
                    <ScrollView horizontal>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'DealScreen')}>
                            <View style={stylesMain.Button_Bar_Box}>
                                <FastImage style={stylesMain.Button_Bar_icon}
                                    source={require('../icon/Icon_Deal/01.jpg')}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'CoinScreen')}>
                            <View style={stylesMain.Button_Bar_Box}>
                                <FastImage style={stylesMain.Button_Bar_icon}
                                    source={require('../icon/Icon_Deal/02.jpg')}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'CampaignScreen')}>
                            <View style={stylesMain.Button_Bar_Box}>
                                <FastImage style={stylesMain.Button_Bar_icon}
                                    source={require('../icon/Icon_Deal/03.jpg')}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'The_BestFinScreen')}>
                            <View style={stylesMain.Button_Bar_Box}>
                                <FastImage style={stylesMain.Button_Bar_icon}
                                    source={require('../icon/Icon_Deal/04.jpg')}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Installment_payScreen')}>
                            <View style={stylesMain.Button_Bar_Box}>
                                <FastImage style={stylesMain.Button_Bar_icon}
                                    source={require('../icon/Icon_Deal/05.jpg')}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Brand_RCM
export class Recommend_Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get recommendBrand() {
        const { loadData } = this.props
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image
                return (
                    <TouchableOpacity activeOpacity={1} key={index}
                        onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Brand')}>
                        <View style={stylesMain.Brand_image_Box}>
                            <FastImage
                                style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]}
                                source={{
                                    uri: dataMySQL,
                                    height: 28,
                                    width: 117,
                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        return (
            <View style={[stylesMain.FrameBackground2, stylesMain.FrameBackground_Height]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        แบรนด์แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Brand')}>
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
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get PopularStoreItem() {
        const { loadData } = this.props;
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image
                // var { dataService } = this.state
                // return dataService &&
                //     dataService.map((item, index) => {
                //         var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{
                                    uri: dataMySQL,
                                    width: (width * 1 / 2) - 9,
                                    height: 100,
                                }}
                                resizeMode={FastImage.resizeMode.stretch} />
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        // var uri = ip + '/mysql/DataServiceMain.php';
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
                <View style={stylesMain.FlexRow}>
                    {this.PopularStoreItem}
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_product
export class Popular_product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    productCate = (type) => {
        return type.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
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
            )
        })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { loadData } = this.props
        return (
            <View>
                <View style={[stylesMain.FrameBackground2]}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้ายอดนิยม</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this.navigationNavigateScreen.bind(this,
                                'Popular_productScreen', { id_item: 0, loadData: loadData })}>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <ScrollView horizontal>
                            {[
                                loadData.product_hit &&
                                <TouchableOpacity
                                    key={'product_hit'}
                                    activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this,
                                        'Popular_productScreen', { id_item: 0, loadData: loadData })}>
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
                                    onPress={this.navigationNavigateScreen.bind(this,
                                        'Popular_productScreen', { id_item: 1, loadData: loadData })}>
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
                                    onPress={this.navigationNavigateScreen.bind(this,
                                        'Popular_productScreen', { id_item: 2, loadData: loadData })}>
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
                                    onPress={this.navigationNavigateScreen.bind(this,
                                        'Popular_productScreen', { id_item: 3, loadData: loadData })}>
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
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export class BannerBar_ONE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/Resize/BannerTap/banner 1920-220เพชร3.jpg',
                    }}
                    resizeMode={FastImage.resizeMode.contain} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export class BannerBar_TWO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/Resize/BannerTap/banner 1920-220สำอาง.jpg',
                    }}
                    resizeMode={FastImage.resizeMode.contain} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export class BannerBar_THREE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/Resize/BannerTap/banner 1920-220แม่2.jpg',
                    }}
                    resizeMode={FastImage.resizeMode.contain} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> FlashSale
export class FlashSale extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date(),
            dataService: [],
            endTime: new Date(),
        };
    }
    getData = (dataService) => {
        const { getActiveDataService } = this.props
        var flash_end = dataService.flash_end && dataService.flash_end.split(':')
        getActiveDataService(false)
        this.setState({ dataService, endTime: new Date().setHours(flash_end[0], flash_end[1], flash_end[2]) })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick() {
        this.setState({
            curTime: new Date()
        });
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    render() {
        const { activeDataService, getActiveDataService, navigation } = this.props
        const { curTime, dataService, endTime, } = this.state
        var uri = finip + '/flashsale/flash_timer';
        var Hours = 0
        var Minutes = 0
        var Seconds = 0
        endTime && ([
            Hours = Number(new Date(endTime).getHours()) - Number(new Date(curTime).getHours()),
            (Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) > 0 && (
                Hours = Hours + ((Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) * 24)
            ),
            Minutes = Number(new Date(endTime).getMinutes()) - Number(new Date(curTime).getMinutes()),
            Seconds = Number(new Date(endTime).getSeconds()) - Number(new Date(curTime).getSeconds()),
            activeDataService == false && Hours <= 0 && Minutes <= 0 && Seconds <= 0 && ([
                getActiveDataService(true),
                this.setState({ dataService: [] })
            ]),
            Hours > 0 && (Minutes < 0 || Seconds < 0) && ([
                Hours = Hours - 1,
                Minutes = 60 + Minutes
            ]),
            Minutes > 0 && Seconds < 0 && ([
                Minutes = Minutes - 1,
                Seconds = 60 + Seconds
            ])
        ])
        return ([
            activeDataService == true &&
            <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)}
                //dataBody={dataBody}   showConsole={'FlashSale'}
                key={'FlashSale'}
            />,
            activeDataService == false && dataService &&
            <View key={'FlashSaleBox'} style={[stylesMain.FrameBackground2, { marginTop: 10 }]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBoldBold, stylesFont.FontSize3, {
                            color: '#dc3545'
                        }]}>
                            FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4 }]}>
                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <IconFontAwesome name='clock-o' size={30} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>จบใน</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                    {Hours < 10 ? Hours <= 0 ? '00' : '0' + Hours : Hours}</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                    {Minutes < 10 ? Minutes <= 0 ? '00' : '0' + Minutes : Minutes}</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                    {Seconds < 10 ? Seconds <= 0 ? '00' : '0' + Seconds : Seconds}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'FlashSaleScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        dataService && dataService.product &&
                        <ProductBox numberOfItem={12} dataService={dataService.product} navigation={navigation} mode='row4col1'
                            pointerUrl='FlashSaleScreen' pointerid_store nameSize={11} priceSize={12} dispriceSize={12} />
                    }
                </ScrollView>
            </View>
        ]);
    }
}
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export class PromotionPopular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get dataPromotionPopular() {
        const { loadData } = this.props
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
                // var { dataService } = this.state
                // return dataService &&
                //     dataService.map((item, index) => {
                //         var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
                return (
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')} key={index}>
                        <View style={[stylesMain.BoxStore2Box2]}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                    width: 160,
                                    height: 80,
                                }}
                                style={[stylesMain.BoxStore2Image2]}
                                resizeMode={FastImage.resizeMode.stretch} />
                            <View style={{
                                height: 20, paddingHorizontal: 4, padding: 1, backgroundColor: '#0A55A6', borderBottomLeftRadius: 8, borderBottomRightRadius: 8
                            }}>
                                <Text numberOfLines={1} style={[
                                    stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#fff', marginLeft: 2 }
                                ]}>
                                    {item.detail}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        // var uri = ip + '/mysql/DataServiceMain.php';
        // var dataBody = {
        //     type: 'Promotion'
        // };
        return (
            <View style={stylesMain.FrameBackground2}>
                {/* <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} /> */}
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {this.dataPromotionPopular}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export class Product_for_you extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { loadData, navigation } = this.props
        var itemT = []
        if (loadData && loadData.length)
            for (var n = 0; n < loadData.length; n += 2) {
                itemT.push({
                    item: loadData[n],
                    item2: loadData[n + 1]
                })
            }
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        FIN คัดมาเพื่อคุณ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Product_for_youScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {
                    loadData && loadData.length > 0 && itemT.length > 0 &&
                    <FlatList
                        horizontal
                        scrollEnabled={true}
                        // initialNumToRender={6}
                        data={itemT}
                        keyExtractor={(value, index) => index}
                        // ListHeaderComponent={this.renderHeader}
                        ListHeaderComponentStyle={{
                            flexDirection: 'column'
                        }}
                        renderItem={(value) =>
                            <View style={[stylesMain.ProductForYouFlexBox, stylesMain.BoxProductWarpBox]}>
                                {
                                    value.item.item &&
                                    <RenderProduct navigation={navigation} mode='row3col2' item={value.item.item} />
                                }
                                {
                                    value.item.item2 &&
                                    <RenderProduct navigation={navigation} mode='row3col2' item={value.item.item2} />
                                }
                            </View>
                        }
                    />
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
    }
}
///----------------------------------------------------------------------------------------------->>>> Highlight
export class Highlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { loadData, navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ไฮไลท์ประจำสัปดาห์</Text>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'HighlightScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        loadData &&
                        <ProductBox numberOfItem={12} dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> NewStore
export class NewStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            dataService: [],
        };
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }

    get dataNewStore() {
        const { loadData } = this.props
        // var { dataService } = this.state
        // loadData && (dataService = loadData)
        return loadData &&
            loadData.map((item, index) => {
                // return dataService &&
                //     dataService.map((item, index) => {
                // console.log('dataNewStore')
                // console.log(item)
                // var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
                return (
                    <TouchableOpacity activeOpacity={1} key={index}
                        onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store', {
                            id_slide: item.id, uri_path: 'publish_store/store_total', name_path: 'store_total'
                        })}
                    >
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxStore1Image}
                                resizeMode={FastImage.resizeMode.stretch} />
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        // var uri = ip + '/mysql/DataServiceMain.php';
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
                <View style={stylesMain.FlexRow}>
                    {this.dataNewStore}
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Exclusive
export class Exclusive extends React.Component {
    constructor(props) {
        super(props);
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { loadData, navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        สินค้าสุด Exclusive</Text>
                    <TouchableOpacity
                        onPress={this.navigationNavigateScreen.bind(this, 'ExclusiveScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        loadData &&
                        <ProductBox numberOfItem={12} dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export class CategoryProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeProductMobile: true,
            dataService: [],
        }
    }
    getActiveProductMobile = (activeProductMobile) => {
        this.setState({ activeProductMobile })
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get dataCategory() {
        const { navigation, NoStoreReCom, } = this.props
        const { activeProductMobile, dataService } = this.state
        return dataService &&
            dataService.map((item, index) => {
                // var dataMySQL = [ip ,'mysql', item.image_path, item.image_head].join('/');
                var dataMySQL = finip + '/' + item.mobile_head;
                return (
                    <View style={[stylesMain.FrameBackground2, {
                        marginTop: activeProductMobile == false ? 10 : 0,
                        backgroundColor: activeProductMobile == false ? item.bg_m : 'transparent',
                        paddingBottom: activeProductMobile == false ? 4 : 0,
                    }]} key={index}>
                        <>
                            {
                                activeProductMobile == false &&
                                <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'CategoryScreen',
                                    { id_type: item.id_type })}>
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
            })
    }
    render() {
        const { activeDataService } = this.state
        // var uri = ip + '/mysql/DataServiceMain.php';
        // var dataBody = {
        //     type: 'type'
        // };
        var uri = finip + '/home/category_mobile';
        return (
            <View>
                {[
                    activeDataService == true &&
                    <GetServices key={'activeDataService'} uriPointer={uri} getDataSource={this.getData.bind(this)} />,
                    this.dataCategory
                ]}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export class CategoryProductSubProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            dataService: [],
        }
    }
    getData = (dataService) => {
        const { getActiveProductMobile } = this.props
        getActiveProductMobile(false)
        this.setState({ dataService, activeDataService: false })
    }
    renderHeader = () => {
        const { headerData, navigation } = this.props
        return <RenderHeader navigation={navigation} item={headerData} />
    }
    render() {
        const { activeProductMobile, id_type, navigation } = this.props
        const { dataService, } = this.state
        var uri = finip + '/home/product_mobile';
        var dataBody = {
            id_type: id_type
        };
        var itemT = []
        if (dataService && dataService.length)
            for (var n = 0; n < dataService.length; n += 2) {
                itemT.push({
                    item: dataService[n],
                    item2: dataService[n + 1]
                })
            }
        return (
            <>
                {
                    activeProductMobile == true && id_type &&
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                }
                {
                    dataService && dataService.length > 0 && itemT.length > 0 &&
                    <FlatList
                        horizontal
                        scrollEnabled={true}
                        // initialNumToRender={6}
                        data={itemT}
                        keyExtractor={(item, index) => index}
                        // ListHeaderComponent={this.renderHeader}
                        ListHeaderComponentStyle={{
                            flexDirection: 'column'
                        }}
                        renderItem={(value) =>
                            <View style={[stylesMain.ProductForYouFlexBox, stylesMain.BoxProductWarpBox]}>
                                {
                                    value.item.item &&
                                    <RenderProduct navigation={navigation} mode='row3col2' item={value.item.item} />
                                }
                                {
                                    value.item.item2 &&
                                    <RenderProduct navigation={navigation} mode='row3col2' item={value.item.item2} />
                                }
                            </View>
                        }
                    />
                }
                {/* {
                        dataService && dataService.length > 0 &&
                        <ProductBox  numberOfItem={12} dataService={dataService} navigation={navigation} typeip='fin' mode='row3col2'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                    } */}
            </>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export class CategoryProductSubStore extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
        }
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    setActiveSlide = (index) => {
        this.setState({ activeSlide: index })
    }
    _renderItem = (item, index) => {
        var dataMySQL = finip + '/' + item.item.image_path + '/' + item.item.image;
        var dataMySQL2
        item.item2 && (
            dataMySQL2 = finip + '/' + item.item2.image_path + '/' + item.item2.image
        )
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
    }
    render() {
        const { id_type } = this.props
        const { dataService, activeDataService } = this.state
        var uri = finip + '/home/publish_cate_mobile';
        var dataBody = {
            promotion: 'shop',
            id_type: id_type,
        };
        var item = []
        if (dataService && dataService.banner)
            for (var n = 0; n < dataService.banner.length; n += 2) {
                item.push({
                    item: dataService.banner[n],
                    item2: dataService.banner[n + 1]
                })
            }
        return (
            <>
                {[
                    activeDataService == true &&
                    <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                    dataService && dataService.banner && (
                        <Carousel
                            key={'banner'}
                            renderItem={this._renderItem}
                            data={item}
                            loop
                            autoplay
                            autoplayInterval={3000}
                            pagination={PaginationLight} />
                        // <FlatList
                        //     horizontal
                        //     scrollEnabled={true}
                        //     // initialNumToRender={6}
                        //     data={dataService.banner}
                        //     keyExtractor={(item, index) => index}
                        //     // ListHeaderComponent={this.renderHeader}
                        //     ListHeaderComponentStyle={{
                        //         flexDirection: 'column'
                        //     }}
                        //     renderItem={(value) =>
                        //         <>
                        //             {
                        //                 value.item &&
                        //                 <RenderSubStore item={value.item} />
                        //             }
                        //         </>
                        //     }
                        // />
                        // <ScrollView horizontal>
                        //     {
                        //         item.map((item, index) => {
                        //             var dataMySQL = finip + '/' + item.item.image_path + '/' + item.item.image;
                        //             var dataMySQL2
                        //             item.item2 && (
                        //                 dataMySQL2 = finip + '/' + item.item2.image_path + '/' + item.item2.image
                        //             )
                        //             return (
                        //             );
                        //         })
                        //     }
                        // </ScrollView>
                    )
                ]}
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export class CategoryProductSubPromotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeDataService2: true,
        }
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    getData2 = (dataService2) => {
        this.setState({ dataService2, activeDataService2: false })
    }
    dataCategoryProductSubPromotion(dataService, type) {
        // const { dataService } = this.state;
        var dataMySQL = [finip, dataService && dataService.banner[0].path_mobile,
            dataService && dataService.banner[0].image].join('/');
        // console.log('dataCategoryProductSubPromotion');
        // console.log(dataMySQL);
        return (
            <View style={[type == 0 ? stylesMain.BoxStore1Box2 : stylesMain.BoxStore1Box3,
            { borderWidth: 0, }]} /*key={index}*/>
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
    }
    // get dataCategoryProductSubPromotion2() {
    //     const { dataService } = this.state;
    //     var dataMySQL = [finip, dataService && dataService.banner[0].path_mobile,
    //         dataService && dataService.banner[0].image].join('/');
    //     return dataService && (
    //         <View style={[stylesMain.BoxStore1Box3, { borderWidth: 0, }]} /*key={index}*/>
    //             {
    //                 dataService &&
    //                 <FastImage
    //                     source={{
    //                         uri: dataMySQL,
    //                     }}
    //                     resizeMode={FastImage.resizeMode.cover}
    //                     style={[stylesMain.BoxProduct1Image, { borderRadius: 6, }]} />
    //             }
    //         </View>
    //     );
    // }
    render() {
        const { id_type } = this.props
        const { activeDataService, activeDataService2, dataService, dataService2, } = this.state
        var uri = finip + '/home/publish_cate_mobile';
        var dataBody = {
            promotion: 'promotions_1',
            id_type: id_type,
        };
        var dataBody2 = {
            promotion: 'promotions_2',
            id_type: id_type,
        };
        return (
            <>
                <View style={[stylesMain.FlexRow, { width: '100%' }]}>
                    {[
                        activeDataService == true &&
                        <GetServices key={'activeDataService'} uriPointer={uri} dataBody={dataBody}
                            getDataSource={this.getData.bind(this)} />,
                        activeDataService2 == true &&
                        <GetServices key={'activeDataService2'} uriPointer={uri} dataBody={dataBody2}
                            getDataSource={this.getData2.bind(this)} />,
                        dataService && dataService.banner && dataService2 && dataService2.banner && ([
                            this.dataCategoryProductSubPromotion(dataService, 0),
                            this.dataCategoryProductSubPromotion(dataService2, 1)
                        ])
                    ]}
                </View>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Second_product
export class Second_product extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    renderItem1 = (item) => {
        return item.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + item.image
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
        })
    }
    renderItem2 = (item) => {
        return item.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + item.image
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
        })
    }
    get Second_Storeheader() {
        const { Header_Second, loadData, navigation, } = this.props
        var itemT = []
        if (loadData && loadData.product_second && loadData.product_second.length)
            for (var n = 0; n < loadData.product_second.length; n += 2) {
                itemT.push({
                    item: loadData.product_second[n],
                    item2: loadData.product_second[n + 1]
                })
            }
        var url
        loadData.mobile_bar &&
            loadData.mobile_bar.map((item) => { (url = finip + '/' + item.image_path + '/' + item.image) })
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
                                onPress={this.navigationNavigateScreen.bind(this, 'SecondScreen', { selectedIndex: 0 })}>
                                <Image
                                    style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                                    source={{ uri: url }}
                                    resizeMode='cover'
                                    resizeMethod='resize' />
                            </TouchableOpacity>
                    }
                    {
                        loadData.product_second && itemT &&
                        <FlatList
                            horizontal
                            scrollEnabled={true}
                            // initialNumToRender={6}
                            data={itemT}
                            keyExtractor={(item, index) => index}
                            // ListHeaderComponent={this.renderHeader}
                            ListHeaderComponentStyle={{
                                flexDirection: 'column'
                            }}
                            renderItem={(value) =>
                                <View style={[stylesMain.ProductForYouFlexBox, stylesMain.BoxProductWarpBox]}>
                                    {
                                        value.item.item &&
                                        <RenderProduct navigation={navigation} mode='row3col2' item={value.item.item} />
                                    }
                                    {
                                        value.item.item2 &&
                                        <RenderProduct navigation={navigation} mode='row3col2' item={value.item.item2} />
                                    }
                                </View>
                            }
                        />
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
        )
    }
    get Second_Storebody() {
        const { Header_Second, loadData, } = this.props
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
                            onPress={this.navigationNavigateScreen.bind(this, 'SecondScreen', { selectedIndex: 1 })}>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
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
            </View>
        )
    }
    _renderFooter = (item, index) => {
        var dataMySQL = finip + '/' + item.item.image_path + '/' + item.item.image;
        var dataMySQL2
        item.item2 && (
            dataMySQL2 = finip + '/' + item.item2.image_path + '/' + item.item2.image
        )
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
    }
    get Second_Storefooter() {
        const { loadData } = this.props
        var item = []
        if (loadData.mobile_slide)
            for (var n = 0; n < loadData.mobile_slide.length; n += 2) {
                item.push({
                    item: loadData.mobile_slide[n],
                    item2: loadData.mobile_slide[n + 1]
                })
            }
        return (
            <View key={'mobile_slide'} style={stylesMain.Second_Storefooter}>
                {/* <FlatList
                    horizontal
                    scrollEnabled={true}
                    // initialNumToRender={6}
                    data={loadData.mobile_slide}
                    keyExtractor={(value, index) => index}
                    // ListHeaderComponent={this.renderHeader}
                    ListHeaderComponentStyle={{
                        flexDirection: 'column'
                    }}
                    renderItem={(value) =>
                        <>
                            {
                                value.item &&
                                <RenderSubStore item={value.item} />
                            }
                        </>
                    }
                /> */}
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
        )
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                {[
                    this.Second_Storeheader,
                    this.Second_Storebody,
                    this.Second_Storefooter
                ]}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Fin_Mall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    productCate = (type) => {
        return type.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
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
            )
        })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { loadData } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>Fin Mall </Text>
                <View style={[stylesMain.FlexRow, stylesMain.FinMall_Box]}>
                    <View style={[stylesMain.ItemCenter, stylesMain.FinMall_Box_Image]}>
                        {/* <FastImage
                            style={stylesMain.FinMall_Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Unicorn/03.png',
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        /> */}
                    </View>
                    <View style={stylesMain.FinMall_ScrollView}>
                        <ScrollView horizontal>
                            {
                                loadData.product_hit &&
                                <TouchableOpacity
                                    key={'product_hit'}
                                    activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this, 'FinMallScreen')}>
                                    <View style={stylesMain.FlexRow}>
                                        {this.productCate(loadData.product_hit)}
                                    </View>
                                </TouchableOpacity>
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> FIN_Supermarket
export class FIN_Supermarket extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.navigate(value, value2)
    }
    render() {
        const { loadData, navigation } = this.props
        const { product_hit } = loadData
        return (
            <View style={stylesMain.FrameBackground2}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>FIN Supermarket  </Text>
                <Slide />
                <View style={stylesMain.Supermarket_Product}>
                    <ScrollView horizontal>
                        {
                            product_hit &&
                            <ProductBox dataService={product_hit} navigation={navigation} typeip='fin' mode='row3col1'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} widthBox={98} radiusBox={5} />
                        }
                    </ScrollView>
                </View>
                <View style={[stylesMain.FlexRow, stylesMain.Supermarket_Store]}>
                    <TouchableOpacity
                        onPress={this.navigationNavigateScreen.bind(this, 'FINSupermarket')}
                        style={{ width: width * 0.64, }}>
                        <Image
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_banner01.jpg',
                            }}
                            resizeMode='stretch'
                            resizeMethod='resize' />
                    </TouchableOpacity>
                    <View style={{ width: width * 0.32, justifyContent: 'space-between' }}>
                        <View style={stylesMain.Supermarket_Image}>
                            <Image
                                style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/Image_FinMall/supermarket-04.jpg',
                                }}
                                resizeMode='stretch'
                                resizeMethod='resize' />
                        </View>
                        <View style={stylesMain.Supermarket_Image}>
                            <Image
                                style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/Image_FinMall/supermarket-04.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/logo-foodland.png',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={stylesMain.Supermarket_Brand_Image}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/logo-maxvalu.png',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                </View>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/Image_FinMall/market_banner06.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand01.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand02.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand03.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand04.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand04.jpg',
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
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand02.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand03.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand04.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand05.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand06.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                    <View style={[stylesMain.ItemCenter, stylesMain.Supermarket_Brand_Shop2]}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/Image_FinMall/market_brand07.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class TodayProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { loadData, navigation, noTitle, onShow, prepath, typeip, } = this.props
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
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Botton_PopUp_FIN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSliding: false,

        };
    }
    toggleComponentVisibility = (activeSliding) => {
        activeSliding == true &&
            Notifications.postLocalNotification({
                // title: "Hot Sale!",
                body: "สวัสดีครับ\nต้องการให้น้องฟินช่วยด้านใดดีครับ",
                extra: "data"
            });
        this.setState({ activeSliding });
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { activeSliding } = this.state
        // console.log(activeSliding)
        return (
            <>
                <View style={stylesMain.Botton_PopUp_FIN}>
                    {/* <View style={{ left: width - 60, transform: [{ translateY: -.09 * height }] }}> */}
                    <TouchableOpacity onPress={this.toggleComponentVisibility.bind(this, !activeSliding)}>
                        <FastImage
                            style={stylesMain.Botton_PopUp_Image}
                            source={require('../icon/FIN_Chat-01.png')}
                            resizeMode={FastImage.resizeMode.contain} />
                    </TouchableOpacity>
                </View>
                <SlidingView
                    disableDrag
                    componentVisible={activeSliding}
                    containerStyle={{
                        backgroundColor: null,
                        width: '100%',
                        top: '50%'
                    }}
                    position="right">
                    <TouchableOpacity onPress={this.toggleComponentVisibility.bind(this, !activeSliding)}>
                        <View style={stylesMain.Botton_PopUp_Box}>
                            <FastImage
                                style={stylesMain.BoxProduct1Image}
                                // source={require('../images/0044-03.png')}
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
    }
}