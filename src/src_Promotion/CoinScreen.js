///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import BottomSheet from "react-native-raw-bottom-sheet";
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
import ststylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule, } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { GetData, GetServices, ProductBox, TabBar, LoadingScreen, } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CoinScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeGetCurrentUser: true,
        };
    }
    getSource = (value) => {
        // console.log(value)
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, cokie: value.keycokie });
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    render() {
        const { navigation } = this.props
        const { activeGetCurrentUser, activeDataService, cokie, currentUser, dataService } = this.state
        var uri = `${finip}/coupon/fin_coin_mobile`
        // console.log('activeGetCurrentUser')
        // console.log(activeGetCurrentUser)
        // console.log('activeDataService')
        // console.log(activeDataService)
        activeGetCurrentUser == false && activeDataService == true && cokie &&
            GetServices({ uriPointer: uri, Authorization: cokie, getDataSource: this.getData.bind(this), })
        activeGetCurrentUser == true &&
            GetData({ getCokie: true, getSource: this.getSource.bind(this), getUser: true, })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {
                    (activeGetCurrentUser == true || activeDataService == true) &&
                    <LoadingScreen key='LoadingScreen' />
                }
                <AppBar1 titleHead={'FIN COINS'} backArrow searchBar chatBar navigation={navigation} />
                <ScrollView>
                    {
                        dataService &&
                        <Slide dataService={dataService.banner} />
                    }
                    <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 100, marginTop: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN COIN</Text>
                    </View>
                    <CoinCollect currentUser={currentUser} cokie={cokie} />
                    <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 160, marginTop: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN จัดหนักรับ COIN เพิ่ม</Text>
                    </View>
                    {
                        dataService &&
                        <TodayProduct noTitle navigation={navigation} loadData={dataService.product_pro_coin} />
                    }
                </ScrollView>
                <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
                    <Button_Bar navigation={navigation} />
                </View>
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class CoinCollect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0,
            activeGetServices: true,
        }
    }
    getVoucher = (id_promotion) => {
        this.setState({ activeGetServices: true, id_promotion });
    }
    getPathlist = (value) => {
        this.setState({ pathlist: value.selectedIndex });
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService });
    }
    render() {
        const { cokie, currentUser } = this.props
        const { activeGetServices, dataService, id_promotion } = this.state
        const item = [{
            name: 'คูปองทั้งหมด'
        }, {
            name: 'ท่องเที่ยว'
        }, {
            name: 'ส่วนลด'
        }, {
            name: 'อื่นๆ'
        }]
        const uri = `${finip}/coupon/save_coupon_voucher`
        var dataBody = {
            id_customer: currentUser ? currentUser.id_customer : '',
            device: "mobile_device",
            id_promotion_voucher: id_promotion ? id_promotion : ''
        }
        activeGetServices == true && currentUser && cokie &&
            GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: this.getData.bind(this) })
        return (
            <View>
                <View style={stylesProfile.CoinCollect}>
                    <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, stylesMain.FlexRow, { width }]}>
                        <FastImage
                            source={require('../../icon/bitcoin2.png')}
                            style={stylesProfile.CoinCollectImage}
                        />
                        <View style={stylesProfile.CoinCollectBox}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { marginTop: 10, marginLeft: 20, }]}>
                                FIN COIN</Text>
                            <View style={stylesMain.ItemCenter}>
                                <NumberFormat
                                    value={dataService && dataService.coin}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={
                                        value => <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyBold]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TabBar
                        sendData={this.getPathlist.bind(this)}
                        inactiveBoxColor={'#fff'}
                        inactiveColor={mainColor}
                        inactiveFontColor={mainColor}
                        item={item}
                        widthBox={98}
                        fontSizeStyle={12}
                        type='box'
                    />
                </View>
                <View>
                    {
                        dataService && dataService.coupon.map((value, index) => {
                            return <CoinPageBody currentUser={currentUser} cokie={cokie} getVoucher={this.getVoucher.bind(this)}
                                dataService={value} key={index} />
                        })
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CoinPageBody
export class CoinPageBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeGetServices: false,
        }
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService });
    }
    DetailCoin() {
        const { dataService, getVoucher } = this.props
        var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image}`
        return (
            <View style={{ height: '100%' }}>
                <View style={{ width: '100%', height: 150, marginBottom: 8, }}>
                    <FastImage
                        style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
                        source={{
                            uri: dataMySQL,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
                <ScrollView>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        {dataService.detail}
                    </Text>
                </ScrollView>
                <View style={[stylesMain.FlexRow, {
                    justifyContent: 'center', height: 40, paddingTop: 8,
                }]}>
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.DetailCoinSheet.close() }}>
                        <View style={{ paddingHorizontal: 25, borderColor: mainColor, borderWidth: 1, borderRadius: 5 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical]}>ยกเลิก</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        dataService.my_coupon == 'yes' ?
                            null :
                            dataService.my_coupon == 'no' ?
                                getVoucher(dataService.id_promotion) :
                                null
                    }} style={{
                        borderColor:
                            dataService.my_coupon == 'yes' ?
                                '#ECECEC' :
                                dataService.my_coupon == 'no' ?
                                    mainColor :
                                    '#DC3545',
                        borderWidth: 1, marginLeft: 10,
                        backgroundColor:
                            dataService.my_coupon == 'yes' ?
                                '#ECECEC' :
                                dataService.my_coupon == 'no' ?
                                    mainColor :
                                    '#ECECEC',
                        borderRadius: 5,
                        paddingHorizontal: 20
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
                            color:
                                dataService.my_coupon == 'yes' ?
                                    '#111111' :
                                    dataService.my_coupon == 'no' ?
                                        '#FFFFFF' :
                                        '#DC3545',
                        }]}>
                            {
                                dataService.my_coupon == 'yes' ?
                                    'แลกแล้ว' :
                                    dataService.my_coupon == 'no' ?
                                        `แลก ${dataService.coin_exchange} coin` :
                                        `ใช้ ${dataService.coin_exchange} coin`
                            }</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
    render() {
        const { cokie, currentUser, dataService } = this.props
        const { activeGetServices, } = this.state
        const uri = `${finip}/coupon/show_voucher`
        var dataBody = {
            id_customer: currentUser ? currentUser.id_customer : '',
            device: "mobile_device",
            id_promotion_voucher: dataService.id_promotion ? dataService.id_promotion : ''
        }
        var dataMySQL = `${finip}/${dataService.image_path}/${dataService.image}`
        activeGetServices == true && currentUser && cokie &&
            GetServices({ uriPointer: uri, dataBody, Authorization: cokie, getDataSource: this.getData.bind(this) })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <BottomSheet
                            ref={ref => {
                                this.DetailCoinSheet = ref;
                            }}
                            height={500}
                            duration={250}
                            customStyles={{
                                container: {
                                    padding: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }
                            }}>
                            {this.DetailCoin()}
                        </BottomSheet>
                        <View style={ststylePromotionDeal.CampaignBody}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.DetailCoinSheet.open() }}>
                                <View style={[ststylePromotionDeal.CampaignBody_BoxImage, { padding: 5 }]}>
                                    <FastImage
                                        source={{
                                            uri: dataMySQL,
                                        }}
                                        style={stylesMain.BoxProduct1Image}
                                    />
                                </View>
                                <View style={[ststylePromotionDeal.CampaignBody_Box]}>
                                    <View style={[ststylePromotionDeal.CampaignBody_BoxText, { marginLeft: 4 }]}>
                                        <Text numberOfLines={2} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                                            {dataService.detail}</Text>
                                        <Text numberOfLines={1} style={stylesFont.FontFamilyText}>วันหมดอายุ {dataService.end_period}</Text>
                                    </View>
                                    <View style={[ststylePromotionDeal.CampaignBody_Icon_Button, stylesMain.ItemCenterVertical]}>
                                        <View style={[stylesProfile.CoinPageBodyBoxBody2Box, stylesMain.ItemCenter, {
                                            backgroundColor:
                                                dataService.my_coupon == 'yes' ?
                                                    '#ECECEC' :
                                                    dataService.my_coupon == 'no' ?
                                                        mainColor :
                                                        '#ECECEC'
                                        }]}>
                                            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize8, {
                                                color:
                                                    dataService.my_coupon == 'yes' ?
                                                        '#111111' :
                                                        dataService.my_coupon == 'no' ?
                                                            '#FFFFFF' :
                                                            '#DC3545'
                                            }]}>
                                                {
                                                    dataService.my_coupon == 'yes' ?
                                                        'แลกแล้ว' :
                                                        dataService.my_coupon == 'no' ?
                                                            `แลก ${dataService.coin_exchange} coin` :
                                                            `ใช้ ${dataService.coin_exchange} coin`
                                                }
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}