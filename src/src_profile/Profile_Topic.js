///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
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
import stylesDetail from '../../style/StylesDetailScreen'
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, TodayProduct } from '../MainScreen';
import { GetData, GetServices, LoadingScreen, NavigationNavigateScreen } from '../customComponents/Tools';
import { PopularProduct } from '../StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Profile_Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            activeGetServices: true,
            activeGetSource: true,
        };
    }
    getSource = (value) => {
        this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie })
    }
    getData = (dataSevice) => {
        this.setState({ activeGetServices: false, dataSevice })
    }
    PathList() {
        const { navigation } = this.props
        const { activeGetServices, activeGetSource, currentUser, cokie, dataSevice } = this.state
        const selectedIndex = navigation.getParam('selectedIndex')
        const id_cartdetail = navigation.getParam('id_cartdetail')
        const uri = `${finip}/${(
            selectedIndex == 2 ?
                'profile/product_interest' :
                selectedIndex == 3 ?
                    'profile/store_follow' :
                    (selectedIndex == 4 || selectedIndex == 7) ?
                        'profile/review_product' :
                        '')}`
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
        }
        var dataBody2 = {
            id_customer: currentUser && currentUser.id_customer,
            id_cartdetail: selectedIndex == 7 && id_cartdetail ? id_cartdetail : '',
        }
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='ดูล่าสุด' />
                        <LatestScreen navigation={navigation} />
                    </SafeAreaView>
                )
            case 1:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='แชท' />
                        <ChatScreen navigation={navigation} />
                    </SafeAreaView>)
            case 2:
                activeGetSource == false && activeGetServices == true && currentUser && cokie && selectedIndex == 2 &&
                    GetServices({
                        uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'product_interest',
                        getDataSource: this.getData.bind(this),
                    })
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='สิ่งที่สนใจ' />
                        {
                            dataSevice &&
                            <InterestedScreen dataSevice={dataSevice.product} navigation={navigation} />
                        }
                    </SafeAreaView>
                )
            case 3:
                activeGetSource == false && activeGetServices == true && currentUser && cokie && selectedIndex == 3 &&
                    GetServices({
                        uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'store_follow',
                        getDataSource: this.getData.bind(this),
                    })
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='ร้านที่ติดตาม' />
                        {
                            dataSevice &&
                            <Follow_storeScreen cokie={cokie} currentUser={currentUser} dataSevice={dataSevice} navigation={navigation} />
                        }
                    </SafeAreaView>
                )
            case 4:
                activeGetSource == false && activeGetServices == true && currentUser && cokie && selectedIndex == 4 &&
                    GetServices({
                        uriPointer: uri, dataBody: dataBody2, Authorization: cokie, showConsole: '4|review_product',
                        getDataSource: this.getData.bind(this),
                    })
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='รีวิวของฉัน' />
                        {
                            dataSevice &&
                            <Review_meScreen dataSevice={dataSevice.my_review} navigation={navigation} />
                        }
                    </SafeAreaView>
                )
            case 5:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='Fin Helpcenter' />
                        <Help_meScreen navigation={navigation} />
                    </SafeAreaView>
                )
            case 6:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppbarChat navigation={navigation} Title='Supreme Store' />
                        <Chat_Cutomer />
                    </SafeAreaView>
                )
            case 7:
                activeGetSource == false && activeGetServices == true && currentUser && cokie && selectedIndex == 7 &&
                    GetServices({
                        uriPointer: uri, dataBody: dataBody2, Authorization: cokie, showConsole: '7|review_product',
                        getDataSource: this.getData.bind(this),
                    })
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='รีวิวของฉัน' />
                        <ScrollView>
                            {
                                dataSevice &&
                                <Review_From cokie={cokie} currentUser={currentUser} dataSevice={dataSevice.my_review[0]}
                                    navigation={navigation} />
                            }
                        </ScrollView>
                    </SafeAreaView>
                )
            case 8:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='Fin Helpcenter' />
                        <ScrollView>
                            <Account_Help navigation={navigation} />
                        </ScrollView>
                    </SafeAreaView>
                )
            case 9:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={navigation} titleHead='Fin Helpcenter' />
                        <Topic_DetailHelp navigation={navigation} />
                    </SafeAreaView>
                )
        }
    }
    render() {
        const { navigation } = this.props
        const { activeGetServices, activeGetSource, } = this.state
        activeGetSource == true &&
            GetData({ getCokie: true, getUser: true, getSource: this.getSource.bind(this), })
        return (
            <>
                {
                    (activeGetSource == true || activeGetServices == true) &&
                    <LoadingScreen key='LoadingScreen' />
                }
                {this.PathList()}
                <ExitAppModule navigation={navigation} />
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> LatestScreen
export class LatestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
                <PopularProduct navigation={navigation} noHeadText />
            </ScrollView>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>> AppbarChat
export class AppbarChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation, Title } = this.props
        return (
            <View style={stylesProfileTopic.AppbarChat}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <IconEntypo name='chevron-left' size={35} color={mainColor} style={stylesMain.ItemCenterVertical} />
                </TouchableOpacity>
                <View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 5 }]}>{Title ? Title : ''}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#ADADAD', marginTop: -2 }]}>ใช้งานล่าสุดเมือ 5นาที ที่แล้ว</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> ChatScreen
