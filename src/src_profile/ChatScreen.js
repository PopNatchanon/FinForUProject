// หน้าแชท
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
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';

export const { width, height } = Dimensions.get('window');

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='แชท' />
        <ScrollView>
          <Chat_Box />
          <Chat_Box />
          <Chat_Box />
          <Chat_Box />
          <Chat_Box />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///------------------------------------------------------------------------------///


export class Chat_Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={stylesPro.Chat_Box}>
          <View style={styleMain.FlexRow}>
            <View>
              <FastImage style={stylesPro.Chat_Box_image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                }}
              />
              <View style={{ height: 20, width: 70,alignItems:'flex-end',marginTop:-20}}>
                <View style={{height:15,width:15, backgroundColor:'#1BE72F',borderRadius:10,}}></View>
              </View>
            </View>
            <View style={stylesPro.Chat_Box_text}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}>ppooooo</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>สินค้าได้ถูกขายแล้วค่ะ</Text>
            </View>
          </View>

          <View style={stylesPro.Chat_Box_icon}>
            <Icons name='bell' size={25} />
            <IconFontAwesome style={stylesPro.Chat_icon} name='trash-o' size={25} />
          </View>
        </View>
      </View>

    );
  }
}
