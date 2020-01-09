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
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { ip } from '../../navigator/IpConfig';

export default class StoreMe_Up_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <Appbar navigation={this.props.navigation} />
        <StoreMe_Up_Image />
        <StoreMe_Up_ProductDetail />
      </SafeAreaView>
    );
  }
}

///----------------------------------Appbar----------------------------------------///

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
          <IconAntDesign RightItem name='closecircleo' size={25} color='#0A55A6' />
        </TouchableOpacity>
        <Text style={styles.Text}>เพิ่มสินค้า</Text>
        <Text style={{ color: '#0A55A6', fontSize: 18, }}>ส่ง</Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///



export class StoreMe_Up_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.StoreMe_Up_Image}>
        <ScrollView horizontal>
          <View style={styles.StoreMe_Up_ImageA}>
            <View style={styles.StoreMe_Up_Image_Box}>
              <FastImage style={{ height: 120, width: 120, }}
                source={{
                  uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                }}
              />
            </View>
            <View style={styles.StoreMe_Up_Image_Box}>
              <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
              <Text style={{ color: '#0A55A6', fontSize: 12, }}>+เพิ่มรูปภาพ/วีดีโอ</Text>
            </View>
          </View>
        </ScrollView>
        <Text> *สูงสุดรวม 6 รูป</Text>
      </View>

    );
  }
}

///--------------------------------------------------------------------------///

export class StoreMe_Up_ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{ height: 60, width: '100%', backgroundColor: '#FFF', marginTop: 10,padding:10, }}>
          <TextInput 
            placeholder="ชื่อสินค้า"
            maxLength={20}
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}></TextInput> 
        </View>
        <Text style={{fontSize:12,marginLeft:10,color:'#0A55A6',marginTop:5, }}>ใส่ตัวอักษรได้ 20 ตัวอักษร </Text>
      </View>

    );
  }
}
