///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator, Animated, Dimensions, Modal, Text, TextInput, TouchableOpacity, View, Image, FlatList,
    Platform, PixelRatio, SafeAreaView, ScrollView, Share, StyleSheet,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import { WebView } from 'react-native-webview';
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import SlidingView from 'rn-sliding-view';
import RNFetchBlob from 'rn-fetch-blob'
import SplashScreen from 'react-native-splash-screen';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CommonActions, StackActions, } from '@react-navigation/native';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDeal from '../../style/stylePromotion-src/styleDealScreen';
import stylesDetail from '../../style/StylesDetailScreen';
import stylesFont, { normalize } from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
import stylesTopic from '../../style/styleTopic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { NavigationNavigate, AppBar } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
function FeedScreen(props) {
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='Feeds' />
        <FeedBox {...props} />
    </SafeAreaView>
}
let FeedBox = (props) => {
    const { atStore, dataService, Follow, Header, navigation, postpath, prepath, typeip, userOwner } = props;
    const [like, setLike] = useState(false);
    const dataMySQL_s = `${ip}/mysql/uploads/2019-05-13-1557766960.jpg`;
    const dataMySQL_p = `${ip}/mysql/uploads/publish/popular_promotions/dunkins.png`;
    return <View style={stylesMain.BoxProduct4Box}>
        <View style={stylesMain.BoxProduct4PlusHeader}>
            <TouchableOpacity onPress={() => /*atStore ?*/ undefined /*: 
            NavigationNavigate({
                goScreen: 'StoreScreen', setData: { id_store: dataService.id_store ? dataService.id_store : dataService.p_id_store },
                navigation
            })*/}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={stylesMain.BoxProduct4PlusImage} source={{ uri: dataMySQL_s, }} />
                    <Text style={[stylesMain.BoxProduct4PlusImageText, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>AAAA</Text>
                </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxProduct4PlusButtonBox}>
                {Follow ? null : <TouchableOpacity onPress={() => undefined}>
                    <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                        <Text style={[stylesMain.BoxProduct4PlusButtonFollowText, stylesFont.FontFamilyText,
                        stylesFont.FontSize6]}>ติดตาม</Text>
                    </View>
                </TouchableOpacity>}
                {/* <TouchableOpacity activeOpacity={1} onPress={() => { this.Setting_Sheet.open(); }}>
                    <IconEntypo name='dots-three-vertical' size={25} />
                </TouchableOpacity> */}
            </View>
        </View>
        <View>
            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                <FastImage source={{ uri: dataMySQL_p, }} style={[stylesMain.BoxProduct4Image,
                { maxHeight: width, height: 160 * (width / 240), width }]} resizeMode={FastImage.resizeMode.contain} />
            </View>
            <View style={{ marginLeft: 10, padding: 8, borderTopColor: '#ECECEC', borderTopWidth: 1, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>detail</Text>
            </View>
            <View style={{
                padding: 8, borderTopColor: '#ECECEC', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-around',
            }}>
                <TouchableOpacity activeOpacity={1} onPress={() => undefined}
                    style={stylesMain.BoxProduct4ComBoxIcon}>
                    <IconFontAwesome name={like ? 'heart' : 'heart-o'} size={20} style={{ color: like ? '#ff0066' : '#111111' }} />
                    <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>ถูกใจ</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() =>
                    NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 9 }, navigation })}>
                    <View style={stylesMain.BoxProduct4ComBoxIcon}>
                        <IconFontAwesome5 name='comment-dots' size={20} />
                        <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            แสดงความคิดเห็น</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesMain.BoxProduct4ComBoxIcon} onPress={() => null}>
                    <IconEntypo name='share' size={20} />
                    <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>แชร์</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
export default FeedScreen;