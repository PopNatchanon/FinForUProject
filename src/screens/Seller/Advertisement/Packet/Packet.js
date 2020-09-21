///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize6 } = stylesFont;
const { FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
const { Seller_AdvertisementPacketBox, Seller_Return_Button, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Packet);
function Packet(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='แพคเกจปัจจุบันที่ใช้อยู่' />
        <Seller_Advertisement_Packet {...props} backArrow />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement_Packet = (props) => {
    const { navigation } = props;
    return <View style={FrameBackground}>
        <Text style={[FontFamilyBold, FontSize3, { margin: 10 }]}>ชื่อแพคเกจ </Text>
        <View style={ItemCenter}>
            <View style={Seller_AdvertisementPacketBox}>
                <Text style={[FontFamilyText, FontSize6]}>แพคเกจโฆษณา ขนาด S</Text>
            </View>
        </View>
        <Text style={[FontFamilyBold, FontSize3, { margin: 10 }]}>รายละเอียด</Text>
        <View style={ItemCenter}>
            <View style={Seller_AdvertisementPacketBox}>
                <Text style={[FontFamilyText, FontSize6]}>ระยะเวลาของแพคเกจ 30 วัน </Text>
            </View>
        </View>
        <View style={{ alignItems: 'flex-end', width: '100%', }}>
            <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Advertisement_Packet_Buy', })}>
                <View style={[Seller_Return_Button, { margin: 10 }]}>
                    <Text style={[FontFamilyBold, FontSize6, { color: '#FFFFFF' }]}>ซื้อแพคเกจ</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};