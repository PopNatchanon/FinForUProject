///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Animated, BackHandler, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import SplashScreen from 'react-native-splash-screen'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { BrowerScreen, GetServices, ProductBox, Toolbar, LoadingScreen, } from './tools/Tools';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            LoadingStart: 0,
            LoadingEnd: 0,
        };
    }
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, currentUser } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || currentUser !== nextState.currentUser || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.getDataAsync()
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }
    LoadingStart = () => {
        const { LoadingStart } = this.state
        this.setState({ LoadingStart: LoadingStart + 1 })
    }
    LoadingEnd = () => {
        const { LoadingStart } = this.state
        this.setState({ LoadingEnd: LoadingStart + 1 })
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { dataService, currentUser } = this.state
        const { navigation } = this.props
        const browerProps = navigation.getParam('browerProps')
        var uri = finip + '/home/publish_mobile'
        return browerProps ?
            ([
                <View style={{ height: 50, width }}>
                    <View style={stylesMain.ItemCenterVertical}>
                        <AppBar1 backArrow colorBar='#fff' backArrowColor='#111111' navigation={navigation} />
                    </View>
                </View>,
                <BrowerScreen url={browerProps} />
            ]) :
            (
                <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                    {
                        // LoadingEnd == LoadingStart ?
                        // null :
                        // < LoadingScreen />
                    }
                    <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
                    <AppBar navigation={navigation} />
                    <ScrollView>
                        {/* <TouchableOpacity onPress={() => navigation.push('MainScreen', { browerProps: 'https://www.finforu.com/' })}>
                            <View style={{ width }}><Text>Enter</Text></View>
                        </TouchableOpacity> */}
                        <Slide />
                        <Category navigation={navigation} />
                        <Button_Bar navigation={navigation} />
                        <FlashSale navigation={navigation} />
                        <Recommend_Brand navigation={navigation} loadData={dataService.brand} />
                        <BannerBar_TWO />
                        <Exclusive navigation={navigation} loadData={dataService.exclusive} />
                        <NewStore navigation={navigation} loadData={dataService.dont_miss} />
                        <Highlight navigation={navigation} loadData={dataService.hi_week} />
                        <PromotionPopular navigation={navigation} loadData={dataService.recommend_store} />
                        <Popular_store navigation={navigation} loadData={dataService.store_good} />
                        <Popular_product navigation={navigation} loadData={{
                            product_hit: dataService.product_hit, best_price: dataService.best_price,
                            best_sale: dataService.best_sale, best_cool: dataService.best_cool
                        }} />
                        <BannerBar_ONE />
                        <Product_for_you navigation={navigation} loadData={dataService.for_you} />
                        <CategoryProduct navigation={navigation} />
                        <Second_product navigation={navigation} loadData={{
                            product_second: dataService.product_second, list_store2_1: dataService.list_store2_1,
                            list_store2_2: dataService.list_store2_2, list_store2_3: dataService.list_store2_3,
                            mobile_bar: dataService.mobile_bar, mobile_slide: dataService.mobile_slide,
                        }} />
                        <BannerBar_THREE />
                        <TodayProduct navigation={navigation} loadData={dataService.for_you2} />
                    </ScrollView>
                    <Toolbar navigation={navigation} />
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
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { backClickCount } = this.state
        const { navigation } = this.props
        if (backClickCount !== nextState.backClickCount || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }
    _spring = () => {
        this.setState({ backClickCount: 1 }, () => {
            Animated.sequence([
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
            ]).start(() => {
                this.setState({ backClickCount: 0 });
            });
        });
    }
    handleBackButton = () => {
        const { backClickCount } = this.state
        const { navigation } = this.props
        var routeProps = navigation.dangerouslyGetParent().state.routes.length
        return routeProps == 1 ? ([
            backClickCount == 1 ? BackHandler.exitApp() : this._spring(),
            true
        ]) : ([
            navigation.pop(),
            true
        ])
    };
    render() {
        return (
            <Animatable.View style={[stylesMain.animatedView, { opacity: this.springValue, transform: [{ translateY: -.08 * height }] }]}>
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
            text: '',
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { text } = this.state
        const { navigation } = this.props
        if (text !== nextState.text || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            navigation.navigate(value, value2)
    }
    setText = (text) => {
        this.setState({ text })
    }
    render() {
        const { text } = this.state
        const { ABDColor, ABGColor, AIColor, leftBar, rightBar, searchBar, SearchText } = this.props
        const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo)
        const AIconFeather = Animatable.createAnimatableComponent(IconFeather)
        const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5)
        return (
            <Animatable.View style={[stylesMain.Appbar, stylesMain.FlexRow, {
                backgroundColor: ABGColor ? ABGColor : '#fff',
                borderColor: ABDColor ? ABDColor : '#ECECEC'
            }]}>
                {
                    leftBar == 'backarrow' &&
                    <View>
                        <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                            activeOpacity={1}
                            onPress={this.navigationNavigateScreen.bind(this, 'goBack')}>
                            <AIconEntypo name="chevron-left" size={30} style={{ color: AIColor ? AIColor : '#111' }} />
                        </TouchableOpacity>
                    </View>
                }
                {
                    searchBar ?
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'goBack')}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                                <FastImage
                                    style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                    source={require('../images/sj.png')}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                    width:
                                        rightBar == 'storebar' ?
                                            leftBar == 'backarrow' ?
                                                width - 200 :
                                                width - 170 :
                                            rightBar == 'chat' ?
                                                width - 200 :
                                                width - 170,
                                }]}>
                                    <TextInput
                                        style={[
                                            stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter
                                        ]}
                                        placeholder="ค้นหาสินค้า/ร้านค้า"
                                        value={text}
                                        maxLength={30}
                                        onChangeText={this.setText}
                                    />
                                </View>
                                <IconAntDesign name="search1" size={20}
                                    style={[stylesMain.ItemCenterVertical, { marginRight: 4 }]}
                                />
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'SearchScreen', { modeStore: false })}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                                <FastImage
                                    style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                    source={require('../images/sj.png')}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                    width:
                                        rightBar == 'storebar' ?
                                            leftBar == 'backarrow' ?
                                                width - 200 :
                                                width - 170 :
                                            rightBar == 'chat' ?
                                                width - 200 :
                                                width - 170,
                                }]}>
                                    <Text style={[
                                        stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter,
                                        stylesMain.ItemCenterVertical
                                    ]}>
                                        {SearchText ? SearchText : 'ค้นหาสินค้า/ร้านค้า'}</Text>
                                </View>
                                <IconAntDesign name="search1" size={20} style={[stylesMain.ItemCenterVertical, {
                                    marginRight: 4
                                }]} />
                            </View>
                        </TouchableOpacity>
                }
                {
                    rightBar == 'storebar' ?
                        <View style={[stylesMain.ItemCenter, stylesMain.FlexRow]}>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40 }]}
                                onPress={null/*() => navigation.navigate('CartScreen')*/}>
                                <AIconFeather name="filter" size={25} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40 }]}
                                onPress={null/*() => navigation.navigate('CartScreen')*/}>
                                <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                        </View> :
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenterVertical]}>
                            {leftBar == 'backarrow' ?
                                rightBar == 'chat' &&
                                <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                    onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}>
                                    <IconAntDesign name="message1" size={25} />
                                </TouchableOpacity> :
                                <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                    onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}>
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
                            }]} onPress={this.navigationNavigateScreen.bind(this, 'CartScreen')}>
                                <IconAntDesign name="shoppingcart" size={25} />
                            </TouchableOpacity>
                        </View>
                }
            </Animatable.View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> AppBar สีคราม
