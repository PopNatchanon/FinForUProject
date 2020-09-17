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
        <AppBar {...props} backArrow titleHead='รูปภาพ' />
        <Group_Image />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Group_Image = (props) => {
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const itemT = [
        { image_path: 'MySQL/uploads/icon_5', image: '05.jpg' },
        { image_path: 'mysql/uploads/Supermarketfin', image: 'Food and Market_200327_0026.jpg' },
        { image_path: 'mysql/uploads/Supermarketfin', image: 'Food and Market_200327_0013.jpg' },
        { image_path: 'mysql/uploads/Supermarketfin', image: 'Food and Market_200327_0007.jpg' },
        { image_path: 'mysql/uploads/page_News', image: 'Supreme.jpg' },
        { image_path: 'mysql/uploads/slide/bannerstore', image: 'brand1.png' },
        { image_path: 'mysql/uploads/addmin/image/type', image: '2019-05-12-1557696686.jpg' },
        { image_path: 'mysql/uploads/Deal_Today', image: 'ded3.jpg' },
        { image_path: 'mysql/uploads/banner-20200203T090816Z-001/banner/banner มือ1', image: 'gem jewelry.jpg' },
    ];
    useEffect(() => {
        if (activeGetServices) {
            setActiveGetServices(false); setDataService(GenArray(40, itemT));
        };
    }, [activeGetServices]);
    return <ScrollView>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10 }]}>รูปภาพในกลุ่ม</Text>
        <ImageGallery dataService={dataService} />
    </ScrollView>;
};