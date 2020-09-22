///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput, } from 'react-native';
import { connect, } from 'react-redux';
import {
    activeCartList, cartListButtomDelete, cartListChecked, cartListCheckedAll, cartListCheckedStore, cartListDelete, cartListResult,
    cartListSelectCoupon, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd, setDataRefresh, setDataStart,
    setFetchToStart,
} from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import { SwipeListView } from '@nvthai/react-native-swipe-list-view';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCart from '../../style/stylesCartScreen';
import stylesFont, { normalize } from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../Main/Main';
import { GetServices, GetData, LoadingScreen } from '../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../customComponents';
import { PopularProduct } from '../Store/Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { Bar, Bar_Buy, Bar_Buy_price, Bar_Code, Bar_Code_Box, Bar_Code_Box_Text, Bar_Code_Text, BOX_Buy, BOX_Buy_Text, Product_Carts
} = stylesCart;
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize4, FontSize5, FontSize6, FontSize7 } = stylesFont;
const { animatedView, animatedViewSub, BackgroundAreaView, BoxProduct2Image, exitTitleText, ItemCenter, ItemCenterVertical, SafeAreaViewNB,
} = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService, reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListButtomDelete, cartListCheckedAll, cartListChecked, cartListCheckedStore, cartListDelete, cartListResult,
    cartListSelectCoupon, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd, setDataRefresh, setDataStart,
    setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
