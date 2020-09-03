///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
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
import stylesDetail from '../../../style/StylesDetailScreen'
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, GetFetch, NavigationNavigate, StarReview, } from '../../../customComponents';
import { ExitAppModule, TodayProduct } from '../../Main/MainScreen';
import { GetData, LoadingScreen, } from '../../../customComponents/Tools';
import { PopularProduct } from '../../Store/StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
///----------------------------------------------------------------------------------------------->>>>
export default connect(mapStateToProps, mapDispatchToProps)(Profile_Topic);
function Profile_Topic(props) {
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
    var nameConsole = selectedIndex == 2 ? '2|product_interest' : selectedIndex == 3 ? '3|store_follow' : selectedIndex == 4 ?
        '4|review_product' : selectedIndex == 7 ? '7|review_product' : '';
    var uri = `${finip}/${selectedIndex == 2 ? 'profile/product_interest' : selectedIndex == 3 ? 'profile/store_follow' :
        (selectedIndex == 4 || selectedIndex == 7) ? 'profile/review_product' : ''}`;
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
    let PathList = () => {
        switch (selectedIndex) {
            case 0:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='ดูล่าสุด' />
                    <LatestScreen {...props} />
                </SafeAreaView>;
            case 1:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='แชท' />
                    <ChatScreen {...props} />
                </SafeAreaView>;
            case 2:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='สิ่งที่สนใจ' />
                    {dataSevice && <InterestedScreen {...props} dataSevice={dataSevice.product} />}
                </SafeAreaView>;
            case 3:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='ร้านที่ติดตาม' />
                    {dataSevice && <Follow_storeScreen {...props} cokie={cokie} currentUser={currentUser} dataSevice={dataSevice} />}
                </SafeAreaView>;
            case 4:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='รีวิวของฉัน' />
                    {dataSevice && <Review_meScreen {...props} dataSevice={dataSevice.my_review} />}
                </SafeAreaView>;
            case 5:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='Fin Helpcenter' />
                    <Help_meScreen {...props} />
                </SafeAreaView>;
            case 6:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppbarChat {...props} Title='Supreme Store' />
                    <Chat_Cutomer />
                </SafeAreaView>;
            case 7:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='รีวิวของฉัน' />
                    <ScrollView>
                        {dataSevice?.my_review?.map((value, index) => <Review_From {...props} cokie={cokie} currentUser={currentUser}
                            dataSevice={value} key={index} />)}
                    </ScrollView>
                </SafeAreaView>;
            case 8:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='Fin Helpcenter' />
                    <ScrollView>
                        <Account_Help {...props} />
                    </ScrollView>
                </SafeAreaView>;
            case 9:
                return <SafeAreaView style={stylesMain.SafeAreaView}>
                    <AppBar {...props} backArrow titleHead='Fin Helpcenter' />
                    <Topic_DetailHelp {...props} />
                </SafeAreaView>;
        };
    };
    return <>
        {(activeGetSource || activeGetServices) && <LoadingScreen key='LoadingScreen' />}
        {PathList()}
        <ExitAppModule {...props} />
    </>;
};
///----------------------------------------------------------------------------------------------->>>> LatestScreen
export let LatestScreen = (props) => <ScrollView>
    <PopularProduct {...props} noHeadText />
</ScrollView>;
///----------------------------------------------------------------------------------------------->>>> AppbarChat
export let AppbarChat = (props) => <View style={stylesProfileTopic.AppbarChat}>
    <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.goBack()}>
        <IconEntypo color={mainColor} name='chevron-left' size={35} style={stylesMain.ItemCenterVertical} />
    </TouchableOpacity>
    <View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 5 }]}>{props.Title ?? ''}</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#ADADAD', marginTop: -2 }]}>
            ใช้งานล่าสุดเมือ 5นาที ที่แล้ว</Text>
    </View>
</View>;
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
    let ChatBox = ChatData.map((value, index) =>
        <TouchableOpacity key={index} onPress={() =>
            NavigationNavigate({ goScreen: 'Profile_Topic', navigation: props.navigation, setData: { selectedIndex: 6 }, })}>
            <View style={stylesProfileTopic.Chat_Tag}>
                <View style={stylesMain.FlexRow}>
                    <View style={stylesMain.ItemCenterVertical}>
                        <FastImage source={{ uri: value.image, }}
                            style={stylesProfileTopic.Chat_Tag_image} />
                        <View style={stylesProfileTopic.Chat_Tag_online}>
                            <View style={stylesProfileTopic.Chat_Tag_online_point}></View>
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
    return (<ScrollView>
        {ChatBox}
    </ScrollView>)
}
///----------------------------------------------------------------------------------------------->>>> Chat_Box
// class Chat_Cutomer extends React.Component {
//     state = {
//         messages: [],
//     }

