///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, BannerBar_TWO, ExitAppModule, Slide, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, ProductBox, SlideTab2, LoadingScreen, NavigationNavigateScreen, FlatProduct, } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData,
    getFetchData: state.singleFetchDataFromService,
    activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({
    checkCustomer,
    fetchData,
    multiFetchData,
    setActiveFetch,
    setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)
function CategoryScreen(props) {
    const { route } = props;
    const id_type = route.params?.id_type;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [filterValue, setFilterValue] = useState({});
    const [sliderVisible, setSliderVisible] = useState(false);
    var uri = `${finip}/category/category_mobile`;
    var dataBody = {
        category_number: id_type,
        sort_by: filterValue && filterValue.sort_by ? filterValue.sort_by : '',
        min_price: filterValue && filterValue.minvalue ? Number(filterValue.minvalue) : '',
        max_price: filterValue && filterValue.maxvalue ? Number(filterValue.maxvalue) : '',
        lastest: filterValue && filterValue.lastest ? filterValue.lastest : '',
    };
    useEffect(() => {
        activeGetServices &&
            GetServices({
                uriPointer: uri, dataBody, getDataSource: value => {
                    setActiveGetServices(false);
                    setDataService(value);
                },
            });
    }, [activeGetServices]);
    let setStatefilterValue = (value) => {
        filterValue.minvalue = value.minvalue ?? '';
        filterValue.maxvalue = value.maxvalue ?? '';
        setActiveGetServices(true);
        setFilterValue(filterValue);
        setSliderVisible(false);
    };
    let setStateMainfilterValue = (value) => {
        filterValue.lastest = value == 2 ? 'lastest' : '';
        filterValue.sort_by = value == 3 ? value.actionReturn : '';
        setActiveGetServices(true);
        setFilterValue(filterValue);
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
    return (
        <SafeAreaView style={[stylesMain.SafeAreaView]}>
            {
                activeGetServices == true &&
                <LoadingScreen key={'LoadingScreen'} />
            }
            <AppBar {...props} backArrow cartBar />
            <ScrollView stickyHeaderIndices={[5]}>
                <Slide {...props} banner={dataService?.banner} />
                <Recommend_Store {...props} recommend={dataService?.recommend} />
                <Product_Brand {...props} loadData={dataService?.product_popular_brand} />
                <BannerBar_TWO />
                <View style={{ marginBottom: 2 }}></View>
                <Button_Bar filterValue={value => setStateMainfilterValue(value)} setSliderVisible={value => setSliderVisible(value)} />
                <TodayProduct {...props} noTitle loadData={dataService?.product} />
            </ScrollView>
            <ExitAppModule {...props} />
            <SlideTab2 data={data} filterValue={value => setStatefilterValue(value)} sliderVisible={sliderVisible}
                setStateSliderVisible={value => setSliderVisible(value)} />
        </SafeAreaView>
    );
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
        const { loadData, } = this.props;
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        สินค้าแบรนด์ดัง
                    </Text>
                </View>
                {
                    loadData && loadData.product_hit &&
                    <FlatProduct {...this.props} dataService={loadData.product_hit} numberOfColumn={1} radiusBox={5}
                        nameFlatProduct='Product_Brand' custumNavigation='DetailScreen' mode='row3' nameSize={14} priceSize={15}
                        dispriceSize={15} />
                }
            </View>
        );
    };
};