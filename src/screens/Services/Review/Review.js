///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
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
import { Portfolio_owner } from '../ContentMarketing/ContentMarketing';
import { About_ImageTab } from '../About/About';
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Review);
function Review(props) {
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='Review' />
        <ScrollView>
            <Review_Us />
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Review_Us = (props) => {
    return <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', borderColor: '#C9C9C9', borderWidth: 1, margin: 5, padding: 5 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>Review</Text>
        <View style={{ backgroundColor: '#FFFFFF', width: '90%' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชื่อผู้ติดต่อ*</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>หมายเลขโทรศัพท์*</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อีเมล*</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>Link</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เขียนรีวิว</Text>
            <View style={{ borderWidth: 1, height: 100, borderColor: '#C9C9C9' }}></View>
        </View>
        <View style={stylesMain.ItemCenter}>
            <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, width: 80, height: 40, marginTop: 10, borderRadius: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
}