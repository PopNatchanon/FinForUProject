///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View, } from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../../style/StylesMainScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from '../../../../customComponents';
import { Button_Bar } from '../../../Main/Highlight/Highlight';
import { ExitAppModule, TodayProduct, } from '../../../Main/Main';
import { GetData, GetServices, } from '../../../../customComponents/Tools';
import { Slide } from '../Deal';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Exclusive);
function Exclusive(props) {
    const { route } = props;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [id_category, setId_Category] = useState(undefined);
    const dataBody2 = { device: 'mobile_device', id_category: id_category ?? '' };
    const getData = (value) => { setActiveGetServices(false); setDataService(value); };
    const getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
    const getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); setCokie(value.keycokie); };
    const getUpdateIndex = (value) => {
        var id_category = dataService2.category[value - 1] == undefined ? '' : dataService2.category[value - 1].id_type;
        setActiveGetServices2(true); setId_Category(id_category);
    };
    const Props = { ...props, dataService, dataService2 }
    const selectedIndex = route.params?.selectedIndex;
    const uri = `${finip}/coupon/coupon_day_mobile`;
    const uri2 = `${finip}/highlight/exclusive_deal`;
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (value) => getSource(value), getUser: true, })
    }, [activeGetCurrentUser]);
    useEffect(() => {
        !activeGetCurrentUser && activeGetServices &&
            GetServices({ Authorization: cokie, uriPointer: uri, getDataSource: (value) => getData(value), });
    }, [!activeGetCurrentUser && activeGetServices]);
    useEffect(() => {
        selectedIndex == 1 && !activeGetCurrentUser && activeGetServices2 && GetServices({
            dataBody: dataBody2, uriPointer: uri2, getDataSource: (value) => getData2(value), showConsole: 'exclusive_deal'
        });
    }, [selectedIndex == 1 && !activeGetCurrentUser && activeGetServices2]);
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...Props} backArrow titleHead='ดีลสุด Exclusive' />
        <ScrollList {...Props} />
        <ExitAppModule {...Props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { dataService, dataService2 } = props;
    return <ScrollView stickyHeaderIndices={[2]}>
        {dataService && dataService.banner && <Slide dataService={dataService?.banner} />}
        <View style={{ marginBottom: 10 }}></View>
        {dataService2 && <Button_Bar {...props} category={dataService2.category} key='Button_Bar'
            getUpdateIndex={(value) => getUpdateIndex(value)} />}
        {dataService2 && <TodayProduct {...props} key='TodayProduct' loadData={dataService2.product} noTitle />}
    </ScrollView>;
};