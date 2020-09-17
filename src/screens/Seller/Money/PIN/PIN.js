///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useRef, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
import { GetData, GetServices } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontSize2, FontSize3, } = stylesFont;
const { BoxProduct1Image, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(PIN);
function PIN(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const getSource = (v) => { setActiveGetSource(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: (v) => getSource(v) });
    }, [activeGetSource]);
    const MainProps = { ...props, cokie, currentUser }
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...MainProps} backArrow titleHead='PIN' />
        <PIN_Code {...MainProps} />
        <ExitApp {...MainProps} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const PIN_Code = (props) => {
    const { cokie, currentUser, route } = props;
    const [activeInput, setActiveInput] = useState(true);
    const [checkFail, setCheckFail] = useState(0);
    const [code, setCode] = useState('');
    const Image1 = require('../../../../../icon/001.png');
    const pinInput = useRef(null);
    const Withdraw = route.params?.Withdraw;
    const resetInput = (v, v2) => { setActiveInput(v); setCode(v2); };
    const _checkCode = (c) => {
        const dataBody = { id_customer: currentUser?.id_customer, pin: c };
        const uri = `${finip}/store_transfer/login_pin`;
        GetServices({
            Authorization: cokie, dataBody, getDataSource: (v) => {
                if (!v.status) {
                    alert(v.message);
                    setActiveInput(false);
                    setCheckFail(checkFail + 1);
                    pinInput.current.shake().then(() => resetInput(true, ''));
                    // setTimeout(() => this.setState({ activeInput: true, }), 2000);
                } else {
                    NavigationNavigate({
                        ...props, goScreen: Withdraw == "Withdraw" ? 'Seller_Money_Withdrawal' : Withdraw == "History" ?
                            'Seller_Money_History' : 'Seller_Money_Bank',
                    });
                };
            }, uriPointer: uri,
        });
    };
    return <ScrollView>
        <View style={{ alignItems: 'center', }}>
            <View style={{ height: height * 0.30, padding: 10, width: width * 0.60, }}>
                <FastImage source={Image1} style={BoxProduct1Image} />
            </View>
            <Text style={[FontFamilyBold, FontSize2]}>ระบุ PIN</Text>
            <Text style={[FontFamilyBold, FontSize3, { marginBottom: 10 }]}>ใส่รหัส PIN 6 หลัก</Text>
            <SmoothPinCodeInput autoFocus cellStyle={{ borderColor: !activeInput ? 'red' : '#111', borderRadius: 5, borderWidth: 2, }}
                codeLength={6} keyboardType={'numeric'} mask={<View
                    style={{ backgroundColor: '#EBB34D', borderRadius: 25, height: 15, width: 15, }} />} onBackspace={() =>
                        console.log('No more back.')} onFulfill={(v) => _checkCode(v)} onTextChange={(c) => resetInput(true, c)} password
                placeholder={<View style={{ backgroundColor: '#0A55A6', borderRadius: 25, height: 15, width: 15, }} />} ref={pinInput}
                restrictToNumbers={true} textStyle={{ color: !activeInput ? 'red' : '#111', fontSize: 24, }} value={code} />
        </View>
    </ScrollView>;
};