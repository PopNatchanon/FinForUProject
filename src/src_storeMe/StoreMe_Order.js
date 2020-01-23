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
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
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
        <Appbar navigation={this.props.navigation}/>
        <Button_Bar/>
        <ScrollView>
         <Order_Me/>
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
        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: '30%' }} >ออเดอร์ของฉัน</Text>
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
      <View>
        <Text>รายการคำสั่งซื้อ</Text>
      </View>
    );
  }
}

