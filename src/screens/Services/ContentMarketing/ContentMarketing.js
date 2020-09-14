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
///----------------------------------------------------------------------------------------------->>>> Main
const Navi = (naviProps) => NavigationNavigate(naviProps);
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ContentMarketing);
function ContentMarketing(props) {
  return (
    <SafeAreaView style={stylesMain.SafeAreaViews}>
      <AppBar {...props} backArrow titleHead='Content Marketing' />
      <ScrollView>
        <Content_About />
        <Portfolio_owner {...props} />
        <Portfolio_Image />
      </ScrollView>
      <ExitAppModule {...props} />
    </SafeAreaView>
  )
}
///----------------------------------------------------------------------------------------------->>>>
export let Content_About = (props) => {
  const Content_image = { uri: `${ip}/MySQL/uploads/Service/Content.jpg`, };
  return <View style={stylesMain.FrameBackground}>
    <View style={[stylesMain.ItemCenter, { borderBottomColor: '#ECD295', borderBottomWidth: 5 }]}>
      <View style={{ alignItems: 'center', backgroundColor: mainColor, borderRadius: width / 2, margin: 10, paddingHorizontal: 20, width: width * 0.5 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>Content Marketing</Text>
      </View>
    </View>
    <View style={stylesMain.ItemCenter}>
      <FastImage resizeMode={cover} source={Content_image} style={{ height: 200, width: '100%' }} />
      <View style={{ width: '95%' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
          Content is the KING” คุณคงเคยได้ยินประโยคนี้มานับครั้งไม่ถ้วนว่า Content คือราชาแห่งยุค ในโลกที่การตลาดแทบทุกอย่างถูกโยกเข้าสู่ดิจิทัลเกือบจะ 100%
          และทุกคนสามารถเข้าถึงมีเดียต่างๆ ได้ทำให้การแข่งขันยิ่งทวีความดุเดือนขึ้นกว่าเมื่อก่อนหลายเท่า นั่นจึงเป็นหนึ่งสาเหตุที่นักการตลาดต้องหากลยุทธ์ที่แตกต่างมาต่อสู้
          กับคู่แข่งและเครื่องมือที่ทรงพลังมากที่สุดนั่นก็คือ “การเขียน Content”
      </Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
          Content Marketing คืออะไร
          แปลได้ตรงตัวเลยก็คือ “การตลาดคอนเทนต์” โดยขยายความได้ว่าการทำการตลาดที่ใช้คอนเทนต์เป็นมีเดีย หรือเครื่องมือสำหรับผู้ทำส่งสารต่อไปยังผู้รับ ก็คือการที่แบรนด์จะสื่อสารกับผู้อ่านที่เป็นลูกค้านั่นเอง จะเรียกว่า Content
          คือเครื่องมือชิ้นหนึ่งสำหรับการทำการตลาดก็คงไม่ผิด โดยคำว่า Content นั้นเราไม่ได้พูดถึง บทความ แคปชั่น ที่เป็นตัวหนังสือเพียงอย่างเดียว แต่ศัพท์ทางการตลาด Content คือทุกๆ อย่างที่ถูกทำขึ้นเพื่อจุดประสงค์บางอย่างที่ชัดเจน เช่น
          ทำเพื่อโปรโมทสินค้า ให้แบรนด์เป็นที่รู้จัก เพื่อขายของ ฯลฯ ดังนั้นหากเป็นคอนเทนต์อื่นๆ ที่ไม่ได้มีจุดประสงค์ทางการตลาดชัดเจน จะเรียกว่าเป็น Content Marketing ไม่ได้ จึงทำให้ Content ก็เป็นได้ทั้ง ตัวหนังสือ ภาพ วิดีโอและเสียงรวมถึงมีเดียอื่นๆ ด้วย
      </Text>
      </View>
      <View style={[stylesMain.ItemCenter, { backgroundColor: '#C9C9C9', height: 150, width: '98%' }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>video marketing</Text>
      </View>
      <View style={{ width: '95%' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>SEO มีดีอย่างไร? คอนเทนต์มาร์เก็ตติ้ง และ SEO มีความสัมพันธ์อย่างใกล้ชิด SEO คือ การทำให้เว็บไซต์ของคุณอยู่ในอันดับที่ดีที่สุดของหน้าแสดงผลการค้นหาใน
        Search Engine อย่าง Google ดังนั้น Content marketing ที่ดีคือต้องเป็นเนื้อหาที่ถูกต้องตามหลักของ Search Engine Optimized เนื้อหาของคุณจะปรากฏขึ้นบน
          Google เพราะ SEO เป็นส่วนหนึ่งของ Search Engine Marketing</Text>
      </View>
    </View>
  </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Portfolio_owner = (props) => {
  const Portfoliotitem = [
    { name: 'TEAM : A', image_Pro: `${ip}/MySQL/uploads/Service/agen1.jpg`, category: 'อาหาร, ท่องเที่ยว', agency: 'ABM Connect', detail: 'รับทำประชาสัมพันธ์ พีอาร์ออนไลน์ โฆษณาออนไลน์' },
    { name: 'TEAM : B', image_Pro: `${ip}/MySQL/uploads/Service/agen2.jpg`, category: 'ถ่ายโฆษณา, live สด, Ads facebook  ', agency: 'Analytics Data Advertising', detail: 'รับอีเวนท์ โปรโมตสินค้า ส่งเสริมการตลาด' },
    { name: 'TEAM : C', image_Pro: `${ip}/MySQL/uploads/Service/agen3.jpg`, category: 'ติดต่อ connext ลูกค้า ', agency: 'Adapter Digital ', detail: 'รับทำพีอาร์ ประชาสัมพันธ์' },
  ]
  const PortfolioBox = Portfoliotitem.map((v, i) => {
    const ImagePortfolio = { uri: v.image_Pro, };
    return <View key={i} style={[stylesMain.FlexRow, {
      borderColor: mainColor, borderWidth: 3, margin: 5, backgroundColor: '#FFFFFF',
      borderRadius: 10, justifyContent: 'space-between', padding: 5, height: height * 0.20,
    }]}>
      <View style={{ width: width * 0.66 }}>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{v.name}</Text>
          <View style={stylesMain.FlexRow}>
            <IconEntypo name='star' size={20} />
            <IconEntypo name='star' size={20} />
            <IconEntypo name='star' size={20} />
            <IconEntypo name='star' size={20} />
            <IconEntypo name='star' size={20} />
          </View>
        </View>
        <View style={{ borderColor: mainColor, borderWidth: 1, padding: 5, height: height * 0.13, borderRadius: 10, justifyContent: 'center' }}>
          <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมวดหมู่ : {v.category}</Text>
          <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>บริษัท {v.agency} </Text>
          <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{v.detail} </Text>
        </View>
      </View>
      <View style={[stylesMain.ItemCenter, { width: width * 0.25 }]}>
        <FastImage resizeMode={contain} source={ImagePortfolio} style={{ height: 80, width: 80, borderRadius: 5, borderColor: mainColor, borderWidth: 1 }} />
        <TouchableOpacity onPress={() => Navi({ ...props, goScreen: 'ContentMarketing_Workpiece', })} style={{ backgroundColor: mainColor, marginTop: 10, borderRadius: 5 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF', paddingHorizontal: 15, }]}>ดูผลงาน</Text>
        </TouchableOpacity>
      </View>
    </View>;
  });
  return <View>
    <View style={{ backgroundColor: mainColor, width: width * 0.40, marginVertical: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ตัวอย่างผลงาน</Text>
    </View>
    {PortfolioBox}
  </View>
}
///----------------------------------------------------------------------------------------------->>>>
export let Portfolio_Image = (props) => {
  const Content_image1 = { uri: `${ip}/MySQL/uploads/Service/Portfolio/5.jpg`, };
  const Content_image2 = { uri: `${ip}/MySQL/uploads/Service/Portfolio/1.jpg`, };
  const Content_image3 = { uri: `${ip}/MySQL/uploads/Service/Portfolio/2.jpg`, };
  const Content_image4 = { uri: `${ip}/MySQL/uploads/Service/Portfolio/3.jpg`, };
  const Content_image5 = { uri: `${ip}/MySQL/uploads/Service/Portfolio/4.jpg`, };
  return <View>
    <View style={{ backgroundColor: mainColor, width: width * 0.40, marginVertical: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ตัวอย่างผลงาน</Text>
    </View>
    <View style={{ paddingHorizontal: 5, width: '100%', paddingBottom: 10 }}>
      <FastImage resizeMode={cover} source={Content_image1} style={{
        height: 200, width: '100%', borderColor: '#C9C9C9', borderWidth: 2, borderRadius: 10
      }} />
      <View style={[stylesMain.FlexRow, { marginTop: 4, justifyContent: 'space-between' }]}>
        <FastImage resizeMode={cover} source={Content_image2} style={{
          height: 100, width: width * 0.48, borderColor: '#C9C9C9', borderWidth: 2, borderRadius: 10,
        }} />
        <FastImage resizeMode={cover} source={Content_image3} style={{
          height: 100, width: width * 0.48, borderColor: '#C9C9C9', borderWidth: 2, borderRadius: 10
        }} />
      </View>
      <View style={[stylesMain.FlexRow, { marginTop: 4, justifyContent: 'space-between' }]}>
        <FastImage resizeMode={cover} source={Content_image4} style={{
          height: 100, width: width * 0.48, borderColor: '#C9C9C9', borderWidth: 2, borderRadius: 10
        }} />
        <FastImage resizeMode={cover} source={Content_image5} style={{
          height: 100, width: width * 0.48, borderColor: '#C9C9C9', borderWidth: 2, borderRadius: 10
        }} />
      </View>
    </View>
  </View>
}