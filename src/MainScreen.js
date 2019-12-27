import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from '../style/StylesMainScreen';
import { ip } from '../IpConfig'
export const { width, height } = Dimensions.get('window');

///----------------------------------Appbar----------------------------------------///

export default class MainScreen extends Component {
    render() {
        return (
            //console.log(this.props.navigation.navigate),
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <Category />
                    <Button_Bar />
                    <Brand_RCM />
                    <Popular_product />
                    <BannerBar_ONE />
                    <FlashSale navigation={this.props.navigation} />
                    <PromotionPopular navigation={this.props.navigation} />
                    <SaleProduct navigation={this.props.navigation} />
                    <BannerBar_TWO />
                    <NewStore navigation={this.props.navigation} />
                    <NewProduct navigation={this.props.navigation} />
                    <Confidential_PRO />
                    <Product_for_you navigation={this.props.navigation} />
                    <CategoryProduct navigation={this.props.navigation} />
                    <BannerBar_THREE />
                    <TodayProduct navigation={this.props.navigation} />
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
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
        // console.log(this.props.navigation.navigate)
    }

    render() {
        return (
            <View style={styles.Appbar}>
                <Image
                    style={styles.LOGO}
                    source={require('../images/sj.png')}
                    resizeMethod='resize'
                ></Image>
                <TextInput style={styles.TextInput}
                    placeholder="ค้นหาสินค้า/ร้านค้า"
                    onChangeText={(text) => this.state({ text })}></TextInput>
                <IconAntDesign RightItem name="search1" size={25} style={{ marginTop: 5, }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartScreen')}>
                    <IconAntDesign RightItem name="shoppingcart" size={25} style={{ marginTop: 5, }} />
                </TouchableOpacity>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Toolbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')} >
                    <View >
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
                    <View >
                        <IconAntDesign name="tagso" size={25} />
                        <Text> Feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
                    <View >
                        <IconAntDesign name="notification" size={25} />
                        <Text>News</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
                    <View >
                        <IconAntDesign name="bells" size={25} />
                        <Text>เตือน</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')} >
                    <View>
                        <IconAntDesign name="user" size={25} />
                        <Text> ฉัน</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

///----------------------------------slide----------------------------------------///

export class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceSlide: [],
            activeSlide: 0,
        };
    }
    getDataSlide() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'slide'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSourceSlide: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDataSlide()
    }
    _renderItem = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/slide', item.image].join('/');
        return (
            <View style={styles.child} key={indexs}>
                <ImageBackground
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.childSlide}
                    resizeMethod='resize'
                />
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
                    carouselRef={this.activeSlide}
                    tappableDots={!!this.activeSlide}
                    // inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        return (
            <View>
                <Carousel
                    ref={c => this.activeSlide = c}
                    data={this.state.dataSourceSlide}
                    renderItem={this._renderItem}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    sliderHeight={height * 0.5}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.pagination}
            </View>
        );
    }
}

