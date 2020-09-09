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
        <AppBar {...props} backArrow titleHead='ตอบกลับความคิดเห็น' />
        <Seller_Comment_Reply />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Comment_Reply = (props) => {
    const [detail, serDetail] = useState('');
    return <View>
        <Seller_Comment />
        <View style={stylesMain.FrameBackground}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>เขียนการตอบกลับ</Text>
            <View style={stylesMain.ItemCenter}>
                <View style={{ width: '80%', height: 120, padding: 5, backgroundColor: '#E3E3E3', margin: 5, }}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]} placeholder="" multiline
                        editable maxLength={5000} value={detail} onChangeText={(value) => serDetail(value)}></TextInput>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={[stylesMain.ItemCenter,
                    { height: 30, width: 100, backgroundColor: mainColor, borderRadius: 5, margin: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตอบกลับ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Comment = (props) => {
    const { Comment_Reply, navigation } = props;
    return <View style={stylesMain.FrameBackground}>
        <View style={{
            height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10,
            borderColor: '#EAEAEA', borderBottomWidth: 1,
        }}>
            <View style={stylesMain.FlexRow}>
                <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { borderColor: '#EAEAEA', borderBottomWidth: 1, padding: 5, }]}>
            <View style={stylesMain.FlexRow}>
                <View style={{ height: 80, width: 80, }}>
                    <FastImage style={stylesMain.BoxProduct1Image}
                        source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
                </View>
                <View style={{ padding: 5, width: '55%' }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                </View>
            </View>
            {Comment_Reply ?
                <TouchableOpacity style={[stylesMain.FlexRow, { alignItems: 'flex-end' }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Comment', navigation })}>
                    <IconFeather name='edit' size={15} color='#20BDA1' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#20BDA1' }]}> เขียนตอบกลับ</Text>
                </TouchableOpacity> : null}
        </View>
        <View style={stylesMain.ItemCenter}>
            <View style={{ width: '80%', backgroundColor: '#E3E3E3', height: 80, margin: 10, padding: 10 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#A9A8A8' }]}>สินค้าร้านดีมากเลย</Text>
            </View>
        </View>
    </View>;
};