///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, } from '../MainScreen';
import { TabBar, GetData, GetServices, NavigationNavigateScreen } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Seller_Totel_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { route } = this.props
        const selectedIndex = route.params?.selectedIndex
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
                <AppBar1 {...this.props} backArrow titleHead='ประวัติการขาย' />
                <Button_bar {...this.props} SetselectedIndex={selectedIndex} />
            </SafeAreaView>
        );
    }
}

///------------------------------------------------------------------------------///
export class Button_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            activeSelectedIndex: true,
            selectedIndex: 0,
        };
    }
    getData = (dataService) => {
        this.setState({ activeSelectedIndex: false, dataService })
    }
    updateIndex = (value) => {
        this.setState({ selectedIndex: value.selectedIndex, activeSelectedIndex: true, })
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie });
    }
    PathList() {
        const { navigation, } = this.props
        const { currentUser, cokie, activeGetCurrentUser, activeSelectedIndex, dataService, selectedIndex, } = this.state
        var uri = `${finip}/purchase_data/view_store_purchase`;
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
        activeGetCurrentUser == false && activeSelectedIndex == true && cokie &&
            GetServices({
                uriPointer: uri, Authorization: cokie, showConsole: 'view_purchase', dataBody,
                getDataSource: this.getData.bind(this),
            })
        activeGetCurrentUser == true &&
            GetData({ getCokie: true, getSource: this.getSource.bind(this), getUser: true, })
        return (
            <View>
                {
                    activeSelectedIndex == false && ([
                        <Text key={'wait'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                            marginLeft: 10, marginTop: 10,
                        }]}>{selectedIndex == 1 && ''}</Text>,
                        dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <Order_Me_Box {...this.props} dataService={value} key={index} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>
                    ])
                }
            </View>
        )
    }
    render() {
        const { SetselectedIndex } = this.props
        const { selectedIndex } = this.state
        const item = [{
            name: 'ยังไม่ชำระ'
        }, {
            name: 'ที่ต้องจัดส่ง'
        }, {
            name: 'การจัดส่ง'
        }, {
            name: 'รอการรีวิว'
        }, {
            name: 'สำเร็จแล้ว'
        }]
        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={stylesProfileTopic.Button_bar}>
                    <ScrollView horizontal>
                        <TabBar
                            sendData={this.updateIndex.bind(this)}
                            item={item}
                            SetValue={selectedIndex > -1 ? selectedIndex : SetselectedIndex}
                            activeColor={'#fff'}
                            activeFontColor={mainColor}
                            type='tag'
                        />
                    </ScrollView>
                </View>
                <ScrollView>
                    {this.PathList()}
                </ScrollView>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///
export class Order_Me_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() { // 3 // Review_order return_order detail_order // buy_again_order return_order
        const { dataService, navigation } = this.props
        const uri_image_Customer = `${finip}/${dataService.cus_imgpath}/${dataService.cus_img}`
        const uri_image_product = `${finip}/${dataService.image_path}/${dataService.image_product}`
        return (
            <>
                <View style={stylesMain.FrameBackground}>
                    <View style={[stylesProfileTopic.Order_BoxStore]}>
                        <View style={stylesMain.FlexRow}>
                            <FastImage style={[stylesProfileTopic.Order_StorePro, stylesMain.ItemCenterVertical,]}
                                source={{
                                    uri: uri_image_Customer,
                                }}
                                resizeMode={FastImage.resizeMode.contain} />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                                marginLeft: 5
                            }]}>
                                {dataService.customer_name}</Text>
                        </View>
                        {[
                            dataService.purchase == 'wait' &&
                            <TouchableOpacity key={'Review_order'} activeOpacity={1}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                                    color: '#111', width: width * 0.3, textAlign: 'center', color: '#20BDA1'
                                }]}> รอชำระ
                                </Text>
                            </TouchableOpacity>,
                            dataService.purchase == 'paid_unsend' && (
                                <Text key={'shipping_order'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                                stylesMain.ItemCenterVertical, {
                                    color: '#111', width: width * 0.3, textAlign: 'center',
                                }]}>
                                    เพิ่มเลขพัสดุ</Text>
                            ),
                            dataService.purchase == 'paid' && (
                                <Text key={'shipping'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                                stylesMain.ItemCenterVertical]}>
                                    {dataService.tracking_number}
                                </Text>
                            ),
                            dataService.purchase == 'accepted' &&
                            <TouchableOpacity key={'Review'} activeOpacity={1}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                                    color: '#20BDA1', width: width * 0.3, textAlign: 'center',
                                }]}>
                                    <IconFeather name='edit' size={15} />
                                    รอการรีวิว
                                </Text>
                            </TouchableOpacity>,
                            dataService.purchase == 'reviewed' &&
                            <TouchableOpacity key={'Review_order'} activeOpacity={1}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 7 }, navigation
                                })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                                    color: '#111', width: width * 0.3, textAlign: 'center',
                                }]}>
                                    สำเร็จแล้ว
                                </Text>
                            </TouchableOpacity>
                        ]}
                    </View>
                    <View style={stylesProfileTopic.Order_Product}>
                        <View style={stylesMain.FlexRow}>
                            <View style={stylesProfileTopic.Order_Product_Pro}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: uri_image_product,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={{ marginTop: 10, width: width * 0.5 }}>
                                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    {dataService.invoice_no}</Text>
                                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                    {dataService.product_name}</Text>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>
                                    {`${dataService.detail_1} ${dataService.detail_2}`}</Text>
                                <NumberFormat
                                    value={dataService.quantity}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={''}
                                    renderText={value =>
                                        <Text>x {value}</Text>
                                    } />
                            </View>
                        </View>
                        <NumberFormat
                            value={dataService.price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor, marginTop: 10, }]}>
                                    {value}</Text>
                            } />
                    </View>
                    <View style={stylesProfileTopic.Order_Box_price}>
                        <View style={stylesProfileTopic.Order_Box_priceText}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                            <NumberFormat
                                value={dataService.price_total}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'฿'}
                                renderText={value =>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: mainColor }]}>
                                        {value}</Text>
                                } />
                        </View>
                        <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                            <TouchableOpacity onPress={() => NavigationNavigateScreen({
                                goScreen: 'Seller_Detail_Order', setData: { selectedIndex: 0 }, navigation
                            })}>
                                <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={[stylesProfileTopic.Order_Button, {
                                    borderWidth: 1, borderColor: mainColor, backgroundColor: mainColor
                                }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                                        ติดต่อผู้ซื้อ</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}