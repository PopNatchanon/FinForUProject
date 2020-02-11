import React, { Component, PureComponent } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylePromotion-src/styleDealScreen';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar1 } from '../MainScreen';
import { Slide, Button_Bar } from './DealScreen';
import { TabBar } from '../tools/Tools';
export const { width, height } = Dimensions.get('window');

export default class CampaignScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <AppBar1 titleHead={'แคมเปญ'} backArrow searchBar chatBar navigation={this.props.navigation} />
        <ScrollView>
          <Slide />
          <Campaign_tag navigation={this.props.navigation} />
        </ScrollView>
        <Button_Bar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
///-------------------------------------------------------------------------///

export class Campaign_tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathlist: 0
    }
    this.getData = this.getData.bind(this);
  }
  PathList() {
    switch (this.state.pathlist) {
      case 0:
        return (
          <View>
            <CampaignBody navigation={this.props.navigation} />
          </View>
        )
      case 1:
        return (
          <View>
            <CampaignBody />
          </View>
        )
      case 2:
        return (
          <View>
            <CampaignBody />
          </View>
        )
      case 3:
        return (
          <View>
            <CampaignBody />
          </View>
        )
    }
  }
  getData(val) {
    // console.log(val);
    this.setState({
      pathlist: val
    });
  }
  render() {
    const item = [{
      name: 'แคมเปญทั้งหมด'
    }, {
      name: 'เพชร'
    }, {
      name: 'กระเป๋า'
    }, {
      name: 'ทอง'
    }]
    const coin = 1000;
    return (
      <View>
        <View style={{ marginTop: 10 }}>
          <TabBar
            sendData={this.getData}
            inactiveBoxColor={'#fff'}
            inactiveColor={'#0A55A6'}
            inactiveFontColor={'#0A55A6'}
            item={item}
            widthBox={98}
            type='box'
          />
        </View>
        <View>
          {this.PathList()}
        </View>
      </View>
    )
  }
}

export class CampaignBody extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={styles.CampaignBody}>
          <View style={styles.CampaignBody_BoxImage}>
            <FastImage
              source={{
                uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',

              }}
              style={styles.CampaignBody_Image}
            />
          </View>
          <View style={styles.CampaignBody_Box}>
            <View style={styles.CampaignBody_BoxText}>
              <Text style={stylesFont.FontFamilyBold}>ส่วนลด 10% สำหรับร้าน เพชร </Text>
              <Text style={stylesFont.FontFamilyText}>วันหมดอายุ 03-02-2020</Text>
            </View>
            <View style={styles.CampaignBody_Icon_Button}>
              <View style={styles.CampaignBody_Icon}>
                <IconEntypo name='share' size={20} color='#0A55A6' />
              </View>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Campaign')}>
                <View style={styles.CampaignBody_Button}>
                  <Text style={[stylesFont.FontFamilyBold, styles.CampaignBody_ButtonText]}>รายละเอียด</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}