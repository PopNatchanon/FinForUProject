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
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import stylesPro from '../../style/stylesProfile-src/stylesProfile_Topic';
import IconFeather from 'react-native-vector-icons/Feather';
import styleMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { ip } from '../../navigator/IpConfig';
import { Appbar } from './LatestScreen';


export default class Return_products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styleMain.SafeAreaView}>
        <Appbar navigation={this.props.navigation} Title='คืนสินค้า/คืนเงิน'/>
        <View style={{backgroundColor:'#FFFFFF',marginTop:10, justifyContent:'center',alignItems:'center',flex:1}}>
        <IconFeather name='edit' size={50} color='#A2A2A2'/>
          <Text style={[stylesFont.FontFamilyBold,stylesFont.FontSize1,{color:'#A2A2A2'}]}>ยังไม่มีคำสั่งซื้อ</Text>
        </View>
      </SafeAreaView>
    );
  }
}


// export default class Return_products extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <SafeAreaView style={styleMain.SafeAreaView}>
//         <Appbar navigation={this.props.navigation} Title='คืนสินค้า/คืนเงิน' />
//         <ScrollView>
//           <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { marginLeft: 10, marginTop: 10, }]}>สินค้าที่ต้องการคืน </Text>
//           <Return />
//           <Return_Detail />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// ///-----------------------------------------------------------------------------///

// export class Return extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={styleMain.FrameBackground}>
//         <View style={{ height: 130, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
//           <View style={styleMain.FlexRow}>
//             <View style={{ height: 80, width: 80, backgroundColor: '#C4C4C4', margin: 10, }}></View>
//             <View style={{ marginTop: 10 }}>
//               <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
//               <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
//               <Text>x 1</Text>
//             </View>
//           </View>
//           <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#0A55A6', marginTop: 10, }]}>฿10,000.00</Text>
//         </View>
//       </View>


//     );
//   }
// }

// ///-----------------------------------------------------------------------------///

// export class Return_Detail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={{ padding: 10, }}>
//         <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { margin: 5 }]}>ยอดเงินคืน</Text>
//         <View style={{ height: 50, width: '100%', backgroundColor: '#FFFFFF', borderColor: '#D5D5D5', borderWidth: 1, }}>
//         </View>

//         <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { margin: 5 }]}>เหตุผลการคืนสินค้า</Text>
//         <View style={{ width: '100%', backgroundColor: '#FFFFFF', borderColor: '#D5D5D5', borderWidth: 1, }}>
//           <Picker
//             selectedValue={this.state.language}
//             style={{ height: 35, width: '100%' }}
//             onValueChange={(itemValue, itemIndex) =>
//               this.setState({ language: itemValue })
//             }>
//             <Picker.Item label="สินค้าผิดหรือเสียหาย" value="java" />
//             <Picker.Item label="อื่นๆ" value="js" />
//           </Picker>
//         </View>
//         <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { margin: 5 }]}>ความคิดเห็นเพิ่มเติม</Text>
//         <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 150, borderColor: '#D5D5D5', borderWidth: 1, }}>
//           <TextInput
//             fontSize={15}
//             placeholder="แจ้งให้เราทราบเพิ่มเติมเกี่ยวสินค้า"
//             multiline
//             editable
//             maxLength={5000}
//             value={this.state.Detail}
//             onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
//         </View>
//         <View style={{ margin: 10, alignItems: 'flex-end' }}>
//           <TouchableOpacity>
//             <View style={stylesPro.Up_Image_Box}>
//               <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
//               <Text style={{ color: '#0A55A6', fontSize: 12, }}>+เพิ่มรูปภาพ(0/6)</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
//           <TouchableOpacity>
//             <View style={{ height: 40, width: 120, backgroundColor: '#FFFFFF', borderColor: '#0A55A6', borderWidth: 1, justifyContent: 'center', alignItems: 'center', }}>
//               <Text>เปลี่ยนสินค้า</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={{ height: 40, width: 120, backgroundColor: '#FFFFFF', borderColor: '#0A55A6', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, }}>
//               <Text>ขอเงินคืน</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

