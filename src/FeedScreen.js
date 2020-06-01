///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, View, FlatList
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, Botton_PopUp_FIN, } from './MainScreen';
import { FeedBox, GetData, GetServices, TabBar, Toolbar, LoadingScreen } from './customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from './navigator/IpConfig';
import { normalize } from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Main
export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGetSource: true,
      activeSelectedIndex: true,
      selectedIndex: 0
    };
  };
  componentDidMount() {
    const { activeGetSource, } = this.state;
    activeGetSource == true && GetData({ getCokie: true, getUser: true, getSource: this.getSource.bind(this) });
  };
  getSource = (value) => {
    this.setState({ activeGetSource: false, currentUser: value.currentUser, cokie: value.keycokie, activeLogin: value.activeLogin });
  };
  getSelectedIndex = (selectedIndex) => {
    this.setState({ selectedIndex });
  };
  getActiveSelectedIndex = (activeSelectedIndex) => {
    this.setState({ activeSelectedIndex });
  };
  render() {
    const { navigation } = this.props;
    const { activeGetSource, activeLogin, activeSelectedIndex, currentUser, selectedIndex } = this.state;
    return (
      <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
        {
          activeGetSource == true &&
          <LoadingScreen key='LoadingScreen' />
        }
        <AppBar1 titleHead='ฟีด' storeBar menuBar navigation={navigation} />
        {
          currentUser &&
          <MenuBar getActiveSelectedIndex={this.getActiveSelectedIndex.bind(this)} sendText={this.getSelectedIndex.bind(this)} />
        }
        {
          activeGetSource == false &&
          <Button_Bar activeSelectedIndex={activeSelectedIndex}
            currentUser={currentUser} getActiveSelectedIndex={this.getActiveSelectedIndex.bind(this)}
            selectedIndex={currentUser ? selectedIndex : 1} navigation={navigation} />
        }
        <Botton_PopUp_FIN />
        <Toolbar navigation={navigation} />
        <ExitAppModule navigation={navigation} />
      </SafeAreaView>
    );
  };
};
///----------------------------------------------------------------------------------------------->>>> MenuBar
export class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  getData = (value) => {
    const { getActiveSelectedIndex, sendText } = this.props;
    sendText(value.selectedIndex);
    getActiveSelectedIndex(true);
  };
  render() {
    const item = [{
      name: 'กำลังติดตาม'
    }, {
      name: 'ไฮไลท์'
    }];
    return (
      <View>
        <View>
          <TabBar
            sendData={this.getData.bind(this)}
            item={item}
            noSpace
            setVertical={2}
            widthBox={100}
            spaceColor={mainColor}
            activeColor='#fff'
            fontColor='#fff' />
        </View>
      </View>
    );
  };
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  getData = (dataService) => {
    const { getActiveSelectedIndex } = this.props;
    getActiveSelectedIndex(false);
    this.setState({ dataService });
  };
  render() {
    const { activeSelectedIndex, currentUser, navigation, selectedIndex } = this.props;
    const { dataService } = this.state;
    var uri = `${finip}/${(selectedIndex == 0 ? 'brand/feed_store_follow' : 'brand/feed_highlight')}`
    var dataBody = {
      id_customer: currentUser && currentUser.id_customer ? currentUser.id_customer : ''
    };
    activeSelectedIndex == true &&
      GetServices({
        uriPointer: uri, dataBody: (selectedIndex == 0 ? dataBody : undefined), getDataSource: this.getData.bind(this),
        showConsole: 'feed_store_follow'
      });
    return (
      <View style={{ flex: 1, height: '100%' }}>
        {
          activeSelectedIndex == true &&
          <LoadingScreen key='LoadingScreen' />
        }
        <Highlights dataService={dataService && dataService.feed_follow} Follow navigation={navigation} />
      </View>
    );
  };
};
///----------------------------------------------------------------------------------------------->>>> Highlights
export class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render() {
    const { dataService, Follow, navigation } = this.props;
    return (
      <View style={stylesMain.FrameBackground, stylesMain.BackgroundAreaView}>
        <View>
          {
            dataService &&
            <FlatList
              scrollEnabled={true}
              initialNumToRender={10}
              data={dataService}
              keyExtractor={(value, index) => `Feed${index}`}
              // ListHeaderComponent={this.renderHeader}
              ListHeaderComponentStyle={{
                flexDirection: 'column'
              }}
              renderItem={(value) =>
                <>
                  <FeedBox dataService={value.item} navigation={navigation}
                    Follow={
                      Follow ?
                        Follow :
                        null
                    } Header />
                </>
              }
            />
          }
        </View>
      </View>
    );
  };
};