export class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 6 }, navigation
                })}>
                    <Chat_Tag />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 6 }, navigation
                })}>
                    <Chat_Tag />
                </TouchableOpacity>
            </ScrollView>
        );
    }
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
    state = {
        messages: [],
        countmessage: 0,
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { messages } = this.state
        if (
            messages !== nextState.messages
        ) {
            return true
        }
        return false
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { messages } = this.state
        if (
            messages !== nextState.messages
        ) {
            return true
        }
        return false
    }
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        var user = {
            type: 'message',
            user_id: 9,
            msg_to: 10
        }
        var messages = []
        fetch('http://192.168.0.132/mysql/chatpoint.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson.map((item) => {
                    messages.push(
                        {
                            _id: item.id,
                            text: item.message,
                            createdAt: item.timestamp,
                            user: {
                                _id: item.msg_from,
                                name: item.name,
                                avatar: 'https://placeimg.com/140/140/any',
                            },
                        },
                    )
                })
                this.setState({ messages })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    onSend(messages = []) {
        var user = {
            type: 'sendmessage',
            msg_to: 10,
            messages: messages[0].text,
            user_id: messages[0].user._id,
        }
        fetch('http://192.168.0.132/mysql/chatpoint.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((responseJson) => {
            })
            .catch((error) => {
                console.error(error);
            })
    }
    renderBubble = props => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#f0f0f0',
                    },
                }}
            />
        )
    }
    renderMessageImage = props => {
        return (
            <FastImage
                {...props}
            />
        )
    }
    render() {
        return (
            <View style={{ height: '96%', width: '100%', backgroundColor: '#FFFFFF' }}>
                <GiftedChat
                    messages={this.state.messages}
                    renderSend={this.renderSend}
                    textStyle={stylesFont.FontFamilyText, stylesFont.FontSize6}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: '10',
                    }}
                />
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
        )
    }
}
///----------------------------------------------------------------------------------------------->>>> Chat_Box
export class Chat_Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesProfileTopic.Chat_Tag}>
                    <View style={stylesMain.FlexRow}>
                        <View style={stylesMain.ItemCenterVertical}>
                            <FastImage style={stylesProfileTopic.Chat_Tag_image}
                                source={{
                                    uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                                }}
                            />
                            <View style={stylesProfileTopic.Chat_Tag_online}>
                                <View style={stylesProfileTopic.Chat_Tag_online_point}></View>
                            </View>
                        </View>
                        <View style={stylesProfileTopic.Chat_Tag_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ppooooo</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>สินค้าได้ถูกขายแล้วค่ะ</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Chat_Tag_icon}>
                        <IconFontAwesome5 name='bell' size={25} />
                        <IconFontAwesome style={{ marginLeft: 10, }} name='trash-o' size={25} />
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> InterestedScreen
export class InterestedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataSevice, navigation } = this.props
        return (
            <ScrollView>
                <TodayProduct loadData={dataSevice} navigation={navigation} noTitle onShow='InterestedScreen' />
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Follow_storeScreen
export class Follow_storeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { cokie, currentUser, dataSevice, navigation } = this.props
        return (
            <ScrollView>
                {
                    dataSevice.store.map((value, index) => {
                        return <Follow_store_Box cokie={cokie} currentUser={currentUser} dataSevice={value} key={index}
                            navigation={navigation} />
                    })
                }
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10, marginLeft: 10, }]}>ร้านค้าที่คุณอาจชอบ</Text>
                {
                    dataSevice.unlike_store.map((value, index) => {
                        return <Might_like_Store cokie={cokie} currentUser={currentUser} dataSevice={value} key={index}
                            navigation={navigation} />
                    })
                }
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Follow_store_Box
export class Follow_store_Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Button_Follow_Before: true,
        };
    }
    getData = (value) => {
        this.setState({ activeGetServices: false })
    }
    render() {
        const { cokie, currentUser, dataSevice, navigation } = this.props
        const { activeGetServices, Button_Follow_Before } = this.state
        const image_store = `${finip}/${dataSevice.store_path}/${dataSevice.image_store}`
        const uri = `${finip}/brand/follow_data`
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            id_store: dataSevice.id_store,
            follow: "active",
        }
        activeGetServices == true &&
            GetServices({
                uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'product_interest',
                getDataSource: this.getData.bind(this),
            })
        return (
            <>
                <View style={stylesProfileTopic.Follow_store_Box}>
                    <TouchableOpacity onPress={() => NavigationNavigateScreen({
                        goScreen: 'StoreScreen', setData: { id_item: dataSevice.id_store }, navigation
                    })}
                        style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesProfileTopic.Follow_store_Box_image}
                            source={{
                                uri: image_store,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataSevice.store_name}</Text>
                            {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>@asusthailand</Text> */}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Follow_store_Button}
                        onPress={() => this.setState({ Button_Follow_Before: !Button_Follow_Before, activeGetServices: true })}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
                            {Button_Follow_Before == true ? 'กำลังติดตาม' : 'ติดตาม'}</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Might_like_Store
