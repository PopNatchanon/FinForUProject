///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from './MainScreen';
import { GetServices, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class BellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNoBackground, stylesMain.BackgroundAreaView]}>
                <AppBar1 titleHead='การแจ้งเตือน' />
                <ScrollView>
                    <Popular_store />
                    <Pro_for_U navigation={this.props.navigation} />
                    <Update_buy navigation={this.props.navigation} />
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends Component {
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
    dataNewStore() {
        const text = 'ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!';
        return this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={stylesMain.BoxStore3Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore3Image}
                        />
                        <Text numberOfLines={5} style={[stylesMain.BoxStore3Text, stylesFont.FontFamilyText, stylesFont.FontSize6, { height: height * 0.15 }]}>
                            {
                                text
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        ร้านเด็ด</Text>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                        ดูทั้งหมด</Text>
                </View>
                <ScrollView horizontal>
                    {this.dataNewStore()}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class Pro_for_U extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        โปรเด็ดที่คัดมาเพื่อคุณ</Text>
                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Pro', { selectedIndex: 0 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={stylesMain.BoxStore4Box}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Pro', { selectedIndex: 0 })}>
                            <View style={stylesMain.BoxStore4Box}>
                                <FastImage
                                    style={stylesMain.BoxStore4Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                                    }}
                                />
                                <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Pro', { selectedIndex: 0 })}>
                            <View style={stylesMain.BoxStore4Box}>
                                <FastImage
                                    style={stylesMain.BoxStore4Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                                    }}
                                />
                                <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Pro', { selectedIndex: 0 })}>
                            <View style={stylesMain.BoxStore4Box}>
                                <FastImage
                                    style={stylesMain.BoxStore4Image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop4.jpg',
                                    }}
                                />
                                <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                    ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Pro_for_U
export class Update_buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize4]}>
                        อัพเดทคำสั่งซื้อ</Text>
                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Pro', { selectedIndex: 1 })}>
                        <View style={stylesMain.BoxStore4Box}>
                            <FastImage
                                style={stylesMain.BoxStore4Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง??</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text numberOfLines={4} style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                </View>
            </View>
        );
    }
}