//     componentDidMount() {
//         this.setState({
//             messages: [
//                 {
//                     _id: 1,
//                     text: 'Hello developer',
//                     createdAt: new Date(),
//                     image: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg',
//                     user: {
//                         _id: 2,
//                         name: 'React Native',
//                         avatar: 'https://placeimg.com/140/140/any',
//                     },
//                 },
//             ],
//         })
//     }

//     onSend(messages = []) {
//         this.setState(previousState => ({
//             messages: GiftedChat.append(previousState.messages, messages),
//         }))
//     }
//     renderBubble = props => {
//         return (
//             <Bubble
//                 {...props}
//                 wrapperStyle={{
//                     left: {
//                         backgroundColor: '#f0f0f0',
//                     },
//                 }}
//             />
//         )
//     }
//     renderMessageImage = props => {
//         return (
//             <FastImage
//                 {...props}
//             />
//         )
//     }
//     render() {
//         return (
//             <View style={{flex:1,backgroundColor:'#FFFFFF',}}>
//                 <GiftedChat
//                     messages={this.state.messages}
//                     onSend={messages => this.onSend(messages)}
//                     user={{
//                         _id: 1,
//                     }}
//                 />
{/* <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    loadEarlier={this.state.loadEarlier}
                    onLoadEarlier={this.onLoadEarlier}
                    isLoadingEarlier={this.state.isLoadingEarlier}
                    parsePatterns={this.parsePatterns}
                    imageProps={this.imageProps}
                    user={{_id: 1,}}
                    scrollToBottom
                    isCustomViewBottom
                    showUserAvatar 
                    showAvatarForEveryMessage 
                    onQuickReply={this.onQuickReply}
                    renderAccessory={this.renderAccessory}
                    renderMessageVideo={this.renderMessageVideo}
                    renderActions={this.renderCustomActions}
                    renderBubble={this.renderBubble}//This is what you must add in the code
                    renderSystemMessage={this.renderSystemMessage}
                    renderCustomView={this.renderCustomView}
                    renderMessageImage={this.renderMessageImage}
                    quickReplyStyle={{ borderRadius: 2 }}
                    renderQuickReplySend={this.renderQuickReplySend}
                    timeTextStyle={{ left: { color: 'red' }, right: { color: 'yellow' } }} 
                /> */}
//             </View>
//         )
//     }
// }
class Chat_Cutomer extends React.Component {
    state = { countmessage: 0, messages: [], };
    shouldComponentUpdate = (nextProps, nextState) => {
        const { messages } = this.state; if (messages !== nextState.messages) { return true; }; return false;
    };
    shouldComponentUpdate = (nextProps, nextState) => {
        const { messages } = this.state; if (messages !== nextState.messages) { return true; }; return false;
    };
    componentDidMount() { this.intervalID = setInterval(() => this.tick(), 1000); };
    componentWillUnmount() { clearInterval(this.intervalID); };
    tick() {
        var user = { msg_to: 10, type: 'message', user_id: 9, };
        var messages = [];
        fetch('http://192.168.0.132/mysql/chatpoint.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json()).then((responseJson) => {
            responseJson.map((item) => {
                messages.push({
                    _id: item.id, createdAt: item.timestamp, text: item.message, user: {
                        _id: item.msg_from, avatar: 'https://placeimg.com/140/140/any', name: item.name,
                    },
                });
            });
            this.setState({ messages });
        }).catch((error) => { console.error(error); });
    };
    onSend(messages = []) {
        var user = {
            messages: messages[0].text,
            msg_to: 10,
            type: 'sendmessage',
            user_id: messages[0].user._id,
        };
        fetch('http://192.168.0.132/mysql/chatpoint.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json()).then((responseJson) => {
        }).catch((error) => { console.error(error); });
    };
    renderBubble = props => <Bubble {...props} wrapperStyle={{ left: { backgroundColor: '#f0f0f0', }, }} />;
    renderMessageImage = props => <FastImage {...props} />;
    render() {
        return <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF', height: '96%', width: '100%', }}>
                <Text>แชท</Text>
                {/* <GiftedChat messages={this.state.messages} onSend={messages => this.onSend(messages)} renderSend={this.renderSend}
                textStyle={stylesFont.FontFamilyText, stylesFont.FontSize6} user={{ _id: '10', }} /> */}
                {/* <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    loadEarlier={this.state.loadEarlier}
                    onLoadEarlier={this.onLoadEarlier}
                    isLoadingEarlier={this.state.isLoadingEarlier}
                    parsePatterns={this.parsePatterns}
                    imageProps={this.imageProps}
                    user={{_id: 1,}}
                    scrollToBottom
                    isCustomViewBottom
                    showUserAvatar 
                    showAvatarForEveryMessage 
                    onQuickReply={this.onQuickReply}
                    renderAccessory={this.renderAccessory}
                    renderMessageVideo={this.renderMessageVideo}
                    renderActions={this.renderCustomActions}
                    renderBubble={this.renderBubble}//This is what you must add in the code
                    renderSystemMessage={this.renderSystemMessage}
                    renderCustomView={this.renderCustomView}
                    renderMessageImage={this.renderMessageImage}
                    quickReplyStyle={{ borderRadius: 2 }}
                    renderQuickReplySend={this.renderQuickReplySend}
                    timeTextStyle={{ left: { color: 'red' }, right: { color: 'yellow' } }} 
                /> */}
            </View>
            <View>
                <Text>คุณกำลังคิดอะไร</Text>
            </View>
        </ScrollView>;
    };
};
///----------------------------------------------------------------------------------------------->>>> InterestedScreen
export let InterestedScreen = (props) => <ScrollView>
    <TodayProduct {...props} loadData={props.dataSevice} noTitle onShow='InterestedScreen' />
