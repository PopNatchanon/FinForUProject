///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import FastImage from 'react-native-fast-image';
import { CheckBox } from 'react-native-elements';
import PINCode from '@haskkor/react-native-pincode';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
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
import { TabBar, GetData, GetServices } from '../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Seller_Topic);
function Seller_Topic(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
    }, [activeGetSource]);
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                return <>
                    <AppBar {...props} backArrow titleHead='จัดการโฆษณา' />
                    <Seller_Advertisement {...props} backArrow />
                </>;
            case 1:
                return <>
                    <AppBar {...props} backArrow titleHead='สถิติร้านร้านค้า' />
                    <Seller_Statistics />
                </>;
            case 2:
                return <>
                    <AppBar {...props} backArrow titleHead='คะแนนของฉัน' />
                    <ScrollView>
                        <Seller_Score {...props} />
                    </ScrollView>
                </>;
            case 3:
                return <>
                    <AppBar {...props} backArrow titleHead='แพคเกจปัจจุบันที่ใช้อยู่' />
                    <Seller_Advertisement_Packet {...props} backArrow />
                </>;
            case 4:
                return <>
                    <AppBar {...props} backArrow titleHead='จัดการโฆษณา' />
                    <Seller_Advertisement_PacketBuy {...props} />
                </>;
            case 5:
                return <>
                    <AppBar {...props} backArrow titleHead='ตอบกลับความคิดเห็น' />
                    <Seller_Comment_Reply />
                </>;
            case 6:
                return <>
                    <AppBar {...props} backArrow titleHead='FIN แคมเปญ' />
                    <Seller_Fin_Campaign {...props} />
                </>;
            case 7:
                return <>
                    <AppBar {...props} backArrow titleHead='เลือกสินค้า' />
                    <Seller_ProductSelect />
                </>;
            case 8:
                return <>
                    <AppBar {...props} backArrow titleHead='รายได้ของฉัน' />
                    <My_income />
                </>;
            case 9:
                return <>
                    <AppBar {...props} backArrow titleHead='ถอนเงิน' />
                    <Withdraw_money {...props} cokie={cokie} currentUser={currentUser} />
                </>;
            case 10:
                return <>
                    <AppBar {...props} backArrow titleHead='PIN' />
                    <PIN_Code {...props} cokie={cokie} currentUser={currentUser} />
                </>;
            case 11:
                return <>
                    <AppBar {...props} backArrow titleHead='ถอนเงิน' />
                    <Confirm_Bank {...props} />
                </>;
            case 12:
                return <>
                    <AppBar {...props} backArrow titleHead='ถอนเงิน' />
                    <PIN_Code_Mail {...props} />
                </>;
            case 13:
                return <>
                    <AppBar {...props} backArrow titleHead='ประวัติการถอนเงิน' />
                    <Withdrawal_history {...props} cokie={cokie} currentUser={currentUser} />
                </>;
            case 14:
                return <>
                    <AppBar {...props} backArrow titleHead='เพิ่มสินค้า' saveBar />
                    <Up_Product_Select {...props} />
                </>;
            case 15:
                return <>
                    <AppBar {...props} backArrow titleHead='โค้ดส่วนลด' />
                    <Code_Sale {...props} />
                </>;
            case 16:
                return <>
                    <AppBar {...props} backArrow titleHead='ข้อมูลโค้ดส่วนลด' />
                    <Form_Code_Sale {...props} />
                </>;
            case 17:
                return <>
                    <AppBar {...props} UpBankBar backArrow titleHead='บัญชีธนาคาร' />
                    <Bank_Totel {...props} Bank_True Bank_Default />
                    <Bank_Totel {...props} Bank_False Bank_Edit />
                </>;
            case 18:
                return <>
                    <AppBar {...props} deleteBar backArrow titleHead='บัญชีธนาคาร' />
                    <Bank_detall />
                </>;
        };
    };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {PathList()}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let PIN_Code = (props) => {
    const { cokie, currentUser, navigation, route } = props;
    const Withdraw = route.params?.Withdraw;
    const [activeInput, setActiveInput] = useState(true);
    const [checkFail, setCheckFail] = useState(0);
    const [code, setCode] = useState('');
    const pinInput = useRef(null);
    let resetInput = (value, value2) => { setActiveInput(value); setCode(value2); };
    let _checkCode = (code) => {
        var dataBody = {
            id_customer: currentUser?.id_customer,
            pin: code
        };
        var uri = `${finip}/store_transfer/login_pin`;
        GetServices({
            Authorization: cokie, dataBody, uriPointer: uri, getDataSource: value => {
                if (!value.status) {
                    alert(value.message);
                    setActiveInput(false);
                    setCheckFail(checkFail + 1);
                    pinInput.current.shake().then(() => resetInput(true, ''));
                    // setTimeout(() => this.setState({ activeInput: true, }), 2000);
                } else {
                    NavigationNavigate({
                        goScreen: 'Seller_Topic', setData: {
                            selectedIndex: Withdraw == "Withdraw" ? 11 : Withdraw == "History" ? 13 : 17,
                        }, navigation
                    });
                };
            }
        });
    };
    return <ScrollView>
        <View style={{ alignItems: 'center', }}>
            <View style={{ padding: 10, width: width * 0.60, height: height * 0.30 }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={require('../../../icon/001.png')} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>ระบุ PIN</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginBottom: 10 }]}>ใส่รหัส PIN 6 หลัก</Text>
            <SmoothPinCodeInput placeholder={
                <View style={{ width: 15, height: 15, borderRadius: 25, backgroundColor: '#0A55A6', }}></View>}
                ref={pinInput} password autoFocus restrictToNumbers={true} mask={
                    <View style={{ width: 15, height: 15, borderRadius: 25, backgroundColor: '#EBB34D', }}></View>}
                value={code} cellStyle={{ borderWidth: 2, borderColor: !activeInput ? 'red' : '#111', borderRadius: 5, }}
                textStyle={{ fontSize: 24, color: !activeInput ? 'red' : '#111', }}
                codeLength={6} keyboardType={'numeric'} onTextChange={(code) => resetInput(true, code)} onFulfill={(value) =>
                    _checkCode(value)}
                onBackspace={() => console.log('No more back.')} />
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let PIN_Code_Mail = (props) => {
    const { cokie, currentUser, navigation, route } = props;
    const Withdraw = route.params?.Withdraw;
    const [activeInput, setActiveInput] = useState(true);
    const [checkFail, setCheckFail] = useState(0);
    const [code, setCode] = useState('');
    const pinInput = useRef(null);
    let resetInput = (value, value2) => {
        setActiveInput(value);
        setCode(value2);
    };
    let _checkCode = (code) => {
        var dataBody = {
            id_customer: currentUser?.id_customer,
            pin: code
        };
        var uri = `${finip}/store_transfer/login_pin`;
        GetServices({
            Authorization: cokie, dataBody, uriPointer: uri, getDataSource: value => {
                if (!value.status) {
                    alert(value.message);
                    setActiveInput(false);
                    setCheckFail(checkFail + 1);
                    pinInput.current.shake().then(() => resetInput(true, ''));
                    // setTimeout(() => this.setState({ activeInput: true, }), 2000);
                } else {
                    NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: Withdraw == 11 }, navigation });
                };
            }
        });
    };
    return <ScrollView>
        <View style={{ alignItems: 'center', }}>
            <View style={{ padding: 10, width: width * 0.60, height: height * 0.30 }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={require('../../../icon/security-Icon.png')} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginBottom: 10, color: '#D54000' }]}>
                กรุณายืนยันที่อีเมลอีกครั้งภายในเวลา 30 นาที</Text>
            <SmoothPinCodeInput placeholder={
                <View style={{ width: 15, height: 15, borderRadius: 25, backgroundColor: '#0A55A6', }}></View>}
                ref={pinInput} password autoFocus restrictToNumbers={true} mask={
                    <View style={{ width: 15, height: 15, borderRadius: 25, backgroundColor: '#1ED37B', }}></View>}
                value={code} cellStyle={{ borderWidth: 2, borderColor: !activeInput ? 'red' : '#111', borderRadius: 5, }}
                textStyle={{ fontSize: 24, color: !activeInput ? 'red' : '#111', }}
                codeLength={6} keyboardType={'numeric'} onTextChange={(code) => resetInput(true, code)} onFulfill={(value) =>
                    _checkCode(value)}
                onBackspace={() => console.log('No more back.')} />
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
// export class PIN_Code_Mail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pinCodeStatus: 'enter',
//         };
//         this.finishProcess = this.finishProcess.bind(this);
//         this.handleResultEnterPin = this.handleResultEnterPin.bind(this);
//         // this.finishProcess = this.finishProcess.bind(this)
//     }
//     finishProcess(pinCode) {
//         const { navigation } = this.props
//         NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 9, }, navigation })
//     };
//     handleResultEnterPin(pinCode) {
//         this.setState({ pinCodeStatus: 'failure' });
//     };
//     onFail(pinCode) {
//     };
//     render() {
//         return (
//             <PINCode status={'enter'}
//                 pinCodeVisible={true}
//                 disableLockScreen
//                 passwordLength={6}
//                 buttonDeleteText={'delete'}
//                 storedPin='111111'
//                 touchIDDisabled
//                 finishProcess={(pinCode) => this.finishProcess(pinCode)}
//                 handleResultEnterPin={(code) => this.handleResultEnterPin(code)}
//                 onFail={(attempt) => this.onFail(attempt)}
//             />
//         );
//     }
// }
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement = (props) => {
    const { navigation } = props;
    return <View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 3 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>แพคเกจปัจจุบันที่ใช้อยู่</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 6 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>FIN แคมเปญ</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 15 }, navigation })}>
            <View style={stylesSeller.Seller_Setting_BoxTopic}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>โค้ดส่วนลด</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Statistics = (props) => {
    return <View>
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
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Score = (props) => {
    return <View>
        <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
            <View style={stylesMain.ItemCenter}>
                <View style={[stylesMain.ItemCenter,
                { borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10 }]}>
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
        <Seller_Comment {...props} Comment_Reply />
        <Seller_Comment {...props} Comment_Reply />
        <Seller_Comment {...props} Comment_Reply />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Comment = (props) => {
    const { Comment_Reply, navigation } = props;
    return <View style={stylesMain.FrameBackground}>
        <View style={{
            height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10,
            borderColor: '#EAEAEA', borderBottomWidth: 1,
        }}>
            <View style={stylesMain.FlexRow}>
                <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { borderColor: '#EAEAEA', borderBottomWidth: 1, padding: 5, }]}>
            <View style={stylesMain.FlexRow}>
                <View style={{ height: 80, width: 80, }}>
                    <FastImage style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
                </View>
                <View style={{ padding: 5, width: '55%' }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                </View>
            </View>
            {Comment_Reply ?
                <TouchableOpacity style={[stylesMain.FlexRow, { alignItems: 'flex-end' }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 5 }, navigation })}>
                    <IconFeather name='edit' size={15} color='#20BDA1' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#20BDA1' }]}> เขียนตอบกลับ</Text>
                </TouchableOpacity> : null}
        </View>
        <View style={stylesMain.ItemCenter}>
            <View style={{ width: '80%', backgroundColor: '#E3E3E3', height: 80, margin: 10, padding: 10 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#A9A8A8' }]}>สินค้าร้านดีมากเลย</Text>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Comment_Reply = (props) => {
    const [detail, serDetail] = useState('');
    return <View>
        <Seller_Comment />
        <View style={stylesMain.FrameBackground}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>เขียนการตอบกลับ</Text>
            <View style={stylesMain.ItemCenter}>
                <View style={{ width: '80%', height: 120, padding: 5, backgroundColor: '#E3E3E3', margin: 5, }}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]} placeholder="" multiline
                        editable maxLength={5000} value={detail} onChangeText={(value) => serDetail(value)}></TextInput>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={[stylesMain.ItemCenter,
                    { height: 30, width: 100, backgroundColor: mainColor, borderRadius: 5, margin: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตอบกลับ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement_Packet = (props) => {
    const { navigation } = props;
    return <View style={stylesMain.FrameBackground}>
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
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 4 }, navigation })}>
                <View style={[stylesSeller.Seller_Return_Button, { margin: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ซื้อแพคเกจ</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement_PacketBuy = (props) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [mail, setMail] = useState('');
    const [line, setLine] = useState('');
    const [checked, setChecked] = useState(true);
    return <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { borderBottomWidth: 1, }]}> รายละเอียดผู้ติดต่อ</Text>
        <View style={{ padding: 10 }}>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>ชื่อผู้ติดต่อ*</Text>
                <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]} placeholder=""
                        value={name} onChangeText={(value) => setName(value)}>
                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>หมายเลขโทรศัพท์*</Text>
                <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]} placeholder=""
                        value={tel} onChangeText={(value) => setTel(value)}>
                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>อีเมล*</Text>
                <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]} placeholder=""
                        value={mail} onChangeText={(value) => setMail(value)}>
                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>LINE ID</Text>
                <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]} placeholder=""
                        value={line} onChangeText={(value) => setLine(value)}>
                    </TextInput>
                </View>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>เรื่องที่ติดต่อ</Text>
            <View style={stylesMain.FlexRow}>
                <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 15 }]}>
                    สนใจโฆษณาร้านกับ FIN (มีค่าใช้จ่าย)</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={[stylesMain.ItemCenter, {
                        borderColor: mainColor, borderWidth: 1, backgroundColor: mainColor, padding: 5, marginLeft: 10, borderRadius: 5,
                        width: 100
                    }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อแอดมิน</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Fin_Campaign = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const item = [{ name: 'เร็วๆ นี้' }, { name: 'กำลังดำเนินการ' }, { name: 'หมดอายุแล้ว' }];
    return <View>
        <View style={{ backgroundColor: '#fff' }}>
            <TabBar sendData={value => setSelectedIndex(value.selectedIndex)} setVertical={4} item={item} />
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 10, marginTop: 10 }}>
            <View style={{ height: 90, width: '40%' }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/mysql/uploads/products/Campaign9999.png`, }} />
            </View>
            <View style={{ width: '60%', padding: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    มาเข้าร่วมแคมเปญกับเราสิ! สิทธิพิเศษสำหรับร้านค้าใน Fin เข้าร่วมแคมเปญ " 9 Baht คอลเลคชั่นราคาต่ำกว่า 199 บาท !
                    (วันที่่ 5 - 11 มี.ค.) " เลย</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>การเข้าร่วมโปรโมชั่นจะสิ้นสุดภายใน3 วัน 1 ชั่วโมง</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 10 }} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 7 }, navigation })}>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#7ED0E8', width: 130, borderRadius: 5, height: 30 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>
                            เข้าร่วมโปรโมชั่น ตอนนี้!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Product = (props) => {
    const [checked, setChecked] = useState(true);
    return <View style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
        <View style={{ flexDirection: 'row', padding: 10, borderColor: '#EAEAEA', borderWidth: 1 }}>
            <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
            <View style={{ height: 80, width: 80, borderColor: '#EAEAEA', borderWidth: 1, padding: 5 }}>
                <FastImage style={stylesMain.BoxProduct1Image}
                    source={{ uri: `${ip}/mysql/uploads/products/2019-10-29-1572320317.jpg`, }} />
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
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_ProductSelect = (props) => {
    const [checked, setChecked] = useState(true);
    const [text, setText] = useState('');
    return <>
        <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', padding: 5, borderColor: '#EAEAEA', borderWidth: 1 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>เลือกสินค้า</Text>
                    <View style={{
                        flexDirection: 'row', width: '65%', paddingLeft: 10, borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1,
                    }}>
                        <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: '90%' }]} placeholder='' value={text}
                            onChangeText={(value) => setText(value)}>
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
                <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15 }]}>เลือกทั้งหมด</Text>
            </View>
            <View style={[stylesMain.FlexRow, { marginVertical: 10, marginRight: 10 }]}>
                <TouchableOpacity>
                    <View style={[stylesMain.ItemCenter,
                    { borderColor: mainColor, borderWidth: 1, padding: 5, width: 100, borderRadius: 5 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[stylesMain.ItemCenter, {
                        borderColor: mainColor, borderWidth: 1, backgroundColor: mainColor, padding: 5, marginLeft: 10, borderRadius: 5,
                        width: 100
                    }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let My_income = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const items1 = [{ name: 'ยังไม่สำเร็จ' }, { name: 'สำเร็จแล้ว' },];
    let dataItem = (items1) => {
        return <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center', backgroundColor: '#FFFFFF', height: 30 }]}>
            <TabBar sendData={value => setSelectedIndex(value.selectedIndex)} item={items1} numberBox radiusBox={4} />
        </View>;
    };
    return <>
        <View style={{ width: '100%', marginTop: 5 }}>
            {dataItem(items1)}
        </View>
        <ScrollView>
            <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10 }]}>
                <View style={[stylesMain.ItemCenter,
                { height: 150, width: 150, borderColor: mainColor, borderWidth: 5, borderRadius: 75 }]}>
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
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Product_income = (props) => {
    return <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ECECEC', borderWidth: 1 }}>
        <View style={stylesMain.FlexRow}>
            <View style={stylesProfileTopic.Order_Product_Pro}>
                <FastImage style={stylesMain.BoxProduct1Image}
                    source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
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
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Withdraw_money = (props) => {
    const { cokie, currentUser, navigation, } = props;
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    var uri = `${finip}/store_transfer/check_pin`;
    var dataBody = {
        id_customer: currentUser?.id_customer
    };
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    useEffect(() => {
        activeDataService && currentUser &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: value => getData(value) });
    }, [activeDataService && currentUser]);
    return <View style={{ backgroundColor: '#FFFFFF', marginTop: 5 }}>
        <TouchableOpacity activeOpacity={1} onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'History' }, navigation })}>
            <View style={stylesProfile.ListMenuList}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ประวัติการถอนเงิน</Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Withdraw' }, navigation })}>
            <View style={stylesProfile.ListMenuList}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ถอนเงิน</Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Bank' }, navigation })}>
            <View style={stylesProfile.ListMenuList}>
                <View style={stylesProfile.ListMenuListSub}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>บัญชีธนาคาร</Text>
                </View>
                <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Confirm_Bank = (props) => {
    const { navigation } = props;
    const [money, setMoney] = useState(undefined);
    return <>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10, paddingBottom: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>ถอนเงินไปที่</Text>
            <View style={stylesMain.FlexRow}>
                <FastImage style={{ height: 100, width: 100, borderWidth: 3 }}
                    source={{ uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`, }} />
                <View style={{ margin: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>ธนาคารกรุงเทพ</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>* *** *** *232</Text>
                </View>
            </View>
        </View>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>จำนวนเงินที่ทำการถอน</Text>
            <View style={{
                width: '100%', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '90%' }]} placeholder="" maxLength={50}
                    value={money} onChangeText={(value) => setMoney(value)}>
                </TextInput>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>THB</Text>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ระยะเวลาดำเนินการ : 3-5 วันทำการ</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={1} onPress={() =>
                NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 12 }, navigation })}
                style={[stylesMain.ItemCenter,
                { width: '80%', height: 50, backgroundColor: mainColor, borderRadius: 5, marginVertical: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, , { color: '#FFFFFF' }]}>ยืนยันการถอนเงิน</Text>
            </TouchableOpacity>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Withdrawal_history = (props) => {
    const { cokie, currentUser, navigation, } = props;
    const [activeHistory, setActiveHistory] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    var dataBody = {
        id_customer: currentUser?.id_customer
    };
    var uri = `${finip}/store_transfer/transfer_history`;
    let getData = (value) => { setActiveHistory(false); setDataService(value); };
    useEffect(() => {
        activeHistory && currentUser &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: value => getData(value) });
    }, [activeHistory && currentUser]);
    return <>
        {dataService?.length > 0 ?
            <Withdrawal_history_sub {...props} cokie={cokie} currentUser={currentUser} /> : <></>}
    </>;
};
export let Withdrawal_history_sub = (props) => {
    const [activeBox, setActiveBox] = useState(false);
    return <>
        <TouchableOpacity onPress={() => setActiveBox(!activeBox)}>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={[stylesMain.FlexRow, stylesMain.FrameBackground, { justifyContent: 'space-around' }]}>
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#B7B7B7' }]}>ถอนเงิน</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>123124284349</Text>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2,]}>1,000,000 THB</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right', color: '#B7B7B7' }]}>
                            กรุงไทย<IconEntypo name={activeBox ? 'chevron-up' : 'chevron-down'} size={20} color={mainColor} /></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        {activeBox && <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>20/02/2020</Text>
            <FastImage style={{ height: 100, width: 100, borderWidth: 3 }}
                source={{ uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`, }} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ธนาคารกรุงเทพ</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>* *** *** *232</Text>
            <View style={[stylesMain.ItemCenter, { borderColor: '#C4C4C4', borderWidth: 2, borderRadius: 5, paddingHorizontal: 30 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สถานะ</Text>
                <View style={[stylesMain.ItemCenter, { backgroundColor: '#2CD583', borderRadius: 30, padding: 5 }]}>
                    <IconEntypo name='check' size={35} color='#FFFFFF' />
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>อนุมัติเสร็จสิ้น</Text>
            </View>
        </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Up_Product_Select = (props) => {
    const { route } = props;
    const optionName = route.params?.optionName;
    const optionName2 = route.params?.optionName2;
    const optionValue = route.params?.optionValue;
    const optionValue2 = route.params?.optionValue2;
    const [price, setPrice] = useState(undefined);
    const [total, setTotal] = useState(undefined);
    const Edit_Body = useRef(null);
    let setStateAll;
    let Edit_all_Body = <View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ตั้งค่าราคาและจำนวนสินค้าในคลังทุกตัวเลือก</Text>
        <View style={stylesMain.FlexRow}>
            <View style={{ width: 30, marginRight: 10, paddingTop: 15 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ราคา</Text>
            </View>
            <View style={[stylesSeller.BottomSheet_Box, { width: 250 }]}>
                <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]} placeholder="0.00" editable onChangeText={(value) =>
                    setPrice(value)}>{price}</TextInput>
            </View>
        </View>
        <View style={stylesMain.FlexRow}>
            <View style={{ width: 30, marginRight: 10, paddingTop: 15 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>คลัง</Text>
            </View>
            <View style={[stylesSeller.BottomSheet_Box, { width: 250 }]}>
                <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]} placeholder="0" editable onChangeText={(value) =>
                    setTotal(value)}>{total}</TextInput>
            </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity onPress={() => Edit_Body.current.close()}>
                <View style={stylesSeller.BottomSheet_Botton_cancel}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStateAll()}>
                <View style={stylesSeller.BottomSheet_Botton_OK}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
    return <>
        <BottomSheet ref={Edit_Body} height={250} duration={250}
            customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
            {Edit_all_Body()}
        </BottomSheet>
        <View style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>การตั้งค่าสำหรับทุกตัวเลือกสินค้า</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Edit_Body.current.open()}>
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
                {optionValue && optionValue.map((value, index) => {
                    if (index == 0 && value.name) {
                        return optionValue2 && optionValue2.map((value2, index2) => {
                            if (index2 == 0 && value2.name) {
                                return <>
                                    <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{optionName}</Text>
                                    </View>
                                    <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{optionName2}</Text>
                                    </View>
                                </>;
                            } else if (index2 == 0) {
                                return <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{optionName}</Text>
                                </View>;
                            }
                        })
                    }
                })}
            </View>
            <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 5 }}>
                {optionValue && optionValue.map((value, index) => {
                    if (value.name) {
                        return optionValue2 && optionValue2.map((value2, index2) => {
                            if (value2.name) {
                                return <View key={`${index}:${index2}`} style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                                    <View style={{ flexDirection: 'row', width: '30%' }}>
                                        <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                                {index2 == 0 && value.name}</Text>
                                        </View>
                                        <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
                                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>{value2.name}</Text>
                                        </View>
                                    </View>
                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                        <View style={stylesSeller.SizeSheet_Boxsize}></View>
                                    </View>
                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                        <View style={stylesSeller.SizeSheet_Boxsize}></View>
                                    </View>
                                </View>;
                            } else if (index2 == 0) {
                                return <View key={`${index}`} style={[stylesMain.FlexRow, stylesSeller.Up_product_Select]}>
                                    <View style={{ flexDirection: 'row', width: '30%' }}>
                                        <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                                                {index2 == 0 && value.name}</Text>
                                        </View>
                                    </View>
                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                        <View style={stylesSeller.SizeSheet_Boxsize}>
                                            <TextInput></TextInput>
                                        </View>
                                    </View>
                                    <View style={[stylesMain.ItemCenter, { width: '30%' }]}>
                                        <View style={stylesSeller.SizeSheet_Boxsize}></View>
                                    </View>
                                </View>;
                            }
                        })
                    }
                })}
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
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Code_Sale = (props) => {
    const { navigation } = props;
    const [selectedIndex, setSelectedIndex] = useState(0)
    const item = [{ name: 'เร็วๆ นี้' }, { name: 'กำลังดำเนินการ' }, { name: 'หมดอายุแล้ว' }];
    let Code_BOX = <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
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
        <View style={[stylesMain.FlexRow, {
            borderBottomWidth: 2, borderTopWidth: 2, justifyContent: 'space-around', paddingVertical: 10, marginVertical: 10
        }]}>
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
    </View>;
    return <>
        <View style={stylesMain.FrameBackground}>
            <TabBar sendData={value => setSelectedIndex(value.selectedIndex)} setVertical={4} item={item} />
        </View>
        <ScrollView>
            {Code_BOX}
        </ScrollView>
        <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, paddingVertical: 10 }]}
            onPress={() => NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 16 }, navigation })}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>สร้างโปรโมชันส่วนลด</Text>
        </TouchableOpacity>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Form_Code_Sale = (props) => {
    const { navigation } = props;
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [code, setCode] = useState(undefined);
    const [EXP_Day, setEXP_Day] = useState(undefined);
    const [EXP_Time, setEXP_Time] = useState(undefined);
    const [MFG_Day, setMFG_Day] = useState(undefined);
    const [MFG_Time, setMFG_Time] = useState(undefined);
    const [min_Price, setMin_Price] = useState(undefined);
    const [name, setName] = useState(undefined);
    let setStateChecked = (value, value2) => { setChecked(value); setChecked2(value2); };
    return <ScrollView>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ชื่อโค้ด</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                placeholder="สูงสุด100ตัวอักษร" maxLength={100} value={name} onChangeText={(name) => this.setState({ name })}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '30%' }]}>โค้ดส่วนลด</Text>
            <View style={[stylesMain.ItemCenter, { backgroundColor: '#EAEAEA', width: '30%', paddingVertical: 5 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>Fin</Text>
            </View>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right' }]} placeholder="สูงสุด6ตัวอักษร"
                maxLength={6} value={code} onChangeText={(value) => setCode(value)}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>วันที่เริ่มต้น</Text>
            <DatePicker style={{ width: 300 }} date={MFG_Day} mode="date" placeholder="select date" format="DD-MM-YYYY"
                minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }} onDateChange={(value) =>
                    setMFG_Day(value)} />
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>เวลาเริ่มต้น</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]} placeholder="ระบุ"
                maxLength={6} value={MFG_Time} onChangeText={(value) => setMFG_Time(value)}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>วันที่สิ้นสุด</Text>
            <DatePicker style={{ width: 300 }} date={EXP_Day} mode="date" placeholder="select date" format="DD-MM-YYYY"
                minDate="01-12-1920" maxDate="01-06-2020" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, }} onDateChange={(value) =>
                    setEXP_Day(value)} />
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>เวลาสิ้นสุด</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]} placeholder="ระบุ"
                maxLength={6} value={EXP_Time} onChangeText={(value) => setEXP_Time(value)}></TextInput>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ประเภทโค้ด</Text>
            <View style={stylesMain.FlexRow}>
                <CheckBox checked={checked} onPress={() => setStateChecked(true, false)} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ลด%</Text>
                <CheckBox checked={checked2} onPress={() => setStateChecked(false, true)} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ลดบาท</Text>
            </View>
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '20%' }]}>ราคาขั้นต่ำ</Text>
            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '80%', textAlign: 'right' }]}
                placeholder="ระบุราคาขั้นต่ำในการใช้คูปอง" maxLength={10} value={min_Price} onChangeText={(value) =>
                    setMin_Price(value)} />
        </View>
        <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 7 }, navigation })}
            style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '30%' }]}>เลือกสินค้าที่ใช้ได้</Text>
            <IconEntypo name='chevron-right' size={40} color={mainColor} />
        </TouchableOpacity>
    </ScrollView>;
};
///--------------------------------------------------------------------------///
export let Bank_Totel = (props) => {
    const { Bank_True, Bank_False, Bank_Default, Bank_Edit, navigation } = props;
    return <TouchableOpacity onPress={() =>
        NavigationNavigate({ goScreen: 'Seller_Topic', setData: { selectedIndex: 18 }, navigation })}
        style={[stylesMain.FlexRow, {
            backgroundColor: '#FFFFFF', width: '95%', padding: 10, borderColor: '#C4C4C4', borderWidth: 1, borderRadius: 5,
            marginTop: 10, height: 'auto', aspectRatio: 3, justifyContent: 'space-between'
        }]}>
        <View style={[stylesMain.FlexRow, { width: '70%' }]}>
            <View style={{ height: 80, width: 80 }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/MySQL/uploads/message/BBL-LOGO.jpg`, }} />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กรุงไทย (KTB)</Text>
                {Bank_True && <View style={stylesMain.FlexRow}>
                    <IconAntDesign name='checkcircle' size={15} color='#1BBE83' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#1BBE83', marginLeft: 10, }]}>
                        ตรวจสอบแล้ว</Text>
                </View>}
                {Bank_False && <View style={stylesMain.FlexRow}>
                    <IconAntDesign name='closecircleo' size={15} color='#EC3535' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#EC3535', marginLeft: 10, }]}>
                        ไม่ผ่านการตรวจสอบ</Text>
                </View>}
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>*******345</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ยนะ ชนะ</Text>
            </View>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
            {Bank_Default && <View style={{
                borderColor: '#1BBE83', borderWidth: 1, backgroundColor: '#ABEAD3', paddingHorizontal: 10, borderRadius: 5
            }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#1BBE83' }]}>ค่าเริ่มต้น</Text>
            </View>}
            {Bank_Edit && <View style={{
                borderColor: '#BE1B68', borderWidth: 1, backgroundColor: '#EAABAD', paddingHorizontal: 10, borderRadius: 5
            }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#BE1B68' }]}>ค่าเริ่มต้น</Text>
            </View>}
        </View>
    </TouchableOpacity>;
};
///--------------------------------------------------------------------------///
export let Bank_detall = (props) => {
    return <>
        <ScrollView>
            <View style={stylesMain.ItemCenter}>
                <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }]}>
                    <IconAntDesign name='checkcircle' size={20} color='#1BBE83' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#1BBE83', marginLeft: 10, }]}>
                        ตรวจสอบแล้ว</Text>
                </View>
                <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10 }]}>
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ชื่อธนาคาร</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>กรุงไทย (KTB)</Text>
                    </View>
                    <View style={{ height: 60, width: 60, marginLeft: 10 }}>
                        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: ip + '/MySQL/uploads/message/BBL-LOGO.jpg', }} />
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
                <View style={[stylesMain.FlexRow,
                { backgroundColor: '#FFFFFF', width: '95%', marginTop: 10, padding: 10, justifyContent: 'space-between' }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>หน้าบัญชีธนาคาร</Text>
                    <TouchableOpacity style={stylesMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor, marginRight: 10 }]}>
                            ดูเอกสาร</Text>
                        <IconEntypo name='eye' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={[stylesMain.ItemCenter, { height: 50, backgroundColor: mainColor }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ตั้งเป็นบัญชีตั้งต้น</Text>
        </TouchableOpacity>
    </>;
};