///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {
    Alert, Dimensions, SafeAreaView, ScrollView, StyleSheet,
    // Text,
    TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import BottomSheet from "react-native-raw-bottom-sheet";
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
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCustomerOrder from '../../style/styleCart-src/styleCustomer_Order';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { GetServices } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Customer_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIdAddress: false,
            activeReset: true,
        };
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
        this.setState({ dataService, activeReset: false })
    }
    getData2 = (id_address) => {
        const { navigation } = this.props
        const { currentUser, dataBody2, dataService, keycokie } = this.state
        var no_invoice = navigation.getParam('no_invoice')
        this.setState({
            dataBody2: {
                id_customer: currentUser && currentUser.id_customer,
                id_address,
                no_invoice: no_invoice ? no_invoice : 'FINV2520200402092923',
            }, activeIdAddress: true
        })
    }
    getData3 = (dataService2) => {
        this.setState({ dataService2, activeIdAddress: false, activeReset: true })
    }
    render() {
        const { navigation } = this.props
        const { activeReset, activeIdAddress, currentUser, dataBody2, dataService, keycokie } = this.state
        var no_invoice = navigation.getParam('no_invoice')
        var uri = finip + '/bill/bill_list';
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            no_invoice: no_invoice ? no_invoice : 'FINV2520200402092923',
        };
        var uri2 = finip + '/bill/update_bill_address';
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {[
                    currentUser && keycokie && currentUser.id_customer && activeReset == true &&
                    <GetServices uriPointer={uri} dataBody={dataBody} Authorization={keycokie}
                        // showConsole={'bill_list'}
                        getDataSource={this.getData.bind(this)} key={'bill_list'} />,
                    activeIdAddress == true &&
                    <GetServices uriPointer={uri2} dataBody={dataBody2} Authorization={keycokie}
                        showConsole={'update_bill_address'}
                        getDataSource={this.getData3.bind(this)} key={'update_bill_address'} />
                ]}
                <AppBar1 backArrow titleHead='สั่งซื้อสินค้า' navigation={navigation} />
                <ScrollView>
                    {[
                        dataService &&
                        <Account dataService={dataService} getData={this.getData2.bind(this)} navigation={navigation} key={'Account'} />,
                        dataService &&
                        dataService.list_cart.map((value, index) => { return <Order dataService={value} key={index} /> }),
                        dataService &&
                        <Option_payment dataService={dataService} navigation={navigation} key={'Option_payment'} />
                    ]}
                </ScrollView>
                {
                    dataService &&
                    <Bar_payment dataService={dataService} navigation={navigation} />
                }
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
    getData = (dataSelect) => {
        const { getData } = this.props
        getData(dataSelect)
    }
    render() {
        const { dataService, navigation } = this.props
        var data
        dataService.bill_data.map((value) => { return data = value })
        return (
            <View style={stylesCustomerOrder.Account}>
                <View style={stylesCustomerOrder.Account_Box}>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <IconEvilIcons name='location' size={30} />
                        <View style={{ marginLeft: 10, flex: 1, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
                                {data.customer_name} | {data.telephone_number}</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8, width: '100%', }]}>
                                {data.address}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Setting_Topic', {
                        selectedIndex: 1, dataService: dataService.list_address, type: 'select', updateData: this.getData.bind(this)
                    })}>
                        <IconEntypo name='chevron-right' size={35} style={stylesMain.ItemCenterVertical} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService } = this.props
        const dataMySQL = finip + '/' + dataService.image_path + '/' + dataService.image_product
        console.log('dataService')
        console.log(dataService)
        return (
            <View>
                <View style={stylesCustomerOrder.Order}>
                    <View style={stylesCustomerOrder.Order_Head}>
                        <FastImage
                            style={[stylesCustomerOrder.Order_Head_store, stylesMain.ItemCenterVertical]}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, stylesMain.ItemCenterVertical, {
                            marginLeft: 10
                        }]}>{dataService.store_name}</Text>
                    </View>
                    <View style={stylesCustomerOrder.Order_product}>
                        <View style={stylesCustomerOrder.Order_product_Box}>
                            <FastImage style={{ height: '100%', width: '100%', }}
                                source={{
                                    uri: dataMySQL,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.product} </Text>
                        <View style={stylesCustomerOrder.Order_product_Boxprice}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'right' }]}>
                                x {dataService.quantity}</Text>
                            <NumberFormat
                                value={dataService.price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'฿'}
                                renderText={value =>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, {
                                        marginLeft: 10, color: '#0A55A6', textAlign: 'right',
                                    }]}>
                                        {value}</Text>
                                } />
                            {/* <View style={{ flexDirection: 'row', textAlign: 'right', }}>
                            </View> */}
                        </View>
                    </View>
                    <View style={stylesCustomerOrder.Order_product_BoxText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Short Note</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#C4C4C4' }]}>
                            สามารถฝากข้อความถึงผู้ขายได้</Text>
                    </View>
                    <View style={stylesCustomerOrder.Order_product_BoxText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รวมการสั่งซื้อ (1 สินค้า)</Text>
                        <NumberFormat
                            value={dataService.p_total}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#0A55A6' }]}>
                                    {value}</Text>
                            } />
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Option_payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path1: 0,
        };
    }
    Path1() {
        switch (this.state.path1) {
            case 0:
                return (
                    null
                )
            case 1:
                return (
                    <View style={{
                        width,
                        borderColor: '#EAEAEA',
                        borderWidth: 1,
                        paddingLeft: 50,
                        paddingTop: 10,
                    }}>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, {
                            width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1,
                        }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                    </View>
                )
            case 2:
                return (
                    <View style={{
                        width,
                        borderColor: '#EAEAEA',
                        borderWidth: 1,
                        paddingLeft: 50,
                        paddingTop: 10,
                    }}>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, {
                            width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1,
                        }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต</Text>
                        </View>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, {
                            width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, marginTop: 10
                        }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, {
                            width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, marginTop: 10
                        }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                    </View>
                )
            case 3:
                return (
                    <View style={{
                        width,
                        borderColor: '#EAEAEA',
                        borderWidth: 1,
                        paddingLeft: 50,
                        paddingTop: 10,
                    }}>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, {
                            width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1,
                        }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                    </View>
                )
            case 4:
                return (
                    <View style={{
                        width,
                        borderColor: '#EAEAEA',
                        borderWidth: 1,
                        paddingLeft: 50,
                        paddingTop: 10,
                    }}>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, {
                            width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1,
                        }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                    </View>
                )
        }
    }
    render() {
        const { dataService } = this.props
        return (
            <View>
                <BottomSheet
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
                    }}
                >
                    <View style={{ alignItems: 'center', height: 'auto', }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginBottom: 10 }]}>เลือกวิธีการชำระเงิน</Text>
                        <View style={stylesCustomerOrder.Payment_Box}>
                            <View style={stylesCustomerOrder.Payment_Box_Text}>
                                <IconEntypo name='credit-card' size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>บัตรเครดิต / เดบิต </Text>
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
                </BottomSheet>
                <View style={stylesCustomerOrder.Option_payment}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconFontAwesome5 name='money-bill' size={20} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> ตัวเลือกการชำระเงิน </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.Payment.open();
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> เลือกวิธีการชำระเงิน</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesCustomerOrder.Option_payment_Boxprice}>
                    <View style={{ marginLeft: 25, }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>รวมค่าสินค้า</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ค่าจัดส่ง</Text>
                    </View>
                    <View>
                        <NumberFormat
                            value={dataService.bill_data[0].total}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>
                                    {value}</Text>
                            } />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6', textAlign: 'right' }]}>Free</Text>
                    </View>
                </View>
                <View style={stylesCustomerOrder.Option_payment}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconAntDesign name='copyright' size={20} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> FIN Coins ที่จะได้รับ</Text>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>4 Coins</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Bar_payment
