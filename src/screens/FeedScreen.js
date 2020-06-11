///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, Text, View, FlatList, TouchableOpacity, ActivityIndicator
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import { normalize } from '../style/stylesFont';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, Botton_PopUp_FIN, } from './MainScreen';
import {
  FeedBox, GetData, GetServices, TabBar, Toolbar, LoadingScreen, NavigationNavigateScreen,
} from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default function FeedScreen(props) {
  abortController = new AbortController();
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
  const [cokie, setCokie] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    GetData({
      abortController, getCokie: true, getUser: true, getSource: value => {
        setCurrentUser(value.currentUser);
        setCokie(value.keycokie);
        setActiveGetSource(false)
      },
    });
  }, [activeGetSource]);
  return (
    <SafeAreaView style={[stylesMain.SafeAreaViewNB, stylesMain.BackgroundAreaView]}>
      {/* {
          activeGetSource == true &&
          <LoadingScreen key='LoadingScreen' />
        } */}
      <AppBar1 {...props} titleHead='ฟีด' storeBar menuBar />
      {
        currentUser &&
        <MenuBar getActiveSelectedIndex={activeSelectedIndex => setActiveSelectedIndex(activeSelectedIndex)}
          sendText={selectedIndex => setSelectedIndex(selectedIndex)} />
      }

      {
        activeGetSource == false ?
          <Button_Bar {...props} abortController={abortController} activeSelectedIndex={activeSelectedIndex}
            currentUser={currentUser} getActiveSelectedIndex={activeSelectedIndex => setActiveSelectedIndex(activeSelectedIndex)}
            selectedIndex={currentUser ? selectedIndex : 1} /> :
          <View style={{ width, height: height * 0.768 }}>
            <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
          </View>
      }
      <Botton_PopUp_FIN />
      <Toolbar {...props} />
      <ExitAppModule {...props} />
    </SafeAreaView>
  );
};
///----------------------------------------------------------------------------------------------->>>> MenuBar
export function MenuBar(props) {
  const { getActiveSelectedIndex, sendText } = props;
  const item = [{
    name: <Text><IconFontAwesome5 name='grin-hearts' size={20} /> กำลังติดตาม</Text>
  }, {
    name: <Text><IconFontAwesome5 name='hotjar' size={20} /> ฮไลท์</Text>
  }];
  return (
    <View>
      <TabBar
        sendData={value => {
          sendText(value.selectedIndex);
          getActiveSelectedIndex(true);
        }}
        item={item}
        noSpace
        setVertical={2}
        widthBox={110}
        spaceColor={mainColor}
        activeColor='#fff'
        fontColor='#fff' />
    </View>
  );
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export function Button_Bar(props) {
  const { activeSelectedIndex, currentUser, getActiveSelectedIndex, selectedIndex } = props;
  var uri = `${finip}/${(selectedIndex == 0 ? 'brand/feed_store_follow' : 'brand/feed_highlight')}`
  var dataBody = {
    id_customer: currentUser && currentUser.id_customer ? currentUser.id_customer : ''
  };
  const [dataService, setDataService] = useState(null);
  useEffect(() => {
    GetServices({
      uriPointer: uri, dataBody: (selectedIndex == 0 ? dataBody : undefined), getDataSource: value => {
        getActiveSelectedIndex(false);
        setDataService(value);
      },
    });
  }, [selectedIndex]);
  return (
    <View style={{ flex: 1, height: '100%' }}>
      {
        activeSelectedIndex == false ?
          dataService && dataService.feed_follow &&
          <Highlights {...props} dataService={dataService.feed_follow} Follow /> :
          <View style={{ width, height: height * 0.8 }}>
            <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
          </View>
      }
      <ActionButton buttonColor={mainColor} size={50}
        onPress={() => NavigationNavigateScreen({
          goScreen: 'Post_Feed', setData: {
            selectedIndex: 1,
          }, navigation
        })}>
      </ActionButton>
    </View>
  );
};
///----------------------------------------------------------------------------------------------->>>> Highlights
export function Highlights(props) {
  const { dataService, navigation } = props;
  function headerStoryList(navigation) {
    return (
      <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'StoryScreen', navigation })}>
        <View style={{ width, height: 50, backgroundColor: '#564867' }}></View>
      </TouchableOpacity>
    )
  }
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
            // ListHeaderComponent={() => headerStoryList(navigation)}
            renderItem={(value) => {
              return <>
                <FeedBox {...props} dataService={value.item} Header />
              </>
            }}
          />
        }
      </View>
    </View>
  );
};