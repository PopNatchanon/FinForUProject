///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import FastImage from 'react-native-fast-image';
import { CheckBox } from 'react-native-elements';
import PINCode from '@haskkor/react-native-pincode';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { TabBar, NavigationNavigateScreen, GetData, GetServices } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

export default class Seller_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetSource: true,
        };
    }
    componentDidMount() {
        const { activeGetSource, } = this.state
        activeGetSource == true && GetData({ getCokie: true, getUser: true, getSource: this.getSource.bind(this) })
    }
    getSource = (value) => {
        this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie, activeLogin: value.activeLogin });
    };
    PathList() {
        const { navigation } = this.props
        const { cokie, currentUser } = this.state
        const selectedIndex = navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='จัดการโฆษณา' />
                        <Seller_Advertisement backArrow navigation={navigation} />
                    </>
                )
            case 1:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='สถิติร้านร้านค้า' />
                        <Seller_Statistics />
                    </>
                )
            case 2:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='คะแนนของฉัน' />
                        <ScrollView>
                            <Seller_Score navigation={navigation} />
                        </ScrollView>
                    </>
                )
            case 3:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='แพคเกจปัจจุบันที่ใช้อยู่' />
                        <Seller_Advertisement_Packet backArrow navigation={navigation} />
                    </>
                )
            case 4:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='จัดการโฆษณา' />
                        <Seller_Advertisement_PacketBuy navigation={navigation} />
                    </>
                )
            case 5:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='ตอบกลับความคิดเห็น' />
                        <Seller_Comment_Reply />
                    </>
                )
            case 6:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='FIN แคมเปญ' />
                        <Seller_Fin_Campaign navigation={navigation} />
                    </>
                )
            case 7:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='เลือกสินค้า' />
                        <Seller_ProductSelect />
                    </>
                )
            case 8:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='รายได้ของฉัน' />
                        <My_income />
                    </>
                )
            case 9:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='ถอนเงิน' />
                        <Withdraw_money cokie={cokie} currentUser={currentUser} navigation={navigation} />
                    </>
                )
            case 10:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='PIN' />
                        <PIN_Code cokie={cokie} currentUser={currentUser} navigation={navigation} />
                    </>
                )
            case 11:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='ถอนเงิน' />
                        <Confirm_Bank navigation={navigation} />
                    </>
                )
            case 12:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='ถอนเงิน' />
                        <PIN_Code_Mail navigation={navigation} />
                    </>
                )
            case 13:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='ประวัติการถอนเงิน' />
                        <Withdrawal_history cokie={cokie} currentUser={currentUser} navigation={navigation} />
                    </>
                )
            case 14:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='เพิ่มสินค้า' saveBar />
                        <Up_Product_Select navigation={navigation} />
                    </>
                )
            case 15:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='โค้ดส่วนลด' />
                        <Code_Sale navigation={navigation} />
                    </>
                )
            case 16:
                return (
                    <>
                        <AppBar1 backArrow navigation={navigation} titleHead='ข้อมูลโค้ดส่วนลด' />
                        <Form_Code_Sale navigation={navigation} />
                    </>
                )
            case 17:
                return (
                    <>
                        <AppBar1 UpBankBar backArrow navigation={navigation} titleHead='บัญชีธนาคาร' />
                        <Bank_Totel navigation={navigation} Bank_True Bank_Default />
                        <Bank_Totel navigation={navigation} Bank_False Bank_Edit />

                    </>
                )
            case 18:
                return (
                    <>
                        <AppBar1 deleteBar backArrow navigation={navigation} titleHead='บัญชีธนาคาร' />
                        <Bank_detall />
                    </>
                )
        }
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {this.PathList()}
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class PIN_Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeInput: true,
            checkFail: 0,
            code: '',
        };
    }
    pinInput = React.createRef();
    _checkCode = (code) => {
        const { cokie, currentUser, navigation } = this.props
        const { checkFail } = this.state
        const Withdraw = navigation.getParam("Withdraw")
        const uri = `${finip}/store_transfer/login_pin`
        const dataBody = {
            id_customer: currentUser.id_customer,
            pin: code
        }
        GetServices({
            Authorization: cokie, dataBody, uriPointer: uri, getDataSource: value => {
                if (value.status != true) {
                    alert(value.message)
                    this.setState({ checkFail: checkFail + 1, activeInput: false });
                    this.pinInput.current.shake()
                        .then(() => this.setState({ code: '', activeInput: true }));
                    // setTimeout(() => this.setState({ activeInput: true, }), 2000);
                } else {
                    NavigationNavigateScreen({
                        goScreen: 'Seller_Topic', setData: { selectedIndex: Withdraw == "Withdraw" ? 11 : Withdraw == "History" ? 13 : 17, }, navigation
                    });
                }
            }
        })
    };
    render() {
        const { activeInput, checkFail, code, } = this.state;
        return (
            <SmoothPinCodeInput
                ref={this.pinInput}
                password
                mask="﹡"
                value={code}
                cellStyle={{
                    borderWidth: 2,
                    borderColor: activeInput == false ? 'red' : '#111',
                }}
                textStyle={{
                    fontSize: 24,
                    color: activeInput == false ? 'red' : '#111',
                }}
                codeLength={6}
                onTextChange={code => this.setState({ activeInput: true, code, })}
                onFulfill={this._checkCode}
                onBackspace={() => console.log('No more back.')}
            />
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class PIN_Code_Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pinCodeStatus: 'enter',
        };
        this.finishProcess = this.finishProcess.bind(this);
        this.handleResultEnterPin = this.handleResultEnterPin.bind(this);
        // this.finishProcess = this.finishProcess.bind(this)
    }
    finishProcess(pinCode) {
        const { navigation } = this.props
        NavigationNavigateScreen({ goScreen: 'Seller_Topic', setData: { selectedIndex: 9, }, navigation })
    };
    handleResultEnterPin(pinCode) {
        this.setState({ pinCodeStatus: 'failure' });
    };
    onFail(pinCode) {
    };
    render() {
        return (
            <PINCode status={'enter'}
                pinCodeVisible={true}
                disableLockScreen
                passwordLength={6}
                buttonDeleteText={'delete'}
                storedPin='111111'
                touchIDDisabled
                finishProcess={(pinCode) => this.finishProcess(pinCode)}
                handleResultEnterPin={(code) => this.handleResultEnterPin(code)}
                onFail={(attempt) => this.onFail(attempt)}
            />
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class Seller_Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 3 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>แพคเกจปัจจุบันที่ใช้อยู่</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 6 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>FIN แคมเปญ</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 15 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>โค้ดส่วนลด</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Seller_Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='bar-graph' size={25} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อ</Text>
                    </View>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อที่สำเร็จ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≥ 4.6</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการยกเลิกสินค้า</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≤ 10%</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการคืนสินค้า/คืนเงิน</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≤ 10%</Text>
                </View>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='emoji-happy' size={25} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ความพึงพอใจของลูกค้า</Text>
                    </View>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราความคิดเห็นโดยรวม</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>5 ≤ 10%</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการตอบกลับ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>57.00 % ≥ 75%</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เวลาในการตอบกลับ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>ภายใน 1 วัน ≤ 1วัน</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Seller_Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.ItemCenter, { borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>4.6 คะแนน</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ความคิดเห็น</Text></View>
                <Seller_Comment navigation={navigation} Comment_Reply />
                <Seller_Comment navigation={navigation} Comment_Reply />
                <Seller_Comment navigation={navigation} Comment_Reply />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Seller_Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { Comment_Reply, navigation } = this.props;
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                    <View style={stylesMain.FlexRow}>
                        <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                    </View>
                </View>
                <View style={[stylesMain.FlexRow, { borderColor: '#EAEAEA', borderBottomWidth: 1, padding: 5, }]}>
                    <View style={stylesMain.FlexRow}>
                        <View style={{ height: 80, width: 80, }}>
                            <FastImage style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
                                }}
                            />
                        </View>
                        <View style={{ padding: 5, width: '55%' }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                        </View>
                    </View>
                    {Comment_Reply
                        ?
                        <TouchableOpacity style={[stylesMain.FlexRow, { alignItems: 'flex-end' }]}
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'Seller_Topic', setData: { selectedIndex: 5 }, navigation
                            })}>
                            <IconFeather name='edit' size={15} color='#20BDA1' />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#20BDA1' }]}> เขียนตอบกลับ</Text>
                        </TouchableOpacity> : null
                    }

                </View>
                <View style={stylesMain.ItemCenter}>
                    <View style={{ width: '80%', backgroundColor: '#E3E3E3', height: 80, margin: 10, padding: 10 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#A9A8A8' }]}>สินค้าร้านดีมากเลย</Text>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_Comment_Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Seller_Comment />
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>เขียนการตอบกลับ</Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={{ width: '80%', height: 120, padding: 5, backgroundColor: '#E3E3E3', margin: 5, }}>
                            <TextInput
                                style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]}
                                placeholder=""
                                multiline
                                editable
                                maxLength={5000}
                                value={this.state.Detail}
                                onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { height: 30, width: 100, backgroundColor: mainColor, borderRadius: 5, margin: 10 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตอบกลับ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Seller_Advertisement_Packet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>ชื่อแพคเกจ </Text>
                <View style={stylesMain.ItemCenter}>
                    <View style={stylesSeller.Seller_AdvertisementPacketBox}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>แพคเกจโฆษณา ขนาด S</Text>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>รายละเอียด</Text>
                <View style={stylesMain.ItemCenter}>
                    <View style={stylesSeller.Seller_AdvertisementPacketBox}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ระยะเวลาของแพคเกจ 30 วัน </Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => NavigationNavigateScreen({
                        goScreen: 'Seller_Topic', setData: { selectedIndex: 4 }, navigation
                    })}>
                        <View style={[stylesSeller.Seller_Return_Button, { margin: 10 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ซื้อแพคเกจ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Seller_Advertisement_PacketBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Tel: '',
            Mail: '',
            Line: '',
            checked: true,
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { borderBottomWidth: 1, }]}> รายละเอียดผู้ติดต่อ</Text>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>ชื่อผู้ติดต่อ*</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Name}
                                onChangeText={(Name) => this.setState({ Name })}>
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>หมายเลขโทรศัพท์*</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Tel}
                                onChangeText={(Tel) => this.setState({ Tel })}>
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>อีเมล*</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Mail}
                                onChangeText={(Mail) => this.setState({ Mail })}>
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>LINE ID</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Line}
                                onChangeText={(Line) => this.setState({ Line })}>
                            </TextInput>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>เรื่องที่ติดต่อ</Text>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                        />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 15 }]}>สนใจโฆษณาร้านกับ FIN (มีค่าใช้จ่าย)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, backgroundColor: mainColor, padding: 5, marginLeft: 10, borderRadius: 5, width: 100 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อแอดมิน</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Seller_Fin_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }
    updataIndex(value) {
        this.setState({ selectedIndex: value.selectedIndex })
    }
    render() {
        const { navigation } = this.props
        const item = [{
            name: 'เร็วๆ นี้'
        }, {
            name: 'กำลังดำเนินการ'
        }, {
            name: 'หมดอายุแล้ว'
        }]
        return (
            <View>
                <View style={{ backgroundColor: '#fff' }}>
                    <TabBar
                        sendData={this.updataIndex.bind(this)}
                        setVertical={4}
                        item={item}
                    />
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 10, marginTop: 10 }}>
                    <View style={{ height: 90, width: '40%' }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/mysql/uploads/products/Campaign9999.png`,
                            }}
                        />
                    </View>
                    <View style={{ width: '60%', padding: 10 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            มาเข้าร่วมแคมเปญกับเราสิ! สิทธิพิเศษสำหรับร้านค้าใน
                            Fin เข้าร่วมแคมเปญ " 9 Baht
                            คอลเลคชั่นราคาต่ำกว่า 199 บาท ! (วันที่่ 5 - 11 มี.ค.) " เลย
                    </Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>การเข้าร่วมโปรโมชั่นจะสิ้นสุดภายใน3 วัน 1 ชั่วโมง</Text>
                        <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 10 }}
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'Seller_Topic', setData: { selectedIndex: 7 }, navigation
                            })}>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#7ED0E8', width: 130, borderRadius: 5, height: 30 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าร่วมโปรโมชั่น ตอนนี้!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>

export class Seller_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };
    }
    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
                <View style={{ flexDirection: 'row', padding: 10, borderColor: '#EAEAEA', borderWidth: 1 }}>
                    <CheckBox
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                    />
                    <View style={{ height: 80, width: 80, borderColor: '#EAEAEA', borderWidth: 1, padding: 5 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/mysql/uploads/products/2019-10-29-1572320317.jpg`,
                            }}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>กระเป๋าสะพายไหล่ Chanel</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>จำนวน : 20</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: '#EB4768', padding: 5, borderRadius: 5 }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>ไม่เหมาะสม</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_ProductSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <ScrollView>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ flexDirection: 'row', padding: 5, borderColor: '#EAEAEA', borderWidth: 1 }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}> เลือกสินค้า </Text>
                            <View style={{ flexDirection: 'row', width: '65%', paddingLeft: 10, borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, }}>
                                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: '90%' }]}
                                    placeholder=""
                                    value={this.state.text}
                                    onChangeText={(text) => this.setState({ text })}>
                                </TextInput>
                                <TouchableOpacity>
                                    <IconAntDesign RightItem name="search1" size={20} style={{ marginVertical: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Seller_Product />
                    <Seller_Product />
                </ScrollView>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                        />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15 }]}>เลือกทั้งหมด</Text>
                    </View>
                    <View style={[stylesMain.FlexRow, { marginVertical: 10, marginRight: 10 }]}>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, padding: 5, width: 100, borderRadius: 5 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>ยกเลิก</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, backgroundColor: mainColor, padding: 5, marginLeft: 10, borderRadius: 5, width: 100 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class My_income extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    updateIndex = (value) => {
        this.setState({ selectedIndex: value.selectedIndex })
    }
    dataItem(items1) {
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center', backgroundColor: '#FFFFFF', height: 30 }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    item={items1}
                    // noLimit
                    numberBox
                    radiusBox={4}
                />
            </View>
        )
    }
    render() {
        const items1 = [{
            name: 'ยังไม่สำเร็จ'
        }, {
            name: 'สำเร็จแล้ว'
        },]
        return (
            <>
                <View style={{ width: '100%', marginTop: 5 }}>
                    {this.dataItem(items1)}
                </View>
                <ScrollView>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10 }]}>
                        <View style={[stylesMain.ItemCenter, { height: 150, width: 150, borderColor: mainColor, borderWidth: 5, borderRadius: 75 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: mainColor }]}>฿100,000</Text>
                        </View>
                    </View>
                    <View style={[stylesMain.FrameBackground, { marginTop: -50 }]}>
                        <Product_income />
                        <Product_income />
                        <Product_income />
                        <Product_income />
                        <Product_income />
                        <Product_income />
                    </View>
                </ScrollView>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Product_income extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ECECEC', borderWidth: 1 }}>
                <View style={stylesMain.FlexRow}>
                    <View style={stylesProfileTopic.Order_Product_Pro}>
                        <FastImage style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                        <Text>x 1</Text>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor }]}>฿10,000.00</Text>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Withdraw_money extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
        };
    }
    getData = (dataService) => {
        this.setState({ activeDataService: false, dataService })
    }
    render() {
        const { cokie, currentUser, navigation, } = this.props
        const { activeDataService, } = this.state
        var uri = `${finip}/store_transfer/check_pin`;
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer
        };
        activeDataService == true && currentUser && GetServices({
            Authorization: cokie, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this)
        })
        return (
            <View style={{ backgroundColor: '#FFFFFF', marginTop: 5 }}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'History' }, navigation
                    // goScreen: 'Seller_Topic', setData: { selectedIndex: 13 }, navigation
                })}>
                    <View style={stylesProfile.ListMenuList}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
                                ประวัติการถอนเงิน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Withdraw' }, navigation
                })}>
                    <View style={stylesProfile.ListMenuList}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
                                ถอนเงิน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Bank' }, navigation
                })}>
                    <View style={stylesProfile.ListMenuList}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
                                บัญชีธนาคาร
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Confirm_Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: ''
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <>
                <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10, paddingBottom: 10 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>ถอนเงินไปที่</Text>
                    <View style={stylesMain.FlexRow}>
                        <FastImage
                            style={{ height: 100, width: 100, borderWidth: 3 }}
                            source={{
                                uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`,
                            }}
                        />
                        <View style={{ margin: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>ธนาคารกรุงเทพ</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>* *** *** *232</Text>
                        </View>
                    </View>
                </View>
                <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>จำนวนเงินที่ทำการถอน</Text>
                    <View style={{ width: '100%', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '90%' }]}
                            placeholder=""
                            maxLength={50}
                            value={this.state.money}
                            onChangeText={(money) => this.setState({ money })}>
                        </TextInput>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>THB</Text>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ระยะเวลาดำเนินการ : 3-5 วันทำการ</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                        goScreen: 'Seller_Topic', setData: { selectedIndex: 12 }, navigation
                    })}
                        style={[stylesMain.ItemCenter, { width: '80%', height: 50, backgroundColor: mainColor, borderRadius: 5, marginVertical: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, , { color: '#FFFFFF' }]}>ยืนยันการถอนเงิน</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Withdrawal_history extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeHistory: true,
        };
    }
    getData = (dataService) => {
        this.setState({ activeHistory: false, dataService })
    }
    render() {
        const { cokie, currentUser, navigation, } = this.props
        const { activeHistory, dataService } = this.state
        var uri = `${finip}/store_transfer/transfer_history`;
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer
        };
        activeHistory == true && currentUser && GetServices({
            Authorization: cokie, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this)
        })
        return (
            <>
                {
                    dataService && dataService.length > 0 ?
                        <Withdrawal_history_sub cokie={cokie} currentUser={currentUser} navigation={navigation} /> :
                        <></>
                }
            </>
        );
    }
}
export class Withdrawal_history_sub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBox: false,
        };
    }
    activeBox = () => {
        const { activeBox } = this.state
        this.setState({ activeBox: !activeBox })
    }
    render() {
        const { activeBox } = this.state
        return (
            <>
                <TouchableOpacity onPress={() => this.activeBox()}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={[stylesMain.FlexRow, stylesMain.FrameBackground, { justifyContent: 'space-around' }]}>
                            <View>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#B7B7B7' }]}>ถอนเงิน</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>123124284349</Text>
                            </View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2,]}>1,000,000 THB</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right', color: '#B7B7B7' }]}>กรุงไทย
                            <IconEntypo name={activeBox == true ? 'chevron-up' : 'chevron-down'} size={20} color={mainColor} />
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {
                    activeBox == true &&
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', padding: 10 }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>20/02/2020</Text>
                        <FastImage
                            style={{ height: 100, width: 100, borderWidth: 3 }}
                            source={{
                                uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`,
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ธนาคารกรุงเทพ</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>* *** *** *232</Text>
                        <View style={[stylesMain.ItemCenter, { borderColor: '#C4C4C4', borderWidth: 2, borderRadius: 5, paddingHorizontal: 30 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สถานะ</Text>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#2CD583', borderRadius: 30, padding: 5 }]}>
                                <IconEntypo name='check' size={35} color='#FFFFFF' />
                            </View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>อนุมัติเสร็จสิ้น</Text>
                        </View>
                    </View>
                }
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Up_Product_Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    setStateAll = () => {

    }
    Edit_all_Body() {
        const { price, total } = this.state
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ตั้งค่าราคาและจำนวนสินค้าในคลังทุกตัวเลือก</Text>
                <View style={stylesMain.FlexRow}>
                    <View style={{ width: 30, marginRight: 10, paddingTop: 15 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ราคา</Text>
                    </View>
                    <View style={[stylesSeller.BottomSheet_Box, { width: 250 }]}>
                        <TextInput
                            style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}
                            placeholder="0.00"
                            editable
                            onChangeText={(price) => this.setState({ price })}>{price}</TextInput>
                    </View>
                </View>
                <View style={stylesMain.FlexRow}>
                    <View style={{ width: 30, marginRight: 10, paddingTop: 15 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>คลัง</Text>
                    </View>
                    <View style={[stylesSeller.BottomSheet_Box, { width: 250 }]}>
                        <TextInput
                            style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}
                            placeholder="0"
                            editable
                            onChangeText={(total) => this.setState({ total })}>{total}</TextInput>
                    </View>
                </View>
                <View style={stylesSeller.BottomSheet_Botton}>
                    <TouchableOpacity onPress={() => { this.Edit_Body.close(); }}>
                        <View style={stylesSeller.BottomSheet_Botton_cancel}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setStateAll()}>
                        <View style={stylesSeller.BottomSheet_Botton_OK}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const { navigation } = this.props
        const optionName = navigation.getParam('optionName')
        const optionValue = navigation.getParam('optionValue')
        const optionName2 = navigation.getParam('optionName2')
        const optionValue2 = navigation.getParam('optionValue2')
        return (
            <>
                <BottomSheet
                    ref={ref => {
                        this.Edit_Body = ref;
                    }}
                    height={250}
                    duration={250}
                    customStyles={{
                        container: {
                            paddingTop: 20,
                            alignItems: "center",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }
                    }}
                >
                    {this.Edit_all_Body()}
                </BottomSheet>
                <View style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>การตั้งค่าสำหรับทุกตัวเลือกสินค้า</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.Edit_Body.open(); }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>แก้ไขแบบชุด</Text>
                    </TouchableOpacity>
                </View>
                <View style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>ตัวเลือกสินค้า</Text>
                    </View>
                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>ราคา</Text>
                    </View>
                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>คลัง</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <View style={{ flexDirection: 'row', width: '30%' }}>
                        {
                            optionValue && optionValue.map((value, index) => {
                                if (index == 0 && value.name) {
                                    return optionValue2 && optionValue2.map((value2, index2) => {
                                        if (index2 == 0 && value2.name) {
                                            return (
                                                <>
                                                    <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{optionName}</Text>
                                                    </View>
                                                    <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{optionName2}</Text>
                                                    </View>
                                                </>
                                            )
                                        } else if (index2 == 0) {
                                            return (
                                                <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{optionName}</Text>
                                                </View>
                                            )
                                        }
                                    })
                                }
                            })
                        }
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 5 }}>
                        {
                            optionValue && optionValue.map((value, index) => {
                                if (value.name) {
                                    return optionValue2 && optionValue2.map((value2, index2) => {
                                        if (value2.name) {
                                            return (
                                                <View key={`${index}:${index2}`} style={[
                                                    stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                                                    <View style={{ flexDirection: 'row', width: '30%' }}>
                                                        <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                                                {index2 == 0 && value.name}</Text>
                                                        </View>
                                                        <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                                                {value2.name}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                                        <View style={stylesSeller.SizeSheet_Boxsize}></View>
                                                    </View>
                                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                                        <View style={stylesSeller.SizeSheet_Boxsize}></View>
                                                    </View>
                                                </View>
                                            )
                                        } else if (index2 == 0) {
                                            return (
                                                <View key={`${index}`} style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                                                    <View style={{ flexDirection: 'row', width: '30%' }}>
                                                        <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                                                {index2 == 0 && value.name}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                                        <View style={stylesSeller.SizeSheet_Boxsize}>
                                                            <TextInput>
                                                            </TextInput></View>
                                                    </View>
                                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                                        <View style={stylesSeller.SizeSheet_Boxsize}></View>
                                                    </View>
                                                </View>
                                            )

                                        }
                                    })
                                }
                            })
                        }
                    </View>
                </View>
                {/* <View style={{ marginVertical: 5 }}>
                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาด</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 5 }}>
                        <View style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>XL</Text>
                            </View>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <View style={stylesSeller.SizeSheet_Boxsize}></View>
                            </View>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <View style={stylesSeller.SizeSheet_Boxsize}></View>
                            </View>
                        </View>
                        <View style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>L</Text>
                            </View>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <View style={stylesSeller.SizeSheet_Boxsize}></View>
                            </View>
                            <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                <View style={stylesSeller.SizeSheet_Boxsize}></View>
                            </View>
                        </View>
                    </View>
                </View> */}
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Code_Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    get Code_BOX() {
        return (
            <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>BirthDAY</Text>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', width: '60%' }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-02-2020 15:00</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-02-2020 16:00</Text>
                </View>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', width: '50%' }]}>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>โค้ดส่วนลด</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ประเภทโค้ด</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ราคาขั้นต่ำ</Text>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>FINs00wk</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ลดบาท</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>฿100</Text>
                    </View>
                </View>
                <View style={[stylesMain.FlexRow, { borderBottomWidth: 2, borderTopWidth: 2, justifyContent: 'space-around', paddingVertical: 10, marginVertical: 10 }]}>
                    <View style={{ width: '30%', }}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 5, borderRadius: 5 }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>จำนวน </Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center', marginTop: 5 }]}>100</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 5, borderRadius: 5 }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ผู้ซื้อกดรับ </Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center', marginTop: 5 }]}>50</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 5, borderRadius: 5 }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ใช้แล้ว </Text>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center', marginTop: 5 }]}>20</Text>
                    </View>
                </View>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginBottom: 10 }]}>
                    <TouchableOpacity style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, width: '49%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>แก้ไข</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesMain.ItemCenter, { borderColor: mainColor, borderWidth: 1, width: '49%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>ลบ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    updataIndex(value) {
        this.setState({ selectedIndex: value.selectedIndex })
    }
    render() {
        const { navigation } = this.props
        const item = [{
            name: 'เร็วๆ นี้'
        }, {
            name: 'กำลังดำเนินการ'
        }, {
            name: 'หมดอายุแล้ว'
        }]
        return (
            <>
                <View style={stylesMain.FrameBackground}>
                    <TabBar
                        sendData={this.updataIndex.bind(this)}
                        setVertical={4}
                        item={item}
                    />
                </View>
                <ScrollView>
                    {this.Code_BOX}
                </ScrollView>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 16 }, navigation
                })}
                    style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>
                        สร้างโปรโมชันส่วนลด
                    </Text>
                </TouchableOpacity>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Form_Code_Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    setStateChecked = (checked, checked2) => {
        this.setState({ checked, checked2 })
    }
    render() {
        const { navigation } = this.props
        const { name, code, MFG_Day, MFG_Time, EXP_Day, EXP_Time, checked, checked2, min_Price } = this.state
        return (
            <ScrollView>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ชื่อโค้ด</Text>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                        placeholder="สูงสุด100ตัวอักษร"
                        maxLength={100}
                        value={name}
                        onChangeText={(name) => this.setState({ name })}></TextInput>
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '30%' }]}>โค้ดส่วนลด</Text>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#EAEAEA', width: '30%', paddingVertical: 5 }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Fin</Text>
                    </View>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right' }]}
                        placeholder="สูงสุด6ตัวอักษร"
                        maxLength={6}
                        value={code}
                        onChangeText={(code) => this.setState({ code })}></TextInput>
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>วันที่เริ่มต้น</Text>
                    <DatePicker
                        style={{ width: 300 }}
                        date={MFG_Day}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-12-1920"
                        maxDate="01-06-2020"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                        }}
                        onDateChange={(MFG_Day) => { this.setState({ MFG_Day }) }}
                    />
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>เวลาเริ่มต้น</Text>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                        placeholder="ระบุ"
                        maxLength={6}
                        value={MFG_Time}
                        onChangeText={(MFG_Time) => this.setState({ MFG_Time })}></TextInput>
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>วันที่สิ้นสุด</Text>
                    <DatePicker
                        style={{ width: 300 }}
                        date={EXP_Day}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-12-1920"
                        maxDate="01-06-2020"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                        }}
                        onDateChange={(EXP_Day) => { this.setState({ EXP_Day }) }}
                    />
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>เวลาสิ้นสุด</Text>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                        placeholder="ระบุ"
                        maxLength={6}
                        value={EXP_Time}
                        onChangeText={(EXP_Time) => this.setState({ EXP_Time })}></TextInput>
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ประเภทโค้ด</Text>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox
                            checked={checked}
                            onPress={() => this.setStateChecked(true, false)} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>
                            ลด%</Text>
                        <CheckBox
                            checked={checked2}
                            onPress={() => this.setStateChecked(false, true)} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>
                            ลดบาท</Text>
                    </View>
                </View>
                <View style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ราคาขั้นต่ำ</Text>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                        placeholder="ระบุราคาขั้นต่ำในการใช้คูปอง"
                        maxLength={10}
                        value={min_Price}
                        onChangeText={(min_Price) => this.setState({ min_Price })}></TextInput>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 7 }, navigation
                })}
                    style={stylesSeller.Seller_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '30%' }]}>เลือกสินค้าที่ใช้ได้</Text>
                    <IconEntypo name='chevron-right' size={40} color={mainColor} />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
