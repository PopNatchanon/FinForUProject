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
        <AppBar {...props} backArrow titleHead='จัดการโฆษณา' />
        <Seller_Advertisement_PacketBuy {...props} />
    </SafeAreaView>;
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