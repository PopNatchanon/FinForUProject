///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  ExitAppModule, TodayProduct, } from './MainScreen';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar, GetServices } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../navigator/IpConfig';
import { AppBar } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Popular_productScreen);
function Popular_productScreen(props) {
    const { getFetchData, route, } = props;
    const id_item = route.params?.id_item + '';
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [id_items, setId_items] = useState(undefined);
    const ScrollViewRef = useRef(null);
    var dataArray = {}
    dataArray[0] = getFetchData['publish_mobile']?.data?.product_hit
    dataArray[1] = getFetchData['publish_mobile']?.data?.best_price
    dataArray[2] = getFetchData['publish_mobile']?.data?.best_sale
    dataArray[3] = getFetchData['publish_mobile']?.data?.best_cool
    var dataBody = {
        slide: 'banner'
    };
    var uri = `${finip}/home/home_mobile`;
    id_items == null && setId_items(id_item);
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    let getButton_Bar = (value) => { id_items != value && setId_items(value); };
    useEffect(() => {
        activeDataService && GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value), });
    }, [activeDataService]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='สินค้ายอดนิยม' />
        {id_items != null ?
            <ScrollView stickyHeaderIndices={[2]} ref={ScrollViewRef}>
                <Slide dataService={dataService} />
                <View style={{ marginBottom: 10 }}></View>
                <Button_Bar id_item={id_items} getData={(value) => getButton_Bar(value)} />
                <TodayProduct {...props} loadData={dataArray[id_items]} noTitle />
            </ScrollView> :
            <ScrollView>
                <Slide dataService={dataService} />
            </ScrollView>}
        <ExitAppModule {...props} />
    </SafeAreaView>;
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const { getData, id_item } = props;
    const item = [{ name: 'สินค้าสุดฮิต' }, { name: 'สินค้าราคาโดน' }, { name: 'สินค้าขายดี' }, { name: 'สินค้าสุดคูล' }];
    let updateIndex = (value) => { getData(value.selectedIndex); };
    return <View style={stylesTopic.FlashSale_Tag}>
        <TabBar sendData={(value) => updateIndex(value)} item={item} SetValue={id_item ? id_item : null} activeColor={mainColor}
            activeFontColor={mainColor} type='tag' />
    </View>;
};