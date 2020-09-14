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
import { Portfolio_Image, Portfolio_owner } from '../ContentMarketing/ContentMarketing';
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(GraphicDesign);
function GraphicDesign(props) {
    return (
        <SafeAreaView style={stylesMain.SafeAreaViews}>
            <AppBar {...props} backArrow titleHead='GraphicDesign' />
            <ScrollView>
                <GraphicDesign_About />
                <Portfolio_owner />
                <Portfolio_Image />
            </ScrollView>
            <ExitAppModule {...props} />
        </SafeAreaView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export let GraphicDesign_About = (props) => {
    const Design = { uri: `${ip}/MySQL/uploads/Service/VideoPortfolio/11.jpg`, };
    const Design1 = { uri: `${ip}/MySQL/uploads/Service/VideoPortfolio/7.jpg`, };
    const Design2 = { uri: `${ip}/MySQL/uploads/Service/VideoPortfolio/8.jpg`, };
    const Design3 = { uri: `${ip}/MySQL/uploads/Service/VideoPortfolio/9.jpg`, };
    const Design4 = { uri: `${ip}/MySQL/uploads/Service/VideoPortfolio/10.jpg`, };
    return <View style={stylesMain.FrameBackground}>
        <View style={[stylesMain.ItemCenter, { borderBottomColor: '#ECD295', borderBottomWidth: 5 }]}>
            <View style={{ alignItems: 'center', backgroundColor: mainColor, borderRadius: width / 2, margin: 10, paddingHorizontal: 20, width: width * 0.5 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>GraphicDesign</Text>
            </View>
        </View>
        <View style={stylesMain.ItemCenter}>
            <View style={{ width: '95%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    ถ้าคุณเป็นคนหนึ่งที่เวลาเห็นโปสเตอร์หนัง ปกอัลบั้มของศิลปิน หรือภาพประกอบในแม็กกาซีน
                    แล้วรู้สึกคันไม้คันมืออยากลงมือทำอะไรกับมันสักอย่าง นั่นถือเป็นสัญญาณที่ยอดเยี่ยมสำหรับจุดเริ่มต้นสู่หนทางของ
                    Graphic Designer ของคุณแล้ว</Text>
                <FastImage resizeMode={cover} source={Design} style={{ height: 150, width: '100%' }} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    นักออกแบบ และศิลปินส่วนใหญ่ต่างก็เริ่มต้นจากความชื่นชอบส่วนตัวกันทั้งนั้น เพราะแน่นอนว่าไม่มีใครเกิดมาปุ๊บ
                    ก็สามารถเป็นดีไซเนอร์มือฉมังได้เลย ทุกคนต่างก็ต้องผ่านช่วงเวลาเหล่านี้กันมาทั้งนั้น จากความชอบ ฝึกฝนจนพัฒนากลายมาเป็น
                    Graphic Designer ในที่สุด สำหรับการเริ่มต้นของ Graphic Designer นั้นมีอะไรบ้างที่เราจำเป็นต้องรู้เกี่ยวกับวงการนี้
                    วันนี้เราจะมาลองชำแหละทีละข้อๆ พาทุกคนไปติดตามเรื่องราวเหล่านั้นไปด้วยกัน
                </Text>
            </View>
            <View>
                <View style={[stylesMain.FlexRow, { height: 120, padding: 5, justifyContent: 'space-between', }]}>
                    <FastImage resizeMode={cover} source={Design1} style={{ width: '49%', borderRadius: 10 }} />
                    <FastImage resizeMode={cover} source={Design2} style={{ width: '49%', borderRadius: 10 }} />
                </View>
                <View style={[stylesMain.FlexRow, { height: 120, padding: 5, justifyContent: 'space-between', }]}>
                    <FastImage resizeMode={cover} source={Design3} style={{ width: '49%', borderRadius: 10 }} />
                    <FastImage resizeMode={cover} source={Design4} style={{ width: '49%', borderRadius: 10 }} />
                </View>
            </View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
