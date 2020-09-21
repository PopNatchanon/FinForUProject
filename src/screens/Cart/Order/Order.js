///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Alert, Dimensions, Modal, SafeAreaView, ScrollView,/* Text,*/ TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { height, width, } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Omise from 'omise-react-native';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCustomerOrder from '../../../style/styleCart-src/styleCustomer_Order';
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
import { GetServices, LoadingScreen, GetData } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { Accounts, Account_Box, Orders, Order_Head, Order_Head_store, Order_product, Order_product_Box, Order_product_Boxprice,
    Order_product_BoxText, Option_payments, Option_payment_Boxprice, Payment_Box, Payment_Box_Text, } = stylesCustomerOrder;
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize4, FontSize5, FontSize6 } = stylesFont;
const { BoxProduct2Image, FlexRow, ItemCenter, ItemCenterVertical, SafeAreaViews } = stylesMain;
Omise.config('pkey_test_5ifbd6uqmxyoddk5u9w', '2019-05-29');
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Order);
function Order(props) {
    const { route } = props;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeIdAddress, setActiveIdAddress] = useState(false);
    const [activeReset, setActiveReset] = useState(true);
    const [activeAddressChange, setActiveAddressChange] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataBody2, setDataBody2] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const dataBody = { id_customer: currentUser?.id_customer, no_invoice, };
    const no_invoice = route.params?.no_invoice;
    const Props = { ...props, currentUser, dataService, no_invoice }
    const uri = `${finip}/bill/bill_list`;
    const uri2 = `${finip}/bill/update_bill_address`;
    const getData = (v) => { setActiveReset(false); setDataService(v); };
    const getData2 = (v) => {
        setActiveIdAddress(true);
        setDataBody2({ id_customer: currentUser?.id_customer, id_address: v, no_invoice, });
    };
    const getData3 = (v) => { setActiveIdAddress(false); setActiveReset(true); setDataService2(v); };
    const getSource = (v) => {
        setActiveGetSource(false); setActiveIdAddress(true); setCokie(v.keycokie); setCurrentUser(v.currentUser);
    };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true });
    }, [activeGetSource]);
    useEffect(() => {
        !activeGetSource && activeIdAddress && cokie && currentUser && no_invoice && GetServices({
            Authorization: cokie, dataBody: dataBody2, getDataSource: (v) => getData3(v), showConsole: 'update_bill_address', uriPointer: uri2,
        });
    }, [!activeGetSource && activeIdAddress && cokie && currentUser && no_invoice]);
    useEffect(() => {
        !activeGetSource && activeReset && cokie && currentUser && no_invoice && GetServices({
            Authorization: cokie, dataBody: dataBody, getDataSource: (v) => getData(v), uriPointer: uri,
        });
    }, [!activeGetSource && activeReset && cokie && currentUser && no_invoice]);
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...Props} backArrow titleHead='สั่งซื้อสินค้า' />
        <ScrollList {...Props} />
        <ExitApp {...Props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { dataService, } = props;
    return <View>
        <ScrollView>
            <Account {...props} getData={(v) => getData2(v)} />
            {dataService?.list_cart?.map((v, i) => <OrderBox dataService={v} key={i} />)}
            <Option_payment {...props} />
        </ScrollView>
        <Bar_payment {...props} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export const Account = (props) => {
    const { dataService, getData, } = props;
    let data;
    dataService?.bill_data?.map((v) => { return data = v });
    return <View style={Accounts}>
        <View style={Account_Box}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <IconEvilIcons name='location' size={30} />
                <View style={{ flex: 1, marginLeft: 10, }}>
                    <Text style={[FontFamilyText, FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
                    {data && [
                        <Text key={'customer_name'} style={[FontFamilyText, FontSize5, { paddingLeft: 8 }]}>
                            {data.customer_name} | {data.telephone_number}</Text>,
                        <Text key={'address'} style={[FontFamilyText, FontSize5, { paddingLeft: 8, width: '100%', }]}>{data.address}</Text>
                    ]}
                </View>
            </View>
            <TouchableOpacity onPress={() => NavigationNavigate({
                ...props, goScreen: 'Customer_Setting_Edit_Address', setData: {
                    no_invoice: data.no_invoice, type: 'select', updateData: (v) => getData(v),
                },
            })}>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={ItemCenterVertical} />
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export const OrderBox = (props) => {
    const { dataService } = props;
    const Image1 = { uri: `${finip}/${dataService.image_path}/${dataService.image_product}`, };
    return <View>
        <View style={Orders}>
            <View style={Order_Head}>
                {/* <FastImage
                            style={[Order_Head_store, ItemCenterVertical]}
                            source={{
                                uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop1.jpg`,
                            }}
                        /> */}
                <Text style={[FontFamilyText, FontSize4, ItemCenterVertical, { marginLeft: 10 }]}>{dataService.store_name}</Text>
            </View>
            <View style={[Order_product]}>
                <View style={Order_product_Box}>
                    <FastImage resizeMode={FastImage.resizeMode.contain} source={Image1} style={{ height: '100%', width: '100%', }} />
                </View>
                <Text style={[FontFamilyText, FontSize5, { marginLeft: 4, width: '70%' }]}>{dataService.product}</Text>
                <View style={[Order_product_Boxprice, { marginLeft: -45 * (width / 120) }]}>
                    <Text style={[FontFamilyBold, FontSize5, { textAlign: 'right' }]}>x {dataService.quantity}</Text>
                    <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v) => <Text style={[FontFamilyBold, FontSize6,
                        { color: mainColor, marginLeft: 10, textAlign: 'right', }]}>{v}</Text>} thousandSeparator value={dataService.price} />
                    {/* <View style={{ flexDirection: 'row', textAlign: 'right', }}>
                            </View> */}
                </View>
            </View>
            {/* <View style={Order_product_BoxText}>
                        <Text style={[FontFamilyText, FontSize5]}>Short Note</Text>
                        <Text style={[FontFamilyText, FontSize5, { color: '#C4C4C4' }]}>
                            สามารถฝากข้อความถึงผู้ขายได้</Text>
                    </View> */}
            <View style={Order_product_BoxText}>
                <Text style={[FontFamilyText, FontSize5]}>รวมการสั่งซื้อ (1 สินค้า)</Text>
                <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v) => <Text style={[FontFamilyBold, FontSize3,
                    { color: mainColor }]}>{v}</Text>} thousandSeparator value={dataService.p_total} />
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Main
export const Option_payment = (props) => {
    const { dataService, getData } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [path1, setPath1] = useState(0);
    const [item1, setItem1] = useState(false);
    let data;
    dataService?.bill_data?.map((v) => { return data = v });
    const setModalVisibles = (v) => { setModalVisible(v); };
    const setStateItem1 = () => { setItem1(!item1); };
    const getDatas = (v) => { getData(v); };
    const Path1 = () => {
        switch (path1) {
            case 0:
                return null;
            case 1:
                return <View style={{ borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, width, }}>
                    <View style={[Payment_Box_Text,
                        { borderBottomColor: '#EAEAEA', borderBottomWidth: 1, height: 30, width, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>
            case 2:
                return <View style={{ borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, width, }}>
                    <View style={[Payment_Box_Text,
                        { borderBottomColor: '#EAEAEA', borderBottomWidth: 1, height: 30, width, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต</Text>
                    </View>
                    <View style={[Payment_Box_Text,
                        { borderBottomColor: '#EAEAEA', borderBottomWidth: 1, height: 30, marginTop: 10, width }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                    <View style={[Payment_Box_Text,
                        { borderBottomColor: '#EAEAEA', borderBottomWidth: 1, height: 30, marginTop: 10, width, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>;
            case 3:
                return <View style={{ borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, width, }}>
                    <View style={[Payment_Box_Text,
                        { borderBottomColor: '#EAEAEA', borderBottomWidth: 1, height: 30, width, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                    </View>
                </View>;
            case 4:
                return <View style={{ borderColor: '#EAEAEA', borderWidth: 1, paddingLeft: 50, paddingTop: 10, width, }}>
                    <View style={[Payment_Box_Text,
                        { borderBottomColor: '#EAEAEA', borderBottomWidth: 1, height: 30, width, }]}>
                        <IconAntDesign name='plussquareo' size={15} />
                        <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
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
                        <Text style={[FontFamilyBold, FontSize4, { marginBottom: 10 }]}>เลือกวิธีการชำระเงิน</Text>
                        <View style={Payment_Box}>
                            <View style={Payment_Box_Text}>
                                <IconEntypo name='credit-card' size={20} />
                                <Text style={[FontFamilyText, FontSize5, { marginLeft: 10 }]}>
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
                        <View style={Payment_Box}>
                            <View style={Payment_Box_Text}>
                                <IconFontAwesome5 name='mobile-alt' size={20} />
                                <Text style={[FontFamilyText, FontSize5, {
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
                        <View style={Payment_Box}>
                            <View style={Payment_Box_Text}>
                                <IconFontAwesome5 name='cc-mastercard' size={20} />
                                <Text style={[FontFamilyText, FontSize5, {
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
                        <View style={Payment_Box}>
                            <View style={Payment_Box_Text}>
                                <IconAntDesign name='user' size={20} />
                                <Text style={[FontFamilyText, FontSize5, {
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
                    transparent
                    visible={modalVisible}
                    onRequestClose={this.setModalVisibles.bind(this, !modalVisible)}>
                    <OmiseBox />
                </Modal>
                <View style={Option_payments}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconFontAwesome5 name='money-bill' size={20} />
                        <Text style={[FontFamilyText, FontSize4]}> ตัวเลือกการชำระเงิน </Text> 
                        <Text style={[FontFamilyText, FontSize4]}> การชำระเงิน </Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.setModalVisibles(!modalVisible)}>
                        {/* <Text style={[FontFamilyText, FontSize4]}> เลือกวิธีการชำระเงิน</Text> 
                        <Text style={[FontFamilyText, FontSize4]}> ชำระเงิน</Text>
                    </TouchableOpacity>
                </View>*/}
        <View style={Option_payment_Boxprice}>
            <View style={{ marginLeft: 25, }}>
                <Text style={[FontFamilyText, FontSize4]}>รวมค่าสินค้า</Text>
                <Text style={[FontFamilyText, FontSize4]}>ค่าจัดส่ง</Text>
            </View>
            <View>
                <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v) => <Text style={[FontFamilyBold, FontSize4,
                    { color: mainColor }]} thousandSeparator value={dataService?.bill_data[0]?.total}> {v}</Text>} />
                <Text style={[FontFamilyBold, FontSize4, { color: mainColor, textAlign: 'right' }]}>Free</Text>
            </View>
        </View>
        <View style={Option_payments}>
            <View style={FlexRow}>
                <IconMaterialCommunityIcons name='coin' size={25} />
                <Text style={[FontFamilyText, FontSize4]}> FIN Coins ที่จะได้รับ</Text>
            </View>
            <Text style={[FontFamilyText, FontSize4]}>4 Coins</Text>
        </View>
        <View style={[Option_payments, { height: 50 }]}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={[FontFamilyText, FontSize4]}>ขอออกใบกำกับภาษี</Text>
            </View>
            <View style={{ marginRight: -8, marginTop: -4, }}>
                <CheckBox checked={item1} checkedColor='#95F29F' checkedIcon='toggle-on' uncheckedIcon='toggle-off'
                    onPress={() => setStateItem1()} size={30} />
            </View>
        </View>
        {item1 && <View style={Accounts}>
            <View style={Account_Box}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <IconEvilIcons name='location' size={30} />
                    <View style={{ flex: 1, marginLeft: 10, }}>
                        <Text style={[FontFamilyText, FontSize5]}>ที่อยู่ในใบกำกับภาษี</Text>
                        {data && <Text key={'customer_name'} style={[FontFamilyText, FontSize5, { paddingLeft: 8 }]}>
                            {data.customer_name} | {data.telephone_number}</Text>}
                        {data && <Text key={'address'} style={[FontFamilyText, FontSize5, { paddingLeft: 8, width: '100%', }]}>
                            {data.address}</Text>}
                    </View>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigate({
                    ...props, goScreen: 'Customer_Setting_Edit_Address', setData: {
                        type: 'select', type_special: 'tax', updateData: (v) => getDatas(v), no_invoice: data.no_invoice
                    },
                })}>
                    <IconEntypo name='chevron-right' size={35} style={ItemCenterVertical} />
                </TouchableOpacity>
            </View>
        </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Bar_payment
export let Bar_payment = (props) => {
    const { currentUser, dataService, no_invoice } = props;
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={{
        backgroundColor: '#FFF', borderTopColor: '#ECECEC', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-between',
        height: 50, width: '100%',
    }}>
        <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={(v) => setModalVisible(!modalVisible)}>
            <OmiseBox {...props} currentUser={currentUser} dataService={dataService} getData={(v) => setModalVisible(v)}
                no_invoice={no_invoice} total={dataService?.bill_data[0]?.total} />
        </Modal>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 200, }}>
            <Text style={[FontFamilyText, FontSize5]}>รวมการสั่งซื้อ</Text>
            <NumberFormat displayType={'text'} prefix={'฿'} renderText={(v) => <Text style={[FontFamilyBold, FontSize3,
                { color: mainColor, }]}>{v}</Text>} thousandSeparator value={dataService?.bill_data[0]?.total} />
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(!modalVisible)}>
            <View style={{ width: 150, height: 50, backgroundColor: mainColor, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={[FontFamilyText, FontSize4, { color: '#FFFFFF' }]}>ชำระเงิน</Text>
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Bar_payment
export class OmiseBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePayment: false, activeLoading: false, expiration_month: "", expiration_year: "", name: "", number: "", security_code: "",
        };
    };
    async _createToken() {
        const { currentUser, no_invoice } = this.props;
        var dataBody
        try {
            const { expiration_month, expiration_year, name, number, security_code } = this.state;
            const data = await Omise.createToken({
                'card': {
                    'expiration_month': Number(expiration_month), 'expiration_year': Number(expiration_year), 'name': name, 'number': number,
                    'security_code': Number(security_code)
                }
            });
            dataBody = { device: "mobile_device", id_customer: currentUser.id_customer, no_invoice, omiseToken: data.id, };
        } catch (err) {
            let error = "";
            if (err instanceof Promise) { error = await err; error = error.message; }
            else { error = err.message; }
            Alert.alert("Error", error);
        } finally {
            this.setState({
                activePayment: true, activeLoading: true, dataBody, expiration_month: "", expiration_year: "", name: "", number: "",
                security_code: "",
            });
        };
    };
    getData = (dataService2) => {
        const { getData, no_invoice } = this.props;
        let d = dataService2.split('"');
        this.setState({ activeLoading: false, });
        d.map((v) => {
            let d2 = v.split(':'); d2.map((v2) => {
                let d3 = v2.split('}'); d3.map((v3) => {
                    if (v3 == 'true') {
                        getData(false); NavigationNavigate({ ...this.props, goScreen: 'Cart_CompleteOrder', setData: { no_invoice }, });
                    };
                    if (v3 == 'false') { };
                });
            });
        });
    };
    render() {
        const { total } = this.props;
        const { activeLoading, activePayment, dataBody, expiration_month, expiration_year, name, number, security_code, } = this.state;
        const uri = `${finip}/e15de57976dca/pay976dca`;
        activePayment &&
            GetServices({ dataBody, getDataSource: this.getData.bind(this), nojson: true, showConsole: 'pay976dca', uriPointer: uri, });
        const Image1 = require('../../../../images/payment.png');
        return <View style={[ItemCenter, { height, width }]}>
            {activeLoading && <LoadingScreen />}
            <View style={{ backgroundColor: '#555555', height, opacity: 0.5, position: 'absolute', width, }} />
            <Content>
                <Form style={ItemCenterVertical, { height }}>
                    <View style={[ItemCenterVertical,
                        { height: 'auto', width: width * 0.85, backgroundColor: '#ECECEC', borderRadius: 8, }]}>
                        <View>
                            <View style={{ flexDirection: 'row', margin: 8 }}>
                                <View style={{ height: 50, width: 50, }}>
                                    <FastImage resizeMode={FastImage.resizeMode.contain} source={Image1} style={[BoxProduct2Image,
                                        { flex: 1 }]} />
                                </View>
                                <View style={{ marginLeft: 16 }}>
                                    <Label style={[FontFamilyBold, FontSize3]}>http://mmnie.live/</Label>
                                    <Label style={[FontFamilyBold, FontSize4, { color: '#3C414D' }]}>Secured by Omise</Label>
                                </View>
                            </View>
                            <Label style={[FontFamilyBold, FontSize3, { margin: 14, marginBottom: 4, marginTop: 0, }]}>Credit / Debit</Label>
                            <Item style={{ width: width * 0.83 }}>
                                <Label style={[FontFamilyBold, FontSize5, { width: 100 }]}>Card number</Label>
                                <Input defaultValue={number} keyboardType='phone-pad' maxLength={16} onChangeText={(v) =>
                                    this.setState({ number: v })} style={[FontFamilyBold, FontSize5]} />
                            </Item>
                            <Item style={{ width: width * 0.83 }}>
                                <Label style={[FontFamilyBold, FontSize5, { width: 100 }]}>Name on card</Label>
                                <Input defaultValue={name} onChangeText={(v) => this.setState({ name: v })} style={[FontFamilyBold,
                                    FontSize5]} />
                            </Item>
                            <Item style={{ width: width * 0.83 }}>
                                <Label style={[FontFamilyBold, FontSize5, { width: 100 }]}>Expiry date</Label>
                                <Input defaultValue={expiration_month} keyboardType='phone-pad' maxLength={2} onChangeText={(v) =>
                                    this.setState({ expiration_month: v })} placeholder="MM" style={[FontFamilyBold, FontSize5]} />
                                <Text>/</Text>
                                <Input defaultValue={expiration_year} keyboardType='phone-pad' maxLength={2} onChangeText={(v) =>
                                    this.setState({ expiration_year: v })} placeholder="YY" style={[FontFamilyBold, FontSize5]} />
                            </Item>
                            <Item last style={{ width: width * 0.83 }}>
                                <Label style={[FontFamilyBold, FontSize5, { width: 100 }]}>Security code</Label>
                                <Input defaultValue={security_code} maxLength={3} onChangeText={(v) => this.setState({ security_code: v })} secureTextEntry style={[FontFamilyBold, FontSize5]} />
                            </Item>
                        </View>
                        <Button full onPress={() => this._createToken()}
                            style={{ backgroundColor: mainColor, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }}>
                            <NumberFormat displayType={'text'} prefix={''} renderText={(v2) => <Text>ตกลงชำระค่าสินค้า {v2} บาท</Text>}
                                thousandSeparator value={total} />
                        </Button>
                    </View>
                </Form>
            </Content>
        </View>;
    };
};