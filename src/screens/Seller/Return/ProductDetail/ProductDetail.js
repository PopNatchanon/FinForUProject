///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, SafeAreaViews } = stylesMain;
const { Order_Product_Pro, Order_StorePro, } = stylesProfileTopic;
const { Seller_Product_Before, Seller_Return_Button, Seller_Return_DetailBox, Seller_Return_DetailBoxA, Seller_Return_DetailBoxB,
    Seller_Return_DetailBoxB_Image, Seller_Return_DetailB_Image, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
function ProductDetail(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='รายละเอียด' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Seller_Return_Detail />
    </ScrollView>;
};
///--------------------------------------------------------------------------/// รายละเอียดการยกเลิก
export let Seller_Return_Detail = (props) => {
    const [checked, setChecked] = useState(false);
    const Image1 = { uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`, };
    const Image2 = { uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, };
    const Image3 = { uri: `${ip}/mysql/uploads/products/2019-03-16-1552756517.jpg`, };
    return <View>
        <View style={[FrameBackground, { padding: 10 }]}>
            <Text style={[FontFamilyText, FontSize5]}>เหตุผลการยกเลิก</Text>
            <Text style={[FontFamilyText, FontSize5, { marginLeft: 10, }]}>เนื่องสินค้าชำรุด</Text>
        </View>
        <View style={FrameBackground}>
            <View style={Seller_Product_Before}>
                <View style={FlexRow}>
                    <FastImage source={Image1} style={Order_StorePro} />
                    <Text style={[FontFamilyBold, FontSize6, { margin: 10, }]}>PPoo</Text>
                </View>
            </View>
            <View style={
                { borderBottomWidth: 1, borderColor: '#EAEAEA', flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                <View style={FlexRow}>
                    <View style={Order_Product_Pro}>
                        <FastImage source={Image2} style={BoxProduct1Image} />
                    </View>
                    <View>
                        <Text style={[FontFamilyBold, FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                        <Text style={[FontFamilyText, FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                        <Text style={[FontFamilyText, FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                        <Text style={[FontFamilyText, FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                        <Text style={[FontFamilyText, FontSize7]}>x 1</Text>
                    </View>
                </View>
                <Text style={[FontFamilyText, FontSize5, { color: mainColor }]}>฿10,000.00</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={[FontFamilyText, FontSize4, { margin: 5 }]}>ข้อมูลการยกเลิก</Text>
                <View style={Seller_Return_DetailBox}>
                    <View style={Seller_Return_DetailBoxA}>
                        <FastImage source={Image2} style={BoxProduct1Image} />
                    </View>
                    <View style={Seller_Return_DetailBoxB}>
                        <View style={Seller_Return_DetailBoxB_Image}>
                            <FastImage source={Image3} style={Seller_Return_DetailB_Image} />
                        </View>
                        <View style={Seller_Return_DetailBoxB_Image}>
                            <FastImage source={Image3} style={Seller_Return_DetailB_Image} />
                        </View>
                        <View style={Seller_Return_DetailBoxB_Image}>
                            <FastImage source={Image3} style={Seller_Return_DetailB_Image} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[FlexRow, { justifyContent: 'space-between', padding: 10 }]}>
                <View style={FlexRow}>
                    <CheckBox checked={checked} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() => setChecked(!checked)} size={25}
                        uncheckedIcon='toggle-off' />
                    <Text style={[FontFamilyText, FontSize5, { marginTop: 15 }]}>ตรวจสอบแล้ว</Text>
                </View>
                <TouchableOpacity>
                    <View style={Seller_Return_Button}>
                        <Text style={[FontFamilyText, FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};