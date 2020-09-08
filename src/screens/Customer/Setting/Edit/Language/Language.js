///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
export const { width, height } = Dimensions.get('window');
import RNFetchBlob from 'rn-fetch-blob';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../../../style/stylesFont';
import stylesLogin from '../../../../../style/stylesLoginScreen';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, GetFetch, } from '../../../../../customComponents';
import { ExitAppModule, } from '../../../../Main/Main';
import { GetData, GetServicesBlob } from '../../../../../customComponents/Tools';
import { Seller_SettingImage } from '../../../../Seller/ProfileEdit/ProfileEdit';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getSource: value => getSource(value), getUser: true, });
    }, [activeGetSource]);
    return <SafeAreaView style={[stylesMain.SafeAreaView]}>
        <Language_Screen {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Language_Screen
export let Language_Screen = (props) => {
    const [settingLanguage, setSettingLanguage] = useState('th');
    return <>
        <AppBar {...props} backArrow titleHead='ภาษา' />
        <ScrollView>
            <View>
                {/* <View style={stylesProfileTopic.BoxTopic}>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={settingLanguage == 'en'} onPress={() => setSettingLanguage('en')} />
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>English</Text>
      </View>
    </View> */}
                <View style={stylesProfileTopic.BoxTopic}>
                    <View style={stylesMain.FlexRow}>
                        <CheckBox checked={settingLanguage == 'th'} onPress={() => setSettingLanguage('th')} />
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10, }]}>ไทย</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity>
            <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึกการเปลี่ยนแปลง</Text>
            </View>
        </TouchableOpacity>
    </>;
};