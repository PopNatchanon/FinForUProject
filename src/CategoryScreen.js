///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
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
export default class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderVisible: false,
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { dataService, sliderVisible } = this.state
        const { navigation } = this.props
        if (dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
            this.setState({ dataService })
    }
    setSlider = (sliderVisible) => {
            this.setState({ sliderVisible })
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <AppBar leftBar='backarrow' navigation={navigation} />
                <ScrollView stickyHeaderIndices={[5]}>
                    <Slide />
                    <Recommend_Store navigation={navigation} />
                    <Product_Brand navigation={navigation} />
                    <BannerBar_TWO />
                    <View style={{ marginBottom: 10 }}></View>
                    <Button_Bar setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
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
                    changeVisibilityCallback={this.setStateSliderVisible.bind(this)}
                >
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this.setStateSliderVisible.bind(this)}
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
export class SlideTabGet extends React.Component {
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
export class Recommend_Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
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
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        navigation.navigate(value, value2)
    }
    get dataPromotionPopular() {
        const { dataService } = this.state
        return dataService.map((item, index) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')} key={index}>
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าที่แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'Recommend_Store')}>
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
export class Product_Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
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
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        สินค้าแบรนด์ดัง
                    </Text>
                </View>
                <ScrollView horizontal>
                    {
                        dataService &&
                        <ProductBox dataService={dataService} navigation={navigation} typeip='ip' mode='row3col1' prepath='mysql'
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                        />
                    }
                </ScrollView>
            </View>
        );
    }
}