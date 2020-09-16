///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyText, FontSize6, FontSize7 } = stylesFont;
const { BoxProduct1Image, FlexRow, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Bank);
function Bank(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} UpBankBar backArrow titleHead='บัญชีธนาคาร' />
        <Bank_Totel {...props} Bank_True Bank_Default />
        <Bank_Totel {...props} Bank_False Bank_Edit />
    </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export let Bank_Totel = (props) => {
    const { Bank_True, Bank_False, Bank_Default, Bank_Edit } = props;
    return <TouchableOpacity onPress={() =>
        NavigationNavigate({ ...props, goScreen: 'Seller_Money_Bank_Detail', })}
        style={[FlexRow, {
            aspectRatio: 3, backgroundColor: '#FFFFFF', borderColor: '#C4C4C4', borderRadius: 5, borderWidth: 1, height: 'auto',
            justifyContent: 'space-between', marginTop: 10, padding: 10, width: '95%',
        }]}>
        <View style={[FlexRow, { width: '70%' }]}>
            <View style={{ height: 80, width: 80 }}>
                <FastImage source={{ uri: `${ip}/MySQL/uploads/message/BBL-LOGO.jpg`, }} style={BoxProduct1Image} />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={[FontFamilyText, FontSize6]}>กรุงไทย (KTB)</Text>
                {Bank_True && <View style={FlexRow}>
                    <IconAntDesign color='#1BBE83' name='checkcircle' size={15} />
                    <Text style={[FontFamilyText, FontSize7, { color: '#1BBE83', marginLeft: 10, }]}>ตรวจสอบแล้ว</Text>
                </View>}
                {Bank_False && <View style={FlexRow}>
                    <IconAntDesign color='#EC3535' name='closecircleo' size={15} />
                    <Text style={[FontFamilyText, FontSize7, { color: '#EC3535', marginLeft: 10, }]}>ไม่ผ่านการตรวจสอบ</Text>
                </View>}
                <Text style={[FontFamilyText, FontSize6]}>*******345</Text>
                <Text style={[FontFamilyText, FontSize6]}>ยนะ ชนะ</Text>
            </View>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
            {Bank_Default && <View
                style={{ backgroundColor: '#ABEAD3', borderColor: '#1BBE83', borderRadius: 5, borderWidth: 1, paddingHorizontal: 10, }}>
                <Text style={[FontFamilyText, FontSize6, { color: '#1BBE83' }]}>ค่าเริ่มต้น</Text>
            </View>}
            {Bank_Edit && <View
                style={{ backgroundColor: '#EAABAD', borderColor: '#BE1B68', borderRadius: 5, borderWidth: 1, paddingHorizontal: 10, }}>
                <Text style={[FontFamilyText, FontSize6, { color: '#BE1B68' }]}>ค่าเริ่มต้น</Text>
            </View>}
        </View>
    </TouchableOpacity>;
};