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

const ip = 'http://192.168.0.131';

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
            dataMySQL = [ip + '/mysql/uploads/slide', item.image].join('/');
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
            dataMySQL = [ip + '/mysql/uploads/head_product/menu', item.image_menu].join('/');
            {/* console.log(dataMySQL); */ }
            return <View style={styles.Category} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.Category_box}
                    resizeMethod='resize' >
                </Image>
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
                <Text style={{ fontWeight: 'bold', fontSize: 16, }}>แบรนด์แนะนำ</Text>
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
                <View><Text style={styles.Text_All}>สินค้ายอดนิยม</Text></View>
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
                            <Text style={styles.Text_Popular}>สินค้าสุดฮิต</Text>
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
                            <Text style={styles.Text_Popular}>สินค้าราคาโดน</Text>
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
                            <Text style={styles.Text_Popular}>สินค้าราคาโดน</Text>
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
                            <Text style={styles.Text_Popular}>สินค้าราคาโดน</Text>
                        </View>
                    </ScrollView>
                </View>
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
            dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return <View style={styles.Promotion_popular_Box} key={indexs}>
                <View style={styles.Promotion_popular_BoxA}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.Promotion_popular_image}
                        resizeMethod='resize'
                    ></Image>
                    <Image style={styles.Image_icon_Sale} source={require('./icon/Sale.png')} resizeMethod='resize'></Image>
                    
                </View>
            </View>
        })
        return (
            <View style={styles.Promotion_popular}>
                <View ><Text style={styles.Text_All}>โปรโมชั่นร้านค้ายอดนิยม</Text></View>
                <ScrollView horizontal >
                    <View style={styles.Promotion_popular_A}>
                        {dataPromotionPopular}
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
            dataSourceforyou: [],
        };
    }
    getSourceforyou() {
        var url = ip + '/MySQL/DataService.php?type=foryou';
        axios.get(url)
            .then((getData) => {
                //console.log(getData.data);
                this.setState({
                    dataSourceforyou: getData.data
                })
            })
    }
    componentDidMount() {
        this.getSourceforyou();
    }
    render() {
        let dataProduct_for_you = this.state.dataSourceforyou.map((item, indexs) => {
            //console.log('Product_for_you' + [indexs, item.image].join(' ')),
            dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return <View style={styles.foryouProduct_box} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.foryouProduct_image}
                    resizeMethod='resize'
                />
                <Text>{item.name}</Text>            
            </View>
        })
        return (
            <View style={styles.foryouProduct}>
                <Text style={styles.foryouProduct_A}>คัดเฉพาะสำหรับคุณ</Text>
                <ScrollView style={styles.foryouProduct_A} horizontal>
                    <View style={styles.category_A}>
                        {dataProduct_for_you}
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
            dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return <View style={styles.viewSale} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.ImageSale}
                    resizeMethod='resize'
                />
                <Text>{item.name}</Text>
                <NumberFormat
                    value={item.sale_price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'฿'}
                    renderText={
                        value => <Text style={
                            styles.TodayProductImagePrice
                        }>
                            {value}
                        </Text>}
                />

            </View>;
        })
        return (
            <View style={styles.SaleProduct}>
                <Text style={styles.SaleProductText}>
                    สินค้าลดราคา
              </Text>
                <ScrollView style={styles.scrollSale} horizontal>
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
            dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return <View style={styles.viewStore} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.ImageStore}
                    resizeMethod='resize'
                />
                <Text>{item.name}</Text>
            </View>;
        })
        return (
            <View style={styles.Newstore}>
                <Text style={styles.New_storeText}>
                    ร้านค้ามาใหม่
                </Text>
                <ScrollView style={styles.scrollStore} horizontal>
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
            datanawProduct: [],
        };
    }

    getNewproduct() {
        var url = ip + '/mysql/DataService.php?type=product';
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
                this.setState({
                    datanawProduct: getData.data,
                })
            })
    }

    componentDidMount() {
        this.getNewproduct();
    }

    render() {
        let dataNewProduct = this.state.datanawProduct.map((item, indexs) => {
            //   console.log('Store' + [ indexs, item.image ].join(' ')),
            dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
            return <View style={styles.viewproduct} key={indexs}>
                <Image
                    source={{
                        uri: dataMySQL,
                    }}
                    style={styles.Imageproduct}
                    resizeMethod='resize'
                />
                <Text>{item.name}</Text>
            </View>
        })
        return (
            <View style={styles.New_Product}>
                <Text style={styles.New_productText}>
                    สินค้ามาใหม่
                </Text>
                <ScrollView style={styles.scrollproduct} horizontal>
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
            dataSourceCategoryProduct: [],
        }
    }

    getDataCategoryList() {
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
        this.getDataCategoryList();
    }

    render() {
        let dataCategory = this.state.dataSourceCategory.map((item, indexs) => {
            // console.log( 'CategoryNo. ' + indexs + ' ' + item.name + 'name. ' + item.image_head ); 
            dataMySQL = [ip + '/mysql/uploads/head_product', item.image_head].join('/');
            return (
                <View style={styles.TodayProduct} key={indexs}>
                    <View>
                        <Text style={styles.TodayProductText}>
                            {item.name}
                        </Text>
                        <CategoryProductChild name={item.name} />
                    </View>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.BrannerCategoryImage}
                        resizeMethod='resize'
                    />
                </View>
            );
        })
        return (
            dataCategory
        )
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }

    getDataCategoryProductChild() {
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
        this.getDataCategoryProductChild()
    }

    render() {
        let dataCategoryProduct = this.state.dataSourceCategoryProduct.map((item2, indexs2) => {
            // console.log( 'CategoryProductNo. ' + indexs2 + ' ' + item2.image ),
            dataMySQL = [ip + '/mysql/uploads', item2.image].join('/');
            return (
                <View style={styles.TodayProductBox} key={indexs2}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.TodayProductImage}
                        resizeMethod='resize'
                    />
                    <Text style={styles.TodayProductImageName}>
                        {item2.name}
                    </Text>
                    <NumberFormat
                        value={item2.full_price}
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
                            <Icons style={styles.TodayProductIconStar} name='star' size={10} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={10} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={10} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={10} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={10} />
                        </View>
                        <View style={styles.TodayProductIconBoxI}>
                            <Icons style={styles.TodayProductIcon} name='heart' size={15} />
                            <Icons style={styles.TodayProductIcon} name='share' size={15} />
                        </View>
                    </View>
                </View>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProduct}
                <View style={styles.RightItem} />
            </ScrollView>
        )
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
            dataMySQL = [ip + '/mysql/uploads', item.image].join('/');
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
                            <Icons style={styles.TodayProductIconStar} name='star' size={12} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={12} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={12} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={12} />
                            <Icons style={styles.TodayProductIconStar} name='star' size={12} />
                        </View>
                        <View style={styles.TodayProductIconBoxI}>
                            <Icons style={styles.TodayProductIcon} name='heart' size={17} />
                            <Icons style={styles.TodayProductIcon} name='share' size={17} />
                        </View>
                    </View>
                </View>
            );
        })
        return (
            <View style={styles.TodayProduct}>
                <Text style={styles.TodayProductText}>
                    สินค้าประจำวัน
                </Text>
                {dataToday}
            </View>
        )
    }
}

///-------------------------------------------------------------------------------///
