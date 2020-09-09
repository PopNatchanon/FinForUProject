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
    const { route } = props;
    const actionPost = route.params?.actionPost
    const selectedIndex = route.params?.selectedIndex
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activePost, setActivePost] = useState(false);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const scrollY = new Animated.Value(0);
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    let getActivePost = (value) => setActivePost(value);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUse: true, })
    }, [activeGetCurrentUser])
    let PathList = () => {
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
        switch (selectedIndex) {
            case 0:
                return <>
                    {/* หน้า คะแนนร้านค้า เข้าจากหน้า Store  */}
                    <AppBar {...props} backArrow titleHead='คะแนนประจำร้าน' />
                    <Score_store {...props} cokie={cokie} />
                </>
            case 1:
                return <>
                    {/* หน้าสร้างโพสต์ เข้าจากปุ่มบวกหน้า Feed*/}
                    <AppBar {...props} backArrow postBar getActivePost={(value) => getActivePost(value)}
                        titleHead={actionPost == 'edit' ? 'แก้ไขโพสต์' : 'สร้างโพสต์'} />
                    <Post_New {...props} activePost={activePost} cokie={cokie} getActivePost={(value) => getActivePost(value)} />
                </>
            case 2:
                return <>
                    {/* หน้า แท็กสินค้า เข้าจากหน้า Feed */}
                    <AppBar {...props} backArrow titleHead='เลือกสินค้า' />
                    <Select_TagProduct {...props} cokie={cokie} />
                </>
            case 3:
                return <>
                    {/* หน้า คอมเมนท์ เข้าจากหน้า Feed ปุ่มแสดงความคิดเห็น */}
                    <AppBar {...props} backArrow titleHead='คอมเมนท์' chatBar />
                    <Feed_Comment />
                </>
            case 10:
                return <>
                    <AppBar {...props} backArrow titleHead='สินค้า' />
                </>
            case 11:
                return <>
                    {/* หน้าสร้าง กลุ่มเข้าจาก หน้า Feed_About */}
                    <AppBar {...props} backArrow titleHead='สร้างกลุ่ม' />
                    <New_Group {...props} />
                </>
            case 12:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้าสร้างกลุ่มเสร็จ กับ ดูกลุ่ม หน้า Feed_About */}
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
                </>
            case 13:
                return <>
                    {/* หน้าเกี่ยวกับ กลุ่ม เข้าจาก หน้า โปรไฟล์กลุ่ม ปุ่มเกี่ยวกับกลุ่ม */}
                    <AppBar {...props} backArrow titleHead='เกี่ยวกับกลุ่ม' />
                    <Group_About />
                </>
            case 14:
                return <>
                    {/* หน้ารูปภาพ กลุ่ม เข้าจาก หน้าโปรไฟล์กลุ่ม ปุ่มรูปภาพกลุ่ม */}
                    <AppBar {...props} backArrow titleHead='รูปภาพ' />
                    <Group_Image />
                </>
            case 16:
                return <>
                    {/* หน้า บันทึกกิจกรรม เข้าจาก หน้า Feed_About */}
                    <AppBar {...props} backArrow titleHead='บันทึกกิจกรรม' />
                    <Save_Activity />
                </>
            case 17:
                return <>
                    {/* หน้า รายการที่บันทึกไว้ เข้าจาก หน้า Feed_About */}
                    <AppBar {...props} backArrow titleHead='โพสต์ที่บันทึก' />
                    <Save_Post />
                </>
            case 18:
                return <>
                    {/* หน้า กลุ่มทั้งหมด เข้าจาก หน้า Feed_About */}
                    <AppBar {...props} backArrow titleHead='กลุ่มทั้งหมด' />
                    <Group_Total {...props} />
                </>
            case 19:
                return <>
                    {/* หน้า การแจ้งเตือน เข้าจาก หน้า Feed_About */}
                    <AppBar {...props} backArrow titleHead='การแจ้งเตือน' />
                    <Feed_Notification />
                </>
            case 20:
                return <>
                    {/* หน้า ค้นหา เข้าจากหน้า Profile กลุ่ม */}
                    <Animated.View style={{
                        zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1,
                        marginTop: -(maxheight),
                    }}>
                        <AppBar_Group ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow backArrow searchBar otherBar />
                        <Group_Search {...props} otherBar onScroll={Animated.event([{
                            nativeEvent: { contentOffset: { y: scrollY } }
                        }], { useNativeDriver: false, })} />
                    </Animated.View>
                </>
            case 21:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้า โปรร้านค้า-แท๊บโพสต์ร้าน  */}
                    <Animated.View style={{
                        zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1,
                        marginTop: -(maxheight),
                    }}>
                        <AppBar_Group ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow />
                        <Profile_FeedStore {...props} otherBar onScroll={Animated.event([{
                            nativeEvent: { contentOffset: { y: scrollY } }
                        }], { useNativeDriver: false, })} />
                    </Animated.View>
                </>
            case 22:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้า โปรร้านค้า-แท๊บโพสต์ร้าน  */}
                    <Animated.View style={{
                        zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1,
                        marginTop: -(maxheight),
                    }}>
                        <AppBar_Group {...props} ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow />
                    </Animated.View>
                    <Profile_FeedCustomer {...props} otherBar onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: scrollY } }
                    }], { useNativeDriver: false, })} />
                </>
            case 23:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้า โปรร้านค้า-แท๊บโพสต์ร้าน  */}
                    <AppBar {...props} backArrow saveBar />
                    <Profile_Edit />
                </>
            case 24:
                return <>
                    {/* หน้า แชร์โพสต์ Feed เข้าจาก Box Feed ปุ่มแชร์ เลือก Fin */}
                    <AppBar {...props} backArrow selectshare postBar />
                    <Post_New {...props} activePost={activePost} cokie={cokie} getActivePost={(value) => getActivePost(value)} />
                </>
            case 25:
                return <>
                    {/* หน้า แชร์โพสต์ Feed เข้าจาก Box Feed ปุ่มแชร์ เลือก Fin */}
                    <AppBar {...props} backArrow titleHead='กลุ่มยอดนิยม' />
                    <Group_Popular />
                </>
            case 26:
                return <>
                    {/* หน้า แชร์โพสต์ Feed เข้าจาก Box Feed ปุ่มแชร์ เลือก Fin */}
                    <AppBar {...props} backArrow titleHead='ผู้ติดตาม' />
                    <Followers />
                </>
            case 27:
                return <>
                    {/* หน้า แชร์โพสต์ Feed เข้าจาก Box Feed ปุ่มแชร์ เลือก Fin */}
                    <AppBar {...props} backArrow titleHead='กำลังติดตาม' />
                    <Following />
                </>
            case 28:
                return <>
                    {/* หน้า แชร์โพสต์ Feed เข้าจาก Box Feed ปุ่มแชร์ เลือก Fin */}
                    <AppBar {...props} backArrow titleHead='คูปอง' />
                    <Test_Coupon />
                </>
        }
    }
    return PathList()
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
                goScreen: 'Store_PostFeed', setData: { selectedIndex: 20, }, navigation
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
///----------------------------------------------------------------------------------------------->>>
export let Score_store = (props) => {
    const { cokie, route } = props;
    const id_store = route.params?.id_store;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [score, setScore] = useState('');
    var dataBody = { id_store, score, };
    var item = [{
        name: 'ทั้งหมด',
        nameline2: `(${(dataService ? (dataService.rate_1 + dataService.rate_2 + dataService.rate_3 + dataService.rate_4 +
            dataService.rate_5) : '0')})`,
    }, {
        name: '5 ดาว',
        nameline2: `(${dataService?.rate_5 ?? '0'})`,
    }, {
        name: '4 ดาว',
        nameline2: `(${dataService?.rate_4 ?? '0'})`,
    }, {
        name: '3 ดาว',
        nameline2: `(${dataService?.rate_3 ?? '0'})`,
    }, {
        name: '2 ดาว',
        nameline2: `(${dataService?.rate_2 ?? '0'})`,
    }, {
        name: '1 ดาว',
        nameline2: `(${dataService?.rate_1 ?? '0'})`,
    }];
    var uri = `${finip}/store/score_data`;
    let updateIndex = (value) => {
        var score = value.selectedIndex == 0 ? '' :
            value.selectedIndex == 1 ? '5' :
                value.selectedIndex == 2 ? '4' :
                    value.selectedIndex == 3 ? '3' :
                        value.selectedIndex == 4 ? '2' :
                            value.selectedIndex == 5 ? '1' : '';
        setActiveGetServices2(true); setScore(score);
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
    useEffect(() => {
        activeGetServices && id_store && cokie && dataBody?.id_store &&
            GetServices({
                Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'score_data', getDataSource: value => getData(value),
            });
    }, [activeGetServices && id_store && cokie && dataBody?.id_store]);
    useEffect(() => {
        activeGetServices2 && id_store && cokie &&
            GetServices({
                Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'score_data_start', getDataSource: value => getData2(value),
            });
    }, [activeGetServices2 && id_store && cokie]);
    return <ScrollView>
        <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
            <View style={stylesMain.ItemCenter}>
                <View style={[stylesMain.ItemCenter, {
                    borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10
                }]}>
                    {dataService?.rating_store == 'ยังไม่มีการรีวิว' ?
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ยังไม่มีการรีวิว</Text> :
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
                            {dataService?.rating_store} คะแนน</Text>}
                    <View style={stylesMain.FlexRow}>
                        {StarReview(dataService?.rating_store, 20)}
                    </View>
                </View>
            </View>
        </View>
        <View style={{ height: 120, width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
            <TabBar sendData={value => updateIndex(value)} setVertical={6} item={item} type='box' noLimit numberofBox={3} radiusBox={4} />
        </View>
        {dataService2?.error != '[SyntaxError: JSON Parse error: Unrecognized token ' < ']' &&
            dataService2?.data_score?.length > 0 ?
            dataService2.data_score.map((value, index) => <Box_Rating dataService={value} key={index} />)
            : <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { width, height: '100%' }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>ไม่มีรีวิว</Text>
            </View>}
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>
export let Box_Rating = (props) => {
    const { comment_box, dataService } = props;
    const image_customer = `${finip}/${dataService.path_customer}/${dataService.img_customer}`;
    return <View style={stylesMain.FrameBackground}>
        <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1 }]}>
            <View style={stylesProfileTopic.Order_StorePro}>
                <FastImage source={{ uri: dataService?.user_type == 'fin' ? image_customer : dataService?.img_customer }}
                    style={{ width: '100%', height: '100%', borderRadius: 20, }} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 10, marginLeft: 4, }]}>{dataService?.name}</Text>
        </View>
        <View style={{ padding: 10 }}>
            <View style={stylesMain.FlexRow}>
                {StarReview(dataService?.rating, 20)}
            </View>
            {comment_box && <View style={{ backgroundColor: mainColor, width: 110, margin: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF', textAlign: 'center' }]}>
                    คุ้มค้าและจัดส่งเร็วดี</Text>
            </View>}
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#111', }]}>{dataService?.comment}</Text>
            </View>
        </View>
        <View style={[stylesMain.FlexRow, { marginLeft: 10 }]}>
            {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-03-2020 09:40</Text>  */}
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>สินค้า : {dataService?.product} {dataService?.detail}</Text>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>
export let Post_New = (props) => {
    const { activePost, cokie, getActivePost, navigation, route } = props;
    const actionPost = route.params?.actionPost;
    const id_feed = route.params?.id_feed;
    const id_store = route.params?.id_store;
    const store_data = route.params?.store_data;
    const [activePostView, setActivePostView] = useState(true);
    const [avatarSource, setAvatarSource] = useState(undefined);
    const [detail, setDetail] = useState(undefined);
    const [image, setImage] = useState(undefined);
    const [image_path, setImage_Path] = useState(undefined);
    const [tagProduct, setTagProduct] = useState([]);
    const FramestickerSheetRef = useRef(null);
    let UploadImagePostFeed = () => {
        const options = { width: 400, height: 400, includeBase64: true, cropping: true };
        ImagePicker.openPicker(options).then(response => {
            setAvatarSource(response);
        });
    };
    let getData = (dataService) => {
        getActivePost(false)
        route.params.getDataSource(true);
        navigation.goBack();
    };
    let getData2 = (dataService2) => {
        var detail;
        var image;
        var image_path;
        dataService2.feed_news.map((value) => {
            detail = value.detail;
            image = value.image;
            image_path = value.image_path;
        });
        setActivePostView(false);
        setDetail(detail);
        setImage(image);
        setImage_Path(image_path);
    };
    let getDataService = (value) => {
        tagProduct.push(value);
        setTagProduct(tagProduct);
    };
    let deleteTag = (index) => {
        tagProduct.splice(index, 1)
        setTagProduct(tagProduct);
    }
    let Framesticker = () => {
        const FrameImage = [
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker01.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker02.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker03.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker04.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker05.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker06.jpg` },
        ]
        let FrameItem = FrameImage.map((value, index) => {
            if (index < 6) {
                return <View key={index}>
                    <TouchableOpacity>
                        <FastImage style={{ height: 120, width: 120, marginBottom: 10 }} source={{ uri: value.image, }} />
                    </TouchableOpacity>
                </View>
            }
        });
        return <>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>กรอบ/สติ๊กเกอร์</Text>
                <View style={[stylesMain.FlexRow, { flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10 }]}>
                    {FrameItem}
                </View>
            </View>
        </>;
    };
    const store_data_2 = store_data && store_data[0];
    const image_storee = store_data_2 && `${finip}/${store_data_2.image_path}/${store_data_2.image}`;
    const image_post = `${finip}/${image_path}/${image}`;
    const uri = `${finip}/${(actionPost == 'edit' ? 'brand/feed_action' : 'brand/create_feed')}`;
    var o = avatarSource && avatarSource.path.split('/');
    var tagProductBody = tagProduct && tagProduct.map((value) => { return value.id_product });
    var dataBody = actionPost == 'edit' ?
        {
            id_store,
            id_feed,
            detail: detail,
            id_product: tagProduct ? tagProductBody.join(';') : '',
            act: 'update'
        } :
        avatarSource ?
            [
                { name: 'id_store', data: id_store },
                { name: 'detail', data: detail },
                { name: 'id_product', data: tagProduct ? tagProductBody.join(';') : '' },
                { name: 'file', filename: o[o.length - 1], type: avatarSource.mime, data: RNFetchBlob.wrap(avatarSource.path) }
            ] : [
                { name: 'id_store', data: id_store },
                { name: 'detail', data: detail },
                { name: 'id_product', data: tagProduct ? tagProductBody.join(';') : '' },
            ];
    const uri2 = `${finip}/brand/feed_action`;
    var dataBody2 = actionPost == 'edit' ?
        {
            id_store,
            id_feed,
            act: 'view'
        } : {};
    activePost &&
        actionPost == 'edit' ?
        GetServices({
            uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'feed_action_update',
            getDataSource: (value) => getData(value)
        }) :
        GetServicesBlob({
            FormData, key: 'create_feed', uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'create_feed',
            getDataSource: (value) => getData(value),
        });
    activePostView && actionPost == 'edit' && id_feed && id_store && cokie &&
        GetServices({
            uriPointer: uri2, dataBody: dataBody2, Authorization: cokie, showConsole: 'feed_action_view',
            getDataSource: (value) => getData2(value),
        });
    return <>
        <BottomSheet ref={FramestickerSheetRef} height={320} duration={250}
            customStyles={{ container: { padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
            {Framesticker()}
        </BottomSheet>
        <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, }]}>
                    {/* {
                            store_data_2 && */}
                    <View style={stylesProfileTopic.Order_StorePro}>
                        <FastImage source={{ uri: `${ip}/MySQL/uploads/addmin/unnamed.png`, }}
                            style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF', borderRadius: 20, }} />
                    </View>
                    {/* } */}
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>
                        {/* {store_data_2 && store_data_2.name} */}
                            ชื่อผู้ที่จะโพสต์</Text>
                </View>
                <View style={{ paddingHorizontal: 10, }}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4]} placeholder="คุณกำลังคิดอะไรอยู่..." multiline
                        editable value={detail} onChangeText={(value) => setDetail(value)}>
                    </TextInput>
                </View>
                <View>
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <FastImage source={{ uri: avatarSource ? avatarSource.path : image ? image_post : null }}
                            style={{ width: 400, height: 400, backgroundColor: '#FFFFFF' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width, }}>
                    {tagProduct.length > 0 && tagProduct.map((value, index) => <View key={index} style={{
                        backgroundColor: '#066996', height: 22, borderRadius: 8, marginLeft: 6, flexDirection: 'row', marginTop: 6,
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.ItemCenterVertical, {
                            color: '#fff', marginLeft: 8,
                        }]}>{value.name}</Text>
                        <TouchableOpacity onPress={() => deleteTag(index)} style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                            marginLeft: 4, backgroundColor: '#ECECEC', height: 15, width: 15, borderRadius: 15, marginRight: 4,
                        }]}>
                            <IconAntDesign name='close' size={10} style={[stylesMain.ItemCenterVertical, { color: 'red' }]} />
                        </TouchableOpacity>
                    </View>)}
                </View>
            </View>
        </ScrollView>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                onPress={() => UploadImagePostFeed()}>
                <IconFontAwesome name='image' size={25} color='#43A047' style={{ marginRight: 10, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>รูปภาพ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                activeOpacity={1} onPress={() => NavigationNavigate({
                    goScreen: 'Store_PostFeed', setData: {
                        selectedIndex: 2, id_store, getDataService: value => getDataService(value)
                    }, navigation
                })}>
                <IconAntDesign name='tago' size={25} style={{ marginRight: 10, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>แท็กสินค้า</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                activeOpacity={1} onPress={() => { FramestickerSheetRef.current.open(); }}>
                <IconMaterialCommunityIcons name='sticker-emoji' size={25} color='#FFAC33' style={{ marginRight: 10 }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>กรอบ/สติ๊กเกอร์</Text>
            </TouchableOpacity>
        </View>
    </>;
}
///----------------------------------------------------------------------------------------------->>>
export let Select_TagProduct = (props) => {
    const { cokie, route, navigation } = props;
    const id_store = route.params?.id_store
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(0);
    var dataBody = {
        id_store,
        level: selectedIndex == 0 ? 'normal' : selectedIndex == 1 ? 'favorite' : 'normal'
    }
    var item = [{ name: 'สินค้าของฉัน' }, { name: 'รายการโปรด' },];
    var uri = `${finip}/brand/feed_tag_product`;
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let sendData = (value) => { setActiveGetServices(true); setSelectedIndex(value.selectedIndex); };
    let getDataService = (value) => { route.params.getDataService(value); navigation.goBack(); };
    activeGetServices && cokie &&
        GetServices({
            uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'feed_tag_product', getDataSource: (value) => getData(value),
        })
    return <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', height: 40 }]}>
            <TabBar item={item} numberBox numberOfLines={1} activeColor={'#fff'} activeFontColor={'#111'} tagBottomColor={mainColor}
                tagBottom sendData={(value) => sendData(value)} />
        </View>
        <ScrollView>
            <View style={[stylesMain.BoxProduct2,]}>
                <View style={[stylesMain.BoxProduct2BoxProduct]}>
                    {dataService && <ProductBox {...props} dataService={dataService.product} mode='row3colall'
                        getDataService={(value) => getDataService(value)} noNavigation pointerUrl='Detail' pointerid_store
                        nameSize={14} priceSize={15} dispriceSize={15} />}
                </View>
            </View>
        </ScrollView>
    </>;
}
///----------------------------------------------------------------------------------------------->>>
export let Feed_Comment = (props) => {
    const CommentData = [
        { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", comment: "สอบถามขนาดสินค้าหน่อยครับ", Time: "30 นาที" },
        { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "John DoeLink", comment: "สั่งของไปยังไม่ได้ของเลยครับ", Time: "3 ชม." },
        { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "March SoulLaComa", comment: "ยังมีสินค้าอยู่ไหมคะ", Time: "10 ชม." },
        { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Finn DoRemiFaso", comment: "สินค้ามีปัญหาเปลี่ยนได้ทางไหนครับ", Time: "15 ชม." },
        { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "Maria More More", comment: "สินค้าราคาเท่าไหรครับ", Time: "20 ชม." },
        { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "Clark June Boom!", comment: "ส่งของวันไหนครับ", Time: "21 ชม." },
        { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "1 วัน" },
        { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "DoRemiFaso", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "3 วัน" },
        { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "5 วัน" },
        { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "Maria More More", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "1 W" },
    ]
    let CommentBox = CommentData.map((value, index) =>
        <View key={index} style={{ backgroundColor: '#FFFFFF' }}>
            <View style={[stylesMain.FlexRow, { paddingHorizontal: 10, marginVertical: 3 }]}>{/* กดรูปโปร */}
                <TouchableOpacity onPress={() => { }}>
                    <FastImage style={stylesTopic.image} source={{ uri: value.image }} />
                </TouchableOpacity>
                <View style={{ marginLeft: 5 }}>
                    <View style={{ backgroundColor: '#ECECEC', borderRadius: width * 0.03, paddingHorizontal: 10, maxWidth: width * 0.80, padding: 5 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                            {value.name}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {value.comment}</Text>
                    </View>
                </View>
            </View>
            <View style={[stylesMain.FlexRow, { marginLeft: '20%' }]}>
                <View style={{ width: 50 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>{value.Time}</Text>
                </View>
                <TouchableOpacity style={{ width: 40 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>ถูกใจ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 60 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>ตอบกลับ</Text>
                </TouchableOpacity>
            </View>
        </View>);
    let header = <View style={[stylesMain.FlexRow, { padding: 10, borderBottomWidth: 2, justifyContent: 'space-between' }]}>
        <View style={stylesMain.FlexRow}>
            <IconFontAwesome name='heart' size={20} color='#ff0066' style={{ marginRight: 10 }} />
            <View style={{ width: '70%' }}>
                <Text numberOfLines={1} style={[stylesFont.FontSize6, stylesFont.FontFamilyText]}>Frank Odalthh และอีก2562คน</Text>
            </View>
        </View>
        <IconFontAwesome name='heart-o' size={20} style={{ marginRight: 10 }} />
    </View>
    return (
        <>
            {header}
            <ScrollView>
                {CommentBox}
            </ScrollView>
            <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', borderTopWidth: 2, padding: 5, }]}>
                <View style={{ backgroundColor: '#ECECEC', maxHeight: 100, width: '90%', borderRadius: 10, marginRight: 5 }}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}
                        placeholder="เขียนคอมเมนท์"
                        multiline
                        editable maxLength={5000} >
                    </TextInput>
                </View>
                <View style={[stylesMain.FlexRow, { alignItems: 'flex-end' }]}>
                    <TouchableOpacity>
                        <IconFontAwesome name='paper-plane-o' size={30} color='#001666' style={{ marginVertical: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

///----------------------------------------------------------------------------------------------->>>>
export let New_Group = (props) => {
    const { ImageGroup, navigation } = props;
    const [activeData, setActiveData] = useState(false);
    const [avatarSource2, setAvatarSource2] = useState(undefined);
    const [name_Group, setName_Group] = useState(undefined);
    let UploadImageGroup = () => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            setAvatarSource2(response);
            ImageGroup(response);
        });
    };
    return <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ตั้งชื่อกลุ่ม </Text>
        <TextInput style={{ borderWidth: 1, borderRadius: 5 }} onChangeText={(value) => { setActiveData(true); setName_Group(value); }}>
            <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold,]}>{name_Group}</Text>
        </TextInput>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เลือกหมวดของกลุ่ม</Text>
        <View style={{ borderWidth: 1, borderRadius: 5, height: 50, padding: 10 }}>
            <ModalDropdown options={['สาธารณะ', 'เพื่อน', 'เฉพาะเพื่อน', 'เฉพาะฉัน']} defaultValue={'สาธารณะ'}
                textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
                dropdownStyle={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: 100 }}>
            </ModalDropdown>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>อัพโหลดภาพปก</Text>
        <View style={stylesMain.FlexRow}>
            <View style={{ height: 50, width: 50, borderWidth: 1, borderRadius: 5, padding: 5 }}>
                {avatarSource2 ?
                    <FastImage source={{ uri: avatarSource2.path }} style={stylesMain.BoxProduct1Image} /> : null}
            </View>
            <TouchableOpacity onPress={() => UploadImageGroup()}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10 }]}>เพิ่มรูปภาพ</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Store_PostFeed', setData: { selectedIndex: 12, }, navigation })}
            style={stylesMain.ItemCenter}>
            <View style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', width: '30%', borderRadius: 5, height: 30 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>+ สร้างกลุ่ม</Text>
            </View>
        </TouchableOpacity>
    </View>;
}
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
                        goScreen: 'Store_PostFeed', setData: { selectedIndex: 13, }, navigation
                    })}>
                        <View style={[stylesMain.ItemCenter, {
                            backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32
                        }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>เกี่ยวกับกลุ่ม</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({
                        goScreen: 'Store_PostFeed', setData: { selectedIndex: 14, }, navigation
                    })}>
                        <View style={[stylesMain.ItemCenter,
                        { backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>รูปภาพ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({
                        goScreen: 'Store_PostFeed', setData: { selectedIndex: 15, }, navigation
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
            goScreen: 'Store_PostFeed', setData: { selectedIndex: 1, }, navigation
        })}>
        </ActionButton>
    </>;
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
///----------------------------------------------------------------------------------------------->>>>
export let Group_Image = (props) => {
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const itemT = [
        { image_path: 'MySQL/uploads/icon_5', image: '05.jpg' },
        { image_path: 'mysql/uploads/Supermarketfin', image: 'Food and Market_200327_0026.jpg' },
        { image_path: 'mysql/uploads/Supermarketfin', image: 'Food and Market_200327_0013.jpg' },
        { image_path: 'mysql/uploads/Supermarketfin', image: 'Food and Market_200327_0007.jpg' },
        { image_path: 'mysql/uploads/page_News', image: 'Supreme.jpg' },
        { image_path: 'mysql/uploads/slide/bannerstore', image: 'brand1.png' },
        { image_path: 'mysql/uploads/addmin/image/type', image: '2019-05-12-1557696686.jpg' },
        { image_path: 'mysql/uploads/Deal_Today', image: 'ded3.jpg' },
        { image_path: 'mysql/uploads/banner-20200203T090816Z-001/banner/banner มือ1', image: 'gem jewelry.jpg' },
    ];
    useEffect(() => {
        if (activeGetServices) {
            setActiveGetServices(false); setDataService(GenArray(40, itemT));
        };
    }, [activeGetServices]);
    return <ScrollView>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10 }]}>รูปภาพในกลุ่ม</Text>
        <ImageGallery dataService={dataService} />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Save_Activity = (props) => {
    const selectorSheetRef = useRef(null);
    const item = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png`, name: 'สติ๊ก กี้ ถูกใจโพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/con8.png`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con3.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con1.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/AMARIN.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' }
    ];
    let ActivityItem = item.map((value, index) => <TouchableOpacity key={index}>
        <BottomSheet ref={selectorSheetRef} height={110} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconFeather name='eye' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ดูโพสต์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconAntDesign name='like1' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เลิกถูกใจ</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
        <View style={[stylesMain.FlexRow, { marginTop: 10, justifyContent: 'space-between' }]}>
            <View>
                <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: value.image, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ alignItems: 'flex-end', bottom: 20 }}>
                    <View style={[stylesMain.ItemCenter, { width: 25, height: 25, backgroundColor: '#0A55A6', borderRadius: 15 }]}>
                        <IconAntDesign name='like1' size={15} color='#FFFFFF' />
                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 5, width: width * 0.68, }}>
                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.name}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>{value.Time}</Text>
            </View>
            <TouchableOpacity onPress={() => selectorSheetRef.current.open()}>
                <View style={[stylesMain.ItemCenter, { marginTop: 5 }]}>
                    <IconEntypo name='dots-three-vertical' size={20} />
                </View>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>);
    return <ScrollView>
        <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
            {ActivityItem}
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Save_Post = (props) => {
    const selectorSheetRef = useRef(null);
    const item = [
        { image: `${ip}/MySQL/uploads/Group_image/Walmart.png`, name: 'ผู้บริหาร Walmart เชื่อ ”ออฟฟิศ” ยังคงเป็นสิ่งสำคัญของธุรกิจ', status: 'อ่านแล้ว', },
        { image: `${ip}/MySQL/uploads/Group_image/paradise.jpg`, name: 'ศูนย์การค้า พาราไดซ์ พาร์ค บริหารงานโดยบริษัท เอ็ม บี เค จำกัด (มหาชน) ผู้บริหารศูนย์การค้า เอ็ม บี เค เซ็นเตอร์ ด้วยมูลค่าโครงการรวมกว่า 3,200 ล้านบาท บนถนนศรีนครินทร์ ภายใต้แนวคิด “สวนสวรรค์แห่งการช้อปปิ้งที่ยิ่งใหญ่ที่สุดของกรุงเทพตะวันออก', status: 'ยังไม่อ่าน' },
        { image: `${ip}/MySQL/uploads/Group_image/1.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png`, name: 'ได้ติดต่อผู้ออกแบบโลโก้คนนึงด้วยการแชทผ่านapplicationชื่อดัง โดยได้ข้อมูลมาจากเว็บพันทิป จากเว็บระบุราคาไว้ถูกมาก', status: 'ยังไม่อ่าน ' },
        { image: `${ip}/MySQL/uploads/Group_image/MK.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' }
    ]
    let PostItem = item.map((value, index) => <View style={[stylesMain.FlexRow, { marginVertical: 2.5 }]} key={index}>
        <BottomSheet ref={selectorSheetRef} height={200} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconEntypo name='share' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>แชร์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconFeather name='eye' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ดูโพสต์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconEntypo name='link' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>คัดลอกลิงค์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconMaterialCommunityIcons name='bookmark-remove' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เลิกบันทึกโพสต์</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
        <TouchableOpacity>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 10, }]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={{ height: 70, width: 70, }} source={{ uri: value.image, }}
                        resizeMode={FastImage.resizeMode.contain} />
                    <View style={{ marginLeft: 10, width: width * 0.62, justifyContent: 'space-between' }}>
                        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.name}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>{value.status}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => selectorSheetRef.current.open()}>
                    <View style={[stylesMain.ItemCenter, { marginLeft: 10 }]}>
                        <IconEntypo name='dots-three-horizontal' size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>);
    return <ScrollView>
        <View style={{ padding: 5, backgroundColor: '#FFFFFF' }}>
            {PostItem}
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Group_Total = (props) => {
    const { navigation } = props;
    const Group_Categoryitem = [
        { image: `${ip}/MySQL/uploads/products/2019-03-17-1552809845.jpg`, name: 'เครื่องประดับ' },
        { image: `${ip}/MySQL/uploads/products/2019-10-10-1570690336.png`, name: 'พระและเครื่องราง' },
        { image: `${ip}/MySQL/uploads/products/2019-10-10-1570690829.png`, name: 'กระเป๋า' },
        { image: `${ip}/MySQL/uploads/products/2019-10-29-1572332375.png`, name: 'เข็มขัด' },
        { image: `${ip}/MySQL/uploads/products/2019-10-29-1572324184.png`, name: 'นาฬิกา' },
    ];
    const Group_Popularitem = [
        {
            image1: `${ip}/MySQL/uploads/Icon_shareBox/Group/ฉันชอบดูหนัง.jpg`,
            image2: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`,
            name1: `ฉันชอบดูหนัง`,
            name2: `ราชบุรีมีอะไร`,
            member: `สมาชิก 1.9 แสน คน`,
            post: `260 โพสต์ต่อวัน`,
        },
        {
            image1: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`,
            image2: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`,
            name1: `ของอร่อยราชบุรีบอกด้วย`,
            name2: `ราชบุรีซื้อขายได้ทุกอย่าง`,
            member: `สมาชิก 1.9 แสน คน`,
            post: `310 โพสต์ต่อวัน`,
        },
        {
            image1: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`,
            image2: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`,
            name1: `ราชบุรีหางานหาคน`,
            name2: `ทุกเรื่องราวในราชบุรี`,
            member: `สมาชิก 1.9 แสน คน`,
            post: `420 โพสต์ต่อวัน `,
        },
    ];
    const Group_Totalitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, about: `ซื้อ-ขายแลกเปลี่ยน การ์ดจอ เมนบอร์ด ซีพียู psu ram` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, about: `แนะนำร้านค้า ร้านอาหาร มุมอร่อย มุมของโปรดที่ชื่อชอบทั้งใน รอบๆจังหวัดราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, about: `กลุ่มนี้มีจุดประสงค์เดียว ก็คือ เพื่อเป็นประโยชน์ให้กับผู้คนและสังคม เน้นราชบุรี ไม่เสนอขายทุกชนิด ไม่แชร์ ไม่แคปเข้ามาทุกกรณี` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, about: `ซื้อ-ขายแลกเปลี่ยน ตลาดนัดโพธารามonline` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, about: `ข่าวสารทั่วไปในด้านต่างๆในจังหวัดราชบุรี เช่น ส่งเสริมการท่องเที่ยว ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, about: `กลุ่มนี้เปิดไว้เพื่อให้คนในราชบุรี ได้เข้ามาแลกเปลี่ยน ซื้อ ขาย สินค้า  ทั้งสินค้า ใหม่  เก่า ทุกชนิด` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, about: `พบที่เที่ยวดี ๆ ช่วยบอกที` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, about: `หาคนตรงงาน หางานตรงใจ ที่นี่เลย` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, about: `กลุ่มตลาดโพธาราม เป็นกลุ่มที่ตั้งขึ้นเพื่อ เกิดการซื้อ - ขาย` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี`, about: `ซื้อ-ขาย ลงราคาและเบอร์โทร ให้เรียบร้อยนะครับ ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, about: `พรานสนับสนุนให้ทุกคน เป็นยอดนักรีวิว นักคิด นักเขียน เช็คอินกินที่ใด ถูกใจ ในนครปฐม ` },
    ];
    let Group_Category = Group_Categoryitem.map((value, index) => {
        return <View key={index} style={[stylesMain.ItemCenter,
        { borderColor: '#EAEAEA', borderWidth: 1, width: 100, height: 120, marginHorizontal: 2.5 }]}>
            <FastImage
                style={{ height: 70, width: 70, marginBottom: 10 }}
                source={{ uri: value.image, }}
                resizeMode={FastImage.resizeMode.contain} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name}</Text>
        </View>
    });
    let Group_Popular = Group_Popularitem.map((value, index) => {
        return <View>
            <View key={index} style={[stylesMain.ItemCenter, stylesMain.FlexRow, {
                borderColor: '#EAEAEA', borderWidth: 1,
                width: width * 0.6, height: 70, margin: 2.5, padding: 5
            }]}>
                <FastImage style={{ height: 55, width: 55, borderRadius: 30 }}
                    source={{ uri: value.image1, }} resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: '65%', marginLeft: 10 }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name1}</Text>
                    <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.post}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.member}</Text>
                </View>
            </View>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, {
                borderColor: '#EAEAEA', borderWidth: 1, width: width * 0.6, height: 80, margin: 2.5, padding: 5
            }]}>
                <FastImage style={{ height: 55, width: 55, borderRadius: 30 }} source={{ uri: value.image2, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: '65%', marginLeft: 10 }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name2}</Text>
                    <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.post}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.member}</Text>
                </View>
            </View>
        </View>
    });
    let Group_Total = Group_Totalitem.map((value, index) => {
        return <View key={index} style={{
            borderColor: '#EAEAEA', borderWidth: 1, marginTop: 8, width: width * 0.30, alignItems: 'center',
        }}>
            <FastImage style={{ height: 55, width: '100%', marginBottom: 5 }} source={{ uri: value.image, }}
                resizeMode={FastImage.resizeMode.stretch} />
            <View style={{ paddingHorizontal: 5 }}>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name}</Text>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.about}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 5, paddingVertical: 3, marginVertical: 5
            }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF' }]}>เข้าร่วมกลุ่ม</Text>
            </TouchableOpacity>
        </View>
    });
    return <ScrollView>
        <View style={stylesMain.FrameBackground}>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>หมวดหมู่</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ค้นหากลุ่มโดยการเลือกดูหมวดหมู่ยอดนิยม</Text>
            </View>
            <View style={{ paddingHorizontal: 2.5, marginBottom: 5, marginTop: 5 }}>
                <ScrollView horizontal>
                    {Group_Category}
                </ScrollView>
            </View>
        </View>
        <View style={stylesMain.FrameBackground}>
            <View style={[stylesMain.FlexRow, { marginTop: 5, justifyContent: 'space-between', marginHorizontal: 10 }]}>
                <View>
                    <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>กลุ่มยอดนิยม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กลุ่มที่คุณอาจสนใจ</Text>
                </View>
                <TouchableOpacity style={stylesMain.ItemCenter} onPress={() => NavigationNavigate({
                    goScreen: 'Store_PostFeed', setData: { selectedIndex: 25, }, navigation
                })}>
                    <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold]}>ทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 2.5, marginBottom: 5, marginTop: 5 }}>
                <ScrollView horizontal>
                    {Group_Popular}
                </ScrollView>
            </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>กลุ่มทั้งหมด</Text>
            </View>
            <View style={[stylesMain.FlexRow,
            { flexWrap: 'wrap', justifyContent: 'space-around', paddingHorizontal: 5, paddingBottom: 10 }]}>
                {Group_Total}
            </View>
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Feed_Notification = (props) => {
    const selectorSheetRef = useRef(null)
    return <ScrollView>
        <View>
            <View style={{ alignItems: 'flex-end', paddingHorizontal: 10, paddingVertical: 5 }}>
                <TouchableOpacity>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ทำเครื่องหมายว่าอ่านแล้วทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => <TouchableOpacity key={index}>
                <BottomSheet ref={selectorSheetRef} height={110} duration={250}
                    customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                            <IconFeather name='eye' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ทำเครื่องหมายว่าอ่านแล้ว</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                            <IconAntDesign name='delete' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ลบการแจ้งเตือนนี้</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
                <View style={[stylesMain.FlexRow,
                { justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 10 }]}>
                    <View style={stylesMain.FlexRow}>
                        <View>
                            <FastImage
                                style={{ height: 50, width: 50, borderRadius: 25, }}
                                source={{
                                    uri: `${ip}/MySQL/uploads/Group_image/1.jpg`,
                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                            {index % 2 == 0 ?
                                <View style={{ alignItems: 'flex-end', top: -20 }}>
                                    <View style={[stylesMain.ItemCenter,
                                    { width: 25, height: 25, backgroundColor: '#0A55A6', borderRadius: 15 }]}>
                                        <IconAntDesign name='like1' size={15} color='#FFFFFF' />
                                    </View>
                                </View> : <View style={{ alignItems: 'flex-end', top: -20 }}>
                                    <View style={[stylesMain.ItemCenter,
                                    { width: 25, height: 25, backgroundColor: '#20BDA1', borderRadius: 15 }]}>
                                        <IconEntypo name='message' size={15} color='#FFFFFF' />
                                    </View>
                                </View>}
                        </View>
                        {index % 2 == 0 ?
                            <View style={{ marginLeft: 10, width: width * 0.68, justifyContent: 'space-between' }}>
                                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    สติ๊ก กี้ ถูกใจโพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee
                                    สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee
                                                </Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>
                                    1 ชั่วโมงที่แล้ว</Text>
                            </View> : <View style={{ marginLeft: 10, width: width * 0.68, justifyContent: 'space-between' }}>
                                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    สติ๊ก กี้ คอมเมนท์โพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee
                                    สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee
                                                </Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>
                                    1 ชั่วโมงที่แล้ว</Text>
                            </View>}
                    </View>
                    <TouchableOpacity onPress={() => { selectorSheetRef.current.open() }} >
                        <View style={[stylesMain.ItemCenter,
                        { height: 30, width: 30, borderRadius: 15 }]}>
                            <IconEntypo name='dots-three-vertical' size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>)}
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Group_Search = (props) => {
    return <View style={{ padding: 10 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>โพสต์ทั้งหมด</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผลลัพธในกลุ่ม</Text>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
            <View style={stylesMain.FlexRow}>
                <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: `${ip}/MySQL/uploads/Group_image/1.jpg`, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: width * 0.55, marginLeft: 5 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>Soulemate Soulemate</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>17 พฤษภาคม เวลา 14:01 น.</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ผู้บริหาร Walmart เชื่อ ”ออฟฟิศ” ยังคงเป็นสิ่งสำคัญของธุรกิจ
                    Doug McMillon CEO ของ Walmart ร้านค้าปลีกรายใหญ่ในสหรัฐฯ กล่าวในที่ประชุมผู้ถือหุ้นว่า
                    เเม้พฤติกรรมการทำงานในช่วง COVID-19 จะเปลี่ยนจากการทำงานในออฟฟิศไปเป็นการ Work from Home</Text>
                </View>
            </View>
            <FastImage style={{ height: 100, width: 100, }} source={{ uri: `${ip}/MySQL/uploads/Group_image/1.jpg`, }}
                resizeMode={FastImage.resizeMode.cover} />
        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10 }]}>
            <TouchableOpacity style={stylesMain.FlexRow}>
                <IconFontAwesome name='heart-o' size={25} color='#990F0F' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>5033</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>ถูกใจ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ความคิดเห็น </Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>105</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>รายการ</Text>
            </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#A0A0A0' }]}>สิ้นสุดผลลัพธ์</Text>
        </View>
    </View>;
};
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
///----------------------------------------------------------------------------------------------->>>>
export let Profile_FeedCustomer = (props) => {
    const { navigation, Bottom, otherBar } = props;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(null);
    var uri = `${finip}/${'brand/feed_highlight'}`;
    useEffect(() => {
        activeSelectedIndex &&
            GetServices({ uriPointer: uri, getDataSource: value => { setActiveSelectedIndex(false); setDataService(value); }, });
    }, [activeSelectedIndex]);
    const TabBar_Profile = [
        { name: <Text style={stylesFont.FontSize6}><IconFeather name='layout' size={20} />โพสต์</Text> },
        { name: <Text style={stylesFont.FontSize6}><IconAntDesign name='solution1' size={20} />ชุมชน</Text> }
    ];
    return <ScrollView {...props}>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <FastImage style={{ width: '100%', height: 150, }} source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={{ justifyContent: 'space-between' }}>
                <View style={[stylesMain.FlexRow, { borderBottomWidth: 2, marginHorizontal: 5 }]}>
                    <View style={stylesMain.FlexRow}>
                        <FastImage style={{
                            height: 90, width: 90, marginLeft: 5, borderRadius: 45, bottom: 20, borderColor: '#FFFFFF', borderWidth: 3
                        }} source={{ uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`, }} resizeMode={FastImage.resizeMode.cover} />
                        <View style={{ marginLeft: 5, width: '52%', marginTop: 5 }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ppooo</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BEBDBD' }]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>200 โพสต์  </Text>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ผู้ติดตาม 200K คน กำลังติดตาม 20 คน</Text>
                        </View>
                    </View>
                    {Bottom &&
                        <View>
                            <TouchableOpacity style={[stylesMain.ItemCenter,
                            { backgroundColor: '#0A55A6', marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>กำลงติดตาม</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[stylesMain.ItemCenter,
                            { backgroundColor: '#0A55A6', marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>แชท</Text>
                            </TouchableOpacity>
                        </View>}
                    {otherBar && <TouchableOpacity key='otherBar' onPress={() => NavigationNavigate({
                        goScreen: 'Store_PostFeed', setData: { selectedIndex: 23, }, navigation
                    })} style={{ alignItems: 'flex-end', width: width * 0.15, marginTop: 10 }}>
                        <IconFontAwesome5 name="ellipsis-v" size={20} />
                    </TouchableOpacity>}
                </View>
            </View>
            <View style={[stylesMain.FrameBackground]}>
                <View style={{ borderBottomWidth: 2, paddingBottom: 10, marginHorizontal: 5, paddingHorizontal: 10 }}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='location-pin' size={20} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10 }]}>จ.นครศรีธรรมราช, ประเทศไทย</Text>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <IconFontAwesome name='birthday-cake' size={20} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10 }]}>เกิดเมื่อ 29 มิถุนายน ค.ศ. 1995</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={{ padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>เกี่ยวกับ</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>S.adnight 420K ❤ แคปชั่นโดนใจ คำคมไทยแปลอังกฤษ Since :
                        16.5.2019 📌อยากให้ลบรูปแจ้ง DM เครดิตใส่ไว้ในรูปนะคะ😊</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#0A55A6' }]}>ลิงค์ร้านค้า: https://finforyou.com/ppooo</Text>
                </View>
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
///----------------------------------------------------------------------------------------------->>>>
export let Profile_Edit = (props) => {
    const [name, setName] = useState('');
    const [Details, setDetails] = useState('');
    const [website, setWebsite] = useState('');
    const [Address, setAddress] = useState('');
    const [Birthday, setBirthday] = useState('');
    const [InputGender, setGender] = useState(false);
    const [item1, setItem1] = useState(false)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const Address_SheetRef = useRef(null)
    const Birthday_SheetRef = useRef(null)
    const Gender_SheetRef = useRef(null)
    let getName = (value) => {
        setActiveData(true);
        setName(value);
    };
    let onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    let showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    return <ScrollView>
        {/* ที่อยู่ */}
        <BottomSheet ref={Address_SheetRef} height={150} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={stylesMain.ItemCenter}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ที่อยู่</Text>
                </View>
                <View style={{ height: 100, borderWidth: 1, borderRadius: 5 }}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={200}
                        value={Address} onChangeText={(value) => setAddress(value)}>
                    </TextInput>
                </View>
            </View>
        </BottomSheet>
        {/* วันเกิด */}
        <BottomSheet ref={Birthday_SheetRef} height={110} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={stylesMain.ItemCenter}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วันเกิด</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                        { borderWidth: 2, width: '60%', borderRadius: 5, paddingVertical: 5, borderColor: '#C5C5C5' }]}>
                            <IconFontAwesome name='calendar' size={20} color='rgb(29, 70, 204)' />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                        </View>
                    </TouchableOpacity>
                    {show && <DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="spinner"
                        onChange={(event, selectedDate) => onChange(event, selectedDate)} />}
                </View>
            </View>
        </BottomSheet>
        {/* เพศ */}
        <BottomSheet ref={Gender_SheetRef} height={100} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
                <View style={stylesMain.FlexRow}>
                    <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={InputGender}
                        onPress={() => setGender({ InputGender: true, })} />
                    <IconFontisto name='male' size={20} style={{ marginTop: 15, marginLeft: -10, color: mainColor }} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15, marginLeft: 10 }]}>ชาย</Text>
                    <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={InputGender}
                        onPress={() => setGender({ InputGender: false, })} />
                    <IconFontisto name='female' size={20} style={{ marginTop: 15, marginLeft: -10, color: '#ff1ac6' }} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15, marginLeft: 10 }]}>หญิง</Text>
                </View>
            </View>
        </BottomSheet>
        <FastImage style={{ width: '100%', height: 150, }} source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
            resizeMode={FastImage.resizeMode.cover} />
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={[stylesMain.FlexRow, { justifyContent: 'center', marginTop: -30, }]}>
                <FastImage style={{ height: 110, width: 110, borderRadius: 60, borderColor: '#FFFFFF', borderWidth: 3, }}
                    source={{ uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`, }} resizeMode={FastImage.resizeMode.cover} />
                <TouchableOpacity style={[stylesMain.ItemCenter, {
                    backgroundColor: '#C4C4C4', padding: 10, borderRadius: 20, borderColor: '#FFFFFF', borderWidth: 2, width: 40,
                    height: 40, left: -40, top: 70
                }]}>
                    <IconFeather name='camera' size={17} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>ชื่อ</Text>
            <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5 }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={30}
                    value={name} onChangeText={(value) => setName(value)}>
                </TextInput>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>ประวัติ</Text>
            <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, height: 150 }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={5000}
                    value={Details} onChangeText={(value) => setDetails(value)}>
                </TextInput>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>เว็บไซต์</Text>
            <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={30} value={website}
                    onChangeText={(value) => setWebsite(value)}>
                </TextInput>
            </View>
        </View>
        <View style={{ backgroundColor: '#C4C4C4' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>ข้อมูลโปรไฟล์</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ที่อยู่</Text>
            <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                    <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '65%' }]}>อำเภอเชียรใหญ่ เป็นอำเภอหนึ่งในจังหวัดนครศรีธรรมราช</Text>
                </View>
                <TouchableOpacity onPress={() => { Address_SheetRef.current.open() }}>
                    <IconFeather name='edit' size={20} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>วันเกิด</Text>
            <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                    <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>29 มิถุนายน ค.ศ. 1995</Text>
                </View>
                <TouchableOpacity onPress={() => { Birthday_SheetRef.current.open() }}>
                    <IconFeather name='edit' size={20} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เพศ</Text>
            <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                    <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชาย</Text>
                </View>
                <TouchableOpacity onPress={() => { Gender_SheetRef.current.open() }}>
                    <IconFeather name='edit' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Group_Popular = (props) => {
    const Group_Popularitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, about: `ซื้อ-ขายแลกเปลี่ยน การ์ดจอ เมนบอร์ด ซีพียู psu ram` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, about: `แนะนำร้านค้า ร้านอาหาร มุมอร่อย มุมของโปรดที่ชื่อชอบทั้งใน รอบๆจังหวัดราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, about: `กลุ่มนี้มีจุดประสงค์เดียว ก็คือ เพื่อเป็นประโยชน์ให้กับผู้คนและสังคม เน้นราชบุรี ไม่เสนอขายทุกชนิด ไม่แชร์ ไม่แคปเข้ามาทุกกรณี` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, about: `ซื้อ-ขายแลกเปลี่ยน ตลาดนัดโพธารามonline` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, about: `ข่าวสารทั่วไปในด้านต่างๆในจังหวัดราชบุรี เช่น ส่งเสริมการท่องเที่ยว ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, about: `กลุ่มนี้เปิดไว้เพื่อให้คนในราชบุรี ได้เข้ามาแลกเปลี่ยน ซื้อ ขาย สินค้า  ทั้งสินค้า ใหม่  เก่า ทุกชนิด` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, about: `พบที่เที่ยวดี ๆ ช่วยบอกที` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, about: `หาคนตรงงาน หางานตรงใจ ที่นี่เลย` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, about: `กลุ่มตลาดโพธาราม เป็นกลุ่มที่ตั้งขึ้นเพื่อ เกิดการซื้อ - ขาย` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี`, about: `ซื้อ-ขาย ลงราคาและเบอร์โทร ให้เรียบร้อยนะครับ ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, about: `พรานสนับสนุนให้ทุกคน เป็นยอดนักรีวิว นักคิด นักเขียน เช็คอินกินที่ใด ถูกใจ ในนครปฐม ` },
    ];
    let Group_Total = Group_Popularitem.map((value, index) => <View key={index} style={{
        borderColor: '#EAEAEA', borderWidth: 1, marginTop: 8,
        width: width * 0.30, alignItems: 'center',
    }}>
        <FastImage
            style={{ height: 55, width: '100%', marginBottom: 5 }} source={{ uri: value.image, }} resizeMode={FastImage.resizeMode.stretch} />
        <View style={{ paddingHorizontal: 5 }}>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name}</Text>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.about}</Text>
        </View>
        <TouchableOpacity style={{
            backgroundColor: mainColor, paddingHorizontal: 10,
            borderRadius: 5, paddingVertical: 3, marginVertical: 5
        }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF' }]}>เข้าร่วมกลุ่ม</Text>
        </TouchableOpacity>
    </View>);
    return <ScrollView>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>กลุ่มทั้งหมด</Text>
            </View>
            <View style={[stylesMain.FlexRow, {
                flexWrap: 'wrap',
                justifyContent: 'space-around', paddingHorizontal: 5, paddingBottom: 10
            }]}>
                {Group_Total}
            </View>
        </View>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Followers = (props) => {
    const Followersitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, },
    ];
    let FollowersBox = Followersitem.map((value, index) =>
        <View key={index} style={[stylesMain.FlexRow, { padding: 5, backgroundColor: '#FFFFFF', marginTop: 5, justifyContent: 'space-between' }]}>
            <View style={stylesMain.FlexRow}>
                <FastImage
                    style={{ height: 60, width: 60, borderRadius: 60 / 2 }}
                    source={{ uri: value.image, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: width * 0.50, justifyContent: 'center' }}>
                    <Text numberOfLines={2} style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { marginLeft: 10 }]}>{value.name}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity >
                    <LinearGradient colors={['#10162d', '#284d8f']} style={[stylesMain.FlexRow, stylesMain.ItemCenter, {
                        height: 30, paddingHorizontal: 20, borderRadius: 20
                    }]}>
                        <IconEntypo name='plus' size={18} color='#FFFFFF' />
                        <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyText, { color: '#FFFFFF', marginLeft: 5 }]}>ติดตาม</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>);
    return <ScrollView>
        {FollowersBox}
    </ScrollView>

}
///----------------------------------------------------------------------------------------------->>>>
export let Following = (props) => {
    const Followingitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี ซื้อขายโคนมบ้านโป่งโพธารามราชบุ`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, },
    ];
    let FollowingBox = Followingitem.map((value, index) =>
        <View key={index} style={[stylesMain.FlexRow, { padding: 5, backgroundColor: '#FFFFFF', marginTop: 5, justifyContent: 'space-between' }]}>
            <View style={stylesMain.FlexRow}>
                <FastImage
                    style={{ height: 60, width: 60, borderRadius: 60 / 2 }}
                    source={{ uri: value.image, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: width * 0.50, justifyContent: 'center' }}>
                    <Text numberOfLines={2} style={[stylesFont.FontSize5, stylesFont.FontFamilyText, { marginLeft: 10 }]}>{value.name}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity >
                    <View style={{ borderColor: '#001666', borderWidth: 1.5, paddingHorizontal: 20, borderRadius: 25 }}>
                        <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyText, { color: '#001666' }]}>กำลังติดตาม</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>);
    return <ScrollView>
        {FollowingBox}
    </ScrollView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Test_Coupon = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                {/* อันแรก */}
                <View style={[stylesMain.FlexRow, { width: 160, margin: 10 }]}>
                    <LinearGradient colors={['#1B2A3E', '#395B89', '#1B2A3E',]}
                        start={{ x: 0, y: 0.5 }} end={{ x: 0.6, y: 0 }}
                        style={stylesMain.FlexRow, { borderRadius: 10 }}>
                        <View style={{ justifyContent: 'space-between', }}>
                            <View style={{ height: 50, justifyContent: 'center', marginHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>NAME COUPON</Text>
                            </View>
                            <View style={{ borderColor: '#FFFFFF', borderTopWidth: 1, marginHorizontal: 5, paddingVertical: 2 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>ซื้อขั้นต่ำครบ ฿10,000.00</Text>
                            </View>
                        </View>
                    </LinearGradient>
                    <LinearGradient colors={['#DFA700', '#FBD563', '#DFA700',]}
                        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}
                        style={[stylesMain.ItemCenter, { width: 50, borderRadius: 10 }]}>
                        <TouchableOpacity>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เก็บ</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {/* อันที่สอง */}
                <View style={{
                    width: 160, margin: 10,
                    flexDirection: 'column', justifyContent: 'flex-start',
                    borderColor: '#3498DB', borderStyle: 'dotted',
                    borderRadius: 1, position: 'relative', borderWidth: 2,
                    backgroundColor: '#3498DB'
                }}>
                    <View>
                        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 5, height: 40 }]}>
                            <View style={stylesMain.ItemCenter}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>NAME COUPON</Text>
                            </View>
                            <LinearGradient colors={['#DFA700', '#FBD563', '#DFA700',]}
                                start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}
                                style={[stylesMain.ItemCenter, { width: 40, borderRadius: 10, height: 30 }]}>
                                <TouchableOpacity>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>เก็บ</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View style={{ borderColor: '#FFFFFF', borderTopWidth: 1, padding: 5 }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>ซื้อขั้นต่ำครบ ฿10,000.00</Text>
                        </View>
                    </View>
                </View>
                {/* อันที่สาม */}
                <View style={[stylesMain.FlexRow, { width: 160, margin: 10, height: 70 }]}>
                    <LinearGradient colors={['#01608D', '#3498DB', '#01608D',]}
                        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}
                        style={[stylesMain.ItemCenter, { width: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }]}>
                    </LinearGradient>
                    <View style={{ justifyContent: 'space-between', borderColor: '#01608D', borderWidth: 1 }}>
                        <View style={{ height: 50, justifyContent: 'center', marginHorizontal: 5 }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>NAME COUPON</Text>
                        </View>
                    </View>
                    <LinearGradient colors={['#01608D', '#3498DB', '#01608D',]}
                        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}
                        style={[stylesMain.ItemCenter, { width: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10 }]}>
                        <TouchableOpacity>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เก็บ</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {/* อันที่สี่ */}
                <LinearGradient
                    colors={['#A1001B', '#F93B5B', '#A1001B',]}
                    start={{ x: 0, y: 0.5 }} end={{ x: 0.8, y: 0 }}
                    style={{ width: 170, margin: 10, height: 70, borderRadius: 10 }}>
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 5, color: '#FFFFFF' }]}>เก็บ</Text>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'space-between', height: 80, top: -5 }}>
                            <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: '#FFFFFF', }} />
                            <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: '#FFFFFF', }} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>NAME COUPON</Text>
                        </View>
                    </View>
                </LinearGradient>
                {/* อันที่ห้า */}
                <LinearGradient
                    colors={['#018A18', '#61D562', '#018A18',]}
                    start={{ x: 0, y: 0.5 }} end={{ x: 0.8, y: 0 }}
                    style={{ width: 180, margin: 10, height: 70, }}>
                    <View style={{ height: 40 }}>
                        <Text>NAME COUPON</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                        <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: '#FFFFFF', }} />
                        <Dash style={{ width: '85%', justifyContent: 'center' }} />
                        <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: '#FFFFFF', }} />
                    </View>
                </LinearGradient>
                {/* อันที่หก */}
                <LinearGradient
                    colors={['#DAA520', '#FEE45A', '#DAA520',]}
                    start={{ x: 0, y: 0.5 }} end={{ x: 0.8, y: 0 }}
                    style={{ width: 180, margin: 10, height: 70, }}>
                    <View>

                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}