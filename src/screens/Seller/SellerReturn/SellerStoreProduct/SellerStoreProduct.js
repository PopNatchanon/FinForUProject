///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState } from 'react';
import {
    Dimensions, SafeAreaView, Text, TouchableOpacity, View, ScrollView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { CheckBox } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesFont from '../../../../style/stylesFont';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Order_Me_Box } from '../../SellerTotelOrder/Seller_Totel_Order';
import { NavigationNavigate, AppBar } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(SellerStoreProduct);
function SellerStoreProduct(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <View style={stylesMain.SafeAreaView}>
            <AppBar {...props} backArrow titleHead='คลังสินค้า' />
            <ScrollView>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 5, }]}>รายการสินค้า</Text>
                <Treasury_store_Product {...props} />
                <Treasury_store_Product {...props} />
                <Treasury_store_Product {...props} />
                <Treasury_store_Product {...props} />
                <Treasury_store_Product {...props} />
                <Treasury_store_Product {...props} />
            </ScrollView>
        </View>
    </SafeAreaView>;
}
///--------------------------------------------------------------------------/// คลัง
export let Treasury_store_Product = (props) => {
    const { navigation } = props;
    const [show, setShow] = useState(false);
    let handle = (value) => setShow(value);
    let _renderHeader = <IconFontAwesome name='trash-o' size={50} color='white' />
    return <View style={stylesMain.SafeAreaView}>
        <View style={stylesMain.FrameBackground}>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                <View style={[stylesMain.FlexRow, stylesSeller.Treasury_store_Text]}>
                    <TouchableOpacity onPress={() => handle(true)} style={stylesMain.FlexRow}>
                        <IconFontAwesome name='trash-o' size={20} color='#6B87CF' />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#6B87CF' }]}>ลบ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Seller_Up_Product', navigation })}
                        style={stylesMain.FlexRow}>
                        <IconFeather name='edit' size={20} color='#6B87CF' />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#6B87CF' }]}>แก้ไข</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 10, justifyContent: 'space-around', flexDirection: 'row' }}>
                <View style={{ height: 80, width: 80, }}>
                    <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
                </View>
                <View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ราคาต่อชิ้น</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>฿10,000.00</Text>
                </View>
                <View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ตัวเลือกสินค้า</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#A2A2A2' }]}>สีแดง</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#A2A2A2' }]}>ขาว</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#A2A2A2' }]}>ส้ม</Text>
                </View>
                <View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>คลัง</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>20</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>50</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>30</Text>
                </View>
                <View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ยอดขาย</Text>
                </View>
            </View>
        </View>
        <View>
        </View>
        <SCLAlert theme="danger" headerIconComponent={_renderHeader} show={show} title="คุณต้องการลบสินค้าชิ้นนี้หรือไม่"
            titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]} subtitle="Name Product" subtitleStyle={stylesFont.FontFamilyText}
            onRequestClose={() => null}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around', }]}>
                <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
                    containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
                <SCLAlertButton theme="danger" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
                    containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
            </View>
        </SCLAlert>
    </View>;
};