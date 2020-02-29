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
import { AppBar, Slide, BannerBar_TWO, TodayProduct, ExitAppModule, } from './MainScreen';
import { Button_Bar, SlideTab, PricesSlide, } from './ExclusiveScreen';
import { GetServices, ProductBox, } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CategoryScreen extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            sliderVisible: false,
            dataService: [],
        };
        this.setSlider = this.setSlider.bind(this)
        this.getData = this.getData.bind(this)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, sliderVisible } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    getData = (dataService) => {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ dataService })
        }
    }
    setSlider = (sliderVisible) => {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ sliderVisible })
        }
    }
    setStateSliderVisible = () => {
        const { sliderVisible } = this.state
        this.setState({ sliderVisible: !sliderVisible })
    }
    render() {
        const { dataService, sliderVisible } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <AppBar leftBar='backarrow' navigation={navigation} />
                <ScrollView stickyHeaderIndices={[5]}>
                    <Slide />
                    <Recommend_Store navigation={navigation} />
                    <Product_Brand navigation={navigation} />
                    <BannerBar_TWO />
                    <View style={{ marginBottom: 10 }}></View>
                    <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
                    {
                        dataService &&
                        <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' />
                    }
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
                    changeVisibilityCallback={this.setStateSliderVisible}
                >
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this.setStateSliderVisible}
                        >
                            <View style={stylesTopic.BackgroundLeft}></View>
                        </TouchableOpacity>
                        <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNB]}>
                            <View>
                                <ScrollView>
                                    <SlideTabGet />
                                </ScrollView>
                                <View style={[stylesMain.FlexRow, { height: 70 }]}>
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
                    </View>
                </SlidingView>
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> SlideTabGet
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
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Recommend_Store
export class Recommend_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    navigationNavigateScreen = () => {
        const { navigation } = this.props
        navigation.navigate('Recommend_Store')
    }
    get dataPromotionPopular() {
        const { dataService } = this.state
        return dataService.map((item, index) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity onPress={this.navigationNavigateScreen} key={index}>
                    <View style={stylesMain.BoxStore1Box}>
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
    }
    render() {
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'brand2'
        };
        return (
            <View style={stylesMain.FrameBackground}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าที่แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesMain.FlexRow}>
                    {this.dataPromotionPopular}
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_Brand
export class Product_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <View style={stylesMain.FrameBackground}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        สินค้าแบรนด์ดัง
                    </Text>
                </View>
                <ScrollView horizontal>
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row3col1' prepath='mysql'
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                            /> :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}