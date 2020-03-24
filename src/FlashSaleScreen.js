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
///----------------------------------------------------------------------------------------------->>>> Main
export default class FlashSaleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        const { scrollY } = this.state
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            scrollY !== nextState.scrollY
        ) {
            return true
        }
        return false
    }
    render() {
        const { navigation } = this.props
        const { scrollY } = this.state
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
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
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
                    <Time_FlashSale marginTopFlashsale={marginTopFlashsale} marginTopTime={marginTopTime} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
                    <FlashSale_Product navigation={navigation} />
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
            dataService: [],
            selectedIndex: 0,
            selectedIndex2: 0,
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { marginTopFlashsale, marginTopTime } = this.props
        const { dataService } = this.state
        if (
            ////>nextProps
            marginTopFlashsale !== nextProps.marginTopFlashsale || marginTopTime !== nextProps.marginTopTime ||
            ////>nextState
            dataService !== nextState.dataService
        ) {
            return true
        }
        return false
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    updateIndex2(selectedIndex2) {
        this.setState({ selectedIndex2 })
    }
    render() {
        const { marginTopFlashsale, marginTopTime } = this.props
        const { dataService } = this.state
        var uri = finip + '/home/category_mobile';
        const item = [{
            name: '12:00',
            subname: 'กำลังดำเนินการอยู่'
        }, {
            name: '18:00',
            subname: 'เร็วๆนี้'
        }, {
            name: '21:00',
            subname: 'เร็วๆนี้'
        }, {
            name: '00:00',
            subname: 'พรุ่งนี้'
        }]
        var item2 = [{
            name: 'ทั้งหมด'
        }]
        dataService.map((item) => { return item2.push({ name: item.name }) })
        return ([
            <Animatable.View elevation={1} style={[stylesMain.FrameBackground, stylesMain.FlexRow, {
                marginTop: marginTopFlashsale, marginBottom: marginTopTime,
            }]}>
                <GetServices uriPointer={uri} getDataSource={this.getData.bind(this)} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>FLASH SALE</Text>
                <IconMaterialIcons name='access-time' size={25} style={{ marginLeft: 10, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 3 }]}>จบใน</Text>
                <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>01</Text></View>
                <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>45</Text></View>
                <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>40</Text></View>
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
        return (
            <View style={stylesTopic.FlashSale_Product}>
                <View style={[stylesTopic.FlashSale_ProductBox, { flex: 1 }]}>
                    <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'DetailScreen', { id_item: 123 })}>
                        <View style={stylesTopic.FlashSale_ProductBox_Image}>
                            <FastImage
                                style={stylesTopic.Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-10-10-1570690991.png'
                                }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'DetailScreen', { id_item: 123 })}>
                            <View style={{ width: '100%' }}>
                                <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>
                                    ห้องพัก Deluxe Pool Villa </Text>
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