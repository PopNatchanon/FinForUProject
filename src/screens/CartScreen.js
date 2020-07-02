///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
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
import { GetServices, GetData, NavigationNavigateScreen } from '../customComponents/Tools';
import { PopularProduct } from './StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService, activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
function CartScreen(props) {
    const [activeDelete, setActiveDelete] = useState(false);
    const [activeGetSource, setActiveGetSource] = useState(true);
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
    let getData2 = (value) => { setActiveRefresh(true); setActiveSave(false); setDataService2(value); };
    let getData3 = (value) => { setActiveRefresh(true); setActiveDelete(false); setDataService3(value); };
    let getCheckedAll = (value) => { setCheckedAll(value); setActiveSave2(true); };
    let ArrayItems = (value) => { setActiveSave(true); setArrayItem(value); };
    let ArrayItems2 = (value) => { setActiveDelete(true); setArrayItem2(value); setButtomDeleteAll(false); };
    let propsFunction = () => { setButtomDeleteAll(!buttomDeleteAll); };
    currentUser && dataBody && activeRefresh &&
        GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), });
    arrayItem && activeSave &&
        GetServices({ uriPointer: uri2, dataBody: arrayItem, Authorization: cokie, getDataSource: value => getData2(value), });
    arrayItem2 && activeDelete &&
        GetServices({ uriPointer: uri3, dataBody: arrayItem2, Authorization: cokie, getDataSource: value => getData3(value), });
    activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
    activeSave2 && setActiveSave2(false);
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {/* {
                    activeRefresh  || activeSave  &&
                    <LoadingScreen />

                } */}
        <AppBar1 {...props} titleHead='รถเข็น' deleteBar={dataService && dataService.cart_list.length > 0 ? true : false} backArrow
            buttomDeleteAll={buttomDeleteAll} propsFunction={value => propsFunction(value)} />
        <ScrollView>
            {dataService && <Product_Cart dataService={dataService.cart_list} dataService2={dataService2} currentUser={currentUser}
                ArrayItem={value => ArrayItems(value)} checkedAll={{ checkedAll, activeSave2 }} getCheckedAll={value =>
                    getCheckedAll(value)} ArrayItem2={value => ArrayItems2(value)} />}
            {/* <Product_Like /> */}
            <PopularProduct {...props} headText={'คุณอาจชอบสิ่งนี้'} />
        </ScrollView>
        {dataService && dataService.cart_list.length > 0 && dataService2 && <Buy_bar {...props} dataService2={dataService2}
            checkedAll={checkedAll} list_order={ArrayItem.list_order} getCheckedAll={value => getCheckedAll(value)}
            buttomDeleteAll={buttomDeleteAll} currentUser={currentUser} DeleteAction={value => ArrayItems2(value)} cokie={cokie} />}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Product_Cart
