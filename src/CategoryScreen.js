import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { AppBar, Slide, BannerBar_TWO, TodayProduct, } from './MainScreen';
import { finip, ip } from '../navigator/IpConfig';
// import styles from '../style/stylePromotion-src/styleDealScreen';
import styles from '../style/StylesMainScreen';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { Button_Bar } from './ExclusiveScreen';

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={[styles.SafeAreaView, { backgroundColor: '#E9E9E9' }]}>
                <AppBar leftBar='backarrow' navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <Recommend_Store  navigation={this.props.navigation} />
                    <Product_Brand navigation={this.props.navigation} />
                    <BannerBar_TWO />
                    <Button_Bar />
                    <TodayProduct noTitle navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Recommend_Store extends Component {
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
            return (
                <View key={indexs} >
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={{ height: 100, width: 180, marginLeft: 10, marginVertical: 10, }}
                    />
                </View>
            )
        })
        return (
            <View style={{ width: '100%', height: 'auto', backgroundColor: '#FFFFFF', marginTop: 10, }}>
                <Text style={styles.Brand_RCMText}>ร้านค้าที่แนะนำ</Text>
                <ScrollView horizontal>
                        <View style={{ flexDirection: 'row', }}>
                            {dataPromotionPopular}
                        </View>
                </ScrollView>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Product_Brand extends Component {
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
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={styles.NewProductBox} >
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.NewProductImage}

                        />
                        <Text style={[styles.NewProductImageName, { fontFamily: 'SukhumvitSet-Text', }]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[styles.NewProductImagePrice, { fontFamily: 'SukhumvitSet-Text', }]}>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.NewProduct}>
                <View style={styles.Brand_RCMTextBox}>
                    <Text style={styles.Brand_RCMText}>
                        สินค้าแบรนด์ดัง
                    </Text>
                </View>
                <ScrollView horizontal>
                    {dataNewProduct}
                </ScrollView>
            </View>
        );
    }
}