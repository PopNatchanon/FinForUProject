///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesProfile from '../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

export default class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    const { currentUser } = this.state;
    if (
      ////>nextProps
      navigation !== nextProps.navigation ||
      ////>nextState
      currentUser !== nextState.currentUser
    ) {
      return true
    }
    return false
  }
  PathList() {
    const { navigation } = this.props
    const selectedIndex = this.props.navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <AppBar1 backArrow navigation={navigation} titleHead='กลุ่มธุรกิจ' />
            <Business_Profile />
            <Business_MenuBar navigation={navigation} />
          </View>
        )
      case 1:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='กลุ่มธุรกิจ' />
            <ScrollView>
              <Business_Profile />
              <Income navigation={navigation} />
            </ScrollView>
          </>
        )
      case 2:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='กลุ่มธุรกิจ' />
            <ScrollView>
              <Business_Profile />
              <Growth />
            </ScrollView>
          </>
        )
      case 3:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='สมาชิกกลุ่มธุรกิจของฉัน' />
            <ScrollView>
              <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: 10 }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}> สมาชิกกลุ่มธุรกิจชั้นที่1 </Text>
                <View style={stylesMain.FlexRow}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>จำนวน</Text>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10 }]}>3000</Text>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10 }]}>คน</Text>
                </View>
              </View>
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
            </ScrollView>
          </>
        )
      case 4:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='รายได้จากสินค้า' />
            <ScrollView>
              <View style={{ backgroundColor: '#FFFFFF', height: 50, justifyContent: 'center' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginLeft: 10 }]}>รายการแชร์</Text>
              </View>
              <Income_Share />
              <Income_Share />
              <Income_Share />
              <Income_Share />
              <Income_Share />
            </ScrollView>
          </>
        )
    }
  }
  render() {
    return (
      <SafeAreaView style={stylesMain.SafeAreaView}>
        {this.PathList()}
      </SafeAreaView>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Business_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <View style={[stylesMain.FrameBackground, { alignItems: 'center', }]}>
          <View style={{ height: 100, width: 100, backgroundColor: '#C4C4C4', borderRadius: 50, marginTop: 20 }} />
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>ชื่อ นาย ชนะชัย โอชานะ</Text>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', width: '80%', marginTop: 10, marginBottom: 10 }]}>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { borderColor: '#0A55A6', borderWidth: 2, width: '49%', borderRadius: 5, height: 30 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>ยอดเงิน</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>77,700</Text>
            </View>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { borderColor: '#0A55A6', borderWidth: 2, width: '49%', borderRadius: 5, height: 30 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>แชร์</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>256</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}


///----------------------------------------------------------------------------------------------->>>>
export class Business_MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    if (
      ////>nextProps
      navigation !== nextProps.navigation
      ////>nextState
    ) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }
  render() {
    return (
      <>
        <View style={{ backgroundColor: '#FFFFFF' }}>
          <TouchableOpacity activeOpacity={1}
            onPress={this.navigationNavigateScreen.bind(this, 'Business', { selectedIndex: 1 })}>
            <View style={stylesProfile.ListMenuList}>
              <View style={stylesProfile.ListMenuListSub}>
                <Text style={[
                  stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                  stylesFont.FontCenter
                ]}>
                  รายได้</Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}
            onPress={this.navigationNavigateScreen.bind(this, 'Business', { selectedIndex: 2 })}>
            <View style={stylesProfile.ListMenuList}>
              <View style={stylesProfile.ListMenuListSub}>
                <Text style={[
                  stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                  stylesFont.FontCenter
                ]}>
                  การเติบโต</Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 9 })}>
            <View style={stylesProfile.ListMenuList}>
              <View style={stylesProfile.ListMenuListSub}>
                <Text style={[
                  stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                  stylesFont.FontCenter
                ]}>
                  การถอนเงิน</Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 1 })}>
            <View style={stylesProfile.ListMenuList}>
              <View style={stylesProfile.ListMenuListSub}>
                <Text style={[
                  stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                  stylesFont.FontCenter
                ]}>
                  บัญชีธนาคาร</Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const { navigation } = this.props
    if (
      ////>nextProps
      navigation !== nextProps.navigation
      ////>nextState
    ) {
      return true
    }
    return false
  }
  navigationNavigateScreen = (value, value2) => {
    const { navigation } = this.props
    value == 'goBack' ?
      navigation.goBack() :
      value == 'LoginScreen' ? (
        navigation.popToTop(),
        navigation.replace(value, value2)
      ) :
        navigation.push(value, value2)
  }

  render() {
    return (
      <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 10, height: 40 }]}>
          <TouchableOpacity style={[stylesMain.ItemCenter, { width: '50%' }]} activeOpacity={1}
            onPress={() => this.props.navigation.push('Seller_Topic', { selectedIndex: 8 })} >
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รายได้จากกลุ่มธุรกิจ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[stylesMain.ItemCenter, { width: '50%' }]} activeOpacity={1}
            onPress={this.navigationNavigateScreen.bind(this, 'Business', { selectedIndex: 4 })}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รายได้จากการแชร์ </Text>
          </TouchableOpacity>
        </View>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10, justifyContent: 'space-between' }]}>
          <View style={{ width: '30%' }}></View>
          <View style={[stylesMain.ItemCenter, { height: 130, width: 130, borderColor: '#0A55A6', borderWidth: 5, borderRadius: 75 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#0A55A6' }]}>฿100,000</Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={[stylesMain.FlexRow, stylesMain.ItemCenter, { height: 30, borderColor: '#ECECEC', borderWidth: 1, width: 100, borderRadius: 5 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ทั้งหมด</Text>
              <IconAntDesign name='caretdown' size={15} />
            </TouchableOpacity>
            {/* <View style={[stylesMain.ItemCenter,{ height: 60 ,borderColor:'#ECECEC',borderWidth:1,width:100}]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>สัปดาห์</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>เดือน</Text>
            </View> */}
          </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', height: 50, marginTop: -30, borderColor: '#ECECEC', borderWidth: 2, }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>กลุ่มธุรกิจ</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', marginVertical: 5 }}>
          <TouchableOpacity activeOpacity={1}
            onPress={this.navigationNavigateScreen.bind(this, 'Business', { selectedIndex: 3 })}>
            <View style={stylesProfile.ListMenuList}>
              <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
                <IconAntDesign name='user' size={30} />
              </View>
              <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>฿20,000</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>บาท</Text>
              </View>
              <IconEntypo name='chevron-right' style={{ marginTop: 20 }} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>฿20,000</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>บาท</Text>
            </View>
            <IconEntypo name='chevron-right' style={{ marginTop: 20 }} size={35} color='#0A55A6' />
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>฿20,000</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>บาท</Text>
            </View>
            <IconEntypo name='chevron-right' style={{ marginTop: 20 }} size={35} color='#0A55A6' />
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>฿20,000</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>บาท</Text>
            </View>
            <IconEntypo name='chevron-right' style={{ marginTop: 20 }} size={35} color='#0A55A6' />
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>฿20,000</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>บาท</Text>
            </View>
            <IconEntypo name='chevron-right' style={{ marginTop: 20 }} size={35} color='#0A55A6' />
          </View>
        </View>
      </>

    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Growth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 10, height: 40 }]}>
          <View style={[stylesMain.ItemCenter, { width: '50%' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>การเติบโต</Text>
          </View>
        </View>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10, justifyContent: 'space-between' }]}>
          <View style={{ width: '30%' }}></View>
          <View style={[stylesMain.ItemCenter, { height: 130, width: 130, borderColor: '#0A55A6', borderWidth: 5, borderRadius: 75 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize1, { color: '#0A55A6' }]}>3000</Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={[stylesMain.FlexRow, stylesMain.ItemCenter, { height: 30, borderColor: '#ECECEC', borderWidth: 1, width: 100, borderRadius: 5 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ทั้งหมด</Text>
              <IconAntDesign name='caretdown' size={15} />
            </TouchableOpacity>
            {/* <View style={[stylesMain.ItemCenter,{ height: 60 ,borderColor:'#ECECEC',borderWidth:1,width:100}]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>สัปดาห์</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>เดือน</Text>
            </View> */}
          </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', height: 50, marginTop: -30, borderColor: '#ECECEC', borderWidth: 2, }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>กลุ่มธุรกิจ</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', marginVertical: 5 }}>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>600</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>คน</Text>
            </View>
            <View></View>
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>600</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>คน</Text>
            </View>
            <View></View>
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>600</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>คน</Text>
            </View>
            <View></View>
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>600</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>คน</Text>
            </View>
            <View></View>
          </View>
          <View style={stylesProfile.ListMenuList}>
            <View style={[stylesMain.ItemCenter, { height: 50, width: 50, borderWidth: 3, borderRadius: 25, marginLeft: 20, margin: 10 }]}>
              <IconAntDesign name='user' size={30} />
            </View>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4,]}>600</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { marginLeft: 10 }]}>คน</Text>
            </View>
            <View></View>
          </View>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <View style={stylesMain.FrameBackground}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10 }]}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>รหัส</Text>
              <View style={{ marginLeft: 10 }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>FIN_121321</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>นาย ชัย โอชานะ</Text>
              </View>
            </View>
            <View style={stylesMain.FlexRow}>
              <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>แชร์</Text>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>ยอดผู้ซื้อ</Text>
              </View>
              <View>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>256</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>77,556</Text>
              </View>
            </View>
          </View>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', padding: 10, }]}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>รวมทั้งหมด</Text>
              <Text>77,556</Text>
            </View>
            <TouchableOpacity style={[stylesMain.ItemCenter, { width: 100, backgroundColor: '#0A55A6', borderRadius: 5 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ติดต่อ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Income_Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
        <View style={{ margin: 10 }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>Mlife </Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#8F8F8F' }]}>สั่งซื้อวันที่ 12 ธ.ค.2019</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={[stylesMain.FlexRow, { width: '95%', backgroundColor: '#F4F4F4', marginBottom: 10, padding: 10, justifyContent: 'space-between' }]}>
            <View style={stylesMain.FlexRow}>
              <View>
                <FastImage
                  style={{ height: 50, width: 50 }}
                  source={{ uri: ip + '/MySQL/uploads/products/2019-10-29-1572323907.png' }} />
              </View>
              <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>กระเป๋าxxxxxxxx</Text>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#8F8F8F' }]}>สี : น้ำตาล</Text>
              </View>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#8F8F8F' }]}>จัดส่งสินค้าแล้ว</Text>
          </View>
        </View>
      </View>
    );
  }
}


