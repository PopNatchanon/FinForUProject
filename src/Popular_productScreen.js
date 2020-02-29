///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, View, TouchableOpacity, Text,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, TodayProduct, ExitAppModule } from './MainScreen';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class Popular_productScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_item: null,
        };
        this.getData = this.getData.bind(this)
    }
    getData(id_item) {
        this.setState({ id_item })
        this._scrollView.scrollTo({ x: 0, y: 0, animated: true })
        this._scrollView.scrollTo({ x: 0, y: 0, animated: true })
    }
    render() {
        const { navigation } = this.props
        const { id_item } = this.state
        var loadData = navigation.getParam('loadData')
        var dataArray = {}
        dataArray[0] = loadData.product_hit
        dataArray[1] = loadData.best_price
        dataArray[2] = loadData.best_sale
        dataArray[3] = loadData.best_cool
        id_item == null ?
            this.setState({ id_item: navigation.getParam('id_item') }) :
            null
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={navigation} titleHead='สินค้ายอดนิยม' />
                {
                    id_item != null ?
                        <ScrollView
                            stickyHeaderIndices={[2]}
                            ref={view => this._scrollView = view}
                        >
                            <Slide />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar id_item={id_item} getData={this.getData} />
                            <TodayProduct loadData={dataArray[id_item]} navigation={navigation} noTitle />
                        </ScrollView> :
                        <ScrollView>
                            <Slide />
                        </ScrollView>
                }
                <ExitAppModule navigation={navigation} />
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
        this.props.getData(selectedIndex)
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