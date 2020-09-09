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
        <AppBar {...props} backArrow titleHead='เลือกสินค้า' />
        <Seller_ProductSelect />
    </SafeAreaView>;
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