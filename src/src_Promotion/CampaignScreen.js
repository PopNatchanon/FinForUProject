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
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { finip, ip } from '../../navigator/IpConfig';
import FastImage from 'react-native-fast-image';
import { AppBar, Slide, Button_Bar } from './DealScreen';
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
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} Title='แคมเปญ'/>
        <ScrollView>
          <Slide />
          <Campaign_tag navigation={this.props.navigation}/>
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
            <CoinPageBody navigation={this.props.navigation}/>
          </View>
        )
      case 1:
        return (
          <View>
            <CoinPageBody />
          </View>
        )
      case 2:
        return (
          <View>
            <CoinPageBody />
          </View>
        )
      case 3:
        return (
          <View>
            <CoinPageBody />
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

export class CoinPageBody extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginTop: 10, width: width * 0.96, height: 200, borderWidth: 1, borderColor: '#EAEAEA', backgroundColor: 'white' }}>
          <View style={{ width: '100%', height: 140 }}>
            <FastImage
              source={{
                uri: ip + '/MySQL/uploads/slide/Banner_type/shoes_BannerBar.jpg',

              }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
            <View style={{ padding: 4, width: 200, }}>
              <Text>ส่วนลด 10% สำหรับร้าน เพชร </Text>
              <Text>วันหมดอายุ 03-02-2020</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between', marginLeft: 50, }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#0A55A6', borderWidth: 1, height: 35, width: 30, }}>
                <IconEntypo name='share' size={20} color='#0A55A6' />
              </View>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detail_Campaign')}>
                <View style={{ backgroundColor: '#0A55A6', width: 120, alignItems: 'center', borderRadius: 4, marginLeft: 10, height:35,}}>
                  <Text style={{ marginBottom: 'auto', marginTop: 'auto', color: '#fff' }}>รายละเอียด</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    )
  }
}