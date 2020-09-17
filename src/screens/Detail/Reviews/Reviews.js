///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
import stylesDetail from '../../../style/StylesDetailScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TabBar, LoadingScreen, GetServices } from '../../../customComponents/Tools';
import { StarReview, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
function Reviews(props) {
    const { route } = props;
    const id_product = route.params?.id_product;
    const id_store = route.params?.id_store;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [filterValue, setFilterValue] = useState({});
    var uri = `${finip}/product/store_review`;
    var dataBody = {
        id_store: id_store,
        rating: filterValue && filterValue.rating ? filterValue.rating + '' : '',
        id_product: filterValue && filterValue.product ? id_product : '',
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let boxFilterValue = (value) => {
        const filterValues = {};
        filterValues.rating = value == 'all' ? '' : value > 0 && value <= 5 ? value : '';
        filterValues.product = value == 'thisproduct' ? 'this' : '';
        setActiveGetServices(true);
        setFilterValue(filterValues);
    };
    useEffect(() => {
        activeGetServices &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: value => getData(value), showConsole: 'store_review' });
    }, [activeGetServices]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {activeGetServices && <LoadingScreen key={'LoadingScreen'} />}
        <AppBar {...props} backArrow titleHead='คะแนน' />
        <Reviews_Bar filterValue={value => boxFilterValue(value)} />
        <ScrollView>
            {dataService && dataService.list_reviews.length > 0 ?
                dataService.list_reviews.map((value, index) => <Reviews_Box dataService={value} key={index} />) : null}
        </ScrollView>
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Reviews_Bar = (props) => {
    const { filterValue } = props;
    const [activeTab, setActiveTab] = useState(true);
    const [selected, setSelected] = useState({ selectedIndex: 0, selectedIndex2: -1 });
    activeTab && setActiveTab(false);
    const items1 = [{ name: 'ทั้งหมด', }, { name: 'เฉพาะสินค้าชั้นนี้', },];
    const items2 = [{
        name: <>
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
        </>,
    }, {
        name: <>
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
        </>,
    }, {
        name: <>
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
        </>,
    }, {
        name: <>
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
            <IconFontAwesome name='star' size={9} color='#FFAC33' />
        </>,
    }, {
        name: <IconFontAwesome name='star' size={9} color='#FFAC33' />,
    },];
    let updateIndex = (value) => {
        if (value.selectedIndex != -1) {
            selected.selectedIndex = value.selectedIndex;
            selected.selectedIndex2 = -1;
            setActiveTab(true);
            setSelected(selected);
            filterValue(value.selectedIndex == 0 ? 'all' : 'thisproduct');
        };
    };
    let updateIndex2 = (value) => {
        if (value.selectedIndex != -1) {
            selected.selectedIndex = -1;
            selected.selectedIndex2 = value.selectedIndex;
            setActiveTab(true);
            setSelected(selected);
            filterValue(5 - value.selectedIndex);
        };
    };
    return <View style={{ backgroundColor: '#FFFFFF', borderBottomColor: '#E9E9E9', borderBottomWidth: 2, paddingBottom: 10 }}>
        <View style={{ width: '100%', marginTop: 10 }}>
            <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center' }]}>
                <TabBar sendData={value => updateIndex(value)} item={items1} type='box' SetValue={selected.selectedIndex} numberBox
                    radiusBox={4} />
            </View>
        </View>
        <View style={{ width: '100%', marginTop: 10 }}>
            <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center' }]}>
                <TabBar sendData={value => updateIndex2(value)} item={items2} type='box' SetValue={selected.selectedIndex2} numberBox
                    radiusBox={4} />
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Reviews_Box = (props) => {
    const { dataService } = props;
    const image_customer = dataService.user_type == 'fin' ?
        `${finip}/${dataService.path_customer}/${dataService.img_customer}` : dataService.img_customer;
    var img_rate = dataService.img_rate.length > 0 && dataService.img_rate.split(';')
    return <View style={{ backgroundColor: '#FFFFFF' }}>
        <View style={stylesDetail.Comment_R}>
            <FastImage style={stylesDetail.Comment_R_Image} source={{ uri: image_customer }} />
            <View style={stylesDetail.Comment_R_Text}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{dataService.name}</Text>
                <View style={stylesDetail.Comment_R_Iconstar}>
                    {StarReview(dataService.rating, 15)}
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataService.detail}</Text>
                <View style={[stylesDetail.Comment_Image_A, stylesMain.BottomSpace]}>
                    {img_rate.map((value, index) => {
                        const image_product = `${finip}/${dataService.path_rate_thumb}/${value}`
                        return <FastImage key={index} style={stylesDetail.Reviews_Image} source={{ uri: image_product }}
                            resizeMode={FastImage.resizeMode.contain} />
                    })}
                </View>
                <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                    {dataService.date_review} | {dataService.product_name}</Text>
            </View>
        </View>
    </View>;
};