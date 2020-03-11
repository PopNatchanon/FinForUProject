///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { TabBar } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Total_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='การสั่งซื้อของฉัน' />
                <Button_bar navigation={this.props.navigation} SetselectedIndex={selectedIndex} />
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_bar
export class Button_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    updateIndex = (selectedIndex) => {
        // console.log('updateIndex|selectedIndex')
        // console.log(selectedIndex)
        this.setState({ selectedIndex })
    }
    PathList() {
        var { selectedIndex } = this.state
        switch (selectedIndex) {
            case 0:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>รายการคำสั่งซื้อ</Text>
                        <From_Order_Box navigation={this.props.navigation} payment_order cancel_order />
                        <From_Order_Box navigation={this.props.navigation} detail_order />
                        <From_Order_Box navigation={this.props.navigation} detail_order shipping_order />
                        <From_Order_Box navigation={this.props.navigation} Review_order return_order detail_order />

                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>ที่ต้องชำระ</Text>
                        <From_Order_Box navigation={this.props.navigation} payment_order cancel_order />
                        <From_Order_Box navigation={this.props.navigation} payment_order cancel_order />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>เตรียมจัดส่ง</Text>
                        <From_Order_Box navigation={this.props.navigation} detail_order />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}> ที่ต้องได้รับ </Text>
                        <From_Order_Box navigation={this.props.navigation} detail_order shipping_order />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}> สำเร็จแล้ว </Text>
                        <From_Order_Box navigation={this.props.navigation} Review_order return_order detail_order />
                        <From_Order_Box navigation={this.props.navigation} buy_again_order return_order />
                    </View>
                )
        }
    }
    render() {
        var { selectedIndex } = this.state
        selectedIndex == null && (
            selectedIndex = this.props.navigation.getParam('selectedIndex'),
            this.updateIndex(selectedIndex)
        )
        // console.log('selectedIndex')
        // console.log(selectedIndex)
        const item = [{
            name: 'ทั้งหมด'
        }, {
            name: 'ที่ต้องชำระ'
        }, {
            name: 'เตรียมจัดส่ง'
        }, {
            name: 'ที่ต้องได้รับ'
        }, {
            name: 'สำเร็จแล้ว'
        }]
        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={stylesProfileTopic.Button_bar}>
                    <ScrollView horizontal>
                        {
                            selectedIndex &&
                            <TabBar
                                sendData={this.updateIndex.bind(this)}
                                item={item}
                                // noLimit
                                SetValue={selectedIndex}
                                // widthBox={98}
                                activeColor={'#fff'}
                                activeFontColor={'#0A55A6'}
                                type='tag'
                            />
                        }
                    </ScrollView>
                </View>
                <ScrollView>
                    {this.PathList()}
                </ScrollView>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>> From_Order_Box
export class From_Order_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { payment_order, cancel_order, detail_order, shipping_order, Review_order, return_order, buy_again_order, } = this.props
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <View style={[stylesProfileTopic.Order_BoxStore, { justifyContent: 'space-between' }]}>
                        <View style={stylesMain.FlexRow}>
                            <FastImage style={stylesProfileTopic.Order_StorePro}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5, }]}>PPoo</Text>
                            <View style={stylesProfileTopic.Order_Box_Button}>
                                <TouchableOpacity>
                                    <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1 }]}>
                                        <Icons RightItem name="store" size={20} />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ดูร้านค้า</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            shipping_order &&
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#20BDA1', marginTop: 10, }]}>กำลังจัดส่ง</Text>
                        }{
                            Review_order &&
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 7 })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#20BDA1', marginTop: 10, }]}>
                                    <IconFeather name='edit' size={15} />
                                    เขียนรีวิว
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={stylesProfileTopic.Order_Product}>
                        <View style={stylesMain.FlexRow}>
                            <View style={stylesProfileTopic.Order_Product_Pro}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                    </View>
                    <View style={stylesProfileTopic.Order_Box_price}>
                        <View style={stylesProfileTopic.Order_Box_priceText}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                        </View>
                        <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                            {
                                payment_order &&
                                <TouchableOpacity>
                                    <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ดำเนินการชำระเงิน</Text>
                                    </View>
                                </TouchableOpacity>
                            }{
                                cancel_order &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('CancelScreen', { selectedIndex: 1 })}>
                                    <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยกเลิกสินค้า</Text>
                                    </View>
                                </TouchableOpacity>
                            }{
                                return_order &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Return_products', { selectedIndex: 1 })}>
                                    <View style={{ borderBottomColor: '#0A55A6', borderBottomWidth: 1, height: 20, }}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>ส่งคำร้องคืนสินค้า</Text>
                                    </View>
                                </TouchableOpacity>
                            }{
                                detail_order &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                                    <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                    </View>
                                </TouchableOpacity>
                            }{
                                buy_again_order &&
                                <TouchableOpacity>
                                    <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ซื้ออีกครั้ง</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
