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
export const { width, height } = Dimensions.get('window');
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
        <AppBar {...props} backArrow titleHead='กลุ่มยอดนิยม' />
        <Group_Popular />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Group_Popular = (props) => {
    const Group_Popularitem = [
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
    let Group_Total = Group_Popularitem.map((value, index) => <View key={index} style={{
        borderColor: '#EAEAEA', borderWidth: 1, marginTop: 8,
        width: width * 0.30, alignItems: 'center',
    }}>
        <FastImage
            style={{ height: 55, width: '100%', marginBottom: 5 }} source={{ uri: value.image, }} resizeMode={FastImage.resizeMode.stretch} />
        <View style={{ paddingHorizontal: 5 }}>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>{value.name}</Text>
            <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.about}</Text>
        </View>
        <TouchableOpacity style={{
            backgroundColor: mainColor, paddingHorizontal: 10,
            borderRadius: 5, paddingVertical: 3, marginVertical: 5
        }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8, { color: '#FFFFFF' }]}>เข้าร่วมกลุ่ม</Text>
        </TouchableOpacity>
    </View>);
    return <ScrollView>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>กลุ่มทั้งหมด</Text>
            </View>
            <View style={[stylesMain.FlexRow, {
                flexWrap: 'wrap',
                justifyContent: 'space-around', paddingHorizontal: 5, paddingBottom: 10
            }]}>
                {Group_Total}
            </View>
        </View>
    </ScrollView>;
};