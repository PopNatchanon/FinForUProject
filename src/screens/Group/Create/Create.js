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
        <AppBar {...props} backArrow titleHead='สร้างกลุ่ม' />
        <New_Group {...props} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let New_Group = (props) => {
    const { ImageGroup, navigation } = props;
    const [activeData, setActiveData] = useState(false);
    const [avatarSource2, setAvatarSource2] = useState(undefined);
    const [name_Group, setName_Group] = useState(undefined);
    let UploadImageGroup = () => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            setAvatarSource2(response);
            ImageGroup(response);
        });
    };
    return <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ตั้งชื่อกลุ่ม </Text>
        <TextInput style={{ borderWidth: 1, borderRadius: 5 }} onChangeText={(value) => { setActiveData(true); setName_Group(value); }}>
            <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold,]}>{name_Group}</Text>
        </TextInput>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เลือกหมวดของกลุ่ม</Text>
        <View style={{ borderWidth: 1, borderRadius: 5, height: 50, padding: 10 }}>
            <ModalDropdown options={['สาธารณะ', 'เพื่อน', 'เฉพาะเพื่อน', 'เฉพาะฉัน']} defaultValue={'สาธารณะ'}
                textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
                dropdownStyle={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: 100 }}>
            </ModalDropdown>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>อัพโหลดภาพปก</Text>
        <View style={stylesMain.FlexRow}>
            <View style={{ height: 50, width: 50, borderWidth: 1, borderRadius: 5, padding: 5 }}>
                {avatarSource2 ?
                    <FastImage source={{ uri: avatarSource2.path }} style={stylesMain.BoxProduct1Image} /> : null}
            </View>
            <TouchableOpacity onPress={() => UploadImageGroup()}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10 }]}>เพิ่มรูปภาพ</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => NavigationNavigate({ goScreen: 'Group', navigation })}
            style={stylesMain.ItemCenter}>
            <View style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', width: '30%', borderRadius: 5, height: 30 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>+ สร้างกลุ่ม</Text>
            </View>
        </TouchableOpacity>
    </View>;
}