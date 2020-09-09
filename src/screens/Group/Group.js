///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../actions';
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
import stylesDetail from '../../style/StylesDetailScreen';
import stylesMain, { mainColor, appBarColor } from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../style/styleTopic';
import stylesProfile from '../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob,
} from '../../customComponents/Tools';
import { ImageGallery, GenArray, StarReview, NavigationNavigate, AppBar, } from '../../customComponents';
import { TodayProduct, Slide, ExitAppModule } from '../Main/Main';
import { Store_Detail } from '../Main/RecommendStore/RecommendStore';
import Dash from 'react-native-dash';
import { ProductBox, FeedBox, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
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
            <AppBar_Group {...props} ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow
                searchBar otherBar />
        </Animated.View>
        <Profile_Group {...props} onScroll={Animated.event([{
            nativeEvent: { contentOffset: { y: scrollY } }
        }], { useNativeDriver: false, })} />
    </SafeAreaView>
}
/// AppBar สำหรับกลุ่มของ Feed ----------------------------------------------------------------------->>>>
export let AppBar_Group = (props) => {
    const {
        ABDColor, ABDColor_All, ABGColor, AIColor, ABICartColor, backArrow, chatBar, otherBar, searchBar, SearchText,
    } = props;
    const {
        fetchData, getActive, getFetchData, navigation,
    } = props;
    const [text, setText] = useState(undefined);
    const setSubmit = () => {
        text != undefined && text != ' ' &&
            NavigationNavigate({ goScreen: 'Main_Search', setData: { SearchText: text }, navigation });
    };
    const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo);
    const AIconFeather = Animatable.createAnimatableComponent(IconFeather);
    const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5);
    var allWidth = width - 20;
    backArrow && (allWidth -= 30);
    chatBar && (allWidth -= 30);
    otherBar && (allWidth -= 30);
    const selectorSheet = useRef(null)
    const selectorSheetA = useRef(null)
    const item = [
        /*ส่วนตัวเลือกในการรายงาน AppBarFeed กลุ่ม*/
        { name: 'ภาพโป๊เปลือย' }, { name: 'การก่อกวน' }, { name: 'สแปม' }, { name: 'ข่าวปลอม' }, { name: 'การขายที่ไม่ได้รับอนุญาต' },
        { name: 'การก่อการร้าย' }, { name: 'ความรุนแรง' }, { name: 'การฆ่าตัวตายหรือทำร้ายตัวเอง' }, { name: 'คำพูดที่แสดงความเกลียดชัง' },
        { name: 'อื่นๆ' }
    ]
    let ReportBox = item.map((value, index) => <TouchableOpacity key={index} style={{
        backgroundColor: '#F3F3F3', borderRadius: 50, padding: 5
    }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{value.name}</Text>
    </TouchableOpacity>);
    return (
        <Animatable.View style={[stylesMain.Appbar, stylesMain.FlexRow, {
            width, height: 55, borderWidth: 0, borderBottomWidth: 1,
            backgroundColor: ABGColor ?? mainColor,
            borderColor: ABDColor_All ?? ABDColor ?? mainColor,
            borderBottomColor: ABDColor ?? mainColor,
            borderColor: 'transparent',
        }]}>
            <BottomSheet
                ref={selectorSheetA}
                height={height * 0.44}
                duration={250}
                customStyles={{
                    container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, }
                }}>
                <View style={{ justifyContent: 'space-between', height: '100%', padding: 10 }}>
                    <View style={{ borderBottomColor: '#979797', borderBottomWidth: 1, }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>โปรดเลือกปัญหาเพื่อดำเนินการต่อ</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>คุณสามารถรายงานโพสต์นี้ได้หลังจากเลือกปัญหาแล้ว โปรดทราบว่าขณะนี้เรามีผู้ตรวจสอบน้อยลง</Text>
                    </View>
                    <View style={[stylesMain.FlexRow, { flexWrap: 'wrap', paddingTop: 10, }]}>{ReportBox}</View>
                    <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, padding: 5, borderRadius: 5 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ส่ง</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
            <BottomSheet ref={selectorSheet} height={110} duration={250}
                customStyles={{
                    container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, }
                }}>
                <View style={{ paddingHorizontal: 10, }}>
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10, width: '50%' }]}>
                            <IconEntypo name='message' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>กำลังติดตามกลุ่ม</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { selectorSheetA.current.open() }}
                            style={[stylesMain.FlexRow, { padding: 10, width: '50%' }]}>
                            <IconFontAwesome name='exclamation-circle' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>รายงานกลุ่ม</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10, width: '50%' }]}>
                            <IconFontAwesome name='bell' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>การแจ้งเตือน</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10, width: '50%' }]}>
                            <IconMaterialIcons name='exit-to-app' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ออกจากกลุ่ม</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
            {/* <AStatusBar backgroundColor={ABGColor ?? mainColor} translucent /> */}
            {[backArrow && <View key={'backarrow'}>
                <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]} activeOpacity={1}
                    onPress={() => { NavigationNavigate({ goScreen: 'goBack', navigation }); }}>
                    <AIconEntypo name="chevron-left" size={25} style={{ color: AIColor ?? '#fff', }} />
                </TouchableOpacity>
            </View>,
            searchBar && <TouchableOpacity key={'searchBar'} activeOpacity={1} onPress={() => NavigationNavigate({
                goScreen: 'Group_Search', navigation
            })}
                style={{ marginRight: 3 }}>
                <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical, { height: 30, }]}>
                    <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: allWidth, }]}>
                        <Text style={[stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5,
                        stylesFont.FontCenter]}>ค้นหาสินค้า/ร้านค้า</Text>
                    </View>
                    <IconAntDesign name="search1" size={18} style={[{ top: 4, left: allWidth - 25, position: 'absolute' }]} />
                </View>
            </TouchableOpacity>,
            otherBar && <TouchableOpacity key='otherBar' onPress={() => { selectorSheet.current.open() }}
                style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}>
                <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor ?? '#fff' }} />
            </TouchableOpacity>,
            ]}
        </Animatable.View>
    );
};
///----------------------------------------------------------------------------------------------->>>> โปรไฟล์ กลุ่ม
export let Profile_Group = (props) => {
    const { navigation } = props;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(null);
    var uri = `${finip}/${'brand/feed_highlight'}`;
    useEffect(() => {
        activeSelectedIndex && GetServices({
            uriPointer: uri, getDataSource: value => { setActiveSelectedIndex(false); setDataService(value); },
        });
    }, [activeSelectedIndex]);
    const Group_Member = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png` },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg` },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg` },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg` },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png` },
        { image: `${ip}/MySQL/uploads/Group_image/con1.jpg` }]
    let GroupMemberItem = Group_Member.map((value, index) => {
        if (index < 6) {
            return <View key={index} style={{ height: 'auto', aspectRatio: 1.2, marginBottom: 5 }}>
                <FastImage style={{ height: '100%', width: width * 0.10, marginLeft: 5, borderRadius: 50, marginBottom: 10 }}
                    source={{ uri: value.image, }} resizeMode={FastImage.resizeMode.cover} />
            </View>
        }
    });
    return <>
        <ScrollView {...props}>
            <FastImage style={{ width: '100%', height: 150 }} source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
                resizeMode={FastImage.resizeMode.cover} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>เสื้อผ้าคุณผู้หญิง Less is more</Text>
            <View style={{ backgroundColor: '#FFFF', width: '100%' }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 15, width: '90%' }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สมาชิก</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>1.4 แสนคน</Text>
                    </View>
                    <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { borderBottomWidth: 1 }]}>
                        {GroupMemberItem}
                    </View>
                </View>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-around', paddingVertical: 10 }]}>
                    <TouchableOpacity onPress={() => NavigationNavigate({
                        goScreen: 'Group_About', navigation
                    })}>
                        <View style={[stylesMain.ItemCenter, {
                            backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32
                        }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>เกี่ยวกับกลุ่ม</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({
                        goScreen: 'Group_Image', navigation
                    })}>
                        <View style={[stylesMain.ItemCenter,
                        { backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>รูปภาพ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({
                        goScreen: 'Group_About', navigation
                    })}>
                        <View style={[stylesMain.ItemCenter,
                        { backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>สมาชิก</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView}>
                <View>
                    {dataService?.feed_follow?.length > 0 ?
                        <FlatList scrollEnabled={true} initialNumToRender={10} data={dataService.feed_follow}
                            keyExtractor={(value, index) => `Feed${index}`} renderItem={(value) =>
                                <FeedBox {...props} dataService={value.item} Header Follow={false} />
                            }
                        /> : <></>}
                </View>
            </View>
        </ScrollView>
        <ActionButton buttonColor={mainColor} size={50} onPress={() => NavigationNavigate({
            goScreen: 'Feed_Create', navigation
        })}>
        </ActionButton>
    </>;
}