///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7 } = stylesFont;
const { FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <Register_Affiliate {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Register_Affiliate = (props) => <View style={[FrameBackground, ItemCenter,]}>
    <View style={[ItemCenter, { marginVertical: 10, width: '95%', }]}>
        <View style={[ItemCenter, {
            backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, elevation: 1, marginBottom: -10,
            paddingVertical: 5, width: width * 0.40,
        }]}>
            <Text style={[FontFamilyBold, FontSize5,]}>สมาชิกAffiliate</Text>
        </View>
        <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, padding: 10, }}>
            <Text style={[FontFamilyBold, FontSize7,]}>
                FIN Affiliate Influencer Program ช่องทางใหม่หารายได้ผ่านโซเชียล</Text>
            <Text style={[FontFamilyText, FontSize6,]}>4 ขั้นตอนง่าย ๆ ในการเข้าร่วม  Affiliate Influencer Program</Text>
            <Text style={[FontFamilyText, FontSize6,]}>1. Register: สมัครเข้าร่วมเป็น Partner  ผ่าน Accesstrade</Text>
            <Text style={[FontFamilyText, FontSize6,]}>
                2. Share link: นำลิ้งก์โปรโมตสินค้า ที่คุณต้องการไปวางในช่องทาง Social media ของคุณ</Text>
            <Text style={[FontFamilyText, FontSize6,]}>3. Purchase: ลูกค้าเข้ามาซื้อสินค้าผ่านลิ้งก์ที่คุณแชร์</Text>
            <Text style={[FontFamilyText, FontSize6,]}>4. Earn Money: รับค่าคอมมิชชั่นในทุกเดือน (หลังผ่านการตรวจสอบ)
            Benefit ที่ Influencer ได้รับมากกว่าแค่ค่าคอมมิชั่น ช่องทางออนไลน์ไหนบ้างที่ Influencer สามารถใช้โปรโมตสินค้าได้ Facebook
            Instagram Twitter YouTube เพียงคุณมีช่องทางใดช่องทางหนึ่ง หรือเว็บไซต์และโซเชียลอื่น ๆ เป็นของตัวเองก็สามารกลายมาเป็น Influencer
        ได้ ที่สำคัญ เราไม่จำกัดยอด Follower หรือผู้ติดตามอีกด้วย</Text>
        </View>
        <View style={[ItemCenter, { marginTop: 10 }]}>
            <Text style={[FontFamilyBold, FontSize5,]}>ร่วมสมัครเป็นนักขายออนไลน์เพื่อสร้างรายได้กับเรา</Text>
            <Text style={[FontFamilyBold, FontSize6,]}>เพิ่มโอกาสสร้างรายได้เสริม ด้วย Affiliate Marketing</Text>
            <TouchableOpacity onPress={() => NavigationNavigate({
                ...props, goScreen: 'Business_Froms',
            })} style={[ItemCenter, { borderColor: mainColor, borderRadius: 5, borderWidth: 2, margin: 10, padding: 10, }]}>
                <Text style={[FontFamilyBold, FontSize6,]}>สมัครฟรี คลิกที่นี่!</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>;