export class Might_like_Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: false,
            Button_Follow_After: true,
        };
    }
    getData = (value) => {
        console.log('Might_like_Store')
        console.log(value)
        this.setState({ activeGetServices: false })
    }
    render() {
        const { cokie, currentUser, dataSevice, navigation } = this.props
        const { activeGetServices, Button_Follow_After } = this.state
        const image_store = `${finip}/${dataSevice.store_path}/${dataSevice.image_store}`
        const uri = `${finip}/brand/follow_data`
        var dataBody = {
            id_customer: currentUser && currentUser.id_customer,
            id_store: dataSevice.id_store,
            follow: "active",
        }
        activeGetServices == true &&
            GetServices({
                uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'product_interest',
                getDataSource: this.getData.bind(this),
            })
        return (
            <View>
                <View style={stylesProfileTopic.Might_like_Store}>
                    <View style={stylesProfileTopic.Follow_store_Box}>
                        <TouchableOpacity onPress={() => NavigationNavigateScreen({
                            goScreen: 'StoreScreen', setData: { id_item: dataSevice.id_store }, navigation
                        })}
                            style={{ flexDirection: 'row', }}>
                            <FastImage style={stylesProfileTopic.Follow_store_Box_image}
                                source={{
                                    uri: image_store,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <View style={stylesProfileTopic.Follow_store_Box_text}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>{dataSevice.store_name}</Text>
                                {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>81% คะแนนร้านค้า</Text> */}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ Button_Follow_After: !Button_Follow_After, activeGetServices: true })}>
                            <View style={stylesProfileTopic.Follow_store_Button}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>
                                    {Button_Follow_After == true ? 'ติดตาม' : 'กำลังติดตาม'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal>
                        <View style={stylesProfileTopic.Might_like_Store_Box}>
                            <View style={stylesProfileTopic.Might_like_Store_BoxP}>
                                {
                                    dataSevice.product.map((value, index) => {
                                        const image_product = `${finip}/${value.image_path}/${value.image}`
                                        return (index < 4 &&
                                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                                    source={{
                                                        uri: image_product,
                                                    }}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                />
                                                <Text numberOfLines={1} style={[stylesFont.FontFamilyText, stylesFont.FontSize8, {
                                                    paddingHorizontal: 5
                                                }]}>
                                                    {value.name}</Text>
                                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, {
                                                    color: mainColor, borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5,
                                                    paddingHorizontal: 10, marginBottom: 5
                                                }]}>{value.full_price}</Text>
                                            </View>
                                        )
                                    })
                                }
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
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right', margin: 10, color: '#7E7979' }]}>
                        {dataSevice.product_total} สินค้า</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Review_meScreen
