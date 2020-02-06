import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { AppBar, Slide, BannerBar_TWO, TodayProduct, } from './MainScreen';
import { finip, ip } from '../navigator/IpConfig';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import stylesTopic from '../style/styleTopic';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
import { Button_Bar, SlideTab, PricesSlide } from './ExclusiveScreen';

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderVisible: false,
        };
        this.setSlider = this.setSlider.bind(this)
    }
    setSlider(value) {
        this.setState({ sliderVisible: value })
    }
    render() {
        const { sliderVisible } = this.state
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView]}>
                <AppBar leftBar='backarrow' navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <Recommend_Store navigation={this.props.navigation} />
                    <Product_Brand navigation={this.props.navigation} />
                    <BannerBar_TWO />
                    <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
                    <TodayProduct noTitle navigation={this.props.navigation} />
                </ScrollView>
                <SlidingView
                    disableDrag
                    componentVisible={sliderVisible}
                    containerStyle={{
                        backgroundColor: null,
                        justifyContent: 'center',
                        alignContent: 'stretch',
                        width: '100%'
                    }}
                    position="right"
                    changeVisibilityCallback={() => this.setState({ sliderVisible: !sliderVisible })}
                >
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this.setState({ sliderVisible: !sliderVisible })}
                        >
                            <View style={stylesTopic.BackgroundLeft}></View>
                        </TouchableOpacity>
                        <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNoBackground]}>
                            <View style={{ height: '90%' }}>
                                <ScrollView>
                                    <SlideTabGet />
                                </ScrollView>
                            </View>
                            <View style={[stylesMain.FlexRow, stylesMain.SafeAreaViewNoBackground, { marginTop: 8 }]}>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                                        รีเซ็ต</Text>
                                </View>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize4, stylesFont.FontFamilyText, { color: '#fff' }]}>
                                        เสร็จสิ้น</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SlidingView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class SlideTabGet extends Component {
    render() {
        const item = [{
            name: 'กระเป๋าสะพายข้าง'
        }, {
            name: 'กระเป๋าสะพายหลัง'
        }, {
            name: 'กระเป๋าสตางค์'
        }, {
            name: 'กระเป๋าใส่นามบัตร'
        }, {
            name: 'กระเป๋าใส่เหรียญ'
        }, {
            name: 'กระเป๋าถือ'
        }, {
            name: 'อื่นๆ'
        }]
        const item2 = [{
            name: 'BP world'
        }, {
            name: 'Tokyo boy'
        }, {
            name: 'JJ'
        }, {
            name: 'ETONWEAG'
        }]
        return (
            <View>
                <View style={{ width: '100%' }}>
                    <SlideTab Title='หมวดหมู่' item={item} />
                    <SlideTab Title='แบรนด์' item={item2} />
                    <PricesSlide />
                </View>
            </View >
        )
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
                <View style={stylesTopic.Recommend_Store_Boximage} key={indexs} >
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesTopic.Image}
                    />
                </View>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize2]}>ร้านค้าที่แนะนำ</Text>
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
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
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
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
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