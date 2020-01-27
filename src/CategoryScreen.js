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
import stylesMain from '../style/StylesMainScreen';
import styleTopic from '../style/styleTopic';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { Button_Bar } from './ExclusiveScreen';
import stylesFont from '../style/stylesFont';

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView, { backgroundColor: '#E9E9E9' }]}>
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
                <View style={styleTopic.Recommend_Store_Boximage} key={indexs} >
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styleTopic.Image}
                    />
                </View>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesMain.FrameBackgroundTextStart,stylesFont.FontFamilyBold,stylesFont.FontSize1]}>ร้านค้าที่แนะนำ</Text>
                <ScrollView horizontal>
                        <View style={stylesMain.FlexRow}>
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
                    <View style={stylesMain.BoxProduct1Box} >
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}

                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart,stylesFont.FontFamilyBold,stylesFont.FontSize1]}>
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