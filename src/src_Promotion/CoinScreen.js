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
import stylesMain from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
import ststylePromotionDeal from '../../style/stylePromotion-src/styleDealScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule } from '../MainScreen';
import { Button_Bar, Slide } from './DealScreen';
import { GetServices, ProductBox, TabBar, } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class CoinScreen extends Component {
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
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <AppBar1 titleHead={'FIN COINS'} backArrow searchBar chatBar navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 100, marginTop: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN COIN</Text>
                    </View>
                    <CoinCollect />
                    <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 160, marginTop: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>FIN จัดหนักรับ COIN เพิ่ม</Text>
                    </View>
                    {
                        dataService ?
                            <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' /> :
                            null
                    }
                </ScrollView>
                <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#ECECEC' }}>
                    <Button_Bar navigation={this.props.navigation} />
                </View>
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class CoinCollect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathlist: 0
        }
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { pathlist } = this.state
        const { navigation } = this.props
        if (pathlist !== nextState.pathlist || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    get PathList() {
        const { pathlist } = this.state
        switch (pathlist) {
            case 0:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
            case 2:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
            case 3:
                return (
                    <View>
                        <CoinPageBody />
                    </View>
                )
        }
    }
    getData = (pathlist) => {
        this.setState({ pathlist });
    }
    render() {
        const item = [{
            name: 'คูปองทั้งหมด'
        }, {
            name: 'ท่องเที่ยว'
        }, {
            name: 'ส่วนลด'
        }, {
            name: 'อื่นๆ'
        }]
        const coin = 1000;
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
                                    value={coin}
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
                        sendData={this.getData.bind(this)}
                        inactiveBoxColor={'#fff'}
                        inactiveColor={'#0A55A6'}
                        inactiveFontColor={'#0A55A6'}
                        item={item}
                        widthBox={98}
                        fontSizeStyle={12}
                        type='box'
                    />
                </View>
                <View>
                    {this.PathList}
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
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    DetailCoin() {
        return (
            <View>
                <ScrollView>
                    <View style={{ width: '100%', height: 150 }}>
                        <FastImage
                            style={[stylesMain.BoxProduct1Image, { borderRadius: 5 }]}
                            source={{
                                uri: ip + '/MySQL/uploads/Campaign/Voucher-02.jpg',
                            }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต)
                        และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป
                        2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ
                        3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม,
                        ยอดการชำระค่าสาธารณูปโภค, และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน
                        บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว,
                        และยอดใช้จ่ายที่ผิดวัตถุประสงค์และผิดกฏหมายบัตรเครดิต
                        4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด
                        5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข
                        หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี
                        6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว
                        7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตามหลักเกณฑของบริษัทฯ
                        8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                </Text>
                    <View style={[stylesMain.FlexRow, { justifyContent: 'center', marginTop: 10 }]}>
                        <View style={{ paddingHorizontal: 25, borderColor: '#0A55A6', borderWidth: 1, borderRadius: 5, paddingVertical: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ยกเลิก</Text></View>
                        <View style={{ borderColor: '#0A55A6', borderWidth: 1, marginLeft: 10, backgroundColor: '#0A55A6', borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แลกCoin</Text></View>
                    </View>
                </ScrollView>
            </View>

        )
    }
    dataNewCampaign() {
        const { dataService } = this.state
        return dataService.map((item, index) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <>
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
                        <View style={[ststylePromotionDeal.CampaignBody_BoxImage, { padding: 5 }]} key={index}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                            />
                        </View>
                        <View style={[ststylePromotionDeal.CampaignBody_Box]}>
                            <View style={ststylePromotionDeal.CampaignBody_BoxText}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{item.detail} </Text>
                                <Text numberOfLines={1} style={stylesFont.FontFamilyText}>วันหมดอายุ 03-02-2020</Text>
                            </View>
                            <View style={[ststylePromotionDeal.CampaignBody_Icon_Button, stylesMain.ItemCenterVertical]}>
                                <TouchableOpacity activeOpacity={1} onPress={() => { this.DetailCoinSheet.open(); }}>
                                    <View style={[stylesProfile.CoinPageBodyBoxBody2Box, stylesMain.ItemCenter]}>
                                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#fff' }]}>
                                            แลก 10 coin</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </>
            )
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'Voucher'
        };

        return (
            <View style={stylesMain.FrameBackground}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={{ alignItems: 'center' }}>
                    <View>
                        {this.dataNewCampaign()}
                    </View>
                </View>
            </View>
        )
    }
}

