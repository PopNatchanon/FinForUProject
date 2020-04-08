///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
    StyleSheet, TouchableHighlight, TextInput,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage'
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import { SwipeListView } from '@nvthai/react-native-swipe-list-view';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
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
            activeDelete: false,
            activeRefresh: true,
            activeSave: false,
            activeSave2: false,
            ButtomDeleteAll: false,
            checkedAll: true,
            itemCount: [],
            itemData: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const {
            activeDelete, activeRefresh, activeSave, activeSave2, ArrayItem, ButtomDeleteAll, checkedAll, currentUser, dataService, dataService2, keycokie
        } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            activeDelete !== nextState.activeDelete || activeRefresh !== nextState.activeRefresh || activeSave !== nextState.activeSave ||
            activeSave2 !== nextState.activeSave2 || ArrayItem !== nextState.ArrayItem || ButtomDeleteAll !== nextState.ButtomDeleteAll ||
            checkedAll !== nextState.checkedAll || currentUser !== nextState.currentUser || dataService !== nextState.dataService ||
            dataService2 !== nextState.dataService2 || keycokie !== nextState.keycokie
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.getDataAsync()
        CookieManager.get(finip + '/auth/login_customer')
            .then((res) => {
                var keycokie = res.token
                this.setState({ keycokie })
            });
    }
    getDataAsync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    getData = (dataService) => {
        for (var n = 0; n < dataService.cart_list.length; n++) {
            dataService.cart_list[n].key = n
        }
        this.setState({ activeRefresh: false, dataService, })
    }
    getData2 = (dataService2) => {
        this.setState({ activeRefresh: true, activeSave: false, dataService2, })
    }
    getData3 = (dataService3) => {
        this.setState({ activeRefresh: true, activeDelete: false, dataService3, })
    }
    getCheckedAll = (checkedAll) => {
        this.setState({ checkedAll, activeSave2: true })
    }
    ArrayItem = (ArrayItem) => {
        this.setState({ activeSave: true, ArrayItem, })
    }
    ArrayItem2 = (ArrayItem2) => {
        this.setState({ activeDelete: true, ArrayItem2, ButtomDeleteAll: false })
    }
    propsFunction = () => {
        const { ButtomDeleteAll } = this.state;
        this.setState({ ButtomDeleteAll: !ButtomDeleteAll, })
    }
    render() {
        const { navigation } = this.props;
        const {
            activeDelete, activeSave, activeSave2, activeRefresh, ArrayItem, ArrayItem2, ButtomDeleteAll, checkedAll, currentUser,
            dataService, dataService2, keycokie
        } = this.state
        var uri
        var dataBody
        currentUser && (
            uri = finip + '/cart/cart_mobile',
            dataBody = {
                id_customer: currentUser.id_customer
            }
        )
        var uri2 = finip + '/cart/auto_save_ajax'
        var uri3 = finip + '/cart/delete_cart'
        activeSave2 == true &&
            this.setState({ activeSave2: false })
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                {/* {
                    activeRefresh == true || activeSave == true &&
                    <LoadingScreen />

                } */}
                {[
                    currentUser && dataBody && activeRefresh == true &&
                    <GetServices uriPointer={uri} dataBody={dataBody}
                        // showConsole={'cart_ajax'}
                        getDataSource={this.getData.bind(this)} key={'cart_ajax'} />,
                    ArrayItem && activeSave == true &&
                    <GetServices uriPointer={uri2} dataBody={ArrayItem} Authorization={keycokie} getDataSource={this.getData2.bind(this)}
                        // showConsole={'auto_save_ajax'}
                        key={'auto_save_ajax'} />,
                    ArrayItem2 && activeDelete == true &&
                    <GetServices uriPointer={uri3} dataBody={ArrayItem2} Authorization={keycokie} getDataSource={this.getData3.bind(this)}
                        // showConsole={'delete_cart'}
                        key={'delete_cart'} />
                ]}
                <AppBar1 navigation={navigation} titleHead='รถเข็น' deleteBar={dataService && dataService.cart_list.length > 0 ? true : false}
                    backArrow ButtomDeleteAll={ButtomDeleteAll} propsFunction={this.propsFunction.bind(this)} />
                <ScrollView>
                    {
                        dataService &&
                        <Product_Cart dataService={dataService.cart_list} dataService2={dataService2} currentUser={currentUser}
                            ArrayItem={this.ArrayItem.bind(this)} checkedAll={{ checkedAll, activeSave2 }}
                            getCheckedAll={this.getCheckedAll.bind(this)} ArrayItem2={this.ArrayItem2.bind(this)} />
                    }
                    {/* <Product_Like /> */}
                    <PopularProduct navigation={navigation} headText={'คุณอาจชอบสิ่งนี้'} />
                </ScrollView>
                {
                    dataService && dataService.cart_list.length > 0 && dataService2 &&
                    <Buy_bar navigation={navigation} dataService2={dataService2} checkedAll={checkedAll} list_order={ArrayItem.list_order}
                        getCheckedAll={this.getCheckedAll.bind(this)} ButtomDeleteAll={ButtomDeleteAll} currentUser={currentUser}
                        DeleteAction={this.ArrayItem2.bind(this)} keycokie={keycokie} />
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
            activecart: true,
            activeHeadArray: false,
            activeRefresh: false,
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { ArrayItem, ArrayItem2, checkedAll, currentUser, dataService, dataService2, getCheckedAll, itemData, sendData, } = this.props
        const { activecart, activeHeadArray, activeRefresh, dataNewService, ItemArray, HeadArray } = this.state
        if (
            ////>nextProps
            ArrayItem !== nextProps.ArrayItem || ArrayItem2 !== nextProps.ArrayItem2 || checkedAll !== nextProps.checkedAll ||
            currentUser !== nextProps.currentUser || dataService !== nextProps.dataService || dataService2 !== nextProps.dataService2 ||
            getCheckedAll !== nextProps.getCheckedAll || itemData !== nextProps.itemData || sendData !== nextProps.sendData ||
            ////>nextState
            activecart !== nextState.activecart || activeHeadArray !== nextState.activeHeadArray ||
            activeRefresh !== nextState.activeRefresh || dataNewService !== nextState.dataNewService || ItemArray !== nextState.ItemArray ||
            HeadArray !== nextState.HeadArray

        ) {
            return true
        }
        return false
    }
    setStateItemArrayChecked = (checked, id_cartdetail, ) => {
        const { ArrayItem, currentUser, dataService, getCheckedAll, } = this.props
        const { HeadArray, ItemArray } = this.state
        var numindex = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(id_cartdetail)
        ItemArray[numindex].checked = checked
        var checkedMain = ItemArray.filter((item) => { return item.name_store == ItemArray[numindex].name_store })
            .map((item2) => { return item2.checked }).every((item3) => { return item3 == true })
        var numindex_h = HeadArray.map((item) => { return item.name; }).indexOf(ItemArray[numindex].name_store)
        var id = []
        for (var n = 0; n < dataService.length; n++) {
            if (ItemArray[n].checked == true) {
                id.push(dataService[n].id_cartdetail)
            }
        }
        HeadArray[numindex_h].checked = checkedMain
        var checkedAll = HeadArray.map((item) => { return item.checked }).every((item2) => { return item2 == true })
        getCheckedAll(checkedAll)
        ArrayItem({
            amount: ItemArray[numindex].itemCount,
            list_order: id.join(','),
            id_cartdetail: id_cartdetail,
            id_customer: currentUser.id_customer
        })
        this.setState({ activecart: true, ItemArray, HeadArray, })
    }
    setStateItemArrayitemCount = (itemCount, id_cartdetail, max_remain, ) => {
        const { ArrayItem, currentUser, dataService, } = this.props
        const { ItemArray } = this.state
        var numindex = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(id_cartdetail)
        var id = []
        for (var n = 0; n < dataService.length; n++) {
            if (ItemArray[n].checked == true) {
                id.push(ItemArray[n].id_cartdetail)
            }
        }
        itemCount > 0 && itemCount < max_remain && (
            ItemArray[numindex].itemCount = itemCount,
            ArrayItem({
                amount: itemCount,
                list_order: id.join(','),
                id_cartdetail: id_cartdetail,
                id_customer: currentUser.id_customer
            })
        )
        this.setState({ activecart: false, activeHeadArray: false, activeRefresh: false })
    }
    setStateHeadArray = (checked, name) => {
        const { getCheckedAll, } = this.props
        const { HeadArray, ItemArray } = this.state
        var numindex = HeadArray.map((item) => { return item.name; }).indexOf(name)
        HeadArray[numindex].checked = checked
        var numcount = ItemArray.filter((value) => { return value.name_store == name }).map((item) => { return item.id_cartdetail })
        for (var n = 0; n < numcount.length; n++) {
            var numindex_n = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(numcount[n])
            ItemArray[numindex_n].checked = checked
        }
        var checkedAll = HeadArray.map((item) => { return item.checked }).every((item2) => { return item2 == true })
        getCheckedAll(checkedAll)
        this.setState({ activecart: true, activeHeadArray: true, HeadArray, ItemArray, })
    }
    checkItem = (length) => {
        const { dataService } = this.props
        if (dataService != null) {
            var ItemArray = []
            var n
            for (n = 0; length > n; n++) {
                ItemArray[n] = {
                    checked: true,
                    itemCount: dataService[n].quantity * 1,
                    id_cartdetail: dataService[n].id_cartdetail,
                    name_store: dataService[n].name,
                }
            }
            this.setState({ ItemArray, activeRefresh: true })
        }
    }
    setStateAll = (checked) => {
        const { getCheckedAll, } = this.props
        const { HeadArray, ItemArray } = this.state
        for (var n_all = 0; n_all < HeadArray.length; n_all++) {
            HeadArray[n_all].checked = checked
            var numcount = ItemArray.filter((value) => { return value.name_store == HeadArray[n_all].name })
                .map((item) => { return item.id_cartdetail })
            for (var n = 0; n < numcount.length; n++) {
                var numindex_n = ItemArray.map((item) => { return item.id_cartdetail; }).indexOf(numcount[n])
                ItemArray[numindex_n].checked = checked
            }
            var checkedAll = HeadArray.map((item) => { return item.checked }).every((item2) => { return item2 == true })
        }
        getCheckedAll(checkedAll)
        this.setState({ activecart: true, activeHeadArray: true, HeadArray, ItemArray, })
    }
    renderItem = (data, { checkedAll, dataService, dataService2 } = this.props,
        { activecart, activeHeadArray, activeRefresh, ItemArray, HeadArray, } = this.state) => (
            this.dataMySQL = finip + '/' + data.item.path_product + '/' + data.item.image_product,
            this.numindex = ItemArray.map((item) => { return item.id_cartdetail; })
                .indexOf(data.item.id_cartdetail),
            ((dataService2 == null && activecart == true) || (activeHeadArray == true && activecart == true) || (activeRefresh == true)) &&
            this.setStateItemArrayitemCount(
                ItemArray[this.numindex].itemCount,
                data.item.id_cartdetail,
                data.item.max_remain,
            ),
            <TouchableOpacity
                activeOpacity={1}

                style={{ backgroundColor: '#fff', borderColor: '#ECECEC', borderRightWidth: 1, }}
            >
                <View style={{ flexDirection: 'row', }}>
                    <CheckBox
                        containerStyle={[
                            stylesMain.ItemCenterVertical, {
                                backgroundColor: null, borderWidth: null,
                            }]}
                        textStyle={14}
                        fontFamily={'SukhumvitSet-Text'}
                        checked={ItemArray[this.numindex].checked}
                        onPress={this.setStateItemArrayChecked.bind(this,
                            !ItemArray[this.numindex].checked,
                            data.item.id_cartdetail,
                        )} />
                    <View style={{
                        backgroundColor: '#fffffe', width: 140, height: 140, marginVertical: 6,
                        borderColor: '#ECECEC',
                        borderWidth: 1
                    }}>
                        <FastImage
                            style={[stylesMain.BoxProduct2Image, { flex: 1 }]}
                            source={{
                                uri: this.dataMySQL,
                            }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                    <View style={[stylesMain.ItemCenterVertical, { marginLeft: 20 }]}>
                        <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: width * 0.38 }]}>
                            {data.item.product_name}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {data.item.detail_1 + ' ' + data.item.detail_2}</Text>
                        {
                            /* <NumberFormat
                                    value={data.item.price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[stylesFont.FontSize6, 
                                            stylesFont.FontFamilyText, {
                                             color: '#0A55A6' 
                                            }]}>
                                            {value}</Text>
                                    } /> */
                        }
                        <NumberFormat
                            value={data.item.price}
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
                                        ItemArray[this.numindex].itemCount - 1,
                                        data.item.id_cartdetail,
                                        data.item.max_remain,
                                    )}>
                                <View style={[stylesMain.ItemCenter, {
                                    width: 30, height: 25, borderColor: '#ECECEC',
                                    borderRightWidth: 0,
                                    borderWidth: 1
                                }]}>
                                    <Text style={[stylesMain.ItemCenterVertical,
                                    stylesFont.FontSize4, {
                                        color:
                                            ItemArray[this.numindex].itemCount > 1 ?
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
                                    {ItemArray[this.numindex].itemCount}</Text>
                            </View>
                            <TouchableOpacity activeOpacity={1}
                                onPress={
                                    this.setStateItemArrayitemCount.bind(this,
                                        ItemArray[this.numindex].itemCount + 1,
                                        data.item.id_cartdetail,
                                        data.item.max_remain,
                                    )}>
                                <View style={[stylesMain.ItemCenter, {
                                    width: 30, height: 25, borderColor: '#ECECEC',
                                    borderLeftWidth: 0,
                                    borderWidth: 1
                                }]}>
                                    <Text style={[stylesMain.ItemCenterVertical,
                                    stylesFont.FontSize4, {
                                        color:
                                            ItemArray[this.numindex].itemCount < data.item.max_remain - 1 ?
                                                '#111' :
                                                '#CECECE'
                                    }]}>
                                        +</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    DeleteItem = (id_cartdetail, data, rowMap, ) => {
        const { ArrayItem2, currentUser } = this.props
        setTimeout(() => {
            rowMap[data.item.key].closeRow()
        }, 450)
        ArrayItem2({
            list_order: id_cartdetail,
            id_customer: currentUser.id_customer
        })
    }
    renderHiddenItem = (data, rowMap, ) => (
        // console.log('rowMap'),
        // console.log(rowMap),
        // console.log('data'),
        // console.log(data),
        // console.log('datasecc'),
        // console.log(rowMap[data.index]),
        <View style={{
            alignItems: 'center',
            backgroundColor: '#DDD',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
        }}>
            <TouchableOpacity
                style={[{
                    alignItems: 'center',
                    bottom: 0,
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    width: 75,
                    backgroundColor: 'red',
                    right: 0,
                    borderColor: '#ECECEC',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                }]}
                onPress={this.DeleteItem.bind(this, data.item.id_cartdetail, data, rowMap)}
            >
                <IconFontAwesome name='trash-o' size={30} style={{ color: '#fff' }} />
            </TouchableOpacity>
        </View>
    )
    render() {
        const { checkedAll, dataService, dataService2 } = this.props
        const { dataNewService, ItemArray, HeadArray, } = this.state
        dataService && (ItemArray == null || (dataService.length != ItemArray.length)) &&
            this.checkItem(dataService.length)
        var arrayName = []
        var arrayItem = []
        if (dataService.length > 0 && HeadArray == null) {
            for (var n = 0; n < dataService.length; n++) {
                if (arrayName.indexOf(dataService[n].name) == -1) {
                    arrayName.push(dataService[n].name)
                    arrayItem.push({
                        name: dataService[n].name, store_path: dataService[n].store_path,
                        store_image: dataService[n].store_image, checked: true
                    })
                }
            }
            this.setState({ HeadArray: arrayItem })
        }
        if (HeadArray != null && HeadArray.map((value) => { return dataService.some((item) => { return item.name == value.name }) })
            .every((value2) => { return value2 == true }) == false) {
            arrayName = []
            arrayItem = []
            for (var n = 0; n < dataService.length; n++) {
                if (arrayName.indexOf(dataService[n].name) == -1) {
                    arrayName.push(dataService[n].name)
                    arrayItem.push({
                        name: dataService[n].name, store_path: dataService[n].store_path,
                        store_image: dataService[n].store_image, checked: true
                    })
                }
            }
            this.setState({ HeadArray: arrayItem, activecart: true, dataService2: [], })
        }
        // console.log('dataService')
        // console.log(dataService)
        // checkedAll && checkedAll.activeSave2 == true &&
        //     this.setStateAll(checkedAll.checkedAll)
        return (
            <View>
                {
                    dataService &&
                        dataService.length > 0 ? (
                            ItemArray &&
                            HeadArray.map((item_n, index_n) => {
                                var dataMySQL_n = finip + '/' + item_n.store_path + '/' + item_n.store_image
                                return (
                                    <View style={{ marginBottom: 10, backgroundColor: '#fff' }} key={index_n}>
                                        <View style={{
                                            flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1, justifyContent: 'space-between'
                                        }}>
                                            <View style={{ flexDirection: 'row', }}>
                                                <CheckBox
                                                    containerStyle={[stylesMain.ItemCenterVertical, {
                                                        backgroundColor: null, borderWidth: null,
                                                    }]}
                                                    textStyle={14}
                                                    fontFamily={'SukhumvitSet-Text'}
                                                    checked={item_n.checked}
                                                    onPress={this.setStateHeadArray.bind(this, !item_n.checked, item_n.name)}
                                                />
                                                <View style={[stylesMain.ItemCenterVertical, {
                                                    width: 30, height: 30, borderRadius: 20, backgroundColor: '#cecece'
                                                }]}>
                                                    <FastImage
                                                        style={[stylesMain.BoxProduct2Image, { flex: 1, borderRadius: 20, }]}
                                                        source={{
                                                            uri: dataMySQL_n,
                                                        }}
                                                        resizeMode={FastImage.resizeMode.contain} />
                                                </View>
                                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText,
                                                stylesFont.FontSize5, {
                                                    marginLeft: 16,
                                                }]}>
                                                    {item_n.name}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <SwipeListView
                                                useFlatList
                                                data={dataService.filter((value) => { return value.name == item_n.name })}
                                                renderItem={this.renderItem}
                                                renderHiddenItem={this.renderHiddenItem}
                                                disableRightSwipe
                                                rightOpenValue={-75}
                                                stopRightSwipe={-75}
                                            />
                                        </View>
                                        {/*
                                        dataService
                                            .filter((value) => { return value.name == item_n.name })
                                            .map((item, index) => {
                                                var dataMySQL = finip + '/' + item.path_product + '/' + item.image_product
                                                var numindex = ItemArray.map((item) => { return item.id_cartdetail; })
                                                    .indexOf(item.id_cartdetail);
                                                dataService2 == null && activecart == true &&
                                                    this.setStateItemArrayitemCount(
                                                        ItemArray[numindex].itemCount,
                                                        item.id_cartdetail,
                                                        item.max_remain,
                                                    );
                                                activeHeadArray == true && activecart == true &&
                                                    this.setStateItemArrayitemCount(
                                                        ItemArray[numindex].itemCount,
                                                        item.id_cartdetail,
                                                        item.max_remain,
                                                    );
                                                return (
                                                    <View key={index}>
                                                        <View style={{ flexDirection: 'row', }}>
                                                            <CheckBox
                                                                containerStyle={[
                                                                    stylesMain.ItemCenterVertical, {
                                                                        backgroundColor: null, borderWidth: null,
                                                                    }]}
                                                                textStyle={14}
                                                                fontFamily={'SukhumvitSet-Text'}
                                                                checked={ItemArray[numindex].checked}
                                                                onPress={this.setStateItemArrayChecked.bind(this,
                                                                    !ItemArray[numindex].checked,
                                                                    item.id_cartdetail,
                                                                )} />
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
                                                                    {item.product_name}</Text>
                                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                                                    {item.detail_1 + ' ' + item.detail_2}</Text>
                                                                {
                                                                    /* <NumberFormat
                                                                            value={item.price}
                                                                            displayType={'text'}
                                                                            thousandSeparator={true}
                                                                            prefix={'฿'}
                                                                            renderText={value =>
                                                                                <Text style={[stylesFont.FontSize6, 
                                                                                    stylesFont.FontFamilyText, {
                                                                                     color: '#0A55A6' 
                                                                                    }]}>
                                                                                    {value}</Text>
                                                                            } /> *//*
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
                                                                                ItemArray[numindex].itemCount - 1,
                                                                                item.id_cartdetail,
                                                                                item.max_remain,
                                                                            )}>
                                                                        <View style={[stylesMain.ItemCenter, {
                                                                            width: 30, height: 25, borderColor: '#ECECEC',
                                                                            borderRightWidth: 0,
                                                                            borderWidth: 1
                                                                        }]}>
                                                                            <Text style={[stylesMain.ItemCenterVertical,
                                                                            stylesFont.FontSize4, {
                                                                                color:
                                                                                    ItemArray[numindex].itemCount > 1 ?
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
                                                                            {ItemArray[numindex].itemCount}</Text>
                                                                    </View>
                                                                    <TouchableOpacity activeOpacity={1}
                                                                        onPress={
                                                                            this.setStateItemArrayitemCount.bind(this,
                                                                                ItemArray[numindex].itemCount + 1,
                                                                                item.id_cartdetail,
                                                                                item.max_remain,
                                                                            )}>
                                                                        <View style={[stylesMain.ItemCenter, {
                                                                            width: 30, height: 25, borderColor: '#ECECEC',
                                                                            borderLeftWidth: 0,
                                                                            borderWidth: 1
                                                                        }]}>
                                                                            <Text style={[stylesMain.ItemCenterVertical,
                                                                            stylesFont.FontSize4, {
                                                                                color:
                                                                                    ItemArray[numindex].itemCount < item.max_remain - 1 ?
                                                                                        '#111' :
                                                                                        '#CECECE'
                                                                            }]}>
                                                                                +</Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                )
                                            })
                                    */}
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
            </View >
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
            create_bill: false,
            check_coupon: false,
            check_coupon2: false,
            Coupon: true,
            dataService: [],
            errorService3: false,
            otherCoupon: false,
            Service3: false,
        };
        this.springValue = new Animated.Value(0);
        this.transformValue = new Animated.Value(100)
    }
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
            ]).start(() => {
                this.setState({ errorService3: false });
            });
        });
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { checkedAll, dataService2, DeleteAction, keycokie, getCheckedAll, list_order, navigation } = this.props
        const {
            create_bill, check_coupon, check_coupon2, Coupon, dataBody2, dataBody3, dataBody4, dataService, dataService3, dataService4,
            dataService5, errorService3, otherCoupon, Service3, text,
        } = this.state;
        if (
            ////>nextProps
            checkedAll !== nextProps.checkedAll || dataService2 !== nextProps.dataService2 ||
            DeleteAction !== nextProps.DeleteAction || keycokie !== nextProps.keycokie || getCheckedAll !== nextProps.getCheckedAll ||
            list_order !== nextProps.list_order || navigation !== nextProps.navigation ||
            ////>nextState
            create_bill !== nextState.create_bill || check_coupon !== nextState.check_coupon || check_coupon2 !== nextState.check_coupon2 ||
            Coupon !== nextState.Coupon || dataBody2 !== nextState.dataBody2 || dataBody3 !== nextState.dataBody3 ||
            dataBody4 !== nextState.dataBody4 || dataService !== nextState.dataService || dataService3 !== nextState.dataService3 ||
            dataService4 !== nextState.dataService4 || dataService5 != nextState.dataService5 || errorService3 !== nextState.errorService3 ||
            otherCoupon !== nextState.otherCoupon || Service3 !== nextState.Service3 || text !== nextState.text
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.setStateCancel()
    }
    StateBox = () => {
        const { checkedAll, getCheckedAll, } = this.props
        getCheckedAll(!checkedAll)
    }
    DeleteAction = () => {
        const { currentUser, DeleteAction, list_order, } = this.props
        DeleteAction({
            id_customer: currentUser.id_customer,
            list_order
        })
    }
    getData = (dataService) => {
        this.setState({ dataService, Coupon: false })
    }
    getData2 = (dataService3) => {
        const { currentUser, list_order, } = this.props;
        const { text, } = this.state;
        console.log('dataService3')
        console.log(dataService3)
        var dataBody3 = {
            id_customer: currentUser.id_customer,
            list_order,
            use_coupon: '',
            other_coupon: text,
        }
        var dataBody4 = {
            id_customer: currentUser.id_customer,
            id_cartdetail: list_order,
            use_coupon: '',
            other_coupon: text,
            buy_now: "cart"
        }
        dataService3.coupon_message !== 'เงื่อนไขส่วนลดไม่ถูกต้อง' ?
            this.setState({ dataBody3, dataBody4, dataService3, otherCoupon: false, Service3: true, check_coupon: true }) :
            this.setState({ errorService3: true, otherCoupon: false, text: '' })
    }
    setStateCoupon2 = (dataService4) => {
        const { currentUser, list_order, } = this.props;
        console.log('dataService4')
        console.log(dataService4)
        var dataBody3 = {
            id_customer: currentUser.id_customer,
            list_order,
            use_coupon: dataService4.id_coupon,
            other_coupon: '',
        }
        var dataBody4 = {
            id_customer: currentUser.id_customer,
            id_cartdetail: list_order,
            use_coupon: dataService4.id_coupon,
            other_coupon: '',
            buy_now: "cart"
        }
        this.setState({ dataBody3, dataBody4, dataService4, check_coupon: true })
        this.ConponSheet.close();
    }
    getData3 = (dataService5) => {
        const { check_coupon2, } = this.state;
        console.log('dataService5')
        console.log(dataService5)
        this.setState({ dataService5, check_coupon: false, Service3: check_coupon2 == true ? false : true, check_coupon2: false })
    }
    getData4 = (dataService6) => {
        console.log('dataService6')
        console.log(dataService6)
        this.navigationNavigateScreen('Customer_Order', { no_invoice: dataService6.no_invoice })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    setStateText = (text) => {
        this.setState({ text })
    }
    setStateCancel = () => {
        const { currentUser, list_order, } = this.props;
        var dataBody3 = {
            id_customer: currentUser.id_customer,
            list_order,
            use_coupon: '',
            other_coupon: '',
        }
        var dataBody4 = {
            id_customer: currentUser.id_customer,
            id_cartdetail: list_order,
            use_coupon: '',
            other_coupon: '',
            buy_now: "cart"
        }
        this.setState({
            dataBody3, dataBody4, dataService3: [], dataService4: [], dataService5: [], Service3: false, text: '', check_coupon: true,
            check_coupon2: true
        })
    }
    setStateCoupon = () => {
        const { currentUser, list_order, } = this.props;
        const { text, } = this.state;
        var dataBody2 = {
            id_customer: currentUser.id_customer,
            list_order,
            my_coupon: text,
        };
        console.log(dataBody2)
        text !== undefined &&
            this.setState({ otherCoupon: true, dataBody2 })
    }
    get ConponSheetBody() {
        const { dataService } = this.state
        return (
            dataService && dataService.coupon_data && dataService.coupon_data.length > 0 &&
            <>
                <View style={{ flex: 1, paddingHorizontal: 15 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { textAlign: 'center' }]}>ส่วนลด</Text>
                    <ScrollView>
                        {
                            dataService && dataService.coupon_data && dataService.coupon_data.length > 0 ?
                                dataService.coupon_data.map((item, index) => {
                                    return <Coupon_Detail_BottomSheet dataService={item} key={index}
                                        getDataSource={this.setStateCoupon2.bind(this)} />
                                }) :
                                null
                        }
                    </ScrollView>
                </View>
            </>
        )
    }
    ConponSheetButtom = () => {
        this.ConponSheet.open();
    }
    setStateBill = () => {
        this.setState({ create_bill: true })
    }
    render() {
        const { ButtomDeleteAll, checkedAll, currentUser, dataService2, keycokie, list_order, } = this.props;
        const {
            create_bill, check_coupon, Coupon, dataBody2, dataBody3, dataBody4, dataService3, dataService4, dataService5, errorService3,
            otherCoupon,
            Service3,
            text,
        } = this.state;
        var uri = finip + '/cart/check_coupon';
        var dataBody = {
            id_customer: currentUser.id_customer,
            list_order
        };
        var uri2 = finip + '/coupon/get_other_coupon';
        var uri3 = finip + '/cart/track_data';
        var uri4 = finip + '/bill/create_bill';
        errorService3 === true &&
            this._spring()
        return ([
            <Animatable.View key={'Animatable'} style={[stylesMain.animatedView, {
                opacity: this.springValue, transform: [{ translateY: this.transformValue }]
            }]}>
                <View style={[stylesMain.animatedViewSub, { position: 'absolute' }]}>
                    <Text style={[stylesMain.exitTitleText, stylesFont.FontFamilyText, { color: 'red' }]}>เงื่อนไขส่วนลดไม่ถูกต้อง</Text>
                </View>
            </Animatable.View>,
            <View style={stylesCart.Bar} key={'CartBar'}>
                {[
                    Coupon == true &&
                    <GetServices uriPointer={uri}
                        key={'check_coupon'}
                        showConsole={'check_coupon'}
                        Authorization={keycokie}
                        dataBody={dataBody} getDataSource={this.getData.bind(this)} />,
                    otherCoupon == true &&
                    <GetServices uriPointer={uri2}
                        key={'get_other_coupon'}
                        showConsole={'get_other_coupon'}
                        Authorization={keycokie}
                        dataBody={dataBody2} getDataSource={this.getData2.bind(this)} />,
                    check_coupon == true &&
                    <GetServices uriPointer={uri3}
                        key={'track_data'}
                        showConsole={'track_data'}
                        Authorization={keycokie}
                        dataBody={dataBody3} getDataSource={this.getData3.bind(this)} />,
                    create_bill == true &&
                    <GetServices uriPointer={uri4}
                        key={'create_bill'}
                        showConsole={'create_bill'}
                        Authorization={keycokie}
                        dataBody={dataBody4} getDataSource={this.getData4.bind(this)} />,
                    ButtomDeleteAll == false &&
                    <View style={stylesCart.Bar_Code} key={'Bar_Code'}>
                        <IconFoundation name='burst' size={30} style={[stylesMain.ItemCenterVertical, { left: 5, width: '8%' }]} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical, {
                            left: '8%', width: '16%'
                        }]}>
                            โค้ดส่วนลด</Text>
                        {
                            Service3 == true ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, {
                                        borderWidth: 0, textAlignVertical: 'center'
                                    }]}>
                                        {dataService4 ? dataService4.name : dataService3.coupon_message}
                                    </Text>
                                </View> :
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={[stylesCart.Bar_Code_Box, stylesMain.ItemCenterVertical, stylesFont.FontFamilyText,]}
                                        onChangeText={this.setStateText.bind(this)} value={text} />
                                    <BottomSheet
                                        ref={ref => {
                                            this.ConponSheet = ref;
                                        }}
                                        height={height * 0.5}
                                        duration={250}
                                        customStyles={{
                                            container: {
                                                paddingTop: 10,
                                                alignItems: "center",
                                                borderTopLeftRadius: 10,
                                                borderTopRightRadius: 10,
                                            }
                                        }}>
                                        {this.ConponSheetBody}
                                    </BottomSheet>
                                    <TouchableOpacity onPress={this.ConponSheetButtom.bind(this)} style={{ marginLeft: -35 }}>
                                        <IconFontAwesome name='caret-down' size={20} style={{
                                            textAlign: 'center', textAlignVertical: 'center', width: 40, height: '100%'
                                        }} />
                                    </TouchableOpacity>
                                </View>
                        }
                        {
                            Service3 == true ?
                                <TouchableOpacity onPress={this.setStateCancel.bind(this)} style={{ width: 100, marginLeft: 0 }}>
                                    <IconFontisto name='close-a' size={20} style={[stylesMain.ItemCenterVertical, {
                                        color: 'red', marginLeft: 5
                                    }]} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={this.setStateCoupon.bind(this)} style={{ width: 100, marginLeft: 0 }}>
                                    <View style={[stylesCart.Bar_Code_Box_Text, stylesMain.ItemCenterVertical, { marginLeft: 5 }]}>
                                        <Text style={[
                                            stylesCart.Bar_Code_Text, stylesFont.FontSize6, stylesFont.FontFamilyText,
                                            stylesMain.ItemCenterVertical
                                        ]}>
                                            ใช้โค้ด</Text>
                                    </View>
                                </TouchableOpacity>
                        }
                    </View>
                ]}
                <View style={stylesCart.Bar_Buy}>
                    <View>
                        <CheckBox
                            title='เลือกทั้งหมด'
                            containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: '#fff', borderWidth: 0, marginTop: -0.5, }]}
                            textStyle={14}
                            fontFamily={'SukhumvitSet-Text'}
                            checked={checkedAll}
                            onPress={this.StateBox.bind(this)} />
                    </View>
                    {
                        ButtomDeleteAll == false &&
                        <View style={[stylesCart.Bar_Buy_price, { marginLeft: -20 }]}>
                            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                รวมทั้งหมด</Text>
                            <NumberFormat
                                value={dataService5 ? dataService5.now_total : dataService2 && dataService2.now_total}
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
                    }
                    <TouchableOpacity activeOpacity={1} onPress={
                        ButtomDeleteAll == true ?
                            this.DeleteAction.bind(this) :
                            this.setStateBill.bind(this)}>
                        <View style={[stylesCart.BOX_Buy, stylesMain.ItemCenterVertical]}>
                            <Text style={[
                                stylesCart.BOX_Buy_Text, stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.ItemCenterVertical
                            ]}>
                                {ButtomDeleteAll == true ? 'ลบ' : 'ชำระเงิน'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        ]);
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class Coupon_Detail_BottomSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, getDataSource } = this.props
        if (
            ////>nextProps
            dataService !== nextProps.dataService || getDataSource !== nextProps.getDataSource
            ////>nextState
        ) {
            return true
        }
        return false
    }
    saveTicket = (dataService) => {
        const { getDataSource, } = this.props
        getDataSource(dataService)
    }
    render() {
        const { dataService, } = this.props
        console.log(dataService)
        return (
            <View style={{
                width: '100%', height: 100, borderWidth: 1,
                backgroundColor: dataService.ticket_picked == 'ticket_picked' ? '#A9A9A9' : '#C0DBF9',
                flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 5, marginVertical: 10,
                opacity: dataService.ticket_picked == 'ticket_picked' ? 0.6 : 1,
            }}>
                <View style={{ width: '60%' }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.name}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.detail}</Text>
                </View>
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={{ backgroundColor: '#C4C4C4' }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { paddingHorizontal: 2 }]}>
                            2020.02.22-2020.03.01</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.saveTicket.bind(this, dataService)}>
                        <View style={[stylesMain.ItemCenter, {
                            backgroundColor: '#0A55A6', paddingHorizontal: 10,
                            borderRadius: 5
                        }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                                {'ใช้คูปอง'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}