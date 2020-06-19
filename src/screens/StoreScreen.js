///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Image, ScrollView, Text, TouchableOpacity, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import Carousel, { PaginationLight, } from 'react-native-x-carousel';
export const { width, height, } = Dimensions.get('window');
import ActionButton from 'react-native-action-button';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitAppModule, Not_Internet, } from './MainScreen';
import {
    FeedBox, GetCoupon, GetData, GetServices, ProductBox, TabBar, LoadingScreen, NavigationNavigateScreen, FlatProduct,
} from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData,
    getFetchData: state.singleFetchDataFromService,
    activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);
function StoreScreen(props) {
    const { navigation, route, } = props;
    const id_store = route.params?.id_store;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(false);
    const [activeRef, setActiveRef] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [filterValue, setFilterValue] = useState({ popular: 'popular' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndex2, setSelectedIndex2] = useState(0);
    const maxheight = 80;
    const scrollY = new Animated.Value(0);
    const AnimatedHeadopacity = scrollY.interpolate({
        inputRange: [0, maxheight],
        outputRange: [1, 0],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const AnimatedDetailsopacity = scrollY.interpolate({
        inputRange: [maxheight, maxheight + 220],
        outputRange: [1, 0],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const AnimatedHead = scrollY.interpolate({
        inputRange: [0, maxheight],
        outputRange: [maxheight, 55],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const AnimatedHeadbg = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['transparent', mainColor],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const AnimatedHeadbd = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['transparent', mainColor],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const AnimatedHeadi = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['#fff', '#fff'],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    var dataBody = {
        id_store: id_store,
        popular: 'popular', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        lastest: '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        best_sale: '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        sort_price: '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
        min_price: '',
        max_price: ''
    };
    var dataBody2 = {
        id_store: id_store,
        popular: filterValue && filterValue.popular ? filterValue.popular : '', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        lastest: filterValue && filterValue.lastest ? filterValue.lastest : '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        best_sale: filterValue && filterValue.best_sale ? filterValue.best_sale : '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        sort_price: filterValue && filterValue.sort_price ? filterValue.sort_price : '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
        min_price: '',
        max_price: ''
    };
    var image_header;
    var uri = `${finip}/brand/store_home`;
    let getSelectedIndex = (value) => {
        setActiveGetServices2((value * 1) == 1 ? true : false);
        setActiveRef((value * 1) == 2 ? true : false);
        setSelectedIndex(value * 1);
    };
    let getSelectedIndex2 = (value) => {
        filterValue.popular = (value.selectedIndex * 1) == 0 ? 'popular' : '';
        filterValue.best_sale = (value.selectedIndex * 1) == 1 ? 'best_sale' : '';
        filterValue.lastest = (value.selectedIndex * 1) == 2 ? 'lastest' : '';
        filterValue.sort_price = (value.selectedIndex * 1) == 3 ? value.actionReturn : '';
        setActiveGetServices2(true);
        setFilterValue(filterValue);
        setSelectedIndex2((value.selectedIndex * 1));
    };
    let getData = (value) => {
        setActiveGetServices(false);
        setDataService(value);
    };
    let getData2 = (value) => {
        setActiveGetServices2(false);
        setDataService2(value);
    };
    let getSource = (value) => {
        setActiveGetCurrentUser(false);
        setCokie(value.keycokie);
        setCurrentUser(value.currentUser);
    };
    useEffect(() => { activeGetServices && id_store !== undefined && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value) }); }, [selectedIndex]);
    useEffect(() => { selectedIndex == 1 && activeGetServices2 && id_store !== undefined && GetServices({ uriPointer: uri, dataBody: dataBody2, getDataSource: value => getData2(value) }); }, [selectedIndex]);
    useEffect(() => { activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true }); }, [activeGetCurrentUser]);
    dataService?.store_data?.map((value) => { image_header = `${finip}/${value.image_head_path}/${value.image_head}`; });
    let ViewSide = () => {
        switch (selectedIndex) {
            case 0:
                return ([<TicketLine {...props} cokie={cokie} currentUser={currentUser} key={'TicketLine'} />,
                <DealTop {...props} activeGetServices={activeGetServices} dataService={dataService?.store_data[0]?.product_big_deal}
                    key={'product_big_deal'} titlename='ดีลเด็ด' />,
                <DealTop {...props} activeGetServices={activeGetServices} dataService={dataService?.store_data[0]?.product_new}
                    key={'product_new'} titlename='สินค้ามาใหม่' />,
                <PopularProduct {...props} activeGetServices={activeGetServices} dataService={dataService?.store_data[0]?.product_best_sale}
                    key={'product_best_sale'} />]);
            case 1:
                return ([<SubMenu getSelectedIndex2={value => getSelectedIndex2(value)} key={'SubMenu'} />,
                <ShowProduct {...props} key={'ShowProduct'} activeGetServices2={activeGetServices2}
                    dataService={dataService2?.store_data[0]?.product_store} noTitle />]);
            case 2: return ([<BoxProduct4 {...props} activeRef={activeRef} getDataSource={value => setActiveRef(value)} key={'BoxProduct4'} />]);
            default:
        };
    };
    return (<View style={[stylesMain.BackgroundAreaView, { height: '100%', }]}>
        <Animatable.View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: AnimatedHead, opacity: AnimatedHeadopacity, }}>
            <View style={[stylesStore.StoreHead]}>
                {activeGetServices == false ?
                    <Image source={{ uri: image_header }} style={stylesStore.StoreHeadImage} resizeMethod='resize' resizeMode='cover' /> :
                    <View style={stylesStore.StoreHeadImage}>
                        <ActivityIndicator style={stylesMain.ItemCenterVertical} size={30} />
                    </View>}
            </View>
        </Animatable.View>
        <Animatable.View style={{ height: 55 }}>
            <View style={{ position: 'relative', top: 0, left: 0, right: 0, }}>
                <AppBar {...props} backArrow filterBar otherBar ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbd} AIColor={AnimatedHeadi} />
            </View>
        </Animatable.View>
        <ScrollView
            scrollEventThrottle={8}
            stickyHeaderIndices={[2, selectedIndex == 1 ? 4 : 2]}
            onScroll={
                Animated.event(
                    [{
                        nativeEvent: { contentOffset: { y: scrollY } }
                    }],
                    {
                        useNativeDriver: false,
                    })
            }>
            {/* <Animatable.View style={{
                        marginTop: -40,
                        opacity: AnimatedHeadopacity,
                    }}>
                        <StoreHead {...props} dataService={dataService && dataService.store_data} />
                    </Animatable.View> */}
            <Animatable.View style={{
                width: (width),
                aspectRatio: 2.5,
                marginBottom: -55,
            }}></Animatable.View>
            <Animatable.View style={{
                marginBottom: 3,
            }}>
                <StoreHeadDetails {...props} activeGetServices={activeGetServices}
                    dataService={dataService?.store_data} />
            </Animatable.View>
            <Menubar {...props} getSelectedIndex={value => getSelectedIndex(value)} />
            <Banner {...props} activeGetServices={activeGetServices}
                dataService={dataService?.store_data} key={'Banner'} />
            {ViewSide()}
        </ScrollView>
        {
            selectedIndex == 2 &&
            <>
                <ActionButton buttonColor={mainColor} size={50}
                    onPress={() => NavigationNavigateScreen({
                        goScreen: 'Post_Feed', setData: {
                            selectedIndex: 1, id_store, store_data: dataService.store_data,
                            getDataSource: value => setActiveRef(value)
                        }, navigation
                    })}>
                </ActionButton>
            </>
        }
        <ExitAppModule {...props} />
    </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> StoreHead
export let StoreHead = (props) => {
    const { dataService, navigation } = props;
    let getDetailStore = (dataService ?
        (dataService.map((value, index) => {
            var dataMySQL = `${finip}/${value.image_path}/${value.image}`
            return (<View style={[stylesStore.StoreHead]} key={index}>
                <View style={stylesStore.StoreHeadBox}>
                    <View style={stylesMain.FlexRow}>
                        <View>
                            <FastImage source={{ uri: dataMySQL, }} style={[stylesStore.StoreHeadFace, { backgroundColor: '#fff' }]}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                        <View>
                            <Text style={[stylesStore.StoreHeadText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{value.name}</Text>
                            <Text style={[stylesStore.StoreHeadTextOther, stylesFont.FontFamilyText, stylesFont.FontSize8]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                            <Text style={[stylesStore.StoreHeadTextOther2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>ผู้ติดตาม {value.who_follow} | กำลังติดตาม {value.follow_number}</Text>
                        </View>
                    </View>
                    <View style={stylesStore.HeadButtom}>
                        <View style={stylesStore.StoreHeadButtom}>
                            <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>ติดตาม</Text>
                        </View>
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation })}>
                            <View style={stylesStore.StoreHeadButtom}>
                                <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>แชท</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>);
        })) :
        <></>);
    return getDetailStore;
};
///----------------------------------------------------------------------------------------------->>>> StoreHeadDetails
export let StoreHeadDetails = (props) => {
    const { activeGetServices, dataService, navigation, route } = props;
    const id_store = route.params?.id_store;
    var dataMySQL;
    dataService && (dataMySQL = `${finip}/${dataService[0]?.image_path}/${dataService[0]?.image}`);
    let getDetailStore = (
        <View style={{ height: 'auto', width, backgroundColor: '#fff' }}>
            <View style={[stylesStore.StoreHead]}>
                <View style={stylesStore.StoreHeadBox}>
                    <View style={stylesMain.FlexRow}>
                        <View style={{ backgroundColor: '#222222', marginTop: 3, marginLeft: 6, paddingRight: 6, height: 60 }}>
                            <View style={stylesMain.ItemCenterVertical}>
                                {
                                    activeGetServices == false ?
                                        <Text style={[
                                            stylesStore.StoreHeadText, stylesFont.FontFamilyBold, stylesFont.FontSize6,
                                        ]}>
                                            {dataService && dataService[0]?.name}</Text> :
                                        <Text style={[
                                            stylesStore.StoreHeadText, stylesFont.FontFamilyBold, stylesFont.FontSize6,
                                            { color: '#222222' }]}>
                                            Store</Text>
                                }
                                {
                                    activeGetServices == false ?
                                        <Text style={[
                                            stylesStore.StoreHeadTextOther, stylesFont.FontFamilyText, stylesFont.FontSize8
                                        ]}>
                                            Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text> :
                                        <Text style={[
                                            stylesStore.StoreHeadTextOther, stylesFont.FontFamilyText, stylesFont.FontSize8,
                                            { color: '#222222' }]}>
                                            Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                                }
                                {
                                    activeGetServices == false ?
                                        <Text style={[
                                            stylesStore.StoreHeadTextOther2, stylesFont.FontFamilyText, stylesFont.FontSize7,
                                        ]}>
                                            ผู้ติดตาม {dataService && dataService[0]?.who_follow} | กำลังติดตาม {dataService &&
                                                dataService[0]?.follow_number}</Text> :
                                        <Text style={[
                                            stylesStore.StoreHeadTextOther2, stylesFont.FontFamilyText, stylesFont.FontSize7,
                                            { color: '#222222' }]}>
                                            ผู้ติดตาม 0 | กำลังติดตาม 0</Text>
                                }
                            </View>
                        </View>
                        <View style={[stylesStore.StoreHeadFace, { marginTop: -20, marginLeft: 6, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ECECEC' }]}>
                            {activeGetServices == false ?
                                <FastImage source={{ uri: dataMySQL, }} style={[stylesStore.StoreHeadFace, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ECECEC' }]}
                                    resizeMode={FastImage.resizeMode.cover} /> :
                                <ActivityIndicator style={stylesMain.ItemCenterVertical} size={20} />}
                        </View>
                        <View style={[stylesStore.HeadButtom, { marginLeft: 'auto', marginRight: 'auto' }]}>
                            <TouchableOpacity onPress={() => undefined}>
                                <View style={[stylesStore.StoreHeadButtom, { backgroundColor: mainColor }]}>
                                    <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#fff' }]}>ติดตาม</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation })}>
                                <View style={[stylesStore.StoreHeadButtom, { backgroundColor: mainColor }]}>
                                    <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#fff' }]}>แชท</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{
                width: '85%', borderBottomColor: '#000', borderBottomWidth: 1, marginTop: 5, marginLeft: 'auto',
                marginRight: 'auto'
            }}></View>
            <View style={[stylesStore.StoreHeadDetails, { paddingTop: 0, marginBottom: 3, justifyContent: 'space-between' }]}>
                <View>
                    <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        คะแนนร้านค้า :</Text>
                    <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        รายการสินค้า :</Text>
                    <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        ระยะเวลาในการจัดเตรียมพัสดุ :</Text>
                    <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        ประสิทธิภาพการแชท :</Text>
                </View>
                {activeGetServices == false ?
                    <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService && dataService[0]?.product_amount}</Text> :
                    <></>}
                <View style={stylesMain.FlexRow}>
                    {activeGetServices == false ?
                        <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService && dataService[0]?.time_send}</Text> :
                        <></>}
                </View>
                <View style={stylesMain.FlexRow}>
                    {activeGetServices == false ?
                        <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>{dataService && dataService[0]?.chat_performance}</Text> :
                        <></>}
                </View>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'Post_Feed', setData: { selectedIndex: 0, id_store }, navigation })}>
                <IconEntypo name='chevron-right' size={25} color={mainColor} />
            </TouchableOpacity>
        </View>
    );
    return getDetailStore;
};
///----------------------------------------------------------------------------------------------->>>> Menubar
export let Menubar = (props) => {
    const { getSelectedIndex } = props;
    const item = [{
        name: 'หน้าหลัก'
    }, {
        name: 'สินค้าทั้งหมด'
    }, {
        name: 'ฟีด'
    }];
    return (
        <View>
            <View style={[stylesStore.Menubar]}>
                <TabBar
                    sendData={value => getSelectedIndex(value.selectedIndex)}
                    item={item}
                    widthBox={95}
                    alignBox='center'
                    radiusBox={4}
                    overScrollMode={'never'}
                    type='box' />
            </View>
        </View>);
};
///----------------------------------------------------------------------------------------------->>>> Banner
export let Banner = (props) => {
    const { activeGetServices, dataService } = props;
    const slideDelay = 3000;
    let renderItem = (item, index) => {
        return (
            <View style={stylesStore.BannerBox} key={index}>
                <FastImage
                    source={{
                        uri: item.image,
                    }}
                    style={stylesStore.BannerSlide}
                    resizeMode={FastImage.resizeMode.cover} />
            </View>
        );
    };
    let getDetail = (
        activeGetServices == false ?
            dataService && dataService.map((value, index) => {
                var image_banner_sub
                value.image_banner && (image_banner_sub = value.image_banner.split(';'));
                value.image_banner && (image_banner_sub = image_banner_sub.map((value2) => {
                    return { image: `${finip}/${value.image_banner_path}/${value2}` }
                }));
                return (
                    <View key={index}>
                        <View style={[stylesStore.Banner, { borderLeftWidth: 0, paddingLeft: 0 }]}>
                            <View>
                                {
                                    image_banner_sub &&
                                    <Carousel
                                        renderItem={renderItem}
                                        data={image_banner_sub}
                                        loop
                                        autoplay
                                        autoplayInterval={slideDelay}
                                        pagination={PaginationLight} />
                                }
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    สวัสดีค่า ยินดีต้อนรับค่ะร้านนี้รบกวนไม่ถามเล่นๆ นะคะ หากต่อราคารบกวนไม่ต่อเว่อๆนะคะ ถ้าลดได้ลดให้ค่า</Text>
                            </View>
                        </View>
                        {/* <View stD */}
                    </View>
                );
            }) :
            <View style={[stylesMain.ItemCenter, { width, height: 138 }]}>
                <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
            </View>
    );
    return (
        <View style={{ marginVertical: 3 }}>
            {getDetail}
        </View>
    );
};
///----------------------------------------------------------------------------------------------->>>> TicketLine
export let TicketLine = (props) => {
    const { currentUser, cokie, route } = props;
    const id_store = route.params?.id_store;
    const [activeGetCoupon, setActiveGetCoupon] = useState(false);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(true);
    const [id_promotion, setId_promotion] = useState(true);
    var dataBody = {
        id_customer: currentUser?.id_customer ?? '',
        device: 'mobile_device',
        id_store,
        id_promotion_shop: activeGetCoupon ? id_promotion : '',
    };
    var uri = `${finip}/coupon/save_coupon_shop`;
    let getCoupon = values => {
        setActiveGetCoupon(true);
        setActiveGetServices(true);
        setId_promotion(values.id_promotion);
    };
    let getServices = values => {
        setActiveGetCoupon(false);
        setActiveGetServices(false);
        setDataService(values);
    };
    useEffect(() => { activeGetServices && cokie && GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: value => getServices(value) }); }, [activeGetServices && cokie]);
    let getTicketLine = (<View key='getTicketLine' style={[stylesMain.FrameBackground, { marginTop: 0 }]}>
        <ScrollView horizontal>
            {dataService?.coupon?.length > 0 ?
                (dataService?.coupon.map((value, index) => {
                    return (<GetCoupon flexRow codeList={value.my_coupon == 'no' ? 'available' : ''} getCoupon={values => getCoupon(values)}
                        key={index} saveCoupon setDataService={{ list: 'shop', id_promotion: value.id_promotion }} timeOut={value.end_period}
                        couponText={value.name} textDetail={value.detail} />)
                })) :
                activeGetServices ?
                    <View style={[stylesMain.ItemCenter, { width, height: 80 }]}>
                        <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                    </View> :
                    <></>}
        </ScrollView>
    </View>);
    return getTicketLine;
};
///----------------------------------------------------------------------------------------------->>>> DealTop
export let DealTop = (props) => {
    const { activeGetServices, dataService, titlename } = props;
    return (<View style={[stylesMain.FrameBackground, { backgroundColor: null }]}>
        <View style={stylesMain.FrameBackgroundTextBox}>
            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{titlename}</Text>
        </View>
        {dataService && activeGetServices == false ?
            <FlatProduct {...props} custumNavigation='DealTop' dataService={dataService} mode='row3' nameFlatProduct='DealTop' nameSize={14}
                priceSize={15} dispriceSize={15} /> :
            <View style={[stylesMain.ItemCenter, { width, height: 115 + 55 }]}>
                <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
            </View>}
    </View>);
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let PopularProduct = (props) => {
    const { activeGetServices, dataService, headText, noHeadText } = props;
    return (<View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { borderColor: '#E9E9E9' }]}>
        {noHeadText ? null : <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{headText ?? 'สินค้าขายดี'}</Text>}
        <View style={stylesMain.BoxProductWarp}>
            {activeGetServices == false ?
                dataService && <ProductBox {...props} dataService={dataService} mode='row2colall' pointerUrl='DetailScreen' pointerid_store
                    nameSize={14} priceSize={15} dispriceSize={15} /> :
                <View style={[stylesMain.ItemCenter, { width, height: 115 + 55 }]}>
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                </View>}
        </View>
    </View>);
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let SubMenu = (props) => {
    const { getSelectedIndex2 } = props;
    const item = [
        { name: 'ยอดนิยม' }, { name: 'ล่าสุด' }, { name: 'สินค้าขายดี' }, {
            actionItem: [
                <IconMaterialIcons name='unfold-more' size={15} style={[stylesMain.ItemCenterVertical, { color: '#6C6C6C', marginLeft: 2 }]} />,
                <IconMaterialIcons name='arrow-upward' size={15} style={[stylesMain.ItemCenterVertical, { color: mainColor, marginLeft: 2 }]} />,
                <IconMaterialIcons name='arrow-downward' size={15} style={[stylesMain.ItemCenterVertical, { color: mainColor, marginLeft: 2 }]} />
            ], actionList: [1, 2], actionReturn: ['min', 'max'], name: 'ราคา'
        }];
    return (<View>
        <View style={[stylesStore.SubMenu, { height: 45, paddingTop: 2, }]}>
            <TabBar sendData={value => getSelectedIndex2(value)} item={item} activeColor={'#fff'} activeFontColor={mainColor} type='tag' />
        </View>
    </View>);
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let ShowProduct = (props) => {
    const { activeGetServices2, dataService, } = props;
    return (<View style={[stylesMain.FrameBackground]}>
        <View style={stylesMain.BoxProductWarp}>
            {activeGetServices2 ?
                <View style={[stylesMain.ItemCenter, { width, height: 300 }]}>
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                </View> :
                dataService?.length > 0 ?
                    <ProductBox {...props} dataService={dataService} mode='row2colall' pointerUrl='DetailScreen' pointerid_store nameSize={14}
                        priceSize={15} dispriceSize={15} /> :
                    <View style={[stylesMain.ItemCenter, { width, height: 300 }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical]}>ไม่มีสินค้า</Text>
                    </View>}
        </View>
    </View>);
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let BoxProduct4 = (props) => {
    const { activeRef, getDataSource, route } = props;
    const id_store = route.params?.id_store;
    const [dataService, setDataService] = useState(undefined);
    var dataBody = { id_store };
    var uri = `${finip}/brand/feed_news`;
    let getData = value => {
        setDataService(value);
        getDataSource(false);
    };
    useEffect(() => { activeRef && id_store && GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), showConsole: 'feed_news' }); }, [activeRef && id_store]);
    return (<View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { marginTop: 0, marginBottom: 10 }]}>
        <View style={stylesMain.BoxProductWarp}>
            {activeRef == false ?
                (dataService?.feed_news != 'ยังไม่มีข่าวใหม่' ?
                    dataService?.feed_news.map((value, index) => {
                        return value.id_feed && <FeedBox {...props} atStore dataService={value} Follow={true} Header key={index} />
                    }) :
                    <View style={[stylesMain.ItemCenter, { width, height: 50, backgroundColor: '#fff' }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, stylesMain.ItemCenterVertical]}>{dataService?.feed_news}</Text>
                    </View>) :
                <View style={[stylesMain.ItemCenter, { width, height: 50, backgroundColor: '#fff' }]}>
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                </View>}
        </View>
    </View>);
};