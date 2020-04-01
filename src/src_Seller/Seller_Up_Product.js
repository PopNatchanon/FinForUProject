///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import stylesSeller from '../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices } from '../tools/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
import { AppBar1 } from '../MainScreen';

export default class Seller_Up_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <AppBar1 backArrow navigation={this.props.navigation} titleHead='เพิ่มสินค้า' saveBar />
        <ScrollView>
          <Seller_Up_Image />
          <Seller_Up_ProductDetail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
///--------------------------------------------------------------------------///
export class Seller_Up_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: [],
    };
  }
  UploadImageSingle = (index) => {
    const { avatarSource } = this.state
    const options = {
      includeBase64: true
    };
    ImagePicker.openPicker(options).then(response => {
      avatarSource[index] = response
      this.setState({ avatarSource })
    });
  }
  UploadImageMultiple = () => {
    const { avatarSource } = this.state
    const options = {
      multiple: true,
      includeBase64: true
    };
    ImagePicker.openPicker(options).then(response => {
      response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item))
      this.setState({ avatarSource })
    });
  }
  UploadImageData = () => {
    const { avatarSource } = this.state
    var uri = [ip, 'sql/uploadimage/updateimage.php'].join('/')
    avatarSource && (
      fetch(uri, {
        method: "POST",
        body: avatarSource
      })
        .then(response => response.json())
        .then(response => {
          alert("Upload success!");
          this.setState({ avatarSource: null });
        })
        .catch(error => {
          alert("Upload failed!");
        })
    )
  }
  render() {
    const { avatarSource } = this.state
    return (
      <View style={stylesMain.FrameBackground}>
        <ScrollView horizontal>
          {
            avatarSource ? [
              avatarSource.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => this.UploadImageSingle(index)} key={index}>
                    <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                      <FastImage
                        source={{ uri: item.path }}
                        style={[stylesMain.ItemCenterVertical,stylesMain.BoxProduct1Image]}
                      />
                    </View>
                  </TouchableOpacity>
                )
              }),
              avatarSource.length < 7 &&
              <TouchableOpacity onPress={this.UploadImageMultiple} key={'upload'}>
                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                  <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                    <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ] :
              <TouchableOpacity onPress={this.UploadImageMultiple}>
                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                  <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                    <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                  </View>
                </View>
              </TouchableOpacity>
          }
        </ScrollView>
        <TouchableOpacity onPress={this.UploadImageData} style={stylesMain.ItemCenter}>
          <Text style={[{ width: 75, height: 40, borderWidth: 1, borderColor: '#456488', marginTop: 10, textAlign: 'center', textAlignVertical: 'center', color: '#fff', backgroundColor: '#456488' }]}>Upload</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

