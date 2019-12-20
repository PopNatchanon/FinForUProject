import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';
import styles from './StylesStoreScreen'
import { ip } from './IpConfig'

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    render() {
        return (
            // console.log(item={this.props.navigation.getParam('item')}),
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <StoreHead navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }
    render() {
        return (
            <View style={styles.Appbar}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icons RightItem name="arrow-left" size={20} style={{ marginTop: 5, }} />
                </TouchableOpacity>
                <TextInput style={styles.TextInput}
                    placeholder="ค้นหาสินค้า/ร้านค้า"
                    onChangeText={(text) => this.state({ text })}
                ></TextInput>
                <IconsFeather RightItem name="filter" size={20} style={{ marginTop: 5, }} />
                <Icons RightItem name="ellipsis-h" size={20} style={{ marginTop: 5, }} />
            </View>
        );
    }
}

export class StoreHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        item = this.props.navigation.getParam('item')
        var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
        // console.log(dataMySQL)
        return (
            <View style={styles.StoreHead}>
                <View>
                    <ImageBackground
                        source={{
                            uri: ip + '/mysql/uploads/LK19_G_WebBanner_IT_1200x400_EN_7_2_2019_8_17_22_AM.jpg',
                        }}
                        style={styles.StoreHeadImage}
                        resizeMethod='resize'
                    >
                        <View>
                            <Image
                                source={{
                                    uri: dataMySQL,
                                }}
                                style={styles.StoreHeadFace}
                                resizeMethod='resize'
                            />
                        </View>
                        <View>
                            <Text style={styles.StoreHeadText}>
                                {item.name}
                            </Text>
                            <Text style={styles.StoreHeadTextOther}>
                                Active เมื่อ 1 ชั่วโมงที่ผ่านมา
                            </Text>
                            <Text style={styles.StoreHeadTextOther2}>
                                ผู้ติดตาม 20.2 พัน | กำลังติดตาม 2
                            </Text>
                        </View>
                        <View>

                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}