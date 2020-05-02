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
import { AppBar1, ExitAppModule, GetData } from './MainScreen';
import { FeedBox, GetServices, TabBar, Toolbar, LoadingScreen } from './tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGetSource: true,
      activeSelectedIndex: true,
      selectedIndex: 0
    };
  }
  getSource = (value) => {
    this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie })
  }
  getSelectedIndex = (selectedIndex) => {
    this.setState({ selectedIndex });
  }
  getActiveSelectedIndex = (activeSelectedIndex) => {
    this.setState({ activeSelectedIndex });
  }
  render() {
    const { navigation } = this.props
    const { activeGetSource, activeSelectedIndex, currentUser, selectedIndex } = this.state
    console.log('=============================================FeedScreen')
    console.log('activeGetSource')
    console.log(activeGetSource)
    console.log('activeSelectedIndex')
    console.log(activeSelectedIndex)
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {
          activeGetSource == true &&
          <GetData key='GetData' getCokie={true} getUser={true} getSource={this.getSource.bind(this)} />
        }
        <AppBar1 titleHead='ฟีด' storeBar menuBar navigation={navigation} />
        {
          currentUser &&
          <MenuBar getActiveSelectedIndex={this.getActiveSelectedIndex.bind(this)} sendText={this.getSelectedIndex.bind(this)} />
        }
        <ScrollView>
          <Button_Bar activeGetSource={activeGetSource} activeSelectedIndex={activeSelectedIndex} currentUser={currentUser}
            getActiveSelectedIndex={this.getActiveSelectedIndex.bind(this)}
            selectedIndex={currentUser ? selectedIndex : 1} navigation={navigation} />
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
  getData = (value) => {
    const { getActiveSelectedIndex, sendText } = this.props
    sendText(value.selectedIndex);
    getActiveSelectedIndex(true);
  }
  render() {
    const item = [{
      name: 'กำลังติดตาม'
    }, {
      name: 'ไฮไลท์'
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
    this.state = {
    }
  }
  getData = (dataService) => {
    const { getActiveSelectedIndex } = this.props
    getActiveSelectedIndex(false);
    this.setState({ dataService })
  }
  render() {
    const { activeGetSource, activeSelectedIndex, currentUser, navigation, selectedIndex } = this.props
    const { dataService } = this.state
    var uri = [finip,
      selectedIndex == 0 ? 'brand/feed_store_follow' : 'brand/feed_highlight'].join('/');
    var dataBody = {
      id_customer: currentUser && currentUser.id_customer ? currentUser.id_customer : ''
    }
    console.log('=============================================Button_Bar')
    console.log('activeGetSource')
    console.log(activeGetSource)
    console.log('activeSelectedIndex')
    console.log(activeSelectedIndex)
    console.log(uri)
    console.log(dataBody)
    return (
      <View>
        {[
          ((activeGetSource == false && selectedIndex == 1) || activeSelectedIndex == true) &&
          <LoadingScreen key='LoadingScreen' />,
          (activeGetSource == false || selectedIndex == 1) && activeSelectedIndex == true &&
          <GetServices key='feed_store_follow' uriPointer={uri} dataBody={selectedIndex == 0 ? dataBody : undefined}
            getDataSource={this.getData.bind(this)} showConsole='feed_store_follow' />
        ]}
        <Highlights dataService={dataService && dataService.feed_follow} Follow navigation={navigation} />
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>> Highlights
export class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { dataService, Follow, navigation } = this.props
    return (
      <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView}>
        <View style={stylesStore.StoreFeedBoxProduct}>
          {
            dataService &&
            <FeedBox dataService={dataService} navigation={navigation}
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