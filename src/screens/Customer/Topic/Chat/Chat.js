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
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='แชท' />
        <ChatScreen {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> ChatScreen
export let ChatScreen = (props) => {
    const ChatData = [
        { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", Chat: "สอบถามขนาดสินค้าหน่อยครับ สอบถามขนาดสินค้าหน่อยครับ", DayTime: "8-7-2020 08:23" },
        { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "John DoeLink", Chat: "สั่งของไปยังไม่ได้ของเลยครับ สั่งของไปยังไม่ได้ของเลยครับ", DayTime: "6-7-2020 08:30" },
        { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "March SoulLaComa", Chat: "ยังมีสินค้าอยู่ไหมคะ ", DayTime: "6-7-2020 08:42" },
        { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Finn DoRemiFaso", Chat: "สินค้ามีปัญหาเปลี่ยนได้ทางไหนครับ ", DayTime: "6-7-2020 08:00" },
        { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "Maria More More", Chat: "สินค้าราคาเท่าไหรครับ ", DayTime: "4-7-2020 09:02" },
        { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "Clark June Boom!", Chat: "ส่งของวันไหนครับ ส่งของวันไหนครับ", DayTime: "1-7-2020 11:02" },
        { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "The googler", Chat: "ยังไม่ได้สินค้าเลยครับ ยังไม่ได้สินค้าเลยครับ", DayTime: "15-6-2020 15:02" },
        { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "DoRemiFaso", Chat: "ยังไม่ได้สินค้าเลยครับ ", DayTime: "2-6-2020 05:06" },
        { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "Clark June Boom!", Chat: "ส่งของวันไหนครับ ส่งของวันไหนครับ", DayTime: "25-5-2020 12:02" },
        { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "March SoulLaComa", Chat: "ยังมีสินค้าอยู่ไหมคะ ยังมีสินค้าอยู่ไหมคะ", DayTime: "18-5-2020 16:35" },
        { id: 11, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", Chat: "สอบถามขนาดสินค้าหน่อยครับ ", DayTime: "12-5-2020 18:55" },
        { id: 12, image: "https://bootdey.com/img/Content/avatar/avatar8.png", name: "DoRemiFaso", Chat: "ยังไม่ได้สินค้าเลยครับ ยังไม่ได้สินค้าเลยครับ", DayTime: "06-4-2020 13:41" },
    ]
    let ChatBox = ChatData.map((value, index) => <TouchableOpacity key={index} onPress={() =>
        NavigationNavigate({ goScreen: 'Customer_Topic_Chat_Cutomer', navigation: props.navigation, })}>
        <View style={stylesProfileTopic.Chat_Tag}>
            <View style={stylesMain.FlexRow}>
                <View style={stylesMain.ItemCenterVertical}>
                    <FastImage source={{ uri: value.image, }}
                        style={stylesProfileTopic.Chat_Tag_image} />
                    <View style={stylesProfileTopic.Chat_Tag_online}>
                        <View style={stylesProfileTopic.Chat_Tag_online_point} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 10, width: '60%' }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{value.name}</Text>
                    <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{value.Chat}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BCBCBC' }]}>{value.DayTime}</Text>
                </View>
            </View>
            <View style={stylesProfileTopic.Chat_Tag_icon}>
                <TouchableOpacity>
                    <IconFontAwesome5 name='bell' size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconFontAwesome name='trash-o' size={25} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>);
    return <ScrollView>
        {ChatBox}
    </ScrollView>
};