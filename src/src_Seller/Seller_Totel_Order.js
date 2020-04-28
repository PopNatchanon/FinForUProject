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
import { AppBar1, GetData } from '../MainScreen';
import { TabBar, GetServices } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Seller_Totel_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='ประวัติการขาย' />
                <Button_bar navigation={this.props.navigation} SetselectedIndex={selectedIndex} />
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
        var uri = finip + '/purchase_data/view_store_purchase';
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
        return (
            <View>
                {[
                    activeGetCurrentUser == false && activeSelectedIndex == true && cokie &&
                    <GetServices uriPointer={uri} Authorization={cokie} key={'view_purchase'}
                        showConsole={'view_purchase'}
                        dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                    activeGetCurrentUser == true &&
                    <GetData getCokie={true} getSource={this.getSource.bind(this)} getUser={true} key={'GetData'} />,
                    activeSelectedIndex == false && ([
                        <Text key={'wait'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                            marginLeft: 10, marginTop: 10,
                        }]}>{selectedIndex == 1 && ''}</Text>,
                        dataService && dataService.purchase.length > 0 ?
                            dataService.purchase.map((value, index) => {
                                return <Order_Me_Box dataService={value} key={index} navigation={navigation} />
                            }) :
                            <View style={[stylesProfileTopic.products_pro, { flex: 1 }]}>
                                <IconFeather name='edit' size={50} color='#000000' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                    ยังไม่มีคำสั่งซื้อ</Text>
                            </View>
                    ])
                ]}
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
                            activeFontColor={'#0A55A6'}
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
    navigationNavigateScreen = (value, value2, value3) => {
        const { navigation } = this.props
        value3 && (
            console.log(value3.consolename),
            console.log(value3.consolelog)
        )
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() { // 3 // Review_order return_order detail_order // buy_again_order return_order
        const { dataService, } = this.props
        const uri_image_store = finip + '/' + dataService.store_path + '/' + dataService.store_image
        const uri_image_product = finip + '/' + dataService.path_product + '/' + dataService.image_product
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <View style={[stylesProfileTopic.Order_BoxStore]}>
                        <View style={stylesMain.FlexRow}>
                            <FastImage style={[stylesProfileTopic.Order_StorePro, stylesMain.ItemCenterVertical,]}
                                source={{
                                    uri: uri_image_store,
                                }}
                                resizeMode={FastImage.resizeMode.contain} />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                                marginLeft: 5
                            }]}>
                                {dataService.customer_name}</Text>
                        </View>
                        {[
                            dataService.status_purchase == 'wait' &&
                            <TouchableOpacity key={'Review_order'} activeOpacity={1}
                                onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 7 })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                                    color: '#111', width: width * 0.3, textAlign: 'center', color: '#20BDA1'
                                }]}>
                                    รอชำระ
                                </Text>
                            </TouchableOpacity>,
                            dataService.status_purchase == 'paid' && (
                                dataService.tracking_number == null ?
                                    <Text key={'shipping_order'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesMain.ItemCenterVertical, {
                                        color: '#111', width: width * 0.3, textAlign: 'center',
                                    }]}>
                                        {'เตรียมจัดส่ง'}</Text> :
                                    <Text key={'shipping_order'} style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
                                    stylesMain.ItemCenterVertical, {
                                        color: '#111', width: width * 0.3, textAlign: 'center',
                                    }]}>
                                        {'กำลังจัดส่ง\n'}<Text style={{ color: '#111' }}>[{dataService.tracking_number}]</Text></Text>
                            ),
                            dataService.status_purchase == 'accepted' &&
                            <TouchableOpacity key={'Review_order'} activeOpacity={1}
                                onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 7 })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                                    color: '#20BDA1', width: width * 0.3, textAlign: 'center',
                                }]}>
                                    <IconFeather name='edit' size={15} />
                                    เขียนรีวิว
                                </Text>
                            </TouchableOpacity>,
                            dataService.status_purchase == 'cancel' &&
                            <TouchableOpacity key={'Review_order'} activeOpacity={1}
                                onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 7 })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                                    color: '#111', width: width * 0.3, textAlign: 'center',
                                }]}>
                                    ยกเลิก
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
                                <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                    {dataService.product_name}</Text>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>
                                    {dataService.detail_1 + ' ' + dataService.detail_2}</Text>
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
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>
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
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>
                                        {value}</Text>
                                } />
                        </View>
                        <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                            {[
                                dataService.status_purchase == 'wait' &&
                                <TouchableOpacity key={'payment_order'} onPress={this.navigationNavigateScreen.bind(this, 'Customer_Order',
                                    { no_invoice: dataService.invoice_no })}>
                                    <View style={[stylesProfileTopic.Order_Button, {
                                        borderWidth: 1, borderColor: '#0A55A6', backgroundColor: '#0A55A6'
                                    }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                                            ดำเนินการชำระเงิน</Text>
                                    </View>
                                </TouchableOpacity>,
                                dataService.status_purchase == 'wait' &&
                                <TouchableOpacity key={'cancel_order'} onPress={this.navigationNavigateScreen.bind(this, 'CancelScreen', {
                                    selectedIndex: 1
                                })}>
                                    <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยกเลิกสินค้า</Text>
                                    </View>
                                </TouchableOpacity>,
                                dataService.status_purchase == 'accepted' &&
                                <TouchableOpacity key={'return_order'} onPress={this.navigationNavigateScreen.bind(this, 'Return_products', {
                                    selectedIndex: 1
                                })}>
                                    <View style={{ borderBottomColor: '#0A55A6', borderBottomWidth: 1, height: 20, }}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>
                                            ส่งคำร้องคืนสินค้า</Text>
                                    </View>
                                </TouchableOpacity>,
                                (dataService.status_purchase == 'paid' || dataService.status_purchase == 'accepted') &&
                                <TouchableOpacity key={'detail_order'}
                                    onPress={
                                        this.navigationNavigateScreen.bind(this, 'Order_Detail',
                                            {
                                                id_cartdetail: dataService.id_cartdetail, insert_date: dataService.insert_date,
                                                no_invoice: dataService.invoice_no
                                            },
                                            { consolename: 'detail_order', consolelog: dataService })}>
                                    <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                    </View>
                                </TouchableOpacity>,
                                dataService.status_purchase == 'cancel' &&
                                <TouchableOpacity key={'buy_again_order'} >
                                    <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ซื้ออีกครั้ง</Text>
                                    </View>
                                </TouchableOpacity>
                            ]}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///
// export class Order_Me_Box extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }
//     navigationNavigateScreen = (value, value2, value3) => {
//         const { navigation } = this.props
//         value3 && (
//             console.log(value3.consolename),
//             console.log(value3.consolelog)
//         )
//         value == 'goBack' ?
//             navigation.goBack() :
//             value == 'LoginScreen' ? (
//                 navigation.popToTop(),
//                 navigation.replace(value, value2)
//             ) :
//                 navigation.push(value, value2)
//     }
//     render() {
//         const { dataService, } = this.props
//         // const { payment_order, Contact_buyer, detail_order, up_number, edit_number, reviews_order,
//         //     end_order, cancel_order, detail_order_review, detail_order_cancel, Cause_cancel,
//         //     } = this.props
//         const uri_image_store = finip + '/' + dataService.store_path + '/' + dataService.store_image
//         const uri_image_product = finip + '/' + dataService.path_product + '/' + dataService.image_product
//         console.log('----------------Order_Me_Box---------------')
//         console.log(dataService)
//         return (
//             <View>
//                 <View style={stylesMain.FrameBackground}>
//                     <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
//                         <View style={stylesMain.FlexRow}>
//                             <FastImage style={stylesProfileTopic.Order_StorePro}
//                                 source={{
//                                     uri: uri_image_store,
//                                 }}
//                                 resizeMode={FastImage.resizeMode.contain} />
//                             />
//                             <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>{dataService.name}</Text>
//                         </View>
//                         {
//                             dataService.status_purchase == 'wait' &&
//                             <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>ยังไม่ชำระ</Text>
//                         }{
//                             up_number &&
//                             <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 10 })}>
//                                 <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#06BBBB' }]}>เพิ่มเลขพัสดุ</Text>
//                             </TouchableOpacity>
//                         }{
//                             edit_number &&
//                             <View style={stylesMain.FlexRow}>
//                                 <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 11 })}>
//                                     <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#06BBBB' }]}>Edit</Text>
//                                 </TouchableOpacity>
//                                 <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#D6D6D6' }]}>tnt1237174823403268</Text>
//                             </View>
//                         }{
//                             reviews_order &&
//                             <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>รอการรีวิว</Text>
//                         }{
//                             end_order &&
//                             <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>สำเร็จแล้ว</Text>
//                         }{
//                             cancel_order &&
//                             <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>ถูกยกเลิก</Text>
//                         }
//                     </View>
//                     <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
//                         <View style={stylesMain.FlexRow}>
//                             <View style={stylesProfileTopic.Order_Product_Pro}>
//                                 <FastImage style={stylesMain.BoxProduct1Image}
//                                     source={{
//                                         uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
//                                     }}
//                                 />
//                             </View>
//                             <View>
//                                 <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
//                                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
//                                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
//                                 {
//                                     Cause_cancel &&
//                                     <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
//                                 }
//                                 <Text>x 1</Text>
//                             </View>
//                         </View>
//                         <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
//                     </View>
//                     <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
//                         <View style={stylesProfileTopic.Order_Box_price}>
//                             <View style={stylesProfileTopic.Order_Box_priceText}>
//                                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
//                                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
//                             </View>
//                             <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
//                                 {
//                                     detail_order &&
//                                     <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Detail_Order', { selectedIndex: 0 })}>
//                                         <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
//                                             <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 }{
//                                     detail_order_review &&
//                                     <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Detail_Order', { selectedIndex: 1 })}>
//                                         <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
//                                             <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 }{
//                                     detail_order_cancel &&
//                                     <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Return', { selectedIndex: 1 })}>
//                                         <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
//                                             <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 }{
//                                     Contact_buyer &&
//                                     <TouchableOpacity>
//                                         <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
//                                             <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 }
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }
///------------------------------------------------------------------------------///


