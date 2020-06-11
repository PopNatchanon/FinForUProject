///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, Text, TouchableOpacity, View, ScrollView,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { CheckBox } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { Order_Me_Box } from './Seller_Totel_Order';
import { NavigationNavigateScreen } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Seller_Return extends Component {
  PathList() {
    const { route } = this.props
    const selectedIndex = route.params?.selectedIndex
    switch (selectedIndex) {
      case 0:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 {...this.props} backArrow titleHead='คืนสินค้า/คืนเงิน' />
            <ScrollView>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>คืนสินค้า/คืนเงิน</Text>
              <Order_Me_Box {...this.props} Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} Cause_cancel detail_order_cancel Contact_buyer />
            </ScrollView>
          </View>
        )
      case 1:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 {...this.props} backArrow titleHead='รายละเอียด' />
            <ScrollView>
              <Seller_Return_Detail />
            </ScrollView>
          </View>
        )
      case 2:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 {...this.props} backArrow titleHead='คลังสินค้า' />
            <ScrollView>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 5, }]}>รายการสินค้า</Text>
              <Treasury_store_Product {...this.props} />
              <Treasury_store_Product {...this.props} />
              <Treasury_store_Product {...this.props} />
              <Treasury_store_Product {...this.props} />
              <Treasury_store_Product {...this.props} />
              <Treasury_store_Product {...this.props} />
            </ScrollView>
          </View>
        )
      case 3:
        return (
          <View style={stylesMain.SafeAreaView}>
            <AppBar1 {...this.props} backArrow titleHead='ยกเลิกสินค้า' />
            <ScrollView>
              <Order_Me_Box {...this.props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
              <Order_Me_Box {...this.props} cancel_order Cause_cancel detail_order_cancel Contact_buyer />
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
///--------------------------------------------------------------------------/// รายละเอียดการยกเลิก
export class Seller_Return_Detail extends Component {
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
          <View style={stylesSeller.Seller_Product_Before}>
            <View style={stylesMain.FlexRow}>
              <FastImage style={stylesProfileTopic.Order_StorePro}
                source={{
                  uri: `${ip}/mysql/uploads/slide/NewStore/luxury_shop1.jpg`,
                }}
              />
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#EAEAEA', borderBottomWidth: 1, }}>
            <View style={stylesMain.FlexRow}>
              <View style={stylesProfileTopic.Order_Product_Pro}>
                <FastImage style={stylesMain.BoxProduct1Image}
                  source={{
                    uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
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
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: mainColor }]}>฿10,000.00</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { margin: 5 }]}>ข้อมูลการยกเลิก</Text>
            <View style={stylesSeller.Seller_Return_DetailBox}>
              <View style={stylesSeller.Seller_Return_DetailBoxA}>
                <FastImage
                  style={stylesMain.BoxProduct1Image}
                  source={{
                    uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
                  }}
                />
              </View>
              <View style={stylesSeller.Seller_Return_DetailBoxB}>
                <View style={stylesSeller.Seller_Return_DetailBoxB_Image}>
                  <FastImage
                    style={stylesSeller.Seller_Return_DetailB_Image}
                    source={{
                      uri: `${ip}/mysql/uploads/products/2019-03-16-1552756517.jpg`,
                    }}
                  />
                </View>
                <View style={stylesSeller.Seller_Return_DetailBoxB_Image}>
                  <FastImage
                    style={stylesSeller.Seller_Return_DetailB_Image}
                    source={{
                      uri: `${ip}/mysql/uploads/products/2019-03-16-1552756517.jpg`,
                    }}
                  />
                </View>
                <View style={stylesSeller.Seller_Return_DetailBoxB_Image}>
                  <FastImage
                    style={stylesSeller.Seller_Return_DetailB_Image}
                    source={{
                      uri: `${ip}/mysql/uploads/products/2019-03-16-1552756517.jpg`,
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
              <View style={stylesSeller.Seller_Return_Button}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
///--------------------------------------------------------------------------/// คลัง
export class Treasury_store_Product extends Component {
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
      <IconFontAwesome name='trash-o' size={50} color='white' />
    )
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={stylesMain.SafeAreaView}>
        <View style={stylesMain.FrameBackground}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
            <View style={[stylesMain.FlexRow, stylesSeller.Treasury_store_Text]}>
              <TouchableOpacity onPress={() => this.handleOpen()} style={stylesMain.FlexRow}>
                <IconFontAwesome name='trash-o' size={20} color='#6B87CF' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#6B87CF' }]}>ลบ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => NavigationNavigateScreen({
                goScreen: 'Seller_Up_Product', navigation
              })} style={stylesMain.FlexRow}>
                <IconFeather name='edit' size={20} color='#6B87CF' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#6B87CF' }]}>แก้ไข</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 10, justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={{ height: 80, width: 80, }}>
              <FastImage
                style={stylesMain.BoxProduct1Image}
                source={{
                  uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`,
                }}
              />
            </View>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ราคาต่อชิ้น</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>฿10,000.00</Text>
            </View>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>ตัวเลือกสินค้า</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#A2A2A2' }]}>สีแดง</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#A2A2A2' }]}>ขาว</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#A2A2A2' }]}>ส้ม</Text>
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
        <SCLAlert
          theme="danger"
          headerIconComponent={this._renderHeader}
          show={this.state.show}
          title="คุณต้องการลบสินค้าชิ้นนี้หรือไม่"
          titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
          subtitle="Name Product"
          subtitleStyle={stylesFont.FontFamilyText}
          onRequestClose={() => null}
        >
          <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around', }]}>
            <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
            <SCLAlertButton theme="danger" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
          </View>
        </SCLAlert>
      </View>
    );
  }
}