export let Product_Cart = (props) => {
    const { dataService, } = props;
    console.log('dataService')
    console.log(dataService)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         activecart: true,
    //         activeHeadArray: false,
    //         activeRefresh: false,
    //     };
    // };
    // setStateItemArrayChecked = (checked, id_cartdetail,) => {
    //     const { ArrayItem, currentUser, dataService, getCheckedAll, } = this.props;
    //     const { HeadArray, ItemArray } = this.state;
    //     var numindex = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(id_cartdetail);
    //     ItemArray[numindex].checked = checked;
    //     var checkedMain = ItemArray.filter((item) => { return item.name_store == ItemArray[numindex].name_store })
    //         .map((item2) => { return item2.checked }).every((item3) => { return item3 });
    //     var numindex_h = HeadArray.map((item) => { return item.name; }).indexOf(ItemArray[numindex].name_store);
    //     var id = [];
    //     for (var n = 0; n < dataService.length; n++) {
    //         if (ItemArray[n].checked) {
    //             id.push(dataService[n].id_cartdetail);
    //         };
    //     };
    //     HeadArray[numindex_h].checked = checkedMain;
    //     var checkedAll = HeadArray.map((item) => { return item.checked }).every((item2) => { return item2 });
    //     getCheckedAll(checkedAll);
    //     ArrayItem({
    //         amount: ItemArray[numindex].itemCount,
    //         list_order: id.join(','),
    //         id_cartdetail: id_cartdetail,
    //         id_customer: currentUser.id_customer
    //     });
    //     this.setState({ activecart: true, ItemArray, HeadArray, });
    // };
    // setStateItemArrayitemCount = (itemCount, id_cartdetail, max_remain,) => {
    //     const { ArrayItem, currentUser, dataService, } = this.props;
    //     const { ItemArray } = this.state;
    //     var numindex = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(id_cartdetail);
    //     var id = [];
    //     for (var n = 0; n < dataService.length; n++) {
    //         if (ItemArray[n].checked) {
    //             id.push(ItemArray[n].id_cartdetail);
    //         };
    //     };
    //     itemCount > 0 && itemCount < max_remain && (
    //         ItemArray[numindex].itemCount = itemCount,
    //         ArrayItem({
    //             amount: itemCount,
    //             list_order: id.join(','),
    //             id_cartdetail: id_cartdetail,
    //             id_customer: currentUser.id_customer
    //         })
    //     );
    //     this.setState({ activecart: false, activeHeadArray: false, activeRefresh: false });
    // };
    // setStateHeadArray = (checked, name) => {
    //     const { getCheckedAll, } = this.props;
    //     const { HeadArray, ItemArray } = this.state;
    //     var numindex = HeadArray.map((item) => { return item.name; }).indexOf(name);
    //     HeadArray[numindex].checked = checked;
    //     var numcount = ItemArray.filter((value) => { return value.name_store == name }).map((item) => { return item.id_cartdetail });
    //     for (var n = 0; n < numcount.length; n++) {
    //         var numindex_n = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(numcount[n]);
    //         ItemArray[numindex_n].checked = checked;
    //     };
    //     var checkedAll = HeadArray.map((item) => { return item.checked }).every((item2) => { return item2 });
    //     getCheckedAll(checkedAll);
    //     this.setState({ activecart: true, activeHeadArray: true, HeadArray, ItemArray, });
    // };
    // checkItem = (length) => {
    //     const { dataService } = this.props;
    //     if (dataService != null) {
    //         var ItemArray = [];
    //         var n;
    //         for (n = 0; length > n; n++) {
    //             ItemArray[n] = {
    //                 checked: true,
    //                 itemCount: dataService[n].quantity * 1,
    //                 id_cartdetail: dataService[n].id_cartdetail,
    //                 name_store: dataService[n].name,
    //             };
    //         };
    //         this.setState({ ItemArray, activeRefresh: true });
    //     };
    // };
    // setStateAll = (checked) => {
    //     const { getCheckedAll, } = this.props;
    //     const { HeadArray, ItemArray } = this.state;
    //     for (var n_all = 0; n_all < HeadArray.length; n_all++) {
    //         HeadArray[n_all].checked = checked;
    //         var numcount = ItemArray.filter((value) => value.name_store == HeadArray[n_all].name)
    //             .map((item) => item.id_cartdetail);
    //         for (var n = 0; n < numcount.length; n++) {
    //             var numindex_n = ItemArray.map((item) => item.id_cartdetail).indexOf(numcount[n])
    //             ItemArray[numindex_n].checked = checked
    //         };
    //         var checkedAll = HeadArray.map((item) => item.checked).every((item2) => item2);
    //     };
    //     getCheckedAll(checkedAll);
    //     this.setState({ activecart: true, activeHeadArray: true, HeadArray, ItemArray, });
    // };
    // renderItem = (data, { checkedAll, dataService, dataService2 } = this.props,
    //     { activecart, activeHeadArray, activeRefresh, ItemArray, HeadArray, } = this.state) => {
    //     this.dataMySQL = `${finip}/${data.item.path_product}/${data.item.image_product}`;
    //     this.numindex = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(data.item.id_cartdetail);
    //     ((dataService2 == null && activecart) || (activeHeadArray && activecart) || (activeRefresh)) && this.setStateItemArrayitemCount(
    //         ItemArray[this.numindex].itemCount, data.item.id_cartdetail, data.item.max_remain);
    //     <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#fff', borderColor: '#ECECEC', borderRightWidth: 1, }}>
    //         <View style={{ flexDirection: 'row', }}>
    //             <CheckBox containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]} textStyle={14}
    //                 fontFamily={'SukhumvitSet-Text'} checked={ItemArray[this.numindex].checked} onPress={() =>
    //                     this.setStateItemArrayChecked(!ItemArray[this.numindex].checked, data.item.id_cartdetail,)} />
    //             <View style={{
    //                 backgroundColor: '#fffffe', width: normalize(100), height: 'auto', aspectRatio: 1, marginVertical: 6,
    //                 borderColor: '#ECECEC', borderWidth: 1
    //             }}>
    //                 <FastImage style={[stylesMain.BoxProduct2Image, { flex: 1 }]} source={{ uri: this.dataMySQL, }}
    //                     resizeMode={FastImage.resizeMode.contain} />
    //             </View>
    //             <View style={[stylesMain.ItemCenterVertical, { marginLeft: 20 }]}>
    //                 <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: width * 0.38 }]}>
    //                     {data.item.product_name}</Text>
    //                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{`${data.item.detail_1} ${data.item.detail_2}`}</Text>
    //                 <NumberFormat value={data.item.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
    //                     <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold, { color: mainColor }]}>{value}</Text>} />
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <TouchableOpacity activeOpacity={1} onPress={() => this.setStateItemArrayitemCount(
    //                         ItemArray[this.numindex].itemCount - 1,
    //                         data.item.id_cartdetail,
    //                         data.item.max_remain,
    //                     )}>
    //                         <View style={[stylesMain.ItemCenter,
    //                         { width: 30, height: 25, borderColor: '#ECECEC', borderRightWidth: 0, borderWidth: 1 }]}>
    //                             <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4,
    //                             { color: ItemArray[this.numindex].itemCount > 1 ? '#111' : '#CECECE' }]}>-</Text>
    //                         </View>
    //                     </TouchableOpacity>
    //                     <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText,
    //                     { width: 50, height: 25, borderColor: '#ECECEC', borderWidth: 1 }]}>
    //                         <Text style={[stylesMain.ItemCenterVertical]}>{ItemArray[this.numindex].itemCount}</Text>
    //                     </View>
    //                     <TouchableOpacity activeOpacity={1} onPress={() => this.setStateItemArrayitemCount(
    //                         ItemArray[this.numindex].itemCount + 1,
    //                         data.item.id_cartdetail,
    //                         data.item.max_remain,
    //                     )}>
    //                         <View style={[stylesMain.ItemCenter,
    //                         { width: 30, height: 25, borderColor: '#ECECEC', borderLeftWidth: 0, borderWidth: 1 }]}>
    //                             <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, {
    //                                 color: ItemArray[this.numindex].itemCount < data.item.max_remain - 1 ? '#111' : '#CECECE'
    //                             }]}>+</Text>
    //                         </View>
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         </View>
    //     </TouchableOpacity>
    // };
    // DeleteItem = (id_cartdetail, data, rowMap,) => {
    //     const { ArrayItem2, currentUser } = this.props;
    //     setTimeout(() => { rowMap[data.item.key] && rowMap[data.item.key].closeRow() }, 450);
    //     ArrayItem2({
    //         list_order: id_cartdetail,
    //         id_customer: currentUser.id_customer
    //     });
    // };
    // renderHiddenItem = (data, rowMap,) => <View style={{
    //     alignItems: 'center', backgroundColor: '#DDD', flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15,
    // }}>
    //     <TouchableOpacity style={[{
    //         alignItems: 'center', bottom: 0, justifyContent: 'center', position: 'absolute', top: 0, width: 75, backgroundColor: 'red',
    //         right: 0, borderColor: '#ECECEC', borderTopWidth: 1, borderBottomWidth: 1,
    //     }]}
    //         onPress={() => this.DeleteItem(data.item.id_cartdetail, data, rowMap)}>
    //         <IconFontAwesome name='trash-o' size={30} style={{ color: '#fff' }} />
    //     </TouchableOpacity>
    // </View>;
    // render() {
    //     const { dataService, } = this.props;
    //     const { ItemArray, HeadArray, } = this.state;
    //     dataService && (ItemArray == null || (dataService.length != ItemArray.length)) && this.checkItem(dataService.length);
    //     var arrayName = [];
    //     var arrayItem = [];
    //     if (dataService.length > 0 && HeadArray == null) {
    //         for (var n = 0; n < dataService.length; n++) {
    //             if (arrayName.indexOf(dataService[n].name) == -1) {
    //                 arrayName.push(dataService[n].name);
    //                 arrayItem.push({
    //                     name: dataService[n].name, store_path: dataService[n].store_path,
    //                     store_image: dataService[n].store_image, checked: true
    //                 });
    //             };
    //         };
    //         this.setState({ HeadArray: arrayItem });
    //     };
    //     if (HeadArray != null && HeadArray.map((value) => { return dataService.some((item) => { return item.name == value.name }) })
    //         .every((value2) => { return value2 }) == false) {
    //         arrayName = [];
    //         arrayItem = [];
    //         for (var n = 0; n < dataService.length; n++) {
    //             if (arrayName.indexOf(dataService[n].name) == -1) {
    //                 arrayName.push(dataService[n].name);
    //                 arrayItem.push({
    //                     name: dataService[n].name, store_path: dataService[n].store_path,
    //                     store_image: dataService[n].store_image, checked: true
    //                 });
    //             };
    //         };
    //         this.setState({ HeadArray: arrayItem, activecart: true, dataService2: [], });
    //     };
    return <View>
        {dataService && dataService.length > 0 ?
            ItemArray && HeadArray.map((item_n, index_n) => {
                var dataMySQL_n = `${finip}/${item_n.store_path}/${item_n.store_image}`;
                return <View style={{ marginBottom: 10, backgroundColor: '#fff' }} key={index_n}>
                    <View style={{ flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <CheckBox containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]}
                                textStyle={14} fontFamily={'SukhumvitSet-Text'} checked={item_n.checked}
                                onPress={() => setStateHeadArray(!item_n.checked, item_n.name)} />
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
                        <SwipeListView useFlatList data={dataService.filter((value) => value.name == item_n.name)}
                            renderItem={renderItem} renderHiddenItem={renderHiddenItem} disableRightSwipe
                            rightOpenValue={-75} stopRightSwipe={-75} />
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
        this.setState({ dataService, Coupon: false });
    };
    getData2 = (dataService3) => {
        const { currentUser, list_order, } = this.props;
        const { text, } = this.state;
        var dataBody3 = {
            id_customer: currentUser.id_customer,
            list_order,
            use_coupon: '',
            other_coupon: text,
        };
        var dataBody4 = {
            id_customer: currentUser.id_customer,
            id_cartdetail: list_order,
            use_coupon: '',
            other_coupon: text,
            buy_now: "cart",
        };
        dataService3 && dataService3.coupon_message !== 'เงื่อนไขส่วนลดไม่ถูกต้อง' ?
            this.setState({ dataBody3, dataBody4, dataService3, otherCoupon: false, Service3: true, check_coupon: true }) :
            this.setState({ errorService3: true, otherCoupon: false, text: '' });
    };
    setStateCoupon2 = (dataService4) => {
        const { currentUser, list_order, } = this.props;
        var dataBody3 = {
            id_customer: currentUser.id_customer,
            list_order,
            use_coupon: dataService4.id_coupon,
            other_coupon: '',
        };
        var dataBody4 = {
            id_customer: currentUser.id_customer,
            id_cartdetail: list_order,
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
            dataService5, check_coupon: false, Service3: check_coupon2 ? false : true,
            check_coupon2: false
        });
    };
    getData4 = (dataService6) => {
        const { navigation } = this.props;
        NavigationNavigateScreen({ goScreen: 'Customer_Order', setData: { no_invoice: dataService6.no_invoice }, navigation });
    };
    setStateText = (text) => this.setState({ text });
    setStateCancel = () => {
        const { currentUser, list_order, } = this.props;
        var dataBody3 = {
            id_customer: currentUser.id_customer,
            list_order,
            use_coupon: '',
            other_coupon: '',
        };
        var dataBody4 = {
            id_customer: currentUser.id_customer,
            id_cartdetail: list_order,
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
        const { currentUser, list_order, } = this.props;
        const { text, } = this.state;
        var dataBody2 = {
            id_customer: currentUser.id_customer,
            list_order,
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
        const { buttomDeleteAll, checkedAll, currentUser, dataService2, cokie, list_order, } = this.props;
        const {
            create_bill, check_coupon, Coupon, dataBody2, dataBody3, dataBody4, dataService3, dataService4, dataService5, errorService3,
            otherCoupon, Service3, text,
        } = this.state;
        var uri = `${finip}/cart/check_coupon`;
        var dataBody = {
            id_customer: currentUser.id_customer,
            list_order
        };
        var uri2 = `${finip}/coupon/get_other_coupon`;
        var uri3 = `${finip}/cart/track_data`;
        var uri4 = `${finip}/bill/create_bill`;
        errorService3 &&
            this._spring();
        Coupon && cokie &&
            GetServices({
                uriPointer: uri, showConsole: 'check_coupon', Authorization: cokie, dataBody, getDataSource: this.getData.bind(this)
            });
        otherCoupon && cokie &&
            GetServices({
                uriPointer: uri2, showConsole: 'get_other_coupon', Authorization: cokie, dataBody: dataBody2,
                getDataSource: this.getData2.bind(this)
            });
        check_coupon && cokie &&
            GetServices({
                uriPointer: uri3, showConsole: 'track_data', Authorization: cokie, dataBody: dataBody3,
                getDataSource: this.getData3.bind(this)
            });
        create_bill && cokie &&
            GetServices({
                uriPointer: uri4, showConsole: 'create_bill', Authorization: cokie, dataBody: dataBody4,
                getDataSource: this.getData4.bind(this)
            });
        return <>
            <Animatable.View style={[stylesMain.animatedView, {
                opacity: this.springValue, transform: [{ translateY: this.transformValue }]
            }]}>
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
                        <NumberFormat value={dataService5 ? dataService5.now_total : dataService2 && dataService2.now_total} prefix={'฿'}
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