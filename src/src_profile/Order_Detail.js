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
    Dimensions,
    Picker,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { TabBar } from '../tools/Tools';
import { Appbar } from './Profile_Topic';

export default class Order_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styleMain.SafeAreaView}>
                <Appbar navigation={this.props.navigation} Title='รายละเอียด' />
                <ScrollView>
                    <Detail />
                    <Order_Sending />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

///------------------------------------------------------------------------------------///

export class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 5, }}>
                    <View style={{ height: 30, width: 50, backgroundColor: '#A2A2A2', }}></View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> จัดส่งโดย : TNT Express </Text>
                </View>
                <View style={{ justifyContent: 'center', padding: 10, marginTop: 5, backgroundColor: '#FFFFFF', }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20, }]}>123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------------///

export class Order_Sending extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10, }]}>การจัดส่ง</Text>
                <View style={{ backgroundColor: '#FFFFFF', }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ระหว่างการจัดส่ง</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>20 ม.ค. 2020 - 16:58</Text>
                        </View>
                        <View style={{ width: 300, marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ขอบคุณสำหรับการช้อปปิ้งสินค้ากับFIN
                                เราได้รับคำสั่งซื้อของท่านเรียบร้อยแล้ว
                                และกำลังดำเนินการตรวจสอบรายการคำสั่งซื้อนี้
                                ทางเราจะทำการส่งข้อมูลการอัพเดททางอีเมลให้คุณทราบโดยเร็ว
                        </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>21 ม.ค. 2020 - 23:57</Text>
                        </View>
                        <View style={{ width: 300, marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                สินค้าของท่านอยู่ในระหว่างการจัดส่งโดย TNT หมายเลขพัสดุ [KERPU066037402].
                                 ท่านสามารถติดตามสถานะของสินค้าท่านได้ที่Tracking Page.
                                 โปรดให้เวลา 24 - 48 ชม ในการอัพเดทข้อมูลจากเวปไซต์ของบริษัทขนส่ง
                        </Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>กำลังจัดส่งพัสดุ</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>22 ม.ค. 2020 - 09:02</Text>
                        </View>
                        <View style={{ width: 300, marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                เรากำลังดำเนินการจัดส่งสินค้าให้ท่าน. TNTจะติดต่อคุณเพื่อทำการแจ้งข้อมูลการจัดส่งอีกครั้ง
                        </Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ส่งพัสดุแล้ว</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom:10,}}>
                        <View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>23 ม.ค. 2020 - 10:52</Text>
                        </View>
                        <View style={{ width: 300, marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                สินค้าของท่านได้รับการจัดส่งแล้ว
                        </Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'#FFFFFF',marginTop:5,padding:10,}}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                </View>
            </View>
        );
    }
}
