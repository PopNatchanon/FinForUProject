///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import BottomSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput } from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob'
import ModalDropdown from 'react-native-modal-dropdown';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../../style/StylesDetailScreen';
import stylesMain, { mainColor, appBarColor } from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../style/styleTopic';
import stylesProfile from '../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob,
} from '../../../customComponents/Tools';
import { ImageGallery, GenArray, StarReview, NavigationNavigate, AppBar, } from '../../../customComponents';
import { TodayProduct, Slide, ExitAppModule } from '../../Main/Main';
import { Store_Detail } from '../../Main/RecommendStore/RecommendStore';
import Dash from 'react-native-dash';
import { ProductBox, FeedBox, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);
function PostFeed(props) {
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='เกี่ยวกับกลุ่ม' />
        <Group_About />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Group_About = (props) => {
    const Group_Member = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png`, name: 'สติ๊ก กี้ ', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg`, name: 'Chanun Nurainee', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'Rattapol Meejun', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'May Methawee', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png`, name: 'pantip com', Following: '20', membar_Follow: '30', }
    ];
    let GroupMemberItem = Group_Member.map((value, index) => <TouchableOpacity key={index} style={[stylesMain.FlexRow,
    { justifyContent: 'space-between', marginTop: 10 }]}>
        <View style={stylesMain.FlexRow}>
            <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: value.image, }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={{ marginLeft: 10 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{value.name}</Text>
                <View style={stylesMain.FlexRow}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>กำลังติดตาม {value.Following} ผู้ใช้งาน</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ผู้ติดตาม {value.membar_Follow} ผู้ใช้งาน</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <IconEntypo name='dots-three-vertical' size={25} />
        </TouchableOpacity>
    </TouchableOpacity>);
    return <ScrollView>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>เกี่ยวกับกลุ่ม</Text>
            <Text numberOfLines={5} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                🍓ตลาดสินค้า ราชบุรี🍓
                กลุ่มนี้เปิดไว้เพื่อคนราชบุรีและพื่นที่ใกล้เคียง
                ได้เข้ามาซื้อขายแลกเปลี่ยนสินค้า และประชาสัมพันธ์กิจการร้านค้าต่างๆในราชบุรี และพื้นที่ใกล้เคียง
                ใครมีอะไรในบ้านที่เก็บไว้ไม่ได้ใช้เอามาขายราคาถูกๆเพื่อไปเป็นประโยชน์กับคนอื่นนะค่ะ
                กติกาในการโพส
                1.ทุกครั้งที่โพสขายสินค้า
                ต้องแจ้งรายละเอียดสินค้าให้ครบถ้วน แจ้งราคา แจ้งสถานที่จำหน่าย แจ้งสถานที่รับสินค้า ด้วยทุกครั้ง
                2.ห้ามโพสขายสินค้าที่ผิดกฎหมายทุกชนิด
                3.ห้ามโพสเรื่องการเมือง
                4.ห้ามโพสถ้อยคำหยาบคาย ด่าทอกันเด็ดขาด
                ปฎิบัติผิดกฎ ถูกดีดออกจากกลุ่มทันที และจะไม่ได้กลับเข้ามาในกลุ่มนี้อีก
                ขอความร่วมมือ ช่วยนะค่ะ ขอบคุณค่ะ
            </Text>
        </View>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สมาชิก</Text>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: `${ip}/MySQL/uploads/addmin/unnamed.png`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Myn</Text>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>กำลังติดตาม 18 ผู้ใช้งาน</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ผู้ติดตาม 18 ผู้ใช้งาน</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <IconEntypo name='dots-three-vertical' size={25} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>แอดมินประจำกลุ่ม</Text>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: `${ip}/MySQL/uploads/addmin/JALL2.jpg`, }}
                        resizeMode={FastImage.resizeMode.cover} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Pop</Text>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>กำลังติดตาม 18 ผู้ใช้งาน</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ผู้ติดตาม 18 ผู้ใช้งาน</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <IconEntypo name='dots-three-vertical' size={25} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สมาชิกกลุ่ม</Text>
            {GroupMemberItem}
        </View>
    </ScrollView>;
};