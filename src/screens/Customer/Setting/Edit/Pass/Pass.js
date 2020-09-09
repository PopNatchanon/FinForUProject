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
    <Edit_Pass {...props} activeGetSource={activeGetSource} cokie={cokie} currentUser={currentUser} />
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Edit_Pass
export let Edit_Pass = (props) => {
  const { activeGetSource, cokie, currentUser, navigation, } = props;
  const [activeGetServices, setActiveGetServices] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [dataSevice, setDataSevice] = useState(undefined);
  const [newPassword, setNewPassword] = useState('');
  const uri = `${finip}/profile/change_customer_password`;
  var dataBody = {
    /*current_password*/confirmPassword, currentPassword,/*id_customer*/id_customer: currentUser?.id_customer ?? '',
    /*new_password*/newPassword,
  };
  !activeGetSource && activeGetServices &&
    GetFetch({ Authorization: cokie, dataBody: dataBody, getDataSource: (value) => getData(value), uriPointer: uri, });
  let setStateConfirmPassword = (value) => setConfirmPassword(value);
  let setStateCurrentPassword = (value) => setCurrentPassword(value);
  let setStateNewPassword = (value) => setNewPassword(value);
  let getData = (value) => {
    value.status_cahnge == 'Incomplete' && alert(value.Massage);
    value.status_cahnge == 'Complete' && [alert(value.Massage), navigation.goBack()];
    setActiveGetServices(false); setDataSevice(value);
  };
  return <>
    <AppBar {...props} backArrow titleHead='เปลี่ยนรหัสผ่าน' />
    <ScrollView>
      <View style={stylesProfileTopic.Edit_Pass}>
        <View style={{ width: '80%' }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5 }]}>รหัสผ่านปัจจุบัน</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput maxLength={50} placeholder='' secureTextEntry style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
            { height: 55, width: '80%', }]} onChangeText={(value) => setStateCurrentPassword(value)} value={currentPassword} />
            <IconFeather name='eye-off' RightItem size={20} style={{ marginTop: 5, }} />
          </View>
          {/* <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>กรุณาระบุรหัสผ่านใหม่ด่านล่าง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#BFBFBF', marginLeft: 10, }]}>
                ประกอบไปด้วยตัวเลขและตัวอักษร อย่างน้อย 6 อักษร</Text> */}
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>รหัสผ่านใหม่</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput maxLength={50} placeholder='' secureTextEntry style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
            { height: 55, width: '80%', }]} onChangeText={(value) => setStateNewPassword(value)} value={newPassword} />
            <IconFeather name='eye-off' RightItem size={20} style={{ marginTop: 5, }} />
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginTop: 5, }]}>พิมพ์รหัสผ่านใหม่อีกครั้ง</Text>
          <View style={stylesProfileTopic.Edit_Pass_TextInput}>
            <TextInput maxLength={50} placeholder='' secureTextEntry style={[stylesFont.FontFamilyText, stylesFont.FontSize6,
            { height: 55, width: '80%', }]} onChangeText={(value) => setStateConfirmPassword(value)} value={confirmPassword} />
            <IconFeather name='eye-off' RightItem size={20} style={{ marginTop: 5, }} />
          </View>
        </View>
      </View>
    </ScrollView>
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={() => setActiveGetServices(true)}>
        <View style={[stylesProfileTopic.Edit_Profile_Button_Save,
        { backgroundColor: currentPassword != '' && newPassword != '' && confirmPassword != '' ? mainColor : '#CECECE' }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>เปลี่ยนรหัสผ่าน</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
};