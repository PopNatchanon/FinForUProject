import React, { Component } from 'react';
import {
    View, ImageBackground, ScrollView, Text, SafeAreaView, TouchableOpacity, Dimensions, TextInput,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import stylesFont from '../style/stylesFont';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import { Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Appbar
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
///----------------------------------------------------------------------------------------------->>>>
export class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }
    render() {
        const { leftBar, rightBar, searchBar, navigation } = this.props
        return (
            <View style={[stylesMain.Appbar, stylesMain.FlexRow, { backgroundColor: '#fff' }]}>
                {
                    leftBar == 'backarrow' ?
                        <View>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30 }]}
                                activeOpacity={1}
                                onPress={() => navigation.goBack()}>
                                <IconFeather name="arrow-left" size={30} />
                            </TouchableOpacity>
                        </View> :
                        null
                }
                {
                    searchBar ?
                        <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                            <FastImage
                                style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                source={require('../images/sj.png')}
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
                                    style={[stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize2, stylesFont.FontCenter]}
                                    placeholder="ค้นหาสินค้า/ร้านค้า"
                                    value={this.state.text}
                                    maxLength={30}
                                    onChangeText={(text) => this.setState({ text })}
                                />
                            </View>
                            <IconAntDesign RightItem name="search1" size={20}
                                style={[stylesMain.ItemCenterVertical, { marginRight: 4 }]}
                            />
                        </View> :
                        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('SearchScreen') }}>
                            <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical]}>
                                <FastImage
                                    style={[stylesMain.LOGO, stylesMain.ItemCenterVertical]}
                                    source={require('../images/sj.png')}
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
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2,
                                    stylesFont.FontCenter, stylesMain.ItemCenterVertical]}>
                                        ค้นหาสินค้า/ร้านค้า</Text>
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
                                <Icon RightItem name="ellipsis-h" size={25} />
                            </TouchableOpacity>
                        </View> :
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenterVertical]}>
                            {leftBar == 'backarrow' ?
                                rightBar == 'chat' ?
                                    <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                        onPress={null/*() => this.props.navigation.navigate('CartScreen')*/}>
                                        <IconAntDesign RightItem name="message1" size={25} />
                                    </TouchableOpacity> :
                                    null :
                                <TouchableOpacity style={[stylesMain.ItemCenter, { width: 40 }]}
                                    onPress={null/*() => this.props.navigation.navigate('CartScreen')*/}>
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
///----------------------------------------------------------------------------------------------->>>>
export class AppBar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { titleHead, backArrow, chatBar, menuBar, storeBar } = this.props;
        return (
            <View style={menuBar ? stylesStore.AppbarMenu : stylesStore.Appbar}>
                <View style={stylesMain.FlexRow}>
                    {
                        backArrow ?
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                                <IconFeather style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                                    marginLeft: 8
                                }]} name="arrow-left" size={30} />
                            </TouchableOpacity> :
                            null
                    }
                    <Text style={[
                        stylesStore.Text_appbar, stylesFont.FontSize1, stylesFont.FontFamilyBold, stylesMain.ItemCenterVertical
                    ]}>
                        {titleHead ? titleHead : null}</Text>
                </View>
                {
                    chatBar ?
                        <IconAntDesign RightItem name="message1" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                            marginRight: 8
                        }]} /> :
                        null,
                    storeBar ?
                        <Icon RightItem name="store" size={20} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, {
                            marginRight: 8
                        }]} /> :
                        null
                }
            </View>
        );
    }
}

///----------------------------------slide----------------------------------------///

