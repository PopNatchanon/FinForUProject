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
import styleMain from '../style/StylesMainScreen';
import styles from '../style/stylePromotion-src/styleDealScreen';
import stylesStore from '../style/StylesStoreScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import stylesFont from '../style/stylesFont';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TodayProduct } from './MainScreen';
import { Button_Bar } from '../src/HighlightScreen';
export const { width, height } = Dimensions.get('window');

export default class Same_StoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const type_product = this.props.navigation.getParam('type_product')
        var title
        switch (type_product) {
            case 'this_store':
                title = 'สินค้าจากร้านเดียวกัน'
                break;
            case 'same_product':
                title = 'สินค้าที่คล้ายกัน'
                break;
            case 'youlike':
                title = 'สินค้าที่คุณอาจชอบ'
                break;

            default:
                break;
        }
        return (
            <SafeAreaView>
                <AppBar navigation={this.props.navigation} noIcon Title={title} />
                <Slide />
                <Header Title={title} />
                <ScrollView>
                {type_product=='youlike'?
                <Button_Bar />:
                null}
                    <TodayProduct noTitle navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { Title } = this.props
        return (
            <View style={{ width: '100%', alignItems: 'center', marginVertical: 10, }}>
                <View style={{ width: 150, height: 50, backgroundColor: '#0A55A6', justifyContent: 'center', borderRadius: 5, alignItems: 'center', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#FFFFFF' }]}> {Title} </Text></View>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///