export class Review_meScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { dataSevice, navigation } = this.props
        return (
            <ScrollView>
                {
                    dataSevice.map((value, index) => {
                        return <Review_me dataSevice={value} key={index} navigation={navigation} />
                    })
                }
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Review_me
export class Review_me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    starReview(star, starSize) {
        let starBox = []
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#FFAC33' />
                )
            } else {
                starBox.push(
                    <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
                        starSize ?
                            starSize :
                            20
                    } color='#E9E9E9' />
                )
            }
        }
        return starBox
    }
    render() {
        const { dataSevice, navigation } = this.props
        const image_product = `${finip}/${dataSevice.path_product}/${dataSevice.image_product}`;
        return (
            <View>
                <View style={stylesProfileTopic.Review_me}>
                    <View style={stylesProfileTopic.Review_me_Box}>
                        <View>
                            {/* <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Mlife</Text> */}
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#8F8F8F' }]}>
                                สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: 120, justifyContent: 'space-between' }}>
                            {this.starReview(dataSevice.rating, 20)}
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                            goScreen: 'Profile_Topic', setData: { selectedIndex: 7, id_cartdetail: dataSevice.id_cartdetail }, navigation
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
                                <FastImage style={stylesProfileTopic.Review_me_image}
                                    source={{
                                        uri: image_product,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.product_name}</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.detail}</Text>
                                </View>
                            </View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>จัดส่งสินค้าแล้ว</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Help_meScreen
export class Help_meScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <ScrollView>
                    <Help_me navigation={navigation} />
                    <Question navigation={navigation} />
                    <Topic_Help navigation={navigation} />
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Help_me
export class Help_me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../../icon/bgprofile.jpg')}
                    style={stylesProfileTopic.Help_me_ImageBackground}>
                    <View style={stylesProfileTopic.Help_me_Box_text}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>สวัสดีค่ะ คุณ xxxxxxxxx </Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>
                            คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
                        <View>
                            <View style={{ flexDirection: 'row', width: '85%', paddingLeft: 10, backgroundColor: '#FFFFFF', borderRadius: 5 }}>
                                <TextInput style={{ width: '90%' }}
                                    fontSize={15}
                                    placeholder="กรุณากรอกสิ่งที่ให้เราช่วยเหลือ"
                                    value={this.state.text}
                                    // maxLength={20}
                                    onChangeText={(text) => this.setState({ text })}>
                                </TextInput>
                                <TouchableOpacity>
                                    <IconAntDesign RightItem name="search1" size={20} style={{ margin: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Question
export class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 5 }]}>คำถามยอดฮิต </Text>
                <View style={stylesProfileTopic.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
                </View>
                <View style={stylesProfileTopic.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ช่องทางการเงินมีกี่ประเภท</Text>
                </View>
                <View style={stylesProfileTopic.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ฉันตรวจสอบสินค้าได้อย่างไร</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Topic_Help
export class Topic_Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        const HeadTitle_Help = navigation.getParam('HeadTitle_Help')
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> หัวข้อ </Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={
                        HeadTitle_Help ?
                            HeadTitle_Help == 'บัญชีของฉัน' ?
                                null :
                                () => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'บัญชีของฉัน' }, navigation,
                                    noPush: true
                                }) :
                            () => NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'บัญชีของฉัน' }, navigation,
                            })
                    }>
                        <IconAntDesign RightItem name="user" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>บัญชีของฉัน</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'การคืนสินค้า' ?
                                null :
                                () => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'การคืนสินค้า' }, navigation,
                                    noPush: true
                                }) :
                            () => NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'การคืนสินค้า' }, navigation,
                            })
                    }>
                        <IconAntDesign RightItem name="retweet" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การคืนสินค้า</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'การชำระเงิน' ?
                                null :
                                () => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'การชำระเงิน' }, navigation,
                                    noPush: true
                                }) :
                            () => NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'การชำระเงิน' }, navigation,
                            })
                    }>
                        <IconEntypo RightItem name="credit-card" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การชำระเงิน</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'การสั่งซื้อ' ?
                                null :
                                () => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'การสั่งซื้อ' }, navigation,
                                    noPush: true
                                }) :
                            () => NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'การสั่งซื้อ' }, navigation,
                            })
                    }>
                        <IconAntDesign RightItem name="shoppingcart" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การสั่งซื้อ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'หัวข้ออื่นๆ' ?
                                null :
                                () => NavigationNavigateScreen({
                                    goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'หัวข้ออื่นๆ' }, navigation,
                                    noPush: true
                                }) :
                            () => NavigationNavigateScreen({
                                goScreen: 'Profile_Topic', setData: { selectedIndex: 8, HeadTitle_Help: 'หัวข้ออื่นๆ' }, navigation,
                            })
                    }>
                        <IconAntDesign RightItem name="ellipsis1" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>หัวข้ออื่นๆ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>Account_Help
