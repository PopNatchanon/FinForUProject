///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, BannerBar_TWO, ExitAppModule, Slide, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, ProductBox, SlideTab2, } from './tools/Tools';
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
        const { navigation } = this.props
        const { dataService, sliderVisible } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService || sliderVisible !== nextState.sliderVisible
        ) {
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
    render() {
        const { dataService, sliderVisible } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        const data = [{
            title: 'หมวดหมู่',
            subtitle: [{
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
        }, {
            title: 'แบรนด์',
            subtitle: [{
                name: 'BP world'
            }, {
                name: 'Tokyo boy'
            }, {
                name: 'JJ'
            }, {
                name: 'ETONWEAG'
            }]
        }]
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
                    <Button_Bar setSliderVisible={this.setSlider.bind(this)} />
                    {
                        dataService &&
                        <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' />
                    }
                </ScrollView>
                <ExitAppModule navigation={navigation} />
                <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
            </SafeAreaView>
        );
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
        const { navigation } = this.props
        const { dataService } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
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
                            resizeMode={FastImage.resizeMode.stretch} />
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
        const { navigation } = this.props
        const { dataService } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { navigation } = this.props
        const { dataService } = this.state
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
                            pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15} />
                    }
                </ScrollView>
            </View>
        );
    }
}