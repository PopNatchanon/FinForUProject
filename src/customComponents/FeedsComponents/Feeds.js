///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
    Dimensions, SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { NavigationNavigate, AppBar } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
function FeedScreen(props) {
    const { atStore, dataService, Follow, Header, navigation, postpath, prepath, typeip, userOwner } = props;
    const [like, setLike] = useState(false);
    const dataMySQL_s = `${ip}/mysql/uploads/2019-05-13-1557766960.jpg`;
    const dataMySQL_p = `${ip}/mysql/uploads/publish/popular_promotions/dunkins.png`;
    let FeedBox = () => <View style={stylesMain.BoxProduct4Box}>
        <View style={stylesMain.BoxProduct4PlusHeader}>
            <TouchableOpacity onPress={() => /*atStore ?*/ undefined /*: 
            NavigationNavigate({
                goScreen: 'StoreScreen', setData: { id_store: dataService.id_store ? dataService.id_store : dataService.p_id_store },
                navigation
            })*/}>
                <View style={stylesMain.FlexRow}>
                    <FastImage style={stylesMain.BoxProduct4PlusImage} source={{ uri: dataMySQL_s, }} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, stylesMain.BoxProduct4PlusImageText,]}>AAAA</Text>
                </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxProduct4PlusButtonBox}>
                {Follow ? null : <TouchableOpacity onPress={() => undefined}>
                    <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BoxProduct4PlusButtonFollowText,]}>
                            ติดตาม</Text>
                    </View>
                </TouchableOpacity>}
            </View>
        </View>
        <View>
            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                <FastImage source={{ uri: dataMySQL_p, }} style={[stylesMain.BoxProduct4Image,
                { height: 160 * (width / 240), maxHeight: width, width }]} resizeMode={FastImage.resizeMode.contain} />
            </View>
            <View style={{ borderTopColor: '#ECECEC', borderTopWidth: 1, marginLeft: 10, padding: 8, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>detail</Text>
            </View>
            <View style={{
                borderTopColor: '#ECECEC', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-around', padding: 8,
            }}>
                <TouchableOpacity activeOpacity={1} onPress={() => undefined} style={stylesMain.BoxProduct4ComBoxIcon}>
                    <IconFontAwesome name={like ? 'heart' : 'heart-o'} size={20} style={{ color: like ? '#ff0066' : '#111111' }} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BoxProduct4ComBoxIconText,]}>ถูกใจ</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() =>
                    NavigationNavigate({ goScreen: 'Deal_Topic', setData: { selectedIndex: 9 }, navigation })}>
                    <View style={stylesMain.BoxProduct4ComBoxIcon}>
                        <IconFontAwesome5 name='comment-dots' size={20} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BoxProduct4ComBoxIconText,]}>
                            แสดงความคิดเห็น</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesMain.BoxProduct4ComBoxIcon} onPress={() => null}>
                    <IconEntypo name='share' size={20} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesMain.BoxProduct4ComBoxIconText]}>แชร์</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
    return <SafeAreaView>
        <AppBar {...props} backArrow titleHead='Feeds' />
        <FeedBox />
    </SafeAreaView>;
};
export default FeedScreen;