export class Account_Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        const HeadTitle_Help = navigation.getParam('HeadTitle_Help')
        return (
            <View>
                <View style={stylesProfileTopic.Account_Help}>
                    <View style={stylesProfileTopic.Account_Help_TextInput}>
                        <TextInput style={{ width: '90%' }}
                            fontSize={15}
                            placeholder="กรุณากรอกสิ่งที่ให้เราช่วยเหลือ"
                            value={this.state.text}
                            // maxLength={20}
                            onChangeText={(text) => this.setState({ text })}>
                        </TextInput>
                        <TouchableOpacity>
                            <IconAntDesign RightItem name="search1" size={20} style={{ margin: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}> {HeadTitle_Help} </Text>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help }, navigation
                })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมฉันจึงไม่สามารถเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้ได้?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help }, navigation
                })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมคำขอลบบัญชีของฉันจึงถูกปฏิเสธ?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help }, navigation
                })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ฉันสามารถเปลี่ยนบัญชีผู้ใช้และเปลี่ยนชื่อของร้านค้าได้อย่างไร</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Profile_Topic', setData: { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help }, navigation
                })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมฉันถึงลงชื่อเข้าใช้งานไม่ได้?</Text>
                    </View>
                </TouchableOpacity>
                <Topic_Help navigation={navigation} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>Topic_DetailHelp
