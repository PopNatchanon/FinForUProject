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
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(About);
function About(props) {
    return <SafeAreaView style={stylesMain.SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='About' />
        <ScrollView>
            <Services_About />
            <Portfolio_Image />
        </ScrollView>
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Services_About = (props) => {
    const Content_image = { uri: `${ip}/MySQL/uploads/Service/Content.jpg`, };
    return <View style={stylesMain.FrameBackground}>
        <View style={stylesMain.ItemCenter}>
            <FastImage resizeMode={cover} source={Content_image} style={{ height: 200, width: '100%' }} />
            <View style={{ width: '95%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    Content is the KING” คุณคงเคยได้ยินประโยคนี้มานับครั้งไม่ถ้วนว่า Content คือราชาแห่งยุค ในโลกที่การตลาดแทบทุกอย่างถูกโยกเข้าสู่ดิจิทัลเกือบจะ 100%
                    และทุกคนสามารถเข้าถึงมีเดียต่างๆ ได้ทำให้การแข่งขันยิ่งทวีความดุเดือนขึ้นกว่าเมื่อก่อนหลายเท่า นั่นจึงเป็นหนึ่งสาเหตุที่นักการตลาดต้องหากลยุทธ์ที่แตกต่างมาต่อสู้
                    กับคู่แข่งและเครื่องมือที่ทรงพลังมากที่สุดนั่นก็คือ “การเขียน Content”</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
                    Content Marketing คืออะไร
                    แปลได้ตรงตัวเลยก็คือ “การตลาดคอนเทนต์” โดยขยายความได้ว่าการทำการตลาดที่ใช้คอนเทนต์เป็นมีเดีย หรือเครื่องมือสำหรับผู้ทำส่งสารต่อไปยังผู้รับ ก็คือการที่แบรนด์จะสื่อสารกับผู้อ่านที่เป็นลูกค้านั่นเอง จะเรียกว่า Content
                    คือเครื่องมือชิ้นหนึ่งสำหรับการทำการตลาดก็คงไม่ผิด โดยคำว่า Content นั้นเราไม่ได้พูดถึง บทความ แคปชั่น ที่เป็นตัวหนังสือเพียงอย่างเดียว แต่ศัพท์ทางการตลาด Content คือทุกๆ อย่างที่ถูกทำขึ้นเพื่อจุดประสงค์บางอย่างที่ชัดเจน เช่น
                    ทำเพื่อโปรโมทสินค้า ให้แบรนด์เป็นที่รู้จัก เพื่อขายของ ฯลฯ ดังนั้นหากเป็นคอนเทนต์อื่นๆ ที่ไม่ได้มีจุดประสงค์ทางการตลาดชัดเจน จะเรียกว่าเป็น Content Marketing ไม่ได้ จึงทำให้ Content ก็เป็นได้ทั้ง ตัวหนังสือ ภาพ วิดีโอและเสียงรวมถึงมีเดียอื่นๆ ด้วย</Text>
            </View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>

