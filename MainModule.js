import React, { Component } from 'react';
import {
    Image,
    View,
    ScrollView,
    Text,
    TextInput,
} from 'react-native';
//import { styles } from 'mystyles';

import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';

import styles from './Styles'

const ip = 'http://192.168.1.34';

///----------------------------------Appbar----------------------------------------///

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
                <Image
                    style={styles.LOGO}
                    source={require('./images/sj.png')}
                    resizeMethod='resize'
                ></Image>
                <TextInput style={styles.TextInput}
                    placeholder="ค้นหาสินค้า/ร้านค้า"
                    onChangeText={(text) => this.state({ text })}></TextInput>
                <Icons RightItem name="search" size={20} style={{ marginTop: 5, }} />
                <Icons RightItem name="shopping-cart" size={20} style={{ marginTop: 5, }} />
            </View>
        );
    }
}

export class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Toolbar}>
                <Icons name="home" size={25} />
                <Icons name="tags" size={25} />
                <Icons name="layer-group" size={25} />
                <Icons name="bell" size={25} />
                <Icons name="user-alt" size={25} />
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
        };
    }
    getDataSlide() {
        var url = ip + '/mysql/DataService.php?type=slide';
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
                this.setState({
                    dataSourceSlide: getData.data,
                })
            })
    }
    componentDidMount() {
        this.getDataSlide()
    }

    render() {
        let dataSlide = this.state.dataSourceSlide.map((item, indexs) => {
            // console.log('Slide'+[indexs, item.image].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads/slide/slide', item.image].join('/');
            return <View style={styles.child} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.childSlide}
                    resizeMethod='resize'
                />
            </View>;
        })
        return (
            <View>
                <SwiperFlatList
                    // autoplay
                    // autoplayDelay={3}
                    // autoplayLoop
                    showPagination
                >
                    {dataSlide}
                </SwiperFlatList>
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
        var url = ip + '/MySQL/DataService.php?type=type';
        axios.get(url)
            .then((getData) => {
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
    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
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
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
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
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
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
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
                                    <Image
                                        style={styles.Popular_image_Box}
                                        source={{ uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg' }}
                                        resizeMethod='resize'
                                    ></Image>
                                </View>
                                <View style={styles.Popular_Box_D}>
                                    <Image style={styles.Image_icon_top} source={require('./icon/top.png')}></Image>
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

        );
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
        var url = ip + '/mysql/DataService.php?type=sale';
        axios.get(url)
            .then((getData) => {
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
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return (
                <View style={styles.FlashSaleBox} key={indexs}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.FlashSaleImage}
                        resizeMethod='resize'
                    />
                    <Text style={styles.FlashSaleImageName}>{item.name}</Text>
                    <NumberFormat
                        value={item.sale_price}
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
                    <View style={styles.FlashSaleIconBox}>
                        <View style={styles.FlashSaleIconBoxStar}>
                            <Icons style={styles.FlashSaleIconStar} name='star' size={8} color='yellow' />
                            <Icons style={styles.FlashSaleIconStar} name='star' size={8} />
                            <Icons style={styles.FlashSaleIconStar} name='star' size={8} />
                            <Icons style={styles.FlashSaleIconStar} name='star' size={8} />
                            <Icons style={styles.FlashSaleIconStar} name='star' size={8} />
                        </View>
                        <View style={styles.FlashSaleIconBoxI}>
                            <Icons style={styles.FlashSaleIcon} name='heart' size={10} />
                            <Icons style={styles.FlashSaleIcon} name='share' size={10} />
                        </View>
                    </View>
                </View>
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
        var url = ip + '/MySQL/DataService.php?type=brand';
        axios.get(url)
            .then((getData) => {
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
            //console.log('PromotionPopular' + [indexs, item.image].join(' ')),
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return <View style={styles.Promotion_popular_Box} key={indexs}>
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
        var url = ip + '/MySQL/DataService.php?type=brand';
        axios.get(url)
            .then((getData) => {
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
            return <View style={styles.Confidential_Box} key={indexs}>
                <View style={styles.Promotion_popular_BoxA}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.Confidential_image}
                        resizeMethod='resize'
                    ></Image>
                    <Text style={styles.Text_box_Confidential}>Gala Germs จัดโปรโมชั่นสำหรับผู้มียอดสั่งซื้อครบ 5,000 บาท</Text>
                </View>
            </View>
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
        var url = ip + '/MySQL/DataService.php?type=foryou';
        axios.get(url)
            .then((getData) => {
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
            return <View style={styles.ProductForYouBox} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.ProductForYouImage}
                    resizeMethod='resize'
                />
                <Text style={styles.ProductForYouImageName}>{item.name}</Text>
                <NumberFormat
                    value={item.sale_price}
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
                <View style={styles.ProductForYouIconBox}>
                    <View style={styles.ProductForYouIconBoxStar}>
                        <Icons style={styles.ProductForYouIconStar} name='star' size={8} />
                        <Icons style={styles.ProductForYouIconStar} name='star' size={8} />
                        <Icons style={styles.ProductForYouIconStar} name='star' size={8} />
                        <Icons style={styles.ProductForYouIconStar} name='star' size={8} />
                        <Icons style={styles.ProductForYouIconStar} name='star' size={8} />
                    </View>
                    <View style={styles.ProductForYouIconBoxI}>
                        <Icons style={styles.ProductForYouIcon} name='heart' size={10} />
                        <Icons style={styles.ProductForYouIcon} name='share' size={10} />
                    </View>
                </View>
            </View>;
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
        var url = ip + '/mysql/DataService.php?type=sale';
        axios.get(url)
            .then((getData) => {
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
            return <View style={styles.SaleProductBox} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.SaleProductImage}
                    resizeMethod='resize'
                />
                <Text style={styles.SaleProductImageName}>{item.name}</Text>
                <NumberFormat
                    value={item.sale_price}
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
                <View style={styles.SaleProductIconBox}>
                    <View style={styles.SaleProductIconBoxStar}>
                        <Icons style={styles.SaleProductIconStar} name='star' size={8} />
                        <Icons style={styles.SaleProductIconStar} name='star' size={8} />
                        <Icons style={styles.SaleProductIconStar} name='star' size={8} />
                        <Icons style={styles.SaleProductIconStar} name='star' size={8} />
                        <Icons style={styles.SaleProductIconStar} name='star' size={8} />
                    </View>
                    <View style={styles.SaleProductIconBoxI}>
                        <Icons style={styles.SaleProductIcon} name='heart' size={10} />
                        <Icons style={styles.SaleProductIcon} name='share' size={10} />
                    </View>
                </View>
            </View>;
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
        var url = ip + '/mysql/DataService.php?type=store';
        axios.get(url)
            .then((getData) => {
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
            return <View style={styles.NewStoreBox} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.NewStoreImage}
                    resizeMethod='resize'
                />
                <Text style={styles.NewStoreText_bar}>โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50% </Text>
            </View>;
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
        var url = ip + '/mysql/DataService.php?type=product';
        axios.get(url)
            .then((getData) => {
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
                    value={item.sale_price}
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
        var url = ip + '/mysql/DataService.php?type=categorylist';
        axios.get(url)
            .then((getData) => {
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
            var dataMySQL = [ip + '/mysql/uploads/head_product', item.image_head].join('/');
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
                        <CategoryProductSubProduct name={item.name} />
                    </View>
                    <View>
                        <Image style={styles.Text_Bar_Image} source={{ uri: ip + '/MySQL/uploads/Text/storeFIN1.png' }}
                            resizeMethod='resize'></Image>
                        <CategoryProductSubStore />
                    </View>
                    <View>
                        <Image style={styles.Text_Bar_Image} source={{ uri: ip + '/MySQL/uploads/Text/beand.png' }}
                            resizeMethod='resize'></Image>
                        <CategoryProductSubBrand />
                    </View>
                    <View>
                    <Image style={styles.Text_Bar_Image} source={{ uri: ip + '/MySQL/uploads/Text/propro.png' }}
                                        resizeMethod='resize'></Image>
                        <CategoryProductSubPromotion />
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
        var url = ip + '/mysql/DataService.php?type=categoryproduct&product=' + this.props.name;
        axios.get(url)
            .then((getData) => {
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
                    <View style={styles.CategoryProductIconBox}>
                        <View style={styles.CategoryProductIconBoxStar}>
                            <Icons style={styles.CategoryProductIconStar} name='star' size={8} />
                            <Icons style={styles.CategoryProductIconStar} name='star' size={8} />
                            <Icons style={styles.CategoryProductIconStar} name='star' size={8} />
                            <Icons style={styles.CategoryProductIconStar} name='star' size={8} />
                            <Icons style={styles.CategoryProductIconStar} name='star' size={8} />
                        </View>
                        <View style={styles.CategoryProductIconBoxI}>
                            <Icons style={styles.CategoryProductIcon} name='heart' size={10} />
                            <Icons style={styles.CategoryProductIcon} name='share' size={10} />
                        </View>
                    </View>
                </View>
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
        var url = ip + '/mysql/DataService.php?type=store';
        axios.get(url)
            .then((getData) => {
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
                <View style={styles.CategoryProductStoreBox} key={indexs}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.CategoryProductStoreImage}
                        resizeMethod='resize'
                    />
                </View>
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
        var url = ip + '/mysql/DataService.php?type=brand';
        axios.get(url)
            .then((getData) => {
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
        var url = ip + '/mysql/DataService.php?type=store';
        axios.get(url)
            .then((getData) => {
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
        var url = ip + '/mysql/DataService.php?type=todayproduct';
        axios.get(url)
            .then((getData) => {
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
