///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GenArray, } from '../../../customComponents';
import { ExitAppModule, } from '../../Main/Main';
import { FlatProduct, GetData, GetServices, } from '../../../customComponents/Tools';
import { Slide } from '../Deal/Deal'
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { BoxText_T, Fin_sale_BoxHead, Head_BoxImageDetail, Store_Sales, Store_Sale_Boxs, Store_Sale_BoxA, Store_Sale_BoxA_Boximage,
    Store_Sale_BoxA_Carousel, Store_Sale_BoxA_image, Store_Sale_BoxB_Boximage, Store_Sale_BoxB_image, Store_Sale_Image, Text_Head,
} = stylesDeal;
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7 } = stylesFont;
const { BoxProduct1Box2new, BoxProduct2Image, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(DetailCampaign);
function DetailCampaign(props) {
    const { route } = props;
    const [activeDataService, setActiveDataService] = useState(true);
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const dataBody = { id_category: '', id_campaign: id_campaign, };
    const getData = (v) => { setActiveDataService(false); setDataService(v); };
    const getSource = (v) => { setActiveGetCurrentUser(false); setCurrentUser(v.currentUser); };
    const id_campaign = route.params?.id_campaign;
    const uri = `${finip}/campaign/campaign_detail`;
    useEffect(() => {
        !activeGetCurrentUser && activeDataService && GetServices({ dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [!activeGetCurrentUser && activeDataService]);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getSource: (v) => getSource(v), getUser: true, });
    }, [activeGetCurrentUser]);
    const Props = { ...props, dataService };
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...Props} backArrow chatBar searchBar titleHead={'โปรโมชั่น'} />
        <ScrollList {...Props} />
        <ExitAppModule {...Props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { dataService } = props;
    return <ScrollView>
        <Slide {...props} dataService={dataService?.list_banner} />
        <Detail_Description {...props} activeDataService={activeDataService} dataService={dataService?.data_campaign} />
        <New_year_Campaign {...props} dataService={dataService?.list_product} />
        <Store_Campaign {...props} dataService={dataService ?? undefined} />
        <New_year_Product {...props} dataService={dataService?.list_product} />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>> Description
export let Detail_Description = (props) => {
    const { activeDataService, dataService } = props;
    return dataService?.length > 0 ?
        <View style={Head_BoxImageDetail}>
            {dataService.map((v, i) => <View key={i}>
                <Text style={[FontFamilyBold, FontSize6]}>{v.name} </Text>
                <Text style={[FontFamilyText, FontSize7]}>{v.description}</Text>
                <Text style={[FontFamilyText, FontSize7]}>วันหมดอายุ : {v.end}</Text>
            </View>)}
        </View> :
        activeDataService && <View style={Head_BoxImageDetail}>
            <View>
                <Text style={[FontFamilyBold, FontSize6]}>{' '} </Text>
                <Text style={[FontFamilyText, FontSize7]}>{' '}</Text>
                <Text style={[FontFamilyText, FontSize7]}>{' '}</Text>
            </View>
        </View>;
};
///----------------------------------------------------------------------------------------------->>>> New_year_NewA
export let New_year_Campaign = (props) => {
    const { dataService } = props;
    // const dataService = []
    let emptyBox = GenArray(7).map((_, i) => <View key={i} style={[ItemCenter, BoxProduct1Box2new, { borderColor: '#CCCCCC' }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', borderBottomColor: '#CCCCCC', borderBottomWidth: 0.5, width: 119, }]}>
            <View style={[ItemCenter, BoxProduct2Image, { marginVertical: height * 0.015, }]}>
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <View style={FrameBackground}>
        <View style={[BoxText_T, { backgroundColor: '#C4C4C4', }]}>
            <Text style={[FontFamilyBold, FontSize5]}>ปีใหม่ช๊อปของใหม่</Text>
        </View>
        <View style={{ marginTop: 3 }}>
            {dataService?.length > 0 ?
                <FlatProduct {...props} custumNavigation='Second_Store' dataService={dataService} dispriceSize={15} mode='row3_new'
                    nameFlatProduct='Second_Store' nameSize={14} numberOfColumn={2} priceSize={15} /> :
                <View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>{emptyBox}</View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>{emptyBox}</View>
                </View>}
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> New_year_NewB
export const New_year_Product = (props) => {
    const { dataService } = props;
    const emptyBox = GenArray(7).map((_, i) => <View key={i} style={[ItemCenter, BoxProduct1Box2new, { borderColor: '#CCCCCC' }]}>
        <View style={[ItemCenter, { backgroundColor: '#ECECEC', borderBottomColor: '#CCCCCC', borderBottomWidth: 0.5, width: 119, }]}>
            <View style={[ItemCenter, BoxProduct2Image, { marginVertical: height * 0.015, }]}>
            </View>
        </View>
        <View style={{ height: 55, paddingHorizontal: 3 }} />
    </View>);
    return <View style={FrameBackground}>
        <View style={[BoxText_T, { backgroundColor: '#C4C4C4', width: 180 }]}>
            <Text style={[FontFamilyBold, FontSize5]}>  ปีใหม่แล้วไปลองของใหม่กัน</Text>
        </View>
        <View style={{ marginTop: 3 }}>
            {dataService?.length > 0 ?
                <FlatProduct {...props} custumNavigation='New_year_Product' dataService={dataService} dispriceSize={15} mode='row3_new'
                    nameFlatProduct='New_year_Product' nameSize={14} numberOfColumn={2} priceSize={15} /> :
                <View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>{emptyBox}</View>
                    <View style={{ flexDirection: 'row', overflow: 'hidden' }}>{emptyBox}</View>
                </View>}
        </View>
    </View>;
}
///----------------------------------------------------------------------------------------------->>>>
export const Store_Campaign = (props) => {
    const { dataService } = props;
    // const dataService = []
    let campaign_banner_1;
    let campaign_banner_2 = [];
    let campaign_banner_3 = [];
    const emptyBox = <View style={[Store_Sale_BoxA_Carousel, { backgroundColor: '#ECECEC' }]}>
        <View style={Store_Sale_Image} />
    </View>;
    const emptyBox2 = GenArray(2).map((_, i) => <View key={i} style={[Store_Sale_BoxA_image, { backgroundColor: '#ECECEC' }]}>
        <View style={Store_Sale_Image} />
    </View>);
    const emptyBox3 = GenArray(2).map((_, i) => <View key={i} style={[Store_Sale_BoxB_image, { backgroundColor: '#ECECEC' }]}>
        <View style={Store_Sale_Image} />
    </View>);
    dataService?.campaign_banner_1?.map((value) => campaign_banner_1 = { uri: `${finip}/${value.image_path}/${value.image}`, });
    dataService?.campaign_banner_2?.map((value) => campaign_banner_2.push({ uri: `${finip}/${value.image_path}/${value.image}`, }));
    dataService?.campaign_banner_3?.map((value) => campaign_banner_3.push({ uri: `${finip}/${value.image_path}/${value.image}`, }));
    const Store_Sale_Box = <View style={Store_Sales}>
        <View style={Store_Sale_Boxs}>
            {/* BoxA */}
            <View style={Store_Sale_BoxA}>
                {dataService?.campaign_banner_1 ?
                    <View style={Store_Sale_BoxA_Carousel}>
                        <FastImage style={Store_Sale_Image} source={campaign_banner_1}
                            resizeMode={FastImage.resizeMode.stretch} />
                    </View> : emptyBox}
                <View style={Store_Sale_BoxA_Boximage}>
                    {campaign_banner_3?.length > 0 ?
                        campaign_banner_3.map((v, i) => <View key={i} style={Store_Sale_BoxA_image}>
                            <FastImage resizeMode={FastImage.resizeMode.stretch} source={v} style={Store_Sale_Image} />
                        </View>) : emptyBox2}
                </View>
            </View>
            {/* BoxB */}
            <View style={Store_Sale_BoxB_Boximage}>
                {campaign_banner_2?.length > 0 ?
                    campaign_banner_2.map((v, i) => <View key={i} style={Store_Sale_BoxB_image}>
                        <FastImage resizeMode={FastImage.resizeMode.stretch} source={v} style={Store_Sale_Image} />
                    </View>) : emptyBox3}
            </View>
        </View>
    </View>;
    return <View>
        <View style={[FrameBackground, { marginTop: 3, }]}>
            <View style={[BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 100 }]}>
                <Text style={[FontFamilyBold, FontSize5, Text_Head]}>ร้านนี้มีของลด </Text>
            </View>
            <View style={Fin_sale_BoxHead}>
                <Text style={[FontFamilyBold, FontSize7, { color: mainColor }]}>ดูทั้งหมด</Text>
            </View>
            {Store_Sale_Box}
        </View>
    </View>;
};