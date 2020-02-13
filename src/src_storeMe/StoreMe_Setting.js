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
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import { Appbar } from '../src_profile/Profile_Topic';

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
                <Appbar navigation={this.props.navigation} Title='ตั้งค่าร้านค้า' />
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
                <View style={[styles.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>บัญชีร้านของฉัน</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StoreMeScreen')}>
                    <View style={styles.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>หน้าร้านของฉัน</Text>

                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 0 })} >
                    <View style={styles.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เอกสารการจดแจ้ง</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting_TopicStore', { selectedIndex: 9 })} >
                    <View style={styles.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ที่อยู่ร้านค้าของฉัน</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={[styles.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>การตั้งค่า</Text>
                </View>
                <View style={styles.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ตั้งค่าการแชท</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ตั้งค่าการแจ้งเตือน</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ภาษา</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={[styles.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>ช่วยเหลือ</Text>
                </View>
                <View style={styles.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ศูนย์ช่วยเหลือ</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>กฎและข้อบังคับ</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Setting_BoxTopic}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ให้คะแนนเราสิ</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: 400, height: 50, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 10, }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>
                                ออกจากระบบ
                    </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginTop: 10 }]}>FIN Shopping V 1.0.01</Text>
                </View>
            </View>
        );
    }
}
