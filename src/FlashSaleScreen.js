import React, { Component } from 'react';
import {
    View, ScrollView, SafeAreaView, TouchableOpacity, Text, Dimensions,
} from 'react-native';
import stylesTopic from '../style/styleTopic';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar, GetServices } from './tools/Tools';
import { AppBar1 } from './MainScreen';
import { finip, ip } from '../navigator/IpConfig';
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Main
export default class FlashSaleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 titleHead={'FLASH SALE'} backArrow searchBar chatBar navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <Time_FlashSale />
                    <FlashSale_Product navigation={this.props.navigation} />
                    <FlashSale_Product navigation={this.props.navigation} />
                    <FlashSale_Product navigation={this.props.navigation} />
                    <FlashSale_Product navigation={this.props.navigation} />
                    <FlashSale_Product navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class Time_FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            selectedIndex: 0,
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
        console.log(dataService)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
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
        this.state.dataService.map((item) => { return item2.push({ name: item.name }) })
        return (
            <View>
                <View style={[stylesMain.FrameBackground, stylesMain.FlexRow]}>
                    <GetServices uriPointer={uri} getDataSource={this.getData} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>FLASH SALE</Text>
                    <IconMaterialIcons name='access-time' size={25} style={{ marginLeft: 10, }} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 3 }]}>จบใน</Text>
                    <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>01</Text></View>
                    <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>45</Text></View>
                    <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>40</Text></View>
                </View>
                <View style={[stylesTopic.FlashSale_Tag, { paddingBottom: 0 }]}>
                    <TabBar
                        sendData={this.updateIndex}
                        item={item}
                        // widthBox={98}
                        activeColor={'#fff'}
                        type='tag'
                        tagBottom={'#0A55A6'}
                        noMarginIop
                    />
                </View>
                <View style={stylesTopic.FlashSale_Tag}>
                    <ScrollView horizontal>
                        <TabBar
                            inactiveColor='#0A55A6'
                            sendData={this.updateIndex}
                            item={item2}
                            numberOfLines={1}
                            radiusBox={4}
                            noLimit
                            type='box'
                        />
                    </ScrollView>
                </View>
            </View>

        );
    }
}

///-------------------------------------------------------------------------------///

export class FlashSale_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={stylesTopic.FlashSale_Product}>
                <View style={[stylesTopic.FlashSale_ProductBox, { flex: 1 }]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: 123 })}>
                        <View style={stylesTopic.FlashSale_ProductBox_Image}>
                            <FastImage
                                style={stylesTopic.Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-10-10-1570690991.png'
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: 123 })}>
                            <View style={{ width: '85%' }}>
                                <Text numberOfLines={4} style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>
                                    ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa ห้องพัก Deluxe Pool Villa </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'flex-end', width: 40 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CartScreen')}>
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

