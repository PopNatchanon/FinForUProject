///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import { connect, } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width, } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesLayout from '../../../style/stylesLayout';
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup Value
const { cover, } = FastImage.resizeMode;
const { FontFamilyText, FontSize5, } = stylesFont;
const { FRow, } = stylesLayout;
const { SafeAreaViews, } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData,
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Following);
function Following(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='กำลังติดตาม' />
        <Followings {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Followings = (props) => {
    const Followingitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี ซื้อขายโคนมบ้านโป่งโพธารามราชบุ`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, }];
    const FollowingBox = Followingitem.map((v, i) => {
        const Image1 = { uri: v.image, };
        return <View key={i} style={[FRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginBottom: 5, padding: 5, }]}>
            <View style={FRow}>
                <FastImage resizeMode={cover} source={Image1} style={{ borderRadius: 60 / 2, height: 60, width: 60, }} />
                <View style={{ justifyContent: 'center', width: width * 0.50, }}>
                    <Text numberOfLines={2} style={[FontFamilyText, FontSize5, { marginLeft: 10, }]}>{v.name}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', }}>
                <TouchableOpacity >
                    <View style={{ borderColor: '#001666', borderRadius: 25, borderWidth: 1.5, paddingHorizontal: 20, }}>
                        <Text style={[FontFamilyText, FontSize5, { color: '#001666' }]}>กำลังติดตาม</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    });
    return <ScrollView>{FollowingBox}</ScrollView>;
};