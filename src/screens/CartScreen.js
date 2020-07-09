///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
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
import { AppBar1, ExitAppModule } from './MainScreen';
import { GetServices, GetData, NavigationNavigateScreen, LoadingScreen } from '../customComponents/Tools';
import { PopularProduct } from './StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
function CartScreen(props) {
    const { cartData, cartListUpdate, getFetchData, reduxDataBody, setDataEnd, setFetchToStart } = props;
    const [activeDelete, setActiveDelete] = useState(false);
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeF, setActiveF] = useState(true);
    const [activeRefresh, setActiveRefresh] = useState(true);
    const [activeSave, setActiveSave] = useState(false);
    const [activeSave2, setActiveSave2] = useState(false);
    const [arrayItem, setArrayItem] = useState(undefined);
    const [arrayItem2, setArrayItem2] = useState(undefined);
    const [buttomDeleteAll, setButtomDeleteAll] = useState(false);
    const [checkedAll, setCheckedAll] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [dataService3, setDataService3] = useState(undefined);
    const [list_Order, setList_Order] = useState(undefined);
    var dataBody;
    var uri = `${finip}/cart/cart_mobile`;
    var uri2 = `${finip}/cart/auto_save_ajax`;
    var uri3 = `${finip}/cart/delete_cart`;
    currentUser && (dataBody = { id_customer: currentUser.id_customer });
    let getSource = (value) => { setActiveGetSource(false); setCurrentUser(value.currentUser); setCokie(value.keycokie); };
    let getData = (value) => {
        for (var n = 0; n < value.cart_list.length; n++) {
            value.cart_list[n].key = n;
        };
        setActiveRefresh(false);
        setDataService(value);
    };
    let getData2 = (value) => {
        setActiveRefresh(true); setActiveF(false); setDataEnd(); setDataService2(value);
    };
    let getData3 = (value) => { setActiveRefresh(true); setActiveDelete(false); setDataEnd(); setDataService3(value); };
    let getCheckedAll = (value) => { setCheckedAll(value); setActiveSave2(true); };
    let ArrayItems = (value) => { setActiveSave(true); setArrayItem(value); };
    let ArrayItems2 = (value) => { setActiveDelete(true); setArrayItem2(value); setButtomDeleteAll(false); };
    let propsFunction = () => { setButtomDeleteAll(!buttomDeleteAll); };
    let sendList_order = (value) => setList_Order(value);
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
    }, [activeGetSource]);
    useEffect(() => {
        activeF && cokie && reduxDataBody && reduxDataBody.dataList && reduxDataBody.dataList.id_customer &&
            reduxDataBody.dataList.list_order && GetServices({
                uriPointer: uri2, dataBody: reduxDataBody.dataList, Authorization: cokie, getDataSource: value => getData2(value),
                showConsole: 'reduxDataBody.dataList'
            });
    }, [activeF && cokie && reduxDataBody && reduxDataBody.dataList && reduxDataBody.dataList.id_customer &&
        reduxDataBody.dataList.list_order]);
    useEffect(() => {
        reduxDataBody?.isActive && reduxDataBody?.name == 'cartAamount' &&
            GetServices({
                uriPointer: uri2, dataBody: reduxDataBody.dataList, Authorization: cokie, getDataSource: value => getData2(value),
                showConsole: 'cartAamount'
            });
    }, [reduxDataBody?.isActive && reduxDataBody?.name == 'cartAamount']);
    useEffect(() => {
        reduxDataBody?.isActive && reduxDataBody?.name == 'cartDelete' &&
            GetServices({
                uriPointer: uri3, dataBody: reduxDataBody.dataList, Authorization: cokie, getDataSource: value => getData3(value),
                showConsole: 'cartDelete'
            });
    }, [reduxDataBody?.isActive && reduxDataBody?.name == 'cartDelete']);
    useEffect(() => {
        if (cartData.length == 0 && getFetchData['cart_mobile']?.data?.cart_list?.length > 0) {
            console.log('activeCartList')
            activeCartList(getFetchData['cart_mobile'].data.cart_list);
        };
    }, [getFetchData['cart_mobile']?.data?.cart_list]);
    activeSave2 && setActiveSave2(false);
    console.log('dataService2|CartScreen')
    console.log(dataService2)
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {/* {reduxDataBody?.isActive || reduxDataBody?.isRefresh && <LoadingScreen />} */}
        <AppBar1 {...props} titleHead='รถเข็น' backArrow />
        <ScrollView>
            <Product_Cart {...props} activeRefresh={activeRefresh} currentUser={currentUser} list_Order={list_Order}
                sendList_order={value => sendList_order(value)} />
            {/* <Product_Like /> */}
            <PopularProduct {...props} dataService={getFetchData['publish_mobile']?.data?.for_you2} headText={'คุณอาจชอบสิ่งนี้'} />
        </ScrollView>
        {getFetchData['cart_mobile']?.data?.cart_list?.length > 0 &&
            <Buy_bar {...props} dataService2={dataService2} currentUser={currentUser} cokie={cokie} list_Order={list_Order} />}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Cart
