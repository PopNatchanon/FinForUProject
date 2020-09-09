///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { width, height } = Dimensions.get('window');
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
import { NavigationNavigate, AppBar } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ถอนเงิน' />
        <PIN_Code_Mail {...props} />
    </SafeAreaView>;
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
                    NavigationNavigate({ goScreen: 'Seller_Money_Withdrawal', navigation });
                };
            }
        });
    };
    return <ScrollView>
        <View style={{ alignItems: 'center', }}>
            <View style={{ padding: 10, width: width * 0.60, height: height * 0.30 }}>
                <FastImage style={stylesMain.BoxProduct1Image} source={require('../../../../../../icon/security-Icon.png')} />
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