///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../style/StylesMainScreen'
import stylesFont from '../../../style/stylesFont';
import stylesPromotionDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Button_Bar } from '../../HighlightScreen';
import { GetServices, GetCoupon } from '../../tools/Tools';
import { TodayProduct, Slide, AppBar1, ExitAppModule } from '../../MainScreen';
import { Store_Detail } from '../../Recommend_Store';
import { ProductBox } from '../../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../.././navigator/IpConfig';
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
                    <View style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ดีลสุดคุ้ม' />
                        <ScrollView>
                            <Deal_CuponToday navigation={this.props.navigation} />
                            <Button_Bar navigation={this.props.navigation} />
                            <Deal_ProductToday />
                            <Deal_ProductToday />
                            <Deal_ProductToday />
                        </ScrollView>
                    </View>
                )
            case 1:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ดีลสุด Exclusive' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
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
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
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
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
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
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                        </ScrollView>
                    </View>
                )
            case 5:
                return (
                    <View style={[stylesMain.SafeAreaView, stylesMain.ItemCenter]}>
                        <Not_Internet navigation={navigation} />
                    </View>
                )
        }
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {this.PathList()}
                <ExitAppModule navigation={this.props.navigation} />
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
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Deal_ProductToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={[stylesMain.FrameBackground, { borderColor: '#ECECEC', borderWidth: 1 }]}>
                    <View style={[stylesMain.FlexRow, { margin: 5 }]}>
                        <FastImage style={{ height: 40, width: 40, marginTop: 10, borderRadius: 20, }}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Lacoste Store</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', padding: 5 }}>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5 }]}>
                            <View style={{ height: '80%', width: '100%' }}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                            </View>
                            <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5 }]}>
                            <View style={{ height: '80%', width: '100%' }}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572329268.jpg',
                                    }}
                                />
                            </View>
                            <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 1, height: 120, padding: 5 }]}>
                            <View style={{ height: '80%', width: '100%' }}>
                                <FastImage style={stylesMain.BoxProduct1Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-09-1570615168.png',
                                    }}
                                />
                            </View>
                            <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                        </View>
                        <View style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5, backgroundColor: '#0A55A6' }]}>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#FFFFFF' }]}>50%</Text>
                                <TouchableOpacity>
                                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', paddingHorizontal: 5, borderRadius: 5 }]}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#0A55A6' }]}>เก็บ</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class Not_Internet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
            <View style={stylesMain.ItemCenter}>
                <FastImage style={{ height: 200, width: 200 }}
                    source={{
                        uri: ip + '/MySQL/uploads/icon_5/wifi-connected-png-8.png',
                    }}
                />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: 300, textAlign: 'center', color: '#969BA0' }]}> WHOOPS! ดูเหมือนว่าจะมีปัญหาในการเชื่อมต่อเซิร์ฟเวอร์ ลองพยายามตรวจสอบ
                การเชื่อมต่ออินเตอร์เน็ตแล้วลองใหม่อีกครั้ง </Text>
                <TouchableOpacity activeOpacity={1} onPress={this.navigationNavigateScreen.bind(this, 'goBack')}>
                    <View style={[stylesMain.ItemCenter, { padding: 10, backgroundColor: '#0A55A6', borderRadius: 5, marginTop: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>อัปโหลดอีกครั้ง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
