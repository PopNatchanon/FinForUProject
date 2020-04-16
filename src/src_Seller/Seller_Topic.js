///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { CheckBox } from 'react-native-elements';

///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
import { AppBar1 } from '../MainScreen';
import { TabBar } from '../tools/Tools';

export default class Seller_Topic extends Component {
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
                        <Seller_Advertisement backArrow navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 1:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='สถิติร้านร้านค้า' />
                        <Seller_Statistics />
                    </SafeAreaView>
                )
            case 2:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='คะแนนของฉัน' />
                        <ScrollView>
                            <Seller_Score navigation={this.props.navigation} />
                        </ScrollView>
                    </SafeAreaView>
                )
            case 3:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แพคเกจปัจจุบันที่ใช้อยู่' />
                        <Seller_Advertisement_Packet backArrow navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 4:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='จัดการโฆษณา' />
                        <Seller_Advertisement_PacketBuy navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 5:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ตอบกลับความคิดเห็น' />
                        <Seller_Comment_Reply />
                    </SafeAreaView>
                )
            case 6:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='FIN แคมเปญ' />
                        <Seller_Fin_Campaign navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 7:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='FIN แคมเปญ' />
                        <View style={{ backgroundColor: '#FFFFFF' }}>
                            <View style={{ flexDirection: 'row', padding: 5, borderColor: '#EAEAEA', borderWidth: 1 }}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}> เลือกสินค้า </Text>
                                <View style={{ flexDirection: 'row', width: '65%', paddingLeft: 10, borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, }}>
                                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: '90%' }]}
                                        placeholder=""
                                        value={this.state.text}
                                        onChangeText={(text) => this.setState({ text })}>
                                    </TextInput>
                                    <TouchableOpacity>
                                        <IconAntDesign RightItem name="search1" size={20} style={{ marginVertical: 10 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Seller_Fin_Campaign_Product />
                        <Seller_Fin_Campaign_Product />
                        <Seller_Fin_Campaign_ProductSelect />
                    </SafeAreaView>
                )
            case 8:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='รายได้ของฉัน' />
                        <My_income />
                    </SafeAreaView>
                )
            case 9:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ถอนเงิน' />
                        <Withdraw_money navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 10:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ถอนเงิน' />
                        <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>รหัสผ่าน</Text>
                            <View style={{ width: '100%', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50 }}>
                                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}
                                    placeholder=""
                                    maxLength={10}
                                    value={this.state.text}
                                    onChangeText={(text) => this.setState({ text })}>
                                </TextInput>
                            </View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, , { color: '#FF0000' }]}>*ระบบจะส่งรหัสยืนยันตัวตนไปที่อีเมล</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 11 })}
                                style={[stylesMain.ItemCenter, { width: '80%', height: 50, backgroundColor: '#0A55A6', borderRadius: 5, marginVertical: 10 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, , { color: '#FFFFFF' }]}>เข้าสู่ระบบ</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )
            case 11:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ถอนเงิน' />
                        <Confirm_Bank />
                    </SafeAreaView>
                )
            case 12:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ประวัติการถอนเงิน' />
                        <Withdrawal_history />
                        <Withdrawal_history />
                        <Withdrawal_history />
                        <Withdrawal_history />
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

export class Seller_Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 3 })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>แพคเกจปัจจุบันที่ใช้อยู่</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 6 })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>FIN แคมเปญ</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='bar-graph' size={25} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อ</Text>
                    </View>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราคำสั่งซื้อที่สำเร็จ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≥ 4.6</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการยกเลิกสินค้า</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≤ 10%</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการคืนสินค้า/คืนเงิน</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>0% ≤ 10%</Text>
                </View>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <View style={stylesMain.FlexRow}>
                        <IconEntypo name='emoji-happy' size={25} />
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ความพึงพอใจของลูกค้า</Text>
                    </View>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราความคิดเห็นโดยรวม</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>5 ≤ 10%</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>อัตราการตอบกลับ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>57.00 % ≥ 75%</Text>
                </View>
                <View style={stylesSeller.Seller_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เวลาในการตอบกลับ</Text>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.Seller_Statistics]}>ภายใน 1 วัน ≤ 1วัน</Text>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>

