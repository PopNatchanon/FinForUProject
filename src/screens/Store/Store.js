///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Animated, Dimensions, Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import Carousel, { PaginationLight, } from 'react-native-x-carousel';
export const { width, height, } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../style/StylesDetailScreen'
import stylesFont from '../../style/stylesFont';
import stylesLayout from '../../style/stylesLayout';
import stylesMain, { mainColor, } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ButtomTab, EmptyProduct, ExitApp, GenArray, IconLoading, NavigationNavigate, StarReview, } from '../../customComponents';
import { FeedBox, FlatComponent, FlatProduct, GetCoupon, GetData, GetServices, ProductBox, TabBar, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup Value
const { constain, cover, stretch, } = FastImage.resizeMode;
const { Detail_Text_A, } = stylesDetail;
const { FontFamilyBold, FontFamilyBoldBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7, FontSize8, } = stylesFont;
const { FRow } = stylesLayout;
const { BackgroundAreaView, BoxProductWarp, FrameBackground, FrameBackgroundTextStart, ItemCenter, ItemCenterVertical, } = stylesMain;
const { Banner, BannerBox, BannerSlide, HeadButtom, Menubars, StoreHeads, StoreHeadBox, StoreHeadButtom, StoreHeadButtomText,
    StoreHeadDetailss, StoreHeadDetailsText1, StoreHeadDetailsText2_2, StoreHeadDetailsText2_3, StoreHeadFace, StoreHeadImage, StoreHeadText,
    StoreHeadTextOther, StoreHeadTextOther2, SubMenus, } = stylesStore;
const Navi = (naviProps) => NavigationNavigate(naviProps);
const EmptyValue = [{}];
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData,
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Store);
function Store(props) {
    const { route, } = props;
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
    const AnimatedBorderBottom = scrollY.interpolate({
        inputRange: [0, maxheight / 2],
        outputRange: ['#ffffff00', '#ffbf00'],
        extrapolate: 'clamp',
        useNativeDriver: true,
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
    const AnimatedHeadopacity = scrollY.interpolate({
        inputRange: [0, maxheight],
        outputRange: [1, 0],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const dataBody = {
        best_sale: '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        id_store: id_store,
        lastest: '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        min_price: '',
        max_price: '',
        popular: 'popular', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        sort_price: '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
    };
    const dataBody2 = {
        best_sale: filterValue.best_sale ?? '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        id_store: id_store,
        lastest: filterValue.lastest ?? '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        max_price: '',
        min_price: '',
        popular: filterValue?.popular ?? '', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
        sort_price: filterValue.sort_price ?? '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
    };
    let ImageHeader;
    const uri = `${finip}/brand/store_home`;
    const getSelectedIndex = (v) => {
        setActiveGetServices2((v * 1) == 1 ? true : false);
        setActiveRef((v * 1) == 2 ? true : false);
        setSelectedIndex(v * 1);
    };
    const getSelectedIndex2 = (v) => {
        filterValue.popular = (v.selectedIndex * 1) == 0 ? 'popular' : '';
        filterValue.best_sale = (v.selectedIndex * 1) == 1 ? 'best_sale' : '';
        filterValue.lastest = (v.selectedIndex * 1) == 2 ? 'lastest' : '';
        filterValue.sort_price = (v.selectedIndex * 1) == 3 ? v.actionReturn : '';
        setActiveGetServices2(true);
        setFilterValue(filterValue);
        setSelectedIndex2((v.selectedIndex * 1));
    };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    const getData2 = (v) => { setActiveGetServices2(false); setDataService2(v); };
    const getSource = (v) => { setActiveGetCurrentUser(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetServices && id_store !== undefined && GetServices({ dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeGetServices && id_store !== undefined]);
    useEffect(() => {
        selectedIndex == 1 && activeGetServices2 && id_store !== undefined &&
            GetServices({ dataBody: dataBody2, getDataSource: (v) => getData2(v), uriPointer: uri, });
    }, [selectedIndex == 1 && activeGetServices2 && id_store !== undefined]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, });
    }, [activeGetCurrentUser]);
    dataService?.store_data?.map((v) => { ImageHeader = { uri: `${finip}/${v.image_head_path}/${v.image_head}`, }; });
    const H_Banner1 = `${ip}/MySQL/uploads/Banner_Mobile/do44.jpg`;
    const H_Banner2 = `${ip}/MySQL/uploads/Banner_Mobile/do45.jpg`;
    const H_Banner3 = `${ip}/MySQL/uploads/Banner_Mobile/do46.jpg`;
    const MainProps = { ...props, activeGetServices, activeRef, cokie, currentUser, id_store, };
    const ViewSide = () => {
        switch (selectedIndex) {
            case 0:
                return [{
                    nameComponent: 'TicketLine',
                    renderComponent: !activeGetServices ? <TicketLine {...MainProps} key={'TicketLine'} /> : <></>,
                }, {
                    nameComponent: 'product_big_deal',
                    renderComponent: <DealTop {...MainProps} dataService={dataService?.store_data[0]?.product_big_deal} H_Banner={H_Banner1}
                        key={'product_big_deal'} titlename='ดีลเด็ด' />,
                }, {
                    nameComponent: 'product_new',
                    renderComponent: <DealTop {...MainProps} dataService={dataService?.store_data[0]?.product_new} H_Banner={H_Banner2}
                        key={'product_new'} titlename='สินค้ามาใหม่' />,
                }, {
                    nameComponent: 'PopularProduct',
                    renderComponent: <PopularProduct {...MainProps} dataService={dataService?.store_data[0]?.product_best_sale}
                        H_Banner={H_Banner3} key={'product_best_sale'} />,
                }];
            case 1:
                return [{
                    nameComponent: 'SubMenu',
                    renderComponent: <SubMenu getSelectedIndex2={(v) => getSelectedIndex2(v)} key={'SubMenu'} />,
                }, {
                    nameComponent: 'ShowProduct',
                    renderComponent: <ShowProduct {...MainProps} dataService={dataService2?.store_data[0]?.product_store} key={'ShowProduct'}
                        noTitle />,
                }];
            case 2: return [{
                nameComponent: 'BoxProduct4',
                renderComponent: <BoxProduct4 {...MainProps} key={'BoxProduct4'} sendDataOut={(v) => setActiveRef(v)} />,
            }];
            default:
                return [{
                    nameComponent: 'TicketLine',
                    renderComponent: !activeGetServices ? <TicketLine {...MainProps} key={'TicketLine'} /> : <></>,
                }, {
                    nameComponent: 'product_big_deal',
                    renderComponent: <DealTop {...MainProps} dataService={dataService?.store_data[0]?.product_big_deal} H_Banner={H_Banner1}
                        key={'product_big_deal'} titlename='ดีลเด็ด' />,
                }, {
                    nameComponent: 'product_new',
                    renderComponent: <DealTop {...MainProps} dataService={dataService?.store_data[0]?.product_new} H_Banner={H_Banner2}
                        key={'product_new'} titlename='สินค้ามาใหม่' />,
                }, {
                    nameComponent: 'PopularProduct',
                    renderComponent: <PopularProduct {...MainProps} dataService={dataService?.store_data[0]?.product_best_sale}
                        H_Banner={H_Banner3} key={'product_best_sale'} />,
                }];
        };
    };
    const itemT = [{ /////--------------------------------------------->>>Start
        nameComponent: 'EmptyView',
        renderComponent: <Animatable.View style={{ aspectRatio: 2.5, marginBottom: -55, width: (width), }}></Animatable.View>
    }, {
        nameComponent: 'StoreHeadDetails',
        renderComponent: <Animatable.View style={{ marginBottom: 3, }}>
            <StoreHeadDetails {...MainProps} dataService={dataService?.store_data ?? EmptyValue} />
        </Animatable.View>
    }, {
        nameComponent: 'Menubar',
        renderComponent: <Menubar {...MainProps} getSelectedIndex={(v) => getSelectedIndex(v)} />
    }, {
        nameComponent: 'Banners',
        renderComponent: <Banners {...MainProps} dataService={dataService?.store_data} key={'Banner'} />
    }, ...ViewSide()];
    const colors = [AnimatedHeadbg, AnimatedHeadbg2];
    return <View style={[BackgroundAreaView, { height: '100%', }]}>
        <Animatable.View style={{ height: AnimatedHead, left: 0, opacity: AnimatedHeadopacity, position: 'absolute', right: 0, top: 0, }}>
            <View style={[StoreHeads]}>
                {!activeGetServices ?
                    <Image source={ImageHeader} style={StoreHeadImage} resizeMethod='resize' resizeMode='cover' /> :
                    <View style={StoreHeadImage}>
                        <IconLoading />
                    </View>}
            </View>
        </Animatable.View>
        <Animatable.View style={{ height: 55, }}>
            <View style={{ left: 0, position: 'relative', right: 0, top: 0, }}>
                <AppBar {...MainProps} backArrow borderBottomColor={AnimatedBorderBottom} colorSet={colors} enableAnimated={AnimatedHeadbg}
                    enableSearch filterBar otherBar />
            </View>
        </Animatable.View>
        <FlatComponent component={itemT} key='Main' scrollEventThrottle={8} stickyHeaderIndices={[2, selectedIndex == 1 ? 4 : 0]}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false, })} />
        {selectedIndex == 2 && <>
            <ActionButton buttonColor={mainColor} size={50} onPress={() => Navi({
                ...MainProps, goScreen: 'Feed_Create',
                setData: { id_store, getDataSource: (v) => setActiveRef(v), store_data: dataService.store_data, },
            })} />
        </>}
        <ExitApp {...MainProps} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> StoreHead
export const StoreHead = (props) => {
    const { dataService, } = props;
    return dataService ?
        dataService.map((v, i) => {
            const ImageHead = { uri: `${finip}/${v.image_path}/${v.image}`, };
            return <View key={i} style={[StoreHeads]}>
                <View style={StoreHeadBox}>
                    <View style={FRow}>
                        <View>
                            <FastImage resizeMode={cover} source={ImageHead} style={[StoreHeadFace, { backgroundColor: '#fff', }]} />
                        </View>
                        <View>
                            <Text style={[FontFamilyBold, FontSize5, StoreHeadText]}>{v.name}</Text>
                            <Text style={[FontFamilyText, FontSize8, StoreHeadTextOther]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                            <Text style={[FontFamilyText, FontSize7, StoreHeadTextOther2]}>
                                ผู้ติดตาม {v.who_follow} | กำลังติดตาม {v.follow_number}</Text>
                        </View>
                    </View>
                    <View style={HeadButtom}>
                        <View style={StoreHeadButtom}>
                            <Text style={[FontFamilyText, FontSize7, StoreHeadButtomText]}>ติดตาม</Text>
                        </View>
                        <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Customer_Topic_Chat', })}>
                            <View style={StoreHeadButtom}>
                                <Text style={[FontFamilyText, FontSize7, StoreHeadButtomText]}>แชท</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>;
        }) : <></>;
};
///----------------------------------------------------------------------------------------------->>>> StoreHeadDetails
export const StoreHeadDetails = (props) => {
    const { activeGetServices, dataService, id_store, } = props;
    const {
        chat_performance, follow_number, image, image_path, name, product_amount, rating, rating_number, time_send, who_follow,
    } = dataService[0];
    const ImageHead = { uri: `${finip}/${image_path}/${image}`, };
    return <View style={{ backgroundColor: '#fff', height: 'auto', width, }}>
        <View style={[StoreHeads, FRow, { justifyContent: 'space-around', width: '100%', }]}>
            <View style={[ItemCenterVertical, { marginLeft: 10, width: '27%', }]}>
                {!activeGetServices ?
                    <Text style={[FontFamilyBoldBold, FontSize4, { color: '#10162d', }]}>{name}</Text> :
                    <Text style={[FontFamilyBold, FontSize5, { color: '#10162d', }]}>Store</Text>}
                {!activeGetServices ?
                    <Text style={[FontFamilyText, FontSize8, { color: '#64696F', }]}>Active เมื่อ 1 ชั่วโมง</Text> :
                    <Text style={[FontFamilyText, FontSize8, { color: '#64696F', }]}>Active เมื่อ 1 ชั่วโมง</Text>}
                {!activeGetServices ?
                    <View style={FRow}>
                        <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Store_Followers', })}>
                            <Text style={[FontFamilyText, FontSize7, { color: '#10162d', }]}>ผู้ติดตาม {who_follow} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Store_Following', })}>
                            <Text style={[FontFamilyText, FontSize7, { color: '#10162d', marginLeft: 5, }]}>กำลังติดตาม {follow_number}</Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={FRow}>
                        <Text style={[FontFamilyText, FontSize7]}>ผู้ติดตาม</Text>
                        <Text style={[FontFamilyText, FontSize7]}>กำลังติดตาม</Text>
                    </View>}
            </View>
            <View style={[StoreHeadFace, { backgroundColor: '#fff', marginLeft: 6, marginTop: -20, }]}>
                {!activeGetServices ?
                    <FastImage resizeMode={stretch} source={ImageHead} style={[StoreHeadFace,
                        { backgroundColor: '#fff', borderColor: '#ffbf00', borderWidth: 2, }]} /> :
                    <View style={[StoreHeadFace, { backgroundColor: '#ECECEC', borderColor: '#ffbf00', borderWidth: 2, }]}>
                        <IconLoading />
                    </View>}
            </View>
            <View style={{ alignItems: 'center', width: '30%', }}>
                <TouchableOpacity onPress={() => undefined}>
                    <View style={[StoreHeadButtom, { borderColor: '#10162d', borderWidth: 1, }]}>
                        <Text style={[FontFamilyBold, FontSize6, StoreHeadButtomText, { color: '#10162d', }]}>กำลังติดตาม</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'Customer_Topic_Chat', })}>
                    <LinearGradient colors={['#10162d', '#284d8f']} end={{ x: 0.5, y: 1.0, }} start={{ x: 0.0, y: 0.25, }}
                        style={[StoreHeadButtom, { borderColor: '#ffbf00', borderWidth: 1, }]}>
                        <Text style={[FontFamilyBold, FontSize6, StoreHeadButtomText, { color: '#fff', }]}>แชท</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
        <View style={
            { borderBottomColor: '#10162d', borderBottomWidth: 2, marginLeft: 'auto', marginRight: 'auto', marginTop: 5, width: '90%', }}>
        </View>
        <View style={[StoreHeadDetailss, { justifyContent: 'space-between', marginBottom: 3, paddingTop: 0, }]}>
            <View>
                <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText1]}>คะแนนร้านค้า :</Text>
                <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText1]}>รายการสินค้า :</Text>
                <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText1]}>ระยะเวลาในการจัดเตรียมพัสดุ :</Text>
                <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText1]}>ประสิทธิภาพการแชท :</Text>
            </View>
            <View>
                {!activeGetServices ?
                    <View style={[FRow]}>
                        {rating != 'ยังไม่มีการรีวิว' ?
                            <View style={[FRow, { marginBottom: -6, marginLeft: 28, marginTop: 3, }]}>
                                {StarReview(rating, 12)}
                            </View> : undefined}
                        {!activeGetServices ?
                            <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText2_3, { color: mainColor, }]}>
                                {rating != 'ยังไม่มีการรีวิว' ? `${rating} จาก 5` : rating}</Text> : <></>}
                        {!activeGetServices ?
                            <Text style={[FontFamilyText, FontSize8, StoreHeadDetailsText2_3]}>{`(${rating_number})`}</Text> : <></>}
                    </View> : <></>}
                {!activeGetServices ? <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText2_2]}>{product_amount}</Text> : <></>}
                {!activeGetServices ? <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText2_2]}>{time_send}</Text> : <></>}
                {!activeGetServices ? <Text style={[FontFamilyText, FontSize7, StoreHeadDetailsText2_2]}>
                    {chat_performance}</Text> : <></>}
            </View>
            <TouchableOpacity activeOpacity={1} onPress={() => Navi({ ...props, goScreen: 'Store_Scores', setData: { id_store, }, })}>
                <IconEntypo color={mainColor} name='chevron-right' size={25} />
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Menubar
export const Menubar = (props) => {
    const { getSelectedIndex, } = props;
    const item = [{ name: 'หน้าหลัก', }, { name: 'สินค้าทั้งหมด', }, { name: 'ฟีด', }];
    return <View>
        <View style={[Menubars]}>
            <ButtomTab colors={['#10162d', '#284d8f']} data={item} fontStyle={[FontFamilyBold, FontSize6]} linearGradient={true}
                notSelectFontColors='#10162d' sendDataOut={(v) => getSelectedIndex(v)} setHeightBox={30} setWidthBox={width * 0.31} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Banner
export const Banners = (props) => {
    const { activeGetServices, dataService, } = props;
    const slideDelay = 3000;
    const [activeText, setActiveText] = useState(false);
    const renderItem = (v, i) => {
        const ImageSlide = { uri: `${ip}/${v.image_path}/${v.image}`, };
        return <View key={i} style={BannerBox}>
            <FastImage resizeMode={stretch} source={ImageSlide} style={[BannerSlide, { borderRadius: 5, }]} />
        </View>
    };
    const getDetail = !activeGetServices ? dataService?.map((v, i) => {
        // ส่วนทดสอบ banner
        const itemT = [
            { image_path: 'MySQL/uploads/Banner_Mobile/Banner_test_Store', image: 'เพชร3.jpg' },
            { image_path: 'MySQL/uploads/Banner_Mobile/Banner_test_Store', image: '656x311-2.jpg' },
            { image_path: 'MySQL/uploads/Banner_Mobile/Banner_test_Store', image: 'กระเป๋า1.jpg' }];
        let image_banner_sub;
        image_banner_sub = itemT;
        // v.image_banner && (image_banner_sub = v.image_banner.split(';'));
        // v.image_banner && (image_banner_sub = image_banner_sub.map(
        //     (v2) => { return { image: `${finip}/${v.image_banner_path}/${v2}` } }));
        return <View key={i}>
            <View style={[Banner, { borderLeftWidth: 0, paddingLeft: 0, }]}>
                <View>
                    {image_banner_sub &&
                        <Carousel autoplay autoplayInterval={slideDelay} data={image_banner_sub} loop pagination={PaginationLight}
                            renderItem={renderItem} />}
                </View>
                <View style={{ padding: 5, }}>
                    <Text numberOfLines={4} style={[FontFamilyText, FontSize7]}>
                        Store
                        จาก CARHARTT WIP อัพเดทของใหม่เข้าร้านกับ PRONTO ของลง! รายการใหม่แกะกล่องจากร้าน PRONTO** ที่จะมาอัปเดต ⭐HIGHLIGHT⭐
                            ของเข้าใหม่ประจำสัปดาห์ พร้อมแนะนำรายละเอียดสินค้า ควบคู่ไปกับความสนุกสนาน</Text>
                    <TouchableOpacity onPress={() => setActiveText(!activeText)}>
                        <View style={[FRow, ItemCenter]}>
                            <Text style={[Detail_Text_A, FontFamilyText, FontSize7]}>{activeText ? 'ย่อ' : 'ดูเพิ่มเติม'}</Text>
                            <IconEntypo color={mainColor} name={activeText ? 'chevron-up' : 'chevron-down'} size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View stD */}
        </View>;
    }) : <View>
            <View style={[Banner, { borderColor: '#9C9C9C', borderWidth: 1, borderLeftWidth: 0, paddingLeft: 0, }]}>
                <View style={[BannerBox, { backgroundColor: '#ECECEC', borderColor: '#9C9C9C', borderWidth: 1, }]}>
                    <IconLoading />
                </View>
                <View style={{ padding: 5, height: 50, }}>
                    <Text numberOfLines={4} style={[FontFamilyText, FontSize7]}>   </Text>
                </View>
            </View>
            {/* <View stD */}
        </View>;
    return <View style={{ marginTop: 2, }}>
        {getDetail}
    </View>
};
///----------------------------------------------------------------------------------------------->>>> TicketLine
export const TicketLine = (props) => {
    const { currentUser, cokie, route, } = props;
    const [activeGetCoupon, setActiveGetCoupon] = useState(false);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(true);
    const [id_promotion, setId_promotion] = useState(true);
    const { coupon, } = dataService;
    const id_store = route.params?.id_store;
    const dataBody = {
        device: 'mobile_device',
        id_customer: currentUser?.id_customer ?? '',
        id_promotion_shop: activeGetCoupon ? id_promotion : '',
        id_store,
    };
    const uri = `${finip}/coupon/save_coupon_shop`;
    const getCoupon = (v) => { setActiveGetCoupon(true); setActiveGetServices(true); setId_promotion(v.id_promotion); };
    const getServices = (v) => { setActiveGetCoupon(false); setActiveGetServices(false); setDataService(v); };
    useEffect(() => {
        activeGetServices && cokie && GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getServices(v), uriPointer: uri, });
    }, [activeGetServices && cokie]);
    return <View key='getTicketLine' style={[FrameBackground, { marginTop: 0, }]}>
        <ScrollView horizontal>
            {/* <TouchableOpacity
            style={[stylesMain.ItemCenter, { height: 80, width: 80, backgroundColor: '#1A3263', borderRadius: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>คูปอง</Text>
        </TouchableOpacity> */}
            {coupon?.length > 0 ?
                coupon?.map(({ detail, end_period, id_promotion, my_coupon, name, }, i) => <GetCoupon
                    codeList={my_coupon == 'no' ? 'available' : ''} couponText={name} flexRow getCoupon={v2 => getCoupon(v2)}
                    key={i} saveCoupon setDataService={{ id_promotion, list: 'shop', }} textDetail={detail} timeOut={end_period} />) :
                activeGetServices ? <></> : <></>}
        </ScrollView>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> DealTop
