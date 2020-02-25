///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleStoreMe
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
import stylesStoreMe from '../../style/stylestoreMe-src/styleStoreMeScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
import { AppBar1 } from '../MainScreen';
import { TabBar } from '../tools/Tools';

export default class StoreMe_Topic extends Component {
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
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='จัดการโฆษณา' />
                        <StoreMe_Advertisement backArrow navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 1:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='สถิติร้านร้านค้า' />
                        <StoreMe_Statistics />
                    </SafeAreaView>
                )
            case 2:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='คะแนนของฉัน' />
                        <ScrollView>
                            <StoreMe_Score navigation={this.props.navigation} />
                        </ScrollView>
                    </SafeAreaView>
                )
            case 3:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แพคเกจปัจจุบันที่ใช้อยู่' />
                        <StoreMe_Advertisement_Packet backArrow navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 4:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='จัดการโฆษณา' />
                        <StoreMe_Advertisement_PacketBuy />
                    </SafeAreaView>
                )
            case 5:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ตอบกลับความคิดเห็น' />
                        <StoreMe_Comment_Reply />
                    </SafeAreaView>
                )
            case 6:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='FIN แคมเปญ' />
                        <StoreMe_Fin_Campaign />
                    </SafeAreaView>
                )
        }
    }
    render() {
        return (
            <View style={stylesMain.SafeAreaView}>
                {this.PathList()}
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.push('StoreMe_Topic', { selectedIndex: 3 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>แพคเกจปัจจุบันที่ใช้อยู่</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('StoreMe_Topic', { selectedIndex: 6 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>FIN แคมเปญ</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='bar-graph' size={25} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อ</Text>
                    </View>
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อที่สำเร็จ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.StoreMe_Statistics]}>0% ≥ 4.6</Text>
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการยกเลิกสินค้า</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.StoreMe_Statistics]}>0% ≤ 10%</Text>
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการคืนสินค้า/คืนเงิน</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.StoreMe_Statistics]}>0% ≤ 10%</Text>
                </View>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='emoji-happy' size={25} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ความพึงพอใจของลูกค้า</Text>
                    </View>
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราความคิดเห็นโดยรวม</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.StoreMe_Statistics]}>5 ≤ 10%</Text>
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการตอบกลับ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.StoreMe_Statistics]}>57.00 % ≥ 75%</Text>
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เวลาในการตอบกลับ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.StoreMe_Statistics]}>ภายใน 1 วัน ≤ 1วัน</Text>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.ItemCenter, { borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>4.6 คะแนน</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                                <IconFontAwesome name='star' size={20} color='#FFAC33' />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesMain.FrameBackground}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ความคิดเห็น</Text></View>
                <StoreMe_Comment navigation={this.props.navigation} Comment_Reply />
                <StoreMe_Comment navigation={this.props.navigation} Comment_Reply />
                <StoreMe_Comment navigation={this.props.navigation} Comment_Reply />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { Comment_Reply } = this.props;
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
                    <View style={stylesMain.FlexRow}>
                        <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
                    </View>
                </View>
                <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', borderColor: '#EAEAEA', borderBottomWidth: 1, }]}>
                    <View style={stylesMain.FlexRow}>
                        <View style={{ height: 80, width: 80, margin: 10 }}>
                            <FastImage style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                }}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                        </View>
                    </View>
                    {Comment_Reply
                        ?
                        <TouchableOpacity style={[stylesMain.FlexRow, { alignItems: 'flex-end', margin: 10 }]} onPress={() => this.props.navigation.push('StoreMe_Topic', { selectedIndex: 5 })}>
                            <IconFeather name='edit' size={20} color='#20BDA1' />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#20BDA1' }]} > เขียนตอบกลับ</Text>
                        </TouchableOpacity> : null
                    }

                </View>
                <View style={stylesMain.ItemCenter}>
                    <View style={{ width: '80%', backgroundColor: '#E3E3E3', height: 80, margin: 10, padding: 10 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#A9A8A8' }]}>สินค้าร้านดีมากเลย</Text>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Comment_Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <StoreMe_Comment />
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>เขียนการตอบกลับ</Text>
                    <View style={stylesMain.ItemCenter}>
                        <View style={{ width: '80%', height: 120, padding: 5, backgroundColor: '#E3E3E3', margin: 5, }}>
                            <TextInput
                                style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]}
                                placeholder=""
                                multiline
                                editable
                                maxLength={5000}
                                value={this.state.Detail}
                                onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { height: 30, width: 100, backgroundColor: '#0A55A6', borderRadius: 5, margin: 10 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตอบกลับ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Advertisement_Packet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>ชื่อแพคเกจ </Text>
                <View style={stylesMain.ItemCenter}>
                    <View style={stylesStoreMe.StoreMe_AdvertisementPacketBox}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>แพคเกจโฆษณา ขนาด S</Text>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>รายละเอียด</Text>
                <View style={stylesMain.ItemCenter}>
                    <View style={stylesStoreMe.StoreMe_AdvertisementPacketBox}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ระยะเวลาของแพคเกจ 30 วัน </Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.push('StoreMe_Topic', { selectedIndex: 4 })}>
                        <View style={[stylesStoreMe.StoreMe_Return_Button, { margin: 10 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ซื้อแพคเกจ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Advertisement_PacketBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { borderBottomWidth: 1, textAlign: 'center' }]}>รายละเอียดผู้ติดต่อ</Text>
                <View>
                    <Text>ชื่อผู้ติดต่อ*</Text>

                </View>
                <View>
                    <Text>หมายเลขโทรศัพท์*</Text>
                </View>
                <View>
                    <Text>อีเมล*</Text>
                </View>
                <View>
                    <Text>LINE ID</Text>
                </View>
                <View>
                    <Text>เรื่องที่ติดต่อ</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class StoreMe_Fin_Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.updataIndex = this.updataIndex.bind(this)
    }
    updataIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const item = [{
            name: 'เร็วๆ นี้'
        }, {
            name: 'กำลังดำเนินการ'
        }, {
            name: 'หมดอายุแล้ว'
        }]
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <TabBar
                        sendData={this.updataIndex}
                        item={item}
                    />
                </View>
            </View>
        );
    }
}


