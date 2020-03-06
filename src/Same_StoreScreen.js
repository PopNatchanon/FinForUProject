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
import { AppBar1, TodayProduct, ExitAppModule } from './MainScreen';
import { Button_Bar } from '../src/HighlightScreen';
import { Slide } from './src_Promotion/DealScreen';
import { GetServices } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Same_StoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: []
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { Title, dataService } = this.props
        const { navigation } = this.props
        if (Title !== nextState.Title || dataService !== nextState.dataService || navigation !== nextProps.navigation) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    render() {
        const { dataService } = this.state
        const { navigation } = this.props
        const type_product = navigation.getParam('type_product')
        const id_type = navigation.getParam('id_type')
        const id_store = navigation.getParam('id_store')
        var uri = finip + '/product/product_other_mobile';
        var dataBody
        type_product && id_type && id_store && (
            dataBody = {
                id_type: id_type,
                id_store: id_store,
                type_product: type_product,
            }
        )
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
            <SafeAreaView style={{ height: '100%' }}>
                {
                    dataBody !== undefined &&
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                }
                <AppBar1 titleHead={title} backArrow navigation={navigation} />
                <ScrollView stickyHeaderIndices={[type_product == 'youlike' ? 2 : null]}>
                    <Slide />
                    <Header Title={title} />
                    {
                        type_product == 'youlike' &&
                        <Button_Bar />
                    }
                    {
                        dataService &&
                        <TodayProduct noTitle navigation={navigation} loadData={dataService} />
                    }
                </ScrollView>
                <ExitAppModule navigation={navigation} />
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
    shouldComponentUpdate = (nextProps, nextState) => {
        const { Title } = this.props
        if (Title !== nextProps.Title) {
            return true
        }
        return false
    }
    render() {
        const { Title } = this.props
        return (
            <View style={{ width: '100%', alignItems: 'center', marginVertical: 10, }}>
                <View style={{
                    width: 150, height: 50, backgroundColor: '#0A55A6', justifyContent: 'center', borderRadius: 5, alignItems: 'center',
                }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}> {Title} </Text></View>
            </View>
        );
    }
}