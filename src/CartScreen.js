///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
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
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CartScreen extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            itemCount: [],
            itemData: [],
        };
        this.getText = this.getText.bind(this)
        this.getData = this.getData.bind(this)
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { itemCount, itemData } = this.state
        const { navigation } = this.props
        if (itemCount !== nextState.itemCount || itemData !== nextState.itemData || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getText(itemCount) {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ itemCount })
        }
    }
    getData(itemData) {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ itemData })
        }
    }
    render() {
        const { itemCount, itemData } = this.state
        const { navigation } = this.props;
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
                <AppBar1 navigation={navigation} titleHead='รถเข็น' chatBar backArrow />
                <ScrollView>
                    <Product_Cart itemData={itemData} sendText={this.getText} />
                    {/* <Product_Like /> */}
                    <PopularProduct navigation={navigation} headText={'คุณอาจชอบสิ่งนี้'} />
                </ScrollView>
                <Buy_bar sendData={this.getData} navigation={navigation} itemCount={itemCount} />
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
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { itemData, sendText } = this.props
        if (itemData !== nextProps.itemData || sendText !== nextProps.sendText) {
            return true
        }
        return false
    }
    render() {
        const { itemData, sendText } = this.props
        const storecount = 1
        return (
            <View>
                {
                    storecount > 0 ?
                        <CartProduct itemData={itemData} sendData={sendText} /> :
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
///----------------------------------------------------------------------------------------------->>>> CartProduct
export class CartProduct extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            ItemHead: [],
            ItemArray: [],
            HeadCount: 0,
        };
        this.getData = this.getData.bind(this)
    }
    getData = (dataService) => {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ dataService })
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { HeadCount, ItemArray, ItemHead, dataService } = this.state
        const { itemData, sendData } = this.props
        if (HeadCount !== nextState.HeadCount || ItemArray !== nextState.ItemArray || ItemHead !== nextState.ItemHead || dataService !== nextState.dataService || itemData !== nextProps.itemData || sendData !== nextProps.sendData) {
            return true
        }
        return false
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    productItem(ItemHead) {
        const { ItemArray } = this.state
        return this.state.dataService ? (
            this.state.dataService.map((item, index) => {
                if (ItemHead == item.id_store) {
                    if (ItemArray[index] == null) {
                        ItemArray[index] = {
                            itemCount: 1, price: item.full_price, id_product: item.id_product, checked: true,
                            id_store: item.id_store
                        }
                        this.setState({ ItemArray })
                        this.props.sendData(ItemArray);
                    }
                    var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
                    return (
                        <View style={{ flex: 1, flexDirection: 'row' }} key={index}>
                            <CheckBox
                                containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]}
                                textStyle={14}
                                fontFamily={'SukhumvitSet-Text'}
                                checked={ItemArray[index].checked}
                                onPress={() => {
                                    ItemArray[index].checked ?
                                        ItemArray[index].checked = false :
                                        ItemArray[index].checked = true
                                    this.ChangeCheck
                                    this.setState({ ItemArray })
                                    this.props.sendData(ItemArray);
                                }}
                            />
                            <View style={{
                                backgroundColor: '#fffffe', width: 140, height: 140, marginVertical: 6, borderColor: '#ECECEC',
                                borderWidth: 1
                            }}>
                                <FastImage
                                    style={[stylesMain.BoxProduct2Image, { flex: 1 }]}
                                    source={{
                                        uri: dataMySQL,
                                    }}
                                />
                            </View>
                            <View style={[stylesMain.ItemCenterVertical, { marginLeft: 25 }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                    {item.name}</Text>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                                            {value}</Text>
                                    }
                                />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => {
                                        if (ItemArray[index].itemCount > 1) {
                                            ItemArray[index].itemCount = ItemArray[index].itemCount - 1
                                            this.setState({ ItemArray })
                                            this.props.sendData(ItemArray);
                                        }
                                    }}>
                                        <View style={[stylesMain.ItemCenter, {
                                            width: 30, height: 25, borderColor: '#ECECEC', borderRightWidth: 0, borderWidth: 1
                                        }]}>
                                            <Text style={[stylesMain.ItemCenterVertical]}>
                                                -</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={[stylesMain.ItemCenter, stylesFont.FontFamilyText, {
                                        width: 50, height: 25, borderColor: '#ECECEC', borderWidth: 1
                                    }]}>
                                        <Text style={[stylesMain.ItemCenterVertical]}>
                                            {ItemArray[index].itemCount}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        ItemArray[index].itemCount = ItemArray[index].itemCount + 1
                                        this.setState({ ItemArray })
                                        this.props.sendData(ItemArray);
                                    }}>
                                        <View style={[stylesMain.ItemCenter, {
                                            width: 30, height: 25, borderColor: '#ECECEC', borderLeftWidth: 0, borderWidth: 1
                                        }]}>
                                            <Text style={[stylesMain.ItemCenterVertical]}>
                                                +</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }
            })
        ) :
            null
    }
    storeItem() {
        const { ItemHead, ItemArray, HeadCount } = this.state
        return this.state.dataService ? (
            this.state.dataService.map((item, index) => {
                if (ItemHead[index] == null) {
                    if (ItemHead.length == 0) {
                        ItemHead[0] = { id_store: item.id_store, checked: true }
                        this.setState({ ItemHead, HeadCount: HeadCount + 1 })
                    } else {
                        for (var m = 0; m < ItemHead.length; m++) {
                            if (ItemHead[m].id_store != item.id_store) {
                                ItemHead[m] = { id_store: item.id_store, checked: true }
                                this.setState({ ItemHead, HeadCount: HeadCount + 1 })
                            }
                        }
                    }
                }
                for (var m = 0; m < ItemHead.length && index < HeadCount; m++) {
                    if (ItemHead[m].id_store == item.id_store) {
                        return (
                            <View style={{ marginBottom: 10, backgroundColor: '#fff' }} key={index}>
                                <View style={{ flexDirection: 'row', borderColor: '#ECECEC', borderWidth: 1 }}>
                                    <CheckBox
                                        containerStyle={[stylesMain.ItemCenterVertical, { backgroundColor: null, borderWidth: null, }]}
                                        textStyle={14}
                                        fontFamily={'SukhumvitSet-Text'}
                                        checked={ItemHead[m].checked}
                                        onPress={() => {
                                            ItemHead[m].checked ?
                                                ItemHead[m].checked = false :
                                                ItemHead[m].checked = true
                                            this.ChangeCheckMain(ItemHead)
                                            this.setState({ ItemHead })
                                        }}
                                    />
                                    <View style={[stylesMain.ItemCenterVertical, {
                                        width: 30, height: 30, borderRadius: 20, backgroundColor: '#cecece'
                                    }]}>
                                    </View>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                        marginLeft: 16,
                                    }]}>
                                        PPpp</Text>
                                </View>
                                <View>
                                    {this.productItem(ItemHead[m].id_store)}
                                </View>
                            </View>
                        )
                    }
                }
            })
        ) :
            null
    }
    ChangeCheckMain(ItemHead) {
        const { ItemArray } = this.state
        ItemArray.map((item, index) => {
            for (var m = 0; m < ItemHead.length; m++) {
                if (item.id_store == ItemHead[m].id_store) {
                    ItemArray[index].checked = ItemHead[m].checked;
                    this.setState({ ItemArray })
                    this.props.sendData(ItemArray);
                }
            }
        })
    }
    ChangeCheck = () => {
        const { ItemHead, ItemArray, itemData } = this.state
        var count = 0
        var countMain = 0
        ItemHead.map((item, index) => {
            ItemHead[index].checked = false
            for (var m = 0; m < ItemArray.length; m++) {
                if (item.id_store == ItemArray[m].id_store) {
                    if (ItemArray[m].checked == false) {
                        ItemHead[index].checked = false;
                        count = count - 1
                        itemData ? (
                            itemData.checked = false,
                            this.setState({ itemData })
                        ) : null;
                        this.setState({ ItemHead })
                        this.props.sendData(ItemArray);
                    } else {
                        count = count + 1
                        if (count == ItemArray.length) {
                            ItemHead[index].checked = true;
                            itemData ? (
                                itemData.checked = true,
                                this.setState({ itemData })
                            ) : null;
                        } else {
                            ItemHead[index].checked = false;
                            itemData ? (
                                itemData.checked = false,
                                this.setState({ itemData })
                            ) : null;
                        }
                        this.setState({ ItemHead })
                    }
                }
            }
        })
    }
    setStateIHID = (ItemHead, itemData) => {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ ItemHead, itemData })
        }
    }
    checkBox = () => {
        const { ItemHead, ItemArray } = this.state
        const { itemData } = this.props
        while (itemData.num < 1) {
            for (var m = 0; m < ItemHead.length; m++) {
                itemData.num = itemData.num + 1
                ItemHead[m].checked = itemData.checked
                this.ChangeCheckMain(ItemHead)
                this.setStateIHID(ItemHead, itemData)
            }
        }
    }
    render() {
        var dataBody = {
            type: 'sale'
        };
        var uri = ip + '/mysql/DataServiceMain.php'
        this.checkBox
        return (
            <>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {this.storeItem()}
            </>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_Like
// export class Product_Like extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }
//     render() {
//         return (
//             <View>
//                 <Text> รายการที่คุณชอบ </Text>
//             </View>
//         );
//     }
// }
///----------------------------------------------------------------------------------------------->>>> Buy_bar
export class Buy_bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };
    }
    StateBox = () => {
        var { checked } = this.state
        checked = !checked
        this.props.sendData({ checked: checked, num: 0 });
        this.setState({ checked })
    }
    navigationNavigateScreen = (value, value2) => {
        this.props.navigation.navigate(value, value2)
    }
    render() {
        const { itemCount } = this.props;
        var values = 0;
        let data = itemCount.map((item, index) => {
            if (item.checked == true) {
                values = values + (item.price * item.itemCount)
            }
        })
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
                            onPress={this.StateBox}
                        />
                    </View>
                    <View style={[stylesCart.Bar_Buy_price, { marginLeft: -20 }]}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            รวมทั้งหมด</Text>
                        {data/* <Text> ฿10,000</Text> */}
                        <NumberFormat
                            value={values}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                    marginLeft: 4, color: '#0A55A6'
                                }]}>
                                    {value}</Text>
                            }
                        />
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
