///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchData, setActiveFetch } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, TodayProduct, } from './MainScreen';
import { Slide } from './src_Promotion/DealScreen';
import { TabBar, GetServices } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
class Popular_productScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            id_items: null,
        };
    }
    getData(dataService) {
        this.setState({ activeDataService: false, dataService })
    }
    getButton_Bar(id_item) {
        const { id_items } = this.state
        id_items != id_item && this.setState({ id_items: id_item })
    }
    render() {
        const { getFetchData, route, } = this.props
        const { activeDataService, dataService, id_items } = this.state
        // getFetchData['publish_mobile'] && getFetchData['publish_mobile'].data
        const id_item = route.params?.id_item + ''
        var dataArray = {}
        dataArray[0] = getFetchData['publish_mobile']?.data?.product_hit
        dataArray[1] = getFetchData['publish_mobile']?.data?.best_price
        dataArray[2] = getFetchData['publish_mobile']?.data?.best_sale
        dataArray[3] = getFetchData['publish_mobile']?.data?.best_cool
        var uri = `${finip}/home/home_mobile`;
        var dataBody = {
            slide: 'banner'
        };
        id_items == null &&
            this.setState({ id_items: id_item })
        activeDataService == true &&
            GetServices({ uriPointer: uri, dataBody, getDataSource: this.getData.bind(this), })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 {...this.props} backArrow titleHead='สินค้ายอดนิยม' />
                {
                    id_items != null ?
                        <ScrollView
                            stickyHeaderIndices={[2]}
                            ref={view => this._scrollView = view}>
                            <Slide dataService={dataService} />
                            <View style={{ marginBottom: 10 }}></View>
                            <Button_Bar id_item={id_items} getData={this.getButton_Bar.bind(this)} />
                            <TodayProduct {...this.props} loadData={dataArray[id_items]} noTitle />
                        </ScrollView> :
                        <ScrollView>
                            <Slide dataService={dataService} />
                        </ScrollView>
                }
                <ExitAppModule {...this.props} />
            </SafeAreaView>
        );
    }
}
const mapStateToProps = (state) => ({
    getFetchData: state.singleFetchDataFromService,
    activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({
    fetchData,
    setActiveFetch,
});
export default connect(mapStateToProps, mapDispatchToProps)(Popular_productScreen);
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
                    activeColor={mainColor}
                    activeFontColor={mainColor}
                    type='tag' />
            </View>
        );
    }
}