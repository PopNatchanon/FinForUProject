///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize3, FontSize5, FontSize6, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews, } = stylesMain;
const { Treasury_store_Text } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(StoreProduct);
function StoreProduct(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='คลังสินค้า' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Text style={[FontFamilyBold, FontSize3, { margin: 5, }]}>รายการสินค้า</Text>
        <Treasury_store_Product {...props} />
        <Treasury_store_Product {...props} />
        <Treasury_store_Product {...props} />
        <Treasury_store_Product {...props} />
        <Treasury_store_Product {...props} />
        <Treasury_store_Product {...props} />
    </ScrollView>;
};
///--------------------------------------------------------------------------/// คลัง
export const Treasury_store_Product = (props) => {
    const [show, setShow] = useState(false);
    const handle = (value) => setShow(value);
    const _renderHeader = <IconFontAwesome color='white' name='trash-o' size={50} />;
    return <View style={SafeAreaViews}>
        <View style={FrameBackground}>
            <View style={[FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <Text style={[FontFamilyText, FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                <View style={[FlexRow, Treasury_store_Text]}>
                    <TouchableOpacity onPress={() => handle(true)} style={FlexRow}>
                        <IconFontAwesome color='#6B87CF' name='trash-o' size={20} />
                        <Text style={[FontFamilyText, FontSize5, { color: '#6B87CF' }]}>ลบ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_UpProduct', })} style={FlexRow}>
                        <IconFeather color='#6B87CF' name='edit' size={20} />
                        <Text style={[FontFamilyText, FontSize5, { color: '#6B87CF' }]}>แก้ไข</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, }}>
                <View style={{ height: 80, width: 80, }}>
                    <FastImage source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} style={BoxProduct1Image} />
                </View>
                <View>
                    <Text style={[FontFamilyText, FontSize5]}>ราคาต่อชิ้น</Text>
                    <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>฿10,000.00</Text>
                </View>
                <View>
                    <Text style={[FontFamilyText, FontSize5]}>ตัวเลือกสินค้า</Text>
                    <Text style={[FontFamilyText, FontSize6, { color: '#A2A2A2' }]}>สีแดง</Text>
                    <Text style={[FontFamilyText, FontSize6, { color: '#A2A2A2' }]}>ขาว</Text>
                    <Text style={[FontFamilyText, FontSize6, { color: '#A2A2A2' }]}>ส้ม</Text>
                </View>
                <View>
                    <Text style={[FontFamilyText, FontSize5]}>คลัง</Text>
                    <Text style={[FontFamilyText, FontSize6]}>20</Text>
                    <Text style={[FontFamilyText, FontSize6]}>50</Text>
                    <Text style={[FontFamilyText, FontSize6]}>30</Text>
                </View>
                <View>
                    <Text style={[FontFamilyText, FontSize5]}>ยอดขาย</Text>
                </View>
            </View>
        </View>
        <View>
        </View>
        <SCLAlert headerIconComponent={_renderHeader} onRequestClose={() => null} show={show} subtitle="Name Product"
            subtitleStyle={FontFamilyText} theme="danger" title="คุณต้องการลบสินค้าชิ้นนี้หรือไม่" titleStyle={[FontFamilyBold, FontSize2]}>
            <View style={[FlexRow, ItemCenter, { justifyContent: 'space-around', }]}>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
                    textStyle={FontFamilyText} theme="default">ยกเลิก</SCLAlertButton>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
                    textStyle={FontFamilyText} theme="danger">ยืนยัน</SCLAlertButton>
            </View>
        </SCLAlert>
    </View>;
};