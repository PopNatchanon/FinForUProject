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
  Button,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';
import { ip } from '../../navigator/IpConfig';
import BottomSheet from "react-native-raw-bottom-sheet";


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
        <ScrollView>
          <StoreMe_Up_Image />
          <StoreMe_Up_ProductDetail />
        </ScrollView>
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
        <Text style={{ marginLeft: 10, color: '#A3A3A3', fontSize: 12, }}> *สูงสุดรวม 6 รูป</Text>
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
        <BottomSheet
          ref={ref => {
            this.PriceSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop:20,
              alignItems: "center"
            }
          }}
        >
          <View>
            <Text style={{ fontSize: 20, }}>กรุณากรอกราคาสินค้า</Text>
            <View style={{height:50, width:300, alignItems:'flex-end',borderColor:'#EAEAEA',borderWidth:1,marginTop:10,}}>
              <TextInput
                fontSize={20}
                placeholder="0.00"
                multiline
                editable
                // maxLength={20}
                value={this.state.price}
                onChangeText={(price) => this.setState({ price })}></TextInput>
            </View>
          </View>
        </BottomSheet>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <TextInput
            placeholder="ชื่อสินค้า"
            fontSize={15}
            maxLength={120}

            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}></TextInput>
        </View>
        <Text style={styles.StoreMe_Up_ProductDetail_TextMax}>20/120 ตัวอักษร</Text>
        <View style={{ width: '100%', height: 150, backgroundColor: '#FFF', padding: 10, }}>
          <TextInput
            fontSize={15}
            placeholder="รายละเอียดสินค้า"
            multiline
            editable
            maxLength={5000}
            value={this.state.Detail}
            onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
        </View>
        <Text style={styles.StoreMe_Up_ProductDetail_TextMax}>100/5000 ตัวอักษร</Text>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>หมวดสินค้า</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ราคา</Text>
          <TouchableOpacity onPress={() => {
            this.PriceSheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>

        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>คลัง</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ตัวเลือกสินค้า</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ขายส่ง</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ขนาดพัสดุ</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ค่าจัดส่ง</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>เตรียมสินค้านานกว่าปกติ</Text>
          <CheckBox
            size={30}
            containerStyle={{ marginTop: -5 }}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={this.state.item1}
            onPress={() => this.setState({ item1: !this.state.item1 })}
          />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>เผยแพร่สินค้า</Text>
          <CheckBox
            size={30}
            containerStyle={{ marginTop: -5 }}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={this.state.item2}
            onPress={() => this.setState({ item2: !this.state.item2 })}
          />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>เพจ Facebook</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
      </View>

    );
  }
}
