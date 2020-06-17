///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, Text, View, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Button
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import ActionButton from 'react-native-action-button';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesMain, { mainColor } from '../style/StylesMainScreen';
import stylesStore from '../style/StylesStoreScreen';
import { normalize } from '../style/stylesFont';
import stylesFont from '../style/stylesFont';
import stylesDetail from '../style/StylesDetailScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule, Botton_PopUp_FIN, AppBar } from './MainScreen';
import {
  FeedBox, GetData, GetServices, TabBar, Toolbar, LoadingScreen, NavigationNavigateScreen,
} from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData,
  getFetchData: state.singleFetchDataFromService,
  activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({
  checkCustomer,
  fetchData,
  multiFetchData,
  setActiveFetch,
  setFetchToStart,
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
function FeedScreen(props) {
  const [activeGetSource, setActiveGetSource] = useState(true);
  const [activeSelectedIndex, setActiveSelectedIndex] = useState(true);
  const [cokie, setCokie] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    GetData({
      getCokie: true, getUser: true, getSource: value => {
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
      <AppBar1 {...props} titleHead='Feed' menuBar />
      {
        currentUser &&
        <MenuBar getActiveSelectedIndex={value => setActiveSelectedIndex(value)}
          sendText={value => setSelectedIndex(value)} />
      }
      {
        activeGetSource == false ?
          <Button_Bar {...props} activeSelectedIndex={activeSelectedIndex}
            currentUser={currentUser} getActiveSelectedIndex={value => setActiveSelectedIndex(value)}
            selectedIndex={currentUser ? selectedIndex : 1} /> :
          <View style={{ width, height: height * 0.768 }}>
            <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
          </View>
      }
      <Toolbar {...props} />
      <ExitAppModule {...props} />
    </SafeAreaView>
  );
};
///----------------------------------------------------------------------------------------------->>>> MenuBar
export function MenuBar(props) {
  const { getActiveSelectedIndex, selectedIndex, sendText } = props;
  const item = [{
    name: <Text style={stylesFont.FontSize6}>
      <IconFontAwesome5 name='grin-hearts' size={20} /> กำลังติดตาม</Text>
  }, {
    name: <Text style={stylesFont.FontSize6}>
      <IconFontAwesome5 name='hotjar' size={20} /> ฮไลท์</Text>
  }];
  return (
    <View>
      <>
        <TabBar
          sendData={value => {
            value.selectedIndex != 3 && ([
              sendText(value.selectedIndex),
              getActiveSelectedIndex(true)
            ])
          }}
          SetValue={selectedIndex}
          NoSelectTab
          item={item}
          noSpace
          setVertical={2}
          widthBox={130}
          spaceColor={mainColor}
          activeColor='#fff'
          fontColor='#fff' />
      </>
      <TouchableOpacity onPress={() => sendText(3)}
        style={{ left: '90%', bottom: '75%', width: 50, marginBottom: -20 }}>
        <IconFontAwesome name='navicon' size={25} style={{ width: 50, color: '#FFFF' }} />
      </TouchableOpacity>
    </View>
  );
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export function Button_Bar(props) {
  const { activeSelectedIndex, currentUser, getActiveSelectedIndex, selectedIndex, navigation } = props;
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
        selectedIndex == 3 ?
          <Feed_About {...props} /> :
          activeSelectedIndex == false ?
            dataService && dataService.feed_follow &&
            <Highlights {...props} dataService={dataService.feed_follow} Follow /> :
            <View style={{ width, height: height * 0.8 }}>
              <ActivityIndicator style={stylesMain.ItemCenterVertical} color='#1A3263' size='large' />
            </View>
      }
      {
        selectedIndex == 0 &&
        <ActionButton buttonColor={mainColor} size={50}
          onPress={() => NavigationNavigateScreen({
            goScreen: 'Post_Feed', setData: {
              selectedIndex: 1,
            }, navigation
          })}>
        </ActionButton>
      }
    </View >
  );
};
///----------------------------------------------------------------------------------------------->>>> Highlights
export function Highlights(props) {
  const { dataService, selectedIndex, } = props;
  function starReview(star, starSize) {
    let starBox = []
    for (var n = 0; n < 5; n++) {
      if (star > n) {
        starBox.push(
          <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
            starSize ?
              starSize :
              20
          } color='#FFAC33' />
        )
      } else {
        starBox.push(
          <IconFontAwesome style={stylesDetail.Price_IconStar} key={n} name='star' size={
            starSize ?
              starSize :
              20
          } color='#E9E9E9' />
        )
      }
    }
    return starBox
  }
  function headerStoryList() {
    return (
      selectedIndex == 1 &&
      <View style={[stylesMain.FrameBackground, { marginTop: -5 }]}>
        <Text style={[stylesMain.FrameBackgroundTextStart, stylesFont.FontSize4, stylesFont.FontFamilyBold]}>ร้านค้ายอดนิยม</Text>
        <ScrollView horizontal>
          <View style={{ paddingLeft: 10, flexDirection: 'row', aspectRatio: 3, }}>
            {
              [0, 1, 2, 3, 4].map((_, index) => {
                return (
                  <View key={index} style={{
                    width: '21%', marginRight: 10,
                    borderColor: '#C4C4C4', borderWidth: 1.5, marginBottom: 10,
                  }}>
                    <View style={{ height: '30%' }}>
                      <FastImage
                        style={stylesMain.BoxProduct1Image}
                        source={{
                          uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`,
                        }}
                        resizeMode={FastImage.resizeMode.cover} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <FastImage
                        style={{ height: 50, width: 50, borderWidth: 1, borderRadius: 25, marginTop: -20, backgroundColor: '#FFFFFF', borderColor: '#C4C4C4' }}
                        source={{
                          uri: `${ip}/MySQL/uploads/addmin/1212.png`,
                        }}
                        resizeMode={FastImage.resizeMode.cover} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyBold]}>PPoo</Text>
                      <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>ผู้ติดตาม 20.2 พัน</Text>
                      <View style={stylesMain.FlexRow}>{starReview(5, 15)}</View>
                      <Text style={[stylesFont.FontSize8, stylesFont.FontFamilyText]}>4.8 จาก 5 (46.9 พันคะแนน)</Text>
                      <TouchableOpacity>
                        <View style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', width: width * 0.20, borderRadius: 10, marginTop: 5, }]}>
                          <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { color: '#FFFFFF' }]}>ติดตาม</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
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
            ListHeaderComponent={() => headerStoryList()}
            renderItem={(value) => {
              return <>
                <FeedBox {...props} dataService={value.item} Header Follow={selectedIndex == 1 ? false : true} />
              </>
            }}
          />
        }
      </View>
    </View>
  );
};
///----------------------------------------------------------------------------------------------->>>> Feed_Login
export function Feed_Login(props) {
  const { currentUser } = props
  const image_user = `${finip}/${currentUser.image_path}/${currentUser.image}`
  return (
    <View style={{ backgroundColor: '#1A1555', flex: 1, marginTop: -6, alignItems: 'center' }}>
      <FastImage
        style={{ height: height * 0.30, width: width * 0.60, marginTop: 20 }}
        source={require('../../images/iconlogo.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { color: '#FFFFFF' }]}>ลงชื่อเข้าฟีด</Text>
      <View style={[stylesMain.ItemCenter, { backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: width * 0.75 }]}>
        <TouchableOpacity>
          <View style={[stylesMain.FlexRow,
          { borderColor: '#0A55A6', borderWidth: 1, borderRadius: 20, padding: 5, width: width * 0.60, }]}>
            <FastImage
              style={{ height: 40, width: 40, borderRadius: 25, borderWidth: 1 }}
              source={{
                uri: image_user
              }}
              resizeMode={FastImage.resizeMode.cover} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>{currentUser.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[stylesMain.FlexRow,
          { borderColor: '#0A55A6', borderWidth: 1, borderRadius: 20, padding: 5, width: width * 0.60, marginTop: 10 }]}>
            <FastImage
              style={{ height: 40, width: 40, borderRadius: 25, borderWidth: 1 }}
              source={{
                uri: `${ip}/MySQL/uploads/addmin/1212.png`,
              }}
              resizeMode={FastImage.resizeMode.cover} />
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>Store A</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

///----------------------------------------------------------------------------------------------->>>> Feed_About
export function Feed_About(props) {
  const { navigation } = props;
  return (<ScrollView>
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
      <View style={[stylesMain.FlexRow, { backgroundColor: '#E0EFFF', padding: 10, borderRadius: 5 }]}>
        <FastImage
          style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 2 }}
          source={{
            uri: `${ip}/MySQL/uploads/addmin/unnamed.png`,
          }}
          resizeMode={FastImage.resizeMode.cover} />
        <Text style={[stylesFont.FontSize3, stylesFont.FontFamilyBold, { margin: 10 }]}>Myn</Text>
      </View>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText]}>บันทึกกิจกรรมของฉัน</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText]}>รายการที่บันทึกไว้</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderColor: '#C4C4C4', borderBottomWidth: 3, paddingVertical: 5, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText]}>กลุ่มทั้งหมด</Text>
        </TouchableOpacity>
      </View>
      <View style={[stylesMain.FlexRow, { backgroundColor: '#E0EFFF', padding: 10, borderRadius: 5 }]}>
        <View style={{ height: 100, width: 170, }}>
          <FastImage
            style={stylesMain.BoxProduct1Image}
            source={{
              uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`,
            }}
            resizeMode={FastImage.resizeMode.cover} />
        </View>
        <View style={{ width: '50%', paddingHorizontal: 10 }}>
          <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold, { color: '#0A55A6' }]}>J&W Jewery</Text>
          <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyText]}>แหล่งรวมเครื่องประดับสำหรับคุณผู้หญิงที่ตอบโจทย์ผู้หญิงได้ทุกรุ่นทุกวัย</Text>
        </View>
      </View>
      <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyBold, { margin: 5 }]}>กำลังติดตาม</Text>
      {
        [0, 1, 2, 3].map((_, index) => {
          return (
            <View key={index} style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginTop: 2, padding: 10 }]}>
              <View style={stylesMain.FlexRow}>
                <FastImage
                  style={{ height: 50, width: 50, borderRadius: 25, }}
                  source={{
                    uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`,
                  }}
                  resizeMode={FastImage.resizeMode.cover} />
                <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { margin: 10 }]}>BP World</Text>
              </View>
              <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', borderRadius: 10, paddingHorizontal: 15, height: 30, marginTop: 5 }]}>
                <Text style={[stylesFont.FontSize7, stylesFont.FontFamilyBold, { color: '#FFFFFF' }]}>กำลังติดตาม</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
        <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>เพิ่มเติม</Text>
        <IconEntypo name='chevron-down' size={25} />
      </View>
      <Text style={[stylesFont.FontSize4, stylesFont.FontFamilyBold, { margin: 5 }]}>กลุ่มของคุณ</Text>
      <TouchableOpacity onPress={() => NavigationNavigateScreen({
        goScreen: 'Post_Feed', setData: {
          selectedIndex: 11,
        }, navigation
      })}>
        <View style={[stylesMain.FlexRow, { padding: 10, borderRadius: 5 }]}>
          <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderRadius: 25, borderWidth: 2 }]}>
            <IconAntDesign name='plus' size={30} />
          </View>
          <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { margin: 10 }]}>สร้างกลุ่ม</Text>
        </View>
      </TouchableOpacity>
      {
        [0, 1, 2, 3].map((_, index) => {
          return (
            <View key={index} style={[stylesMain.FlexRow, { marginTop: 2, padding: 10 }]}>
              <View style={stylesMain.FlexRow}>
                <FastImage
                  style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 2 }}
                  source={{
                    uri: `${ip}/MySQL/uploads/Resize/Promotion/003.jpg`,
                  }}
                  resizeMode={FastImage.resizeMode.cover} />
                <Text style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { margin: 10 }]}>เสื้อผ้าคุณผู้หญิง Less is more</Text>
              </View>
            </View>
          )
        })}
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
        <Text style={[stylesFont.FontSize5, stylesFont.FontFamilyBold]}>เพิ่มเติม</Text>
        <IconEntypo name='chevron-down' size={25} />
      </View>
    </View>
  </ScrollView>
  )
}
