///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const { contain, cover, stretch, } = FastImage.resizeMode;
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesStore from '../../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../../Main/Main';
import { TabBar } from '../../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate, ButtomTab } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
import { Portfolio_Image, Portfolio_owner } from '../ContentMarketing/ContentMarketing';
import { Contact_Us } from '../FinService';
import { Button_Bar } from '../FinService';
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Content);
function Content(props) {
    return <SafeAreaView style={stylesMain.SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='Content' />
        <ScrollView>
            <Contact_Us />
            <Address_About />
            <Location />
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Address_About = (props) => {
    return <View style={{ padding: 5, margin: 5, backgroundColor: '#FFFFFF' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ที่อยู่</ Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> บริษัท ฟินช้อปปิ้งมอล</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> 198 ม.4 ต.อ่างทอง อ.เมือง จ.ราชบุรี 7000</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ติดต่อสอบถาม</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> เบอรโทรศัพท์ : 089-852-5215</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> EMAIL : FIN_SHOPPINGMALL@GMAIL.COM</Text>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Location = (props) => {
    const Location_image = { uri: `${ip}/MySQL/uploads/Service/location.jpg`, };
    return <View style={{ padding: 5, margin: 5, backgroundColor: '#FFFFFF' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>แผนที่</Text>
        <View style={{ height: 210, borderColor: '#C9C9C9', borderWidth: 1, borderRadius: 5 }}>
            <FastImage resizeMode={cover} source={Location_image} style={stylesMain.BoxProduct1Image} />
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
