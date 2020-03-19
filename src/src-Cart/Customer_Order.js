///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
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
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Customer_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow titleHead='สั่งซื้อสินค้า' navigation={this.props.navigation} />
                <ScrollView>
                    {/* <OmiseAPI /> */}
                    <Account />
                    <Order />
                    <Order />
                    <Order />
                    <Option_payment navigation={this.props.navigation} />
                </ScrollView>
                <Bar_payment navigation={this.props.navigation} />
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Appbar_New_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesCustomerOrder.Appbar_New_account}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Customer_account')}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconAntDesign style={{ marginLeft: 10, }} name='mail' size={30} />
                        <Text style={{ marginLeft: 10, fontSize: 15, marginTop: 5, }}>ที่อยู่ใหม่</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    render() {
        return (
            <View style={stylesCustomerOrder.Account}>
                <View style={stylesCustomerOrder.Account_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconEvilIcons style={{ marginLeft: 10, }} name='location' size={30} />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Tester ABC | 099-9999999</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>99 Sukhumvit, Bangkok, 10110</Text>
                        </View>
                    </View>
                    <IconEntypo name='chevron-right' size={35} />
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
        return (
            <View>
                <View style={stylesCustomerOrder.Order}>
                    <View style={stylesCustomerOrder.Order_Head}>
                        <FastImage
                            style={stylesCustomerOrder.Order_Head_store}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { marginTop: 10 }]}>PPoo</Text>
                    </View>
                    <View style={stylesCustomerOrder.Order_product}>
                        <View style={stylesCustomerOrder.Order_product_Box}>
                            <FastImage style={{ height: '100%', width: '100%', }}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-10-10-1570677650.png',
                                }}
                            />
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ห้องพัก Deluxe Pool Villa </Text>
                        <View style={stylesCustomerOrder.Order_product_Boxprice}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>x 3</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#C4C4C4' }]}>฿20,000</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10, color: '#0A55A6' }]}>฿10,000</Text></View>
                        </View>
                    </View>
                    <View style={stylesCustomerOrder.Order_product_BoxText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Short Note</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#C4C4C4' }]}>สามารถฝากข้อความถึงผู้ขายได้</Text>
                    </View>
                    <View style={stylesCustomerOrder.Order_product_BoxText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รวมการสั่งซื้อ (1 สินค้า)</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#0A55A6' }]}>฿30,000</Text>
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
                        <View style={[stylesCustomerOrder.Payment_Box_Text, { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
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
                        <View style={[stylesCustomerOrder.Payment_Box_Text, { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต</Text>
                        </View>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, marginTop: 10 }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                        <View style={[stylesCustomerOrder.Payment_Box_Text, { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, marginTop: 10 }]}>
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
                        <View style={[stylesCustomerOrder.Payment_Box_Text, { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
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
                        <View style={[stylesCustomerOrder.Payment_Box_Text, { width, height: 30, borderBottomColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                            <IconAntDesign name='plussquareo' size={15} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>เพิ่มบัตรเครดิต </Text>
                        </View>
                    </View>
                )
        }
    }
    render() {
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
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>   IBanking / Mobile Banking </Text>
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
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>ผ่อนชำระผ่านบัตรเครดิต </Text>
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
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>ติดต่อชำระโดยตรงผ่าน FIN </Text>
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
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>฿90,000</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>Free</Text>
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
        return (
            <View style={{ width: '100%', height: 50, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ margin: 5, justifyContent: 'flex-end', alignItems: 'flex-end', width: 150, }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>รวมการสั่งซื้อ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#0A55A6' }]}>฿90,000</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Customer_Complete_Order')}>
                    <View style={{ width: 300, height: 50, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สั่งซื้อสินค้า</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
