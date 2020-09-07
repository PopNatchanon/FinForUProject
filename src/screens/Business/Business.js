///----------------------------------------------------------------------------------------------->>>> React
import React, { useState } from 'react';
import {
  Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesProfile from '../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../customComponents';
import { ExitAppModule } from '../Main/Main';
import { Product_income } from '../Seller/SellerTopic/Seller_Topic';
import { TabBar } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Business);
function Business(props) {
  const { route } = props;
  const selectedIndex = route.params?.selectedIndex;
  let PathList = () => {
    switch (selectedIndex) {
      case 0: // หน้าเข้ามาครั้งแรก Affiliate มีปุ่มให้กดสมัครสมาชิก  
        return <>
          <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
          <Register_Affiliate {...props} />
        </>;
      case 1: // หน้าเมนูหลักของ Affiliate
        return <>
          <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
          <Menu_Affiliate {...props} />
        </>;
      case 2: //  หน้าโปรไฟล์ของ Affiliate มีเมนูด้านล่าง 
        return <>
          <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
          <ScrollView>
            <Business_Profile {...props} />
          </ScrollView>
        </>;
      case 3: //  เข้าจากโปรไฟล์ของ Affiliate รายการสินค้า 
        return <>
          <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
          <ScrollView>
            <Income {...props} />
          </ScrollView>
        </>;
      case 4: //  เข้าจากโปรไฟล์ของ Affiliate การเติบโต 
        return <>
          <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
          <Growth />
        </>;
      case 5: //  เข้าจากเมนูหลักของ Affiliate การเงิน 
        return <>
          <AppBar {...props} backArrow titleHead='การเงิน' />
          <Finance {...props} />
        </>;
      case 6: // หน้าแบบFromการสมัครสมาชิก Affiliate
        return <>
          <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
          <Register_Affiliate_From {...props} />
        </>;
      case 7: // หน้าเพิ่มสำเนาบัตรประชาชน เข้าจาก หน้าแบบFromการสมัครสมาชิก Affiliate 
        return <>
          <AppBar {...props} backArrow titleHead='บัตรประชาชน' />
          <ID_card />
        </>;
    };
  };
  return <SafeAreaView style={stylesMain.SafeAreaView}>
    {PathList()}
    {/* <ExitAppModule /> */}
  </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Register_Affiliate = (props) => <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter,]}>
  <View style={[stylesMain.ItemCenter, { marginVertical: 10, width: '95%', }]}>
    <View style={[stylesMain.ItemCenter, {
      backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, elevation: 1, marginBottom: -10,
      paddingVertical: 5, width: width * 0.40,
    }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>สมาชิกAffiliate</Text>
    </View>
    <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, padding: 10, }}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>
        FIN Affiliate Influencer Program ช่องทางใหม่หารายได้ผ่านโซเชียล</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>4 ขั้นตอนง่าย ๆ ในการเข้าร่วม  Affiliate Influencer Program</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>1. Register: สมัครเข้าร่วมเป็น Partner  ผ่าน Accesstrade</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>
        2. Share link: นำลิ้งก์โปรโมตสินค้า ที่คุณต้องการไปวางในช่องทาง Social media ของคุณ</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>3. Purchase: ลูกค้าเข้ามาซื้อสินค้าผ่านลิ้งก์ที่คุณแชร์</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>4. Earn Money: รับค่าคอมมิชชั่นในทุกเดือน (หลังผ่านการตรวจสอบ)
      Benefit ที่ Influencer ได้รับมากกว่าแค่ค่าคอมมิชั่น ช่องทางออนไลน์ไหนบ้างที่ Influencer สามารถใช้โปรโมตสินค้าได้ Facebook
      Instagram Twitter YouTube เพียงคุณมีช่องทางใดช่องทางหนึ่ง หรือเว็บไซต์และโซเชียลอื่น ๆ เป็นของตัวเองก็สามารกลายมาเป็น Influencer
        ได้ ที่สำคัญ เราไม่จำกัดยอด Follower หรือผู้ติดตามอีกด้วย</Text>
    </View>
    <View style={[stylesMain.ItemCenter, { marginTop: 10 }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>ร่วมสมัครเป็นนักขายออนไลน์เพื่อสร้างรายได้กับเรา</Text>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>เพิ่มโอกาสสร้างรายได้เสริม ด้วย Affiliate Marketing</Text>
      <TouchableOpacity onPress={() => NavigationNavigate({
        goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 6 },
      })} style={[stylesMain.ItemCenter, { borderColor: mainColor, borderRadius: 5, borderWidth: 2, margin: 10, padding: 10, }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,]}>สมัครฟรี คลิกที่นี่!</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>;
///----------------------------------------------------------------------------------------------->>>>
export let Menu_Affiliate = (props) => <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter,]}>
  <View style={[stylesMain.ItemCenter, { marginVertical: 10, width: '98%', }]}>
    <View style={[stylesMain.ItemCenter, {
      backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, elevation: 1, marginBottom: -10,
      paddingVertical: 5, width: width * 0.40,
    }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center' }]}>สมาชิกAffiliate</Text>
    </View>
    <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, padding: 30, }}>
      <View style={[stylesMain.FlexRow, { justifyContent: 'space-between' }]}>
        <View style={{ alignItems: 'flex-end', width: '48%', }}>
          <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 2 }, })}>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/1458482.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>ข้อมูลAffiliate</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%' }}>
          <TouchableOpacity onPress={() =>
            NavigationNavigate({ goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 5 }, })}>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/bank2.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>การเงิน</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginTop: 20 }]}>
        <View style={{ alignItems: 'flex-end', width: '48%', }}>
          <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({
            goScreen: 'Seller_Topic', navigation: props.navigation, setData: { selectedIndex: 10, Withdraw: 'Bank' },
          })}>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/passbook-512.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>บัญชีธนาคาร</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%' }}>
          <TouchableOpacity>
            <View style={{ borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 100, padding: 10, width: 100, }}>
              <FastImage source={{ uri: ip + '/MySQL/uploads/Affiliate/page-icon-png-3.png' }} style={stylesMain.BoxProduct1Image} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'center', width: 100, }]}>เอกสาร</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
