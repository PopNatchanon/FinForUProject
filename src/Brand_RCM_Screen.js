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
import styles from '../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar } from './src_Promotion/DealScreen';
export const { width, height } = Dimensions.get('window');

export default class FrameBackground_Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} Title='แบรนด์แนะนำ' />
                <ScrollView>
                    <FrameBackground_Store />
                    <FrameBackground_Store />
                    <FrameBackground_Store />
                    <FrameBackground_Store />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class FrameBackground_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.FrameBackground_Store}>
                <ImageBackground
                    source={require('../icon/bgprofile.jpg')}
                    style={styles.Brand_ImageBackground}
                />
                <View style={styles.FrameBackground_StoreBoxPro}>
                    <View style={styles.FrameBackground_Pro}>
                        <FastImage style={styles.FrameBackground_Proimage}
                            source={{
                                uri: ip + '/MySQL/uploads/icon_brand/Lacoste.png',
                            }}
                        />
                    </View>
                    <View style={styles.FrameBackground_ProButton}>
                        <Text>เข้าดูร้าน</Text>
                    </View>
                </View>
                <View style={styles.FrameBackground_Product}>
                    <View style={styles.FrameBackground_Product_Box}>
                        <View style={styles.FrameBackground_Product_Image}></View>
                        <View>
                            <Text style={styles.FrameBackground_Product_Text}>ห้องพัก Deluxe Pool Villa</Text>
                            <Text style={[styles.FrameBackground_Product_Text, { color: '#0A55A6', }]}>฿10,000</Text>
                        </View>
                    </View>
                    <View style={styles.FrameBackground_Product_Box}>
                        <View style={styles.FrameBackground_Product_Image}></View>
                        <View>
                            <Text style={styles.FrameBackground_Product_Text}>ห้องพัก Deluxe Pool Villa</Text>
                            <Text style={[styles.FrameBackground_Product_Text, { color: '#0A55A6', }]}>฿10,000</Text>
                        </View>
                    </View>
                    <View style={styles.FrameBackground_Product_Box}>
                        <View style={styles.FrameBackground_Product_Image}></View>
                        <View>
                            <Text style={styles.FrameBackground_Product_Text}>ห้องพัก Deluxe Pool Villa</Text>
                            <Text style={[styles.FrameBackground_Product_Text, { color: '#0A55A6', }]}>฿10,000</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



