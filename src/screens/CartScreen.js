///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListButtomDelete, cartListChecked, cartListCheckedAll, cartListCheckedStore, cartListDelete, cartListResult,
    cartListSelectCoupon, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd, setDataRefresh, setDataStart,
    setFetchToStart,
} from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import { SwipeListView } from '@nvthai/react-native-swipe-list-view';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCart from '../style/stylesCartScreen';
import stylesFont, { normalize } from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from './MainScreen';
import { GetServices, GetData, LoadingScreen } from '../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../customComponents';
import { PopularProduct } from './StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const getCartDataList = (cartData) => {
    const cartDataList = [];
    cartData?.map((value) => value.product.map((value2) => {
        if (value2.checked) return cartDataList.push(value2.id_cartdetail);
    }));
    return cartDataList;
};
const mapStateToProps = (state) => ({
    cartData: state.cartData, cartDataList: getCartDataList(state.cartData.data), couponList: state.cartData.couponList,
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService, reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListButtomDelete, cartListCheckedAll, cartListChecked, cartListCheckedStore, cartListDelete, cartListResult,
    cartListSelectCoupon, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd, setDataRefresh, setDataStart,
    setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
function CartScreen(props) {
    const {
        activeCartList, cartData, cartDataList, cartListResult, fetchData, getFetchData, reduxDataBody, setDataEnd, setFetchToStart
    } = props;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeSave2, setActiveSave2] = useState(false);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetSource(false); setCurrentUser(value.currentUser); setCokie(value.keycokie); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
    }, [activeGetSource]);
    activeSave2 && setActiveSave2(false);
    cartData && cartData.isActive && !cartData.isResult && currentUser?.id_customer &&
        cartListResult({
            cokie: cokie, id_customer: currentUser.id_customer, list_order: cartDataList.join(','),
            id_coupon: !cartData?.isOtherCoupon && cartData?.coupon ? cartData.coupon.id_coupon : '',
            text_coupon: cartData?.isOtherCoupon && cartData?.coupon ? cartData.coupon.id_coupon : ''
        })
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {/* {reduxDataBody?.isActive || reduxDataBody?.isRefresh && <LoadingScreen />} */}
        <AppBar {...props} backArrow deleteBar titleHead='รถเข็น' />
        <ScrollView>
            <Product_Cart {...props} cokie={cokie} currentUser={currentUser} />
            {/* <Product_Like /> */}
            <PopularProduct {...props} dataService={getFetchData['publish_mobile']?.data?.for_you2} headText={'คุณอาจชอบสิ่งนี้'} />
        </ScrollView>
        <Buy_bar {...props} currentUser={currentUser} cokie={cokie} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Cart
