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
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { PopularProduct } from '../StoreScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
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
                        <Appbar navigation={this.props.navigation} />
                        <LatestScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 1:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <Appbar navigation={this.props.navigation} Title='แชท' />
                        <ChatScreen navigation={this.props.navigation} />
                    </SafeAreaView>)
            case 2:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <Appbar navigation={this.props.navigation} Title='สิ่งที่สนใจ' />
                        <InterestedScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 3:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <Appbar navigation={this.props.navigation} Title='ร้านที่ติดตาม' />
                        <Follow_storeScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 4:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <Appbar navigation={this.props.navigation} Title='รีวิวของฉัน' />
                        <Review_meScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 5:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <Appbar navigation={this.props.navigation} Title='Fin Helpcenter' />
                        <Help_meScreen navigation={this.props.navigation} />
                    </SafeAreaView>
                )
            case 6:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <AppbarChat navigation={this.props.navigation} Title='Supreme Store' />
                        <Chat_Detail navigation={this.props.navigation} />
                        <View style={{ width: '100%', maxHeight: 150, backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderWidth: 1, flexDirection: 'row', justifyContent: 'center', paddingVertical: 5, }}>
                            <View style={{ width: '80%', borderColor: '#ECECEC', borderWidth: 1, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }}>
                                <TextInput
                                    style={{ width: '85%', padding: 10 }}
                                    fontSize={15}
                                    placeholder="่ส่งข้อความ"
                                    multiline
                                    editable
                                    maxLength={2000}
                                    value={this.state.Detail}
                                    onChangeText={(Detail) => this.setState({ Detail })}
                                />
                                <IconAntDesign RightItem name='smileo' size={25} color='#0A55A6' style={{ margin: 10, }} />
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
                        <Appbar navigation={this.props.navigation} Title='รีวิวของฉัน' />
                        <Review_From />
                    </SafeAreaView>
                )
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>{this.PathList()}</View>
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
///----------------------------------------------------------------------------------------------->>>> Appbar
export class Appbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { Title } = this.props
        return (
            <View style={stylesProfileTopic.Appbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
                </TouchableOpacity>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 5 }]}>{Title ? Title : 'ดูล่าสุด'}</Text>
            </View>
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
            <View style={stylesProfileTopic.Appbar}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
                </TouchableOpacity>
                <View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginTop: 5 }]}>{Title ? Title : 'ดูล่าสุด'}</Text>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 6 })}>
                    <Chat_Box />
                </TouchableOpacity>
                <Chat_Box />
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
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', marginTop: 5, padding: 10 }}>
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
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ width: 50, height: 50, borderRadius: 25, borderColor: '#111111', borderWidth: 1, }}></View>
                <View style={{ borderColor: '#0A55A6', borderWidth: 1, maxWidth: '70%', marginLeft: 10, borderRadius: 5, padding: 10 }}>
                    <Text style={stylesFont.FontFamilyText}>สวัสดีครับ
                    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555</Text>
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
                <View style={{ borderColor: '#111111', borderWidth: 1, width: 50, height: 50, borderRadius: 25, }}></View>
                <View style={{ borderColor: '#0A55A6', borderWidth: 1, maxWidth: '60%', margin: 10, borderRadius: 5, padding: 10 }}>
                    <Text style={stylesFont.FontFamilyText}>สวัสดีค่ะ</Text></View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Chat_Box
