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
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../Main/MainScreen';
import { TabBar } from '../../customComponents/Tools';
import { Toolbar, BorderBottomTab, AppBar, NavigationNavigate } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
function NewsScreen(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    var titleValue;
    selectedIndex == 0 ? titleValue = 'NEWS' : titleValue = 'BLOG';
    return <SafeAreaView style={[stylesMain.SafeAreaViewNB, { backgroundColor: '#E9E9E9' }]}>
        <AppBar titleHead={titleValue} menuBar noBottomColor />
        <MenuBar getData={value => setSelectedIndex(value)} />
        <ScrollView>
            <Button_Bar {...props} selectedIndex={selectedIndex} />
        </ScrollView>
        <Toolbar {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> MenuBar
export let MenuBar = (props) => {
    const { getData } = props;
    const item = [{ name: 'NEWS' }, { name: 'BLOG' }];
    return <View>
        <BorderBottomTab data={item} fontStyle={[stylesFont.FontFamilySemiBold, stylesFont.FontSize6, { paddingHorizontal: 30 }]}
            sendDataOut={(value) => getData(value)} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const { selectedIndex } = props;
    return <View>
        {selectedIndex == 0 ?
            <News {...props} /> :
            <Blog {...props} />}
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Blog
export let Blog = (props) => {
    const item_Blog = [
        { image: `${ip}/MySQL/uploads/Group_image/1.jpg`, TitleBlog: 'โปรโมชั่นของแถม (Premium)', detail: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium) ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/2.jpg`, TitleBlog: 'โปรโมชั่นลดราคา (Price off)', detail: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium) ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/3.jpg`, TitleBlog: 'โปรโมชั่นยิ่งซื้อมาก ยิ่งประหยัดมาก', detail: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/4.jpg`, TitleBlog: 'โปรโมชั่นสร้างโปรแกรมสำหรับลูกค้าประจำ', detail: 'โปรโมชั่นลดราคา (Price off) ไม่ว่าจะเป็น ลดราคาเป็นเปอร์เซ็นต์ หรือลดราคาเป็นบาท เช่น ลด 10% หรือ ลดราคา 100 บาท  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/5.jpg`, TitleBlog: 'โปรโมชั่นของแถม (Premium)', detail: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/6.jpg`, TitleBlog: 'โปรโมชั่นแลกซื้อ (Redeem Offer)', detail: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', },
        { image: `${ip}/MySQL/uploads/Group_image/7.jpg`, TitleBlog: 'ชิงโชค (Lucky Draw)', detail: 'โปรโมชั่นของแถม (Premium) อาจจะเป็นสินค้าตัวมันเอง สินค้าอื่น หรือเป็นของแถมอื่นๆ ก็ได้ เช่น ถุง แก้ว กระเป๋า กล่อง ฯลฯ  โปรโมชั่นของแถม (Premium)ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ', }]
    let BlogItem = (
        item_Blog.map((value, index) => {
            return <TouchableOpacity key={index}>
                <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }]} >
                    <FastImage style={{ height: 'auto', width: '40%', borderRadius: 8, borderColor: '#C4C4C4', borderWidth: 1 }}
                        source={{ uri: value.image }}
                        resizeMode={FastImage.resizeMode.cover} />
                    <View style={{ justifyContent: 'space-between', marginHorizontal: 3, width: '60%' }}>
                        <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>{value.TitleBlog}</Text>
                        <Text numberOfLines={3} style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            {value.detail}</Text>
                        <View style={{ alignItems: 'flex-end', }}>
                            <View style={[stylesMain.ItemCenter, { marginTop: 3 }]}>
                                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#C4C4C4' }]}>อ่านบทความเพื่อเติม</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        }))
    let onShare = async () => {
        try {
            const result = await Share.share({ message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`, });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { };
            } else if (result.action === Share.dismissedAction) { };
        } catch (error) { alert(error.message); };
    };
    return <>
        <View style={{ backgroundColor: '#FFFFFF', marginHorizontal: 3, padding: 3 }}>
            <FastImage source={{ uri: `${ip}/MySQL/uploads/Campaign/Voucher-07.jpg` }}
                style={{ height: 200, width: '100%', borderRadius: 5 }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text numberOfLines={2} style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { width: '90 %' }]}>
                    ชิงโชค (Lucky Draw) ส่งชิงโชคเพื่อแลกของรางวัลใหญ่ เช่น ตั๋วเครื่องบิน ที่พัก ฯลฯ หลักการง่ายๆ คือ ของรางวัลต้องมีมูลค่า และต้องโดนใจลูกค้าสุดๆ</Text>
                <View style={[stylesMain.ItemCenter]}>
                    {/* <IconEntypo style={stylesStore.header_icon} name='eye' size={20} /> */}
                    <TouchableOpacity onPress={() => onShare()}>
                        <IconEntypo style={stylesStore.header_icon} name='share' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {BlogItem}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Blog