export class Seller_Score extends Component {
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
                <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ความคิดเห็น</Text></View>
                <Seller_Comment navigation={this.props.navigation} Comment_Reply />
                <Seller_Comment navigation={this.props.navigation} Comment_Reply />
                <Seller_Comment navigation={this.props.navigation} Comment_Reply />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_Comment extends Component {
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
                <View style={[stylesMain.FlexRow, { borderColor: '#EAEAEA', borderBottomWidth: 1, padding: 5, }]}>
                    <View style={stylesMain.FlexRow}>
                        <View style={{ height: 80, width: 80, }}>
                            <FastImage style={stylesMain.BoxProduct1Image}
                                source={{
                                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                                }}
                            />
                        </View>
                        <View style={{ padding: 5, width: '55%' }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                        </View>
                    </View>
                    {Comment_Reply
                        ?
                        <TouchableOpacity style={[stylesMain.FlexRow, { alignItems: 'flex-end' }]} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 5 })}>
                            <IconFeather name='edit' size={15} color='#20BDA1' />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#20BDA1' }]}> เขียนตอบกลับ</Text>
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

export class Seller_Comment_Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Seller_Comment />
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

export class Seller_Advertisement_Packet extends Component {
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
                    <View style={stylesSeller.Seller_AdvertisementPacketBox}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>แพคเกจโฆษณา ขนาด S</Text>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 10 }]}>รายละเอียด</Text>
                <View style={stylesMain.ItemCenter}>
                    <View style={stylesSeller.Seller_AdvertisementPacketBox}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ระยะเวลาของแพคเกจ 30 วัน </Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 4 })}>
                        <View style={[stylesSeller.Seller_Return_Button, { margin: 10 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ซื้อแพคเกจ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_Advertisement_PacketBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Tel: '',
            Mail: '',
            Line: '',
            checked: true,
        };
    }

    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { borderBottomWidth: 1, }]}> รายละเอียดผู้ติดต่อ</Text>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>ชื่อผู้ติดต่อ*</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Name}
                                onChangeText={(Name) => this.setState({ Name })}>
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>หมายเลขโทรศัพท์*</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Tel}
                                onChangeText={(Tel) => this.setState({ Tel })}>
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>อีเมล*</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Mail}
                                onChangeText={(Mail) => this.setState({ Mail })}>
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>LINE ID</Text>
                        <View style={stylesSeller.Seller_Advertisement_PacketTextInput}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { width: '100%', padding: 10 }]}
                                placeholder=""
                                value={this.state.Line}
                                onChangeText={(Line) => this.setState({ Line })}>
                            </TextInput>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginVertical: 5 }]}>เรื่องที่ติดต่อ</Text>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                        />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 15 }]}>สนใจโฆษณาร้านกับ FIN (มีค่าใช้จ่าย)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <View style={[stylesMain.ItemCenter, { borderColor: '#0A55A6', borderWidth: 1, backgroundColor: '#0A55A6', padding: 5, marginLeft: 10, borderRadius: 5, width: 100 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อแอดมิน</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_Fin_Campaign extends Component {
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
                <View style={{ backgroundColor: '#fff' }}>
                    <TabBar
                        sendData={this.updataIndex}
                        setVertical={4}
                        item={item}
                    />
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 10, marginTop: 10 }}>
                    <View style={{ height: 90, width: '40%' }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/products/Campaign9999.png',
                            }}
                        />
                    </View>
                    <View style={{ width: '60%', padding: 10 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            มาเข้าร่วมแคมเปญกับเราสิ! สิทธิพิเศษสำหรับร้านค้าใน
                            Fin เข้าร่วมแคมเปญ " 9 Baht
                            คอลเลคชั่นราคาต่ำกว่า 199 บาท ! (วันที่่ 5 - 11 มี.ค.) " เลย
                    </Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>การเข้าร่วมโปรโมชั่นจะสิ้นสุดภายใน3 วัน 1 ชั่วโมง</Text>
                        <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 10 }} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 7 })}>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#7ED0E8', width: 130, borderRadius: 5, height: 30 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>เข้าร่วมโปรโมชั่น ตอนนี้!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>

export class Seller_Fin_Campaign_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,

        };
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
                <View style={{ flexDirection: 'row', padding: 10, borderColor: '#EAEAEA', borderWidth: 1 }}>
                    <CheckBox
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                    />
                    <View style={{ height: 80, width: 80, borderColor: '#EAEAEA', borderWidth: 1, padding: 5 }}>
                        <FastImage
                            style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/products/2019-10-29-1572320317.jpg',
                            }}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>กระเป๋าสะพายไหล่ Chanel</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>จำนวน : 20</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: '#EB4768', padding: 5, borderRadius: 5 }}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FFFFFF' }]}>ไม่เหมาะสม</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Seller_Fin_Campaign_ProductSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
                <View style={stylesMain.FlexRow}>
                    <CheckBox
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                    />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15 }]}>เลือกทั้งหมด</Text>
                </View>
                <View style={[stylesMain.FlexRow, { marginTop: 15, marginRight: 10 }]}>
                    <TouchableOpacity>
                        <View style={[stylesMain.ItemCenter, { borderColor: '#0A55A6', borderWidth: 1, padding: 5, width: 100, borderRadius: 5 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#0A55A6' }]}>ยกเลิก</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[stylesMain.ItemCenter, { borderColor: '#0A55A6', borderWidth: 1, backgroundColor: '#0A55A6', padding: 5, marginLeft: 10, borderRadius: 5, width: 100 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>
export class My_income extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }
    dataItem(items1) {
        return (
            <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center', backgroundColor: '#FFFFFF', height: 30 }]}>
                <TabBar
                    sendData={this.updateIndex.bind(this)}
                    item={items1}
                    // noLimit
                    numberBox
                    radiusBox={4}
                />
            </View>
        )
    }
    render() {
        const items1 = [{
            name: 'ยังไม่สำเร็จ'
        }, {
            name: 'สำเร็จแล้ว'
        },]
        return (
            <>
                <View style={{ width: '100%', marginTop: 5 }}>
                    {this.dataItem(items1)}
                </View>
                <ScrollView>
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10 }]}>
                        <View style={[stylesMain.ItemCenter, { height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 5, borderRadius: 75 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#0A55A6' }]}>฿100,000</Text>
                        </View>
                    </View>
                    <View style={[stylesMain.FrameBackground, { marginTop: -50 }]}>
                        <Product_income />
                        <Product_income />
                        <Product_income />
                        <Product_income />
                        <Product_income />
                        <Product_income />
                    </View>
                </ScrollView>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Product_income extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ECECEC', borderWidth: 1 }}>
                <View style={stylesMain.FlexRow}>
                    <View style={stylesProfileTopic.Order_Product_Pro}>
                        <FastImage style={stylesMain.BoxProduct1Image}
                            source={{
                                uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                            }}
                        />
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                        <Text>x 1</Text>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
            </View>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>>

export class Withdraw_money extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', marginTop: 5 }}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 12 })}>
                    <View style={stylesProfile.ListMenuList}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
                                ประวัติการถอนเงิน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 10 })}>
                    <View style={stylesProfile.ListMenuList}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
                                ถอนเงิน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 1 })}>
                    <View style={stylesProfile.ListMenuList}>
                        <View style={stylesProfile.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
                                เพิ่มบัญชี
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity> */}
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>

