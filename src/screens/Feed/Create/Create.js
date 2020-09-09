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
    const { route } = props;
    const actionPost = route.params?.actionPost
    const [activeGetCurrentUser, setActiveGetCurrentUser] = useState(true);
    const [activePost, setActivePost] = useState(false);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetCurrentUser(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    let getActivePost = (value) => setActivePost(value);
    useEffect(() => {
        activeGetCurrentUser && GetData({ getCokie: true, getSource: value => getSource(value), getUse: true, })
    }, [activeGetCurrentUser])
    return <SafeAreaView>
        <AppBar {...props} backArrow postBar getActivePost={(value) => getActivePost(value)}
            titleHead={actionPost == 'edit' ? 'แก้ไขโพสต์' : 'สร้างโพสต์'} />
        <Post_New {...props} activePost={activePost} cokie={cokie} getActivePost={(value) => getActivePost(value)} />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>
export let Post_New = (props) => {
    const { activePost, cokie, getActivePost, navigation, route } = props;
    const actionPost = route.params?.actionPost;
    const id_feed = route.params?.id_feed;
    const id_store = route.params?.id_store;
    const store_data = route.params?.store_data;
    const [activePostView, setActivePostView] = useState(true);
    const [avatarSource, setAvatarSource] = useState(undefined);
    const [detail, setDetail] = useState(undefined);
    const [image, setImage] = useState(undefined);
    const [image_path, setImage_Path] = useState(undefined);
    const [tagProduct, setTagProduct] = useState([]);
    const FramestickerSheetRef = useRef(null);
    let UploadImagePostFeed = () => {
        const options = { width: 400, height: 400, includeBase64: true, cropping: true };
        ImagePicker.openPicker(options).then(response => {
            setAvatarSource(response);
        });
    };
    let getData = (dataService) => {
        getActivePost(false)
        route.params.getDataSource(true);
        navigation.goBack();
    };
    let getData2 = (dataService2) => {
        var detail;
        var image;
        var image_path;
        dataService2.feed_news.map((value) => {
            detail = value.detail;
            image = value.image;
            image_path = value.image_path;
        });
        setActivePostView(false);
        setDetail(detail);
        setImage(image);
        setImage_Path(image_path);
    };
    let getDataService = (value) => {
        tagProduct.push(value);
        setTagProduct(tagProduct);
    };
    let deleteTag = (index) => {
        tagProduct.splice(index, 1)
        setTagProduct(tagProduct);
    }
    let Framesticker = () => {
        const FrameImage = [
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker01.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker02.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker03.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker04.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker05.jpg` },
            { image: `${ip}/MySQL/uploads/Framesticker/Framesticker06.jpg` },
        ]
        let FrameItem = FrameImage.map((value, index) => {
            if (index < 6) {
                return <View key={index}>
                    <TouchableOpacity>
                        <FastImage style={{ height: 120, width: 120, marginBottom: 10 }} source={{ uri: value.image, }} />
                    </TouchableOpacity>
                </View>
            }
        });
        return <>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>กรอบ/สติ๊กเกอร์</Text>
                <View style={[stylesMain.FlexRow, { flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10 }]}>
                    {FrameItem}
                </View>
            </View>
        </>;
    };
    const store_data_2 = store_data && store_data[0];
    const image_storee = store_data_2 && `${finip}/${store_data_2.image_path}/${store_data_2.image}`;
    const image_post = `${finip}/${image_path}/${image}`;
    const uri = `${finip}/${(actionPost == 'edit' ? 'brand/feed_action' : 'brand/create_feed')}`;
    var o = avatarSource && avatarSource.path.split('/');
    var tagProductBody = tagProduct && tagProduct.map((value) => { return value.id_product });
    var dataBody = actionPost == 'edit' ?
        {
            id_store,
            id_feed,
            detail: detail,
            id_product: tagProduct ? tagProductBody.join(';') : '',
            act: 'update'
        } :
        avatarSource ?
            [
                { name: 'id_store', data: id_store },
                { name: 'detail', data: detail },
                { name: 'id_product', data: tagProduct ? tagProductBody.join(';') : '' },
                { name: 'file', filename: o[o.length - 1], type: avatarSource.mime, data: RNFetchBlob.wrap(avatarSource.path) }
            ] : [
                { name: 'id_store', data: id_store },
                { name: 'detail', data: detail },
                { name: 'id_product', data: tagProduct ? tagProductBody.join(';') : '' },
            ];
    const uri2 = `${finip}/brand/feed_action`;
    var dataBody2 = actionPost == 'edit' ?
        {
            id_store,
            id_feed,
            act: 'view'
        } : {};
    activePost &&
        actionPost == 'edit' ?
        GetServices({
            uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'feed_action_update',
            getDataSource: (value) => getData(value)
        }) :
        GetServicesBlob({
            FormData, key: 'create_feed', uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'create_feed',
            getDataSource: (value) => getData(value),
        });
    activePostView && actionPost == 'edit' && id_feed && id_store && cokie &&
        GetServices({
            uriPointer: uri2, dataBody: dataBody2, Authorization: cokie, showConsole: 'feed_action_view',
            getDataSource: (value) => getData2(value),
        });
    return <>
        <BottomSheet ref={FramestickerSheetRef} height={320} duration={250}
            customStyles={{ container: { padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
            {Framesticker()}
        </BottomSheet>
        <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, }]}>
                    {/* {
                            store_data_2 && */}
                    <View style={stylesProfileTopic.Order_StorePro}>
                        <FastImage source={{ uri: `${ip}/MySQL/uploads/addmin/unnamed.png`, }}
                            style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF', borderRadius: 20, }} />
                    </View>
                    {/* } */}
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>
                        {/* {store_data_2 && store_data_2.name} */}
                            ชื่อผู้ที่จะโพสต์</Text>
                </View>
                <View style={{ paddingHorizontal: 10, }}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize4]} placeholder="คุณกำลังคิดอะไรอยู่..." multiline
                        editable value={detail} onChangeText={(value) => setDetail(value)}>
                    </TextInput>
                </View>
                <View>
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <FastImage source={{ uri: avatarSource ? avatarSource.path : image ? image_post : null }}
                            style={{ width: 400, height: 400, backgroundColor: '#FFFFFF' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width, }}>
                    {tagProduct.length > 0 && tagProduct.map((value, index) => <View key={index} style={{
                        backgroundColor: '#066996', height: 22, borderRadius: 8, marginLeft: 6, flexDirection: 'row', marginTop: 6,
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, stylesMain.ItemCenterVertical, {
                            color: '#fff', marginLeft: 8,
                        }]}>{value.name}</Text>
                        <TouchableOpacity onPress={() => deleteTag(index)} style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, {
                            marginLeft: 4, backgroundColor: '#ECECEC', height: 15, width: 15, borderRadius: 15, marginRight: 4,
                        }]}>
                            <IconAntDesign name='close' size={10} style={[stylesMain.ItemCenterVertical, { color: 'red' }]} />
                        </TouchableOpacity>
                    </View>)}
                </View>
            </View>
        </ScrollView>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                onPress={() => UploadImagePostFeed()}>
                <IconFontAwesome name='image' size={25} color='#43A047' style={{ marginRight: 10, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>รูปภาพ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                activeOpacity={1} onPress={() => NavigationNavigate({
                    goScreen: 'Feed_Create_Tag', setData: {
                        id_store, getDataService: value => getDataService(value)
                    }, navigation
                })}>
                <IconAntDesign name='tago' size={25} style={{ marginRight: 10, }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>แท็กสินค้า</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesMain.FlexRow, { borderColor: '#ECECEC', borderBottomWidth: 1, padding: 10 }]}
                activeOpacity={1} onPress={() => { FramestickerSheetRef.current.open(); }}>
                <IconMaterialCommunityIcons name='sticker-emoji' size={25} color='#FFAC33' style={{ marginRight: 10 }} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>กรอบ/สติ๊กเกอร์</Text>
            </TouchableOpacity>
        </View>
    </>;
}