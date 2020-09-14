///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize4, FontSize5, FontSize7, } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
const { BottomSheet_Botton, BottomSheet_Botton_cancel, BottomSheet_Botton_OK, Up_Code_Number_BoxTextInput, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(UpCodeNumber);
function UpCodeNumber(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='เพิ่มเลขพัสดุ' />
        <Up_Code_Number />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export const Up_Code_Number = (props) => {
    const [numberCode, setNumberCode] = useState(undefined);
    const [show, setShow] = useState(false);
    const handle = (value) => setShow(value);
    const _renderHeader = <IconFontAwesome color='white' name='check' size={50} />;
    return <View style={FrameBackground}>
        <Text style={[FontFamilyBold, FontSize4, { margin: 10 }]}>กรอกเลขพัสดุ</Text>
        <View style={{ alignItems: 'center' }}>
            <View style={Up_Code_Number_BoxTextInput}>
                <TextInput editable fontSize={15} maxLength={50} multiline onChangeText={(value) => setNumberCode(value)} placeholder=""
                    style={FontFamilyText} value={numberCode} />
                <Text style={[FontFamilyBold, FontSize7, { color: '#FF0000' }]}>*กรุณาตรวจเลขพัสดุ</Text>
            </View>
            <View style={[BottomSheet_Botton, { paddingTop: 15 }]}>
                <TouchableOpacity>
                    <View style={BottomSheet_Botton_cancel}>
                        <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handle(true)}>
                    <View style={BottomSheet_Botton_OK}>
                        <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <SCLAlert headerIconComponent={_renderHeader} onRequestClose={() => null} show={show} subtitle="tnt1237174823403268 "
            subtitleStyle={FontFamilyText} title="กรุณาตรวจสอบหมายเลขพัสดุ" titleStyle={[FontFamilyBold, FontSize2]} theme="success">
            <View style={[FlexRow, ItemCenter, { justifyContent: 'space-around' }]}>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
                    textStyle={FontFamilyText} theme="default">ยกเลิก</SCLAlertButton>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
                    textStyle={FontFamilyText} theme="success">ยืนยัน</SCLAlertButton>
            </View>
        </SCLAlert>
    </View>;
};