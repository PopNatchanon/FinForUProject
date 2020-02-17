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
  Picker,
} from 'react-native'; import { AppBar1 } from '../MainScreen';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import { CheckBox } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { ip } from '../../navigator/IpConfig';

export default class StoreMe_Return extends Component {
  PathList() {
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 backArrow navigation={this.props.navigation} titleHead='คืนสินค้า/คืนเงิน' />
            <ScrollView>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>คืนสินค้า/คืนเงิน</Text>
              <StoreMe_Return_Product navigation={this.props.navigation} />
              <StoreMe_Return_Product navigation={this.props.navigation} />
              <StoreMe_Return_Product navigation={this.props.navigation} />
              <StoreMe_Return_Product navigation={this.props.navigation} />
            </ScrollView>
          </View>
        )
      case 1:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 backArrow navigation={this.props.navigation} titleHead='รายละเอียดการคืนสินค้า' />
            <ScrollView>
              <StoreMe_Return_Detail />
            </ScrollView>
          </View>
        )
      case 2:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 backArrow navigation={this.props.navigation} titleHead='คลังสินค้า' />
            <ScrollView>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 5, }]}>รายการสินค้า</Text>
              <Treasury_store_Product />
              <Treasury_store_Product />
              <Treasury_store_Product />
              <Treasury_store_Product />
              <Treasury_store_Product />
              <Treasury_store_Product />
            </ScrollView>
          </View>
        )
    }
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {this.PathList()}
      </SafeAreaView>
    );
  }
}
///--------------------------------------------------------------------------///

export class StoreMe_Return_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={stylesMain.SafeAreaView}>
        <View style={stylesMain.FrameBackground}>
          <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
            <View style={stylesMain.FlexRow}>
              <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
          </View>
          <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
            <View style={stylesMain.FlexRow}>
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
          <View style={{ borderColor: '#EAEAEA', borderTopWidth: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 10, height: 80 }}>
            <View style={stylesPro.Order_Box_price}>
              <View style={stylesPro.Order_Box_priceText}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดคำสั่งซื้อทั้งหมด</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, color: '#0A55A6' }]}>฿ 10,000.00</Text>
              </View>
              <View style={[stylesPro.Order_Box_priceText, { marginTop: 5, }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('StoreMe_Return', { selectedIndex: 1 })}>
                  <View style={[stylesPro.Order_Button, { borderWidth: 1, }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ดูรายละเอียด</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={[stylesPro.Order_Button, { backgroundColor: '#0A55A6' }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
///--------------------------------------------------------------------------///

export class StoreMe_Return_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={stylesMain.SafeAreaView}>
        <View style={[stylesMain.FrameBackground, { padding: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เหตุผลการยกเลิก</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>เนื่องสินค้าชำรุด</Text>
        </View>
        <View style={stylesMain.FrameBackground}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
            <View style={stylesMain.FlexRow}>
              <View style={{ height: 40, width: 40, backgroundColor: '#C4C4C4', borderRadius: 20, margin: 5, }}></View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
            <View style={stylesMain.FlexRow}>
              <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}>
                <FastImage
                  style={{ height: '100%', width: '100%' }}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                  }}
                />
              </View>
              <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>x 1</Text>
              </View>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#0A55A6' }]}>฿10,000.00</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 5 }]}>ข้อมูลการยกเลิก</Text>
            <View style={{ width: '100%', padding: 10, flexDirection: 'row', height: 300, justifyContent: 'space-between' }}>
              <View style={{ width: '65%', height: '100%' }}>
                <FastImage
                  style={{ height: '100%', width: '100%' }}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                  }}
                />
              </View>
              <View style={{ height: '100%', width: '30%', justifyContent: 'space-between' }}>
                <View style={{ width: '100%', height: '30%', }}>
                  <FastImage
                    style={{ height: '100%', width: '100%', borderColor: '#C8C8C8', borderRadius: 5, borderWidth: 1, }}
                    source={{
                      uri: ip + '/MySQL/uploads/products/2019-03-16-1552756517.jpg',
                    }}
                  />
                </View>
                <View style={{ width: '100%', height: '30%', }}>
                  <FastImage
                    style={{ height: '100%', width: '100%', borderColor: '#C8C8C8', borderRadius: 5, borderWidth: 1, }}
                    source={{
                      uri: ip + '/MySQL/uploads/products/2019-03-16-1552756517.jpg',
                    }}
                  />
                </View>
                <View style={{ width: '100%', height: '30%', }}>
                  <FastImage
                    style={{ height: '100%', width: '100%', borderColor: '#C8C8C8', borderRadius: 5, borderWidth: 1, }}
                    source={{
                      uri: ip + '/MySQL/uploads/products/2019-03-16-1552756517.jpg',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10 }]}>
            <View style={stylesMain.FlexRow}>
              <CheckBox
                size={25}
                checkedIcon='toggle-on'
                checkedColor='#95F29F'
                uncheckedIcon='toggle-off'
                checked={this.state.item1}
                onPress={() => this.setState({ item1: !this.state.item1 })} />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 15 }]}>ตรวจสอบแล้ว</Text>
            </View>
            <TouchableOpacity>
              <View style={{ height: 30, width: 100, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
///--------------------------------------------------------------------------///

export class Treasury_store_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={stylesMain.SafeAreaView}>
        <View style={stylesMain.FrameBackground}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10, borderColor: '#EFEFEF', borderWidth: 1 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
            <View style={[stylesMain.FlexRow, { width: 100, justifyContent: 'space-between' }]}>
              <TouchableOpacity style={stylesMain.FlexRow} >
                <IconFontAwesome name='trash-o' size={20} color='#6B87CF' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#6B87CF' }]}>ลบ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={stylesMain.FlexRow} >
                <IconFeather name='edit' size={20} color='#6B87CF' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#6B87CF' }]}>แก้ไข</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 10, justifyContent:'space-around',flexDirection:'row'}}>
            <View style={{ height: 80, width: 80, }}>
              <FastImage
                style={{ height: '100%', width: '100%', }}
                source={{
                  uri: ip + '/MySQL/uploads/products/2019-03-20-1553064759.jpg',
                }}
              />
            </View>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ราคาต่อชิ้น</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,{color:'#0A55A6'}]}>฿10,000.00</Text>
            </View>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ตัวเลือกสินค้า</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,{color:'#A2A2A2'}]}>สีแดง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,{color:'#A2A2A2'}]}>ขาว</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,{color:'#A2A2A2'}]}>ส้ม</Text>
            </View>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>คลัง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>20</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>50</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>30</Text>
            </View>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ยอดขาย</Text>
            </View>
          </View>
        </View>
        <View>

        </View>
      </View>
    );
  }
}