export class Confirm_Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: ''
        };
    }
    render() {
        return (
            <>
                <View>
                    <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>การยืนยันตัวตน</Text>
                        <View style={{ width: '100%', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50 }}>
                            <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}
                                placeholder=""
                                maxLength={10}
                                value={this.state.text}
                                onChangeText={(text) => this.setState({ text })}>
                            </TextInput>
                        </View>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, , { color: '#FF0000' }]}>*รหัสยืนยันตัวตนจากอีเมลของท่าน</Text>
                    </View>
                </View>
                <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10, paddingBottom: 10 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>ถอนเงินไปที่</Text>
                    <View style={stylesMain.FlexRow}>
                        <FastImage
                            style={{ height: 100, width: 100, borderWidth: 3 }}
                            source={{
                                uri: ip + '/MySQL/uploads/message/BBL-LOGO.jpg',
                            }}
                        />
                        <View style={{ margin: 10 }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>ธนาคารกรุงเทพ</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>* *** *** *232</Text>
                        </View>
                    </View>
                </View>
                <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, , { margin: 5 }]}>จำนวนเงินที่ทำการถอน</Text>
                    <View style={{ width: '100%', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '90%' }]}
                            placeholder=""
                            maxLength={50}
                            value={this.state.money}
                            onChangeText={(money) => this.setState({ money })}>
                        </TextInput>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>THB</Text>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ระยะเวลาดำเนินการ : 3-5 วันทำการ</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity //activeOpacity={1} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 11 })}
                        style={[stylesMain.ItemCenter, { width: '80%', height: 50, backgroundColor: '#0A55A6', borderRadius: 5, marginVertical: 10 }]}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, , { color: '#FFFFFF' }]}>ยืนยันการถอนเงิน</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>
export class Withdrawal_history extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBox: false,
        };
    }
    activeBox = () => {
        const { activeBox } = this.state
        this.setState({ activeBox: !activeBox })
    }
    render() {
        const { activeBox } = this.state
        return (
            <>
                <TouchableOpacity onPress={this.activeBox.bind(this)}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={[stylesMain.FlexRow, stylesMain.FrameBackground, { justifyContent: 'space-around' }]}>
                            <View>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#B7B7B7' }]}>ถอนเงิน</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>123124284349</Text>
                            </View>
                            <View>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2,]}>1,000,000 THB</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right', color: '#B7B7B7' }]}>กรุงไทย
                            <IconEntypo name={activeBox == true ? 'chevron-up' : 'chevron-down'} size={20} color='#0A55A6' />
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {
                    activeBox == true &&
                    <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', padding: 10 }]}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>20/02/2020</Text>
                        <FastImage
                            style={{ height: 100, width: 100, borderWidth: 3 }}
                            source={{
                                uri: ip + '/MySQL/uploads/message/BBL-LOGO.jpg',
                            }}
                        />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>ธนาคารกรุงเทพ</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>* *** *** *232</Text>
                        <View style={[stylesMain.ItemCenter, { borderColor: '#C4C4C4', borderWidth: 2, borderRadius: 5, paddingHorizontal: 30 }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สถานะ</Text>
                            <View style={[stylesMain.ItemCenter, { backgroundColor: '#2CD583', borderRadius: 30, padding: 5 }]}>
                                <IconEntypo name='check' size={35} color='#FFFFFF' />
                            </View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>อนุมัติเสร็จสิ้น</Text>
                        </View>
                    </View>
                }
            </>
        );
    }
}


