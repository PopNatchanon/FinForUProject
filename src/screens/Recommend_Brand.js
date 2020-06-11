///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, } from './MainScreen';
import { ProductBox, LoadingScreen, GetData, GetServices, NavigationNavigateScreen, FlatProduct, } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Recommend_Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDataService: true,
            activeGetCurrentUser: true,
        };
    }
    getSource = (value) => {
        this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser, });
    }
    getData = (dataService) => {
        this.setState({ dataService, activeDataService: false })
    }
    render() {
        const { navigation } = this.props
        const { activeGetCurrentUser, activeDataService, currentUser, dataService, } = this.state
        const uri = `${finip}/brand/all_brand`;
        activeGetCurrentUser == false && activeDataService == true &&
            GetServices({ uriPointer: uri, getDataSource: this.getData.bind(this), })
        activeGetCurrentUser == true &&
            GetData({ getSource: this.getSource.bind(this), getUser: true, })
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                {
                    (activeGetCurrentUser == true || activeDataService == true) &&
                    <LoadingScreen key='LoadingScreen' />
                }
                <AppBar1 {...this.props} titleHead={'แบรนด์แนะนำ'} backArrow searchBar chatBar />
                <ScrollView>
                    {
                        dataService && dataService.store.map((value, index) => {
                            return (
                                <Recommend_Brand_Store {...this.props} key={index} dataService={value} />
                            )
                        })
                    }
                </ScrollView>
                <ExitAppModule {...this.props} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Recommend_Brand_Store
export class Recommend_Brand_Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation, dataService } = this.props
        const image_header = `${finip}/${dataService.image_head_path}/${dataService.image_head}`;
        const image_store = `${finip}/${dataService.store_path}/${dataService.image_store}`;
        return (
            <View style={stylesMain.FrameBackground}>
                <FastImage
                    source={{
                        uri: image_header,
                    }}
                    style={stylesTopic.Brand_ImageBackground}
                    resizeMode={FastImage.resizeMode.stretch} />

                <View style={stylesTopic.Recommend_Brand_StoreBoxPro}>
                    <View style={stylesTopic.Recommend_Brand_Pro}>
                        <FastImage
                            style={stylesTopic.Recommend_Brand_Proimage}
                            source={{
                                uri: image_store,
                            }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                    <TouchableOpacity onPress={() => NavigationNavigateScreen({
                        goScreen: 'StoreScreen', setData: { id_item: 23 }, navigation
                    })}>
                        <View style={[stylesTopic.Recommend_Brand_ProButton]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เข้าดูร้าน</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    dataService && dataService.product &&
                    <FlatProduct {...this.props} custumNavigation='Recommend_Brand_Store' dataService={dataService.product}
                        mode='row3' nameFlatProduct='Recommend_Brand_Store' nameSize={14} priceSize={15} dispriceSize={15} />
                }
            </View>
        );
    }
}