</ScrollView>;
///----------------------------------------------------------------------------------------------->>>> Follow_storeScreen
export let Follow_storeScreen = (props) => <ScrollView>
    {props.dataSevice.store.map((value, index) => <Follow_store_Box {...props} dataSevice={value} key={index} />)}
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>ร้านค้าที่คุณอาจชอบ</Text>
    {props.dataSevice.unlike_store.map((value, index) => <Might_like_Store {...props} dataSevice={value} key={index} />)}
</ScrollView>;
///----------------------------------------------------------------------------------------------->>>> Follow_store_Box
export let Follow_store_Box = (props) => {
    const { cokie, currentUser, dataSevice, navigation } = props;
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [Button_Follow_Before, setButton_Follow_Before] = useState(true);
    const image_store = `${finip}/${dataSevice.store_path}/${dataSevice.image_store}`;
    var dataBody = { follow: "active", id_customer: currentUser?.id_customer, id_store: dataSevice.id_store, };
    var uri = `${finip}/brand/follow_data`;
    let getButton_Follow_Before = (value) => { setActiveGetServices(true); setButton_Follow_Before(!Button_Follow_Before); };
    let getData = (value) => { setActiveGetServices(false); };
    useEffect(() => {
        activeGetServices && GetFetch({
            Authorization: cokie, dataBody, getDataSource: value => getData(value), showConsole: 'product_interest', uriPointer: uri,
        });
    }, [activeGetServices]);
    return <>
        <View style={stylesProfileTopic.Follow_store_Box}>
            <TouchableOpacity onPress={() => NavigationNavigate({
                goScreen: 'StoreScreen', navigation, setData: { id_item: dataSevice.id_store },
            })} style={{ flexDirection: 'row', }}>
                <FastImage resizeMode={FastImage.resizeMode.contain} source={{ uri: image_store, }}
                    style={stylesProfileTopic.Follow_store_Box_image} />
                <View style={stylesProfileTopic.Follow_store_Box_text}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataSevice.store_name}</Text>
                    {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>@asusthailand</Text> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getButton_Follow_Before()} style={stylesProfileTopic.Follow_store_Button}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
                    {Button_Follow_Before ? 'กำลังติดตาม' : 'ติดตาม'}</Text>
            </TouchableOpacity>
        </View>
    </>;
};
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
                    goScreen: 'StoreScreen', navigation, setData: { id_store: dataSevice.id_store },
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
                    goScreen: 'Profile_Topic', navigation, setData: { id_cartdetail: dataSevice.id_cartdetail, selectedIndex: 7, },
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
///----------------------------------------------------------------------------------------------->>>> Help_meScreen
export let Help_meScreen = (props) => <View>
    <ScrollView>
        <Help_me {...props} />
        <Question {...props} />
        <Topic_Help {...props} />
    </ScrollView>
