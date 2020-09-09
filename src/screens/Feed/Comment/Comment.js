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
        <AppBar {...props} backArrow titleHead='คอมเมนท์' chatBar />
        <Feed_Comment />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>
export let Feed_Comment = (props) => {
    const CommentData = [
        { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", comment: "สอบถามขนาดสินค้าหน่อยครับ", Time: "30 นาที" },
        { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "John DoeLink", comment: "สั่งของไปยังไม่ได้ของเลยครับ", Time: "3 ชม." },
        { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "March SoulLaComa", comment: "ยังมีสินค้าอยู่ไหมคะ", Time: "10 ชม." },
        { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Finn DoRemiFaso", comment: "สินค้ามีปัญหาเปลี่ยนได้ทางไหนครับ", Time: "15 ชม." },
        { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "Maria More More", comment: "สินค้าราคาเท่าไหรครับ", Time: "20 ชม." },
        { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "Clark June Boom!", comment: "ส่งของวันไหนครับ", Time: "21 ชม." },
        { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "1 วัน" },
        { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "DoRemiFaso", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "3 วัน" },
        { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "The googler", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "5 วัน" },
        { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "Maria More More", comment: "ยังไม่ได้สินค้าเลยครับ", Time: "1 W" },
    ]
    let CommentBox = CommentData.map((value, index) =>
        <View key={index} style={{ backgroundColor: '#FFFFFF' }}>
            <View style={[stylesMain.FlexRow, { paddingHorizontal: 10, marginVertical: 3 }]}>{/* กดรูปโปร */}
                <TouchableOpacity onPress={() => { }}>
                    <FastImage style={stylesTopic.image} source={{ uri: value.image }} />
                </TouchableOpacity>
                <View style={{ marginLeft: 5 }}>
                    <View style={{ backgroundColor: '#ECECEC', borderRadius: width * 0.03, paddingHorizontal: 10, maxWidth: width * 0.80, padding: 5 }}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6]}>
                            {value.name}</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            {value.comment}</Text>
                    </View>
                </View>
            </View>
            <View style={[stylesMain.FlexRow, { marginLeft: '20%' }]}>
                <View style={{ width: 50 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>{value.Time}</Text>
                </View>
                <TouchableOpacity style={{ width: 40 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>ถูกใจ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 60 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#BABABA' }]}>ตอบกลับ</Text>
                </TouchableOpacity>
            </View>
        </View>);
    let header = <View style={[stylesMain.FlexRow, { padding: 10, borderBottomWidth: 2, justifyContent: 'space-between' }]}>
        <View style={stylesMain.FlexRow}>
            <IconFontAwesome name='heart' size={20} color='#ff0066' style={{ marginRight: 10 }} />
            <View style={{ width: '70%' }}>
                <Text numberOfLines={1} style={[stylesFont.FontSize6, stylesFont.FontFamilyText]}>Frank Odalthh และอีก2562คน</Text>
            </View>
        </View>
        <IconFontAwesome name='heart-o' size={20} style={{ marginRight: 10 }} />
    </View>
    return (
        <>
            {header}
            <ScrollView>
                {CommentBox}
            </ScrollView>
            <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', borderTopWidth: 2, padding: 5, }]}>
                <View style={{ backgroundColor: '#ECECEC', maxHeight: 100, width: '90%', borderRadius: 10, marginRight: 5 }}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}
                        placeholder="เขียนคอมเมนท์"
                        multiline
                        editable maxLength={5000} >
                    </TextInput>
                </View>
                <View style={[stylesMain.FlexRow, { alignItems: 'flex-end' }]}>
                    <TouchableOpacity>
                        <IconFontAwesome name='paper-plane-o' size={30} color='#001666' style={{ marginVertical: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}