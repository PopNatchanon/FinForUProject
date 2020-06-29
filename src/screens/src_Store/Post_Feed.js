///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput } from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob'
import ModalDropdown from 'react-native-modal-dropdown';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
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
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob, NavigationNavigateScreen, GenArreyNumber, ImageGallery
} from '../../customComponents/Tools';
import { TodayProduct, Slide, AppBar1, ExitAppModule, AppBar } from '../MainScreen';
import { Store_Detail } from '../Recommend_Store';
import { ProductBox, FeedBox, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Post_Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            activePost: false,
        };
        this.scrollY = new Animated.Value(0)
    }
    getSource(value) {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie })
    }
    getActivePost = (activePost) => {
        this.setState({ activePost, })
    }
    PathList() {
        const { route } = this.props
        const { activePost, cokie, dataService } = this.state
        const actionPost = route.params?.actionPost
        const selectedIndex = route.params?.selectedIndex
        const maxheight = 55;
        const AnimatedHeadbg = this.scrollY.interpolate({
            inputRange: [maxheight, maxheight * 2],
            outputRange: ['transparent', appBarColor],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
        const AnimatedCart = this.scrollY.interpolate({
            inputRange: [maxheight, maxheight * 2],
            outputRange: ['#ECECEC', appBarColor],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
        switch (selectedIndex) {
            case 0:
                return <>
                    {/* หน้า คะแนนร้านค้า เข้าจากหน้า Store  */}
                    <AppBar1 {...this.props} backArrow titleHead='คะแนนประจำร้าน' />
                    <Score_store {...this.props} cokie={cokie} />
                </>
            case 1:
                return <>
                    {/* หน้าสร้างโพสต์ เข้าจากปุ่มบวกหน้า Feed*/}
                    <AppBar1 {...this.props} backArrow postBar getActivePost={this.getActivePost.bind(this)}
                        titleHead={actionPost == 'edit' ? 'แก้ไขโพสต์' : 'สร้างโพสต์'} />
                    <Post_New {...this.props} activePost={activePost} cokie={cokie} getActivePost={this.getActivePost.bind(this)} />
                </>
            case 2:
                return <>
                    {/* หน้า แท็กสินค้า เข้าจากหน้า Feed */}
                    <AppBar1 {...this.props} backArrow titleHead='เลือกสินค้า' />
                    <Select_TagProduct {...this.props} cokie={cokie} />
                </>
            case 3:
                return <>
                    {/* หน้า คอมเมนท์ เข้าจากหน้า Feed ปุ่มแสดงความคิดเห็น */}
                    <AppBar1 {...this.props} backArrow titleHead='คอมเมนท์' chatBar />
                    <Feed_comment />
                </>
            case 10:
                return <>
                    <AppBar1 {...this.props} backArrow titleHead='สินค้า' />
                </>
            case 11:
                return <>
                    {/* หน้าสร้าง กลุ่มเข้าจาก หน้า Feed_About */}
                    <AppBar1 {...this.props} backArrow titleHead='สร้างกลุ่ม' />
                    <New_Group {...this.props} />
                </>
            case 12:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้าสร้างกลุ่มเสร็จ กับ ดูกลุ่ม หน้า Feed_About */}
                    <Animated.View style={{ zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1, marginTop: -(maxheight), }}>
                        <AppBar_Group {...this.props} ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow searchBar otherBar />
                    </Animated.View>
                    <Profile_Group {...this.props} onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: this.scrollY } }
                    }], { useNativeDriver: false, })} />
                </>
            case 13:
                return <>
                    {/* หน้าเกี่ยวกับ กลุ่ม เข้าจาก หน้า โปรไฟล์กลุ่ม ปุ่มเกี่ยวกับกลุ่ม */}
                    <AppBar1 {...this.props} backArrow titleHead='เกี่ยวกับกลุ่ม' />
                    <Group_About />
                </>
            case 14:
                return <>
                    {/* หน้ารูปภาพ กลุ่ม เข้าจาก หน้าโปรไฟล์กลุ่ม ปุ่มรูปภาพกลุ่ม */}
                    <AppBar1 {...this.props} backArrow titleHead='รูปภาพ' />
                    <Group_Image />
                </>
            case 15:
                return <>
                    {/* หน้าสมาชิก กลุ่ม เข้าจาก หน้าโปรไฟล์ ปุ่มสมาชิกกลุ่ม */}
                    <AppBar1 {...this.props} backArrow titleHead='สมาชิก' />
                    <Group_Member />
                </>
            case 16:
                return <>
                    {/* หน้า บันทึกกิจกรรม เข้าจาก หน้า Feed_About */}
                    <AppBar1 {...this.props} backArrow titleHead='บันทึกกิจกรรม' />
                    <Save_Activity />
                </>
            case 17:
                return <>
                    {/* หน้า รายการที่บันทึกไว้ เข้าจาก หน้า Feed_About */}
                    <AppBar1 {...this.props} backArrow titleHead='โพสต์ที่บันทึก' />
                    <Save_Post />
                </>
            case 18:
                return <>
                    {/* หน้า กลุ่มทั้งหมด เข้าจาก หน้า Feed_About */}
                    <AppBar1 {...this.props} backArrow titleHead='กลุ่มทั้งหมด' />
                    <Group_Total />
                </>
            case 19:
                return <>
                    {/* หน้า การแจ้งเตือน เข้าจาก หน้า Feed_About */}
                    <AppBar1 {...this.props} backArrow titleHead='การแจ้งเตือน' />
                    <Feed_Notification />
                </>
            case 20:
                return <>
                    {/* หน้า ค้นหา เข้าจากหน้า Profile กลุ่ม */}
                    <AppBar_Group {...this.props} backArrow searchBar otherBar />
                    <Group_Search />
                </>
            case 21:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้า โปรร้านค้า-แท๊บโพสต์ร้าน  */}
                    <AppBar_Group {...this.props} backArrow />
                    <Profile_FeedStore />
                </>
            case 22:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้า โปรร้านค้า-แท๊บโพสต์ร้าน  */}
                    <Animated.View style={{ zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1, marginTop: -(maxheight), }}>
                        <AppBar_Group {...this.props} ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow />
                    </Animated.View>
                    <Profile_FeedCustomer {...this.props} otherBar onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: this.scrollY } }
                    }], { useNativeDriver: false, })} />
                </>
            case 23:
                return <>
                    {/* หน้า โปรไฟล์กลุ่ม เข้าจากหน้า โปรร้านค้า-แท๊บโพสต์ร้าน  */}
                    <AppBar1 {...this.props} backArrow saveBar />
                    <Profile_Edit />
                </>
        }
    }
    render() {
        const { activeGetCurrentUser } = this.state
        activeGetCurrentUser &&
            GetData({ getCokie: true, getSource: this.getSource.bind(this), getUse: true, })
        return (
            // <SafeAreaView style={{ height: '100%' }}>
            this.PathList()
            // </SafeAreaView>
        );
    }
}
/// AppBar สำหรับกลุ่มของ Feed ----------------------------------------------------------------------->>>>
export function AppBar_Group(props) {
    const {
        ABDColor, ABDColor_All, ABGColor, AIColor, ABICartColor, backArrow, chatBar, otherBar, searchBar, SearchText,
    } = props;
    const {
        fetchData, getActive, getFetchData, navigation,
    } = props;
    const [text, setText] = useState(undefined);
    const setSubmit = () => {
        text != undefined && text != ' ' &&
            NavigationNavigateScreen({ goScreen: 'SearchScreen', setData: { SearchText: text }, navigation });
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
        { name: 'ภาพโป๊เปลือย' },
        { name: 'การก่อกวน' },
        { name: 'สแปม' },
        { name: 'ข่าวปลอม' },
        { name: 'การขายที่ไม่ได้รับอนุญาต' },
        { name: 'การก่อการร้าย' },
        { name: 'ความรุนแรง' },
        { name: 'การฆ่าตัวตายหรือทำร้ายตัวเอง' },
        { name: 'คำพูดที่แสดงความเกลียดชัง' },
        { name: 'อื่นๆ' }
    ]
    let ReportBox = (
        item.map((value, index) => {
            return <TouchableOpacity key={index} style={{
                backgroundColor: '#F3F3F3',
                borderRadius: 50, padding: 5
            }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{value.name}</Text>
            </TouchableOpacity>
        })
    )
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
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }
                }}>
                <View style={{ justifyContent: 'space-between', height: '100%', padding: 10 }} >
                    <View style={{ borderBottomColor: '#979797', borderBottomWidth: 1, }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>โปรดเลือกปัญหาเพื่อดำเนินการต่อ</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>คุณสามารถรายงานโพสต์นี้ได้หลังจากเลือกปัญหาแล้ว โปรดทราบว่าขณะนี้เรามีผู้ตรวจสอบน้อยลง</Text>
                    </View>
                    <View style={[stylesMain.FlexRow, { flexWrap: 'wrap', paddingTop: 10, }]}>
                        {ReportBox}
                    </View>
                    <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: mainColor, padding: 5, borderRadius: 5 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ส่ง</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
            <BottomSheet
                ref={selectorSheet}
                height={110}
                duration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingTop: 10,
                    }
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
            {[
                backArrow &&
                <View key={'backarrow'}>
                    <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]} activeOpacity={1}
                        onPress={() => { NavigationNavigateScreen({ goScreen: 'goBack', navigation }); }}>
                        <AIconEntypo name="chevron-left" size={25} style={{ color: AIColor ?? '#fff', }} />
                    </TouchableOpacity>
                </View>,
                searchBar &&
                <TouchableOpacity key={'searchBar'} activeOpacity={1} onPress={() => NavigationNavigateScreen({
                    goScreen: 'Post_Feed', setData: {
                        selectedIndex: 20,
                    }, navigation
                })}
                    style={{ marginRight: 3 }} >
                    <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical, { height: 30, }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: allWidth, }]}>
                            <Text style={[stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5,
                            stylesFont.FontCenter]}>ค้นหาสินค้า/ร้านค้า</Text>
                        </View>
                        <IconAntDesign name="search1" size={18} style={[{ top: 4, left: allWidth - 25, position: 'absolute' }]} />
                    </View>
                </TouchableOpacity>,
                otherBar &&
                <TouchableOpacity key='otherBar' onPress={() => { selectorSheet.current.open() }}
                    style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}>
                    <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor ?? '#fff' }} />
                </TouchableOpacity>,
            ]}
        </Animatable.View>
    );
};
///----------------------------------------------------------------------------------------------->>>
export class Score_store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            activeGetServices2: true,
            score: '',
        };
    };
    starReview(star, starSize) {
        let starBox = [];
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20} color='#FFAC33' />
                );
            } else {
                starBox.push(<IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20} color='#E9E9E9' />
                );
            };
        };
        return starBox;
    };
    updateIndex = (value) => {
        var score = value.selectedIndex == 0 ? '' :
            value.selectedIndex == 1 ? '5' :
                value.selectedIndex == 2 ? '4' :
                    value.selectedIndex == 3 ? '3' :
                        value.selectedIndex == 4 ? '2' :
                            value.selectedIndex == 5 ? '1' : '';
        this.setState({ activeGetServices2: true, score, });
    };
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService, });
    };
    getData2 = (dataService2) => {
        this.setState({ activeGetServices2: false, dataService2, });
    };
    render() {
        const { cokie, route } = this.props;
        const { activeGetServices, activeGetServices2, dataService, dataService2, score } = this.state;
        const id_store = route.params?.id_store
        const uri = `${finip}/store/score_data`;
        const dataBody = { id_store, score, };
        console.log('render|dataService2')
        console.log(dataService2)
        const item = [{
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
        activeGetServices && id_store && cokie && dataBody?.id_store &&
            GetServices({
                Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'score_data', getDataSource: this.getData.bind(this),
            });
        activeGetServices2 && id_store && cokie &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'score_data_start', getDataSource: this.getData2.bind(this), });
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.ItemCenter, {
                            borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10
                        }]}>
                            {
                                dataService?.rating_store == 'ยังไม่มีการรีวิว' ?
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ยังไม่มีการรีวิว</Text> :
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
                                        {dataService?.rating_store} คะแนน</Text>
                            }
                            <View style={stylesMain.FlexRow}>
                                {this.starReview(dataService?.rating_store, 20)}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 120, width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                    <TabBar
                        sendData={this.updateIndex.bind(this)}
                        // SetValue={activeTabBar  ? selectedIndex != null ? selectedIndex : -1 : undefined}
                        setVertical={6}
                        // setHorizontal={6}
                        item={item}
                        type='box'
                        noLimit
                        numberofBox={3}
                        radiusBox={4} />
                </View>
                {
                    dataService2?.error != '[SyntaxError: JSON Parse error: Unrecognized token ' < ']' &&
                        dataService2?.data_score?.length > 0 ? (
                            dataService2.data_score.map((value, index) => {
                                return <Box_Rating dataService={value} key={index} />
                            })
                        ) : <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { width, height: '100%' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>ไม่มีรีวิว</Text>
                        </View>
                }
            </ScrollView>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>
export class Box_Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    starReview(star, starSize) {
        let starBox = [];
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20} color='#FFAC33' />
                );
            } else {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={starSize ?? 20} color='#E9E9E9' />
                );
            };
        };
        return starBox;
    };
    render() {
        const { comment_box, dataService } = this.props
        const image_customer = `${finip}/${dataService.path_customer}/${dataService.img_customer}`
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1 }]}>
                    <View style={stylesProfileTopic.Order_StorePro}>
                        <FastImage source={{ uri: dataService?.user_type == 'fin' ? image_customer : dataService?.img_customer }}
                            style={{ width: '100%', height: '100%', borderRadius: 20, }} />
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 10, marginLeft: 4, }]}>
                        {dataService?.name}</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <View style={stylesMain.FlexRow}>
                        {this.starReview(dataService?.rating, 20)}
                    </View>
                    {
                        comment_box &&
                        <View style={{ backgroundColor: mainColor, width: 110, margin: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF', textAlign: 'center' }]}>
                                คุ้มค้าและจัดส่งเร็วดี</Text>
                        </View>
                    }
                    <View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#111', }]}>
                            {dataService?.comment}</Text>
                    </View>
                </View>
                <View style={[stylesMain.FlexRow, { marginLeft: 10 }]}>
                    {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>25-03-2020 09:40</Text>  */}
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        สินค้า : {dataService?.product} {dataService?.detail} </Text>
                </View>
            </View>

        );
    };
};
///----------------------------------------------------------------------------------------------->>>
export class Post_New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePostView: true,
            tagProduct: [],
        };
    }
    UploadImagePostFeed = () => {
        const options = {
            width: 400,
            height: 400,
            includeBase64: true,
            cropping: true
        };
        ImagePicker.openPicker(options).then(response => {
            this.setState({ avatarSource: response })
        });
    }
    getData = (dataService) => {
        const { getActivePost, navigation } = this.props
        getActivePost(false)
        navigation.state.params.getDataSource(true);
        navigation.goBack()
    }
    getData2 = (dataService2) => {
        var Detail
        var image
        var image_path
        dataService2.feed_news.map((value) => {
            return ([
                Detail = value.detail,
                image = value.image,
                image_path = value.image_path,
            ])
        })
        this.setState({ activePostView: false, Detail, image, image_path })
    }
    getDataService = (value) => {
        const { tagProduct } = this.state;
        tagProduct.push(value)
        this.setState({ tagProduct })
    }
    deleteTag = (index) => {
        const { tagProduct } = this.state;
        tagProduct.splice(index, 1)
        this.setState({ tagProduct })
    }
    Framesticker() {
        const FrameImage = [
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker01.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker02.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker03.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker04.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker05.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker06.jpg` },
        ]
        let FrameItem = (
            FrameImage.map((value, index) => {
                if (index < 6) {
                    return <View key={index}>
                        <TouchableOpacity>
                            <FastImage style={{ height: 120, width: 120, marginBottom: 10 }}
                                source={{ uri: value.image, }}
                            />
                        </TouchableOpacity>
                    </View>
                }
            }))
        return (
            <>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>กรอบ/สติ๊กเกอร์</Text>
                    <View style={[stylesMain.FlexRow, { flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10 }]}>
                        {FrameItem}
                    </View>
                </View>
            </>
        )
    }
    render() {
        const { activePost, cokie, navigation, route } = this.props;
        const { activePostView, avatarSource, Detail, image, image_path, tagProduct } = this.state;
        const actionPost = route.params?.actionPost
        const id_feed = route.params?.id_feed
        const id_store = route.params?.id_store
        const store_data = route.params?.store_data
        const store_data_2 = store_data && store_data[0];
        const image_storee = store_data_2 && `${finip}/${store_data_2.image_path}/${store_data_2.image}`;
        const image_post = `${finip}/${image_path}/${image}`
        const uri = `${finip}/${(actionPost == 'edit' ? 'brand/feed_action' : 'brand/create_feed')}`;
        var o = avatarSource && avatarSource.path.split('/')
        var tagProductBody = tagProduct && tagProduct.map((value) => { return value.id_product })
        var dataBody = actionPost == 'edit' ?
            {
                id_store,
                id_feed,
                detail: Detail,
                id_product: tagProduct ? tagProductBody.join(';') : '',
                act: 'update'

            } :
            avatarSource ?
                [
                    { name: 'id_store', data: id_store },
                    { name: 'detail', data: Detail },
                    { name: 'id_product', data: tagProduct ? tagProductBody.join(';') : '' },
                    { name: 'file', filename: o[o.length - 1], type: avatarSource.mime, data: RNFetchBlob.wrap(avatarSource.path) }
                ] : [
                    { name: 'id_store', data: id_store },
                    { name: 'detail', data: Detail },
                    { name: 'id_product', data: tagProduct ? tagProductBody.join(';') : '' },
                ];
        const uri2 = `${finip}/brand/feed_action`
        var dataBody2 = actionPost == 'edit' ?
            {
                id_store,
                id_feed,
                act: 'view'
            } : {};

        activePost && (
            actionPost == 'edit' ?
                GetServices({
                    uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'feed_action_update',
                    getDataSource: this.getData.bind(this)
                }) :
                GetServicesBlob({
                    FormData, key: 'create_feed', uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'create_feed',
                    getDataSource: this.getData.bind(this),
                })
        ),
            activePostView && actionPost == 'edit' && id_feed && id_store && cokie &&
            GetServices({
                uriPointer: uri2, dataBody: dataBody2, Authorization: cokie, showConsole: 'feed_action_view',
                getDataSource: this.getData2.bind(this),
            })
        return (
            <>
                <BottomSheet
                    ref={ref => {
                        this.FramestickerSheet = ref;
                    }}
                    height={320}
                    duration={250}
                    customStyles={{
                        container: {
                            padding: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }
                    }}>
                    {this.Framesticker()}
                </BottomSheet>
                <ScrollView>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, }]}>
                            {/* {
                            store_data_2 && */}
                            <View style={stylesProfileTopic.Order_StorePro}>
                                <FastImage
                                    // source={{uri: image_storee }}
                                    source={{
                                        uri: `${ip}/MySQL/uploads/addmin/unnamed.png`,
                                    }}
                                    style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF', borderRadius: 20, }}
                                />
                            </View>
                            {/* } */}
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>
                                {/* {store_data_2 && store_data_2.name} */}
                            ชื่อผู้ที่จะโพสต์
                            </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <TextInput
                                style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                                placeholder="คุณกำลังคิดอะไรอยู่..."
                                multiline
                                editable
                                // maxLength={5000}
                                value={Detail}
                                onChangeText={(Detail) => this.setState({ Detail })}>
                            </TextInput>
                        </View>
                        <View>
                            <View style={{ padding: 10, alignItems: 'center' }}>
                                <FastImage
                                    source={{ uri: avatarSource ? avatarSource.path : image ? image_post : null }}
                                    style={{ width: 400, height: 400, backgroundColor: '#FFFFFF' }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width, }}>
                            {
                                tagProduct.length > 0 && tagProduct.map((value, index) => {
                                    return (
                                        <View key={index} style={{
                                            backgroundColor: '#066996', height: 22, borderRadius: 8, marginLeft: 6, flexDirection: 'row',
                                            marginTop: 6,
                                        }}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.ItemCenterVertical, {
                                                color: '#fff', marginLeft: 8,
                                            }]}>{value.name}</Text>
                                            <TouchableOpacity onPress={() => this.deleteTag(index)}
                                                style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                                    marginLeft: 4, backgroundColor: '#ECECEC', height: 15, width: 15, borderRadius: 15,
                                                    marginRight: 4,
                                                }]}>
                                                <IconAntDesign name='close' size={10} style={[stylesMain.ItemCenterVertical, { color: 'red' }]} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: '#FFFFFF' }}>
                    <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                        onPress={() => this.UploadImagePostFeed()}>
                        <IconFontAwesome name='image' size={25} color='#43A047' style={{ marginRight: 10, }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>รูปภาพ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                        activeOpacity={1} onPress={() => NavigationNavigateScreen({
                            goScreen: 'Post_Feed', setData: {
                                selectedIndex: 2, id_store, getDataService: this.getDataService.bind(this)
                            }, navigation
                        })}>
                        <IconAntDesign name='tago' size={25} style={{ marginRight: 10, }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>แท็กสินค้า</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                        activeOpacity={1} onPress={() => { this.FramestickerSheet.open(); }}>
                        <IconMaterialCommunityIcons name='sticker-emoji' size={25} color='#FFAC33' style={{ marginRight: 10 }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>กรอบ/สติ๊กเกอร์</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>
export class Select_TagProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            selectedIndex: 0,
        };
    }
    getData(dataService) {
        this.setState({ activeGetServices: false, dataService })
    }
    sendData = (value) => {
        this.setState({ activeGetServices: true, selectedIndex: value.selectedIndex })
    }
    getDataService = (value) => {
        const { navigation } = this.props
        navigation.state.params.getDataService(value);
        navigation.goBack()
    }
    render() {
        const { cokie, route } = this.props
        const { activeGetServices, dataService, selectedIndex } = this.state
        const id_store = route.params?.id_store
        const item = [{
            name: 'สินค้าของฉัน'
        }, {
            name: 'รายการโปรด'
        },]
        const uri = `${finip}/brand/feed_tag_product`
        var dataBody = {
            id_store,
            level: selectedIndex == 0 ? 'normal' : selectedIndex == 1 ? 'favorite' : 'normal'
        }
        activeGetServices && cokie &&
            GetServices({
                uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'feed_tag_product',
                getDataSource: this.getData.bind(this),
            })
        return (
            <>
                <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', height: 40 }]}>
                    <TabBar
                        item={item}
                        numberBox
                        numberOfLines={1}
                        activeColor={'#fff'}
                        activeFontColor={'#111'}
                        tagBottomColor={mainColor}
                        tagBottom
                        sendData={this.sendData.bind(this)}
                    />
                </View>
                <ScrollView>
                    <View style={[stylesMain.BoxProduct2,]}>
                        <View style={[stylesMain.BoxProduct2BoxProduct]}>
                            {
                                dataService &&
                                <ProductBox {...this.props} dataService={dataService.product} mode='row3colall'
                                    getDataService={this.getDataService.bind(this)} noNavigation
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                                />
                            }
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>
export class Feed_comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", comment: "สอบถามขนาดสินค้าหน่อยครับ" },
                { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "John DoeLink", comment: "สั่งของไปยังไม่ได้ของเลยครับ" },
                { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "March SoulLaComa", comment: "ยังมีสินค้าอยู่ไหมคะ" },
                { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "Finn DoRemiFaso", comment: "สินค้ามีปัญหาเปลี่ยนได้ทางไหนครับ" },
                { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "Maria More More", comment: "สินค้าราคาเท่าไหรครับ" },
                { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Clark June Boom!", comment: "ส่งของวันไหนครับ" },
                { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ" },
                { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "DoRemiFaso", comment: "ยังไม่ได้สินค้าเลยครับ" },
                { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ" },
                { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "Maria More More", comment: "ยังไม่ได้สินค้าเลยครับ" },
            ]
        }
    }

    render() {
        return (
            <FlatList
                style={stylesTopic.root}
                data={this.state.data}
                extraData={this.state}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={stylesTopic.separator} />
                    )
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={(item) => {
                    const Notification = item.item;
                    return (
                        <View style={stylesTopic.container}>
                            {/* กดรูปโปร */}
                            <TouchableOpacity onPress={() => { }}>
                                <Image style={stylesTopic.image} source={{ uri: Notification.image }} />
                            </TouchableOpacity>
                            <View style={stylesTopic.content}>
                                <View style={stylesTopic.contentHeader}>
                                    <Text style={stylesTopic.name}>{Notification.name}</Text>
                                    <Text style={stylesTopic.time}> 9:58 am</Text>
                                </View>
                                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                                <View style={[stylesMain.FlexRow, { justifyContent: 'flex-end', width: '50%' }]}>

                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ถูกใจ</Text>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>ตอบกลับ</Text>
                                </View>
                            </View>
                        </View>
                    );
                }} />
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class New_Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    UploadImageGroup = () => {
        const { ImageGroup } = this.props
        const options = {
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            this.setState({ avatarSource2: response })
            ImageGroup(response)
        });
    }
    render() {
        const { navigation } = this.props
        const { name_Group, avatarSource2 } = this.state
        return (
            <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ตั้งชื่อกลุ่ม </Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 5 }}
                    onChangeText={(name_Group) => this.setState({ activeData: true, name_Group, })}>
                    <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold,]}>
                        {name_Group}
                    </Text>
                </TextInput>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เลือกหมวดของกลุ่ม</Text>
                <View style={{ borderWidth: 1, borderRadius: 5, height: 50, padding: 10 }}>
                    <ModalDropdown
                        options={['สาธารณะ', 'เพื่อน', 'เฉพาะเพื่อน', 'เฉพาะฉัน']}
                        defaultValue={'สาธารณะ'}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
                        dropdownStyle={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: 100 }}>
                    </ModalDropdown>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>อัพโหลดภาพปก</Text>
                <View style={stylesMain.FlexRow}>
                    <View style={{ height: 50, width: 50, borderWidth: 1, borderRadius: 5, padding: 5 }}>
                        {
                            avatarSource2 ?
                                <FastImage
                                    source={{ uri: avatarSource2.path }}
                                    style={stylesMain.BoxProduct1Image}
                                /> :
                                null
                        }
                    </View>
                    <TouchableOpacity onPress={() => this.UploadImageGroup()}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10 }]}>เพิ่มรูปภาพ</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Post_Feed', setData: {
                        selectedIndex: 12,
                    }, navigation
                })}
                    style={stylesMain.ItemCenter} >
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', width: '30%', borderRadius: 5, height: 30 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>+ สร้างกลุ่ม</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> โปรไฟล์ กลุ่ม
export function Profile_Group(props) {
    const { navigation } = props;
    var uri = `${finip}/${'brand/feed_highlight'}`;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(null);
    useEffect(() => {
        activeSelectedIndex &&
            GetServices({
                uriPointer: uri, getDataSource: value => {
                    setActiveSelectedIndex(false);
                    setDataService(value);
                },
            });
    }, [activeSelectedIndex]);
    const Group_Member = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png` },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg` },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg` },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg` },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png` },
        { image: `${ip}/MySQL/uploads/Group_image/con1.jpg` }]
    let GroupMemberItem = (
        Group_Member.map((value, index) => {
            if (index < 6) {
                return <View key={index} style={{ height: 'auto', aspectRatio: 1.2, marginBottom: 5 }}>
                    <FastImage
                        style={{ height: '100%', width: width * 0.10, marginLeft: 5, borderRadius: 50, marginBottom: 10 }}
                        source={{ uri: value.image, }}
                        resizeMode={FastImage.resizeMode.cover} />
                </View>
            }
        }))
    return (
        <>
            <ScrollView {...props}>
                <FastImage
                    style={{ width: '100%', height: 150 }}
                    source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
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
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({
                            goScreen: 'Post_Feed', setData: { selectedIndex: 13, }, navigation
                        })}>
                            <View style={[stylesMain.ItemCenter, {
                                backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32
                            }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>เกี่ยวกับกลุ่ม</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({
                            goScreen: 'Post_Feed', setData: {
                                selectedIndex: 14,
                            }, navigation
                        })}>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>รูปภาพ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({
                            goScreen: 'Post_Feed', setData: {
                                selectedIndex: 15,
                            }, navigation
                        })}>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#C4C4C4', padding: 10, borderRadius: 25, width: width * 0.32 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>สมาชิก</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView}>
                    <View>
                        {
                            dataService?.feed_follow?.length > 0 ?
                                <FlatList
                                    scrollEnabled={true}
                                    initialNumToRender={10}
                                    data={dataService.feed_follow}
                                    keyExtractor={(value, index) => `Feed${index}`}
                                    renderItem={(value) => {
                                        return <FeedBox {...props} dataService={value.item} Header Follow={false} />
                                    }}
                                /> : <></>
                        }
                    </View>
                </View>
            </ScrollView>
            <ActionButton buttonColor={mainColor} size={50}
                onPress={() => NavigationNavigateScreen({
                    goScreen: 'Post_Feed', setData: { selectedIndex: 1, }, navigation
                })}>
            </ActionButton>
        </>
    );

}
///----------------------------------------------------------------------------------------------->>>>
export function Group_About(props) {
    const Group_Member = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png`, name: 'สติ๊ก กี้ ', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg`, name: 'Chanun Nurainee', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'Rattapol Meejun', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'May Methawee', Following: '20', membar_Follow: '30', },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png`, name: 'pantip com', Following: '20', membar_Follow: '30', }
    ]
    let GroupMemberItem = (
        Group_Member.map((value, index) => {
            return <TouchableOpacity key={index} style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginTop: 10 }]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage
                        style={{ height: 50, width: 50, borderRadius: 25, }}
                        source={{
                            uri: value.image,
                        }}
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
            </TouchableOpacity>
        }))
    return (
        <ScrollView>
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
                        <FastImage
                            style={{ height: 50, width: 50, borderRadius: 25, }}
                            source={{
                                uri: `${ip}/MySQL/uploads/addmin/unnamed.png`,
                            }}
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
                        <FastImage
                            style={{ height: 50, width: 50, borderRadius: 25, }}
                            source={{
                                uri: `${ip}/MySQL/uploads/addmin/JALL2.jpg`,
                            }}
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
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Group_Image(props) {
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
            setActiveGetServices(false);
            setDataService(GenArreyNumber(40, itemT));
        }
    }, [activeGetServices]);
    console.log(activeGetServices);
    return (
        <ScrollView>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10 }]}>รูปภาพในกลุ่ม</Text>
            <ImageGallery dataService={dataService} />
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Group_Member(props) {
    return (
        <View>
            <Text>สมาชิก</Text>
        </View>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Save_Activity(props) {
    const selectorSheet = useRef(null)
    const item = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png`, name: 'สติ๊ก กี้ ถูกใจโพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/con8.png`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con3.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con1.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/AMARIN.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' }
    ]
    let ActivityItem = (
        item.map((value, index) => {
            return <TouchableOpacity key={index}>
                <BottomSheet
                    ref={selectorSheet}
                    height={110}
                    duration={250}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            paddingTop: 10,
                        }
                    }}>
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
                        <FastImage
                            style={{ height: 50, width: 50, borderRadius: 25, }}
                            source={{
                                uri: value.image,
                            }}
                            resizeMode={FastImage.resizeMode.cover} />
                        <View style={{ alignItems: 'flex-end', bottom: 20 }}>
                            <View style={[stylesMain.ItemCenter,
                            { width: 25, height: 25, backgroundColor: '#0A55A6', borderRadius: 15 }]}>
                                <IconAntDesign name='like1' size={15} color='#FFFFFF' />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 5, width: width * 0.68, }}>
                        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {value.name}
                        </Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>
                            {value.Time}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { selectorSheet.current.open() }} >
                        <View style={[stylesMain.ItemCenter, { marginTop: 5 }]}>
                            <IconEntypo name='dots-three-vertical' size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        })
    )
    return (
        <ScrollView>
            <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
                {ActivityItem}
            </View>
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Save_Post(props) {
    const selectorSheet = useRef(null)
    const item = [
        { image: `${ip}/MySQL/uploads/Group_image/Walmart.png`, name: 'ผู้บริหาร Walmart เชื่อ ”ออฟฟิศ” ยังคงเป็นสิ่งสำคัญของธุรกิจ', status: 'อ่านแล้ว', },
        { image: `${ip}/MySQL/uploads/Group_image/paradise.jpg`, name: 'ศูนย์การค้า พาราไดซ์ พาร์ค บริหารงานโดยบริษัท เอ็ม บี เค จำกัด (มหาชน) ผู้บริหารศูนย์การค้า เอ็ม บี เค เซ็นเตอร์ ด้วยมูลค่าโครงการรวมกว่า 3,200 ล้านบาท บนถนนศรีนครินทร์ ภายใต้แนวคิด “สวนสวรรค์แห่งการช้อปปิ้งที่ยิ่งใหญ่ที่สุดของกรุงเทพตะวันออก', status: 'ยังไม่อ่าน' },
        { image: `${ip}/MySQL/uploads/Group_image/1.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png`, name: 'ได้ติดต่อผู้ออกแบบโลโก้คนนึงด้วยการแชทผ่านapplicationชื่อดัง โดยได้ข้อมูลมาจากเว็บพันทิป จากเว็บระบุราคาไว้ถูกมาก', status: 'ยังไม่อ่าน ' },
        { image: `${ip}/MySQL/uploads/Group_image/MK.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' }
    ]
    let PostItem = (
        item.map((value, index) => {
            return <View style={[stylesMain.FlexRow, { marginVertical: 2.5 }]} key={index}>
                <BottomSheet
                    ref={selectorSheet}
                    height={200}
                    duration={250}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            paddingTop: 10,
                        }
                    }}>
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
                    <View style={[stylesMain.FlexRow,
                    { justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 10, }]}>
                        <View style={stylesMain.FlexRow}>
                            <FastImage
                                style={{ height: 70, width: 70, }}
                                source={{
                                    uri: value.image,
                                }}
                                resizeMode={FastImage.resizeMode.contain} />
                            <View style={{ marginLeft: 10, width: width * 0.62, justifyContent: 'space-between' }}>
                                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    {value.name}
                                </Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>
                                    {value.status}
                                </Text>

                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { selectorSheet.current.open() }}>
                            <View style={[stylesMain.ItemCenter, { marginLeft: 10 }]}>
                                <IconEntypo name='dots-three-horizontal' size={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        })
    )
    return (
        <ScrollView>
            <View style={{ padding: 5, backgroundColor: '#FFFFFF' }}>
                {PostItem}
            </View>
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Group_Total(props) {
    return (
        <View>
            <Text>กลุ่มทั้งหมด</Text>
        </View>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Feed_Notification(props) {
    const selectorSheet = useRef(null)

    return (
        <ScrollView>
            <View>
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 10, paddingVertical: 5 }}>
                    <TouchableOpacity>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ทำเครื่องหมายว่าอ่านแล้วทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <BottomSheet
                                    ref={selectorSheet}
                                    height={110}
                                    duration={250}
                                    customStyles={{
                                        container: {
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                            paddingTop: 10,
                                        }
                                    }}>
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
                                            {
                                                index % 2 == 0 ?
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
                                                    </View>
                                            }
                                        </View>
                                        {
                                            index % 2 == 0 ?
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
                                                </View>
                                        }
                                    </View>
                                    <TouchableOpacity onPress={() => { selectorSheet.current.open() }} >
                                        <View style={[stylesMain.ItemCenter,
                                        { height: 30, width: 30, borderRadius: 15 }]}>
                                            <IconEntypo name='dots-three-vertical' size={20} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Group_Search(props) {
    return (
        <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>โพสต์ทั้งหมด</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผลลัพธในกลุ่ม</Text>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]} >
                <View style={stylesMain.FlexRow}>
                    <FastImage
                        style={{ height: 50, width: 50, borderRadius: 25, }}
                        source={{
                            uri: `${ip}/MySQL/uploads/Group_image/1.jpg`,
                        }}
                        resizeMode={FastImage.resizeMode.cover} />
                    <View style={{ width: width * 0.55, marginLeft: 5 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>Soulemate Soulemate</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>17 พฤษภาคม เวลา 14:01 น.</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ผู้บริหาร Walmart เชื่อ ”ออฟฟิศ” ยังคงเป็นสิ่งสำคัญของธุรกิจ
                        Doug McMillon CEO ของ Walmart ร้านค้าปลีกรายใหญ่ในสหรัฐฯ กล่าวในที่ประชุมผู้ถือหุ้นว่า
                        เเม้พฤติกรรมการทำงานในช่วง COVID-19 จะเปลี่ยนจากการทำงานในออฟฟิศไปเป็นการ Work from Home
                    </Text>
                    </View>
                </View>
                <FastImage
                    style={{ height: 100, width: 100, }}
                    source={{
                        uri: `${ip}/MySQL/uploads/Group_image/1.jpg`,
                    }}
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
        </View>

    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Profile_FeedStore(props) {
    const { navigation } = props;
    var uri = `${finip}/${'brand/feed_highlight'}`;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(null);
    useEffect(() => {
        activeSelectedIndex &&
            GetServices({
                uriPointer: uri, getDataSource: value => {
                    setActiveSelectedIndex(false);
                    setDataService(value);
                },
            });
    }, [activeSelectedIndex]);
    const TabBar_Profile = [{
        name: <Text style={stylesFont.FontSize6}>
            <IconFeather name='layout' size={20} />โพสต์</Text>
    }, {
        name: <Text style={stylesFont.FontSize6}>
            <IconAntDesign name='solution1' size={20} />ชุมชน</Text>
    }];
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <FastImage
                    style={{ width: '100%', height: 150, }}
                    source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={[stylesMain.FlexRow, { borderBottomWidth: 2, marginHorizontal: 5 }]}>
                    <FastImage
                        style={{
                            height: 80, width: 80, marginLeft: 10, borderRadius: 40,
                            bottom: 20, borderColor: '#FFFFFF', borderWidth: 3
                        }}
                        source={{
                            uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`,
                        }}
                        resizeMode={FastImage.resizeMode.cover} />
                    <View style={{ marginLeft: 10, width: '50%' }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ppooo</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BEBDBD' }]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>200 โพสต์  </Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>ผู้ติดตาม 200K คน กำลังติดตาม 20 คน</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[stylesMain.ItemCenter, {
                            backgroundColor: '#0A55A6',
                            marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15
                        }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>กำลงติดตาม</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.ItemCenter, {
                            backgroundColor: '#0A55A6',
                            marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15
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
                <TabBar
                    // sendData={updateIndex2}
                    item={TabBar_Profile}
                    type='box'
                    // noLimit
                    widthBox={96}
                    radiusBox={4} />
            </View>
            {
                dataService &&
                <FlatList
                    scrollEnabled={true}
                    initialNumToRender={10}
                    data={dataService.feed_follow}
                    keyExtractor={(value, index) => `Feed${index}`}
                    renderItem={(value) => {
                        return <FeedBox {...props} dataService={value.item} Header Follow={false} />
                    }}
                />
            }
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export function Profile_FeedCustomer(props) {
    const { navigation, Bottom, otherBar } = props;
    var uri = `${finip}/${'brand/feed_highlight'}`;
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [dataService, setDataService] = useState(null);
    useEffect(() => {
        activeSelectedIndex &&
            GetServices({
                uriPointer: uri, getDataSource: value => {
                    setActiveSelectedIndex(false);
                    setDataService(value);
                },
            });
    }, [activeSelectedIndex]);
    const TabBar_Profile = [{
        name: <Text style={stylesFont.FontSize6}>
            <IconFeather name='layout' size={20} />โพสต์</Text>
    }, {
        name: <Text style={stylesFont.FontSize6}>
            <IconAntDesign name='solution1' size={20} />ชุมชน</Text>
    }];
    return (
        <ScrollView {...props}>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <FastImage
                    style={{ width: '100%', height: 150, }}
                    source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={[stylesMain.FlexRow, { borderBottomWidth: 2, marginHorizontal: 5 }]}>
                        <View style={stylesMain.FlexRow}>
                            <FastImage
                                style={{
                                    height: 90, width: 90, marginLeft: 5, borderRadius: 45,
                                    bottom: 20, borderColor: '#FFFFFF', borderWidth: 3
                                }}
                                source={{
                                    uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`,
                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                            <View style={{ marginLeft: 5, width: '52%', marginTop: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ppooo</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BEBDBD' }]}>Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>200 โพสต์  </Text>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ผู้ติดตาม 200K คน กำลังติดตาม 20 คน</Text>
                            </View>
                        </View>
                        {
                            Bottom &&
                            <View>
                                <TouchableOpacity style={[stylesMain.ItemCenter, {
                                    backgroundColor: '#0A55A6',
                                    marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15
                                }]}>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>กำลงติดตาม</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[stylesMain.ItemCenter, {
                                    backgroundColor: '#0A55A6',
                                    marginTop: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15
                                }]}>
                                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>แชท</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        {
                            otherBar &&
                            <TouchableOpacity key='otherBar' onPress={() => NavigationNavigateScreen({
                                goScreen: 'Post_Feed', setData: {
                                    selectedIndex: 23,
                                }, navigation
                            })}
                                style={{ alignItems: 'flex-end', width: width * 0.15, marginTop: 10 }}>
                                <IconFontAwesome5 name="ellipsis-v" size={20} />
                            </TouchableOpacity>
                        }
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
                <TabBar
                    // sendData={updateIndex2}
                    item={TabBar_Profile}
                    type='box'
                    // noLimit
                    widthBox={96}
                    radiusBox={4} />
            </View>
            {
                dataService &&
                <FlatList
                    scrollEnabled={true}
                    initialNumToRender={10}
                    data={dataService.feed_follow}
                    keyExtractor={(value, index) => `Feed${index}`}
                    renderItem={(value) => {
                        return <FeedBox {...props} dataService={value.item} Header Follow={false} />
                    }}
                />
            }
        </ScrollView>
    )
}
///----------------------------------------------------------------------------------------------->>>>
export let Profile_Edit = (props) => {
    const [name, setName] = useState('');
    const [Details, setDetails] = useState('');
    const [website, setwebsite] = useState('');
    const [Address, setAddress] = useState('');
    const [Birthday, setBirthday] = useState('');
    const [InputGender, setGender] = useState(false);
    const [item1, setItem1] = useState(false)
    const Address_Sheet = useRef(null)
    const Birthday_Sheet = useRef(null)
    const Gender_Sheet = useRef(null)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
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
    return (
        <ScrollView>
            {/* ที่อยู่ */}
            <BottomSheet
                ref={Address_Sheet}
                height={150}
                duration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingTop: 10,
                    }
                }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={stylesMain.ItemCenter}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ที่อยู่</Text>
                    </View>
                    <View style={{ height: 100, borderWidth: 1, borderRadius: 5 }}>
                        <TextInput
                            style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                            multiline
                            editable
                            maxLength={200}
                            value={Address} onChangeText={(value) => setAddress(value)}>
                        </TextInput>
                    </View>

                </View>
            </BottomSheet>
            {/* วันเกิด */}
            <BottomSheet
                ref={Birthday_Sheet}
                height={110}
                duration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingTop: 10,
                    }
                }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={stylesMain.ItemCenter}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วันเกิด</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { borderWidth: 2, width: '60%', borderRadius: 5, paddingVertical: 5, borderColor: '#C5C5C5' }]}>
                                <IconFontAwesome name='calendar' size={20} color='rgb(29, 70, 204)' />
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                            </View>
                        </TouchableOpacity>
                        {show && (<DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="spinner" onChange={(event, selectedDate) => onChange(event, selectedDate)} />)}
                    </View>
                </View>
            </BottomSheet>
            {/* เพศ */}
            <BottomSheet
                ref={Gender_Sheet}
                height={100}
                duration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingTop: 10,
                    }
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={InputGender} onPress={() => setGender({ InputGender: true, })} />
                        <IconFontisto name='male' size={20} style={{ marginTop: 15, marginLeft: -10, color: mainColor }} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15, marginLeft: 10 }]}>ชาย</Text>
                        <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={InputGender} onPress={() => setGender({ InputGender: false, })} />
                        <IconFontisto name='female' size={20} style={{ marginTop: 15, marginLeft: -10, color: '#ff1ac6' }} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15, marginLeft: 10 }]}>หญิง</Text>
                    </View>
                </View>
            </BottomSheet>
            <FastImage
                style={{ width: '100%', height: 150, }}
                source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
                resizeMode={FastImage.resizeMode.cover} />
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={[stylesMain.FlexRow, { justifyContent: 'center', marginTop: -30, }]}>
                    <FastImage
                        style={{
                            height: 110, width: 110, borderRadius: 60,
                            borderColor: '#FFFFFF', borderWidth: 3,
                        }}
                        source={{
                            uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <TouchableOpacity style={[stylesMain.ItemCenter, {
                        backgroundColor: '#C4C4C4', padding: 10, borderRadius: 20,
                        borderColor: '#FFFFFF', borderWidth: 2, width: 40, height: 40, left: -40, top: 70
                    }]}>
                        <IconFeather name='camera' size={17} />
                    </TouchableOpacity>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>ชื่อ</Text>
                <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5 }}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        multiline
                        editable
                        maxLength={30}
                        value={name} onChangeText={(value) => setName(value)}>
                    </TextInput>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>ประวัติ</Text>
                <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, height: 150 }}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        multiline
                        editable
                        maxLength={5000}
                        value={Details} onChangeText={(value) => setDetails(value)}>
                    </TextInput>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>เว็บไซต์</Text>
                <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 }}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        multiline
                        editable
                        maxLength={30}
                        value={website} onChangeText={(value) => setwebsite(value)}>
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
                    <TouchableOpacity onPress={() => { Address_Sheet.current.open() }}>
                        <IconFeather name='edit' size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>วันเกิด</Text>
                <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                    <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                        <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>29 มิถุนายน ค.ศ. 1995</Text>
                    </View>
                    <TouchableOpacity onPress={() => { Birthday_Sheet.current.open() }}>
                        <IconFeather name='edit' size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เพศ</Text>
                <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                    <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                        <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชาย</Text>
                    </View>
                    <TouchableOpacity onPress={() => { Gender_Sheet.current.open() }}>
                        <IconFeather name='edit' size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
