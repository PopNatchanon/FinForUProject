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
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule} from './MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Recommend_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 titleHead={'แบรนด์แนะนำ'} backArrow searchBar chatBar navigation={navigation} />
                <ScrollView>
                    <Recommend_Brand_Store navigation={navigation} />
                    <Recommend_Brand_Store navigation={navigation} />
                    <Recommend_Brand_Store navigation={navigation} />
                    <Recommend_Brand_Store navigation={navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Recommend_Brand_Store
export class Recommend_Brand_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={stylesMain.FrameBackground2}>
                <FastImage
                    source={require('../icon/bgprofile.jpg')}
                    style={stylesTopic.Brand_ImageBackground}
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <View style={stylesTopic.Recommend_Brand_StoreBoxPro}>
                    <View style={stylesTopic.Recommend_Brand_Pro}>
                        <FastImage
                            style={stylesTopic.Recommend_Brand_Proimage}
                            source={{
                                uri: ip + '/MySQL/uploads/icon_brand/brand9.png',
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('StoreScreen', { id_item: 23 })}>
                        <View style={[stylesTopic.Recommend_Brand_ProButton]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เข้าดูร้าน</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={stylesMain.FlexRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { id_item: 23 })}>
                        <View style={stylesMain.BoxProduct1Box}>
                            <View style={stylesMain.BoxProduct1ImageofLines}>
                                <FastImage
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572330830.jpg',
                                    }}
                                    style={stylesMain.BoxProduct1Image}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View style={{ height: 60, paddingHorizontal: 3 }}>
                                <View style={[stylesMain.BoxProduct1NameofLines]}>
                                    <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                        ห้องพัก Deluxe Pool Villa</Text>
                                </View>
                                <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                    <NumberFormat
                                        value={10000}
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
                                    <NumberFormat
                                        value={20000}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'฿'}
                                        renderText={value =>
                                            <Text style={[
                                                stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                                { marginTop: 3 }
                                            ]}>
                                                {value}</Text>
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { id_item: 23 })}>
                        <View style={stylesMain.BoxProduct1Box}>
                            <View style={stylesMain.BoxProduct1ImageofLines}>
                                <FastImage
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572330830.jpg',
                                    }}
                                    style={stylesMain.BoxProduct1Image}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View style={{ height: 60, paddingHorizontal: 3 }}>
                                <View style={[stylesMain.BoxProduct1NameofLines]}>
                                    <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                        ห้องพัก Deluxe Pool Villa</Text>
                                </View>
                                <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                    <NumberFormat
                                        value={10000}
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
                                    <NumberFormat
                                        value={20000}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'฿'}
                                        renderText={value =>
                                            <Text style={[
                                                stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                                { marginTop: 3 }
                                            ]}>
                                                {value}</Text>
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { id_item: 23 })}>
                        <View style={stylesMain.BoxProduct1Box}>
                            <View style={stylesMain.BoxProduct1ImageofLines}>
                                <FastImage
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572330830.jpg',
                                    }}
                                    style={stylesMain.BoxProduct1Image}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View style={{ height: 60, paddingHorizontal: 3 }}>
                                <View style={[stylesMain.BoxProduct1NameofLines]}>
                                    <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                        ห้องพัก Deluxe Pool Villa</Text>
                                </View>
                                <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                    <NumberFormat
                                        value={10000}
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
                                    <NumberFormat
                                        value={20000}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'฿'}
                                        renderText={value =>
                                            <Text style={[
                                                stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                                { marginTop: 3 }
                                            ]}>
                                                {value}</Text>
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <ExitAppModule navigation={navigation} />
            </View>
        );
    }
}