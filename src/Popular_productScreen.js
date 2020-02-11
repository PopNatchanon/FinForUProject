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
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
import { TodayProduct, AppBar1 } from './MainScreen';
export const { width, height } = Dimensions.get('window');

export default class Popular_productScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var id_item = this.props.navigation.getParam('id_item')
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='สินค้ายอดนิยม' />
                <Slide />
                <Button_Bar id_item={id_item} />
                <ScrollView>
                    <TodayProduct noTitle />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const { id_item } = this.props
        const item = [{
            name: 'สินค้าสุดฮิต'
        }, {
            name: 'สินค้าราคาโดน'
        }, {
            name: 'สินค้าขายดี'
        }, {
            name: 'สินค้าสุดคูล'
        }]
        return (
            <View style={stylesTopic.FlashSale_Tag}>
                <TabBar
                    sendData={this.updateIndex}
                    item={item}
                    SetValue={id_item ? id_item : null}
                    activeColor={'#0A55A6'}
                    activeFontColor={'#0A55A6'}
                    type='tag'
                />
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///
