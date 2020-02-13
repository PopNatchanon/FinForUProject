import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
    Animated
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import {
    ButtonGroup,
    Button,
} from 'react-native-elements'
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import stylesStore from '../style/StylesStoreScreen'
import stylesMain from '../style/StylesMainScreen'
import stylesFont from '../style/stylesFont'
import { ip } from '../navigator/IpConfig'
import { TabBar } from './tools/Tools'
import { AppBar } from './MainScreen';
export const { width, height } = Dimensions.get('window');

export default class StoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceStoreData: [],
            activeSlide: 0,
        };
    }
    getDataStoreData(id_item) {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storedata',
            id: id_item
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourceStoreData: getData.data,
            })
        })
    }
    componentDidMount() {
        const id_item = this.props.navigation.getParam('id_item')
        this.getDataStoreData(id_item.toString())
    }
    render() {
        var s_id_store = this.state.dataSourceStoreData.map((item) => { return (item.id_store) })
        var s_name = this.state.dataSourceStoreData.map((item) => { return (item.name) })
        var s_image = this.state.dataSourceStoreData.map((item) => { return (item.image) })
        return (
            <SafeAreaView style={[stylesMain.BackgroundAreaView, { height: '100%' }]}>
                <AppBar leftBar='backarrow' rightBar='storebar' navigation={this.props.navigation} />
                <ScrollView >
                    <StoreHead navigation={this.props.navigation} item={{ name: s_name, image: s_image }} />
                    <StoreHeadDetails navigation={this.props.navigation} id_item={s_id_store} />
                    <Menubar navigation={this.props.navigation} s_name={s_name} s_image={s_image} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export class StoreHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/')
        return (
            <View style={stylesStore.StoreHead}>
                <View>
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
    }
}

export class StoreHeadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceStoreHeadDetails: [],
        };
    }
    getDataStoreHeadDetails(s_id_store) {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storedatadetail',
            id: s_id_store
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourceStoreHeadDetails: getData.data,
            })
        })
    }
    componentDidMount() {
        const { s_id_store } = this.props;
        this.getDataStoreHeadDetails(s_id_store)
    }
    render() {
        return (
            <View style={stylesStore.StoreHeadDetails}>
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
    }
}

export class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            fadeAnim: new Animated.Value(0),
        }
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        Animated.timing(
            // Uses easing functions
            this.state.fadeAnim, // The value to drive
            { toValue: 1 }, // Configuration
        ).start(); // Don't forget start!
    }
    getData(val) {
        this.setState({
            selectedIndex: val
        });
    }
    ViewSide(selectedIndex) {
        const { s_name, s_image } = this.props;
        if (selectedIndex == 0) {
            return (
                <SafeAreaView>
                    <Banner navigation={this.props.navigation} item={{ name: s_name, image: s_image }} />
                    <TicketLine />
                    <DealTop navigation={this.props.navigation} />
                    <NewProduct navigation={this.props.navigation} />
                    <BannerBar_ONE />
                    <PopularProduct navigation={this.props.navigation} />
                </SafeAreaView>
            )
        } else if (selectedIndex == 1) {
            return (
                <SafeAreaView>
                    <Banner navigation={this.props.navigation} item={{ name: s_name, image: s_image }} />
                    <SubMenu />
                </SafeAreaView>
            )
        } else if (selectedIndex == 2) {
            return (
                <SafeAreaView>
                    <Banner navigation={this.props.navigation} item={{ name: s_name, image: s_image }} />
                    <BoxProduct4 navigation={this.props.navigation} />
                </SafeAreaView>
            )
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

export class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceSlide: [],
            activeSlide: 0,
        };
    }
    getDataSlide() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'slide'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourceSlide: getData.data,
            })
        })
    }
    componentDidMount() {
        const { item } = this.props;
        this.getDataSlide(item)
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
        const { dataSourceSlide, activeSlide } = this.state;
        return (
            <View style={stylesStore.SlideBox}>
                <Pagination
                    dotsLength={dataSourceSlide.length}
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
    render() {
        const { item } = this.props;
        const slideWidth = width * 0.9522;
        const slideHeight = height * 0.5;
        const slideDelay = 3000;
        return (
            <View>
                <View style={stylesStore.Banner}>
                    <View>
                        <Carousel
                            ref={c => this.activeSlide = c}
                            data={this.state.dataSourceSlide}
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
                        https://finforyou.com/{item.name}</Text>
                </View>
            </View>
        );
    }
}

export class TicketLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceSlide: [],
        };
    }
    render() {
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
}

