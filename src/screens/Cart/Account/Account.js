///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesCustomerAccount from '../../../style/styleCart-src/styleCustomer_account';
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { DimensionsProps, ExitApp } from '../../../customComponents';
import { GetServices, GetData } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { width } = DimensionsProps;
const { Account_Box, Appbar, } = stylesCustomerAccount;
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6, } = stylesFont;
const { ItemCenter, ItemCenterVertical, SafeAreaViewNB } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Account);
function Account(props) {
    const { navigation, route } = props;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeSave, setActiveSave] = useState(false);
    const [activeSave2, setActiveSave2] = useState(false);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataBody, setDataBody] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [dataService3, setDataService3] = useState(undefined);
    const dataBody3 = { id_customer: currentUser?.id_customer, id_address };
    const getData = (v) => {
        dataBody.device == undefined && (dataBody.device = "mobile_device");
        currentUser.id_customer && (dataBody.id_customer = currentUser.id_customer);
        type == 'edit' && dataBody.id_address == undefined && (dataBody.id_address = id_address);
        v.address && (dataBody.address = v.address);
        v.amphur && (dataBody.amphur = v.amphur);
        v.firstname && (dataBody.firstname = v.firstname);
        v.lastname && (dataBody.lastname = v.lastname);
        v.main && (dataBody.main = v.main);
        v.province && (dataBody.province = v.province);
        v.telephone_number && (dataBody.telephone_number = v.telephone_number);
        v.tumbol && (dataBody.tumbol = v.tumbol);
        v.zip_code && (dataBody.zip_code = v.zip_code);
        setDataBody(dataBody);
    };
    const getData2 = () => { setActiveSave(true); };
    const getData3 = (v) => {
        if (dataBody.main == 'yes' && type != 'edit') { setActiveSave(false); setActiveSave2(true); setDataService(v); }
        else { setActiveSave(false); setDataService(v); this.getData4('none'); };
    };
    const getData4 = (v) => { setActiveSave2(false); setDataService2(v); route.params.updateData2(v); navigation.goBack(); };
    const getData5 = (v) => { setDataService3(v); };
    const getSource = (v) => { setActiveGetSource(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    const id_address = route.params?.id_address;
    const type = route.params?.type;
    const type_special = route.params?.type_special;
    const Props = { ...props, currentUser, dataBody, dataService3, getData, getData2, type, type_special, }
    const uri = `${finip}/${(type == 'edit' ? '/profile/update_address' : '/profile/insert_address')}`;
    const uri2 = `${finip}/profile/add_address`;
    const uri3 = `${finip}/profile/edit_address`;
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: (v) => getSource(v) });
    }, [activeGetSource]);
    useEffect(() => {
        activeGetServices && cokie && currentUser?.id_customer && id_address && type_special == undefined && GetServices({
            Authorization: cokie, dataBody3, getDataSource: (v) => getData5(v), showConsole: 'edit_address', uriPointer: uri3,
        });
    }, [activeGetServices && cokie && currentUser?.id_customer && id_address && type_special == undefined]);
    useEffect(() => {
        activeSave2 && cokie && type != 'edit' && type_special == undefined &&
            GetServices({ Authorization: cokie, dataBody: { address: "--" }, getDataSource: (v) => getData4(v), uriPointer: uri2, });
    }, [activeSave2 && cokie && type != 'edit' && type_special == undefined]);
    useEffect(() => {
        activeSave && cokie && type_special == undefined &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData3(v), showConsole: 'address', uriPointer: uri, });
    }, [activeSave && cokie && type_special == undefined]);
    return <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <Appbars {...Props} />
        <ScrollList {...Props} />
        <ExitApp {...Props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    const { currentUser, dataBody, dataService3, getData, getData2, type, type_special } = props;
    return <View>
        <ScrollView>
            <Accounts currentUser={currentUser} dataService={dataService3?.list_address} getData={(v) => getData(v)}
                type_special={type_special} />
            <Account_main dataService={dataService3?.list_address} getData={(v) => getData(v)} key='Account_main' />
        </ScrollView>
        <Button_Bar dataBody={dataBody} getData={(v) => getData2(v)} />
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Appbar
export const Appbars = (props) => {
    const { navigation, type } = props;
    return <View style={[Appbar]}>
        <View style={SafeAreaViewNB}>
            <View style={[ItemCenter, { flexDirection: 'row', height: 50, width: '100%', }]}>
                <View style={[ItemCenter, { flexDirection: 'row', marginLeft: '30%', marginRight: '30%' }]}>
                    <IconAntDesign color='#FFFFFF' name='mail' size={30} />
                    <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>{type == 'edit' ? 'แก้ไขที่อยู่' : 'ที่อยู่ใหม่'}</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <IconAntDesign color='#FFFFFF' name='closecircleo' size={25} style={[ItemCenterVertical]} />
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Account
export const Accounts = (props) => {
    const { currentUser, dataService, getData, type_special } = props;
    const [activeData, setActiveData] = useState(true);
    const [activeServices, setActiveServices] = useState(true);
    const [address, setAddress] = useState(undefined);
    const [amphoe, setAmphoe] = useState('เขต/อำเภอ');
    const [dataAmphoes, setDataAmphoes] = useState([]);
    const [dataProvinces, setDataProvinces] = useState([]);
    const [dataTumbols, setDataTumbols] = useState([]);
    const [lastName, setLastName] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [number, setNumber] = useState(undefined);
    const [office, setOffice] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [province, setProvince] = useState('จังหวัด');
    const [tax, setTax] = useState('โปรดระบุ');
    const [tumbol, setTumbol] = useState('แขวง/ตำบล');
    const [zipcode, setZipCode] = useState(undefined);
    const taxs = ['บุคคลธรรมดา', 'นิติบุคคล', 'ชาวต่างชาติ'];
    const getDataProvince = () => {
        fetch(`${finip}/profile/province_mobile`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJson) => { setDataProvinces(responseJson) })
            .catch((error) => { console.error(error); });
    };
    const getDataAmphoe = (v) => {
        if (v != null) {
            setAmphoe('เขต/อำเภอ'); setDataTumbols([]); setProvince(v); setTumbol('แขวง/ตำบล'); setZipCode(null);
            const dataBody = { id_customer: currentUser.id_customer, value_province: v, };
            fetch(`${finip}/profile/ajax_amphur`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataBody),
            }).then((r) => r.json())
                .then((rj) => { setActiveData(true); setDataAmphoes(rj.amphur); })
                .catch((error) => { console.error(error); });
        } else { getDataTumbol(null); };
    };
    const myFunction = (v) => { return v != null; };
    const getDataTumbol = (v) => {
        if (v != null) {
            const zipcode = dataAmphoes.map((v2) => { if (v2.amphoe == v) { return (v2.zipcode); } }).filter(myFunction);
            setAmphoe(v); setTumbol('แขวง/ตำบล'); setZipCode(zipcode[0]);
            const dataBody = { id_customer: currentUser.id_customer, value_amphur: v, };
            fetch(`${finip}/profile/ajax_tumbol`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataBody),
            }).then((r) => r.json()).then((rj) => { setActiveData(true); setDataTumbols(rj.tumbol); })
                .catch((error) => { console.error(error); });
        } else { setAmphoe('เขต/อำเภอ'); setDataTumbols([]); setTumbol('แขวง/ตำบล'); setZipCode(null); };
    };
    // componentDidMount() {
    //     this.getDataProvince();
    // };
    dataAmphoe = () => dataAmphoes.map((v) => v.amphoe);
    dataProvince = () => dataProvinces.map((v) => v.province);
    dataTumbol = () => dataTumbols.map((v) => v.district);
    getData = () => {
        setActiveData(false)
        getData({ address, amphur: amphoe, firstname: name, lastname, province, telephone_number: phone, tumbol, zip_code: zipcode, });
    };
    activeData && getData();
    activeServices && dataService?.map((v) => {
        getDataAmphoe(v.province); getDataTumbol(v.amphur); setActiveData(true); setActiveServices(false); setAddress(v.address);
        setName(v.firstname); setLastName(v.lastname); setPhone(v.telephone_number); setTumbol(v.tumbol); setZipCode(v.zip_code);
    });
    const amphoes = dataAmphoe();
    const provinces = dataProvince();
    const tumbols = dataTumbol();
    return <View>
        {[type_special == 'tax' && <View key={'ประเภทผู้ขอออกใบกำกับภาษี'} style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>ประเภทผู้ขอออกใบกำกับภาษี</Text>
            <ModalDropdown dropdownTextStyle={[FontFamilyText, FontSize6, { textAlign: 'right' }]} options={taxs} renderButtonText={(v) =>
                setTax(v)} style={ItemCenterVertical} textStyle={[FontFamilyText, FontSize6]}>
                <Text style={[FontFamilyText, FontSize6]}>{tax}</Text>
            </ModalDropdown>
        </View>,
        tax !== 'โปรดระบุ' && <View key={'หมายเลขบัตรประชาชน'} style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>{tax == 'บุคคลธรรมดา' ? 'หมายเลขบัตรประชาชน' : tax == 'นิติบุคคล' ?
                'หมายเลขประจำตัวผู้เสียภาษี' : tax == 'ชาวต่างชาติ' && 'หมายเลขพาสปอร์ต'}</Text>
            <TextInput maxLength={28} onChangeText={(v) => { setActiveData(true); setNumber(v) }} style={[FontFamilyText, FontSize6,
                { height: 40, textAlign: 'right', width: 250 }]} placeholder="โปรดระบุ" value={number} />
        </View>,
        tax === 'นิติบุคคล' && <View key={'หมายเลขบัตรประชาชน'} style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>สาขา</Text>
            <TextInput maxLength={28} onChangeText={(v) => { setActiveData(true); setOffice(v) }} style={[FontFamilyText, FontSize6,
                { height: 40, textAlign: 'right', width: 250 }]} placeholder="โปรดระบุ" value={office} />
        </View>]}
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>ชื่อ</Text>
            <TextInput maxLength={28} onChangeText={(v) => { setActiveData(true); setName(v) }} style={[FontFamilyText, FontSize6,
                { height: 40, textAlign: 'right', width: 250 }]} placeholder="โปรดระบุ" value={name} />
        </View>
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>นามสกุล</Text>
            <TextInput maxLength={28} onChangeText={(v) => { setActiveData(true); setLastName(v) }} style={[FontFamilyText, FontSize6,
                { height: 40, textAlign: 'right', width: 250 }]} placeholder="โปรดระบุ" value={lastName} />
        </View>
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>หมายเลขโทรศัพท์</Text>
            <TextInput keyboardType='phone-pad' maxLength={10} onChangeText={(v) => { setActiveData(true); setPhone(v) }} placeholder="โปรดระบุ" style={[FontFamilyText, FontSize6, { height: 40, textAlign: 'right', width: 250, }]} value={phone} />
        </View>
        <View style={[Account_Box, { height: 100 }]}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>ที่อยู่</Text>
            <TextInput editable multiline onChangeText={(v) => { setActiveData(true); setAddress(v) }}
                placeholder="โปรดระบุรายละเอียดบ้านเลขที่, ตึก, ชื่อถนน และ อื่นๆที่จำเป็น" style={[FontFamilyText, FontSize6,
                    { height: 90, width: '60%', }]} value={address} />
        </View>
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>จังหวัด</Text>
            <ModalDropdown dropdownTextStyle={[FontFamilyText, FontSize6, { textAlign: 'right' }]} options={provinces}
                renderButtonText={(i) => { getDataAmphoe(i); setProvince(i); }} style={ItemCenterVertical} textStyle={[FontFamilyText,
                    FontSize6]}>
                <Text style={[FontFamilyText, FontSize6]}>{province}</Text>
            </ModalDropdown>
        </View>
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>เขต/อำเภอ</Text>
            <ModalDropdown dropdownTextStyle={[FontFamilyText, FontSize6, { textAlign: 'right' }]} options={amphoes} renderButtonText={(i) =>
                getDataTumbol(i)} style={ItemCenterVertical} textStyle={[FontFamilyText, FontSize6]}>
                <Text style={[FontFamilyText, FontSize6]}>{amphoe}</Text>
            </ModalDropdown>
        </View>
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>แขวง/ตำบล</Text>
            <ModalDropdown dropdownTextStyle={[FontFamilyText, FontSize6, { textAlign: 'right' }]} options={tumbols}
                renderButtonText={(i) => { setActiveData(true); setTumbol(i); }} style={ItemCenterVertical} textStyle={[FontFamilyText,
                    FontSize6]}>
                <Text style={[FontFamilyText, FontSize6]}>{tumbol}</Text>
            </ModalDropdown>
        </View>
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>รหัสไปรษณีย์</Text>
            <TextInput editable={false} placeholder="รหัสไปรษณีย์" style={[FontFamilyText, FontSize6, { height: 40, textAlign: 'right' }]}
                value={zipcode} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Account_main
