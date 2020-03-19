///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFoundation from 'react-native-vector-icons/Foundation';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCart from '../style/stylesCartScreen';
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { GetServices } from './tools/Tools';
import { PopularProduct } from './StoreScreen'
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRefresh: true,
            activeSave: false,
            itemCount: [],
            itemData: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { activeSave, activeRefresh, ArrayItem, currentUser, dataService, dataService2, } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            activeSave !== nextState.activeSave || activeRefresh !== nextState.activeRefresh || ArrayItem !== nextState.ArrayItem ||
            currentUser !== nextState.currentUser || dataService !== nextState.dataService || dataService2 !== nextState.dataService2
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.getDataAsync()
    }
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    getData = (dataService) => {
        this.setState({ activeRefresh: false, dataService, })
    }
    getData2 = (dataService2) => {
        this.setState({ activeRefresh: true, activeSave: false, dataService2, })
    }
    ArrayItem = (ArrayItem) => {
        this.setState({ activeSave: true, ArrayItem, })
    }
    render() {
        const { navigation } = this.props;
        const { activeSave, activeRefresh, ArrayItem, currentUser, dataService, dataService2, } = this.state
        var uri
        var dataBody
        currentUser && (
            uri = finip + '/product/cart_ajax',
            dataBody = {
                id_customer: currentUser.id_customer
            }
        )
        var uri2 = finip + '/cart/auto_save_ajax'
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                {/* {
                    activeRefresh == true || activeSave == true &&
                    <LoadingScreen />

                } */}
                {
                    currentUser && dataBody && activeRefresh == true &&
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} key={'cart_ajax'} />,
                    ArrayItem && activeSave == true &&
                    <GetServices uriPointer={uri2} dataBody={ArrayItem} getDataSource={this.getData2.bind(this)} key={'auto_save_ajax'} />
                }
                <AppBar1 navigation={navigation} titleHead='รถเข็น' chatBar backArrow />
                <ScrollView>
                    {
                        dataService &&
                        <Product_Cart dataService={dataService.list_cart} dataService2={dataService2} currentUser={currentUser}
                            ArrayItem={this.ArrayItem.bind(this)} />
                    }
                    {/* <Product_Like /> */}
                    <PopularProduct navigation={navigation} headText={'คุณอาจชอบสิ่งนี้'} />
                </ScrollView>
                {
                    dataService2 &&
                    <Buy_bar navigation={navigation} dataService2={dataService2} />
                }
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_Cart
export class Product_Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activecart: true
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { ArrayItem, currentUser, dataService, dataService2, itemData, sendData, } = this.props
        const { activecart, ItemArray, } = this.state
        if (
            ////>nextProps
            ArrayItem !== nextProps.ArrayItem || currentUser !== nextProps.currentUser || dataService !== nextProps.dataService ||
            dataService2 !== nextProps.dataService2 || itemData !== nextProps.itemData || sendData !== nextProps.sendData ||
            ////>nextState
            activecart !== nextState.activecart || ItemArray !== nextState.ItemArray

        ) {
            return true
        }
        return false
    }
    setStateItemArrayChecked = (checked, id_cartdetail, index) => {
        const { ItemArray } = this.state
        const { ArrayItem, currentUser, dataService, } = this.props
        ItemArray[index].checked = checked
        var id = []
        for (var n = 0; n < dataService.length; n++) {
            if (ItemArray[n].checked == true) {
                id.push(dataService[n].id_cartdetail)
            }
        }
        ArrayItem({
            amount: ItemArray[index].itemCount,
            list_order: id.join(','),
            id_cartdetail: id_cartdetail,
            id_customer: currentUser.id_customer
        })
        this.setState({ activecart: true, ItemArray, })
    }
    setStateItemArrayitemCount = (itemCount, id_cartdetail, index) => {
        const { ItemArray } = this.state
        const { ArrayItem, currentUser, dataService, } = this.props
        var id = []
        for (var n = 0; n < dataService.length; n++) {
            if (ItemArray[n].checked == true) {
                id.push(dataService[n].id_cartdetail)
            }
        }
        itemCount > 0 && (
            ItemArray[index].itemCount = itemCount,
            ArrayItem({
                amount: itemCount,
                list_order: id.join(','),
                id_cartdetail: id_cartdetail,
                id_customer: currentUser.id_customer
            })
        )
        this.setState({ activecart: false })
    }
    checkItem = (length) => {
        const { dataService } = this.props
        if (dataService != null) {
            var ItemArray = []
            var n
            for (n = 0; length > n; n++) {
                ItemArray[n] = { checked: true, itemCount: dataService[n].quantity * 1 }
            }
            this.setState({ ItemArray })
        }
    }
    render() {
        const { activecart, ItemArray, } = this.state
        const { dataService, dataService2 } = this.props
        dataService && ItemArray == null &&
            this.checkItem(dataService.length)
        return (
            <View>
                {
                    dataService.length > 0 ? (
                        ItemArray &&
                        dataService.map((item, index) => {
                            var dataMySQL = finip + '/' + item.image_cart
                            dataService2 == null && activecart == true &&
                                this.setStateItemArrayitemCount(ItemArray[index].itemCount, item.id_cartdetail, index)
                            return (
                                <View style={{ backgroundColor: '#fff' }} key={index}>
                                    {/* <View style={{ marginBottom: 10, backgroundColor: '#fff' }} key={index}> */}
                                    {/* <View style={{ flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1 }}>
                                        <CheckBox
                                            containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]}
                                            textStyle={14}
                                            fontFamily={'SukhumvitSet-Text'}
                                            checked={ItemHead.checked}
                                            onPress={this.setStateItemHead.bind(this, !ItemHead.checked)} />
                                            <View style={[stylesMain.ItemCenterVertical, {
                                            width: 30, height: 30, borderRadius: 20, backgroundColor: '#cecece'
                                        }]}>
                                        </View>
                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                            marginLeft: 16,
                                        }]}>
                                            PPpp</Text>
                                    </View> */}
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <CheckBox
                                            containerStyle={[
                                                stylesMain.ItemCenterVertical, {
                                                    backgroundColor: null, borderWidth: null,
                                                }]}
                                            textStyle={14}
                                            fontFamily={'SukhumvitSet-Text'}
                                            checked={ItemArray[index].checked}
                                            onPress={this.setStateItemArrayChecked.bind(this,
                                                !ItemArray[index].checked,
                                                item.id_cartdetail,
                                                index)} />
                                        <View style={{
                                            backgroundColor: '#fffffe', width: 140, height: 140, marginVertical: 6,
                                            borderColor: '#ECECEC',
                                            borderWidth: 1
                                        }}>
                                            <FastImage
                                                style={[stylesMain.BoxProduct2Image, { flex: 1 }]}
                                                source={{
                                                    uri: dataMySQL,
                                                }}
                                                resizeMode={FastImage.resizeMode.contain} />
                                        </View>
                                        <View style={[stylesMain.ItemCenterVertical, { marginLeft: 25 }]}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                                {item.product}</Text>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                                {item.color_detail + ' ' + item.size_detail}</Text>
                                            {
                                                /* <NumberFormat
                                                        value={item.price}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'฿'}
                                                        renderText={value =>
                                                            <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                                                                {value}</Text>
                                                        } /> */
                                            }
                                            <NumberFormat
                                                value={item.price}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'฿'}
                                                renderText={value =>
                                                    <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold, {
                                                        color: '#0A55A6'
                                                    }]}>
                                                        {value}</Text>
                                                } />
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity activeOpacity={1}
                                                    onPress={
                                                        this.setStateItemArrayitemCount.bind(this,
                                                            ItemArray[index].itemCount - 1,
                                                            item.id_cartdetail,
                                                            index
                                                        )}>
                                                    <View style={[stylesMain.ItemCenter, {
                                                        width: 30, height: 25, borderColor: '#ECECEC', borderRightWidth: 0,
                                                        borderWidth: 1
                                                    }]}>
                                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, {
                                                            color:
                                                                ItemArray[index].itemCount > 1 ?
                                                                    '#111' :
                                                                    '#CECECE'
                                                        }]}>
                                                            -</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText, {
                                                    width: 50, height: 25, borderColor: '#ECECEC', borderWidth: 1
                                                }]}>
                                                    <Text style={[stylesMain.ItemCenterVertical]}>
                                                        {ItemArray[index].itemCount}</Text>
                                                </View>
                                                <TouchableOpacity activeOpacity={1}
                                                    onPress={
                                                        this.setStateItemArrayitemCount.bind(this,
                                                            ItemArray[index].itemCount + 1,
                                                            item.id_cartdetail,
                                                            index)}>
                                                    <View style={[stylesMain.ItemCenter, {
                                                        width: 30, height: 25, borderColor: '#ECECEC', borderLeftWidth: 0,
                                                        borderWidth: 1
                                                    }]}>
                                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, {
                                                            color:
                                                                ItemArray[index].itemCount < 10 ?
                                                                    '#111' :
                                                                    '#CECECE'
                                                        }]}>
                                                            +</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    {/* </View> */}
                                </View>
                            )
                        })
                    ) :
                        <View style={stylesCart.Product_Cart}>
                            <View style={[stylesMain.ItemCenter, { height: 200, width: '100%' }]}>
                                <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                    <IconFeather name="shopping-cart" size={60} />
                                    <Text>
                                        ไม่มีสินค้าในรถเข็นของคุณ</Text>
                                </View>
                            </View>
                        </View>
                }
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_Like
export class Product_Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Text> รายการที่คุณชอบ </Text>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export class Buy_bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService2, navigation } = this.props
        const { checked } = this.state
        if (
            ////>nextProps
            dataService2 !== nextProps.dataService2 || navigation !== nextProps.navigation ||
            ////>nextState
            checked !== nextState.checked
        ) {
            return true
        }
        return false
    }
    StateBox = () => {
        var { checked } = this.state
        checked = !checked
        this.setState({ checked })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.navigate(value, value2)
    }
    render() {
        const { dataService2 } = this.props;
        // var values = 0;
        // let data = itemCount.map((item, index) => {
        //     if (item.checked == true) {
        //         values = values + (item.price * item.itemCount)
        //     }
        // })
        return (
            <View style={stylesCart.Bar}>
                <View style={stylesCart.Bar_Code}>
                    <IconFoundation name='burst' size={30} style={stylesMain.ItemCenterVertical} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical]}>
                        โค้ดส่วนลด</Text>
                    <View style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical]}></View>
                    <View style={[stylesCart.Bar_Code_Box_Text, stylesMain.ItemCenterVertical]}>
                        <Text style={[
                            stylesCart.Bar_Code_Text, stylesFont.FontSize6, stylesFont.FontFamilyText, stylesMain.ItemCenterVertical
                        ]}>
                            ใช้โค้ด</Text>
                    </View>
                </View>
                <View style={stylesCart.Bar_Buy}>
                    <View>
                        <CheckBox
                            title='เลือกทั้งหมด'
                            containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: '#fff', borderWidth: 0, marginTop: -0.5, }]}
                            textStyle={14}
                            fontFamily={'SukhumvitSet-Text'}
                            checked={this.state.checked}
                            onPress={this.StateBox} />
                    </View>
                    <View style={[stylesCart.Bar_Buy_price, { marginLeft: -20 }]}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            รวมทั้งหมด</Text>
                        <NumberFormat
                            value={dataService2 && dataService2.now_total}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                    marginLeft: 4, color: '#0A55A6'
                                }]}>
                                    {value}</Text>
                            } />
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Customer_Order')}>
                        <View style={stylesCart.BOX_Buy}>
                            <Text style={[
                                stylesCart.BOX_Buy_Text, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical
                            ]}>
                                ชำระเงิน</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
