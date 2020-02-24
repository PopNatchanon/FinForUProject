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
  Button,
  Picker,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';
import { ip, finip } from '.././navigator/IpConfig';
import BottomSheet from "react-native-raw-bottom-sheet";
import { AppBar1 } from '../MainScreen';
import { GetServices } from '../tools/Tools';




export default class StoreMe_Up_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='เพิ่มสินค้า' />
        <ScrollView>
          <StoreMe_Up_Image />
          <StoreMe_Up_ProductDetail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///--------------------------------------------------------------------------///

export class StoreMe_Up_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.StoreMe_Up_Image}>
        <ScrollView horizontal>
          <View style={styles.StoreMe_Up_ImageA}>
            <View style={styles.StoreMe_Up_Image_Box}>
              <FastImage style={{ height: 120, width: 120, }}
                source={{ uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg', }} />
            </View>
            <TouchableOpacity>
              <View style={styles.StoreMe_Up_Image_Box}>
                <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10, color: '#A3A3A3' }]}> *สูงสุดรวม 6 รูป</Text>
      </View>
    );
  }
}

///--------------------------------------------------------------------------///

export class StoreMe_Up_ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: [],
    };
    this.getData = this.getData.bind(this)
  }
  getData(dataService) {
    this.setState({ dataService })
  }
  render() {
    var uri = finip + '/home/category_mobile'
    let dataCategory = this.state.dataService.map((item, index) => {
      var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
      return (
        <View style={styles.Category} key={index}>
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={stylesMain.Category_box}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{ height: 20 }}>
            <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesFont.FontCenter]}>
              {item.name}</Text>
          </View>
        </View>
      )
    })
    return (
      <View>

        {/* หมวดหมู่สินค้า */}
        <BottomSheet
          ref={ref => {
            this.CatagorySheet = ref;
          }}
          height={500}
          duration={250}
          customStyles={{
            container: {
              padding: 10,
            }
          }}>
          <View style={{ flex: 1, }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเลือกหมวดหมู่สินค้า</Text>
            <GetServices uriPointer={uri} getDataSource={this.getData} />
            <ScrollView>
              <View style={styles.CatagorySheet}>
                {dataCategory}
              </View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10, }]}>ประเภท</Text>
              <View style={styles.cate_BoxA}>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate</Text></View>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate</Text></View>
              </View>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชนิด</Text>
              <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', }}>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
                <View style={styles.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
              </View>
            </ScrollView>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.BottomSheet_Botton}>
              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_cancel}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_OK}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </BottomSheet>
        {/* แบรนด์สินค้า */}
        <BottomSheet
          ref={ref => {
            this.Brand_NameSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <View style={styles.BottomSheet}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาพิมพ์ชื่อแบรนด์สินค้า</Text>
            <View style={[styles.BottomSheet_Box]}>
              <TextInput
                style={[stylesFont.FontFamilyBold, stylesFont.FontSize4,{width:'100%'}]}
                placeholder="ชื่อแบรนด์"
                multiline
                editable
                maxLength={30}
                value={this.state.price}
                onChangeText={(price) => this.setState({ price })}></TextInput>
            </View>
            <View style={styles.BottomSheet_Botton}>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_cancel}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_OK}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>


        {/* ราคาสินค้า */}
        <BottomSheet
          ref={ref => {
            this.PriceSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <View style={styles.BottomSheet}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณากรอกราคาสินค้า</Text>
            <View style={styles.BottomSheet_Box}>
              <TextInput
                style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}
                placeholder="0.00"
                multiline
                editable
                // maxLength={20}
                value={this.state.price}
                onChangeText={(price) => this.setState({ price })}></TextInput>
            </View>
            <View style={styles.BottomSheet_Botton}>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_cancel}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_OK}>
                  <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>

        {/* จำนวนที่มีสินค้าอยู่ในคลัง */}
        <BottomSheet
          ref={ref => {
            this.TotalrSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเพิ่มจำนวนสินค้า</Text>
          <View style={styles.BottomSheet_BoxTotal}>
            <TouchableOpacity>
              <View style={styles.TotalrSheet_botton}>
                <IconAntDesign name='minus' size={25} />
              </View>
            </TouchableOpacity>
            <TextInput
              style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}
              placeholder="1"
              multiline
              editable
              maxLength={10}
              value={this.state.Total}
              onChangeText={(Total) => this.setState({ Total })}></TextInput>
            <TouchableOpacity>
              <View style={styles.TotalrSheet_botton}>
                <IconAntDesign name='plus' size={25} />
              </View>
            </TouchableOpacity>

          </View>
          <View style={styles.BottomSheet_Botton}>

            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        {/* ตัวเลือกสินค้า */}
        <BottomSheet
          ref={ref => {
            this.SelectSheet = ref;
          }}
          height={350}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <View style={styles.SelectSheet}>
            <View style={styles.SelectSheet_Box}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สี</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>แก้ไข</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={styles.SelectSheet_TextInput}>
                <TextInput
                  style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                  placeholder="สี"
                  maxLength={10}
                  value={this.state.Color}
                  onChangeText={(Color) => this.setState({ Color })}></TextInput>
              </View>
              <View style={styles.SelectSheet_TextInput}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
              </View>
            </View>
            <View style={styles.SelectSheet_Box}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาด</Text>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>แก้ไข</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={styles.SelectSheet_TextInput}>
                <TextInput
                  style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                  placeholder="ขนาด"
                  maxLength={10}
                  value={this.state.Size}
                  onChangeText={(Size) => this.setState({ Size })}></TextInput>
              </View>
              <View style={styles.SelectSheet_TextInput}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
              </View>
            </View>
          </View>
          <View style={styles.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        {/* สภาพสินค้า */}
        <BottomSheet
          ref={ref => {
            this.LookSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <View style={styles.SelectSheet}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สภาพสินค้า</Text>
            <View style={styles.SizeSheet_Box}>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ของใหม่</Text></View></TouchableOpacity>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ของมือสอง</Text></View></TouchableOpacity>
            </View>
          </View>
          <View style={styles.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>


        {/* น้ำหนัก */}
        <BottomSheet
          ref={ref => {
            this.WeightSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <View style={styles.SelectSheet}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาระบุน้ำหนัก</Text>
            <View style={styles.WeightSheet_Box}>
              <View style={styles.SelectSheet_TextInput}>
                <TextInput
                  style={[stylesFont.FontFamilyText, stylesFont.FontSize5,{width:'100%',height:50,}]}
                  placeholder="น้ำหนัก"
                  maxLength={10}
                  value={this.state.Weight}
                  onChangeText={(Weight) => this.setState({ Weight })}></TextInput>
              </View>
              <View style={styles.SelectSheet_TextInput}>
                <Picker
                  selectedValue={this.state.language}
                  style={{width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }>
                  <Picker.Item label="กิโลกรัม" value="java" />
                  <Picker.Item label="กรัม" value="js" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        {/* ขนาดพัสดุ */}
        <BottomSheet
          ref={ref => {
            this.SizeSheet = ref;
          }}
          height={200}
          duration={250}
          customStyles={{
            container: {
              paddingTop: 20,
              alignItems: "center",
            }
          }}
       >
          <View style={styles.SelectSheet}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาดพัสดุ</Text>
            <View style={styles.SizeSheet_Box}>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เล็ก</Text></View></TouchableOpacity>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>กลาง</Text></View></TouchableOpacity>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ใหญ่</Text></View></TouchableOpacity>
            </View>
          </View>
          <View style={styles.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>


        <View style={styles.StoreMe_Up_ProductDetail}>
          <TextInput
            style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]}
            placeholder="ชื่อสินค้า"
            maxLength={120}
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}></TextInput>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6', textAlign: 'right', marginRight: 10 }]}>20/120 ตัวอักษร</Text>
        <View style={{ width: '100%', height: 130, backgroundColor: '#FFF', padding: 10, }}>
          <TextInput
            style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]}
            placeholder="รายละเอียดสินค้า"
            multiline
            editable
            maxLength={5000}
            value={this.state.Detail}
            onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
        </View>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6', textAlign: 'right', marginRight: 10 }]}>100/5000 ตัวอักษร</Text>

        {/* หมวดสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.CatagorySheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>หมวดสินค้า</Text>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>

        {/* แบรนด์สินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.Brand_NameSheet.open(); }}>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>แบรนด์สินค้า</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
        </TouchableOpacity>

        {/* ราคา */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.PriceSheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ราคา</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ตั้งราคา</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>

        {/* คลัง */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.TotalrSheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>คลัง</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ระบุจำนวนสินค้า</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>

        {/* ตัวเลือกสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.SelectSheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ตัวเลือกสินค้า</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>เพิ่มตัวเลือกสินค้า</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>

        {/* สภาพสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.LookSheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>สภาพสินค้า</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ประเภทสินค้า เช่น มือสอง</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.Text_ling_Box}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}> ฉันจะเพิ่มตัวเลือกสินค้าได้อย่างไร</Text>
          <TouchableOpacity>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#0A55A6' }]}>ไปยังศูนย์เรียนรู้ผู้ขาย</Text>
          </TouchableOpacity>
        </View>

        {/* น้ำหนัก */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.WeightSheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>น้ำหนัก</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ระบุน้ำหนัก</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>

        {/* ขนาดพัสดุ */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.SizeSheet.open(); }}>
          <View style={styles.StoreMe_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ขนาดพัสดุ</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>

        {/* เผยแพร่สินค้า */}
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เผยแพร่สินค้า</Text>
          <CheckBox
            size={30}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={this.state.item2}
            onPress={() => this.setState({ item2: !this.state.item2 })}
          />
        </View>

        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เพจ Facebook</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
      </View>

    );
  }
}