export class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceSlide: [],
            activeSlide: 0,
        };
    }
    getDataSlide = async () => {
        var dataBody = {
            slide: 'banner'
        };
        fetch(finip + '/home/home_mobile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataBody),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("responseJson")
                this.setState({
                    dataSourceSlide: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getDataSlide()
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
                />
            </View>
        );
    }
    get pagination() {
        const { dataSourceSlide, activeSlide } = this.state;
        // console.log(width)
        return (
            <View style={{ marginTop: -60, marginBottom: -15 }}>
                <Pagination
                    dotsLength={dataSourceSlide.length}
                    activeDotIndex={activeSlide}
                    // containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0.1)' }}
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
                    // inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        // console.log(this.activeSlide)
        return (
            <View>
                <Carousel
                    ref={c => this.activeSlide = c}
                    data={this.state.dataSourceSlide}
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

///----------------------------------Category----------------------------------------///

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcetype: [],
        };
    }
    getDatatype = async () => {
        fetch([finip, 'home/category_mobile'].join('/'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("responseJson")
                // console.log(responseJson)
                this.setState({
                    dataSourcetype: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getDatatype()
    }
    render() {
        let dataCategory = this.state.dataSourcetype.map((item, indexs) => {
            {/* console.log('Slide'+[indexs, item.image].join(' ')), */ }
            var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
            {/* console.log(dataMySQL); */ }
            return (
                <View style={stylesMain.Category} key={indexs}>
                    <View style={stylesMain.Category_box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.Category_image}
                        />
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter]}>
                        {item.name}</Text>
                </View>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
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

///----------------------------------Button_Bar----------------------------------------///

export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground} >
                <ScrollView horizontal>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('DealScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            ดีลสุดพิเศษ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CoinScreen')} >
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                                FinCoin</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CampaignScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                                แคมเปญ</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('The_BestFinScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                            />
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                                สุดคุ้มสุดฟิน</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Installment_payScreen')}>
                        <View style={stylesMain.Button_Bar_Box}>
                            <FastImage style={stylesMain.Button_Bar_icon}
                                source={{
                                    uri: ip + '/MySQL/uploads/icon_brand/unicorn-face.jpg',
                                }}
                            />
                        </View>
                        <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            ผ่อนชำระ 0%</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

///----------------------------------Brand_RCM----------------------------------------///

export class Recommend_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.FrameBackground_Height]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize1, stylesFont.FontFamilyBold]}>
                        แบรนด์แนะนำ</Text>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
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

                                />
                            </View>
                        </TouchableOpacity>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                            />
                        </View>
                        <View >
                            <FastImage
                                style={stylesMain.Brand_image_RCM}
                                source={{
                                    uri: ip + '/MySQL/uploads/recommend/2019-10-18_15-29-20_icon.png',
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

///

export class Popular_store extends Component {
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                        ร้านที่ใช่อยากให้ช้อป</Text>
                </View>
                <View style={stylesMain.FlexRow}>
                    <View style={stylesMain.BoxStore1Box}>
                        <FastImage
                            style={stylesMain.BoxStore1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                            }}
                        />
                    </View>
                    <View style={stylesMain.BoxStore1Box}>
                        <FastImage
                            style={stylesMain.BoxStore1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

///----------------------------------Popular_product---------------------------------------///

export class Popular_product extends Component {

    render() {
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <View style={stylesMain.FrameBackgroundTextBox}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                            สินค้ายอดนิยม</Text>
                    </View>
                    <View style={stylesMain.Popular_Box_A}>
                        <ScrollView horizontal>
                            <View style={stylesMain.Popular_Box_B}>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={() => this.props.navigation.navigate('Popular_productScreen')}>
                                    <View style={stylesMain.Popular_Box_C}>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                                }}
                                            />
                                        </View>
                                        <View style={stylesMain.Popular_Box_D}>
                                            <FastImage
                                                style={stylesMain.Image_icon_top}
                                                source={require('../icon/top.png')}
                                            />
                                            <FastImage
                                                style={stylesMain.Popular_image_Box}
                                                source={{
                                                    uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={stylesMain.PopularText_A} >
                                        <Text style={[{ marginLeft: 8 }, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                                            สินค้าสุดฮิต</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={stylesMain.Popular_Box_B}>
                                <View style={stylesMain.Popular_Box_C}>
                                    <View style={stylesMain.Popular_Box_D}>
                                        <FastImage
                                            style={stylesMain.Image_icon_top}
                                            source={require('../icon/top.png')}
                                        />
                                        <FastImage
                                            style={stylesMain.Popular_image_Box}
                                            source={{
                                                uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',

                                            }}
                                        />
                                    </View>
                                    <View style={stylesMain.Popular_Box_D}>
                                        <FastImage
                                            style={stylesMain.Image_icon_top}
                                            source={require('../icon/top.png')}
                                        />
                                        <FastImage
                                            style={stylesMain.Popular_image_Box}
                                            source={{
                                                uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={stylesMain.PopularText_A} >
                                    <Text style={[{ marginLeft: 8 }, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                                        สินค้าราคาโดน</Text>
                                </View>
                            </View>
                            <View style={stylesMain.Popular_Box_B}>
                                <View style={stylesMain.Popular_Box_C}>
                                    <View style={stylesMain.Popular_Box_D}>
                                        <FastImage
                                            style={stylesMain.Image_icon_top}
                                            source={require('../icon/top.png')}
                                        />
                                        <FastImage
                                            style={stylesMain.Popular_image_Box}
                                            source={{
                                                uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                            }}
                                        />
                                    </View>
                                    <View style={stylesMain.Popular_Box_D}>
                                        <FastImage
                                            style={stylesMain.Image_icon_top}
                                            source={require('../icon/top.png')}
                                        />
                                        <FastImage
                                            style={stylesMain.Popular_image_Box}
                                            source={{
                                                uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={stylesMain.PopularText_A} >
                                    <Text style={[{ marginLeft: 8 }, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                                        สินค้าราคาโดน</Text>
                                </View>
                            </View>
                            <View style={stylesMain.Popular_Box_B}>
                                <View style={stylesMain.Popular_Box_C}>
                                    <View style={stylesMain.Popular_Box_D}>
                                        <FastImage
                                            style={stylesMain.Image_icon_top}
                                            source={require('../icon/top.png')}
                                        />
                                        <FastImage
                                            style={stylesMain.Popular_image_Box}
                                            source={{
                                                uri: ip + '/MySQL/uploads/Popular_product/2019-10-29-1572320317.jpg',
                                            }}
                                        />
                                    </View>
                                    <View style={stylesMain.Popular_Box_D}>
                                        <FastImage
                                            style={stylesMain.Image_icon_top}
                                            source={require('../icon/top.png')}
                                        />
                                        <FastImage
                                            style={stylesMain.Popular_image_Box}
                                            source={{
                                                uri: ip + '/MySQL/uploads/Popular_product/2019-10-10-1570678476.png',
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={stylesMain.PopularText_A} >
                                    <Text style={[{ marginLeft: 8 }, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                                        สินค้าราคาโดน</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

///-------------------------------------------------------------------------------///

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
                />
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

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
                />
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

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
                />
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }

    getFlashSale() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSale: getData.data,
            })
        })
    }

    componentDidMount() {
        this.getFlashSale();
    }

    render() {
        let dataFlashSale = this.state.dataSale.map((item, indexs) => {
            // console.log('FlashSale')
            // console.log(item)
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    key={indexs}
                    onPress={() => this.props.navigation.navigate('FlashSaleScreen', { id_item: item.id_product })}
                >
                    <View style={stylesMain.BoxProduct1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    {value}</Text>}
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <View style={[stylesMain.FlexRow, { marginTop: 5, }]}>
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
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
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
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

///--------------------------------------------------------------------------///

export class PromotionPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcebrand: [],
        };
    }
    getDatabrand() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'brand2'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //console.log(getData.data);
            this.setState({
                dataSourcebrand: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDatabrand()
    }
    render() {
        let dataPromotionPopular = this.state.dataSourcebrand.map((item, indexs) => {
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            // console.log(dataMySQL)
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Recommend_Store')} key={indexs}>
                    <View style={[stylesMain.BoxStore2Box, { backgroundColor: '#111', borderRadius: 8, }]}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.BoxStore2Image, { opacity: 0.5 }]}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                        ลายแทงร้านค้าแนะนำ</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('FlashSaleScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
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

///----------------------------------Confidential_PRO---------------------------------------///

export class Confidential_PRO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcebrand: [],
        };
    }
    getDatabrand() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'Confidential_PRO'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //console.log(getData.data);
            this.setState({
                dataSourcebrand: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDatabrand()
    }
    render() {
        let dataConfidential_PRO = this.state.dataSourcebrand.map((item, indexs) => {
            //console.log('PromotionPopular' + [indexs, item.image].join(' ')),
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            return (
                <View style={stylesMain.BoxStore2Box} key={indexs}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.BoxStore2Image}
                    />
                </View>
            )
        })
        return (
            <View style={[stylesMain.FrameBackground]}>
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
///----------------------------------Product_for_you ---------------------------------------///

export class Product_for_you extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceProductForYou: [],
        };
    }
    getSourceProductForYou() {
        var url = ip + '/MySQL/DataServiceMain.php';
        var dataBody = {
            type: 'foryou'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //console.log(getData.data);
            this.setState({
                dataSourceProductForYou: getData.data
            })
        })
    }
    componentDidMount() {
        this.getSourceProductForYou();
    }
    render() {
        let dataProductForYou = this.state.dataSourceProductForYou.map((item, indexs) => {
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('Product_for_youScreen', { id_item: item.id_product })}>
                    <View style={[stylesMain.BoxProduct1Box, { marginTop: 4 }]} key={indexs}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                                    {value}</Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={[stylesMain.FrameBackground]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize1, stylesFont.FontFamilyBold]}>
                        FIN คัดมาเพื่อคุณ</Text>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด</Text>
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
///-------------------------------------------------------------------------------///

export class Highlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
        };
    }
    getSaleProduct() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSale: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getSaleProduct();
    }
    render() {
        let dataSaleProduct = this.state.dataSale.map((item, indexs) => {
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('HighlightScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    {value}</Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                        ไฮไลท์ประจำสัปดาห์</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('HighlightScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {dataSaleProduct}
                </ScrollView>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class NewStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataStore: [],
        };
    }
    getNewstore() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store2'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataStore: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getNewstore();
    }
    render() {
        let dataNewStore = this.state.dataStore.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={stylesMain.BoxStore1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore1Image}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                        ร้านค้าห้ามพลาด!!่</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {dataNewStore}
                </View>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class Exclusive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNewProduct: [],
        };
    }
    getNewProduct() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'product'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataNewProduct: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getNewProduct();
    }
    render() {
        let dataNewProduct = this.state.dataNewProduct.map((item, indexs) => {
            //   console.log('Sale' + [ indexs, item.image ].join(' ')),
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('ExclusiveScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} >
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>{item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    {value}
                                </Text>}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize1, stylesFont.FontFamilyBold]}>
                        สินค้าสุด Exclusive
                    </Text>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                        ดูทั้งหมด
                    </Text>
                </View>
                <ScrollView horizontal>
                    {dataNewProduct}
                </ScrollView>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategory: [],
        }
    }
    getDataCategory = async () => {
        fetch([finip, 'home/category_mobile'].join('/'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("responseJson")
                // console.log(responseJson)
                this.setState({
                    dataSourceCategory: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getDataCategory();
    }
    render() {
        let dataCategory = this.state.dataSourceCategory.map((item, indexs) => {
            var dataMySQL = [finip, item.mobile_head].join('/');
            // console.log(dataMySQL)
            return (
                <View style={stylesMain.FrameBackground} key={indexs}>
                    <View>
                        <View style={stylesMain.FrameBackgroundTextBox}>
                            <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                                {item.name}
                            </Text>
                            <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                                ดูทั้งหมด</Text>
                        </View>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={[stylesMain.CategoryProductImageHead, stylesMain.ImageMargin]}
                        />
                        <CategoryProductSubProduct navigation={this.props.navigation} id_type={item.id_type} />
                    </View>
                    <View>
                        <View style={stylesMain.Text_Bar_Image}>
                            <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                                ร้านฮิต ติดเทรนด์</Text>
                        </View>
                        <CategoryProductSubStore navigation={this.props.navigation} />
                    </View>
                    <View>
                        <View style={stylesMain.Text_Bar_Image}>
                            <Text style={[stylesMain.Text_Bar, stylesFont.FontFamilyText, stylesFont.FontSize2]}>
                                FIN แนะนำร้าน </Text>
                        </View>
                        <CategoryProductSubPromotion navigation={this.props.navigation} />
                    </View>
                </View>
            );
        })
        return (
            dataCategory
        )
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }
    getCategoryProductSubProduct = async () => {
        var dataBody = {
            id_type: this.props.id_type
        };
        fetch([finip, 'home/product_mobile'].join('/'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataBody),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("responseJson")
                // console.log(responseJson)
                this.setState({
                    dataSourceCategoryProduct: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    componentDidMount() {
        this.getCategoryProductSubProduct()
    }
    render() {
        let dataCategoryProductSubProduct = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log( 'CategoryProductNo. ' + indexs + ' ' + item.image ),
            var dataMySQL = [finip, item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct1Box} key={indexs}>
                        {/* {console.log(dataMySQL)} */}
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {item.name}
                        </Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    {value}
                                </Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProductSubProduct}
            </ScrollView>
        )
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }
    getCategoryProductSubStore() {
        // console.log( 'CategoryProductChild Process' )
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategoryProduct: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getCategoryProductSubStore()
    }
    render() {
        let dataCategoryProductSubStore = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log( 'CategoryProductNo. ' + indexs + ' ' + item.image ),
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
                {dataCategoryProductSubStore}
            </ScrollView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class CategoryProductSubPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceCategoryProduct: [],
        }
    }
    getCategoryProductSubPromotion() {
        // console.log( 'CategoryProductChild Process' )
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store2'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceCategoryProduct: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getCategoryProductSubPromotion()
    }
    render() {
        let dataCategoryProductSubPromotion = this.state.dataSourceCategoryProduct.map((item, indexs) => {
            // console.log(item)
            var dataMySQL = [ip + '/MySQL/uploads/slide/Store_recommendFIN', item.image].join('/');
            return (
                <View style={stylesMain.BoxStore1Box} key={indexs}>
                    <FastImage
                        source={{
                            uri: dataMySQL,
                        }}
                        style={stylesMain.BoxStore1Image}
                    />
                </View>
            );
        })
        return (
            <ScrollView horizontal>
                {dataCategoryProductSubPromotion}
            </ScrollView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class Second_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSale: [],
            dataSourceSlide: [],
            activeSlide: 0,
        };
    }
    getFlashSale() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'sale'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSale: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getFlashSale();
        const { item } = this.props;
        this.getDataSlide(item)
    }
    getDataSlide() {
        var url = ip + '/mysql/DataServiceStore.php';
        var dataBody = {
            type: 'slide'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            // console.log(getData.data);
            this.setState({
                dataSourceSlide: getData.data,
            })
        })
    }
    _renderItem = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View style={stylesMain.BannerBox} key={indexs}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={{ height: 180, width: '100%', }}
                >
                </FastImage>
                <View style={{ backgroundColor: '#0A55A6', height: 40, width: '100%', }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFF' }]}>
                        โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                </View>
            </View>
        );
    }
    _renderItem2 = ({ item, indexs }) => {
        var dataMySQL = [ip + '/mysql/uploads/slide/bannerstore', item.image].join('/')
        return (
            <View style={stylesMain.BannerBox} key={indexs}>
                <FastImage
                    source={{
                        uri: dataMySQL,
                    }}
                    style={{ height: 80, width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5, }}
                >
                </FastImage>
                <View style={{ backgroundColor: '#0A55A6', height: 30, width: '100%', }}>
                    <Text style={[stylesMain.Second_StoreFin_ImageB_Ttext, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                        โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                </View>
            </View>
        );
    }
    get pagination() {
        const { dataSourceSlide, activeSlide } = this.state;
        // console.log(width)
        return (
            <View style={{ marginTop: -100, marginBottom: 80 }}>
                <Pagination
                    dotsLength={dataSourceSlide.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ backgroundColor: 'rgba(120, 120, 120, 0.1)', width: width * 0.64 }}
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
                    // inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }
    render() {
        let dataFlashSale = this.state.dataSale.map((item, indexs) => {
            // console.log('Sale')
            // console.log(item)
            var dataMySQL = [ip, 'mysql', item.image_path, item.image].join('/');
            // console.log(dataMySQL)
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
                    <View style={stylesMain.BoxProduct1Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct1Image}
                            resizeMethod='resize'
                        />
                        <Text style={[stylesMain.BoxProduct1ImageName, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={value =>
                                <Text style={[stylesMain.BoxProduct1ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    {value}</Text>}
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize1, stylesFont.FontFamilyBold]}>
                        สินค้ามือสอง</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Second_productScreen')}>
                        <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            ดูทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ImageBackground
                        style={[stylesMain.CategoryProductImageHead, stylesMain.ImageMargin]}
                        source={{ uri: ip + '/MySQL/uploads/slide/Banner_type/watch_BannerBar.jpg' }}
                        resizeMethod='resize'
                    ></ImageBackground>
                </View>
                <ScrollView horizontal>
                    {dataFlashSale}
                </ScrollView>
                <View style={stylesMain.Second_StoreFin}>
                    <View style={stylesMain.Second_StoreFin_BoxHead}>
                        <FastImage
                            style={stylesMain.Text_Bar_Image}
                            source={{ uri: ip + '/MySQL/uploads/Text/storeFIN1.png' }}
                        />
                        <View>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Second_productScreen')}>
                                <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
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
                                        data={this.state.dataSourceSlide}
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
                                        <View>
                                            <Carousel
                                                ref={c => this.activeSlide2 = c}
                                                data={this.state.dataSourceSlide}
                                                renderItem={this._renderItem2}
                                                sliderWidth={width * 0.32}
                                                itemWidth={width * 0.32}
                                                sliderHeight={120}
                                                loop={true}
                                                autoplay={true}
                                                autoplayDelay={2000}
                                                autoplayInterval={3000}
                                            />
                                        </View>
                                    </View>
                                    <View style={stylesMain.Second_StoreFin_ImageB_T}>
                                        <View>
                                            <Carousel
                                                ref={c => this.activeSlide3 = c}
                                                data={this.state.dataSourceSlide}
                                                renderItem={this._renderItem2}
                                                sliderWidth={width * 0.32}
                                                itemWidth={width * 0.32}
                                                sliderHeight={100}
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
                </View>
                <View style={stylesMain.Second_Storefooter}>
                    <ScrollView horizontal>
                        <View style={{ flexDirection: 'row', }}>
                            <View>
                                <FastImage
                                    style={stylesMain.Second_Storefooter_image}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                />
                                <Text style={[stylesMain.Second_Storefooter_Text, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                            </View>
                            <View>
                                <FastImage
                                    style={stylesMain.Second_Storefooter_image}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                />
                                <Text style={[stylesMain.Second_Storefooter_Text, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                            </View>
                            <View>
                                <FastImage
                                    style={stylesMain.Second_Storefooter_image}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                />
                                <Text style={[stylesMain.Second_Storefooter_Text, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                            </View>
                            <View>
                                <FastImage
                                    style={stylesMain.Second_Storefooter_image}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                />
                                <Text style={[stylesMain.Second_Storefooter_Text, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                            </View>
                            <View>
                                <FastImage
                                    style={stylesMain.Second_Storefooter_image}
                                    source={{ uri: ip + '/MySQL/uploads/slide/Store_recommendFIN/luxury_shop1.jpg' }}
                                />
                                <Text style={[stylesMain.Second_Storefooter_Text, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    โปรโมชั่นพิเศษ ร้าน Modern ลดมากกว่า 50%</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

///-------------------------------------------------------------------------------///

export class TodayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceTodayProduct: [],
        };
    }
    getDataTodayProduct() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'todayproduct'
        };
        axios.post(
            url,
            dataBody,
        ).then((getData) => {
            //   console.log(getData.data);
            this.setState({
                dataSourceTodayProduct: getData.data,
            })
        })
    }
    componentDidMount() {
        this.getDataTodayProduct();
    }
    render() {
        const { noTitle } = this.props
        let dataToday = this.state.dataSourceTodayProduct.map((item, indexs) => {
            // console.log( indexs + '. ' + item.image ),
            var dataMySQL = [ip + '/mysql', item.image_path, item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('DetailScreen', { id_item: item.id_product })}>
                    <View style={stylesMain.BoxProduct2Box} key={indexs}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxProduct2Image}
                        />
                        <Text style={[stylesMain.BoxProduct2ImageName, stylesFont.FontSize4, stylesFont.FontFamilyText]}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.full_price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={
                                value => <Text style={[stylesMain.BoxProduct2ImagePrice, stylesFont.FontSize5, stylesFont.FontFamilyText]}>
                                    {value}</Text>
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={stylesMain.BoxProduct2}>
                {
                    noTitle ?
                        null :
                        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                            สินค้าคัดสรรเพื่อคุณ</Text>
                }
                <View style={stylesMain.BoxProduct2BoxProduct}>
                    {dataToday}
                </View>
            </View>
        )
    }
}

///-------------------------------------------------------------------------------///
