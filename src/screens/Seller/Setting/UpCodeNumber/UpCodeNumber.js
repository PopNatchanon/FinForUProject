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
        <AppBar {...props} backArrow titleHead='เพิ่มเลขพัสดุ' />
        <Up_Code_Number />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export let Up_Code_Number = (props) => {
    const [numberCode, setNumberCode] = useState(undefined);
    const [show, setShow] = useState(false);
    handle = (value) => setShow(value);
    let _renderHeader = <IconFontAwesome name='check' size={50} color='white' />;
    return <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>กรอกเลขพัสดุ</Text>
        <View style={{ alignItems: 'center' }}>
            <View style={stylesSeller.Up_Code_Number_BoxTextInput}>
                <TextInput style={stylesFont.FontFamilyText} fontSize={15} placeholder="" multiline editable maxLength={50}
                    value={numberCode} onChangeText={(value) => setNumberCode(value)}>
                </TextInput>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FF0000' }]}>*กรุณาตรวจเลขพัสดุ</Text>
            </View>
            <View style={[stylesSeller.BottomSheet_Botton, { paddingTop: 15 }]}>
                <TouchableOpacity>
                    <View style={stylesSeller.BottomSheet_Botton_cancel}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handle(true)}>
                    <View style={stylesSeller.BottomSheet_Botton_OK}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <SCLAlert theme="success" headerIconComponent={_renderHeader} show={show} title="กรุณาตรวจสอบหมายเลขพัสดุ"
            titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
            subtitle="tnt1237174823403268 " subtitleStyle={stylesFont.FontFamilyText} onRequestClose={() => null}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
                <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
                    containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
                <SCLAlertButton theme="success" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
                    containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
            </View>
        </SCLAlert>
    </View>;
};