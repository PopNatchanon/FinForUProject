import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';
import {
    ButtonGroup,
    Button,
} from 'react-native-elements'
import styles from './StylesStoreScreen'
import { ip } from './IpConfig'
export const { width, height } = Dimensions.get('window');

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceStoreData: [],
            activeSlide: 0,
        };
    }
    getDataStoreData(id_item) {
        var url = ip + '/mysql/DataServiceStore.php?type=storedata&id=' + id_item;
        // console.log(url)
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
                this.setState({
                    dataSourceStoreData: getData.data,
                })
            })
    }
    componentDidMount() {
        // console.log(this.props.navigation.getParam('id_item'))
        var id_item = this.props.navigation.getParam('id_item')
        this.getDataStoreData(id_item)
    }
    render() {
        var s_id_store = this.state.dataSourceStoreData.map((item) => { return (item.id_store) })
        var s_name = this.state.dataSourceStoreData.map((item) => { return (item.name) })
        var s_image = this.state.dataSourceStoreData.map((item) => { return (item.image) })
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <StoreHead navigation={this.props.navigation} item={{ name: s_name, image: s_image }} />
                     <StoreHeadDetails navigation={this.props.navigation} id_item={s_id_store}/>
                    <Menubar />
                    <ScrollView style={styles.SafeAreaViewSub}>
                        <Banner navigation={this.props.navigation} item={{ name: s_name, image: s_image }}/>
                        <TicketLine />
                        <DealTop />
                        <NewProduct />
                        <BannerBar_ONE />
                        <PopularProduct />
                    </ScrollView> 
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        return (
            <View style={styles.Appbar}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icons RightItem name="arrow-left" size={20} style={{ marginTop: 5, }} />
                </TouchableOpacity>
                <TextInput style={styles.TextInput}
                    placeholder="ค้นหาสินค้า/ร้านค้า"
                    onChangeText={(text) => this.state({ text })}
                ></TextInput>
                <IconsFeather RightItem name="filter" size={20} style={{ marginTop: 5, }} />
                <Icons RightItem name="ellipsis-h" size={20} style={{ marginTop: 5, }} />
            </View>
        );
    }
}

