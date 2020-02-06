import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import axios from 'axios';
import IconsFeather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { PopularProduct } from '../StoreScreen';
import { ip } from '../../navigator/IpConfig';

export const { width, height } = Dimensions.get('window');

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
                            <View style={{ width: 350, borderColor: '#ECECEC', borderWidth: 1, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }} >
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
                                    <IconsFeather name='send' size={30} color='#0A55A6' style={{ margin: 10, }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </SafeAreaView>
                )
            case 7:
                return (
                    <SafeAreaView style={stylesMain.SafeAreaView}>
                        <Appbar navigation={this.props.navigation} Title='รีวิวของฉัน' />
                        <Review_From/>
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

///----------------------------------LatestScreen----------------------------------------///

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

///----------------------------------Appbar----------------------------------------///

export class Appbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { Title } = this.props
        return (
            <View style={stylesPro.Appbar} >
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
                </TouchableOpacity>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginTop: 5 }]}>{Title ? Title : 'ดูล่าสุด'}</Text>
            </View>
        );
    }
}
///----------------------------------Appbar----------------------------------------///

export class AppbarChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { Title } = this.props
        return (
            <View style={stylesPro.Appbar} >
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
                </TouchableOpacity>
                <View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { marginTop: 5 }]}>{Title ? Title : 'ดูล่าสุด'}</Text>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#ADADAD' }]}>ใช้งานล่าสุดเมือ 5นาที ที่แล้ว</Text>
                </View>

            </View>
        );
    }
}

///--------------------------------------ChatScreen---------------------------------------///

export class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 6 })} >
                    <Chat_Box />
                </TouchableOpacity>
                <Chat_Box />
            </ScrollView>

        );
    }
}

///------------------------------------------------------------------------------///

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
///--------------------------------------Message recipient----------------------------------------///

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
                    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555</Text></View>
            </View>
        );
    }
}


///--------------------------------------Message sender----------------------------------------///

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





///------------------------------------------------------------------------------///


export class Chat_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={stylesPro.Chat_Box}>
                    <View style={stylesMain.FlexRow}>
                        <View>
                            <FastImage style={stylesPro.Chat_Box_image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <View style={{ height: 20, width: 70, alignItems: 'flex-end', marginTop: -20 }}>
                                <View style={{ height: 15, width: 15, backgroundColor: '#1BE72F', borderRadius: 10, }}></View>
                            </View>
                        </View>
                        <View style={stylesPro.Chat_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ppooooo</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>สินค้าได้ถูกขายแล้วค่ะ</Text>
                        </View>
                    </View>

                    <View style={stylesPro.Chat_Box_icon}>
                        <Icons name='bell' size={25} />
                        <IconFontAwesome style={stylesPro.Chat_icon} name='trash-o' size={25} />
                    </View>
                </View>
            </View>

        );
    }
}

///----------------------------------InterestedScreen--------------------------------------------///

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

///----------------------------------Follow_storeScreen-------------------------------------------///

export class Follow_storeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView >
                <Follow_store_Box />
                <Might_like_Store />
            </ScrollView>
        );
    }
}

///-----------------------------------------------------------------------------///


export class Follow_store_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={stylesPro.Follow_store_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesPro.Follow_store_Box_image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesPro.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>Asus_Thailand</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>@asusthailand</Text>
                        </View>
                    </View>
                    <View style={stylesPro.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
                    </View>
                </View>
                <View style={stylesPro.Follow_store_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesPro.Follow_store_Box_image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesPro.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>Mlife</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>@mlife</Text>
                        </View>
                    </View>
                    <View style={stylesPro.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
                    </View>
                </View>
                <View style={stylesPro.Follow_store_Box}>
                    <View style={{ flexDirection: 'row', }}>
                        <FastImage style={stylesPro.Follow_store_Box_image}
                            source={{
                                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                            }}
                        />
                        <View style={stylesPro.Follow_store_Box_text}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>Digilife</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>@digilife_thai</Text>
                        </View>
                    </View>
                    <View style={stylesPro.Follow_store_Button}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
                    </View>
                </View>
            </View>
        );
    }
}

///-----------------------------------------------------------------------------///

export class Might_like_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginTop: 10, marginLeft: 10, }]}>ร้านค้าที่คุณอาจชอบ</Text>
                <View style={stylesPro.Might_like_Store}>
                    <View style={stylesPro.Follow_store_Box}>
                        <View style={{ flexDirection: 'row', }}>
                            <FastImage style={stylesPro.Follow_store_Box_image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <View style={stylesPro.Follow_store_Box_text}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ppooo</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>81% คะแนนร้านค้า</Text>
                            </View>
                        </View>
                        <View style={stylesPro.Follow_store_Button}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>ติดตาม</Text>
                        </View>
                    </View>

                    <View style={stylesPro.Might_like_Store_Box}>
                        <View style={stylesPro.Might_like_Store_BoxP}>
                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
                            </View>

                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
                            </View>
                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
                            </View>

                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                                    <IconEntypo name='chevron-right' size={35} />
                                </View>
                                <Text style={stylesFont.FontFamilyBold}>ดูทั้งหมด</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesPro.Might_like_Store}>
                    <View style={stylesPro.Follow_store_Box}>
                        <View style={{ flexDirection: 'row', }}>
                            <FastImage style={stylesPro.Follow_store_Box_image}
                                source={{
                                    uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                                }}
                            />
                            <View style={stylesPro.Follow_store_Box_text}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>ppooo</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>81% คะแนนร้านค้า</Text>
                            </View>
                        </View>
                        <View style={stylesPro.Follow_store_Button}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>ติดตาม</Text>
                        </View>
                    </View>

                    <View style={stylesPro.Might_like_Store_Box}>
                        <View style={stylesPro.Might_like_Store_BoxP}>
                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>

                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>
                            <View style={stylesPro.Might_like_Store_BoxPro}>
                                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                                    }}
                                />
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ห้องพัก Deluxe Pool Villa</Text>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>฿3,xxx</Text>
                            </View>

                            <View style={stylesPro.Might_like_Store_BoxPro}>
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

