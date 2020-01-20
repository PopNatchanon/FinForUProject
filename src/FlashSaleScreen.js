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
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide } from './src_Promotion/DealScreen';
import { TabBar } from './tools/Tools';
export const { width, height } = Dimensions.get('window');

export default class FlashSaleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <Slide />
                <Time_FlashSale />
            </SafeAreaView>
        );
    }
}

///-------------------------------------------------------------------------------///

export class Time_FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const item = [{
            name: '12:00'
        }, {
            name: '18:00'
        }, {
            name: '21:00'
        }, {
            name: '00:00'
        }]
        const item2 = [{
            name: 'ทั้งหมด'
        }, {
            name: 'อัญมณีและ..'
        }, {
            name: '21:00'
        }, {
            name: '00:00'
        }, {
            name: '00:00'
        }, {
            name: '00:00'
        }, {
            name: '00:00'
        }, {
            name: '00:00'
        },]
        return (
            <View>
                <View style={styles.Time_FlashSale}>
                    <Text style={styles.Time_FlashSale_Text}>FlashSale</Text>
                    <IconMaterialIcons name='access-time' size={25} style={{ marginLeft: 10, }} />
                    <Text style={{ fontSize: 15, margin: 5, }}>จบใน</Text>
                    <View style={styles.Time_FlashSale_TimeBox}><Text style={styles.Time_FlashSale_TimeText}>01</Text></View>
                    <View style={styles.Time_FlashSale_TimeBox}><Text style={styles.Time_FlashSale_TimeText}>45</Text></View>
                    <View style={styles.Time_FlashSale_TimeBox}><Text style={styles.Time_FlashSale_TimeText}>40</Text></View>
                </View>
                <View style={styles.Time_FlashSale_Tag}>
                    <TabBar
                        sendData={this.updateIndex}
                        item={item}
                        // widthBox={98}
                        activeColor={'#fff'}
                        activeFontColor={'#0A55A6'}
                        type='tag'
                    />
                </View>

                <View style={styles.Time_FlashSale_TagCate}>
                    <ScrollView horizontal>
                        <TabBar
                            sendData={this.updateIndex}
                            item={item2}
                            noLimit
                            type='box'
                        />
                    </ScrollView>


                </View>
            </View>

        );
    }
}
