///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesLayout from '../../../style/stylesLayout';
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Ip
const { cover } = FastImage.resizeMode;
const { FontFamilyText, FontSize5, FontSize6, } = stylesFont;
const { FRow, } = stylesLayout;
const { ItemCenter, SafeAreaViews, } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(Follower);
function Follower(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ผู้ติดตาม' />
        <Followers />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Followers = (props) => {
    const Followersitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี`, },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, }];
    let FollowersBox = Followersitem.map((v, i) => {
        const Image1 = { uri: v.image, };
        return <View key={i} style={[FRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 5, padding: 5, }]}>
            <View style={FRow}>
                <FastImage resizeMode={cover} source={Image1} style={{ borderRadius: 60 / 2, height: 60, width: 60, }} />
                <View style={{ justifyContent: 'center', width: width * 0.50, }}>
                    <Text numberOfLines={2} style={[FontFamilyText, FontSize6, { marginLeft: 10 }]}>{v.name}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity >
                    <LinearGradient colors={['#10162d', '#284d8f']} style={[FRow, ItemCenter,
                        { borderRadius: 20, height: 30, paddingHorizontal: 20, }]}>
                        <IconEntypo color='#FFFFFF' name='plus' size={18} />
                        <Text style={[FontFamilyText, FontSize5, { color: '#FFFFFF', marginLeft: 5 }]}>ติดตาม</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>;
    });
    return <ScrollView>
        {FollowersBox}
    </ScrollView>;
};