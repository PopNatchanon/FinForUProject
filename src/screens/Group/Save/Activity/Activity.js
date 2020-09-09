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
        <AppBar {...props} backArrow titleHead='บันทึกกิจกรรม' />
        <Save_Activity />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Save_Activity = (props) => {
    const selectorSheetRef = useRef(null);
    const item = [
        { image: `${ip}/MySQL/uploads/Group_image/HomePro.png`, name: 'สติ๊ก กี้ ถูกใจโพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/workpoint.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว ' },
        { image: `${ip}/MySQL/uploads/Group_image/con8.png`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con3.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con1.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/con7.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/ThaiR.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' },
        { image: `${ip}/MySQL/uploads/Group_image/AMARIN.jpg`, name: 'สติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun สติ๊ก กี้ได้ตอบกลับความคิดเห็นของRattapolMeejunสติ๊กกี้ได้ตอบกลับความคิดเห็นของRattapol Meejunสติ๊ก กี้ ได้ตอบกลับความคิดเห็นของ Rattapol Meejun', Time: '1 ชั่วโมงที่แล้ว' }
    ];
    let ActivityItem = item.map((value, index) => <TouchableOpacity key={index}>
        <BottomSheet ref={selectorSheetRef} height={110} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconFeather name='eye' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ดูโพสต์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                    <IconAntDesign name='like1' size={25} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เลิกถูกใจ</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
        <View style={[stylesMain.FlexRow, { marginTop: 10, justifyContent: 'space-between' }]}>
            <View>
                <FastImage style={{ height: 50, width: 50, borderRadius: 25, }} source={{ uri: value.image, }}
                    resizeMode={FastImage.resizeMode.cover} />
                <View style={{ alignItems: 'flex-end', bottom: 20 }}>
                    <View style={[stylesMain.ItemCenter, { width: 25, height: 25, backgroundColor: '#0A55A6', borderRadius: 15 }]}>
                        <IconAntDesign name='like1' size={15} color='#FFFFFF' />
                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 5, width: width * 0.68, }}>
                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>{value.name}</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>{value.Time}</Text>
            </View>
            <TouchableOpacity onPress={() => selectorSheetRef.current.open()}>
                <View style={[stylesMain.ItemCenter, { marginTop: 5 }]}>
                    <IconEntypo name='dots-three-vertical' size={20} />
                </View>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>);
    return <ScrollView>
        <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
            {ActivityItem}
        </View>
    </ScrollView>;
};