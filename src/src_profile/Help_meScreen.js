import React, { Component } from 'react';
import {
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
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylesProfile-src/styleHelp_meScreen';
import { ip } from '../../navigator/IpConfig';

export default class Help_meScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#E9E9E9', }}>
        <Appbar navigation={this.props.navigation} />
        <Help_me />
        <Question />
        <Topic />
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
        <Text style={{ marginTop: 10, }}>Fin Helpcenter</Text>
      </View>
    );
  }
}

///-----------------------------------------------------------------------------///

export class Help_me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../icon/bgprofile.jpg')}
          style={styles.Help_me_ImageBackground}>
          <View style={styles.Help_me_Box_text}>
            <Text style={styles.Help_me_Text}>สวัสดีค่ะ คุณ xxxxxxxxx </Text>
            <Text style={styles.Help_me_Text}>คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
            <View style={styles.Help_me_Textinput}>
              <TextInput style={styles.TextInput, {
                fontFamily: 'SukhumvitSet',
                fontSize: 15,
              }}
                placeholder="กรุณากรอกสิ่งที่ให้เราช่วยเหลือ"
                value={this.state.text}
                onChangeText={(text) => this.setState({ text })}></TextInput>
              <IconAntDesign RightItem name="search1" size={25} style={{ marginLeft: 15, }} /></View>

          </View>
        </ImageBackground>


      </View>
    );
  }
}

///-----------------------------------------------------------------------------///


export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, }}> คำถามยอดฮิต </Text>
        <View style={styles.Question_Box}>
          <Text > ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
        </View>
        <View style={styles.Question_Box}>
          <Text > ช่องทางการเงินมีกี่ประเภท</Text>
        </View>
        <View style={styles.Question_Box}>
          <Text > ฉันตรวจสอบสินค้าได้อย่างไร</Text>
        </View>
      </View>
    );
  }
}

///-----------------------------------------------------------------------------///


export class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Topic}>
        <Text style={{ fontSize: 18,}}> หัวข้อ </Text>
        <View style={{justifyContent:'center',alignItems:'center',}}>
          <View style={styles.Topic_Box}>
            <IconAntDesign RightItem name="user" size={30} style={styles.Topic_Box_icon} />
            <Text>บัญชีของฉัน</Text>
          </View>
          <View style={styles.Topic_Box}>
            <IconAntDesign RightItem name="retweet" size={30} style={styles.Topic_Box_icon} />
            <Text>การคืนสินค้า</Text>
          </View>
          <View style={styles.Topic_Box}>
            <IconEntypo RightItem name="credit-card" size={30} style={styles.Topic_Box_icon} />
            <Text>การชำระเงิน</Text>
          </View>
          <View style={styles.Topic_Box}>
            <IconAntDesign RightItem name="shoppingcart" size={30} style={styles.Topic_Box_icon} />
            <Text>การสั่งซื้อ</Text>
          </View>
          <View style={styles.Topic_Box}>
            <IconAntDesign RightItem name="ellipsis1" size={30} style={styles.Topic_Box_icon} />
            <Text>หัวข้ออื่นๆ</Text>
          </View>
        </View>

      </View>
    );
  }
}




