///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyText, FontSize6 } = stylesFont;
const { BoxProduct1Image, FlexRow, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} deleteBar backArrow titleHead='บัญชีธนาคาร' />
        <Bank_detail />
    </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export let Bank_detail = (props) => {
    const Image1 = { uri: `${ip}/MySQL/uploads/message/BBL-LOGO.jpg`, };
    return <>
        <ScrollView>
            <View style={ItemCenter}>
                <View style={[FlexRow, { backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, width: '95%', }]}>
                    <IconAntDesign color='#1BBE83' name='checkcircle' size={20} />
                    <Text style={[FontFamilyText, FontSize6, { color: '#1BBE83', marginLeft: 10, }]}>ตรวจสอบแล้ว</Text>
                </View>
                <View style={[FlexRow, { backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, width: '95%', }]}>
                    <View>
                        <Text style={[FontFamilyText, FontSize6]}>ชื่อธนาคาร</Text>
                        <Text style={[FontFamilyText, FontSize6, { marginLeft: 10 }]}>กรุงไทย (KTB)</Text>
                    </View>
                    <View style={{ height: 60, marginLeft: 10, width: 60, }}>
                        <FastImage source={Image1} style={BoxProduct1Image} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, width: '95%', }}>
                    <Text style={[FontFamilyText, FontSize6]}>ชื่อบัญชีธนาคาร</Text>
                    <Text style={[FontFamilyText, FontSize6, { marginLeft: 10 }]}>ยนะ ชนะ</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, width: '95%', }}>
                    <Text style={[FontFamilyText, FontSize6]}>เลขที่บัญชี</Text>
                    <Text style={[FontFamilyText, FontSize6, { marginLeft: 10 }]}>*******345</Text>
                </View>
                <View style={[FlexRow,
                    { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 10, padding: 10, width: '95%', }]}>
                    <Text style={[FontFamilyText, FontSize6]}>หน้าบัญชีธนาคาร</Text>
                    <TouchableOpacity style={FlexRow}>
                        <Text style={[FontFamilyText, FontSize6, { color: mainColor, marginRight: 10 }]}>ดูเอกสาร</Text>
                        <IconEntypo name='eye' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={[ItemCenter, { backgroundColor: mainColor, height: 50, }]}>
            <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF' }]}>ตั้งเป็นบัญชีตั้งต้น</Text>
        </TouchableOpacity>
    </>;
};