///------------------------------------------------------------------------------///

export class Review_meScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginLeft: 10, }]}>ล่าสุด</Text>
                <Review_me navigation={this.props.navigation}/>
                <Review_me navigation={this.props.navigation}/>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginLeft: 10, }]}>เก่ากว่า</Text>
                <Review_me navigation={this.props.navigation}/>
                <Review_me navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

///------------------------------------------------------------------------------///

export class Review_me extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={stylesPro.Review_me}>
                    <View style={stylesPro.Review_me_Box}>
                        <View>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>Mlife</Text>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#8F8F8F' }]}>สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
                        </View>
                        <View style={stylesPro.Review_me_Box_head}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>รีวิว</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 7 })} >
                            <View style={stylesPro.Review_me_Box_head}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#FFFFFF' }]}>รีวิว</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesPro.Review_me_Box_image}>
                        <View style={stylesPro.Review_me_Box_imageA}>
                            <View style={{ flexDirection: 'row', }}>
                                <FastImage style={stylesPro.Review_me_image}
                                    source={{
                                        uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                                    }}
                                />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>กระเป๋าxxxxxxxx</Text>
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>สี : น้ำตาล</Text>
                                </View>
                            </View>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>จัดส่งสินค้าแล้ว</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///-----------------------------------------------------------------------------///

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

///-----------------------------------------------------------------------------///

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
                    style={stylesPro.Help_me_ImageBackground}>
                    <View style={stylesPro.Help_me_Box_text}>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#FFFFFF' }]}>สวัสดีค่ะ คุณ xxxxxxxxx </Text>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#FFFFFF' }]}>คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
                        <View style={stylesPro.Help_me_Textinput}>
                            <TextInput style={stylesPro.TextInput, stylesFont.FontFamilyText, {
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

///-----------------------------------------------------------------------------///


export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}> คำถามยอดฮิต </Text>
                <View style={stylesPro.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
                </View>
                <View style={stylesPro.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> ช่องทางการเงินมีกี่ประเภท</Text>
                </View>
                <View style={stylesPro.Question_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}> ฉันตรวจสอบสินค้าได้อย่างไร</Text>
                </View>
            </View>
        );
    }
}

///-----------------------------------------------------------------------------///


export class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={stylesPro.Topic}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}> หัวข้อ </Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={stylesPro.Topic_Box}>
                        <IconAntDesign RightItem name="user" size={30} style={stylesPro.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>บัญชีของฉัน</Text>
                    </View>
                    <View style={stylesPro.Topic_Box}>
                        <IconAntDesign RightItem name="retweet" size={30} style={stylesPro.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>การคืนสินค้า</Text>
                    </View>
                    <View style={stylesPro.Topic_Box}>
                        <IconEntypo RightItem name="credit-card" size={30} style={stylesPro.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>การชำระเงิน</Text>
                    </View>
                    <View style={stylesPro.Topic_Box}>
                        <IconAntDesign RightItem name="shoppingcart" size={30} style={stylesPro.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>การสั่งซื้อ</Text>
                    </View>
                    <View style={stylesPro.Topic_Box}>
                        <IconAntDesign RightItem name="ellipsis1" size={30} style={stylesPro.Topic_Box_icon} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>หัวข้ออื่นๆ</Text>
                    </View>
                </View>

            </View>
        );
    }
}

///-----------------------------------------------------------------------------///

export class Review_From extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> คุณภาพสินค้า </Text>
            </View>
        );
    }
}
