///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView, Image,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesFont, { normalize } from '../../../../style/stylesFont';
import stylesLogin from '../../../../style/stylesLoginScreen';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices } from '../../../../customComponents/Tools';
import { Address_Customar } from '../../../Customer/Setting/Edit/Address/Address';
import { NavigationNavigate, AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../navigator/IpConfig';
import { ExitAppModule } from '../../../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ที่อยู่ร้านค้าของฉัน' />
        <Setting_Address_Store {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export let Setting_Address_Store = (props) => {
    const { navigation } = props;
    return <View>
        <Address_Customar MainAddress />
        <Address_Customar />
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 475 }}>
            <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Cart_Account', navigation })}>
                <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};