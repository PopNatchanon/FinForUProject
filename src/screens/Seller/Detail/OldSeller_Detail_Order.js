///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Seller_Detail_Order);
function Seller_Detail_Order(props) {
    const { route } = props;
    const selectedIndex = route.params?.selectedIndex;
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='รายละเอียด' />
                    <ScrollView>
                        <Detail />
                        <Order_Sending />
                    </ScrollView>
                </SafeAreaView>;
            case 1:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='รายละเอียด' />
                    <ScrollView>
                        <Detail />
                        <Order_Sending />
                        <Seller_Detail_Reviews />
                    </ScrollView>
                </SafeAreaView>;
        };
    };
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        {PathList()}
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail
export let Detail = (props) => <View>
    <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 5, }}>
        <View style={{ height: 30, width: 50, borderColor: '#FC8D00', borderWidth: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FC8D00' }]}>T N T</Text>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>จัดส่งโดย : TNT Express </Text>
    </View>
    <View style={{ justifyContent: 'center', padding: 10, marginTop: 5, backgroundColor: '#FFFFFF', }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 20, }]}>
            123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Order_Sending
export let Order_Sending = (props) => <View>
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10, }]}>การจัดส่ง</Text>
    <View style={{ backgroundColor: '#FFFFFF', }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ระหว่างการจัดส่ง</Text>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>20 ม.ค. 2020 - 16:58</Text>
            </View>
            <View style={{ width: 300, marginLeft: 10, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ขอบคุณสำหรับการช้อปปิ้งสินค้ากับFIN
                เราได้รับคำสั่งซื้อของท่านเรียบร้อยแล้ว และกำลังดำเนินการตรวจสอบรายการคำสั่งซื้อนี้
                ทางเราจะทำการส่งข้อมูลการอัพเดททางอีเมลให้คุณทราบโดยเร็ว</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>21 ม.ค. 2020 - 23:57</Text>
            </View>
            <View style={{ width: 300, marginLeft: 10, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>สินค้าของท่านอยู่ในระหว่างการจัดส่งโดย TNT หมายเลขพัสดุ
                [KERPU066037402]. ท่านสามารถติดตามสถานะของสินค้าท่านได้ที่Tracking Page. โปรดให้เวลา 24 - 48 ชม
                ในการอัพเดทข้อมูลจากเวปไซต์ของบริษัทขนส่ง</Text>
            </View>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>กำลังจัดส่งพัสดุ</Text>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>22 ม.ค. 2020 - 09:02</Text>
            </View>
            <View style={{ width: 300, marginLeft: 10, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    เรากำลังดำเนินการจัดส่งสินค้าให้ท่าน. TNTจะติดต่อคุณเพื่อทำการแจ้งข้อมูลการจัดส่งอีกครั้ง</Text>
            </View>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ส่งพัสดุแล้ว</Text>
        <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10, }}>
            <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>23 ม.ค. 2020 - 10:52</Text>
            </View>
            <View style={{ width: 300, marginLeft: 10, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>สินค้าของท่านได้รับการจัดส่งแล้ว</Text>
            </View>
        </View>
    </View>
    <View style={{ backgroundColor: '#FFFFFF', marginTop: 5, padding: 10, }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Detail_Reviews = (props) => <View>
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10, }]}>การรีวิว</Text>
    <View style={{ width: '100%', alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-around', marginVertical: 10, }}>
            <IconFontAwesome name='star' size={35} color='#FFAC33' />
            <IconFontAwesome name='star' size={35} color='#FFAC33' />
            <IconFontAwesome name='star' size={35} color='#FFAC33' />
            <IconFontAwesome name='star' size={35} color='#FFAC33' />
            <IconFontAwesome name='star' size={35} color='#FFAC33' />
        </View>
        <View style={{ width: '100%', height: 100, backgroundColor: '#F3F3F3' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10 }]}>แพคสินค้าโอเคดีครับ จัดส่งไว้ครับ</Text>
        </View>
        <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <View style={{ height: 100, width: 100, borderColor: '#F3F3F3', borderWidth: 1 }}>
                <FastImage style={stylesMain.BoxProduct1Image}
                    source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
            </View>
            <View style={{ height: 100, width: 100, borderColor: '#F3F3F3', borderWidth: 1 }}>
                <FastImage style={stylesMain.BoxProduct1Image}
                    source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
            </View>
            <View style={{ height: 100, width: 100, borderColor: '#F3F3F3', borderWidth: 1 }}>
                <FastImage style={stylesMain.BoxProduct1Image}
                    source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
            </View>
        </View>
    </View>
</View>;