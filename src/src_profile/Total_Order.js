///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
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
import { TabBar } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Total_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { height: 'auto' }]}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='การสั่งซื้อของฉัน' />
                <Button_bar navigation={this.props.navigation} SetselectedIndex={selectedIndex} />
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_bar
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
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>รายการคำสั่งซื้อ</Text>
                        <Order_Payment navigation={this.props.navigation} />
                        <Order />
                        <Order_Get navigation={this.props.navigation} />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>ที่ต้องชำระ</Text>
                        <Order_Payment navigation={this.props.navigation} />
                        <Order_Payment navigation={this.props.navigation} />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>เตรียมจัดส่ง</Text>
                        <Order_Sending navigation={this.props.navigation} />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}> ที่ต้องได้รับ </Text>
                        <Order_Get navigation={this.props.navigation} />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}> สำเร็จแล้ว </Text>
                        <Order_Already navigation={this.props.navigation} />
                    </View>
                )
        }
    }
    render() {
        const { SetselectedIndex } = this.props
        const item = [{
            name: 'ทั้งหมด'
        }, {
            name: 'ที่ต้องชำระ'
        }, {
            name: 'เตรียมจัดส่ง'
        }, {
            name: 'ที่ต้องได้รับ'
        }, {
            name: 'สำเร็จแล้ว'
        }]
        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={stylesProfileTopic.Button_bar}>
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
///----------------------------------------------------------------------------------------------->>>> Order
export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesProfileTopic.Order_BoxStore}>
                    <View style={stylesProfileTopic.Order_StorePro}></View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5, }]}>PPoo</Text>
                    <View style={stylesProfileTopic.Order_Box_Button}>
                        <TouchableOpacity>
                            <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทเลย</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1 }]}>
                                <Icons RightItem name="store" size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูร้านค้า</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={stylesProfileTopic.Order_Product}>
                    <View style={stylesMain.FlexRow}>
                        <View style={stylesProfileTopic.Order_Product_Pro}>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesProfileTopic.Order_Box_price}>
                    <View style={stylesProfileTopic.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity>
                            <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ซื้ออีกครั้ง</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Order_Payment
export class Order_Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <View style={stylesProfileTopic.Order_BoxStore}>
                        <FastImage style={stylesProfileTopic.Order_StorePro}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesProfileTopic.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Order_Product}>
                        <View style={stylesMain.FlexRow}>
                            <View style={stylesProfileTopic.Order_Product_Pro}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                    </View>
                    <View style={stylesProfileTopic.Order_Box_price}>
                        <View style={stylesProfileTopic.Order_Box_priceText}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                        </View>
                        <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ดำเนินการชำระเงิน</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CancelScreen', { selectedIndex: 1 })}>
                                <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยกเลิกสินค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Order_Sending
export class Order_Sending extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesProfileTopic.Order_BoxStore, { justifyContent: 'space-between' }]}>
                    <View style={stylesMain.FlexRow}>
                        <FastImage style={stylesProfileTopic.Order_StorePro}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesProfileTopic.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={stylesProfileTopic.Order_Product}>
                    <View style={stylesMain.FlexRow}>
                        <View style={stylesProfileTopic.Order_Product_Pro}>
                            <FastImage style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesProfileTopic.Order_Box_price}>
                    <View style={stylesProfileTopic.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>
                            ฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                            <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Order_Get
export class Order_Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesProfileTopic.Order_BoxStore, { justifyContent: 'space-between' }]}>
                    <View style={stylesMain.FlexRow}>
                        <FastImage style={stylesProfileTopic.Order_StorePro}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesProfileTopic.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#20BDA1', marginTop: 10, }]}>กำลังจัดส่ง</Text>
                </View>
                <View style={stylesProfileTopic.Order_Product}>
                    <View style={stylesMain.FlexRow}>
                        <View style={stylesProfileTopic.Order_Product_Pro}>
                            <FastImage style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesProfileTopic.Order_Box_price}>
                    <View style={stylesProfileTopic.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>
                            ฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                            <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Order_Already
export class Order_Already extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesProfileTopic.Order_BoxStore, { justifyContent: 'space-between' }]}>
                    <View style={stylesMain.FlexRow}>
                        <FastImage style={stylesProfileTopic.Order_StorePro}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesProfileTopic.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#20BDA1', marginTop: 10, }]}>
                        <IconFeather name='edit' size={20} />
                        เขียนรีวิว
                    </Text>
                </View>
                <View style={stylesProfileTopic.Order_Product}>
                    <View style={stylesMain.FlexRow}>
                        <View style={stylesProfileTopic.Order_Product_Pro}>
                            <FastImage style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesProfileTopic.Order_Box_price}>
                    <View style={stylesProfileTopic.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>
                            ฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesProfileTopic.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Return_products', { selectedIndex: 1 })}>
                            <View style={{ borderBottomColor: '#0A55A6', borderBottomWidth: 1, height: 20, }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>ส่งคำร้องคืนสินค้า</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                            <View style={[stylesProfileTopic.Order_Button, { borderWidth: 1, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}