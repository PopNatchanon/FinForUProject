///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, } from './MainScreen';
import { Button_Bar } from '../src/HighlightScreen';
import { Slide } from './src_Promotion/DealScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
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
                <AppBar1 titleHead={title} backArrow navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <Header Title={title} />
                    {
                        type_product == 'youlike' ?
                            <Button_Bar /> :
                            null
                    }
                    <TodayProduct noTitle navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Header
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
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}> {Title} </Text></View>
            </View>
        );
    }
}