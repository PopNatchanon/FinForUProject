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
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUse: true, })
    }, [activeGetCurrentUser])
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='เลือกสินค้า' />
        <Select_TagProduct {...props} cokie={cokie} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>
export let Select_TagProduct = (props) => {
    const { cokie, route, navigation } = props;
    const id_store = route.params?.id_store
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(0);
    var dataBody = {
        id_store,
        level: selectedIndex == 0 ? 'normal' : selectedIndex == 1 ? 'favorite' : 'normal'
    }
    var item = [{ name: 'สินค้าของฉัน' }, { name: 'รายการโปรด' },];
    var uri = `${finip}/brand/feed_tag_product`;
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let sendData = (value) => { setActiveGetServices(true); setSelectedIndex(value.selectedIndex); };
    let getDataService = (value) => { route.params.getDataService(value); navigation.goBack(); };
    activeGetServices && cokie &&
        GetServices({
            uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'feed_tag_product', getDataSource: (value) => getData(value),
        })
    return <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', height: 40 }]}>
            <TabBar item={item} numberBox numberOfLines={1} activeColor={'#fff'} activeFontColor={'#111'} tagBottomColor={mainColor}
                tagBottom sendData={(value) => sendData(value)} />
        </View>
        <ScrollView>
            <View style={[stylesMain.BoxProduct2,]}>
                <View style={[stylesMain.BoxProduct2BoxProduct]}>
                    {dataService && <ProductBox {...props} dataService={dataService.product} mode='row3colall'
                        getDataService={(value) => getDataService(value)} noNavigation pointerUrl='Detail' pointerid_store
                        nameSize={14} priceSize={15} dispriceSize={15} />}
                </View>
            </View>
        </ScrollView>
    </>;
}