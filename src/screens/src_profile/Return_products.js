///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
export const { width, height } = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {  ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
import { AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Return_products);
function Return_products(props) {
  const { route } = props;
  const selectedIndex = route.params?.selectedIndex;
  let PathList = () => {
    switch (selectedIndex) {
      case 0:
        return <View>
          <Return_products_pro />
        </View>;
      case 1:
        return <View>
          <Return_products_From />
        </View>;
    };
  };
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    <AppBar {...props} backArrow titleHead='คืนสินค้า/คืนเงิน' />
    <ScrollView>
      {PathList()}
    </ScrollView>
    <ExitAppModule {...props} />
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Return_products_pro
export let Return_products_pro = (props) => <View style={stylesProfileTopic.products_pro}>
  <IconFeather name='edit' size={50} color='#A2A2A2' />
  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ยังไม่มีคำสั่งซื้อ</Text>
</View>;
///----------------------------------------------------------------------------------------------->>>> Return_products_From
export let Return_products_From = (props) => <SafeAreaView style={stylesMain.SafeAreaView}>
  <ScrollView>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>สินค้าที่ต้องการคืน</Text>
    <Return />
    <Return_Detail />
  </ScrollView>
</SafeAreaView>;
///----------------------------------------------------------------------------------------------->>>> Return
export let Return = (props) => <View style={stylesMain.FrameBackground}>
  <View style={stylesProfileTopic.Return}>
    <View style={stylesMain.FlexRow}>
      <View style={stylesProfileTopic.Order_Product_Pro}>
        <FastImage style={stylesMain.BoxProduct1Image} source={{ uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, }} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
        <Text>x 1</Text>
      </View>
    </View>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor, marginTop: 10, }]}>฿10,000.00</Text>
  </View>
</View>;
///----------------------------------------------------------------------------------------------->>>> Return_Detail
export let Return_Detail = (props) => {
  const [avatarSource, setAvatarSource] = useState([]);
  const [detail, setDetail] = useState(undefined);
  const [language, setLanguage] = useState(undefined);
  const [text, setText] = useState(undefined);
  let UploadImageSingle = (index) => {
    const options = { includeBase64: true };
    ImagePicker.openPicker(options).then(response => { avatarSource[index] = response; setAvatarSource(avatarSource); });
  };
  let UploadImageMultiple = () => {
    const options = { multiple: true, includeBase64: true };
    ImagePicker.openPicker(options).then(response => {
      response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item));
      setAvatarSource(avatarSource);
    });
  };
  return <View style={{ padding: 10, }}>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ยอดเงินคืน</Text>
    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesProfileTopic.Return_Detail_Box]}
      placeholder="กรอกจำนวนยอดเงินคืน" maxLength={40} value={text} onChangeText={value => setText(value)}></TextInput>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เหตุผลการคืนสินค้า</Text>
    <View style={stylesProfileTopic.Return_Detail_Box}>
      <Picker selectedValue={language} style={{ height: 35, width: '100%' }} onValueChange={(itemValue, itemIndex) =>
        setLanguage(itemValue)}>
        <Picker.Item label="สินค้าผิดหรือเสียหาย" value="java" />
        <Picker.Item label="อื่นๆ" value="js" />
      </Picker>
    </View>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ความคิดเห็นเพิ่มเติม</Text>
    <View style={stylesProfileTopic.Return_Detail_TextInput}>
      <TextInput fontSize={15} placeholder="แจ้งให้เราทราบเพิ่มเติมเกี่ยวสินค้า" multiline editable maxLength={5000} value={detail}
        onChangeText={value => setDetail(value)} />
    </View>
    <View style={{ width: '100%', backgroundColor: '#FFFFFF', borderColor: '#D5D5D5', borderWidth: 1, paddingVertical: 10, marginTop: 5 }}>
      <ScrollView horizontal>
        {avatarSource ?
          avatarSource.map((item, index) => <>
            <TouchableOpacity onPress={() => UploadImageSingle(index)} key={index}>
              <View style={[stylesMain.ItemCenter,
              { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                <FastImage source={{ uri: item.path }} style={[stylesMain.ItemCenterVertical, { height: '100%', width: '100%' }]} />
              </View>
            </TouchableOpacity>
            {avatarSource.length < 7 && <TouchableOpacity onPress={() => UploadImageMultiple()} key={'upload'}>
              <View style={[stylesMain.ItemCenter,
              { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                  <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                </View>
              </View>
            </TouchableOpacity>}
          </>) : <TouchableOpacity onPress={() => UploadImageMultiple()}>
            <View style={[stylesMain.ItemCenter,
            { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
              <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
              </View>
            </View>
          </TouchableOpacity>}
      </ScrollView>
    </View>
    <Return_Alert />
  </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Return_Alert = (props) => {
  const [show, setShow] = useState(false);
  let handle = (value) => setShow(value);
  let _renderHeader = <IconFontAwesome name='edit' size={50} color='white' />;
  return <View>
    <View style={stylesProfileTopic.Return_ButtonBox}>
      <TouchableOpacity onPress={() => handle(true)} style={stylesMain.ItemCenter}>
        <View style={stylesProfileTopic.Return_Button}>
          <Text>คืนสินค้า</Text>
        </View>
      </TouchableOpacity>
    </View>
    <SCLAlert theme="success" headerIconComponent={_renderHeader} show={show} title="เปลี่ยนสินค้า" subtitle="กรุณารอการตรวจสอบจากร้านค้า"
      titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]} subtitleStyle={stylesFont.FontFamilyText} onRequestClose={() => null}>
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
        <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
          containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
        <SCLAlertButton theme="success" textStyle={stylesFont.FontFamilyText} onPress={() => handle(false)}
          containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
      </View>
    </SCLAlert>
  </View>;
};