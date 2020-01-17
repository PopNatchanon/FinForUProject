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
import styles from '../../style/stylePromotion-src/styleDealScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide, Button_Bar } from './DealScreen';
import { TabBar } from '../tools/Tools';
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
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Head_Image />
          <Product_Pay />
          <CategoryProduct />
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
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', padding: 10, }}>
          <FastImage style={{ height: '100%', width: '100%', }}
            source={{
              uri: ip + '/MySQL/uploads/slide/lazada-ผ่อน-0-10-เดือน.jpg',
            }}
          />
        </View>
        <View style={{ height: 'auto', width: '100%', backgroundColor: '#FFFFFF', padding: 10, }}>
          <Text style={styles.Head_Image_Text}>1.ยอดใช้จ่ายขั้นต่ำ 1,000 บาทขึ้นไป/ เซลล์สลิป(ผ่านวงเงินบัตรเครดิต) และรวมยอดใช้จ่ายเปลี่ยนเป็นยอดแบ่งชำระเริ่มต้น 3,000 บาทขึ้นไป </Text>
          <Text style={styles.Head_Image_Text}>2.เป็นยอดใช้จ่ายที่เกิดขึ้นก่อนวันสรุปยอดบัญชี 3 วันทำการเดือนนั้นๆ </Text>
          <Text style={styles.Head_Image_Text}>3.ยกเว้นยอดใช้จ่ายในเชิงธุรกิจ, ยอดใช้จ่ายจากการ ซื้อกองทุนรวม, ยอดการชำระค่าสาธารณูปโภค,</Text>
          <Text style={styles.Head_Image_Text}>และค่าบริการอื่นๆจากการหักบัญชีอัตโนมัติผ่าน บัตรเครดิตกรุงศรี เฟิร์สช้อยส์ วีซ่า แพลทินัม,ยอดใช้จ่ายที่เกิดจากวงเงินชั่วคราว, และยอดใช้จ่ายที่ผิดวัตถุประสงค์และผิดกฏหมายบัตรเครดิต </Text>
          <Text style={styles.Head_Image_Text}>4.โดยยอดใช้จ่าย ดังกล่าวจะไม่ได้รับคะแนนสะสมกรุงศรี เฟิร์สช้อยส์ รีวอร์ด</Text>
          <Text style={styles.Head_Image_Text}>5.ทางบริษัทฯ ขอสงวนสิทธิ์ไม่รับการยกเลิก เปลี่ยนแปลง หรือแก้ไข หากบริษัทฯได้ดำเนินการตามคำขอนี้แล้วทุกกรณี</Text>
          <Text style={styles.Head_Image_Text}>6.กรณีที่ท่านคืนสินค้าหรือบริการที่ร้านค้า กรุณาแจ้งทางบริษัทเพื่อทำการปิดรายการเงินผ่อนด้วยหลังจากท่านติดต่อแจ้งกับร้านค้าเรียบร้อยแล้ว</Text>
          <Text style={styles.Head_Image_Text}>7.บริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนยอดซื้อสินค้าแบบปกติเป็นแบ่งจ่ายรายเดือนตาม หลักเกณฑ์ของบริษัทฯ หากพบว่าประวัติของสมาชิกบัตร ไม่ตรงตามหลักเกณฑของบริษัทฯ</Text>
          <Text style={styles.Head_Image_Text}>8.บริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข และยกเลิกรายการส่งเสริมการตลาด รวมถึง เงื่อนไขต่างๆโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
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
        <View style={styles.Box_Text_Head}>
          <Text> สินค้า 0 % 10 เดือน </Text>
        </View>
      </View>

    );
  }
}

///-------------------------------------------------------------------------///