export class StoreHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        // console.log(item)
        var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/')
        // console.log(dataMySQL)
        return (
            <View style={styles.StoreHead}>
                <View>
                    <ImageBackground
                        source={{
                            uri: ip + '/mysql/uploads/slide/2019-10-17_15-18-03_banner.png',
                        }}
                        style={styles.StoreHeadImage}
                        resizeMethod='resize'
                    />
                    <View style={styles.StoreHeadBox}>
                        <View>
                            <Image
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={styles.StoreHeadFace}
                                resizeMethod='resize'
                            />
                        </View>
                        <View>
                            <Text style={styles.StoreHeadText}>
                                {item.name}
                            </Text>
                            <Text style={styles.StoreHeadTextOther}>
                                Active เมื่อ 1 ชั่วโมงที่ผ่านมา
                            </Text>
                            <Text style={styles.StoreHeadTextOther2}>
                                ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2
                            </Text>
                        </View>
                        <View style={{ marginTop: 64, }}>
                            <View style={styles.StoreHeadButtom}>
                                <Text style={styles.StoreHeadButtomText}>
                                    ติดตาม
                                </Text>
                            </View>
                            <View style={styles.StoreHeadButtom}>
                                <Text style={styles.StoreHeadButtomText}>
                                    แชท
                                </Text>
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
        var url = ip + '/mysql/DataServiceStore.php?type=storedatadetail&id=' + s_id_store;
        // console.log(url)
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
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
            <View style={styles.StoreHeadDetails}>
                <View>
                    <Text style={styles.StoreHeadDetailsText1}>
                        คะแนนร้านค้า :
                    </Text>
                    <Text style={styles.StoreHeadDetailsText1}>
                        รายการสินค้า :
                    </Text>
                    <Text style={styles.StoreHeadDetailsText1}>
                        ระยะเวลาในการจัดเตรียมพัสดุ :
                    </Text>
                    <Text style={styles.StoreHeadDetailsText1}>
                        ประสิทธิภาพการแชท :
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.StoreHeadDetailsText2_1}>
                            4.8 จาก 5
                        </Text>
                        <Text style={styles.StoreHeadDetailsText2_3}>
                            (46.9 พันคะแนน)
                        </Text>
                    </View>
                    <Text style={styles.StoreHeadDetailsText2_2}>
                        150
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.StoreHeadDetailsText2_2}>
                            เร็ว
                        </Text>
                        <Text style={styles.StoreHeadDetailsText2_3}>
                            ( 1-2 วัน )
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.StoreHeadDetailsText2_2}>
                            80 %
                        </Text>
                        <Text style={styles.StoreHeadDetailsText2_3}>
                            ( ภายในไม่กี่ชั่วโมง)
                        </Text>
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
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const component1 = () => <Text>หน้าหลัก</Text>
        const component2 = () => <Text>สินค้าทั้งหมด</Text>
        const component3 = () => <Text>ฟีด</Text>
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        const { selectedIndex } = this.state

        return (
            <View style={styles.Menubar}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{
                        height: 33,
                        marginLeft: 6,
                        marginRight: 6,
                        borderRadius: 4,
                    }}
                    selectedButtonStyle={{
                        backgroundColor: '#0A55A6',
                    }}
                    selectedTextStyle={{
                        color: '#FFFFFF',
                    }}
                />
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
        var url = ip + '/mysql/DataServiceStore.php?type=slide';
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
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
            <View style={styles.BannerBox} key={indexs}>
                <ImageBackground
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.BannerSlide}
                    resizeMethod='resize'
                >
                </ImageBackground>
            </View>
        );
    }

    get pagination() {
        const { dataSourceSlide, activeSlide } = this.state;
        // console.log(width)
        return (
            <View style={{ marginTop: -60 }}>
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
                    tappableDots={!!this.activeSlide}
                    // inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }

    render() {
        const { item } = this.props;
        return (
            <View>
                <View style={styles.Banner}>
                    <View>
                        <Carousel
                            data={this.state.dataSourceSlide}
                            renderItem={this._renderItem}
                            sliderWidth={width * 0.9522}
                            itemWidth={width * 0.9522}
                            sliderHeight={height * 0.5}
                            loop={true}
                            autoplay={true}
                            autoplayDelay={3000}
                            autoplayInterval={3000}
                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                        />
                        {this.pagination}
                    </View>
                    <View>
                        <Text style={styles.BannerTextHead}>
                            สวัสดีค่า ยินดีต้อนรับค่ะร้านนี้รบกวนไม่ถามเล่นๆ นะคะ หากต่อราคารบกวนไม่ต่อเว่อๆนะคะ ถ้าลดได้ลดให้ค่า
                        </Text>
                    </View>
                </View>
                <View style={styles.BannerTextTail}>
                    <Text style={styles.BannerText}>
                        https://finforyou.com/{item.name}
                    </Text>
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
            <View style={styles.TicketLine}>
                <ScrollView horizontal>
                    <View>
                        <ImageBackground
                            source={require('./icon/BoxTicket.jpg')}
                            style={styles.TicketLineBox}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.TicketLineText}>
                                        ฿100.00
                                    </Text>
                                    <Text style={styles.TicketLineText2}>
                                        ซื้อขั้นต่ำครบ ฿10,000.00
                                    </Text>
                                </View>
                                <View style={styles.TicketLineButtom}>
                                    <Text style={styles.TicketLineButtomText}>
                                        เก็บ
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.TicketEnd}></View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <ImageBackground
                            source={require('./icon/BoxTicket.jpg')}
                            style={styles.TicketLineBox}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.TicketLineText}>
                                        ฿100.00
                                    </Text>
                                    <Text style={styles.TicketLineText2}>
                                        ซื้อขั้นต่ำครบ ฿10,000.00
                                    </Text>
                                </View>
                                <View style={styles.TicketLineButtom}>
                                    <Text style={styles.TicketLineButtomText}>
                                        เก็บ
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.TicketEnd}></View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <ImageBackground
                            source={require('./icon/BoxTicket.jpg')}
                            style={styles.TicketLineBox}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.TicketLineText}>
                                        ฿100.00
                                    </Text>
                                    <Text style={styles.TicketLineText2}>
                                        ซื้อขั้นต่ำครบ ฿10,000.00
                                    </Text>
                                </View>
                                <View style={styles.TicketLineButtom}>
                                    <Text style={styles.TicketLineButtomText}>
                                        เก็บ
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.TicketEnd}></View>
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
        var url = ip + '/mysql/DataServiceStore.php?type=sale';
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
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
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return <View style={styles.DealTopBox} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.DealTopImage}
                    resizeMethod='resize'
                />
                <Text style={styles.DealTopImageName}>{item.name}</Text>
                <NumberFormat
                    value={item.full_price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={
                        value => <Text style={
                            styles.DealTopImagePrice
                        }>
                            {value}
                        </Text>}
                />
                <View style={styles.DealTopIconBox}>
                    <View style={styles.DealTopIconBoxStar}>
                        <Icons style={styles.DealTopIconStar} name='star' size={8} />
                        <Icons style={styles.DealTopIconStar} name='star' size={8} />
                        <Icons style={styles.DealTopIconStar} name='star' size={8} />
                        <Icons style={styles.DealTopIconStar} name='star' size={8} />
                        <Icons style={styles.DealTopIconStar} name='star' size={8} />
                    </View>
                    <View style={styles.DealTopIconBoxI}>
                        <Icons style={styles.DealTopIcon} name='heart' size={10} />
                        <Icons style={styles.DealTopIcon} name='share' size={10} />
                    </View>
                </View>
            </View>;
        })
        return (
            <View style={styles.DealTop}>
                <View style={styles.DealTopTextBox}>
                    <Text style={styles.DealTopText}>
                        ดีลเด็ด
                    </Text>
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
        var url = ip + '/mysql/DataServiceStore.php?type=newproduct';
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
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
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return <View style={styles.NewProductBox} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.NewProductImage}
                    resizeMethod='resize'
                />
                <Text style={styles.NewProductImageName}>{item.name}</Text>
                <NumberFormat
                    value={item.full_price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={
                        value => <Text style={
                            styles.NewProductImagePrice
                        }>
                            {value}
                        </Text>}
                />
                <View style={styles.NewProductIconBox}>
                    <View style={styles.NewProductIconBoxStar}>
                        <Icons style={styles.NewProductIconStar} name='star' size={8} />
                        <Icons style={styles.NewProductIconStar} name='star' size={8} />
                        <Icons style={styles.NewProductIconStar} name='star' size={8} />
                        <Icons style={styles.NewProductIconStar} name='star' size={8} />
                        <Icons style={styles.NewProductIconStar} name='star' size={8} />
                    </View>
                    <View style={styles.NewProductIconBoxI}>
                        <Icons style={styles.NewProductIcon} name='heart' size={10} />
                        <Icons style={styles.NewProductIcon} name='share' size={10} />
                    </View>
                </View>
            </View>;
        })
        return (
            <View style={styles.NewProduct}>
                <View style={styles.NewProductTextBox}>
                    <Text style={styles.NewProductText}>
                        สินค้ามาใหม่
                    </Text>
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
        };
    }

    render() {
        return (<View style={styles.Banner_Bar}>
            <Image
                style={styles.Banner_Bar_image}
                source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg' }}
                resizeMethod='resize'
            ></Image>
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
        var url = ip + '/mysql/DataServiceStore.php?type=todayproduct';
        axios.get(url)
            .then((getData) => {
                //   console.log(getData.data);
                this.setState({
                    dataSourcePopularProduct: getData.data,
                })
            })
    }

    componentDidMount() {
        this.getDataPopularProduct();
    }

    render() {
        let dataToday = this.state.dataSourcePopularProduct.map((item, indexs) => {
            // console.log( indexs + '. ' + item.image ),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <View style={styles.PopularProductBox} key={indexs}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.PopularProductImage}
                        resizeMethod='resize'
                    />
                    <Text style={styles.PopularProductImageName}>
                        {item.name}
                    </Text>
                    <NumberFormat
                        value={item.full_price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'฿'}
                        renderText={
                            value => <Text style={
                                styles.PopularProductImagePrice
                            }>
                                {value}
                            </Text>
                        }
                    />
                    <View style={styles.PopularProductIconBox}>
                        <View style={styles.PopularProductIconBoxStar}>
                            <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                            <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                            <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                            <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                            <Icons style={styles.PopularProductIconStar} name='star' size={8} />
                        </View>
                        <View style={styles.PopularProductIconBoxI}>
                            <Icons style={styles.PopularProductIcon} name='heart' size={10} />
                            <Icons style={styles.PopularProductIcon} name='share' size={10} />
                        </View>
                    </View>
                </View>
            );
        })
        return (
            <View style={styles.PopularProduct}>
                <Text style={styles.PopularProductText}>
                    สินค้าขายดี
                </Text>
                <View style={styles.PopularProductBoxProduct}>
                    {dataToday}
                </View>
            </View>
        )
    }
}