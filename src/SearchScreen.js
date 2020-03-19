///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, BannerBar_THREE, ExitAppModule, TodayProduct, } from './MainScreen';
import { Button_Bar, } from './ExclusiveScreen';
import { GetServices, } from './tools/Tools'
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Count: 0,
            sliderVisible: false,
            dataService: [],
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props;
        const { dataService, modeStore, sliderVisible, } = this.state;
        if (
            ////>nextProps
            navigation !== nextProps.navigation ||
            ////>nextState
            dataService !== nextState.dataService || modeStore !== nextState.modeStore || sliderVisible !== nextState.sliderVisible
        ) {
            return true
        }
        return false
    }
    getData = (dataService) => {
        this.setState({ dataService })
    }
    setSlider = (sliderVisible) => {
        this.setState({ sliderVisible })
    }
    componentDidMount() {
        const { navigation } = this.props;
        const modeStore = navigation.getParam('modeStore');
        this.setState({ modeStore })
    }
    render() {
        const { navigation } = this.props;
        const { dataService, modeStore, sliderVisible, } = this.state;
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        const SearchText = 'Louis';
        const data = [{
            title: 'หมวดหมู่',
            subtitle: [{
                name: 'กระเป๋าสะพายข้าง'
            }, {
                name: 'กระเป๋าสะพายหลัง'
            }, {
                name: 'กระเป๋าสตางค์'
            }, {
                name: 'กระเป๋าใส่นามบัตร'
            }, {
                name: 'กระเป๋าใส่เหรียญ'
            }, {
                name: 'กระเป๋าถือ'
            }, {
                name: 'อื่นๆ'
            }]
        }, {
            title: 'แบรนด์',
            subtitle: [{
                name: 'BP world'
            }, {
                name: 'Tokyo boy'
            }, {
                name: 'JJ'
            }, {
                name: 'ETONWEAG'
            }]
        }]
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
                <AppBar navigation={navigation} SearchText={SearchText} leftBar='backarrow' />
                {
                    modeStore == true ?
                        (
                            <ScrollView>
                                <HeadBox navigation={navigation} SearchText={SearchText} />
                                <StoreCard navigation={navigation} />
                                <StoreCard navigation={navigation} />
                                <StoreCard navigation={navigation} />
                                <StoreCard navigation={navigation} />
                                <StoreCard navigation={navigation} />
                                <StoreCard navigation={navigation} />
                            </ScrollView>
                        ) :
                        (
                            <ScrollView>
                                <HeadBox navigation={navigation} SearchText={SearchText} otherOption />
                                <StoreCard navigation={navigation} />
                                <BannerBar_THREE />
                                <Button_Bar setSliderVisible={this.setSlider.bind(this)} getSliderVisible={{
                                    getSlider: sliderVisible, count: 0
                                }} />
                                {
                                    dataService &&
                                    <TodayProduct noTitle navigation={navigation} loadData={dataService} typeip prepath='mysql' />
                                }
                            </ScrollView>
                        )
                }
                <SlideTab2 data={data} sliderVisible={sliderVisible} setStateSliderVisible={this.setSlider.bind(this)} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> HeadBox
export class HeadBox extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation, otherOption, SearchText, } = this.props
        if (
            ////>nextProps
            navigation !== nextProps.navigation || otherOption !== nextProps.otherOption || SearchText !== nextProps.SearchText
            ////>nextState
        ) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.navigate(value, value2)
    }
    render() {
        const { otherOption, SearchText, } = this.props
        return (
            <View>
                <View style={[stylesMain.FrameBackgroundTextBox]}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                        ร้านค้าที่เกี่ยวข้องกับ <Text>"{SearchText}"</Text></Text>
                    {
                        otherOption &&
                        <TouchableOpacity onPress={this.navigationNavigateScreen.bind(this, 'SearchScreen', { modeStore: true })}>
                            <View style={[stylesMain.FlexRow, { marginRight: 4, marginTop: 8 }]}>
                                <Text style={[
                                    stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7,
                                    stylesMain.ItemCenterVertical, {
                                        marginRight: 0,
                                    }
                                ]}>
                                    ร้านค้าอื่นๆ</Text>
                                <IconEntypo name="chevron-right" size={18} style={[stylesMain.ItemCenterVertical, {
                                    color: '#0A55A6'
                                }]} />
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreCard
export class StoreCard extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { navigation } = this.props
        if (
            ////>nextProps
            navigation !== nextProps.navigation
            ////>nextState
        ) {
            return true
        }
        return false
    }
    navigationNavigateScreen = (value, value2) => {
        const { navigation } = this.props
        value == 'goBack' ?
            navigation.goBack() :
            value == 'LoginScreen' ? (
                navigation.popToTop(),
                navigation.replace(value, value2)
            ) :
                navigation.navigate(value, value2)
    }
    render() {
        var dataMySQL = [ip, 'mysql/uploads/slide/NewStore/luxury_shop2.jpg'].join('/');
        return (
            <View style={stylesMain.BoxStore5Box}>
                <TouchableOpacity style={stylesMain.FlexRow}
                    onPress={this.navigationNavigateScreen.bind(this, 'StoreScreen', { id_item: 24 })}>
                    <View style={[stylesMain.BoxStore5Image, stylesMain.ItemCenterVertical, {
                        width: 45, height: 45, marginRight: 10,
                    }]}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.BoxStore5Image]} />
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
                            PPoo</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ผู้ติดตาม : 12.1 พัน</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#AAAAAA' }]}>
                            จำนวนสินค้า <Text style={{ color: '#0A55A6' }}>
                                560</Text> | คะแนน <Text style={{ color: '#0A55A6' }}>4.6</Text></Text>
                    </View>
                    <View style={stylesMain.FlexRow}>
                        <View style={[
                            stylesMain.ItemCenter, {
                                width: 70, height: 25, backgroundColor: '#0A55A6', borderRadius: 6, marginHorizontal: 2
                            }
                        ]}>
                            <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                                + ติดตาม</Text>
                        </View>
                        <View style={[{ width: 70, height: 25, backgroundColor: '#0A55A6', borderRadius: 6, marginHorizontal: 2 }]}>
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: '100%', height: '100%' }]}
                                onPress={this.navigationNavigateScreen.bind(this, 'Profile_Topic', { selectedIndex: 1 })}>
                                <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                                    พูดคุย</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}