///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { PopularProduct } from '../StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Profile_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    PathList() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ดูล่าสุด' />
                        <LatestScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 1:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แชท' />
                        <ChatScreen navigation={this.props.navigation} />
                    </SafeAreaView>)
            case 2:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='สิ่งที่สนใจ' />
                        <InterestedScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 3:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ร้านที่ติดตาม' />
                        <Follow_storeScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 4:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='รีวิวของฉัน' />
                        <Review_meScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 5:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='Fin Helpcenter' />
                        <Help_meScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 6:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppbarChat navigation={this.props.navigation} Title='Supreme Store' />
                        <Chat_Detail navigation={this.props.navigation} />
                        <View style={stylesProfileTopic.Chat_Box}>
                            <View style={stylesProfileTopic.Chat_Box_TextInput} >
                                <TextInput
                                    style={{ width: '90%', padding: 10 }}
                                    fontSize={15}
                                    placeholder="่ส่งข้อความ"
                                    multiline
                                    editable
                                    maxLength={2000}
                                    value={this.state.Detail}
                                    onChangeText={(Detail) => this.setState({ Detail })}
                                />
                                <TouchableOpacity>
                                    <IconAntDesign RightItem name='smileo' size={25} color='#0A55A6' style={{ marginRight: 10, marginBottom: 10 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'flex-end', marginLeft: 10, }}>
                                <TouchableOpacity>
                                    <IconFeather name='send' size={30} color='#0A55A6' style={{ margin: 10, }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                )
            case 7:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='รีวิวของฉัน' />
                        <Review_From />
                    </SafeAreaView>
                )
            case 8:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='Fin Helpcenter' />
                        <ScrollView>
                            <Account_Help navigation={this.props.navigation} />
                        </ScrollView>
                    </SafeAreaView>
                )
            case 9:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='Fin Helpcenter' />
                        <Topic_DetailHelp navigation={this.props.navigation} />
                    </SafeAreaView>
                )
        }
    }
    render() {
        return (
            <View style={stylesMain.SafeAreaView}>
                {this.PathList()}
                <ExitAppModule navigation={this.props.navigation} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> LatestScreen
export class LatestScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <PopularProduct navigation={this.props.navigation} noHeadText />
            </ScrollView>
        );
    }
}

///----------------------------------------------------------------------------------------------->>>> AppbarChat
export class AppbarChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { Title } = this.props
        return (
            <View style={stylesProfileTopic.AppbarChat} >
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
                </TouchableOpacity>
                <View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 5 }]}>{Title ? Title : ''}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#ADADAD' }]}>ใช้งานล่าสุดเมือ 5นาที ที่แล้ว</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> ChatScreen
export class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.push('Profile_Topic', { selectedIndex: 6 })} >
                    <Chat_Tag />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Profile_Topic', { selectedIndex: 6 })} >
                    <Chat_Tag />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Chat_Detail
export class Chat_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesProfileTopic.Chat_Detail}>
                <Message_recipient />
                <Message_sender />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Message_recipient
export class Message_recipient extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[stylesMain.FlexRow, { marginTop: 10 }]}>
                <FastImage style={stylesProfileTopic.Message_BoxProfile}
                    source={{
                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                    }}
                />
                <View style={[stylesProfileTopic.Message_Box, { marginLeft: 10, }]}>
                    <Text style={stylesFont.FontFamilyText}>สวัสดีครับ
                    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555566666666666666666666666666666666666666666666666666666666666666666666666666666</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Message_sender
export class Message_sender extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                <FastImage style={stylesProfileTopic.Message_BoxProfile}
                    source={{
                        uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop2.jpg',
                    }}
                />
                <View style={[stylesProfileTopic.Message_Box, { marginRight: 10 }]}>
                    <Text style={stylesFont.FontFamilyText}>สวัสดีค่ะ</Text></View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Chat_Box
export class Chat_Tag extends Component {
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
                        <View>
                            <FastImage style={stylesProfileTopic.Chat_Tag_image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
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
export class InterestedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <PopularProduct navigation={this.props.navigation} noHeadText />
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Follow_storeScreen
export class Follow_storeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <Follow_store_Box />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10, marginLeft: 10, }]}>ร้านค้าที่คุณอาจชอบ</Text>
                <Might_like_Store />
                <Might_like_Store />
                <Might_like_Store />
                <Might_like_Store />
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Follow_store_Box
export class Follow_store_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesProfileTopic.Follow_store_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesProfileTopic.Follow_store_Box_image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Asus_Thailand</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>@asusthailand</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
                    </View>
                </View>
                <View style={stylesProfileTopic.Follow_store_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesProfileTopic.Follow_store_Box_image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Mlife</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>@mlife</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
                    </View>
                </View>
                <View style={stylesProfileTopic.Follow_store_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesProfileTopic.Follow_store_Box_image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesProfileTopic.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Digilife</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>@digilife_thai</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Might_like_Store
export class Might_like_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesProfileTopic.Might_like_Store}>
                    <View style={stylesProfileTopic.Follow_store_Box}>
                        <View style={{ flexDirection: 'row', }}>
                            <FastImage style={stylesProfileTopic.Follow_store_Box_image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <View style={stylesProfileTopic.Follow_store_Box_text}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ppooo</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>81% คะแนนร้านค้า</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={stylesProfileTopic.Follow_store_Button}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ติดตาม</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesProfileTopic.Might_like_Store_Box}>
                        <View style={stylesProfileTopic.Might_like_Store_BoxP}>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
                            </View>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
                            </View>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
                            </View>
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
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Review_meScreen
export class Review_meScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10, }]}>ล่าสุด</Text>
                <Review_me navigation={this.props.navigation} />
                <Review_me navigation={this.props.navigation} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10, }]}>เก่ากว่า</Text>
                <Review_me navigation={this.props.navigation} />
                <Review_me navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Review_me