export const Account_main = (props) => {
    const { dataService, getData } = props;
    const [activeData, setActiveData] = useState(true);
    const [activeServices, setActiveServices] = useState(true);
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(true);
    const setStateItem1 = (v) => { setActiveData(true); setItem1(v); };
    const setStateItem2 = (v) => { setActiveData(true); setItem2(v); };
    const getDatas = (item2) => { let main; item2 ? main = 'yes' : main = 'no'; getData({ main }); setActiveData(false); };
    activeData && getDatas(item2);
    activeServices && dataService?.map((v) => { setActiveServices(false); setStateItem2(v.main_address == 0 ? false : true); });
    return <View>
        {/* <View style={[Account_Box]}>
                    <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>ตั้งเป็นที่อยู่ตั้งต้น</Text>
                    <CheckBox
                        size={25}
                        checkedIcon='toggle-on'
                        checkedColor='#95F29F'
                        uncheckedIcon='toggle-off'
                        checked={item1}
                        onPress={()=>this.setStateItem1(!item1)}
                    />
                </View> */}
        <View style={Account_Box}>
            <Text style={[FontFamilyText, FontSize6, { marginTop: 5 }]}>เลือกเป็นที่อยู่หลัก</Text>
            <CheckBox checked={item2} checkedColor='#95F29F' checkedIcon='toggle-on' uncheckedIcon='toggle-off' onPress={() =>
                setStateItem2(!item2)} size={25} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export const Button_Bar = (props) => {
    const { dataBody, getData } = props;
    const [bool, setBool] = useState(false);
    const activeSave = () => { getData('AAA'); };
    dataBody?.amphur !== 'เขต/อำเภอ' && dataBody?.firstname !== undefined && dataBody?.lastname !== undefined &&
        dataBody?.province !== 'จังหวัด' && dataBody?.telephone_number !== undefined && dataBody?.tumbol !== 'แขวง/ตำบล' ?
        setBool(true) : setBool(false);
    return <View style={{ alignItems: 'center', justifyContent: 'flex-end', }}>
        <TouchableOpacity activeOpacity={bool ? 0.2 : 1} onPress={bool ? () => activeSave() : null}>
            <View style={
                { alignItems: 'center', backgroundColor: bool ? mainColor : '#ECECEC', height: 40, justifyContent: 'center', width, }}>
                <Text style={[FontFamilyText, FontSize4, { color: bool ? '#FFFFFF' : '#919191' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </View>;
};