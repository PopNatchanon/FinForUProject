///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import StylesMainScreen from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TodayProduct, ExitAppModule, } from '../../Main/Main';
import { Button_Bar } from '../../Main/Highlight/Highlight';
import { Store_Sale } from '../TheBestFin';
import { GetCoupon, GetData, GetServices, ProductBox, FlatProduct } from '../../../customComponents/Tools';
import { GenArray, AppBar } from '../../../customComponents';
import { Slide } from '../Deal'
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(DetailCampaign);
function DetailCampaign(props) {
    const { route } = props;
    const id_campaign = route.params?.id_campaign;
    const [activeDataService, setActiveDataService] = useState(true);
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    var dataBody = { id_category: '', id_campaign: id_campaign, };
    var uri = `${finip}/campaign/campaign_detail`;
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    let getSource = (value) => { setActiveGetCurrentUser(false); setCurrentUser(value.currentUser); };
    useEffect(() => {
        !activeGetCurrentUser && activeDataService && GetServices({ dataBody, uriPointer: uri, getDataSource: value => getData(value), });
    }, [!activeGetCurrentUser && activeDataService]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getSource: value => getSource(value), getUser: true, });
    }, [activeGetCurrentUser]);
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} titleHead={'โปรโมชั่น'} backArrow searchBar chatBar />
        <ScrollView>
            <Slide {...props} dataService={dataService?.list_banner} />
            <Detail_Description {...props} activeDataService={activeDataService} dataService={dataService?.data_campaign} />
            <New_year_Campaign {...props} dataService={dataService?.list_product} />
            <Store_Campaign {...props} dataService={dataService ?? undefined} />
            <New_year_Product {...props} dataService={dataService?.list_product} />
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Description
export let Detail_Description = (props) => {
    const { activeDataService, dataService } = props;
    return dataService?.length > 0 ?
        <View style={stylesDeal.Head_BoxImageDetail}>
            {dataService.map((value, index) => <View key={index}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{value.name} </Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.description}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>วันหมดอายุ : {value.end}</Text>
            </View>)}
        </View> :
        activeDataService && <View style={stylesDeal.Head_BoxImageDetail}>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{' '} </Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{' '}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{' '}</Text>
            </View>
        </View>;
};
///----------------------------------------------------------------------------------------------->>>> New_year_NewA
export let New_year_Campaign = (props) => {
    const { dataService } = props;
    // const dataService = []
    let emptyBox = GenArray(7).map((_, index) => <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2new,
    { borderColor: '#CCCCCC' }]}>
        <View style={[stylesMain.ItemCenter,
        { backgroundColor: '#ECECEC', width: 119, borderBottomColor: '#CCCCCC', borderBottomWidth: 0.5 }]}>
            <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <View style={stylesMain.FrameBackground}>
        <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ปีใหม่ช๊อปของใหม่</Text>
        </View>
        <View style={{ marginTop: 3 }}>
            {dataService?.length > 0 ?
                <FlatProduct {...props} custumNavigation='Second_Store' dataService={dataService} numberOfColumn={2} mode='row3_new'
                    nameFlatProduct='Second_Store' nameSize={14} priceSize={15} dispriceSize={15} /> :
                <View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
                        {emptyBox}
                    </View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
                        {emptyBox}
                    </View>
                </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> New_year_NewB
export let New_year_Product = (props) => {
    const { dataService } = props;
    let emptyBox = GenArray(7).map((_, index) => <View key={index} style={[stylesMain.ItemCenter, stylesMain.BoxProduct1Box2new,
    { borderColor: '#CCCCCC' }]}>
        <View style={[stylesMain.ItemCenter,
        { backgroundColor: '#ECECEC', width: 119, borderBottomColor: '#CCCCCC', borderBottomWidth: 0.5 }]}>
            <View style={[stylesMain.ItemCenter, stylesMain.BoxProduct2Image, { marginVertical: height * 0.015, }]}>
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <View style={stylesMain.FrameBackground}>
        <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 180 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>  ปีใหม่แล้วไปลองของใหม่กัน</Text>
        </View>
        <View style={{ marginTop: 3 }}>
            {dataService?.length > 0 ?
                <FlatProduct {...props} custumNavigation='New_year_Product' dataService={dataService} numberOfColumn={2} mode='row3_new'
                    nameFlatProduct='New_year_Product' nameSize={14} priceSize={15} dispriceSize={15} /> :
                <View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
                        {emptyBox}
                    </View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
                        {emptyBox}
                    </View>
                </View>}
        </View>
    </View>;
}
///----------------------------------------------------------------------------------------------->>>>
export let Store_Campaign = (props) => {
    const { dataService } = props;
    // const dataService = []
    var campaign_banner_1;
    var campaign_banner_2 = [];
    var campaign_banner_3 = [];
    let emptyBox = <View style={[stylesDeal.Store_Sale_BoxA_Carousel, { backgroundColor: '#ECECEC' }]}>
        <View style={stylesDeal.Store_Sale_Image}></View>
    </View>;
    let emptyBox2 = GenArray(2).map((_, index) => <View key={index} style={[stylesDeal.Store_Sale_BoxA_image,
    { backgroundColor: '#ECECEC' }]}>
        <View style={stylesDeal.Store_Sale_Image}></View>
    </View>);
    let emptyBox3 = GenArray(2).map((_, index) => <View key={index} style={[stylesDeal.Store_Sale_BoxB_image,
    { backgroundColor: '#ECECEC' }]}>
        <View style={stylesDeal.Store_Sale_Image}></View>
    </View>);
    dataService?.campaign_banner_1?.map((value) => campaign_banner_1 = `${finip}/${value.image_path}/${value.image}`);
    dataService?.campaign_banner_2?.map((value) => campaign_banner_2.push(`${finip}/${value.image_path}/${value.image}`));
    dataService?.campaign_banner_3?.map((value) => campaign_banner_3.push(`${finip}/${value.image_path}/${value.image}`));
    let Store_Sale_Box = <View style={stylesDeal.Store_Sale}>
        <View style={stylesDeal.Store_Sale_Box}>
            {/* BoxA */}
            <View style={stylesDeal.Store_Sale_BoxA}>
                {dataService?.campaign_banner_1 ?
                    <View style={stylesDeal.Store_Sale_BoxA_Carousel}>
                        <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: campaign_banner_1, }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View> : emptyBox}
                <View style={stylesDeal.Store_Sale_BoxA_Boximage}>
                    {campaign_banner_3?.length > 0 ?
                        campaign_banner_3.map((value, index) => <View key={index} style={stylesDeal.Store_Sale_BoxA_image}>
                            <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: value, }}
                                resizeMode={FastImage.resizeMode.stretch} />
                        </View>) : emptyBox2}
                </View>
            </View>
            {/* BoxB */}
            <View style={stylesDeal.Store_Sale_BoxB_Boximage}>
                {campaign_banner_2?.length > 0 ?
                    campaign_banner_2.map((value, index) => <View key={index} style={stylesDeal.Store_Sale_BoxB_image}>
                        <FastImage style={stylesDeal.Store_Sale_Image} source={{ uri: value, }}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View>) : emptyBox3}
            </View>
        </View>
    </View>;
    return <View>
        <View style={[stylesMain.FrameBackground, { marginTop: 3, }]}>
            <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 100 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านนี้มีของลด </Text>
            </View>
            <View style={stylesDeal.Fin_sale_BoxHead}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: mainColor }]}>ดูทั้งหมด</Text>
            </View>
            {Store_Sale_Box}
        </View>
    </View>;
};