</View>;
///----------------------------------------------------------------------------------------------->>>>
export let Business_Profile = (props) => <>
  <View style={[stylesMain.FrameBackground, { alignItems: 'center', }]}>
    <View style={{
      backgroundColor: '#128BCE', borderColor: mainColor, borderRadius: 50, borderWidth: 2, height: 100, marginTop: 20, padding: 10,
      width: 100,
    }}>
      <FastImage resizeMode={FastImage.resizeMode.stretch} source={{ uri: `${ip}/MySQL/uploads/addmin/unnamed.png`, }}
        style={stylesMain.BoxProduct1Image} />
    </View>
    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10 }]}>ชื่อ นาย ชนะชัย โอชานะ</Text>
    <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', marginBottom: 10, marginTop: 10, width: '80%', }]}>
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
      { borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 30, width: '49%', }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>ยอดเงิน</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>77,700</Text>
      </View>
      <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
      { borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 30, width: '49%', }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginRight: 10 }]}>แชร์</Text>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>256</Text>
      </View>
    </View>
  </View>
  <View style={{ backgroundColor: '#FFFFFF' }}>
    <View style={[stylesProfile.ListMenuList, { justifyContent: 'center', padding: 10 }]}>
      <View style={stylesProfile.ListMenuListSub}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginRight: 10 }]}>ระยะเวลา</Text>
        <View style={{ alignItems: 'center', borderColor: '#EAEAEA', borderWidth: 1, width: '60%', }}>
          <ModalDropdown defaultValue={'All'} dropdownStyle={{ borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: '43%', }}
            dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]} options={['All', 'Today',
              'Last 7 Days', 'This Month']} textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]} />
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
    <TouchableOpacity activeOpacity={1} onPress={() =>
      NavigationNavigate({ goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 3 }, })}>
      <View style={[stylesProfile.ListMenuList, { paddingHorizontal: 10 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10 }]}>รายการสินค้า</Text>
        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} onPress={() =>
      NavigationNavigate({ goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 4 }, })}>
      <View style={[stylesProfile.ListMenuList, { paddingHorizontal: 10 }]}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 10 }]}>การเติบโต</Text>
        <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
      </View>
    </TouchableOpacity>
  </View>