export class DealTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }
    getDealTop() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'sale'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSale: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDealTop();
    }
    render() {
        let dataDealTop = this.state.dataSale.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                                    {value}</Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        ดีลเด็ด</Text>
                </View>
                <ScrollView horizontal>
                    {dataDealTop}
                </ScrollView>
            </View>
        );
    }
}

export class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }
    getNewProduct() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'newproduct'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSale: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getNewProduct();
    }
    render() {
        let dataNewProduct = this.state.dataSale.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                                    {value}</Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        สินค้ามาใหม่</Text>
                </View>
                <ScrollView horizontal>
                    {dataNewProduct}
                </ScrollView>
            </View>
        );
    }
}

export class BannerBar_ONE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceSlide: [],
            activeSlide: 0,
        };
    }
    getDataSlide() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'slide'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourceSlide: getData.data,
            })
        })
    }
    componentDidMount() {
        const { item } = this.props;
        this.getDataSlide(item)
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
        const { dataSourceSlide, activeSlide } = this.state;
        return (
            <View style={{ marginTop: -45, marginBottom: -10 }}>
                <Pagination
                    dotsLength={dataSourceSlide.length}
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
        const slideWidth = width * 1;
        const slideHeight = 80;
        const slideDelay = 3000;
        return (
            <View>
                <View style={stylesStore.Banner_Bar}>
                    <Carousel
                        ref={c => this.activeSlide = c}
                        data={this.state.dataSourceSlide}
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

export class PopularProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcePopularProduct: [],
        };
    }
    getDataPopularProduct() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourcePopularProduct: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDataPopularProduct();
    }
    render() {
        const { headText, noHeadText } = this.props;
        let dataToday = this.state.dataSourcePopularProduct.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct3Box} key={indexs}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct3Image}
                        />
                        <Text style={[stylesMain.BoxProduct2ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct2ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                                    {value}</Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, { borderColor: '#E9E9E9' }]}>
                {
                    noHeadText ?
                        null :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                            {headText ? headText : 'สินค้าขายดี'}</Text>
                }
                <View style={stylesMain.BoxProductWarp}>
                    {dataToday}</View>
            </View>
        )
    }
}

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
        const { s_name, s_image } = this.props;
        if (selectedIndex == 0) {
            return (
                <View>
                    <ShowProduct navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex == 1) {
            return (
                <View>
                    <ShowProduct navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex == 2) {
            return (
                <View>
                    <ShowProduct navigation={this.props.navigation} />
                </View>
            )
        } else if (selectedIndex == 3) {
            return (
                <View>
                    <ShowProduct navigation={this.props.navigation} />
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

export class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceShowProduct: [],
        };
    }
    getDataShowProduct() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'todayproduct'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourceShowProduct: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDataShowProduct();
    }
    render() {
        let dataToday = this.state.dataSourceShowProduct.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.push('DetailScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                                    {value}</Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={[stylesMain.FrameBackground]}>
                <View style={stylesMain.BoxProductWarp}>
                    {dataToday}</View>
            </View>
        )
    }
}

export class BoxProduct4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceBoxProduct4: [],
        };
    }
    getDataBoxProduct4() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'storefeed'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourceBoxProduct4: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDataBoxProduct4();
    }
    render() {
        let dataToday = this.state.dataSourceBoxProduct4.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <View style={stylesMain.BoxProduct4Box} key={indexs}>
                    <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct4Image}
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
                            <Icons name='heart' size={20} />
                            <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                ถูกใจ</Text>
                        </View>
                        <View style={stylesMain.BoxProduct4ComBoxIcon}>
                            <Icons name='comment-dots' size={20} />
                            <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                แสดงความคิดเห็น</Text>
                        </View>
                        <View style={stylesMain.BoxProduct4ComBoxIcon}>
                            <Icons name='share-square' size={20} />
                            <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesStore.SukhumvitSetText]}>
                                แชร์</Text>
                        </View>
                    </View>
                </View>
            );
        })
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]} >
                <View style={stylesMain.BoxProductWarp}>
                    {dataToday}
                </View>
            </View>
        )
    }
}