///----------------------------------Category----------------------------------------///

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcetype: [],
        };
    }
    getDatatype() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'type'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourcetype: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDatatype()
    }
    render() {
        let dataCategory = this.state.dataSourcetype.map((item, indexs) => {
            {/* console.log('Slide'+[indexs, item.image].join(' ')), */ }
            var dataMySQL = [ip + '/mysql/uploads/head_product/menu', item.image_menu].join('/');
            {/* console.log(dataMySQL); */ }
            return <View style={styles.Category} key={indexs}>
                <View style={styles.Category_box}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.Category_image}
                        resizeMethod='resize' >
                    </Image>
                </View>
                <Text style={styles.Text_Cate}>{item.name}</Text>
            </View>


        })
        return (
            <View style={styles.Box_Cata}>
                <ScrollView horizontal >
                    <View style={styles.category_A}>
                        {dataCategory}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

///----------------------------------Button_Bar----------------------------------------///

export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.Button_Bar} >
                <ScrollView horizontal>
                    <View style={styles.Button_Bar_Box}>
                        <Image style={styles.Button_Bar_icon}
                            source={{ uri: ip + '/MySQL/uploads/icon_brand/DEW1.png' }}
                            resizeMethod='resize'></Image>
                    </View>
                    <View style={styles.Button_Bar_Box}>
                        <Image style={styles.Button_Bar_icon}
                            source={{ uri: ip + '/MySQL/uploads/icon_brand/Fincoin2.png' }}
                            resizeMethod='resize'></Image>
                    </View>
                    <View style={styles.Button_Bar_Box}>
                        <Image style={styles.Button_Bar_icon}
                            source={{ uri: ip + '/MySQL/uploads/icon_brand/Campaign3.png' }}
                            resizeMethod='resize'></Image>
                    </View>
                    <View style={styles.Button_Bar_Box}>
                        <Image style={styles.Button_Bar_icon}
                            source={{ uri: ip + '/MySQL/uploads/icon_brand/Coupon4.png' }}
                            resizeMethod='resize'></Image>
                    </View>
                    <View style={styles.Button_Bar_Box}>
                        <Image style={styles.Button_Bar_icon}
                            source={{ uri: ip + '/MySQL/uploads/icon_brand/Payment5.png' }}
                            resizeMethod='resize'></Image>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

///----------------------------------Brand_RCM----------------------------------------///