</>;
///----------------------------------------------------------------------------------------------->>>>
export let Income = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items1 = [{ name: 'ยังไม่สำเร็จ' }, { name: 'สำเร็จแล้ว' },];
  let dataItem = (items1) => <View style={[stylesMain.FlexRow,
  { backgroundColor: '#FFFFFF', height: 30, justifyContent: 'center', width: '100%', }]}>
    <TabBar item={items1} numberBox radiusBox={4} sendData={(value) => setSelectedIndex(value.selectedIndex)} />
  </View>;
  return <View>
    <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, padding: 10, }}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>รายการสินค้า</Text>
    </View>
    <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
      {dataItem(items1)}
    </View>
    <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
      <Product_income />
      <Product_income />
      <Product_income />
      <Product_income />
    </View>
  </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Growth = (props) => {
  const arrayData1 = [50, 10, 40, 95, 4, 24, 50, 35, 53, 53, 24, 50,];
  const arrayData2 = [10, 20, 40, 80, 1, 12, 10, 20, 30, 20, 10, 40,];
  const data = arrayData1.concat(arrayData2);
  const fill = 'rgb(134, 65, 244)';
  const max = Math.max(...data);
  const min = Math.min(...data);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const percen = [min, max,];
  const barData = [{
    data: data1.map((value) => ({ value })), svg: { fill: 'rgb(29, 70, 204)', },
  }, { data: data2.map((value) => ({ value })), },];
  return <>
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', marginTop: 5, padding: 10, }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,]}>กราฟ</Text>
      <View style={[stylesMain.ItemCenter,
      { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, flexDirection: 'row', width: 100, }]}>
        <ModalDropdown defaultValue={'ทั้งหมด'} dropdownStyle={{ borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: 100 }}
          dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'center' }]}
          options={['ทั้งหมด', 'สัปดาห์', 'เดือน', 'ปี']} textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]} />
        <IconAntDesign name='caretdown' size={15} style={{ marginLeft: 5 }} />
      </View>
    </View>
    <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: 200, padding: 20, }}>
      <YAxis contentInset={{ bottom: 30, top: 30, }} data={percen} formatLabel={(value) => `${value}%`} numberOfTicks={10}
        svg={{ fill: 'grey', fontSize: 9, }} />
      <View style={{ flex: 1, marginLeft: 5 }}>
        <BarChart contentInset={{ bottom: 30, left: 10, right: 10, top: 30, }} data={barData} showGrid={true} style={{ height: 160 }}
          svg={{ fill }} yAccessor={({ item }) => item.value}>
          <Grid />
        </BarChart>
        <XAxis contentInset={{ left: 10, right: 10, }} data={data1} formatLabel={(value, index) => month[index]}
          style={{ marginHorizontal: 8 }} svg={{ fill: 'grey', fontSize: 9, }} />
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
            svg={{ stroke: 'rgb(134, 65, 244)' }}>
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
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ประจำเดือน</Text>
      <View style={stylesMain.FlexRow}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
      </View>
    </View>
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>การเติบโต (ยอดขาย)</Text>
      <View style={stylesMain.FlexRow}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
      </View>
    </View>
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>รายได้ต่อคลิก</Text>
      <View style={stylesMain.FlexRow}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
      </View>
    </View>
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 10 }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6,]}>จำนวนคลิก</Text>
      <View style={stylesMain.FlexRow}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7,]}>เปอร์เซ็นการเติบโต</Text>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#4DCD9A', marginLeft: 10 }]}>+0.01%</Text>
      </View>
    </View>
  </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Finance = (props) => <View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
    <View style={[stylesMain.ItemCenter, {
      backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, marginVertical: 10, padding: 10, width: '49%',
    }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>0 THB </Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดเงินที่ถอนได้</Text>
    </View>
    <View style={[stylesMain.ItemCenter, {
      backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, marginVertical: 10, padding: 10, width: '49%',
    }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>0 THB </Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ยอดเงินที่ถอนแล้ว</Text>
    </View>
  </View>
  <TouchableOpacity activeOpacity={1} onPress={() =>
    NavigationNavigate({ goScreen: 'Seller_Topic', navigation: props.navigation, setData: { selectedIndex: 13 }, })}>
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ประวัติการถอนเงิน</Text>
      <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
    </View>
  </TouchableOpacity>
  <TouchableOpacity activeOpacity={1} onPress={() =>
    NavigationNavigate({ goScreen: 'Seller_Topic', navigation: props.navigation, setData: { selectedIndex: 10, Withdraw: 'Withdraw' }, })}>
    <View style={[stylesMain.FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 10 }]}>ถอนเงิน</Text>
      <IconEntypo color={mainColor} name='chevron-right' size={35} style={stylesProfile.ListMenuListIcon} />
    </View>
  </TouchableOpacity>
</View>;
///----------------------------------------------------------------------------------------------->>>>
export let Register_Affiliate_From = (props) => {
  const [activeData, setActiveData] = useState(false);
  const [checked, setChecked] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [last_name, setLast_Name] = useState(undefined);
  const [Line_ID, setLine_ID] = useState(undefined);
  const [mode, setMode] = useState('date');
  const [name, setName] = useState(undefined);
  const [prefixName, setPrefixName] = useState({ Miss: false, Mr: false, Mrs: false, });
  const [show, setShow] = useState(false);
  let getLast_Name = (value) => { setActiveData(true); setLast_Name(value); };
  let getLine_ID = (value) => { setActiveData(true); setLine_ID(value); };
  let getName = (value) => { setActiveData(true); setName(value); };
  let onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); setDate(currentDate);
  };
  let setPrefix = (value, value2, value3) => setPrefixName({ Miss: value3, Mr: value, Mrs: value2, });
  let showMode = currentMode => { setShow(true); setMode(currentMode); };
  return <>
    <ScrollView>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>เอกสารการสมัครสมาชิก</Text>
      <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>คำนำหน้า</Text>
        <View style={[stylesMain.FlexRow, { height: 25, justifyContent: 'space-around' }]}>
          <View style={[stylesMain.FlexRow]}>
            <CheckBox checked={prefixName.Mr} checkedIcon='dot-circle-o' onPress={() => setPrefix(true, false, false)} size={25}
              uncheckedIcon='circle-o' />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 2 }]}>นาย</Text>
          </View>
          <View style={[stylesMain.FlexRow]}>
            <CheckBox checked={prefixName.Mrs} checkedIcon='dot-circle-o' onPress={() => setPrefix(false, true, false)} size={25}
              uncheckedIcon='circle-o' />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 2 }]}>นาง</Text>
          </View>
          <View style={[stylesMain.FlexRow]}>
            <CheckBox checked={prefixName.Miss} checkedIcon='dot-circle-o' onPress={() => setPrefix(false, false, true)} size={25}
              uncheckedIcon='circle-o' />
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 2 }]}>นางสาว</Text>
          </View>
        </View>
      </View>
      <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10 }]}>
        <View style={{ width: '49%', }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชื่อ</Text>
          <TextInput onChangeText={(value) => getName(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>{name}</Text>
          </TextInput>
        </View>
        <View style={{ width: '49%', }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>นามสกุล</Text>
          <TextInput onChangeText={(value) => getLast_Name(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>{last_name}</Text>
          </TextInput>
        </View>
      </View>
      <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วัน/เดือน/ปีเกิด</Text>
        <View>
          <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
            { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '60%', }]}>
              <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
            </View>
          </TouchableOpacity>
          {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(event, selectedDate) =>
            onChange(event, selectedDate)} testID="dateTimePicker" value={date} />}
        </View>
      </View>
      <TouchableOpacity onPress={() =>
        NavigationNavigate({ goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 7 }, })}>
        <View style={[stylesMain.FrameBackground, stylesMain.FlexRow, { paddingHorizontal: 10 }]}>
          <View style={{ width: '95%' }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>สำเนาบัตรประชาชน</Text>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
            </View>
          </View>
          <View style={stylesMain.ItemCenter}>
            <IconEntypo color={mainColor} name='chevron-right' size={35} />
          </View>
        </View>
      </TouchableOpacity>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
      <TouchableOpacity onPress={() =>
        NavigationNavigate({ goScreen: 'Seller_Topic', navigation: props.navigation, setData: { selectedIndex: 17 }, })}>
        <View style={[stylesMain.FlexRow, stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
          <View style={{ width: '95%' }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>บัญชีธนาคาร</Text>
            <View>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7]}>
                เอกสารต้องมีลายเซนต์กำกับ พร้อมยืนยันสำเนาถูกต้องโดย กรรมผู้มีอำนาจ หรือ เจ้าของร้าน</Text>
            </View>
          </View>
          <View style={stylesMain.ItemCenter}>
            <IconEntypo color={mainColor} name='chevron-right' size={35} />
          </View>
        </View>
      </TouchableOpacity>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { textAlign: 'center' }]}>ตัวอย่าง</Text>
      <View style={[stylesMain.FrameBackground, { paddingHorizontal: 10 }]}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>Line ID</Text>
        <TextInput onChangeText={(value) => getLine_ID(value)} style={{ borderRadius: 5, borderWidth: 1, }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5,]}>{Line_ID}</Text>
        </TextInput>
      </View>
      <View style={stylesMain.FlexRow}>
        <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
        <View style={stylesMain.ItemCenter}>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ฉันยอมรับเงื่อนไขของ FIN</Text>
            <TouchableOpacity>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#36B680' }]}>ข้อตกลงการใช้งาน</Text>
            </TouchableOpacity>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}> และยินยอม</Text>
          </View>
          <View style={stylesMain.FlexRow}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7]}>ดำเนินการกับข้อมูลส่วนตัวตามที่ระบุใน </Text>
            <TouchableOpacity>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#36B680' }]}>นโยบายส่วนตัว</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity onPress={() => NavigationNavigate({
      goScreen: 'Business', navigation: props.navigation, setData: { selectedIndex: 1 },
    })} style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ยืนยัน</Text>
    </TouchableOpacity>
  </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let ID_card = (props) => {
  const [date, setDate] = useState(new Date());
  const [filename, setFilename] = useState('ชื่อไฟล์ที่อัพ');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  let onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate); setShow(Platform.OS === 'ios');
  };
  let showMode = currentMode => { setMode(currentMode); setShow(true); };
  let showDatepicker = () => showMode('date');
  let upload_IDcode = async () => {
    try {
      const res = await DocumentPicker.pick({ type: [DocumentPicker.types.images, DocumentPicker.types.pdf,], });
      console.log(res.uri, res.type, res.name, res.size);
      var patt = new RegExp(DocumentPicker.types.images);
      if (res.type !== DocumentPicker.types.pdf) {
        console.log(patt.exec(res.type));
        if (patt.exec(res.type) === null) { alert('ไฟล์ไม่ถูกต้อง'); }
        else { setFilename(res.name); };
      } else { setFilename(res.name); };
    } catch (err) { if (DocumentPicker.isCancel(err)) { } else { throw err; }; };
  };
  return <>
    <ScrollView>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>บัตรประชาชน</Text>
      <View style={[stylesMain.FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10, }]}>
        <View style={[{
          backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50, justifyContent: 'center',
          paddingHorizontal: 10, width: '68%',
        }]}>
          <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#C5C5C5' }]}>{filename}</Text>
        </View>
        <TouchableOpacity onPress={() => upload_IDcode()} style={[stylesMain.FlexRow, stylesMain.ItemCenter,
        { backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, width: '30%', }]}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>อัพโหลด</Text>
          <IconEntypo name='upload' size={25} style={{ color: mainColor, marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#C5C5C5', textAlign: 'center' }]}>
        สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG .PDF</Text>
      <View style={{
        backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, marginHorizontal: 10, padding: 10,
      }}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginBottom: 10 }]}>โปรดระบุวันหมดอายุ</Text>
        <View>
          <TouchableOpacity onPress={(value) => showDatepicker(value)} style={stylesMain.ItemCenter}>
            <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
            { borderColor: '#C5C5C5', borderRadius: 5, borderWidth: 2, paddingVertical: 5, width: '60%', }]}>
              <IconFontAwesome color='rgb(29, 70, 204)' name='calendar' size={20} />
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
            </View>
          </TouchableOpacity>
          {show && <DateTimePicker display="spinner" is24Hour={true} mode={mode} onChange={(value) => onChange(value)}
            testID="dateTimePicker" value={date} />}
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity style={[stylesMain.ItemCenter, { backgroundColor: '#0A55A6', height: 50 }]}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>บันทึก</Text>
    </TouchableOpacity>
  </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Bank_book = (props) => <View>
  <Text>Bank_book</Text>
</View>;