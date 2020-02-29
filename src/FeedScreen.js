///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../style/stylesFont';
import stylesMain from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from './MainScreen';
import { FeedBox, GetServices, TabBar, Toolbar } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FeedScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.getData = this.getData.bind(this)
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { selectedIndex } = this.state
    const { navigation } = this.props
    if (selectedIndex !== nextState.selectedIndex || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  getData = (val) => {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({
        selectedIndex: val
      });
    }
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
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> MenuBar
export class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.getData = this.getData.bind(this)
  }
  getData = (val) => {
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
            setVertical={2}
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
  shouldComponentUpdate = (nextProps, nextState) => {
    const { selectedIndex, navigation } = this.props
    if (selectedIndex !== nextProps.selectedIndex || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  get ViewSide() {
    const { selectedIndex, navigation } = this.props;
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
export class Highlights extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
    this.getData = this.getData.bind(this)
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { dataService } = this.state
    const { Follow, navigation } = this.props
    if (dataService !== nextState.dataService || Follow !== nextProps.Follow || navigation !== nextProps.navigation) {
      return true
    }
    return false
  }
  getData = (dataService) => {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({ dataService })
    }
  }
  render() {
    const { dataService } = this.state
    const { Follow, navigation } = this.props
    var uri = ip + '/mysql/DataService_Detail.php';
    var dataBody = {
      type: 'Feed'
    }
    return (
      <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView}>
        <GetServices uriPointer={uri} dataBody={dataBody} getDataSource={this.getData} />
        <View style={stylesStore.StoreFeedBoxProduct}>
          {
            dataService ?
              <FeedBox dataService={dataService} navigation={navigation} typeip='ip' prepath='mysql'
                Follow={Follow ? Follow : null} Header
              /> :
              null
          }
        </View>
      </View>
    )
  }
}