///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
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
        <ScrollView>
            <Account_Help {...props} />
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>Account_Help
export let Account_Help = (props) => {
    const { route } = props;
    const HeadTitle_Help = route.params?.HeadTitle_Help;
    const [text, setText] = useState(undefined);
    return <View>
        <View style={stylesProfileTopic.Account_Help}>
            <View style={stylesProfileTopic.Account_Help_TextInput}>
                <TextInput fontSize={15} onChangeText={(value) => setText(value)} placeholder='กรุณากรอกสิ่งที่ให้เราช่วยเหลือ'
                    style={{ width: '90%' }} value={text} />
                <TouchableOpacity>
                    <IconAntDesign name='search1' RightItem size={20} style={{ margin: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>{HeadTitle_Help}</Text>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Customer_Topic_Help_Detail', navigation, setData: { HeadTitle_Help: HeadTitle_Help, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
                    ทำไมฉันจึงไม่สามารถเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้ได้?</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Customer_Topic_Help_Detail', navigation, setData: { HeadTitle_Help: HeadTitle_Help, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
                    ทำไมคำขอลบบัญชีของฉันจึงถูกปฏิเสธ?</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Customer_Topic_Help_Detail', navigation, setData: { HeadTitle_Help: HeadTitle_Help, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
                    ฉันสามารถเปลี่ยนบัญชีผู้ใช้และเปลี่ยนชื่อของร้านค้าได้อย่างไร</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Customer_Topic_Help_Detail', navigation, setData: { HeadTitle_Help: HeadTitle_Help, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมฉันถึงลงชื่อเข้าใช้งานไม่ได้?</Text>
            </View>
        </TouchableOpacity>
        <Topic_Help {...props} />
    </View>;
};