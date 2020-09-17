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
        <AppBar {...props} backArrow titleHead='การแจ้งเตือน' />
        <Feed_Notification />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Feed_Notification = (props) => {
    const selectorSheetRef = useRef(null)
    return <ScrollView>
        <View>
            <View style={{ alignItems: 'flex-end', paddingHorizontal: 10, paddingVertical: 5 }}>
                <TouchableOpacity>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>ทำเครื่องหมายว่าอ่านแล้วทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => <TouchableOpacity key={index}>
                <BottomSheet ref={selectorSheetRef} height={110} duration={250}
                    customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                            <IconFeather name='eye' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ทำเครื่องหมายว่าอ่านแล้ว</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[stylesMain.FlexRow, { padding: 10 }]}>
                            <IconAntDesign name='delete' size={25} />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ลบการแจ้งเตือนนี้</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
                <View style={[stylesMain.FlexRow,
                { justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 10 }]}>
                    <View style={stylesMain.FlexRow}>
                        <View>
                            <FastImage
                                style={{ height: 50, width: 50, borderRadius: 25, }}
                                source={{
                                    uri: `${ip}/MySQL/uploads/Group_image/1.jpg`,
                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                            {index % 2 == 0 ?
                                <View style={{ alignItems: 'flex-end', top: -20 }}>
                                    <View style={[stylesMain.ItemCenter,
                                    { width: 25, height: 25, backgroundColor: '#0A55A6', borderRadius: 15 }]}>
                                        <IconAntDesign name='like1' size={15} color='#FFFFFF' />
                                    </View>
                                </View> : <View style={{ alignItems: 'flex-end', top: -20 }}>
                                    <View style={[stylesMain.ItemCenter,
                                    { width: 25, height: 25, backgroundColor: '#20BDA1', borderRadius: 15 }]}>
                                        <IconEntypo name='message' size={15} color='#FFFFFF' />
                                    </View>
                                </View>}
                        </View>
                        {index % 2 == 0 ?
                            <View style={{ marginLeft: 10, width: width * 0.68, justifyContent: 'space-between' }}>
                                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    สติ๊ก กี้ ถูกใจโพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee
                                    สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee
                                                </Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>
                                    1 ชั่วโมงที่แล้ว</Text>
                            </View> : <View style={{ marginLeft: 10, width: width * 0.68, justifyContent: 'space-between' }}>
                                <Text numberOfLines={3} style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                    สติ๊ก กี้ คอมเมนท์โพสต์ของ Chanun Nurainee สติ๊กกี้ถูกใจโพสต์ของChanunNurainee
                                    สติ๊กกี้ถูกใจโพสต์ของ Chanun Nurainee
                                                </Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A9A9A9' }]}>
                                    1 ชั่วโมงที่แล้ว</Text>
                            </View>}
                    </View>
                    <TouchableOpacity onPress={() => { selectorSheetRef.current.open() }} >
                        <View style={[stylesMain.ItemCenter,
                        { height: 30, width: 30, borderRadius: 15 }]}>
                            <IconEntypo name='dots-three-vertical' size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>)}
        </View>
    </ScrollView>;
};