</View>;
///----------------------------------------------------------------------------------------------->>>> Help_me
export let Help_me = (props) => {
    const [text, setText] = useState(undefined);
    return <View>
        <ImageBackground source={require('../../../../icon/bgprofile.jpg')} style={stylesProfileTopic.Help_me_ImageBackground}>
            <View style={stylesProfileTopic.Help_me_Box_text}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สวัสดีค่ะ คุณ xxxxxxxxx</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>
                    คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
                <View>
                    <View style={{ backgroundColor: '#FFFFFF', borderRadius: 5, flexDirection: 'row', paddingLeft: 10, width: '85%', }}>
                        <TextInput fontSize={15} onChangeText={(value) => setText(value)} placeholder='กรุณากรอกสิ่งที่ให้เราช่วยเหลือ'
                            style={{ width: '90%' }} value={text}>
                        </TextInput>
                        <TouchableOpacity>
                            <IconAntDesign name='search1' RightItem size={20} style={{ margin: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Question
export let Question = (props) => <View>
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>คำถามยอดฮิต</Text>
    <View style={stylesProfileTopic.Question_Box}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
            ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
    </View>
    <View style={stylesProfileTopic.Question_Box}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ช่องทางการเงินมีกี่ประเภท</Text>
    </View>
    <View style={stylesProfileTopic.Question_Box}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ฉันตรวจสอบสินค้าได้อย่างไร</Text>
    </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Topic_Help
export let Topic_Help = (props) => {
    const { route } = props;
    const HeadTitle_Help = route.params?.HeadTitle_Help;
    return <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>หัวข้อ</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, }}>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'บัญชีของฉัน' ?
                null : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, noPush: true, setData: { HeadTitle_Help: 'บัญชีของฉัน', selectedIndex: 8, },
                }) : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: 'บัญชีของฉัน', selectedIndex: 8, },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="user" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>บัญชีของฉัน</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'การคืนสินค้า' ?
                null : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, noPush: true, setData: { HeadTitle_Help: 'การคืนสินค้า', selectedIndex: 8, },
                }) : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: 'การคืนสินค้า', selectedIndex: 8, },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="retweet" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การคืนสินค้า</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'การชำระเงิน' ?
                null : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, noPush: true, setData: { HeadTitle_Help: 'การชำระเงิน', selectedIndex: 8, },
                }) : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: 'การชำระเงิน', selectedIndex: 8, },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconEntypo name="credit-card" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การชำระเงิน</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'การสั่งซื้อ' ?
                null : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, noPush: true, setData: { HeadTitle_Help: 'การสั่งซื้อ', selectedIndex: 8, },
                }) : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: 'การสั่งซื้อ', selectedIndex: 8, },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="shoppingcart" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การสั่งซื้อ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HeadTitle_Help ? HeadTitle_Help == 'หัวข้ออื่นๆ' ?
                null : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, noPush: true, setData: { HeadTitle_Help: 'หัวข้ออื่นๆ', selectedIndex: 8, },
                }) : NavigationNavigate({
                    goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: 'หัวข้ออื่นๆ', selectedIndex: 8, },
                })} style={stylesProfileTopic.Topic_Box}>
                <IconAntDesign name="ellipsis1" RightItem size={30} style={stylesProfileTopic.Topic_Box_icon} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>หัวข้ออื่นๆ</Text>
            </TouchableOpacity>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>Account_Help
