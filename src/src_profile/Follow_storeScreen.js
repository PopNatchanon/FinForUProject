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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#E9E9E9', }}>
        <Appbar navigation={this.props.navigation} />
        <ScrollView>
          <Follow_store_Box />
          <Might_like_Store />
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
        <View style={styles.Follow_store_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={styles.Follow_store_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={styles.Follow_store_Box_text}>
              <Text>Asus_Thailand</Text>
              <Text>@asusthailand</Text>
            </View>
          </View>
          <View style={styles.Follow_store_Button}>
            <Text style={{ color: '#FFF' }}>กำลังติดตาม</Text>
          </View>
        </View>
        <View style={styles.Follow_store_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={styles.Follow_store_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={styles.Follow_store_Box_text}>
              <Text>Mlife</Text>
              <Text>@mlife</Text>
            </View>
          </View>
          <View style={styles.Follow_store_Button}>
            <Text style={{ color: '#FFF' }}>กำลังติดตาม</Text>
          </View>
        </View>
        <View style={styles.Follow_store_Box}>
          <View style={{ flexDirection: 'row', }}>
            <FastImage style={styles.Follow_store_Box_image}
              source={{
                uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
              }}
            />
            <View style={styles.Follow_store_Box_text}>
              <Text>Digilife</Text>
              <Text>@digilife_thai</Text>
            </View>
          </View>
          <View style={styles.Follow_store_Button}>
            <Text style={{ color: '#FFF' }}>กำลังติดตาม</Text>
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
        <Text style={{ fontSize: 18, margin: 10, }}>ร้านค้าที่คุณอาจชอบ</Text>
        <View style={styles.Might_like_Store}>
          <View style={styles.Follow_store_Box}>
            <View style={{ flexDirection: 'row', }}>
              <FastImage style={styles.Follow_store_Box_image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                }}
              />
              <View style={styles.Follow_store_Box_text}>
                <Text>ppooo</Text>
                <Text>81% คะแนนร้านค้า</Text>
              </View>
            </View>
            <View style={styles.Follow_store_Button}>
              <Text style={{ color: '#FFF' }}>ติดตาม</Text>
            </View>
          </View>

          <View style={styles.Might_like_Store_Box}>
            <View style={styles.Might_like_Store_BoxP}>
              <View style={styles.Might_like_Store_BoxPro}>
                <FastImage style={styles.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>

              <View style={styles.Might_like_Store_BoxPro}>
                <FastImage style={styles.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>
              <View style={styles.Might_like_Store_BoxPro}>
                <FastImage style={styles.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>

              <View style={styles.Might_like_Store_BoxPro}>
                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                  <IconEntypo name='chevron-right' size={35} />
                </View>
                <Text>ดูทั้งหมด</Text>
              </View>
            </View>
          </View>  
        </View>
        <View style={styles.Might_like_Store}>
          <View style={styles.Follow_store_Box}>
            <View style={{ flexDirection: 'row', }}>
              <FastImage style={styles.Follow_store_Box_image}
                source={{
                  uri: ip + '/MySQL/uploads/slide/NewStore/luxury_shop1.jpg',
                }}
              />
              <View style={styles.Follow_store_Box_text}>
                <Text>ppooo</Text>
                <Text>81% คะแนนร้านค้า</Text>
              </View>
            </View>
            <View style={styles.Follow_store_Button}>
              <Text style={{ color: '#FFF' }}>ติดตาม</Text>
            </View>
          </View>

          <View style={styles.Might_like_Store_Box}>
            <View style={styles.Might_like_Store_BoxP}>
              <View style={styles.Might_like_Store_BoxPro}>
                <FastImage style={styles.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>

              <View style={styles.Might_like_Store_BoxPro}>
                <FastImage style={styles.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>
              <View style={styles.Might_like_Store_BoxPro}>
                <FastImage style={styles.Might_like_Store_BoxImage}
                  source={{
                    uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                  }}
                />
                <Text style={{ fontSize: 9, }}>ห้องพัก Deluxe Pool Villa</Text>
                <Text style={{ fontSize: 9, color: '#0A55A6' }}>฿3,xxx</Text>
              </View>

              <View style={styles.Might_like_Store_BoxPro}>
                <View style={{ borderColor: '#0A55A6', borderWidth: 1, borderRadius: 30, }}>
                  <IconEntypo name='chevron-right' size={35} />
                </View>
                <Text>ดูทั้งหมด</Text>
              </View>
            </View>
          </View>  
        </View>
      </View>
      
    );
  }
}