export class Bar_payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService, navigation } = this.props
        return (
            <View style={{ width: '100%', height: 50, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ width: 150, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รวมการสั่งซื้อ</Text>
                    <NumberFormat
                        value={dataService.bill_data[0].total}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'฿'}
                        renderText={value =>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#0A55A6' }]}>
                                {value}</Text>
                        } />
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.push('Customer_Complete_Order')}>
                    <View style={{ width: 300, height: 50, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สั่งซื้อสินค้า</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Bar_payment
type States = {
    number: string,
    name: string,
    expiration_month: string,
    expiration_year: string,
    security_code: string
};
type Props = {};
export class App extends Component<Props, States> {

    state = {
        number: "",
        name: "",
        expiration_month: "",
        expiration_year: "",
        security_code: ""
    };

    async _createToken() {
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
            Alert.alert("Token", "token = " + data.id);
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
                security_code: ""
            });
        }
    }
    render() {
        const {
            number,
            name,
            expiration_month,
            expiration_year,
            security_code
        } = this.state;

        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item inlineLabel>
                            <Label style={styles.label}>Card number</Label>
                            <Input defaultValue={number} onChangeText={(number) => this.setState({ number })} />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.label}>Name on card</Label>
                            <Input defaultValue={name} onChangeText={(name) => this.setState({ name })} />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.label}>Expiry date</Label>
                            <Input placeholder="MM" maxLength={2}
                                defaultValue={expiration_month}
                                onChangeText={(expiration_month) => this.setState({ expiration_month })} />
                            <Text>/</Text>
                            <Input placeholder="YY" maxLength={4}
                                defaultValue={expiration_year}
                                onChangeText={(expiration_year) => this.setState({ expiration_year })} />
                        </Item>
                        <Item inlineLabel last>
                            <Label style={styles.label}>Security code</Label>
                            <Input maxLength={3} secureTextEntry
                                defaultValue={security_code}
                                onChangeText={(security_code) => this.setState({ security_code })}
                            />
                        </Item>
                        <Button full onPress={this._createToken.bind(this)}>
                            <Text>Create a token</Text>
                        </Button>
                    </Form>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        width: 130
    }
});