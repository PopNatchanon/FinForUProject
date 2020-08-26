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
///----------------------------------------------------------------------------------------------->>>> set value 
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, } = stylesFont;
const {
    BoxProduct4Box, BoxProduct4ComBoxIcon, BoxProduct4ComBoxIconText, BoxProduct4Image, BoxProduct4PlusButtonBox, BoxProduct4PlusButtonFollow, BoxProduct4PlusButtonFollowText, BoxProduct4PlusHeader, BoxProduct4PlusImage, BoxProduct4PlusImageText, FlexRow,
} = stylesMain;
///----------------------------------------------------------------------------------------------->>>>
function FeedScreen(props) {
    const { atStore, dataService, Follow, Header, navigation, postpath, prepath, typeip, userOwner } = props;
    const [like, setLike] = useState(false);
    const uriStore = { uri: `${ip}/mysql/uploads/2019-05-13-1557766960.jpg` };
    const uriPost = { uri: `${ip}/mysql/uploads/publish/popular_promotions/dunkins.png`, };
    const ViewStyles = { borderTopColor: '#ECECEC', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-around', padding: 8, };
    let FeedBox = () => <View style={BoxProduct4Box}>
        <View style={BoxProduct4PlusHeader}>
            <TouchableOpacity onPress={() => /*atStore ?*/ undefined /*
            NavigationNavigate({
                goScreen: 'StoreScreen', setData: { id_store: dataService.id_store ? dataService.id_store : dataService.p_id_store },
                navigation
            })*/}>
                <View style={FlexRow}>
                    <FastImage source={uriStore} style={BoxProduct4PlusImage} />
                    <Text style={[FontFamilyBold, FontSize5, BoxProduct4PlusImageText,]}>AAAA</Text>
                </View>
            </TouchableOpacity>
            <View style={BoxProduct4PlusButtonBox}>
                {Follow ? null : <TouchableOpacity onPress={() => undefined}>
                    <View style={BoxProduct4PlusButtonFollow}>
                        <Text style={[FontFamilyText, FontSize6, BoxProduct4PlusButtonFollowText,]}>ติดตาม</Text>
                    </View>
                </TouchableOpacity>}
            </View>
        </View>
        <View>
            <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                <FastImage source={uriPost} style={[BoxProduct4Image,
                    { height: 160 * (width / 240), maxHeight: width, width }]} resizeMode={FastImage.resizeMode.contain} />
            </View>
            <View style={{ borderTopColor: '#ECECEC', borderTopWidth: 1, marginLeft: 10, padding: 8, }}>
                <Text style={[FontFamilyText, FontSize7]}>detail</Text>
            </View>
            <View style={ViewStyles}>
                <TouchableOpacity activeOpacity={1} onPress={() => undefined} style={BoxProduct4ComBoxIcon}>
                    <IconFontAwesome name={like ? 'heart' : 'heart-o'} size={20} style={{ color: like ? '#ff0066' : '#111111' }} />
                    <Text style={[FontFamilyText, FontSize6, BoxProduct4ComBoxIconText,]}>ถูกใจ</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() =>
                    NavigationNavigate({ goScreen: 'Deal_Topic', navigation, setData: { selectedIndex: 9 }, })}>
                    <View style={BoxProduct4ComBoxIcon}>
                        <IconFontAwesome5 name='comment-dots' size={20} />
                        <Text style={[FontFamilyText, FontSize6, BoxProduct4ComBoxIconText,]}>แสดงความคิดเห็น</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={BoxProduct4ComBoxIcon} onPress={() => null}>
                    <IconEntypo name='share' size={20} />
                    <Text style={[FontFamilyText, FontSize6, BoxProduct4ComBoxIconText]}>แชร์</Text>
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