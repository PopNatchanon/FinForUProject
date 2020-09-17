///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import { mainColor } from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { TodayProduct, ExitAppModule } from '../../Main/Main';
import { Button_Bar } from '../../Main/Highlight/Highlight';
import { GetServices } from '../../../customComponents/Tools';
import { Slide } from '../../Promotion/Deal/Deal';
import { AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(SameStore);
function SameStore(props) {
    const { route } = props;
    const type_product = route.params?.type_product;
    const id_type = route.params?.id_type;
    const id_store = route.params?.id_store;
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    var dataBody;
    var title;
    var uri = `${finip}/product/product_other_mobile`;
    type_product && id_type && id_store && (dataBody = {
        id_type: id_type,
        id_store: id_store,
        type_product: type_product,
    });
    let getData = (value) => { setActiveDataService(false); setDataService(value); };
    useEffect(() => {
        activeDataService && dataBody !== undefined &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: (value) => getData(value) });
    }, [activeDataService && dataBody !== undefined]);
    switch (type_product) {
        case 'this_store': title = 'สินค้าจากร้านเดียวกัน'; break;
        case 'same_product': title = 'สินค้าที่คล้ายกัน'; break;
        case 'youlike': title = 'สินค้าที่คุณอาจชอบ'; break;
        default: break;
    };
    return <SafeAreaView style={{ height: '100%' }}>
        <AppBar {...props} titleHead={title} backArrow />
        <ScrollView stickyHeaderIndices={[type_product == 'youlike' ? 2 : null]}>
            <Slide {...props} />
            <Header Title={title} />
            {type_product == 'youlike' && <Button_Bar key={'Button_Bar'} />}
            {dataService && <TodayProduct {...props} key={type_product} noTitle loadData={dataService} />}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Header
export let Header = (props) => {
    const { Title } = props;
    return <View style={{ width: '100%', alignItems: 'center', marginVertical: 3, }}>
        <View style={
            { width: 150, height: 50, backgroundColor: mainColor, justifyContent: 'center', borderRadius: 5, alignItems: 'center', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>{Title}</Text>
        </View>
    </View>;
};