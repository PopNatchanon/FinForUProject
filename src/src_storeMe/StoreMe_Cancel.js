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
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from '../../src/src_profile/Profile_Topic';

export default class StoreMe_Cancel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='ยกเลิกสินค้า' />
        <ScrollView>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 5, marginTop:5, }]}>รายการที่ยกเลิกสินค้า </Text>
          <Cancel_Product />
          <Cancel_Product />
          <Cancel_Product />
          <Cancel_Product />
          <Cancel_Product />
        </ScrollView>

      </SafeAreaView>
    );
  }
}

///-----------------------------------------------------------------------------///

export class Cancel_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styleMain.FrameBackground}>
          <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth:1, }}>
            <View style={styleMain.FlexRow}>
              <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, color: '#0A55A6' }]}>ถูกยกเลิก</Text>
          </View>
          <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
            <View style={styleMain.FlexRow}>
              <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
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
          <View style={{ height: 50, borderColor: '#EAEAEA', borderTopWidth:1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, }}>
            <TouchableOpacity>
              <View style={{ height: 40, width: 100, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}