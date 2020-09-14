///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import ModalDropdown from 'react-native-modal-dropdown';
import DocumentPicker from 'react-native-document-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont, { normalize } from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../../customComponents';
import { GetServices } from '../../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6, FontSize8, } = stylesFont;
const { FlexRow, ItemCenter, ItemCenterVertical, SafeAreaViews } = stylesMain;
const { Edit_Box } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Bank);
function Bank(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow saveBar titleHead='เพิ่มบัญชีธนาคาร' />
        <Edit_Bank {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------แก้ไขบัญชีธนาคาร--------------------------------------///
export const Edit_Bank = (props) => {
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [filename, setFilename] = useState('ชื่อไฟล์ที่อัพ');
    const [nameCusBank, setNameCusBank] = useState(undefined);
    const [nameBank, setNameBank] = useState('กรุณาเลือกธนาคาร');
    const [numberBank, setNumberBank] = useState('');
    const [selectedItem, setSelectedItem] = useState(undefined);
    const uri = `${finip}/store_transfer/bank_data`;
    let pickerItem = [];
    let Image1;
    dataService?.bank_data?.map((v) => pickerItem.push(v.name_bank));
    selectedItem && (Image1 = { uri: `${finip}/${selectedItem[0].image_path}/${selectedItem[0].image}` });
    const upload_Bookbank = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.images], });
            console.log(res.uri, res.type, res.name, res.size);
            setFilename(res.name);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) { } else { throw err; };
        };
    };
    const getData = (v) => { setActiveGetServices(false); setDataService(v); };
    const getPickerItem = (iv) => {
        if (iv != null) {
            setNameBank(iv);
            setSelectedItem(dataService.bank_data.map((v) => v).filter((v2) => v2.name_bank == iv));
        };
    };
    const setStateText = (v) => {
        if (numberBank.length < v.length && !Number.isInteger(v.slice(-1) * 1)) { v = numberBank; }
        else { setNumberBank(v); };
    };
    useEffect(() => {
        activeGetServices && GetServices({ getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeGetServices]);
    return <View>
        <View style={{ padding: 10 }}>
            <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>ชื่อธนาคาร</Text>
            <View style={[Edit_Box]}>
                <ModalDropdown dropdownTextStyle={[FontFamilyText, { fontSize: normalize(20), textAlign: 'center', width: width * 0.933, }]}
                    options={pickerItem} style={[ItemCenterVertical]} textStyle={{ fontSize: normalize(20) }} renderButtonText={(v) =>
                        getPickerItem(v)}>
                    <View style={[ItemCenter, { flexDirection: 'row', width: width * 1 }]}>
                        <View style={[ItemCenter,
                            { flexDirection: 'row', marginLeft: -10, marginRight: -10, width: width * 0.8, }]}>
                            {selectedItem && selectedItem[0].image && <Image source={Image1}
                                style={{ width: 40, aspectRatio: 1, marginRight: 4 }} />}
                            <Text style={[FontFamilyText, FontSize4, { textAlign: 'center', }]}>{nameBank}</Text>
                        </View>
                        <IconAntDesign name='caretdown' style={[ItemCenterVertical]} />
                    </View>
                </ModalDropdown>
            </View>
            <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>หมายเลขบัญชีธนาคาร</Text>
            <View style={Edit_Box}>
                <TextInput editable style={FontFamilyText} fontSize={15} keyboardType='number-pad' maxLength={10}
                    onChangeText={(v) => setStateText(v)} placeholder="กรุณากรอกหมายเลขบัญชีธนาคาร" value={numberBank} />
            </View>
            <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>ชื่อบัญชีธนาคาร</Text>
            <View style={Edit_Box}>
                <TextInput editable fontSize={15} maxLength={15} multiline style={FontFamilyText} onChangeText={(v) => setNameCusBank(v)}
                    placeholder="กรุณากรอกชื่อบัญชีธนาคาร" value={nameCusBank} />
            </View>
            <View>
                <Text style={[FontFamilyBold, FontSize5, { margin: 10 }]}>หน้าบัญชีธนาคาร</Text>
                <View style={[FlexRow, { height: 50, justifyContent: 'space-around', marginBottom: 10 }]}>
                    <View style={[FlexRow, { justifyContent: 'space-between', paddingHorizontal: 10, }]}>
                        <View style={[{
                            backgroundColor: '#FFFFFF', borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, height: 50,
                            justifyContent: 'center', paddingHorizontal: 10, width: '68%',
                        }]}>
                            <Text numberOfLines={1} style={[FontFamilyBold, FontSize6, { color: '#C5C5C5' }]}>{filename}</Text>
                        </View>
                        <TouchableOpacity onPress={() => upload_Bookbank()} style={[FlexRow, ItemCenter,
                            { backgroundColor: '#FFFFFF', borderColor: mainColor, borderRadius: 5, borderWidth: 2, width: '30%', }]}>
                            <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}>อัพโหลด</Text>
                            <IconEntypo name='upload' size={30} style={{ color: mainColor, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[FontFamilyBold, FontSize8]}>สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG </Text>
            </View>
        </View>
    </View>;
};