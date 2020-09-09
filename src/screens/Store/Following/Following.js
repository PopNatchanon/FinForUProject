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
        <AppBar {...props} backArrow titleHead='กำลังติดตาม' />
        <Following />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Following = (props) => {
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
        { image: `${ip}/MySQL/uploads/Icon_shareBox/Group/เช็คอินของกินร้านอาหารเด็ดนครปฐม.jpg`, name: `เช็คอินของกินร้านอาหารเด็ดนครปฐม`, },
    ];
    let FollowingBox = Followingitem.map((value, index) =>
        <View key={index} style={[stylesMain.FlexRow, { padding: 5, backgroundColor: '#FFFFFF', marginTop: 5, justifyContent: 'space-between' }]}>
            <View style={stylesMain.FlexRow}>
                <FastImage
                    style={{ height: 60, width: 60, borderRadius: 60 / 2 }}
                    source={{ uri: value.image, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: width * 0.50, justifyContent: 'center' }}>
                    <Text numberOfLines={2} style={[stylesFont.FontSize5, stylesFont.FontFamilyText, { marginLeft: 10 }]}>{value.name}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity >
                    <View style={{ borderColor: '#001666', borderWidth: 1.5, paddingHorizontal: 20, borderRadius: 25 }}>
                        <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyText, { color: '#001666' }]}>กำลังติดตาม</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>);
    return <ScrollView>
        {FollowingBox}
    </ScrollView>
}