import React, { Component, PureComponent } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styleMain from '../../style/StylesMainScreen';
import styles from '../../style/stylePromotion-src/styleDealScreen';
import stylesFont from '../../style/stylesFont';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { Slide, Button_Bar } from './DealScreen';
import { AppBar1 } from '../MainScreen';
import { CategoryProduct } from '../MainScreen';
export const { width, height } = Dimensions.get('window');


export default class Installment_payScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <AppBar1 titleHead={'ผ่อน 0 % สูงสุด 10 เดือน'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Head_Image />
          <Product_Pay />
          <CategoryProduct navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

export class Head_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styles.Head_BoxImage}>
          <FastImage style={styles.Head_Image}
            source={{
              uri: ip + '/MySQL/uploads/slide/lazada-ผ่อน-0-10-เดือน.jpg',
            }}
          />
        </View>
        <View style={styles.Head_BoxText}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต) และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม, ยอดการชำระค่าสาธารณูปโภค,</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และผิดกฏหมายบัตรเครดิต </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตามหลักเกณฑของบริษัทฯ</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
        </View>
      </View>

    );
  }
}

///-------------------------------------------------------------------------///

export class Product_Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={[styles.BoxText_T, { backgroundColor: '#C4C4C4' }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}> สินค้า 0 % 10 เดือน </Text>
        </View>
      </View>

    );
  }
}

///-------------------------------------------------------------------------///
