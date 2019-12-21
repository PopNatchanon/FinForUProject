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
import {
    ButtonGroup
} from 'react-native-elements'
import styles from './StylesStoreScreen'
import { ip } from './IpConfig'

///----------------------------------Appbar----------------------------------------///

export default class StoreScreen extends Component {
    render() {
        return (
            console.log(this.props.navigation.getParam('item')),
            <SafeAreaView style={styles.SafeAreaView}>
                <AppBar navigation={this.props.navigation} />
                <ScrollView>
                    <StoreHead navigation={this.props.navigation} />
                    <StoreHeadDetails navigation={this.props.navigation} />
                    <Menubar />
                    <Banner navigation={this.props.navigation} />
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
        var dataMySQL = [ip + '/mysql/uploads/slide/NewStore', item.image].join('/')
        // console.log(dataMySQL)
        return (
            <View style={styles.StoreHead}>
                <View>
                    <ImageBackground
                        source={{
                            uri: ip + '/mysql/uploads/slide/2019-10-17_15-18-03_banner.png',
                        }}
                        style={styles.StoreHeadImage}
                        resizeMethod='resize'
                    />
                    <View style={styles.StoreHeadBox}>
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
                        <View style={{ marginTop: 64, }}>
                            <View style={styles.StoreHeadButtom}>
                                <Text style={styles.StoreHeadButtomText}>
                                    ติดตาม
                                </Text>
                            </View>
                            <View style={styles.StoreHeadButtom}>
                                <Text style={styles.StoreHeadButtomText}>
                                    แชท
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export class StoreHeadDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.StoreHeadDetails}>
                <View>
                    <Text style={styles.StoreHeadDetailsText1}>
                        คะแนนร้านค้า :
                    </Text>
                    <Text style={styles.StoreHeadDetailsText1}>
                        รายการสินค้า :
                    </Text>
                    <Text style={styles.StoreHeadDetailsText1}>
                        ระยะเวลาในการจัดเตรียมพัสดุ :
                    </Text>
                    <Text style={styles.StoreHeadDetailsText1}>
                        ประสิทธิภาพการแชท :
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.StoreHeadDetailsText2_1}>
                            4.8 จาก 5
                        </Text>
                        <Text style={styles.StoreHeadDetailsText2_3}>
                            (46.9 พันคะแนน)
                        </Text>
                    </View>
                    <Text style={styles.StoreHeadDetailsText2_2}>
                        150
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.StoreHeadDetailsText2_2}>
                            เร็ว
                        </Text>
                        <Text style={styles.StoreHeadDetailsText2_3}>
                            ( 1-2 วัน )
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.StoreHeadDetailsText2_2}>
                            80 %
                        </Text>
                        <Text style={styles.StoreHeadDetailsText2_3}>
                            ( ภายในไม่กี่ชั่วโมง)
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const component1 = () => <Text>หน้าหลัก</Text>
        const component2 = () => <Text>สินค้าทั้งหมด</Text>
        const component3 = () => <Text>ฟีด</Text>
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        const { selectedIndex } = this.state

        return (
            <View style={styles.Menubar}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 33 }}
                />
            </View>
        )
    }
}

export class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceSlide: [],
        };
    }
    getDataSlide(item) {
        var url = ip + '/mysql/DataServiceStore.php?type=slide';
        axios.get(url)
            .then((getData) => {
                // console.log(getData.data);
                this.setState({
                    dataSourceSlide: getData.data,
                })
            })
    }
    componentDidMount() {
        item = this.props.navigation.getParam('item')
        this.getDataSlide(item)
    }

    render() {
        let dataSlide = this.state.dataSourceSlide.map((item, indexs) => {
            // console.log(item);
            var dataMySQL = [ip + '/mysql/uploads/slide', item.image].join('/');
            console.log(dataMySQL);
            return (
                <View style={styles.BannerBox} key={indexs}>
                    <Image
                        source={{
                            uri: dataMySQL,
                        }}
                        style={styles.BannerSlide}
                        resizeMethod='resize'
                    />
                </View>
            )
        })
        return (
            <View style={styles.Banner}>
                <SwiperFlatList
                    // autoplay
                    // autoplayDelay={3}
                    // autoplayLoop
                    showPagination
                >
                    {dataSlide}
                </SwiperFlatList>
            </View>
        );
    }
}