export let News = (props) => {
    const { navigation } = props
    const item_Blog = [
        { uri: 'https://www.ryt9.com/s/prg/3152256', image: `${ip}/MySQL/uploads/News/1.jpg`, TitleBlog: 'เจาะลึกกองทุนอสังหาฯ ครึ่งปีหลัง เพิ่มโอกาสสร้างผลตอบแทน', detail: 'อสังหาริมทรัพย์เป็นธุรกิจที่ได้รับผลกระทบจากวิกฤตโควิด-19 และเศรษฐกิจโลกที่ชะลอตัวเช่นกัน แต่ในการลงทุนไม่ควรมองแบบเหมารวม เพราะลักษณะการประกอบธุรกิจมีความแตกต่างกัน จึงได้รับผลกระทบไม่เท่ากัน ซึ่งท่ามกลางสถานการณ์ที่เกิดขึ้นเช่นนี้ มองว่าจะมีอสังหาริมทรัพย์ที่ได้รับประโยชน์และเติบโตสอดรับไปกับการเปลี่ยนแปลงสู่ชีวิตวิถีใหม่ (New Normal) มี 3 ประเภท', },
        { uri: 'https://www.ryt9.com/s/iq18/3150958', image: `${ip}/MySQL/uploads/News/2.jpg`, TitleBlog: 'ภาวะตลาดหุ้นลอนดอน: ฟุตซี่ปิดลบ 95.58 จุด มาตรการกักตัวฉุดหุ้นกลุ่มเดินทางร่วง', detail: 'ตลาดหุ้นลอนดอนปิดลบเมื่อคืนนี้ (14 ส.ค.) โดยหุ้นกลุ่มการเดินทางฉุดตลาดลง หลังอังกฤษกำหนดมาตรการกักตัวผู้เดินทางเข้าประเทศท่ามกลางความวิตกเกี่ยวกับการแพร่ระบาดรอบใหม่ของโรคโควิด-19 นอกจากนี้ การเปิดเผยข้อมูลเศรษฐกิจที่น่าผิดหวังได้เพิ่มความวิตกว่า การฟื้นตัวของเศรษฐกิจโลกจะเป็นไปอย่างล่าช้า', },
        { uri: 'https://www.ryt9.com/s/iq03/3149640', image: `${ip}/MySQL/uploads/News/3.jpg`, TitleBlog: 'ดัชนีเชื่อมั่นราคาทองคำส.ค.เพิ่มขึ้น มองแนวโน้มยังผันผวน จับตากรณีสหรัฐ-จีน, ปัญหาโควิดทั่วโลก', detail: 'สำหรับการคาดการณ์ราคาทองคำในเดือน ส.ค.63 ของผู้ประกอบกิจการค้าทองคำรายใหญ่มีมุมมองดังนี้ Gold Spot ให้กรอบเฉลี่ยบริเวณ 1,886 – 2,101 ดอลลาร์สหรัฐฯ ต่อออนซ์ ด้านราคาทองคำแท่งในประเทศความบริสุทธิ์ 96.5% ให้กรอบเฉลี่ยบริเวณ 28,400-30,800 บาทต่อน้ำหนัก 1 บาททองคำ และด้านค่าเงินบาทให้กรอบเฉลี่ยบริเวณ 30.86-31.89 บาทต่อดอลลาร์สหรัฐฯๆ', },
        { uri: 'https://www.ryt9.com/s/iq29/3148670', image: `${ip}/MySQL/uploads/News/4.jpg`, TitleBlog: 'ซาอุดี อารามโค" เผยรายได้ครึ่งปีแรกร่วง 50% เหตุโควิด-19 กระทบราคาน้ำมัน', detail: 'บริษัท ซาอุดี อารามโค ซึ่งเป็นบริษัทน้ำมันยักษ์ใหญ่ เผยรายได้ในช่วงครึ่งปีแรกร่วงลง 50% แตะ 2.32 หมื่นล้านดอลลาร์ ซึ่งลดลงจากระดับ 4.69 หมื่นล้านดอลลาร์ในช่วงเวลาเดียวกันของปีที่แล้วสาเหตุที่รายได้ลดลงนั้น เนื่องมาจากการแพร่ระบาดของโควิด-19 ที่ส่งผลกระทบต่อตลาดน้ำมันและเศรษฐกิจโลกอย่างต่อเนื่อง', },
        { uri: 'https://www.ryt9.com/s/prg/3148026', image: `${ip}/MySQL/uploads/News/5.jpg`, TitleBlog: 'บมจ.เอสวีไอ หรือ SVI ชี้ธุรกิจปีนี้สดใส สวนกระแสปัจจัยลบ', detail: 'บมจ.เอสวีไอ หรือ SVI ผู้ประกอบธุรกิจให้บริการแบบครบวงจรในการประกอบผลิตภัณฑ์ประเภทวงจรไฟฟ้า และผลิตภัณฑ์อิเล็กทรอนิคส์สำเร็จรูปให้แก่ลูกค้าในภาคอุตสาหกรรม มั่นใจปีนี้ธุรกิจเติบโตแข็งแกร่ง รับอานิสงส์เศรษฐกิจโลกที่จะฟื้นตัวหลัง COVID-19 และผลพลอยได้จากสงครามการค้า', },
        { uri: 'https://www.ryt9.com/s/iq31/3137981', image: `${ip}/MySQL/uploads/News/6.jpg`, TitleBlog: 'ราคาทองฟิวเจอร์พุ่งแตะ 1,800 ดอลลาร์ ขณะจ่อทุบสถิติพุ่งมากสุดรอบกว่า 4 ปี', detail: 'ราคาทองฟิวเจอร์พุ่งขึ้นเกือบ 20 ดอลลาร์ แตะระดับ 1,800 ดอลลาร์ในวันนี้ และมีแนวโน้มทำสถิติพุ่งขึ้นมากที่สุดในรอบกว่า 4 ปีเมื่อเทียบรายไตรมาส ขณะที่นักลงทุนกังวลต่อการฟื้นตัวของเศรษฐกิจโลก ท่ามกลางการเพิ่มขึ้นของจำนวนผู้ติดเชื้อไวรัสโควิด-19', },
        { uri: 'https://www.ryt9.com/s/iq35/3136360', image: `${ip}/MySQL/uploads/News/7.jpg`, TitleBlog: 'ราคาน้ำมัน WTI ดิ่งกว่า 4% กังวลสต็อกน้ำมันสหรัฐพุ่ง,โควิด-19 ระบาด', detail: 'สำนักงานสารสนเทศด้านการพลังงานของรัฐบาลสหรัฐ (EIA) เปิดเผยว่า สต็อกน้ำมันดิบสหรัฐเพิ่มขึ้นเป็นสัปดาห์ที่ 3 ติดต่อกัน โดยปรับตัวขึ้น 1.4 ล้านบาร์เรลในสัปดาห์ที่แล้ว สวนทางนักวิเคราะห์ที่คาดการณ์ว่าลดลง 100,000 บาร์เรล', }]
    let BlogItem = (
        item_Blog.map((value, index) => {
            return <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'DetailPromotion', navigation })} key={index}
                style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, paddingHorizontal: 10, paddingVertical: 10 }]}>
                {/* <TouchableOpacity onPress={() => value.uri ? NavigationNavigate({ goScreen: 'BrowerScreen', navigation, setData: { uri: value.uri } }) : null} key={index} */}
                {/* style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, paddingHorizontal: 10, paddingVertical: 10 }]} > */}
                <View style={{ justifyContent: 'space-between', width: '70%', height: 100 }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: mainColor }]}>{value.TitleBlog}</Text>
                    <Text numberOfLines={2} style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                        {value.detail}</Text>
                    <View style={{ alignItems: 'flex-end', }}>
                        <View style={[stylesMain.ItemCenter, { marginTop: 3 }]}>
                            <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#C4C4C4' }]}>อ่านข่าวสารเพื่อเติม</Text>
                        </View>
                    </View>
                </View>
                <FastImage style={{ width: '30%', borderRadius: 8, borderColor: '#C4C4C4', borderWidth: 1, marginLeft: 5 }}
                    source={{ uri: value.image }}
                    resizeMode={FastImage.resizeMode.cover} />
            </TouchableOpacity>
        }))
    let onShare = async () => {
        try {
            const result = await Share.share({ message: `หลายคนคงจะเคยอยากรู้ วิธีดูเพชรแท้ ว่าจริงๆแล้วเพชรแท้ดูยังไง?\n${finip}`, });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { };
            } else if (result.action === Share.dismissedAction) { };
        } catch (error) { alert(error.message); };
    };
    return <View>{BlogItem}</View>;
};