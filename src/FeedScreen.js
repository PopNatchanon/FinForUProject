///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from './MainScreen';
import { GetServices, TabBar, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.getData = this.getData.bind(this)
  }
  getData(val) {
    this.setState({
      selectedIndex: val
    });
  }
  render() {
    const { selectedIndex } = this.state
    const { navigation } = this.props
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        <AppBar1 titleHead='ฟีด' storeBar menuBar navigation={navigation} />
        <MenuBar sendText={this.getData} />
        <ScrollView>
          <Button_Bar selectedIndex={selectedIndex} navigation={navigation} />
        </ScrollView>
        <Toolbar navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> MenuBar
export class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.getData = this.getData.bind(this)
  }
  getData(val) {
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
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends Component {
  constructor(props) {
    super(props);
  }
  ViewSide(selectedIndex) {
    const { navigation } = this.props;
    switch (selectedIndex) {
      case 0:
        return (
          <SafeAreaView>
            <Highlights Follow navigation={navigation} />
          </SafeAreaView>
        );
      case 1:
        return (
          <SafeAreaView>
            <Highlights navigation={navigation} />
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
///----------------------------------------------------------------------------------------------->>>> Highlights
export class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  dataToday() {
    const { dataService } = this.state
    const { Follow, navigation } = this.props
    return dataService.map((item, indexs) => {
      var dataMySQL_s = [ip + '/mysql/uploads/slide/NewStore', item.s_image].join('/');
      var dataMySQL_p = [ip + '/mysql/uploads/products', item.p_image].join('/');
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
                <Text style={[stylesMain.BoxProduct4PlusImageText, stylesFont.FontFamilyBold, stylesFont.FontSize5]}>
                  {item.s_name}</Text>
              </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxProduct4PlusButtonBox}>
              {Follow ?
                null :
                <View style={stylesMain.BoxProduct4PlusButtonFollow}>
                  <Text style={[stylesMain.BoxProduct4PlusButtonFollowText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
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
                  style={[stylesMain.BoxProduct4Image]}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </TouchableOpacity>
            <View style={stylesMain.BoxProduct4ComBox}>
              <Text style={[stylesMain.BoxProduct4ComBoxDetail, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                {item.detail}</Text>
              <Text style={[stylesMain.BoxProduct4ComBoxTag, stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                ที่สุดสำหรับคุณ</Text>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesMain.BoxProduct4ComBoxText, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                  200 การเข้าชม</Text>
                <Text style={[stylesMain.BoxProduct4ComBoxText, stylesFont.FontFamilyText, stylesFont.FontSize8]}>
                  เมื่อ 3 วันที่ผ่านมา</Text>
              </View>
            </View>
            <View style={stylesMain.BoxProduct4ComBox2}>
              <View style={stylesMain.BoxProduct4ComBoxIcon}>
                <IconFontAwesome5 name='heart' size={20} />
                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  ถูกใจ</Text>
              </View>
              <View style={stylesMain.BoxProduct4ComBoxIcon}>
                <IconFontAwesome5 name='comment-dots' size={20} />
                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  แสดงความคิดเห็น</Text>
              </View>
              <View style={stylesMain.BoxProduct4ComBoxIcon}>
                <IconFontAwesome5 name='share-square' size={20} />
                <Text style={[stylesMain.BoxProduct4ComBoxIconText, stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                  แชร์</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
  }
  render() {
    var uri = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'Feed'
    }
    return (
      <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView} >
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesStore.StoreFeedBoxProduct}>
          {this.dataToday()}
        </View>
      </View>
    )
  }
}