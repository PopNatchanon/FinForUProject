import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/StylesProfileScreen'
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './Profile_Topic';
export const { width, height } = Dimensions.get('window');

export default class StoreMeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styleMain.SafeAreaView}>
                <Appbar navigation={this.props.navigation} Title='ตั้งค่าบัญชี' />
                <ScrollView>
                    <View>
                        <ListMenu navigation={this.props.navigation} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



export class ListMenu extends Component {
    constructor(props) {
        super(props);
    }
    logoutPress = async () => {
        try {
            await AsyncStorage.clear()
            RNRestart.Restart();
        } catch (e) {
            // clear error
        }

        // console.log('Done.')
    }
    render() {
        return (
            <View>
                <View style={styles.ListMenuList}>
                    <View style={styleMain.FlexRow}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                            บัญชีของฉัน
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 0 })} >
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                หน้าของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 1 })} >
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                ที่อยู่ของฉัน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6'/>
                    </View>
                </TouchableOpacity>
                <View style={styles.ListMenuList}>
                    <View style={styles.ListMenuListSub}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                            การตั้งค่า
                            </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 2 })} >
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                ตั้งค่าการแชท
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 3 })} >
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                ตั้งค่าการแจ้งเตือน
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_Topic', { selectedIndex: 4 })} >
                    <View style={stylesPro.BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                            ภาษา
                            </Text>

                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6'/>
                    </View>
                </TouchableOpacity>
                <View style={styles.ListMenuList}>
                    <View style={styles.ListMenuListSub}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                            ช่วยเหลือ
                            </Text>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Help_meScreen')} > */}
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                ศูนย์ช่วยเหลือ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6'/>
                    </View>
                {/* </TouchableOpacity> */}
                <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                กฎและข้อบังคับ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={null/*() => this.props.navigation.navigate()*/} >
                    <View style={stylesPro.BoxTopic}>
                        <View style={styles.ListMenuListSub}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 10, }]}>
                                ให้คะแนนเราสิ
                            </Text>
                        </View>
                        <IconEntypo name='chevron-right' style={stylesPro.SettingIcon} size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.logoutPress()}>
                    <View style={stylesPro.Button_Logout} >
                        <View style={stylesPro.Button_LogoutBox}>
                            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3,{color:'#FFFFFF'}]} >ออกจากระบบ</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text>FIN Shopping V 1.0.01</Text>
            </View>

        )
    }
}

