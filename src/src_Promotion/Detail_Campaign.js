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
import { AppBar1, Slide, TodayProduct, } from '../MainScreen';
import { Button_Bar } from '../HighlightScreen';
export const { width, height } = Dimensions.get('window');

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
                    <SafeAreaView style={styleMain.SafeAreaView}>
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
            </View>


        );
    }
}

///-------------------------------------------------------------------------///

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
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{item.name}</Text>
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
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> แจกใหญ่ ปีใหม่</Text>
                </View>
                <View style={stylesDeal.Coupon_Store_Box}>
                    <ScrollView horizontal>
                        <View style={stylesDeal.Deal_Today_BoxImage}>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesDeal.Coupon_BOX}>
                                <View style={{ margin: 10 }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7,]}>รับเงินคืน 50% Coins</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8,]}>ใช้ได้ก่อน 31-01-2020</Text>
                                </View>
                                <View style={[stylesDeal.Coupon_BOX_A, { backgroundColor: '#86CFFF', }]}>
                                    <View style={stylesDeal.Coupon_BOX_B}>
                                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>50%</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={stylesDeal.Coupon_BOX_Text}>
                                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เก็บ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
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

///-------------------------------------------------------------------------///

export class New_year_NewA extends Component {
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
                        <Text style={[styleMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
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
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>  ปีใหม่ ช๊อปของใหม่</Text>
                </View>
                <View>
                    <View >
                        <View style={stylesDeal.New_year_NewBoxText_Head}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>2020 New Collection ราคา 2,020.-</Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Detail_Campaign', { selectedIndex: 1 })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { textAlign: 'right', color: '#FFFFFF' }]}>ดูทั้งหมด</Text>
                            </TouchableOpacity>
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
export class New_year_NewB extends Component {
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
                        <Text style={[styleMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize7]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[styleMain.BoxProduct1ImagePrice, stylesFont.FontSize8, stylesFont.FontFamilyText]}>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesDeal.New_year_New}>
                <View>
                    <View >
                        <View style={stylesDeal.New_year_NewBoxText_Head}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>ปีใหม่แล้วไปลองของใหม่ดิ</Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Detail_Campaign', { selectedIndex: 1 })}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { textAlign: 'right', color: '#FFFFFF' }]}>ดูทั้งหมด</Text>
                            </TouchableOpacity>
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
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>2020 New Collection ราคา 2,020.-</Text>
                </View>
                <Button_Bar />
                <ScrollView>
                    <TodayProduct noTitle />
                </ScrollView>
            </View>
        );
    }
}