export const DealTop = (props) => {
    const { activeGetServices, dataService, H_Banner, titlename } = props;
    const ImageBanner = { uri: H_Banner, };
    return <View style={{ backgroundColor: 'transparent', }}>
        {!activeGetServices ?
            <FastImage resizeMode={constain} source={ImageBanner} style={{ height: 45, marginTop: 3, width: '100%', }} /> :
            <View style={{
                backgroundColor: '#ECECEC', borderBottomWidth: 0.5, borderColor: '#9C9C9C', borderWidth: 1, height: 45, marginTop: 3,
                width: '100%',
            }}>
            </View>}
        {/* <LinearGradient colors={bgcolor ?? ['#fff', '#fff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <View style={[stylesMain.FRow, { paddingVertical: 5 }]}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                {titlename}</Text>
            </View>
        </LinearGradient> */}
        {dataService && !activeGetServices ?
            <FlatProduct {...props} custumNavigation='Detail' dispriceSize={15} mode='row3_new2' nameFlatProduct='DealTop' nameSize={14}
                onShow priceSize={15} /> :
            <EmptyProduct rowsOfNumber={2} />}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export const PopularProduct = (props) => {
    const { activeGetServices, dataService, headText, noHeadText, H_Banner, } = props;
    const ImageBanner = { uri: H_Banner, };
    return <View style={[BackgroundAreaView, FrameBackground, { borderColor: '#E9E9E9', }]}>
        {noHeadText ? null : !activeGetServices ? H_Banner ? <FastImage resizeMode={constain} source={ImageBanner} style={
            { height: 45, width: '100%', }} /> : <Text style={[FontFamilyBold, FontSize4, FrameBackgroundTextStart]}>{headText}</Text> :
            <View style={{
                backgroundColor: '#ECECEC', borderBottomWidth: 0.5, borderColor: '#9C9C9C', borderWidth: 1, height: 45, marginTop: 0,
                width: '100%',
            }}>
            </View>}
        <View style={[BoxProductWarp, { marginTop: 0, }]}>
            {!activeGetServices ?
                dataService && <ProductBox {...props} dispriceSize={15} mode='row2colall_new' nameSize={14} pointerid_store
                    pointerUrl='Detail' priceSize={15} /> :
                <EmptyProduct colunmsOfNumber={2} rowsOfNumber={0} />}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export const SubMenu = (props) => {
    const { getSelectedIndex2, } = props;
    const item = [{ name: 'ยอดนิยม', }, { name: 'ล่าสุด', }, { name: 'สินค้าขายดี', }, {
        actionItem: [
            <IconMaterialIcons name='unfold-more' size={15} style={[ItemCenterVertical, { color: '#6C6C6C', marginLeft: 2, }]} />,
            <IconMaterialIcons name='arrow-upward' size={15} style={[ItemCenterVertical, { color: mainColor, marginLeft: 2, }]} />,
            <IconMaterialIcons name='arrow-downward' size={15} style={[ItemCenterVertical, { color: mainColor, marginLeft: 2, }]} />],
        actionList: [1, 2], actionReturn: ['min', 'max'], name: 'ราคา',
    }];
    return <View>
        <View style={[SubMenus, { height: 45, paddingTop: 2, }]}>
            <TabBar activeColor={'#fff'} activeFontColor={mainColor} item={item} sendData={(v) => getSelectedIndex2(v)} type='tag' />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export const ShowProduct = (props) => {
    const { activeGetServices2, dataService, } = props;
    return <View style={[FrameBackground, { backgroundColor: 'transparent', borderColor: 'transparent', marginTop: 0, }]}>
        <View style={[BoxProductWarp, { marginTop: 0, }]}>
            {activeGetServices2 ?
                <EmptyProduct colunmsOfNumber={2} rowsOfNumber={0} /> : dataService?.length > 0 ?
                    <ProductBox {...props} dispriceSize={15} mode='row2colall' nameSize={14} pointerid_store pointerUrl='Detail'
                        priceSize={15} /> :
                    <View style={[ItemCenter, { height: 300, width, }]}>
                        <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>ไม่มีสินค้า</Text>
                    </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export const BoxProduct4 = (props) => {
    const { activeRef, sendDataOut, route, } = props;
    const [dataService, setDataService] = useState(undefined);
    const dataBody = { id_store, };
    const feed_news = dataService?.feed_news;
    const id_store = route.params?.id_store;
    const uri = `${finip}/brand/feed_news`;
    const getData = (v) => { setDataService(v); sendDataOut(false); };
    useEffect(() => {
        activeRef && id_store && GetServices({ dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeRef && id_store]);
    return <View style={[BackgroundAreaView, FrameBackground, { marginBottom: 0, marginTop: 1, }]}>
        <View style={[BoxProductWarp, { marginTop: 0, }]}>
            {!activeRef ?
                feed_news != 'ยังไม่มีข่าวใหม่' ?
                    feed_news?.map((v, i) => v.id_feed && <FeedBox {...props} atStore dataService={v} Follow Header key={i} />) :
                    <View style={[ItemCenter, { backgroundColor: '#fff', height: 50, width, }]}>
                        <Text style={[FontFamilyText, FontSize4, ItemCenterVertical]}>{feed_news}</Text>
                    </View> :
                <View style={{ height: height * 0.8, width, }}>
                    {GenArray(2).map((_, i) => <FeedBox {...props} activeModalize={(v) => null} dataService={{}} Follow Header key={i}
                        nodata />)}
                </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Test_Coupon = (props) => {
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
        borderBottomColor: 'red',
    }}>
    </View>;
};
