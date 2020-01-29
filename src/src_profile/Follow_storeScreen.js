// หน้าร้านที่ติดตาม
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
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';

export const { width, height } = Dimensions.get('window');

export default class Follow_storeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='ร้านที่ติดตาม' />
        <ScrollView>
          <Follow_store_Box />
          <Might_like_Store />
        </ScrollView>
      </SafeAreaView>
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
        <View style={stylesPro.Follow_store_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={stylesPro.Follow_store_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={stylesPro.Follow_store_Box_text}>
              <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2]}>Asus_Thailand</Text>
              <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>@asusthailand</Text>
            </View>
          </View>
          <View style={stylesPro.Follow_store_Button}>
            <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3,{color:'#FFFFFF'}]}>กำลังติดตาม</Text>
          </View>
        </View>
        <View style={stylesPro.Follow_store_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={stylesPro.Follow_store_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={stylesPro.Follow_store_Box_text}>
              <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2]}>Mlife</Text>
              <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>@mlife</Text>
            </View>
          </View>
          <View style={stylesPro.Follow_store_Button}>
            <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3,{color:'#FFFFFF'}]}>กำลังติดตาม</Text>
          </View>
        </View>
        <View style={stylesPro.Follow_store_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={stylesPro.Follow_store_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={stylesPro.Follow_store_Box_text}>
              <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2]}>Digilife</Text>
              <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>@digilife_thai</Text>
            </View>
          </View>
          <View style={stylesPro.Follow_store_Button}>
            <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3,{color:'#FFFFFF'}]}>กำลังติดตาม</Text>
          </View>
        </View>
      </View>
    );
  }
}

///-----------------------------------------------------------------------------///

export class Might_like_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2,{marginTop:10, marginLeft:10,}]}>ร้านค้าที่คุณอาจชอบ</Text>
        <View style={stylesPro.Might_like_Store}>
          <View style={stylesPro.Follow_store_Box}>
            <View style={{ flexDirection: 'row', }}>
              <FastImage style={stylesPro.Follow_store_Box_image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                }}
              />
              <View style={stylesPro.Follow_store_Box_text}>
                <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2]}>ppooo</Text>
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>81% คะแนนร้านค้า</Text>
              </View>
            </View>
            <View style={stylesPro.Follow_store_Button}>
              <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3,{color:'#FFFFFF'}]}>ติดตาม</Text>
            </View>
          </View>

          <View style={stylesPro.Might_like_Store_Box}>
            <View style={stylesPro.Might_like_Store_BoxP}>
              <View style={stylesPro.Might_like_Store_BoxPro}>
                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>

              <View style={stylesPro.Might_like_Store_BoxPro}>
                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>
              <View style={stylesPro.Might_like_Store_BoxPro}>
                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>

              <View style={stylesPro.Might_like_Store_BoxPro}>
                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                  <IconEntypo name='chevron-right' size={35} />
                </View>
                <Text style={stylesFont.FontFamilyBold}>ดูทั้งหมด</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesPro.Might_like_Store}>
          <View style={stylesPro.Follow_store_Box}>
            <View style={{ flexDirection: 'row', }}>
              <FastImage style={stylesPro.Follow_store_Box_image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                }}
              />
              <View style={stylesPro.Follow_store_Box_text}>
                <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize2]}>ppooo</Text>
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize3]}>81% คะแนนร้านค้า</Text>
              </View>
            </View>
            <View style={stylesPro.Follow_store_Button}>
              <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize3,{color:'#FFFFFF'}]}>ติดตาม</Text>
            </View>
          </View>

          <View style={stylesPro.Might_like_Store_Box}>
            <View style={stylesPro.Might_like_Store_BoxP}>
              <View style={stylesPro.Might_like_Store_BoxPro}>
                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5]}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5,{color: '#0A55A6' }]}>฿3,xxx</Text>
              </View>

              <View style={stylesPro.Might_like_Store_BoxPro}>
                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5]}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5,{color: '#0A55A6' }]}>฿3,xxx</Text>
              </View>
              <View style={stylesPro.Might_like_Store_BoxPro}>
                <FastImage style={stylesPro.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5]}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={[stylesFont.FontFamilyText,stylesFont.FontSize5,{color: '#0A55A6' }]}>฿3,xxx</Text>
              </View>

              <View style={stylesPro.Might_like_Store_BoxPro}>
                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                  <IconEntypo name='chevron-right' size={35} />
                </View>
                <Text style={stylesFont.FontFamilyBold}>ดูทั้งหมด</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

    );
  }
}

