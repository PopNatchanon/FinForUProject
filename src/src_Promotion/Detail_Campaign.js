///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import axios from 'axios';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, Slide, TodayProduct, ExitAppModule, } from '../MainScreen';
import { Button_Bar } from '../HighlightScreen';
import { Store_Sale } from './The_BestFinScreen';
import { GetCoupon, GetServices } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Detail_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    PathList() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 titleHead={'โปรโมชั่น'} backArrow searchBar chatBar navigation={this.props.navigation} />
                        <Detail_Campaign_main navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 1:
                return (
                    <View>
                        <AppBar1 titleHead={'รายละเอียด'} backArrow navigation={this.props.navigation} />
                        <Detail_Campaign_New_year navigation={this.props.navigation} />
                    </View>
                )
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.PathList()}
                <ExitAppModule navigation={this.props.navigation} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Campaign_main
export class Detail_Campaign_main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Head_Image />
                    <Cate_Campaign />
                    <Code_New_year />
                    <New_year_NewA navigation={this.props.navigation} />
                    <Store_Sale />
                    <New_year_NewB navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Head_Image
export class Head_Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesDeal.Head_BoxImageDetail}>
                    <FastImage style={stylesDeal.Head_Image}
                        source={{
                            uri: ip + '/MySQL/uploads/slide/messageImage_1579158520755.jpg',
                        }}
                    />
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Cate_Campaign
export class Cate_Campaign extends Component {
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
    dataCategory() {
        this.state.dataService.map((item, index) => {
            var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
            return (
                <View style={stylesDeal.Cate_Campaign} key={index}>
                    <View style={stylesDeal.Cate_CampaignBoxImage}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesDeal.Cate_CampaignImage}
                        />
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{item.name}</Text>
                </View>
            )
        })
    }
    render() {
        var uri = finip + '/home/category_mobile'
        return (
            <View>
                <GetServices uriPointer={uri} getDataSource={this.getData} />
                <View style={stylesDeal.Cate_CampaignBox}>
                    <View style={stylesDeal.Cate_CampaignBoxA}>
                        {this.dataCategory()}
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Code_New_year
export class Code_New_year extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesDeal.Code_New_year}>
                <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: 10, }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> แจกใหญ่ ปีใหม่</Text>
                </View>
                <View style={stylesDeal.Coupon_Store_Box}>
                    <ScrollView horizontal>
                        <View style={stylesDeal.Deal_Today_BoxImage}>
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'10%'} textDetail={'รับเงินคืน 10% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'25%'} textDetail={'รับเงินคืน 25% Coins'} />
                            <GetCoupon colorCoupon='#86CFFF' codeList='available' timeOut={'31-01-2020'} couponText={'50%'} textDetail={'รับเงินคืน 50% Coins'} />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', padding: 10, }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                        โค้ดส่วนลดใช้ได้กับสินค้าในคอลเลคชั่นที่กำหนดเท่านั้น ยกเว้นหมวดหมู่ตั๋วและบัตรกำนัล นมผงสำหรับเด็ก 1 และ 2 ปีใหม่
                        โทรศัพท์มือถือและทองคำ จำกัดการใช้โค้ด 1 คน/ครั้ง/เครื่อง/ และใช้ผ่านแอป, โค้ดส่วนลดมีจำนวนจำกัด หมดเขต 3 ก.พ. 63 เงื่อนไขเป็นไปตามมี่บริษัทฯ กำหนด
                   </Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> New_year_NewA
export class New_year_NewA extends Component {
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
    dataFlashSale() {
        return this.state.dataService.map((item, index) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={index}
                    onPress={
                        () => this.props.navigation.navigate(
                            'DetailScreen', {
                            id_item: item.id_product
                        })
                    }
               >
                    <View style={stylesDeal.New_year_NewProduct_Box}>
                        <View style={stylesMain.BoxProduct1ImageofLines2}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[stylesMain.BoxProduct1Image, { marginLeft: 10, }]}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        return (
            <View style={stylesDeal.New_year_New}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: 10, }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>  ปีใหม่ ช๊อปของใหม่</Text>
                </View>
                <View>
                    <View>
                        <View style={stylesDeal.New_year_NewBoxText_Head}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>
                                2020 New Collection ราคา 2,020.-</Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Detail_Campaign', {
                                selectedIndex: 1
                            })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { textAlign: 'right', color: '#FFFFFF' }]}>
                                    ดูทั้งหมด</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={[stylesDeal.New_year_NewProduct]}>
                                {this.dataFlashSale()}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> New_year_NewB
export class New_year_NewB extends Component {
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
    dataFlashSale() {
        return this.state.dataService.map((item, index) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={index}
                    onPress={
                        () => this.props.navigation.navigate(
                            'DetailScreen', {
                            id_item: item.id_product
                        })
                    }
               >
                    <View style={stylesDeal.New_year_NewProduct_Box}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[stylesMain.BoxProduct1Image, { marginLeft: 10, }]}
                            />
                        </View>
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                                    {value}
                                </Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        return (
            <View style={stylesDeal.New_year_New}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View>
                    <View>
                        <View style={stylesDeal.New_year_NewBoxText_Head}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}
                           >ปีใหม่แล้วไปลองของใหม่ดิ</Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Detail_Campaign', {
                                selectedIndex: 1
                            })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { textAlign: 'right', color: '#FFFFFF' }]}>
                                    ดูทั้งหมด</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={[stylesDeal.New_year_NewProduct]}>
                                {this.dataFlashSale()}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail_Campaign_New_year
export class Detail_Campaign_New_year extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Slide />
                <View style={stylesDeal.New_year_NewBoxText_Head}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>
                        2020 New Collection ราคา 2,020.-</Text>
                </View>
                <Button_Bar />
                <ScrollView>
                    <TodayProduct noTitle />
                </ScrollView>
            </View>
        );
    }
}