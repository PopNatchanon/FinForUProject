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
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
function Blog(props) {
    return <SafeAreaView style={stylesMain.SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='Blog' />
        <ScrollView>
            <Blog_About />
            <Blog_ImageTab />
        </ScrollView>
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Blog_ImageTab = (props) => {
    const Blog_Tab = [
        { image: `${ip}/MySQL/uploads/Service/About_image/1.jpg`, Title: 'ตัวช่วยดีๆสำหรับคุณ☺♥', detall: 'meji เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก', date: 'August 20, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/2.jpg`, Title: 'เพราะความสวยงามอยู่คู่กับคุณ', detall: 'เมื่อวันสำคัญของการเริ่มต้นชีวิตคู่ (อย่างเป็นทางการ) มาถึง.. คู่บ่าวสาวทุกคู่ ย่อมแสวงหาสิ่งที่ดีที่สุดให้กับอีเว้นท์สำคัญนี้', date: 'August 19, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/3.jpg`, Title: 'การดูแลผิวหน้าสำคัญกว่าที่คุณคิด!♥', detall: 'หากคุณกำลังกังวลเรื่องผิวหน้าที่ดูไม่กระจ่างใส เรามีผลิตภัณฑ์เพื่อช่วยดูแลผิวของคุณ หากคุณกำลังกังวลเรื่องผิวหน้าที่ดูไม่กระจ่างใส หากคุณกำลังกังวลเรื่องผิวหน้าที่ดูไม่กระจ่างใส', date: 'August 18, 2020' },
    ]
    const TabPortfolio = Blog_Tab.map((v, i) => {
        const About_image = { uri: v.image, };
        return <View key={i} style={[stylesMain.FlexRow, stylesMain.ItemCenter,
        { height: 120, borderColor: '#C9C9C9', borderWidth: 1, backgroundColor: '#FFFFFF', marginHorizontal: 5, marginVertical: 2.5, borderRadius: 5 }]}>
            <FastImage resizeMode={cover} source={About_image} style={{ height: 100, width: '35%', borderColor: '#C9C9C9', borderWidth: 1, borderRadius: 5 }} />
            <View style={{ width: '60%', marginLeft: 5, justifyContent: 'space-between', height: 90 }}>
                <View>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{v.Title}</Text>
                    <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{v.detall}</Text>
                </View>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', }]}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#C9C9C9' }]}>{v.date}</Text>
                    <TouchableOpacity>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#C9C9C9' }]}>อ่านเพิ่มเติม</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    });
    return <View><View style={{ backgroundColor: mainColor, width: width * 0.40, marginVertical: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ตัวอย่างผลงาน</Text></View>
        {TabPortfolio}
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Blog_About = (props) => {
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
