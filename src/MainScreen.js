///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Animated, BackHandler, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
    Linking
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
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
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { BrowerScreen, GetServices, ProductBox, Toolbar, LoadingScreen, } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            LoadingStart: 0,
            LoadingEnd: 0,
        };
        this.getData = this.getData.bind(this)
        this.LoadingStart = this.LoadingStart.bind(this)
        this.LoadingEnd = this.LoadingEnd.bind(this)
    }
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }
    LoadingStart() {
        this.setState({ LoadingStart: this.state.LoadingStart + 1 })
    }
    LoadingEnd() {
        this.setState({ LoadingEnd: this.state.LoadingEnd + 1 })
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
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
                    <GetServices uriPointer={uri} getDataSource={this.getData} />
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
                        <BannerBar_ONE />
                        <Exclusive navigation={navigation} loadData={dataService.exclusive} />
                        <NewStore navigation={navigation} loadData={dataService.dont_miss} />
                        <BannerBar_TWO />
                        <Highlight navigation={navigation} loadData={dataService.hi_week} />
                        <PromotionPopular navigation={navigation} loadData={dataService.recommend_store} />
                        <Popular_store navigation={navigation} loadData={dataService.store_good} />
                        <Popular_product navigation={navigation} loadData={{
                            product_hit: dataService.product_hit, best_price: dataService.best_price,
                            best_sale: dataService.best_sale, best_cool: dataService.best_cool
                        }} />
                        <BannerBar_TWO />
                        <Product_for_you navigation={navigation} loadData={dataService.for_you} />
                        <BannerBar_TWO />
                        <CategoryProduct navigation={navigation} />
                        <Second_product navigation={navigation} loadData={{
                            product_second: dataService.product_second, list_store2_1: dataService.list_store2_1,
                            list_store2_2: dataService.list_store2_2, list_store2_3: dataService.list_store2_3
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
export class ExitAppModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backClickCount: 0,
        };
        this.springValue = new Animated.Value(0);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }
    _spring() {
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
        const { navigation } = this.props
        var routeProps = navigation.dangerouslyGetParent().state.routes.length
        console.log(navigation.dangerouslyGetParent().state.routes)
        console.log(routeProps)
        return routeProps == 1 ? ([
            console.log('Exit'),
            this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring(),
            true
        ]) : ([
            console.log('Go Back'),
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
export class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }
    render() {
        const { text } = this.state
        const { ABDColor, ABGColor, AIColor, leftBar, rightBar, searchBar, navigation, SearchText } = this.props
        const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo)
        const AIconFeather = Animatable.createAnimatableComponent(IconFeather)
        const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5)
        return (
            <Animatable.View style={[stylesMain.Appbar, stylesMain.FlexRow, {
                backgroundColor: ABGColor ? ABGColor : '#fff',
                borderColor: ABDColor ? ABDColor : '#ECECEC'
            }]}>
                {
                    leftBar == 'backarrow' ?
                        <View>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                                activeOpacity={1}
                                onPress={() => navigation.goBack()}>
                                <AIconEntypo name="chevron-left" size={30} style={{ color: AIColor ? AIColor : '#111' }} />
                            </TouchableOpacity>
                        </View> :
                        null
                }
                {
                    searchBar ?
                        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.goBack() }}>
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
                                        onChangeText={(text) => this.setState({ text })}
                                    />
                                </View>
                                <IconAntDesign name="search1" size={20}
                                    style={[stylesMain.ItemCenterVertical, { marginRight: 4 }]}
                                />
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('SearchScreen', { modeStore: false }) }}>
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
                                rightBar == 'chat' ?
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                        onPress={() => navigation.navigate('Profile_Topic', { selectedIndex: 1 })}>
                                        <IconAntDesign name="message1" size={25} />
                                    </TouchableOpacity> :
                                    null :
                                <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                    onPress={() => navigation.navigate('Profile_Topic', { selectedIndex: 1 })}>
                                    <IconAntDesign name="message1" size={25} />
                                </TouchableOpacity>
                            }
                            <TouchableOpacity style={[stylesMain.ItemCenter, {
                                width:
                                    leftBar == 'backarrow' ?
                                        rightBar == 'chat' ? 40 : 50 : 40
                            }]} onPress={() => navigation.navigate('CartScreen')}>
                                <IconAntDesign name="shoppingcart" size={25} />
                            </TouchableOpacity>
                        </View>
                }
            </Animatable.View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> AppBar สีคราม
