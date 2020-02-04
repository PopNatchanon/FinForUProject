import React, { Component } from 'react';
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
import { ButtonGroup } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import stylesStore from '../style/StylesStoreScreen'
import stylesMain from '../style/StylesMainScreen'
import stylesFont from '../style/stylesFont'
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');
import { Toolbar } from './tools/Tools'
import { AppBar1 } from './MainScreen';

export default class BellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={[stylesMain.SafeAreaViewNoBackground, stylesMain.BackgroundAreaView]}>
                <AppBar1 titleHead='การแจ้งเตือน' />
                <ScrollView>
                    <Popular_store />
                    <Pro_for_U />
                    <Update_buy />
                </ScrollView>
                <Toolbar navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Popular_store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataStore: [],
        };
    }
    getNewstore() {
        var url = ip + '/mysql/DataServiceMain.php';
        var dataBody = {
            type: 'store'
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
        const text = 'ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!';
        console.log(text.length)
        const textnote = {} = text.split('\n')
        var countnote = 0
        textnote.map((item, index) => { if (index < 5) { return (countnote = countnote + item.length) } })
        console.log(countnote)
        let dataNewStore = this.state.dataStore.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs}
                    onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={stylesMain.BoxStore3Box}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={stylesMain.BoxStore3Image}
                        />
                        <Text style={[stylesMain.BoxStore3Text, stylesFont.FontFamilyText, stylesFont.FontSize3, { height: height * 0.15 }]}>
                            {
                                text
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView]}>
                <View style={stylesMain.FrameBackgroundTextBox}>
                    <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                        ร้านเด็ด</Text>
                    <Text style={[stylesMain.FrameBackgroundTextEnd, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                        ดูทั้งหมด</Text>
                </View>
                <ScrollView horizontal>
                    {dataNewStore}
                </ScrollView>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Pro_for_U extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                    โปรเด็ดที่คัดมาเพื่อคุณ</Text>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop4.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                </View>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Update_buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontFamilyBold, stylesFont.FontSize1]}>
                    อัพเดทคำสั่งซื้อ</Text>
                <View style={[stylesMain.FrameBackground, stylesMain.BackgroundAreaView, stylesMain.ItemCenter]}>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง??</Text>
                    </View>
                    <View style={stylesMain.BoxStore4Box}>
                        <FastImage
                            style={stylesMain.BoxStore4Image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={[stylesMain.BoxStore4Text, stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                    </View>
                </View>
            </View>
        );
    }
}