///--------------------------------------------------------------------------///
export class Seller_Up_ProductDetail extends Component {
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
  CatagorySheetBody() {
    var uri = finip + '/home/category_mobile'
    let dataCategory = this.state.dataService.map((item, index) => {
      var dataMySQL = [finip, item.image_path, 'menu', item.image_head].join('/');
      return (
        <View style={stylesSeller.Category} key={index}>
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
      <>
        <View style={{ flex: 1, }}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเลือกหมวดหมู่สินค้า</Text>
          <GetServices uriPointer={uri} getDataSource={this.getData} />
          <ScrollView>
            <View style={stylesSeller.CatagorySheet}>
              {dataCategory}
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 10, }]}>ประเภท</Text>
            <View style={stylesSeller.cate_BoxA}>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate</Text></View>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate</Text></View>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ชนิด</Text>
            <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', }}>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
              <View style={stylesSeller.cate_Box}><Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center' }]}>Sub-Cate 2</Text></View>
            </View>
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={stylesSeller.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={stylesSeller.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  Brand_NameSheetBody() {
    return (
      <>
        <View style={stylesSeller.BottomSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาพิมพ์ชื่อแบรนด์สินค้า</Text>
          <View style={[stylesSeller.BottomSheet_Box]}>
            <TextInput
              style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { width: '100%' }]}
              placeholder="ชื่อแบรนด์"
              multiline
              editable
              maxLength={30}
              value={this.state.price}
              onChangeText={(price) => this.setState({ price })}></TextInput>
          </View>
          <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={stylesSeller.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={stylesSeller.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>

    )
  }
  PriceSheetBody() {
    return (
      <>
        <View style={stylesSeller.BottomSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณากรอกราคาสินค้า</Text>
          <View style={stylesSeller.BottomSheet_Box}>
            <TextInput
              style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}
              placeholder="0.00"
              multiline
              editable
              // maxLength={20}
              value={this.state.price}
              onChangeText={(price) => this.setState({ price })}></TextInput>
          </View>
          <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity>
              <View style={stylesSeller.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={stylesSeller.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  TotalrSheetBody() {
    return (
      <>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเพิ่มจำนวนสินค้า</Text>
        <View style={stylesSeller.BottomSheet_BoxTotal}>
          <TouchableOpacity>
            <View style={stylesSeller.TotalrSheet_botton}>
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
            <View style={stylesSeller.TotalrSheet_botton}>
              <IconAntDesign name='plus' size={25} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  SelectSheetBody() {
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <View style={stylesSeller.SelectSheet_Box}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สี</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>แก้ไข</Text>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={stylesSeller.SelectSheet_TextInput}>
              <TextInput
                style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                placeholder="สี"
                maxLength={10}
                value={this.state.Color}
                onChangeText={(Color) => this.setState({ Color })}></TextInput>
            </View>
            <View style={stylesSeller.SelectSheet_TextInput}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
            </View>
          </View>
          <View style={stylesSeller.SelectSheet_Box}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาด</Text>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: '#0A55A6' }]}>แก้ไข</Text>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={stylesSeller.SelectSheet_TextInput}>
              <TextInput
                style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                placeholder="ขนาด"
                maxLength={10}
                value={this.state.Size}
                onChangeText={(Size) => this.setState({ Size })}></TextInput>
            </View>
            <View style={stylesSeller.SelectSheet_TextInput}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
            </View>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  LookSheetBody() {
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สภาพสินค้า</Text>
          <View style={stylesSeller.SizeSheet_Box}>
            <TouchableOpacity><View style={stylesSeller.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ของใหม่</Text></View></TouchableOpacity>
            <TouchableOpacity><View style={stylesSeller.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ของมือสอง</Text></View></TouchableOpacity>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  WeightSheetBody() {
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาระบุน้ำหนัก</Text>
          <View style={stylesSeller.WeightSheet_Box}>
            <View style={stylesSeller.SelectSheet_TextInput}>
              <TextInput
                style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%', height: 50, }]}
                placeholder="น้ำหนัก"
                maxLength={10}
                value={this.state.Weight}
                onChangeText={(Weight) => this.setState({ Weight })}></TextInput>
            </View>
            <View style={stylesSeller.SelectSheet_TextInput}>
              <Picker
                selectedValue={this.state.language}
                style={{ width: '100%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }>
                <Picker.Item label="กิโลกรัม" value="java" />
                <Picker.Item label="กรัม" value="js" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  SizeSheetBody() {
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาดพัสดุ</Text>
          <View style={stylesSeller.SizeSheet_Box}>
            <TouchableOpacity><View style={stylesSeller.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เล็ก</Text></View></TouchableOpacity>
            <TouchableOpacity><View style={stylesSeller.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>กลาง</Text></View></TouchableOpacity>
            <TouchableOpacity><View style={stylesSeller.SizeSheet_Boxsize}><Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ใหญ่</Text></View></TouchableOpacity>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  render() {
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}>
          {this.CatagorySheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.Brand_NameSheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.PriceSheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.TotalrSheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.SelectSheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.LookSheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.WeightSheetBody()}
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
       >
          {this.SizeSheetBody()}
        </BottomSheet>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
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
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>หมวดสินค้า</Text>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
        {/* แบรนด์สินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.Brand_NameSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>แบรนด์สินค้า</Text>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
        {/* ราคา */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.PriceSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ราคา</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ตั้งราคา</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>
        {/* คลัง */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.TotalrSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>คลัง</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ระบุจำนวนสินค้า</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>
        {/* ตัวเลือกสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.SelectSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
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
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>สภาพสินค้า</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>ประเภทสินค้า เช่น มือสอง</Text>
              <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
            </View>
          </View>
        </TouchableOpacity>
        <View style={stylesSeller.Text_ling_Box}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}> ฉันจะเพิ่มตัวเลือกสินค้าได้อย่างไร</Text>
          <TouchableOpacity>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: '#0A55A6' }]}>ไปยังศูนย์เรียนรู้ผู้ขาย</Text>
          </TouchableOpacity>
        </View>
        {/* น้ำหนัก */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.WeightSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
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
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ขนาดพัสดุ</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
          </View>
        </TouchableOpacity>
        {/* เผยแพร่สินค้า */}
        <View style={stylesSeller.Seller_Up_ProductDetail}>
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
        <View style={stylesSeller.Seller_Up_ProductDetail}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เพจ Facebook</Text>
          <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
        </View>
      </View>

    );
  }
}
