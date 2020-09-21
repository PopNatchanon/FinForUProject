///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../../style/StylesMainScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from '../../../../customComponents';
import { Button_Bar } from '../../../Main/Highlight/Highlight';
import { ExitAppModule, } from '../../../Main/Main';
import { GetData, GetServices, } from '../../../../customComponents/Tools';
import { Slide } from '../Deal';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Store);
function Store(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [id_category, setId_Category] = useState(undefined);
    const dataBody2 = { device: 'mobile_device', id_category: id_category ?? '' };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    const getData2 = (v) => { setActiveGetServices2(false); setDataService2(v); };
    const getSource = (v) => { setActiveGetCurrentUser(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    const getUpdateIndex = (v) => {
        const id_category = dataService2.category[v - 1] == undefined ? '' : dataService2.category[v - 1].id_type;
        setActiveGetServices2(true); setId_Category(id_category);
    };
    const Props = { ...props, dataService, }
    const uri = `${finip}/coupon/coupon_day_mobile`;
    const uri2 = `${finip}/highlight/exclusive_deal`;
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUser: true, })
    }, [activeGetCurrentUser]);
    useEffect(() => {
        !activeGetCurrentUser && activeGetServices &&
            GetServices({ Authorization: cokie, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [!activeGetCurrentUser && activeGetServices]);
    useEffect(() => {
        !activeGetCurrentUser && activeGetServices2 && selectedIndex == 1 &&
            GetServices({ dataBody: dataBody2, getDataSource: (v) => getData2(v), showConsole: 'exclusive_deal', uriPointer: uri2, });
    }, [!activeGetCurrentUser && activeGetServices2 && selectedIndex == 1]);
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...Props} backArrow titleHead='ร้านค้าที่มีดีล' />
        <ScrollList {...Props} />
        <ExitAppModule {...Props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { dataService } = props;
    return <ScrollView stickyHeaderIndices={[2]}>
        {dataService && dataService.banner && <Slide dataService={dataService?.banner} />}
        <View style={{ marginBottom: 10 }} />
        <Button_Bar />
        {/* <Store_Detail /> */}
    </ScrollView>;
};