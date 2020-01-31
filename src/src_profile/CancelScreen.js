// หน้ายกเลิกสินค้า  
import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Picker,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import IconFeather from 'react-native-vector-icons/Feather';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';

export default class CancelScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='ยกเลิกสินค้า'/>
        <View style={{backgroundColor:'#FFFFFF',marginTop:10, justifyContent:'center',alignItems:'center',flex:1}}>
        <IconFeather name='edit' size={50} color='#A2A2A2'/>
          <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1,{color:'#A2A2A2'}]}>ยังไม่มีคำสั่งซื้อ</Text>
        </View>
      </SafeAreaView>
    );
  }
}


// export default class CancelScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <SafeAreaView style={styleMain.SafeAreaView}>
//         <Appbar navigation={this.props.navigation} Title='ยกเลิกสินค้า' />
//         <ScrollView>
//           <Cancel_Product />
//           <Cancel_Detail />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// ///-----------------------------------------------------------------------------///

// export class Cancel_Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <View style={styleMain.FrameBackground}>
//           <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
//             <View style={styleMain.FlexRow}>
//               <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
//               <View>
//                 <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>หมายเลขคำสั่งซื้อ : 2223994239012</Text>
//                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
//                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
//                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
//                 <Text>x 1</Text>
//               </View>
//             </View>
//             <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6' }]}>฿10,000.00</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// ///-----------------------------------------------------------------------------///

// export class Cancel_Detail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={styleMain.FrameBackground}>
//         <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, }]}>สาเหตุการยกเลิกสินค้า </Text>
//         <View style={{ alignItems: 'center', marginTop: 10, }}>
//           <View style={{ borderColor: 'black', borderWidth: 1, width: '60%', height: 35, alignItems: 'flex-end', borderRadius:5,}}>
//             <Picker
//               selectedValue={this.state.language}
//               style={{ height: 35, width: '100%' }}
//               onValueChange={(itemValue, itemIndex) =>
//                 this.setState({ language: itemValue })
//               }>
//               <Picker.Item label="เปลี่ยนใจ" value="java" />
//               <Picker.Item label="ต้องการเปลี่ยนวิธิการจัดส่ง" value="js" />
//               <Picker.Item label="เปลี่ยนที่อยู่การจัดส่ง" value="js1" />
//               <Picker.Item label="มีสินค้าที่ถูกกว่า" value="js2" />
//             </Picker>
//           </View>
//           <View style={{ flexDirection: 'row', marginVertical: 10, }}>
//             <TouchableOpacity>
//               <View style={{ height: 30, width: 100, borderColor: '#0A55A6', borderWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
//                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#0A55A6' }]}>ยกเลิก</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <View style={{ height: 30, width: 100, borderColor: '#0A55A6', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 10, }}>
//                 <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#0A55A6' }]}>ตกลง</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

