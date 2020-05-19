///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Animated, Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import Carousel, { PaginationLight, } from 'react-native-x-carousel';
export const { width, height, } = Dimensions.get('window');
import ActionButton from 'react-native-action-button';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitAppModule, } from './MainScreen';
import {
    FeedBox, GetCoupon, GetData, GetServices, ProductBox, TabBar, LoadingScreen, NavigationNavigateScreen, FlatProduct,
} from './customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class StoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            activeGetServices: true,
            activeGetServices2: true,
            activeRef: true,
            filterValue: { popular: 'popular' },
            selectedIndex: 0,
            selectedIndex2: 0,
            scrollY: new Animated.Value(0)
        };
    }
    getSelectedIndex = (selectedIndex) => {
        this.setState({ selectedIndex, activeRef: true })
    }
    getSelectedIndex2 = (selectedIndex) => {
        const { filterValue, } = this.state;
        filterValue.popular = selectedIndex == 0 ? 'popular' : '';
        filterValue.best_sale = selectedIndex == 1 ? 'best_sale' : '';
        filterValue.lastest = selectedIndex == 2 ? 'lastest' : '';
        filterValue.sort_price = selectedIndex == 3 ? value.actionReturn : '';
        this.setState({ activeGetServices2: true, filterValue, selectedIndex2: selectedIndex })
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService, })
    }
    getData2 = (dataService2) => {
        this.setState({ activeGetServices2: false, dataService2, })
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie })
    }
    getDataSource = (activeRef) => {
        this.setState({ activeRef })
    }
    ViewSide(selectedIndex, dataService) {
        const { navigation, } = this.props;
        const { activeRef, currentUser, cokie, dataService2, } = this.state
        switch (selectedIndex) {
            case 0:
                return ([
                    <TicketLine cokie={cokie} currentUser={currentUser} navigation={navigation} key={'TicketLine'} />,
                    <DealTop dataService={dataService && dataService[0].product_big_deal} navigation={navigation} key={'product_big_deal'}
                        titlename='ดีลเด็ด' />,
                    <DealTop dataService={dataService && dataService[0].product_new} navigation={navigation} key={'product_new'}
                        titlename='สินค้ามาใหม่' />,
                    <PopularProduct dataService={dataService && dataService[0].product_best_sale} navigation={navigation}
                        key={'product_best_sale'} />
                ]);
            case 1:
                return ([
                    <SubMenu getSelectedIndex2={this.getSelectedIndex2.bind(this)} key={'SubMenu'} />,
                    <ShowProduct dataService={dataService2 && dataService2.store_data[0].product_store} noTitle navigation={navigation} />
                ]);
            case 2:
                return ([
                    <BoxProduct4 activeRef={activeRef} getDataSource={this.getDataSource.bind(this)} navigation={navigation}
                        key={'BoxProduct4'} />,
                ]);
            default:
        }
    }
    render() {
        const { navigation, } = this.props
        const { activeGetCurrentUser, activeGetServices, activeGetServices2, dataService, filterValue, scrollY, selectedIndex, } = this.state
        const id_item = navigation.getParam('id_item')
        var uri = `${finip}/brand/store_home`;
        var dataBody = {
            id_store: id_item,
            popular: 'popular', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            lastest: '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            best_sale: '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            sort_price: '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
            min_price: '',
            max_price: ''
        }
        var dataBody2 = {
            id_store: id_item,
            popular: filterValue && filterValue.popular ? filterValue.popular : '', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            lastest: filterValue && filterValue.lastest ? filterValue.lastest : '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            best_sale: filterValue && filterValue.best_sale ? filterValue.best_sale : '',  //<< ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            sort_price: filterValue && filterValue.sort_price ? filterValue.sort_price : '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
            min_price: '',
            max_price: ''
        }
        const maxheight = 70
        const AnimatedHeadopacity = scrollY.interpolate({
            inputRange: [0, maxheight],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        const AnimatedDetailsopacity = scrollY.interpolate({
            inputRange: [maxheight, maxheight + 220],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        const AnimatedHead = scrollY.interpolate({
            inputRange: [0, maxheight],
            outputRange: [maxheight, 50],
            extrapolate: 'clamp',
        })
        const AnimatedHeadbg = scrollY.interpolate({
            inputRange: [0, maxheight / 2],
            outputRange: ['transparent', '#fff'],
            extrapolate: 'clamp',
        })
        const AnimatedHeadbd = scrollY.interpolate({
            inputRange: [0, maxheight / 2],
            outputRange: ['transparent', '#ECECEC'],
            extrapolate: 'clamp',
        })
        const AnimatedHeadi = scrollY.interpolate({
            inputRange: [0, maxheight / 2],
            outputRange: ['#fff', '#111'],
            extrapolate: 'clamp',
        })
        var image_header
        dataService && dataService.store_data.map((value) => {
            return image_header = `${finip}/${value.image_head_path}/${value.image_head}`
        })
        activeGetServices == true && id_item !== undefined &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
        activeGetServices2 == true && id_item !== undefined &&
            GetServices({ uriPointer: uri, dataBody: dataBody2, getDataSource: this.getData2.bind(this) })
        activeGetCurrentUser == true &&
            GetData({ getCokie: true, getSource: this.getSource.bind(this), getUser: true })
        // const wheight = maxheight * 3.5
        return (
            <View style={[stylesMain.BackgroundAreaView, { height: '100%', }]}>
                {
                    (activeGetServices == true || activeGetServices2 == true || activeGetCurrentUser == true) &&
                    <LoadingScreen />
                }
                <Animatable.View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: AnimatedHead,
                    opacity: AnimatedHeadopacity,
                }}>
                    <View style={[stylesStore.StoreHead]}>
                        <ImageBackground
                            source={{ uri: image_header }}
                            style={stylesStore.StoreHeadImage} />
                    </View>
                </Animatable.View>
                <Animatable.View style={{ height: 50 }}>
                    <View style={{
                        position: 'relative',
                        top: 0,
                        left: 0,
                        right: 0,
                    }}>
                        <AppBar leftBar='backarrow' rightBar='storebar' navigation={navigation}
                            ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbd} AIColor={AnimatedHeadi} />
                    </View>
                </Animatable.View>
                <ScrollView
                    scrollEventThrottle={8}
                    stickyHeaderIndices={[2, selectedIndex == 1 && 4]}
                    onScroll={
                        Animated.event([{
                            nativeEvent: { contentOffset: { y: scrollY } }
                        }])
                    }>
                    <Animatable.View style={{
                        marginTop: -50,
                        opacity: AnimatedHeadopacity,
                    }}>
                        <StoreHead navigation={navigation} dataService={dataService && dataService.store_data} />
                    </Animatable.View>
                    <Animatable.View style={{
                        opacity: AnimatedDetailsopacity,
                        height: 120,
                    }}>
                        <StoreHeadDetails navigation={navigation} dataService={dataService && dataService.store_data} />
                    </Animatable.View>
                    <Menubar navigation={navigation} getSelectedIndex={this.getSelectedIndex.bind(this)} />
                    <Banner navigation={navigation} dataService={dataService && dataService.store_data} key={'Banner'} />
                    {this.ViewSide(selectedIndex, dataService && dataService.store_data)}
                </ScrollView>
                {
                    selectedIndex == 2 &&
                    <>
                        <ActionButton buttonColor="#0A55A6" size={50}
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'Post_Feed', setData: {
                                    selectedIndex: 1, id_store: id_item, store_data: dataService.store_data,
                                    getDataSource: this.getDataSource.bind(this)
                                }, navigation
                            })}>
                        </ActionButton>
                    </>
                }
                <ExitAppModule navigation={navigation} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreHead
