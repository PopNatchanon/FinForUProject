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
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import { BarChart, Grid, StackedBarChart, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesProfile from '../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1, ExitAppModule } from '../MainScreen';
import { TabBar, NavigationNavigateScreen } from '../../customComponents/Tools';
import { Product_income } from '../src_Seller/Seller_Topic';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    }
  }
  PathList() {
    const { route } = this.props
    const selectedIndex = route.params?.selectedIndex
    switch (selectedIndex) {
      case 0:
        return (
          <>
            {/* หน้าเข้ามาครั้งแรก Affiliate มีปุ่มให้กดสมัครสมาชิก */}
            <AppBar1 {...this.props} backArrow titleHead='สมาชิกAffiliate' />
            <Register_Affiliate {...this.props} />
          </>
        )
      case 1:
        return (
          <>
            {/* หน้าเมนูหลักของ Affiliate  */}
            <AppBar1 {...this.props} backArrow titleHead='สมาชิกAffiliate' />
            <Menu_Affiliate {...this.props} />
          </>
        )
      case 2:
        return (
          <>
            {/* หน้าโปรไฟล์ของ Affiliate มีเมนูด้านล่าง */}
            <AppBar1 {...this.props} backArrow titleHead='สมาชิกAffiliate' />
            <ScrollView>
              <Business_Profile {...this.props} />
            </ScrollView>
          </>
        )
      case 3:
        return (
          <>
            {/* เข้าจากโปรไฟล์ของ Affiliate รายการสินค้า */}
            <AppBar1 {...this.props} backArrow titleHead='สมาชิกAffiliate' />
            <ScrollView>
              <Income {...this.props} />
            </ScrollView>
          </>
        )
      case 4:
        return (
          <>
            {/* เข้าจากโปรไฟล์ของ Affiliate การเติบโต */}
            <AppBar1 {...this.props} backArrow titleHead='สมาชิกAffiliate' />
            <Growth />
          </>
        )
      case 5:
        return (
          <>
            {/* เข้าจากเมนูหลักของ Affiliate การเงิน */}
            <AppBar1 {...this.props} backArrow titleHead='การเงิน' />
            <Finance {...this.props} />
          </>
        )
      case 6:
        return (
          <>
            {/* หน้าแบบFromการสมัครสมาชิก Affiliate */}
            <AppBar1 {...this.props} backArrow titleHead='สมาชิกAffiliate' />
            <Register_Affiliate_From {...this.props} />
          </>
        )
      case 7:
        return (
          <>
            {/* หน้าเพิ่มสำเนาบัตรประชาชน เข้าจาก หน้าแบบFromการสมัครสมาชิก Affiliate */}
            <AppBar1 {...this.props} backArrowtitleHead='บัตรประชาชน' />
            <ID_card />
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
            backgroundColor: '#FFFFFF', borderColor: mainColor,
            borderWidth: 2, width: width * 0.40, borderRadius: 5, marginBottom: -10, elevation: 1, paddingVertical: 5
          }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>สมาชิกAffiliate</Text>
          </View>
          <View style={{ borderColor: mainColor, borderWidth: 2, padding: 10, borderRadius: 5 }} >
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
              onPress={() => NavigationNavigateScreen({ goScreen: 'Business', setData: { selectedIndex: 6 }, navigation })}
              style={[stylesMain.ItemCenter, {
                borderColor: mainColor, borderWidth: 2,
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
            backgroundColor: '#FFFFFF', borderColor: mainColor,
            borderWidth: 2, width: width * 0.40, borderRadius: 5, marginBottom: -10, elevation: 1, paddingVertical: 5
          }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center' }]}>สมาชิกAffiliate</Text>
          </View>
          <View style={{ borderColor: mainColor, borderWidth: 2, padding: 30, borderRadius: 5, }} >
            <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
              <View style={{ width: '48%', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                  goScreen: 'Business', setData: { selectedIndex: 2 }, navigation
                })}>
                  <View style={{ height: 100, width: 100, borderColor: mainColor, borderWidth: 2, padding: 10, borderRadius: 5 }}>
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
                  <View style={{ height: 100, width: 100, borderColor: mainColor, borderWidth: 2, padding: 10, borderRadius: 5 }}>
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
                  <View style={{ height: 100, width: 100, borderColor: mainColor, borderWidth: 2, padding: 10, borderRadius: 5 }}>
                    <FastImage
                      style={stylesMain.BoxProduct1Image}
                      source={{ uri: ip + '/MySQL/uploads/Affiliate/passbook-512.png' }} />
                  </View>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { width: 100, textAlign: 'center' }]}>บัญชีธนาคาร</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '48%' }}>
                <TouchableOpacity>
                  <View style={{ height: 100, width: 100, borderColor: mainColor, borderWidth: 2, padding: 10, borderRadius: 5 }}>
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
    const { navigation } = this.props
    return (
      <>
        <View style={[stylesMain.FrameBackground, { alignItems: 'center', }]}>
          <View style={{
            height: 100, width: 100, backgroundColor: '#128BCE',
            borderRadius: 50, marginTop: 20, padding: 10, borderWidth: 2, borderColor: mainColor
          }} >
            <FastImage
              style={stylesMain.BoxProduct1Image}
              source={{
                uri: `${ip}/MySQL/uploads/addmin/unnamed.png`,
              }}
              resizeMode={FastImage.resizeMode.stretch} />
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>ชื่อ นาย ชนะชัย โอชานะ</Text>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', width: '80%', marginTop: 10, marginBottom: 10 }]}>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { borderColor: mainColor, borderWidth: 2, width: '49%', borderRadius: 5, height: 30 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>ยอดเงิน</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>77,700</Text>
            </View>
            <View style={[stylesMain.ItemCenter, stylesMain.FlexRow, { borderColor: mainColor, borderWidth: 2, width: '49%', borderRadius: 5, height: 30 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>แชร์</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>256</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
          <View style={[stylesProfile.ListMenuList, { justifyContent: 'center', padding: 10 }]}>
            <View style={stylesProfile.ListMenuListSub}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginRight: 10 }]}>ระยะเวลา</Text>
              <View style={{ borderColor: '#EAEAEA', borderWidth: 1, width: '60%', alignItems: 'center' }}>
                <ModalDropdown
                  options={['All', 'Today', 'Last 7 Days', 'This Month']}
                  defaultValue={'All'}
                  textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                  dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
                  dropdownStyle={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: '43%' }}>
                </ModalDropdown>
              </View>
            </View>
          </View>
          <View style={[stylesProfile.ListMenuList, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>ยอดเงินสะสม</Text>
            <View style={stylesProfile.ListMenuListSub}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginRight: 10 }]}>+0 (+0.00%)</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>0 THB</Text>
            </View>
          </View>
          <View style={[stylesProfile.ListMenuList, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>จำนวนคลิก</Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>0 ครั้ง</Text>
          </View>
          <View style={[stylesProfile.ListMenuList, { padding: 10 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ต่อคลิก</Text>
            <View style={stylesProfile.ListMenuListSub}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginRight: 10 }]}>+0 (+0.00%)</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>0 THB</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={1}
            onPress={() => NavigationNavigateScreen({ goScreen: 'Business', setData: { selectedIndex: 3 }, navigation })}>
            <View style={[stylesProfile.ListMenuList, { paddingHorizontal: 10 }]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10 }]}>
                รายการสินค้า</Text>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}
            onPress={() => NavigationNavigateScreen({ goScreen: 'Business', setData: { selectedIndex: 4 }, navigation })}>
            <View style={[stylesProfile.ListMenuList, { paddingHorizontal: 10 }]}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10 }]}>
                การเติบโต</Text>
              <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
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
export class Growth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const fill = 'rgb(134, 65, 244)'
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const data1 = [50, 10, 40, 95, 4, 24, 50, 35, 53, 53, 24, 50,]
    const data2 = [10, 20, 40, 80, 1, 12, 10, 20, 30, 20, 10, 40,]
    const data = data1.concat(data2)
    const max = Math.max(...data)
    const min = Math.min(...data)
    const percen = [min, max,]
    const barData = [
      {
        data: data1.map((value) => ({ value })),
        svg: {
          fill: 'rgb(29, 70, 204)',
        },
      },
      {
        data: data2.map((value) => ({ value })),
      },
    ]
    return (
      <>
        <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', marginTop: 5, justifyContent: 'space-between', padding: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>กราฟ</Text>
          <View style={[stylesMain.ItemCenter, {
            borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: 100, flexDirection: 'row',
          }]}>
            <ModalDropdown
              options={['ทั้งหมด', 'สัปดาห์', 'เดือน', 'ปี']}
              defaultValue={'ทั้งหมด'}
              textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
              dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
              dropdownStyle={{ borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: 100 }}>
            </ModalDropdown>
            <IconAntDesign name='caretdown' size={15} style={{ marginLeft: 5 }} />
          </View>
        </View>
        <View style={{ height: 200, padding: 20, backgroundColor: '#FFFFFF', flexDirection: 'row' }}>
          <YAxis
            data={percen}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{
              fill: 'grey', fontSize: 9,
            }}
            formatLabel={(value) => `${value}%`}
            numberOfTicks={10}
          />
          <View style={{ flex: 1, marginLeft: 5 }}>
            <BarChart
              style={{ height: 160 }}
              data={barData}
              svg={{ fill }}
              yAccessor={({ item }) => item.value}
              showGrid={true}
              contentInset={{ top: 30, bottom: 30, left: 10, right: 10, }}>
              <Grid />
            </BarChart>
            <XAxis
              style={{ marginHorizontal: 8 }}
              data={data1}
              formatLabel={(value, index) => month[index]}
              contentInset={{ left: 10, right: 10, }}
              svg={{ fontSize: 9, fill: 'grey' }}
            />
          </View>
        </View>
        {/* <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 20, flexDirection: 'row', height: 150 }}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{ fill: 'grey', fontSize: 9,
            }}
            numberOfTicks={10}
          />
          <BarChart
            data={data}
            svg={{ fill }}
            contentInset={{ top: 10, bottom: 10 }}>
            <Grid />
          </BarChart>
          <XAxis
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 9, fill: 'grey' }}
          />
        </View> */}
        {/* <View style={{ height: 200, padding: 20 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            gridMin={0}
            contentInset={{ top: 10, bottom: 10 }}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View> */}
        {/* <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
          <StackedBarChart
            style={{ height: 150, }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            svg={{ fontSize: 10, fill: 'black' }}
            contentInset={{ top: 20, bottom: 10 }}
          />
          <XAxis
            style={{ marginHorizontal: 25}}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10, }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View> */}
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
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ต่อคลิก</Text>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
          </View>
        </View>
        <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: 10 }]}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>จำนวนคลิก</Text>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
          <View style={[stylesMain.ItemCenter, {
            width: '49%', backgroundColor: '#FFFFFF',
            marginVertical: 10, padding: 10, borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5
          }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>0 THB </Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดเงินที่ถอนได้</Text>
          </View>
          <View style={[stylesMain.ItemCenter, {
            width: '49%', backgroundColor: '#FFFFFF',
            marginVertical: 10, padding: 10, borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5
          }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>0 THB </Text>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดเงินที่ถอนแล้ว</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'Seller_Topic', setData: { selectedIndex: 13 }, navigation
        })}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
              ประวัติการถอนเงิน</Text>
            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigateScreen({
          goScreen: 'Seller_Topic', setData: { selectedIndex: 10, Withdraw: 'Withdraw' }, navigation
        })}>
          <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', backgroundColor: '#FFFFFF' }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>
              ถอนเงิน</Text>
            <IconEntypo name='chevron-right' style={stylesProfile.ListMenuListIcon} size={35} color={mainColor} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class Register_Affiliate_From extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeData: '',
      date: "",
    };
  }

  render() {
    const { navigation } = this.props
    const { Mr, Mrs, Miss, name, last_name, Line_ID } = this.state
    return (
      <>
        <ScrollView>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>เอกสารการสมัครสมาชิก</Text>
          <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>คำนำหน้า</Text>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { height: 25, justifyContent: 'space-around' }]}>
              <View style={[stylesMain.FlexRow, { width: '23%' }]}>
                <CheckBox
                  size={25}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={Mr}
                  onPress={() => this.setState({ Mr: true, Mrs: false, Miss: false })}
                />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>นาย</Text>
              </View>
              <View style={[stylesMain.FlexRow, { width: '23%' }]}>
                <CheckBox
                  size={25}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={Mrs}
                  onPress={() => this.setState({ Mrs: true, Mr: false, Miss: false })}
                />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>นาง</Text>
              </View>
              <View style={[stylesMain.FlexRow, { width: '23%' }]}>
                <CheckBox
                  size={25}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={Miss}
                  onPress={() => this.setState({ Miss: true, Mr: false, Mrs: false })}
                />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>นางสาว</Text>
              </View>
            </View>
          </View>
          <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
            <View style={{ width: '49%', }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อ</Text>
              <TextInput
                style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { borderWidth: 1, height: 45, borderRadius: 5 }]}
                value={name}
                onChangeText={(name) => this.setState({ activeData: true, name, })} />
            </View>
            <View style={{ width: '49%', }}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>นามสกุล</Text>
              <TextInput
                style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { borderWidth: 1, height: 45, borderRadius: 5 }]}
                value={last_name}
                onChangeText={(last_name) => this.setState({ activeData: true, last_name, })} />
            </View>
          </View>
          <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วัน/เดือน/ปีเกิด</Text>
            <DatePicker
              style={{ width: '100 %' }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="1-12-1920"
              maxDate="1-07-2020"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
              }}
              onDateChange={(date) => { this.setState({ date: date }) }} />
          </View>
          <TouchableOpacity onPress={() => NavigationNavigateScreen({
            goScreen: 'Business', setData: { selectedIndex: 7 }, navigation
          })}>
            <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { paddingHorizontal: 10 }]}>
              <View style={{ width: '95%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สำเนาบัตรประชาชน</Text>
                <View>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
                </View>
              </View>
              <View style={stylesMain.ItemCenter}>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
          <TouchableOpacity
            onPress={() => NavigationNavigateScreen({
              goScreen: 'Seller_Topic', setData: { selectedIndex: 17 }, navigation
            })} >
            <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { paddingHorizontal: 10 }]}>
              <View style={{ width: '95%' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>บัญชีธนาคาร</Text>
                <View>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
                </View>
              </View>
              <View style={stylesMain.ItemCenter}>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
          <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Line ID</Text>
            <TextInput
              style={[stylesFont.FontSize7, stylesFont.FontFamilyText, { borderWidth: 1, height: 45, borderRadius: 5 }]}
              value={Line_ID}
              onChangeText={(Line_ID) => this.setState({ activeData: true, Line_ID, })} />
          </View>
          <View style={stylesMain.FlexRow}>
            <CheckBox
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked, checked2: !this.state.checked2 })}
            />
            <View style={stylesMain.ItemCenter}>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>  ฉันยอมรับเงื่อนไขของ FIN</Text>
                <TouchableOpacity>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#36B680' }]}> ข้อตกลงการใช้งาน</Text>
                </TouchableOpacity>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}> และยินยอม</Text>
              </View>
              <View style={stylesMain.FlexRow}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน </Text>
                <TouchableOpacity>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#36B680' }]}> นโยบายส่วนตัว</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => NavigationNavigateScreen({
          goScreen: 'Business', setData: { selectedIndex: 1 }, navigation
        })} style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
        </TouchableOpacity>
      </>
    );
  }
}
///----------------------------------------------------------------------------------------------->>>>
export class ID_card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }

  render() {
    return (
      <>
        <ScrollView>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>บัตรประชาชน</Text>
          <View style={[stylesMain.FlexRow, { paddingHorizontal: 10, justifyContent: 'space-between' }]}>
            <View style={[{
              width: '68%', height: 50, backgroundColor: '#FFFFFF', paddingHorizontal: 10,
              borderColor: '#EAEAEA', borderWidth: 1, borderRadius: 5, justifyContent: 'center'
            }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#C5C5C5' }]}>ชื่อรูปที่อัพ.jpg</Text>
            </View>
            <TouchableOpacity style={[stylesMain.FlexRow, stylesMain.ItemCenter,
            { width: '30%', borderColor: mainColor, borderWidth: 2, borderRadius: 5 }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>อัพโหลด</Text>
              <IconEntypo name='upload' size={25} style={{ color: mainColor, marginLeft: 5 }} />
            </TouchableOpacity>
          </View>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#C5C5C5', textAlign: 'center' }]}>สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG .PDF</Text>
          <View style={{ backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderWidth: 1, borderRadius: 5, marginHorizontal: 10, padding: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginBottom: 10 }]}>โปรดระบุวันหมดอายุ</Text>
            <DatePicker
              style={{ width: '100 %' }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="1-12-1920"
              maxDate="1-07-2020"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
              }}
              onDateChange={(date) => { this.setState({ date: date }) }} />
          </View>
        </ScrollView>
        <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>บันทึก</Text>
        </TouchableOpacity>
      </>

    );
  }
}

///----------------------------------------------------------------------------------------------->>>>
export class Bank_book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Bank_book </Text>
      </View>
    );
  }
}
