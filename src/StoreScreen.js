///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Animated, Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import axios from 'axios';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from './MainScreen';
import { GetServices, TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class StoreScreen extends Component {
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
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        const id_item = navigation.getParam('id_item')
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storedata',
            id: Number(id_item)
        };
        var s_item = dataService.map((item) => {
            return ({
                id_store: item.id_store, name: item.name, image: item.image, image_path: item.image_path
            })
        })
        console.log(s_item)
        return (
            <SafeAreaView style={[stylesMain.BackgroundAreaView, { height: '100%' }]}>
                {
                    id_item !== undefined ?
                        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} /> :
                        null
                }
                <AppBar leftBar='backarrow' rightBar='storebar' navigation={navigation} />
                <ScrollView >
                    <StoreHead navigation={navigation} item={s_item} />
                    <StoreHeadDetails navigation={navigation} item={s_item} />
                    <Menubar navigation={navigation} item={s_item} />
                </ScrollView>
            </SafeAreaView>
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
        return item.map((item) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/')
            return (
                <View style={stylesStore.StoreHead}>
                    <View >
                        <ImageBackground
                            source={require('../icon/bgprofile.jpg')}
                            style={stylesStore.StoreHeadImage}
                        />
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
        return item.map((item) => {
            var uri = ip + '/mysql/DataServiceStore.php';
            var dataBody = {
                type: 'storedatadetail',
                id: item.id_store
            };
            return (
                <View style={stylesStore.StoreHeadDetails}>
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
            selectedIndex: 0,
        }
        this.getData = this.getData.bind(this);
    }
    getData(val) {
        this.setState({
            selectedIndex: val
        });
    }
    ViewSide(selectedIndex) {
        const { item, navigation } = this.props;
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView>
                        <Banner navigation={navigation} item={item} />
                        <TicketLine />
                        <DealTop navigation={navigation} />
                        <NewProduct navigation={navigation} />
                        <BannerBar_ONE />
                        <PopularProduct navigation={navigation} />
                    </SafeAreaView>
                );
            case 1:
                return (
                    <SafeAreaView>
                        <Banner navigation={navigation} item={item} />
                        <SubMenu />
                    </SafeAreaView>
                );
            case 2:
                return (
                    <SafeAreaView>
                        <Banner navigation={navigation} item={item} />
                        <BoxProduct4 navigation={navigation} />
                    </SafeAreaView>
                );
            default:
        }
    }
    render() {
        const { selectedIndex } = this.state
        const item = [{
            name: 'หน้าหลัก'
        }, {
            name: 'สินค้าทั้งหมด'
        }, {
            name: 'ฟีด'
        }]
        return (
            <View style={[stylesMain.SafeAreaView]}>
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
                <ScrollView>
                    {this.ViewSide(selectedIndex)}
                </ScrollView>
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
    _renderItem = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View style={stylesStore.BannerBox} key={indexs}>
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
        return item.map((item) => {
            var uri = 'https://finforyou.com/' + item.name;
            return (
                <View>
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
            <View>
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
            <View style={[stylesMain.FrameBackground, { padding: 8 }]}>
                <ScrollView horizontal>
                    <View>
                        <ImageBackground
                            source={require('../icon/BoxTicket.jpg')}
                            style={stylesStore.TicketLineBox}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={[stylesStore.TicketLineText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                        ฿100.00</Text>
                                    <Text style={[stylesStore.TicketLineText2, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        ซื้อขั้นต่ำครบ ฿10,000.00</Text>
                                </View>
                                <View style={stylesStore.TicketLineButtom}>
                                    <Text style={[stylesStore.TicketLineButtomText, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        เก็บ</Text>
                                </View>
                            </View>
                            <View style={stylesStore.TicketEnd}></View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <ImageBackground
                            source={require('../icon/BoxTicket.jpg')}
                            style={stylesStore.TicketLineBox}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={[stylesStore.TicketLineText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                        ฿200.00</Text>
                                    <Text style={[stylesStore.TicketLineText2, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        ซื้อขั้นต่ำครบ ฿20,000.00</Text>
                                </View>
                                <View style={stylesStore.TicketLineButtom}>
                                    <Text style={[stylesStore.TicketLineButtomText, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        เก็บ</Text>
                                </View>
                            </View>
                            <View style={stylesStore.TicketEnd}></View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <ImageBackground
                            source={require('../icon/BoxTicket.jpg')}
                            style={stylesStore.TicketLineBox}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={[stylesStore.TicketLineText, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                        ฿300.00</Text>
                                    <Text style={[stylesStore.TicketLineText2, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        ซื้อขั้นต่ำครบ ฿30,000.00</Text>
                                </View>
                                <View style={stylesStore.TicketLineButtom}>
                                    <Text style={[stylesStore.TicketLineButtomText, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                                        เก็บ</Text>
                                </View>
                            </View>
                            <View style={stylesStore.TicketEnd}></View>
                        </ImageBackground>
                    </View>
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
    dataDealTop() {
        const { dataService } = this.state
        return dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                {/* <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                /> */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    render() {
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
                    {this.dataDealTop()}
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
    dataNewProduct() {
        const { dataService } = this.state
        return dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                {/* <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                /> */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    render() {
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
                    {this.dataNewProduct()}
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
    _renderItem = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View style={stylesStore.Banner_Bar_Box} key={indexs}>
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
    dataToday() {
        const { dataService } = this.state
        return dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct3Box} key={indexs}>
                        <View style={stylesMain.BoxProduct3ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                // onLoadEnd={() => IsLoading(true)}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                {/* <NumberFormat
                              value={throughsale}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'฿'}
                              renderText={value =>
                                  <Text style={[
                                      stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                      { marginTop: 3 }
                                  ]}>
                                      {value}</Text>
                              }
                          /> */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
    }
    render() {
        const { headText, noHeadText } = this.props;
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
                    {this.dataToday()}</View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> PopularProduct
export class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    ViewSide(selectedIndex) {
        if (selectedIndex == 0) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex == 1) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex == 2) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex == 3) {
            return (
                <View>
                    <ShowProduct noTitle navigation={this.props.navigation} />
                </View>
            )
        }
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
        const { selectedIndex } = this.state
        return (
            <View>
                <View style={stylesStore.SubMenu}>
                    <TabBar
                        sendData={this.updateIndex}
                        item={item}
                        // widthBox={98}
                        activeColor={'#fff'}
                        activeFontColor={'#0A55A6'}
                        type='tag'
                    />
                </View>
                {this.ViewSide(selectedIndex)}
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
    dataToday() {
        const { dataService } = this.state
        return dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct3Box} key={indexs}>
                        <View style={stylesMain.BoxProduct3ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                // onLoadEnd={() => IsLoading(true)}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                {/* <NumberFormat
                          value={throughsale}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'฿'}
                          renderText={value =>
                              <Text style={[
                                  stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                  { marginTop: 3 }
                              ]}>
                                  {value}</Text>
                          }
                      /> */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <View style={[stylesMain.FrameBackground]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.BoxProductWarp}>
                    {this.dataToday()}</View>
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
    dataToday() {
        const { dataService } = this.state
        return dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <View style={stylesMain.BoxProduct4Box} key={indexs}>
                    <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct4Image}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <View style={stylesMain.BoxProduct4ComBox}>
                        <Text style={[stylesMain.BoxProduct4ComBoxDetail, stylesStore.SukhumvitSetText]}>
                            {item.detail}</Text>
                        <Text style={[stylesMain.BoxProduct4ComBoxTag, stylesStore.SukhumvitSetText]}>
                            ที่สุดสำหรับคุณ</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[stylesMain.BoxProduct4ComBoxText, stylesStore.SukhumvitSetText]}>
                                200 การเข้าชม</Text>
                            <Text style={[stylesMain.BoxProduct4ComBoxText, stylesStore.SukhumvitSetText]}>
                                เมื่อ 3 วันที่ผ่านมา</Text>
                        </View>
                    </View>
                    <View style={stylesMain.BoxProduct4ComBox2}>
                        <View style={stylesMain.BoxProduct4ComBoxIcon}>
                            <IconFontAwesome5 name='heart' size={20} />
                            <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                ถูกใจ</Text>
                        </View>
                        <View style={stylesMain.BoxProduct4ComBoxIcon}>
                            <IconFontAwesome5 name='comment-dots' size={20} />
                            <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                แสดงความคิดเห็น</Text>
                        </View>
                        <View style={stylesMain.BoxProduct4ComBoxIcon}>
                            <IconFontAwesome5 name='share-square' size={20} />
                            <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                แชร์</Text>
                        </View>
                    </View>
                </View>
            );
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storefeed'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]} >
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.BoxProductWarp}>
                    {this.dataToday()}
                </View>
            </View>
        )
    }
}