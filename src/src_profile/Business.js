///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import {
  Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import { BarChart, Grid } from 'react-native-svg-charts'
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
import { TabBar, NavigationNavigateScreen } from '../customComponents/Tools';
import { Product_income } from '../src_Seller/Seller_Topic';
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
  PathList() {
    const { navigation } = this.props
    const selectedIndex = navigation.getParam('selectedIndex')
    switch (selectedIndex) {
      case 0:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='สมาชิกAffiliate' />
            <Register_Affiliate navigation={navigation} />

          </>
        )
      case 1:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='สมาชิกAffiliate' />
            <Menu_Affiliate navigation={navigation} />
          </>
        )
      case 2:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='สมาชิกAffiliate' />
            <ScrollView>
              <Business_Profile />
              <Business_MenuBar navigation={navigation} />
              {/* <Business_Profile />
              <Growth /> */}
            </ScrollView>
          </>
        )
      case 3:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='สมาชิกAffiliate' />
            <ScrollView>
              <Business_Profile />
              <Income navigation={navigation} />
            </ScrollView>
          </>
        )
      case 4:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='สมาชิกAffiliate' />
            <BarChartExample />
            {/* <Business_Profile />
            <Growth /> */}
          </>
        )
      case 5:
        return (
          <>
            <AppBar1 backArrow navigation={navigation} titleHead='การเงิน' />
            <Finance navigation={navigation} />
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
export class Register_Affiliate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={[stylesMain.ItemCenter, stylesMain.FrameBackground]}>
        <View style={[stylesMain.ItemCenter, { width: '95%', marginVertical: 10 }]}>
          <View style={[stylesMain.ItemCenter, {
            backgroundColor: '#FFFFFF', borderColor: '#0A55A6',
            borderWidth: 2, width: width * 0.40, borderRadius: 5, marginBottom: -10, elevation: 1, paddingVertical: 5
          }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>สมาชิกAffiliate</Text>
          </View>
          <View style={{ borderColor: '#0A55A6', borderWidth: 2, padding: 10, borderRadius: 5 }} >
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>FIN Affiliate Influencer Program ช่องทางใหม่หารายได้ผ่านโซเชียล</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>
              4 ขั้นตอนง่าย ๆ ในการเข้าร่วม  Affiliate Influencer Program</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>1. Register: สมัครเข้าร่วมเป็น Partner  ผ่าน Accesstrade</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>2. Share link: นำลิ้งก์โปรโมตสินค้า ที่คุณต้องการไปวางในช่องทาง Social media ของคุณ</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>3. Purchase: ลูกค้าเข้ามาซื้อสินค้าผ่านลิ้งก์ที่คุณแชร์</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>4. Earn Money: รับค่าคอมมิชชั่นในทุกเดือน (หลังผ่านการตรวจสอบ) Benefit ที่ Influencer ได้รับ
            มากกว่าแค่ค่าคอมมิชั่น ช่องทางออนไลน์ไหนบ้างที่ Influencer สามารถใช้โปรโมตสินค้าได้ Facebook
            Instagram Twitter YouTube เพียงคุณมีช่องทางใดช่องทางหนึ่ง หรือเว็บไซต์และโซเชียลอื่น ๆ เป็นของตัวเอง
            ก็สามารกลายมาเป็น Influencer ได้ ที่สำคัญ เราไม่จำกัดยอด Follower หรือผู้ติดตามอีกด้วย</Text>
          </View>
          <View style={[stylesMain.ItemCenter, { marginTop: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>ร่วมสมัครเป็นนักขายออนไลน์เพื่อสร้างรายได้กับเรา</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>เพิ่มโอกาสสร้างรายได้เสริม ด้วย Affiliate Marketing</Text>
            <TouchableOpacity
              // onPress={this.navigationNavigateScreen.bind(this, 'Business', { selectedIndex: 1 })}
              onPress={() => NavigationNavigateScreen({ goScreen: 'Business', setData: { selectedIndex: 4 }, navigation })}
              style={[stylesMain.ItemCenter, {
                borderColor: '#0A55A6', borderWidth: 2,
                margin: 10, padding: 10, borderRadius: 5
              }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>สมัครฟรี คลิกที่นี่!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Menu_Affiliate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={[stylesMain.ItemCenter, stylesMain.FrameBackground]}>
        <View style={[stylesMain.ItemCenter, { width: '98%', marginVertical: 10 }]}>
          <View style={[stylesMain.ItemCenter, {
            backgroundColor: '#FFFFFF', borderColor: '#0A55A6',
            borderWidth: 2, width: width * 0.40, borderRadius: 5, marginBottom: -10, elevation: 1, paddingVertical: 5
          }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center' }]}>สมาชิกAffiliate</Text>
          </View>
          <View style={{ borderColor: '#0A55A6', borderWidth: 2, padding: 30, borderRadius: 5, }} >
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
              <View style={{ width: '48%', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                  goScreen: 'Business', setData: { selectedIndex: 2 }, navigation
                })}>
                  <View style={{ height: 100, width: 100, borderColor: '#0A55A6', borderWidth: 2, padding: 10, borderRadius: 5 }}>
                    <FastImage
                      style={stylesMain.BoxProduct1Image}
                      source={{ uri: ip + '/MySQL/uploads/Affiliate/1458482.png' }} />
                  </View>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100, textAlign: 'center' }]}>ข้อมูลAffiliate</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '48%' }}>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                  goScreen: 'Business', setData: { selectedIndex: 5 }, navigation
                })}>
                  <View style={{ height: 100, width: 100, borderColor: '#0A55A6', borderWidth: 2, padding: 10, borderRadius: 5 }}>
                    <FastImage
                      style={stylesMain.BoxProduct1Image}
                      source={{ uri: ip + '/MySQL/uploads/Affiliate/bank2.png' }} />
                  </View>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100, textAlign: 'center' }]}>การเงิน</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginTop: 20 }]}>
              <View style={{ width: '48%', alignItems: 'flex-end' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
                  goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Bank' }, navigation
                })}>
                  <View style={{ height: 100, width: 100, borderColor: '#0A55A6', borderWidth: 2, padding: 10, borderRadius: 5 }}>
                    <FastImage
                      style={stylesMain.BoxProduct1Image}
                      source={{ uri: ip + '/MySQL/uploads/Affiliate/passbook-512.png' }} />
                  </View>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100, textAlign: 'center' }]}>บัญชีธนาคาร</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '48%' }}>
                <TouchableOpacity>
                  <View style={{ height: 100, width: 100, borderColor: '#0A55A6', borderWidth: 2, padding: 10, borderRadius: 5 }}>
                    <FastImage
                      style={stylesMain.BoxProduct1Image}
                      source={{ uri: ip + '/MySQL/uploads/Affiliate/page-icon-png-3.png' }} />
                  </View>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100, textAlign: 'center' }]}>เอกสาร</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
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
  render() {
    const { navigation } = this.props
    return (
      <>
        <View style={{ backgroundColor: '#FFFFFF' }}>
          <TouchableOpacity activeOpacity={1}
            onPress={() => NavigationNavigateScreen({ goScreen: 'Business', setData: { selectedIndex: 3 }, navigation })}>
            <View style={stylesProfile.ListMenuList}>
              <View style={stylesProfile.ListMenuListSub}>
                <Text style={[
                  stylesProfile.ListMenuListSubName, stylesFont.FontFamilyText, stylesFont.FontSize6,
                  stylesFont.FontCenter
                ]}>
                  รายการสินค้า</Text>
              </View>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}
            onPress={() => NavigationNavigateScreen({ goScreen: 'Business', setData: { selectedIndex: 4 }, navigation })}>
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
  updateIndex = (value) => {
    this.setState({ selectedIndex: value.selectedIndex })
  }
  dataItem(items1) {
    return (
      <View style={[stylesMain.FlexRow, { width: '100%', justifyContent: 'center', backgroundColor: '#FFFFFF', height: 30 }]}>
        <TabBar
          sendData={this.updateIndex.bind(this)}
          item={items1}
          // noLimit
          numberBox
          radiusBox={4}
        />
      </View>
    )
  }
  render() {
    const items1 = [{
      name: 'ยังไม่สำเร็จ'
    }, {
      name: 'สำเร็จแล้ว'
    },]
    return (
      <View>
        <View style={{ backgroundColor: '#FFFFFF', padding: 10, marginTop: 10 }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รายการสินค้า</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
          {this.dataItem(items1)}
        </View>
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
          <Product_income />
          <Product_income />
          <Product_income />
          <Product_income />
        </View>
      </View>
    )
  }
}



///----------------------------------------------------------------------------------------------->>>>
class BarChartExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const fill = 'rgb(134, 65, 244)'
    const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
    return (
      <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
        <Grid />
      </BarChart>
    )
  }

}
export class Growth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>กราฟ</Text>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={[stylesMain.FlexRow, stylesMain.ItemCenter, { height: 30, borderColor: '#ECECEC', borderWidth: 1, width: 100, borderRadius: 5 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>ทั้งหมด</Text>
              <IconAntDesign name='caretdown' size={15} />
            </TouchableOpacity>
            {/* <View style={[stylesMain.ItemCenter, { height: 60, borderColor: '#ECECEC', borderWidth: 1, width: 100 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>สัปดาห์</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>เดือน</Text>
            </View> */}
          </View>
        </View>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, paddingTop: 10, justifyContent: 'center' }]}>
          <View style={[stylesMain.ItemCenter, { height: 150, width: '90%', backgroundColor: 'blue' }]}>
            <Text>กราฟ</Text>
          </View>

        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ประจำเดือน</Text>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
          </View>
        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>การเติบโต (ยอดขาย)</Text>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
          </View>
        </View>
      </>
    );
  }
}

///----------------------------------------------------------------------------------------------->>>>
export class Finance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <View>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'Seller_Topic', setData: { selectedIndex: 13 }, navigation
        })}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
              ประวัติการถอนเงิน</Text>
            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Withdraw' }, navigation
        })}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
              ถอนเงิน</Text>
            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}