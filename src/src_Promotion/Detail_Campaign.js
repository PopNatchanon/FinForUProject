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
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, } from './DealScreen';
import { Store_Sale } from './The_BestFinScreen';
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
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <Head_Image />
                    <Cate_Campaign />
                    <Code_New_year />
                    <New_year_New navigation={this.props.navigation}/>
                    <Store_Sale />
                    <New_year_New navigation={this.props.navigation}/>
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
                <View style={styles.Head_BoxImageDetail}>
                    <FastImage style={styles.Head_Image}
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
                <View style={styles.Cate_Campaign} key={indexs}>
                    <View style={styles.Cate_CampaignBoxImage}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.Cate_CampaignImage}
                        />
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>{item.name}</Text>
                </View>
            )
        })
        return (
            <View>
                <View style={styles.Cate_CampaignBox}>
                    <View style={styles.Cate_CampaignBoxA}>
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
            <View style={styles.Code_New_year}>
                <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', marginTop:10,}]}>
                    <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3]}> แจกใหญ่ ปีใหม่</Text>
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
                <View style={{ alignItems: 'center', padding: 10, }}>
                    <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize6]}>
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
                  <View style={styles.New_year_NewProduct_Box}>
                    <FastImage
                      source={{
                        uri: dataMySQL,
        
                      }}
                      style={[styleMain.BoxProduct1Image,{marginLeft:10,}]}
        
                    />
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
            <View style={styles.New_year_New}>
                <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4', marginTop:10,}]}>
                    <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3]}>  ปีใหม่ ช๊อปของใหม่</Text>
                </View>
                <View>
                    <View >
                        <View style={styles.New_year_NewBoxText_Head}>
                            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize2,{color: '#FFFFFF' }]}>2020 New Collection ราคา 2,020.-</Text>
                            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5,{ textAlign: 'right', color: '#FFFFFF'}]}>ดูทั้งหมด</Text>
                        </View>
                        <View>
                            <View style={[styles.New_year_NewProduct]}>    
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

