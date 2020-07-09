///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {
    Alert, Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet,
    // Text,
    TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Omise from 'omise-react-native';
Omise.config('pkey_test_5ifbd6uqmxyoddk5u9w', '2019-05-29');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCustomerOrder from '../../style/styleCart-src/styleCustomer_Order';
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { GetServices, NavigationNavigateScreen, LoadingScreen, GetData } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Customer_Order);
function Customer_Order(props) {
    const { route } = props;
    const no_invoice = route.params?.no_invoice;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeIdAddress, setActiveIdAddress] = useState(false);
    const [activeReset, setActiveReset] = useState(true);
    const [activeAddressChange, setActiveAddressChange] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataBody2, setDataBody2] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    var dataBody = {
        id_customer: currentUser && currentUser.id_customer,
        no_invoice,
    };
    var uri2 = `${finip}/bill/update_bill_address`;
    var uri = `${finip}/bill/bill_list`;
    let getData = (value) => { setActiveReset(false); setDataService(value); };
    let getData2 = (id_address) => {
        setActiveIdAddress(true);
        setDataBody2({ id_customer: currentUser && currentUser.id_customer, id_address, no_invoice, });
    };
    let getData3 = (value) => { setActiveIdAddress(false); setActiveReset(true); setDataService2(value); };
    let getSource = (value) => {
        setActiveGetSource(false); setActiveIdAddress(true); setCokie(value.keycokie); setCurrentUser(value.currentUser);
    };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true });
    }, [activeGetSource]);
    useEffect(() => {
        activeIdAddress && cokie && GetServices({
            uriPointer: uri2, dataBody: dataBody2, Authorization: cokie, showConsole: 'update_bill_address',
            getDataSource: value => getData3(value)
        });
    }, [activeIdAddress]);
    useEffect(() => {
        activeReset &&
            GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: value => getData(value), });
    }, [activeReset]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 {...props} backArrow titleHead='สั่งซื้อสินค้า' />
        <ScrollView>
            {dataService && <Account {...props} dataService={dataService} getData={value => getData2(value)} />}
            {dataService && dataService.list_cart.map((value, index) => { return <Order dataService={value} key={index} /> })}
            {dataService && <Option_payment {...props} dataService={dataService} />}
        </ScrollView>
        {dataService && <Bar_payment {...props} currentUser={currentUser} dataService={dataService} no_invoice={no_invoice} />}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export let Account = (props) => {
    const { dataService, getData, navigation } = props;
    var data;
    dataService.bill_data.map((value) => { return data = value });
    return <View style={stylesCustomerOrder.Account}>
        <View style={stylesCustomerOrder.Account_Box}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
                <IconEvilIcons name='location' size={30} />
                <View style={{ marginLeft: 10, flex: 1, }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
                    {data && ([
                        <Text key={'customer_name'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
                            {data.customer_name} | {data.telephone_number}</Text>,
                        <Text key={'address'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                        { paddingLeft: 8, width: '100%', }]}>{data.address}</Text>
                    ])}
                </View>
            </View>
            <TouchableOpacity onPress={() => NavigationNavigateScreen({
                goScreen: 'Setting_Topic', setData: {
                    selectedIndex: 1, type: 'select', updateData: value => getData(value),
                    no_invoice: data.no_invoice
                }, navigation
            })}>
                <IconEntypo name='chevron-right' size={35} color={mainColor} style={stylesMain.ItemCenterVertical} />
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export let Order = (props) => {
    const { dataService } = props;
    const dataMySQL = `${finip}/${dataService.image_path}/${dataService.image_product}`;
    return <View>
        <View style={stylesCustomerOrder.Order}>
            <View style={stylesCustomerOrder.Order_Head}>
                {/* <FastImage
                            style={[stylesCustomerOrder.Order_Head_store, stylesMain.ItemCenterVertical]}
                            source={{
                                uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop1.jpg`,
                            }}
                        /> */}
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, stylesMain.ItemCenterVertical, { marginLeft: 10 }]}>
                    {dataService.store_name}</Text>
            </View>
            <View style={[stylesCustomerOrder.Order_product]}>
                <View style={stylesCustomerOrder.Order_product_Box}>
                    <FastImage style={{ height: '100%', width: '100%', }} source={{ uri: dataMySQL, }}
                        resizeMode={FastImage.resizeMode.contain} />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 4, width: '70%' }]}>
                    {dataService.product}</Text>
                <View style={[stylesCustomerOrder.Order_product_Boxprice, { marginLeft: -100 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'right' }]}>x {dataService.quantity}</Text>
                    <NumberFormat value={dataService.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,
                        { marginLeft: 10, color: mainColor, textAlign: 'right', }]}>{value}</Text>} />
                    {/* <View style={{ flexDirection: 'row', textAlign: 'right', }}>
                            </View> */}
                </View>
            </View>
            {/* <View style={stylesCustomerOrder.Order_product_BoxText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Short Note</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#C4C4C4' }]}>
                            สามารถฝากข้อความถึงผู้ขายได้</Text>
                    </View> */}
            <View style={stylesCustomerOrder.Order_product_BoxText}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รวมการสั่งซื้อ (1 สินค้า)</Text>
                <NumberFormat value={dataService.p_total} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value =>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: mainColor }]}>{value}</Text>} />
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export let Option_payment = (props) => {
    const { dataService, getData } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [path1, setPath1] = useState(0);
    const [item1, setItem1] = useState(false);
    var data;
    dataService.bill_data.map((value) => { return data = value });
    let setModalVisibles = (value) => { setModalVisible(value); };
    let setStateItem1 = () => { setItem1(!item1); };
    let getDatas = (value) => { getData(value); };
    let Path1 = () => {
        switch (path1) {
            case 0:
                return null;
            case 1:
                return <View style={{ width, borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, }}>
                    <View style={[stylesCustomerOrder.Payment_Box_Text,
                    { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>
            case 2:
                return <View style={{ width, borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, }}>
                    <View style={[stylesCustomerOrder.Payment_Box_Text,
                    { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต</Text>
                    </View>
                    <View style={[stylesCustomerOrder.Payment_Box_Text,
                    { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, marginTop: 10 }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                    <View style={[stylesCustomerOrder.Payment_Box_Text,
                    { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, marginTop: 10 }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>;
            case 3:
                return <View style={{ width, borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, }}>
                    <View style={[stylesCustomerOrder.Payment_Box_Text,
                    { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>;
            case 4:
                return <View style={{ width, borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, }}>
                    <View style={[stylesCustomerOrder.Payment_Box_Text,
                    { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>;
        };
    };
    return <>
        {/* <BottomSheet
                    ref={ref => {
                        this.Payment = ref;
                    }}
                    height={400}
                    duration={250}
                    customStyles={{
                        container: {
                            paddingTop: 10,
                            alignItems: "center"
                        }
                    }}>
                    <View style={{ alignItems: 'center', height: 'auto', }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginBottom: 10 }]}>เลือกวิธีการชำระเงิน</Text>
                        <View style={stylesCustomerOrder.Payment_Box}>
                            <View style={stylesCustomerOrder.Payment_Box_Text}>
                                <IconEntypo name='credit-card' size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>
                                บัตรเครดิต / เดบิต </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                this.state.path1 != 1 ?
                                    this.setState({ path1: 1 }) :
                                    this.setState({ path1: 0 })
                            }}>
                                <IconEntypo name={this.state.path1 == 1 ? 'chevron-up' : 'chevron-down'} size={20} />
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.path1 == 1 ?
                                this.Path1() :
                                null
                        }
                        <View style={stylesCustomerOrder.Payment_Box}>
                            <View style={stylesCustomerOrder.Payment_Box_Text}>
                                <IconFontAwesome5 name='mobile-alt' size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10
                                }]}>   IBanking / Mobile Banking </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                this.state.path1 != 2 ?
                                    this.setState({ path1: 2 }) :
                                    this.setState({ path1: 0 })
                            }}>
                                <IconEntypo name={this.state.path1 == 2 ? 'chevron-up' : 'chevron-down'} size={20} />
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.path1 == 2 ?
                                this.Path1() :
                                null
                        }
                        <View style={stylesCustomerOrder.Payment_Box}>
                            <View style={stylesCustomerOrder.Payment_Box_Text}>
                                <IconFontAwesome5 name='cc-mastercard' size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10
                                }]}>ผ่อนชำระผ่านบัตรเครดิต </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                this.state.path1 != 3 ?
                                    this.setState({ path1: 3 }) :
                                    this.setState({ path1: 0 })
                            }}>
                                <IconEntypo name={this.state.path1 == 3 ? 'chevron-up' : 'chevron-down'} size={20} />
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.path1 == 3 ?
                                this.Path1() :
                                null
                        }
                        <View style={stylesCustomerOrder.Payment_Box}>
                            <View style={stylesCustomerOrder.Payment_Box_Text}>
                                <IconAntDesign name='user' size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                    marginLeft: 10
                                }]}>ติดต่อชำระโดยตรงผ่าน FIN </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                this.state.path1 != 4 ?
                                    this.setState({ path1: 4 }) :
                                    this.setState({ path1: 0 })
                            }}>
                                <IconEntypo name={this.state.path1 == 4 ? 'chevron-up' : 'chevron-down'} size={20} />
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.path1 == 4 ?
                                this.Path1() :
                                null
                        }
                    </View>
                </BottomSheet> */}
        {/* <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={this.setModalVisibles.bind(this, !modalVisible)}>
                    <OmiseBox />
                </Modal>
                <View style={stylesCustomerOrder.Option_payment}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconFontAwesome5 name='money-bill' size={20} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> ตัวเลือกการชำระเงิน </Text> 
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> การชำระเงิน </Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.setModalVisibles(!modalVisible)}>
                        {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> เลือกวิธีการชำระเงิน</Text> 
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> ชำระเงิน</Text>
                    </TouchableOpacity>
                </View>*/}
        <View style={stylesCustomerOrder.Option_payment_Boxprice}>
            <View style={{ marginLeft: 25, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>รวมค่าสินค้า</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ค่าจัดส่ง</Text>
            </View>
            <View>
                <NumberFormat value={dataService.bill_data[0].total} displayType={'text'} thousandSeparator={true} prefix={'฿'}
                    renderText={value => <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: mainColor }]}>
                        {value}</Text>} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: mainColor, textAlign: 'right' }]}>Free</Text>
            </View>
        </View>
        <View style={stylesCustomerOrder.Option_payment}>
            <View style={stylesMain.FlexRow}>
                <IconMaterialCommunityIcons name='coin' size={25} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> FIN Coins ที่จะได้รับ</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>4 Coins</Text>
        </View>
        <View style={[stylesCustomerOrder.Option_payment, { height: 50 }]}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ขอออกใบกำกับภาษี</Text>
            </View>
            <View style={{ marginTop: -4, marginRight: -8 }}>
                <CheckBox size={30} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1}
                    onPress={() => setStateItem1()} />
            </View>
        </View>
        {item1 && <View style={stylesCustomerOrder.Account}>
            <View style={stylesCustomerOrder.Account_Box}>
                <View style={{ flexDirection: 'row', flex: 1, }}>
                    <IconEvilIcons name='location' size={30} />
                    <View style={{ marginLeft: 10, flex: 1, }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในใบกำกับภาษี</Text>
                        {data && <Text key={'customer_name'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
                            {data.customer_name} | {data.telephone_number}</Text>}
                        {data && <Text key={'address'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                        { paddingLeft: 8, width: '100%', }]}>{data.address}</Text>}
                    </View>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_Topic', setData: {
                        selectedIndex: 1, type: 'select', type_special: 'tax', updateData: value => getDatas(value),
                        no_invoice: data.no_invoice
                    }, navigation
                })}>
                    <IconEntypo name='chevron-right' size={35} style={stylesMain.ItemCenterVertical} />
                </TouchableOpacity>
            </View>
        </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Bar_payment
export let Bar_payment = (props) => {
    const { currentUser, dataService, navigation, no_invoice } = props;
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={{
        width: '100%', height: 50, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between',
        borderTopColor: '#ECECEC', borderTopWidth: 1
    }}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={value => setModalVisible(!modalVisible)}>
            <OmiseBox {...props} currentUser={currentUser} dataService={dataService} getData={value => setModalVisible(value)}
                no_invoice={no_invoice} total={dataService.bill_data[0].total} />
        </Modal>
        <View style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รวมการสั่งซื้อ</Text>
            <NumberFormat value={dataService.bill_data[0].total} displayType={'text'} thousandSeparator={true} prefix={'฿'}
                renderText={value => <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: mainColor, }]}>
                    {value}</Text>} />
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(!modalVisible)}>
            <View style={{ width: 150, height: 50, backgroundColor: mainColor, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>ชำระเงิน</Text>
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Bar_payment
export class OmiseBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            name: "",
            expiration_month: "",
            expiration_year: "",
            security_code: "",
            activePayment: false,
            activeLoading: false,
        };
    };
    async _createToken() {
        const { currentUser, navigation, no_invoice } = this.props;
        var dataBody
        try {
            const {
                number,
                name,
                expiration_month,
                expiration_year,
                security_code
            } = this.state;
            const data = await Omise.createToken({
                'card': {
                    'name': name,
                    'number': number,
                    'expiration_month': Number(expiration_month),
                    'expiration_year': Number(expiration_year),
                    'security_code': Number(security_code)
                }
            });
            dataBody = {
                id_customer: currentUser.id_customer,
                no_invoice,
                omiseToken: data.id,
                device: "mobile_device",
            };
        } catch (err) {
            let error = "";
            if (err instanceof Promise) {
                error = await err;
                error = error.message;
            } else {
                error = err.message;
            }
            Alert.alert("Error", error);
        } finally {
            this.setState({
                number: "",
                name: "",
                expiration_month: "",
                expiration_year: "",
                security_code: "",
                dataBody,
                activePayment: true,
                activeLoading: true,
            });
        };
    };
    getData = (dataService2) => {
        const { dataService, getData, navigation, no_invoice } = this.props;
        var data = dataService2.split('"');
        this.setState({ activeLoading: false, });
        data.map((value) => {
            var item = value.split(':');
            item.map((value2) => {
                var item2 = value2.split('}');
                item2.map((value3) => {
                    if (value3 == 'true') {
                        getData(false);
                        NavigationNavigateScreen({ goScreen: 'Customer_Complete_Order', setData: { no_invoice }, navigation });
                    };
                    if (value3 == 'false') {

                    };
                });
            });
        });
    };
    render() {
        const { total } = this.props;
        const {
            number,
            name,
            expiration_month,
            expiration_year,
            security_code,
            dataBody,
            activePayment,
            activeLoading,
        } = this.state;
        var uri = `${finip}/e15de57976dca/pay976dca`;
        activePayment && GetServices({
            uriPointer: uri, dataBody, showConsole: 'pay976dca', nojson: true, getDataSource: this.getData.bind(this)
        });
        return <View style={[stylesMain.ItemCenter, { height, width }]}>
            {activeLoading && <LoadingScreen />}
            <View style={{ height, width, backgroundColor: '#555555', opacity: 0.5, position: 'absolute' }}></View>
            <Content>
                <Form style={stylesMain.ItemCenterVertical, { height }}>
                    <View style={[stylesMain.ItemCenterVertical,
                    { height: 'auto', width: width * 0.85, backgroundColor: '#ECECEC', borderRadius: 8, }]}>
                        <View>
                            <View style={{ flexDirection: 'row', margin: 8 }}>
                                <View style={{ width: 50, height: 50 }}>
                                    <FastImage style={[stylesMain.BoxProduct2Image, { flex: 1 }]}
                                        source={require('../../../images/payment.png')} resizeMode={FastImage.resizeMode.contain} />
                                </View>
                                <View style={{ marginLeft: 16 }}>
                                    <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>http://mmnie.live/</Label>
                                    <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#3C414D' }]}>
                                        Secured by Omise</Label>
                                </View>
                            </View>
                            <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize3,
                            { margin: 14, marginTop: 0, marginBottom: 4 }]}>Credit / Debit</Label>
                            <Item style={{ width: width * 0.83 }}>
                                <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100 }]}>Card number</Label>
                                <Input defaultValue={number} style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}
                                    keyboardType='phone-pad' maxLength={16} onChangeText={(number) => this.setState({ number })} />
                            </Item>
                            <Item style={{ width: width * 0.83 }}>
                                <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100 }]}>Name on card</Label>
                                <Input defaultValue={name} style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}
                                    onChangeText={(name) => this.setState({ name })} />
                            </Item>
                            <Item style={{ width: width * 0.83 }}>
                                <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100 }]}>Expiry date</Label>
                                <Input placeholder="MM" maxLength={2} keyboardType='phone-pad' style={[stylesFont.FontFamilyBold,
                                stylesFont.FontSize5]}
                                    defaultValue={expiration_month} onChangeText={(expiration_month) =>
                                        this.setState({ expiration_month })} />
                                <Text>/</Text>
                                <Input placeholder="YY" maxLength={2} keyboardType='phone-pad' style={[stylesFont.FontFamilyBold,
                                stylesFont.FontSize5]}
                                    defaultValue={expiration_year} onChangeText={(expiration_year) =>
                                        this.setState({ expiration_year })} />
                            </Item>
                            <Item last style={{ width: width * 0.83 }}>
                                <Label style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100 }]}>Security code</Label>
                                <Input maxLength={3} secureTextEntry style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}
                                    defaultValue={security_code} onChangeText={(security_code) => this.setState({ security_code })} />
                            </Item>
                        </View>
                        <Button full onPress={() => this._createToken()}
                            style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, backgroundColor: mainColor }}>
                            <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>
                                <Text>ตกลงชำระค่าสินค้า {value} บาท</Text>} />
                        </Button>
                    </View>
                </Form>
            </Content>
        </View>;
    };
};