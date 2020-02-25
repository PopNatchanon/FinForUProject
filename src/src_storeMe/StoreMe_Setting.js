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
    requireNativeComponent,
} from 'react-native';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesStoreMe from '../../style/stylestoreMe-src/styleStoreMeScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import { AppBar1 } from '../MainScreen';

export const { width, height } = Dimensions.get('window');

export default class StoreMe_Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='ตั้งค่าร้านค้า' />
                <StoreMe_Setting_Topic navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

///------------------------------------------------------------------------------/// 

export class StoreMe_Setting_Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>บัญชีร้านของฉัน</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMe_Profile_Edit')}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>หน้าร้านของฉัน</Text>

                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 0 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เอกสารการจดแจ้ง</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_TopicStore', { selectedIndex: 9 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ที่อยู่ร้านค้าของฉัน</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>การตั้งค่า</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 2 })} >
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ตั้งค่าการแชท</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 3 })} >
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ตั้งค่าการแจ้งเตือน</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 4 })} >
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ภาษา</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                </TouchableOpacity>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ช่วยเหลือ</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Topic', { selectedIndex: 5 })} >
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ศูนย์ช่วยเหลือ</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                </TouchableOpacity>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>กฎและข้อบังคับ</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ให้คะแนนเราสิ</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.logoutPress()}>
                        <View style={stylesProfileTopic.Button_Logout} >
                            <View style={stylesProfileTopic.Button_LogoutBox}>
                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]} >ออกจากระบบ</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginTop: 5 }]}>FIN Shopping V 1.0.01</Text>
                </View>
            </View>
        );
    }
}
