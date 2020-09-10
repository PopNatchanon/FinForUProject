///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, Share, TouchableOpacity,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const { contain, cover, stretch, } = FastImage.resizeMode;
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../Main/Main';
import { TabBar } from '../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate, ButtomTab } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(FinService);
function FinService(props) {
    return (
        <SafeAreaView style={stylesMain.SafeAreaViews}>
            <AppBar {...props} backArrow titleHead='FIN SERVICE' />
            <ScrollView>
                <Banner_Service />
                <Button_Bar {...props} />
                <Menu_Bar {...props} />
                <Service_About  {...props} />
                <Content_Service  {...props} />
                <Customer_Service  {...props} />
                <Reviews_Service  {...props} />
                <FAQs {...props} />
                <Contact_Us {...props} />
            </ScrollView>
        </SafeAreaView>
    );
}
///----------------------------------------------------------------------------------------------->>>>banner
export let Banner_Service = (props) => {
    const Service_image = { uri: `${ip}/MySQL/uploads/Service/Fin_Service.jpg`, };
    return <View style={{ paddingHorizontal: 5 }}>
        <FastImage resizeMode={cover} source={Service_image} style={{ height: 150, }} />
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Button_Bar = (props) => {
    const item = [{ name: 'HOME' }, { name: 'ABOUT' }, { name: 'BLOG' }, { name: 'CONTACT' }];
    return <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', paddingVertical: 3 }]}>
        <ButtomTab colors={['#10162d', '#284d8f']} data={item} setWidthBox={width * 0.234} setHeightBox={30} fontStyle={[stylesFont.FontSize6,
        stylesFont.FontFamilyBold]} linearGradient={true} notSelectFontColors='#10162d' />
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Menu_Bar = (props) => {
    const CONTENT = { uri: `${ip}/MySQL/uploads/Service/1.png`, };
    const ADMIN = { uri: `${ip}/MySQL/uploads/Service/2.png`, };
    const PHOTOGRAPH = { uri: `${ip}/MySQL/uploads/Service/3.png`, };
    const VIDEO = { uri: `${ip}/MySQL/uploads/Service/4.png`, };
    const GRAPHIC = { uri: `${ip}/MySQL/uploads/Service/5.png`, };
    return <View style={{ height: 'auto', marginHorizontal: 5, alignItems: 'center', paddingBottom: 10, borderRadius: 5, }}>
        <View style={{ backgroundColor: mainColor, paddingHorizontal: 20, borderRadius: width / 2, margin: 5 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>Digital Agency Services</Text>
        </View>
        <View style={{ width: '98%', }}>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', marginTop: 5 }]}>
                <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'ContentMarketing', })} style={[stylesMain.FlexRow, {
                    borderColor: mainColor, borderWidth: 1,
                    borderRadius: 5, height: 90, width: '48.5%', justifyContent: 'space-between', backgroundColor: '#FFFFFF'
                }]}>
                    <FastImage resizeMode={cover} source={CONTENT} style={{ height: '100%', width: '50%', }} />
                    <View style={[stylesMain.ItemCenter, { width: '40%' }]}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 40, width: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF', textAlign: 'center' }]}>CONTENT MARKETING</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: mainColor, borderWidth: 1, borderRadius: 5, height: 90, width: '48.5%', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
                    <FastImage resizeMode={cover} source={ADMIN} style={{ height: '100%', width: '50%', }} />
                    <View style={[stylesMain.ItemCenter, { width: '40%' }]}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 40, width: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF', textAlign: 'center' }]}>ADMIN</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', marginTop: 5 }]}>
                <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: mainColor, borderWidth: 1, borderRadius: 5, height: 90, width: '48.5%', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
                    <FastImage resizeMode={cover} source={PHOTOGRAPH} style={{ height: '100%', width: '50%', }} />
                    <View style={[stylesMain.ItemCenter, { width: '40%' }]}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 40, width: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF', textAlign: 'center' }]}>PHOTOGRAPH</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: mainColor, borderWidth: 1, borderRadius: 5, height: 90, width: '48.5%', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
                    <FastImage resizeMode={cover} source={VIDEO} style={{ height: '100%', width: '50%', }} />
                    <View style={[stylesMain.ItemCenter, { width: '40%' }]}>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 40, width: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF', textAlign: 'center' }]}>VIDEO CONTENT</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.FlexRow, { marginTop: 5, justifyContent: 'center' }]}>
                <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: mainColor, borderWidth: 1, borderRadius: 5, height: 90, width: '48.5%', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
                    <FastImage resizeMode={cover} source={GRAPHIC} style={{ height: '100%', width: '50%', }} />
                    <View style={[stylesMain.ItemCenter, { width: '40%' }]}>
                        <View style={{ backgroundColor: mainColor, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 40, width: '100%' }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF', textAlign: 'center' }]}>GRAPHIC DESIGN</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Service_About = (props) => {
    return <View style={{ padding: 10, backgroundColor: '#FFFF', borderColor: '#C9C9C9', borderWidth: 1, borderRadius: 5, marginTop: 10, marginHorizontal: 5, marginBottom: 5 }}>
        <View style={stylesMain.ItemCenter}>
            <View style={{ backgroundColor: mainColor, paddingHorizontal: 20, borderRadius: width / 2, marginTop: -20 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>เกี่ยวกับเรา</Text>
            </View>

            <View style={{ width: '98%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>FIN SHOPPING SERVICE</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    เราคือ FIN SHOPPING SERVICE รับทำการตลาดออนไลน์ ครบวงจร จบในที่เดียว
                    ตั้งแต่เริ่มต้นการ ออกแบบดีไซน์ และพัฒนาระบบต่างๆ รับทำ SEO
                    และปรับแต่งได้ตามความต้องการทุกระดับตั้งแต่องค์กรเล็กๆ จนถึงองค์กรใหญ่
                    เราสามารถให้คำปรึกษาทุกด้านเริ่มตั้งแต่ การสร้างแบรนด์ การตลาดดิจิตอล
                    การตลาด Social Media Management ต่างๆและ บริการ การทำโฆษณาต่างๆ เช่น
                    รับทำโฆษณาเฟสบุ๊ค Facebook Ads</Text>
            </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, width: 100, borderRadius: 5 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>read more</Text>
            </TouchableOpacity>
        </View>
        <View style={[stylesMain.ItemCenter, { marginTop: 10 }]}>
            <View style={[stylesMain.ItemCenter, { width: '80%', height: 150, backgroundColor: '#C9C9C9', borderWidth: 2 }]}>
                <Text>วีดีโอ</Text>
            </View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Content_Service = (props) => {
    const Contentitem = [
        { Title: 'Innovate', color: '#BC0C4B', Detall: 'เราช่วยให้ธุรกิจของคุณ เติบโตและ ประสบความสำเร็จ ด้วยวิธีการทำการตลาดออนไลน์รูปแบบใหม่ด้วยนวัตกรรมใหม่ๆ โดยผ่านการใช้เครื่องมือการตลาดที่ทันสมัย นำ Marketing Technology หรือ MarTechเข้ามาช่วยเพื่อให้ธุรกิจของคุณได้เปรียบในการแข่งขันการตลาดและล้ำหน้าคู่แข่งบนโลกออนไลน์' },
        { Title: 'Sell', color: '#EA6C12', Detall: 'คนทั่วไปไม่เพียงต้องการซื้อสินค้า หรือบริการที่ดีเท่านั้น พวกเค้าต้องการซื้อความสัมพันธ์ที่มีต่อแบรนด์ และสินค้าที่มีเรื่องราวต่างๆ เพราะฉะนั้นการสร้างเรื่องราวและตัวตนของแบรนด์ จึงมีส่วนสำคัญอย่างยิ่ง เราสามารถช่วยคิดและครีเอทีฟเพื่อสร้างมุมมองในการขายสินค้า หรือบริการรูปแบบใหม่' },
        { Title: 'Grow', color: '#EBBB10', Detall: 'ไม่รู้ว่าจะเพิ่มฐานลูกค้าอย่างไร ? มีการจัดการธุรกิจได้ดีพอหรือยัง ? สร้างผลกำไรที่แท้จริงแล้วหรือยัง ? ด้วยประสบการณ์และความชำนาญของเราในด้านการทำการตลาด Content Marketing , Marketing automation, Analytics ที่เจาะลงลึก จะช่วยให้คุณเติบโตและขยายธุรกิจของคุณได้อย่างยั่งยืน' },]
    const ContentBox = Contentitem.map((v, i) => {
        return <TouchableOpacity key={i} style={{ padding: 10, backgroundColor: '#FFFF', borderColor: '#C9C9C9', borderWidth: 1, borderRadius: 5, marginTop: 20, marginHorizontal: 5, marginBottom: 5 }}>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { marginTop: -30, }]}>
                <View style={[stylesMain.ItemCenter, { backgroundColor: mainColor, width: 100, borderRadius: width / 2, elevation: 1, left: 30 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{v.Title}</Text>
                </View>
                <View style={{ backgroundColor: v.color, width: 50, height: 50, borderRadius: width / 2, }} />
            </View>
            <View style={{ width: '98%' }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{v.Detall}</Text>
            </View>
        </TouchableOpacity>;
    });
    return <View>{ContentBox}</View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Customer_Service = (props) => {
    const Customeritem = [
        { image: `${ip}/MySQL/uploads/Service/1.png` }, { image: `${ip}/MySQL/uploads/Service/1.png` },
        { image: `${ip}/MySQL/uploads/Service/2.png` }, { image: `${ip}/MySQL/uploads/Service/2.png` },
        { image: `${ip}/MySQL/uploads/Service/3.png` }, { image: `${ip}/MySQL/uploads/Service/3.png` },
        { image: `${ip}/MySQL/uploads/Service/4.png` }, { image: `${ip}/MySQL/uploads/Service/4.png` },
        { image: `${ip}/MySQL/uploads/Service/5.png` }, { image: `${ip}/MySQL/uploads/Service/5.png` },
    ]
    const CustomerBox = Customeritem.map((v, i) => {
        const ImageCustomer = { uri: v.image, };
        return <View key={i} style={{ height: 65, width: 65, margin: 2, }}>
            <FastImage resizeMode={cover} source={ImageCustomer} style={[stylesMain.BoxProduct1Image, { borderRadius: width / 2, borderColor: mainColor, borderWidth: 2 }]} />
        </View>;
    });
    return <View style={[stylesMain.ItemCenter, { borderBottomWidth: 5, borderBottomColor: '#ECD295', marginHorizontal: 5, paddingBottom: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ลูกค้าของเรา</Text>
        <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { flexWrap: 'wrap', width: 380 }]}>
            {CustomerBox}
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Reviews_Service = (props) => {
    const Reviewsitem = [
        { image: `${ip}/MySQL/uploads/Service/1.png`, name: 'Matt Johnson', Detall: 'การติดต่อเจ้าหน้าที่นั้นเรียบง่ายและสะดวก ฉันประหลาดใจมากที่พวกเขาติดต่อกลับมาหาคุณอย่างรวดเร็ว' },
        { image: `${ip}/MySQL/uploads/Service/1.png`, name: 'Ashish Khatri', Detall: 'สิ่งที่ฉันสนใจเกี่ยวกับแพลตฟอรืมนี้คือทรัพยากรที่มีอยู่ เป็นประโยชน์อย่างมาก สิ่งที่ฉันสนใจเกี่ยวกับแพลตฟอรืมนี้คือทรัพยากรที่มีอยู่ เป็นประโยชน์อย่างมาก' },
        { image: `${ip}/MySQL/uploads/Service/2.png`, name: 'Matt Johnson', Detall: 'การติดต่อเจ้าหน้าที่นั้นเรียบง่ายและสะดวก ฉันประหลาดใจมากที่พวกเขาติดต่อกลับมาหาคุณอย่างรวดเร็ว' },
        { image: `${ip}/MySQL/uploads/Service/2.png`, name: 'Ashish Khatri', Detall: 'สิ่งที่ฉันสนใจเกี่ยวกับแพลตฟอรืมนี้คือทรัพยากรที่มีอยู่ เป็นประโยชน์อย่างมาก ' },
        { image: `${ip}/MySQL/uploads/Service/3.png`, name: 'Matt Johnson', Detall: 'การติดต่อเจ้าหน้าที่นั้นเรียบง่ายและสะดวก ฉันประหลาดใจมากที่พวกเขาติดต่อกลับมาหาคุณอย่างรวดเร็ว' },
        { image: `${ip}/MySQL/uploads/Service/3.png`, name: 'Ashish Khatri', Detall: 'สิ่งที่ฉันสนใจเกี่ยวกับแพลตฟอรืมนี้คือทรัพยากรที่มีอยู่ เป็นประโยชน์อย่างมาก สิ่งที่ฉันสนใจเกี่ยวกับแพลตฟอรืมนี้คือทรัพยากรที่มีอยู่ เป็นประโยชน์อย่างมาก' },
    ]
    const ReviewsBox = Reviewsitem.map((v, i) => {
        const ImageReviews = { uri: v.image, };
        return <View key={i} style={{
            width: 180, backgroundColor: '#FFFFFF', padding: 5,
            margin: 3, borderRadius: 10, borderColor: '#C9C9C9', borderWidth: 1
        }} >
            <View style={{ borderBottomWidth: 1, padding: 5, height: height * 0.10 }}>
                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{v.Detall}</Text>
            </View>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 5 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5 }]}>{v.name}</Text>
                <FastImage resizeMode={cover} source={ImageReviews} style={{ borderRadius: width / 2, borderWidth: 1, height: 30, width: 30 }} />
            </View>
        </View>;
    });
    return <View style={{ margin: 5 }}>
        <View style={[stylesMain.ItemCenter]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ลูกค้าของเราพูดอย่างไรบ้าง</Text>
        </View>
        <ScrollView horizontal style={{ borderBottomWidth: 5, borderBottomColor: '#ECD295', paddingHorizontal: 5, paddingBottom: 5 }}>
            {ReviewsBox}
        </ScrollView>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let FAQs = (props) => {
    return <View style={[stylesMain.ItemCenter, {
        backgroundColor: '#FFFFFF', borderColor: '#C9C9C9', borderWidth: 1, margin: 5, borderBottomWidth: 5, borderBottomColor: '#ECD295', paddingBottom: 10
    }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>FAQs</Text>
        <View style={{ width: '95%', paddingBottom: 10 }}>
            <View style={[stylesMain.FlexRow, { borderBottomWidth: 1, justifyContent: 'space-between', padding: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เลือกใช้บริการกับเราดีอย่างไร</Text>
                <TouchableOpacity style={{ backgroundColor: '#C9C9C9', borderRadius: width / 2 }}>
                    <IconEntypo name='chevron-down' size={25} color='#FFFFFF' />
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.FlexRow, { borderBottomWidth: 1, justifyContent: 'space-between', padding: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เรามีบริการอะไรบ้าง</Text>
                <TouchableOpacity style={{ backgroundColor: '#C9C9C9', borderRadius: width / 2 }}>
                    <IconEntypo name='chevron-down' size={25} color='#FFFFFF' />
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.FlexRow, { borderBottomWidth: 1, justifyContent: 'space-between', padding: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เราจะติดต่อคุณได้อย่างไร</Text>
                <TouchableOpacity style={{ backgroundColor: '#C9C9C9', borderRadius: width / 2 }}>
                    <IconEntypo name='chevron-down' size={25} color='#FFFFFF' />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Contact_Us = (props) => {
    return <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', borderColor: '#C9C9C9', borderWidth: 1, margin: 5, padding: 5 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>Contact Us</Text>
        <View style={{ backgroundColor: '#FFFFFF', width: '90%' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชื่อผู้ติดต่อ*</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>หมายเลขโทรศัพท์*</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>อีเมล*</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>LINE ID</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>เรื่องที่ติดต่อ</Text>
            <View style={{ borderWidth: 1, height: 30, borderColor: '#C9C9C9' }}></View>
        </View>
    </View>
}
///----------------------------------------------------------------------------------------------->>>>