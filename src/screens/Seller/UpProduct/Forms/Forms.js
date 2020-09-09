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
        <AppBar {...props} backArrow titleHead='เพิ่มสินค้า' saveBar />
        <Up_Product_Select {...props} />
    </SafeAreaView>;
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