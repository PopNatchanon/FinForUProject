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
export default connect(mapStateToProps, mapDispatchToProps)(Photograph);
function Photograph(props) {
  return (
    <SafeAreaView style={stylesMain.SafeAreaViews}>
      <AppBar {...props} backArrow titleHead='Photograph' />
      <ScrollView>
        <Photograph_About />
        <Portfolio_owner {...props}/>
        <Portfolio_Image/>
      </ScrollView>
      <ExitAppModule {...props} />
    </SafeAreaView>
  )
}
///----------------------------------------------------------------------------------------------->>>>
export let Photograph_About = (props) => {
  const Content_image = { uri: `${ip}/MySQL/uploads/Service/Content.jpg`, };
  return <View style={stylesMain.FrameBackground}>
    <View style={[stylesMain.ItemCenter, { borderBottomColor: '#ECD295', borderBottomWidth: 5 }]}>
      <View style={{ alignItems: 'center', backgroundColor: mainColor, borderRadius: width / 2, margin: 10, paddingHorizontal: 20, width: width * 0.5 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>Photograph</Text>
      </View>
    </View>
    <View style={stylesMain.ItemCenter}>
      <View style={{ width: '95%' }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>
          ช่างภาพถ่ายแฟชั่น-เสื้อผ้า สำหรับร้านค้าสินค้าแฟชั่น เสื้อผ้า หรือเจ้าของแบรนด์เสื้อผ้า
          หากคุณกำลังหาช่างภาพถ่ายภาพแฟชั่น เสื้อผ้า เพื่อโฆษณาและส่งเสริมยอดขายสินค้า
          และเพิ่มการตัดสินใจลูกค้าของท่าน ทางทีมงานของเรายินดีให้บริการ ด้วยประสบการณ์สายงานแฟชั่นโดยตรง
          เราเน้นถ่ายภาพเสื้อผ้าให้เห็นรูปทรงชัดเจนเห็นถึงรายละเอียดของการตกแต่งบนแบบผ้า และรูปทรงของเสื้อผ้ากับตัวแบบ
          และคุณสามารถเลือกแนวภาพที่ถ่ายให้ออกมาเป็นได้ทั้งแนวแฟชั่นเหมือนในนิตยสาร หรือ แฟชั่นโทนเกาหลีก็ได้
          อุปกรณ์ที่ใช้ถ่ายเป็นกล้องคุณภาพระดับสูง พร้อมกับชุดไฟเพิ่มความสว่างถ่ายออกมาคมชัด สีผ้าตรงตามที่เห็น
          ทุกรูปปรับแสงสีเพื่อความสวยงาม พร้อมทั้งเรายังมีบริการจัดหานางแบบให้ได้ตามรูปแบบ Concept ที่ลูกค้าต้องการ
      </Text>
        <FastImage resizeMode={cover} source={Content_image} style={{ height: 200, width: '100%' }} />
      </View>
    </View>
  </View>
}