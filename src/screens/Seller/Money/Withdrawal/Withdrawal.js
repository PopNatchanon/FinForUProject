///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize4, FontSize5, FontSize6, } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
function Withdrawal(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ถอนเงิน' />
        <Confirm_Bank {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Confirm_Bank = (props) => {
    const Image1 = { uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`, };
    const [money, setMoney] = useState(undefined);
    return <>
        <View style={[FrameBackground, { paddingHorizontal: 10, paddingBottom: 10 }]}>
            <Text style={[FontFamilyText, FontSize3, { margin: 5 }]}>ถอนเงินไปที่</Text>
            <View style={FlexRow}>
                <FastImage source={Image1} style={{ borderWidth: 3, height: 100, width: 100, }} />
                <View style={{ margin: 10 }}>
                    <Text style={[FontFamilyText, FontSize4]}>ธนาคารกรุงเทพ</Text>
                    <Text style={[FontFamilyText, FontSize4]}>* *** *** *232</Text>
                </View>
            </View>
        </View>
        <View style={[FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[FontFamilyText, FontSize3, { margin: 5 }]}>จำนวนเงินที่ทำการถอน</Text>
            <View style={{
                alignItems: 'center', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, flexDirection: 'row', height: 50, width: '100%',
            }}>
                <TextInput maxLength={50} onChangeText={(v) => setMoney(v)} placeholder="" style={[FontFamilyText, FontSize5,
                    { width: '90%' }]} value={money}>
                </TextInput>
                <Text style={[FontFamilyBold, FontSize4]}>THB</Text>
            </View>
            <Text style={[FontFamilyBold, FontSize6]}>ระยะเวลาดำเนินการ : 3-5 วันทำการ</Text>
        </View>
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', }}>
            <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Money_PIN_Mail', })}
                style={[ItemCenter, { backgroundColor: mainColor, borderRadius: 5, height: 50, marginVertical: 10, width: '80%', }]}>
                <Text style={[FontFamilyBold, FontSize3, , { color: '#FFFFFF' }]}>ยืนยันการถอนเงิน</Text>
            </TouchableOpacity>
        </View>
    </>;
};