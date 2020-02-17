import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { TabBar } from '../tools/Tools';
import { PopularProduct } from '../StoreScreen';
import { ip } from '../../navigator/IpConfig';
import { AppBar1 } from '../MainScreen';
import { Order } from '../src_profile/Total_Order';

export const { width, height } = Dimensions.get('window');

export default class StoreMe_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='ประวัติการขาย' />
                <Button_bar navigation={this.props.navigation} SetselectedIndex={selectedIndex} />
            </SafeAreaView>
        );
    }
}

///------------------------------------------------------------------------------///

export class Button_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    PathList() {
        switch (this.state.selectedIndex) {
            case 0:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>รายการคำสั่งซื้อ</Text>
                        <Order_Me_Payment />
                        <Order_Me_Payment />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ที่ต้องจัดส่ง</Text>
                        <Order_Me_Prepare navigation={this.props.navigation} />
                        <Order_Me_Prepare navigation={this.props.navigation} />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>การจัดส่ง</Text>
                        <Order_Me_Deliver navigation={this.props.navigation} />
                        <Order_Me_Deliver navigation={this.props.navigation} />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>รอการรีวิว</Text>
                        <Order_Me_Reviews navigation={this.props.navigation} />
                        <Order_Me_Reviews navigation={this.props.navigation} />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}> สำเร็จแล้ว </Text>
                        <Order_Me_Already navigation={this.props.navigation} />
                        <Order_Me_Already navigation={this.props.navigation} />
                    </View>
                )
        }
    }
    render() {
        const { SetselectedIndex } = this.props
        const item = [{
            name: 'ยังไม่ชำระ'
        }, {
            name: 'ที่ต้องจัดส่ง'
        }, {
            name: 'การจัดส่ง'
        }, {
            name: 'รอการรีวิว'
        }, {
            name: 'สำเร็จแล้ว'
        }]
        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={stylesPro.Button_bar}>
                    <ScrollView horizontal>
                        <TabBar
                            sendData={this.updateIndex}
                            item={item}
                            // noLimit
                            SetValue={SetselectedIndex}
                            // widthBox={98}
                            activeColor={'#fff'}
                            activeFontColor={'#0A55A6'}
                            type='tag'
                        />
                    </ScrollView>
                </View>
                <ScrollView>
                    {this.PathList()}
                </ScrollView>
            </View>
        );
    }
}

///------------------------------------------------------------------------------///

export class Order_Me_Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#0A55A6' }]}>ยังไม่ชำระ</Text>
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ height: 50, borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, }}>
                        <TouchableOpacity>
                            <View style={{ height: 40, width: 100, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///

export class Order_Me_Deliver extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        <View style={stylesMain.FlexRow}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Setting_TopicStore', { selectedIndex: 11 })}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#06BBBB' }]}>Edit</Text>
                            </TouchableOpacity>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#D6D6D6' }]}>tnt1237174823403268</Text>
                        </View>
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
                        <View style={stylesPro.Order_Box_price}>
                            <View style={stylesPro.Order_Box_priceText}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                            </View>
                            <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMe_Detail_Order', { selectedIndex: 0 })}>
                                    <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------///

export class Order_Me_Prepare extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Setting_TopicStore', { selectedIndex: 10 })} >
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#06BBBB' }]}>เพิ่มเลขพัสดุ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
                        <View style={stylesPro.Order_Box_price}>
                            <View style={stylesPro.Order_Box_priceText}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                            </View>
                            <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMe_Detail_Order', { selectedIndex: 0 })}>
                                    <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------///
export class Order_Me_Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>รอการรีวิว</Text>
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
                        <View style={stylesPro.Order_Box_price}>
                            <View style={stylesPro.Order_Box_priceText}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                            </View>
                            <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMe_Detail_Order', { selectedIndex: 0 })}>
                                    <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///
export class Order_Me_Already extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#20BDA1' }]}>สำเร็จแล้ว</Text>
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
                        <View style={stylesPro.Order_Box_price}>
                            <View style={stylesPro.Order_Box_priceText}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                            </View>
                            <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMe_Detail_Order', { selectedIndex: 1 })}>
                                    <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///

export class StoreMe_Totel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={{ width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 5, }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> รวมการสั่งซื้อ (1 สินค้า): </Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿30,000</Text>
                </View>
                <View style={{ width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 5, }}>
                    <View style={{ width: 200, padding: 5, }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ชำระเงินโดยการโอนเงินผ่านธนาคาร 29-11-2019 </Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{ height: 40, width: 100, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                            <Text style={[stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 5, }}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconMaterialCommunityIcons name="car-estate" size={35} color='#B6B6B4' />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5, }]}>Status and tracking no</Text>
                    </View>
                    <Text style={{ marginTop: 5, }}>192312342342342ve6</Text>
                </View>
            </View>

        );
    }
}

///-----------------------------------------------------------------------------///

export class Cancel_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#0A55A6' }]}>ถูกยกเลิก</Text>
                    </View>
                    <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                        <View style={stylesMain.FlexRow}>
                            <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
                    </View>
                    <View style={{ height: 50, borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, }}>
                        <TouchableOpacity>
                            <View style={{ height: 40, width: 100, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

///-----------------------------------------------------------------------------///

