///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
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
import { AppBar1, ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Return_products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  PathList() {
    const { navigation } = this.props
    const selectedIndex = navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <Return_products_pro />
          </View>
        )
      case 1:
        return (
          <View>
            <Return_products_From />
          </View>
        )
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow navigation={navigation} titleHead='คืนสินค้า/คืนเงิน' />
        <ScrollView>
          {this.PathList()}
        </ScrollView>
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Return_products_pro
export class Return_products_pro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesProfileTopic.products_pro}>
        <IconFeather name='edit' size={50} color='#A2A2A2' />
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ยังไม่มีคำสั่งซื้อ</Text>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Return_products_From
export class Return_products_From extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <ScrollView>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, marginTop: 10, }]}>สินค้าที่ต้องการคืน </Text>
          <Return />
          <Return_Detail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Return
export class Return extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesMain.FrameBackground}>
        <View style={stylesProfileTopic.Return}>
          <View style={stylesMain.FlexRow}>
            <View style={stylesProfileTopic.Order_Product_Pro}>
              <FastImage style={stylesMain.BoxProduct1Image}
                source={{
                  uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
              <Text>x 1</Text>
            </View>
          </View>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor, marginTop: 10, }]}>฿10,000.00</Text>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Return_Detail
export class Return_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: [],
      Text: '',
    };
  }
  UploadImageSingle = (index) => {
    const { avatarSource } = this.state
    const options = {
      includeBase64: true
    };
    ImagePicker.openPicker(options).then(response => {
      avatarSource[index] = response
      this.setState({ avatarSource })
    });
  }
  UploadImageMultiple = () => {
    const { avatarSource } = this.state
    const options = {
      multiple: true,
      includeBase64: true
    };
    ImagePicker.openPicker(options).then(response => {
      response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item))
      this.setState({ avatarSource })
    });
  }
  render() {
    const { avatarSource } = this.state
    return (
      <View style={{ padding: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ยอดเงินคืน</Text>
        <TextInput
          style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesProfileTopic.Return_Detail_Box]}
          placeholder="กรอกจำนวนยอดเงินคืน"
          maxLength={40}
          value={this.state.Text}
          onChangeText={(Text) => this.setState({ Text })}>
        </TextInput>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>เหตุผลการคืนสินค้า</Text>
        <View style={stylesProfileTopic.Return_Detail_Box}>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 35, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="สินค้าผิดหรือเสียหาย" value="java" />
            <Picker.Item label="อื่นๆ" value="js" />
          </Picker>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ความคิดเห็นเพิ่มเติม</Text>
        <View style={stylesProfileTopic.Return_Detail_TextInput}>
          <TextInput
            fontSize={15}
            placeholder="แจ้งให้เราทราบเพิ่มเติมเกี่ยวสินค้า"
            multiline
            editable
            maxLength={5000}
            value={this.state.Detail}
            onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
        </View>
        <View style={{ width: '100%', backgroundColor: '#FFFFFF', borderColor: '#D5D5D5', borderWidth: 1, paddingVertical: 10, marginTop: 5 }}>
          <ScrollView horizontal>
            {
              avatarSource ? [
                avatarSource.map((item, index) => {
                  return (
                    <TouchableOpacity onPress={() => this.UploadImageSingle(index)} key={index}>
                      <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                        <FastImage
                          source={{ uri: item.path }}
                          style={[stylesMain.ItemCenterVertical, { height: '100%', width: '100%' }]}
                        />
                      </View>
                    </TouchableOpacity>
                  )
                }),
                avatarSource.length < 7 &&
                <TouchableOpacity onPress={() => this.UploadImageMultiple()} key={'upload'}>
                  <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                    <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                      <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ] :
                <TouchableOpacity onPress={() => this.UploadImageMultiple()}>
                  <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 100, width: 100, borderColor: mainColor, borderWidth: 1, }]}>
                    <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                      <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                    </View>
                  </View>
                </TouchableOpacity>
            }
          </ScrollView>
        </View>
        <Return_Alert />
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Return_Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  handleOpen = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  get _renderHeader() {
    return (
      <IconFontAwesome name='edit' size={50} color='white' />
    )
  }
  render() {
    return (
      <View>
        <View style={stylesProfileTopic.Return_ButtonBox}>
          <TouchableOpacity onPress={() => this.handleOpen()} style={stylesMain.ItemCenter}>
            <View style={stylesProfileTopic.Return_Button}>
              <Text>คืนสินค้า</Text>
            </View>
          </TouchableOpacity>
        </View>
        <SCLAlert
          theme="success"
          headerIconComponent={this._renderHeader}
          show={this.state.show}
          title="เปลี่ยนสินค้า"
          titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
          subtitle="กรุณารอการตรวจสอบจากร้านค้า"
          subtitleStyle={stylesFont.FontFamilyText}
          onRequestClose={() => null}
        >
          <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
            <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
            <SCLAlertButton theme="success" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
          </View>
        </SCLAlert>
      </View>
    );
  }
}