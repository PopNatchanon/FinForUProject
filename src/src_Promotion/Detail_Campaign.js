import React, { Component, PureComponent } from 'react';
import {
    View,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import styleMain from '../../style/StylesMainScreen';
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { Store_Sale } from './The_BestFinScreen';
import { AppBar1 } from '../MainScreen';
export const { width, height } = Dimensions.get('window');

export default class Detail_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styleMain.SafeAreaView}>
                <AppBar1 titleHead={'โปรโมชั่น'} backArrow searchBar chatBar navigation={this.props.navigation} />
                <ScrollView>
                    <Head_Image />
                    <Cate_Campaign />
                    <Code_New_year />
                    <New_year_New navigation={this.props.navigation} />
                    <Store_Sale />
                    <New_year_New navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///-------------------------------------------------------------------------///

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

///-------------------------------------------------------------------------///

export class Cate_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcetype: [],
        };
    }
    getDatatype = async () => {
        fetch([finip, 'home/category_mobile'].join('/'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({
                    dataSourcetype: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getDatatype()
    }
    render() {
        let dataCategory = this.state.dataSourcetype.map((item, indexs) => {
            var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
            return (
                <View style={stylesDeal.Cate_Campaign} key={indexs}>
                    <View style={stylesDeal.Cate_CampaignBoxImage}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesDeal.Cate_CampaignImage}
                        />
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name}</Text>
                </View>
            )
        })
        return (
            <View>
                <View style={stylesDeal.Cate_CampaignBox}>
                    <View style={stylesDeal.Cate_CampaignBoxA}>
                        {dataCategory}
                    </View>

                </View>
            </View>

        );
    }
}

///-------------------------------------------------------------------------///

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
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}> แจกใหญ่ ปีใหม่</Text>
                </View>
                <View style={stylesDeal.Coupon_Store_Box}>
                    <ScrollView horizontal>
                        <View style={stylesDeal.Deal_Today_BoxImage}>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', padding: 10, }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        โค้ดส่วนลดใช้ได้กับสินค้าในคอลเลคชั่นที่กำหนดเท่านั้น ยกเว้นหมวดหมู่ตั๋วและบัตรกำนัล นมผงสำหรับเด็ก 1 และ 2 ปีใหม่
                        โทรศัพท์มือถือและทองคำ จำกัดการใช้โค้ด 1 คน/ครั้ง/เครื่อง/ และใช้ผ่านแอป, โค้ดส่วนลดมีจำนวนจำกัด หมดเขต 3 ก.พ. 63 เงื่อนไขเป็นไปตามมี่บริษัทฯ กำหนด
                   </Text>
                </View>
            </View>

        );
    }
}

///-------------------------------------------------------------------------///

export class New_year_New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }

    getFlashSale() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSale: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getFlashSale();
    }

    render() {
        let dataFlashSale = this.state.dataSale.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={indexs}
                    onPress={
                        () => this.props.navigation.navigate(
                            'DetailScreen', {
                            id_item: item.id_product
                        })
                    }
                >
                    <View style={stylesDeal.New_year_NewProduct_Box}>
                        <View style={styleMain.BoxProduct1ImageofLines}>

                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={[styleMain.BoxProduct1Image, { marginLeft: 10, }]}
                            />
                        </View>
                        <Text style={[styleMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyText]}>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesDeal.New_year_New}>
                <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginTop: 10, }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>  ปีใหม่ ช๊อปของใหม่</Text>
                </View>
                <View>
                    <View >
                        <View style={stylesDeal.New_year_NewBoxText_Head}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>2020 New Collection ราคา 2,020.-</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right', color: '#FFFFFF' }]}>ดูทั้งหมด</Text>
                        </View>
                        <View>
                            <View style={[stylesDeal.New_year_NewProduct]}>
                                {dataFlashSale}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

///-------------------------------------------------------------------------///

