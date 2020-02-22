///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class Order_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='รายละเอียด' />
                <ScrollView>
                    <Detail />
                    <Order_Sending />
                </ScrollView>
                <ExitAppModule navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Detail
export class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesProfileTopic.Order_Detail}>
                    <View style={stylesProfileTopic.Order_Detail_ICON}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FC8D00' }]}>T N T</Text>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}> จัดส่งโดย : TNT Express </Text>
                </View>
                <View style={stylesProfileTopic.Order_Detail_Address}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20, }]}>
                        123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Order_Sending
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
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10, }}>
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
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 5, padding: 10, }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                </View>
            </View>
        );
    }
}