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
import styles from '../../style/stylesProfile-src/styleReview_meScreen';
import { ip } from '../../navigator/IpConfig';

export default class Review_meScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#E9E9E9', }}>
        <Appbar navigation={this.props.navigation} />
        <ScrollView>
          <Review_me />
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
      <View style={styles.Appbar} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <IconEntypo name='chevron-left' size={35} />
        </TouchableOpacity>
        <Text style={{ marginTop: 5, }}>รีวิวของฉัน</Text>
      </View>
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
        <Text style={{ marginLeft: 10, fontSize: 15, }}>ล่าสุด</Text>
        <View style={styles.Review_me}>
          <View style={styles.Review_me_Box}>
            <View>
              <Text>Mlife</Text>
              <Text>สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
            </View>
            <View style={styles.Review_me_Box_head}>
              <Text style={{ color: '#FFFF' }}>รีวิว</Text>
            </View>
          </View>
          <View style={styles.Review_me_Box_image}>
            <View style={styles.Review_me_Box_imageA}>
              <View style={{ flexDirection: 'row', }}>
                <FastImage style={styles.Review_me_image}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                  }}
                />
                <View style={{ marginLeft: 10, }}>
                  <Text>กระเป๋าxxxxxxxx</Text>
                  <Text>สี : น้ำตาล</Text>
                </View>
              </View>
              <Text>จัดส่งสินค้าแล้ว</Text>
            </View>
          </View>
        </View>
        <View style={styles.Review_me}>
          <View style={styles.Review_me_Box}>
            <View>
              <Text>Mlife</Text>
              <Text>สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
            </View>
            <View style={styles.Review_me_Box_head}>
              <Text style={{ color: '#FFFF' }}>รีวิว</Text>
            </View>
          </View>
          <View style={styles.Review_me_Box_image}>
            <View style={styles.Review_me_Box_imageA}>
              <View style={{ flexDirection: 'row', }}>
                <FastImage style={styles.Review_me_image}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                  }}
                />
                <View style={{ marginLeft: 10, }}>
                  <Text>กระเป๋าxxxxxxxx</Text>
                  <Text>สี : น้ำตาล</Text>
                </View>
              </View>
              <Text>จัดส่งสินค้าแล้ว</Text>
            </View>
          </View>
        </View>
        <Text style={{ marginLeft: 10, fontSize: 15, }}>เก่ากว่า</Text>
        <View style={styles.Review_me}>
          <View style={styles.Review_me_Box}>
            <View>
              <Text>Mlife</Text>
              <Text>สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
            </View>
            <View style={styles.Review_me_Box_head}>
              <Text style={{ color: '#FFFF' }}>รีวิว</Text>
            </View>
          </View>
          <View style={styles.Review_me_Box_image}>
            <View style={styles.Review_me_Box_imageA}>
              <View style={{ flexDirection: 'row', }}>
                <FastImage style={styles.Review_me_image}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                  }}
                />
                <View style={{ marginLeft: 10, }}>
                  <Text>กระเป๋าxxxxxxxx</Text>
                  <Text>สี : น้ำตาล</Text>
                </View>
              </View>
              <Text>จัดส่งสินค้าแล้ว</Text>
            </View>
          </View>
        </View>
        <View style={styles.Review_me}>
          <View style={styles.Review_me_Box}>
            <View>
              <Text>Mlife</Text>
              <Text>สั่งซื้อวันที่ 12 ธ.ค.2019 </Text>
            </View>
            <View style={styles.Review_me_Box_head}>
              <Text style={{ color: '#FFFF' }}>รีวิว</Text>
            </View>
          </View>
          <View style={styles.Review_me_Box_image}>
            <View style={styles.Review_me_Box_imageA}>
              <View style={{ flexDirection: 'row', }}>
                <FastImage style={styles.Review_me_image}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572319733.jpg',
                  }}
                />
                <View style={{ marginLeft: 10, }}>
                  <Text>กระเป๋าxxxxxxxx</Text>
                  <Text>สี : น้ำตาล</Text>
                </View>
              </View>
              <Text>จัดส่งสินค้าแล้ว</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
