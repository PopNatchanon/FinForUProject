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
  Picker,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import IconFeather from 'react-native-vector-icons/Feather';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './Profile_Topic';


export default class Return_products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  PathList() {
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <Return_products_pro />
          </View>
        )
      case 1:
        return (
          <View>
            <Return_products_From />
          </View>
        )
    }
  }
  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='คืนสินค้า/คืนเงิน'/>
        <ScrollView>
          {this.PathList()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}


export  class Return_products_pro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={stylesPro.products_pro}>
        <IconFeather name='edit' size={50} color='#A2A2A2'/>
          <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2,{color:'#A2A2A2'}]}>ยังไม่มีคำสั่งซื้อ</Text>
        </View>
     
    );
  }
}

///-----------------------------------------------------------------------------///

export  class Return_products_From extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <ScrollView>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { marginLeft: 10, marginTop: 10, }]}>สินค้าที่ต้องการคืน </Text>
          <Return />
          <Return_Detail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///-----------------------------------------------------------------------------///

export class Return extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styleMain.FrameBackground}>
        <View style={stylesPro.Return}>
          <View style={styleMain.FlexRow}>
            <View style={stylesPro.Return_Pro}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
              <Text>x 1</Text>
            </View>
          </View>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
        </View>
      </View>


    );
  }
}

///-----------------------------------------------------------------------------///

export class Return_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ padding: 10, }}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { margin: 5 }]}>ยอดเงินคืน</Text>
        <View style={stylesPro.Return_Detail_Box}>
        </View>

        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { margin: 5 }]}>เหตุผลการคืนสินค้า</Text>
        <View style={stylesPro.Return_Detail_Box}>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 35, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="สินค้าผิดหรือเสียหาย" value="java" />
            <Picker.Item label="อื่นๆ" value="js" />
          </Picker>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { margin: 5 }]}>ความคิดเห็นเพิ่มเติม</Text>
        <View style={stylesPro.Return_Detail_TextInput}>
          <TextInput
            fontSize={15}
            placeholder="แจ้งให้เราทราบเพิ่มเติมเกี่ยวสินค้า"
            multiline
            editable
            maxLength={5000}
            value={this.state.Detail}
            onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
        </View>
        <View style={stylesPro.Return_ImageBox}>
          <TouchableOpacity>
            <View style={stylesPro.Up_Image_Box}>
              <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
              <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5,{ color: '#0A55A6'}]}>+เพิ่มรูปภาพ(0/6)</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesPro.Return_ButtonBox}>
          <TouchableOpacity>
            <View style={stylesPro.Return_Button}>
              <Text>เปลี่ยนสินค้า</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[stylesPro.Return_Button,{marginLeft:10,}]}>
              <Text>ขอเงินคืน</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

