///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesPromotionDeal from '../../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Button_Bar } from '../../HighlightScreen';
import { GetServices, ProductBox, Toolbar } from '../../tools/Tools';
import { TodayProduct, Slide, AppBar1 } from '../../MainScreen';
import { Store_Detail } from '../../Recommend_Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Deal_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    PathList() {
        const { dataService } = this.state
        const { navigation } = this.props
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} />
                        <Deal_CuponToday navigation={this.props.navigation} />
                        <Button_Bar navigation={this.props.navigation} />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ดีลสุด Exclusive' />
                        <ScrollView>
                            <Slide />
                            <Button_Bar navigation={this.props.navigation} />
                            {
                                dataService ?
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
                                    null
                            }
                        </ScrollView>
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ร้านค้ามือสองลดราคา' />
                        <ScrollView>
                            <Slide />
                            <Button_Bar />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                        </ScrollView>
                    </View>
                )
            case 3:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='สินค้ามือสองลดราคา' />
                        <ScrollView>
                            <Slide />
                            <Button_Bar navigation={this.props.navigation} />
                            {
                                dataService ?
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
                                    null
                            }
                        </ScrollView>
                    </View>
                )
                case 4:
                    return (
                        <View>
                            <AppBar1 backArrow navigation={this.props.navigation} titleHead='ร้านค้าที่มีดีล' />
                            <Slide />
                            <Button_Bar />
                            <ScrollView>
                                <Store_Detail />
                                <Store_Detail />
                                <Store_Detail />
                                <Store_Detail />
                            </ScrollView>
                        </View>
                    )
        }
    }

    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {this.PathList()}
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Main
export class Deal_CuponToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={{ height: 150, width: '100%', backgroundColor: '#E0F0FF', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> เก็บคูปองลดเพิ่มทุกวัน </Text>
                </View>
                <View style={{ padding: 10, }}>
                    <View style={stylesPromotionDeal.Deal_Today_Box}>
                        <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
                        <ScrollView horizontal>
                            <View style={stylesPromotionDeal.Deal_Today_BoxImage}>
                                <FastImage style={stylesPromotionDeal.Deal_Today_Coinimage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                                <FastImage style={[stylesPromotionDeal.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                                <FastImage style={[stylesPromotionDeal.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                                <FastImage style={[stylesPromotionDeal.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}