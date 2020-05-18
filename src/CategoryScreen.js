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
import { GetServices, ProductBox, SlideTab2, LoadingScreen, NavigationNavigateScreen, FlatProduct, } from './customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            dataService: [],
            filterValue: {},
            sliderVisible: false,
        };
    };
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService });
    };
    setStatefilterValue = (value) => {
        console.log(value);
        const { filterValue, } = this.state;
        console.log(filterValue);
        filterValue.minvalue = (value && value.minvalue ? value.minvalue : '');
        filterValue.maxvalue = (value && value.maxvalue ? value.maxvalue : '');
        console.log(filterValue);
        this.setState({ activeGetServices: true, filterValue, sliderVisible: false });
    };
    setStateMainfilterValue = (value) => {
        const { filterValue, } = this.state;
        filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
        filterValue.sort_by = value.selectedIndex == 3 ? value.actionReturn : '';
        console.log(filterValue);
        this.setState({ activeGetServices: true, filterValue });
    };
    setSlider = (sliderVisible) => {
        this.setState({ sliderVisible });
    };
    render() {
        const { navigation } = this.props;
        const { activeGetServices, dataService, filterValue, sliderVisible } = this.state;
        const id_type = navigation.getParam('id_type');
        var uri = `${finip}/category/category_mobile`;
        var dataBody = {
            category_number: id_type,
            sort_by: filterValue && filterValue.sort_by ? filterValue.sort_by : '',
            min_price: filterValue && filterValue.minvalue ? Number(filterValue.minvalue) : '',
            max_price: filterValue && filterValue.maxvalue ? Number(filterValue.maxvalue) : '',
            lastest: filterValue && filterValue.lastest ? filterValue.lastest : '',
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
        }];
        activeGetServices == true &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), });
        return (
            <SafeAreaView style={[stylesMain.SafeAreaView]}>
                {
                    activeGetServices == true &&
                    <LoadingScreen key={'LoadingScreen'} />
                }
                <AppBar leftBar='backarrow' navigation={navigation} />
                <ScrollView stickyHeaderIndices={[5]}>
                    <Slide banner={dataService.banner} />
                    <Recommend_Store navigation={navigation} recommend={dataService.recommend} />
                    <Product_Brand navigation={navigation} loadData={dataService.product_popular_brand} />
                    <BannerBar_TWO />
                    <View style={{ marginBottom: 10 }}></View>
                    <Button_Bar filterValue={this.setStateMainfilterValue.bind(this)} setSliderVisible={this.setSlider.bind(this)} />
                    {
                        dataService &&
                        <TodayProduct noTitle navigation={navigation} loadData={dataService.product} />
                    }
                </ScrollView>
                <ExitAppModule navigation={navigation} />
                <SlideTab2 data={data} filterValue={this.setStatefilterValue.bind(this)} sliderVisible={sliderVisible}
                    setStateSliderVisible={this.setSlider.bind(this)} />
            </SafeAreaView>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Recommend_Store
export class Recommend_Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
    };
    get dataPromotionPopular() {
        const { navigation, recommend } = this.props;
        return recommend &&
            recommend.map((item, index) => {
                var dataMySQL = `${finip}/${item.image_path}/${item.image}`;
                return (
                    <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Recommend_Store', navigation })} key={index}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxStore1Image}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                );
            });
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าที่แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({ goScreen: 'Recommend_Store', navigation })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View style={[stylesMain.FlexRow, { height: 'auto', aspectRatio: 4, justifyContent: 'space-between' }]}>
                    {this.dataPromotionPopular}
                </View>
            </View>
        );
    };
};
///----------------------------------------------------------------------------------------------->>>> Product_Brand
export class Product_Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const { loadData, navigation, } = this.props;
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        สินค้าแบรนด์ดัง
                    </Text>
                </View>
                {
                    product_hit &&
                    <FlatProduct navigation={navigation} dataService={product_hit} NumberOfcolumn={1} radiusBox={5}
                        nameFlatProduct='Product_Brand' custumNavigation='DetailScreen' mode='row3' nameSize={14} priceSize={15}
                        dispriceSize={15} />
                }
            </View>
        );
    };
};