///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Modal, Image
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import SmartGallery from "react-native-smart-gallery";
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesDetail from '../../style/StylesDetailScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { TabBar } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

export default class Reviews_score extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={navigation} titleHead='คะแนน' />
                <Reviews_Bar />
                <ScrollView>
                    <Reviews_Box />
                    <Reviews_Box />
                    <Reviews_Box />
                    <Reviews_Box />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class Reviews_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }
    dataItem(items1) {
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center' }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    item={items1}
                    type='box'
                    // noLimit
                    numberBox
                    radiusBox={4}
                />
            </View>
        )
    }
    dataItem(items2) {
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center' ,alignItems:'center'}]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    item={items2}
                    type='box'
                    // noLimit
                    numberBox
                    radiusBox={4}
                />
            </View>
        )
    }
    render() {
        const items1 = [{
            name: 'ทั้งหมด'
        }, {
            name: 'เฉพาะสินค้าชั้นนี้'
        },]
        const items2 = [{
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>
        }, {
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>
        }, {
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
            </>
        }, {
            name: <>
                <IconFontAwesome name='star' size={9} color='#FFAC33' />
                <IconFontAwesome name='star' size={9} color='#FFAC33' />

            </>
        }, {
            name: <IconFontAwesome name='star' size={9} color='#FFAC33' />
        },]
        return (
            <View style={{backgroundColor:'#FFFFFF',borderBottomColor:'#E9E9E9',borderBottomWidth:2,paddingBottom:10}}>
                <View style={{ width: '100%', marginTop: 10 }}>
                    {this.dataItem(items1)}
                </View>
                <View style={{ width: '100%', marginTop: 10 }}>
                    {this.dataItem(items2)}
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Reviews_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{backgroundColor:'#FFFFFF' }}>
                <View style={stylesDetail.Comment_R}>
                    <FastImage
                        style={stylesDetail.Comment_R_Image}
                        source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                    />
                    <View style={stylesDetail.Comment_R_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                            p********n</Text>
                        <View style={stylesDetail.Comment_R_Iconstar}>
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BottomSpace]}>
                            สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                        <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                            16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
                    </View>
                </View>
                <View style={stylesDetail.Comment_R}>
                    <FastImage
                        style={stylesDetail.Comment_R_Image}
                        source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                    />
                    <View style={stylesDetail.Comment_R_Text}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                            p********n</Text>
                        <View style={stylesDetail.Comment_R_Iconstar}>
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#FFAC33' />
                            <IconFontAwesome name='star' size={15} color='#E9E9E9' />
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            สั่งซื้อซ้ำเป็นรอบที่ 2 ติดใจโรงแรมสะอาดราคาไม่แพง โลเคชั่นดี</Text>
                        <View style={[stylesDetail.Comment_Image_A, stylesMain.BottomSpace]}>
                            <FastImage
                                style={stylesDetail.Reviews_Image}
                                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                            />
                            <FastImage
                                style={stylesDetail.Reviews_Image}
                                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                            />
                            <FastImage
                                style={stylesDetail.Reviews_Image}
                                source={{ uri: ip + '/MySQL/uploads/products/2019-06-09-1560016588.jpg' }}
                            />
                        </View>
                        <Text style={[stylesDetail.Comment_text_day, stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.BottomSpace]}>
                            16-11-2019 15:56 | กรอบแว่นขนาด 50 cm</Text>
                    </View>
                </View>
            </View>
        );
    }
}

