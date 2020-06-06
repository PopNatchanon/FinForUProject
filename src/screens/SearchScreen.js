///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain, { mainColor } from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, BannerBar_THREE, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetData, GetServices, SlideTab2, NavigationNavigateScreen, } from '../customComponents/Tools'
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeArray: true,
            activeGetServices: true,
            activeGetCurrentUser: true,
            actionStart: true,
            Count: 0,
            data: [],
            filterValue: { popular: 'popular' },
            sliderVisible: false,
        };
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService })
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie });
    }
    setSlider = (sliderVisible) => {
        this.setState({ sliderVisible })
    }
    setStart = () => {
        const { dataServiceBU, filterValue, } = this.state;
        filterValue.id_type = dataServiceBU.category[0].id_type
        this.setState({
            activeGetServices: true, filterValue, actionStart: false, id_type: filterValue.id_type
        });
    }
    setStatefilterValue = (value) => {
        const { dataServiceBU, filterValue, } = this.state;
        filterValue.minvalue = (value && value.minvalue ? value.minvalue : '');
        filterValue.maxvalue = (value && value.maxvalue ? value.maxvalue : '');
        filterValue.id_type = ((value.selectedIndex != -1 && value.selectedIndex != '') && value.listIndex == 0) ?
            dataServiceBU.category[value.selectedIndex].id_type : ''
        this.setState({
            activeGetServices: true, filterValue, sliderVisible: false, id_type: filterValue.id_type, actionStart: false,
        });
    }
    setStateMainfilterValue = (value) => {
        const { filterValue, } = this.state;
        filterValue.popular = value.selectedIndex == 0 ? 'popular' : '';
        filterValue.best_sale = value.selectedIndex == 1 ? 'best_sale' : '';
        filterValue.lastest = value.selectedIndex == 2 ? 'lastest' : '';
        filterValue.sort_price = value.selectedIndex == 3 ? value.actionReturn : '';
        this.setState({ activeGetServices: true, filterValue });
    }
    componentDidMount() {
        const { navigation } = this.props;
        const modeStore = navigation.getParam('modeStore');
        const SearchText = navigation.getParam('SearchText');
        const id_type = navigation.getParam('id_type');
        this.setState({ modeStore, SearchText, id_type })
    }
    render() {
        const { navigation } = this.props;
        const {
            activeArray, activeGetCurrentUser, activeGetServices, actionStart, cokie, currentUser, data, dataService, dataServiceBU,
            filterValue, modeStore, SearchText, sliderVisible, id_type,
        } = this.state;
        var uri = `${finip}/search/search_product`
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer ? currentUser.id_customer : '',
            key: SearchText, //<< ใช้ค้นหาสินค้า
            popular: filterValue && filterValue.popular ? filterValue.popular : '', //<< ถ้าเลือกออันส่งค่า “popular” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            lastest: filterValue && filterValue.lastest ? filterValue.lastest : '', //<< ถ้าเลือกออันส่งค่า “lastest” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            best_sale: filterValue && filterValue.best_sale ? filterValue.best_sale : '', // << ถ้าเลือกออันส่งค่า “best_sale” มาด้วย ไม่ได้เลือกส่งค่าว่างมา
            sort_price: filterValue && filterValue.sort_price ? filterValue.sort_price : '', //<< เลือกราคาต่ำสุดส่ง “min” สูงสุดส่ง “max” ถ้าไม่ได้เลือกเลยส่งค่าว่าง
            min_price: filterValue && filterValue.minvalue ? Number(filterValue.minvalue) : '',
            max_price: filterValue && filterValue.maxvalue ? Number(filterValue.maxvalue) : '',
            id_type: filterValue && filterValue.id_type ? filterValue.id_type : '' //<< กรณีเลือกแบบระเลียด
        };
        var uri2 = `${finip}/search/other_store`
        var dataBody2 = {
            id_customer: currentUser && currentUser.id_customer,
            id_type
        };
        if (modeStore == undefined && dataService && activeArray == true) {
            var title = 'หมวดหมู่'
            var subtitle = []
            for (var n = 0; n < dataService.category.length; n++) {
                subtitle.push({ name: dataService.category[n].name })
            }
            data.push({ title, subtitle })
            this.setState({ activeArray: false, data, dataServiceBU: dataService })
        }
        if (actionStart == true && dataService && dataServiceBU && filterValue.id_type == undefined) {
            this.setStart()
        }
        activeGetCurrentUser == true &&
            GetData({ getCokie: true, getSource: this.getSource.bind(this), getUser: true, })
        modeStore == true && activeGetCurrentUser == false && activeGetServices == true &&
            GetServices({ uriPointer: uri2, dataBody: dataBody2, getDataSource: this.getData.bind(this), })
        SearchText && activeGetCurrentUser == false && activeGetServices == true &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView} >
                <AppBar searchBar={SearchText ? undefined : true} navigation={navigation} SearchText={SearchText} backArrow cartBar />
                {
                    modeStore == true ?
                        (
                            <ScrollView>
                                <HeadBox navigation={navigation} SearchText={SearchText} />
                                {
                                    dataService && dataService.store && dataService.store.map((value, index) => {
                                        return <StoreCard cokie={cokie} currentUser={currentUser} dataService={value} key={index}
                                            navigation={navigation} />
                                    })
                                }
                            </ScrollView>
                        ) :
                        SearchText ? (
                            <ScrollView>
                                <HeadBox id_type={id_type} navigation={navigation} SearchText={SearchText} otherOption />
                                {
                                    dataService && dataService.store && dataService.store.map((value, index) => {
                                        return <StoreCard cokie={cokie} currentUser={currentUser} dataService={value} key={index}
                                            navigation={navigation} />
                                    })
                                }
                                <BannerBar_THREE />
                                <Button_Bar filterValue={this.setStateMainfilterValue.bind(this)}
                                    setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{
                                        getSlider: sliderVisible, count: 0
                                    }} />
                                {
                                    activeGetServices == false && actionStart == false && dataService && dataService.product &&
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService.product} />
                                }
                            </ScrollView>
                        ) :
                            <View></View>
                }
                <SlideTab2 data={data} filterValue={this.setStatefilterValue.bind(this)} sliderVisible={sliderVisible}
                    setStateSliderVisible={this.setSlider.bind(this)} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> HeadBox
