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
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUse: true, })
    }, [activeGetCurrentUser])
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='คะแนนประจำร้าน' />
        <Score_store {...props} cokie={cokie} />
    </SafeAreaView>
};
///----------------------------------------------------------------------------------------------->>>
export let Score_store = (props) => {
    const { cokie, route } = props;
    const id_store = route.params?.id_store;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetServices2, setActiveGetServices2] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [score, setScore] = useState('');
    var dataBody = { id_store, score, };
    var item = [{
        name: 'ทั้งหมด',
        nameline2: `(${(dataService ? (dataService.rate_1 + dataService.rate_2 + dataService.rate_3 + dataService.rate_4 +
            dataService.rate_5) : '0')})`,
    }, {
        name: '5 ดาว',
        nameline2: `(${dataService?.rate_5 ?? '0'})`,
    }, {
        name: '4 ดาว',
        nameline2: `(${dataService?.rate_4 ?? '0'})`,
    }, {
        name: '3 ดาว',
        nameline2: `(${dataService?.rate_3 ?? '0'})`,
    }, {
        name: '2 ดาว',
        nameline2: `(${dataService?.rate_2 ?? '0'})`,
    }, {
        name: '1 ดาว',
        nameline2: `(${dataService?.rate_1 ?? '0'})`,
    }];
    var uri = `${finip}/store/score_data`;
    let updateIndex = (value) => {
        var score = value.selectedIndex == 0 ? '' :
            value.selectedIndex == 1 ? '5' :
                value.selectedIndex == 2 ? '4' :
                    value.selectedIndex == 3 ? '3' :
                        value.selectedIndex == 4 ? '2' :
                            value.selectedIndex == 5 ? '1' : '';
        setActiveGetServices2(true); setScore(score);
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getData2 = (value) => { setActiveGetServices2(false); setDataService2(value); };
    useEffect(() => {
        activeGetServices && id_store && cokie && dataBody?.id_store &&
            GetServices({
                Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'score_data', getDataSource: value => getData(value),
            });
    }, [activeGetServices && id_store && cokie && dataBody?.id_store]);
    useEffect(() => {
        activeGetServices2 && id_store && cokie &&
            GetServices({
                Authorization: cokie, uriPointer: uri, dataBody, showConsole: 'score_data_start', getDataSource: value => getData2(value),
            });
    }, [activeGetServices2 && id_store && cokie]);
    return <ScrollView>
        <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
            <View style={stylesMain.ItemCenter}>
                <View style={[stylesMain.ItemCenter, {
                    borderWidth: 1, backgroundColor: '#FFFFFF', height: 130, width: 130, borderRadius: 80, marginBottom: 10
                }]}>
                    {dataService?.rating_store == 'ยังไม่มีการรีวิว' ?
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ยังไม่มีการรีวิว</Text> :
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>
                            {dataService?.rating_store} คะแนน</Text>}
                    <View style={stylesMain.FlexRow}>
                        {StarReview(dataService?.rating_store, 20)}
                    </View>
                </View>
            </View>
        </View>
        <View style={{ height: 120, width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
            <TabBar sendData={value => updateIndex(value)} setVertical={6} item={item} type='box' noLimit numberofBox={3} radiusBox={4} />
        </View>
        {dataService2?.error != '[SyntaxError: JSON Parse error: Unrecognized token ' < ']' &&
            dataService2?.data_score?.length > 0 ?
            dataService2.data_score.map((value, index) => <Box_Rating dataService={value} key={index} />)
            : <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { width, height: '100%' }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,]}>ไม่มีรีวิว</Text>
            </View>}
    </ScrollView>;
};