///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
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
import stylesDetail from '../../../../style/StylesDetailScreen'
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch, NavigationNavigate, StarReview, } from '../../../../customComponents';
import { ExitAppModule, TodayProduct } from '../../../Main/Main';
import { GetData, LoadingScreen, } from '../../../../customComponents/Tools';
import { PopularProduct } from '../../../Store/Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../../navigator/IpConfig';
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
        <Help_meScreen {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Help_meScreen
export let Help_meScreen = (props) => <View>
    <ScrollView>
        <Help_me {...props} />
        <Question {...props} />
        <Topic_Help {...props} />
    </ScrollView>
</View>;
///----------------------------------------------------------------------------------------------->>>> Help_me
export let Help_me = (props) => {
    const [text, setText] = useState(undefined);
    return <View>
        <ImageBackground source={require('../../../../../icon/bgprofile.jpg')} style={stylesProfileTopic.Help_me_ImageBackground}>
            <View style={stylesProfileTopic.Help_me_Box_text}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สวัสดีค่ะ คุณ xxxxxxxxx</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>
                    คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
                <View>
                    <View style={{ backgroundColor: '#FFFFFF', borderRadius: 5, flexDirection: 'row', paddingLeft: 10, width: '85%', }}>
                        <TextInput fontSize={15} onChangeText={(value) => setText(value)} placeholder='กรุณากรอกสิ่งที่ให้เราช่วยเหลือ'
                            style={{ width: '90%' }} value={text}>
                        </TextInput>
                        <TouchableOpacity>
                            <IconAntDesign name='search1' RightItem size={20} style={{ margin: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Question
export let Question = (props) => <View>
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>คำถามยอดฮิต</Text>
    <View style={stylesProfileTopic.Question_Box}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
            ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
    </View>
    <View style={stylesProfileTopic.Question_Box}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ช่องทางการเงินมีกี่ประเภท</Text>
    </View>
    <View style={stylesProfileTopic.Question_Box}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ฉันตรวจสอบสินค้าได้อย่างไร</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Topic_Help
export let Topic_Help = (props) => {
    const { route } = props;
    const HeadTitle_Help = route.params?.HeadTitle_Help;
    return <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>หัวข้อ</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, }}>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'บัญชีของฉัน' ?
                null : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, noPush: true, setData: { HeadTitle_Help: 'บัญชีของฉัน', },
                }) : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, setData: { HeadTitle_Help: 'บัญชีของฉัน', },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="user" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>บัญชีของฉัน</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'การคืนสินค้า' ?
                null : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, noPush: true, setData: { HeadTitle_Help: 'การคืนสินค้า', },
                }) : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, setData: { HeadTitle_Help: 'การคืนสินค้า', },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="retweet" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การคืนสินค้า</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'การชำระเงิน' ?
                null : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, noPush: true, setData: { HeadTitle_Help: 'การชำระเงิน', },
                }) : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, setData: { HeadTitle_Help: 'การชำระเงิน', },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconEntypo name="credit-card" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การชำระเงิน</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'การสั่งซื้อ' ?
                null : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, noPush: true, setData: { HeadTitle_Help: 'การสั่งซื้อ', },
                }) : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, setData: { HeadTitle_Help: 'การสั่งซื้อ', },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="shoppingcart" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การสั่งซื้อ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'หัวข้ออื่นๆ' ?
                null : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, noPush: true, setData: { HeadTitle_Help: 'หัวข้ออื่นๆ', },
                }) : NavigationNavigate({
                    goScreen: 'Customer_Topic_Help_Account', navigation, setData: { HeadTitle_Help: 'หัวข้ออื่นๆ', },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="ellipsis1" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>หัวข้ออื่นๆ</Text>
            </TouchableOpacity>
        </View>
    </View>;
};