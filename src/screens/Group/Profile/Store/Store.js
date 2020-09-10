///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../../actions';
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
import stylesDetail from '../../../../style/StylesDetailScreen';
import stylesMain, { mainColor, appBarColor } from '../../../../style/StylesMainScreen';
import stylesFont from '../../../../style/stylesFont';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../../style/styleTopic';
import stylesProfile from '../../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob,
} from '../../../../customComponents/Tools';
import { ImageGallery, GenArray, StarReview, NavigationNavigate, AppBar, } from '../../../../customComponents';
import { TodayProduct, Slide, ExitAppModule } from '../../../Main/Main';
import { Store_Detail } from '../../../Main/RecommendStore/RecommendStore';
import Dash from 'react-native-dash';
import { ProductBox, FeedBox, } from '../../../../customComponents/Tools';
import { AppBar_Group } from '../../Group';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../../navigator/IpConfig';
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
    const maxheight = 55;
    let AnimatedHeadbg = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['transparent', appBarColor],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    let AnimatedCart = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['#ECECEC', appBarColor],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    return <SafeAreaView>
        <Animated.View style={{
            zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1,
            marginTop: -(maxheight),
        }}>
            <AppBar_Group ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow />
            <Profile_FeedStore {...props} otherBar onScroll={Animated.event([{
                nativeEvent: { contentOffset: { y: scrollY } }
            }], { useNativeDriver: false, })} />
        </Animated.View>
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Profile_FeedStore = (props) => {
    const { navigation } = props;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(null);
    var uri = `${finip}/${'brand/feed_highlight'}`;
    useEffect(() => {
        activeSelectedIndex &&
            GetServices({
                uriPointer: uri, getDataSource: value => { setActiveSelectedIndex(false); setDataService(value); },
            });
    }, [activeSelectedIndex]);
    const TabBar_Profile = [
        { name: <Text style={stylesFont.FontSize6}><IconFeather name='layout' size={20} />โพสต์</Text> },
        { name: <Text style={stylesFont.FontSize6}><IconAntDesign name='solution1' size={20} />ชุมชน</Text> }
    ];
    return <ScrollView>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <FastImage style={{ width: '100%', height: 150, }} resizeMode={FastImage.resizeMode.cover}
                source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }} />
            <View style={[stylesMain.FlexRow, { borderBottomWidth: 2, marginHorizontal: 5 }]}>
                <FastImage source={{ uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`, }} resizeMode={FastImage.resizeMode.cover}
                    style={{
                        height: 80, width: 80, marginLeft: 10, borderRadius: 40, bottom: 20, borderColor: '#FFFFFF', borderWidth: 3
                    }} />
                <View style={{ marginLeft: 10, width: '50%' }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ppooo</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BEBDBD' }]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>200 โพสต์  </Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>ผู้ติดตาม 200K คน กำลังติดตาม 20 คน</Text>
                </View>
                <View>
                    <TouchableOpacity style={[stylesMain.ItemCenter, {
                        backgroundColor: '#0A55A6', marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15
                    }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>กำลงติดตาม</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesMain.ItemCenter, {
                        backgroundColor: '#0A55A6', marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15
                    }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>แชท</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[stylesMain.FlexRow, { paddingHorizontal: 10 }]}>
                <View style={{ padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>คะแนนร้านค้า :</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>รายการสินค้า :</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ระยะเวลาในการจัดเตรียมพัสดุ :</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ประสิทธิภาพการแชท :</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>4.8 จาก 5 (46.9 พันคะแนน) </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>120 </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เร็ว ( 1-2 วัน )</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>80 % ( ภายในไม่กี่ชั่วโมง)</Text>
                </View>
            </View>
        </View>
        <View style={[stylesMain.FrameBackground]}>
            <View style={{ borderBottomWidth: 2, paddingBottom: 10, marginHorizontal: 10, }}>
                <View style={stylesMain.FlexRow}>
                    <IconEntypo name='location-pin' size={20} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10 }]}>จ.นครศรีธรรมราช, ประเทศไทย</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    <IconFontAwesome name='birthday-cake' size={20} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10 }]}>เกิดเมื่อ 29 มิถุนายน ค.ศ. 1995</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>เกี่ยวกับ</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    สวัสดีค่า ยินดีต้อนรับค่ะร้านนี้รบกวนไม่ถามเล่นๆ นะคะ หากต่อราคารบกวนไม่ต่อเว่อๆนะคะ ถ้าลดได้ลดให้ค่า</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#0A55A6' }]}>
                    ลิงค์ร้านค้า: https://finforyou.com/ppooo</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, stylesMain.FrameBackground, { justifyContent: 'center', marginTop: 5 }]}>
            <TabBar item={TabBar_Profile} type='box' widthBox={96} radiusBox={4} />
        </View>
        {dataService && <FlatList scrollEnabled={true} initialNumToRender={10} data={dataService.feed_follow}
            keyExtractor={(value, index) => `Feed${index}`} renderItem={(value) =>
                <FeedBox {...props} dataService={value.item} Header Follow={false} />} />}
    </ScrollView>;
};