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
    var nameConsole = 'review_product';
    var uri = `${finip}/profile/review_product`;
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
        <AppBar {...props} backArrow titleHead='รีวิวของฉัน' />
        {dataSevice && <Review_meScreen {...props} dataSevice={dataSevice.my_review} />}
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Review_meScreen
export let Review_meScreen = (props) => <ScrollView>
    {props.dataSevice?.map((value, index) => <Review_me {...props} dataSevice={value} key={index} />)}
</ScrollView>;
///----------------------------------------------------------------------------------------------->>>> Review_me
export let Review_me = (props) => {
    const { dataSevice, navigation } = props;
    const image_product = `${finip}/${dataSevice.path_product}/${dataSevice.image_product}`;
    return <View>
        <View style={stylesProfileTopic.Review_me}>
            <View style={stylesProfileTopic.Review_me_Box}>
                <View>
                    {/* <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Mlife</Text> */}
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#8F8F8F' }]}>สั่งซื้อวันที่ 12 ธ.ค.2019</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120, }}>
                    {StarReview(dataSevice.rating, 20)}
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({
                    goScreen: 'Customer_Topic_Review_Froms', navigation, setData: { id_cartdetail: dataSevice.id_cartdetail, selectedIndex: 7, },
                })}>
                    <View style={stylesProfileTopic.Review_me_Box_head}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
                            {dataSevice.id_reviews ? 'Edit' : 'รีวิว'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={stylesProfileTopic.Review_me_Box_image}>
                <View style={stylesProfileTopic.Review_me_Box_imageA}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage resizeMode={FastImage.resizeMode.contain} source={{ uri: image_product, }}
                            style={stylesProfileTopic.Review_me_image} />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.product_name}</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.detail}</Text>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>จัดส่งสินค้าแล้ว</Text>
                </View>
            </View>
        </View>
    </View>;
};