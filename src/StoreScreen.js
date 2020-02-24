///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Animated, Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitAppModule } from './MainScreen';
import { FeedBox, GetCoupon, GetServices, ProductBox, TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class StoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            activeSlide: 0,
            selectedIndex: 0,
            selectedIndex2: 0,
            scrollY: new Animated.Value(0)
        };
        this.getData = this.getData.bind(this)
        this.getSelectedIndex = this.getSelectedIndex.bind(this);
        this.getSelectedIndex2 = this.getSelectedIndex2.bind(this);
    }
    getSelectedIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    getSelectedIndex2(selectedIndex2) {
        this.setState({ selectedIndex2 })
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    ViewSide(selectedIndex, item) {
        const { selectedIndex2 } = this.state
        const { navigation } = this.props;
        switch (selectedIndex) {
            case 0:
                return ([
                    <Banner navigation={navigation} item={item} />,
                    <TicketLine />,
                    <DealTop navigation={navigation} />,
                    <NewProduct navigation={navigation} />,
                    <BannerBar_ONE />,
                    <PopularProduct navigation={navigation} />
                ]);
            case 1:
                return ([
                    <Banner navigation={navigation} item={item} />,
                    <SubMenu getSelectedIndex2={this.getSelectedIndex2} />,
                    this.ViewSubSide(selectedIndex2)
                ]);
            case 2:
                return ([
                    <Banner navigation={navigation} item={item} />,
                    <BoxProduct4 navigation={navigation} />
                ]);
            default:
        }
    }
    ViewSubSide(selectedIndex2) {
        if (selectedIndex2 == 0) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex2 == 1) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex2 == 2) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex2 == 3) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        }
    }
    render() {
        const { dataService, selectedIndex } = this.state
        const { navigation } = this.props
        const id_item = navigation.getParam('id_item')
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storedata',
            id: Number(id_item)
        };
        const maxheight = 70
        var s_item = dataService.map((item) => {
            return ({
                id_store: item.id_store, name: item.name, image: item.image, image_path: item.image_path
            })
        })
        const AnimatedHeadopacity = this.state.scrollY.interpolate({
            inputRange: [0, maxheight],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        const AnimatedDetailsopacity = this.state.scrollY.interpolate({
            inputRange: [maxheight, maxheight + 220],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        const AnimatedHead = this.state.scrollY.interpolate({
            inputRange: [0, maxheight],
            outputRange: [maxheight, 50],
            extrapolate: 'clamp',
        })
        const AnimatedHeadbg = this.state.scrollY.interpolate({
            inputRange: [0, maxheight / 2],
            outputRange: ['transparent', '#fff'],
            extrapolate: 'clamp',
        })
        const AnimatedHeadbd = this.state.scrollY.interpolate({
            inputRange: [0, maxheight / 2],
            outputRange: ['transparent', '#ECECEC'],
            extrapolate: 'clamp',
        })
        const AnimatedHeadi = this.state.scrollY.interpolate({
            inputRange: [0, maxheight / 2],
            outputRange: ['#fff', '#111'],
            extrapolate: 'clamp',
        })
        // const wheight = maxheight * 3.5
        return (
            <View style={[stylesMain.BackgroundAreaView, { height: '100%', }]}>
                {
                    id_item !== undefined ?
                        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
                        null
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
                            style={stylesStore.StoreHeadImage}
                        />
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
                            ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbd} AIColor={AnimatedHeadi}
                        />
                    </View>
                </Animatable.View>
                <ScrollView
                    scrollEventThrottle={8}
                    stickyHeaderIndices={[2, selectedIndex == 1 ? 4 : null]}
                    onScroll={
                        Animated.event([{
                            nativeEvent: { contentOffset: { y: this.state.scrollY } }
                        }])
                    }
                >
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
                    <Menubar navigation={navigation} item={s_item} getSelectedIndex={this.getSelectedIndex} />
                    {this.ViewSide(selectedIndex, s_item)}
                </ScrollView>
                <ExitAppModule navigation={navigation} />
            </View >
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreHead
export class StoreHead extends Component {
    constructor(props) {
        super(props);
    }
    getDetailStore() {
        const { item } = this.props;
        return item.map((item, index) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/')
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
                                    resizeMode={FastImage.resizeMode.cover}
                                />
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
                            <View style={stylesStore.StoreHeadButtom}>
                                <Text style={[stylesStore.StoreHeadButtomText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    แชท</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        })
    }
    render() {
        return (
            this.getDetailStore()
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreHeadDetails
export class StoreHeadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    getDetailStore() {
        const { item } = this.props;
        return item.map((item, index) => {
            var uri = ip + '/mysql/DataServiceStore.php';
            var dataBody = {
                type: 'storedatadetail',
                id: item.id_store
            };
            return (
                <View style={[stylesStore.StoreHeadDetails, { paddingTop: 0, marginBottom: 10, }]} key={index}>
                    {
                        item !== undefined ?
                            <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
                            null
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
                                ( ภายในไม่กี่ชั่วโมง)</Text>
                        </View>
                    </View>
                </View>
            );
        })
    }
    render() {
        return (
            this.getDetailStore()
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Menubar
export class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getData = this.getData.bind(this);
    }
    getData(selectedIndex) {
        this.props.getSelectedIndex(selectedIndex)
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
                        sendData={this.getData}
                        item={item}
                        // activeColor='red'
                        radiusBox={4}
                        overScrollMode={'never'}
                        type='box'
                    />
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Banner
export class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            activeSlide: 0,
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    _renderItem = ({ item, index }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View style={stylesStore.BannerBox} key={index}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesStore.BannerSlide}
                />
            </View>
        );
    }
    get pagination() {
        const { dataService, activeSlide } = this.state;
        return (
            <View style={stylesStore.SlideBox}>
                <Pagination
                    dotsLength={dataService.length}
                    activeDotIndex={activeSlide}
                    // containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0.1)' }}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 30,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(255, 255, 255, 0.92)',
                        borderWidth: 2,
                    }}
                    inactiveDotStyle={{
                        width: 15,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    }}
                    carouselRef={this.activeSlide}
                    tappableDots={!!this.activeSlide}
                    // inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    getDetail() {
        const { dataService } = this.state;
        const { item } = this.props;
        const slideWidth = width * 0.9522;
        const slideHeight = height * 0.5;
        const slideDelay = 3000;
        return item.map((item, index) => {
            var uri = 'https://finforyou.com/' + item.name;
            return (
                <View key={index}>
                    <View style={stylesStore.Banner}>
                        <View>
                            <Carousel
                                ref={c => this.activeSlide = c}
                                data={dataService}
                                renderItem={this._renderItem}
                                sliderWidth={slideWidth}
                                itemWidth={slideWidth}
                                sliderHeight={slideHeight}
                                loop={true}
                                autoplay={true}
                                autoplayDelay={slideDelay}
                                autoplayInterval={slideDelay}
                                onSnapToItem={(index) => this.setState({ activeSlide: index })}
                            />
                            {this.pagination}
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {this.getDetail()}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> TicketLine
export class TicketLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getTicketLine() {
        return (
            <View style={[stylesMain.FrameBackground, { marginTop: 0 }]}>
                <ScrollView horizontal>
                    <GetCoupon flexRow useCoupon codeList={'available'} colorCoupon='#86CFFF' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                    <GetCoupon flexRow useCoupon codeList={'available'} colorCoupon='#86CFFF' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                    <GetCoupon flexRow useCoupon codeList={'available'} colorCoupon='#86CFFF' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
                </ScrollView>
            </View>
        )
    }
    render() {
        return (
            this.getTicketLine()
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> DealTop
export class DealTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'sale'
        };
        return (
            <View style={[stylesMain.FrameBackground, { backgroundColor: null }]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        ดีลเด็ด</Text>
                </View>
                <ScrollView horizontal>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql' mode='row3col1'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> NewProduct
export class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'newproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground, { backgroundColor: null }]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        สินค้ามาใหม่</Text>
                </View>
                <ScrollView horizontal>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql' mode='row3col1'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export class BannerBar_ONE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            activeSlide: 0,
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    _renderItem = ({ item, index }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View style={stylesStore.Banner_Bar_Box} key={index}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesStore.Banner_Bar_image}
                />
            </View>
        );
    }
    get pagination() {
        const { dataService, activeSlide } = this.state;
        return (
            <View style={{ marginTop: -45, marginBottom: -10 }}>
                <Pagination
                    dotsLength={dataService.length}
                    activeDotIndex={activeSlide}
                    // containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0.1)' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 30,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(255, 255, 255, 0.92)',
                        borderWidth: 2,
                    }}
                    inactiveDotStyle={{
                        width: 10,
                        height: 4,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    }}
                    carouselRef={this.activeSlide}
                    tappableDots={!!this.activeSlide}
                    // inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        const { item } = this.props;
        const { dataService } = this.state
        const slideWidth = width * 1;
        const slideHeight = 80;
        const slideDelay = 3000;
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'slide'
        };
        return (
            <View>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesStore.Banner_Bar}>
                    <Carousel
                        ref={c => this.activeSlide = c}
                        data={dataService}
                        renderItem={this._renderItem}
                        sliderWidth={slideWidth}
                        itemWidth={slideWidth}
                        sliderHeight={slideHeight}
                        loop={true}
                        autoplay={true}
                        autoplayDelay={slideDelay}
                        autoplayInterval={slideDelay}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                </View>
                {this.pagination}
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class PopularProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { headText, navigation, noHeadText } = this.props;
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { borderColor: '#E9E9E9' }]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {
                    noHeadText ?
                        null :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                            {headText ? headText : 'สินค้าขายดี'}</Text>
                }
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql' mode='row2colall'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex2) {
        this.props.getSelectedIndex2(selectedIndex2)
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
                        sendData={this.updateIndex}
                        item={item}
                        // widthBox={98}
                        activeColor={'#fff'}
                        activeFontColor={'#0A55A6'}
                        type='tag'
                    />
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props;
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql' mode='row2colall'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                            /> :
                            null
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class BoxProduct4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storefeed'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { marginTop: 0, marginBottom: 10 }]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.BoxProductWarp}>
                    {
                        dataService ?
                            <FeedBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql'
                            /> :
                            null
                    }
                </View>
            </View>
        )
    }
}