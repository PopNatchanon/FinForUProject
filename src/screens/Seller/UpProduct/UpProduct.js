///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useRef, useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
import { GetServices, } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setip Value
const { cover } = FastImage.resizeMode;
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { BoxProduct1Image, Category_box, FlexRow, FrameBackground, ItemCenter, ItemCenterVertical } = stylesMain;
const { BottomSheets, BottomSheet_Botton, BottomSheet_Botton_cancel, BottomSheet_Botton_OK, BottomSheet_Box, BottomSheet_BoxTotal,
  CatagorySheet, Category, cate_Box, cate_BoxA, SelectSheet, SelectSheet_Box, SelectSheet_TextInput, Seller_Up_ProductDetails, SizeSheet_Box,
  SizeSheet_Boxsize, Text_ling_Box, TotalrSheet_botton, WeightSheet_Box, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(UpProduct);
function UpProduct(props) {
  return <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
    <AppBar {...props} backArrow saveBar titleHead='เพิ่มสินค้า' />
    <ScrollView>
      <Seller_Up_Image />
      <Seller_Up_ProductDetail {...props} />
    </ScrollView>
    <ExitApp {...props} />
  </SafeAreaView>;
};
///--------------------------------------------------------------------------///
export const Seller_Up_Image = (props) => {
  const [activeAvatarSource, setActiveAvatarSource] = useState(false);
  const [avatarSource, setAvatarSource] = useState([]);
  const UploadImageData = () => {
    const uri = `${ip}/sql/uploadimage/updateimage.php`;
    avatarSource && fetch(uri, {
      body: avatarSource,
      method: "POST",
    }).then(response => response.json()).then(response => { alert("Upload success!"); setAvatarSource(null); })
      .catch(error => { alert("Upload failed!"); });
  };
  activeAvatarSource && setActiveAvatarSource(false);
  const UploadImageSingle = (i) => {
    const options = { includeBase64: true };
    ImagePicker.openPicker(options).then(response => {
      avatarSource[i] = response; setActiveAvatarSource(true); setAvatarSource(avatarSource);
    });
  };
  const UploadImageMultiple = () => {
    const options = { multiple: true, includeBase64: true };
    ImagePicker.openPicker(options).then(response => {
      response.map((v, i) => i + avatarSource.length <= 7 && avatarSource.push(v)); setActiveAvatarSource(true); setAvatarSource(avatarSource);
    });
  };
  return <View style={FrameBackground}>
    <ScrollView horizontal>
      {avatarSource ? <>
        {avatarSource.map((v, i) => {
          const Image1 = { uri: v.path };
          return <TouchableOpacity key={i} onPress={() => UploadImageSingle(i)}>
            <View style={[ItemCenter, { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
              <FastImage source={Image1} style={[ItemCenterVertical, BoxProduct1Image]} />
            </View>
          </TouchableOpacity>
        })}
        {avatarSource.length < 7 && <TouchableOpacity onPress={() => UploadImageMultiple()} key={'upload'}>
          <View style={[ItemCenter, { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
            <View style={[ItemCenterVertical, ItemCenter]}>
              <IconAntDesign color={mainColor} name='camerao' RightItem size={35} />
              <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
            </View>
          </View>
        </TouchableOpacity>}
      </> : <TouchableOpacity onPress={() => UploadImageMultiple()}>
          <View style={[ItemCenter, { borderColor: mainColor, height: 150, borderWidth: 1, marginLeft: 10, marginTop: 10, width: 150, }]}>
            <View style={[ItemCenterVertical, ItemCenter]}>
              <IconAntDesign color={mainColor} name='camerao' RightItem size={35} />
              <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
            </View>
          </View>
        </TouchableOpacity>}
    </ScrollView>
  </View>;
};
///--------------------------------------------------------------------------///
export const Seller_Up_ProductDetail = (props) => {
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
  const LookSheetRef = useRef(null);
  const PriceSheetRef = useRef(null);
  const SelectSheetRef = useRef(null);
  const SizeSheetRef = useRef(null);
  const TotalrSheetRef = useRef(null);
  const WeightSheetRef = useRef(null);
  const dataBodySubCategory = { id_type: categorySelect && categorySelect.id_type, };
  const dataBodyUnSubCategory = { id_subtype: subCategorySelect && subCategorySelect.id_subtype, };
  const uriCategory = `${finip}/store/add_product_mobile`;
  const uriSubCategory = `${finip}/store/product_subtype_ajax`;
  const uriUnSubCategory = `${finip}/store/product_unsubtype_ajax`;
  ///===========================> Category
  const loadCategorySheet = () => {
    setCategoryCursor(saveCategorySelect ? saveSubCategorySelect ? saveUnSubCategorySelect ? 2 : 1 : 0 : 0);
    setCategorySelect(saveCategorySelect); setDataSubCategory(saveDataSubCategory); setDataUnSubCategory(saveDataUnSubCategory);
    setSubCategorySelect(saveSubCategorySelect); setUnSubCategorySelect(saveUnSubCategorySelect);
    CategorySheetRef.current.open();
  };
  const getCategory = (v) => { setActiveCategory(false); setDataCategory(v); };
  const getSubCategory = (v) => {
    setActiveSubCategory(false); setCategoryCursor(v.subtype_data.length > 0 ? 1 : categoryCursor); setDataSubCategory(v);
  };
  const getUnSubCategory = (v) => {
    setActiveUnSubCategory(false); setCategoryCursor(v.unsubtype_data.length > 0 ? 2 : categoryCursor); setDataUnSubCategory(v);
  };
  const saveCategorySheet = () => {
    setSaveCategorySelect(categorySelect ?? undefined); setSaveDataSubCategory(dataSubCategory ?? undefined);
    setSaveDataUnSubCategory(dataUnSubCategory ?? undefined); setSaveSubCategorySelect(subCategorySelect ?? undefined);
    setSaveUnSubCategorySelect(unSubCategorySelect ?? undefined);
    CategorySheetRef.current.close();
  };
  const selectCategory = (v, index) => {
    setActiveSubCategory(true);
    setCategorySelect({ index, id_type: v.id_type, name: v.name });
    setDataSubCategory(undefined);
    setDataUnSubCategory(undefined);
    setSubCategorySelect(undefined);
    setUnSubCategorySelect(undefined);
  };
  const ItemCategory = dataCategory && dataCategory.category.map((v, i) => {
    const Image1 = { uri: `${finip}/${v.image_path}/menu/${v.image_head}`, };
    return <TouchableOpacity onPress={() => selectCategory(v, i)} key={i} style={[Category,
      { borderColor: '#ECECEC', borderWidth: 1, flexDirection: 'row', height: 50, marginTop: 2, width: width * 0.88, }]}>
      <FastImage resizeMode={cover} source={Image1} style={[Category_box, ItemCenterVertical,
        { borderColor: categorySelect?.index == i ? mainColor : '#ECECEC', height: 40, marginLeft: 5, width: 40, }]} />
      <View style={[ItemCenter]}>
        <Text numberOfLines={2} style={[FontFamilyText, FontSize5, ItemCenterVertical,
          { color: categorySelect?.index == index ? mainColor : '#111', marginLeft: 4, }]}>{v.name}</Text>
      </View>
    </TouchableOpacity>;
  });
  const selectSubCategory = (v, index) => {
    setActiveUnSubCategory(true);
    setDataUnSubCategory(undefined);
    setSubCategorySelect({ id_subtype: v.id_subtype, index, name: v.name, });
    setUnSubCategorySelect(undefined);
  };
  const ItemSubCategory = dataSubCategory?.subtype_data?.map((v, i) => <TouchableOpacity key={i} onPress={() =>
    selectSubCategory(v, i)} style={[cate_Box, {
      backgroundColor: subCategorySelect?.index == i ? mainColor : '#fff',
      borderColor: subCategorySelect?.index == i ? mainColor : '##D4D4D4'
    }]}>
    <Text style={[FontFamilyText, FontSize5,
      { color: subCategorySelect?.index == i ? '#fff' : '#111', marginHorizontal: 6, textAlign: 'center', }]}>{v.name}</Text>
  </TouchableOpacity>);
  const selectUnSubCategory = (v, index) => {
    setUnSubCategorySelect({ id_unsubtype: v.id_unsubtype, index, name: v.unsubtype_name });
  };
  const ItemUnSubCategory = dataUnSubCategory?.unsubtype_data?.map((v, i) => <TouchableOpacity key={i} onPress={() =>
    selectUnSubCategory(v, i)} style={[cate_Box, {
      backgroundColor: unSubCategorySelect?.i == i ? mainColor : '#fff', borderColor: unSubCategorySelect?.i == i ? mainColor : '##D4D4D4'
    }]}>
    <Text style={[FontFamilyText, FontSize5,
      { color: unSubCategorySelect?.i == i ? '#fff' : '#111', marginHorizontal: 6, textAlign: 'center', }]}>{v.unsubtype_name}</Text>
  </TouchableOpacity>);
  const categorySheetBody = () => <>
    <View style={{ flex: 1, }}>
      <View>
        <Text style={[FontFamilyBold, FontSize4]}>กรุณาเลือกหมวดหมู่สินค้า</Text>
        <View style={FlexRow}>
          <TouchableOpacity onPress={() => setCategoryCursor(0)}>
            <View style={{
              borderBottomColor: categoryCursor == 0 ? mainColor : 'transparent', borderBottomWidth: 4, borderTopColor: 'transparent',
              borderTopWidth: 4, marginHorizontal: 4,
            }}>
              <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>{`${categorySelect?.name ?? 'หมวดหมู่สินค้า'}`}</Text>
            </View>
          </TouchableOpacity>
          {categorySelect?.name && dataSubCategory?.subtype_data.length > 0 && <Text style={[FontFamilyBold, FontSize4, ItemCenterVertical]}>
            |</Text>}
          {categorySelect?.name && dataSubCategory?.subtype_data.length > 0 && <TouchableOpacity onPress={() => setCategoryCursor(1)}>
            <View style={{
              borderBottomColor: categoryCursor == 1 ? mainColor : 'transparent', borderBottomWidth: 4, borderTopColor: 'transparent',
              borderTopWidth: 4, marginHorizontal: 4,
            }}>
              <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>{`${subCategorySelect?.name ?? 'ประเภท'}`}</Text>
            </View>
          </TouchableOpacity>}
          {subCategorySelect?.name && dataUnSubCategory?.unsubtype_data.length > 0 && <Text style={[FontFamilyBold, FontSize4,
            ItemCenterVertical]}>|</Text>}
          {subCategorySelect?.name && dataUnSubCategory?.unsubtype_data.length > 0 && <TouchableOpacity onPress={() =>
            setCategoryCursor(2)}>
            <View style={{
              borderBottomColor: categoryCursor == 2 ? mainColor : 'transparent', borderBottomWidth: 4, borderTopColor: 'transparent',
              borderTopWidth: 4, marginHorizontal: 4,
            }}>
              <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>{`${unSubCategorySelect?.name ?? 'ชนิด'}`}</Text>
            </View>
          </TouchableOpacity>}
        </View>
      </View>
      <ScrollView>
        {categoryCursor == 0 && <View style={CatagorySheet}>
          {ItemCategory}
        </View>}
        {categoryCursor == 1 && dataSubCategory?.subtype_data.length > 0 && <View>
          <View style={cate_BoxA}>
            {ItemSubCategory}
          </View>
        </View>}
        {categoryCursor == 2 && dataUnSubCategory?.unsubtype_data.length > 0 && <View>
          <View style={cate_BoxA}>
            {ItemUnSubCategory}
          </View>
        </View>}
      </ScrollView>
    </View>
    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
      <View style={BottomSheet_Botton}>
        <TouchableOpacity onPress={() => CategorySheetRef.current.close()}>
          <View style={BottomSheet_Botton_cancel}>
            <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveCategorySheet()}>
          <View style={BottomSheet_Botton_OK}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>;
  ///===========================> NameBrand
  const loadBrand_NameSheet = () => { setNameBrand(saveNameBrand); Brand_NameSheetRef.current.open(); };
  const saveBrand_NameSheet = () => { setSaveNameBrand(nameBrand); Brand_NameSheetRef.current.close(); };
  const brand_NameSheetBody = () => <>
    <View style={BottomSheets}>
      <Text style={[FontFamilyBold, FontSize4]}>กรุณาพิมพ์ชื่อแบรนด์สินค้า</Text>
      <View style={[BottomSheet_Box]}>
        <TextInput editable maxLength={30} multiline onChangeText={(v) => setNameBrand(v)} placeholder="ชื่อแบรนด์" style={[FontFamilyBold,
          FontSize4, { width: '100%', }]}>{nameBrand}</TextInput>
      </View>
      <View style={BottomSheet_Botton}>
        <TouchableOpacity onPress={() => Brand_NameSheetRef.current.close()}>
          <View style={BottomSheet_Botton_cancel}>
            <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveBrand_NameSheet()}>
          <View style={BottomSheet_Botton_OK}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>;
  ///===========================> Price
  const loadPriceSheet = () => { setPrice(savePrice); PriceSheetRef.current.open(); };
  const savePriceSheet = () => { setSavePrice(price); PriceSheetRef.current.close(); };
  const PriceSheetBody = () => <>
    <View style={BottomSheets}>
      <Text style={[FontFamilyBold, FontSize4]}>กรุณากรอกราคาสินค้า</Text>
      <View style={BottomSheet_Box}>
        <TextInput editable onChangeText={(v) => setPrice(v)} placeholder="0.00" style={[FontFamilyBold, FontSize4]}>{price}</TextInput>
      </View>
      <View style={BottomSheet_Botton}>
        <TouchableOpacity onPress={() => PriceSheetRef.current.close()}>
          <View style={BottomSheet_Botton_cancel}>
            <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => savePriceSheet()}>
          <View style={BottomSheet_Botton_OK}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </>;
  ///===========================> Total
  const loadTotalrSheet = () => { setTotal(saveTotal > 0 ? saveTotal : 1); TotalrSheetRef.current.open(); };
  const actionTotalrSheet = (v, t) => {
    let totals = total;
    const change = totalChange;
    const old = totals > 0 ? totals : 1;
    t == 'minus' && totals > 1 && (totals = totals - 1);
    t == 'plus' && (totals = totals + 1);
    t == undefined && (totals = Number(v));
    Number.isInteger(totals) && totals > 0 ? (change = true) : (change = false);
    setTotal(totals); setTotalChange(change); setOldTotal(old);;
  };
  const saveTotalrSheet = () => { setSaveTotal(total); TotalrSheetRef.current.close(); };
  const totalrSheetBody = () => {
    !totalChange && [setTotal(oldTotal), setTotalChange(true)];
    return <>
      <Text style={[FontFamilyBold, FontSize4]}>กรุณาเพิ่มจำนวนสินค้า</Text>
      <View style={BottomSheet_BoxTotal}>
        <TouchableOpacity onPress={() => actionTotalrSheet(undefined, 'minus')}>
          <View style={TotalrSheet_botton}>
            <IconAntDesign name='minus' size={25} />
          </View>
        </TouchableOpacity>
        <TextInput keyboardType={'numeric'} maxLength={6} style={[FontFamilyBold, FontSize4]} onChangeText={(v) => actionTotalrSheet(v)}>
          {total}</TextInput>
        <TouchableOpacity onPress={() => actionTotalrSheet(undefined, 'plus')}>
          <View style={TotalrSheet_botton}>
            <IconAntDesign name='plus' size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={BottomSheet_Botton}>
        <TouchableOpacity onPress={() => TotalrSheetRef.current.close()}>
          <View style={BottomSheet_Botton_cancel}>
            <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveTotalrSheet()}>
          <View style={BottomSheet_Botton_OK}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>;
  };
  const setStateValue = (v, i) => { valueNumber[i].name = v; setValueNumber(valueNumber); };
  const setStateInput = () => { const values = [...valueNumber]; values.push({ name: '', }); setValueNumber(values); };
  const deleteStateValue = (i) => { const values = [...valueNumber]; values.splice(i, 1); setValueNumber(values); };
  const setStateValue2 = (v, i) => { valueNumber2[i].name = v; setValueNumber2(valueNumber2); };
  const setStateInput2 = () => { const values = [...valueNumber2]; values.push({ name: '', }); setValueNumber2(values); };
  const deleteStateValue2 = (i) => { const values = [...valueNumber2]; values.splice(i, 1); setValueNumber2(values); };
  const selectSheetBody = () => <>
    <View style={SelectSheet}>
      <ScrollView>
        <View style={SelectSheet_Box}>
          <View style={[SelectSheet_TextInput, { marginLeft: 0, width: width * 0.4, }]}>
            <TextInput maxLength={10} onChangeText={(v) => setValueName(v)} placeholder='ตัวเลือกที่ 1' style={[FontFamilyBold, FontSize4,
              { marginVertical: -10, textAlign: 'center', width: 80, }]}>{valueName}</TextInput>
          </View>
          <TouchableOpacity onPress={() => setEditValue(!editValue)}>
            <Text style={[FontFamilyBold, FontSize4, { color: mainColor, }]}>{editValue ? 'ตกลง' : 'แก้ไข'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
          {valueNumber.length > 0 ?
            valueNumber.map((v, i) => <View key={i}>
              <View style={[SelectSheet_TextInput, { marginRight: editValue ? -20 : 0, width: width * 0.4, }]}>
                <TextInput maxLength={10} onChangeText={(v2) => setStateValue(v2, i)} placeholder={valueName ?? 'ตัวเลือกที่ 1'}
                  style={[FontFamilyText, FontSize5, { marginVertical: -10, textAlign: 'center', width: 80, }]}>{v.name}</TextInput>
              </View>
              {editValue && <TouchableOpacity onPress={() => deleteStateValue(i)}>
                <View style={{ backgroundColor: 'red', borderRadius: 20, left: 8, padding: 4, }}>
                  <IconFontisto name='close-a' size={12} style={{ color: '#fff', }} />
                </View>
              </TouchableOpacity>}
            </View>) : <></>}
          {valueNumber.length < 20 && <TouchableOpacity onPress={() => setStateInput()} style={[SelectSheet_TextInput,
            { height: 30, width: width * 0.4, }]}>
            <Text style={[FontFamilyText, FontSize4]}>+เพิ่ม</Text>
          </TouchableOpacity>}
        </View>
        <View style={SelectSheet_Box}>
          <View style={[SelectSheet_TextInput, { marginLeft: 0, width: width * 0.4, }]}>
            <TextInput maxLength={10} onChangeText={(v) => setValueName2(v)} placeholder='ตัวเลือกที่ 2' style={[FontFamilyBold, FontSize4,
              { marginVertical: -10, textAlign: 'center', width: 80, }]}>{valueName2}</TextInput>
          </View>
          <TouchableOpacity onPress={() => setEditValue2(!editValue2)}>
            <Text style={[FontFamilyBold, FontSize4, { color: mainColor, }]}>{editValue2 ? 'ตกลง' : 'แก้ไข'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
          {valueNumber2.length > 0 ?
            valueNumber2.map((v, i) => <View key={i}>
              <View style={[SelectSheet_TextInput, { marginRight: editValue2 ? -20 : 0, width: width * 0.4, }]}>
                <TextInput maxLength={10} onChangeText={(v2) => setStateValue2(v2, i)} placeholder={valueName2 ?? 'ตัวเลือกที่ 2'}
                  style={[FontFamilyText, FontSize5, { marginVertical: -10, textAlign: 'center', width: 80, }]}>{v.name}</TextInput>
              </View>
              {editValue2 && <TouchableOpacity onPress={() => deleteStateValue2(i)}>
                <View style={{ backgroundColor: 'red', borderRadius: 20, left: 8, padding: 4, }}>
                  <IconFontisto name='close-a' size={12} style={{ color: '#fff', }} />
                </View>
              </TouchableOpacity>}
            </View>) : <></>}
          {valueNumber2.length < 20 && <TouchableOpacity onPress={() => setStateInput2()} style={[SelectSheet_TextInput,
            { height: 30, width: width * 0.4, }]}>
            <Text style={[FontFamilyText, FontSize4]}>+เพิ่ม</Text>
          </TouchableOpacity>}
        </View>
      </ScrollView>
    </View>
    <View style={BottomSheet_Botton}>
      <TouchableOpacity onPress={() => SelectSheetRef.current.close()}>
        <View style={BottomSheet_Botton_cancel}>
          <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} onPress={() => {
        SelectSheetRef.current.close();
        NavigationNavigate({
          ...props, goScreen: 'Seller_UpProduct_Forms',
          setData: { optionName: valueName, optionValue: valueNumber, optionName2: valueName2, optionValue2: valueNumber2, },
        });
      }}>
        <View style={BottomSheet_Botton_OK}>
          <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
  const loadLookSheet = () => { setLookIndex(saveLookIndex); LookSheetRef.current.open(); };
  const saveLookSheet = () => { setSaveLookIndex(lookIndex); LookSheetRef.current.close(); };
  const lookSheetBody = () => <>
    <View style={SelectSheet}>
      <Text style={[FontFamilyBold, FontSize4]}>สภาพสินค้า</Text>
      <View style={SizeSheet_Box}>
        <TouchableOpacity onPress={() => setLookIndex(1)}>
          <View style={[SizeSheet_Boxsize,
            { backgroundColor: lookIndex == 1 ? mainColor : '#FFFFFF', borderColor: lookIndex == 1 ? mainColor : '#CACACA', }]}>
            <Text style={[FontFamilyBold, FontSize5, { color: lookIndex == 1 ? '#FFFFFF' : '#111' }]}>ของใหม่</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLookIndex(2)}>
          <View style={[SizeSheet_Boxsize,
            { backgroundColor: lookIndex == 2 ? mainColor : '#FFFFFF', borderColor: lookIndex == 2 ? mainColor : '#CACACA', }]}>
            <Text style={[FontFamilyBold, FontSize5, { color: lookIndex == 2 ? '#FFFFFF' : '#111', }]}>ของมือสอง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View style={BottomSheet_Botton}>
      <TouchableOpacity onPress={() => LookSheetRef.current.close()}>
        <View style={BottomSheet_Botton_cancel}>
          <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => saveLookSheet()}>
        <View style={BottomSheet_Botton_OK}>
          <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
  const loadWeightSheet = () => { setWeightProduct(saveWeightProduct); WeightSheetRef.current.open(); };
  const setStateWeightValue = (v) => {
    weightProduct.indexName = v == 'กิโลกรัม' ? 0 : 1; weightProduct.name = v; setWeightProduct(weightProduct);
  };
  const setStateWeightValue2 = (v) => { weightProduct.value = v; setWeightProduct(weightProduct); };
  const saveWeightSheet = () => { setSaveWeightProduct(weightProduct); WeightSheetRef.current.close(); };
  const weightSheetBody = () => <>
    <View style={SelectSheet}>
      <Text style={[FontFamilyBold, FontSize4]}>กรุณาระบุน้ำหนัก</Text>
      <View style={WeightSheet_Box}>
        <View style={SelectSheet_TextInput}>
          <TextInput maxLength={10} onChangeText={(v) => setStateWeightValue2(v)} style={[FontFamilyText, FontSize5,
            { height: 50, width: '100%', }]} placeholder="น้ำหนัก" value={weightProduct?.value ?? ''} />
        </View>
        <ModalDropdown defaultIndex={weightProduct?.indexName} dropdownStyle={{ width: 160, }} dropdownTextStyle={[FontFamilyText, FontSize6,
          { textAlign: 'right', }]} options={['กิโลกรัม', 'กรัม']} renderButtonText={(v) => setStateWeightValue(v)} textStyle={[FontFamilyText,
            FontSize6]}>
          <Text style={[FontFamilyText, FontSize6, SelectSheet_TextInput, { textAlign: 'center', textAlignVertical: 'center', }]}>
            {weightProduct?.name}</Text>
        </ModalDropdown>
      </View>
    </View>
    <View style={BottomSheet_Botton}>
      <TouchableOpacity onPress={() => WeightSheetRef.current.close()}>
        <View style={BottomSheet_Botton_cancel}>
          <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => saveWeightSheet()}>
        <View style={BottomSheet_Botton_OK}>
          <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>;
  const loadSizeSheet = () => { setSizeProduct(saveSizeProduct); SizeSheetRef.current.open(); };
  const setStateSizeProduct = (i) => {
    sizeProduct.index = i;
    sizeProduct.name = i == 0 ? 'เล็ก' : i == 1 ? 'กลาง' : i == 2 ? 'ใหญ่' : 'เล็ก';
    sizeProduct.value = i == 0 ? 'S' : i == 1 ? 'M' : i == 2 ? 'L' : 'S';
    setSizeProduct(sizeProduct);
  };
  const saveSizeSheet = () => { setSaveSizeProduct(sizeProduct); SizeSheetRef.current.close(); };
  const sizeSheetBody = () => {
    return <>
      <View style={SelectSheet}>
        <Text style={[FontFamilyBold, FontSize4]}>ขนาดพัสดุ</Text>
        <View style={SizeSheet_Box}>
          <TouchableOpacity onPress={() => setStateSizeProduct(0)}>
            <View style={[SizeSheet_Boxsize, {
              backgroundColor: sizeProduct?.index == 0 ? mainColor : '#FFF', borderColor: sizeProduct?.index == 0 ? mainColor : '#CACACA',
            }]}>
              <Text style={[FontFamilyBold, FontSize5, { color: sizeProduct?.index == 0 ? '#FFF' : '#111', }]}>เล็ก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStateSizeProduct(1)}>
            <View style={[SizeSheet_Boxsize, {
              backgroundColor: sizeProduct?.index == 1 ? mainColor : '#FFF', borderColor: sizeProduct?.index == 1 ? mainColor : '#CACACA',
            }]}>
              <Text style={[FontFamilyBold, FontSize5, { color: sizeProduct?.index == 1 ? '#FFF' : '#111', }]}>กลาง</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStateSizeProduct(2)}>
            <View style={[SizeSheet_Boxsize, {
              backgroundColor: sizeProduct?.index == 2 ? mainColor : '#FFF', borderColor: sizeProduct?.index == 2 ? mainColor : '#CACACA',
            }]}>
              <Text style={[FontFamilyBold, FontSize5, { color: sizeProduct?.index == 2 ? '#FFF' : '#111', }]}>ใหญ่</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={BottomSheet_Botton}>
        <TouchableOpacity onPress={() => SizeSheetRef.current.close()}>
          <View style={BottomSheet_Botton_cancel}>
            <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveSizeSheet()}>
          <View style={BottomSheet_Botton_OK}>
            <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>;
  };
  useEffect(() => {
    activeCategory && GetServices({ getDataSource: (v) => getCategory(v), uriPointer: uriCategory, });
  }, [activeCategory]);
  useEffect(() => {
    activeSubCategory && GetServices({ dataBody: dataBodySubCategory, getDataSource: (v) => getSubCategory(v), uriPointer: uriSubCategory, });
  }, [activeSubCategory]);
  useEffect(() => {
    activeUnSubCategory &&
      GetServices({ dataBody: dataBodyUnSubCategory, getDataSource: (v) => getUnSubCategory(v), uriPointer: uriUnSubCategory, });
  }, [activeUnSubCategory]);
  return <View>
    {/* หมวดหมู่สินค้า */}
    <BottomSheet customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 10, }, }} duration={250} height={500}
      ref={CategorySheetRef}>
      {categorySheetBody()}
    </BottomSheet>
    {/* แบรนด์สินค้า */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={200} ref={Brand_NameSheetRef}>
      {brand_NameSheetBody()}
    </BottomSheet>
    {/* ราคาสินค้า */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={200} ref={PriceSheetRef}>
      {PriceSheetBody()}
    </BottomSheet>
    {/* จำนวนที่มีสินค้าอยู่ในคลัง */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={200} ref={TotalrSheetRef}>
      {totalrSheetBody()}
    </BottomSheet>
    {/* ตัวเลือกสินค้า */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={350} ref={SelectSheetRef}>
      {selectSheetBody()}
    </BottomSheet>
    {/* สภาพสินค้า */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={200} ref={LookSheetRef}>
      {lookSheetBody()}
    </BottomSheet>
    {/* น้ำหนัก */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={200} ref={WeightSheetRef}>
      {weightSheetBody()}
    </BottomSheet>
    {/* ขนาดพัสดุ */}
    <BottomSheet customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, }, }}
      duration={250} height={200} ref={SizeSheetRef}>
      {sizeSheetBody()}
    </BottomSheet>
    {/* ชื่อสินค้า */}
    <View style={Seller_Up_ProductDetails}>
      <TextInput maxLength={120} onChangeText={(v) => setName(v)} placeholder="ชื่อสินค้า" style={[FontFamilyText, FontSize5,
        { width: '100%', }]} value={name} />
    </View>
    <View style={{ flexDirection: 'row', }}>
      <Text style={[FontFamilyText, FontSize6, { color: 'red', marginLeft: 10, textAlign: 'left', width: width * 0.45, }]}>
        {(name && name.length < 20 || name == undefined || name == '') && 'ชื่อต้องมากกว่า 20 ตัวอักษร'}</Text>
      <Text style={[FontFamilyText, FontSize6, { color: mainColor, marginRight: 10, textAlign: 'right', width: width * 0.50, }]}>
        <Text style={{ color: name && name.length >= 20 ? mainColor : 'red' }}>20</Text>/120 ตัวอักษร</Text>
    </View>
    {/* รายละเอียดสินค้า */}
    <View style={{ backgroundColor: '#FFF', height: 130, padding: 10, width: '100%', }}>
      <TextInput editable maxLength={5000} multiline onChangeText={(v) => setDetail(v)} placeholder="รายละเอียดสินค้า" style={[FontFamilyText,
        FontSize5, { width: '100%', }]} value={detail} />
    </View>
    <View style={{ flexDirection: 'row', }}>
      <Text style={[FontFamilyText, FontSize6, { color: 'red', marginLeft: 10, textAlign: 'left', width: width * 0.45, }]}>
        {(detail?.length < 100 || detail == undefined || detail == '') && 'รายละเอียดสินค้าต้องมากกว่า 100 ตัวอักษร'}</Text>
      <Text style={[FontFamilyText, FontSize6, { color: mainColor, marginRight: 10, textAlign: 'right', width: width * 0.50, }]}>
        <Text style={{ color: detail?.length >= 100 ? mainColor : 'red', }}>100</Text>/5000 ตัวอักษร</Text>
    </View>
    {/* หมวดสินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadCategorySheet()}>
      <View style={Seller_Up_ProductDetails}>
        <Text style={[FontFamilyText, FontSize5]}>หมวดสินค้า</Text>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>
            {(saveCategorySelect || saveSubCategorySelect || saveUnSubCategorySelect) ? `${(saveCategorySelect?.name)} ${(
              saveSubCategorySelect && ('> ' + saveSubCategorySelect?.name))} ${(saveUnSubCategorySelect &&
                ('> ' + saveUnSubCategorySelect?.name))}` : <Text style={{ color: '#A3A3A3', }}>{'ตั้งหมวดสินค้า'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[ItemCenterVertical, { color: mainColor, }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* แบรนด์สินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadBrand_NameSheet()}>
      <View style={Seller_Up_ProductDetails}>
        <Text style={[FontFamilyText, FontSize5]}>แบรนด์สินค้า</Text>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>
            {saveNameBrand ?? <Text style={{ color: '#A3A3A3', }}>{'ตั้งค่าแบรนด์'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[ItemCenterVertical, { color: mainColor, }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* ราคา */}
    <TouchableOpacity activeOpacity={1} onPress={() => PriceSheetRef.current.open()}>
      <View style={Seller_Up_ProductDetails}>
        <Text style={[FontFamilyText, FontSize5]}>ราคา</Text>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>
            {savePrice ?? <Text style={{ color: '#A3A3A3', }}>{'ตั้งราคา'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[ItemCenterVertical, { color: mainColor, }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* คลัง */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadTotalrSheet()}>
      <View style={Seller_Up_ProductDetails}>
        <Text style={[FontFamilyText, FontSize5]}>คลัง</Text>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, ItemCenterVertical]}>
            {saveTotal ?? <Text style={{ color: '#A3A3A3', }}>{'ตั้งจำนวนสินค้า'}</Text>}</Text>
          <IconEntypo name='chevron-right' size={35} style={[ItemCenterVertical, { color: mainColor, }]} />
        </View>
      </View>
    </TouchableOpacity>
    {/* ตัวเลือกสินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => SelectSheetRef.current.open()}>
      <View style={Seller_Up_ProductDetails}>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5]}>ตัวเลือกสินค้า</Text>
          <Text style={[FontFamilyText, FontSize7, ItemCenterVertical, { color: '#A3A3A3', marginLeft: 10, }]}>(ไม่จำเป็นต้องระบุ)</Text>
        </View>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, { color: '#A3A3A3', marginTop: 5, }]}>เพิ่มตัวเลือกสินค้า</Text>
          <IconEntypo color={mainColor} name='chevron-right' size={35} />
        </View>
      </View>
    </TouchableOpacity>
    {/* สภาพสินค้า */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadLookSheet()}>
      <View style={Seller_Up_ProductDetails}>
        <Text style={[FontFamilyText, FontSize5]}>สภาพสินค้า</Text>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, { marginTop: 5, }]}>
            {saveLookIndex ? saveLookIndex == 1 ? 'ของใหม่' : 'ของมือสอง' :
              <Text style={{ color: '#A3A3A3', }}>{'สภาพสินค้า'}</Text>}</Text>
          <IconEntypo color={mainColor} name='chevron-right' size={35} />
        </View>
      </View>
    </TouchableOpacity>
    <View style={Text_ling_Box}>
      <Text style={[FontFamilyText, FontSize7, { color: '#A3A3A3', marginLeft: 10, }]}>ฉันจะเพิ่มตัวเลือกสินค้าได้อย่างไร</Text>
      <TouchableOpacity>
        <Text style={[FontFamilyText, FontSize7, { color: mainColor, }]}>ไปยังศูนย์เรียนรู้ผู้ขาย</Text>
      </TouchableOpacity>
    </View>
    {/* น้ำหนัก */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadWeightSheet()}>
      <View style={Seller_Up_ProductDetails}>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5]}>น้ำหนัก</Text>
          <Text style={[FontFamilyText, FontSize7, ItemCenterVertical, { color: '#A3A3A3', marginLeft: 10, }]}>(ไม่จำเป็นต้องระบุ)</Text>
        </View>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, ItemCenterVertical, { marginTop: 5, }]}>
            {saveWeightProduct.value ? `${saveWeightProduct.value} ${saveWeightProduct.name}` :
              <Text style={{ color: '#A3A3A3', }}>{'ระบุน้ำหนัก'}</Text>}</Text>
          <IconEntypo color={mainColor} name='chevron-right' size={35} />
        </View>
      </View>
    </TouchableOpacity>
    {/* ขนาดพัสดุ */}
    <TouchableOpacity activeOpacity={1} onPress={() => loadSizeSheet()}>
      <View style={Seller_Up_ProductDetails}>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5]}>ขนาดพัสดุ</Text>
          <Text style={[FontFamilyText, FontSize7, ItemCenterVertical, { color: '#A3A3A3', marginLeft: 10, }]}>(ไม่จำเป็นต้องระบุ)</Text>
        </View>
        <View style={FlexRow}>
          <Text style={[FontFamilyText, FontSize5, ItemCenterVertical, { marginTop: 5, }]}>
            {saveSizeProduct.name ?? <Text style={{ color: '#A3A3A3', }}>{'ระบุขนาดพัสดุ'}</Text>}</Text>
          <IconEntypo color={mainColor} name='chevron-right' size={35} />
        </View>
      </View>
    </TouchableOpacity>
    {/* เผยแพร่สินค้า */}
    <View style={Seller_Up_ProductDetails}>
      <Text style={[FontFamilyText, FontSize5]}>เผยแพร่สินค้า</Text>
      <CheckBox checked={publishProduct} checkedColor='#95F29F' checkedIcon='toggle-on' onPress={() => setPublishProduct(!publishProduct)}
        size={30} uncheckedIcon='toggle-off' />
    </View>
    <View style={Seller_Up_ProductDetails}>
      <Text style={[FontFamilyText, FontSize5]}>เพจ Facebook</Text>
      <IconEntypo color={mainColor} name='chevron-right' size={35} />
    </View>
  </View>;
};