export class AppBar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            navigation.navigate(value, value2)
    }
    setText = (text) => {
        this.setState({ text })
    }
    render() {
        const {
            titleHead, backArrow, backArrowColor, chatBar, colorBar, menuBar, storeBar, searchBar, settingBar, saveBar,
        } = this.props;
        return (
            <View style={colorBar ? colorBar : menuBar ? stylesStore.AppbarMenu : stylesStore.Appbar}>
                <View style={stylesMain.FlexRow}>
                    {
                        backArrow &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                            activeOpacity={1}
                            onPress={this.navigationNavigateScreen.bind(this, 'goBack')}
                        >
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
                    {
                        searchBar &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={this.navigationNavigateScreen.bind(this, 'SearchScreen', { modeStore: false })}
                        >
                            <IconAntDesign RightItem name="search1" size={25} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>
                    }{
                        settingBar &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={this.navigationNavigateScreen.bind(this, 'StoreMe_Setting')}>
                            <IconMaterialCommunityIcons name="settings-outline" size={25} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>
                    }{
                        chatBar &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}
                        >
                            <IconAntDesign RightItem name="message1" size={25} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>
                    }{
                        storeBar &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                            onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 3 })}
                        >
                            <IconFontAwesome5 RightItem name="store" size={20} style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                        </TouchableOpacity>
                    }{
                        saveBar &&
                        <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                        // onPress={() => ()}
                        >
                            <Text style={[
                                stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize4, {
                                    width: 50,
                                    marginRight: 8,
                                }]} >
                                บันทึก
                                        </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> NewSlide
// const styles = StyleSheet.create({
//     wrapper: {},
//     slide1: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#9DD6EB'
//     },
//     slide2: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#97CAE5'
//     },
//     slide3: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#92BBD9'
//     },
//     text: {
//       color: '#fff',
//       fontSize: 30,
//       fontWeight: 'bold'
//     }
//   })
// export class NewSlide extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataService: [],
//             activeSlide: 0,
//         };
//         this.getData = this.getData.bind(this)
//     }
//     getData(dataService) {
//         this.setState({ dataService })
//     }
//     _renderItem = ({ item, index }) => {
//         var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
//         return (
//             <View style={stylesMain.child} key={index}>
//                 <FastImage
//                     source={{
//                         uri: dataMySQL,
//                     }}
//                     style={stylesMain.childSlide}
//                     resizeMode={FastImage.resizeMode.stretch}
//                     onLoadStart={() => this.props.LoadingStart()}
//                     onLoadEnd={() => this.props.LoadingEnd()}
//                 />
//             </View>
//         );
//     }
//     render() {
//         const { activeSlide, dataService } = this.state
//         var dataBody = {
//             slide: 'banner'
//         };
//         var uri = finip + '/home/home_mobile'
//         return (
//             <View>
//                 <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
//                 <Swiper>
//                     <View style={styles.slide1}>
//                         <Text style={styles.text}>Hello Swiper</Text>
//                     </View>
//                     <View style={styles.slide2}>
//                         <Text style={styles.text}>Beautiful</Text>
//                     </View>
//                     <View style={styles.slide3}>
//                         <Text style={styles.text}>And simple</Text>
//                     </View>
//                 </Swiper>
//             </View >
//         );
//     }
// }
///----------------------------------------------------------------------------------------------->>>> Slide
export class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            activeSlide: 0,
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, activeSlide } = this.state
        if (dataService !== nextState.dataService || activeSlide !== nextState.activeSlide) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    getActiveSlide = (activeSlide) => {
        this.setState({ activeSlide })
    }
    _renderItem = ({ item, index }) => {
        var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
        return (
            <View style={stylesMain.child} key={index}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                        width: width * 1,
                        height: height * 0.5,
                    }}
                    style={stylesMain.childSlide}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
    get pagination() {
        const { dataService, activeSlide } = this.state;
        return (
            <View style={{ marginTop: -60, marginBottom: -15 }}>
                <Pagination
                    dotsLength={dataService.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 30,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(255, 255, 255, 0.92)',
                        borderWidth: 2,
                    }}
                    inactiveDotStyle={{
                        width: 15,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    }}
                    carouselRef={this.activeSlide}
                    tappableDots={!!this.activeSlide}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        const { dataService } = this.state
        var dataBody = {
            slide: 'banner'
        };
        var uri = finip + '/home/home_mobile'
        return (
            <View>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <Carousel
                    ref={c => this.activeSlide = c}
                    data={dataService}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    sliderHeight={height * 0.5}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    onSnapToItem={this.getActiveSlide.bind(this)}
                    removeClippedSubviews={true}
                    initialNumToRender={dataService.length}
                    maxToRenderPerBatch={1}
                    useScrollView={true}
                />
                {this.pagination}
                {/* <View style={{ flexDirection: 'row', width: '100%', marginTop: -100, marginBottom: 50, justifyContent: 'space-between' }}>
                    {
                        activeSlide == 0 ?
                            <IconIonicons name='ios-arrow-back' size={30} style={{ color: 'transparent', backgroundColor: 'transparent', }} /> :
                            <TouchableOpacity onPress={() => { this.activeSlide.snapToPrev() }}>
                                <IconIonicons name='ios-arrow-back' size={30} style={{ color: '#0A55A6', backgroundColor: '#FFFFFF', height: 40, width: 40, borderRadius: 30, borderWidth: 2, borderColor: '#E4E4E4', textAlign: 'center', textAlignVertical: 'center', }} />
                            </TouchableOpacity>
                    }
                    {
                        activeSlide == dataService.length - 1 ?
                            <IconIonicons name='ios-arrow-forward' size={30} style={{ color: 'transparent', backgroundColor: 'transparent', }} /> :
                            <TouchableOpacity onPress={() => { this.activeSlide.snapToPrev() }}>
                                <IconIonicons name='ios-arrow-forward' size={30} style={{ color: '#0A55A6', backgroundColor: '#FFFFFF', height: 40, width: 40, borderRadius: 30, borderWidth: 2, borderColor: '#E4E4E4', textAlign: 'center', textAlignVertical: 'center', }} />
                            </TouchableOpacity>
                    }
                </View> */}
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Category
export class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    get dataCategory() {
        const { dataService } = this.state
        return dataService.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + 'menu' + '/' + item.image_head;
            return (
                <View style={stylesMain.Category} key={index}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                            height: 60,
                            width: 60,
                        }}
                        style={stylesMain.Category_box}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={{ height: 20 }}>
                        <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesFont.FontCenter]}>
                            {item.name}</Text>
                    </View>
                </View>
            )
        })
    }
    render() {
        var uri = finip + '/home/category_mobile'
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
                <ScrollView horizontal>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'CategoryScreen')}>
                        <View style={stylesMain.category_A}>
                            {this.dataCategory}
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackground3}></View>
                <ScrollView horizontal>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'DealScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_5/06.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ดีลสุดพิเศษ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'CoinScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_5/07.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                FinCoin</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'CampaignScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_5/08.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                แคมเปญ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'The_BestFinScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_5/09.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                สุดคุ้มสุดฟิน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Installment_payScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_5/010.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ผ่อนชำระ 0%</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    get recommendBrand() {
        const { loadData } = this.props
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Brand')}>
                        <View style={stylesMain.Brand_image_Box}>
                            <FastImage
                                style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]}
                                source={{
                                    uri: dataMySQL,
                                    height: 28,
                                    width: 117,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props;
        navigation.navigate(value)
    }
    get PopularStoreItem() {
        const { loadData } = this.props;
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image
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
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
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
                        resizeMode={FastImage.resizeMode.contain}
                    />
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
                            }
                        />
                    </View>
                </View>
            )
        })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props;
        navigation.navigate(value, value2)
    }
    render() {
        const { loadData } = this.props
        return (
            <View>
                <View style={stylesMain.FrameBackground2}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้ายอดนิยม</Text>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Popular_productScreen', { id_item: 0, loadData: loadData })}>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <ScrollView horizontal>
                            {
                                loadData.product_hit &&
                                <TouchableOpacity activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this, 'Popular_productScreen', { id_item: 0, loadData: loadData })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{ marginLeft: 8, color: '#fff' }, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                                สินค้าสุดฮิต</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.product_hit)}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                            {
                                loadData.best_price &&
                                <TouchableOpacity activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this, 'Popular_productScreen', { id_item: 1, loadData: loadData })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{ marginLeft: 8, color: '#fff' }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                สินค้าราคาโดน</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.best_price)}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                            {
                                loadData.best_sale &&
                                <TouchableOpacity activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this, 'Popular_productScreen', { id_item: 2, loadData: loadData })}>
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{ marginLeft: 8, color: '#fff' }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                สินค้าขายดี</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.best_sale)}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                            {
                                loadData.best_cool &&
                                <TouchableOpacity activeOpacity={1}
                                    onPress={this.navigationNavigateScreen.bind(this, 'Popular_productScreen', { id_item: 3, loadData: loadData })} >
                                    <View style={stylesMain.Popular_Box_B}>
                                        <View style={stylesMain.PopularText_A}>
                                            <Text style={[{ marginLeft: 8, color: '#fff' }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                สินค้าสุดคูล</Text>
                                        </View>
                                        <View style={stylesMain.FlexRow}>
                                            {this.productCate(loadData.best_cool)}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
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
                        uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',
                        width,
                        height: 70,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
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
                        uri: ip + '/MySQL/uploads/slide/Banner_type/GlassesBannerBar.jpg',
                        width,
                        height: 70,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
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
                        uri: ip + '/MySQL/uploads/slide/banner_sale.jpg',
                        width,
                        height: 70,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> FlashSale
export class FlashSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBoldBold, stylesFont.FontSize3, { color: '#dc3545' }]}>
                            FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4 }]}>
                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <IconFontAwesome name='clock-o' size={30} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>จบใน</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                    01</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                    45</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={[stylesMain.Time_FlashSale_TimeText, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                    40</Text>
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
                        dataService &&
                        <ProductBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql' mode='row4col1'
                            pointerUrl='FlashSaleScreen' pointerid_store nameSize={11} priceSize={12} dispriceSize={12} />
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export class PromotionPopular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    get dataPromotionPopular() {
        const { loadData } = this.props
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
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
                                resizeMode={FastImage.resizeMode.stretch}
                            />
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
        return (
            <View style={stylesMain.FrameBackground2}>
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
///----------------------------------------------------------------------------------------------->>>> Confidential_PRO
export class Confidential_PRO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    get dataConfidential_PRO() {
        const { dataService } = this.state
        dataService.map((item, index) => {
            var dataMySQL = ip + '/' + 'mysql' + '/' + item.image_path + '/' + item.image;
            return (
                <View style={stylesMain.BoxStore2Box} key={index}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                            width: 160,
                            height: 60,
                        }}
                        style={stylesMain.BoxStore2Image}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
            )
        })
    }
    render() {
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'Confidential_PRO'
        };
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={stylesMain.FrameBackgroundTextStart}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <Text style={stylesMain.FrameBackgroundTextEnd}>
                        ดูทั้งหมด</Text>
                </View>
                <ScrollView horizontal>
                    <View style={stylesMain.Confidential_A}>
                        {this.dataConfidential_PRO}
                    </View>
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    render() {
        const { loadData, navigation } = this.props
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
                <ScrollView horizontal>
                    <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
                        {
                            loadData &&
                            <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col2'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                        }
                    </View>
                </ScrollView>
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
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
                        <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                        />
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
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.navigate(value, value2)
    }
    get dataNewStore() {
        const { loadData } = this.props
        return loadData &&
            loadData.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
                return (
                    <TouchableOpacity activeOpacity={1} key={index}
                        onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store', { id_item: item.id_store })}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxStore1Image}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                    </TouchableOpacity>
                )
            })
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, loadData } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
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
                        <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                        />
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
            dataService: [],
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    navigationNavigateScreen = (value) => {
        const { navigation } = this.props
        navigation.navigate(value)
    }
    get dataCategory() {
        const { dataService } = this.state
        const { NoStoreReCom, navigation } = this.props
        return dataService.map((item, index) => {
            var dataMySQL = finip + '/' + item.mobile_head;
            return (
                <View style={[stylesMain.FrameBackground2, { marginTop: 10, backgroundColor: item.bg_m }]} key={index}>
                    <View>
                        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'CategoryScreen')}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[stylesMain.CategoryProductImageHead]}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                        </TouchableOpacity>
                        <CategoryProductSubProduct navigation={navigation} id_type={item.id_type} />
                    </View>
                    {
                        NoStoreReCom ?
                            <View style={{ marginBottom: 10, }}>
                                <View style={{ marginTop: 10, }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 8, color: '#fff' }]}>
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
        var uri = finip + '/home/category_mobile';
        return (
            <View>
                <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
                {this.dataCategory}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export class CategoryProductSubProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { id_type, navigation } = this.props
        if (dataService !== nextState.dataService || id_type !== nextProps.id_type || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { id_type, navigation } = this.props
        const { dataService } = this.state
        var uri = finip + '/home/product_mobile';
        var dataBody = {
            id_type: id_type
        };
        return (
            <ScrollView horizontal>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <View style={[stylesMain.ProductForYouFlexBox, stylesMain.BoxProductWarpBox]}>
                    {
                        dataService &&
                        <ProductBox dataService={dataService} navigation={navigation} typeip='fin' mode='row3col2'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                        />
                    }
                </View>
            </ScrollView>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export class CategoryProductSubStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { activeSlide, dataService } = this.state
        const { id_type, navigation } = this.props
        if (activeSlide !== nextState.activeSlide || dataService !== nextState.dataService || id_type !== nextProps.id_type ||
            navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    _renderItem = ({ item, index }) => {
        var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
        return (
            <TouchableOpacity activeOpacity={1} key={index}
            >
                <View style={stylesMain.CategoryProductStoreBox}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                            width: '98%',
                            height: 90,
                        }}
                        style={stylesMain.CategoryProductStoreImage}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
            </TouchableOpacity>
        );
    }
    setActiveSlide = (index) => {
        this.setState({ activeSlide: index })
    }
    render() {
        const { dataService } = this.state
        const { id_type } = this.props
        var uri = finip + '/home/publish_cate_mobile';
        var dataBody = {
            promotion: 'shop',
            id_type: id_type,
        };
        return (
            <>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                {
                    dataService.banner &&
                    <Carousel
                        ref={c => this.activeSlide = c}
                        data={dataService.banner}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width * 0.49}
                        sliderHeight={90}
                        itemHeight={85}
                        onSnapToItem={this.setActiveSlide.bind(this)}
                        activeSlideAlignment={'start'}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        removeClippedSubviews={true}
                        initialNumToRender={dataService.banner.length}
                        maxToRenderPerBatch={1}
                        useScrollView={true}
                        autoplay
                        autoplayDelay={3000}
                        loop
                    />
                }
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export class CategoryProductSubPromotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            dataService2: [],
        }
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    getData2 = (dataService2) => {
        this.setState({ dataService2 })
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, dataService2 } = this.state
        const { id_type, navigation } = this.props
        if (dataService !== nextState.dataService || dataService2 !== nextState.dataService2 || id_type !== nextProps.id_type || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    get dataCategoryProductSubPromotion() {
        const { dataService } = this.state
        return dataService.banner &&
            dataService.banner.map((item, index) => {
                var dataMySQL = finip + '/' + item.path_mobile + '/' + item.image;
                return (
                    <View style={[stylesMain.BoxStore1Box2, { borderWidth: 0, }]} key={index}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                                width: width * 0.55,
                                height: 105,
                            }}
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 6, }]}
                        />
                    </View>
                );
            })
    }
    get dataCategoryProductSubPromotion2() {
        const { dataService2 } = this.state
        return dataService2.banner &&
            dataService2.banner.map((item, index) => {
                var dataMySQL = finip + '/' + item.path_mobile + '/' + item.image;
                return (
                    <View style={[stylesMain.BoxStore1Box3, { borderWidth: 0, }]} key={index}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                                width: width * 0.40,
                                height: 105,
                            }}
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 6, }]}
                        />
                    </View>
                );
            })
    }
    render() {
        const { dataService, dataService2 } = this.state
        const { id_type } = this.props
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
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                    <GetServices uriPointer={uri} dataBody={dataBody2} getDataSource={this.getData2.bind(this)} />
                    {
                        dataService.banner && dataService2.banner && ([
                            this.dataCategoryProductSubPromotion,
                            this.dataCategoryProductSubPromotion2
                        ])
                    }
                </View>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Second_product
export class Second_product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { activeSlide } = this.state
        const { loadData, navigation } = this.props
        if (activeSlide !== nextState.activeSlide || loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.navigate(value, value2)
    }
    renderItem1 = (item) => {
        return item.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + item.image
            return (
                <View key={index} style={{ width: width * 0.64, height: 196 }}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                            width: width * 0.64,
                            height: 196,
                        }}
                        style={stylesMain.bigSlideImage}
                        resizeMode={FastImage.resizeMode.cover}
                    >
                    </FastImage>
                </View>
            );
        })
    }
    renderItem2 = (item) => {
        return item.map((item, index) => {
            var dataMySQL = finip + '/' + item.image_path + '/' + item.image
            return (
                <View key={index} style={{ width: width * 0.32, height: 130 }}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                            width: width * 0.32,
                            height: 130,
                        }}
                        style={stylesMain.litleSlideImage}
                        resizeMode={FastImage.resizeMode.stretch}
                    >
                    </FastImage>
                </View>
            );
        })
    }
    get Second_Storeheader() {
        const { loadData, navigation, Header_Second } = this.props
        var url
        loadData.mobile_bar &&
            loadData.mobile_bar.map((item) => { (url = finip + '/' + item.image_path + '/' + item.image) })
        return (
            <View style={[stylesMain.FrameBackground2, { marginTop: 0, backgroundColor: loadData.bg_m, borderBottomWidth: null }]}>
                <View>
                    {
                        Header_Second ?
                            <View style={[stylesDeal.BoxText_T, { backgroundColor: '#E43333', marginLeft: -3, }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>มือสองลดราคา</Text>
                            </View> :
                            <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'SecondScreen', { selectedIndex: 0 })}>
                                <FastImage
                                    style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                                    source={{ uri: url }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            </TouchableOpacity>
                    }
                    <ScrollView horizontal>
                        <View style={[stylesMain.ProductForYouFlexBox, { height: 370 }]}>
                            {
                                loadData.product_second &&
                                <ProductBox dataService={loadData.product_second} navigation={navigation} typeip='fin' mode='row3col1'
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                                />
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
    get Second_Storebody() {
        const { loadData, Header_Second } = this.props
        return (
            <View style={stylesMain.Second_StoreFin}>
                <View style={stylesMain.Second_StoreFin_BoxHead}>
                    {
                        Header_Second ?
                            <View style={[stylesDeal.BoxText_T, { backgroundColor: '#95D370', marginLeft: -3, }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านมือสองลดราคา</Text>
                            </View> :
                            <View style={stylesMain.Text_Bar_Image}>
                                <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                    ร้านค้ามือสองแนะนำโดย FIN </Text>
                            </View>
                    }
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'SecondScreen', { selectedIndex: 1 })}>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={stylesMain.Second_StoreFin_Image}>
                        {
                            loadData.list_store2_1 &&
                            < View style={stylesMain.Second_StoreFin_ImageA}>
                                <View>
                                    {this.renderItem1(loadData.list_store2_1)}
                                </View>
                                {this.pagination}
                            </View>
                        }
                        {
                            loadData.list_store2_2 &&
                            <View>
                                <View style={stylesMain.Second_StoreFin_ImageB}>
                                    <View style={stylesMain.Second_StoreFin_ImageB_T}>
                                        {this.renderItem2([loadData.list_store2_2[0]])}
                                    </View>
                                    <View style={[stylesMain.Second_StoreFin_ImageB_T]}>
                                        {this.renderItem2([loadData.list_store2_2[1]])}
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                </View>
            </View>
        )
    }
    get getFooter() {
        const { loadData } = this.props
        return loadData.mobile_slide &&
            loadData.mobile_slide.map((item, index) => {
                var dataMySQL = finip + '/' + item.image_path + '/' + item.image;
                return (
                    <View style={stylesMain.Second_Storefooter_image} key={index}>
                        <FastImage
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                            source={{ uri: dataMySQL }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                )
            })
    }
    get Second_Storefooter() {
        return (
            <View style={stylesMain.Second_Storefooter}>
                <ScrollView horizontal>
                    <View style={stylesMain.FlexRow}>
                        {this.getFooter}
                    </View>
                </ScrollView>
            </View>
        )
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                {
                    this.Second_Storeheader
                }
                {
                    this.Second_Storebody
                }
                {
                    this.Second_Storefooter
                }
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class TodayProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { loadData, navigation } = this.props
        if (loadData !== nextProps.loadData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    render() {
        const { loadData, navigation, noTitle, prepath, typeip } = this.props
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
                        <ProductBox dataService={loadData} navigation={navigation} typeip={typeip ? 'ip' : 'fin'} mode='row3colall'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                            prepath={prepath && prepath}
                        />
                    }
                </View>
            </View>
        )
    }
}