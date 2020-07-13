///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  ExitAppModule, } from './MainScreen';
import { ProductBox, LoadingScreen, GetData, GetServices, FlatProduct, } from '../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Recommend_Brand);
function Recommend_Brand(props) {
    const [activeDataService, setActiveDataService] = useState(true);
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    var uri = `${finip}/brand/all_brand`;
    let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); };
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    useEffect(() => {
        activeDataService && !activeGetCurrentUser && GetServices({ uriPointer: uri, getDataSource: (value) => getData(value), });
    }, [activeDataService && !activeGetCurrentUser]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getSource: (value) => getSource(value), getUser: true, });
    }, [activeGetCurrentUser]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {(activeGetCurrentUser || activeDataService) && <LoadingScreen key='LoadingScreen' />}
        <AppBar {...props} titleHead={'แบรนด์แนะนำ'} backArrow searchBar chatBar />
        <ScrollView>
            {dataService?.store?.map((value, index) => <Recommend_Brand_Store {...props} key={index} dataService={value} />)}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
}
///----------------------------------------------------------------------------------------------->>>> Recommend_Brand_Store
export let Recommend_Brand_Store = (props) => {
    const { navigation, dataService } = props;
    const image_header = `${finip}/${dataService.image_head_path}/${dataService.image_head}`;
    const image_store = `${finip}/${dataService.store_path}/${dataService.image_store}`;
    return <View style={stylesMain.FrameBackground}>
        <FastImage source={{ uri: image_header, }} style={stylesTopic.Brand_ImageBackground} resizeMode={FastImage.resizeMode.stretch} />
        <View style={stylesTopic.Recommend_Brand_StoreBoxPro}>
            <View style={stylesTopic.Recommend_Brand_Pro}>
                <FastImage style={stylesTopic.Recommend_Brand_Proimage} source={{ uri: image_store, }}
                    resizeMode={FastImage.resizeMode.contain} />
            </View>
            <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'StoreScreen', setData: { id_item: 23 }, navigation })}>
                <View style={[stylesTopic.Recommend_Brand_ProButton]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เข้าดูร้าน</Text>
                </View>
            </TouchableOpacity>
        </View>
        {dataService?.product && <FlatProduct {...props} custumNavigation='Recommend_Brand_Store' dataService={dataService.product}
            mode='row3' nameFlatProduct='Recommend_Brand_Store' nameSize={14} priceSize={15} dispriceSize={15} />}
    </View>;
}