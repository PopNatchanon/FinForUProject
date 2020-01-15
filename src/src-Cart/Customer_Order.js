import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Picker,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/styleCart-src/styleCustomer_Order';
import FastImage from 'react-native-fast-image';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { CheckBox } from 'react-native-elements';
import { ip } from '../../navigator/IpConfig';
import BottomSheet from "react-native-raw-bottom-sheet";


export const { width, height } = Dimensions.get('window');

export default class Customer_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
                {/* <Appbar_New_account navigation={this.props.navigation} /> */}
                <Appbar_Order navigation={this.props.navigation} />
                <ScrollView>
                    <Account />
                    <Order />
                    <Option_payment navigation={this.props.navigation} />
                </ScrollView>
                <Bar_payment />
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Appbar_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Appbar_Order}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconEntypo name='chevron-left' size={35} />
                        <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 150, }}>สั่งซื้อสินค้า</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

///--------------------------------------------------------------------------///

export class Appbar_New_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Appbar_New_account}>
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

///--------------------------------------------------------------------------///

export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Account}>
                <View style={styles.Account_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconEvilIcons style={{ marginLeft: 10, }} name='location' size={30} />
                        <View style={{ marginLeft: 10, }}>
                            <Text>ที่อยู่ในการจัดส่ง</Text>
                            <Text>Tester ABC | 099-9999999</Text>
                            <Text>99 Sukhumvit, Bangkok, 10110</Text>
                        </View>
                    </View>
                    <IconEntypo name='chevron-right' size={35} />
                </View>
            </View>
        );
    }
}


///--------------------------------------------------------------------------///

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styles.Order}>
                    <View style={styles.Order_Head}>
                        <FastImage
                            style={styles.Order_Head_store}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={{ marginTop: 10, }}>PPoo</Text>
                    </View>
                    <View style={styles.Order_product}>
                        <View style={styles.Order_product_Box}></View>
                        <Text>ห้องพัก Deluxe Pool Villa </Text>
                        <View style={styles.Order_product_Boxprice}>
                            <Text>x 3</Text>
                            <View style={{ flexDirection: 'row', }}><Text style={{ fontSize: 10, color: '#C4C4C4' }}>฿20,000</Text><Text style={{ fontSize: 12, marginLeft: 10, color: '#0A55A6' }}>฿10,000</Text></View>
                        </View>
                    </View>
                    <View style={styles.Order_product_BoxText}>
                        <Text>Short Note</Text>
                        <Text style={{ fontSize: 14, color: '#C4C4C4' }}>สามารถฝากข้อความถึงผู้ขายได้</Text>
                    </View>
                    <View style={styles.Order_product_BoxText}>
                        <Text>รวมการสั่งซื้อ (1 สินค้า)</Text>
                        <Text style={{ fontSize: 18, color: '#0A55A6' }}>฿30,000</Text>
                    </View>
                </View>
                <View style={styles.Order}>
                    <View style={styles.Order_Head}>
                        <FastImage
                            style={styles.Order_Head_store}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={{ marginTop: 10, }}>PPoo</Text>
                    </View>
                    <View style={styles.Order_product}>
                        <View style={styles.Order_product_Box}></View>
                        <Text>ห้องพัก Deluxe Pool Villa </Text>
                        <View style={styles.Order_product_Boxprice}>
                            <Text>x 3</Text>
                            <View style={{ flexDirection: 'row', }}><Text style={{ fontSize: 10, color: '#C4C4C4' }}>฿20,000</Text><Text style={{ fontSize: 12, marginLeft: 10, color: '#0A55A6' }}>฿10,000</Text></View>
                        </View>
                    </View>
                    <View style={styles.Order_product_BoxText}>
                        <Text>Short Note</Text>
                        <Text style={{ fontSize: 14, color: '#C4C4C4' }}>สามารถฝากข้อความถึงผู้ขายได้</Text>
                    </View>
                    <View style={styles.Order_product_BoxText}>
                        <Text>รวมการสั่งซื้อ (1 สินค้า)</Text>
                        <Text style={{ fontSize: 18, color: '#0A55A6' }}>฿30,000</Text>
                    </View>
                </View>
            </View>


        );
    }
}

///--------------------------------------------------------------------------///

