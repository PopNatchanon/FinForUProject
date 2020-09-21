///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import { Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert, } from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { height, width } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
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
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfile from '../../../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../../../customComponents/Tools';
import { NavigationNavigate, AppBar, ExitApp } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontSize5, } = stylesFont;
const { BoxProduct1Image, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Mail);
function Mail(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (v) => { setActiveGetSource(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: (v) => getSource(v) });
    }, [activeGetSource]);
    const MainProps = { ...props, cokie, currentUser }
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...MainProps} backArrow titleHead='ถอนเงิน' />
        <PIN_Code_Mail {...MainProps} />
        <ExitApp {...MainProps} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let PIN_Code_Mail = (props) => {
    const { cokie, currentUser, route } = props;
    const [activeInput, setActiveInput] = useState(true);
    const [checkFail, setCheckFail] = useState(0);
    const [code, setCode] = useState('');
    const Image1 = require('../../../../../../icon/security-Icon.png');
    const pinInput = useRef(null);
    const Withdraw = route.params?.Withdraw;
    const resetInput = (v, v2) => { setActiveInput(v); setCode(v2); };
    const _checkCode = (c) => {
        const dataBody = { id_customer: currentUser?.id_customer, pin: c };
        const uri = `${finip}/store_transfer/login_pin`;
        GetServices({
            Authorization: cokie, dataBody, getDataSource: (v) => {
                if (!v.status) {
                    alert(v.message); setActiveInput(false); setCheckFail(checkFail + 1);
                    pinInput.current.shake().then(() => resetInput(true, ''));
                    // setTimeout(() => this.setState({ activeInput: true, }), 2000);
                } else { NavigationNavigate({ ...props, goScreen: 'Seller_Money_Withdrawal', }); };
            }, uriPointer: uri,
        });
    };
    return <ScrollView>
        <View style={{ alignItems: 'center', }}>
            <View style={{ height: height * 0.30, padding: 10, width: width * 0.60, }}>
                <FastImage source={Image1} style={BoxProduct1Image} />
            </View>
            <Text style={[FontFamilyBold, FontSize5, { color: '#D54000', marginBottom: 10, }]}>
                กรุณายืนยันที่อีเมลอีกครั้งภายในเวลา 30 นาที</Text>
            <SmoothPinCodeInput autoFocus cellStyle={{ borderColor: !activeInput ? 'red' : '#111', borderRadius: 5, borderWidth: 2, }}
                codeLength={6} keyboardType={'numeric'} onBackspace={() => console.log('No more back.')} onFulfill={(v) => _checkCode(v)}
                onTextChange={(c) => resetInput(true, c)} mask={<View
                    style={{ backgroundColor: '#1ED37B', borderRadius: 25, height: 15, width: 15, }} />} password placeholder={<View
                        style={{ backgroundColor: '#0A55A6', borderRadius: 25, height: 15, width: 15, }} />} ref={pinInput}
                restrictToNumbers={true} textStyle={{ color: !activeInput ? 'red' : '#111', fontSize: 24, }} value={code} />
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
//         NavigationNavigate({ goScreen: 'Seller_Money', navigation })
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