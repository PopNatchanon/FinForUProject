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
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, } from './DealScreen';
import { Store_Sale } from './WorthFinScreen';
export const { width, height } = Dimensions.get('window');

export default class Detail_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <Head_Image />
                    <Cate_Campaign />
                    <Code_New_year />
                    <New_year_New />
                    <Store_Sale/>
                    <New_year_New />
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
                <View style={{ width: '100%', height: 250, marginTop: 5, }}>
                    <FastImage style={{ height: '100%', width: '100%', }}
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
    getDatatype() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'type'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            this.setState({
                dataSourcetype: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDatatype()
    }
    render() {
        let dataCategory = this.state.dataSourcetype.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/head_product/menu', item.image_menu].join('/');
            return (
                <View style={{ height: 100, width: width * (1 / 4), justifyContent: 'center', alignItems: 'center', }} key={indexs}>
                    <View style={{ borderColor: '#EAEAEA', borderWidth: 1, height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 8, }}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={{ height: 50, width: 50, }}
                        />
                    </View>
                    <Text>{item.name}</Text>
                </View>


            )
        })
        return (
            <View>
                <View style={{ height: 'auto', width: '100%', backgroundColor: '#FFFFFF', marginTop: 10, }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
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
            <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, height: 'auto', }}>
                <View style={[styles.Box_Text_Head, { marginTop: -10 }]}>
                    <Text> แจกใหญ่ ปีใหม่</Text>
                </View>
                <View style={styles.Coupon_Store_Box}>
                    <ScrollView horizontal>
                        <View style={styles.Deal_Today_BoxImage}>
                            <FastImage style={styles.Deal_Today_Coinimage}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                }}
                            />
                            <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                }}
                            />
                            <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                }}
                            />
                            <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', padding: 12, }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', }}>
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
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, height: 450,}}>
                <View style={[styles.Box_Text_Head, { marginTop: -10 }]}>
                    <Text>  ปีใหม่ ช๊อปของใหม่</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ backgroundColor: '#000000', height: 80, width: '100%', marginTop: 10, padding: 10, }}>
                            <Text style={{ fontSize: 18, color: '#FFFFFF' }}>2020 New Collection ราคา 2,020.-</Text>
                            <Text style={{ textAlign: 'right', color: '#FFFFFF', fontSize: 12, }}>ดูทั้งหมด</Text>
                        </View>
                        <View>
                            <View style={{ height: '40%', width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: -10, }}>
                                <View style={{ width: '30%', height: '100%', borderColor: '#ECECEC', borderWidth: 1, backgroundColor: '#FFFF' }}></View>
                                <View style={{ width: '30%', height: '100%', borderColor: '#ECECEC', borderWidth: 1, backgroundColor: '#FFFF' }}></View>
                                <View style={{ width: '30%', height: '100%', borderColor: '#ECECEC', borderWidth: 1, backgroundColor: '#FFFF' }}></View>
                            </View>
                            <View style={{ height: '40%', width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, }}>
                                <View style={{ width: '30%', height: '100%', borderColor: '#ECECEC', borderWidth: 1, backgroundColor: '#FFFF' }}></View>
                                <View style={{ width: '30%', height: '100%', borderColor: '#ECECEC', borderWidth: 1, backgroundColor: '#FFFF' }}></View>
                                <View style={{ width: '30%', height: '100%', borderColor: '#ECECEC', borderWidth: 1, backgroundColor: '#FFFF' }}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

///-------------------------------------------------------------------------///

