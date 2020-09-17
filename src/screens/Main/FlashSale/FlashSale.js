///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesTopic from '../../../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  ExitAppModule, Slide } from '../Main';
import { GetServices, TabBar, LoadingScreen, } from '../../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(FlashSale);
function FlashSale(props) {
    const [activeFlashStart, setActiveFlashStart] = useState(true)
    const [activeReData, setActiveReData] = useState(true)
    const [curTime, setCurTime] = useState(undefined)
    const [dataService, setDataService] = useState(undefined)
    // const [endTime, setEndTime] = useState(undefined);
    const [flash_start, setFlash_Start] = useState(undefined)
    const [hours, setHours] = useState(undefined);
    const [id_type, setId_Type] = useState(undefined);
    const [minutes, setMinutes] = useState(undefined);
    const [pkid, setPkid] = useState(undefined);
    const [seconds, setSeconds] = useState(undefined);
    const scrollY = new Animated.Value(0);
    var dataBody = {
        id_flash: pkid ?? "",
        id_category: id_type ?? "",
        device: "mobile_device"
    };
    var uri = `${finip}/flashsale/flash_schedule`;
    let getData = (value) => {
        setActiveFlashStart(false);
        setActiveReData(true);
        setDataService(value);
        setFlash_Start(value.flash_start);
    };
    let getReData = () => {
        setActiveFlashStart(true);
        setActiveReData(false);
        setDataService([]);
        setFlash_Start(undefined);
        setPkid('');
    }
    let getUpdate = (value) => { setActiveFlashStart(true); setDataService([]); setPkid(value); };
    let getUpdate2 = (value) => { setActiveFlashStart(true); setDataService([]); setId_Type(value); };
    useEffect(() => {
        let intervalID = setInterval(() => {
            setCurTime(new Date());
            activeFlashStart && GetServices({ dataBody: dataBody, getDataSource: value => getData(value), uriPointer: uri });
            if (flash_start) {
                var end_period = flash_start[0].end_period.split(' ');
                var end_period_1 = end_period[0].split('-');
                var end_period_2 = end_period[1].split(':');
                var endTime = new Date();
                endTime.setFullYear(end_period_1[0], (end_period_1[1] * 1) - 1, end_period_1[2]);
                endTime.setHours(end_period_2[0]);
                endTime.setMinutes(end_period_2[1]);
                endTime.setSeconds(end_period_2[2]);
                curTime > endTime && getReData();
            };
        }, 1000);
        return () => clearInterval(intervalID);
    });
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {activeFlashStart && <LoadingScreen key={'LoadingScreen'} />}
        <AppBar {...props} titleHead={'FLASH SALE'} backArrow searchBar chatBar />
        <ScrollView stickyHeaderIndices={[1]} scrollEventThrottle={8} onScroll={Animated.event([{
            nativeEvent: { contentOffset: { y: scrollY } }
        }], { useNativeDriver: false, })}>
            <Slide {...props} />
            {dataService && <>
                {flash_start && <>
                    <Time_FlashSale activeFlashStart={activeFlashStart} activeReData={activeReData} curTime={curTime}
                        dataService2={flash_start} getReData={value => getReData(value)} getUpdate={value => getUpdate(value)}
                        getUpdate2={value => getUpdate2(value)} scrollY={scrollY} />
                    {!activeFlashStart && dataService?.flash_product?.length > 0 ?
                        dataService.flash_product.map((value, index) => <FlashSale_Product {...props} dataService={value} key={index} />) :
                        <View style={[stylesMain.ItemCenter, { marginTop: 10, width, height: 100, backgroundColor: '#fff' }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                            { textAlign: 'center', textAlignVertical: 'center' }]}>ไม่มีรายการในหมวดหมู่นี้</Text>
                        </View>}
                </>}
            </>}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>;
}
///----------------------------------------------------------------------------------------------->>>> Time_FlashSale
export let Time_FlashSale = (props) => {
    const { activeFlashStart, activeReData, curTime, dataService2, getUpdate, getUpdate2, scrollY } = props;
    const [activeselectedIndex, setActiveselectedIndex] = useState(true);
    const [activeselectedIndex2, setActiveselectedIndex2] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [endTime, setEndTime] = useState(new Date());
    const [flash_item, setFlash_item] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndex2, setSelectedIndex2] = useState(0);
    var item = []
    var item2 = [{
        name: 'ทั้งหมด'
    }];
    var Hours = 0;
    var Minutes = 0;
    var Seconds = 0;
    var uri = `${finip}/home/category_mobile`;
    const marginTopFlashsale = scrollY.interpolate({
        inputRange: [145, 155],
        outputRange: [10, 0],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    const marginTopTime = scrollY.interpolate({
        inputRange: [155, 180],
        outputRange: [0, -56],
        extrapolate: 'clamp',
        useNativeDriver: false,
    });
    dataService?.map((value) => item2.push({ name: value.name }));
    dataService2 && dataService2.map((value, index) => {
        var start_period = value.start_period.split(' ');
        var start_period_1 = start_period[0].split('-');
        var start_period_2 = start_period[1].split(':');
        var end_period = value.end_period.split(' ');
        var end_period_1 = end_period[0].split('-');
        var end_period_2 = end_period[1].split(':');
        var endday = new Date();
        if (activeselectedIndex && index == selectedIndex) {
            if (value.flash_item == 'now') {
                endday.setFullYear(end_period_1[0], (end_period_1[1] * 1) - 1, end_period_1[2]);
                endday.setHours(end_period_2[0]);
                endday.setMinutes(end_period_2[1]);
                endday.setSeconds(end_period_2[2]);
                setActiveselectedIndex(false);
                setEndTime(endday);
                setFlash_item('now');
            } else {
                endday.setFullYear(start_period_1[0], (start_period_1[1] * 1) - 1, start_period_1[2]);
                endday.setHours(start_period_2[0]);
                endday.setMinutes(start_period_2[1]);
                endday.setSeconds(start_period_2[2]);
                setActiveselectedIndex(false);
                setEndTime(endday);
                setFlash_item('future');
            };
        };
        return item.push({ name: value.time_show, subname: value.flash_item == 'now' ? 'กำลังดำเนินการอยู่' : 'เร็วๆนี้' });
    });
    endTime && ([
        Hours = Number(new Date(endTime).getHours()) - Number(new Date(curTime).getHours()),
        (Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) > 0 && (
            Hours = Hours + ((Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) * 24)
        ),
        Minutes = Number(new Date(endTime).getMinutes()) - Number(new Date(curTime).getMinutes()),
        Seconds = Number(new Date(endTime).getSeconds()) - Number(new Date(curTime).getSeconds()),
        Hours > 0 && (Minutes < 0 || Seconds < 0) && ([
            Hours = Hours - 1,
            Minutes = 60 + Minutes
        ]),
        Minutes > 0 && Seconds < 0 && ([
            Minutes = Minutes - 1,
            Seconds = 60 + Seconds
        ])
    ]);
    let getData = (value) => { setActiveselectedIndex2(false); setDataService(value); };
    let updateIndex = (value) => {
        setActiveselectedIndex(true);
        setSelectedIndex(value.selectedIndex);
        getUpdate(dataService2[value.selectedIndex].pkid);
    };
    let updateIndex2 = (value) => {
        var id_type = value.selectedIndex > 0 ? dataService[value.selectedIndex - 1].id_type : undefined
        setSelectedIndex2(value.selectedIndex);
        getUpdate2(id_type)
    }
    useEffect(() => {
        activeselectedIndex2 && GetServices({ uriPointer: uri, getDataSource: (value) => getData(value) });
    }, [activeselectedIndex2])
    return <>
        <Animatable.View elevation={1} style={[stylesMain.FrameBackground, stylesMain.FlexRow,
        { marginTop: marginTopFlashsale, marginBottom: marginTopTime, paddingBottom: 0, height: 40, }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { textAlignVertical: 'center' }]}>FLASH SALE</Text>
            <IconMaterialIcons name='access-time' size={25} style={[stylesMain.ItemCenterVertical, { marginLeft: 10, }]} />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,
            { margin: 3, textAlignVertical: 'center', }]}>{flash_item == 'now' ? 'จบใน' : 'เริ่มใน'}</Text>
            <View style={[stylesMain.Time_FlashSale_TimeBox, stylesMain.ItemCenterVertical,]}>
                <Text style={stylesMain.Time_FlashSale_TimeText}>{Hours < 10 ? Hours <= 0 ? '00' : '0' + Hours : Hours}</Text>
            </View>
            <View style={[stylesMain.Time_FlashSale_TimeBox, stylesMain.ItemCenterVertical,]}>
                <Text style={stylesMain.Time_FlashSale_TimeText}>{Minutes < 10 ? Minutes <= 0 ? '00' : '0' + Minutes : Minutes}</Text>
            </View>
            <View style={[stylesMain.Time_FlashSale_TimeBox, stylesMain.ItemCenterVertical,]}>
                <Text style={stylesMain.Time_FlashSale_TimeText}>{Seconds < 10 ? Seconds <= 0 ? '00' : '0' + Seconds : Seconds}</Text>
            </View>
        </Animatable.View>
        <Animatable.View style={[stylesTopic.FlashSale_Tag, { paddingBottom: 0 }]}>
            <TabBar sendData={(value) => updateIndex(value)} item={item} activeColor={'#fff'} type='tag' tagBottom={mainColor}
                noMarginIop />
        </Animatable.View>
        {!activeselectedIndex2 &&
            <View style={stylesTopic.FlashSale_Tag}>
                <ScrollView horizontal>
                    <TabBar inactiveColor={mainColor} sendData={(value) => updateIndex2(value)} item={item2} numberOfLines={1}
                        radiusBox={4} noLimit type='box' />
                </ScrollView>
            </View>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>> FlashSale_Product
export let FlashSale_Product = (props) => {
    const { dataService, navigation } = props;
    var image_product = `${finip}/${dataService.image_path}/${dataService.image}`;
    return <View style={stylesTopic.FlashSale_Product}>
        <View style={[stylesTopic.FlashSale_ProductBox, { flex: 1 }]}>
            <TouchableOpacity onPress={() =>
                NavigationNavigate({ goScreen: 'Detail', setData: { id_item: dataService.id_product }, navigation })}>
                <View style={stylesTopic.FlashSale_ProductBox_Image}>
                    <FastImage style={stylesTopic.Image} source={{ uri: image_product }} resizeMode={FastImage.resizeMode.contain} />
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flex: 1, }}>
                <TouchableOpacity onPress={() =>
                    NavigationNavigate({ goScreen: 'Detail', setData: { id_item: dataService.id_product }, navigation })}>
                    <View style={{ width: width * 0.52 }}>
                        <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>
                            {dataService.name}</Text>
                        <NumberFormat value={dataService.price} displayType={'text'} thousandSeparator={true} prefix={'฿'}
                            renderText={value => <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyBoldBold,
                            { fontSize: 14, marginLeft: 10, }]}>{value}</Text>} />
                    </View>
                </TouchableOpacity>
                <View style={{ width: 40, justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Cart', navigation })}>
                        <View style={[stylesTopic.FlashSale_ProductBox_Icon]}>
                            <IconAntDesign RightItem name="shoppingcart" size={30} color='#FFFFFF' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>;
};