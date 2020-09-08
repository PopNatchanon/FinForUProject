///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../customComponents';
import { ExitAppModule } from '../../Main/Main';
import { Product_income } from '../../Seller/Topic/Topic';
import { TabBar } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <Register_Affiliate {...props} />
        {/* <ExitAppModule /> */}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Register_Affiliate = (props) => <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter,]}>
    <View style={[stylesMain.ItemCenter, { marginVertical: 10, width: '95%', }]}>
        <View style={[stylesMain.ItemCenter, {
            backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, elevation: 1, marginBottom: -10,
            paddingVertical: 5, width: width * 0.40,
        }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>สมาชิกAffiliate</Text>
        </View>
        <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, padding: 10, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>
                FIN Affiliate Influencer Program ช่องทางใหม่หารายได้ผ่านโซเชียล</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>4 ขั้นตอนง่าย ๆ ในการเข้าร่วม  Affiliate Influencer Program</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>1. Register: สมัครเข้าร่วมเป็น Partner  ผ่าน Accesstrade</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>
                2. Share link: นำลิ้งก์โปรโมตสินค้า ที่คุณต้องการไปวางในช่องทาง Social media ของคุณ</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>3. Purchase: ลูกค้าเข้ามาซื้อสินค้าผ่านลิ้งก์ที่คุณแชร์</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>4. Earn Money: รับค่าคอมมิชชั่นในทุกเดือน (หลังผ่านการตรวจสอบ)
            Benefit ที่ Influencer ได้รับมากกว่าแค่ค่าคอมมิชั่น ช่องทางออนไลน์ไหนบ้างที่ Influencer สามารถใช้โปรโมตสินค้าได้ Facebook
            Instagram Twitter YouTube เพียงคุณมีช่องทางใดช่องทางหนึ่ง หรือเว็บไซต์และโซเชียลอื่น ๆ เป็นของตัวเองก็สามารกลายมาเป็น Influencer
        ได้ ที่สำคัญ เราไม่จำกัดยอด Follower หรือผู้ติดตามอีกด้วย</Text>
        </View>
        <View style={[stylesMain.ItemCenter, { marginTop: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>ร่วมสมัครเป็นนักขายออนไลน์เพื่อสร้างรายได้กับเรา</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>เพิ่มโอกาสสร้างรายได้เสริม ด้วย Affiliate Marketing</Text>
            <TouchableOpacity onPress={() => NavigationNavigate({
                goScreen: 'Business_Froms', navigation: props.navigation,
            })} style={[stylesMain.ItemCenter, { borderColor: mainColor, borderRadius: 5, borderWidth: 2, margin: 10, padding: 10, }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>สมัครฟรี คลิกที่นี่!</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>;