export class Review_me extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesProfileTopic.Review_me}>
                    <View style={stylesProfileTopic.Review_me_Box}>
                        <View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Mlife</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#8F8F8F' }]}>
                                สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Profile_Topic', {
                            selectedIndex: 7
                        })}>
                            <View style={stylesProfileTopic.Review_me_Box_head}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>รีวิว</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesProfileTopic.Review_me_Box_image}>
                        <View style={stylesProfileTopic.Review_me_Box_imageA}>
                            <View style={{ flexDirection: 'row', }}>
                                <FastImage style={stylesProfileTopic.Review_me_image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                                    }}
                                />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กระเป๋าxxxxxxxx</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>สี : น้ำตาล</Text>
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
export class Help_meScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Help_me navigation={this.props.navigation} />
                    <Question navigation={this.props.navigation} />
                    <Topic_Help navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Help_me
export class Help_me extends Component {
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
                        <View style={stylesProfileTopic.Help_me_Textinput}>
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
export class Question extends Component {
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
export class Topic_Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const HeadTitle_Help = this.props.navigation.getParam('HeadTitle_Help')
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> หัวข้อ </Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'บัญชีของฉัน' ?
                                null :
                                this.props.navigation.replace('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'บัญชีของฉัน' }) :
                            this.props.navigation.push('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'บัญชีของฉัน' })
                    }>
                        <IconAntDesign RightItem name="user" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>บัญชีของฉัน</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'การคืนสินค้า' ?
                                null :
                                this.props.navigation.replace('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'การคืนสินค้า' }) :
                            this.props.navigation.push('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'การคืนสินค้า' })
                    }>
                        <IconAntDesign RightItem name="retweet" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การคืนสินค้า</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'การชำระเงิน' ?
                                null :
                                this.props.navigation.replace('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'การชำระเงิน' }) :
                            this.props.navigation.push('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'การชำระเงิน' })
                    }>
                        <IconEntypo RightItem name="credit-card" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การชำระเงิน</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'การสั่งซื้อ' ?
                                null :
                                this.props.navigation.replace('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'การสั่งซื้อ' }) :
                            this.props.navigation.push('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'การสั่งซื้อ' })
                    }>
                        <IconAntDesign RightItem name="shoppingcart" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การสั่งซื้อ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfileTopic.Topic_Box} onPress={() =>
                        HeadTitle_Help ?
                            HeadTitle_Help == 'หัวข้ออื่นๆ' ?
                                null :
                                this.props.navigation.replace('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'หัวข้ออื่นๆ' }) :
                            this.props.navigation.push('Profile_Topic', { selectedIndex: 8, HeadTitle_Help: 'หัวข้ออื่นๆ' })
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

export class Account_Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const HeadTitle_Help = this.props.navigation.getParam('HeadTitle_Help')
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
                <TouchableOpacity onPress={() => this.props.navigation.push('Profile_Topic', { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมฉันจึงไม่สามารถเปลี่ยนเบอร์โทรศัพท์ที่ลงทะเบียนไว้ได้?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Profile_Topic', { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมคำขอลบบัญชีของฉันจึงถูกปฏิเสธ?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Profile_Topic', { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ฉันสามารถเปลี่ยนบัญชีผู้ใช้และเปลี่ยนชื่อของร้านค้าได้อย่างไร</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Profile_Topic', { selectedIndex: 9, HeadTitle_Help: HeadTitle_Help })}>
                    <View style={stylesProfileTopic.Question_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 5 }]}>ทำไมฉันถึงลงชื่อเข้าใช้งานไม่ได้?</Text>
                    </View>
                </TouchableOpacity>
                <Topic_Help navigation={this.props.navigation} />
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>>Topic_DetailHelp

export class Topic_DetailHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const HeadTitle_Help = this.props.navigation.getParam('HeadTitle_Help')
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
export class Review_From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked2: true,
        };
    }
    render() {
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
                                uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                            }}
                        />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>กระเป๋าxxxxxxxx</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>สี : น้ำตาล</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Review_From_Star_Box}>
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
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
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
                            />
                            <Text style={[
                                stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#EAEAEA', marginTop: 15, marginLeft: -10 }]}>
                                ไม่ระบุตัวตน</Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <View style={stylesProfileTopic.Review_From_UpImage}>
                                    <IconAntDesign RightItem name='camerao' size={35} color='#CACACA' />
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#CACACA' }]}>
                                        อัพโหลดรูปภาพ(0/3)</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox
                            checked={this.state.checked1}
                            onPress={() => this.setState({ checked1: !this.state.checked, checked2: !this.state.checked2 })}
                        />
                        <View style={[stylesMain.FlexRow, { marginTop: 15, }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ข้าพเจ้ายอมรับและทราบข้อตกลงตาม </Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#36B680' }]}>
                                นโยบายความเป็นส่วนตัวของ FIN</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <TouchableOpacity style={stylesProfileTopic.Review_From_Buttonshare}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>แชร์รีวิว</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
