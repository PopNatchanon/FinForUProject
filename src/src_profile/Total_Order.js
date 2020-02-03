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
    Picker,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { TabBar } from '../tools/Tools';
import { Appbar } from './LatestScreen';

export default class Total_Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        return (
            <SafeAreaView style={[styleMain.SafeAreaView, { height: 'auto' }]}>
                <Appbar navigation={this.props.navigation} Title='การสั่งซื้อของฉัน' />
                <Button_bar navigation={this.props.navigation} SetselectedIndex={selectedIndex} />
            </SafeAreaView>
        );
    }
}

///------------------------------------------------------------------------------------///

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
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, marginTop: 10, }]}>รายการคำสั่งซื้อ</Text>
                        <Order_Payment navigation={this.props.navigation} />
                        <Order />
                        <Order_Get navigation={this.props.navigation} />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, marginTop: 10, }]}>ที่ต้องชำระ</Text>
                        <Order_Payment navigation={this.props.navigation} />
                        <Order_Payment navigation={this.props.navigation}/>
                    </View>
                )
            case 2:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, marginTop: 10, }]}>เตรียมจัดส่ง</Text>
                        <Order_Sending navigation={this.props.navigation} />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, marginTop: 10, }]}> ที่ต้องได้รับ </Text>
                        <Order_Get navigation={this.props.navigation} />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, marginTop: 10, }]}> สำเร็จแล้ว </Text>
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
            <View style={styleMain.SafeAreaView}>
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

///------------------------------------------------------------------------------------///

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styleMain.FrameBackground}>
                <View style={stylesPro.Order_BoxStore}>
                    <View style={stylesPro.Order_StorePro}></View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { margin: 5, }]}>PPoo</Text>
                    <View style={stylesPro.Order_Box_Button}>
                        <TouchableOpacity>
                            <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>แชทเลย</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[stylesPro.Order_Button, { borderWidth: 1 }]}>
                                <Icons RightItem name="store" size={20} />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูร้านค้า</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={stylesPro.Order_Product}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_Product_Pro}></View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesPro.Order_Box_price}>
                    <View style={stylesPro.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity>
                            <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>ซื้ออีกครั้ง</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

///------------------------------------------------------------------------------------///

export class Order_Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styleMain.FrameBackground}>
                    <View style={stylesPro.Order_BoxStore}>
                        <View style={stylesPro.Order_StorePro}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesPro.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={stylesPro.Order_Product}>
                        <View style={styleMain.FlexRow}>
                            <View style={stylesPro.Order_Product_Pro}></View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                                <Text>x 1</Text>
                            </View>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                    </View>
                    <View style={stylesPro.Order_Box_price}>
                        <View style={stylesPro.Order_Box_priceText}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                        </View>
                        <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>ดำเนินการชำระเงิน</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('CancelScreen',{selectedIndex:1})}>
                                <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ยกเลิกสินค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------------///

export class Order_Sending extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styleMain.FrameBackground}>
                <View style={[stylesPro.Order_BoxStore, { justifyContent: 'space-between' }]}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_StorePro}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesPro.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={stylesPro.Order_Product}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_Product_Pro}></View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesPro.Order_Box_price}>
                    <View style={stylesPro.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                            <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูรายละเอียด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}




///------------------------------------------------------------------------------------///

export class Order_Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styleMain.FrameBackground}>
                <View style={[stylesPro.Order_BoxStore, { justifyContent: 'space-between' }]}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_StorePro}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesPro.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#20BDA1', marginTop: 10, }]}>กำลังจัดส่ง</Text>
                </View>
                <View style={stylesPro.Order_Product}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_Product_Pro}></View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesPro.Order_Box_price}>
                    <View style={stylesPro.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                            <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูรายละเอียด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------------///

export class Order_Already extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styleMain.FrameBackground}>
                <View style={[stylesPro.Order_BoxStore, { justifyContent: 'space-between' }]}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_StorePro}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { margin: 5, }]}>PPoo</Text>
                        <View style={stylesPro.Order_Box_Button}>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                                    <IconAntDesign RightItem name="wechat" size={25} color='#FFFFFF' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>แชทเลย</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[stylesPro.Order_Button, { borderWidth: 1 }]}>
                                    <Icons RightItem name="store" size={20} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูร้านค้า</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#20BDA1', marginTop: 10, }]}>
                        <IconFeather name='edit' size={20} />
                        เขียนรีวิว
                    </Text>
                </View>
                <View style={stylesPro.Order_Product}>
                    <View style={styleMain.FlexRow}>
                        <View style={stylesPro.Order_Product_Pro}></View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text>x 1</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
                </View>
                <View style={stylesPro.Order_Box_price}>
                    <View style={stylesPro.Order_Box_priceText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
                    </View>
                    <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Return_products',{selectedIndex:1})}>
                            <View style={{ borderBottomColor: '#0A55A6', borderBottomWidth: 1, height: 20, }}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#0A55A6' }]}>ส่งคำร้องคืนสินค้า</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Order_Detail')}>
                            <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>ดูรายละเอียด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

