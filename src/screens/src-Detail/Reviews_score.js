///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesDetail from '../../style/StylesDetailScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { TabBar, LoadingScreen, GetServices } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Reviews_score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
        };
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService })
    }
    filterValue = (value) => {
        const filterValue = {}
        filterValue.rating = value == 'all' ? '' : value > 0 && value <= 5 ? value : ''
        filterValue.product = value == 'thisproduct' ? 'this' : ''
        this.setState({ activeGetServices: true, filterValue, })
    }
    render() {
        const { navigation } = this.props
        const { activeGetServices, dataService, filterValue } = this.state
        const id_product = navigation.getParam('id_product')
        const id_store = navigation.getParam('id_store')
        var uri = `${finip}/product/store_review`;
        var dataBody = {
            id_store: id_store,
            rating: filterValue && filterValue.rating ? filterValue.rating + '' : '',
            id_product: filterValue && filterValue.product ? id_product : '',
        };
        activeGetServices == true &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), showConsole: 'store_review' })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {
                    activeGetServices == true &&
                    <LoadingScreen key={'LoadingScreen'} />
                }
                <AppBar1 backArrow navigation={navigation} titleHead='คะแนน' />
                <Reviews_Bar filterValue={this.filterValue.bind(this)} />
                <ScrollView>
                    {
                        dataService && dataService.list_reviews.length > 0 ?
                            (
                                dataService.list_reviews.map((value, index) => { return <Reviews_Box dataService={value} key={index} /> })
                            ) :
                            null
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Reviews_Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: true,
            selected: { selectedIndex: 0, selectedIndex2: -1 },
        };
    }
    updateIndex = (value) => {
        const { filterValue } = this.props;
        const { selected } = this.state;
        value.selectedIndex != -1 && ([
            selected.selectedIndex = value.selectedIndex,
            selected.selectedIndex2 = -1,
            this.setState({ activeTab: true, selected, }),
            filterValue(value.selectedIndex == 0 ? 'all' : 'thisproduct')

        ])
    }
    updateIndex2 = (value) => {
        const { filterValue } = this.props;
        const { selected } = this.state;
        value.selectedIndex != -1 && ([
            selected.selectedIndex = -1,
            selected.selectedIndex2 = value.selectedIndex,
            this.setState({ activeTab: true, selected, }),
            filterValue(5 - value.selectedIndex)
        ])
    }
    render() {
        const { activeTab, selected, } = this.state
        activeTab == true &&
            this.setState({ activeTab: false })
        const items1 = [{
            name: 'ทั้งหมด',
        }, {
            name: 'เฉพาะสินค้าชั้นนี้',
        },]
        const items2 = [{
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>,
        }, {
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>,
        }, {
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>,
        }, {
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>,
        }, {
            name: <IconFontAwesome name='star' size={9} color='#FFAC33' />,
        },]
        return (
            <View style={{ backgroundColor: '#FFFFFF', borderBottomColor: '#E9E9E9', borderBottomWidth: 2, paddingBottom: 10 }}>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center' }]}>
                        <TabBar
                            sendData={this.updateIndex.bind(this)}
                            item={items1}
                            type='box'
                            SetValue={selected.selectedIndex}
                            // noLimit
                            numberBox
                            radiusBox={4} />
                    </View>
                </View>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center' }]}>
                        <TabBar
                            sendData={this.updateIndex2.bind(this)}
                            item={items2}
                            type='box'
                            SetValue={selected.selectedIndex2}
                            // noLimit
                            numberBox
                            radiusBox={4} />
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Reviews_Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    starReview(star, starSize) {
        let starBox = []
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#FFAC33' />
                )
            } else {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#E9E9E9' />
                )
            }
        }
        return starBox
    }
    render() {
        const { dataService } = this.props;
        const image_customer = dataService.user_type == 'fin' ?
            `${finip}/${dataService.path_customer}/${dataService.img_customer}` :
            dataService.img_customer;
        var img_rate = dataService.img_rate.length > 0 && dataService.img_rate.split(';')
        return (
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={stylesDetail.Comment_R}>
                    <FastImage
                        style={stylesDetail.Comment_R_Image}
                        source={{ uri: image_customer }} />
                    <View style={stylesDetail.Comment_R_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                            {dataService.name}</Text>
                        <View style={stylesDetail.Comment_R_Iconstar}>
                            {
                                this.starReview(dataService.rating, 15)
                            }
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            {dataService.detail}</Text>
                        <View style={[stylesDetail.Comment_Image_A, stylesMain.BottomSpace]}>
                            {
                                img_rate.map((value, index) => {
                                    const image_product = `${finip}/${dataService.path_rate_thumb}/${value}`
                                    return <FastImage
                                        key={index}
                                        style={stylesDetail.Reviews_Image}
                                        source={{ uri: image_product }}
                                        resizeMode={FastImage.resizeMode.contain} />
                                })
                            }
                        </View>
                        <Text style={[
                            stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace
                        ]}>
                            {dataService.date_review} | {dataService.product_name}</Text>
                    </View>
                </View>
            </View >
        );
    }
}