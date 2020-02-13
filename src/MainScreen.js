///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class MainScreen extends Component {
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
    }
    componentDidMount() {
        this.getDataasync()
    }
    render() {
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNoBackground, stylesMain.BackgroundAreaView]}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <Slide />
                    <Category navigation={this.props.navigation} />
                    <Button_Bar navigation={this.props.navigation} />
                    <FlashSale navigation={this.props.navigation} />
                    <Recommend_Brand navigation={this.props.navigation} />
                    <BannerBar_ONE />
                    <Exclusive navigation={this.props.navigation} />
                    <NewStore navigation={this.props.navigation} />
                    <BannerBar_TWO />
                    <Highlight navigation={this.props.navigation} />
                    <PromotionPopular navigation={this.props.navigation} />
                    <Popular_store navigation={this.props.navigation} />
                    <Popular_product navigation={this.props.navigation} />
                    <BannerBar_TWO />
                    <Product_for_you navigation={this.props.navigation} />
                    <BannerBar_TWO />
                    <CategoryProduct navigation={this.props.navigation} />
                    <Second_product navigation={this.props.navigation} />
                    <BannerBar_THREE />
                    <TodayProduct navigation={this.props.navigation} />
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> AppBar ค้นหา
export class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }
    render() {
        const { leftBar, rightBar, searchBar, navigation, SearchText } = this.props
        return (
            <View style={[stylesMain.Appbar, stylesMain.FlexRow, { backgroundColor: '#fff' }]}>
                {
                    leftBar == 'backarrow' ?
                        <View>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                                activeOpacity={1}
                                onPress={() => navigation.goBack()}>
                                <IconEntypo name="chevron-left" size={30} />
                            </TouchableOpacity>
                        </View> :
                        null
                }
                {
                    searchBar ?
                        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.goBack() }}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                                <FastImage
                                    style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                    source={require('../images/sj.png')}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                    width:
                                        rightBar == 'storebar' ?
                                            leftBar == 'backarrow' ?
                                                width - 200 :
                                                width - 170 :
                                            rightBar == 'chat' ?
                                                width - 200 :
                                                width - 170,
                                }]}>
                                    <TextInput
                                        style={[stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter]}
                                        placeholder="ค้นหาสินค้า/ร้านค้า"
                                        value={this.state.text}
                                        maxLength={30}
                                        onChangeText={(text) => this.setState({ text })}
                                    />
                                </View>
                                <IconAntDesign RightItem name="search1" size={20}
                                    style={[stylesMain.ItemCenterVertical, { marginRight: 4 }]}
                                />
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('SearchScreen', { modeStore: false }) }}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                                <FastImage
                                    style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                    source={require('../images/sj.png')}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                                    width:
                                        rightBar == 'storebar' ?
                                            leftBar == 'backarrow' ?
                                                width - 200 :
                                                width - 170 :
                                            rightBar == 'chat' ?
                                                width - 200 :
                                                width - 170,
                                }]}>
                                    <Text style={[
                                        stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter,
                                        stylesMain.ItemCenterVertical
                                    ]}>
                                        {SearchText ? SearchText : 'ค้นหาสินค้า/ร้านค้า'}</Text>
                                </View>
                                <IconAntDesign RightItem name="search1" size={20} style={[stylesMain.ItemCenterVertical, { marginRight: 4 }]} />
                            </View>
                        </TouchableOpacity>
                }
                {
                    rightBar == 'storebar' ?
                        <View style={[stylesMain.ItemCenter, stylesMain.FlexRow]}>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40 }]}
                                onPress={null/*() => this.props.navigation.navigate('CartScreen')*/}>
                                <IconFeather RightItem name="filter" size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 40 }]}
                                onPress={null/*() => this.props.navigation.navigate('CartScreen')*/}>
                                <IconFontAwesome5 RightItem name="ellipsis-h" size={25} />
                            </TouchableOpacity>
                        </View> :
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenterVertical]}>
                            {leftBar == 'backarrow' ?
                                rightBar == 'chat' ?
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                        onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 1 })}>
                                        <IconAntDesign RightItem name="message1" size={25} />
                                    </TouchableOpacity> :
                                    null :
                                <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                    onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 1 })}>
                                    <IconAntDesign RightItem name="message1" size={25} />
                                </TouchableOpacity>
                            }
                            <TouchableOpacity style={[stylesMain.ItemCenter, {
                                width:
                                    leftBar == 'backarrow' ?
                                        rightBar == 'chat' ? 40 : 50 : 40
                            }]} onPress={() => navigation.navigate('CartScreen')}>
                                <IconAntDesign RightItem name="shoppingcart" size={25} />
                            </TouchableOpacity>
                        </View>
                }
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> AppBar สีคราม
export class AppBar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { titleHead, backArrow, chatBar, menuBar, storeBar, searchBar, settingBar, navigation } = this.props;
        return (
            <View style={menuBar ? stylesStore.AppbarMenu : stylesStore.Appbar}>
                <View style={stylesMain.FlexRow}>
                    {
                        backArrow ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                                activeOpacity={1}
                                onPress={() => navigation.goBack()}
                            >
                                <IconEntypo style={[stylesStore.Icon_appbar, {
                                }]} name="chevron-left" size={30} />
                            </TouchableOpacity> :
                            null
                    }
                    <Text style={[
                        stylesStore.Text_appbar, stylesFont.FontSize3, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical
                    ]}>
                        {titleHead ? titleHead : null}</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    {
                        searchBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => navigation.navigate('SearchScreen', { modeStore: false })}
                            >
                                <IconAntDesign RightItem name="search1" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                            </TouchableOpacity> :
                            null
                    }{
                        settingBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => this.props.navigation.navigate('StoreMe_Setting')}>
                                <IconMaterialCommunityIcons name="settings-outline" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                            </TouchableOpacity> :
                            null
                    }{
                        chatBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => navigation.navigate('Profile_Topic', { selectedIndex: 1 })}
                            >
                                <IconAntDesign RightItem name="message1" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                            </TouchableOpacity> :
                            null
                    }{
                        storeBar ?
                            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                onPress={() => navigation.navigate('Profile_Topic', { selectedIndex: 3 })}
                            >
                                <IconFontAwesome5 RightItem name="store" size={20} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginRight: 8
                                }]} />
                            </TouchableOpacity> :
                            null
                    }
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Slide
export class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            activeSlide: 0,
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    _renderItem = ({ item, indexs }) => {
        var dataMySQL = [finip, item.image_path, item.image].join('/');
        return (
            <View style={stylesMain.child} key={indexs}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesMain.childSlide}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
    get pagination() {
        const { dataService, activeSlide } = this.state;
        return (
            <View style={{ marginTop: -60, marginBottom: -15 }}>
                <Pagination
                    dotsLength={dataService.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 30,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(255, 255, 255, 0.92)',
                        borderWidth: 2,
                    }}
                    inactiveDotStyle={{
                        width: 15,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    }}
                    carouselRef={this.activeSlide}
                    tappableDots={!!this.activeSlide}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        var dataBody = {
            slide: 'banner'
        };
        var uri = finip + '/home/home_mobile'
        return (
            <View>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <Carousel
                    ref={c => this.activeSlide = c}
                    data={this.state.dataService}
                    renderItem={this._renderItem}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    sliderHeight={height * 0.5}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.pagination}
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Category
export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = finip + '/home/category_mobile'
        let dataCategory = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
            return (
                <View style={stylesMain.Category} key={indexs}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.Category_box}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={{ height: 20 }}>
                        <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesFont.FontCenter]}>
                            {item.name}</Text>
                    </View>
                </View>
            )
        })
        return (
            <View style={stylesMain.FrameBackground2} >
                <GetServices uriPointer={uri} getDataSource={this.getData} />
                <ScrollView horizontal >
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CategoryScreen')}>
                        <View style={stylesMain.category_A}>
                            {dataCategory}
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground2} >
                <ScrollView horizontal>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('DealScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ดีลสุดพิเศษ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CoinScreen')} >
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                FinCoin</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CampaignScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                แคมเปญ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('The_BestFinScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                สุดคุ้มสุดฟิน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Installment_payScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ผ่อนชำระ 0%</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Brand_RCM
export class Recommend_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[stylesMain.FrameBackground2, stylesMain.FrameBackground_Height]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        แบรนด์แนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Brand')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={stylesMain.FrameBackground_Box}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Brand')}>
                            <View>
                                <FastImage
                                    style={stylesMain.Brand_image_RCM}
                                    source={{
                                        uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Brand')}>
                            <View>
                                <FastImage
                                    style={stylesMain.Brand_image_RCM}
                                    source={{
                                        uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Brand')}>
                            <View >
                                <FastImage
                                    style={stylesMain.Brand_image_RCM}
                                    source={{
                                        uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Brand')}>
                            <View >
                                <FastImage
                                    style={stylesMain.Brand_image_RCM}
                                    source={{
                                        uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_store
export class Popular_store extends Component {
    render() {
        return (
            <View style={stylesMain.FrameBackground2}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านที่ใช่อยากให้ช้อป</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Store')}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Store')}>
                        <View style={stylesMain.BoxStore1Box}>
                            <FastImage
                                style={stylesMain.BoxStore1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                                }}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Popular_product
export class Popular_product extends Component {

    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackground2}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้ายอดนิยม</Text>
                    </View>
                    <View style={stylesMain.Popular_Box_A}>
                        <ScrollView horizontal>
                            <View style={stylesMain.Popular_Box_B}>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={() => this.props.navigation.navigate('Popular_productScreen', { id_item: 0 })}>
                                    <View style={stylesMain.Popular_Box_C}>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                    </View>
                                    <View style={stylesMain.PopularText_A} >
                                        <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                            สินค้าสุดฮิต</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={stylesMain.Popular_Box_B}>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={() => this.props.navigation.navigate('Popular_productScreen', { id_item: 1 })}>
                                    <View style={stylesMain.Popular_Box_C}>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                    </View>
                                    <View style={stylesMain.PopularText_A} >
                                        <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                            สินค้าราคาโดน</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={stylesMain.Popular_Box_B}>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={() => this.props.navigation.navigate('Popular_productScreen', { id_item: 2 })}>
                                    <View style={stylesMain.Popular_Box_C}>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                    </View>
                                    <View style={stylesMain.PopularText_A} >
                                        <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                            สินค้าขายดี</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={stylesMain.Popular_Box_B}>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={() => this.props.navigation.navigate('Popular_productScreen', { id_item: 3 })}>
                                    <View style={stylesMain.Popular_Box_C}>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                    </View>
                                    <View style={stylesMain.PopularText_A} >
                                        <Text style={[{ marginLeft: 8 }, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                                            สินค้าสุดคูล</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_ONE
export class BannerBar_ONE extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_TWO
export class BannerBar_TWO extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/slide/Banner_type/GlassesBannerBar.jpg',
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> BannerBar_THREE
export class BannerBar_THREE extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.Banner_Bar}>
                <FastImage
                    style={stylesMain.Banner_Bar_image}
                    source={{
                        uri: ip + '/MySQL/uploads/slide/banner_sale.jpg',
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> FlashSale
export class FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        let dataFlashSale = this.state.dataService.map((item, indexs) => {
            var throughsale = Number(item.full_price) + (item.full_price * 0.5)
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={indexs}
                    onPress={() => this.props.navigation.navigate('FlashSaleScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct5Box} >
                        <View style={stylesMain.BoxProduct5ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct5Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 55, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct5NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize8]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct5PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct5ImagePrice, stylesFont.FontSize7, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 2 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            FLASH SALE</Text>
                        <View style={[stylesMain.FlexRow, { marginTop: 4 }]}>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={stylesMain.Time_FlashSale_TimeText}>
                                    01</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={stylesMain.Time_FlashSale_TimeText}>
                                    45</Text>
                            </View>
                            <View style={stylesMain.Time_FlashSale_TimeBox}>
                                <Text style={stylesMain.Time_FlashSale_TimeText}>
                                    40</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('FlashSaleScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {dataFlashSale}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> PromotionPopular
export class PromotionPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'brand2'
        };
        let dataPromotionPopular = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Recommend_Store')} key={indexs}>
                    <View style={[stylesMain.BoxStore2Box, { backgroundColor: '#111', borderRadius: 8, }]}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.BoxStore2Image, { opacity: 0.5 }]}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Recommend_Store')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {dataPromotionPopular}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Confidential_PRO
export class Confidential_PRO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'Confidential_PRO'
        };
        let dataConfidential_PRO = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <View style={stylesMain.BoxStore2Box} key={indexs}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.BoxStore2Image}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
            )
        })
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={stylesMain.FrameBackgroundTextStart}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <Text style={stylesMain.FrameBackgroundTextEnd}>
                        ดูทั้งหมด</Text>
                </View>
                <ScrollView horizontal >
                    <View style={stylesMain.Confidential_A}>
                        {dataConfidential_PRO}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Product_for_you
export class Product_for_you extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'foryou'
        };
        let dataProductForYou = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box2} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={[stylesMain.FrameBackground2]}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        FIN คัดมาเพื่อคุณ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Product_for_youScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={[stylesMain.ProductForYouFlexBox, stylesMain.Product_for_you]}>
                        {dataProductForYou}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Highlight
export class Highlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        let dataService = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ไฮไลท์ประจำสัปดาห์</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('HighlightScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {dataService}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> NewStore
export class NewStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store2'
        };
        let dataNewStore = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('Recommend_Store', { id_item: item.id_store })}>
                    <View style={stylesMain.BoxStore1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore1Image}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                        ร้านค้าห้ามพลาด!!่</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {dataNewStore}
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Exclusive
export class Exclusive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        let dataService = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        สินค้าสุด Exclusive</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ExclusiveScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize7, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {dataService}
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProduct
export class CategoryProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = finip + '/home/category_mobile';
        let dataCategory = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [finip, item.mobile_head].join('/');
            return (
                <View style={[stylesMain.FrameBackground2, { marginTop: 10, backgroundColor: item.bg_m }]} key={indexs}>
                    <View style={{}}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.CategoryProductImageHead, { marginTop: 0 }]}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <View style={stylesMain.FrameBackgroundTextBox}>
                            <Text></Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CategoryScreen')}>
                                <Text style={[stylesMain.FrameBackgroundTextEnd2, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    ดูทั้งหมด</Text>
                            </TouchableOpacity>
                        </View>
                        <CategoryProductSubProduct navigation={this.props.navigation} id_type={item.id_type} />
                    </View>
                    <View>
                        <View style={stylesMain.Text_Bar_Image}>
                            <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                ร้านฮิต ติดเทรนด์</Text>
                        </View>
                        <CategoryProductSubStore navigation={this.props.navigation} />
                    </View>
                    <View style={{ marginBottom: 10, }}>
                        <View style={stylesMain.Text_Bar_Image}>
                            <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                FIN แนะนำร้าน </Text>
                        </View>
                        <CategoryProductSubPromotion navigation={this.props.navigation} />
                    </View>
                </View>
            );
        })
        return (
            <View>
                <GetServices uriPointer={uri} getDataSource={this.getData} />
                {dataCategory}
            </View>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubProduct
export class CategoryProductSubProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = finip + '/home/product_mobile';
        var dataBody = {
            id_type: this.props.id_type
        };
        let dataCategoryProductSubProduct = this.state.dataService.map((item, indexs) => {
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            var dataMySQL = [finip, item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <ScrollView horizontal>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {dataCategoryProductSubProduct}
            </ScrollView>
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubStore
export class CategoryProductSubStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        let dataCategoryProductSubStore = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/MySQL/uploads/slide/Store_recommendFIN', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={stylesMain.CategoryProductStoreBox} key={indexs}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.CategoryProductStoreImage}
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <ScrollView horizontal>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {dataCategoryProductSubStore}
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> CategoryProductSubPromotion
export class CategoryProductSubPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        }
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store2'
        };
        let dataCategoryProductSubPromotion = this.state.dataService.map((item, indexs) => {
            var dataMySQL = [ip + '/MySQL/uploads/slide/Store_recommendFIN', item.image].join('/');
            return (
                <View style={[stylesMain.BoxStore1Box, { borderWidth: 0, }]} key={indexs}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={[stylesMain.BoxStore1Image, { borderRadius: 6, }]}
                    />
                </View>
            );
        })
        return (
            <ScrollView horizontal>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {dataCategoryProductSubPromotion}
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Second_product
export class Second_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
            dataService2: [],
            activeSlide: 0,
        };
        this.getData = this.getData.bind(this)
        this.getData2 = this.getData2.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    getData2(dataService2) {
        this.setState({ dataService2 })
    }
    _renderItem = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View key={indexs}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesMain.bigSlideImage}
                    resizeMode={FastImage.resizeMode.stretch}
                >
                </FastImage>
                <View style={stylesMain.bigSlideText}>
                    <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#FFFF' }]}>
                        โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50% </Text>
                </View>
            </View>
        );
    }
    _renderItem2 = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View key={indexs}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={stylesMain.litleSlideImage}
                    resizeMode={FastImage.resizeMode.stretch}
                >
                </FastImage>
                <View style={stylesMain.litleSlideText}>
                    <Text numberOfLines={2} style={[
                        stylesMain.Second_StoreFin_ImageB_Ttext, stylesFont.FontSize8, stylesFont.FontFamilyText
                    ]}>
                        โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50% </Text>
                </View>
            </View>
        );
    }
    get pagination() {
        const { dataService2, activeSlide } = this.state;
        return (
            <View style={{ marginTop: -110, marginBottom: 90 }}>
                <Pagination
                    dotsLength={dataService2.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0)', width: width * 0.64 }}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 30,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(255, 255, 255, 0.92)',
                        borderWidth: 2,
                    }}
                    inactiveDotStyle={{
                        width: 15,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    }}
                    carouselRef={this.activeSlide}
                    tappableDots={!!this.activeSlide}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        var uri2 = ip + '/mysql/DataServiceStore.php';
        var dataBody2 = {
            type: 'slide'
        };
        let dataFlashSale = this.state.dataService.map((item, indexs) => {
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={indexs}
                    onPress={
                        () => this.props.navigation.navigate(
                            'DetailScreen', {
                            id_item: item.id_product
                        })
                    }
                >
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <View style={stylesMain.BoxProduct1ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct1Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesMain.FrameBackground2} >
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                <GetServices uriPointer={uri2} dataBody={dataBody2} getDataSource={this.getData2} />
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize3, stylesFont.FontFamilyBold]}>
                        สินค้ามือสอง</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('SecondScreen', { selectedIndex: 0 })}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FastImage
                        style={stylesMain.CategoryProductImageHead}
                        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg' }}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
                <ScrollView horizontal>
                    {dataFlashSale}
                </ScrollView>
                <View style={stylesMain.Second_StoreFin}>
                    <View style={stylesMain.Second_StoreFin_BoxHead}>
                        <View style={stylesMain.Text_Bar_Image}>
                            <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                ร้านค้ามือสองแนะนำโดย FIN </Text>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('SecondScreen', { selectedIndex: 1 })}>
                                <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    ดูทั้งหมด</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={stylesMain.Second_StoreFin_Image}>
                            <View style={stylesMain.Second_StoreFin_ImageA}>
                                <View>
                                    <Carousel
                                        ref={c => this.activeSlide = c}
                                        data={this.state.dataService2}
                                        renderItem={this._renderItem}
                                        sliderWidth={width * 0.64}
                                        itemWidth={width * 0.64}
                                        sliderHeight={240}
                                        loop={true}
                                        autoplay={true}
                                        autoplayDelay={3000}
                                        autoplayInterval={3000}
                                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                                    />
                                </View>
                                {this.pagination}
                            </View>
                            <View>
                                <View style={stylesMain.Second_StoreFin_ImageB}>
                                    <View style={stylesMain.Second_StoreFin_ImageB_T}>
                                        <Carousel
                                            ref={c => this.activeSlide2 = c}
                                            data={this.state.dataService2}
                                            renderItem={this._renderItem2}
                                            sliderWidth={width * 0.32}
                                            itemWidth={width * 0.32}
                                            sliderHeight={130}
                                            loop={true}
                                            autoplay={true}
                                            autoplayDelay={2000}
                                            autoplayInterval={3000}
                                        />
                                    </View>
                                    <View style={[stylesMain.Second_StoreFin_ImageB_T]}>
                                        <Carousel
                                            ref={c => this.activeSlide3 = c}
                                            data={this.state.dataService2}
                                            renderItem={this._renderItem2}
                                            sliderWidth={width * 0.32}
                                            itemWidth={width * 0.32}
                                            sliderHeight={130}
                                            loop={true}
                                            autoplay={true}
                                            autoplayDelay={2000}
                                            autoplayInterval={3000}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesMain.Second_Storefooter}>
                    <ScrollView horizontal>
                        <View style={stylesMain.FlexRow}>
                            <View style={stylesMain.Second_Storefooter_image}>
                                <FastImage
                                    style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                            </View>
                            <View style={stylesMain.Second_Storefooter_image}>
                                <FastImage
                                    style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                            </View>
                            <View style={stylesMain.Second_Storefooter_image}>
                                <FastImage
                                    style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                            </View>
                            <View style={stylesMain.Second_Storefooter_image}>
                                <FastImage
                                    style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                            </View>
                            <View style={stylesMain.Second_Storefooter_image}>
                                <FastImage
                                    style={[stylesMain.BoxProduct1Image, { borderRadius: 5 },]}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> TodayProduct
