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
                <AppBar navigation={this.props.navigation} Title='FlashSale'/>
                <Slide />
                <Time_FlashSale />
                <ScrollView>
                    <FlashSale_Product />
                    <FlashSale_Product />
                    <FlashSale_Product />
                    <FlashSale_Product />
                    <FlashSale_Product />
                </ScrollView>
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
            name: 'ทอง'
        }, {
            name: 'เครื่องเงิน'
        }, {
            name: 'พระและ..'
        }, {
            name: 'นาฬิกา'
        }, {
            name: 'กระเป๋า'
        }, {
            name: 'บ้านและสวน'
        }, {
            name: 'รองเท้า'
        }, {
            name: 'สุขภาพและ..'
        }]
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
                            inactiveColor='#0A55A6'
                            sendData={this.updateIndex}
                            item={item2}
                            radiusBox={4}
                            noLimit
                            type='box'
                        />
                    </ScrollView>
                </View>
            </View>

        );
    }
}

///-------------------------------------------------------------------------------///

export class FlashSale_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', marginTop: 5, }}>
                <View style={{ height: 130, width: '100%', borderColor: '#ECECEC', borderWidth: 1, padding: 10, flexDirection: 'row', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ height: 110, width: 110,borderColor: '#ECECEC', borderWidth: 1,justifyContent:'center',alignItems:'center', }}>
                            <FastImage 
                            style={{height:90, width:90,}}
                                source={{
                                uri: ip + '/MySQL/uploads/products/2019-10-10-1570690991.png'}}
                            />
                        </View>
                        <View style={{ width: 310, justifyContent: 'space-between', }}>
                            <Text style={{ margin: 20, }}>ห้องพัก Deluxe Pool Villa</Text>
                            <View style={{ alignItems: 'flex-end', }}>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, backgroundColor: '#0A55A6', borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}>
                                        <IconAntDesign RightItem name="shoppingcart" size={30} color='#FFFFFF' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        );
    }
}

