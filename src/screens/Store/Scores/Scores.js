///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width, } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesLayout from '../../../style/stylesLayout';
import stylesMain, { mainColor, } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, GenArray, IconLoading, StarReview, } from '../../../customComponents';
import { GetData, GetServices, TabBar, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup Value
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize3, FontSize4, FontSize5, FontSize6, } = stylesFont;
const { FRow, } = stylesLayout;
const { FrameBackground, ItemCenter, SafeAreaViews, } = stylesMain;
const { Order_StorePro, } = stylesProfileTopic;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData,
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Scores);
function Scores(props) {
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const getSource = (v) => { setActiveGetCurrentUser(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: (v) => getSource(v), getUse: true, });
    }, [activeGetCurrentUser]);
    const MainProps = { ...props, cokie, currentUser }
    return <SafeAreaView style={[SafeAreaViews]}>
        <AppBar {...MainProps} backArrow titleHead='คะแนนประจำร้าน' />
        <Score_store {...MainProps} />
        <ExitApp {...MainProps} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>
export const Score_store = (props) => {
    const { cokie, route } = props;
    const id_store = route.params?.id_store;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [score, setScore] = useState('');
    const dataBody = { id_store, score, };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    const getData2 = (v) => { setActiveGetServices2(false); setDataService2(v); };
    const item = [{
        name: 'ทั้งหมด', nameline2: `(${(dataService ?
            (dataService.rate_1 + dataService.rate_2 + dataService.rate_3 + dataService.rate_4 + dataService.rate_5) : '0')})`,
    }, { name: '5 ดาว', nameline2: `(${dataService?.rate_5 ?? '0'})`, },
    { name: '4 ดาว', nameline2: `(${dataService?.rate_4 ?? '0'})`, },
    { name: '3 ดาว', nameline2: `(${dataService?.rate_3 ?? '0'})`, },
    { name: '2 ดาว', nameline2: `(${dataService?.rate_2 ?? '0'})`, },
    { name: '1 ดาว', nameline2: `(${dataService?.rate_1 ?? '0'})`, }];
    const updateIndex = (v) => {
        const score = v.selectedIndex == 0 ? '' : v.selectedIndex == 1 ? '5' : v.selectedIndex == 2 ? '4' : v.selectedIndex == 3 ? '3' :
            v.selectedIndex == 4 ? '2' : v.selectedIndex == 5 ? '1' : '';
        setActiveGetServices2(true); setScore(score);
    };
    const uri = `${finip}/store/score_data`;
    useEffect(() => {
        activeGetServices && cokie && id_store && dataBody?.id_store &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeGetServices && cokie && id_store && dataBody?.id_store]);
    useEffect(() => {
        activeGetServices2 && cokie && id_store &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData2(v), uriPointer: uri, });
    }, [activeGetServices2 && cokie && id_store]);
    return <ScrollView scrollEnabled={!activeGetServices2}>
        <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
            <Text style={[FontFamilyBold, FontSize3, { color: '#FFFFFF', margin: 10, }]}> เรตติ้งร้าน </Text>
            <View style={ItemCenter}>
                <View style={[ItemCenter,
                    { backgroundColor: '#FFFFFF', borderRadius: 80, borderWidth: 1, height: 130, marginBottom: 10, width: 130, }]}>
                    {dataService?.rating_store == 'ยังไม่มีการรีวิว' ?
                        <Text style={[FontFamilyBold, FontSize3]}>ยังไม่มีการรีวิว</Text> :
                        <Text style={[FontFamilyBold, FontSize2]}>{dataService?.rating_store} คะแนน</Text>}
                    <View style={FRow}>{StarReview(dataService?.rating_store, 20)}</View>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', height: 120, marginBottom: 10, width: '100%', }}>
            <TabBar inactiveBoxColor='#fff' item={item} noLimit numberofBox={3} radiusBox={4} sendData={(v) => updateIndex(v)} setVertical={6}
                type='box' />
        </View>
        {!activeGetServices2 ?
            dataService2?.error != '[SyntaxError: JSON Parse error: Unrecognized token ' < ']' &&
                dataService2?.data_score?.length > 0 ?
                dataService2.data_score.map((v, i) => <Box_Rating dataService={v} key={i} />) :
                <View style={[FrameBackground, ItemCenter, { height: height * 0.478, width, }]}>
                    <Text style={[FontFamilyBold, FontSize4]}>ไม่มีรีวิว</Text>
                </View> :
            GenArray(3).map((_, i) => <View key={i} style={FrameBackground}>
                <View style={[FRow, { borderBottomWidth: 1, borderColor: '#ECECEC', }]}>
                    <View style={[Order_StorePro, { backgroundColor: '#ECECEC', }]}>
                        <IconLoading />
                    </View>
                    <Text style={[FontFamilyBold, FontSize4, { marginLeft: 4, marginTop: 10, }]}> </Text>
                </View>
                <View style={{ padding: 10, }}>
                    <View style={FRow}>{StarReview(0, 20)}</View>
                    <View>
                        <Text style={[FontFamilyText, FontSize5, { color: '#111', }]}>  </Text>
                    </View>
                </View>
                <View style={[FRow, { marginLeft: 10, }]}>
                    {/* <Text style={[FontFamilyText, FontSize6]}>25-03-2020 09:40</Text>  */}
                    <Text style={[FontFamilyText, FontSize6]}>สินค้า :   </Text>
                </View>
            </View>)}
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>
export const Box_Rating = (props) => {
    const { comment_box, dataService, } = props;
    const { comment, detail, img_customer, name, path_customer, product, rating, user_type, } = dataService;
    const ImageCustomer = { uri: user_type == 'fin' ? `${finip}/${path_customer}/${img_customer}` : img_customer, };
    return <View style={FrameBackground}>
        <View style={[FRow, { borderBottomWidth: 1, borderColor: '#ECECEC', }]}>
            <View style={Order_StorePro}>
                <FastImage source={ImageCustomer} style={{ borderRadius: 20, height: '100%', width: '100%', }} />
            </View>
            <Text style={[FontFamilyBold, FontSize4, { marginBottom: 'auto', marginLeft: 4, marginTop: 'auto', }]}>{name}</Text>
        </View>
        <View style={{ padding: 10, }}>
            <View style={FRow}>{StarReview(rating, 20)}</View>
            {comment_box && <View style={{ backgroundColor: mainColor, margin: 10, width: 110, }}>
                <Text style={[FontFamilyText, FontSize6, { color: '#FFFFFF', textAlign: 'center', }]}>คุ้มค้าและจัดส่งเร็วดี</Text>
            </View>}
            <View>
                <Text style={[FontFamilyText, FontSize5, { color: '#111', }]}>{comment}</Text>
            </View>
        </View>
        <View style={[FRow, { marginLeft: 10, }]}>
            {/* <Text style={[FontFamilyText, FontSize6]}>25-03-2020 09:40</Text>  */}
            <Text style={[FontFamilyText, FontSize6]}>สินค้า : {product} {detail}</Text>
        </View>
    </View>;
};