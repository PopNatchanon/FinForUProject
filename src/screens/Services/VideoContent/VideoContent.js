///----------------------------------------------------------------------------------------------->>>> React
import React, { useRef, useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const { contain, cover, stretch, } = FastImage.resizeMode;
import Video from 'react-native-video';
///----------------------------------------------------------------------------------------------->>>> Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesStore from '../../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../../Main/Main';
import { TabBar } from '../../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate, ButtomTab, IconLoading } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(VideoContent);
function VideoContent(props) {
    return (
        <SafeAreaView style={stylesMain.SafeAreaViews}>
            <AppBar {...props} backArrow titleHead='VideoContent' />
            <ScrollView>
                <VideoContent_About />
                <Video_production />
                <Video_Portfolio />
            </ScrollView>
            <ExitAppModule {...props} />
        </SafeAreaView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export let VideoContent_About = (props) => {
    const Video = { uri: `${ip}/MySQL/uploads/Service/VideoPortfolio/0.jpg`, };
    return <View style={stylesMain.FrameBackground}>
        <View style={[stylesMain.ItemCenter, { borderBottomColor: '#ECD295', borderBottomWidth: 5 }]}>
            <View style={{ alignItems: 'center', backgroundColor: mainColor, borderRadius: width / 2, margin: 10, paddingHorizontal: 20, width: width * 0.5 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>VideoContent</Text>
            </View>
        </View>
        <View style={stylesMain.ItemCenter}>
            <View style={{ width: '95%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    Video production เป็นบริษัทรับถ่ายวิดีโอ ภาพยนตร์ โฆษณา วิดีโอ พรีเซนเทชั่นแนะนำองค์กร ที่ให้บริการแบบครบวงจร
                    โดยตั้งอยู่ในพื้นที่กรุงเทพมหานคร ให้บริการถ่ายทำวิดีโอโดยมีทีมงานที่มีประสบการณ์หลายฝ่ายมารวมตัวกัน ทำให้สามารถให้บริการลูกค้าได้ตั้งแต่
                    Pre-Productions, Productions ไปจนถึง Post-Productions เพื่อตอบสนองลูกค้าได้อย่างครบวงจร เรียกได้ว่าครบจบในหนึ่งเดียว
                    พร้อมให้บริการด้วยความใส่ใจทุกรายละเอียด เรายินดีให้คำปรึกษา แนะนำบริการ สร้างสรรค์และต่อยอดไอเดียให้คุณ เพื่อให้ผลงานของคุณออกมาดีที่สุด</Text>
                <View style={[stylesMain.ItemCenter, { height: 200, width: '100%', backgroundColor: '#C9C9C9', }]}>
                    <FastImage resizeMode={cover} source={Video} style={[stylesMain.BoxProduct1Image, { borderRadius: 10 }]} />
                </View>
            </View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Video_production = (props) => {
    const Video_image = [
        { name: 'วิดีโอคอนเทนต์บนโซเชียลมีเดีย', image: `${ip}/MySQL/uploads/Service/VideoPortfolio/1.jpg`, detail: 'สร้างความเป็นตัวตนของคุณให้โดดเด่น ดึงดูดความสนใจบนโลกโซเชียล' },
        { name: 'วิดีโอโปรโมทรีวิวสินค้า', image: `${ip}/MySQL/uploads/Service/VideoPortfolio/2.jpg`, detail: 'โปรโมทแบรนด์และสินค้าของคุณให้ดูโดดเด่น น่าสนใจ ด้วยเทคนิคพิเศษที่เราพร้อมนำเสนอ' },
        { name: 'วิดีโอพรีเซนเทชันองค์กร', image: `${ip}/MySQL/uploads/Service/VideoPortfolio/3.jpg`, detail: 'วิดีโอที่จะช่วยนำเสนอให้ผู้ที่ ได้รับชมVDOรู้จักองค์กรของท่านมาก ขึ้นภายในเวลาอันสั้น' },
        { name: 'วิดีโอโฆษณา', image: `${ip}/MySQL/uploads/Service/VideoPortfolio/4.jpg`, detail: 'ถ่ายทอดความคิดของคุณให้ออกมา โดดเด่นในรูปแบบของวิดีโอที่มี เอกลักษณ์เฉพาะตัว' },
        { name: 'วิดีโอไวรัล', image: `${ip}/MySQL/uploads/Service/VideoPortfolio/5.jpg`, detail: 'วิดีโอที่จะช่วยให้งานของคุณเป็นที่น่าสนใจเป็นกระแสนิยมบนโลกโซเชียล อย่างรวดเร็ว' },
    ]
    const VideoBox = Video_image.map((v, i) => {
        const VideoPortfolio = { uri: v.image, };
        return <View key={i} style={[stylesMain.FlexRow, { height: 125, borderColor: mainColor, borderWidth: 1, margin: 5, backgroundColor: '#FFFFFF', borderRadius: 5 }]}>
            <FastImage resizeMode={cover} source={VideoPortfolio} style={{ width: '50%', height: '100%', }} />
            <View style={{ alignItems: 'center', marginLeft: 5 }}>
                <View style={{ marginLeft: 5 }}>
                    <View style={[stylesMain.ItemCenter, { height: 35 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{v.name}</Text>
                        <View style={{ borderWidth: 1, width: 100 }} />
                    </View>
                    <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: width * 0.45, }]}>{v.detail}</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 5, marginTop: 10 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อ</Text>
                </TouchableOpacity>
            </View>
        </View>
    });
    return <View>
        <View style={{ backgroundColor: mainColor, width: width * 0.40, marginVertical: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ทีม Video production</Text>
        </View>
        {VideoBox}
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Video_Portfolio = (props) => {
    const VideoPlayer = useRef(null);
    const Videos = [
        { vdo: `${ip}/MySQL/uploads/VDO/001.mp4`, },
        { vdo: `${ip}/MySQL/uploads/VDO/002.mp4`, },
        { vdo: `${ip}/MySQL/uploads/VDO/003.mp4`, },
    ]
    const VideoPortfolio = Videos.map((v, i) => {
        //https://youtu.be/MVvpBRA8waM
        const Video_image = { uri: v.vdo, };
        console.log(Video_image)
        return <View key={i} style={{ height: 150, margin: 5 }}>
            <Video controls paused source={Video_image}   // Can be a URL or a local file.
                poster={"https://baconmockup.com/300/200/"}
                ref={VideoPlayer}                                      // Store reference
                onPlaybackRateChange={event => { console.log('event'); console.log(event); }}
                style={{
                    height: '100%', width: '100%'
                }}
            />
        </View>
    });
    return <View>
        <View style={{ backgroundColor: mainColor, width: width * 0.40, marginVertical: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ตัวอย่างผลงาน</Text>
        </View>
        <View>
            {VideoPortfolio}
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
