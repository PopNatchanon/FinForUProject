///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Image, ScrollView, Text, TouchableOpacity, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
} from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import Carousel, { PaginationLight, } from 'react-native-x-carousel';
export const { width, height, } = Dimensions.get('window');
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
import stylesDetail from '../../style/StylesDetailScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, Not_Internet, } from '../Main/Main';
import {
    FeedBox, GetCoupon, GetData, GetServices, ProductBox, TabBar, LoadingScreen, FlatProduct,
} from '../../customComponents/Tools';
import { StarReview, NavigationNavigate, AppBar } from '../../customComponents';
import { ButtomTab } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
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
    const AnimatedHead = scrollY.interpolate({
        inputRange: [0, maxheight],
        outputRange: [maxheight, 55],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const AnimatedHeadbg = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['#ffffff00', '#10162dff'],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    const AnimatedHeadbg2 = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['#ffffff00', '#284d8fff'],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    const AnimatedBorderBottom = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['#ffffff00', '#ffbf00'],
        extrapolate: 'clamp',
        useNativeDriver: true,
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
        popular: filterValue?.popular ?? '', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        lastest: filterValue.lastest ?? '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        best_sale: filterValue.best_sale ?? '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        sort_price: filterValue.sort_price ?? '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
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
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetServices && id_store !== undefined &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value), });
    }, [activeGetServices && id_store !== undefined]);
    useEffect(() => {
        selectedIndex == 1 && activeGetServices2 && id_store !== undefined &&
            GetServices({ uriPointer: uri, dataBody: dataBody2, getDataSource: (value) => getData2(value) });
    }, [selectedIndex == 1 && activeGetServices2 && id_store !== undefined]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (value) => getSource(value), getUser: true });
    }, [activeGetCurrentUser]);
    dataService?.store_data?.map((value) => { image_header = `${finip}/${value.image_head_path}/${value.image_head}`; });
    let H_Banner1 = `${ip}/MySQL/uploads/Banner_Mobile/do44.jpg`;
    let H_Banner2 = `${ip}/MySQL/uploads/Banner_Mobile/do45.jpg`;
    let H_Banner3 = `${ip}/MySQL/uploads/Banner_Mobile/do46.jpg`;
    let ViewSide = () => {
        switch (selectedIndex) {
            case 0:
                return [<TicketLine {...props} cokie={cokie} currentUser={currentUser} key={'TicketLine'} />,
                <DealTop {...props} activeGetServices={activeGetServices} H_Banner={H_Banner1} dataService={dataService?.store_data[0]?.product_big_deal}
                    key={'product_big_deal'} titlename='ดีลเด็ด' />,
                <DealTop {...props} activeGetServices={activeGetServices} H_Banner={H_Banner2} dataService={dataService?.store_data[0]?.product_new}
                    key={'product_new'} titlename='สินค้ามาใหม่' />,
                <PopularProduct {...props} activeGetServices={activeGetServices} H_Banner={H_Banner3}
                    dataService={dataService?.store_data[0]?.product_best_sale} key={'product_best_sale'} />];
            case 1:
                return [<SubMenu getSelectedIndex2={(value) => getSelectedIndex2(value)} key={'SubMenu'} />,
                <ShowProduct {...props} key={'ShowProduct'} activeGetServices2={activeGetServices2}
                    dataService={dataService2?.store_data[0]?.product_store} key={'ShowProduct'} noTitle />];
            case 2: return [<BoxProduct4 {...props} activeRef={activeRef} sendDataOut={(value) => setActiveRef(value)}
                key={'BoxProduct4'} />];
            default:
        };
    };
    const colors = [AnimatedHeadbg, AnimatedHeadbg2];
    return <View style={[stylesMain.BackgroundAreaView, { height: '100%', }]}>
        <Animatable.View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: AnimatedHead, opacity: AnimatedHeadopacity, }}>
            <View style={[stylesStore.StoreHead]}>
                {!activeGetServices ?
                    <Image source={{ uri: image_header }} style={stylesStore.StoreHeadImage} resizeMethod='resize' resizeMode='cover' /> :
                    <View style={stylesStore.StoreHeadImage}>
                        <ActivityIndicator style={stylesMain.ItemCenterVertical} size={30} />
                    </View>}
            </View>
        </Animatable.View>
        <Animatable.View style={{ height: 55 }}>
            <View style={{ position: 'relative', top: 0, left: 0, right: 0, }}>
                <AppBar {...props} backArrow filterBar otherBar enableSearch borderBottomColor={AnimatedBorderBottom} colorSet={colors}
                    enableAnimated={AnimatedHeadbg} />
            </View>
        </Animatable.View>
        <ScrollView scrollEventThrottle={8} stickyHeaderIndices={[2, selectedIndex == 1 ? 4 : 0]}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false, })}>
            {/* <Animatable.View style={{
                        marginTop: -40,
                        opacity: AnimatedHeadopacity,}}>
                        <StoreHead {...props} dataService={dataService && dataService.store_data} />
                    </Animatable.View> */}
            <Animatable.View style={{ width: (width), aspectRatio: 2.5, marginBottom: -55, }}></Animatable.View>
            <Animatable.View style={{ marginBottom: 3, }}>
                <StoreHeadDetails {...props} activeGetServices={activeGetServices} dataService={dataService?.store_data} />
            </Animatable.View>
            <Menubar {...props} getSelectedIndex={(value) => getSelectedIndex(value)} />
            {/* <Test_Coupon /> */}
            <Banner {...props} activeGetServices={activeGetServices} dataService={dataService?.store_data} key={'Banner'} />
            {ViewSide()}
        </ScrollView>
        {selectedIndex == 2 && <>
            <ActionButton buttonColor={mainColor} size={50} onPress={() => NavigationNavigate({
                goScreen: 'Post_Feed', setData: {
                    selectedIndex: 1, id_store, store_data: dataService.store_data, getDataSource: (value) => setActiveRef(value)
                }, navigation
            })}></ActionButton>
        </>}
        <ExitAppModule {...props} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> StoreHead
