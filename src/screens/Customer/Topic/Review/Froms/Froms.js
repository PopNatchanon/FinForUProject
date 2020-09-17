///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
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
import stylesDetail from '../../../../../style/StylesDetailScreen'
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch, NavigationNavigate, StarReview, } from '../../../../../customComponents';
import { ExitAppModule, TodayProduct } from '../../../../Main/Main';
import { GetData, LoadingScreen, } from '../../../../../customComponents/Tools';
import { PopularProduct } from '../../../../Store/Store';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../../../navigator/IpConfig';
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
        <ScrollView>
            {dataSevice?.my_review?.map((value, index) => <Review_From {...props} cokie={cokie} currentUser={currentUser}
                dataSevice={value} key={index} />)}
        </ScrollView>
        <ExitAppModule {...props} />
    </SafeAreaView>
};
///----------------------------------------------------------------------------------------------->>>> Review_From
export let Review_From = (props) => {
    const { cokie, currentUser, dataSevice, route } = props;
    const id_cartdetail = route.params?.id_cartdetail;
    const [activeAuto, setActiveAuto] = useState(true);
    const [activeGetServices, setActiveGetServices] = useState(false);
    const [activeavatarSource, setActiveAvatarSource] = useState(false);
    const [avatarSource, setAvatarSource] = useState([]);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);
    const [review, setReview] = useState();
    const [starMain, setStarMain] = useState(0);
    const image_product = `${finip}/${dataSevice.path_product}/${dataSevice.image_product}`;
    var dataBody = { comment: review, id_cartdetail, id_customer: currentUser?.id_customer ?? '', };
    var uri = `${finip}/profile/update_review`;
    let UploadImageSingle = (index) => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response; setActiveAvatarSource(!activeavatarSource); setAvatarSource(avatarSource);
        });
    };
    let UploadImageMultiple = () => {
        const options = { includeBase64: true, multiple: true, };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 3 && avatarSource.push(item));
            setActiveAvatarSource(!activeavatarSource); setAvatarSource(avatarSource);
        });
    };
    let setStatus = () => { setActiveAuto(false); setReview(dataSevice.reviews_detail); setStarMain(dataSevice.rating); };
    let UploadReview = () => setActiveGetServices(true);
    let getData = (value) => setActiveGetServices(false);
    activeAuto && setStatus();
    useEffect(() => {
        activeGetServices && GetFetch({
            Authorization: cokie, dataBody, getDataSource: (value) => getData(value), showConsole: 'product_interest', uriPointer: uri,
        });
    }, [activeGetServices]);
    return <View style={stylesMain.SafeAreaView}>
        <View style={stylesProfileTopic.Review_From}>
            <IconIonicons name='md-key' size={30} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> คุณภาพสินค้า </Text>
        </View>
        <View style={stylesProfileTopic.Review_From_Boximage}>
            <View style={stylesProfileTopic.Review_From_image}>
                <FastImage source={{ uri: image_product, }} style={stylesProfileTopic.Review_me_image} />
                <View style={{ marginLeft: 10, }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.product_name}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.detail}</Text>
                </View>
            </View>
            <View style={stylesProfileTopic.Review_From_Star_Box}>
                {StarReview(starMain)}
            </View>
            <View style={stylesProfileTopic.Review_From_TextInput}>
                <TextInput editable fontSize={18} multiline onChangeText={(value) => setReview(value)}
                    placeholder="ไม่ต้องอาย โปรดมาช่วยรีวิวเรา" style={[stylesFont.FontFamilyText, { margin: 10, width: '95%' }]}
                    value={review} />
            </View>
            <View style={{ width: '100%', }}>
                <View style={{ flexDirection: 'row', }}>
                    <CheckBox checked={checked1} onPress={() => { setChecked1(!checked1); setChecked2(!checked2) }} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,
                    { color: '#EAEAEA', marginLeft: -10, marginTop: 15, }]}>ไม่ระบุตัวตน</Text>
                </View>
                <View style={{ borderColor: '#EAEAEA', borderWidth: 1, flexDirection: 'row', padding: 10, }}>
                    {avatarSource ?
                        <>{avatarSource.map((item, index) => <TouchableOpacity key={index} onPress={() => UploadImageSingle(index)}>
                            <View style={[stylesMain.ItemCenter,
                            { borderColor: mainColor, borderWidth: 1, height: 100, marginLeft: 10, marginTop: 10, width: 100, }]}>
                                <FastImage source={{ uri: item.path }} style={[stylesMain.BoxProduct1Image,
                                stylesMain.ItemCenterVertical,]} />
                            </View>
                        </TouchableOpacity>)}
                            {avatarSource.length < 3 && <TouchableOpacity key={'upload'} onPress={() => UploadImageMultiple()}>
                                <View style={[stylesMain.ItemCenter,
                                { borderColor: mainColor, borderWidth: 1, height: 100, marginLeft: 10, marginTop: 10, width: 100, }]}>
                                    <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical,]}>
                                        <IconAntDesign name='camerao' RightItem size={35} color={mainColor} />
                                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>
                                            +เพิ่มรูปภาพ/วีดีโอ</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>}</> : <TouchableOpacity onPress={() => UploadImageMultiple()}>
                            <View style={[stylesMain.ItemCenter,
                            { borderColor: mainColor, borderWidth: 1, height: 100, marginLeft: 10, marginTop: 10, width: 100, }]}>
                                <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical,]}>
                                    <IconAntDesign name='camerao' RightItem size={35} color={mainColor} />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>
                                        +เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                </View>
            </View>
            <View style={[stylesMain.FlexRow, { marginLeft: -10 }]}>
                <CheckBox checked={checked3} onPress={() => { setChecked3(!checked3); setChecked4(!checked4); }} />
                <View style={[stylesMain.FlexRow, { marginLeft: -15, marginTop: 20, }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>ข้าพเจ้ายอมรับและทราบข้อตกลงตาม </Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#36B680' }]}>
                        นโยบายความเป็นส่วนตัวของ FIN</Text>
                </View>
            </View>
        </View>
        <View>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <TouchableOpacity onPress={() => UploadReview()} style={stylesProfileTopic.Review_From_Buttonshare}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>แชร์รีวิว</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};