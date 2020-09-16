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
import { AppBar_Group } from '../../Group';
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
    const scrollY = new Animated.Value(0);
    const maxheight = 55;
    let AnimatedHeadbg = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['transparent', appBarColor],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    let AnimatedCart = scrollY.interpolate({
        inputRange: [maxheight, maxheight * 2],
        outputRange: ['#ECECEC', appBarColor],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });
    return <SafeAreaView>
        <Animated.View style={{
            zIndex: 1, height: maxheight, width, top: maxheight, backgroundColor: 'transparent', elevation: 1,
            marginTop: -(maxheight),
        }}>
            <AppBar_Group ABGColor={AnimatedHeadbg} ABDColor={AnimatedHeadbg} ABICartColor={AnimatedCart} backArrow backArrow searchBar
                otherBar />
            <Group_Search {...props} otherBar onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false, })} />
        </Animated.View>
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Group_Search = (props) => {
    return <View style={{ padding: 10 }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>โพสต์ทั้งหมด</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ผลลัพธในกลุ่ม</Text>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
            <View style={stylesMain.FlexRow}>
                <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: `${ip}/MySQL/uploads/Group_image/1.jpg`, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ width: width * 0.55, marginLeft: 5 }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>Soulemate Soulemate</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>17 พฤษภาคม เวลา 14:01 น.</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ผู้บริหาร Walmart เชื่อ ”ออฟฟิศ” ยังคงเป็นสิ่งสำคัญของธุรกิจ
                    Doug McMillon CEO ของ Walmart ร้านค้าปลีกรายใหญ่ในสหรัฐฯ กล่าวในที่ประชุมผู้ถือหุ้นว่า
                    เเม้พฤติกรรมการทำงานในช่วง COVID-19 จะเปลี่ยนจากการทำงานในออฟฟิศไปเป็นการ Work from Home</Text>
                </View>
            </View>
            <FastImage style={{ height: 100, width: 100, }} source={{ uri: `${ip}/MySQL/uploads/Group_image/1.jpg`, }}
                resizeMode={FastImage.resizeMode.cover} />
        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10 }]}>
            <TouchableOpacity style={stylesMain.FlexRow}>
                <IconFontAwesome name='heart-o' size={25} color='#990F0F' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>5033</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>ถูกใจ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ความคิดเห็น </Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>105</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 5 }]}>รายการ</Text>
            </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#A0A0A0' }]}>สิ้นสุดผลลัพธ์</Text>
        </View>
    </View>;
};