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
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppbarChat {...props} Title='Supreme Store' />
        <Chat_Cutomer />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
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