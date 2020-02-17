///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, Picker, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Appbar } from './Profile_Topic';
import { AppBar1 } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
export default class CancelScreen extends Component {
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
            <CancelScreen_Product />
          </View>
        )
      case 1:
        return (
          <View>
            <CancelScreen_From />
          </View>
        )
    }
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ยกเลิกสินค้า' />
        <ScrollView>
          {this.PathList()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> CancelScreen_Product
export class CancelScreen_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={stylesProfileTopic.products_pro}>
          <IconFeather name='edit' size={50} color='#A2A2A2' />
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ยังไม่มีคำสั่งซื้อ</Text>
        </View>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> CancelScreen_From
export class CancelScreen_From extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView >
        <ScrollView>
          <Cancel_Product />
          <Cancel_Detail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Cancel_Product
export class Cancel_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <View style={stylesMain.FrameBackground}>
          <View style={stylesProfileTopic.Order_Product}>
            <View style={stylesMain.FlexRow}>
              <View style={stylesProfileTopic.Order_Product_Pro}></View>
              <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                <Text>x 1</Text>
              </View>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Cancel_Detail
export class Cancel_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={stylesMain.FrameBackground}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>สาเหตุการยกเลิกสินค้า </Text>
        <View style={stylesProfileTopic.Cancel_Detail}>
          <View style={stylesProfileTopic.Cancel_Detail_Box}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 35, width: '100%' }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="เปลี่ยนใจ" value="java" />
              <Picker.Item label="ต้องการเปลี่ยนวิธิการจัดส่ง" value="js" />
              <Picker.Item label="เปลี่ยนที่อยู่การจัดส่ง" value="js1" />
              <Picker.Item label="มีสินค้าที่ถูกกว่า" value="js2" />
            </Picker>
          </View>
          <View style={stylesProfileTopic.Cancel_Detail_ButtonBox}>
            <TouchableOpacity>
              <View style={stylesProfileTopic.Cancel_Detail_Button}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[stylesProfileTopic.Cancel_Detail_Button, { marginLeft: 10 }]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}