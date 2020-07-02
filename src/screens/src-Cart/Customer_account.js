///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useEffect, useState } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, } from '../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import CookieManager from '@react-native-community/cookies';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import styles from '../../style/styleCart-src/styleCustomer_account';
import stylesFont from '../../style/stylesFont';
import stylesMain, { mainColor } from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../MainScreen';
import { GetServices, GetData } from '../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    customerData: state.customerData, getFetchData: state.singleFetchDataFromService, activeFetchData: state.activeFetchData,
});
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setActiveFetch, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Customer_account);
function Customer_account(props) {
    const { navigation, route } = props;
    const id_address = route.params?.id_address;
    const type = route.params?.type;
    const type_special = route.params?.type_special;
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [activeSave, setActiveSave] = useState(false);
    const [activeSave2, setActiveSave2] = useState(false);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dataBody, setDataBody] = useState(undefined);
    const [dataService, setDataService] = useState(undefined);
    const [dataService2, setDataService2] = useState(undefined);
    const [dataService3, setDataService3] = useState(undefined);
    var uri = `${finip}/${(type == 'edit' ? '/profile/update_address' : '/profile/insert_address')}`;
    var uri2 = `${finip}/profile/add_address`;
    var uri3 = `${finip}/profile/edit_address`;
    var dataBody3 = {
        id_customer: currentUser && currentUser.id_customer,
        id_address
    };
    let getData = (value) => {
        dataBody.device == undefined && (dataBody.device = "mobile_device");
        type == 'edit' && dataBody.id_address == undefined && (dataBody.id_address = id_address);
        currentUser.id_customer && (dataBody.id_customer = currentUser.id_customer);
        value.firstname && (dataBody.firstname = value.firstname);
        value.lastname && (dataBody.lastname = value.lastname);
        value.province && (dataBody.province = value.province);
        value.amphur && (dataBody.amphur = value.amphur);
        value.tumbol && (dataBody.tumbol = value.tumbol);
        value.zip_code && (dataBody.zip_code = value.zip_code);
        value.address && (dataBody.address = value.address);
        value.telephone_number && (dataBody.telephone_number = value.telephone_number);
        value.main && (dataBody.main = value.main);
        setDataBody(dataBody);
    };
    let getData2 = () => { setActiveSave(true); };
    let getData3 = (value) => {
        if (dataBody.main == 'yes' && type != 'edit') { setActiveSave(false); setActiveSave2(true); setDataService(value); }
        else { setActiveSave(false); setDataService(value); this.getData4('none'); };
    };
    let getData4 = (value) => {
        setActiveSave2(false); setDataService2(value); route.params.updateData2(value); navigation.goBack();
    };
    let getData5 = (value) => { setDataService3(value); };
    let getSource = (value) => { setActiveGetSource(false); setCokie(value.keycokie); setCurrentUser(value.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: value => getSource(value) });
    }, [activeGetSource]);
    useEffect(() => {
        activeGetServices && currentUser && currentUser.id_customer && cokie && id_address && type_special == undefined && GetServices({
            uriPointer: uri3, dataBody3, getDataSource: value => getData5(value), Authorization: cokie, showConsole: 'edit_address'
        });
    }, [activeGetServices && currentUser && currentUser.id_customer && cokie && id_address && type_special == undefined]);
    useEffect(() => {
        activeSave2 && cokie && type_special == undefined && type != 'edit' && GetServices({
            uriPointer: uri2, dataBody: { address: "--" }, getDataSource: value => getData4(value), Authorization: cokie,
        });
    }, [activeSave2 && cokie && type_special == undefined && type != 'edit']);
    useEffect(() => {
        activeSave && cokie && type_special == undefined && GetServices({
            uriPointer: uri, dataBody, getDataSource: value => getData3(value), Authorization: cokie, showConsole: 'address'
        });
    }, [activeSave && cokie && type_special == undefined]);
    return <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
        <Appbar {...props} type={type} />
        <ScrollView>
            <Account currentUser={this.state.currentUser} dataService={dataService3?.list_address} getData={value => getData(value)}
                key='Accountlist_address' type_special={type_special} />
            <Account_main dataService={dataService3?.list_address} getData={value => getData(value)} key='Account_main' />
        </ScrollView>
        <Button_Bar dataBody={dataBody} getData={value => getData2(value)} />
        <ExitAppModule {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>> Appbar
export let Appbar = (props) => {
    const { navigation, type } = props;
    return <View style={[styles.Appbar]}>
        <View style={stylesMain.SafeAreaViewNB}>
            <View style={[stylesMain.ItemCenter, { width: '100%', height: 50, flexDirection: 'row' }]}>
                <View style={[stylesMain.ItemCenter, { flexDirection: 'row', marginLeft: '30%', marginRight: '30%' }]}>
                    <IconAntDesign name='mail' size={30} color='#FFFFFF' />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', }]}>{type == 'edit' ?
                        'แก้ไขที่อยู่' : 'ที่อยู่ใหม่'}</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} >
                    <IconAntDesign name='closecircleo' size={25} color='#FFFFFF' style={[stylesMain.ItemCenterVertical,]} />
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Account
export let Account = (props) => {
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
    var taxs = ['บุคคลธรรมดา', 'นิติบุคคล', 'ชาวต่างชาติ'];
    let getDataProvince = () => {
        fetch(`${finip}/profile/province_mobile`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJson) => {
            setDataProvinces(responseJson)
        }).catch((error) => {
            console.error(error);
        });
    };
    let getDataAmphoe = (itemValue) => {
        if (itemValue != null) {
            setAmphoe('เขต/อำเภอ'); setDataTumbols([]); setProvince(itemValue); setTumbol('แขวง/ตำบล'); setZipCode(null);
            var dataBody = {
                id_customer: currentUser.id_customer,
                value_province: itemValue,
            };
            fetch(`${finip}/profile/ajax_amphur`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataBody),
            }).then((response) => response.json()).then((responseJson) => {
                setActiveData(true); setDataAmphoes(responseJson.amphur);
            }).catch((error) => {
                console.error(error);
            });
        } else {
            getDataTumbol(null);
        };
    };
    let myFunction = (value) => {
        return value != null;
    };
    let getDataTumbol = (itemValue) => {
        if (itemValue != null) {
            var zipcode = dataAmphoes.map((item) => { if (item.amphoe == itemValue) { return (item.zipcode); } }).filter(myFunction);
            setAmphoe(itemValue); setTumbol('แขวง/ตำบล'); setZipCode(zipcode[0]);
            var dataBody = {
                id_customer: currentUser.id_customer,
                value_amphur: itemValue,
            };
            fetch(`${finip}/profile/ajax_tumbol`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataBody),
            }).then((response) => response.json()).then((responseJson) => {
                setActiveData(true); setDataTumbols(responseJson.tumbol);
            }).catch((error) => {
                console.error(error);
            });
        } else {
            setAmphoe('เขต/อำเภอ'); setDataTumbols([]); setTumbol('แขวง/ตำบล'); setZipCode(null);
        };
    };
    // componentDidMount() {
    //     this.getDataProvince();
    // };
    dataProvince = () => dataProvinces.map((item) => item.province);
    dataAmphoe = () => dataAmphoes.map((item) => item.amphoe);
    dataTumbol = () => dataTumbols.map((item) => item.district);
    getData = () => {
        setActiveData(false)
        getData({
            firstname: name, lastname, province, amphur: amphoe, tumbol, zip_code: zipcode, address, telephone_number: phone,
        });
    };
    activeData && getData();
    activeServices && dataService && dataService.map((value) => {
        getDataAmphoe(value.province);
        getDataTumbol(value.amphur);
        setActiveData(true); setActiveServices(false); setAddress(value.address); setName(value.firstname); setLastName(value.lastname); setPhone(value.telephone_number); setTumbol(value.tumbol); setZipCode(value.zip_code);
    });
    let amphoes = dataAmphoe();
    let provinces = dataProvince();
    let tumbols = dataTumbol();
    return <View>
        {[type_special == 'tax' && <View key={'ประเภทผู้ขอออกใบกำกับภาษี'} style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ประเภทผู้ขอออกใบกำกับภาษี</Text>
            <ModalDropdown options={taxs} style={stylesMain.ItemCenterVertical} textStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6]} dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                renderButtonText={(value) => setTax(value)}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{tax}</Text>
            </ModalDropdown>
        </View>,
        tax !== 'โปรดระบุ' && <View key={'หมายเลขบัตรประชาชน'} style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>{tax == 'บุคคลธรรมดา' ?
                'หมายเลขบัตรประชาชน' : tax == 'นิติบุคคล' ? 'หมายเลขประจำตัวผู้เสียภาษี' : tax == 'ชาวต่างชาติ' &&
                    'หมายเลขพาสปอร์ต'}</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                placeholder="โปรดระบุ" maxLength={28} value={number} onChangeText={(value) => { setActiveData(true); setNumber(value) }} />
        </View>,
        tax === 'นิติบุคคล' && <View key={'หมายเลขบัตรประชาชน'} style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>สาขา</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                placeholder="โปรดระบุ" maxLength={28} value={office} onChangeText={(value) => { setActiveData(true); setOffice(value) }} />
        </View>]}
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ชื่อ</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                placeholder="โปรดระบุ" maxLength={28} value={name} onChangeText={(value) => { setActiveData(true); setName(value) }} />
        </View>
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>นามสกุล</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                placeholder="โปรดระบุ" maxLength={28} value={lastName} onChangeText={(value) => { setActiveData(true); setName(value) }} />
        </View>
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>หมายเลขโทรศัพท์</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                placeholder="โปรดระบุ" keyboardType='phone-pad' maxLength={10} value={phone}
                onChangeText={(value) => { setActiveData(true); setPhone(value) }} />
        </View>
        <View style={[styles.Account_Box, { height: 100 }]}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ที่อยู่</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { width: '60%', height: 90 }]} multiline editable
                placeholder="โปรดระบุรายละเอียดบ้านเลขที่, ตึก, ชื่อถนน และ อื่นๆที่จำเป็น" value={address}
                onChangeText={(value) => { setActiveData(true); setAddress(value) }} />
        </View>
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>จังหวัด</Text>
            <ModalDropdown options={provinces} style={stylesMain.ItemCenterVertical} textStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6]} dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                renderButtonText={(index) => { setProvince(index); getDataAmphoe(index); }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{province}</Text>
            </ModalDropdown>
        </View>
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>เขต/อำเภอ</Text>
            <ModalDropdown options={amphoes} style={stylesMain.ItemCenterVertical} textStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6]} dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                renderButtonText={(index) => getDataTumbol(index)}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{amphoe}</Text>
            </ModalDropdown>
        </View>
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>แขวง/ตำบล</Text>
            <ModalDropdown options={tumbols} style={stylesMain.ItemCenterVertical} textStyle={[stylesFont.FontFamilyText,
            stylesFont.FontSize6]} dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                renderButtonText={(index) => { setActiveData(true); setTumbol(index); }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>{tumbol}</Text>
            </ModalDropdown>
        </View>
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>รหัสไปรษณีย์</Text>
            <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, textAlign: 'right' }]} editable={false}
                placeholder="รหัสไปรษณีย์" value={zipcode} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Account_main
