///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct } from './MainScreen';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class Popular_productScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        var id_item = navigation.getParam('id_item')
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={navigation} titleHead='สินค้ายอดนิยม' />
                <ScrollView>
                    <Slide />
                    <Button_Bar id_item={id_item} />
                    <TodayProduct noTitle />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
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