export let Account_Help = (props) => {
    const { route } = props;
    const HeadTitle_Help = route.params?.HeadTitle_Help;
    const [text, setText] = useState(undefined);
    return <View>
        <View style={stylesProfileTopic.Account_Help}>
            <View style={stylesProfileTopic.Account_Help_TextInput}>
                <TextInput fontSize={15} onChangeText={(value) => setText(value)} placeholder='กรุณากรอกสิ่งที่ให้เราช่วยเหลือ'
                    style={{ width: '90%' }} value={text} />
                <TouchableOpacity>
                    <IconAntDesign name='search1' RightItem size={20} style={{ margin: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>{HeadTitle_Help}</Text>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: HeadTitle_Help, selectedIndex: 9, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
                    ทำไมฉันจึงไม่สามารถเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้ได้?</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: HeadTitle_Help, selectedIndex: 9, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
                    ทำไมคำขอลบบัญชีของฉันจึงถูกปฏิเสธ?</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: HeadTitle_Help, selectedIndex: 9, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>
                    ฉันสามารถเปลี่ยนบัญชีผู้ใช้และเปลี่ยนชื่อของร้านค้าได้อย่างไร</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationNavigate({
            goScreen: 'Profile_Topic', navigation, setData: { HeadTitle_Help: HeadTitle_Help, selectedIndex: 9, },
        })}>
            <View style={stylesProfileTopic.Question_Box}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมฉันถึงลงชื่อเข้าใช้งานไม่ได้?</Text>
            </View>
        </TouchableOpacity>
        <Topic_Help {...props} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>Topic_DetailHelp
export let Topic_DetailHelp = (props) => {
    const { route } = props;
    const HeadTitle_Help = route.params?.HeadTitle_Help;
    const [text, setText] = useState(undefined);
    return <View style={stylesMain.SafeAreaView}>
        <ScrollView>
            <View style={stylesProfileTopic.Account_Help}>
                <View style={stylesProfileTopic.Account_Help_TextInput}>
                    <TextInput fontSize={15} onChangeText={(value) => setText(value)} placeholder='กรุณากรอกสิ่งที่ให้เราช่วยเหลือ'
                        style={{ width: '90%' }} value={text}>
                    </TextInput>
                    <TouchableOpacity>
                        <IconAntDesign name='search1' RightItem size={20} style={{ margin: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>{HeadTitle_Help}</Text>
            <View style={stylesProfileTopic.Topic_DetailHelp_BoxText}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    ในกรณีที่คุณไม่สามารถเปลี่ยนเบอร์โทรศัพท์ได้ อาจเป็นเพราะเข้าข่ายเหตุผลดังต่อไปนี้:
                    เลขบัตรเครดิต หรือ เลขบัญชีธนาคารที่ลงทะเบียนไว้ ไม่ถูกต้อง
                    ใส่รหัสผ่าน  ไม่ถูกต้อง
                    ใส่วันที่หมดอายุของบัตรเครดิต ไม่ถูกต้อง
                            ใส่เลขบัญชีธนาคาร ไม่ถูกต้อง</Text>
                <View style={{
                    alignItems: 'center', backgroundColor: '#ECECEC', borderWidth: 1, height: 80, justifyContent: 'center',
                    marginVertical: 10, width: '100%',
                }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize1]}>ภาพประกอบ</Text>
                </View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                    หากคุณไม่สามารถเปลี่ยนเบอร์โทรศัพท์เองได้ กรุณาลองใหม่อีกครั้งในอีก 24 ชม. หรือ
                    กรอกแบบฟอร์มยื่นเรื่องเปลี่ยนเบอร์โทรศัพท์ ผ่านลิ้งก์ คลิกที่นี่
                    ในกรณีที่คุณไม่สะดวก สามารถติดต่อ Call center  เพื่อทำการเปลี่ยนเบอร์โทรศัพท์
                    โดยให้ข้อมูลดังต่อไปนี้เมื่อคุณติดต่อ กรุณาให้ข้อมูลดังต่อไปนี้เมื่อคุณติดต่อ : Username
                    เบอร์โทรศัพท์ปัจจุบัน เบอร์โทรศัพท์ใหม่ที่ต้องการเปลี่ยน อีเมลล์ สำเนาบัตรประชาชน
                    หมายเหตุ:
                    ชื่อตามสำเนาบัตรประชาชนต้องตรงกับชื่อผู้ใช้งานในแอพพลิเคชั่น พรัอมทั้งเซ็นต์ลายเซ็นกำกับ และระบุข้อความ ดังนี้
                    - รับรองสำเนาถูกต้อง
                    - เพื่อเปลี่ยนเบอร์โทรศัพท์ของ Username: xxxxxxx เป็นเบอร์ 08x-xxxxxxx
                    เพื่อความปลอดภัยของบัญชีผู้ใช้ มีกระบวนการตรวจสอบสำหรับการยืนยันตัวตนเมื่อมีคำร้องขอเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้</Text>
            </View>
            <View style={[stylesMain.FrameBackground]}>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>บทความที่เกี่ยวข้อง</Text>
                </View>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การลงทะเบียนและเข้าใช้งาน</Text>
                </View>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>จัดการบัญชี</Text>
                </View>
                <View style={stylesProfileTopic.Topic_DetailHelp_Tag}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชวนเพื่อน</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={stylesProfileTopic.Topic_DetailHelp_ButtonChat}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>แชทกับ FIN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>;
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