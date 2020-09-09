///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
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
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesProfile from '../../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ประวัติการถอนเงิน' />
        <Withdrawal_history {...props} cokie={cokie} currentUser={currentUser} />
    </SafeAreaView>;
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
///----------------------------------------------------------------------------------------------->>>>
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