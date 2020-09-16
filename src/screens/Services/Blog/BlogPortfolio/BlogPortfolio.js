///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const { contain, cover, stretch, } = FastImage.resizeMode;
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesStore from '../../../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule, } from '../../../Main/Main';
import { Slide } from '../../../Promotion/Deal/Deal';
import { TabBar } from '../../../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate, ButtomTab } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../navigator/IpConfig';
import { Reviews_Service } from '../../FinService';
import { Blog_ImageTab } from '../Blog';
import Carousel from '../../../../customComponents/imageComponents/ImageList';
///----------------------------------------------------------------------------------------------->>>> Main

const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(BlogPortfolio);
function BlogPortfolio(props) {
    return (<SafeAreaView style={stylesMain.SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='Blog' />
        <ScrollView>
            <Slide {...props} dataService={undefined} />
            <Blog_Detail />
            <Blog_ImageTab {...props} />
            <Blog_Work />
        </ScrollView>
    </SafeAreaView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export let Blog_Detail = (props) => {
    return <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
        <View style={[stylesMain.ItemCenter, { borderBottomWidth: 2, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>5 วิธี เพิ่ม Brand Engagement ใน Social Media</Text>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'right', color: '#C9C9C9', margin: 5 }]}>
            <IconAntDesign name='clockcircleo' size={15} /> August 18, 2020</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
            การเพิ่ม Engagement บน Social Media Content หรือ เพิ่มยอดไลท์ (Like) คอมเมนต์ (Comment) แชร์ (Sharing)
            เป็นผลที่แสดงถึงความสนใจของผู้บริโภคเชื่อว่าทุกคนในที่นี้ คงมีช่องทาง Social Media ของแบรนด์กันอยู่แล้ว แต่การที่จะมี
            Engagement ที่ดีและมีประสิทธิภาพ ไม่ว่าจะเป็นการไลท์ (Like) คอมเมนต์ (Comment) แชร์ (Sharing) ที่มีผลลัพธ์ที่ดีคงไม่ใช่เรื่องง่าย FIN
            ShoppingMall Service ได้รวบรวมทริคง่ายๆ ในมุมมองใหม่ๆ ที่จะทำให้คุณเข้าใจและนำไปปรับแก้ไขการทำ Social Media ให้ Engagement มีประสิทธิภาพที่ดียิ่งขึ้น
        </Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>Tip#1 คุณต้องเข้าใจในตัว Target ของคุณก่อนว่า ทำไมเขาถึงใช้ Social Media</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>1. ใช้เพื่อติดต่อเพื่อนฝูง </Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>2. ใช้เพื่อความบันเทิง</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>3. ใช้เพื่อแชร์ไอเดีย หรือ สร้างแรงบันดาลใจให้กับคนอื่น</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>Tip#2 การสร้างคอนเทนต์ที่มีคุณภาพ</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>1. สามารถอ่านและทำความเข้าใจกับเนื้อหาได้ง่าย</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>2. ภาพประกอบชัดเจน ภาพไม่แตก</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>3. มีแฮชแท็กและคำ Call to Action ที่สามารถเข้าถึงได้และดูน่าสนใจ</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>Tip#3 รูปแบบของ Content ที่มีคุณภาพ</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>1. รูปภาพประกอบมีความน่าสนใจ  1 นาทีได้ดี</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>2. แนบลิ้งก์อ้างอิงได้ถูกต้อง</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>3. จากงานรีเสิร์ช คนดู 80% มักจะจำวีดีโอขนาด</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>4.เพิ่มหรือเสริม Content ที่เป็นรูปแบบ Poll post และ Giveaway</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>Tip#4 Content แสดงถึงไหวพริบและความน่าสนใจ</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>1. คอนเทนต์ตองมีความสนุกและดูมีไหวพริบ ไม่น่าเบื่อ เพราะคอนเทนต์ของคุณอาจจะเปลี่ยนจากความน่าเบื่อเป็นความสนุกได้</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>2. เป็นโอกาสที่ดีที่ในการสื่อสารภาพลักษณ์ที่ดีของแบรนด์ออกไป</Text>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Blog_Work = (props) => {
    const BlogWork = [
        { image: `${ip}/MySQL/uploads/Service/About_image/1.jpg`, Title: 'ตัวช่วยดีๆสำหรับคุณ☺♥', detall: 'meji เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก', date: 'August 20, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/2.jpg`, Title: 'เพราะความสวยงามอยู่คู่กับคุณ', detall: 'เมื่อวันสำคัญของการเริ่มต้นชีวิตคู่ (อย่างเป็นทางการ) มาถึง.. คู่บ่าวสาวทุกคู่ ย่อมแสวงหาสิ่งที่ดีที่สุดให้กับอีเว้นท์สำคัญนี้', date: 'August 19, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/3.jpg`, Title: 'การดูแลผิวหน้าสำคัญกว่าที่คุณคิด!♥', detall: 'หากคุณกำลังกังวลเรื่องผิวหน้าที่ดูไม่กระจ่างใส เรามีผลิตภัณฑ์เพื่อช่วยดูแลผิวของคุณ หากคุณกำลังกังวลเรื่องผิวหน้าที่ดูไม่กระจ่างใส หากคุณกำลังกังวลเรื่องผิวหน้าที่ดูไม่กระจ่างใส', date: 'August 18, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/1.jpg`, Title: 'ตัวช่วยดีๆสำหรับคุณ☺♥', detall: 'meji เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก', date: 'August 20, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/1.jpg`, Title: 'ตัวช่วยดีๆสำหรับคุณ☺♥', detall: 'meji เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก', date: 'August 20, 2020' },
        { image: `${ip}/MySQL/uploads/Service/About_image/1.jpg`, Title: 'ตัวช่วยดีๆสำหรับคุณ☺♥', detall: 'meji เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก เพื่อช่วยให้คุณขับถ่ายได้สะดวก', date: 'August 20, 2020' },
    ]
    const BlogPortfolio = BlogWork.map((v, i) => {
        const Blog_image = { uri: v.image, };
        return <View key={i} style={{ borderColor: mainColor, borderWidth: 1, borderRadius: 5, width: 130, margin: 2.5, backgroundColor: '#FFFFFF' }}>
            <FastImage resizeMode={cover} source={Blog_image}
                style={{ height: 100, width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
            <View style={{ paddingHorizontal: 5 }}>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ตัวช่วยดีๆสำหรับคุณ☺♥</Text>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>meji เพื่อช่วยให้คุณขับถ่ายได้สะดวก</Text>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#C9C9C9' }]}>
                    <IconAntDesign name='clockcircleo' size={15} /> August 18, 2020</Text>
            </View>
        </View>
    });
    return <View>
        <View style={{ backgroundColor: mainColor, width: width * 0.40, marginVertical: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ตัวอย่างผลงาน</Text>
        </View>
        <ScrollView horizontal style={{ paddingVertical: 5 }}>
            {BlogPortfolio}
        </ScrollView>
    </View>
}