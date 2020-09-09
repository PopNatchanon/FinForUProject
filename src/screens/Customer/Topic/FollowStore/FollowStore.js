///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
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
    var nameConsole = 'store_follow';
    var uri = `${finip}/profile/store_follow`;
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
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='ร้านที่ติดตาม' />
        {dataSevice && <Follow_storeScreen {...props} cokie={cokie} currentUser={currentUser} dataSevice={dataSevice} />}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Follow_storeScreen
export let Follow_storeScreen = (props) => <ScrollView>
    {props.dataSevice.store.map((value, index) => <Follow_store_Box {...props} dataSevice={value} key={index} />)}
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>ร้านค้าที่คุณอาจชอบ</Text>
    {props.dataSevice.unlike_store.map((value, index) => <Might_like_Store {...props} dataSevice={value} key={index} />)}
</ScrollView>;
///----------------------------------------------------------------------------------------------->>>> Might_like_Store
export let Might_like_Store = (props) => {
    const { cokie, currentUser, dataSevice, navigation } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [Button_Follow_After, setButton_Follow_After] = useState(true);
    const image_store = `${finip}/${dataSevice.store_path}/${dataSevice.image_store}`;
    var dataBody = { follow: "active", id_customer: currentUser?.id_customer, id_store: dataSevice.id_store, };
    var uri = `${finip}/brand/follow_data`;
    let getButton_Follow_After = (value) => { setActiveGetServices(true); setButton_Follow_After(!Button_Follow_After); };
    let getData = (value) => { setActiveGetServices(false); };
    useEffect(() => {
        activeGetServices && GetFetch({
            Authorization: cokie, dataBody, getDataSource: value => getData(value), showConsole: 'product_interest', uriPointer: uri,
        });
    }, [activeGetServices]);
    return <View>
        <View style={stylesProfileTopic.Might_like_Store}>
            <View style={stylesProfileTopic.Follow_store_Box}>
                <TouchableOpacity onPress={() => NavigationNavigate({
                    goScreen: 'Store', navigation, setData: { id_store: dataSevice.id_store },
                })} style={{ flexDirection: 'row', }}>
                    <FastImage resizeMode={FastImage.resizeMode.contain} source={{ uri: image_store, }}
                        style={stylesProfileTopic.Follow_store_Box_image} />
                    <View style={stylesProfileTopic.Follow_store_Box_text}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataSevice.store_name}</Text>
                        {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>81% คะแนนร้านค้า</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => getButton_Follow_After()}>
                    <View style={stylesProfileTopic.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
                            {Button_Follow_After ? 'ติดตาม' : 'กำลังติดตาม'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <View style={stylesProfileTopic.Might_like_Store_Box}>
                    <View style={stylesProfileTopic.Might_like_Store_BoxP}>
                        {dataSevice.product.map((value, index) => {
                            const image_product = `${finip}/${value.image_path}/${value.image}`
                            return index < 4 && <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage resizeMode={FastImage.resizeMode.contain} source={{ uri: image_product, }}
                                    style={stylesProfileTopic.Might_like_Store_BoxImage} />
                                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8,
                                { paddingHorizontal: 5 }]}>{value.name}</Text>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, {
                                    borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, color: mainColor, marginBottom: 5,
                                    paddingHorizontal: 10,
                                }]}>{value.full_price}</Text>
                            </View>;
                        })}
                        <TouchableOpacity style={stylesProfileTopic.Might_like_Store_BoxPro}>
                            <View>
                                <View style={stylesProfileTopic.Might_like_Store_Total}>
                                    <IconEntypo name='chevron-right' size={35} />
                                </View>
                                <Text style={stylesFont.FontFamilyBold}>ดูทั้งหมด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#7E7979', margin: 10, textAlign: 'right', }]}>
                {dataSevice.product_total} สินค้า</Text>
        </View>
    </View>;
};