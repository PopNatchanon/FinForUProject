///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
export const { width, height } = Dimensions.get('window');
import RNFetchBlob from 'rn-fetch-blob';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../../style/stylesFont';
import stylesLogin from '../../../../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, GetFetch, } from '../../../../../customComponents';
import { ExitAppModule, } from '../../../../Main/Main';
import { GetData, GetServicesBlob } from '../../../../../customComponents/Tools';
import { Seller_SettingImage } from '../../../../Seller/ProfileEdit/ProfileEdit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
    }, [activeGetSource]);
    return <SafeAreaView style={[stylesMain.SafeAreaView]}>
        <Edit_Address {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Address
export let Edit_Address = (props) => {
    const { cokie, currentUser, navigation, route } = props;
    const no_invoice = route.params?.no_invoice;
    const type = route.params?.type;
    const type_special = route.params?.type_special;
    const [activeReset, setActiveReset] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    var dataBody = type == 'select' ?
        { id_customer: currentUser?.id_customer, no_invoice: no_invoice, } : { id_customer: currentUser?.id_customer, };
    var uri = `${finip}/${(type == 'select' ? 'bill/bill_list' : 'profile/my_address')}`;
    let getData = (value) => { setActiveReset(false); setDataService(value); };
    let getData2 = (value) => { setActiveReset(true); setDataService2(value); };
    useEffect(() => {
        activeReset && cokie && currentUser?.id_customer &&
            GetFetch({ Authorization: cokie, dataBody, getDataSource: (value) => getData(value), uriPointer: uri, });
    }, [activeReset && cokie && currentUser?.id_customer]);
    return <View style={{ flex: 1, height: '100%' }}>
        <AppBar {...props} backArrow titleHead={type_special == 'tax' ? 'ที่อยู่ในใบกำกับภาษี' : 'ที่อยู่ของฉัน'} />
        <ScrollView style={{ height: 1000 }}>
            {!activeReset && dataService?.list_address?.map((value, index) => <Address_Customar {...props} dataService={value} index={index}
                key={index} type={type} type_special={type_special} updateData2={(value) => getData2(value)} />)}
        </ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => NavigationNavigate({
                goScreen: 'Cart_Account', navigation, setData: { type_special, updateData2: (value) => getData2(value), },
            })}>
                <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Address_Customar
export let Address_Customar = (props) => {
    let returnValue = (value) => { props.route.params.updateData(value); props.navigation.goBack(); };
    return <TouchableOpacity key={props.index} onPress={() => props.type == 'select' ?
        returnValue(props.dataService.id_address) : NavigationNavigate({
            goScreen: 'Cart_Account', navigation: props.navigation, setData: {
                id_address: props.dataService.id_address, type: 'edit', type_special: props.type_special, updateData2: value =>
                    props.updateData2(value),
            },
        })}>
        <View style={stylesProfileTopic.Address_Customar}>
            <View style={stylesProfileTopic.Address_Customar_Box}>
                <View style={stylesMain.FlexRow}>
                    <IconEvilIcons color={mainColor} name='location' size={30} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ที่อยู่ในการจัดส่ง</Text>
                </View>
                {props.dataService.main_address == 1 && <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>
                    [ค่าเริ่มต้น]</Text>}
            </View>
            <View style={{ marginBottom: 10, marginLeft: 50, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8 }]}>
                    {`${props.dataService.customer_name} | ${props.dataService.telephone_number}`}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { paddingLeft: 8, width: '90%', }]}>
                    {props.dataService.address}</Text>
            </View>
        </View>
    </TouchableOpacity>;
};