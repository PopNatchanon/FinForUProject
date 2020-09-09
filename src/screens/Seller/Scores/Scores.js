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
import { Seller_Comment } from '../Comment/Comment';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='คะแนนของฉัน' />
        <ScrollView>
            <Seller_Score {...props} />
        </ScrollView>
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Score = (props) => {
    return <View>
        <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
            <View style={stylesMain.ItemCenter}>
                <View style={[stylesMain.ItemCenter,
                { borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>4.6 คะแนน</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                        <IconFontAwesome name='star' size={20} color='#FFAC33' />
                    </View>
                </View>
            </View>
        </View>
        <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ความคิดเห็น</Text></View>
        <Seller_Comment {...props} Comment_Reply />
        <Seller_Comment {...props} Comment_Reply />
        <Seller_Comment {...props} Comment_Reply />
    </View>;
};