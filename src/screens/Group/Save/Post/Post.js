///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../../actions';
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
import stylesDetail from '../../../../style/StylesDetailScreen';
import stylesMain, { mainColor, appBarColor } from '../../../../style/StylesMainScreen';
import stylesFont from '../../../../style/stylesFont';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../../style/styleTopic';
import stylesProfile from '../../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob,
} from '../../../../customComponents/Tools';
import { ImageGallery, GenArray, StarReview, NavigationNavigate, AppBar, } from '../../../../customComponents';
import { TodayProduct, Slide, ExitAppModule } from '../../../Main/Main';
import { Store_Detail } from '../../../Main/RecommendStore/RecommendStore';
import Dash from 'react-native-dash';
import { ProductBox, FeedBox, } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../../navigator/IpConfig';
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
        <AppBar {...props} backArrow titleHead='โพสต์ที่บันทึก' />
        <Save_Post />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Save_Post = (props) => {
    const selectorSheetRef = useRef(null);
    const item = [
        { image: `${ip}/MySQL/uploads/Group_image/Walmart.png`, name: 'ผู้บริหาร Walmart เชื่อ ”ออฟฟิศ” ยังคงเป็นสิ่งสำคัญของธุรกิจ', status: 'อ่านแล้ว', },
        { image: `${ip}/MySQL/uploads/Group_image/paradise.jpg`, name: 'ศูนย์การค้า พาราไดซ์ พาร์ค บริหารงานโดยบริษัท เอ็ม บี เค จำกัด (มหาชน) ผู้บริหารศูนย์การค้า เอ็ม บี เค เซ็นเตอร์ ด้วยมูลค่าโครงการรวมกว่า 3,200 ล้านบาท บนถนนศรีนครินทร์ ภายใต้แนวคิด “สวนสวรรค์แห่งการช้อปปิ้งที่ยิ่งใหญ่ที่สุดของกรุงเทพตะวันออก', status: 'ยังไม่อ่าน' },
        { image: `${ip}/MySQL/uploads/Group_image/1.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/pantip.png`, name: 'ได้ติดต่อผู้ออกแบบโลโก้คนนึงด้วยการแชทผ่านapplicationชื่อดัง โดยได้ข้อมูลมาจากเว็บพันทิป จากเว็บระบุราคาไว้ถูกมาก', status: 'ยังไม่อ่าน ' },
        { image: `${ip}/MySQL/uploads/Group_image/MK.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'มีให้เลือกแบบ Delivery หลายช่องทางจากทางร้าน หรือแวะมาซื้อกลับไปรับประทานพร้อมหน้าที่บ้านแบบ Take Away ที่ชั้น G สยามพารากอน ซึ่งยังเปิดให้บริการ เปลี่ยนวันอยู่บ้านธรรมดาให้สุดพิเศษระดับโลกไปกับความอร่อย ได้ตั้งแต่เวลา 11.00-20.00 น', status: 'อ่านแล้ว ' }
    ]
    let PostItem = item.map((value, index) => <View style={[stylesMain.FlexRow, { marginVertical: 2.5 }]} key={index}>
        <BottomSheet ref={selectorSheetRef} height={200} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconEntypo name='share' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>แชร์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconFeather name='eye' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ดูโพสต์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconEntypo name='link' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>คัดลอกลิงค์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconMaterialCommunityIcons name='bookmark-remove' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เลิกบันทึกโพสต์</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
        <TouchableOpacity>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 10, }]}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={{ height: 70, width: 70, }} source={{ uri: value.image, }}
                        resizeMode={FastImage.resizeMode.contain} />
                    <View style={{ marginLeft: 10, width: width * 0.62, justifyContent: 'space-between' }}>
                        <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.name}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>{value.status}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => selectorSheetRef.current.open()}>
                    <View style={[stylesMain.ItemCenter, { marginLeft: 10 }]}>
                        <IconEntypo name='dots-three-horizontal' size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>);
    return <ScrollView>
        <View style={{ padding: 5, backgroundColor: '#FFFFFF' }}>
            {PostItem}
        </View>
    </ScrollView>;
};