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
import stylesStore from '../style/StylesStoreScreen';
import stylesMain from '../style/StylesMainScreen'
import stylesFont from '../style/stylesFont'
import { ip } from '../navigator/IpConfig'
export const { width, height } = Dimensions.get('window');
import { Toolbar, TabBar } from './tools/Tools'
import { AppBar1 } from './MainScreen';

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.getData = this.getData.bind(this)
  }
  getData(val) {
    // console.log(val);
    this.setState({
      selectedIndex: val
    });
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNoBackground, stylesMain.BackgroundAreaView]}>
        <AppBar1 titleHead='ฟีด' storeBar menuBar navigation={navigation} />
        <MenuBar sendText={this.getData} />
        <ScrollView>
          <Button_Bar selectedIndex={this.state.selectedIndex} navigation={navigation} />
          {/* <Follow_up />
          <Highlights/> */}
        </ScrollView>
        <Toolbar navigation={navigation} />
      </SafeAreaView>
    );
  }
}

///-------------------------------------------------------------------------///

export class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.getData = this.getData.bind(this)
  }
  getData(val) {
    // console.log(val);
    this.props.sendText(val);
  }
  render() {
    const item = [{
      name: 'กำลังติดตาม'
    }, {
      name: 'ไฮไลต์'
    }]
    return (
      <View>
        <View>
          {/* <View style={stylesStore.Button_Bar}> */}
          <TabBar
            sendData={this.getData}
            item={item}
            noSpace
            widthBox={100}
            spaceColor='#0A55A6'
            activeColor='#fff'
            fontColor='#fff'
          />
        </View>
      </View>
    );
  }
}

///-------------------------------------------------------------------------///

export class Button_Bar extends Component {
  constructor(props) {
    super(props);
  }
  ViewSide(selectedIndex) {
    // const { s_name, s_image } = this.props;
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView>
            <Highlights Follow navigation={this.props.navigation} />
          </SafeAreaView>
        );
      case 1:
        return (
          <SafeAreaView>
            <Highlights navigation={this.props.navigation} />
          </SafeAreaView>
        );
      default:
    }
  }
  render() {
    const { selectedIndex } = this.props
    return (
      <View>
        {this.ViewSide(selectedIndex)}
      </View>
    );
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
    const { Follow } = this.props
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
    const { Follow, navigation } = this.props
    let dataToday = this.state.dataSourceStoreFeed.map((item, indexs) => {
      // console.log(item);
      var dataMySQL_s = [ip + '/mysql/uploads/slide/NewStore', item.s_image].join('/');
      var dataMySQL_p = [ip + '/mysql/uploads/products', item.p_image].join('/');
      // console.log(dataMySQL_s)
      return (
        <View style={[stylesMain.BoxProduct4Box]} key={indexs}>
          <View style={stylesMain.BoxProduct4PlusHeader}>
            <TouchableOpacity onPress={() => { navigation.navigate('StoreScreen', { id_item: item.p_id_store }) }}>
              <View style={stylesMain.FlexRow}>
                <FastImage
                  style={stylesMain.BoxProduct4PlusImage}
                  source={{
                    uri: dataMySQL_s,
                  }}
                />
                <Text style={[stylesMain.BoxProduct4PlusImageText, stylesFont.FontFamilyBold, stylesFont.FontSize3]}>
                  {item.s_name}</Text>
              </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxProduct4PlusButtonBox}>
              {Follow ?
                null :
                <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                  <Text style={[stylesMain.BoxProduct4PlusButtonFollowText, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                    ติดตาม</Text>
                </View>
              }
              <IconEntypo name='dots-three-vertical' size={25} />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate('DetailScreen', { id_item: item.id_product }) }}>
              <View style={[stylesMain.ItemCenter, { width: '100%' }]}>
                <FastImage
                  source={{
                    uri: dataMySQL_p,
                  }}
                  style={stylesMain.BoxProduct4Image}
                />
              </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxProduct4ComBox}>
              <Text style={[stylesMain.BoxProduct4ComBoxDetail, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                {item.detail}</Text>
              <Text style={[stylesMain.BoxProduct4ComBoxTag, stylesFont.FontFamilyText, stylesFont.FontSize5]}>
                ที่สุดสำหรับคุณ</Text>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesMain.BoxProduct4ComBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  200 การเข้าชม</Text>
                <Text style={[stylesMain.BoxProduct4ComBoxText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  เมื่อ 3 วันที่ผ่านมา</Text>
              </View>
            </View>
            <View style={stylesMain.BoxProduct4ComBox2}>
              <View style={stylesMain.BoxProduct4ComBoxIcon}>
                <Icons name='heart' size={20} />
                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  ถูกใจ</Text>
              </View>
              <View style={stylesMain.BoxProduct4ComBoxIcon}>
                <Icons name='comment-dots' size={20} />
                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  แสดงความคิดเห็น</Text>
              </View>
              <View style={stylesMain.BoxProduct4ComBoxIcon}>
                <Icons name='share-square' size={20} />
                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                  แชร์</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
    return (
      <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView} >
        <View style={stylesStore.StoreFeedBoxProduct}>
          {dataToday}
        </View>
      </View>
    )
  }
}