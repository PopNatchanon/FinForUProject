///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
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
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
import { GetData, GetServices, TabBar, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { contain } = FastImage.resizeMode;
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenterVertical, SafeAreaViews, } = stylesMain;
const { Button_bar, Order_BoxStore, Order_Box_price, Order_Box_priceText, Order_Button, Order_Product, Order_Product_Pro, Order_StorePro,
    products_pro, } = stylesProfileTopic;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(TotelOrder);
function TotelOrder(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    return <SafeAreaView style={[SafeAreaViews, { height: 'auto' }]}>
        <AppBar {...props} backArrow titleHead='ประวัติการขาย' />
        <Button_bars {...props} setSelected={selectedIndex} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export const Button_bars = (props) => {
    const { setSelected } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const item = [{ name: 'ยังไม่ชำระ' }, { name: 'ที่ต้องจัดส่ง' }, { name: 'การจัดส่ง' }, { name: 'รอการรีวิว' }, { name: 'สำเร็จแล้ว' }];
    const dataBody = {
        id_customer: currentUser && currentUser.id_customer,
        type_purchase: selectedIndex == 0 ? "wait" : selectedIndex == 1 ? 'paid_unsend' : selectedIndex == 2 ? 'paid' :
            selectedIndex == 3 ? 'accepted' : selectedIndex == 4 ? 'reviewed' : 'wait',
        device: "mobile_device",
    };
    const uri = `${finip}/purchase_data/view_store_purchase`;
    const getData = (v) => { setActiveSelectedIndex(false); setDataService(v); };
    const updateIndex = (v) => { setActiveSelectedIndex(true); setSelectedIndex(v.selectedIndex); };
    const getSource = (v) => { setActiveGetCurrentUser(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        !activeGetCurrentUser && activeSelectedIndex && cokie &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), showConsole: 'view_purchase', uriPointer: uri, });
    }, [!activeGetCurrentUser && activeSelectedIndex && cokie]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, });
    }, [activeGetCurrentUser]);
    const PathList = <View>
        {!activeSelectedIndex && ([
            <Text key={'wait'} style={[FontFamilyText, FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                {selectedIndex == 1 && ''}</Text>,
            dataService && dataService.purchase.length > 0 ?
                dataService.purchase.map((v, i) => <Order_Me_Box {...props} dataService={v} key={i} />) :
                <View style={[products_pro]}>
                    <IconFeather name='edit' size={50} color='#000000' />
                    <Text style={[FontFamilyBold, FontSize4, { color: '#A2A2A2', }]}>ยังไม่มีคำสั่งซื้อ</Text>
                </View>])}
    </View>;
    return <View style={SafeAreaViews}>
        <View style={Button_bar}>
            <ScrollView horizontal>
                <TabBar sendData={(v) => updateIndex(v)} item={item} SetValue={selectedIndex > -1 ? selectedIndex : setSelected}
                    activeColor={'#fff'} activeFontColor={mainColor} type='tag' />
            </ScrollView>
        </View>
        <ScrollView>
            {PathList}
        </ScrollView>
    </View>;
};
///------------------------------------------------------------------------------///
export const Order_Me_Box = (props) => {
    // 3 // Review_order return_order detail_order // buy_again_order return_order
    const {
        customer_name, cus_img, cus_imgpath, detail_1, detail_2, image_path, image_product, invoice_no, price, price_total, product_name,
        purchase, quantity, tracking_number, } = props.dataService;
    const ImageCustomer = { uri: `${finip}/${cus_imgpath}/${cus_img}`, };
    const ImageProduct = { uri: `${finip}/${image_path}/${image_product}`, };
    return <>
        <View style={FrameBackground}>
            <View style={[Order_BoxStore]}>
                <View style={FlexRow}>
                    <FastImage resizeMode={contain} source={ImageCustomer} style={[Order_StorePro, ItemCenterVertical,]} />
                    <Text style={[FontFamilyBold, FontSize5, ItemCenterVertical, { marginLeft: 5, }]}>{customer_name}</Text>
                </View>
                {purchase == 'wait' && <TouchableOpacity key={'Review_order'} activeOpacity={1}>
                    <Text style={[FontFamilyText, FontSize6, ItemCenterVertical,
                        { color: '#20BDA1', textAlign: 'center', width: width * 0.3, }]}>รอชำระ</Text>
                </TouchableOpacity>}
                {purchase == 'paid_unsend' && <Text key={'shipping_order'} style={[FontFamilyText, FontSize6, ItemCenterVertical,
                    { color: '#111', textAlign: 'center', width: width * 0.3, }]}>เพิ่มเลขพัสดุ</Text>}
                {purchase == 'paid' && <Text key={'shipping'} style={[FontFamilyText, FontSize6, ItemCenterVertical]}>{tracking_number}</Text>}
                {purchase == 'accepted' && <TouchableOpacity key={'Review'} activeOpacity={1}>
                    <Text style={[FontFamilyText, FontSize6, ItemCenterVertical,
                        { color: '#20BDA1', textAlign: 'center', width: width * 0.3, }]}>
                        <IconFeather name='edit' size={15} />รอการรีวิว</Text>
                </TouchableOpacity>}
                {purchase == 'reviewed' && <TouchableOpacity key={'Review_order'} activeOpacity={1} onPress={() =>
                    NavigationNavigate({ ...props, goScreen: 'Customer_Topic_Review_Froms', })}>
                    <Text style={[FontFamilyText, FontSize6, ItemCenterVertical, { color: '#111', textAlign: 'center', width: width * 0.3, }]}>
                        สำเร็จแล้ว</Text>
                </TouchableOpacity>}
            </View>
            <View style={Order_Product}>
                <View style={FlexRow}>
                    <View style={Order_Product_Pro}>
                        <FastImage resizeMode={contain} source={ImageProduct} style={BoxProduct1Image} />
                    </View>
                    <View style={{ marginTop: 10, width: width * 0.5, }}>
                        <Text numberOfLines={1} style={[FontFamilyText, FontSize6]}>{invoice_no}</Text>
                        <Text numberOfLines={1} style={[FontFamilyText, FontSize5]}>{product_name}</Text>
                        <Text numberOfLines={2} style={[FontFamilyText, FontSize7,]}>{`${detail_1} ${detail_2}`}</Text>
                        <NumberFormat displayType={'text'} prefix={''} renderText={(v) => <Text>x {v}</Text>} thousandSeparator={true}
                            value={quantity} />
                    </View>
                </View>
                <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v) => <Text style={[FontFamilyText, FontSize5,
                    { color: mainColor, marginTop: 10, }]}>{v}</Text>} thousandSeparator={true} value={price} />
            </View>
            <View style={Order_Box_price}>
                <View style={Order_Box_priceText}>
                    <Text style={[FontFamilyText, FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                    <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v) => <Text style={[FontFamilyText, FontSize5,
                        { color: mainColor, marginLeft: 10, }]}>{v}</Text>} thousandSeparator={true} value={price_total} />
                </View>
                <View style={[Order_Box_priceText, { marginTop: 5, }]}>
                    <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Detail_Order', })}>
                        <View style={[Order_Button, { borderWidth: 1, }]}>
                            <Text style={[FontFamilyText, FontSize5]}>ดูรายละเอียด</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[Order_Button, { backgroundColor: mainColor, borderColor: mainColor, borderWidth: 1, }]}>
                            <Text style={[FontFamilyText, FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>;
};