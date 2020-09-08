///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(TotelOrder);
function TotelOrder(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    return <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
        <AppBar {...props} backArrow titleHead='ประวัติการขาย' />
        <Button_bar {...props} setSelected={selectedIndex} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export let Button_bar = (props) => {
    const { setSelected } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const item = [{ name: 'ยังไม่ชำระ' }, { name: 'ที่ต้องจัดส่ง' }, { name: 'การจัดส่ง' }, { name: 'รอการรีวิว' },
    { name: 'สำเร็จแล้ว' }];
    var dataBody = {
        id_customer: currentUser && currentUser.id_customer,
        type_purchase:
            selectedIndex == 0 ? "wait" :
                selectedIndex == 1 ? 'paid_unsend' :
                    selectedIndex == 2 ? 'paid' :
                        selectedIndex == 3 ? 'accepted' :
                            selectedIndex == 4 ? 'reviewed' :
                                'wait',
        device: "mobile_device",
    };
    var uri = `${finip}/purchase_data/view_store_purchase`;
    let getData = (value) => { setActiveSelectedIndex(false); setDataService(value); };
    let updateIndex = (value) => { setActiveSelectedIndex(true); setSelectedIndex(value.selectedIndex); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        !activeGetCurrentUser && activeSelectedIndex && cokie && GetServices({
            uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody, getDataSource: value => getData(value),
        });
    }, [!activeGetCurrentUser && activeSelectedIndex && cokie]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
    }, [activeGetCurrentUser]);
    let PathList = <View>
        {!activeSelectedIndex && ([
            <Text key={'wait'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                {selectedIndex == 1 && ''}</Text>,
            dataService && dataService.purchase.length > 0 ?
                dataService.purchase.map((value, index) => { return <Order_Me_Box {...props} dataService={value} key={index} /> }) :
                <View style={[stylesProfileTopic.products_pro]}>
                    <IconFeather name='edit' size={50} color='#000000' />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ยังไม่มีคำสั่งซื้อ</Text>
                </View>
        ])}
    </View>;
    return <View style={stylesMain.SafeAreaView}>
        <View style={stylesProfileTopic.Button_bar}>
            <ScrollView horizontal>
                <TabBar sendData={value => updateIndex(value)} item={item} SetValue={selectedIndex > -1 ? selectedIndex : setSelected}
                    activeColor={'#fff'} activeFontColor={mainColor} type='tag' />
            </ScrollView>
        </View>
        <ScrollView>
            {PathList}
        </ScrollView>
    </View>;
};
///------------------------------------------------------------------------------///
export let Order_Me_Box = (props) => {
    // 3 // Review_order return_order detail_order // buy_again_order return_order
    const { dataService, navigation } = props;
    const uri_image_Customer = `${finip}/${dataService.cus_imgpath}/${dataService.cus_img}`;
    const uri_image_product = `${finip}/${dataService.image_path}/${dataService.image_product}`;
    return <>
        <View style={stylesMain.FrameBackground}>
            <View style={[stylesProfileTopic.Order_BoxStore]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={[stylesProfileTopic.Order_StorePro, stylesMain.ItemCenterVertical,]}
                        source={{ uri: uri_image_Customer, }} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { marginLeft: 5 }]}>
                        {dataService.customer_name}</Text>
                </View>
                {dataService.purchase == 'wait' && <TouchableOpacity key={'Review_order'} activeOpacity={1}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#111', width: width * 0.3, textAlign: 'center', color: '#20BDA1' }]}>รอชำระ</Text>
                </TouchableOpacity>}
                {dataService.purchase == 'paid_unsend' && <Text key={'shipping_order'} style={[stylesFont.FontFamilyText,
                stylesFont.FontSize6, stylesMain.ItemCenterVertical, { color: '#111', width: width * 0.3, textAlign: 'center', }]}>
                    เพิ่มเลขพัสดุ</Text>}
                {dataService.purchase == 'paid' && <Text key={'shipping'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                stylesMain.ItemCenterVertical]}>{dataService.tracking_number}</Text>}
                {dataService.purchase == 'accepted' && <TouchableOpacity key={'Review'} activeOpacity={1}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#20BDA1', width: width * 0.3, textAlign: 'center', }]}>
                        <IconFeather name='edit' size={15} />รอการรีวิว</Text>
                </TouchableOpacity>}
                {dataService.purchase == 'reviewed' && <TouchableOpacity key={'Review_order'} activeOpacity={1} onPress={() =>
                    NavigationNavigate({ goScreen: 'Customer_Topic_Review_Froms', navigation })}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical,
                    { color: '#111', width: width * 0.3, textAlign: 'center', }]}>สำเร็จแล้ว</Text>
                </TouchableOpacity>}
            </View>
            <View style={stylesProfileTopic.Order_Product}>
                <View style={stylesMain.FlexRow}>
                    <View style={stylesProfileTopic.Order_Product_Pro}>
                        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: uri_image_product, }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                    <View style={{ marginTop: 10, width: width * 0.5 }}>
                        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataService.invoice_no}</Text>
                        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.product_name}</Text>
                        <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>
                            {`${dataService.detail_1} ${dataService.detail_2}`}</Text>
                        <NumberFormat value={dataService.quantity} displayType={'text'} thousandSeparator={true} prefix={''}
                            renderText={value => <Text>x {value}</Text>} />
                    </View>
                </View>
                <NumberFormat value={dataService.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor, marginTop: 10, }]}>
                        {value}</Text>} />
            </View>
            <View style={stylesProfileTopic.Order_Box_price}>
                <View style={stylesProfileTopic.Order_Box_priceText}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                    <NumberFormat value={dataService.price_total} displayType={'text'} thousandSeparator={true} prefix={'฿'}
                        renderText={value => <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                        { marginLeft: 10, color: mainColor }]}>
                            {value}</Text>} />
                </View>
                <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                    <TouchableOpacity onPress={() =>
                        NavigationNavigate({ goScreen: 'Seller_Detail_Order', navigation })}>
                        <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[stylesProfileTopic.Order_Button,
                        { borderWidth: 1, borderColor: mainColor, backgroundColor: mainColor }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>;
};