import React, { Component } from 'react';
import {
  View,
  Image,
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

import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from '../style/stylesFeedScreen';
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');


export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <AppBar />
        <ScrollView>
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
          <Text style={styles.Text_appbar}>ฟีต</Text>
        </View>
        <Icons RightItem name="store" size={25} style={styles.Icon_appbar} />
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Toolbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.Toolbar}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('MainScreen')} >
          <View >
            <IconAntDesign style={{ marginLeft: 5, }} name="home" size={25} />
            <Text>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('FeedScreen')} >
          <View >
            <IconAntDesign name="tagso" size={25} />
            <Text> Feed</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('NewsScreen')} >
          <View >
            <IconAntDesign name="notification" size={25} />
            <Text>News</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('BellScreen')} >
          <View >
            <IconAntDesign name="bells" size={25} />
            <Text>เตือน</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.replace('ProfileScreen')} >
          <View>
            <IconAntDesign name="user" size={25} />
            <Text> ฉัน</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


///-------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  ViewSide(selectedIndex) {
    // const { s_name, s_image } = this.props;
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView>
            <Follow_up />
          </SafeAreaView>
        );
        break;
      case 1:
        return (
          <SafeAreaView>
            <Highlights />
          </SafeAreaView>
        );
      default:
    }
  }

  render() {
    const component1 = () => <Text>กำลังติดตาม</Text>
    const component2 = () => <Text>ไฮไลต์</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    const { selectedIndex } = this.state
    return (
      <View>
        <View style={styles.Button_Bar}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 33,
              width: 200,
              borderWidth: 0,
              backgroundColor: '#0A55A6'
            }}
            selectedButtonStyle={{
              backgroundColor: '#ffffff',
              borderTopColor: '#ffffff',
              borderTopWidth: 4
            }}
            selectedTextStyle={{
              // color: '#FFFFFF',
            }}
          />
        </View>
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
              <Text style={styles.StoreFeed_Text_store}>
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
              <Text style={styles.StoreFeedComBoxTag}>
                ที่สุดสำหรับคุณ
                        </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StoreFeedComBoxText}>
                  200 การเข้าชม
                            </Text>
                <Text style={styles.StoreFeedComBoxText}>
                  เมื่อ 3 วันที่ผ่านมา
                            </Text>
              </View>
            </View>
            <View style={styles.StoreFeedComBox2}>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='heart' size={20} />
                <Text style={styles.StoreFeedComBoxIconText}>
                  ถูกใจ
                            </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='comment-dots' size={20} />
                <Text style={styles.StoreFeedComBoxIconText}>
                  แสดงความคิดเห็น
                            </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='share-square' size={20} />
                <Text style={styles.StoreFeedComBoxIconText}>
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
              <Text style={styles.StoreFeed_Text_store}>
                {item.s_name}
              </Text>
            </View>
            <View style={styles.StoreFeed_Button_F_Box}>
              <View style={styles.StoreFeed_Button_F}>
                <Text style={styles.StoreFeed_Text_F}>ติดตาม</Text>
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
              <Text style={styles.StoreFeedComBoxTag}>
                ที่สุดสำหรับคุณ
                        </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StoreFeedComBoxText}>
                  200 การเข้าชม
                            </Text>
                <Text style={styles.StoreFeedComBoxText}>
                  เมื่อ 3 วันที่ผ่านมา
                            </Text>
              </View>
            </View>
            <View style={styles.StoreFeedComBox2}>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='heart' size={20} />
                <Text style={styles.StoreFeedComBoxIconText}>
                  ถูกใจ
                            </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='comment-dots' size={20} />
                <Text style={styles.StoreFeedComBoxIconText}>
                  แสดงความคิดเห็น
                            </Text>
              </View>
              <View style={styles.StoreFeedComBoxIcon}>
                <Icons name='share-square' size={20} />
                <Text style={styles.StoreFeedComBoxIconText}>
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