export class Chat_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <View style={stylesProfileTopic.Chat_Box}>
                    <View style={stylesMain.FlexRow}>
                        <View>
                            <FastImage style={stylesProfileTopic.Chat_Box_image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <View style={{ height: 20, width: 70, alignItems: 'flex-end', marginTop: -20 }}>
                                <View style={{ height: 15, width: 15, backgroundColor: '#1BE72F', borderRadius: 10, }}></View>
                            </View>
                        </View>
                        <View style={stylesProfileTopic.Chat_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ppooooo</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>สินค้าได้ถูกขายแล้วค่ะ</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Chat_Box_icon}>
                        <IconFontAwesome5 name='bell' size={25} />
                        <IconFontAwesome style={stylesProfileTopic.Chat_icon} name='trash-o' size={25} />
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
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10, marginLeft: 10, }]}>ร้านค้าที่คุณอาจชอบ</Text>
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
                        <View style={stylesProfileTopic.Follow_store_Button}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ติดตาม</Text>
                        </View>
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
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                                    <IconEntypo name='chevron-right' size={35} />
                                </View>
                                <Text style={stylesFont.FontFamilyBold}>ดูทั้งหมด</Text>
                            </View>
                        </View>
                    </View>
                </View>
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
                        <View style={stylesProfileTopic.Follow_store_Button}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ติดตาม</Text>
                        </View>
                    </View>
                    <View style={stylesProfileTopic.Might_like_Store_Box}>
                        <View style={stylesProfileTopic.Might_like_Store_BoxP}>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <FastImage style={stylesProfileTopic.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8]}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize8, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                            <View style={stylesProfileTopic.Might_like_Store_BoxPro}>
                                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                                    <IconEntypo name='chevron-right' size={35} />
                                </View>
                                <Text style={stylesFont.FontFamilyBold}>ดูทั้งหมด</Text>
                            </View>
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
                <Help_me />
                <Question />
                <Topic />
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
                            <TextInput style={stylesProfileTopic.TextInput, stylesFont.FontFamilyText, {
                                fontSize: 15,
                            }}
                                placeholder="กรุณากรอกสิ่งที่ให้เราช่วยเหลือ"
                                value={this.state.text}
                                onChangeText={(text) => this.setState({ text })}></TextInput>
                            <IconAntDesign RightItem name="search1" size={25} style={{ marginLeft: 15, }} /></View>
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
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> คำถามยอดฮิต </Text>
                <View style={stylesProfileTopic.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
                </View>
                <View style={stylesProfileTopic.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ช่องทางการเงินมีกี่ประเภท</Text>
                </View>
                <View style={stylesProfileTopic.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}> ฉันตรวจสอบสินค้าได้อย่างไร</Text>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Topic
export class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={stylesProfileTopic.Topic}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> หัวข้อ </Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={stylesProfileTopic.Topic_Box}>
                        <IconAntDesign RightItem name="user" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>บัญชีของฉัน</Text>
                    </View>
                    <View style={stylesProfileTopic.Topic_Box}>
                        <IconAntDesign RightItem name="retweet" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การคืนสินค้า</Text>
                    </View>
                    <View style={stylesProfileTopic.Topic_Box}>
                        <IconEntypo RightItem name="credit-card" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การชำระเงิน</Text>
                    </View>
                    <View style={stylesProfileTopic.Topic_Box}>
                        <IconAntDesign RightItem name="shoppingcart" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>การสั่งซื้อ</Text>
                    </View>
                    <View style={stylesProfileTopic.Topic_Box}>
                        <IconAntDesign RightItem name="ellipsis1" size={30} style={stylesProfileTopic.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>หัวข้ออื่นๆ</Text>
                    </View>
                </View>

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
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#FFFFFF', marginTop: 10 }}>
                    <IconIonicons name='md-key' size={30} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}> คุณภาพสินค้า </Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', padding: 10, alignItems: 'center', }}>
                    <View style={{ backgroundColor: '#F4F4F4', padding: 10, flexDirection: 'row', width: '100%' }}>
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
                    <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-around', marginVertical: 10, }}>
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                        <IconFontAwesome name='star' size={35} color='#FFAC33' />
                    </View>
                    <View style={{ backgroundColor: '#F4F4F4', marginTop: 10, height: 150, width: '100%' }}>
                        <TextInput
                            style={[stylesFont.FontFamilyText, { margin: 10, }]}
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
                                <View style={{
                                    height: 50, width: 150, borderColor: '#CACACA', borderWidth: 1, flexDirection: 'row',
                                    alignItems: 'center', justifyContent: 'center', borderRadius: 5,
                                }}>
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
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#0A55A6', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',
                        }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>แชร์รีวิว</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