export let Account_main = (props) => {
    const { dataService, getData } = props;
    const [activeData, setActiveData] = useState(true);
    const [activeServices, setActiveServices] = useState(true);
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(true);
    let setStateItem1 = (value) => { setActiveData(true); setItem1(value); };
    let setStateItem2 = (value) => { setActiveData(true); setItem2(value); };
    let getDatas = (item2) => {
        var mc;
        item2 ? mc = 'yes' : mc = 'no';
        setActiveData(false);
        getData({ main: mc });
    };
    activeData && getDatas(item2);
    activeServices && dataService && dataService.map((value) => {
        setStateItem2(value.main_address == 0 ? false : true); setActiveServices(false);
    });
    return <View>
        {/* <View style={[styles.Account_Box]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ตั้งเป็นที่อยู่ตั้งต้น</Text>
                    <CheckBox
                        size={25}
                        checkedIcon='toggle-on'
                        checkedColor='#95F29F'
                        uncheckedIcon='toggle-off'
                        checked={item1}
                        onPress={()=>this.setStateItem1(!item1)}
                    />
                </View> */}
        <View style={styles.Account_Box}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>เลือกเป็นที่อยู่หลัก</Text>
            <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item2} onPress={() =>
                setStateItem2(!item2)} />
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export let Button_Bar = (props) => {
    const { dataBody, getData } = props;
    const [bool, setBool] = useState(false);
    let activeSave = () => { getData('AAA'); };
    dataBody && dataBody.amphur !== 'เขต/อำเภอ' && dataBody.province !== 'จังหวัด' && dataBody.tumbol !== 'แขวง/ตำบล' &&
        dataBody.firstname !== undefined && dataBody.lastname !== undefined && dataBody.telephone_number !== undefined ?
        setBool(true) : setBool(false);
    return <View style={{ alignItems: 'center', justifyContent: 'flex-end', }}>
        <TouchableOpacity activeOpacity={bool ? 0.2 : 1} onPress={bool ? () => activeSave() : null}>
            <View style={{
                height: 40, backgroundColor: bool ? mainColor : '#ECECEC', width, alignItems: 'center', justifyContent: 'center',
            }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: bool ? '#FFFFFF' : '#919191' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </View>;
};