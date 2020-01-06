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
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylesProfile-src/styleFollow_storeScreen';
import { ip } from '../../navigator/IpConfig';

export const { width, height } = Dimensions.get('window');

export default class Follow_storeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <Appbar navigation={this.props.navigation} />
        <ScrollView>
          <Follow_store_Box />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///-----------------------------------------------------------------------------///

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
        <Text style={{ marginTop: 10, }}>ร้านค้าที่ติดตาม</Text>
      </View>
    );
  }
}

///-----------------------------------------------------------------------------///


export class Follow_store_Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styles.Chat_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={styles.Chat_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={styles.Chat_Box_text}>
              <Text>ppooooo</Text>
              <Text>สินค้าได้ถูกขายแล้วค่ะ</Text>
            </View>
          </View>

          
        </View>
      </View>
    );
  }
}