export let Product_Cart = (props) => {
    const {
        activeCartList, activeRefresh, cartData, cartDataList, cartListChecked, cartListCheckedStore, cartListDelete, cartListUpdate,
        cokie, currentUser, getFetchData, reduxDataBody, setDataRefresh, setDataStart,
    } = props;
    const [active, setActive] = useState(false);
    const [activeReload, setActiveReload] = useState(false);
    useEffect(() => {
        setActiveReload(!activeReload)
    }, [cartData])
    let renderItem = (data) => <TouchableOpacity activeOpacity={1}
        style={{ backgroundColor: '#fff', borderColor: '#ECECEC', borderRightWidth: 1, }}>
        <View style={{ flexDirection: 'row', }}>
            <CheckBox containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]} textStyle={14}
                fontFamily={'SukhumvitSet-Text'} checked={data.item.checked} onPress={() => {
                    cartListChecked(data.item.id_cartdetail, data.item.id_store, cartDataList); setActiveReload(!activeReload);
                }} />
            <View style={{
                backgroundColor: '#fffffe', width: normalize(100), height: 'auto', aspectRatio: 1, marginVertical: 3,
                borderColor: '#ECECEC', borderWidth: 1
            }}>
                <FastImage style={[stylesMain.BoxProduct2Image, { flex: 1 }]} resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: `${finip}/${data.item.path_product}/${data.item.image_product}`, }} />
            </View>
            <View style={[stylesMain.ItemCenterVertical, { marginLeft: 20 }]}>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: width * 0.38 }]}>
                    {data.item.product_name}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{`${data.item.detail_1} ${data.item.detail_2}`}</Text>
                <NumberFormat value={data.item.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
                    <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold, { color: mainColor }]}>{value}</Text>} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={1} onPress={() =>
                        (data.item.quantity * 1) - 1 > 0 && (data.item.quantity * 1) - 1 < data.item.max_remain ?
                            [cartListUpdate({
                                amount: (data.item.quantity * 1) - 1, cokie, list_order: cartDataList.join(','),
                                id_cartdetail: data.item.id_cartdetail, id_customer: currentUser.id_customer,
                                id_store: data.item.id_store,
                            })] : null}>
                        <View style={[stylesMain.ItemCenter,
                        { width: 30, height: 25, borderColor: '#ECECEC', borderRightWidth: 0, borderWidth: 1 }]}>
                            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4,
                            { color: data.item.quantity > 1 ? '#111' : '#CECECE' }]}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText,
                    { width: 50, height: 25, borderColor: '#ECECEC', borderWidth: 1 }]}>
                        <Text style={[stylesMain.ItemCenterVertical]}>{data.item.quantity}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() =>
                        (data.item.quantity * 1) + 1 > 0 && (data.item.quantity * 1) + 1 < data.item.max_remain ?
                            [cartListUpdate({
                                amount: (data.item.quantity * 1) + 1, cokie, list_order: cartDataList.join(','),
                                id_cartdetail: data.item.id_cartdetail, id_customer: currentUser.id_customer,
                                id_store: data.item.id_store,
                            })] : null}>
                        <View style={[stylesMain.ItemCenter,
                        { width: 30, height: 25, borderColor: '#ECECEC', borderLeftWidth: 0, borderWidth: 1 }]}>
                            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, {
                                color: data.item.quantity < data.item.max_remain - 1 ? '#111' : '#CECECE'
                            }]}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>;
    let renderHiddenItem = (data, rowMap,) => <View style={{
        alignItems: 'center', backgroundColor: '#DDD', flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15,
    }}>
        <TouchableOpacity style={[{
            alignItems: 'center', bottom: 0, justifyContent: 'center', position: 'absolute', top: 0, width: 75, backgroundColor: 'red',
            right: 0, borderColor: '#ECECEC', borderTopWidth: 1, borderBottomWidth: 1,
        }]} onPress={() => [cartListDelete({
            amount: (data.item.quantity * 1) + 1, cokie, list_order: data.item.id_cartdetail, id_customer: currentUser.id_customer
        }), setTimeout(() => { rowMap[data.item.key] && rowMap[data.item.key].closeRow() }, 450)]}>
            <IconFontAwesome name='trash-o' size={30} style={{ color: '#fff' }} />
        </TouchableOpacity>
    </View>;
    return <View>
        {active && <LoadingScreen />}
        {cartData && cartData.data.length > 0 ?
            cartData.data.map((item_n, index_n) => {
                console.log('item_n')
                console.log(item_n)
                var dataMySQL_n = `${finip}/${item_n.store_path}/${item_n.store_image}`;
                return <View style={{ marginBottom: 3, backgroundColor: '#fff' }} key={index_n}>
                    <View style={{ flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <CheckBox containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]}
                                textStyle={14} fontFamily={'SukhumvitSet-Text'} checked={item_n.checked} onPress={() => {
                                    cartListCheckedStore(item_n.id_store, cartDataList); setActiveReload(!activeReload);
                                }} />
                            <View style={[stylesMain.ItemCenterVertical,
                            { width: 30, height: 30, borderRadius: 20, backgroundColor: '#cecece' }]}>
                                <FastImage style={[stylesMain.BoxProduct2Image, { flex: 1, borderRadius: 20, }]}
                                    source={{ uri: dataMySQL_n, }} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize5,
                            { marginLeft: 16, }]}>{item_n.name}</Text>
                        </View>
                    </View>
                    <View>
                        <SwipeListView useFlatList data={item_n.product} renderItem={renderItem} renderHiddenItem={renderHiddenItem}
                            disableRightSwipe rightOpenValue={-75} stopRightSwipe={-75} />
                    </View>
                </View>;
            }) :
            <View style={stylesCart.Product_Cart}>
                <View style={[stylesMain.ItemCenter, { height: 200, width: '100%' }]}>
                    <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                        <IconFeather name="shopping-cart" size={60} />
                        <Text>ไม่มีสินค้าในรถเข็นของคุณ</Text>
                    </View>
                </View>
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Like
export let Product_Like = (props) => <View>
    <Text>รายการที่คุณชอบ</Text>
