///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
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
import { GetCoupon, GetData, GetServices, ProductBox } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '.././navigator/IpConfig';
import StylesMainScreen from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Detail_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeGetCurrentUser: true,
        };
    }
    getSource = (value) => {
        // console.log(value)
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, });
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }

    render() {
        const { navigation } = this.props
        const { activeGetCurrentUser, activeDataService, currentUser, dataService, } = this.state
        const id_campaign = navigation.getParam('id_campaign')
        var uri = `${finip}/campaign/campaign_detail`;
        var dataBody = {
            "id_category": "",
            "id_campaign": id_campaign,
        }
        activeGetCurrentUser == false && activeDataService == true &&
            GetServices({ dataBody, uriPointer: uri, getDataSource: this.getData.bind(this), })
        activeGetCurrentUser == true &&
            GetData({ getSource: this.getSource.bind(this), getUser: true, })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 titleHead={'โปรโมชั่น'} backArrow searchBar chatBar navigation={navigation} />
                <ScrollView>
                    <Slide banner={dataService && dataService.list_banner} />
                    <Detail_Description dataService={dataService && dataService.data_campaign} navigation={navigation} />
                    <New_year_Campaign navigation={navigation} dataService={dataService && dataService.list_product} />
                    <Store_Campaign navigation={navigation} dataService={dataService && dataService} />
                    <New_year_Product navigation={navigation} dataService={dataService && dataService.list_product} />
                </ScrollView>
                <ExitAppModule navigation={navigation} />

            </SafeAreaView>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>> Description
export class Detail_Description extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { dataService } = this.props
        // console.log('Detail_Description')
        // console.log(dataService)
        return (
            <View style={stylesDeal.Head_BoxImageDetail}>
                {
                    dataService && dataService.map((value, index) => {
                        return (
                            <View key={index}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>{value.name} </Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.description}</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>วันหมดอายุ : {value.end}</Text>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> New_year_NewA
export class New_year_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation, dataService } = this.props
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>  ปีใหม่ช๊อปของใหม่</Text>
                </View>
                <ScrollView horizontal>
                    <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>

                        {
                            dataService ?
                                <ProductBox dataService={dataService} navigation={navigation} mode='row3col2'
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                                /> :
                                null
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> New_year_NewB
export class New_year_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation, dataService } = this.props
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', width: 180 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>  ปีใหม่แล้วไปลองของใหม่กัน</Text>
                </View>
                <ScrollView horizontal>
                    <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
                        {
                            dataService ?
                                <ProductBox dataService={dataService} navigation={navigation}
                                    pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={15} dispriceSize={15}
                                /> :
                                null
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Store_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    Store_Sale_Box() {
        const { dataService } = this.props
        console.log('Store_Campaign')
        console.log(dataService)
        var campaign_banner_1
        dataService && dataService.campaign_banner_1.map((value) => {
            return campaign_banner_1 = `${finip}/${dataService.image_path}/${dataService.image}`
        })
        var campaign_banner_2 = []
        dataService && dataService.campaign_banner_2.map((value) => {
            return campaign_banner_2.push(`${finip}/${dataService.image_path}/${dataService.image}`);
        })
        var campaign_banner_3 = []
        dataService && dataService.campaign_banner_3.map((value) => {
            return campaign_banner_3.push(`${finip}/${dataService.image_path}/${dataService.image}`);
        })
        return (
            <View style={stylesDeal.Store_Sale}>
                <View style={stylesDeal.Store_Sale_Box}>
                    {/* BoxA */}
                    <View style={stylesDeal.Store_Sale_BoxA}>
                        <View style={stylesDeal.Store_Sale_BoxA_Carousel}>
                            <FastImage style={stylesDeal.Store_Sale_Image}
                                source={{
                                    uri: campaign_banner_1,
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                        <View style={stylesDeal.Store_Sale_BoxA_Boximage}>
                            {
                                campaign_banner_3 && campaign_banner_3.map((value, index) => {
                                    return (
                                        <View key={index} style={stylesDeal.Store_Sale_BoxA_image}>
                                            <FastImage style={stylesDeal.Store_Sale_Image}
                                                source={{
                                                    uri: value,
                                                }}
                                                resizeMode={FastImage.resizeMode.stretch}
                                            />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    {/* BoxB */}
                    <View style={stylesDeal.Store_Sale_BoxB_Boximage}>
                        {
                            campaign_banner_2 && campaign_banner_2.map((value, index) => {
                                return (
                                    <View key={index} style={stylesDeal.Store_Sale_BoxB_image}>
                                        <FastImage style={stylesDeal.Store_Sale_Image}
                                            source={{
                                                uri: value,
                                            }}
                                            resizeMode={FastImage.resizeMode.stretch}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                <View style={[stylesMain.FrameBackground, { marginTop: 10, }]}>
                    <View style={[stylesDeal.BoxText_T, { backgroundColor: '#C4C4C4', marginLeft: -3, width: 100 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesDeal.Text_Head]}>ร้านนี้มีของลด </Text>
                    </View>
                    <View style={stylesDeal.Fin_sale_BoxHead}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#0A55A6' }]}>ดูทั้งหมด</Text>
                    </View>
                    {this.Store_Sale_Box()}
                </View>
            </View>
        );
    }
}