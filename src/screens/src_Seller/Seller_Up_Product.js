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
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
import stylesFont, { normalize } from '../../style/stylesFont';
import stylesSeller from '../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../MainScreen';
import { GetServices, NavigationNavigateScreen } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

export default class Seller_Up_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <AppBar1 backArrow navigation={navigation} titleHead='เพิ่มสินค้า' saveBar />
        <ScrollView>
          <Seller_Up_Image />
          <Seller_Up_ProductDetail navigation={navigation} />
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
    var uri = `${ip}/sql/uploadimage/updateimage.php`
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
                    <View style={[stylesMain.ItemCenter, {
                      marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1,
                    }]}>
                      <FastImage
                        source={{ uri: item.path }}
                        style={[stylesMain.ItemCenterVertical, stylesMain.BoxProduct1Image]}
                      />
                    </View>
                  </TouchableOpacity>
                )
              }),
              avatarSource.length < 7 &&
              <TouchableOpacity onPress={() => this.UploadImageMultiple()} key={'upload'}>
                <View style={[stylesMain.ItemCenter, {
                  marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1,
                }]}>
                  <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ] :
              <TouchableOpacity onPress={() => this.UploadImageMultiple()}>
                <View style={[stylesMain.ItemCenter, {
                  marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1,
                }]}>
                  <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                  </View>
                </View>
              </TouchableOpacity>
          }
        </ScrollView>
        {/* <TouchableOpacity onPress={()=>this.UploadImageData()} style={stylesMain.ItemCenter}>
          <Text style={[{ width: 75, height: 40, borderWidth: 1, borderColor: '#456488', marginTop: 10, textAlign: 'center', textAlignVertical: 'center', color: '#fff', backgroundColor: '#456488' }]}>Upload</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

///--------------------------------------------------------------------------///
export class Seller_Up_ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: true,
      activeSubCategory: false,
      activeUnSubCategory: false,
      categoryCursor: 0,
      editValue: false,
      valueName: 'สี',
      valueNumber: [{ name: 'แดง' }, { name: 'ฟ้า' }],
      valueNumber2: [{ name: '' }],
      inputNumber: 2,
      saveLookIndex: 1,
      saveWeightProduct: { indexName: 0, name: 'กิโลกรัม' },
      saveSizeProduct: { index: -1, },
      publishProduct: true,
    };
  }
  LoadCategorySheet = () => {
    const { saveCategorySelect, saveSubCategorySelect, saveDataSubCategory, saveUnSubCategorySelect, saveDataUnSubCategory } = this.state
    this.setState({
      categoryCursor: saveCategorySelect ? saveSubCategorySelect ? saveUnSubCategorySelect ? 2 : 1 : 0 : 0,
      categorySelect: saveCategorySelect,
      subCategorySelect: saveSubCategorySelect, dataSubCategory: saveDataSubCategory,
      unSubCategorySelect: saveUnSubCategorySelect, dataUnSubCategory: saveDataUnSubCategory
    })
    this.CategorySheet.open();
  }
  getCategory = (dataCategory) => {
    this.setState({ activeCategory: false, dataCategory })
  }
  getSubCategory = (dataSubCategory) => {
    const { categoryCursor } = this.state
    this.setState({
      activeSubCategory: false, dataSubCategory, categoryCursor: dataSubCategory.subtype_data.length > 0 ? 1 : categoryCursor,
    })
  }
  getUnSubCategory = (dataUnSubCategory) => {
    const { categoryCursor } = this.state
    this.setState({
      activeUnSubCategory: false, dataUnSubCategory, categoryCursor: dataUnSubCategory.unsubtype_data.length > 0 ? 2 : categoryCursor,
    })
  }
  SaveCategorySheet = () => {
    const { categorySelect, subCategorySelect, dataSubCategory, unSubCategorySelect, dataUnSubCategory } = this.state
    this.setState({
      saveCategorySelect: categorySelect ? categorySelect : undefined,
      saveSubCategorySelect: subCategorySelect ? subCategorySelect : undefined,
      saveDataSubCategory: dataSubCategory ? dataSubCategory : undefined,
      saveUnSubCategorySelect: unSubCategorySelect ? unSubCategorySelect : undefined,
      saveDataUnSubCategory: dataUnSubCategory ? dataUnSubCategory : undefined
    })
    this.CategorySheet.close();
  }
  CategorySheetBody() {
    const {
      categoryCursor, categorySelect, dataCategory, dataSubCategory, dataUnSubCategory, subCategorySelect, unSubCategorySelect
    } = this.state
    let ItemCategory = dataCategory && dataCategory.category.map((value, index) => {
      var dataMySQL = `${finip}/${value.image_path}/menu/${value.image_head}`;
      return (
        <TouchableOpacity onPress={() => {
          return this.setState({
            activeSubCategory: true, categorySelect: { index, id_type: value.id_type, name: value.name }, dataSubCategory: undefined,
            dataUnSubCategory: undefined, subCategorySelect: undefined, unSubCategorySelect: undefined,
          })
        }}
          style={[stylesSeller.Category, {
            flexDirection: 'row', width: width * 0.88, height: 50, borderWidth: 1,
            borderColor: '#ECECEC', marginTop: 2
          }]} key={index} >
          <FastImage
            source={{
              uri: dataMySQL,
            }}
            style={[stylesMain.Category_box, stylesMain.ItemCenterVertical, {
              height: 40, width: 40, borderColor: categorySelect && categorySelect.index == index ? mainColor : '#ECECEC', marginLeft: 5
            }]}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={[stylesMain.ItemCenter]}>
            <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, {
              color: categorySelect && categorySelect.index == index ? mainColor : '#111', marginLeft: 4,
            }]}>
              {value.name}</Text>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <>
        <View style={{ flex: 1, }}>
          <View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเลือกหมวดหมู่สินค้า</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.setState({ categoryCursor: 0 })}>
                <View style={{
                  marginHorizontal: 4, borderBottomColor: categoryCursor == 0 ? mainColor : 'transparent', borderBottomWidth: 4,
                  borderTopColor: 'transparent', borderTopWidth: 4,
                }}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                    {`${categorySelect && categorySelect.name ? categorySelect.name : 'หมวดหมู่สินค้า'}`}</Text>
                </View>
              </TouchableOpacity>
              {
                categorySelect && categorySelect.name && dataSubCategory && dataSubCategory.subtype_data.length > 0 &&
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesMain.ItemCenterVertical,]}>|</Text>
              }
              {
                categorySelect && categorySelect.name && dataSubCategory && dataSubCategory.subtype_data.length > 0 &&
                <TouchableOpacity onPress={() => this.setState({ categoryCursor: 1 })}>
                  <View style={{
                    marginHorizontal: 4, borderBottomColor: categoryCursor == 1 ? mainColor : 'transparent', borderBottomWidth: 4,
                    borderTopColor: 'transparent', borderTopWidth: 4,
                  }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                      {`${subCategorySelect && subCategorySelect.name ? subCategorySelect.name : 'ประเภท'}`}</Text>
                  </View>
                </TouchableOpacity>
              }
              {
                subCategorySelect && subCategorySelect.name && dataUnSubCategory && dataUnSubCategory.unsubtype_data.length > 0 &&
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesMain.ItemCenterVertical,]}>|</Text>
              }
              {
                subCategorySelect && subCategorySelect.name && dataUnSubCategory && dataUnSubCategory.unsubtype_data.length > 0 &&
                <TouchableOpacity onPress={() => this.setState({ categoryCursor: 2 })}>
                  <View style={{
                    marginHorizontal: 4, borderBottomColor: categoryCursor == 2 ? mainColor : 'transparent', borderBottomWidth: 4,
                    borderTopColor: 'transparent', borderTopWidth: 4,
                  }}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                      {`${unSubCategorySelect && unSubCategorySelect.name ? unSubCategorySelect.name : 'ชนิด'}`}</Text>
                  </View>
                </TouchableOpacity>
              }
            </View>
          </View>
          <ScrollView>
            {
              categoryCursor == 0 &&
              <View style={stylesSeller.CatagorySheet}>
                {ItemCategory}
              </View>
            }
            {
              categoryCursor == 1 &&
              dataSubCategory && dataSubCategory.subtype_data.length > 0 &&
              <View>
                <View style={stylesSeller.cate_BoxA}>
                  {
                    dataSubCategory.subtype_data.map((value, index) => {
                      return (
                        <TouchableOpacity onPress={() => {
                          return this.setState({
                            activeUnSubCategory: true, subCategorySelect: { index, id_subtype: value.id_subtype, name: value.name },
                            dataUnSubCategory: undefined, unSubCategorySelect: undefined,
                          })
                        }} key={index} style={[stylesSeller.cate_Box, {
                          backgroundColor: subCategorySelect && subCategorySelect.index == index ? mainColor : '#fff',
                          borderColor: subCategorySelect && subCategorySelect.index == index ? mainColor : '##D4D4D4'
                        }]}>
                          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                            textAlign: 'center', marginHorizontal: 6,
                            color: subCategorySelect && subCategorySelect.index == index ? '#fff' : '#111',
                          }]}>
                            {value.name}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              </View>
            }
            {
              categoryCursor == 2 &&
              dataUnSubCategory && dataUnSubCategory.unsubtype_data.length > 0 &&
              <View>
                <View style={stylesSeller.cate_BoxA}>
                  {
                    dataUnSubCategory.unsubtype_data.map((value, index) => {
                      return (
                        <TouchableOpacity onPress={() => {
                          return this.setState({
                            unSubCategorySelect: { index, id_unsubtype: value.id_unsubtype, name: value.unsubtype_name },
                          })
                        }} key={index} style={[stylesSeller.cate_Box, {
                          backgroundColor: unSubCategorySelect && unSubCategorySelect.index == index ? mainColor : '#fff',
                          borderColor: unSubCategorySelect && unSubCategorySelect.index == index ? mainColor : '##D4D4D4'
                        }]}>
                          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
                            textAlign: 'center', marginHorizontal: 6,
                            color: unSubCategorySelect && unSubCategorySelect.index == index ? '#fff' : '#111',
                          }]}>
                            {value.unsubtype_name}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              </View>
            }
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity onPress={() => { return this.CategorySheet.close() }}>
              <View style={stylesSeller.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.SaveCategorySheet()}>
              <View style={stylesSeller.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  LoadBrand_NameSheet = () => {
    const { saveNameBrand } = this.state
    this.setState({
      nameBrand: saveNameBrand
    })
    this.Brand_NameSheet.open();
  }
  SaveBrand_NameSheet = () => {
    const { nameBrand } = this.state
    this.setState({
      saveNameBrand: nameBrand
    })
    this.Brand_NameSheet.close();
  }
  Brand_NameSheetBody() {
    const { nameBrand } = this.state
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
              onChangeText={(nameBrand) => this.setState({ nameBrand })}>{nameBrand}</TextInput>
          </View>
          <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity onPress={() => { return this.Brand_NameSheet.close() }}>
              <View style={stylesSeller.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.SaveBrand_NameSheet()}>
              <View style={stylesSeller.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>

    )
  }
  LoadPriceSheet = () => {
    const { savePrice } = this.state
    this.setState({
      price: savePrice
    })
    this.PriceSheet.open();
  }
  SavePriceSheet = () => {
    const { price } = this.state
    this.setState({
      savePrice: price
    })
    this.PriceSheet.close();
  }
  PriceSheetBody() {
    const { price } = this.state
    return (
      <>
        <View style={stylesSeller.BottomSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณากรอกราคาสินค้า</Text>
          <View style={stylesSeller.BottomSheet_Box}>
            <TextInput
              style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}
              placeholder="0.00"
              editable
              onChangeText={(price) => this.setState({ price })}>{price}</TextInput>
          </View>
          <View style={stylesSeller.BottomSheet_Botton}>
            <TouchableOpacity onPress={() => { return this.PriceSheet.close() }}>
              <View style={stylesSeller.BottomSheet_Botton_cancel}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.SavePriceSheet()}>
              <View style={stylesSeller.BottomSheet_Botton_OK}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  LoadTotalrSheet = () => {
    const { saveTotal } = this.state
    this.setState({
      total: saveTotal > 0 ? saveTotal : 1
    })
    this.TotalrSheet.open();
  }
  ActionTotalrSheet = (value, type) => {
    var { total, totalChange } = this.state;
    var oldTotal = total > 0 ? total : 1
    type == 'minus' && total > 1 && (total = total - 1);
    type == 'plus' && (total = total + 1);
    type == undefined && (total = Number(value))
    Number.isInteger(total) == true && total > 0 ? (totalChange = true) :
      (totalChange = false);
    this.setState({ oldTotal, total, totalChange });
  }
  SaveTotalrSheet = () => {
    const { total } = this.state
    this.setState({
      saveTotal: total
    })
    this.TotalrSheet.close();
  }
  TotalrSheetBody() {
    const { oldTotal, total, totalChange } = this.state;
    totalChange == false && this.setState({ total: oldTotal, totalChange: true });
    return (
      <>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเพิ่มจำนวนสินค้า</Text>
        <View style={stylesSeller.BottomSheet_BoxTotal}>
          <TouchableOpacity onPress={() => this.ActionTotalrSheet(undefined, 'minus')}>
            <View style={stylesSeller.TotalrSheet_botton}>
              <IconAntDesign name='minus' size={25} />
            </View>
          </TouchableOpacity>
          <TextInput
            style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}
            maxLength={6}
            onChangeText={(value) => this.ActionTotalrSheet(value)} keyboardType={'numeric'}>
            {total}
          </TextInput>
          <TouchableOpacity onPress={() => this.ActionTotalrSheet(undefined, 'plus')}>
            <View style={stylesSeller.TotalrSheet_botton}>
              <IconAntDesign name='plus' size={25} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity onPress={() => { this.TotalrSheet.close(); }}>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.SaveTotalrSheet()}>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  setStateValue = (value, index) => {
    const { valueNumber } = this.state
    valueNumber[index].name = value
    this.setState({ valueNumber })
  }
  setStateInput = () => {
    const { valueNumber } = this.state
    const values = [...valueNumber];
    values.push({ name: '' });
    this.setState({ valueNumber: values })
  }
  deleteStateValue = (index) => {
    const { valueNumber } = this.state
    const values = [...valueNumber];
    values.splice(index, 1);
    this.setState({ valueNumber: values })
  }
  setStateValue2 = (value, index) => {
    const { valueNumber2 } = this.state
    valueNumber2[index].name = value
    this.setState({ valueNumber2 })
  }
  setStateInput2 = () => {
    const { valueNumber2 } = this.state
    const values = [...valueNumber2];
    values.push({ name: '' });
    this.setState({ valueNumber2: values })
  }
  deleteStateValue2 = (index) => {
    const { valueNumber2 } = this.state
    const values = [...valueNumber2];
    values.splice(index, 1);
    this.setState({ valueNumber2: values })
  }
  SelectSheetBody() {
    const { navigation } = this.props
    const { editValue, editValue2, valueName, valueName2, valueNumber, valueNumber2 } = this.state
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <ScrollView>
            <View style={stylesSeller.SelectSheet_Box}>
              <View style={[stylesSeller.SelectSheet_TextInput, {
                width: width * 0.4, marginLeft: 0
              }]}>
                <TextInput
                  style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { width: 80, textAlign: 'center', marginVertical: -10 }]}
                  placeholder='ตัวเลือกที่ 1'
                  maxLength={10}
                  onChangeText={(value) => this.setState({ valueName: value })}>
                  {valueName}</TextInput>
              </View>
              <TouchableOpacity onPress={() => this.setState({ editValue: !editValue })}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: mainColor }]}>{
                  editValue == true ? 'ตกลง' : 'แก้ไข'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {[
                valueNumber.length > 0 ?
                  valueNumber.map((value, index) => {
                    return (
                      <>
                        <View key={index} style={[stylesSeller.SelectSheet_TextInput, {
                          width: width * 0.4, marginRight: editValue == true ? -20 : 0,
                        }]}>
                          <TextInput
                            style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: 80, textAlign: 'center', marginVertical: -10 }]}
                            placeholder={valueName ? valueName : 'ตัวเลือกที่ 1'}
                            maxLength={10}
                            onChangeText={(value) => this.setStateValue(value, index)}>
                            {value.name}</TextInput>
                        </View>
                        {
                          editValue == true &&
                          <TouchableOpacity onPress={() => this.deleteStateValue(index)}>
                            <View style={{ backgroundColor: 'red', padding: 4, borderRadius: 20, left: 8 }}>
                              <IconFontisto name='close-a' size={12} style={{
                                color: '#fff',
                              }} />
                            </View>
                          </TouchableOpacity>
                        }
                      </>
                    )
                  }) : <></>,
                valueNumber.length < 20 &&
                <TouchableOpacity onPress={() => this.setStateInput()}
                  key='addInput' style={[stylesSeller.SelectSheet_TextInput, { width: width * 0.4, height: 30 }]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
                </TouchableOpacity>
              ]}
            </View>
            <View style={stylesSeller.SelectSheet_Box}>
              <View style={[stylesSeller.SelectSheet_TextInput, {
                width: width * 0.4, marginLeft: 0
              }]}>
                <TextInput
                  style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { width: 80, textAlign: 'center', marginVertical: -10 }]}
                  placeholder='ตัวเลือกที่ 2'
                  maxLength={10}
                  onChangeText={(value) => this.setState({ valueName2: value })}>
                  {valueName2}</TextInput>
              </View>
              <TouchableOpacity onPress={() => this.setState({ editValue2: !editValue2 })}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: mainColor }]}>{
                  editValue2 == true ? 'ตกลง' : 'แก้ไข'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {[
                valueNumber2.length > 0 ?
                  valueNumber2.map((value, index) => {
                    return (
                      <>
                        <View key={index} style={[stylesSeller.SelectSheet_TextInput, {
                          width: width * 0.4, marginRight: editValue2 == true ? -20 : 0,
                        }]}>
                          <TextInput
                            style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: 80, textAlign: 'center', marginVertical: -10 }]}
                            placeholder={valueName2 ? valueName2 : 'ตัวเลือกที่ 2'}
                            maxLength={10}
                            onChangeText={(value) => this.setStateValue2(value, index)}>
                            {value.name}</TextInput>
                        </View>
                        {
                          editValue2 == true &&
                          <TouchableOpacity onPress={() => this.deleteStateValue2(index)}>
                            <View style={{ backgroundColor: 'red', padding: 4, borderRadius: 20, left: 8 }}>
                              <IconFontisto name='close-a' size={12} style={{
                                color: '#fff',
                              }} />
                            </View>
                          </TouchableOpacity>
                        }
                      </>
                    )
                  }) : <></>,
                valueNumber2.length < 20 &&
                <TouchableOpacity onPress={() => this.setStateInput2()}
                  key='addInput' style={[stylesSeller.SelectSheet_TextInput, { width: width * 0.4, height: 30 }]}>
                  <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
                </TouchableOpacity>
              ]}
            </View>
          </ScrollView>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity onPress={() => { this.SelectSheet.close(); }}>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {
            [
              this.SelectSheet.close(), NavigationNavigateScreen({
                goScreen: 'Seller_Topic', setData: {
                  selectedIndex: 14, optionName: valueName, optionValue: valueNumber, optionName2: valueName2, optionValue2: valueNumber2
                }, navigation
              })
            ]
          }}>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  LoadLookSheet = () => {
    const { saveLookIndex } = this.state
    this.setState({
      lookIndex: saveLookIndex
    })
    this.LookSheet.open();
  }
  SaveLookSheet = () => {
    const { lookIndex } = this.state
    this.setState({
      saveLookIndex: lookIndex
    })
    this.LookSheet.close();
  }
  LookSheetBody() {
    const { lookIndex } = this.state
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สภาพสินค้า</Text>
          <View style={stylesSeller.SizeSheet_Box}>
            <TouchableOpacity onPress={() => { return this.setState({ lookIndex: 1 }) }}>
              <View style={[stylesSeller.SizeSheet_Boxsize, {
                backgroundColor: lookIndex == 1 ? mainColor : '#FFFFFF',
                borderColor: lookIndex == 1 ? mainColor : '#CACACA',
              }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: lookIndex == 1 ? '#FFFFFF' : '#111' }]}>
                  ของใหม่</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { return this.setState({ lookIndex: 2 }) }}>
              <View style={[stylesSeller.SizeSheet_Boxsize, {
                backgroundColor: lookIndex == 2 ? mainColor : '#FFFFFF',
                borderColor: lookIndex == 2 ? mainColor : '#CACACA',
              }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: lookIndex == 2 ? '#FFFFFF' : '#111' }]}>
                  ของมือสอง</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity onPress={() => this.LookSheet.close()}>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.SaveLookSheet()}>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  LoadWeightSheet = () => {
    const { saveWeightProduct } = this.state
    this.setState({
      weightProduct: saveWeightProduct
    })
    this.WeightSheet.open();
  }
  setStateWeightValue = (value) => {
    const { weightProduct } = this.state;
    weightProduct.name = value;
    weightProduct.indexName = value == 'กิโลกรัม' ? 0 : 1;
    this.setState({ weightProduct });
  }
  setStateWeightValue2 = (value) => {
    const { weightProduct } = this.state;
    weightProduct.value = value;
    this.setState({ weightProduct });
  }
  SaveWeightSheet = () => {
    const { weightProduct } = this.state
    this.setState({
      saveWeightProduct: weightProduct
    })
    this.WeightSheet.close();
  }
  WeightSheetBody() {
    const { weightProduct, } = this.state
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
                value={weightProduct ? weightProduct.value : ''}
                onChangeText={this.setStateWeightValue2.bind(this)}>
              </TextInput>
            </View>
            <ModalDropdown
              options={['กิโลกรัม', 'กรัม']}
              defaultIndex={weightProduct && weightProduct.indexName}
              dropdownStyle={{ width: 160, }}
              textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
              dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
              renderButtonText={this.setStateWeightValue.bind(this)}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesSeller.SelectSheet_TextInput, {
                textAlign: 'center', textAlignVertical: 'center'
              }]}>
                {weightProduct && weightProduct.name}</Text>
            </ModalDropdown>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity onPress={() => this.WeightSheet.close()}>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.SaveWeightSheet()}>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  LoadSizeSheet = () => {
    const { saveSizeProduct } = this.state
    this.setState({
      sizeProduct: saveSizeProduct
    })
    this.SizeSheet.open();
  }
  setStateSizeProduct = (index) => {
    const { sizeProduct } = this.state;
    sizeProduct.index = index;
    sizeProduct.name = index == 0 ? 'เล็ก' : index == 1 ? 'กลาง' : index == 2 ? 'ใหญ่' : 'เล็ก'
    sizeProduct.value = index == 0 ? 'S' : index == 1 ? 'M' : index == 2 ? 'L' : 'S'
    this.setState({ sizeProduct })
  }
  SaveSizeSheet = () => {
    const { sizeProduct } = this.state
    this.setState({
      saveSizeProduct: sizeProduct
    })
    this.SizeSheet.close();
  }
  SizeSheetBody() {
    const { sizeProduct } = this.state;
    return (
      <>
        <View style={stylesSeller.SelectSheet}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาดพัสดุ</Text>
          <View style={stylesSeller.SizeSheet_Box}>
            <TouchableOpacity onPress={() => this.setStateSizeProduct(0)}>
              <View style={[stylesSeller.SizeSheet_Boxsize, {
                borderColor: sizeProduct && sizeProduct.index == 0 ? mainColor : '#CACACA',
                backgroundColor: sizeProduct && sizeProduct.index == 0 ? mainColor : '#FFF'
              }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, {
                  color: sizeProduct && sizeProduct.index == 0 ? '#FFF' : '#111'
                }]}>
                  เล็ก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setStateSizeProduct(1)}>
              <View style={[stylesSeller.SizeSheet_Boxsize, {
                borderColor: sizeProduct && sizeProduct.index == 1 ? mainColor : '#CACACA',
                backgroundColor: sizeProduct && sizeProduct.index == 1 ? mainColor : '#FFF'
              }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, {
                  color: sizeProduct && sizeProduct.index == 1 ? '#FFF' : '#111'
                }]}>
                  กลาง</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setStateSizeProduct(2)}>
              <View style={[stylesSeller.SizeSheet_Boxsize, {
                borderColor: sizeProduct && sizeProduct.index == 2 ? mainColor : '#CACACA',
                backgroundColor: sizeProduct && sizeProduct.index == 2 ? mainColor : '#FFF'
              }]}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, {
                  color: sizeProduct && sizeProduct.index == 2 ? '#FFF' : '#111'
                }]}>
                  ใหญ่</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={stylesSeller.BottomSheet_Botton}>
          <TouchableOpacity onPress={() => this.SizeSheet.close()}>
            <View style={stylesSeller.BottomSheet_Botton_cancel}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.SaveSizeSheet()}>
            <View style={stylesSeller.BottomSheet_Botton_OK}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  render() {
    const {
      activeCategory, activeSubCategory, activeUnSubCategory, categorySelect, publishProduct, saveCategorySelect, saveLookIndex,
      saveNameBrand, savePrice, saveSizeProduct, saveSubCategorySelect, saveTotal, saveUnSubCategorySelect, saveWeightProduct,
      subCategorySelect
    } = this.state
    const { detail, name } = this.state
    var uriCategory = `${finip}/store/add_product_mobile`
    var uriSubCategory = `${finip}/store/product_subtype_ajax`
    var uriUnSubCategory = `${finip}/store/product_unsubtype_ajax`
    var dataBodySubCategory = {
      id_type: categorySelect && categorySelect.id_type,
    }
    var dataBodyUnSubCategory = {
      id_subtype: subCategorySelect && subCategorySelect.id_subtype,
    }
    activeCategory == true &&
      GetServices({ uriPointer: uriCategory, getDataSource: this.getCategory.bind(this), })
    activeSubCategory == true &&
      GetServices({ uriPointer: uriSubCategory, dataBody: dataBodySubCategory, getDataSource: this.getSubCategory.bind(this), })
    activeUnSubCategory == true &&
      GetServices({ uriPointer: uriUnSubCategory, dataBody: dataBodyUnSubCategory, getDataSource: this.getUnSubCategory.bind(this), })
    return (
      <View>
        {/* หมวดหมู่สินค้า */}
        <BottomSheet
          ref={ref => {
            this.CategorySheet = ref;
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
          {this.CategorySheetBody()}
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
        {/* ชื่อสินค้า */}
        <View style={stylesSeller.Seller_Up_ProductDetail}>
          <TextInput
            style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]}
            placeholder="ชื่อสินค้า"
            maxLength={120}
            value={name}
            onChangeText={(name) => this.setState({ name })}></TextInput>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
            color: 'red', marginLeft: 10, width: width * 0.45, textAlign: 'left',
          }]}>
            {(name && name.length < 20 || name == undefined || name == '') && 'ชื่อต้องมากกว่า 20 ตัวอักษร'}</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
            color: mainColor, marginRight: 10, width: width * 0.50, textAlign: 'right',
          }]}>
            <Text style={{ color: name && name.length >= 20 ? mainColor : 'red' }}>20</Text>/120 ตัวอักษร</Text>
        </View>
        {/* รายละเอียดสินค้า */}
        <View style={{ width: '100%', height: 130, backgroundColor: '#FFF', padding: 10, }}>
          <TextInput
            style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]}
            placeholder="รายละเอียดสินค้า"
            multiline
            editable
            maxLength={5000}
            value={detail}
            onChangeText={(detail) => this.setState({ detail })}></TextInput>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
            color: 'red', marginLeft: 10, width: width * 0.45, textAlign: 'left',
          }]}>
            {(detail && detail.length < 100 || detail == undefined || detail == '') && 'รายละเอียดสินค้าต้องมากกว่า 100 ตัวอักษร'}</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
            color: mainColor, marginRight: 10, width: width * 0.50, textAlign: 'right',
          }]}>
            <Text style={{ color: detail && detail.length >= 100 ? mainColor : 'red' }}>100</Text>/5000 ตัวอักษร</Text>
        </View>

        {/* หมวดสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => this.LoadCategorySheet()}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>หมวดสินค้า</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {(saveCategorySelect || saveSubCategorySelect || saveUnSubCategorySelect) ?
                  `${(saveCategorySelect && saveCategorySelect.name)} ${
                  (saveSubCategorySelect && (' > ' + saveSubCategorySelect.name))} ${
                  (saveUnSubCategorySelect && (' > ' + saveUnSubCategorySelect.name))}` :
                  <Text style={{ color: '#A3A3A3' }}>{'ตั้งหมวดสินค้า'}</Text>}</Text>
              <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
            </View>
          </View>
        </TouchableOpacity>
        {/* แบรนด์สินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => this.LoadBrand_NameSheet()}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>แบรนด์สินค้า</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {saveNameBrand ? saveNameBrand : <Text style={{ color: '#A3A3A3' }}>{'ตั้งค่าแบรนด์'}</Text>}</Text>
              <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
            </View>
          </View>
        </TouchableOpacity>
        {/* ราคา */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.PriceSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ราคา</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {savePrice ? savePrice : <Text style={{ color: '#A3A3A3' }}>{'ตั้งราคา'}</Text>}</Text>
              <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
            </View>
          </View>
        </TouchableOpacity>
        {/* คลัง */}
        <TouchableOpacity activeOpacity={1} onPress={() => this.LoadTotalrSheet()}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>คลัง</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {saveTotal ? saveTotal : <Text style={{ color: '#A3A3A3' }}>{'ตั้งจำนวนสินค้า'}</Text>}</Text>
              <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
            </View>
          </View>
        </TouchableOpacity>
        {/* ตัวเลือกสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.SelectSheet.open(); }}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ตัวเลือกสินค้า</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesMain.ItemCenterVertical, {
                marginLeft: 10, color: '#A3A3A3'
              }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>เพิ่มตัวเลือกสินค้า</Text>
              <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
          </View>
        </TouchableOpacity>
        {/* สภาพสินค้า */}
        <TouchableOpacity activeOpacity={1} onPress={() => this.LoadLookSheet()}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>สภาพสินค้า</Text>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 5 }]}>
                {
                  saveLookIndex ? saveLookIndex == 1 ? 'ของใหม่' : 'ของมือสอง' : <Text style={{ color: '#A3A3A3', }}>{'สภาพสินค้า'}</Text>
                }</Text>
              <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={stylesSeller.Text_ling_Box}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { marginLeft: 10, color: '#A3A3A3' }]}>
            ฉันจะเพิ่มตัวเลือกสินค้าได้อย่างไร</Text>
          <TouchableOpacity>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { color: mainColor }]}>ไปยังศูนย์เรียนรู้ผู้ขาย</Text>
          </TouchableOpacity>
        </View>
        {/* น้ำหนัก */}
        <TouchableOpacity activeOpacity={1} onPress={() => this.LoadWeightSheet()}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>น้ำหนัก</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesMain.ItemCenterVertical, {
                marginLeft: 10, color: '#A3A3A3'
              }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { marginTop: 5 }]}>
                {saveWeightProduct.value ? `${saveWeightProduct.value} ${saveWeightProduct.name}` : <Text style={{ color: '#A3A3A3', }}>
                  {'ระบุน้ำหนัก'}</Text>}</Text>
              <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
          </View>
        </TouchableOpacity>
        {/* ขนาดพัสดุ */}
        <TouchableOpacity activeOpacity={1} onPress={() => this.LoadSizeSheet()}>
          <View style={stylesSeller.Seller_Up_ProductDetail}>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ขนาดพัสดุ</Text>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesMain.ItemCenterVertical, {
                marginLeft: 10, color: '#A3A3A3'
              }]}>(ไม่จำเป็นต้องระบุ)</Text>
            </View>
            <View style={stylesMain.FlexRow}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { marginTop: 5 }]}>
                {saveSizeProduct.name ? saveSizeProduct.name : <Text style={{ color: '#A3A3A3', }}>
                  {'ระบุขนาดพัสดุ'}</Text>}</Text>
              <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
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
            checked={publishProduct}
            onPress={() => this.setState({ publishProduct: !publishProduct })}
          />
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เพจ Facebook</Text>
          <IconEntypo name='chevron-right' size={35} color={mainColor} />
        </View>
      </View>
    );
  }
}