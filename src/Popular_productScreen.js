///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
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
import { AppBar1, ExitAppModule, TodayProduct, } from './MainScreen';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar, GetServices } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Popular_productScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            id_item: null,
        };
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    getButton_Bar(id_item) {
        this.setState({ id_item })
    }
    render() {
        const { navigation } = this.props
        const { activeDataService, dataService, id_item } = this.state
        var loadData = navigation.getParam('loadData')
        var dataArray = {}
        dataArray[0] = loadData.product_hit
        dataArray[1] = loadData.best_price
        dataArray[2] = loadData.best_sale
        dataArray[3] = loadData.best_cool
        var uri = finip + '/home/home_mobile'
        var dataBody = {
            slide: 'banner'
        };
        id_item == null &&
            this.setState({ id_item: navigation.getParam('id_item') })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {
                    activeDataService == true &&
                    <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                }
                <AppBar1 backArrow navigation={navigation} titleHead='สินค้ายอดนิยม' />
                {
                    id_item != null ?
                        <ScrollView
                            stickyHeaderIndices={[2]}
                            ref={view => this._scrollView = view}>
                            <Slide dataService={dataService} />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar id_item={id_item} getData={this.getButton_Bar.bind(this)} />
                            <TodayProduct loadData={dataArray[id_item]} navigation={navigation} noTitle />
                        </ScrollView> :
                        <ScrollView>
                            <Slide dataService={dataService} />
                        </ScrollView>
                }
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    updateIndex(value) {
        const { getData } = this.props
        getData(value.selectedIndex)
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
                    sendData={this.updateIndex.bind(this)}
                    item={item}
                    SetValue={
                        id_item ?
                            id_item :
                            null
                    }
                    activeColor={'#0A55A6'}
                    activeFontColor={'#0A55A6'}
                    type='tag' />
            </View>
        );
    }
}