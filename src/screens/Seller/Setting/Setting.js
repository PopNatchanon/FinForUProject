import React, { useState } from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
export const { height, width } = Dimensions.get('window');
import RNRestart from 'react-native-restart';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize5, FontSize7, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews, } = stylesMain;
const { Seller_Setting_BoxTopic } = stylesSeller;
const { Button_Logout, Button_LogoutBox } = stylesProfileTopic;
const Navi = (naviProps) => NavigationNavigate(naviProps);
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
function Setting(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ตั้งค่าร้านค้า' />
        <Seller_Setting_Topic {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------/// 
export const Seller_Setting_Topic = (props) => {
    const [show, setShow] = useState(false);
    const handle = (value) => setShow(value);
    const ListItem = [{
        name: 'บัญชีร้านของฉัน',
        subItem: [{
            name: 'หน้าร้านของฉัน',
            setNavi: { goScreen: 'Seller_ProfileEdit', },
        }, {
            name: 'เอกสารการจดแจ้ง',
            setNavi: { goScreen: 'Seller_Setting_Edit_Document', },
        }, {
            name: 'ที่อยู่ร้านค้าของฉัน',
            setNavi: { goScreen: 'Seller_Setting_Address', },
        }],
    }, {
        name: 'การตั้งค่า',
        subItem: [{
            name: 'ตั้งค่าการแชท',
            setNavi: { goScreen: 'Customer_Setting_Edit_Chat', },
        }, {
            name: 'ตั้งค่าการแจ้งเตือน',
            setNavi: { goScreen: 'Customer_Setting_Edit_Notification', },
        }, {
            name: 'ภาษา',
            setNavi: { goScreen: 'Customer_Setting_Edit_Language', },
        }],
    }, {
        name: 'ช่วยเหลือ',
        subItem: [{
            name: 'ศูนย์ช่วยเหลือ',
            setNavi: { goScreen: 'Customer_Topic_Help', },
        }, {
            name: 'กฎและข้อบังคับ',
            setNavi: { goScreen: 'Seller_Setting', }, // ยังไม่มีเส้นทาง
        }, {
            name: 'ให้คะแนนเราสิ',
            setNavi: { goScreen: 'Seller_Setting', }, // ยังไม่มีเส้นทาง
        }],
    }];
    const ListProps = { ...props, ListItem };
    const logoutPress = async () => {
        try {
            handle(false);
            await AsyncStorage.clear();
            RNRestart.Restart();
        } catch (e) { };
    };
    const _renderHeader = <IconMaterialIcons name='exit-to-app' size={50} color='white' />;
    return <ScrollView>
        <SettingList {...ListProps} />
        <TouchableOpacity onPress={() => handle(true)} style={{ marginTop: 10 }}>
            <View style={Button_Logout}>
                <View style={Button_LogoutBox}>
                    <Text style={[FontFamilyText, FontSize5, { color: '#FFFFFF' }]}>ออกจากระบบ</Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={[FontFamilyText, FontSize7, { marginTop: 5 }]}>FIN Shopping V 1.0.01</Text>
        </View>
        <SCLAlert headerIconComponent={_renderHeader} onRequestClose={() => null} show={show} subtitle="คุณต้องการออกจากระบบหรือไม่?"
            subtitleStyle={FontFamilyText} theme="danger" title="ออกจากระบบ" titleStyle={[FontFamilyBold, FontSize2]}>
            <View style={[FlexRow, ItemCenter, { justifyContent: 'space-around' }]}>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => handle(false)}
                    textStyle={FontFamilyText} theme="default">ไม่</SCLAlertButton>
                <SCLAlertButton containerStyle={{ padding: 10, paddingHorizontal: 40 }} onPress={() => logoutPress()}
                    textStyle={FontFamilyText} theme="danger">ใช่</SCLAlertButton>
            </View>
        </SCLAlert>
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const SettingList = (props) => {
    const { ListItem } = props;
    return <View>
        {ListItem.map((v, i) => <View key={i}>
            {v.name && <View style={[Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                <Text style={[FontFamilyBold, FontSize5, { margin: 5 }]}>{v.name}</Text>
            </View>}
            {v.subItem?.map((v2, i2) => <TouchableOpacity key={i2} onPress={() => Navi({ ...props, ...v2.setNavi })}>
                <View style={[ItemCenter, Seller_Setting_BoxTopic, { borderColor: '#EAEAEA', borderWidth: 1 }]}>
                    <View style={{ width: width * 0.85 }}>
                        <Text style={[FontFamilyText, FontSize5, { margin: 5 }]}>{v2.name}</Text>
                    </View>
                    <IconEntypo color={mainColor} name='chevron-right' size={35} />
                </View>
            </TouchableOpacity>)}
        </View>)}
    </View>;
}