function Cart(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeRefresh, setActiveRefresh] = useState(true);
    const [activeSave2, setActiveSave2] = useState(false);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataList, setDataList] = useState({});
    const dataBody = { id_customer: currentUser?.id_customer };
    const getData = (v) => {
        setActiveRefresh(false); setDataService(v); console.log('Fetch Complete');
        v?.cart_list.map((v) => {
            const OldList = dataList;
            console.log('OldList');
            console.log(OldList);
            if ((dataList[v.id_store]?.id_store == v.id_store) == false) {
                let product = {};
                product[v.id_product] = {
                    checked: false, detail_1: v.detail_1, detail_2: v.detail_2, id_cartdetail: v.id_cartdetail, id_product: v.id_product,
                    id_promotion: v.id_promotion, id_store: v.id_store, image_product: v.image_product, insert_date: v.insert_date,
                    invoice_no: v.invoice_no, max_remain: v.max_remain, path_product: v.path_product, price: v.price,
                    price_total: v.price_total, product_name: v.product_name, quantity: v.quantity, real_price: v.real_price,
                    status_purchase: v.status_purchase, tracking_number: v.tracking_number
                };
                dataList[v.id_store] = {
                    id_store: v.id_store, name: v.name, store_image: v.store_image, store_path: v.store_path, product
                };
            } else {
                const product = dataList[v.id_store].product;
                product[v.id_product] = {
                    ...product[v.id_product], detail_1: v.detail_1, detail_2: v.detail_2, id_cartdetail: v.id_cartdetail,
                    id_product: v.id_product, id_promotion: v.id_promotion, id_store: v.id_store, image_product: v.image_product,
                    insert_date: v.insert_date, invoice_no: v.invoice_no, max_remain: v.max_remain, path_product: v.path_product,
                    price: v.price, price_total: v.price_total, product_name: v.product_name, quantity: v.quantity,
                    real_price: v.real_price, status_purchase: v.status_purchase, tracking_number: v.tracking_number
                };
                dataList[v.id_store] = {
                    ...dataList[v.id_store], id_store: v.id_store, name: v.name, store_image: v.store_image, store_path: v.store_path, product
                };
            };
            setDataList({ ...OldList, ...dataList });
        });
    };
    console.log('cart_list');
    console.log(dataList);
    const getSource = (v) => { setActiveGetSource(false); setCurrentUser(v.currentUser); setCokie(v.keycokie); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, });
    }, [activeGetSource])
    useEffect(() => {
        currentUser && dataBody && activeRefresh && GetServices({ dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [currentUser && dataBody && activeRefresh])
    const Props = { ...props, activeRefresh, cokie, currentUser, dataList, dataService, setDataList }
    const uri = `${finip}/cart/cart_mobile`;
    activeSave2 && setActiveSave2(false);
    return <SafeAreaView style={[BackgroundAreaView, SafeAreaViewNB]}>
        {/* {reduxDataBody?.isActive || reduxDataBody?.isRefresh && <LoadingScreen />} */}
        <AppBar {...Props} backArrow deleteBar titleHead='รถเข็น' />
        <ScrollList {...Props} />
        <ExitAppModule {...Props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { getFetchData, } = props;
    return <View>
        <ScrollView>
            <Product_Cart {...props} />
            {/* <Product_Like /> */}
            <PopularProduct {...props} dataService={getFetchData['publish_mobile']?.data?.for_you2} headText={'คุณอาจชอบสิ่งนี้'} />
        </ScrollView>
        {/* <Buy_bar {...props} /> */}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Cart
export const Product_Cart = (props) => {
    const { activeRefresh, dataList, setDataList, } = props;
    const OldList = dataList;
    let List = [];
    for (const [key, value] of Object.entries(dataList)) { List.push(value); };
    const renderItem = (value) => <TouchableOpacity activeOpacity={1}
        style={{ backgroundColor: '#fff', borderColor: '#ECECEC', borderRightWidth: 1, }}>
        <View style={{ flexDirection: 'row', }}>
            <CheckBox containerStyle={[ItemCenterVertical, { backgroundColor: null, borderWidth: null, paddingHorizontal: 4 }]}
                textStyle={14} fontFamily='ThaiSansNeue-ExtraBold' checked={value.item.checked} onPress={() => {
                    const product = dataList[value.item.id_store].product;
                    product[value.item.id_product] = { ...product[value.item.id_product], checked: !value.item.checked };
                    dataList[value.item.id_store] = { ...dataList[value.item.id_store], };
                    setDataList({ ...OldList, ...dataList, });
                }} />
            <View style={{
                aspectRatio: 1, backgroundColor: '#fffffe', borderColor: '#ECECEC', borderWidth: 1, height: 'auto', marginBottom: 2,
                marginTop: value.index == 0 ? 2 : 0, overflow: 'hidden', width: normalize(88),
            }}>
                <FastImage style={[BoxProduct2Image, { flex: 1 }]} resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: `${finip}/${value.item.path_product}/${value.item.image_product}`, }} />
            </View>
            <View style={[ItemCenterVertical, { marginLeft: 12 }]}>
                <Text numberOfLines={1} style={[FontFamilyText, FontSize5, { width: 62 * (width / 120) }]}>
                    {value.item.product_name}</Text>
                <Text style={[FontFamilyText, FontSize7]}>{`${value.item.detail_1} ${value.item.detail_2}`}</Text>
                <NumberFormat value={value.item.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
                    <Text style={[FontSize5, FontFamilyBold, { color: mainColor }]}>{value}</Text>} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => null}>
                        <View style={[ItemCenter,
                            { width: 30, height: 25, borderColor: '#ECECEC', borderRightWidth: 0, borderWidth: 1 }]}>
                            <Text style={[ItemCenterVertical, FontSize4,
                                { color: value.item.quantity > 1 ? '#111' : '#CECECE' }]}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[ItemCenter, FontFamilyText,
                        { width: 50, height: 25, borderColor: '#ECECEC', borderWidth: 1 }]}>
                        <Text style={[ItemCenterVertical]}>{value.item.quantity}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => null}>
                        <View style={[ItemCenter,
                            { width: 30, height: 25, borderColor: '#ECECEC', borderLeftWidth: 0, borderWidth: 1 }]}>
                            <Text style={[ItemCenterVertical, FontSize4, {
                                color: value.item.quantity < value.item.max_remain - 1 ? '#111' : '#CECECE'
                            }]}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>;
    let renderHiddenItem = (value, rowMap,) => <View style={{
        alignItems: 'center', backgroundColor: '#DDD', flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15,
    }}>
        <TouchableOpacity style={[{
            alignItems: 'center', bottom: 0, justifyContent: 'center', position: 'absolute', top: 0, width: 75, backgroundColor: 'red',
            right: 0, borderColor: '#ECECEC', borderTopWidth: 1, borderBottomWidth: 1,
        }]} onPress={() => setTimeout(() => { rowMap[value.item.key] && rowMap[value.item.key].closeRow() }, 450)}>
            <IconFontAwesome name='trash-o' size={30} style={{ color: '#fff' }} />
        </TouchableOpacity>
    </View>
    const BodyBox = () => {
        return List.map((value, index) => {
            let SubList = [];
            let SubNumber = [];
            const ImageStore = { uri: `${finip}/${value.store_path}/${value.store_image}`, };
            for (const [key, value2] of Object.entries(value.product)) { SubList.push(value2); SubNumber.push(value2.id_product); };
            console.log('SubList')
            console.log(SubList.every((value) => value.checked == true))
            return <View key={index} style={{ marginBottom: 3, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <CheckBox containerStyle={[ItemCenterVertical, { backgroundColor: null, borderWidth: null, paddingHorizontal: 4 }]}
                            textStyle={14} fontFamily='ThaiSansNeue-ExtraBold' checked={SubList.every((value2) => value2.checked == true)}
                            onPress={() => {
                                const product = dataList[value.id_store].product;
                                SubNumber.map((value2) =>
                                    product[value2] = { ...product[value2], checked: !SubList.every((value3) => value3.checked == true) });
                                dataList[value.id_store] = { ...dataList[value.id_store], product };
                                setDataList({ ...OldList, ...dataList, });
                            }} />
                        <View style={[ItemCenterVertical,
                            { width: 30, height: 30, borderRadius: 20, backgroundColor: '#cecece' }]}>
                            <FastImage resizeMode={FastImage.resizeMode.contain} source={ImageStore} style={[BoxProduct2Image,
                                { borderRadius: 20, flex: 1, }]} />
                        </View>
                        <Text style={[ItemCenterVertical, FontFamilyText, FontSize5, { marginLeft: 14, }]}>{value.name}</Text>
                    </View>
                </View>
                <View>
                    <SwipeListView useFlatList data={SubList} renderItem={renderItem} renderHiddenItem={renderHiddenItem}
                        disableRightSwipe rightOpenValue={-75} stopRightSwipe={-75} />
                </View>
            </View>;
        })
    };
    return <View>
        {List.length > 0 ?
            BodyBox() :
            <View style={Product_Carts}>
                <View style={[ItemCenter, { height: 200, width: '100%' }]}>
                    <View style={[ItemCenterVertical, ItemCenter]}>
                        <IconFeather name="shopping-cart" size={60} />
                        <Text>ไม่มีสินค้าในรถเข็นของคุณ</Text>
                    </View>
                </View>
            </View>}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Like
export const Product_Like = (props) => <View>
    <Text>รายการที่คุณชอบ</Text>
</View>;
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export const Buy_bar = (props) => {
    const {
        activeCheck, checkedAll, couponList, currentUser, dataService2, deleteAction, cokie, cartData, cartDataList, cartListCheckedAll,
        cartListSelectCoupon, cartListDelete, navigation, sendCheck,
    } = props;
    const [createBill, setCreateBill] = useState(false);
    const [errorService3, setErrorService3] = useState(false);
    const [text, setText] = useState(undefined);
    const ConponSheetRef = useRef(null);
    const getData4 = (dataService6) => {
        NavigationNavigate({ goScreen: 'Cart_Order', setData: { no_invoice: dataService6.no_invoice }, navigation });
    };
    const setStateCancel = () => {
        cartListSelectCoupon({ coupon: [], other: false })
    };
    const setStateCoupon = (value) => {
        cartListSelectCoupon({ coupon: value, other: false });
    };
    const ConponSheetBody = () => <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Text style={[FontFamilyBold, FontSize2, { textAlign: 'center' }]}>ส่วนลด</Text>
        <ScrollView>
            {couponList && couponList.length > 0 ?
                couponList.map((item, index) => <Coupon_Detail_BottomSheet data={item} key={index} getDataSource={(value) =>
                    setStateCoupon(value)} />) : null}
        </ScrollView>
    </View>;
    const ConponSheetButtom = () => ConponSheetRef.current.open();
    const setStateBill = () => setCreateBill(true);
    const uri = `${finip}/cart/check_coupon`;
    const dataBody = {
        id_customer: currentUser?.id_customer,
        list_order: cartDataList.join(',')
    };
    const uri4 = `${finip}/bill/create_bill`;
    errorService3 && _spring();
    createBill && cokie && currentUser?.id_customer && GetServices({
        uriPointer: uri4, showConsole: 'create_bill', Authorization: cokie, dataBody: {
            id_customer: currentUser?.id_customer,
            id_cartdetail: cartDataList.join(','),
            use_coupon: !cartData?.isOtherCoupon && cartData?.coupon?.id_coupon ? cartData?.coupon?.id_coupon : '',
            other_coupon: '',
            buy_now: "cart",
        }, getDataSource: (value) => getData4(value)
    });
    const checkedMain = cartData.data.every((value) => { return value.checked == true });
    return <>
        {/* <Animatable.View style={[animatedView, { opacity: springValue, transform: [{ translateY: transformValue }] }]}>
            <View style={[animatedViewSub, { position: 'absolute' }]}>
                <Text style={[exitTitleText, FontFamilyText, { color: 'red' }]}>เงื่อนไขส่วนลดไม่ถูกต้อง</Text>
            </View>
        </Animatable.View> */}
        <View style={[Bar]}>
            {!cartData.buttomDelete && <View style={[Bar_Code]} key={'Bar_Code'}>
                <IconFoundation name='burst' size={30} style={[ItemCenterVertical, { flex: 1.6 }]} />
                <Text style={[FontFamilyText, FontSize6, ItemCenterVertical, { flex: 3, }]}>
                    โค้ดส่วนลด</Text>
                {cartData?.coupon?.name ? <View style={{ flexDirection: 'row', flex: 9, }}>
                    <Text style={[Bar_Code_Box, ItemCenterVertical, FontFamilyText,
                        { borderWidth: 0, textAlignVertical: 'center' }]}>
                        {cartData?.coupon?.name ?? ''}</Text>
                </View> : <View style={{ flexDirection: 'row', flex: 9, }}>
                        <TextInput style={[Bar_Code_Box, ItemCenterVertical, FontFamilyText,]}
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
                    <IconFontisto name='close-a' size={20} style={[ItemCenterVertical, { color: 'red', }]} />
                </TouchableOpacity> : <TouchableOpacity onPress={() => setStateCoupon()} style={{ flex: 3, }}>
                        <View style={[Bar_Code_Box_Text, ItemCenterVertical,]}>
                            <Text style={[Bar_Code_Text, FontSize6, FontFamilyText,
                                ItemCenterVertical]}>ใช้โค้ด</Text>
                        </View>
                    </TouchableOpacity>}
            </View>}
            <View style={[Bar_Buy]}>
                <View>
                    <CheckBox title='เลือกทั้งหมด' containerStyle={[ItemCenterVertical,
                        { backgroundColor: '#fff', borderWidth: 0, marginTop: -0.5, }]} textStyle={14} fontFamily='ThaiSansNeue-ExtraBold'
                        checked={checkedMain} onPress={() => cartListCheckedAll(!checkedMain)} />
                </View>
                {!cartData.buttomDelete && <View style={[Bar_Buy_price, { marginLeft: -20 }]}>
                    <Text style={[ItemCenterVertical, FontFamilyText, FontSize6]}>รวมทั้งหมด</Text>
                    <NumberFormat value={cartData?.result?.now_total ?? ''} prefix={'฿'} displayType={'text'} thousandSeparator={true}
                        renderText={value => <Text style={[ItemCenterVertical, FontSize6, FontFamilyText,
                            { marginLeft: 4, color: mainColor }]}>{value}</Text>} />
                </View>}
                <TouchableOpacity activeOpacity={1} onPress={() => cartData.buttomDelete ? cartListDelete({
                    cokie, list_order: cartDataList.join(','), id_customer: currentUser.id_customer
                }) : setCreateBill(true)}>
                    <View style={[BOX_Buy, ItemCenterVertical, {
                        backgroundColor: !cartData.buttomDelete ? cartDataList.length > 0 ? mainColor : '#ECECEC' : mainColor
                    }]}>
                        <Text style={[BOX_Buy_Text, FontFamilyText, FontSize6,
                            ItemCenterVertical]}>{cartData.buttomDelete ? 'ลบ' : 'ชำระเงิน'}</Text>
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
            <Text style={[FontFamilyText, FontSize5]}>{data.name}</Text>
            <Text style={[FontFamilyText, FontSize5]}>{data.detail}</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: '#C4C4C4' }}>
                <Text style={[FontFamilyText, FontSize7, { paddingHorizontal: 2 }]}>2020.02.22-2020.03.01</Text>
            </View>
            <TouchableOpacity onPress={() => getDataSource(data)}>
                <View style={[ItemCenter, { backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 5 }]}>
                    <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>{'ใช้คูปอง'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};