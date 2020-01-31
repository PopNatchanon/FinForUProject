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
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';
import { ip } from '../../navigator/IpConfig';
import BottomSheet from "react-native-raw-bottom-sheet";



export default class StoreMe_Up_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <Appbar navigation={this.props.navigation} />
        <ScrollView>
          <StoreMe_Up_Image />
          <StoreMe_Up_ProductDetail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

///----------------------------------Appbar----------------------------------------///

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Appbar} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <IconAntDesign RightItem name='closecircleo' size={25} color='#0A55A6' />
        </TouchableOpacity>
        <Text style={styles.Text}>เพิ่มสินค้า</Text>
        <Text style={{ color: '#0A55A6', fontSize: 18, }}>ส่ง</Text>
      </View>
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
                source={{
                  uri: ip + '/MySQL/uploads/products/2019-10-29-1572320112.jpg',
                }}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.StoreMe_Up_Image_Box}>
                <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                <Text style={{ color: '#0A55A6', fontSize: 12, }}>+เพิ่มรูปภาพ/วีดีโอ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={{ marginLeft: 10, color: '#A3A3A3', fontSize: 12, }}> *สูงสุดรวม 6 รูป</Text>
      </View>

    );
  }
}

///--------------------------------------------------------------------------///

export class StoreMe_Up_ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourcetype: [],
    };
  }
  getDatatype() {
    var url = ip + '/MySQL/DataServiceMain.php';
    var dataBody = {
      type: 'type'
    };
    axios.post(
      url,
      dataBody,
    ).then((getData) => {
      this.setState({
        dataSourcetype: getData.data,
      })
    })
  }
  componentDidMount() {
    this.getDatatype()
  }

  render() {
    let dataCategory = this.state.dataSourcetype.map((item, indexs) => {
      var dataMySQL = [ip + '/mysql/uploads/head_product/menu', item.image_menu].join('/');
      return (
        <View key={indexs}>
          <View style={styles.Category}>
            <View style={styles.CatagorySheet_Box}>
              <FastImage
                source={{
                  uri: dataMySQL,

                }}
                style={styles.Category_image}
              />
            </View>
            <Text style={{ fontSize: 12, textAlign: 'center', }}>{item.name}</Text>
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
          }}
        >
          <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 20, }}>กรุณาเลือกหมวดหมู่สินค้า</Text>
            <ScrollView>
              <View style={styles.CatagorySheet}>
                {dataCategory}
              </View>
              <Text style={{ fontSize: 15, }}>ประเภท</Text>
              <View style={styles.cate_BoxA}>
                <View style={styles.cate_Box}></View>
                <View style={styles.cate_Box}></View>
              </View>
              <Text style={{ fontSize: 15, }}>ชนิด</Text>
              <View style={{ height: 'auto', width: '100%', flexDirection: 'row', flexWrap: 'wrap', }}>
                <View style={styles.cate_Box}></View>
                <View style={styles.cate_Box}></View>
                <View style={styles.cate_Box}></View>
                <View style={styles.cate_Box}></View>
                <View style={styles.cate_Box}></View>
                <View style={styles.cate_Box}></View>
              </View>
            </ScrollView>
          </View>

          <View style={{justifyContent:'center', alignItems:'center',}}>
            <View style={styles.BottomSheet_Botton}>
              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_cancel}>
                  <Text>ยกเลิก</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_OK}>
                  <Text style={{ color: '#FFF' }}>ตกลง</Text>
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
            <Text style={{ fontSize: 20, }}>กรุณากรอกราคาสินค้า</Text>
            <View style={styles.BottomSheet_Box}>
              <TextInput
                fontSize={20}
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
                  <Text>ยกเลิก</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.BottomSheet_Botton_OK}>
                  <Text style={{ color: '#FFF' }}>ตกลง</Text>
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
          <Text style={{ fontSize: 20, }}>กรุณาเพิ่มจำนวนสินค้า</Text>
          <View style={styles.BottomSheet_BoxTotal}>
            <TouchableOpacity>
              <View style={styles.TotalrSheet_botton}>
                <IconAntDesign name='minus' size={25} />
              </View>
            </TouchableOpacity>
            <TextInput
              fontSize={20}
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
                <Text>ยกเลิก</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={{ color: '#FFF' }}>ตกลง</Text>
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
              <Text style={{ fontSize: 18, }}>สี</Text>
              <Text style={{ fontSize: 18, color: '#0A55A6' }}>แก้ไข</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={styles.SelectSheet_TextInput}>
                <TextInput
                  fontSize={15}
                  placeholder="สี"
                  maxLength={10}
                  value={this.state.Select}
                  onChangeText={(Select) => this.setState({ Select })}></TextInput>
              </View>
              <View style={styles.SelectSheet_TextInput}>
                <Text style={{ fontSize: 18, }}>+เพิ่ม</Text>
              </View>
            </View>
            <View style={styles.SelectSheet_Box}>
              <Text style={{ fontSize: 18, }}>ขนาด</Text>
              <Text style={{ fontSize: 18, color: '#0A55A6' }}>แก้ไข</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={styles.SelectSheet_TextInput}>
                <TextInput
                  fontSize={15}
                  placeholder="ขนาด"
                  maxLength={10}
                  value={this.state.Select}
                  onChangeText={(Select) => this.setState({ Select })}></TextInput>
              </View>
              <View style={styles.SelectSheet_TextInput}>
                <Text style={{ fontSize: 18, }}>+เพิ่ม</Text>
              </View>
            </View>
          </View>
          <View style={styles.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={{ color: '#FFF' }}>ตกลง</Text>
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
            <Text style={{ fontSize: 20, }}>กรุณาระบุน้ำหนัก</Text>
            <View style={styles.WeightSheet_Box}>
              <View style={styles.SelectSheet_TextInput}>
                <TextInput
                  fontSize={15}
                  placeholder="น้ำหนัก"
                  maxLength={10}
                  value={this.state.Weight}
                  onChangeText={(Weight) => this.setState({ Weight })}></TextInput>
              </View>
              <View style={styles.SelectSheet_TextInput}>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 50, width: 100 }}
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
                <Text>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={{ color: '#FFF' }}>ตกลง</Text>
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
            <Text style={{ fontSize: 20, }}>ขนาดพัสดุ</Text>
            <View style={styles.SizeSheet_Box}>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text>เล็ก</Text></View></TouchableOpacity>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text>กลาง</Text></View></TouchableOpacity>
              <TouchableOpacity><View style={styles.SizeSheet_Boxsize}><Text>ใหญ่</Text></View></TouchableOpacity>
            </View>
          </View>
          <View style={styles.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_cancel}>
                <Text>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.BottomSheet_Botton_OK}>
                <Text style={{ color: '#FFF' }}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>


        <View style={styles.StoreMe_Up_ProductDetail}>
          <TextInput
            placeholder="ชื่อสินค้า"
            fontSize={15}
            maxLength={120}

            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}></TextInput>
        </View>
        <Text style={styles.StoreMe_Up_ProductDetail_TextMax}>20/120 ตัวอักษร</Text>
        <View style={{ width: '100%', height: 150, backgroundColor: '#FFF', padding: 10, }}>
          <TextInput
            fontSize={15}
            placeholder="รายละเอียดสินค้า"
            multiline
            editable
            maxLength={5000}
            value={this.state.Detail}
            onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
        </View>
        <Text style={styles.StoreMe_Up_ProductDetail_TextMax}>100/5000 ตัวอักษร</Text>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>หมวดสินค้า</Text>
          <TouchableOpacity onPress={() => {
            this.CatagorySheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ราคา</Text>
          <TouchableOpacity onPress={() => {
            this.PriceSheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>คลัง</Text>
          <TouchableOpacity onPress={() => {
            this.TotalrSheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ตัวเลือกสินค้า</Text>
          <TouchableOpacity onPress={() => {
            this.SelectSheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>
        </View>
        <View style={styles.Text_ling_Box}>
          <Text style={{ marginLeft: 10, color: '#A3A3A3', fontSize: 12, }}> ฉันจะเพิ่มตัวเลือกสินค้าได้อย่างไร</Text>
          <TouchableOpacity>
            <Text style={styles.Text_ling}>ไปยังศูนย์เรียนรู้ผู้ขาย</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={styles.StoreMe_Up_ProductDetail_Text}>น้ำหนัก</Text>
            <Text style={{ marginTop: 10, fontSize: 15, color: '#A3A3A3', }}>(ไม่จำเป็นต้องระบุ)</Text>
          </View>
          <TouchableOpacity onPress={() => {
            this.WeightSheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>ขนาดพัสดุ</Text>
          <TouchableOpacity onPress={() => {
            this.SizeSheet.open();
          }}>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' /></TouchableOpacity>
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>เผยแพร่สินค้า</Text>
          <CheckBox
            size={30}
            containerStyle={{ marginTop: -5 }}
            checkedIcon='toggle-on'
            checkedColor='#95F29F'
            uncheckedIcon='toggle-off'
            checked={this.state.item2}
            onPress={() => this.setState({ item2: !this.state.item2 })}
          />
        </View>
        <View style={styles.StoreMe_Up_ProductDetail}>
          <Text style={styles.StoreMe_Up_ProductDetail_Text}>เพจ Facebook</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
      </View>

    );
  }
}
