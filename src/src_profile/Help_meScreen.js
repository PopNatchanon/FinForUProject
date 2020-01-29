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
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';


export default class Help_meScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
      <Appbar navigation={this.props.navigation} Title='Fin Helpcenter'/>
        <Help_me />
        <Question />
        <Topic />
      </SafeAreaView>
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
          style={stylesPro.Help_me_ImageBackground}>
          <View style={stylesPro.Help_me_Box_text}>
            <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1,{color:'#FFFFFF'}]}>สวัสดีค่ะ คุณ xxxxxxxxx </Text>
            <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1,{color:'#FFFFFF'}]}>คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
            <View style={stylesPro.Help_me_Textinput}>
              <TextInput style={stylesPro.TextInput,stylesFont.FontFamilyText, {
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
        <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1]}> คำถามยอดฮิต </Text>
        <View style={stylesPro.Question_Box}>
          <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}> ฉันจะเริ่มซื้อของใน FinShoppingMallต้องทำอย่างไร</Text>
        </View>
        <View style={stylesPro.Question_Box}>
          <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}> ช่องทางการเงินมีกี่ประเภท</Text>
        </View>
        <View style={stylesPro.Question_Box}>
          <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}> ฉันตรวจสอบสินค้าได้อย่างไร</Text>
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
      <View style={stylesPro.Topic}>
        <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1]}> หัวข้อ </Text>
        <View style={{justifyContent:'center',alignItems:'center',}}>
          <View style={stylesPro.Topic_Box}>
            <IconAntDesign RightItem name="user" size={30} style={stylesPro.Topic_Box_icon} />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>บัญชีของฉัน</Text>
          </View>
          <View style={stylesPro.Topic_Box}>
            <IconAntDesign RightItem name="retweet" size={30} style={stylesPro.Topic_Box_icon} />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>การคืนสินค้า</Text>
          </View>
          <View style={stylesPro.Topic_Box}>
            <IconEntypo RightItem name="credit-card" size={30} style={stylesPro.Topic_Box_icon} />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>การชำระเงิน</Text>
          </View>
          <View style={stylesPro.Topic_Box}>
            <IconAntDesign RightItem name="shoppingcart" size={30} style={stylesPro.Topic_Box_icon} />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>การสั่งซื้อ</Text>
          </View>
          <View style={stylesPro.Topic_Box}>
            <IconAntDesign RightItem name="ellipsis1" size={30} style={stylesPro.Topic_Box_icon} />
            <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>หัวข้ออื่นๆ</Text>
          </View>
        </View>

      </View>
    );
  }
}




