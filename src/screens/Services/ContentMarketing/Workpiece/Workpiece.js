///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const { contain, cover, stretch, } = FastImage.resizeMode;
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesStore from '../../../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../../../Main/Main';
import { TabBar } from '../../../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate, ButtomTab } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../navigator/IpConfig';
import { Portfolio_Image, } from '../ContentMarketing';
import { Reviews_Service } from '../../FinService';
///----------------------------------------------------------------------------------------------->>>> Main

const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Workpiece);
function Workpiece(props) {
    return (
        <SafeAreaView style={stylesMain.SafeAreaViews}>
            <AppBar {...props} backArrow titleHead='Content Marketing' />
            <ScrollView>
                <Portfolio />
                <Reviews_Service />
                <Portfolio_Image />
            </ScrollView>
            <ExitAppModule {...props} />
        </SafeAreaView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export let Portfolio = (props) => {
    const ImagePortfolio = { uri: `${ip}/MySQL/uploads/Service/agen1.jpg`, };
    return <View style={[stylesMain.FlexRow, {
        borderColor: mainColor, borderWidth: 3, margin: 5, backgroundColor: '#FFFFFF',
        borderRadius: 10, justifyContent: 'space-between', padding: 5, height: height * 0.20,
    }]}>
        <View style={{ width: width * 0.66 }}>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>TEAM : A</Text>
                <View style={stylesMain.FlexRow}>
                    <IconEntypo name='star' size={20} />
                    <IconEntypo name='star' size={20} />
                    <IconEntypo name='star' size={20} />
                    <IconEntypo name='star' size={20} />
                    <IconEntypo name='star' size={20} />
                </View>
            </View>
            <View style={{ borderColor: mainColor, borderWidth: 1, padding: 5, height: height * 0.13, borderRadius: 10, justifyContent: 'center' }}>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมวดหมู่ : อาหาร, ท่องเที่ยว</Text>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>บริษัท ABM Connect </Text>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>รับทำประชาสัมพันธ์ พีอาร์ออนไลน์ โฆษณาออนไลน์</Text>
            </View>
        </View>
        <View style={[stylesMain.ItemCenter, { width: width * 0.25 }]}>
            <FastImage resizeMode={contain} source={ImagePortfolio} style={{ height: 90, width: 90, borderRadius: 5, borderColor: mainColor, borderWidth: 1 }} />
        </View>
    </View>
}