export let Product_Cart = (props) => {
    const {
        activeCartList, activeRefresh, cartData, cartListChecked, cartListCheckedAll, cartListUpdate, currentUser, getFetchData,
        list_Order, reduxDataBody, setDataRefresh, setDataStart, sendList_order,
    } = props;
    const [active, setActive] = useState(false);
    const [activeReload, setActiveReload] = useState(false);
    const [cartID, setCartID] = useState([]);
    const productBox = [];
    activeRefresh != activeReload && setActiveReload(activeRefresh)
    cartData.map((value) => value.product.map((value2) => { if (value2.checked) productBox.push(value2.id_cartdetail) }))
    console.log('cartData|Product_Cart');
    console.log(cartData);
    if (currentUser && productBox.join(',') != list_Order) {
        sendList_order(productBox.join(','))
        setDataStart({
            amount: (cartData[0]?.product[0]?.quantity * 1),
            list_order: productBox.join(','),
            id_cartdetail: cartData[0]?.product[0]?.id_cartdetail,
            id_customer: currentUser.id_customer,
        }, 'cartAamount')
    };
    let renderItem = (data) => <TouchableOpacity activeOpacity={1}
        style={{ backgroundColor: '#fff', borderColor: '#ECECEC', borderRightWidth: 1, }}>
        <View style={{ flexDirection: 'row', }}>
            <CheckBox containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]} textStyle={14}
                fontFamily={'SukhumvitSet-Text'} checked={data.item.checked} onPress={() => {
                    cartListChecked(data.item.id_cartdetail, data.item.id_store); setActiveReload(!activeReload);
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
                            [setDataStart({
                                amount: (data.item.quantity * 1) - 1,
                                list_order: list_Order,
                                id_cartdetail: data.item.id_cartdetail,
                                id_customer: currentUser.id_customer,
                            }, 'cartAamount'), cartListUpdate((data.item.quantity * 1) - 1, data.item.id_cartdetail, data.item.id_store)] :
                            null}>
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
                            [setDataStart({
                                amount: (data.item.quantity * 1) + 1,
                                list_order: list_Order,
                                id_cartdetail: data.item.id_cartdetail,
                                id_customer: currentUser.id_customer,
                            }, 'cartAamount'), cartListUpdate((data.item.quantity * 1) + 1, data.item.id_cartdetail, data.item.id_store)] :
                            null}>
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
        }]} onPress={() => [setDataStart({
            amount: (data.item.quantity * 1) + 1,
            list_order: data.item.id_cartdetail,
            id_customer: currentUser.id_customer
        }, 'cartDelete'), setTimeout(() => { rowMap[data.item.key] && rowMap[data.item.key].closeRow() }, 450)]}>
            <IconFontAwesome name='trash-o' size={30} style={{ color: '#fff' }} />
        </TouchableOpacity>
    </View>;
    return <View>
        {active && <LoadingScreen />}
        {cartData && cartData.length > 0 ?
            cartData.map((item_n, index_n) => {
                var dataMySQL_n = `${finip}/${item_n.store_path}/${item_n.store_image}`;
                return <View style={{ marginBottom: 10, backgroundColor: '#fff' }} key={index_n}>
                    <View style={{ flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <CheckBox containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]}
                                textStyle={14} fontFamily={'SukhumvitSet-Text'} checked={item_n.checked} onPress={() => {
                                    cartListCheckedAll(item_n.id_store); setActiveReload(!activeReload);
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
export class Buy_bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            create_bill: false,
            check_coupon: false,
            check_coupon2: true,
            Coupon: true,
            dataService: [],
            errorService3: false,
            otherCoupon: false,
            Service3: false,
            text: '',
        };
        this.springValue = new Animated.Value(0);;
        this.transformValue = new Animated.Value(100);
    };
    _spring = () => {
        this.setState({ errorService3: true }, () => {
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
            ]).start(() => this.setState({ errorService3: false }));
        });
    };
    componentDidMount() { this.setStateCancel(); };
    StateBox = () => { const { checkedAll, getCheckedAll, } = this.props; getCheckedAll(!checkedAll); };
    DeleteAction = () => {
        const { currentUser, DeleteAction, list_order, } = this.props;
        DeleteAction({
            id_customer: currentUser.id_customer,
            list_order
        });
    };
    getData = (dataService) => {
        this.setState({ dataService, Coupon: false, });
    };
    getData2 = (dataService3) => {
        const { currentUser, list_Order, } = this.props;
        const { text, } = this.state;
        var dataBody3 = {
            id_customer: currentUser?.id_customer,
            list_order: list_Order,
            use_coupon: '',
            other_coupon: text,
        };
        var dataBody4 = {
            id_customer: currentUser?.id_customer,
            id_cartdetail: list_Order,
            use_coupon: '',
            other_coupon: text,
            buy_now: "cart",
        };
        dataService3 && dataService3.coupon_message !== 'เงื่อนไขส่วนลดไม่ถูกต้อง' ?
            this.setState({
                dataBody3, dataBody4, dataService3, otherCoupon: false, Service3: true, check_coupon: true,
            }) :
            this.setState({ errorService3: true, otherCoupon: false, text: '' });
    };
    setStateCoupon2 = (dataService4) => {
        const { currentUser, list_Order, } = this.props;
        var dataBody3 = {
            id_customer: currentUser?.id_customer,
            list_order: list_Order,
            use_coupon: dataService4.id_coupon,
            other_coupon: '',
        };
        var dataBody4 = {
            id_customer: currentUser?.id_customer,
            id_cartdetail: list_Order,
            use_coupon: dataService4.id_coupon,
            other_coupon: '',
            buy_now: "cart",
        };
        this.setState({ dataBody3, dataBody4, dataService4, check_coupon: true });
        this.ConponSheet.close();
    };
    getData3 = (dataService5) => {
        const { check_coupon2 } = this.state;
        this.setState({
            dataService5, check_coupon: false, Service3: check_coupon2 ? false : true, check_coupon2: false
        });
    };
    getData4 = (dataService6) => {
        const { navigation } = this.props;
        NavigationNavigateScreen({ goScreen: 'Customer_Order', setData: { no_invoice: dataService6.no_invoice }, navigation });
    };
    setStateText = (text) => this.setState({ text });
    setStateCancel = () => {
        const { currentUser, list_Order, } = this.props;
        var dataBody3 = {
            id_customer: currentUser?.id_customer,
            list_order: list_Order,
            use_coupon: '',
            other_coupon: '',
        };
        var dataBody4 = {
            id_customer: currentUser?.id_customer,
            id_cartdetail: list_Order,
            use_coupon: '',
            other_coupon: '',
            buy_now: "cart",
        };
        this.setState({
            dataBody3, dataBody4, dataService3: undefined, dataService4: undefined, dataService5: undefined, Service3: false, text: '',
            check_coupon: true, check_coupon2: true,
        });
    };
    setStateCoupon = () => {
        const { currentUser, list_Order, } = this.props;
        const { text, } = this.state;
        var dataBody2 = {
            id_customer: currentUser?.id_customer,
            list_order: list_Order,
            my_coupon: text,
        };
        text !== undefined && this.setState({ otherCoupon: true, dataBody2 });
    };
    get ConponSheetBody() {
        const { dataService } = this.state;
        return dataService && dataService.coupon_data && dataService.coupon_data.length > 0 && <>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ส่วนลด</Text>
                <ScrollView>
                    {dataService && dataService.coupon_data && dataService.coupon_data.length > 0 ?
                        dataService.coupon_data.map((item, index) => <Coupon_Detail_BottomSheet dataService={item} key={index}
                            getDataSource={this.setStateCoupon2.bind(this)} />) : null}
                </ScrollView>
            </View>
        </>;
    };
    ConponSheetButtom = () => this.ConponSheet.open();
    setStateBill = () => this.setState({ create_bill: true });
    StateBox = () => { };
    render() {
        const { buttomDeleteAll, checkedAll, currentUser, dataService2, cokie, list_Order, } = this.props;
        const {
            create_bill, check_coupon, Coupon, dataBody2, dataBody3, dataBody4, dataService3, dataService4, dataService5, errorService3,
            otherCoupon, savelist_Order, Service3, text,
        } = this.state;
        console.log('dataService2|Buy_bar')
        console.log(dataService2)
        console.log('dataService5|Buy_bar')
        console.log(dataService5)
        var uri = `${finip}/cart/check_coupon`;
        var dataBody = {
            id_customer: currentUser?.id_customer,
            list_order: list_Order
        };
        var uri2 = `${finip}/coupon/get_other_coupon`;
        var uri3 = `${finip}/cart/track_data`;
        var uri4 = `${finip}/bill/create_bill`;
        errorService3 && this._spring();
        Coupon && cokie && dataBody.id_customer && dataBody.list_order &&
            GetServices({
                uriPointer: uri, showConsole: 'check_coupon', Authorization: cokie, dataBody: dataBody,
                getDataSource: this.getData.bind(this)
            });
        otherCoupon && cokie && dataBody2.id_customer && dataBody2.list_order &&
            GetServices({
                uriPointer: uri2, showConsole: 'get_other_coupon', Authorization: cokie, dataBody: dataBody2,
                getDataSource: this.getData2.bind(this)
            });
        check_coupon && cokie && dataBody3.id_customer && dataBody3.list_order &&
            GetServices({
                uriPointer: uri3, showConsole: 'track_data', Authorization: cokie, dataBody: dataBody3,
                getDataSource: this.getData3.bind(this), showConsole: 'track_data'
            });
        create_bill && cokie && dataBody4.id_customer && dataBody4.list_order &&
            GetServices({
                uriPointer: uri4, showConsole: 'create_bill', Authorization: cokie, dataBody: dataBody4,
                getDataSource: this.getData4.bind(this)
            });
        return <>
            <Animatable.View style={[stylesMain.animatedView,
            { opacity: this.springValue, transform: [{ translateY: this.transformValue }] }]}>
                <View style={[stylesMain.animatedViewSub, { position: 'absolute' }]}>
                    <Text style={[stylesMain.exitTitleText, stylesFont.FontFamilyText, { color: 'red' }]}>เงื่อนไขส่วนลดไม่ถูกต้อง</Text>
                </View>
            </Animatable.View>
            <View style={[stylesCart.Bar]}>
                {!buttomDeleteAll && <View style={[stylesCart.Bar_Code]} key={'Bar_Code'}>
                    <IconFoundation name='burst' size={30} style={[stylesMain.ItemCenterVertical, { flex: 2 }]} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, { flex: 3.5, }]}>
                        โค้ดส่วนลด</Text>
                    {(dataService4 && dataService4.name || dataService3 && dataService3.coupon_message) && Service3 ?
                        <View style={{ flexDirection: 'row', flex: 9, }}>
                            <Text style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText,
                            { borderWidth: 0, textAlignVertical: 'center' }]}>
                                {dataService4?.name ?? dataService3?.coupon_message ?? ''}</Text>
                        </View> :
                        <View style={{ flexDirection: 'row', flex: 9, }}>
                            <TextInput style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText,]}
                                onChangeText={this.setStateText.bind(this)} value={text} />
                            <BottomSheet ref={ref => { this.ConponSheet = ref; }} height={height * 0.5} duration={250} customStyles={{
                                container: { paddingTop: 10, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, }
                            }}>
                                {this.ConponSheetBody}
                            </BottomSheet>
                            <TouchableOpacity onPress={() => this.ConponSheetButtom()} style={{ marginLeft: -35 }}>
                                <IconFontAwesome name='caret-down' size={20}
                                    style={{ textAlign: 'center', textAlignVertical: 'center', width: 40, height: '100%' }} />
                            </TouchableOpacity>
                        </View>}
                    {(dataService4 && dataService4.name || dataService3 && dataService3.coupon_message) && Service3 ?
                        <TouchableOpacity onPress={() => this.setStateCancel()} style={{ flex: 3, }}>
                            <IconFontisto name='close-a' size={20} style={[stylesMain.ItemCenterVertical, { color: 'red', }]} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => this.setStateCoupon()} style={{ flex: 3, }}>
                            <View style={[stylesCart.Bar_Code_Box_Text, stylesMain.ItemCenterVertical,]}>
                                <Text style={[stylesCart.Bar_Code_Text, stylesFont.FontSize6, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical]}>ใช้โค้ด</Text>
                            </View>
                        </TouchableOpacity>}
                </View>}
                <View style={[stylesCart.Bar_Buy]}>
                    <View>
                        <CheckBox title='เลือกทั้งหมด' containerStyle={[stylesMain.ItemCenterVertical,
                        { backgroundColor: '#fff', borderWidth: 0, marginTop: -0.5, }]} textStyle={14} fontFamily={'SukhumvitSet-Text'}
                            checked={checkedAll} onPress={() => this.StateBox()} />
                    </View>
                    {!buttomDeleteAll && <View style={[stylesCart.Bar_Buy_price, { marginLeft: -20 }]}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>รวมทั้งหมด</Text>
                        <NumberFormat value={dataService5?.now_total ?? dataService2?.now_total ?? ''} prefix={'฿'}
                            displayType={'text'} thousandSeparator={true} renderText={value =>
                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText,
                                { marginLeft: 4, color: mainColor }]}>{value}</Text>} />
                    </View>}
                    <TouchableOpacity activeOpacity={1} onPress={buttomDeleteAll ? () => this.DeleteAction() : () => this.setStateBill()}>
                        <View style={[stylesCart.BOX_Buy, stylesMain.ItemCenterVertical]}>
                            <Text style={[stylesCart.BOX_Buy_Text, stylesFont.FontFamilyText, stylesFont.FontSize6,
                            stylesMain.ItemCenterVertical]}>{buttomDeleteAll ? 'ลบ' : 'ชำระเงิน'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>;
    };
};
///----------------------------------------------------------------------------------------------->>>>
export let Coupon_Detail_BottomSheet = (props) => {
    const { dataService, getDataSource, } = props;
    return <View style={{
        width: '100%', height: 100, borderWidth: 1, backgroundColor: dataService.ticket_picked == 'ticket_picked' ?
            '#A9A9A9' : '#C0DBF9', flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 5,
        marginVertical: 10, opacity: dataService.ticket_picked == 'ticket_picked' ? 0.6 : 1,
    }}>
        <View style={{ width: '60%' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.name}</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.detail}</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: '#C4C4C4' }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { paddingHorizontal: 2 }]}>2020.02.22-2020.03.01</Text>
            </View>
            <TouchableOpacity onPress={() => getDataSource(dataService)}>
                <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 5 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{'ใช้คูปอง'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};