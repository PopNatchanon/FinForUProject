///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch } from '../../customComponents';
import { ExitAppModule } from '../MainScreen';
import { GetData, LoadingScreen, } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
///----------------------------------------------------------------------------------------------->>>>
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
    var dataBody = { id_customer: currentUser?.id_customer, id_cartdetail, };
    var uri = `${finip}/purchase_data/mobile_tranport`;
    let getData = (value) => { setActiveSelectedIndex(false); setDataService(value); };
    let getSource = (value) => { setActiveDataCustomer(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeDataCustomer && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true });
    }, [activeDataCustomer]);
    useEffect(() => {
        activeSelectedIndex && cokie && currentUser && id_cartdetail && GetFetch({
            Authorization: cokie, dataBody, getDataSource: value => getData(value), showConsole: 'mobile_tranport', uriPointer: uri,
        });
    }, [activeSelectedIndex && cokie && currentUser && id_cartdetail]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {activeSelectedIndex && <LoadingScreen key={'LoadingScreen'} />}
        <AppBar {...props} backArrow titleHead='รายละเอียด' />
        <ScrollView>
            {dataService?.result?.length > 0 ?
                dataService.result.map((value, index) => <View key={index}>
                    {!activeSelectedIndex && <>{index == 0 &&
                        <>
                            <Detail dataService={dataService.transport_data[0]} key={'Detail'} />
                            {insert_date && <Order_Sending key={'Order_Sending'} onStart={insert_date} />}
                        </>}
                        <Order_Sending dataService={value} key={'Order_Sending'} no_invoice={no_invoice}
                            onEnd={index == dataService.result.length - 1 ? true : false} />
                    </>}
                </View>) : <>{!activeSelectedIndex &&
                    <>
                        {dataService?.transport_data?.length > 0 && <Detail dataService={dataService.transport_data[0]} key={'Detail'} />}
                        <Order_Sending key={'Order_Sending'} no_invoice={no_invoice} onEnd={true} onStart={insert_date} />
                    </>}
                </>}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail
export let Detail = (props) => {
    const uri_image_tracking = `${finip}/${props.dataService.image_path}/${(props.dataService.image ?
        props.dataService.image : props.dataService.image_name)}`;
    return <>
        <View style={[stylesProfileTopic.Order_Detail, { borderBottomWidth: 1, borderColor: '#ECECEC', }]}>
            <View style={stylesProfileTopic.Order_Detail_ICON}>
                <FastImage resizeMode={FastImage.resizeMode.contain} source={{ uri: uri_image_tracking, }}
                    style={{ width: '100%', height: '100%' }} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{`จัดส่งโดย : ${props.dataService.name}`}</Text>
        </View>
        {/* <View style={stylesProfileTopic.Order_Detail_Address}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20, }]}>
                        123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
                </View> */}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> Order_Sending
export let Order_Sending = (props) => <>
    <View style={{ backgroundColor: '#FFFFFF', paddingBottom: 8, paddingTop: 8, }}>
        {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ระหว่างการจัดส่ง</Text> */}
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: 95 }]}>
                    {props.onStart ?? props.dataService.tracking_date}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 10, width: 300, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{props.onStart ?
                    'เราได้รับคำสั่งซื้อของท่านเรียบร้อยแล้วและกำลังดำเนินการตรวจสอบรายการคำสั่งซื้อนี้ ' +
                    'ทางเราจะทำการอัพเดทข้อมูลทางอีเมลให้ทราบโดยเร็ว' : props.dataService.tracking_description}</Text>
            </View>
        </View>
    </View>
    {props.onEnd && <View style={{ backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderTopWidth: 1, padding: 8, }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ : {props.no_invoice}</Text>
    </View>}
</>;