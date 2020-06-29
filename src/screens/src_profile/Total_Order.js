///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useEffect, useState, } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { TabBar, GetServices, LoadingScreen, NavigationNavigateScreen, GetData } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService, activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Total_Order);
function Total_Order(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    let getDataSource = value => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getDataSource(value) });
    }, [activeGetSource]);
    return <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
        {isLoading && <LoadingScreen />}
        <AppBar1 {...props} backArrow titleHead='การสั่งซื้อของฉัน' />
        <Button_bar {...props} currentUser={currentUser} cokie={cokie} setLoading={value => setIsLoading(value)}
            setFSelectedIndex={selectedIndex * 1} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Button_bar
export let Button_bar = (props) => {
    const { currentUser, cokie, setLoading, setFSelectedIndex } = props;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(undefined);
    const item = [{ name: 'ทั้งหมด' }, { name: 'ที่ต้องชำระ' }, { name: 'ที่ต้องได้รับ' }, { name: 'สำเร็จแล้ว' }, { name: 'ยกเลิก' }];
    var uri = `${finip}/purchase_data/view_purchase`;
    var dataBody = {
        id_customer: currentUser && currentUser.id_customer,
        type_purchase: selectedIndex == 0 ? "all" : selectedIndex == 1 ? 'wait' : selectedIndex == 2 ? 'paid' :
            selectedIndex == 3 ? 'accepted' : selectedIndex == 4 ? 'cancel' : 'all',
        device: "mobile_device",
    };
    setFSelectedIndex == 0 && setSelectedIndex(0);
    let getData = value => { setActiveSelectedIndex(false); setDataService(value); setLoading(false); };
    let updateIndex = (value) => { setActiveSelectedIndex(true); setLoading(true); setSelectedIndex(value.selectedIndex * 1); };
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                activeSelectedIndex && currentUser && cokie && selectedIndex == 0 && GetServices({
                    uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody, getDataSource: value => getData(value),
                });
                return <>
                    {!activeSelectedIndex && selectedIndex == 0 && <>
                        <Text key={'all'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                            รายการคำสั่งซื้อ</Text>
                        {dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <From_Order_Box {...props} dataService={value} key={index} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>}
                    </>}
                </>;
            case 1:
                activeSelectedIndex && currentUser && cokie && selectedIndex == 1 && GetServices({
                    uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody, getDataSource: value => getData(value),
                });
                return <>
                    {!activeSelectedIndex && selectedIndex == 1 && <>
                        <Text key={'wait'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                            ที่ต้องชำระ</Text>
                        {dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <From_Order_Box {...props} dataService={value} key={index} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>}
                    </>}
                </>;
            case 2:
                activeSelectedIndex && currentUser && cokie && selectedIndex == 2 && GetServices({
                    uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody, getDataSource: value => getData(value),
                });
                return <>
                    {!activeSelectedIndex && selectedIndex == 2 && <>
                        <Text key={'paid'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                            ที่ต้องได้รับ</Text>
                        {dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <From_Order_Box {...props} dataService={value} key={index} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>}
                    </>}
                </>;
            case 3:
                activeSelectedIndex && currentUser && cokie && selectedIndex == 3 && GetServices({
                    uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody, getDataSource: value => getData(value),
                });
                return <>
                    {!activeSelectedIndex && selectedIndex == 3 && <>
                        <Text key={'accepted'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                        { marginLeft: 10, marginTop: 10, }]}>สำเร็จแล้ว</Text>
                        {dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <From_Order_Box {...props} dataService={value} key={index} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>}
                    </>}
                </>;
            case 4:
                activeSelectedIndex && currentUser && cokie && selectedIndex == 4 && GetServices({
                    uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody, getDataSource: value => getData(value),
                });
                return <>
                    {!activeSelectedIndex && selectedIndex == 4 && <>
                        <Text key={'cancel'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                            ยกเลิกสินค้า</Text>
                        {dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <From_Order_Box {...props} dataService={value} key={index} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>}
                    </>}
                </>;
        };
    };
    return <>
        <View style={stylesProfileTopic.Button_bar}>
            <ScrollView horizontal>
                <TabBar sendData={value => updateIndex(value)} item={item} SetValue={selectedIndex >= 0 ?
                    selectedIndex : setFSelectedIndex} activeColor={'#fff'} activeFontColor={mainColor} type='tag' />
            </ScrollView>
        </View>
        <ScrollView>
            {PathList()}
        </ScrollView>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> From_Order_Box
export let From_Order_Box = (props) => {
    const { dataService, navigation } = props;
    const uri_image_store = `${finip}/${dataService.store_path}/${dataService.store_image}`;
    const uri_image_product = `${finip}/${dataService.path_product}/${dataService.image_product}`;
    const setDataDetailOrder = {
        id_cartdetail: dataService.id_cartdetail, insert_date: dataService.insert_date, no_invoice: dataService.invoice_no
    };
    return <View>
        <View style={stylesMain.FrameBackground}>
            <View style={[stylesProfileTopic.Order_BoxStore]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={[stylesProfileTopic.Order_StorePro, stylesMain.ItemCenterVertical,]}
                        source={{ uri: uri_image_store, }} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { marginLeft: 5 }]}>
                        {dataService.name}</Text>
                    <View style={stylesProfileTopic.Order_Box_Button}>
                        <TouchableOpacity>
                            <View style={[stylesProfileTopic.Order_Button, stylesMain.ItemCenterVertical,
                            { borderWidth: 1, borderColor: mainColor, backgroundColor: mainColor }]}>
                                <IconAntDesign RightItem name="wechat" size={20} color='#FFFFFF' />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                                { color: '#FFFFFF', marginHorizontal: 6, }]}>แชทเลย</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[stylesProfileTopic.Order_Button, stylesMain.ItemCenterVertical, { borderWidth: 1 }]}>
                                <Icons RightItem name="store" size={16} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginHorizontal: 6, }]}>ดูร้านค้า</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {dataService.status_purchase == 'wait' && <TouchableOpacity key={'Review_order'} activeOpacity={1} onPress={() =>
                    NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 7 }, navigation })}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#111', width: width * 0.3, textAlign: 'center', color: '#20BDA1' }]}>รอชำระ</Text>
                </TouchableOpacity>}
                {dataService.status_purchase == 'paid' && (dataService.tracking_number == null ?
                    <Text key={'shipping_order'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#111', width: width * 0.3, textAlign: 'center', }]}>{'เตรียมจัดส่ง'}</Text> :
                    <Text key={'shipping_order'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#111', width: width * 0.3, textAlign: 'center', }]}>
                        {'กำลังจัดส่ง\n'}<Text style={{ color: '#111' }}>[{dataService.tracking_number}]</Text></Text>)}
                {dataService.status_purchase == 'accepted' && <TouchableOpacity key={'Review_order'} activeOpacity={1} onPress={() =>
                    NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 7 }, navigation })}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#20BDA1', width: width * 0.3, textAlign: 'center', }]}><IconFeather name='edit' size={15} />เขียนรีวิว</Text>
                </TouchableOpacity>}
                {dataService.status_purchase == 'cancel' && <TouchableOpacity key={'Review_order'} activeOpacity={1} onPress={() =>
                    NavigationNavigateScreen({ goScreen: 'Profile_Topic', setData: { selectedIndex: 7 }, navigation })}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#111', width: width * 0.3, textAlign: 'center', }]}>ยกเลิก</Text>
                </TouchableOpacity>}
            </View>
            <View style={stylesProfileTopic.Order_Product}>
                <View style={stylesMain.FlexRow}>
                    <View style={stylesProfileTopic.Order_Product_Pro}>
                        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: uri_image_product, }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                    <View style={{ marginTop: 10, width: width * 0.5 }}>
                        <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.product_name}</Text>
                        <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>
                            {`${dataService.detail_1} ${dataService.detail_2}`}</Text>
                        <NumberFormat value={dataService.quantity} displayType={'text'} thousandSeparator={true} prefix={''}
                            renderText={value => <Text>x {value}</Text>} />
                    </View>
                </View>
                <NumberFormat value={dataService.price} displayType={'text'} thousandSeparator={true} prefix={'฿'}
                    renderText={value => <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                    { color: mainColor, marginTop: 10, }]}>{value}</Text>} />
            </View>
            <View style={stylesProfileTopic.Order_Box_price}>
                <View style={stylesProfileTopic.Order_Box_priceText}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                    <NumberFormat value={dataService.price_total} displayType={'text'} thousandSeparator={true} prefix={'฿'}
                        renderText={value => <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                        { marginLeft: 10, color: mainColor }]}>{value}</Text>} />
                </View>
                <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                    {dataService.status_purchase == 'wait' && <TouchableOpacity key={'payment_order'} onPress={() =>
                        NavigationNavigateScreen({
                            goScreen: 'Customer_Order', setData: { no_invoice: dataService.invoice_no }, navigation
                        })}>
                        <View style={[stylesProfileTopic.Order_Button,
                        { borderWidth: 1, borderColor: mainColor, backgroundColor: mainColor }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ดำเนินการชำระเงิน</Text>
                        </View>
                    </TouchableOpacity>}
                    {dataService.status_purchase == 'wait' && <TouchableOpacity key={'cancel_order'} onPress={() =>
                        NavigationNavigateScreen({ goScreen: 'CancelScreen', setData: { selectedIndex: 1 }, navigation })}>
                        <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยกเลิกสินค้า</Text>
                        </View>
                    </TouchableOpacity>}
                    {dataService.status_purchase == 'accepted' && <TouchableOpacity key={'return_order'} onPress={() =>
                        NavigationNavigateScreen({ goScreen: 'Return_products', setData: { selectedIndex: 1 }, navigation })}>
                        <View style={{ borderBottomColor: mainColor, borderBottomWidth: 1, height: 20, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>ส่งคำร้องคืนสินค้า</Text>
                        </View>
                    </TouchableOpacity>}
                    {(dataService.status_purchase == 'paid' || dataService.status_purchase == 'accepted') && <TouchableOpacity
                        key={'detail_order'} onPress={() =>
                            NavigationNavigateScreen({ goScreen: 'Order_Detail', setData: setDataDetailOrder, navigation })}>
                        <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                        </View>
                    </TouchableOpacity>}
                    {dataService.status_purchase == 'cancel' && <TouchableOpacity key={'buy_again_order'}>
                        <View style={[stylesProfileTopic.Order_Button, { backgroundColor: mainColor }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ซื้ออีกครั้ง</Text>
                        </View>
                    </TouchableOpacity>}
                </View>
            </View>
        </View>
    </View>;
};