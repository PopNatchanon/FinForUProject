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
import Icon from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitAppModule, } from './MainScreen';
import { FeedBox, GetCoupon, GetServices, ProductBox, TabBar, } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class StoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            selectedIndex: 0,
            selectedIndex2: 0,
            scrollY: new Animated.Value(0)
        };
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, } = this.props;
        const { dataService, selectedIndex, selectedIndex2, scrollY, } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService || selectedIndex !== nextState.selectedIndex ||
            selectedIndex2 !== nextState.selectedIndex2 || scrollY !== nextState.scrollY
        ) {
            return true
        }
        return false
    }
    getSelectedIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }
    getSelectedIndex2 = (selectedIndex2) => {
        this.setState({ selectedIndex2 })
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    ViewSide(selectedIndex, item) {
        const { navigation, } = this.props;
        const { selectedIndex2, } = this.state
        switch (selectedIndex) {
            case 0:
                return ([
                    <Banner navigation={navigation} item={item} key={'Banner'} />,
                    <TicketLine key={'TicketLine'} />,
                    <DealTop navigation={navigation} key={'DealTop'} />,
                    <NewProduct navigation={navigation} key={'NewProduct'} />,
                    <PopularProduct navigation={navigation} key={'PopularProduct'} />
                ]);
            case 1:
                return ([
                    <Banner navigation={navigation} item={item} key={'Banner'} />,
                    <SubMenu getSelectedIndex2={this.getSelectedIndex2.bind(this)} key={'SubMenu'} />,
                    this.ViewSubSide(selectedIndex2)
                ]);
            case 2:
                return ([
                    <Banner navigation={navigation} item={item} key={'Banner'} />,
                    <BoxProduct4 navigation={navigation} key={'BoxProduct4'} />,
                ]);
            default:
        }
    }
    ViewSubSide(selectedIndex2) {
        const { navigation } = this.props;
        if (selectedIndex2 == 0) {
            return (
                <View key={'ShowProduct'}>
                    <ShowProduct noTitle navigation={navigation} />
                </View>
            )
        } else if (selectedIndex2 == 1) {
            return (
                <View key={'ShowProduct'}>
                    <ShowProduct noTitle navigation={navigation} />
                </View>
            )
        } else if (selectedIndex2 == 2) {
            return (
                <View key={'ShowProduct'}>
                    <ShowProduct noTitle navigation={navigation} />
                </View>
            )
        } else if (selectedIndex2 == 3) {
            return (
                <View key={'ShowProduct'}>
                    <ShowProduct noTitle navigation={navigation} />
                </View>
            )
        }
    }
    render() {
        const { navigation, } = this.props
        const { dataService, scrollY, selectedIndex, } = this.state
        const id_item = navigation.getParam('id_item')
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storedata',
            id: Number(id_item)
        };
        const maxheight = 70
        var s_item = dataService.map((item) => {
            return ({
                id_store: item.id_store, name: item.name, image: item.image, image_path: item.image_path,
            })
        })
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
        // const wheight = maxheight * 3.5
        return (
            <View style={[stylesMain.BackgroundAreaView, { height: '100%', }]}>
                {
                    id_item !== undefined &&
                    <GetServices
                        uriPointer={uri}
                        dataBody={dataBody}
                        getDataSource={this.getData.bind(this)} />
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
                            source={require('../icon/bgprofile.jpg')}
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
                        <StoreHead navigation={navigation} item={s_item} />
                    </Animatable.View>
                    <Animatable.View style={{
                        opacity: AnimatedDetailsopacity,
                        height: 120,
                    }}>
                        <StoreHeadDetails navigation={navigation} item={s_item} />
                    </Animatable.View>
                    <Menubar navigation={navigation} item={s_item} getSelectedIndex={this.getSelectedIndex.bind(this)} />
                    {this.ViewSide(selectedIndex, s_item)}
                </ScrollView>
                {
                    selectedIndex == 2 &&
                    <>
                        <ActionButton buttonColor="#0A55A6" size={50}
                         onPress={this.navigationNavigateScreen.bind(this, 'Post_Feed', { selectedIndex: 1 })}>
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
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { item, navigation } = this.props;
        if (
            ////>nextProps
            item !== nextProps.item ||
            ////>nextState
            navigation !== nextProps.navigation
        ) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get getDetailStore() {
        const { item } = this.props;
        return item.map((item, index) => {
            var dataMySQL = ip + '/mysql/uploads/slide/NewStore/' + item.image
            return (
                <View style={[stylesStore.StoreHead]} key={index}>
                    <View style={stylesStore.StoreHeadBox}>
                        <View style={stylesMain.FlexRow}>
                            <View>
                                <FastImage
                                    source={{
                                        uri: dataMySQL,
                                    }}
                                    style={stylesStore.StoreHeadFace}
                                    resizeMode={FastImage.resizeMode.cover} />
                            </View>
                            <View>
                                <Text style={[stylesStore.StoreHeadText, stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                    {item.name}</Text>
                                <Text style={[stylesStore.StoreHeadTextOther, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                    Active เมื่อ 1 ชั่วโมงที่ผ่านมา</Text>
                                <Text style={[stylesStore.StoreHeadTextOther2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2</Text>
                            </View>
                        </View>
                        <View style={stylesStore.HeadButtom}>
                            <View style={stylesStore.StoreHeadButtom}>
                                <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    ติดตาม</Text>
                            </View>
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}>
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
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { item } = this.props;
        const { dataService } = this.state;
        if (
            ////>nextProps
            item !== nextProps.item ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    get getDetailStore() {
        const { item } = this.props;
        return item.map((item, index) => {
            var uri = ip + '/mysql/DataServiceStore.php';
            var dataBody = {
                type: 'storedatadetail',
                id: item.id_store
            };
            return (
                <View style={[stylesStore.StoreHeadDetails, { paddingTop: 0, marginBottom: 10, justifyContent: 'space-between' }]} key={index}>
                    {
                        item !== undefined &&
                        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                    }
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
                                4.8 จาก 5</Text>
                            <Text style={[stylesStore.StoreHeadDetailsText2_3, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                (46.9 พันคะแนน)</Text>
                        </View>
                        <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            150</Text>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                เร็ว</Text>
                            <Text style={[stylesStore.StoreHeadDetailsText2_3, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                ( 1-2 วัน )</Text>
                        </View>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesStore.StoreHeadDetailsText2_2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                80 %</Text>
                            <Text style={[stylesStore.StoreHeadDetailsText2_3, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                ( ภายในไม่กี่ชั่วโมง )</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.navigationNavigateScreen.bind(this, 'Post_Feed', { selectedIndex: 0 })}>
                        <IconEntypo name='chevron-right' size={25} color='#0A55A6' />
                    </TouchableOpacity>
                </View>
            );
        })
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { getSelectedIndex } = this.props;
        if (
            ////>nextProps
            getSelectedIndex !== nextProps.getSelectedIndex
            ////>nextState
        ) {
            return true
        }
        return false
    }
    getData = (Value) => {
        const { getSelectedIndex } = this.props
        getSelectedIndex(Value.selectedIndex)
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
export class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { item, } = this.props;
        const { activeSlide, dataService, } = this.state;
        if (
            ////>nextProps
            item !== nextProps.item ||
            ////>nextState
            activeSlide !== nextState.activeSlide || dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    getData2 = (activeSlide) => {
        this.setState({ activeSlide })
    }
    _renderItem = item => {
        var dataMySQL = ip + '/mysql/uploads/slide/bannerstore/' + item.image
        return (
            <View style={stylesStore.BannerBox} key={item.image}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesStore.BannerSlide} />
            </View>
        );
    }
    get getDetail() {
        const { item } = this.props;
        const { dataService } = this.state;
        const slideDelay = 3000;
        return item.map((item, index) => {
            var uri = 'https://finforyou.com/' + item.name;
            return (
                <View key={index}>
                    <View style={[stylesStore.Banner, { borderLeftWidth: 0, paddingLeft: 0 }]}>
                        <View>
                            <Carousel
                                renderItem={this._renderItem}
                                data={dataService}
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
                    <View style={stylesStore.BannerTextTail}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            {uri}</Text>
                    </View>
                </View>
            );
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'slide'
        };
        return (
            <View style={{ marginVertical: 10 }}>
                <GetServices
                    uriPointer={uri}
                    dataBody={dataBody}
                    getDataSource={this.getData.bind(this)} />
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
        };
    }
    get getTicketLine() {
        return (
            <View style={[stylesMain.FrameBackground, { marginTop: 0 }]}>
                <ScrollView horizontal>
                    <GetCoupon
                        flexRow
                        useCoupon
                        codeList={'available'}
                        // colorCoupon='#86CFFF'
                        timeOut={'31-01-2020'}
                        couponText={'10%'}
                        textDetail={'รับเงินคืน 10% Coins'} />
                    <GetCoupon
                        flexRow
                        useCoupon
                        codeList={'available'}
                        // colorCoupon='#86CFFF'
                        timeOut={'31-01-2020'}
                        couponText={'10%'}
                        textDetail={'รับเงินคืน 10% Coins'} />
                    <GetCoupon
                        flexRow
                        useCoupon
                        codeList={'available'}
                        // colorCoupon='#86CFFF'
                        timeOut={'31-01-2020'}
                        couponText={'10%'}
                        textDetail={'รับเงินคืน 10% Coins'} />
                </ScrollView>
            </View>
        )
    }
    render() {
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
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { dataService } = this.state;
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { navigation } = this.props
        const { dataService } = this.state
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'sale'
        };
        return (
            <View style={[stylesMain.FrameBackground, { backgroundColor: null }]}>
                <GetServices
                    uriPointer={uri}
                    dataBody={dataBody}
                    getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        ดีลเด็ด</Text>
                </View>
                <ScrollView horizontal>
                    {
                        dataService &&
                        <ProductBox
                            dataService={dataService}
                            navigation={navigation}
                            typeip='ip'
                            prepath='mysql'
                            mode='row3col1'
                            pointerUrl='DetailScreen'
                            pointerid_store
                            nameSize={14}
                            priceSize={15}
                            dispriceSize={15} />
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> NewProduct
export class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { dataService } = this.state;
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { navigation } = this.props
        const { dataService } = this.state
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'newproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground, { backgroundColor: null }]}>
                <GetServices
                    uriPointer={uri}
                    dataBody={dataBody}
                    getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        สินค้ามาใหม่</Text>
                </View>
                <ScrollView horizontal>
                    {
                        dataService &&
                        <ProductBox
                            dataService={dataService}
                            navigation={navigation}
                            typeip='ip'
                            prepath='mysql'
                            mode='row3col1'
                            pointerUrl='DetailScreen'
                            pointerid_store
                            nameSize={14}
                            priceSize={15}
                            dispriceSize={15} />
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class PopularProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { headText, navigation, noHeadText } = this.props;
        const { dataService } = this.state
        if (
            ////>nextProps
            headText !== nextProps.headText || navigation !== nextProps.navigation || noHeadText !== nextProps.noHeadText ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { headText, navigation, noHeadText } = this.props;
        const { dataService } = this.state
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { borderColor: '#E9E9E9' }]}>
                <GetServices
                    uriPointer={uri}
                    dataBody={dataBody}
                    getDataSource={this.getData.bind(this)} />
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
                            typeip='ip'
                            prepath='mysql'
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { getSelectedIndex2, headText, navigation, noHeadText, } = this.props;
        const { dataService } = this.state
        if (
            ////>nextProps
            getSelectedIndex2 !== nextProps.getSelectedIndex2 || headText !== nextProps.headText || navigation !== nextProps.navigation ||
            noHeadText !== nextProps.noHeadText ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    updateIndex = (selectedIndex2) => {
        const { getSelectedIndex2 } = this.props
        getSelectedIndex2(selectedIndex2)
    }
    render() {
        const item = [{
            name: 'ยอดนิยม'
        }, {
            name: 'ล่าสุด'
        }, {
            name: 'สินค้าขายดี'
        }, {
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
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props;
        const { dataService } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { navigation } = this.props;
        const { dataService } = this.state
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground]}>
                <GetServices
                    uriPointer={uri}
                    dataBody={dataBody}
                    getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService &&
                        <ProductBox
                            dataService={dataService}
                            navigation={navigation}
                            typeip='ip'
                            prepath='mysql'
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
export class BoxProduct4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props;
        const { dataService } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { navigation } = this.props
        const { dataService } = this.state
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storefeed'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { marginTop: 0, marginBottom: 10 }]}>
                <GetServices
                    uriPointer={uri}
                    dataBody={dataBody}
                    getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService &&
                        <FeedBox
                            dataService={dataService}
                            navigation={navigation}
                            typeip='ip'
                            prepath='mysql' />
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>>