export let StoreHead = (props) => {
    const { dataService, navigation } = props;
    let getDetailStore = dataService ?
        dataService.map((value, index) => {
            var dataMySQL = `${finip}/${value.image_path}/${value.image}`
            return <View style={[stylesStore.StoreHead]} key={index}>
                <View style={stylesStore.StoreHeadBox}>
                    <View style={stylesMain.FlexRow}>
                        <View>
                            <FastImage source={{ uri: dataMySQL, }} style={[stylesStore.StoreHeadFace, { backgroundColor: '#fff' }]}
                                resizeMode={FastImage.resizeMode.cover} />
                        </View>
                        <View>
                            <Text style={[stylesStore.StoreHeadText, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{value.name}</Text>
                            <Text style={[stylesStore.StoreHeadTextOther, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                            <Text style={[stylesStore.StoreHeadTextOther2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ผู้ติดตาม {value.who_follow} | กำลังติดตาม {value.follow_number}</Text>
                        </View>
                    </View>
                    <View style={stylesStore.HeadButtom}>
                        <View style={stylesStore.StoreHeadButtom}>
                            <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>ติดตาม</Text>
                        </View>
                        <TouchableOpacity onPress={() =>
                            NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation })}>
                            <View style={stylesStore.StoreHeadButtom}>
                                <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>แชท</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>;
        }) : <></>;
    return getDetailStore;
};
///----------------------------------------------------------------------------------------------->>>> StoreHeadDetails
export let StoreHeadDetails = (props) => {
    const { activeGetServices, dataService, navigation, route } = props;
    const id_store = route.params?.id_store;
    var dataMySQL;
    dataService && (dataMySQL = `${finip}/${dataService[0]?.image_path}/${dataService[0]?.image}`);
    let getDetailStore = <View style={{ height: 'auto', width, backgroundColor: '#fff' }}>
        <View style={[stylesStore.StoreHead, stylesMain.FlexRow, { justifyContent: 'space-around', width: '100%' }]}>
            <View style={[stylesMain.ItemCenterVertical, { width: '27%', marginLeft: 10 }]}>
                {!activeGetServices ?
                    <Text style={[stylesFont.FontFamilyBoldBold, stylesFont.FontSize4, { color: '#10162d' }]}>
                        {dataService && dataService[0]?.name}</Text> :
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,
                    { color: '#10162d' }]}>Store</Text>}
                {!activeGetServices ?
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#64696F' }]}>
                        Active เมื่อ 1 ชั่วโมง</Text> :
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,
                    { color: '#64696F' }]}>Active เมื่อ 1 ชั่วโมง</Text>}
                {!activeGetServices ?
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity onPress={() => NavigationNavigate({
                            goScreen: 'Post_Feed', setData: {
                                selectedIndex: 26,
                            }, navigation
                        })}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#10162d' }]}>
                                ผู้ติดตาม {dataService && dataService[0]?.who_follow} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => NavigationNavigate({
                                goScreen: 'Post_Feed', setData: {
                                    selectedIndex: 27,
                                }, navigation
                            })}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#10162d', marginLeft: 5 }]}>
                                กำลังติดตาม {dataService && dataService[0]?.follow_number}</Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>
                            ผู้ติดตาม  </Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>
                            กำลังติดตาม</Text>
                    </View>}
            </View>
            <View style={[stylesStore.StoreHeadFace,
            { marginTop: -20, marginLeft: 6, backgroundColor: '#fff', }]}>
                {!activeGetServices ?
                    <FastImage source={{ uri: dataMySQL, }} style={[stylesStore.StoreHeadFace, {
                        backgroundColor: '#fff', borderWidth: 1, borderColor: '#ECECEC', borderWidth: 2,
                        borderColor: '#ffbf00'
                    }]} resizeMode={FastImage.resizeMode.stretch} /> :
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} size={20} />}
            </View>
            <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => undefined}>
                    <View style={[stylesStore.StoreHeadButtom, { borderColor: '#10162d', borderWidth: 1 }]}>
                        <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyBold, stylesFont.FontSize6,
                        { color: '#10162d' }]}>กำลังติดตาม</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation })}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                        colors={['#10162d', '#284d8f']} style={[stylesStore.StoreHeadButtom, { borderColor: '#ffbf00', borderWidth: 1 }]}>
                        <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyBold, stylesFont.FontSize6,
                        { color: '#fff' }]}>แชท</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
            width: '90%', borderBottomColor: '#10162d', borderBottomWidth: 2, marginTop: 5, marginLeft: 'auto', marginRight: 'auto'
        }}>
        </View>
        <View style={[stylesStore.StoreHeadDetails, { paddingTop: 0, marginBottom: 3, justifyContent: 'space-between' }]}>
            <View>
                <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>คะแนนร้านค้า :</Text>
                <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>รายการสินค้า :</Text>
                <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>ระยะเวลาในการจัดเตรียมพัสดุ :</Text>
                <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>ประสิทธิภาพการแชท :</Text>
            </View>
            <View>
                {!activeGetServices ?
                    <View style={[stylesMain.FlexRow]}>
                        {dataService && dataService[0].rating != 'ยังไม่มีการรีวิว' ?
                            <View style={[stylesMain.FlexRow, { marginLeft: 28, marginTop: 3, marginBottom: -6 }]}>
                                {StarReview(dataService[0].rating, 12)}
                            </View> : undefined}
                        {!activeGetServices ?
                            <Text style={[stylesStore.StoreHeadDetailsText2_3, stylesFont.FontFamilyText, stylesFont.FontSize7,
                            { color: mainColor }]}>
                                {dataService && dataService[0].rating != 'ยังไม่มีการรีวิว' ? `${dataService &&
                                    dataService[0].rating} จาก 5` : dataService && dataService[0].rating}</Text> : <></>}
                        {!activeGetServices ?
                            <Text style={[stylesStore.StoreHeadDetailsText2_3, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                ({dataService && dataService[0].rating_number})</Text> : <></>}
                    </View> : <></>}
                {!activeGetServices ?
                    <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        {dataService && dataService[0].product_amount}</Text> : <></>}
                {!activeGetServices ?
                    <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        {dataService && dataService[0]?.time_send}</Text> : <></>}
                {!activeGetServices ?
                    <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        {dataService && dataService[0]?.chat_performance}</Text> : <></>}
            </View>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Post_Feed', setData: { selectedIndex: 0, id_store }, navigation })}>
                <IconEntypo name='chevron-right' size={25} color={mainColor} />
            </TouchableOpacity>
        </View>
    </View>;
    return getDetailStore;
};
///----------------------------------------------------------------------------------------------->>>> Menubar
export let Menubar = (props) => {
    const { getSelectedIndex } = props;
    const item = [{ name: 'หน้าหลัก' }, { name: 'สินค้าทั้งหมด' }, { name: 'ฟีด' }];
    return <View>
        <View style={[stylesStore.Menubar]}>
            <ButtomTab colors={['#10162d', '#284d8f']} data={item} setWidthBox={width * 0.31} setHeightBox={30} fontStyle={[stylesFont.FontSize6,
            stylesFont.FontFamilyBold]} linearGradient={true} sendDataOut={(value) => getSelectedIndex(value)} notSelectFontColors='#10162d' />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Banner
export let Banner = (props) => {
    const { activeGetServices, dataService } = props;
    const slideDelay = 3000;
    const [activeText, setActiveText] = useState(false);
    let renderItem = (item, index) =>
        <View style={stylesStore.BannerBox} key={index}>
            <FastImage source={{
                uri:
                    `${ip}/${item.image_path}/${item.image}`,
                // item.image,
            }} style={[stylesStore.BannerSlide, { borderRadius: 5 }]} resizeMode={FastImage.resizeMode.stretch} />
        </View>;
    let getDetail = !activeGetServices ?
        dataService && dataService.map((value, index) => {
            // ส่วนทดสอบ banner
            const itemT = [
                { image_path: 'MySQL/uploads/Banner_Mobile/Banner_test_Store', image: 'เพชร3.jpg' },
                { image_path: 'MySQL/uploads/Banner_Mobile/Banner_test_Store', image: '656x311-2.jpg' },
                { image_path: 'MySQL/uploads/Banner_Mobile/Banner_test_Store', image: 'กระเป๋า1.jpg' },
            ];
            var image_banner_sub;
            image_banner_sub = itemT;
            // value.image_banner && (image_banner_sub = value.image_banner.split(';'));
            // value.image_banner && (image_banner_sub = image_banner_sub.map(
            //     (value2) => { return { image: `${finip}/${value.image_banner_path}/${value2}` } }));
            return <View key={index}>
                <View style={[stylesStore.Banner, { borderLeftWidth: 0, paddingLeft: 0 }]}>
                    <View>
                        {image_banner_sub &&
                            <Carousel renderItem={renderItem} data={image_banner_sub} loop autoplay autoplayInterval={slideDelay}
                                pagination={PaginationLight} />}
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            Store
                            จาก CARHARTT WIP อัพเดทของใหม่เข้าร้านกับ PRONTO ของลง! รายการใหม่แกะกล่องจากร้าน PRONTO** ที่จะมาอัปเดต ⭐HIGHLIGHT⭐
                            ของเข้าใหม่ประจำสัปดาห์ พร้อมแนะนำรายละเอียดสินค้า ควบคู่ไปกับความสนุกสนาน</Text>
                        <TouchableOpacity onPress={() => setActiveText(!activeText)}>
                            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow]}>
                                <Text style={[stylesDetail.Detail_Text_A, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    {activeText ? 'ย่อ' : 'ดูเพิ่มเติม'}</Text>
                                <IconEntypo name={activeText ? 'chevron-up' : 'chevron-down'} size={20} color={mainColor} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View stD */}
            </View>;
        }) : <View style={[stylesMain.ItemCenter, { width, height: 138 }]}>
            <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
        </View>;
    return <View style={{ marginTop: 2 }}>
        {getDetail}
    </View>
};
///----------------------------------------------------------------------------------------------->>>> TicketLine
export let TicketLine = (props) => {
    const { currentUser, cokie, route, navigation } = props;
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
    let getCoupon = values => { setActiveGetCoupon(true); setActiveGetServices(true); setId_promotion(values.id_promotion); };
    let getServices = values => { setActiveGetCoupon(false); setActiveGetServices(false); setDataService(values); };
    useEffect(() => {
        activeGetServices && cokie &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: (value) => getServices(value) });
    }, [activeGetServices && cokie]);
    let getTicketLine = <View key='getTicketLine' style={[stylesMain.FrameBackground, { marginTop: 0 }]}>
        <ScrollView horizontal>
            {/* <TouchableOpacity onPress={() => NavigationNavigate({
                goScreen: 'Post_Feed', setData: {
                    selectedIndex: 28,
                }, navigation
            })}
                style={[stylesMain.ItemCenter, { height: 80, width: 80, backgroundColor: '#1A3263', borderRadius: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>คูปอง</Text>
            </TouchableOpacity> */}
            {dataService?.coupon?.length > 0 ?
                dataService?.coupon.map((value, index) => <GetCoupon flexRow codeList={value.my_coupon == 'no' ? 'available' : ''}
                    getCoupon={values => getCoupon(values)} key={index} saveCoupon
                    setDataService={{ list: 'shop', id_promotion: value.id_promotion }} timeOut={value.end_period} couponText={value.name}
                    textDetail={value.detail} />) :
                activeGetServices ?
                    <View style={[stylesMain.ItemCenter, { width, height: 80 }]}>
                        <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                    </View> : <></>}
        </ScrollView>
    </View>;
    return getTicketLine;
};
///----------------------------------------------------------------------------------------------->>>> DealTop
export let DealTop = (props) => {
    const { activeGetServices, H_Banner, dataService, titlename } = props;
    const dataService2 = [{
        image_path: 'MySQL/uploads/petchchompoo', image: '12.jpg', id_product: 0,
        last_price: '99,000', name_product: 'กำไลเพชรครึ่งหน้าเม็ดละ 10 ตัง', type: 'local'
    }, {
        image_path: 'MySQL/uploads/petchchompoo', image: '16.jpg', id_product: 1,
        last_price: '145,000', name_product: 'สร้อยมือเพชรรอบเม็ดละ 16 ตัง', type: 'local'
    }, {
        image_path: 'MySQL/uploads/petchchompoo', image: '17.jpg', id_product: 2,
        last_price: '129,000', name_product: 'กำไลเพชรห้าสายคั่นทองลายกิ่งไผ่', type: 'local'
    }, {
        image_path: 'MySQL/uploads/petchchompoo', image: '18.jpg', id_product: 3,
        last_price: '139,000', name_product: 'สร้อยมือมรกตฝังเพชร', type: 'local'
    }, {
        image_path: 'MySQL/uploads/petchchompoo', image: '20.jpg', id_product: 4,
        last_price: '119,000', name_product: 'สร้อยมือเพชรรอบ 2.52 กะรัต', type: 'local'
    }, {
        image_path: 'MySQL/uploads/petchchompoo', image: '21.jpg', id_product: 5,
        last_price: '359,000', name_product: 'สร้อยมือไพลินซีลอนสี TOP ฝังเพชรน้ำ 100', type: 'local'
    },]
    return <View style={{ backgroundColor: 'transparent', }}>
        <FastImage
            style={{ height: 45, width: '100%', marginVertical: 3 }}
            source={{
                uri: H_Banner,
            }}
            resizeMode={FastImage.resizeMode.constain} />
        {/* <LinearGradient colors={bgcolor ?? ['#fff', '#fff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <View style={[stylesMain.FlexRow, { paddingVertical: 5 }]}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{titlename}</Text>
            </View>
        </LinearGradient> */}
        {dataService && !activeGetServices ?
            <FlatProduct {...props} custumNavigation='DetailScreen' dataService={dataService2} mode='row3_new2' nameFlatProduct='DealTop'
                nameSize={14} priceSize={15} dispriceSize={15} onShow /> :
            <View style={[stylesMain.ItemCenter, { width, height: 115 + 55 }]}>
                <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let PopularProduct = (props) => {
    const { activeGetServices, dataService, headText, noHeadText, H_Banner } = props;
    return <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { borderColor: '#E9E9E9' }]}>
        {noHeadText ? null : H_Banner ? <FastImage style={{ height: 45, width: '100%', }} source={{ uri: H_Banner, }}
            resizeMode={FastImage.resizeMode.constain} /> : <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold,
            stylesFont.FontSize4]}>{headText}</Text>
        }
        <View style={[stylesMain.BoxProductWarp, { marginTop: 0 }]}>
            {!activeGetServices ?
                dataService && <ProductBox {...props} dataService={dataService} mode='row2colall' pointerUrl='DetailScreen' pointerid_store
                    nameSize={14} priceSize={15} dispriceSize={15} /> :
                <View style={[stylesMain.ItemCenter, { width, height: 115 + 55 }]}>
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let SubMenu = (props) => {
    const { getSelectedIndex2 } = props;
    const item = [{ name: 'ยอดนิยม' }, { name: 'ล่าสุด' }, { name: 'สินค้าขายดี' }, {
        actionItem: [
            <IconMaterialIcons name='unfold-more' size={15} style={[stylesMain.ItemCenterVertical,
            { color: '#6C6C6C', marginLeft: 2 }]} />,
            <IconMaterialIcons name='arrow-upward' size={15} style={[stylesMain.ItemCenterVertical,
            { color: mainColor, marginLeft: 2 }]} />,
            <IconMaterialIcons name='arrow-downward' size={15} style={[stylesMain.ItemCenterVertical,
            { color: mainColor, marginLeft: 2 }]} />
        ], actionList: [1, 2], actionReturn: ['min', 'max'], name: 'ราคา'
    }];
    return <View>
        <View style={[stylesStore.SubMenu, { height: 45, paddingTop: 2, }]}>
            <TabBar sendData={(value) => getSelectedIndex2(value)} item={item} activeColor={'#fff'} activeFontColor={mainColor}
                type='tag' />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let ShowProduct = (props) => {
    const { activeGetServices2, dataService, } = props;
    return <View style={[stylesMain.FrameBackground, { backgroundColor: 'transparent', borderColor: 'transparent', marginTop: 0 }]}>
        <View style={[stylesMain.BoxProductWarp, { marginTop: 0 }]}>
            {activeGetServices2 ?
                <View style={[stylesMain.ItemCenter, { width, height: 300 }]}>
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                </View> : dataService?.length > 0 ?
                    <ProductBox {...props} dataService={dataService} mode='row2colall' pointerUrl='DetailScreen' pointerid_store
                        nameSize={14} priceSize={15} dispriceSize={15} /> :
                    <View style={[stylesMain.ItemCenter, { width, height: 300 }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical]}>ไม่มีสินค้า</Text>
                    </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export let BoxProduct4 = (props) => {
    const { activeRef, sendDataOut, route } = props;
    const id_store = route.params?.id_store;
    const [dataService, setDataService] = useState(undefined);
    var dataBody = { id_store };
    var uri = `${finip}/brand/feed_news`;
    let getData = (value) => { setDataService(value); sendDataOut(false); };
    useEffect(() => {
        activeRef && id_store && GetServices({
            uriPointer: uri, dataBody, getDataSource: (value) => getData(value), showConsole: 'feed_news'
        });
    }, [activeRef && id_store]);
    return <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { marginTop: 1, marginBottom: 0 }]}>
        <View style={[stylesMain.BoxProductWarp, { marginTop: 0, }]}>
            {!activeRef ?
                dataService?.feed_news != 'ยังไม่มีข่าวใหม่' ?
                    dataService?.feed_news.map((value, index) => value.id_feed && <FeedBox {...props} atStore dataService={value}
                        Follow={true} Header key={index} />) :
                    <View style={[stylesMain.ItemCenter, { width, height: 50, backgroundColor: '#fff' }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, stylesMain.ItemCenterVertical]}>
                            {dataService?.feed_news}</Text>
                    </View> :
                <View style={[stylesMain.ItemCenter, { width, height: 50, backgroundColor: '#fff' }]}>
                    <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
                </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Test_Coupon = (props) => {
    return <View style={{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    }}>
    </View>
}
