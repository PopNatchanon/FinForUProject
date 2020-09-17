///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../customComponents';
import { ExitAppModule } from '../../Main/Main';
import { Product_income } from '../../Seller/Income/Income';
import { TabBar } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='การเงิน' />
        <Finance {...props} />
        {/* <ExitAppModule /> */}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Finance = (props) => <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <View style={[stylesMain.ItemCenter, {
            backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, marginVertical: 10, padding: 10, width: '49%',
        }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>0 THB </Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดเงินที่ถอนได้</Text>
        </View>
        <View style={[stylesMain.ItemCenter, {
            backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, marginVertical: 10, padding: 10, width: '49%',
        }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>0 THB </Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดเงินที่ถอนแล้ว</Text>
        </View>
    </View>
    <TouchableOpacity activeOpacity={1} onPress={() =>
        NavigationNavigate({ goScreen: 'Seller_Money_History', navigation: props.navigation, })}>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ประวัติการถอนเงิน</Text>
            <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
        </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() =>
        NavigationNavigate({ goScreen: 'Seller_Money_PIN', navigation: props.navigation, setData: { Withdraw: 'Withdraw' }, })}>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ถอนเงิน</Text>
            <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
        </View>
    </TouchableOpacity>
</View>;