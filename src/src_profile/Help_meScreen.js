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
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../icon/bgprofile.jpg')}
          style={{ height: 200, width: '100%', }}>
          <View style={{justifyContent:'center',alignItems:'center',paddingTop:20,}}>
            <Text style={{ color: '#FFFF', fontSize:20, }}>สวัสดีค่ะ คุณ xxxxxxxxx </Text>
            <Text style={{ color: '#FFFF', fontSize:20, }}>คุณต้องการความช่วยเหลือด้านใดคะ?</Text>
            <View style={{backgroundColor:'#FFFF'}}>
            <TextInput style={styles.TextInput, {
                    fontFamily: 'SukhumvitSet',
                    fontSize: 15,
                }}
                    placeholder="ค้นหาสินค้า/ร้านค้า"
                    onChangeText={(text) => this.state({ text })}></TextInput>
                <IconAntDesign RightItem name="search1" size={25} style={{ marginTop: 5, }} /></View>
            
          </View>
        </ImageBackground>


      </View>
    );
  }
}


