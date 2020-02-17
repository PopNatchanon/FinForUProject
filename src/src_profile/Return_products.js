///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Appbar } from './Profile_Topic';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class Return_products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  PathList() {
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
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
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='คืนสินค้า/คืนเงิน' />
        <ScrollView>
          {this.PathList()}
        </ScrollView>
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
            <View style={stylesProfileTopic.Return_Pro}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
              <Text>x 1</Text>
            </View>
          </View>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
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
    };
  }
  render() {
    return (
      <View style={{ padding: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ยอดเงินคืน</Text>
        <View style={stylesProfileTopic.Return_Detail_Box}>
        </View>
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
        <View style={stylesProfileTopic.Return_ImageBox}>
          <TouchableOpacity>
            <View style={stylesProfileTopic.Up_Image_Box}>
              <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ(0/6)</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesProfileTopic.Return_ButtonBox}>
          <TouchableOpacity>
            <View style={stylesProfileTopic.Return_Button}>
              <Text>เปลี่ยนสินค้า</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[stylesProfileTopic.Return_Button, { marginLeft: 10, }]}>
              <Text>ขอเงินคืน</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}