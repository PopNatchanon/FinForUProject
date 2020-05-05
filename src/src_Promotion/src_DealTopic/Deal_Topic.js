///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../../style/StylesMainScreen'
import stylesFont from '../../../style/stylesFont';
import stylesPromotionDeal from '../../../style/stylePromotion-src/styleDealScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../style/styleTopic';
import stylesProfile from '../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Button_Bar } from '../../HighlightScreen';
import { GetServices, GetCoupon, GetData, TabBar, LoadingScreen } from '../../tools/Tools';
import { TodayProduct, Slide, AppBar1, ExitAppModule, } from '../../MainScreen';
import { Store_Detail } from '../../Recommend_Store';
import { ProductBox } from '../../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Deal_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            activeGetServices: true,
            activeGetServices2: true,
        };
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService })
    }
    getData2 = (dataService2) => {
        this.setState({ activeGetServices2: false, dataService2 })
    }
    getSource(value) {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, keycokie: value.keycokie })
    }
    getUpdateIndex = (value) => {
        const { dataService2, } = this.state
        var id_category = dataService2.category[value - 1] == undefined ? '' : dataService2.category[value - 1].id_type;
        this.setState({ activeGetServices2: true, id_category })
    }
    PathList() {
        const { navigation } = this.props
        const { activeGetCurrentUser, activeGetServices2, currentUser, dataService, dataService2, id_category, keycokie, } = this.state
        const selectedIndex = navigation.getParam('selectedIndex')
        const uri2 = finip + '/highlight/exclusive_deal'
        var dataBody2 = {
            device: 'mobile_device',
            id_category: id_category ? id_category : ''
        }
        switch (selectedIndex) {
            case 0:
                return (
                    <View style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='ดีลสุดคุ้ม' />
                        <ScrollView>
                            {[
                                dataService && dataService.banner &&
                                <Slide banner={dataService.banner} />,
                                currentUser &&
                                <Deal_CuponToday currentUser={currentUser} keycokie={keycokie} navigation={navigation} />,
                                <Button_Bar navigation={navigation} />,
                                dataService && dataService.store.map((value, index) => {
                                    const value2 = dataService.product_store.filter((value2) => {
                                        return value2.id_store == value.id_store
                                    })
                                    return <Deal_ProductToday dataService={value} dataService2={value2} key={index} />
                                })
                            ]}
                        </ScrollView>
                    </View>
                )
            case 1:
                return (
                    <View>
                        {
                            activeGetCurrentUser == false && activeGetServices2 == true &&
                            <GetServices dataBody={dataBody2} uriPointer={uri2}
                                getDataSource={this.getData2.bind(this)} key='exclusive_deal' showConsole='exclusive_deal'
                            />
                        }
                        <AppBar1 backArrow navigation={navigation} titleHead='ดีลสุด Exclusive' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            {
                                dataService && dataService.banner &&
                                <Slide banner={dataService.banner} />
                            }
                            <View style={{ marginBottom: 10 }}></View>
                            {[
                                dataService2 &&
                                <Button_Bar category={dataService2.category} key='Button_Bar' getUpdateIndex={this.getUpdateIndex.bind(this)}
                                    navigation={navigation} />,
                                dataService2 &&
                                <TodayProduct key='TodayProduct' noTitle navigation={navigation} loadData={dataService2.product} />
                            ]}
                        </ScrollView>
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='ร้านค้ามือสองลดราคา' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar />
                            {/* <Store_Detail /> */}
                        </ScrollView>
                    </View>
                )
            case 3:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='สินค้ามือสองลดราคา' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar navigation={navigation} />
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
                        <AppBar1 backArrow navigation={navigation} titleHead='ร้านค้าที่มีดีล' />
                        <ScrollView stickyHeaderIndices={[2]}>
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar />
                            {/* <Store_Detail /> */}
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
        const { activeGetCurrentUser, activeGetServices, activeGetServices2, keycokie, } = this.state
        const uri = finip + '/coupon/coupon_day_mobile'
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {[
                    (activeGetCurrentUser == true || activeGetServices == true || activeGetServices2 == true) &&
                    <LoadingScreen key='LoadingScreen' />,
                    activeGetCurrentUser == false && activeGetServices == true &&
                    <GetServices Authorization={keycokie} uriPointer={uri} getDataSource={this.getData.bind(this)}
                        key='coupon_day_mobile'
                    />,
                    activeGetCurrentUser == true &&
                    <GetData getCokie={true} getSource={this.getSource.bind(this)} getUser={true} key='GetData' />
                ]}
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
            activeGetServices: true,
            id_promotion: '',
        };
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService, });
    }
    getCoupon = (value) => {
        const id_promotion = value.id_promotion;
        value.list == 'fin' ?
            (
                activeGetServices = true
            ) : (
                value.list == 'shop' ?
                    (
                        activeGetServices2 = true
                    ) :
                    null
            );
        this.setState({ activeGetServices, id_promotion, })
    }
    render() {
        const { currentUser, keycokie, } = this.props
        const { activeGetServices, dataService, id_promotion, } = this.state
        const uri = finip + '/coupon/save_coupon_fin'
        var dataBody = {
            id_customer: currentUser.id_customer,
            device: 'mobile_device',
            id_promotion,
        }
        return (
            <View>
                {
                    activeGetServices == true && currentUser && keycokie &&
                    <GetServices Authorization={keycokie} dataBody={dataBody} uriPointer={uri} getDataSource={this.getData.bind(this)}
                        key='save_coupon_fin'
                    />
                }
                <View style={{ padding: 10, }}>
                    <View style={stylesPromotionDeal.Deal_Today_Box}>
                        <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
                        <ScrollView horizontal>
                            {
                                dataService && dataService.coupon.map((value, index) => {
                                    return <GetCoupon codeList={value.my_coupon == 'no' ? 'available' : ''} colorCoupon='#86CFFF' couponText={value.name}
                                        getCoupon={this.getCoupon.bind(this)} key={index} saveCoupon setDataService={{
                                            list: 'fin',
                                            id_promotion: value.id_promotion
                                        }} textDetail={value.detail} timeOut={value.end_period} />
                                })
                            }
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
        const { dataService, dataService2 } = this.props
        const image_store = finip + '/' + dataService.store_path + '/' + dataService.image_store
        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={[stylesMain.FrameBackground, { borderColor: '#ECECEC', borderWidth: 1 }]}>
                    <View style={[stylesMain.FlexRow, { margin: 5 }]}>
                        <FastImage style={{ height: 40, width: 40, marginTop: 10, borderRadius: 20, }}
                            source={{
                                uri: image_store,
                            }}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataService.store_name}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', padding: 5 }}>
                        {
                            dataService2 && dataService2.map((value, index) => {
                                const image_produxt = finip + '/' + value.path_image_product + '/' + value.image_product
                                if (index < 3) {
                                    return <View key={index} style={[stylesMain.ItemCenter, { width: '25%', borderColor: '#ECECEC', borderWidth: 0.5, height: 120, padding: 5 }]}>
                                        <View style={{ height: '80%', width: '100%' }}>
                                            <FastImage style={stylesMain.BoxProduct1Image}
                                                source={{
                                                    uri: image_produxt
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                        <View style={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
                                            {/* <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>฿3,xxx</Text> */}
                                        </View>
                                    </View>
                                }
                            })
                        }
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
