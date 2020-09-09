///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
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
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, GetData, GetServices } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='รายได้ของฉัน' />
        <My_income />
    </SafeAreaView>;
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