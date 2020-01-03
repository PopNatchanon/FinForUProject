import React, { Component } from 'react';
import {
    View,
    Image,
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
import styles from '../style/styleBellScreen';
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');

export default class BellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar />
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


export class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Toolbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')} >
                    <View >
                        <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
                    <View >
                        <IconAntDesign name="tagso" size={25} />
                        <Text> Feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
                    <View >
                        <IconAntDesign name="notification" size={25} />
                        <Text>News</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
                    <View >
                        <IconAntDesign name="bells" size={25} />
                        <Text>เตือน</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('LoginScreen')} >
                    <View>
                        <IconAntDesign name="user" size={25} />
                        <Text> ฉัน</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

///--------------------------------------------------------------------------///

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
                <View style={styles.Icon_appbar_Text}>
                    <Text style={styles.Text_appbar}>การแจ้งเตือน</Text>
                </View>
            </View>
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
        let dataNewStore = this.state.dataStore.map((item, indexs) => {
            var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/');
            return (
                <TouchableOpacity activeOpacity={1} key={indexs} onPress={() => this.props.navigation.navigate('StoreScreen', { id_item: item.id_store })}>
                    <View style={styles.Popular_StoreBox}>
                        <FastImage
                            source={{
                                uri: dataMySQL,
                            }}
                            style={styles.Popular_StoreImage}

                        />
                        <Text style={styles.Popular_StoreText_bar}>ร้าน AVIRA ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!! </Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.Popular_Store}>
                <View style={styles.Popular_StoreTextBox}>
                    <Text style={styles.Popular_StoreText}>
                        ร้านเด็ด
                    </Text>
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
                <Text style={styles.Pro_for_UText}>โปรเด็ดที่คัดมาเพื่อคุณ</Text>
                <View style={styles.Pro_for_U}>
                    <View style={styles.Pro_for_UBox}>
                        <FastImage
                            style={styles.Pro_for_UImage}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <Text style={{ marginLeft: 10, }}>ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                    <View style={styles.Pro_for_UBox}>
                        <FastImage
                            style={styles.Pro_for_UImage}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                            }}
                        />
                        <Text style={{ marginLeft: 10, }}>ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                    <View style={styles.Pro_for_UBox}>
                        <FastImage
                            style={styles.Pro_for_UImage}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop3.jpg',
                            }}
                        />
                        <Text style={{ marginLeft: 10, }}>ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
                    </View>
                    <View style={styles.Pro_for_UBox}>
                        <FastImage
                            style={styles.Pro_for_UImage}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop4.jpg',
                            }}
                        />
                        <Text style={{ marginLeft: 10, }}>ลดกว่า 80% ฉลองต้อนรับเทศกาลปีใหม่!!</Text>
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
                <Text style={styles.Update_buyText}> อัพเดทคำสั่งซื้อ </Text>
                <View style={styles.Pro_for_UBox}>
                    <FastImage
                        style={styles.Pro_for_UImage}
                        source={{
                            uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                        }}
                    />
                    <Text style={{ marginLeft: 10, }}>คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง</Text>
                </View>
                <View style={styles.Pro_for_UBox}>
                    <FastImage
                        style={styles.Pro_for_UImage}
                        source={{
                            uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                        }}
                    />
                    <Text style={{ marginLeft: 10, width:200,}}>กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                </View>
                <View style={styles.Pro_for_UBox}>
                    <FastImage
                        style={styles.Pro_for_UImage}
                        source={{
                            uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                        }}
                    />
                    <Text style={{ marginLeft: 10, }}>คุณให้คะแนนเรทติ้งการสั่งซื้อแล้วรึยัง??</Text>
                </View>
                <View style={styles.Pro_for_UBox}>
                    <FastImage
                        style={styles.Pro_for_UImage}
                        source={{
                            uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                        }}
                    />
                    <Text style={{ marginLeft: 10, width:200,}}>กรุณาชำระเงิน ........ บาท สำหรับคำสั่งซื้อ ภายในวันที่ 19-12-2019 </Text>
                </View>
            </View>
        );
    }
}
