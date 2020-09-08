///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../../../../style/StylesDetailScreen'
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch, NavigationNavigate, StarReview, } from '../../../../../customComponents';
import { ExitAppModule, TodayProduct } from '../../../../Main/Main';
import { GetData, LoadingScreen, } from '../../../../../customComponents/Tools';
import { PopularProduct } from '../../../../Store/Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
///----------------------------------------------------------------------------------------------->>>>
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='Fin Helpcenter' />
        <Topic_DetailHelp {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>Topic_DetailHelp
export let Topic_DetailHelp = (props) => {
    const { route } = props;
    const HeadTitle_Help = route.params?.HeadTitle_Help;
    const [text, setText] = useState(undefined);
    return <View style={stylesMain.SafeAreaView}>
        <ScrollView>
            <View style={stylesProfileTopic.Account_Help}>
                <View style={stylesProfileTopic.Account_Help_TextInput}>
                    <TextInput fontSize={15} onChangeText={(value) => setText(value)} placeholder='กรุณากรอกสิ่งที่ให้เราช่วยเหลือ'
                        style={{ width: '90%' }} value={text}>
                    </TextInput>
                    <TouchableOpacity>
                        <IconAntDesign name='search1' RightItem size={20} style={{ margin: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>{HeadTitle_Help}</Text>
            <View style={stylesProfileTopic.Topic_DetailHelp_BoxText}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    ในกรณีที่คุณไม่สามารถเปลี่ยนเบอร์โทรศัพท์ได้ อาจเป็นเพราะเข้าข่ายเหตุผลดังต่อไปนี้:
                    เลขบัตรเครดิต หรือ เลขบัญชีธนาคารที่ลงทะเบียนไว้ ไม่ถูกต้อง
                    ใส่รหัสผ่าน  ไม่ถูกต้อง
                    ใส่วันที่หมดอายุของบัตรเครดิต ไม่ถูกต้อง
                            ใส่เลขบัญชีธนาคาร ไม่ถูกต้อง</Text>
                <View style={{
                    alignItems: 'center', backgroundColor: '#ECECEC', borderWidth: 1, height: 80, justifyContent: 'center',
                    marginVertical: 10, width: '100%',
                }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize1]}>ภาพประกอบ</Text>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    หากคุณไม่สามารถเปลี่ยนเบอร์โทรศัพท์เองได้ กรุณาลองใหม่อีกครั้งในอีก 24 ชม. หรือ
                    กรอกแบบฟอร์มยื่นเรื่องเปลี่ยนเบอร์โทรศัพท์ ผ่านลิ้งก์ คลิกที่นี่
                    ในกรณีที่คุณไม่สะดวก สามารถติดต่อ Call center  เพื่อทำการเปลี่ยนเบอร์โทรศัพท์
                    โดยให้ข้อมูลดังต่อไปนี้เมื่อคุณติดต่อ กรุณาให้ข้อมูลดังต่อไปนี้เมื่อคุณติดต่อ : Username
                    เบอร์โทรศัพท์ปัจจุบัน เบอร์โทรศัพท์ใหม่ที่ต้องการเปลี่ยน อีเมลล์ สำเนาบัตรประชาชน
                    หมายเหตุ:
                    ชื่อตามสำเนาบัตรประชาชนต้องตรงกับชื่อผู้ใช้งานในแอพพลิเคชั่น พรัอมทั้งเซ็นต์ลายเซ็นกำกับ และระบุข้อความ ดังนี้
                    - รับรองสำเนาถูกต้อง
                    - เพื่อเปลี่ยนเบอร์โทรศัพท์ของ Username: xxxxxxx เป็นเบอร์ 08x-xxxxxxx
                    เพื่อความปลอดภัยของบัญชีผู้ใช้ มีกระบวนการตรวจสอบสำหรับการยืนยันตัวตนเมื่อมีคำร้องขอเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้</Text>
            </View>
            <View style={[stylesMain.FrameBackground]}>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>บทความที่เกี่ยวข้อง</Text>
                </View>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การลงทะเบียนและเข้าใช้งาน</Text>
                </View>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>จัดการบัญชี</Text>
                </View>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชวนเพื่อน</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={stylesProfileTopic.Topic_DetailHelp_ButtonChat}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทกับ FIN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>;
};