export class Option_payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // pathlist: 1,
        };
    }
    // PathList() {
    //     switch (this.state.pathlist) {
    //         case 0:
    //             return (
    //                 <Option_payment navigation={this.props.navigation} />
    //             )
    //         case 1:
    //             return (
    //                 <Payment_credit navigation={this.props.navigation} />
    //             )


    //     }
    // }
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
                        <Text style={{ fontSize: 18, marginBottom: 10, }}>เลือกวิธีการชำระเงิน</Text>
                        <View style={styles.Payment_Box}>
                            <View style={styles.Payment_Box_Text}>
                                <IconEntypo name='credit-card' size={20} />
                                <Text style={styles.Payment_Text}>บัตรเครดิต / เดบิต </Text>
                            </View>
                            {/* <CheckBox
                                size={20}
                                containerStyle={{ marginTop: -5 }}
                                checkedIcon='chevron-up'
                                uncheckedIcon='chevron-down'
                                checked={this.state.item1}
                                onPress={() => this.setState({ item1: !this.state.item1 })}
                            /> */}
                            <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ pathlist: 1 }) }} >
                                <IconEntypo name='chevron-down' size={20} />
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.Payment_Box}>
                            <View style={styles.Payment_Box_Text}>
                                <IconAntDesign name='plussquareo' size={15} />
                                <Text style={styles.Payment_Text}>เพิ่มบัตรเครดิต </Text>
                            </View>
                        </View> */}
                        <View style={styles.Payment_Box}>
                            <View style={styles.Payment_Box_Text}>
                                <IconFontAwesome5 name='mobile-alt' size={20} />
                                <Text style={styles.Payment_Text}>   IBanking / Mobile Banking </Text>
                            </View>
                            <IconEntypo name='chevron-down' size={20} />
                        </View>
                        <View style={styles.Payment_Box}>
                            <View style={styles.Payment_Box_Text}>
                                <IconFontAwesome5 name='cc-mastercard' size={20} />
                                <Text style={styles.Payment_Text}>ผ่อนชำระผ่านบัตรเครดิต </Text>
                            </View>
                            <IconEntypo name='chevron-down' size={20} />
                        </View>
                        <View style={styles.Payment_Box}>
                            <View style={styles.Payment_Box_Text}>
                                <IconAntDesign name='user' size={20} />
                                <Text style={styles.Payment_Text}>ติดต่อชำระโดยตรงผ่าน FIN </Text>
                            </View>
                            <IconEntypo name='chevron-down' size={20} />
                        </View>
                    </View>
                </BottomSheet>
                <View style={styles.Option_payment}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconFontAwesome5 name='money-bill' size={20} />
                        <Text>  ตัวเลือกการชำระเงิน </Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                        this.Payment.open();
                    }}>
                        <Text> เลือกวิธีการชำระเงิน</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.Option_payment_Boxprice}>
                    <View style={{ marginLeft: 25, }}>
                        <Text style={{ fontSize: 15, }}>รวมค่าสินค้า</Text>
                        <Text style={{ fontSize: 15, marginTop: 10, }}>ค่าจัดส่ง</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 18, color: '#0A55A6' }}>฿90,000</Text>
                        <Text style={{ fontSize: 18, color: '#0A55A6', marginTop: 10, }}>Free</Text>
                    </View>
                </View>
                <View style={styles.Option_payment}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconAntDesign name='copyright' size={20} />
                        <Text> FIN Coins ที่จะได้รับ</Text>
                    </View>
                    <Text>4 Coins</Text>
                </View>
            </View>

        );
    }
}
///--------------------------------------------------------------------------///

export class Payment_credit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Payment_Box}>
                <View style={styles.Payment_Box_Text}>
                    <IconAntDesign name='plussquareo' size={15} />
                    <Text style={styles.Payment_Text}>เพิ่มบัตรเครดิต </Text>
                </View>
            </View>
        );
    }
}



///--------------------------------------------------------------------------///

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
                    <Text>รวมการสั่งซื้อ</Text>
                    <Text style={{ fontSize: 18, color: '#0A55A6' }}>฿90,000</Text>
                </View>
                <TouchableOpacity>
                    <View style={{ width: 300, height: 50, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: '#FFF', fontSize: 15, }}>สั่งซื้อสินค้า</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
