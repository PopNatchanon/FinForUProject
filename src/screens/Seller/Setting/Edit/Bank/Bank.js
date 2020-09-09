///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView, Image,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesFont, { normalize } from '../../../../../style/stylesFont';
import stylesLogin from '../../../../../style/stylesLoginScreen';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetServices } from '../../../../../customComponents/Tools';
import { Address_Customar } from '../../../../Customer/Setting/Edit/Address/Address';
import { NavigationNavigate, AppBar } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../../navigator/IpConfig';
import { ExitAppModule } from '../../../../Main/Main';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={stylesMain.SafeAreaView}>
        <AppBar {...props} backArrow titleHead='เพิ่มบัญชีธนาคาร' saveBar />
        <Edit_Bank {...props} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------แก้ไขบัญชีธนาคาร--------------------------------------///
export let Edit_Bank = (props) => {
    const [activeGetServices, setActiveGetServices] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const [filename, setFilename] = useState('ชื่อไฟล์ที่อัพ');
    const [nameCusBank, setNameCusBank] = useState(undefined);
    const [nameBank, setNameBank] = useState('กรุณาเลือกธนาคาร');
    const [numberBank, setNumberBank] = useState('');
    const [selectedItem, setSelectedItem] = useState(undefined);
    var pickerItem = [];
    var url_image;
    var uri = `${finip}/store_transfer/bank_data`;
    dataService?.bank_data?.map((value) => pickerItem.push(value.name_bank));
    selectedItem && (url_image = `${finip}/${selectedItem[0].image_path}/${selectedItem[0].image}`);
    let upload_Bookbank = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.images], });
            console.log(res.uri, res.type, res.name, res.size);
            setFilename(res.name);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) { } else { throw err; };
        };
    };
    let getData = (value) => { setActiveGetServices(false); setDataService(value); };
    let getPickerItem = (itemValue) => {
        if (itemValue != null) {
            setNameBank(itemValue);
            setSelectedItem(dataService.bank_data.map((value) => value).filter((value2) => value2.name_bank == itemValue));
        };
    };
    let setStateText = (value) => {
        if (numberBank.length < value.length && !Number.isInteger(value.slice(-1) * 1)) { value = numberBank; }
        else { setNumberBank(value); };
    };
    useEffect(() => {
        activeGetServices && GetServices({ uriPointer: uri, getDataSource: (value) => getData(value) });
    }, [activeGetServices]);
    return <View>
        <View style={{ padding: 10 }}>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อธนาคาร</Text>
            <View style={[stylesSeller.Edit_Box]}>
                <ModalDropdown options={pickerItem} style={[stylesMain.ItemCenterVertical,]} textStyle={{ fontSize: normalize(20) }}
                    dropdownTextStyle={[stylesFont.FontFamilyText,
                    { width: width * 0.933, textAlign: 'center', fontSize: normalize(20) }]}
                    renderButtonText={(value) => getPickerItem(value)}>
                    <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: width * 1 }]}>
                        <View style={[stylesMain.ItemCenter,
                        { flexDirection: 'row', width: width * 0.8, marginLeft: -10, marginRight: -10 }]}>
                            {selectedItem && selectedItem[0].image && <Image source={{ uri: url_image }}
                                style={{ width: 40, aspectRatio: 1, marginRight: 4 }} />}
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { textAlign: 'center', }]}>{nameBank}</Text>
                        </View>
                        <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
                    </View>
                </ModalDropdown>
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หมายเลขบัญชีธนาคาร</Text>
            <View style={stylesSeller.Edit_Box}>
                <TextInput style={stylesFont.FontFamilyText} keyboardType='number-pad' fontSize={15}
                    placeholder="กรุณากรอกหมายเลขบัญชีธนาคาร" editable maxLength={10} value={numberBank} onChangeText={(value) =>
                        setStateText(value)} />
            </View>
            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อบัญชีธนาคาร</Text>
            <View style={stylesSeller.Edit_Box}>
                <TextInput style={stylesFont.FontFamilyText} fontSize={15} placeholder="กรุณากรอกชื่อบัญชีธนาคาร" multiline editable
                    maxLength={15} value={nameCusBank} onChangeText={(value) => setNameCusBank(value)} />
            </View>
            <View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หน้าบัญชีธนาคาร</Text>
                <View style={[stylesMain.FlexRow, { height: 50, justifyContent: 'space-around', marginBottom: 10 }]}>
                    <View style={[stylesMain.FlexRow, { paddingHorizontal: 10, justifyContent: 'space-between' }]}>
                        <View style={[{
                            width: '68%', height: 50, backgroundColor: '#FFFFFF', paddingHorizontal: 10, borderColor: '#EAEAEA',
                            borderWidth: 1, borderRadius: 5, justifyContent: 'center'
                        }]}>
                            <Text numberOfLines={1} style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { color: '#C5C5C5' }]}>
                                {filename}</Text>
                        </View>
                        <TouchableOpacity onPress={() => upload_Bookbank()} style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                        { width: '30%', borderColor: mainColor, borderWidth: 2, borderRadius: 5, backgroundColor: '#FFFFFF' }]}>
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>อัพโหลด</Text>
                            <IconEntypo name='upload' size={30} style={{ color: mainColor, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>
                    สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG </Text>
            </View>
        </View>
    </View>;
};