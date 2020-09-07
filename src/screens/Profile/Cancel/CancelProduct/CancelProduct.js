///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import {
    Dimensions, Picker, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch } from '../../../../customComponents';
import { ExitAppModule } from '../../../Main/MainScreen';
import { From_Order_Box } from '../../TotalOrder/Total_Order';
import { GetData, LoadingScreen, } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
///----------------------------------------------------------------------------------------------->>>>
export default connect(mapStateToProps, mapDispatchToProps)(CancelProduct);
function CancelProduct(props) {
    const [activeDataCustomer, setActiveDataCustomer] = useState(true);
    const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    var uri = `${finip}/purchase_data/view_purchase`;
    var dataBody = { device: "mobile_device", id_customer: currentUser?.id_customer, type_purchase: 'cancel', };
    let getSource = (value) => { setActiveDataCustomer(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    let getData = (value) => { setActiveSelectedIndex(false); setDataService(value); setLoading(false); };
    useEffect(() => {
        activeSelectedIndex && cokie && currentUser && GetFetch({
            Authorization: cokie, dataBody, getDataSource: value => getData(value), showConsole: 'view_purchase', uriPointer: uri,
        });
    }, [activeSelectedIndex && cokie && currentUser]);
    useEffect(() => {
        activeDataCustomer && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true });
    }, [activeDataCustomer]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ยกเลิกสินค้า' />
        <ScrollView>
            {!activeSelectedIndex && <>
                <Text key={'all'} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>
                    รายการคำสั่งซื้อ</Text>
                {dataService?.purchase?.length > 0 ?
                    dataService.purchase.map((value, index) => <From_Order_Box {...props} dataService={value} key={index} />) :
                    <View style={[stylesProfileTopic.products_pro, { height: height * 0.5 }]}>
                        <IconFeather color='#A2A2A2' name='edit' size={50} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ยังไม่มีคำสั่งซื้อ</Text>
                    </View>}
            </>}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> CancelScreen_Product