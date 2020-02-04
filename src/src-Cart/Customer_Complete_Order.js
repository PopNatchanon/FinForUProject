import React, { Component } from 'react';
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
import { AppBar1 } from '../MainScreen';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig'
import FastImage from 'react-native-fast-image';

export const { width, height } = Dimensions.get('window');


export default class Customer_Complete_Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar1 />
        <Customer_Product />
      </SafeAreaView>
    );
  }
}

///--------------------------------------------------------------------------///

export class Customer_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: '#FFFFFF' }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { color: '#0A55A6' }]}> ขอบคุณสำหรับคำสั่งซื้อ </Text>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3]}>หมายเลขคำสั่งซื้อ 2223994239012 ของท่าน</Text>
        </View>
        <View style={{alignItems: 'center', height: 150, backgroundColor: '#FFFFFF', marginTop: 10 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { textAlign: 'center' }]}>โปรดรอรับสินค้า</Text>
          <View style={{backgroundColor:'#F8F8F8' ,width:'90%',padding:10,}}>
            <View style={{ height: 80, width: 80 ,backgroundColor:'#FFFFFF',borderColor:'#D7D7D7',borderWidth:1,padding:5,}}>
              <FastImage style={{ height: '100%', width: '100%', }}
                source={{
                  uri: ip + '/MySQL/uploads/products/2019-10-10-1570677650.png',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
