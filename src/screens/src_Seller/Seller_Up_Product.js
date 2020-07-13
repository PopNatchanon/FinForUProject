///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useRef, useEffect } from 'react';
import {
  Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../actions';
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
import { GetServices, } from '../../customComponents/Tools';
import { NavigationNavigate, AppBar } from '../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, finip } from '../../navigator/IpConfig';
import { set } from 'react-native-reanimated';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
  customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Seller_Up_Product);
function Seller_Up_Product(props) {
  return <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
    <AppBar {...props} backArrow titleHead='เพิ่มสินค้า' saveBar />
    <ScrollView>
      <Seller_Up_Image />
      <Seller_Up_ProductDetail {...props} />
    </ScrollView>
  </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export let Seller_Up_Image = (props) => {
  const [activeAvatarSource, setActiveAvatarSource] = useState(false);
  const [avatarSource, setAvatarSource] = useState([]);
  let UploadImageData = () => {
    var uri = `${ip}/sql/uploadimage/updateimage.php`;
    avatarSource && fetch(uri, {
      method: "POST",
      body: avatarSource
    }).then(response => response.json()).then(response => {
      alert("Upload success!");
      setAvatarSource(null);
    }).catch(error => {
      alert("Upload failed!");
    });
  };
  activeAvatarSource && setActiveAvatarSource(false);
  let UploadImageSingle = (index) => {
    const options = { includeBase64: true };
    ImagePicker.openPicker(options).then(response => {
      avatarSource[index] = response; setActiveAvatarSource(true); setAvatarSource(avatarSource);
    });
  };
  let UploadImageMultiple = () => {
    const options = { multiple: true, includeBase64: true };
    ImagePicker.openPicker(options).then(response => {
      response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item)); setActiveAvatarSource(true);
      setAvatarSource(avatarSource);
    });
  };
  return <View style={stylesMain.FrameBackground}>
    <ScrollView horizontal>
      {avatarSource ? <>
        {avatarSource.map((item, index) => <TouchableOpacity onPress={() => UploadImageSingle(index)} key={index}>
          <View style={[stylesMain.ItemCenter,
          { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
            <FastImage source={{ uri: item.path }} style={[stylesMain.ItemCenterVertical, stylesMain.BoxProduct1Image]} />
          </View>
        </TouchableOpacity>)}
        {avatarSource.length < 7 && <TouchableOpacity onPress={() => UploadImageMultiple()} key={'upload'}>
          <View style={[stylesMain.ItemCenter,
          { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
              <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
            </View>
          </View>
        </TouchableOpacity>}
      </> : <TouchableOpacity onPress={() => UploadImageMultiple()}>
          <View style={[stylesMain.ItemCenter,
          { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
              <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
            </View>
          </View>
        </TouchableOpacity>}
    </ScrollView>
  </View>;
};
///--------------------------------------------------------------------------///
export let Seller_Up_ProductDetail = (props) => {
  const { navigation } = props;
  const [activeCategory, setActiveCategory] = useState(true); ////----====>>>>ส่วนควบคุมการดึง category
  const [activeSubCategory, setActiveSubCategory] = useState(false); ////----====>>>>ส่วนควบคุมการดึง subCategory
  const [activeUnSubCategory, setActiveUnSubCategory] = useState(false); ////----====>>>>ส่วนควบคุมการดึง unSubCategory
  const [categoryCursor, setCategoryCursor] = useState(0); ////----====>>>> cursor ที่เลือกอยู่ในปัจจุบัน
  const [dataCategory, setDataCategory] = useState(undefined); ////----====>>>>ข้อมูลที่ดึงมา category
  const [categorySelect, setCategorySelect] = useState(undefined); ////----====>>>>category ที่เลือกก่อนกดตกลง
  const [saveCategorySelect, setSaveCategorySelect] = useState(undefined); ////----====>>>>category ที่เซฟไว้
  const [dataSubCategory, setDataSubCategory] = useState(undefined); ////----====>>>>ข้อมูลที่ดึงมา subCategory
  const [saveDataSubCategory, setSaveDataSubCategory] = useState(undefined); ////----====>>>>ข้อมูล subCategory ที่เซฟไว้
  const [subCategorySelect, setSubCategorySelect] = useState(undefined); ////----====>>>>subCategory ที่เลือกก่อนกดตกลง
  const [saveSubCategorySelect, setSaveSubCategorySelect] = useState(undefined); ////----====>>>>subCategory ที่เซฟไว้
  const [dataUnSubCategory, setDataUnSubCategory] = useState(undefined); ////----====>>>>unSubCategory ที่เลือกก่อนกดตกลง
  const [saveDataUnSubCategory, setSaveDataUnSubCategory] = useState(undefined); ////----====>>>>unSubCategory ที่เซฟไว้
  const [unSubCategorySelect, setUnSubCategorySelect] = useState(undefined); ////----====>>>>ข้อมูลที่ดึงมา unSubCategory
  const [saveUnSubCategorySelect, setSaveUnSubCategorySelect] = useState(undefined); ////----====>>>>ข้อมูล unSubCategory ที่เซฟไว้
  const [nameBrand, setNameBrand] = useState(undefined); ////----====>>>>nameBrand ที่กรอกก่อนกดตกลง
  const [saveNameBrand, setSaveNameBrand] = useState(undefined); ////----====>>>>nameBrand ที่เซฟไว้
  const [price, setPrice] = useState(undefined); ////----====>>>>price ที่กรอกก่อนกดตกลง
  const [savePrice, setSavePrice] = useState(undefined); ////----====>>>>price ที่เซฟไว้
  const [total, setTotal] = useState(undefined); ////----====>>>>total ที่กรอกก่อนกดตกลง
  const [totalChange, setTotalChange] = useState(true); ////----====>>>>
  const [oldTotal, setOldTotal] = useState(undefined); ////----====>>>>
  const [saveTotal, setSaveTotal] = useState(undefined); ////----====>>>>total ที่เซฟไว้
  const [editValue, setEditValue] = useState(false); ////----====>>>>edit Mode ของตัวเลือกแรก
  const [editValue2, setEditValue2] = useState(false); ////----====>>>>edit Mode ของตัวเลือกที่สอง
  const [valueName, setValueName] = useState('สี'); ////----====>>>>ชื่อของตัวเลือกแรก
  const [valueNumber, setValueNumber] = useState([{ name: 'แดง' }, { name: 'ฟ้า' }]); ////----====>>>>ชื่อของตัวเลือกทั้งหมดในตัวเลือกแรก
  const [valueName2, setValueName2] = useState('ขนาด'); ////----====>>>>ชื่อของตัวเลือกที่สอง
  const [valueNumber2, setValueNumber2] = useState([{ name: '' }]); ////----====>>>>ชื่อของตัวเลือกทั้งหมดในตัวเลือกที่สอง
  const [lookIndex, setLookIndex] = useState(undefined); ////----====>>>>สภาพสินค้า ที่กรอกก่อนกดตกลง
  const [saveLookIndex, setSaveLookIndex] = useState(undefined); ////----====>>>>สภาพสินค้า ที่เซฟไว้
  const [weightProduct, setWeightProduct] = useState({ indexName: 0, name: 'กิโลกรัม' });
  const [saveWeightProduct, setSaveWeightProduct] = useState({ indexName: 0, name: 'กิโลกรัม' });
  const [sizeProduct, setSizeProduct] = useState({ index: -1, });
  const [saveSizeProduct, setSaveSizeProduct] = useState({ index: -1, });

  const [detail, setDetail] = useState(undefined);
  const [name, setName] = useState(undefined);

  const [inputNumber, setInputNumber] = useState(2);
  const [publishProduct, setPublishProduct] = useState(true);
  const Brand_NameSheetRef = useRef(null);
  const CategorySheetRef = useRef(null);
  const PriceSheetRef = useRef(null);
  const TotalrSheetRef = useRef(null);
  const SelectSheetRef = useRef(null);
  const LookSheetRef = useRef(null);
  const WeightSheetRef = useRef(null);
  const SizeSheetRef = useRef(null);
  var dataBodySubCategory = {
    id_type: categorySelect && categorySelect.id_type,
  };
  var dataBodyUnSubCategory = {
    id_subtype: subCategorySelect && subCategorySelect.id_subtype,
  };
  var uriCategory = `${finip}/store/add_product_mobile`;
  var uriSubCategory = `${finip}/store/product_subtype_ajax`;
  var uriUnSubCategory = `${finip}/store/product_unsubtype_ajax`;
  ///===========================> Category
  let loadCategorySheet = () => {
    setCategoryCursor(saveCategorySelect ? saveSubCategorySelect ? saveUnSubCategorySelect ? 2 : 1 : 0 : 0);
    setCategorySelect(saveCategorySelect); setSubCategorySelect(saveSubCategorySelect); setDataSubCategory(saveDataSubCategory);
    setUnSubCategorySelect(saveUnSubCategorySelect); setDataUnSubCategory(saveDataUnSubCategory);
    CategorySheetRef.current.open();
  };
  let getCategory = (value) => { setActiveCategory(false); setDataCategory(value); };
  let getSubCategory = (value) => {
    setActiveSubCategory(false); setCategoryCursor(value.subtype_data.length > 0 ? 1 : categoryCursor); setDataSubCategory(value);
  };
  let getUnSubCategory = (value) => {
    setActiveUnSubCategory(false); setCategoryCursor(value.unsubtype_data.length > 0 ? 2 : categoryCursor); setDataUnSubCategory(value);
  };
  let saveCategorySheet = () => {
    setSaveCategorySelect(categorySelect ?? undefined); setSaveSubCategorySelect(subCategorySelect ?? undefined);
    setSaveDataSubCategory(dataSubCategory ?? undefined); setSaveUnSubCategorySelect(unSubCategorySelect ?? undefined);
    setSaveDataUnSubCategory(dataUnSubCategory ?? undefined);
    CategorySheetRef.current.close();
  };
  let selectCategory = (value, index) => {
    setActiveSubCategory(true);
    setCategorySelect({ index, id_type: value.id_type, name: value.name });
    setDataSubCategory(undefined);
    setDataUnSubCategory(undefined);
    setSubCategorySelect(undefined);
    setUnSubCategorySelect(undefined);
  };
  let ItemCategory = dataCategory && dataCategory.category.map((value, index) => {
    var dataMySQL = `${finip}/${value.image_path}/menu/${value.image_head}`;
    return <TouchableOpacity onPress={() => selectCategory(value, index)} key={index} style={[stylesSeller.Category,
    { flexDirection: 'row', width: width * 0.88, height: 50, borderWidth: 1, borderColor: '#ECECEC', marginTop: 2 }]}>
      <FastImage source={{ uri: dataMySQL, }} style={[stylesMain.Category_box, stylesMain.ItemCenterVertical,
      { height: 40, width: 40, borderColor: categorySelect?.index == index ? mainColor : '#ECECEC', marginLeft: 5 }]}
        resizeMode={FastImage.resizeMode.cover} />
      <View style={[stylesMain.ItemCenter]}>
        <Text numberOfLines={2} style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,
        { color: categorySelect?.index == index ? mainColor : '#111', marginLeft: 4, }]}>{value.name}</Text>
      </View>
    </TouchableOpacity>;
  });
  let selectSubCategory = (value, index) => {
    setActiveUnSubCategory(true);
    setSubCategorySelect({ index, id_subtype: value.id_subtype, name: value.name });
    setDataUnSubCategory(undefined);
    setUnSubCategorySelect(undefined);
  };
  let ItemSubCategory = dataSubCategory?.subtype_data?.map((value, index) => <TouchableOpacity onPress={() =>
    selectSubCategory(value, index)} key={index} style={[stylesSeller.cate_Box, {
      backgroundColor: subCategorySelect?.index == index ? mainColor : '#fff',
      borderColor: subCategorySelect?.index == index ? mainColor : '##D4D4D4'
    }]}>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
    { textAlign: 'center', marginHorizontal: 6, color: subCategorySelect?.index == index ? '#fff' : '#111', }]}>{value.name}</Text>
  </TouchableOpacity>);
  let selectUnSubCategory = (value, index) => {
    setUnSubCategorySelect({ index, id_unsubtype: value.id_unsubtype, name: value.unsubtype_name });
  };
  let ItemUnSubCategory = dataUnSubCategory?.unsubtype_data?.map((value, index) => <TouchableOpacity onPress={() =>
    selectUnSubCategory(value, index)} key={index} style={[stylesSeller.cate_Box, {
      backgroundColor: unSubCategorySelect?.index == index ? mainColor : '#fff',
      borderColor: unSubCategorySelect?.index == index ? mainColor : '##D4D4D4'
    }]}>
    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, {
      textAlign: 'center', marginHorizontal: 6, color: unSubCategorySelect?.index == index ? '#fff' : '#111',
    }]}>{value.unsubtype_name}</Text>
  </TouchableOpacity>);
  let categorySheetBody = () => <>
    <View style={{ flex: 1, }}>
      <View>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเลือกหมวดหมู่สินค้า</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setCategoryCursor(0)}>
            <View style={{
              marginHorizontal: 4, borderBottomColor: categoryCursor == 0 ? mainColor : 'transparent', borderBottomWidth: 4,
              borderTopColor: 'transparent', borderTopWidth: 4,
            }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {`${categorySelect?.name ?? 'หมวดหมู่สินค้า'}`}</Text>
            </View>
          </TouchableOpacity>
          {categorySelect?.name && dataSubCategory?.subtype_data.length > 0 &&
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesMain.ItemCenterVertical,]}>|</Text>}
          {categorySelect?.name && dataSubCategory?.subtype_data.length > 0 && <TouchableOpacity onPress={() => setCategoryCursor(1)}>
            <View style={{
              marginHorizontal: 4, borderBottomColor: categoryCursor == 1 ? mainColor : 'transparent', borderBottomWidth: 4,
              borderTopColor: 'transparent', borderTopWidth: 4,
            }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {`${subCategorySelect?.name ?? 'ประเภท'}`}</Text>
            </View>
          </TouchableOpacity>}
          {subCategorySelect?.name && dataUnSubCategory?.unsubtype_data.length > 0 && <Text style={[stylesFont.FontFamilyBold,
          stylesFont.FontSize4, stylesMain.ItemCenterVertical,]}>|</Text>}
          {subCategorySelect?.name && dataUnSubCategory?.unsubtype_data.length > 0 && <TouchableOpacity onPress={() =>
            setCategoryCursor(2)}>
            <View style={{
              marginHorizontal: 4, borderBottomColor: categoryCursor == 2 ? mainColor : 'transparent', borderBottomWidth: 4,
              borderTopColor: 'transparent', borderTopWidth: 4,
            }}>
              <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
                {`${unSubCategorySelect?.name ?? 'ชนิด'}`}</Text>
            </View>
          </TouchableOpacity>}
        </View>
      </View>
      <ScrollView>
        {categoryCursor == 0 && <View style={stylesSeller.CatagorySheet}>
          {ItemCategory}
        </View>}
        {categoryCursor == 1 && dataSubCategory?.subtype_data.length > 0 && <View>
          <View style={stylesSeller.cate_BoxA}>
            {ItemSubCategory}
          </View>
        </View>}
        {categoryCursor == 2 && dataUnSubCategory?.unsubtype_data.length > 0 && <View>
          <View style={stylesSeller.cate_BoxA}>
            {ItemUnSubCategory}
          </View>
        </View>}
      </ScrollView>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
      <View style={stylesSeller.BottomSheet_Botton}>
        <TouchableOpacity onPress={() => CategorySheetRef.current.close()}>
          <View style={stylesSeller.BottomSheet_Botton_cancel}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveCategorySheet()}>
          <View style={stylesSeller.BottomSheet_Botton_OK}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>;
  ///===========================> NameBrand
  let loadBrand_NameSheet = () => { setNameBrand(saveNameBrand); Brand_NameSheetRef.current.open(); };
  let saveBrand_NameSheet = () => { setSaveNameBrand(nameBrand); Brand_NameSheetRef.current.close(); };
  let brand_NameSheetBody = () => <>
    <View style={stylesSeller.BottomSheet}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาพิมพ์ชื่อแบรนด์สินค้า</Text>
      <View style={[stylesSeller.BottomSheet_Box]}>
        <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { width: '100%' }]} placeholder="ชื่อแบรนด์" multiline
          editable maxLength={30} onChangeText={(value) => setNameBrand(value)}>{nameBrand}</TextInput>
      </View>
      <View style={stylesSeller.BottomSheet_Botton}>
        <TouchableOpacity onPress={() => Brand_NameSheetRef.current.close()}>
          <View style={stylesSeller.BottomSheet_Botton_cancel}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveBrand_NameSheet()}>
          <View style={stylesSeller.BottomSheet_Botton_OK}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>;
  ///===========================> Price
  let loadPriceSheet = () => { setPrice(savePrice); PriceSheetRef.current.open(); };
  let savePriceSheet = () => { setSavePrice(price); PriceSheetRef.current.close(); };
  let PriceSheetBody = () => <>
    <View style={stylesSeller.BottomSheet}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณากรอกราคาสินค้า</Text>
      <View style={stylesSeller.BottomSheet_Box}>
        <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]} placeholder="0.00" editable onChangeText={(value) =>
          setPrice(value)}>{price}</TextInput>
      </View>
      <View style={stylesSeller.BottomSheet_Botton}>
        <TouchableOpacity onPress={() => PriceSheetRef.current.close()}>
          <View style={stylesSeller.BottomSheet_Botton_cancel}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => savePriceSheet()}>
          <View style={stylesSeller.BottomSheet_Botton_OK}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>;
  ///===========================> Total
  let loadTotalrSheet = () => { setTotal(saveTotal > 0 ? saveTotal : 1); TotalrSheetRef.current.open(); };
  let actionTotalrSheet = (value, type) => {
    var totals = total;
    var change = totalChange;
    var old = totals > 0 ? totals : 1;
    type == 'minus' && totals > 1 && (totals = totals - 1);
    type == 'plus' && (totals = totals + 1);
    type == undefined && (totals = Number(value));
    Number.isInteger(totals) && totals > 0 ? (change = true) : (change = false);
    setTotal(totals); setTotalChange(change); setOldTotal(old);;
  };
  let saveTotalrSheet = () => { setSaveTotal(total); TotalrSheetRef.current.close(); };
  let totalrSheetBody = () => {
    !totalChange && [setTotal(oldTotal), setTotalChange(true)];
    return <>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาเพิ่มจำนวนสินค้า</Text>
      <View style={stylesSeller.BottomSheet_BoxTotal}>
        <TouchableOpacity onPress={() => actionTotalrSheet(undefined, 'minus')}>
          <View style={stylesSeller.TotalrSheet_botton}>
            <IconAntDesign name='minus' size={25} />
          </View>
        </TouchableOpacity>
        <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]} maxLength={6} onChangeText={(value) =>
          actionTotalrSheet(value)} keyboardType={'numeric'}>{total}</TextInput>
        <TouchableOpacity onPress={() => actionTotalrSheet(undefined, 'plus')}>
          <View style={stylesSeller.TotalrSheet_botton}>
            <IconAntDesign name='plus' size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={stylesSeller.BottomSheet_Botton}>
        <TouchableOpacity onPress={() => TotalrSheetRef.current.close()}>
          <View style={stylesSeller.BottomSheet_Botton_cancel}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveTotalrSheet()}>
          <View style={stylesSeller.BottomSheet_Botton_OK}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>;
  };
  let setStateValue = (value, index) => { valueNumber[index].name = value; setValueNumber(valueNumber); };
  let setStateInput = () => { const values = [...valueNumber]; values.push({ name: '' }); setValueNumber(values); };
  let deleteStateValue = (index) => { const values = [...valueNumber]; values.splice(index, 1); setValueNumber(values); };
  let setStateValue2 = (value, index) => { valueNumber2[index].name = value; setValueNumber2(valueNumber2); };
  let setStateInput2 = () => { const values = [...valueNumber2]; values.push({ name: '' }); setValueNumber2(values); };
  let deleteStateValue2 = (index) => { const values = [...valueNumber2]; values.splice(index, 1); setValueNumber2(values); };
  let selectSheetBody = () => <>
    <View style={stylesSeller.SelectSheet}>
      <ScrollView>
        <View style={stylesSeller.SelectSheet_Box}>
          <View style={[stylesSeller.SelectSheet_TextInput, { width: width * 0.4, marginLeft: 0 }]}>
            <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { width: 80, textAlign: 'center', marginVertical: -10 }]}
              placeholder='ตัวเลือกที่ 1' maxLength={10} onChangeText={(value) => setValueName(value)}>{valueName}</TextInput>
          </View>
          <TouchableOpacity onPress={() => setEditValue(!editValue)}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: mainColor }]}>{editValue ? 'ตกลง' : 'แก้ไข'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {valueNumber.length > 0 ?
            valueNumber.map((value, index) => <View key={index}>
              <View style={[stylesSeller.SelectSheet_TextInput, { width: width * 0.4, marginRight: editValue ? -20 : 0, }]}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                { width: 80, textAlign: 'center', marginVertical: -10 }]} placeholder={valueName ?? 'ตัวเลือกที่ 1'} maxLength={10}
                  onChangeText={(value) => setStateValue(value, index)}>{value.name}</TextInput>
              </View>
              {editValue && <TouchableOpacity onPress={() => deleteStateValue(index)}>
                <View style={{ backgroundColor: 'red', padding: 4, borderRadius: 20, left: 8 }}>
                  <IconFontisto name='close-a' size={12} style={{ color: '#fff', }} />
                </View>
              </TouchableOpacity>}
            </View>) : <></>}
          {valueNumber.length < 20 && <TouchableOpacity onPress={() => setStateInput()} style={[stylesSeller.SelectSheet_TextInput,
          { width: width * 0.4, height: 30 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
          </TouchableOpacity>}
        </View>
        <View style={stylesSeller.SelectSheet_Box}>
          <View style={[stylesSeller.SelectSheet_TextInput, { width: width * 0.4, marginLeft: 0 }]}>
            <TextInput style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { width: 80, textAlign: 'center', marginVertical: -10 }]}
              placeholder='ตัวเลือกที่ 2' maxLength={10} onChangeText={(value) => setValueName2(value)}>{valueName2}</TextInput>
          </View>
          <TouchableOpacity onPress={() => setEditValue2(!editValue2)}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { color: mainColor }]}>{editValue2 ? 'ตกลง' : 'แก้ไข'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {valueNumber2.length > 0 ?
            valueNumber2.map((value, index) => <View key={index}>
              <View style={[stylesSeller.SelectSheet_TextInput, { width: width * 0.4, marginRight: editValue2 ? -20 : 0, }]}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5,
                { width: 80, textAlign: 'center', marginVertical: -10 }]} placeholder={valueName2 ?? 'ตัวเลือกที่ 2'} maxLength={10}
                  onChangeText={(value) => setStateValue2(value, index)}>{value.name}</TextInput>
              </View>
              {editValue2 && <TouchableOpacity onPress={() => deleteStateValue2(index)}>
                <View style={{ backgroundColor: 'red', padding: 4, borderRadius: 20, left: 8 }}>
                  <IconFontisto name='close-a' size={12} style={{ color: '#fff', }} />
                </View>
              </TouchableOpacity>}
            </View>) : <></>}
          {valueNumber2.length < 20 && <TouchableOpacity onPress={() => setStateInput2()} style={[stylesSeller.SelectSheet_TextInput,
          { width: width * 0.4, height: 30 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>+เพิ่ม</Text>
          </TouchableOpacity>}
        </View>
      </ScrollView>
    </View>
    <View style={stylesSeller.BottomSheet_Botton}>
      <TouchableOpacity onPress={() => SelectSheetRef.current.close()}>
        <View style={stylesSeller.BottomSheet_Botton_cancel}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} onPress={() => {
        SelectSheetRef.current.close();
        NavigationNavigate({
          goScreen: 'Seller_Topic', setData: {
            selectedIndex: 14, optionName: valueName, optionValue: valueNumber, optionName2: valueName2, optionValue2: valueNumber2
          }, navigation
        });
      }}>
        <View style={stylesSeller.BottomSheet_Botton_OK}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
  let loadLookSheet = () => { setLookIndex(saveLookIndex); LookSheetRef.current.open(); };
  let saveLookSheet = () => { setSaveLookIndex(lookIndex); LookSheetRef.current.close(); };
  let lookSheetBody = () => <>
    <View style={stylesSeller.SelectSheet}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>สภาพสินค้า</Text>
      <View style={stylesSeller.SizeSheet_Box}>
        <TouchableOpacity onPress={() => setLookIndex(1)}>
          <View style={[stylesSeller.SizeSheet_Boxsize,
          { backgroundColor: lookIndex == 1 ? mainColor : '#FFFFFF', borderColor: lookIndex == 1 ? mainColor : '#CACACA', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: lookIndex == 1 ? '#FFFFFF' : '#111' }]}>ของใหม่</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLookIndex(2)}>
          <View style={[stylesSeller.SizeSheet_Boxsize,
          { backgroundColor: lookIndex == 2 ? mainColor : '#FFFFFF', borderColor: lookIndex == 2 ? mainColor : '#CACACA', }]}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: lookIndex == 2 ? '#FFFFFF' : '#111' }]}>
              ของมือสอง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View style={stylesSeller.BottomSheet_Botton}>
      <TouchableOpacity onPress={() => LookSheetRef.current.close()}>
        <View style={stylesSeller.BottomSheet_Botton_cancel}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => saveLookSheet()}>
        <View style={stylesSeller.BottomSheet_Botton_OK}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
  let loadWeightSheet = () => { setWeightProduct(saveWeightProduct); WeightSheetRef.current.open(); };
  let setStateWeightValue = (value) => {
    weightProduct.name = value; weightProduct.indexName = value == 'กิโลกรัม' ? 0 : 1; setWeightProduct(weightProduct);
  };
  let setStateWeightValue2 = (value) => { weightProduct.value = value; setWeightProduct(weightProduct); };
  let saveWeightSheet = () => { setSaveWeightProduct(weightProduct); WeightSheetRef.current.close(); };
  let weightSheetBody = () => <>
    <View style={stylesSeller.SelectSheet}>
      <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>กรุณาระบุน้ำหนัก</Text>
      <View style={stylesSeller.WeightSheet_Box}>
        <View style={stylesSeller.SelectSheet_TextInput}>
          <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%', height: 50, }]} placeholder="น้ำหนัก"
            maxLength={10} value={weightProduct?.value ?? ''} onChangeText={(value) => setStateWeightValue2(value)}>
          </TextInput>
        </View>
        <ModalDropdown options={['กิโลกรัม', 'กรัม']} defaultIndex={weightProduct?.indexName} dropdownStyle={{ width: 160, }}
          textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
          dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]} renderButtonText={(value) =>
            setStateWeightValue(value)}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, stylesSeller.SelectSheet_TextInput,
          { textAlign: 'center', textAlignVertical: 'center' }]}>{weightProduct?.name}</Text>
        </ModalDropdown>
      </View>
    </View>
    <View style={stylesSeller.BottomSheet_Botton}>
      <TouchableOpacity onPress={() => WeightSheetRef.current.close()}>
        <View style={stylesSeller.BottomSheet_Botton_cancel}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => saveWeightSheet()}>
        <View style={stylesSeller.BottomSheet_Botton_OK}>
          <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
  let loadSizeSheet = () => { setSizeProduct(saveSizeProduct); SizeSheetRef.current.open(); };
  let setStateSizeProduct = (index) => {
    sizeProduct.index = index;
    sizeProduct.name = index == 0 ? 'เล็ก' : index == 1 ? 'กลาง' : index == 2 ? 'ใหญ่' : 'เล็ก';
    sizeProduct.value = index == 0 ? 'S' : index == 1 ? 'M' : index == 2 ? 'L' : 'S';
    setSizeProduct(sizeProduct);
  };
  let saveSizeSheet = () => { setSaveSizeProduct(sizeProduct); SizeSheetRef.current.close(); };
  let sizeSheetBody = () => {
    return <>
      <View style={stylesSeller.SelectSheet}>
        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4]}>ขนาดพัสดุ</Text>
        <View style={stylesSeller.SizeSheet_Box}>
          <TouchableOpacity onPress={() => setStateSizeProduct(0)}>
            <View style={[stylesSeller.SizeSheet_Boxsize, {
              borderColor: sizeProduct?.index == 0 ? mainColor : '#CACACA', backgroundColor: sizeProduct?.index == 0 ? mainColor : '#FFF'
            }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: sizeProduct?.index == 0 ? '#FFF' : '#111' }]}>
                เล็ก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStateSizeProduct(1)}>
            <View style={[stylesSeller.SizeSheet_Boxsize, {
              borderColor: sizeProduct?.index == 1 ? mainColor : '#CACACA', backgroundColor: sizeProduct?.index == 1 ? mainColor : '#FFF'
            }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: sizeProduct?.index == 1 ? '#FFF' : '#111' }]}>
                กลาง</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStateSizeProduct(2)}>
            <View style={[stylesSeller.SizeSheet_Boxsize, {
              borderColor: sizeProduct?.index == 2 ? mainColor : '#CACACA', backgroundColor: sizeProduct?.index == 2 ? mainColor : '#FFF'
            }]}>
              <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: sizeProduct?.index == 2 ? '#FFF' : '#111' }]}>
                ใหญ่</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesSeller.BottomSheet_Botton}>
        <TouchableOpacity onPress={() => SizeSheetRef.current.close()}>
          <View style={stylesSeller.BottomSheet_Botton_cancel}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveSizeSheet()}>
          <View style={stylesSeller.BottomSheet_Botton_OK}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>;
  };
  useEffect(() => {
    activeCategory && GetServices({ uriPointer: uriCategory, getDataSource: (value) => getCategory(value), });
  }, [activeCategory]);
  useEffect(() => {
    activeSubCategory &&
      GetServices({ uriPointer: uriSubCategory, dataBody: dataBodySubCategory, getDataSource: (value) => getSubCategory(value), });
  }, [activeSubCategory]);
  useEffect(() => {
    activeUnSubCategory &&
      GetServices({ uriPointer: uriUnSubCategory, dataBody: dataBodyUnSubCategory, getDataSource: (value) => getUnSubCategory(value), });
  }, [activeUnSubCategory]);
  return <View>
    {/* หมวดหมู่สินค้า */}
    <BottomSheet ref={CategorySheetRef} height={500} duration={250}
      customStyles={{ container: { padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {categorySheetBody()}
    </BottomSheet>
    {/* แบรนด์สินค้า */}
    <BottomSheet ref={Brand_NameSheetRef} height={200} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {brand_NameSheetBody()}
    </BottomSheet>
    {/* ราคาสินค้า */}
    <BottomSheet ref={PriceSheetRef} height={200} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {PriceSheetBody()}
    </BottomSheet>
    {/* จำนวนที่มีสินค้าอยู่ในคลัง */}
    <BottomSheet ref={TotalrSheetRef} height={200} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {totalrSheetBody()}
    </BottomSheet>
    {/* ตัวเลือกสินค้า */}
    <BottomSheet ref={SelectSheetRef} height={350} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {selectSheetBody()}
    </BottomSheet>
    {/* สภาพสินค้า */}
    <BottomSheet ref={LookSheetRef} height={200} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {lookSheetBody()}
    </BottomSheet>
    {/* น้ำหนัก */}
    <BottomSheet ref={WeightSheetRef} height={200} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {weightSheetBody()}
    </BottomSheet>
    {/* ขนาดพัสดุ */}
    <BottomSheet ref={SizeSheetRef} height={200} duration={250}
      customStyles={{ container: { paddingTop: 20, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, } }}>
      {sizeSheetBody()}
    </BottomSheet>
    {/* ชื่อสินค้า */}
    <View style={stylesSeller.Seller_Up_ProductDetail}>
      <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]} placeholder="ชื่อสินค้า" maxLength={120}
        value={name} onChangeText={(value) => setName(value)}></TextInput>
    </View>
    <View style={{ flexDirection: 'row', }}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
        color: 'red', marginLeft: 10, width: width * 0.45, textAlign: 'left',
      }]}>{(name && name.length < 20 || name == undefined || name == '') && 'ชื่อต้องมากกว่า 20 ตัวอักษร'}</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
        color: mainColor, marginRight: 10, width: width * 0.50, textAlign: 'right',
      }]}><Text style={{ color: name && name.length >= 20 ? mainColor : 'red' }}>20</Text>/120 ตัวอักษร</Text>
    </View>
    {/* รายละเอียดสินค้า */}
    <View style={{ width: '100%', height: 130, backgroundColor: '#FFF', padding: 10, }}>
      <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { width: '100%' }]} placeholder="รายละเอียดสินค้า" multiline
        editable maxLength={5000} value={detail} onChangeText={(value) => setDetail(value)}></TextInput>
    </View>
    <View style={{ flexDirection: 'row', }}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
        color: 'red', marginLeft: 10, width: width * 0.45, textAlign: 'left',
      }]}>{(detail?.length < 100 || detail == undefined || detail == '') && 'รายละเอียดสินค้าต้องมากกว่า 100 ตัวอักษร'}</Text>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, {
        color: mainColor, marginRight: 10, width: width * 0.50, textAlign: 'right',
      }]}><Text style={{ color: detail?.length >= 100 ? mainColor : 'red' }}>100</Text>/5000 ตัวอักษร</Text>
    </View>
    {/* หมวดสินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadCategorySheet()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>หมวดสินค้า</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
            {(saveCategorySelect || saveSubCategorySelect || saveUnSubCategorySelect) ? `${(saveCategorySelect?.name)} ${
              (saveSubCategorySelect && ('> ' + saveSubCategorySelect?.name))} ${(saveUnSubCategorySelect &&
                ('> ' + saveUnSubCategorySelect?.name))}` : <Text style={{ color: '#A3A3A3' }}>{'ตั้งหมวดสินค้า'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* แบรนด์สินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadBrand_NameSheet()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>แบรนด์สินค้า</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>{saveNameBrand ??
            <Text style={{ color: '#A3A3A3' }}>{'ตั้งค่าแบรนด์'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* ราคา */}
    <TouchableOpacity activeOpacity={1} onPress={() => PriceSheetRef.current.open()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ราคา</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
            {savePrice ?? <Text style={{ color: '#A3A3A3' }}>{'ตั้งราคา'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* คลัง */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadTotalrSheet()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>คลัง</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical,]}>
            {saveTotal ?? <Text style={{ color: '#A3A3A3' }}>{'ตั้งจำนวนสินค้า'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[stylesMain.ItemCenterVertical, { color: mainColor }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* ตัวเลือกสินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => SelectSheetRef.current.open()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ตัวเลือกสินค้า</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesMain.ItemCenterVertical,
          { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
        </View>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { color: '#A3A3A3', marginTop: 5 }]}>เพิ่มตัวเลือกสินค้า</Text>
          <IconEntypo name='chevron-right' size={35} color={mainColor} />
        </View>
      </View>
    </TouchableOpacity>
    {/* สภาพสินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadLookSheet()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>สภาพสินค้า</Text>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 5 }]}>
            {saveLookIndex ? saveLookIndex == 1 ? 'ของใหม่' : 'ของมือสอง' :
              <Text style={{ color: '#A3A3A3', }}>{'สภาพสินค้า'}</Text>}</Text>
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
    <TouchableOpacity activeOpacity={1} onPress={() => loadWeightSheet()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>น้ำหนัก</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesMain.ItemCenterVertical,
          { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
        </View>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { marginTop: 5 }]}>
            {saveWeightProduct.value ? `${saveWeightProduct.value} ${saveWeightProduct.name}` :
              <Text style={{ color: '#A3A3A3', }}>{'ระบุน้ำหนัก'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} color={mainColor} />
        </View>
      </View>
    </TouchableOpacity>
    {/* ขนาดพัสดุ */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadSizeSheet()}>
      <View style={stylesSeller.Seller_Up_ProductDetail}>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>ขนาดพัสดุ</Text>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, stylesMain.ItemCenterVertical,
          { marginLeft: 10, color: '#A3A3A3' }]}>(ไม่จำเป็นต้องระบุ)</Text>
        </View>
        <View style={stylesMain.FlexRow}>
          <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesMain.ItemCenterVertical, { marginTop: 5 }]}>
            {saveSizeProduct.name ?? <Text style={{ color: '#A3A3A3', }}>{'ระบุขนาดพัสดุ'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} color={mainColor} />
        </View>
      </View>
    </TouchableOpacity>
    {/* เผยแพร่สินค้า */}
    <View style={stylesSeller.Seller_Up_ProductDetail}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เผยแพร่สินค้า</Text>
      <CheckBox size={30} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={publishProduct}
        onPress={() => setPublishProduct(!publishProduct)} />
    </View>
    <View style={stylesSeller.Seller_Up_ProductDetail}>
      <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เพจ Facebook</Text>
      <IconEntypo name='chevron-right' size={35} color={mainColor} />
    </View>
  </View>;
};