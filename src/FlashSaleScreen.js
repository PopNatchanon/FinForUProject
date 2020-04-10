///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { GetServices, TabBar, } from './tools/Tools';
import { Slide } from './src_Promotion/DealScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from './navigator/IpConfig';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FlashSaleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFlashStart: true,
            scrollY: new Animated.Value(0)
        };
    }
    getData = (dataService) => {
        this.setState({ activeFlashStart: false, dataService, flash_start: dataService.flash_start })
    }
    getReData = () => {
        this.setState({ activeFlashStart: true, dataService: [], flash_start: [] })
    }
    getUpdate = (pkid) => {
        this.setState({ activeFlashStart: true, dataService: [], pkid })
    }
    getUpdate2 = (id_type) => {
        this.setState({ activeFlashStart: true, dataService: [], id_type })
    }
    render() {
        const { navigation } = this.props
        const { activeFlashStart, dataService, flash_start, id_type, pkid, scrollY } = this.state
        const marginTopFlashsale = scrollY.interpolate({
            inputRange: [145, 155],
            outputRange: [10, 0],
            extrapolate: 'clamp',
        })
        const marginTopTime = scrollY.interpolate({
            inputRange: [155, 180],
            outputRange: [0, -56],
            extrapolate: 'clamp',
        })
        var uri = finip + '/flashsale/flash_schedule';
        var dataBody = {
            id_flash: pkid ? pkid : "",
            id_category: id_type ? id_type : "",
            device: "mobile_device"
        }
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {
                    activeFlashStart == true &&
                    <GetServices dataBody={dataBody} getDataSource={this.getData.bind(this)}
                        showConsole='activeFlashStart'
                        uriPointer={uri} />
                }
                <AppBar1 titleHead={'FLASH SALE'} backArrow searchBar chatBar navigation={navigation} />
                <ScrollView
                    stickyHeaderIndices={[1]}
                    scrollEventThrottle={8}
                    onScroll={
                        Animated.event([{
                            nativeEvent: { contentOffset: { y: scrollY } }
                        }])
                    }>
                    <Slide />
                    {
                        dataService && ([
                            <Time_FlashSale activeFlashStart={activeFlashStart} dataService2={flash_start}
                                getReData={this.getReData.bind(this)} getUpdate={this.getUpdate.bind(this)}
                                getUpdate2={this.getUpdate2.bind(this)} key={'Time_FlashSale'}
                                marginTopFlashsale={marginTopFlashsale} marginTopTime={marginTopTime} />,
                            activeFlashStart == false && (
                                dataService.flash_product.length > 0 ?
                                    dataService.flash_product.map((value, index) => {
                                        return <FlashSale_Product dataService={value} key={'FlashSale_Product'} key={index}
                                            navigation={navigation} />
                                    }) :
                                    <View style={[stylesMain.ItemCenter, { marginTop: 10, width, height: 100, backgroundColor: '#fff' }]}>
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                                             textAlign: 'center', textAlignVertical: 'center' }]}>ไม่มีรายการในหมวดหมู่นี้</Text>
                                    </View>
                            )
                        ])
                    }
                </ScrollView>
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Time_FlashSale
export class Time_FlashSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeselectedIndex: true,
            activeselectedIndex2: true,
            curTime: new Date(),
            dataService: [],
            selectedIndex: 0,
            selectedIndex2: 0,
            endTime: new Date(),
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick() {
        this.setState({
            curTime: new Date()
        });
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    getData(dataService) {
        this.setState({ activeselectedIndex2: false, dataService, })
    }
    updateIndex(selectedIndex) {
        const { dataService2, getUpdate } = this.props
        this.setState({ activeselectedIndex: true, selectedIndex })
        getUpdate(dataService2[selectedIndex].pkid)
    }
    updateIndex2(selectedIndex2) {
        const { getUpdate2 } = this.props
        const { dataService } = this.state
        this.setState({ selectedIndex2 })
        var id_type = selectedIndex2 > 0 ? dataService[selectedIndex2 - 1].id_type : undefined
        getUpdate2(id_type)
    }
    render() {
        const { activeFlashStart, dataService2, getReData, marginTopFlashsale, marginTopTime } = this.props
        const { activeselectedIndex, activeselectedIndex2, curTime, dataService, endTime, flash_item, selectedIndex, } = this.state
        var uri = finip + '/home/category_mobile';
        const item = []
        var item2 = [{
            name: 'ทั้งหมด'
        }]
        dataService.map((value) => {
            return item2.push({ name: value.name })
        })
        dataService2.map((value, index) => {
            var start_period = value.start_period.split(' ')
            var start_period_1 = start_period[0].split('-')
            var start_period_2 = start_period[1].split(':')
            var end_period = value.end_period.split(' ')
            var end_period_1 = end_period[0].split('-')
            var end_period_2 = end_period[1].split(':')
            var today = new Date();
            var someday = new Date();
            var endday = new Date();
            someday.setFullYear(start_period_1[0], (start_period_1[1] * 1) - 1, start_period_1[2])
            someday.setHours(start_period_2[0])
            someday.setMinutes(start_period_2[1])
            someday.setSeconds(start_period_2[2])
            activeselectedIndex == true && index == selectedIndex && (
                value.flash_item == 'now' ?
                    (
                        endday.setFullYear(end_period_1[0], (end_period_1[1] * 1) - 1, end_period_1[2]),
                        endday.setHours(end_period_2[0]),
                        endday.setMinutes(end_period_2[1]),
                        endday.setSeconds(end_period_2[2]),
                        this.setState({ activeselectedIndex: false, endTime: endday, flash_item: 'now' })
                    ) :
                    (
                        endday.setFullYear(start_period_1[0], (start_period_1[1] * 1) - 1, start_period_1[2]),
                        endday.setHours(start_period_2[0]),
                        endday.setMinutes(start_period_2[1]),
                        endday.setSeconds(start_period_2[2]),
                        this.setState({ activeselectedIndex: false, endTime: endday, flash_item: 'future' })
                    )
            )
            return item.push({ name: value.time_show, subname: value.flash_item == 'now' ? 'กำลังดำเนินการอยู่' : 'เร็วๆนี้' })
        })
        var Hours = 0
        var Minutes = 0
        var Seconds = 0
        endTime && (
            Hours = Number(new Date(endTime).getHours()) - Number(new Date(curTime).getHours()),
            (Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) > 0 && (
                Hours = Hours + ((Number(new Date(endTime).getDate()) - Number(new Date(curTime).getDate())) * 24)
            ),
            Minutes = Number(new Date(endTime).getMinutes()) - Number(new Date(curTime).getMinutes()),
            Seconds = Number(new Date(endTime).getSeconds()) - Number(new Date(curTime).getSeconds()),
            activeFlashStart == false && Hours <= 0 && Minutes <= 0 && Seconds <= 0 && (
                getReData(true)
            ),
            Hours > 0 && Minutes < 0 && (
                Hours = Hours - 1,
                Minutes = 60 + Minutes
            ),
            Minutes > 0 && Seconds < 0 && (
                Minutes = Minutes - 1,
                Seconds = 60 + Seconds
            )
        )
        return ([
            <Animatable.View elevation={1} style={[stylesMain.FrameBackground, stylesMain.FlexRow, {
                marginTop: marginTopFlashsale, marginBottom: marginTopTime,
            }]}>
                {
                    activeselectedIndex2 == true &&
                    <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
                }
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>FLASH SALE</Text>
                <IconMaterialIcons name='access-time' size={25} style={{ marginLeft: 10, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 3 }]}>{flash_item == 'now' ? 'จบใน' : 'เริ่มใน'}</Text>
                <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>
                    {Hours < 10 ? Hours <= 0 ? '00' : '0' + Hours : Hours}</Text></View>
                <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>
                    {Minutes < 10 ? Minutes <= 0 ? '00' : '0' + Minutes : Minutes}</Text></View>
                <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>
                    {Seconds < 10 ? Seconds <= 0 ? '00' : '0' + Seconds : Seconds}</Text></View>
            </Animatable.View>,
            <Animatable.View style={[stylesTopic.FlashSale_Tag, { paddingBottom: 0 }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    item={item}
                    // widthBox={98}
                    activeColor={'#fff'}
                    type='tag'
                    tagBottom={'#0A55A6'}
                    noMarginIop />
            </Animatable.View>,
            activeselectedIndex2 == false &&
            <View style={stylesTopic.FlashSale_Tag}>
                <ScrollView horizontal>
                    <TabBar
                        inactiveColor='#0A55A6'
                        sendData={this.updateIndex2.bind(this)}
                        item={item2}
                        numberOfLines={1}
                        radiusBox={4}
                        noLimit
                        type='box' />
                </ScrollView>
            </View>
        ]);
    }
}
///----------------------------------------------------------------------------------------------->>>> FlashSale_Product
export class FlashSale_Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props;
        if (
            ////>nextProps
            navigation !== nextProps.navigation
            ////>nextState
        ) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.push(value, value2)
    }
    render() {
        const { dataService } = this.props
        var image_product = finip + '/' + dataService.image_path + '/' + dataService.image
        return (
            <View style={stylesTopic.FlashSale_Product}>
                <View style={[stylesTopic.FlashSale_ProductBox, { flex: 1 }]}>
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(
                        this, 'DetailScreen', { id_item: dataService.id_product })}>
                        <View style={stylesTopic.FlashSale_ProductBox_Image}>
                            <FastImage
                                style={stylesTopic.Image}
                                source={{
                                    uri: image_product
                                }}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(
                            this, 'DetailScreen', { id_item: dataService.id_product })}>
                            <View style={{ width: width * 0.52 }}>
                                <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>
                                    {dataService.name}</Text>
                                <NumberFormat
                                    value={dataService.price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice,
                                            stylesFont.FontFamilyBoldBold, {
                                                fontSize: 14, marginLeft: 10,
                                            }
                                        ]}>
                                            {value}</Text>
                                    } />
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: 40, justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'CartScreen')}>
                                <View style={[stylesTopic.FlashSale_ProductBox_Icon]}>
                                    <IconAntDesign RightItem name="shoppingcart" size={30} color='#FFFFFF' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}