export class TodayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataService: [],
        };
        this.getData = this.getData.bind(this)
    }
    getData(dataService) {
        this.setState({ dataService })
    }
    render() {
        var uri = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        const { noTitle } = this.props
        let dataToday = this.state.dataService.map((item, indexs) => {
            var throughsale = Number(item.full_price) + (item.full_price * 0.25);
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct2Box} key={indexs}>
                        <View style={stylesMain.BoxProduct2ImageofLines}>
                            <FastImage
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={stylesMain.BoxProduct2Image}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View><View style={{ height: 60, paddingHorizontal: 3 }}>
                            <View style={[stylesMain.BoxProduct1NameofLines]}>
                                <Text numberOfLines={2} style={[stylesFont.FontFamilySemiBold, stylesFont.FontSize7]}>
                                    {item.name}</Text>
                            </View>
                            <View style={[stylesMain.BoxProduct1PriceofLines, stylesMain.FlexRow]}>
                                <NumberFormat
                                    value={item.full_price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                        ]}>
                                            {value + ' '}</Text>
                                    }
                                />
                                <NumberFormat
                                    value={throughsale}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'฿'}
                                    renderText={value =>
                                        <Text style={[
                                            stylesMain.BoxProduct1ImagePriceThrough, stylesFont.FontSize8, stylesFont.FontFamilyText,
                                            { marginTop: 3 }
                                        ]}>
                                            {value}</Text>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesMain.BoxProduct2}>
                <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
                {
                    noTitle ?
                        null :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                            สินค้าคัดสรรเพื่อคุณ</Text>
                }
                <View style={stylesMain.BoxProduct2BoxProduct}>
                    {dataToday}
                </View>
            </View>
        )
    }
}