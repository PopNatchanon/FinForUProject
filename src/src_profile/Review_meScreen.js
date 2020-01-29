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
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
// import stylesPro from '../../style/stylesProfile-src/styleReview_meScreen';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';

export default class Review_meScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='รีวิวของฉัน' />
        <ScrollView>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { marginLeft: 10, }]}>ล่าสุด</Text>
          <Review_me />
          <Review_me />
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2, { marginLeft: 10, }]}>เก่ากว่า</Text>
          <Review_me />
          <Review_me />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///------------------------------------------------------------------------------///

export class Review_me extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={stylesPro.Review_me}>
          <View style={stylesPro.Review_me_Box}>
            <View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>Mlife</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#8F8F8F' }]}>สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
            </View>
            <View style={stylesPro.Review_me_Box_head}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>รีวิว</Text>
            </View>
          </View>
          <View style={stylesPro.Review_me_Box_image}>
            <View style={stylesPro.Review_me_Box_imageA}>
              <View style={{ flexDirection: 'row', }}>
                <FastImage style={stylesPro.Review_me_image}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                  }}
                />
                <View style={{ marginLeft: 10, }}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>กระเป๋าxxxxxxxx</Text>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>สี : น้ำตาล</Text>
                </View>
              </View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>จัดส่งสินค้าแล้ว</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
