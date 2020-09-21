///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize4, FontSize5, FontSize6, FontSize7 } = stylesFont;
const { BoxProduct1Image, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
function Reviews(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='รายละเอียด' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Detail />
        <Order_Sending />
        <Seller_Detail_Reviews />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>> Detail
export let Detail = (props) => <View>
    <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 5, padding: 10, }}>
        <View style={{ alignItems: 'center', borderColor: '#FC8D00', borderWidth: 1, justifyContent: 'center', height: 30, width: 50, }}>
            <Text style={[FontFamilyBold, FontSize3, { color: '#FC8D00' }]}>T N T</Text>
        </View>
        <Text style={[FontFamilyBold, FontSize5]}>จัดส่งโดย : TNT Express </Text>
    </View>
    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', marginTop: 5, padding: 10, }}>
        <Text style={[FontFamilyBold, FontSize5]}>ผู้รับ : ส.ยายยิ้ม</Text>
        <Text style={[FontFamilyText, FontSize5, { marginLeft: 20, }]}>123 ม.5 ต.อ่างทอง อ.เมือง จ.ราชบุรี 70000</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Order_Sending
export let Order_Sending = (props) => <View>
    <Text style={[FontFamilyBold, FontSize5, { margin: 10, }]}>การจัดส่ง</Text>
    <View style={{ backgroundColor: '#FFFFFF', }}>
        <Text style={[FontFamilyText, FontSize5, { margin: 10, }]}>ระหว่างการจัดส่ง</Text>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[FontFamilyText, FontSize7]}>20 ม.ค. 2020 - 16:58</Text>
            </View>
            <View style={{ marginLeft: 10, width: 300, }}>
                <Text style={[FontFamilyText, FontSize7]}>ขอบคุณสำหรับการช้อปปิ้งสินค้ากับFIN
                เราได้รับคำสั่งซื้อของท่านเรียบร้อยแล้ว และกำลังดำเนินการตรวจสอบรายการคำสั่งซื้อนี้
                ทางเราจะทำการส่งข้อมูลการอัพเดททางอีเมลให้คุณทราบโดยเร็ว</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[FontFamilyText, FontSize7]}>21 ม.ค. 2020 - 23:57</Text>
            </View>
            <View style={{ marginLeft: 10, width: 300, }}>
                <Text style={[FontFamilyText, FontSize7]}>สินค้าของท่านอยู่ในระหว่างการจัดส่งโดย TNT หมายเลขพัสดุ
                [KERPU066037402]. ท่านสามารถติดตามสถานะของสินค้าท่านได้ที่Tracking Page. โปรดให้เวลา 24 - 48 ชม
                ในการอัพเดทข้อมูลจากเวปไซต์ของบริษัทขนส่ง</Text>
            </View>
        </View>
        <Text style={[FontFamilyText, FontSize5, { margin: 10, }]}>กำลังจัดส่งพัสดุ</Text>
        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
            <View>
                <Text style={[FontFamilyText, FontSize7]}>22 ม.ค. 2020 - 09:02</Text>
            </View>
            <View style={{ width: 300, marginLeft: 10, }}>
                <Text style={[FontFamilyText, FontSize7]}>เรากำลังดำเนินการจัดส่งสินค้าให้ท่าน. TNTจะติดต่อคุณเพื่อทำการแจ้งข้อมูลการจัดส่งอีกครั้ง</Text>
            </View>
        </View>
        <Text style={[FontFamilyText, FontSize5, { margin: 10, }]}>ส่งพัสดุแล้ว</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10, }}>
            <View>
                <Text style={[FontFamilyText, FontSize7]}>23 ม.ค. 2020 - 10:52</Text>
            </View>
            <View style={{ marginLeft: 10, width: 300, }}>
                <Text style={[FontFamilyText, FontSize7]}>สินค้าของท่านได้รับการจัดส่งแล้ว</Text>
            </View>
        </View>
    </View>
    <View style={{ backgroundColor: '#FFFFFF', marginTop: 5, padding: 10, }}>
        <Text style={[FontFamilyBold, FontSize6]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Detail_Reviews = (props) => {
    const Image1 = { uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, };
    return <View>
        <Text style={[FontFamilyBold, FontSize5, { margin: 10, }]}>การรีวิว</Text>
        <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', padding: 10, width: '100%', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10, width: '50%', }}>
                <IconFontAwesome color='#FFAC33' name='star' size={35} />
                <IconFontAwesome color='#FFAC33' name='star' size={35} />
                <IconFontAwesome color='#FFAC33' name='star' size={35} />
                <IconFontAwesome color='#FFAC33' name='star' size={35} />
                <IconFontAwesome color='#FFAC33' name='star' size={35} />
            </View>
            <View style={{ backgroundColor: '#F3F3F3', height: 100, width: '100%', }}>
                <Text style={[FontFamilyText, FontSize4, { margin: 10 }]}>แพคสินค้าโอเคดีครับ จัดส่งไว้ครับ</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, width: '100%', }}>
                <View style={{ borderColor: '#F3F3F3', borderWidth: 1, height: 100, width: 100, }}>
                    <FastImage source={Image1} style={BoxProduct1Image} />
                </View>
                <View style={{ borderColor: '#F3F3F3', borderWidth: 1, height: 100, width: 100, }}>
                    <FastImage source={Image1} style={BoxProduct1Image} />
                </View>
                <View style={{ borderColor: '#F3F3F3', borderWidth: 1, height: 100, width: 100, }}>
                    <FastImage source={Image1} style={BoxProduct1Image} />
                </View>
            </View>
        </View>
    </View>;
};