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
import { AppBar1, ExitAppModule } from './MainScreen';
import { GetServices, ProductBox, } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
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
                <ExitAppModule navigation={navigation} />
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
        var dataService = [{
            image_path: 'uploads/products', image: '2019-10-29-1572330830.jpg', name: 'ห้องพัก Pool Villa',
            full_price: 10000, id_product: 23,
        }, {
            image_path: 'uploads/products', image: '2019-10-29-1572330808.jpg', name: 'ห้องพัก Deluxe Pool Villa',
            full_price: 20000, id_product: 24,
        }, {
            image_path: 'uploads/products', image: '2019-10-29-1572330888.jpg', name: 'ห้องพัก Special Pool Villa',
            full_price: 30000, id_product: 25,
        },]
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
                    {
                        dataService ?
                            <ProductBox dataService={dataService} navigation={navigation} typeip={'ip'}
                                pointerUrl='DetailScreen' pointerid_store nameSize={14} priceSize={16} dispriceSize={12}
                                prepath='mysql'
                            /> :
                            null
                    }
                </View>
            </View>
        );
    }
}