export class Topic_DetailHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        const HeadTitle_Help = navigation.getParam('HeadTitle_Help')
        return (
            <View style={stylesMain.SafeAreaView}>
                <ScrollView>
                    <View style={stylesProfileTopic.Account_Help}>
                        <View style={stylesProfileTopic.Account_Help_TextInput}>
                            <TextInput style={{ width: '90%' }}
                                fontSize={15}
                                placeholder="กรุณากรอกสิ่งที่ให้เราช่วยเหลือ"
                                value={this.state.text}
                                // maxLength={20}
                                onChangeText={(text) => this.setState({ text })}>
                            </TextInput>
                            <TouchableOpacity>
                                <IconAntDesign RightItem name="search1" size={20} style={{ margin: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}> {HeadTitle_Help} </Text>
                    <View style={stylesProfileTopic.Topic_DetailHelp_BoxText}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                            ในกรณีที่คุณไม่สามารถเปลี่ยนเบอร์โทรศัพท์ได้ อาจเป็นเพราะเข้าข่ายเหตุผลดังต่อไปนี้:
                            เลขบัตรเครดิต หรือ เลขบัญชีธนาคารที่ลงทะเบียนไว้ ไม่ถูกต้อง
                            ใส่รหัสผ่าน  ไม่ถูกต้อง
                            ใส่วันที่หมดอายุของบัตรเครดิต ไม่ถูกต้อง
                            ใส่เลขบัญชีธนาคาร ไม่ถูกต้อง</Text>
                        <View style={{ height: 80, width: '100%', backgroundColor: '#ECECEC', alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginVertical: 10 }}>
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
                            เพื่อความปลอดภัยของบัญชีผู้ใช้ มีกระบวนการตรวจสอบสำหรับการยืนยันตัวตนเมื่อมีคำร้องขอเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้
                    </Text>
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
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Review_From
export class Review_From extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAuto: true,
            activeGetServices: false,
            checked2: true,
            checked4: true,
            avatarSource: [],
            starmain: 0
        };
    }
    selectStar = (starmain) => {
        this.setState({ starmain })
    }
    starReview(star) {
        let starBox = []
        for (var n = 0; n < 5; n++) {
            if (star > n) {
                starBox.push(
                    <TouchableOpacity activeOpacity={1} key={n} onPress={() => this.selectStar(n + 1)}>
                        <IconFontAwesome name='star' size={40} color='#FFAC33' />
                    </TouchableOpacity>
                )
            } else {
                starBox.push(
                    <TouchableOpacity key={n} activeOpacity={1} onPress={() => this.selectStar(n + 1)}>
                        <IconFontAwesome name='star' size={40} color='#E9E9E9' />
                    </TouchableOpacity>
                )
            }
        }
        return starBox
    }
    UploadImageSingle = (index) => {
        const { avatarSource } = this.state
        const options = {
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response
            this.setState({ avatarSource })
        });
    }
    UploadImageMultiple = () => {
        const { avatarSource } = this.state
        const options = {
            multiple: true,
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 3 && avatarSource.push(item))
            this.setState({ avatarSource })
        });
    }
    setStatus = () => {
        const { dataSevice } = this.props
        this.setState({ activeAuto: false, Review: dataSevice.reviews_detail, starmain: dataSevice.rating })
    }
    UploadReview = () => {
        this.setState({ activeGetServices: true, })
    }
    getData = (value) => {
        this.setState({ activeGetServices: false })
    }
    render() {
        const { cokie, currentUser, dataSevice, navigation } = this.props
        const { activeAuto, activeGetServices, avatarSource, Review, starmain } = this.state
        const id_cartdetail = navigation.getParam('id_cartdetail')
        const image_product = `${finip}/${dataSevice.path_product}/${dataSevice.image_product}`
        const uri = `${finip}/profile/update_review`
        var dataBody = {
            id_customer: currentUser ? currentUser.id_customer : '',
            id_cartdetail,
            comment: Review
        }
        activeAuto == true && this.setStatus()
        activeGetServices == true &&
            GetServices({
                uriPointer: uri, dataBody, Authorization: cokie, showConsole: 'product_interest',
                getDataSource: this.getData.bind(this),
            })
        return (
            <View style={stylesMain.SafeAreaView}>
                <View style={stylesProfileTopic.Review_From}>
                    <IconIonicons name='md-key' size={30} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> คุณภาพสินค้า </Text>
                </View>
                <View style={stylesProfileTopic.Review_From_Boximage}>
                    <View style={stylesProfileTopic.Review_From_image}>
                        <FastImage style={stylesProfileTopic.Review_me_image}
                            source={{
                                uri: image_product,
                            }}
                        />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.product_name}</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{dataSevice.detail}</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Review_From_Star_Box}>
                        {this.starReview(starmain)}
                    </View>
                    <View style={stylesProfileTopic.Review_From_TextInput}>
                        <TextInput
                            style={[stylesFont.FontFamilyText, { margin: 10, width: '95%' }]}
                            fontSize={18}
                            placeholder="ไม่ต้องอาย โปรดมาช่วยรีวิวเรา"
                            multiline
                            editable
                            // maxLength={5000}
                            value={this.state.Review}
                            onChangeText={(Review) => this.setState({ Review })}></TextInput>
                    </View>
                    <View style={{ width: '100%', }}>
                        <View style={{ flexDirection: 'row', }}>
                            <CheckBox
                                checked={this.state.checked1}
                                onPress={() => this.setState({ checked1: !this.state.checked1, checked2: !this.state.checked2 })}
                            />
                            <Text style={[
                                stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#EAEAEA', marginTop: 15, marginLeft: -10 }]}>
                                ไม่ระบุตัวตน</Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderWidth: 1, padding: 10, borderColor: '#EAEAEA' }}>
                            {
                                avatarSource ? [
                                    avatarSource.map((item, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.UploadImageSingle(index)} key={index}>
                                                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                                                    <FastImage
                                                        source={{ uri: item.path }}
                                                        style={[stylesMain.ItemCenterVertical, stylesMain.BoxProduct1Image]}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }),
                                    avatarSource.length < 3 &&
                                    <TouchableOpacity onPress={() => this.UploadImageMultiple()} key={'upload'}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                                            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                                <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ] :
                                    <TouchableOpacity onPress={() => this.UploadImageMultiple()}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                                            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                                <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={[stylesMain.FlexRow, { marginLeft: -10 }]}>
                        <CheckBox
                            checked={this.state.checked3}
                            onPress={() => this.setState({ checked3: !this.state.checked3, checked4: !this.state.checked4 })}
                        />
                        <View style={[stylesMain.FlexRow, { marginTop: 20, marginLeft: -15 }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                                ข้าพเจ้ายอมรับและทราบข้อตกลงตาม </Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#36B680' }]}>
                                นโยบายความเป็นส่วนตัวของ FIN</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <TouchableOpacity onPress={() => this.UploadReview()} style={stylesProfileTopic.Review_From_Buttonshare}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>แชร์รีวิว</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}