export class AppBar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { titleHead, backArrow, backArrowColor, chatBar, colorBar, menuBar, storeBar, searchBar, settingBar, navigation, } = this.props;
        return (
            <View style={colorBar ? colorBar : menuBar ? stylesStore.AppbarMenu : stylesStore.Appbar}>
                <View style={stylesMain.FlexRow}>
                    {
                        backArrow ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                                activeOpacity={1}
                                onPress={() => navigation.goBack()}
                            >
                                <IconEntypo style={[stylesStore.Icon_appbar, {
                                    color: backArrowColor ? backArrowColor : '#ffffff'
                                }]} name="chevron-left" size={30} />
                            </TouchableOpacity> :
                            null
                    }
                    <Text style={[
                        stylesStore.Text_appbar, stylesFont.FontSize3, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical
                    ]}>
                        {titleHead ? titleHead : null}</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    {
                        searchBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => navigation.navigate('SearchScreen', { modeStore: false })}
                            >
                                <IconAntDesign RightItem name="search1" size={25} style={[
                                    stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                        marginRight: 8
                                    }]} />
                            </TouchableOpacity> :
                            null
                    }{
                        settingBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => this.props.navigation.navigate('StoreMe_Setting')}>
                                <IconMaterialCommunityIcons name="settings-outline" size={25} style={[
                                    stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                        marginRight: 8
                                    }]} />
                            </TouchableOpacity> :
                            null
                    }{
                        chatBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => navigation.navigate('Profile_Topic', { selectedIndex: 1 })}
                            >
                                <IconAntDesign RightItem name="message1" size={25} style={[
                                    stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                        marginRight: 8
                                    }]} />
                            </TouchableOpacity> :
                            null
                    }{
                        storeBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => navigation.navigate('Profile_Topic', { selectedIndex: 3 })}
                            >
                                <IconFontAwesome5 RightItem name="store" size={20} style={[
                                    stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                        marginRight: 8
                                    }]} />
                            </TouchableOpacity> :
                            null
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
// export class NewSlide extends Component {
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
//         var dataMySQL = [finip, item.image_path, item.image].join('/');
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
export class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            activeSlide: 0,
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    _renderItem = ({ item, index }) => {
        var dataMySQL = [finip, item.image_path, item.image].join('/');
        return (
            <View style={stylesMain.child} key={index}>
                <FastImage
                    source={{
                        uri: dataMySQL,
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
        const { activeSlide, dataService } = this.state
        var dataBody = {
            slide: 'banner'
        };
        var uri = finip + '/home/home_mobile'
        return (
            <View>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <Carousel
                    ref={c => this.activeSlide = c}
                    data={dataService}
                    renderItem={this._renderItem}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    sliderHeight={height * 0.5}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
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
            </View >
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Category
export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    dataCategory() {
        const { dataService } = this.state
        return dataService.map((item, index) => {
            var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
            return (
                <View style={stylesMain.Category} key={index}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
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
        const { navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} getDataSource={this.getData} />
                <ScrollView horizontal>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CategoryScreen')}>
                        <View style={stylesMain.category_A}>
                            {this.dataCategory()}
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <View style={stylesMain.FrameBackground3}></View>
                <ScrollView horizontal>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DealScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ดีลสุดพิเศษ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CoinScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                FinCoin</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CampaignScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                แคมเปญ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('The_BestFinScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                สุดคุ้มสุดฟิน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Installment_payScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
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
export class Recommend_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    recommendBrand() {
        const { loadData, navigation } = this.props
        return loadData ?
            loadData.map((item, index) => {
                var dataMySQL = [finip, item.image_path, item.image].join('/')
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => navigation.navigate('Recommend_Brand')}>
                        <View style={stylesMain.Brand_image_Box}>
                            <FastImage
                                style={[stylesMain.Brand_image_RCM, stylesMain.ItemCenterVertical]}
                                source={{
                                    uri: dataMySQL,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }) :
            null
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={[stylesMain.FrameBackground2, stylesMain.FrameBackground_Height]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        แบรนด์แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Recommend_Brand')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={stylesMain.FrameBackground_Box}>
                        {this.recommendBrand()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    PopularStoreItem() {
        const { loadData, navigation } = this.props;
        return loadData ?
            loadData.map((item, index) => {
                var dataMySQL = [finip, item.image_path, item.image].join('/')
                return (
                    <TouchableOpacity activeOpacity={1} key={index} onPress={() => navigation.navigate('Recommend_Store')}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{
                                    uri: dataMySQL,
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }) :
            null
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านที่ใช่อยากให้ช้อป</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    {this.PopularStoreItem()}
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_product
export class Popular_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    productCate(type) {
        return type.map((item, index) => {
            var dataMySQL = [finip, item.image_path, item.image].join('/');
            return (
                <View style={stylesMain.Popular_Box_D} key={index}>
                    <FastImage
                        style={stylesMain.Image_icon_top}
                        source={require('../icon/top.png')}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <FastImage
                        style={stylesMain.Popular_image_Box}
                        source={{
                            uri: dataMySQL,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            )
        })
    }
    render() {
        const { loadData, navigation } = this.props
        return (
            <View>
                <View style={stylesMain.FrameBackground2}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้ายอดนิยม</Text>
                    </View>
                    <View style={stylesMain.Popular_Box_A}>
                        <ScrollView horizontal>
                            {
                                loadData.product_hit ?
                                    <View style={stylesMain.Popular_Box_B}>
                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => navigation.navigate('Popular_productScreen', {
                                                id_item: 0, loadData: loadData
                                            })}>
                                            <View style={stylesMain.Popular_Box_C}>
                                                {this.productCate(loadData.product_hit)}
                                            </View>
                                            <View style={stylesMain.PopularText_A}>
                                                <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                    สินค้าสุดฮิต</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> :
                                    null
                            }
                            {
                                loadData.best_price ?
                                    <View style={stylesMain.Popular_Box_B}>
                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => navigation.navigate('Popular_productScreen', {
                                                id_item: 1, loadData: loadData
                                            })}>
                                            <View style={stylesMain.Popular_Box_C}>
                                                {this.productCate(loadData.best_price)}
                                            </View>
                                            <View style={stylesMain.PopularText_A}>
                                                <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                    สินค้าราคาโดน</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> :
                                    null
                            }
                            {
                                loadData.best_sale ?
                                    <View style={stylesMain.Popular_Box_B}>
                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => navigation.navigate('Popular_productScreen', {
                                                id_item: 2, loadData: loadData
                                            })}>
                                            <View style={stylesMain.Popular_Box_C}>
                                                {this.productCate(loadData.best_sale)}
                                            </View>
                                            <View style={stylesMain.PopularText_A}>
                                                <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                    สินค้าขายดี</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> :
                                    null
                            }
                            {
                                loadData.best_cool ?
                                    <View style={stylesMain.Popular_Box_B}>
                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => navigation.navigate('Popular_productScreen', {
                                                id_item: 3, loadData: loadData
                                            })}>
                                            <View style={stylesMain.Popular_Box_C}>
                                                {this.productCate(loadData.best_cool)}
                                            </View>
                                            <View style={stylesMain.PopularText_A}>
                                                <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                                    สินค้าสุดคูล</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> :
                                    null
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export class BannerBar_ONE extends Component {
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
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export class BannerBar_TWO extends Component {
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
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export class BannerBar_THREE extends Component {
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
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> FlashSale
export class FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4 }]}>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={stylesMain.Time_FlashSale_TimeText}>
                                    01</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={stylesMain.Time_FlashSale_TimeText}>
                                    45</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={stylesMain.Time_FlashSale_TimeText}>
                                    40</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('FlashSaleScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql' mode='row4col1'
                                pointerUrl='FlashSaleScreen' pointerid_store nameSize={10} priceSize={12} dispriceSize={10} /> :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export class PromotionPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    dataPromotionPopular() {
        const { loadData, navigation } = this.props
        return loadData ?
            loadData.map((item, index) => {
                var dataMySQL = [finip, item.image_path, item.image].join('/');
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Recommend_Store')} key={index}>
                        <View style={[stylesMain.BoxStore2Box2]}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
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
            }) :
            null
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Recommend_Store')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {this.dataPromotionPopular()}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Confidential_PRO
export class Confidential_PRO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'Confidential_PRO'
        };
        let dataConfidential_PRO = dataService.map((item, index) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <View style={stylesMain.BoxStore2Box} key={index}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.BoxStore2Image}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
            )
        })
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={stylesMain.FrameBackgroundTextStart}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <Text style={stylesMain.FrameBackgroundTextEnd}>
                        ดูทั้งหมด</Text>
                </View>
                <ScrollView horizontal>
                    <View style={stylesMain.Confidential_A}>
                        {dataConfidential_PRO}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export class Product_for_you extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { loadData, navigation } = this.props
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        FIN คัดมาเพื่อคุณ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Product_for_youScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
                        {
                            loadData ?
                                <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col2'
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12} /> :
                                null
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Highlight
export class Highlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { loadData, navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ไฮไลท์ประจำสัปดาห์</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('HighlightScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        loadData ?
                            <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> NewStore
export class NewStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    dataNewStore() {
        const { loadData, navigation } = this.props
        return loadData ?
            loadData.map((item, index) => {
                var dataMySQL = [finip, item.image_path, item.image].join('/');
                return (
                    <TouchableOpacity activeOpacity={1} key={index}
                        onPress={() => navigation.navigate('Recommend_Store', { id_item: item.id_store })}>
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
            }) :
            null
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าห้ามพลาด!!่</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    {this.dataNewStore()}
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Exclusive
export class Exclusive extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { loadData, navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        สินค้าสุด Exclusive</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ExclusiveScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        loadData ?
                            <ProductBox dataService={loadData} navigation={navigation} typeip='fin' mode='row3col1'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export class CategoryProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { NoStoreReCom } = this.props
        var uri = finip + '/home/category_mobile';
        let dataCategory = this.state.dataService.map((item, index) => {
            var dataMySQL = [finip, item.mobile_head].join('/');
            return (
                <View style={[stylesMain.FrameBackground2, { marginTop: 10, backgroundColor: item.bg_m }]} key={index}>
                    <View style={{}}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <View style={stylesMain.FrameBackgroundTextBox}>
                            <Text></Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CategoryScreen')}>
                                <Text style={[stylesMain.FrameBackgroundTextEnd2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    ดูทั้งหมด</Text>
                            </TouchableOpacity>
                        </View>
                        <CategoryProductSubProduct navigation={this.props.navigation} id_type={item.id_type} />
                    </View>
                    {
                        NoStoreReCom ?
                            <View style={{ marginBottom: 10, }}>
                                <View style={{ marginTop: 10, }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 8, color: '#fff' }]}>
                                        ร้านนี้ผ่อนได้ </Text>
                                </View>
                                <CategoryProductSubStore navigation={this.props.navigation} id_type={item.id_type} />
                            </View> :
                            <View style={{ marginBottom: 0, }}>
                                <CategoryProductSubPromotion navigation={this.props.navigation} id_type={item.id_type} />
                            </View>
                    }
                </View>
            );
        })
        return (
            <View>
                <GetServices uriPointer={uri} getDataSource={this.getData} />
                {dataCategory}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export class CategoryProductSubProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={[stylesMain.ProductForYouFlexBox, stylesMain.BoxProductWarpBox]}>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='fin' mode='row3col2'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </View>
            </ScrollView>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export class CategoryProductSubStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    _renderItem = ({ item, index }) => {
        var dataMySQL = [finip, item.image_path, item.image].join('/');
        return (
            <TouchableOpacity activeOpacity={1} key={index}
            >
                <View style={stylesMain.CategoryProductStoreBox}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.CategoryProductStoreImage}
                    />
                </View>
            </TouchableOpacity>
        );
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {
                    dataService.banner ?
                        <Carousel
                            ref={c => this.activeSlide = c}
                            data={dataService.banner}
                            renderItem={this._renderItem}
                            sliderWidth={width}
                            itemWidth={width * 0.49}
                            sliderHeight={90}
                            itemHeight={85}
                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                            activeSlideAlignment={'start'}
                            inactiveSlideScale={1}
                            inactiveSlideOpacity={1}
                            autoplay
                            autoplayDelay={3000}
                            loop
                        /> :
                        null
                }
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export class CategoryProductSubPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            dataService2: [],
        }
        this.getData = this.getData.bind(this)
        this.getData2 = this.getData2.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    getData2(dataService2) {
        this.setState({ dataService2 })
    }
    dataCategoryProductSubPromotion() {
        const { dataService } = this.state
        return dataService.banner ?
            dataService.banner.map((item, index) => {
                var dataMySQL = [finip, item.path_mobile, item.image].join('/');
                return (
                    <View style={[stylesMain.BoxStore1Box2, { borderWidth: 0, }]} key={['B', index].join('.')}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 6, }]}
                        />
                    </View>
                );
            }) :
            null
    }
    dataCategoryProductSubPromotion2() {
        const { dataService2 } = this.state
        return dataService2.banner ?
            dataService2.banner.map((item, index) => {
                var dataMySQL = [finip, item.path_mobile, item.image].join('/');
                return (
                    <View style={[stylesMain.BoxStore1Box3, { borderWidth: 0, }]} key={['C', index].join('.')}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 6, }]}
                        />
                    </View>
                );
            }) :
            null
    }
    render() {
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
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                    <GetServices uriPointer={uri} dataBody={dataBody2} getDataSource={this.getData2} />
                    {this.dataCategoryProductSubPromotion()}
                    {this.dataCategoryProductSubPromotion2()}
                </View>
                <CategoryProductSubStore navigation={this.props.navigation} id_type={id_type} />
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Second_product
export class Second_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
        };
    }
    renderItem1(item) {
        return item.map((item, index) => {
            var dataMySQL = [finip, item.image_path, item.image].join('/')
            return (
                <View key={index} style={{ width: width * 0.64, height: 196 }}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.bigSlideImage}
                        resizeMode={FastImage.resizeMode.stretch}
                    >
                    </FastImage>
                </View>
            );
        })
    }
    renderItem2(item) {
        return item.map((item, index) => {
            var dataMySQL = [finip, item.image_path, item.image].join('/')
            return (
                <View key={index} style={{ width: width * 0.32, height: 130 }}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.litleSlideImage}
                        resizeMode={FastImage.resizeMode.stretch}
                    >
                    </FastImage>
                </View>
            );
        })
    }
    Second_Storeheader() {
        const { loadData, navigation } = this.props
        return (
            <View style={[stylesMain.FrameBackground2, { marginTop: 0, backgroundColor: loadData.bg_m, borderBottomWidth: null }]}>
                <View style={{}}>
                    <FastImage
                        style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/GlassesBannerBar.jpg' }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text></Text>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate(
                            'SecondScreen', { selectedIndex: 0 })}
                        >
                            <Text style={[stylesMain.FrameBackgroundTextEnd2, stylesFont.FontFamilyText, stylesFont.FontSize7, {
                                color: '#0A55A6'
                            }]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal>
                        {
                            loadData.product_second ?
                                <ProductBox dataService={loadData.product_second} navigation={navigation} typeip='fin' mode='row3col1'
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                                /> :
                                null
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
    Second_Storebody() {
        const { loadData, navigation } = this.props
        return (
            <View style={stylesMain.Second_StoreFin}>
                <View style={stylesMain.Second_StoreFin_BoxHead}>
                    <View style={stylesMain.Text_Bar_Image}>
                        <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                            ร้านค้ามือสองแนะนำโดย FIN </Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SecondScreen', { selectedIndex: 1 })}>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ดูทั้งหมด</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={stylesMain.Second_StoreFin_Image}>
                        {
                            loadData.list_store2_1 ?
                                < View style={stylesMain.Second_StoreFin_ImageA}>
                                    <View>
                                        {this.renderItem1(loadData.list_store2_1)}
                                    </View>
                                    {this.pagination}
                                </View> :
                                null
                        }
                        {
                            loadData.list_store2_2 ?
                                <View>
                                    <View style={stylesMain.Second_StoreFin_ImageB}>
                                        <View style={stylesMain.Second_StoreFin_ImageB_T}>
                                            {this.renderItem2([loadData.list_store2_2[0]])}
                                        </View>
                                        <View style={[stylesMain.Second_StoreFin_ImageB_T]}>
                                            {this.renderItem2([loadData.list_store2_2[1]])}
                                        </View>
                                    </View>
                                </View> :
                                null
                        }
                    </View>
                </View>
            </View>
        )
    }
    getFooter() {
        const { loadData, navigation } = this.props
        return loadData.list_store2_3 ?
            loadData.list_store2_3.map((item, index) => {
                var dataMySQL = [finip, item.image_path, item.image].join('/');
                return (
                    <View style={stylesMain.Second_Storefooter_image} key={index}>
                        <FastImage
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                            source={{ uri: dataMySQL }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                )
            }) :
            null
    }
    Second_Storefooter() {
        return (
            <View style={stylesMain.Second_Storefooter}>
                <ScrollView horizontal>
                    <View style={stylesMain.FlexRow}>
                        {this.getFooter()}
                    </View>
                </ScrollView>
            </View>
        )
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                {
                    this.Second_Storeheader()
                }
                {
                    this.Second_Storebody()
                }
                {
                    this.Second_Storefooter()
                }
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class TodayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                        loadData ?
                            <ProductBox dataService={loadData} navigation={navigation} typeip={typeip ? 'ip' : 'fin'} mode='row3colall'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                                prepath={prepath ? prepath : null}
                            /> :
                            null
                    }
                </View>
            </View>
        )
    }
}