///--------------------------------------------------------------------------///
export class Bank_Totel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { Bank_True, Bank_False, Bank_Default, Bank_Edit, navigation } = this.props
        return (
            <TouchableOpacity
                onPress={() => NavigationNavigateScreen({
                    goScreen: 'Seller_Topic', setData: { selectedIndex: 18 }, navigation
                })}
                style={[stylesMain.FlexRow, {
                    backgroundColor: '#FFFFFF', width: '95%', padding: 10,
                    borderColor: '#C4C4C4', borderWidth: 1, borderRadius: 5,
                    marginTop: 10, height: 'auto', aspectRatio: 3, justifyContent: 'space-between'
                }]}>
                <View style={[stylesMain.FlexRow, { width: '70%' }]}>
                    <View style={{ height: 80, width: 80 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: `${ip}/MySQL/uploads/message/BBL-LOGO.jpg`,
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กรุงไทย (KTB)</Text>
                        {
                            Bank_True &&
                            <View style={stylesMain.FlexRow}>
                                <IconAntDesign name='checkcircle' size={15} color='#1BBE83' />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#1BBE83', marginLeft: 10, }]}>ตรวจสอบแล้ว</Text>
                            </View>
                        }
                        {
                            Bank_False &&
                            <View style={stylesMain.FlexRow}>
                                <IconAntDesign name='closecircleo' size={15} color='#EC3535' />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#EC3535', marginLeft: 10, }]}>ไม่ผ่านการตรวจสอบ</Text>
                            </View>
                        }

                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>*******345</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยนะ ชนะ</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    {
                        Bank_Default &&
                        <View style={{
                            borderColor: '#1BBE83', borderWidth: 1,
                            backgroundColor: '#ABEAD3', paddingHorizontal: 10, borderRadius: 5
                        }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#1BBE83' }]}>ค่าเริ่มต้น</Text>
                        </View>
                    }
                    {
                        Bank_Edit &&
                        <View style={{
                            borderColor: '#BE1B68', borderWidth: 1,
                            backgroundColor: '#EAABAD', paddingHorizontal: 10, borderRadius: 5
                        }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#BE1B68' }]}>ค่าเริ่มต้น</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        )
    }
}
///--------------------------------------------------------------------------///
export class Bank_detall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <ScrollView>
                    <View style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }]}>
                            <IconAntDesign name='checkcircle' size={20} color='#1BBE83' />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#1BBE83', marginLeft: 10, }]}>ตรวจสอบแล้ว</Text>
                        </View>
                        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }]}>
                            <View>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ชื่อธนาคาร</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>กรุงไทย (KTB)</Text>
                            </View>
                            <View style={{ height: 60, width: 60, marginLeft: 10 }}>
                                <FastImage
                                    style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/message/BBL-LOGO.jpg',
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ชื่อบัญชีธนาคาร</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ยนะ ชนะ</Text>
                        </View>
                        <View style={{ backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>เลขที่บัญชี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>*******345</Text>
                        </View>
                        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10, justifyContent: 'space-between' }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>หน้าบัญชีธนาคาร</Text>
                            <TouchableOpacity style={stylesMain.FlexRow}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor, marginRight: 10 }]}>ดูเอกสาร</Text>
                                <IconEntypo name='eye' size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={[stylesMain.ItemCenter, { height: 50, backgroundColor: mainColor }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ตั้งเป็นบัญชีตั้งต้น</Text>
                </TouchableOpacity>
            </>
        );
    }
}

