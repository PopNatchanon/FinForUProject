import React, { Component, PureComponent } from 'react';
import {
    View,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import styleMain from '../../../style/StylesMainScreen';
import styles from '../../../style/stylePromotion-src/styleDealScreen';
import stylesStore from '../../../style/StylesStoreScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import stylesFont from '../../../style/stylesFont';

export const { width, height } = Dimensions.get('window');
import { AppBar } from '../DealScreen';
import { Button_Bar } from '../../HighlightScreen';
import { TodayProduct, Slide } from '../../MainScreen';
import { Store_Detail } from '../../Recommend_Store';

export default class Deal_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    PathList() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View>
                        <AppBar navigation={this.props.navigation} />
                        <Deal_CuponToday navigation={this.props.navigation} />
                        <Button_Bar navigation={this.props.navigation} />
                    </View>
                )
            case 1:
                return (
                    <View>
                        <AppBar navigation={this.props.navigation} Title='ดีลสุด Exclusive' />
                        <Slide />
                        <Button_Bar navigation={this.props.navigation} />
                        <ScrollView>
                            <TodayProduct noTitle navigation={this.props.navigation} />
                        </ScrollView>
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AppBar navigation={this.props.navigation} Title='ร้านค้ามือสองลดราคา' />
                        <Slide />
                        <Button_Bar />
                        <ScrollView>
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                            <Store_Detail />
                        </ScrollView>
                    </View>
                )
            case 3:
                return (
                    <View>
                        <AppBar navigation={this.props.navigation} Title='สินค้ามือสองลดราคา' />
                        <Slide />
                        <Button_Bar navigation={this.props.navigation} />
                        <ScrollView>
                            <TodayProduct noTitle navigation={this.props.navigation} />
                        </ScrollView>
                    </View>
                )
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {this.PathList()}
            </SafeAreaView>
        );
    }
}

///------------------------------------------------------------------------------------///

export class Deal_CuponToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={{ height: 150, width: '100%', backgroundColor: '#E0F0FF', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}> เก็บคูปองลดเพิ่มทุกวัน </Text>
                </View>
                <View style={{ padding: 10, }}>
                    <View style={styles.Deal_Today_Box}>
                        <Text style={stylesFont.FontFamilyText}> คูปองส่วนลดจาก FIN</Text>
                        <ScrollView horizontal>
                            <View style={styles.Deal_Today_BoxImage}>
                                <FastImage style={styles.Deal_Today_Coinimage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                                <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                                <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                                <FastImage style={[styles.Deal_Today_Coinimage, { marginLeft: 5, }]}
                                    source={{
                                        uri: ip + '/MySQL/uploads/icon_brand/Coins_50.png',
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------------///

export class Second_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text>ร้านมือสอง</Text>
            </View>
        );
    }
}