export class Brand_RCM extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.Brand_RCM}>
                <View style={styles.Brand_RCMTextBox}>
                    <Text style={styles.Brand_RCMText}>
                        แบรนด์แนะนำ
                    </Text>
                    <Text style={styles.Brand_RCMTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    <View style={styles.Brand_RCM_Box}>
                        <View>
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>

                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                        <View >
                            <Image
                                style={styles.Brand_image_RCM}
                                source={{ uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png' }}
                                resizeMethod='resize'
                            ></Image>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

///----------------------------------Popular_product---------------------------------------///

export class Popular_product extends Component {

    render() {
        return (
            <View style={styles.Popular}>
                <View style={styles.PopularTextBox}>
                    <Text style={styles.PopularText}>
                        สินค้ายอดนิยม
                    </Text>
                </View>
                <View style={styles.Popular_Box_A}>
                    <ScrollView horizontal>
                        <View style={styles.Popular_Box_B}>
                            <View style={styles.Popular_Box_C}>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                            </View>
                            <View style={styles.PopularText_A} ><Text style={styles.Text_Popular}>สินค้าสุดฮิต</Text></View>
                        </View>
                        <View style={styles.Popular_Box_B}>
                            <View style={styles.Popular_Box_C}>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                            </View>
                            <View style={styles.PopularText_A} ><Text style={styles.Text_Popular}>สินค้าราคาโดน</Text></View>
                        </View>
                        <View style={styles.Popular_Box_B}>
                            <View style={styles.Popular_Box_C}>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                            </View>
                            <View style={styles.PopularText_A} ><Text style={styles.Text_Popular}>สินค้าราคาโดน</Text></View>
                        </View>
                        <View style={styles.Popular_Box_B}>
                            <View style={styles.Popular_Box_C}>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('../icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                            </View>
                            <View style={styles.PopularText_A} ><Text style={styles.Text_Popular}>สินค้าราคาโดน</Text></View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

///-------------------------------------------------------------------------------///

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

///-------------------------------------------------------------------------------///

export class BannerBar_TWO extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<View style={styles.Banner_Bar}>
            <Image
                style={styles.Banner_Bar_image}
                source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/GlassesBannerBar.jpg' }}
                resizeMethod='resize'
            ></Image>
        </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class BannerBar_THREE extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<View style={styles.Banner_Bar}>
            <Image
                style={styles.Banner_Bar_image}
                source={{ uri: ip + '/MySQL/uploads/slide/banner_sale.jpg' }}
                resizeMethod='resize'
            ></Image>
        </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }

    getFlashSale() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSale: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getFlashSale();
    }

    render() {
        let dataFlashSale = this.state.dataSale.map((item, indexs) => {
            // console.log('FlashSale')
            // console.log(item)
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={indexs}
                    onPress={
                        () => this.props.navigation.navigate(
                            'DetailScreen', {
                            id_item: item.id_product
                        })
                    }
                >
                    <View style={styles.FlashSaleBox}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.FlashSaleImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.FlashSaleImageName}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={
                                    styles.FlashSaleImagePrice
                                }>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={styles.FlashSale}>
                <View style={styles.FlashSaleTextBox}>
                    <Text style={styles.FlashSaleText}>
                        FLASH SALE
                    </Text>
                    <Text style={styles.FlashSaleTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    {dataFlashSale}
                </ScrollView>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class PromotionPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcebrand: [],
        };
    }
    getDatabrand() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'brand'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //console.log(getData.data);
            this.setState({
                dataSourcebrand: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDatabrand()
    }
    render() {
        let dataPromotionPopular = this.state.dataSourcebrand.map((item, indexs) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            // console.log(dataMySQL)
            return (
                // <TouchableOpacity key={indexs} onPress={() => this.props.navigation.navigate('StoreScreen', { item: item })}>
                <View style={styles.Promotion_popular_Box} key={indexs}>
                    <View style={styles.Promotion_popular_BoxA}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.Promotion_popular_image}
                            resizeMethod='resize'
                        ></Image>
                        <Text style={styles.Text_icon_Sale}>ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                </View>
                // </TouchableOpacity>
            )
        })
        return (
            <View style={styles.Promotion_popular}>
                <View style={styles.Promotion_popularTextBox}>
                    <Text style={styles.Promotion_popularText}>
                        โปรโมชั่นร้านค้ายอดนิยม
                    </Text>
                    <Text style={styles.Promotion_popularTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal >
                    <View style={styles.Promotion_popular_A}>
                        {dataPromotionPopular}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

///----------------------------------Confidential_PRO---------------------------------------///

export class Confidential_PRO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcebrand: [],
        };
    }
    getDatabrand() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'Confidential_PRO'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //console.log(getData.data);
            this.setState({
                dataSourcebrand: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDatabrand()
    }
    render() {
        let dataConfidential_PRO = this.state.dataSourcebrand.map((item, indexs) => {
            //console.log('PromotionPopular' + [indexs, item.image].join(' ')),
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <View style={styles.Confidential_Box} key={indexs}>
                    <View style={styles.Promotion_popular_BoxA}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.Confidential_image}
                            resizeMethod='resize'
                        ></Image>
                        <Text style={styles.Text_box_Confidential}>Gala Germs จัดโปรโมชั่นสำหรับผู้มียอดสั่งซื้อครบ 5,000 บาท </Text>
                    </View>
                </View>
            )
        })
        return (
            <View style={styles.Confidential}>
                <View style={styles.Promotion_popularTextBox}>
                    <Text style={styles.ConfidentialText}>
                        โปรลับ เฉพาะที่นี่ที่เดียว
                    </Text>
                    <Text style={styles.ConfidentialTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal >
                    <View style={styles.Confidential_A}>
                        {dataConfidential_PRO}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------Product_for_you ---------------------------------------///

export class Product_for_you extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceProductForYou: [],
        };
    }
    getSourceProductForYou() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'foryou'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //console.log(getData.data);
            this.setState({
                dataSourceProductForYou: getData.data
            })
        })
    }
    componentDidMount() {
        this.getSourceProductForYou();
    }
    render() {
        let dataProductForYou = this.state.dataSourceProductForYou.map((item, indexs) => {
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.ProductForYouBox} key={indexs}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.ProductForYouImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.ProductForYouImageName}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={
                                    styles.ProductForYouImagePrice
                                }>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.ProductForYou}>
                <View style={styles.ProductForYouTextBox}>
                    <Text style={styles.ProductForYouText}>
                        คัดเฉพาะสำหรับคุณ
                    </Text>
                    <Text style={styles.ProductForYouTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    <View style={styles.ProductForYouFlexBox}>
                        {dataProductForYou}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///-------------------------------------------------------------------------------///

export class SaleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }

    getSaleProduct() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSale: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getSaleProduct();
    }

    render() {
        let dataSaleProduct = this.state.dataSale.map((item, indexs) => {
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.SaleProductBox} key={indexs}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.SaleProductImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.SaleProductImageName}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={
                                    styles.SaleProductImagePrice
                                }>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.SaleProduct}>
                <View style={styles.SaleProductTextBox}>
                    <Text style={styles.SaleProductText}>
                        สินค้าลดราคา
                    </Text>
                    <Text style={styles.SaleProductTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    {dataSaleProduct}
                </ScrollView>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class NewStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataStore: [],
        };
    }

    getNewstore() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataStore: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getNewstore();
    }

    render() {
        let dataNewStore = this.state.dataStore.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={styles.NewStoreBox}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.NewStoreImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.NewStoreText_bar}>โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50% </Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.NewStore}>
                <View style={styles.NewStoreTextBox}>
                    <Text style={styles.NewStoreText}>
                        ร้านค้ามาใหม่
                    </Text>
                    <Text style={styles.NewStoreTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    {dataNewStore}
                </ScrollView>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNewProduct: [],
        };
    }

    getNewProduct() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataNewProduct: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getNewProduct();
    }

    render() {
        let dataNewProduct = this.state.dataNewProduct.map((item, indexs) => {
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.NewProductBox} >
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
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.NewProduct}>
                <View style={styles.NewProductTextBox}>
                    <Text style={styles.NewProductText}>
                        สินค้ามาใหม่
                    </Text>
                    <Text style={styles.NewProductTextEnd}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    {dataNewProduct}
                </ScrollView>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategory: [],
        }
    }

    getDataCategory() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'categorylist'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategory: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getDataCategory();
    }
    render() {
        let dataCategory = this.state.dataSourceCategory.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/head_product/catagory_Ten_Baner', item.image_head].join('/');
            return (
                <View style={styles.CategoryProduct} key={indexs}>
                    <View>
                        <View style={styles.CategoryProductTextBox}>
                            <Text style={styles.CategoryProductText}>
                                {item.name}
                            </Text>
                            <Text style={styles.CategoryProductTextEnd}>
                                ดูทั้งหมด
                            </Text>
                        </View>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.CategoryProductImageHead}
                            resizeMethod='resize'
                        />
                        <CategoryProductSubProduct navigation={this.props.navigation} name={item.name} />
                    </View>
                    <View>
                        <Image style={styles.Text_Bar_Image} source={{ uri: ip + '/MySQL/uploads/Text/storeFIN1.png' }}
                            resizeMethod='resize'></Image>
                        <CategoryProductSubStore navigation={this.props.navigation} />
                    </View>
                    <View>
                        <Image style={styles.Text_Bar_Image} source={{ uri: ip + '/MySQL/uploads/Text/beand.png' }}
                            resizeMethod='resize'></Image>
                        <CategoryProductSubBrand navigation={this.props.navigation} />
                    </View>
                    <View>
                        <Image style={styles.Text_Bar_Image} source={{ uri: ip + '/MySQL/uploads/Text/propro.png' }}
                            resizeMethod='resize'></Image>
                        <CategoryProductSubPromotion navigation={this.props.navigation} />
                    </View>
                </View>
            );
        })
        return (
            dataCategory
        )
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }

    getCategoryProductSubProduct() {
        // console.log( 'CategoryProductChild Process' )
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'categoryproduct',
            product: this.props.name
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategoryProduct: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getCategoryProductSubProduct()
    }

    render() {
        let dataCategoryProductSubProduct = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log( 'CategoryProductNo. ' + indexs + ' ' + item.image ),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.CategoryProductBox} key={indexs}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.CategoryProductImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.CategoryProductImageName}>
                            {item.name}
                        </Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={
                                    styles.CategoryProductImagePrice
                                }>
                                    {value}
                                </Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProductSubProduct}
                <View style={styles.RightItem} />
            </ScrollView>
        )
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }

    getCategoryProductSubStore() {
        // console.log( 'CategoryProductChild Process' )
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategoryProduct: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getCategoryProductSubStore()
    }

    render() {
        let dataCategoryProductSubStore = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log( 'CategoryProductNo. ' + indexs + ' ' + item.image ),
            var dataMySQL = [ip + '/MySQL/uploads/slide/Store_recommendFIN', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={styles.CategoryProductStoreBox} key={indexs}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.CategoryProductStoreImage}
                            resizeMethod='resize'
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProductSubStore}
                <View style={styles.RightItem} />
            </ScrollView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubBrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }

    getCategoryProductSubBrand() {
        // console.log( 'CategoryProductChild Process' )
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'brand'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategoryProduct: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getCategoryProductSubBrand()
    }

    render() {
        let dataCategoryProductSubBrand = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log(item)
            var dataMySQL = [ip + '/mysql/uploads/publish/popular_promotions', item.image].join('/');
            return (
                <View style={styles.CategoryProductSubBrandBox} key={indexs}>
                    <Image
                        source={{
                            uri: ip + '/mysql/uploads/slide/Icon_brand/brand24.png',
                        }}
                        style={styles.CategoryProductSubBrandImage}
                        resizeMethod='resize'
                    />
                </View>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProductSubBrand}
                <View style={styles.RightItem} />
            </ScrollView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }

    getCategoryProductSubPromotion() {
        // console.log( 'CategoryProductChild Process' )
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategoryProduct: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getCategoryProductSubPromotion()
    }

    render() {
        let dataCategoryProductSubPromotion = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log(item)
            var dataMySQL = [ip + '/MySQL/uploads/slide/Store_recommendFIN', item.image].join('/');
            return (
                <View style={styles.PromotionCategoryProductStoreBox} key={indexs}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.PromotionCategoryProductImage}
                        resizeMethod='resize'
                    ></Image>
                    <Text style={styles.PromotionCategoryProductImageIcon}>โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                </View>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProductSubPromotion}
                <View style={styles.RightItem} />
            </ScrollView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class TodayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceTodayProduct: [],
        };
    }

    getDataTodayProduct() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceTodayProduct: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getDataTodayProduct();
    }

    render() {
        let dataToday = this.state.dataSourceTodayProduct.map((item, indexs) => {
            // console.log( indexs + '. ' + item.image ),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.TodayProductBox} key={indexs}>
                        <Image
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.TodayProductImage}
                            resizeMethod='resize'
                        />
                        <Text style={styles.TodayProductImageName}>
                            {item.name}
                        </Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={
                                    styles.TodayProductImagePrice
                                }>
                                    {value}
                                </Text>
                            }
                        />
                        <View style={styles.TodayProductIconBox}>
                            <View style={styles.TodayProductIconBoxStar}>
                                <Icons style={styles.TodayProductIconStar} name='star' size={8} />
                                <Icons style={styles.TodayProductIconStar} name='star' size={8} />
                                <Icons style={styles.TodayProductIconStar} name='star' size={8} />
                                <Icons style={styles.TodayProductIconStar} name='star' size={8} />
                                <Icons style={styles.TodayProductIconStar} name='star' size={8} />
                            </View>
                            <View style={styles.TodayProductIconBoxI}>
                                <Icons style={styles.TodayProductIcon} name='heart' size={10} />
                                <Icons style={styles.TodayProductIcon} name='share' size={10} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={styles.TodayProduct}>
                <Text style={styles.TodayProductText}>
                    สินค้าคัดสรรเพื่อคุณ
                </Text>
                <View style={styles.TodayProductBoxProduct}>
                    {dataToday}
                </View>
            </View>
        )
    }
}

///-------------------------------------------------------------------------------///
