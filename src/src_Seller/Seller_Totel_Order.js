///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { TabBar } from '../tools/Tools';
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
            selectedIndex: 0,
        };
    }
    updateIndex(value) {
        this.setState({ selectedIndex: value.selectedIndex })
    }
    PathList() {
        switch (this.state.selectedIndex) {
            case 0:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>รายการคำสั่งซื้อ</Text>
                        <Order_Me_Box payment_order Contact_buyer />
                        <Order_Me_Box payment_order Contact_buyer />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ที่ต้องจัดส่ง</Text>
                        <Order_Me_Box navigation={this.props.navigation} up_number detail_order Contact_buyer />
                        <Order_Me_Box navigation={this.props.navigation} up_number detail_order Contact_buyer />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>การจัดส่ง</Text>
                        <Order_Me_Box navigation={this.props.navigation} edit_number detail_order Contact_buyer />
                        <Order_Me_Box navigation={this.props.navigation} edit_number detail_order Contact_buyer />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>รอการรีวิว</Text>
                        <Order_Me_Box navigation={this.props.navigation} reviews_order detail_order Contact_buyer />
                        <Order_Me_Box navigation={this.props.navigation} reviews_order detail_order Contact_buyer />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}> สำเร็จแล้ว </Text>
                        <Order_Me_Box navigation={this.props.navigation} end_order detail_order_review Contact_buyer />
                        <Order_Me_Box navigation={this.props.navigation} end_order detail_order_review Contact_buyer />
                    </View>
                )
        }
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
    render() {
        const { payment_order, Contact_buyer, detail_order, up_number, edit_number, reviews_order,
            end_order, cancel_order, detail_order_review, detail_order_cancel, Cause_cancel,
        } = this.props
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <FastImage style={stylesProfileTopic.Order_StorePro}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        {
                            payment_order &&
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>ยังไม่ชำระ</Text>
                        }{
                            up_number &&
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 10 })}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#06BBBB' }]}>เพิ่มเลขพัสดุ</Text>
                            </TouchableOpacity>
                        }{
                            edit_number &&
                            <View style={stylesMain.FlexRow}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 11 })}>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#06BBBB' }]}>Edit</Text>
                                </TouchableOpacity>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#D6D6D6' }]}>tnt1237174823403268</Text>
                            </View>
                        }{
                            reviews_order &&
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>รอการรีวิว</Text>
                        }{
                            end_order &&
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>สำเร็จแล้ว</Text>
                        }{
                            cancel_order &&
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>ถูกยกเลิก</Text>
                        }
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={stylesProfileTopic.Order_Product_Pro}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                {
                                    Cause_cancel &&
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                }
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
                        <View style={stylesProfileTopic.Order_Box_price}>
                            <View style={stylesProfileTopic.Order_Box_priceText}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                            </View>
                            <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                                {
                                    detail_order &&
                                    <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Detail_Order', { selectedIndex: 0 })}>
                                        <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                        </View>
                                    </TouchableOpacity>
                                }{
                                    detail_order_review &&
                                    <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Detail_Order', { selectedIndex: 1 })}>
                                        <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                        </View>
                                    </TouchableOpacity>
                                }{
                                    detail_order_cancel &&
                                    <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Return', { selectedIndex: 1 })}>
                                        <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                        </View>
                                    </TouchableOpacity>
                                }{
                                    Contact_buyer &&
                                    <TouchableOpacity>
                                        <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///


