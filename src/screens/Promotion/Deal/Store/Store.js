///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen'
import stylesFont from '../../../../style/stylesFont';
import stylesPromotionDeal from '../../../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../../style/styleTopic';
import stylesProfile from '../../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Button_Bar } from '../../../Main/Highlight/Highlight';
import { ExitAppModule, TodayProduct, } from '../../../Main/Main';
import { GetCoupon, GetServices, GetData, TabBar, LoadingScreen } from '../../../../customComponents/Tools';
import { ProductBox } from '../../../../customComponents/Tools';
import { Slide } from '../Deal';
import { Store_Detail, } from '../../../Main/RecommendStore/RecommendStore';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../../navigator/IpConfig';
import { AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(DealTopic);
function DealTopic(props) {
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
    var dataBody2 = { device: 'mobile_device', id_category: id_category ?? '' };
    var uri = `${finip}/coupon/coupon_day_mobile`;
    var uri2 = `${finip}/highlight/exclusive_deal`;
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); setCokie(value.keycokie); };
    let getUpdateIndex = (value) => {
        var id_category = dataService2.category[value - 1] == undefined ? '' : dataService2.category[value - 1].id_type;
        setActiveGetServices2(true); setId_Category(id_category);
    };
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
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ร้านค้าที่มีดีล' />
        <ScrollView stickyHeaderIndices={[2]}>
            {dataService && dataService.banner && <Slide dataService={dataService?.banner} />}
            <View style={{ marginBottom: 10 }}></View>
            <Button_Bar />
            {/* <Store_Detail /> */}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};