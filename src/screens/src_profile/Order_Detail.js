///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage'
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { GetServices, LoadingScreen, GetData } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData,
    getFetchData: state.singleFetchDataFromService,
    activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Order_Detail);
function Order_Detail(props) {
    const { route } = props;
    const id_cartdetail = route.params?.id_cartdetail;
    const insert_date = route.params?.insert_date;
    const no_invoice = route.params?.no_invoice;
    const [activeDataCustomer, setActiveDataCustomer] = useState(true);
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    var dataBody = {
        id_customer: currentUser?.id_customer,
        id_cartdetail,
    };
    var uri = `${finip}/purchase_data/mobile_tranport`;
    let getData = (value) => {
        setActiveSelectedIndex(false);
        setDataService(value);
    };
    let getSource = (value) => {
        setActiveDataCustomer(false);
        setCokie(value.keycokie);
        setCurrentUser(value.currentUser);
    };
    useEffect(() => {
        activeDataCustomer && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true });
    }, [activeDataCustomer]);
    useEffect(() => {
        activeSelectedIndex && currentUser && id_cartdetail && cokie && GetServices({ uriPointer: uri, Authorization: cokie, showConsole: 'mobile_tranport', dataBody, getDataSource: value => getData(value), });
    }, [activeSelectedIndex && currentUser && id_cartdetail && cokie]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {activeSelectedIndex && <LoadingScreen key={'LoadingScreen'} />}
        <AppBar1 {...props} backArrow titleHead='รายละเอียด' />
        <ScrollView>
            {dataService && dataService.result && dataService.result.length > 0 ?
                dataService.result.map((value, index) => {
                    return <View key={index}>
                        {!activeSelectedIndex && ([index == 0 && ([
                            <Detail dataService={dataService.transport_data[0]} key={'Detail'} />,
                            insert_date && <Order_Sending key={'Order_Sending'} onStart={insert_date} />
                        ]),
                        <Order_Sending dataService={value} key={'Order_Sending'} no_invoice={no_invoice} onEnd={index == dataService.result.length - 1 ? true : false} />])}
                    </View>
                }) :
                <>{!activeSelectedIndex && ([
                    dataService && dataService.transport_data && dataService.transport_data.length > 0 && <Detail
                        dataService={dataService.transport_data[0]} key={'Detail'} />,
                    <Order_Sending key={'Order_Sending'} no_invoice={no_invoice} onStart={insert_date} onEnd={true} />
                ])}</>}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail
export let Detail = (props) => {
    const { dataService } = props;
    const uri_image_tracking = `${finip}/${dataService.image_path}/${(dataService.image ? dataService.image : dataService.image_name)}`;
    return <>
        <View style={[stylesProfileTopic.Order_Detail, { borderColor: '#ECECEC', borderBottomWidth: 1, }]}>
            <View style={stylesProfileTopic.Order_Detail_ICON}>
                <FastImage style={{ width: '100%', height: '100%' }} source={{ uri: uri_image_tracking, }} resizeMode={FastImage.resizeMode.contain} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{`จัดส่งโดย : ${dataService.name}`}</Text>
        </View>
        {/* <View style={stylesProfileTopic.Order_Detail_Address}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20, }]}>
                        123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
                </View> */}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Order_Sending
export let Order_Sending = (props) => {
    const { dataService, no_invoice, onEnd, onStart } = props
    return <>
        <View style={{ backgroundColor: '#FFFFFF', paddingTop: 8, paddingBottom: 8, }}>
            {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ระหว่างการจัดส่ง</Text> */}
            <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                <View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: 95 }]}>
                        {onStart ? onStart : dataService.tracking_date}</Text>
                </View>
                <View style={{ width: 300, marginLeft: 10, flex: 1 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                        {onStart ?
                            'เราได้รับคำสั่งซื้อของท่านเรียบร้อยแล้วและกำลังดำเนินการตรวจสอบรายการคำสั่งซื้อนี้ ทางเราจะทำการอัพเดทข้อมูลทางอีเมลให้ทราบโดยเร็ว' :
                            dataService.tracking_description}
                    </Text>
                </View>
            </View>
        </View>
        {onEnd && <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderColor: '#ECECEC', borderTopWidth: 1, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ : {no_invoice}</Text>
        </View>}
    </>;
};