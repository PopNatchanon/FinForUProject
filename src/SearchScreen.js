///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import SlidingView from 'rn-sliding-view';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesTopic from '../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, BannerBar_THREE, TodayProduct } from './MainScreen';
import { Button_Bar, SlideTab, PricesSlide } from './ExclusiveScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Count: 0,
            sliderVisible: false,
        };
        this.setSlider = this.setSlider.bind(this)
    }
    setSlider(value) {
        this.setState({ sliderVisible: value })
    }
    componentDidMount() {
        const { navigation } = this.props;
        const modeStore = navigation.getParam('modeStore');
        this.setState({ modeStore })
    }
    render() {
        const { sliderVisible, modeStore } = this.state;
        const { navigation } = this.props;
        const SearchText = 'Louis';
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar navigation={navigation} SearchText={SearchText} leftBar='backarrow' />
                {
                    modeStore == true ?
                        (
                            <ScrollView>
                                <HeadBox navigation={navigation} SearchText={SearchText} />
                                <StoreCard />
                                <StoreCard />
                                <StoreCard />
                                <StoreCard />
                                <StoreCard />
                                <StoreCard />
                            </ScrollView>
                        ) :
                        (
                            <ScrollView>
                                <HeadBox navigation={navigation} SearchText={SearchText} otherOption />
                                <StoreCard />
                                <BannerBar_THREE />
                                <Button_Bar setSliderVisible={this.setSlider} getSliderVisible={{ getSlider: sliderVisible, count: 0 }} />
                                <ScrollView>
                                    <TodayProduct noTitle navigation={navigation} />
                                </ScrollView>
                            </ScrollView>
                        )
                }
                <SlidingView
                    disableDrag
                    componentVisible={sliderVisible}
                    containerStyle={{
                        backgroundColor: null,
                        justifyContent: 'center',
                        alignContent: 'stretch',
                        width: '100%'
                    }}
                    position="right"
                    changeVisibilityCallback={() => this.setState({ sliderVisible: !sliderVisible })}
                >
                    <View style={stylesMain.FlexRow}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this.setState({ sliderVisible: !sliderVisible })}
                        >
                            <View style={stylesTopic.BackgroundLeft}></View>
                        </TouchableOpacity>
                        <View style={[stylesMain.ItemCenter, stylesTopic.BackgroundRight, stylesMain.SafeAreaViewNB]}>
                            <View style={{ height: '90%' }}>
                                <ScrollView>
                                    <SlideTabGet />
                                </ScrollView>
                            </View>
                            <View style={[stylesMain.FlexRow, stylesMain.SafeAreaViewNB, { marginTop: 8 }]}>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                        color: '#0A55A6'
                                    }]}>
                                        รีเซ็ต</Text>
                                </View>
                                <View style={[stylesMain.ItemCenter, stylesTopic.BoxReset, { backgroundColor: '#0A55A6' }]}>
                                    <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize6, stylesFont.FontFamilyText, {
                                        color: '#fff'
                                    }]}>
                                        เสร็จสิ้น</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SlidingView>
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> HeadBox
export class HeadBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { SearchText, otherOption, navigation } = this.props
        return (
            <View>
                <View style={[stylesMain.FrameBackgroundTextBox]}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                        ร้านค้าที่เกี่ยวข้องกับ <Text>"{SearchText}"</Text></Text>
                    {
                        otherOption ?
                            <TouchableOpacity onPress={() => navigation.push('SearchScreen', { modeStore: true })}>
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
                            : null
                    }
                </View>
            </View >
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> StoreCard
export class StoreCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var dataMySQL = [ip, 'mysql/uploads/slide/NewStore/luxury_shop2.jpg'].join('/');
        return (
            <View style={stylesMain.BoxStore5Box}>
                <View style={[stylesMain.BoxStore5Image, stylesMain.ItemCenterVertical, { width: 45, height: 45, marginRight: 10, }]}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={[stylesMain.BoxStore5Image]}
                    />
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
                    <View style={[stylesMain.ItemCenter, { width: 70, height: 25, backgroundColor: '#0A55A6', borderRadius: 6, marginHorizontal: 2 }]}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                            + ติดตาม</Text>
                    </View>
                    <View style={[stylesMain.ItemCenter, { width: 70, height: 25, backgroundColor: '#0A55A6', borderRadius: 6, marginHorizontal: 2 }]}>
                        <Text style={[stylesMain.ItemCenterVertical, stylesFont.FontSize7, { color: '#fff' }]}>
                            พูดคุย</Text>
                    </View>
                </View>
            </View >
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> SlideTabGet
export class SlideTabGet extends Component {
    render() {
        const item = [{
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
        const item2 = [{
            name: 'BP world'
        }, {
            name: 'Tokyo boy'
        }, {
            name: 'JJ'
        }, {
            name: 'ETONWEAG'
        }]
        return (
            <View>
                <View style={{ width: '100%' }}>
                    <SlideTab Title='หมวดหมู่' item={item} />
                    <SlideTab Title='แบรนด์' item={item2} />
                    <PricesSlide />
                </View>
            </View >
        )
    }
}