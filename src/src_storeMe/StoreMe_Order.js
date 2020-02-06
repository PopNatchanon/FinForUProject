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
  requireNativeComponent,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import stylesFont from '../../style/stylesFont';
import { TabBar } from '../tools/Tools';
import { ip } from '../../navigator/IpConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class StoreMe_Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Appbar navigation={this.props.navigation} />
        <Button_Bar />
        <ScrollView>
          <Order_Me />
          <StoreMe_Totel />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///------------------------------------------------------------------------------///

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 50, flexDirection: 'row', }} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
        </TouchableOpacity>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { marginTop: 10, marginLeft: '30%' }]} >ออเดอร์ของฉัน</Text>
      </View>
    );
  }
}

///------------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const item = [{
      name: 'ยังไม่ชำระ'
    }, {
      name: 'ที่ต้องจัดส่ง'
    }, {
      name: 'การจัดส่ง'
    }, {
      name: 'สำเร็จ'
    }]
    return (
      <View style={{ height: 40, width: '100%', backgroundColor: '#FFFFFF', }}>
        <TabBar
          sendData={this.updateIndex}
          item={item}
          // widthBox={98}
          activeColor={'#0A55A6'}
          activeFontColor={'#0A55A6'}
          type='tag'
        />
      </View>
    );
  }
}

///------------------------------------------------------------------------------///

export class Order_Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { margin: 5 }]}>รายการคำสั่งซื้อ</Text>
        <View style={{ backgroundColor: '#FFFFFF', width: '100%', }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ height: 50, width: 50, backgroundColor: '#C4C4C4', borderRadius: 25, }}></View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { marginTop: 10, }]}> PPoo</Text>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#0A55A6', marginTop: 10, }]}>ยังไม่ชำระ</Text>
          </View>
          <View style={{ height: 150, padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ backgroundColor: '#C4C4C4', height: 120, width: 120, marginRight: 10, }}></View>
              <Text style={stylesFont.FontFamilyText}>ห้องพัก Deluxe Pool Villa</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', }}>
              <Text>x 1 </Text>
              <Text style={{ color: '#0A55A6' }}>฿10,000</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

///------------------------------------------------------------------------------///

export class StoreMe_Totel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{ width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 5, }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}> รวมการสั่งซื้อ (1 สินค้า): </Text>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#0A55A6' }]}>฿30,000</Text>
        </View>
        <View style={{ width: '100%',  backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 5, }}>
          <View style={{ width: 200, padding: 5, }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ชำระเงินโดยการโอนเงินผ่านธนาคาร 29-11-2019 </Text>
          </View>
          <TouchableOpacity>
            <View style={{ height: 40, width: 100, backgroundColor: '#0A55A6', justifyContent: 'center', alignItems: 'center', borderRadius: 5, }}>
              <Text style={[stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>ติดต่อผู้ซื้อ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%',  backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 5, }}>
          <View style={{flexDirection:'row',}}>
            <IconMaterialCommunityIcons name="car-estate" size={35} color='#B6B6B4' />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize4,{marginTop:5,}]}>Status and tracking no</Text>
          </View>
          <Text style={{marginTop:5,}}>192312342342342ve6</Text>
        </View>
      </View>

    );
  }
}

///------------------------------------------------------------------------------///