export class StoreHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true
        }
    }
    get getDetailStore() {
        const { dataService, navigation } = this.props;
        return dataService ? (
            dataService.map((value, index) => {
                var dataMySQL = `${finip}/${value.image_path}/${value.image}`
                return (
                    <View style={[stylesStore.StoreHead]} key={index}>
                        <View style={stylesStore.StoreHeadBox}>
                            <View style={stylesMain.FlexRow}>
                                <View>
                                    <FastImage
                                        source={{
                                            uri: dataMySQL,
                                        }}
                                        style={[stylesStore.StoreHeadFace, { backgroundColor: '#fff' }]}
                                        resizeMode={FastImage.resizeMode.cover} />
                                </View>
                                <View>
                                    <Text style={[stylesStore.StoreHeadText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                        {value.name}</Text>
                                    <Text style={[stylesStore.StoreHeadTextOther, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                                    <Text style={[stylesStore.StoreHeadTextOther2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                        ผู้ติดตาม {value.who_follow} | กำลังติดตาม {value.follow_number}</Text>
                                </View>
                            </View>
                            <View style={stylesStore.HeadButtom}>
                                <View style={stylesStore.StoreHeadButtom}>
                                    <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                        ติดตาม</Text>
                                </View>
                                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation
                                })}>
                                    <View style={stylesStore.StoreHeadButtom}>
                                        <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                            แชท</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            })
        ) : <></>
    }
    render() {
        return (
            this.getDetailStore
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreHeadDetails
export class StoreHeadDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    get getDetailStore() {
        const { dataService, navigation } = this.props;
        const id_item = navigation.getParam('id_item')
        return dataService ? (
            dataService.map((value, index) => {
                return (
                    <View style={[stylesStore.StoreHeadDetails, { paddingTop: 0, marginBottom: 10, justifyContent: 'space-between' }]}
                        key={index}>
                        <View>
                            <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                คะแนนร้านค้า :</Text>
                            <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                รายการสินค้า :</Text>
                            <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ระยะเวลาในการจัดเตรียมพัสดุ :</Text>
                            <Text style={[stylesStore.StoreHeadDetailsText1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ประสิทธิภาพการแชท :</Text>
                        </View>
                        <View>
                            <View style={stylesMain.FlexRow}>
                                <Text style={[stylesStore.StoreHeadDetailsText2_1, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    {value.rating != 'ยังไม่มีการรีวิว' ? `${value.rating} จาก 5` : value.rating}</Text>
                                <Text style={[stylesStore.StoreHeadDetailsText2_3, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                    ({value.rating_number})</Text>
                            </View>
                            <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                {value.product_amount}</Text>
                            <View style={stylesMain.FlexRow}>
                                <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    {value.time_send}</Text>
                            </View>
                            <View style={stylesMain.FlexRow}>
                                <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    {value.chat_performance}</Text>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={1}
                            onPress={() => NavigationNavigateScreen({
                                goScreen: 'Post_Feed', setData: { selectedIndex: 0, id_store: id_item }, navigation
                            })}>
                            <IconEntypo name='chevron-right' size={25} color='#0A55A6' />
                        </TouchableOpacity>
                    </View>
                );
            })
        ) : <></>
    }
    render() {
        return (
            this.getDetailStore
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Menubar
export class Menubar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    getData = (value) => {
        const { getSelectedIndex } = this.props
        getSelectedIndex(value.selectedIndex)
    }
    render() {
        const item = [{
            name: 'หน้าหลัก'
        }, {
            name: 'สินค้าทั้งหมด'
        }, {
            name: 'ฟีด'
        }]
        return (
            <View>
                <View style={[stylesStore.Menubar]}>
                    <TabBar
                        sendData={this.getData.bind(this)}
                        item={item}
                        // activeColor='red'
                        radiusBox={4}
                        overScrollMode={'never'}
                        type='box' />
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Banner
export class Banner extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            dataService: [],
        };
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    getData2 = (activeSlide) => {
        this.setState({ activeSlide })
    }
    _renderItem = item => {
        return (
            <View style={stylesStore.BannerBox} key={item}>
                <FastImage
                    source={{
                        uri: item,
                    }}
                    style={stylesStore.BannerSlide} />
            </View>
        );
    }
    get getDetail() {
        const { dataService } = this.props;
        const slideDelay = 3000;
        return dataService && dataService.map((value, index) => {
            // var uri = `https://finforyou.com/${item.name}`;
            var image_banner = value.image_banner.split(';');
            image_banner = image_banner.map((value2) => { return `${finip}/${value.image_banner_path}/${value2}` })
            return (
                <View key={index}>
                    <View style={[stylesStore.Banner, { borderLeftWidth: 0, paddingLeft: 0 }]}>
                        <View>
                            <Carousel
                                renderItem={this._renderItem}
                                data={image_banner}
                                loop
                                autoplay
                                autoplayInterval={slideDelay}
                                pagination={PaginationLight} />
                        </View>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                สวัสดีค่า ยินดีต้อนรับค่ะร้านนี้รบกวนไม่ถามเล่นๆ นะคะ หากต่อราคารบกวนไม่ต่อเว่อๆนะคะ ถ้าลดได้ลดให้ค่า</Text>
                        </View>
                    </View>
                    {/* <View stD */}
                </View>
            );
        })
    }
    render() {
        return (
            <View style={{ marginVertical: 10 }}>
                {this.getDetail}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> TicketLine
export class TicketLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            activeGetCoupon: false,
        };
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, activeGetCoupon: false, dataService })
    }
    setCoupon = (value) => {
        this.setState({ activeGetCoupon: true, activeGetServices: true, id_promotion: value.id_promotion })
    }
    get getTicketLine() {
        const { dataService, } = this.state
        return (
            <View key='getTicketLine' style={[stylesMain.FrameBackground, { marginTop: 0 }]}>
                <ScrollView horizontal>
                    {
                        dataService && dataService.coupon.length > 0 ? (
                            dataService.coupon.map((value, index) => {
                                return (
                                    <GetCoupon
                                        flexRow
                                        codeList={value.my_coupon == 'no' ? 'available' : ''}
                                        getCoupon={this.setCoupon.bind(this)}
                                        key={index}
                                        // colorCoupon='#86CFFF'
                                        saveCoupon
                                        setDataService={{
                                            list: 'shop',
                                            id_promotion: value.id_promotion
                                        }}
                                        timeOut={value.end_period}
                                        couponText={value.name}
                                        textDetail={value.detail} />
                                )
                            })
                        ) : <></>
                    }
                </ScrollView>
            </View>
        )
    }
    render() {
        const { currentUser, cokie, navigation, } = this.props
        const { activeGetCoupon, activeGetServices, dataService, id_promotion } = this.state
        const id_item = navigation.getParam('id_item')
        var uri = `${finip}/coupon/save_coupon_shop`;
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            device: 'mobile_device',
            id_store: id_item,
            id_promotion_shop: activeGetCoupon ? id_promotion : '',
        }
        activeGetServices == true && cokie &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
        return (
            this.getTicketLine
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> DealTop
export class DealTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService, navigation, titlename } = this.props
        return (
            <View style={[stylesMain.FrameBackground, { backgroundColor: null }]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        {titlename}</Text>
                </View>
                {
                    dataService &&
                    <FlatProduct custumNavigation='DealTop' navigation={navigation} dataService={dataService}
                        mode='row3' nameFlatProduct='DealTop' nameSize={14} priceSize={15} dispriceSize={15} />
                }
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class PopularProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService, headText, navigation, noHeadText } = this.props;
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { borderColor: '#E9E9E9' }]}>
                {
                    noHeadText ?
                        null :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                            {
                                headText ?
                                    headText :
                                    'สินค้าขายดี'
                            }</Text>
                }
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService &&
                        <ProductBox
                            dataService={dataService}
                            navigation={navigation}
                            mode='row2colall'
                            pointerUrl='DetailScreen'
                            pointerid_store
                            nameSize={14}
                            priceSize={15}
                            dispriceSize={15} />
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    updateIndex = (value) => {
        const { getSelectedIndex2 } = this.props
        getSelectedIndex2(value.selectedIndex)
    }
    render() {
        const item = [{
            name: 'ยอดนิยม'
        }, {
            name: 'ล่าสุด'
        }, {
            name: 'สินค้าขายดี'
        }, {
            actionItem: [
                <IconMaterialIcons name='unfold-more' size={15} style={[
                    stylesMain.ItemCenterVertical, { color: '#6C6C6C', marginLeft: 2 }]} />,
                <IconMaterialIcons name='arrow-upward' size={15} style={[
                    stylesMain.ItemCenterVertical, { color: '#0A55A6', marginLeft: 2 }]} />,
                <IconMaterialIcons name='arrow-downward' size={15} style={[
                    stylesMain.ItemCenterVertical, { color: '#0A55A6', marginLeft: 2 }]} />
            ],
            actionList: [1, 2],
            actionReturn: ['min', 'max'],
            name: 'ราคา'
        }]
        return (
            <View>
                <View style={[stylesStore.SubMenu, { height: 45, paddingTop: 2, }]}>
                    <TabBar
                        sendData={this.updateIndex.bind(this)}
                        item={item}
                        // widthBox={98}
                        activeColor={'#fff'}
                        activeFontColor={'#0A55A6'}
                        type='tag' />
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class ShowProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataService, navigation } = this.props;
        return (
            <View style={[stylesMain.FrameBackground]}>
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService && dataService.length > 0 ?
                            <ProductBox
                                dataService={dataService}
                                navigation={navigation}
                                mode='row2colall'
                                pointerUrl='DetailScreen'
                                pointerid_store
                                nameSize={14}
                                priceSize={15}
                                dispriceSize={15} /> :
                            <View style={[stylesMain.ItemCenter, { width, height: 300 }]}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical]}>
                                    ไม่มีสินค้า</Text>
                            </View>
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class BoxProduct4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getData = (dataService) => {
        const { getDataSource } = this.props
        this.setState({ dataService })
        getDataSource(false)
    }
    getDataSource = (activeRef) => {
        const { getDataSource } = this.props
        getDataSource(activeRef)
    }
    render() {
        const { activeRef, navigation } = this.props;
        const { dataService } = this.state;
        const id_item = navigation.getParam('id_item')
        const uri = `${finip}/brand/feed_news`;
        const dataBody = {
            id_store: id_item
        }
        activeRef == true && id_item &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })

        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { marginTop: 0, marginBottom: 10 }]}>
                {
                    (activeRef == true) &&
                    <LoadingScreen key='LoadingScreen' />
                }
                <View style={stylesMain.BoxProductWarp}>
                    {
                        activeRef == false && (
                            dataService && dataService.feed_news && dataService.feed_news != 'ยังไม่มีข่าวใหม่' ?
                                <FeedBox
                                    Header
                                    Follow
                                    userOwner
                                    getDataSource={this.getDataSource.bind(this)}
                                    dataService={dataService.feed_news}
                                    navigation={navigation} /> :
                                <View style={[stylesMain.ItemCenter, { width, height: 50, backgroundColor: '#fff' }]}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, stylesMain.ItemCenterVertical]}>
                                        {dataService && dataService.feed_news}</Text>
                                </View>
                        )
                    }
                </View>
            </View>
        )
    }
}