///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../../../style/StylesDetailScreen'
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch, NavigationNavigate, StarReview, } from '../../../../customComponents';
import { ExitAppModule, TodayProduct } from '../../../Main/Main';
import { GetData, LoadingScreen, } from '../../../../customComponents/Tools';
import { PopularProduct } from '../../../Store/Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
///----------------------------------------------------------------------------------------------->>>>
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    const { route } = props;
    const id_cartdetail = route.params?.id_cartdetail;
    const selectedIndex = route.params?.selectedIndex;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataSevice, setDataSevice] = useState(undefined);
    var dataBody = { id_customer: currentUser?.id_customer, };
    var dataBody2 = { id_cartdetail: selectedIndex == 7 && id_cartdetail ? id_cartdetail : '', id_customer: currentUser?.id_customer, };
    var nameConsole = '|product_interest';
    var uri = `${finip}/profile/product_interest`;
    let getSource = value => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    let getData = value => { setActiveGetServices(false); setDataSevice(value); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
    }, [activeGetSource]);
    useEffect(() => {
        activeGetServices && !activeGetSource && cokie && currentUser && selectedIndex && GetFetch({
            Authorization: cokie, dataBody: dataBody2, getDataSource: value => getData(value), showConsole: nameConsole, uriPointer: uri,
        });
    }, [activeGetServices && !activeGetSource && cokie && currentUser && selectedIndex]);
    return <>
        <SafeAreaView style={stylesMain.SafeAreaView}>
            <AppBar {...props} backArrow titleHead='สิ่งที่สนใจ' />
            {dataSevice && <InterestedScreen {...props} dataSevice={dataSevice.product} />}
            <ExitAppModule {...props} />
        </SafeAreaView>
    </>;
};
///----------------------------------------------------------------------------------------------->>>> InterestedScreen
export let InterestedScreen = (props) => <ScrollView>
    <TodayProduct {...props} loadData={props.dataSevice} noTitle onShow='InterestedScreen' />
</ScrollView>;