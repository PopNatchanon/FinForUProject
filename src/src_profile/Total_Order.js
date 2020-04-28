///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
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
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { TabBar, GetServices, LoadingScreen } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Total_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsLoading: true,
        };
    }
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataAsync()
        CookieManager.get(finip + '/auth/login_customer')
            .then((res) => {
                var keycokie = res.token
                this.setState({ keycokie })
            });
    }
    IsLoading = (IsLoading) => {
        this.setState({ IsLoading })
    }
    render() {
        const { navigation } = this.props
        const { currentUser, IsLoading, keycokie, } = this.state
        const selectedIndex = navigation.getParam('selectedIndex')
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
                {
                    IsLoading == true &&
                    <LoadingScreen />
                }
                <AppBar1 backArrow navigation={navigation} titleHead='การสั่งซื้อของฉัน' />
                <Button_bar currentUser={currentUser} keycokie={keycokie} navigation={navigation} setLoading={this.IsLoading.bind(this)}
                    SetselectedIndex={selectedIndex} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_bar
export class Button_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSelectedIndex: true,
        };
    }
    getData = (dataService) => {
        const { setLoading } = this.props
        this.setState({ activeSelectedIndex: false, dataService })
        setLoading(false)
    }
    updateIndex = (value) => {
        const { setLoading } = this.props
        setLoading(true)
        this.setState({ selectedIndex: value.selectedIndex, activeSelectedIndex: true, })
    }
    get PathList() {
        const { currentUser, keycokie, navigation, } = this.props
        const { activeSelectedIndex, dataService, selectedIndex, } = this.state
        console.log('selectedIndex')
        console.log(selectedIndex)
        var uri = finip + '/purchase_data/view_purchase';
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            type_purchase:
                selectedIndex == 0 ? "all" :
                    selectedIndex == 1 ? 'wait' :
                        selectedIndex == 2 ? 'paid' :
                            selectedIndex == 3 ? 'accepted' :
                                selectedIndex == 4 ? 'cancel' :
                                    'all',
            device: "mobile_device",
        };
        switch (selectedIndex) {
            case 0:
                return (
                    <>
                        {[
                            activeSelectedIndex == true && currentUser && keycokie && selectedIndex == 0 &&
                            <GetServices uriPointer={uri} Authorization={keycokie} key={'view_purchase'}
                                showConsole={'view_purchase'}
                                dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                            activeSelectedIndex == false && selectedIndex == 0 && ([
                                <Text key={'all'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10, marginTop: 10,
                                }]}>
                                    รายการคำสั่งซื้อ</Text>,
                                dataService && dataService.purchase.length > 0 ?
                                    dataService.purchase.map((value, index) => {
                                        return <From_Order_Box dataService={value} key={index} navigation={navigation} />
                                    }) :
                                    <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                        <IconFeather name='edit' size={50} color='#A2A2A2' />
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                            ยังไม่มีคำสั่งซื้อ</Text>
                                    </View>
                            ])
                        ]}
                    </>
                )
            case 1:
                return (
                    <>
                        {[
                            activeSelectedIndex == true && currentUser && keycokie && selectedIndex == 1 &&
                            <GetServices uriPointer={uri} Authorization={keycokie} key={'view_purchase'}
                                showConsole={'view_purchase'}
                                dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                            activeSelectedIndex == false && selectedIndex == 1 && ([
                                <Text key={'wait'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10, marginTop: 10,
                                }]}>
                                    ที่ต้องชำระ</Text>,
                                dataService && dataService.purchase.length > 0 ?
                                    dataService.purchase.map((value, index) => {
                                        return <From_Order_Box dataService={value} key={index} navigation={navigation} />
                                    }) :
                                    <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                        <IconFeather name='edit' size={50} color='#A2A2A2' />
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                            ยังไม่มีคำสั่งซื้อ</Text>
                                    </View>
                            ])
                        ]}
                    </>
                )
            case 2:
                return (
                    <>
                        {[
                            activeSelectedIndex == true && currentUser && keycokie && selectedIndex == 2 &&
                            <GetServices uriPointer={uri} Authorization={keycokie} key={'view_purchase'}
                                showConsole={'view_purchase'}
                                dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                            activeSelectedIndex == false && selectedIndex == 2 && ([
                                <Text key={'paid'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10, marginTop: 10,
                                }]}>
                                    ที่ต้องได้รับ</Text>,
                                dataService && dataService.purchase.length > 0 ?
                                    dataService.purchase.map((value, index) => {
                                        return <From_Order_Box dataService={value} key={index} navigation={navigation} />
                                    }) :
                                    <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                        <IconFeather name='edit' size={50} color='#A2A2A2' />
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                            ยังไม่มีคำสั่งซื้อ</Text>
                                    </View>
                            ])
                        ]}
                    </>
                )
            case 3:
                return (
                    <>
                        {[
                            activeSelectedIndex == true && currentUser && keycokie && selectedIndex == 3 &&
                            <GetServices uriPointer={uri} Authorization={keycokie} key={'view_purchase'}
                                showConsole={'view_purchase'}
                                dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                            activeSelectedIndex == false && selectedIndex == 3 && ([
                                <Text key={'accepted'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10, marginTop: 10,
                                }]}>
                                    สำเร็จแล้ว</Text>,
                                dataService && dataService.purchase.length > 0 ?
                                    dataService.purchase.map((value, index) => {
                                        return <From_Order_Box dataService={value} key={index} navigation={navigation} />
                                    }) :
                                    <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                        <IconFeather name='edit' size={50} color='#A2A2A2' />
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                            ยังไม่มีคำสั่งซื้อ</Text>
                                    </View>
                            ])
                        ]}
                    </>
                )
            case 4:
                return (
                    <>
                        {[
                            activeSelectedIndex == true && currentUser && keycokie && selectedIndex == 4 &&
                            <GetServices uriPointer={uri} Authorization={keycokie} key={'view_purchase'}
                                showConsole={'view_purchase'}
                                dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                            activeSelectedIndex == false && selectedIndex == 4 && ([
                                <Text key={'cancel'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10, marginTop: 10,
                                }]}>
                                    ยกเลิกสินค้า</Text>,
                                dataService && dataService.purchase.length > 0 ?
                                    dataService.purchase.map((value, index) => {
                                        return <From_Order_Box dataService={value} key={index} navigation={navigation} />
                                    }) :
                                    <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                                        <IconFeather name='edit' size={50} color='#A2A2A2' />
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>
                                            ยังไม่มีคำสั่งซื้อ</Text>
                                    </View>
                            ])
                        ]}
                    </>
                )
        }
    }
    render() {
        const { SetselectedIndex } = this.props
        const { selectedIndex } = this.state
        console.log('\n--------------------------------\nselectedIndex: ' + selectedIndex + '\n--------------------------------')
        const item = [{
            name: 'ทั้งหมด'
        }, {
            name: 'ที่ต้องชำระ'
        }, {
            name: 'ที่ต้องได้รับ'
        }, {
            name: 'สำเร็จแล้ว'
        }, {
            name: 'ยกเลิก'
        }]
        return (
            <>
                <View style={stylesProfileTopic.Button_bar}>
                    <ScrollView horizontal>
                        <TabBar
                            sendData={this.updateIndex.bind(this)}
                            item={item}
                            // noLimit
                            SetValue={selectedIndex > -1 ? selectedIndex : SetselectedIndex}
                            // widthBox={98}
                            activeColor={'#fff'}
                            activeFontColor={'#0A55A6'}
                            type='tag'
                        />
                    </ScrollView>
                </View>
                <ScrollView>
                    {this.PathList}
                </ScrollView>
            </>
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
        console.log(dataService)
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
                                {dataService.name}</Text>
                            <View style={stylesProfileTopic.Order_Box_Button}>
                                <TouchableOpacity>
                                    <View style={[stylesProfileTopic.Order_Button, stylesMain.ItemCenterVertical, {
                                        borderWidth: 1, borderColor: '#0A55A6', backgroundColor: '#0A55A6'
                                    }]}>
                                        <IconAntDesign RightItem name="wechat" size={20} color='#FFFFFF' />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
                                            color: '#FFFFFF', marginHorizontal: 6,
                                        }]}>
                                            แชทเลย</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[stylesProfileTopic.Order_Button, stylesMain.ItemCenterVertical, { borderWidth: 1 }]}>
                                        <Icons RightItem name="store" size={16} />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginHorizontal: 6, }]}>
                                            ดูร้านค้า</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
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
                                <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>
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
            </View >
        );
    }
}
