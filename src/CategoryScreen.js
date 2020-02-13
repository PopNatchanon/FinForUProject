///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, Slide, BannerBar_TWO, TodayProduct, } from './MainScreen';
import { Button_Bar, SlideTab, PricesSlide } from './ExclusiveScreen';
import { GetServices } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
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
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#0A55A6' }]}>
                                        รีเซ็ต</Text>
                                </View>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#fff' }]}>
                                        เสร็จสิ้น</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SlidingView>
            </SafeAreaView >
        );
    }
}

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
export class Recommend_Store extends Component {
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
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'brand2'
        };
        let dataPromotionPopular = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Recommend_Store') }}>
                    <View style={stylesMain.BoxStore1Box} key={indexs} >
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore1Image}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าที่แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Store')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesMain.FlexRow}>
                    {dataPromotionPopular}
                </View>
            </View >
        );
    }
}

///--------------------------------------------------------------------------///

export class Product_Brand extends Component {
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
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        let dataNewProduct = this.state.dataService.map((item, indexs) => {
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', {
                    id_item: item.id_product
                })}>
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
                                <NumberFormat
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
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground} >
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
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