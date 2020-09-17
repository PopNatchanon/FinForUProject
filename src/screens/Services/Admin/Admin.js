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
import { Portfolio_owner } from '../ContentMarketing/ContentMarketing';
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
function Admin(props) {
    return <SafeAreaView style={stylesMain.SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='Admin' />
        <ScrollView>
            <Admin_About />
            <Portfolio_owner {...props}/>
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Admin_About = (props) => {
    const Content_image = { uri: `${ip}/MySQL/uploads/Service/Admin-Marketing.jpg`, };
    const Content_image1 = { uri: `${ip}/MySQL/uploads/Service/Admin-Marketing1.jpg`, };
    return <View style={stylesMain.FrameBackground}>
        <View style={[stylesMain.ItemCenter, { borderBottomColor: '#ECD295', borderBottomWidth: 5 }]}>
            <View style={{ alignItems: 'center', backgroundColor: mainColor, borderRadius: width / 2, margin: 10, paddingHorizontal: 20, width: width * 0.5 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>Admin</Text>
            </View>
        </View>
        <View style={stylesMain.ItemCenter}>
            <View style={{ width: '95%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    งาน Admin หรืองานฝ่ายธุรการ เป็นงานที่มีขอบข่าย และหน้าที่ความรับผิดชอบของงานที่ค่อนข้างกว้าง
                    จนหลายคนอาจจะเข้าใจว่างานด้านนี้ มีความคล้ายคลึง และค่อนข้างเหมือนกับงานของ HR แต่หากลองวิเคราะห์จากเนื้องานแล้ว
                จะเป็นว่างานทั้งสองประเภทนี้ จะมีความแตกต่างกันอยู่ อีกทั้งงาน Admin นี้จะเน้นที่การประสานงานเป็นหลัก</Text>
                <FastImage resizeMode={cover} source={Content_image1} style={{ height: 200, width: '100%' }} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    เนื่องจากงาน Admin เป็นงานที่มีลักษณะของการเป็นฝ่ายสนับสนุนค่อนข้างมาก
                    เห็นได้จาก ผู้ที่ทำงานธุรการสามารถเข้าไปช่วยเหลืองานในฝ่ายอื่น ๆ ได้ เช่น Admin
                    สามารถเข้าไปช่วยงานของฝ่าย HR ในด้านดูแลด้านเอกสาร หรือ ประสานงานกับพนักงาน เป็นต้น
                    ขอบข่ายงานของ Admin จึงอยู่ที่ว่าต้องไปสังกัดอยู่กับฝ่ายไหน แต่โดยรวมแล้ว งานธุรการจะเป็นงานที่เกี่ยวข้องกับการดูแลงานเอกสารต่าง ๆ
                    การติดต่อประสานงานภายใน และนอกองค์กร การจัดเก็บ และค้นหาเอกสาร การจัดเตรียมการประชุม เป็นต้น ตำแหน่งงาน Admin ที่เปิดรับสมัคร
                    จะมีทั้ง Admin ฝ่ายขาย Admin ฝ่ายบุคคล หรือ Admin ฝ่ายการตลาด ตำแหน่งงานต่าง ๆ เหล่านี้ จะมีหน้าที่ และความสำคัญของงานแตกต่างกันไป
                    ดังนั้น ก่อนจะสมัครงานในตำแหน่งนี้ ควรดูรายละเอียดของงานให้ถ้วนถี่ก่อนว่า เป็นงานที่ตรงกับความสามารถของเราหรือไม่ การเริ่มต้นสมัครงาน Admin
                    นอกจากจะต้องเป็นคนที่มีทัศนคติ และแนวคิดด้านบวกในการเริ่มต้นชีวิตการทำงานแล้ว การจบการศึกษาที่ตรงกับสายงานก็มีส่วนสำคัญ ผู้หางานที่ต้องการงานด้านธุรการ
                    คือ คนที่มีความรู้ความสามารถ และเรียนจบมาจากสาขาต่าง ๆ ดังนี้ คณะบริหารธุรกิจ (เอกเลขานุการ) สาขาบริหารการจัดการ สาขาบริหารการตลาด สาขาคอมพิวเตอร์ธุรกิจ
                    แต่หากมองตามหลักความเป็นจริงแล้ว สายงานนี้ค่อนข้างเปิดกว้าง ขอให้เป็นผู้ที่มีความรู้ความสามารถตามที่ตำแหน่งงานได้กำหนดไว้ โอกาสที่จะได้งานนี้ก็มีค่อนข้างสูง
                </Text>
            </View>
            <FastImage resizeMode={cover} source={Content_image} style={{ height: 200, width: '100%' }} />
        </View>
    </View>
}