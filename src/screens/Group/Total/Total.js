///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import BottomSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput } from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob'
import ModalDropdown from 'react-native-modal-dropdown';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../../style/StylesDetailScreen';
import stylesMain, { mainColor, appBarColor } from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../style/styleTopic';
import stylesProfile from '../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob,
} from '../../../customComponents/Tools';
import { ImageGallery, GenArray, StarReview, NavigationNavigate, AppBar, } from '../../../customComponents';
import { TodayProduct, Slide, ExitAppModule } from '../../Main/Main';
import { Store_Detail } from '../../Main/RecommendStore/RecommendStore';
import Dash from 'react-native-dash';
import { ProductBox, FeedBox, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../navigator/IpConfig';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);
function PostFeed(props) {
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='กลุ่มทั้งหมด' />
        <Group_Total {...props} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Group_Total = (props) => {
    const { navigation } = props;
    const Group_Categoryitem = [
        { image: `${ip}/MySQL/uploads/products/2019-03-17-1552809845.jpg`, name: 'เครื่องประดับ' },
        { image: `${ip}/MySQL/uploads/products/2019-10-10-1570690336.png`, name: 'พระและเครื่องราง' },
        { image: `${ip}/MySQL/uploads/products/2019-10-10-1570690829.png`, name: 'กระเป๋า' },
        { image: `${ip}/MySQL/uploads/products/2019-10-29-1572332375.png`, name: 'เข็มขัด' },
        { image: `${ip}/MySQL/uploads/products/2019-10-29-1572324184.png`, name: 'นาฬิกา' },
    ];
    const Group_Popularitem = [
        {
            image1: `${ip}/MySQL/uploads/Icon_shareBox/Group/ฉันชอบดูหนัง.jpg`,
            image2: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`,
            name1: `ฉันชอบดูหนัง`,
            name2: `ราชบุรีมีอะไร`,
            member: `สมาชิก 1.9 แสน คน`,
            post: `260 โพสต์ต่อวัน`,
        },
        {
            image1: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`,
            image2: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`,
            name1: `ของอร่อยราชบุรีบอกด้วย`,
            name2: `ราชบุรีซื้อขายได้ทุกอย่าง`,
            member: `สมาชิก 1.9 แสน คน`,
            post: `310 โพสต์ต่อวัน`,
        },
        {
            image1: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`,
            image2: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`,
            name1: `ราชบุรีหางานหาคน`,
            name2: `ทุกเรื่องราวในราชบุรี`,
            member: `สมาชิก 1.9 แสน คน`,
            post: `420 โพสต์ต่อวัน `,
        },
    ];
    const Group_Totalitem = [
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของอร่อยราชบุรีบอกด้วย.jpg`, name: `ของอร่อยราชบุรีบอกด้วย`, about: `ซื้อ-ขายแลกเปลี่ยน การ์ดจอ เมนบอร์ด ซีพียู psu ram` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ของกินมุมอร่อยราชบุรี.jpg`, name: `ของกินมุมอร่อยราชบุรี`, about: `แนะนำร้านค้า ร้านอาหาร มุมอร่อย มุมของโปรดที่ชื่อชอบทั้งใน รอบๆจังหวัดราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกเรื่องราวในราชบุรี.jpg`, name: `ทุกเรื่องราวในราชบุรี`, about: `กลุ่มนี้มีจุดประสงค์เดียว ก็คือ เพื่อเป็นประโยชน์ให้กับผู้คนและสังคม เน้นราชบุรี ไม่เสนอขายทุกชนิด ไม่แชร์ ไม่แคปเข้ามาทุกกรณี` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดนัดโพธารามonline.jpg`, name: `ตลาดนัดโพธารามonline`, about: `ซื้อ-ขายแลกเปลี่ยน ตลาดนัดโพธารามonline` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีมีอะไร.jpg`, name: `ราชบุรีมีอะไร`, about: `ข่าวสารทั่วไปในด้านต่างๆในจังหวัดราชบุรี เช่น ส่งเสริมการท่องเที่ยว ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีซื้อขายได้ทุกอย่าง.jpg`, name: `ราชบุรีซื้อขายได้ทุกอย่าง`, about: `กลุ่มนี้เปิดไว้เพื่อให้คนในราชบุรี ได้เข้ามาแลกเปลี่ยน ซื้อ ขาย สินค้า  ทั้งสินค้า ใหม่  เก่า ทุกชนิด` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีกินเที่ยว.jpg`, name: `ราชบุรีกินเที่ยว`, about: `พบที่เที่ยวดี ๆ ช่วยบอกที` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ราชบุรีหางานหาคน.jpg`, name: `ราชบุรีหางานหาคน`, about: `หาคนตรงงาน หางานตรงใจ ที่นี่เลย` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ตลาดโพธาราม.jpg`, name: `ตลาดโพธาราม`, about: `กลุ่มตลาดโพธาราม เป็นกลุ่มที่ตั้งขึ้นเพื่อ เกิดการซื้อ - ขาย` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี.jpg`, name: `ซื้อขายโคนมบ้านโป่งโพธารามราชบุรี`, about: `ซื้อ-ขาย ลงราคาและเบอร์โทร ให้เรียบร้อยนะครับ ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/ทุกวันที่ราชบุรี.jpg`, name: `ทุกวันที่ราชบุรี`, about: `ชุมชนคนราชบุรี ` },
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, about: `พรานสนับสนุนให้ทุกคน เป็นยอดนักรีวิว นักคิด นักเขียน เช็คอินกินที่ใด ถูกใจ ในนครปฐม ` },
    ];
    let Group_Category = Group_Categoryitem.map((value, index) => {
        return <View key={index} style={[stylesMain.ItemCenter,
        { borderColor: '#EAEAEA', borderWidth: 1, width: 100, height: 120, marginHorizontal: 2.5 }]}>
            <FastImage
                style={{ height: 70, width: 70, marginBottom: 10 }}
                source={{ uri: value.image, }}
                resizeMode={FastImage.resizeMode.contain} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name}</Text>
        </View>
    });
    let Group_Popular = Group_Popularitem.map((value, index) => {
        return <View>
            <View key={index} style={[stylesMain.ItemCenter, stylesMain.FlexRow, {
                borderColor: '#EAEAEA', borderWidth: 1,
                width: width * 0.6, height: 70, margin: 2.5, padding: 5
            }]}>
                <FastImage style={{ height: 55, width: 55, borderRadius: 30 }}
                    source={{ uri: value.image1, }} resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: '65%', marginLeft: 10 }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name1}</Text>
                    <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.post}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.member}</Text>
                </View>
            </View>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, {
                borderColor: '#EAEAEA', borderWidth: 1, width: width * 0.6, height: 80, margin: 2.5, padding: 5
            }]}>
                <FastImage style={{ height: 55, width: 55, borderRadius: 30 }} source={{ uri: value.image2, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: '65%', marginLeft: 10 }}>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name2}</Text>
                    <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.post}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.member}</Text>
                </View>
            </View>
        </View>
    });
    let Group_Total = Group_Totalitem.map((value, index) => {
        return <View key={index} style={{
            borderColor: '#EAEAEA', borderWidth: 1, marginTop: 8, width: width * 0.30, alignItems: 'center',
        }}>
            <FastImage style={{ height: 55, width: '100%', marginBottom: 5 }} source={{ uri: value.image, }}
                resizeMode={FastImage.resizeMode.stretch} />
            <View style={{ paddingHorizontal: 5 }}>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name}</Text>
                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>{value.about}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: mainColor, paddingHorizontal: 10, borderRadius: 5, paddingVertical: 3, marginVertical: 5
            }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF' }]}>เข้าร่วมกลุ่ม</Text>
            </TouchableOpacity>
        </View>
    });
    return <ScrollView>
        <View style={stylesMain.FrameBackground}>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>หมวดหมู่</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ค้นหากลุ่มโดยการเลือกดูหมวดหมู่ยอดนิยม</Text>
            </View>
            <View style={{ paddingHorizontal: 2.5, marginBottom: 5, marginTop: 5 }}>
                <ScrollView horizontal>
                    {Group_Category}
                </ScrollView>
            </View>
        </View>
        <View style={stylesMain.FrameBackground}>
            <View style={[stylesMain.FlexRow, { marginTop: 5, justifyContent: 'space-between', marginHorizontal: 10 }]}>
                <View>
                    <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>กลุ่มยอดนิยม</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กลุ่มที่คุณอาจสนใจ</Text>
                </View>
                <TouchableOpacity style={stylesMain.ItemCenter} onPress={() => NavigationNavigate({
                    goScreen: 'Group_Popular', navigation
                })}>
                    <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold]}>ทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 2.5, marginBottom: 5, marginTop: 5 }}>
                <ScrollView horizontal>
                    {Group_Popular}
                </ScrollView>
            </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>กลุ่มทั้งหมด</Text>
            </View>
            <View style={[stylesMain.FlexRow,
            { flexWrap: 'wrap', justifyContent: 'space-around', paddingHorizontal: 5, paddingBottom: 10 }]}>
                {Group_Total}
            </View>
        </View>
    </ScrollView>;
};