</View>;
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export let Buy_bar = (props) => {
    const {
        activeCheck, checkedAll, couponList, currentUser, dataService2, deleteAction, cokie, cartData, cartDataList, cartListCheckedAll,
        cartListSelectCoupon, navigation, sendCheck,
    } = props;
    const [createBill, setCreateBill] = useState(false);
    const [errorService3, setErrorService3] = useState(false);
    const [text, setText] = useState(undefined);
    const ConponSheetRef = useRef(null);
    // const {
    //      Coupon, dataBody2, dataBody3, dataBody4, dataService3, dataService4, dataService5, errorService3,
    //     otherCoupon, savelist_Order, Service3, text,
    // } = this.state;
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         create_bill: false,
    //         check_coupon: false,
    //         check_coupon2: true,
    //         Coupon: true,
    //         dataService: [],
    //         errorService3: false,
    //         otherCoupon: false,
    //         Service3: false,
    //         text: '',
    //     };
    //     this.springValue = new Animated.Value(0);;
    //     this.transformValue = new Animated.Value(100);
    // };
    // _spring = () => {
    //     this.setState({ errorService3: true }, () => {
    //         Animated.sequence([
    //             Animated.timing(
    //                 this.transformValue,
    //                 {
    //                     toValue: -.08 * height,
    //                     friction: 5,
    //                     duration: 300,
    //                     useNativeDriver: true,
    //                 }
    //             ),
    //             Animated.timing(
    //                 this.springValue,
    //                 {
    //                     toValue: 1,
    //                     duration: 300,
    //                     useNativeDriver: true,
    //                 }
    //             ),
    //             Animated.timing(
    //                 this.springValue,
    //                 {
    //                     toValue: 1,
    //                     duration: 700,
    //                     useNativeDriver: true,
    //                 }
    //             ),
    //             Animated.timing(
    //                 this.springValue,
    //                 {
    //                     toValue: 0,
    //                     duration: 300,
    //                     useNativeDriver: true,
    //                 }
    //             ),
    //             Animated.timing(
    //                 this.transformValue,
    //                 {
    //                     toValue: 100,
    //                     duration: 300,
    //                     useNativeDriver: true,
    //                 }
    //             ),
    //         ]).start(() => this.setState({ errorService3: false }));
    //     });
    // };
    // componentDidMount() { this.setStateCancel(); };
    // StateBox = () => { const { checkedAll, getCheckedAll, } = this.props; getCheckedAll(!checkedAll); };
    // DeleteAction = () => {
    //     deleteAction({
    //         id_customer: currentUser.id_customer,
    //         list_order
    //     });
    // };
    // getData = (dataService) => {
    //     this.setState({ dataService, Coupon: false, });
    // };
    // getData2 = (dataService3) => {
    //     const { text, } = this.state;
    //     var dataBody3 = {
    //         id_customer: currentUser?.id_customer,
    //         list_order: cartDataList.join(','),
    //         use_coupon: '',
    //         other_coupon: text,
    //     };
    //     var dataBody4 = {
    //         id_customer: currentUser?.id_customer,
    //         id_cartdetail: cartDataList.join(','),
    //         use_coupon: '',
    //         other_coupon: text,
    //         buy_now: "cart",
    //     };
    //     dataService3 && dataService3.coupon_message !== 'เงื่อนไขส่วนลดไม่ถูกต้อง' ?
    //         this.setState({
    //             dataBody3, dataBody4, dataService3, otherCoupon: false, Service3: true, check_coupon: true,
    //         }) :
    //         this.setState({ errorService3: true, otherCoupon: false, text: '' });
    // };
    // setStateCoupon2 = (dataService4) => {
    //     var dataBody3 = {
    //         id_customer: currentUser?.id_customer,
    //         list_order: cartDataList.join(','),
    //         use_coupon: dataService4.id_coupon,
    //         other_coupon: '',
    //     };
    //     var dataBody4 = {
    //         id_customer: currentUser?.id_customer,
    //         id_cartdetail: cartDataList.join(','),
    //         use_coupon: dataService4.id_coupon,
    //         other_coupon: '',
    //         buy_now: "cart",
    //     };
    //     this.setState({ dataBody3, dataBody4, dataService4, check_coupon: true });
    //     ConponSheetRef..close();
    // };
    // getData3 = (dataService5) => {
    //     const { check_coupon2 } = this.state;
    //     sendCheck(false);
    //     this.setState({
    //         dataService5, check_coupon: false, Service3: check_coupon2 ? false : true, check_coupon2: false
    //     });
    // };
    // getData4 = (dataService6) => {
    //     NavigationNavigate({ goScreen: 'Customer_Order', setData: { no_invoice: dataService6.no_invoice }, navigation });
    // };
    // setStateText = (text) => this.setState({ text });
    let setStateCancel = () => {
        cartListSelectCoupon({ coupon: [], other: false })
    };
    let setStateCoupon = (value) => {
        cartListSelectCoupon({ coupon: value, other: false });
    };
    console.log('==================================>>>>>cartDataList');
    console.log(cartDataList);
    console.log('==================================>>>>>cartData');
    console.log(cartData);
    console.log('==================================>>>>>couponList');
    console.log(couponList);
    console.log(couponList.length);
    let ConponSheetBody = () => <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ส่วนลด</Text>
        <ScrollView>
            {couponList && couponList.length > 0 ?
                couponList.map((item, index) => <Coupon_Detail_BottomSheet data={item} key={index} getDataSource={(value) =>
                    setStateCoupon(value)} />) : null}
        </ScrollView>
    </View>;
    let ConponSheetButtom = () => ConponSheetRef.current.open();
    let setStateBill = () => setCreateBill(true);
    // StateBox = () => { };
    var uri = `${finip}/cart/check_coupon`;
    var dataBody = {
        id_customer: currentUser?.id_customer,
        list_order: cartDataList.join(',')
    };
    var uri2 = `${finip}/coupon/get_other_coupon`;
    // var uri3 = `${finip}/cart/track_data`;
    var uri4 = `${finip}/bill/create_bill`;
    errorService3 && _spring();
    // Coupon && cokie && dataBody.id_customer && dataBody.list_order && GetServices({
    //     uriPointer: uri, Authorization: cokie, dataBody: dataBody, getDataSource: (value) => getData(value)
    // });
    // otherCoupon && cokie && dataBody2.id_customer && dataBody2.list_order && GetServices({
    //     uriPointer: uri2, showConsole: 'get_other_coupon', Authorization: cokie, dataBody: dataBody2,
    //     getDataSource: (value) => getData2(value)
    // });
    // (activeCheck || check_coupon) && cokie && dataBody3.id_customer && dataBody3.list_order && GetServices({
    //     uriPointer: uri3, showConsole: 'track_data', Authorization: cokie, dataBody: dataBody3, getDataSource: (value) => getData3(value),
    //     showConsole: 'track_data'
    // });
    // create_bill && cokie && dataBody4.id_customer && dataBody4.list_order && GetServices({
    //     uriPointer: uri4, showConsole: 'create_bill', Authorization: cokie, dataBody: dataBody4, getDataSource: (value) => getData4(value)
    // });
    var checkedMain = cartData.data.every((value) => { return value.checked == true });
    return <>
        {/* <Animatable.View style={[stylesMain.animatedView, { opacity: springValue, transform: [{ translateY: transformValue }] }]}>
            <View style={[stylesMain.animatedViewSub, { position: 'absolute' }]}>
                <Text style={[stylesMain.exitTitleText, stylesFont.FontFamilyText, { color: 'red' }]}>เงื่อนไขส่วนลดไม่ถูกต้อง</Text>
            </View>
        </Animatable.View> */}
        <View style={[stylesCart.Bar]}>
            {!cartData.buttomDelete && <View style={[stylesCart.Bar_Code]} key={'Bar_Code'}>
                <IconFoundation name='burst' size={30} style={[stylesMain.ItemCenterVertical, { flex: 1.6 }]} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, { flex: 3, }]}>
                    โค้ดส่วนลด</Text>
                {cartData?.coupon?.name ? <View style={{ flexDirection: 'row', flex: 9, }}>
                    <Text style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText,
                    { borderWidth: 0, textAlignVertical: 'center' }]}>
                        {cartData?.coupon?.name ?? ''}</Text>
                </View> : <View style={{ flexDirection: 'row', flex: 9, }}>
                        <TextInput style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText,]}
                            onChangeText={(value) => setStateText(value)} value={text} />
                        <BottomSheet ref={ConponSheetRef} height={height * 0.5} duration={250} customStyles={{
                            container: { paddingTop: 10, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, }
                        }}>
                            {ConponSheetBody()}
                        </BottomSheet>
                        <TouchableOpacity onPress={() => ConponSheetButtom()} style={{ marginLeft: -35 }}>
                            <IconFontAwesome name='caret-down' size={20}
                                style={{ textAlign: 'center', textAlignVertical: 'center', width: 40, height: '100%' }} />
                        </TouchableOpacity>
                    </View>}
                {cartData?.coupon?.name ? <TouchableOpacity onPress={() => setStateCancel()} style={{ flex: 3, }}>
                    <IconFontisto name='close-a' size={20} style={[stylesMain.ItemCenterVertical, { color: 'red', }]} />
                </TouchableOpacity> : <TouchableOpacity onPress={() => setStateCoupon()} style={{ flex: 3, }}>
                        <View style={[stylesCart.Bar_Code_Box_Text, stylesMain.ItemCenterVertical,]}>
                            <Text style={[stylesCart.Bar_Code_Text, stylesFont.FontSize6, stylesFont.FontFamilyText,
                            stylesMain.ItemCenterVertical]}>ใช้โค้ด</Text>
                        </View>
                    </TouchableOpacity>}
            </View>}
            <View style={[stylesCart.Bar_Buy]}>
                <View>
                    <CheckBox title='เลือกทั้งหมด' containerStyle={[stylesMain.ItemCenterVertical,
                    { backgroundColor: '#fff', borderWidth: 0, marginTop: -0.5, }]} textStyle={14} fontFamily={'SukhumvitSet-Text'}
                        checked={checkedMain} onPress={() => cartListCheckedAll(!checkedMain)} />
                </View>
                {!cartData.buttomDelete && <View style={[stylesCart.Bar_Buy_price, { marginLeft: -20 }]}>
                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>รวมทั้งหมด</Text>
                    <NumberFormat value={cartData?.result?.now_total ?? ''} prefix={'฿'} displayType={'text'} thousandSeparator={true}
                        renderText={value => <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText,
                        { marginLeft: 4, color: mainColor }]}>{value}</Text>} />
                </View>}
                <TouchableOpacity activeOpacity={1} onPress={() => cartData.buttomDelete ? DeleteAction() : setCreateBill(true)}>
                    <View style={[stylesCart.BOX_Buy, stylesMain.ItemCenterVertical, {
                        backgroundColor: !cartData.buttomDelete ? cartDataList.length > 0 ? mainColor : '#ECECEC' : '#ECECEC'
                    }]}>
                        <Text style={[stylesCart.BOX_Buy_Text, stylesFont.FontFamilyText, stylesFont.FontSize6,
                        stylesMain.ItemCenterVertical]}>{cartData.buttomDelete ? 'ลบ' : 'ชำระเงิน'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Coupon_Detail_BottomSheet = (props) => {
    const { data, getDataSource, } = props;
    return <View style={{
        width: '100%', height: 100, borderWidth: 1, backgroundColor: data.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#C0DBF9',
        flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 5,
        marginVertical: 10, opacity: data.ticket_picked == 'ticket_picked' ? 0.6 : 1,
    }}>
        <View style={{ width: '60%' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{data.name}</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{data.detail}</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: '#C4C4C4' }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { paddingHorizontal: 2 }]}>2020.02.22-2020.03.01</Text>
            </View>
            <TouchableOpacity onPress={() => getDataSource(data)}>
                <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 5 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{'ใช้คูปอง'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};