export class HeadBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation, otherOption, SearchText, id_type } = this.props
        return (
            <View>
                <View style={[stylesMain.FrameBackgroundTextBox]}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                        ร้านค้าที่เกี่ยวข้องกับ <Text>"{SearchText}"</Text></Text>
                    {
                        otherOption &&
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({
                            goScreen: 'SearchScreen', setData: { modeStore: true, SearchText, id_type }, navigation
                        })}>
                            <View style={[stylesMain.FlexRow, { marginRight: 4, marginTop: 8 }]}>
                                <Text style={[
                                    stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7,
                                    stylesMain.ItemCenterVertical, {
                                        marginRight: 0,
                                    }
                                ]}>
                                    ร้านค้าอื่นๆ</Text>
                                <IconEntypo name="chevron-right" size={18} style={[stylesMain.ItemCenterVertical, {
                                    color: mainColor
                                }]} />
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreCard
export class StoreCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeGetServices: true,
        }
    }
    getData = (dataService2) => {
        this.setState({ activeFollow: false, activeGetServices: false, dataService2 })
    }
    setStateFollow = () => {
        this.setState({ activeFollow: true, activeGetServices: true })
    }
    render() {
        const { cokie, currentUser, dataService, navigation } = this.props
        const { activeFollow, activeGetServices, dataService2, } = this.state
        var uri = `${finip}/brand/follow_data`;
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            id_store: dataService.id_store,
            follow: activeFollow == true ? "active" : '',

        };
        var dataMySQL = `${finip}/${dataService.store_path}/${dataService.image_store}`;
        activeGetServices == true &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: this.getData.bind(this) })
        return (
            <View style={stylesMain.BoxStore5Box}>
                <TouchableOpacity style={stylesMain.FlexRow}
                    onPress={() => NavigationNavigateScreen({ goScreen: 'StoreScreen', setData: { id_item: 24 }, navigation })}>
                    <View style={[stylesMain.BoxStore5Image, stylesMain.ItemCenterVertical, {
                        width: 45, height: 45, marginRight: 10,
                    }]}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.BoxStore5Image]} />
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
                            {dataService.store_name}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ผู้ติดตาม : {dataService2 && dataService2.number_follow}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#AAAAAA' }]}>
                            จำนวนสินค้า <Text style={{ color: mainColor }}>
                                {dataService.amount_product}</Text> |  คะแนน <Text style={{ color: mainColor }}>{
                                    dataService.rating}</Text></Text>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <View style={[
                            stylesMain.ItemCenter, {
                                width: 70, height: 25, backgroundColor: mainColor, borderRadius: 6, marginHorizontal: 2
                            }
                        ]}>
                            <TouchableOpacity onPress={() => this.setStateFollow()}>
                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                                    {dataService2 && dataService2.output}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[{ width: 70, height: 25, backgroundColor: mainColor, borderRadius: 6, marginHorizontal: 2 }]}>
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: '100%', height: '100%' }]}
                                onPress={() => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 1, navigation }
                                })}>
                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                                    พูดคุย</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}