import React, { Component } from 'react';
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
import { ButtonGroup } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import FastImage from 'react-native-fast-image';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from '../style/stylesFeedScreen';
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');
import { Toolbar, TabBar } from './tools/Tools'


export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar navigation={this.props.navigation} />
        <ScrollView style={{ alignContent: 'center', }}>
          <Button_Bar />
          {/* <Follow_up />
          <Highlights/> */}
        </ScrollView>
        <Toolbar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

export class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.Appbar}>
        <View style={styles.Icon_appbar_Text}>
          <Text style={[styles.Text_appbar, { fontFamily: 'SukhumvitSet-Text', }]}>ฟีต</Text>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Follow_storeScreen')}>
          <IconFontisto name='shopping-store' size={20} style={styles.Icon_appbar} />
        </TouchableOpacity>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
    this.getData = this.getData.bind(this)
  }
  ViewSide(selectedIndex) {
    // const { s_name, s_image } = this.props;
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView >
            <Follow_up />
          </SafeAreaView>
        );
      case 1:
        return (
          <SafeAreaView>
            <Highlights />
          </SafeAreaView>
        );
      default:
    }
  }
  getData(val) {
    // console.log(val);
    this.setState({
      selectedIndex: val
    });
  }
  render() {
    const item = [{
      name: 'กำลังติดตาม'
    }, {
      name: 'ไฮไลต์'
    }]
    const { selectedIndex } = this.state
    return (
      <View>
        {/* <View style={styles.Button_Bar}> */}
        <TabBar
          sendData={this.getData}
          item={item}
          boxSpace='nospace'
          widthBox={100}
          spaceColor='#0A55A6'
          activeColor='#fff'
          fontColor='#fff'
        />
        {/* </View> */}
        {this.ViewSide(selectedIndex)}
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Follow_up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceStoreFeed: [],
    };
  }

  getDataStoreFeed() {
    var url = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'Feed',
    }
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      //   console.log(getData.data);
      this.setState({
        dataSourceStoreFeed: getData.data,
      })
    })
  }

  componentDidMount() {
    this.getDataStoreFeed();
  }

  render() {
    let dataToday = this.state.dataSourceStoreFeed.map((item, indexs) => {
      // console.log( indexs + '. ' + item.image ),
      var dataMySQL_s = [ip + '/mysql/uploads/slide/NewStore', item.s_image].join('/');
      var dataMySQL_p = [ip + '/mysql', item.image_path, item.p_image].join('/');
      // console.log(dataMySQL_s)
      return (
        <View key={indexs}>
          <View style={styles.StoreFeed_header}>
            <View style={{ flexDirection: 'row', }}>
              <FastImage
                style={styles.StoreFeed_Image}
                source={{
                  uri: dataMySQL_s,
                }}
              />
              <Text style={[styles.StoreFeed_Text_store, { fontFamily: 'SukhumvitSet-Text', }]}>
                {item.s_name}
              </Text>
            </View>
            <View style={{ marginTop: 10, }}><IconEntypo name='dots-three-vertical' size={25} /></View>
          </View>
          <View style={styles.StoreFeedBox}>
            <FastImage
              source={{
                uri: dataMySQL_p,
              }}
              style={styles.StoreFeedImage}
            />
            <View style={styles.StoreFeedComBox}>
              <Text style={styles.StoreFeedComBoxDetail}>
                {item.detail}
              </Text>
              <Text style={[styles.StoreFeedComBoxTag, { fontFamily: 'SukhumvitSet-Text', }]}>
                ที่สุดสำหรับคุณ
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.StoreFeedComBoxText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  200 การเข้าชม
                </Text>
                <Text style={[styles.StoreFeedComBoxText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  เมื่อ 3 วันที่ผ่านมา
                </Text>
              </View>
            </View>
            <View style={styles.StoreFeedComBox2}>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='heart' size={20} />
                <Text style={[styles.StoreFeedComBoxIconText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  ถูกใจ
                </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='comment-dots' size={20} />
                <Text style={[styles.StoreFeedComBoxIconText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  แสดงความคิดเห็น
                </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='share-square' size={20} />
                <Text style={[styles.StoreFeedComBoxIconText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  แชร์
                </Text>
              </View>
            </View>
          </View>
        </View>

      );
    })
    return (
      <View style={styles.StoreFeed} >
        <View style={styles.StoreFeedBoxProduct}>
          {dataToday}
        </View>
      </View>
    )
  }
}

///-------------------------------------------------------------------------///

export class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceStoreFeed: [],
    };
  }

  getDataStoreFeed() {
    var url = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'Feed'
    }
    axios.post(
      url,
      dataBody,
    )
      .then((getData) => {
        //   console.log(getData.data);
        this.setState({
          dataSourceStoreFeed: getData.data,
        })
      })
  }

  componentDidMount() {
    this.getDataStoreFeed();
  }

  render() {
    let dataToday = this.state.dataSourceStoreFeed.map((item, indexs) => {
      // console.log( indexs + '. ' + item.image ),
      var dataMySQL_s = [ip + '/mysql/uploads/slide/NewStore', item.s_image].join('/');
      var dataMySQL_p = [ip + '/mysql/uploads', item.p_image].join('/');
      // console.log(dataMySQL_s)
      return (
        <View key={indexs}>
          <View style={styles.StoreFeed_header}>
            <View style={{ flexDirection: 'row', }}>
              <FastImage
                style={styles.StoreFeed_Image}
                source={{
                  uri: dataMySQL_s,
                }}
              />
              <Text style={[styles.StoreFeed_Text_store, { fontFamily: 'SukhumvitSet-Text', }]}>
                {item.s_name}
              </Text>
            </View>
            <View style={styles.StoreFeed_Button_F_Box}>
              <View style={styles.StoreFeed_Button_F}>
                <Text style={[styles.StoreFeed_Text_F, { fontFamily: 'SukhumvitSet-Text', }]}>ติดตาม</Text>
              </View>
              <IconEntypo name='dots-three-vertical' size={25} />
            </View>

          </View>
          <View style={styles.StoreFeedBox}>

            <FastImage
              source={{
                uri: dataMySQL_p,
              }}
              style={styles.StoreFeedImage}
            />




            <View style={styles.StoreFeedComBox}>
              <Text style={styles.StoreFeedComBoxDetail}>
                {item.detail}
              </Text>
              <Text style={[styles.StoreFeedComBoxTag, { fontFamily: 'SukhumvitSet-Text', }]}>
                ที่สุดสำหรับคุณ
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.StoreFeedComBoxText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  200 การเข้าชม
                </Text>
                <Text style={[styles.StoreFeedComBoxText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  เมื่อ 3 วันที่ผ่านมา
                </Text>
              </View>
            </View>
            <View style={styles.StoreFeedComBox2}>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='heart' size={20} />
                <Text style={[styles.StoreFeedComBoxIconText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  ถูกใจ
                </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='comment-dots' size={20} />
                <Text style={[styles.StoreFeedComBoxIconText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  แสดงความคิดเห็น
                </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='share-square' size={20} />
                <Text style={[styles.StoreFeedComBoxIconText, { fontFamily: 'SukhumvitSet-Text', }]}>
                  แชร์
              </Text>
              </View>
            </View>
          </View>
        </View>

      );
    })
    return (
      <View style={styles.StoreFeed} >
        <View style={styles.StoreFeedBoxProduct}>
          {dataToday}
        </View>
      </View>
    )
  }
}