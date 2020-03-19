///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { FeedBox, GetServices, TabBar, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    const { selectedIndex } = this.state
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      selectedIndex !== nextState.selectedIndex
    ) {
      return true
    }
    return false
  }
  getData = (selectedIndex) => {
    this.setState({ selectedIndex });
  }
  render() {
    const { navigation } = this.props
    const { selectedIndex } = this.state
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        <AppBar1 titleHead='ฟีด' storeBar menuBar navigation={navigation} />
        <MenuBar sendText={this.getData.bind(this)} />
        <ScrollView>
          <Button_Bar selectedIndex={selectedIndex} navigation={navigation} />
        </ScrollView>
        <Toolbar navigation={navigation} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> MenuBar
export class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { sendText } = this.props
    if (
      ////>nextProps
      sendText !== nextProps.sendText
      ////>nextState
    ) {
      return true
    }
    return false
  }
  getData = (val) => {
    const { sendText } = this.props
    sendText(val);
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
            sendData={this.getData.bind(this)}
            item={item}
            noSpace
            setVertical={2}
            widthBox={100}
            spaceColor='#0A55A6'
            activeColor='#fff'
            fontColor='#fff' />
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation, selectedIndex, } = this.props;
    if (
      ////>nextProps
      navigation !== nextProps.navigation || selectedIndex !== nextProps.selectedIndex
      ////>nextState
    ) {
      return true
    }
    return false
  }
  get ViewSide() {
    const { navigation, selectedIndex, } = this.props;
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
    return (
      <View>
        {this.ViewSide}
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Highlights
export class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { Follow, navigation } = this.props
    const { dataService } = this.state
    if (
      ////>nextProps
      Follow !== nextProps.Follow || navigation !== nextProps.navigation ||
      ////>nextState
      dataService !== nextState.dataService
    ) {
      return true
    }
    return false
  }
  getData = (dataService) => {
    this.setState({ dataService })
  }
  render() {
    const { Follow, navigation } = this.props
    const { dataService } = this.state
    var uri = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'Feed'
    }
    return (
      <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData.bind(this)} />
        <View style={stylesStore.StoreFeedBoxProduct}>
          {
            dataService &&
            <FeedBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql'
              Follow={
                Follow ?
                  Follow :
                  null
              } Header />
          }
        </View>
      </View>
    )
  }
}