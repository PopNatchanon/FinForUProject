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
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <ScrollView>
            <Business_Profile {...props} />
        </ScrollView>
        {/* <ExitAppModule /> */}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Business_Profile = (props) => <>
    <View style={[stylesMain.FrameBackground, { alignItems: 'center', }]}>
        <View style={{
            backgroundColor: '#128BCE', borderColor: mainColor, borderRadius: 50, borderWidth: 2, height: 100, marginTop: 20, padding: 10,
            width: 100,
        }}>
            <FastImage resizeMode={FastImage.resizeMode.stretch} source={{ uri: `${ip}/MySQL/uploads/addmin/unnamed.png`, }}
                style={stylesMain.BoxProduct1Image} />
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>ชื่อ นาย ชนะชัย โอชานะ</Text>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginBottom: 10, marginTop: 10, width: '80%', }]}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
            { borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 30, width: '49%', }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>ยอดเงิน</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>77,700</Text>
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
            { borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 30, width: '49%', }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>แชร์</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>256</Text>
            </View>
        </View>
    </View>
    <View style={{ backgroundColor: '#FFFFFF' }}>
        <View style={[stylesProfile.ListMenuList, { justifyContent: 'center', padding: 10 }]}>
            <View style={stylesProfile.ListMenuListSub}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginRight: 10 }]}>ระยะเวลา</Text>
                <View style={{ alignItems: 'center', borderColor: '#EAEAEA', borderWidth: 1, width: '60%', }}>
                    <ModalDropdown defaultValue={'All'} dropdownStyle={{ borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: '43%', }}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]} options={['All', 'Today',
                            'Last 7 Days', 'This Month']} textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]} />
                </View>
            </View>
        </View>
        <View style={[stylesProfile.ListMenuList, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ยอดเงินสะสม</Text>
            <View style={stylesProfile.ListMenuListSub}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginRight: 10 }]}>+0 (+0.00%)</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>0 THB</Text>
            </View>
        </View>
        <View style={[stylesProfile.ListMenuList, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>จำนวนคลิก</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>0 ครั้ง</Text>
        </View>
        <View style={[stylesProfile.ListMenuList, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ต่อคลิก</Text>
            <View style={stylesProfile.ListMenuListSub}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginRight: 10 }]}>+0 (+0.00%)</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>0 THB</Text>
            </View>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() =>
            NavigationNavigate({ goScreen: 'Business_Product', navigation: props.navigation, })}>
            <View style={[stylesProfile.ListMenuList, { paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10 }]}>รายการสินค้า</Text>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() =>
            NavigationNavigate({ goScreen: 'Business_Growth', navigation: props.navigation, })}>
            <View style={[stylesProfile.ListMenuList, { paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10 }]}>การเติบโต</Text>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
            </View>
        </TouchableOpacity>
    </View>
</>;