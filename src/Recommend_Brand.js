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
import stylesTopic from '../style/styleTopic';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar1 } from './MainScreen';
export const { width, height } = Dimensions.get('window');

export default class Recommend_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1  backArrow navigation={this.props.navigation} titleHead='แบรนด์แนะนำ' />
                <ScrollView>
                    <Recommend_Brand_Store navigation={this.props.navigation}/>
                    <Recommend_Brand_Store navigation={this.props.navigation}/>
                    <Recommend_Brand_Store navigation={this.props.navigation}/>
                    <Recommend_Brand_Store navigation={this.props.navigation}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Recommend_Brand_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <ImageBackground
                    source={require('../icon/bgprofile.jpg')}
                    style={stylesTopic.Brand_ImageBackground}
                />
                <View style={stylesTopic.Recommend_Brand_StoreBoxPro}>
                    <View style={stylesTopic.Recommend_Brand_Pro}>
                        <FastImage style={stylesTopic.Recommend_Brand_Proimage}
                            source={{
                                uri: ip + '/MySQL/uploads/icon_brand/Lacoste.png',
                            }}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={stylesTopic.Recommend_Brand_ProButton}>
                            <Text>เข้าดูร้าน</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={stylesTopic.Recommend_Brand_Product}>
                    <View style={stylesTopic.Recommend_Brand_Product_Box}>
                        <View style={stylesTopic.Recommend_Brand_Product_Image}></View>
                        <View>
                            <Text style={[stylesFont.FontSize8, stylesFont.FontFamilyText]}>ห้องพัก Deluxe Pool Villa</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#0A55A6', }]}>฿10,000</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#C4C4C4', }]}>฿20,000</Text>
                        </View>
                    </View>
                    <View style={stylesTopic.Recommend_Brand_Product_Box}>
                        <View style={stylesTopic.Recommend_Brand_Product_Image}></View>
                        <View>
                            <Text style={[stylesFont.FontSize8, stylesFont.FontFamilyText]}>ห้องพัก Deluxe Pool Villa</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#0A55A6', }]}>฿10,000</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#C4C4C4', }]}>฿20,000</Text>
                        </View>
                    </View>
                    <View style={stylesTopic.Recommend_Brand_Product_Box}>
                        <View style={stylesTopic.Recommend_Brand_Product_Image}></View>
                        <View>
                            <Text style={[stylesFont.FontSize8, stylesFont.FontFamilyText]}>ห้องพัก Deluxe Pool Villa</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#0A55A6', }]}>฿10,000</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#C4C4C4', }]}>฿20,000</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



