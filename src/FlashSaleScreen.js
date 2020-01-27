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
import stylesTopic from '../style/styleTopic';
import stylesMain from '../style/StylesMainScreen';
import stylesFont from '../style/stylesFont';
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
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar navigation={this.props.navigation} Title='FLASH SALE'/>
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
                <View style={[stylesMain.FrameBackground,{flexDirection:'row'}]}>
                    <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1]}>FLASH SALE</Text>
                    <IconMaterialIcons name='access-time' size={25} style={{ marginLeft: 10, }} />
                    <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize2,{margin:3}]}>จบใน</Text>
                    <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>01</Text></View>
                    <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>45</Text></View>
                    <View style={stylesMain.Time_FlashSale_TimeBox}><Text style={stylesMain.Time_FlashSale_TimeText}>40</Text></View>
                </View>
                <View style={stylesTopic.FlashSale_Tag}>
                    <TabBar
                        sendData={this.updateIndex}
                        item={item}
                        // widthBox={98}
                        activeColor={'#fff'}
                        activeFontColor={'#0A55A6'}
                        type='tag'
                    />
                </View>

                <View style={stylesTopic.FlashSale_Tag}>
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
            <View style={stylesTopic.FlashSale_Product}>
                <View style={stylesTopic.FlashSale_ProductBox}>
                    <View style={stylesMain.FlexRow}>
                        <View style={stylesTopic.FlashSale_ProductBox_Image}>
                            <FastImage 
                            style={stylesTopic.Image}
                                source={{
                                uri: ip + '/MySQL/uploads/products/2019-10-10-1570690991.png'}}
                            />
                        </View>
                        <View style={{ width: '65%' }}>
                            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3,{margin:10}]}>ห้องพัก Deluxe Pool Villa</Text>
                        </View>
                         <View style={{ justifyContent:'flex-end'}}>
                                <TouchableOpacity>
                                    <View style={stylesTopic.FlashSale_ProductBox_Icon}>
                                        <IconAntDesign RightItem name="shoppingcart" size={30} color='#FFFFFF' />
                                    </View>
                                </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>
        );
    }
}

