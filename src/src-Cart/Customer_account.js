///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView,
} from 'react-native';
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
import { GetServices } from '../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Customer_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            activeSave: false,
            activeSave2: false,
            currentUser: {},
            dataBody: {},
        };
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataasync()
        CookieManager.get(`${finip}/auth/login_customer`)
            .then((res) => {
                var keycokie = res.token
                this.setState({ keycokie })
            });
    }
    getData = (value) => {
        const { navigation } = this.props
        const { currentUser, dataBody } = this.state
        const type = navigation.getParam('type')
        const id_address = navigation.getParam('id_address')
        dataBody.device == undefined && (
            dataBody.device = "mobile_device"
        )
        type == 'edit' && dataBody.id_address == undefined && (
            dataBody.id_address = id_address
        )
        currentUser.id_customer && (
            dataBody.id_customer = currentUser.id_customer
        )
        value.firstname && (
            dataBody.firstname = value.firstname
        )
        value.lastname && (
            dataBody.lastname = value.lastname
        )
        value.province && (
            dataBody.province = value.province
        )
        value.amphur && (
            dataBody.amphur = value.amphur
        )
        value.tumbol && (
            dataBody.tumbol = value.tumbol
        )
        value.zip_code && (
            dataBody.zip_code = value.zip_code
        )
        value.address && (
            dataBody.address = value.address
        )
        value.telephone_number && (
            dataBody.telephone_number = value.telephone_number
        )
        value.main && (
            dataBody.main = value.main
        )
        this.setState({ dataBody })
    }
    getData2 = () => {
        this.setState({ activeSave: true })
    }
    getData3 = (dataService) => {
        const { navigation } = this.props
        const { dataBody } = this.state
        const type = navigation.getParam('type')
        if (dataBody.main == 'yes' && type != 'edit') {
            this.setState({ activeSave: false, activeSave2: true, dataService })
        } else {
            this.setState({ activeSave: false, dataService })
            this.getData4('none')
        }
    }
    getData4 = (dataService2) => {
        const { navigation } = this.props
        this.setState({ activeSave2: false, dataService2 })
        navigation.state.params.updateData2(dataService2);
        navigation.goBack()
    }
    getData5 = (dataService3) => {
        this.setState({ dataService3 })
    }
    render() {
        const { navigation } = this.props
        const { activeGetServices, activeSave, activeSave2, currentUser, dataBody, dataService3, keycokie } = this.state
        const type = navigation.getParam('type')
        const type_special = navigation.getParam('type_special')
        const id_address = navigation.getParam('id_address')
        var uri = `${finip}/${(type == 'edit' ? '/profile/update_address' : '/profile/insert_address')}`;
        var uri2 = `${finip}/profile/add_address`;
        var uri3 = `${finip}/profile/edit_address`;
        var dataBody3 = {
            id_customer: currentUser && currentUser.id_customer,
            id_address
        }
        console.log('============================>render|dataBody')
        console.log(dataBody)
        activeSave == true && keycokie && type_special == undefined &&
            GetServices({
                uriPointer: uri, dataBody, getDataSource: this.getData3.bind(this), Authorization: keycokie, showConsole: 'address'
            })
        activeSave2 == true && keycokie && type_special == undefined && type != 'edit' &&
            GetServices({
                uriPointer: uri2, dataBody: { address: "--" }, getDataSource: this.getData4.bind(this), Authorization: keycokie,
            })
        activeGetServices == true && currentUser && currentUser.id_customer && keycokie && id_address &&
            type_special == undefined &&
            GetServices({
                uriPointer: uri3, dataBody3, getDataSource: this.getData5.bind(this), Authorization: keycokie,
                showConsole: 'edit_address'
            })
        return (
            <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
                <Appbar navigation={navigation} type={type} />
                <ScrollView>
                    <Account currentUser={this.state.currentUser} dataService={dataService3 && dataService3.list_address}
                        getData={this.getData.bind(this)} key='Accountlist_address' type_special={type_special} />
                    <Account_main dataService={dataService3 && dataService3.list_address} getData={this.getData.bind(this)}
                        key='Account_main' />
                </ScrollView>
                <Button_Bar dataBody={dataBody} getData={this.getData2.bind(this)} />
                <ExitAppModule navigation={navigation} />
            </SafeAreaView>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Appbar
export class Appbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation, type } = this.props
        return (
            <View style={[styles.Appbar]}>
                <View style={stylesMain.SafeAreaViewNB}>
                    <View style={[stylesMain.ItemCenter, { width: '100%', height: 50, flexDirection: 'row' }]}>
                        <View style={[stylesMain.ItemCenter, { flexDirection: 'row', marginLeft: '30%', marginRight: '30%' }]}>
                            <IconAntDesign name='mail' size={30} color='#FFFFFF' />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', }]}>
                                {type == 'edit' ? 'แก้ไขที่อยู่' : 'ที่อยู่ใหม่'}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} >
                            <IconAntDesign name='closecircleo' size={25} color='#FFFFFF' style={[stylesMain.ItemCenterVertical,]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Account
export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeData: true,
            activeServices: true,
            amphoe: 'เขต/อำเภอ',
            DataProvinces: [],
            DataAmphoes: [],
            DataTumbols: [],
            province: 'จังหวัด',
            tax: 'โปรดระบุ',
            tumbol: 'แขวง/ตำบล',
        };
    }
    getDataProvince() {
        fetch(`${finip}/profile/province_mobile`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    DataProvinces: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    getDataAmphoe(itemValue) {
        if (itemValue != null) {
            this.setState({ province: itemValue, DataTumbols: [], tumbol: 'แขวง/ตำบล', amphoe: 'เขต/อำเภอ', zipcode: null });
            const { currentUser } = this.props
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
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log('responseJson')
                    console.log(responseJson)
                    this.setState({
                        activeData: true,
                        DataAmphoes: responseJson.amphur,
                    })
                })
                .catch((error) => {
                    console.error(error);
                })
        } else {
            this.getDataTumbol(null);
        }
    }
    myFunction(value) {
        return value != null;
    }
    getDataTumbol(itemValue) {
        const { DataAmphoes } = this.state
        if (itemValue != null) {
            var zipcode = DataAmphoes.map((item) => {
                if (item.amphoe == itemValue) {
                    return (item.zipcode)
                }
            }).filter(this.myFunction)
            this.setState({ amphoe: itemValue, tumbol: 'แขวง/ตำบล', zipcode: zipcode[0] })
            const { currentUser } = this.props
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
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        activeData: true,
                        DataTumbols: responseJson.tumbol,
                    })
                })
                .catch((error) => {
                    console.error(error);
                })
        } else {
            this.setState({ DataTumbols: [], tumbol: 'แขวง/ตำบล', amphoe: 'เขต/อำเภอ', zipcode: null })
        }
    }
    componentDidMount() {
        this.getDataProvince()
    }
    DataProvince() {
        return (
            this.state.DataProvinces.map((item) => {
                return (
                    item.province
                )
            })
        )
    }
    DataAmphoe() {
        return (
            this.state.DataAmphoes.map((item) => {
                return (
                    item.amphoe
                )
            })
        )
    }
    DataTumbol() {
        return (
            this.state.DataTumbols.map((item) => {
                return (
                    item.district
                )
            })
        )
    }
    getData = () => {
        const { getData } = this.props
        const { address, amphoe, lastname, name, phone, province, tumbol, zipcode } = this.state
        this.setState({ activeData: false })
        getData({
            firstname: name,
            lastname,
            province,
            amphur: amphoe,
            tumbol,
            zip_code: zipcode,
            address,
            telephone_number: phone,
        })

    }
    render() {
        const { dataService, type_special } = this.props
        const { activeServices, activeData, address, amphoe, lastname, name, phone, province, tax, tumbol, zipcode } = this.state
        let provinces = this.DataProvince()
        let amphoes = this.DataAmphoe()
        let tumbols = this.DataTumbol()
        let taxs = ['บุคคลธรรมดา', 'นิติบุคคล', 'ชาวต่างชาติ']
        activeData == true &&
            this.getData()
        activeServices == true && dataService && dataService.map((value) => {
            return ([
                this.getDataAmphoe(value.province),
                this.getDataTumbol(value.amphur),
                this.setState({
                    address: value.address, name: value.firstname, lastname: value.lastname, phone: value.telephone_number,
                    tumbol: value.tumbol, zipcode: value.zip_code, activeServices: false, activeData: true,
                })
            ])
        })
        return (
            <View>
                {[
                    type_special == 'tax' &&
                    <View key={'ประเภทผู้ขอออกใบกำกับภาษี'} style={styles.Account_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ประเภทผู้ขอออกใบกำกับภาษี</Text>
                        <ModalDropdown
                            options={taxs}
                            style={stylesMain.ItemCenterVertical}
                            textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                            dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                            renderButtonText={(index) => { this.setState({ tax: index }) }}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                                {tax}</Text>
                        </ModalDropdown>
                    </View>,
                    tax !== 'โปรดระบุ' &&
                    <View key={'หมายเลขบัตรประชาชน'} style={styles.Account_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>
                            {
                                tax == 'บุคคลธรรมดา' ?
                                    'หมายเลขบัตรประชาชน' :
                                    tax == 'นิติบุคคล' ?
                                        'หมายเลขประจำตัวผู้เสียภาษี' :
                                        tax == 'ชาวต่างชาติ' &&
                                        'หมายเลขพาสปอร์ต'
                            }</Text>
                        <TextInput
                            style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                            placeholder="โปรดระบุ"
                            maxLength={28}
                            value={name}
                            onChangeText={(number) => this.setState({ activeData: true, number, })} />
                    </View>,
                    tax === 'นิติบุคคล' &&
                    <View key={'หมายเลขบัตรประชาชน'} style={styles.Account_Box}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>
                            สาขา</Text>
                        <TextInput
                            style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                            placeholder="โปรดระบุ"
                            maxLength={28}
                            value={name}
                            onChangeText={(office) => this.setState({ activeData: true, office, })} />
                    </View>
                ]}
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ชื่อ</Text>
                    <TextInput
                        style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                        placeholder="โปรดระบุ"
                        maxLength={28}
                        value={name}
                        onChangeText={(name) => this.setState({ activeData: true, name, })} />
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>นามสกุล</Text>
                    <TextInput
                        style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                        placeholder="โปรดระบุ"
                        maxLength={28}
                        value={lastname}
                        onChangeText={(lastname) => this.setState({ activeData: true, lastname })} />
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>หมายเลขโทรศัพท์</Text>
                    <TextInput
                        style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, width: 250, textAlign: 'right' }]}
                        placeholder="โปรดระบุ"
                        keyboardType='phone-pad'
                        maxLength={10}
                        value={phone}
                        onChangeText={(phone) => this.setState({ activeData: true, phone })} />
                </View>
                <View style={[styles.Account_Box, { height: 100 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>ที่อยู่</Text>
                    <TextInput style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { width: '60%', height: 90 }]}
                        multiline
                        editable
                        placeholder="โปรดระบุรายละเอียดบ้านเลขที่, ตึก, ชื่อถนน และ อื่นๆที่จำเป็น"
                        value={address}
                        onChangeText={(address) => this.setState({ activeData: true, address })} />
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>จังหวัด</Text>
                    <ModalDropdown
                        options={provinces}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                        renderButtonText={(index) => { [this.setState({ province: index }), this.getDataAmphoe(index)] }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            {province}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>เขต/อำเภอ</Text>
                    <ModalDropdown
                        options={amphoes}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                        renderButtonText={(index) => this.getDataTumbol(index)} >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            {amphoe}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>แขวง/ตำบล</Text>
                    <ModalDropdown
                        options={tumbols}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { textAlign: 'right' }]}
                        renderButtonText={(index) => this.setState({ activeData: true, tumbol: index, })} >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>
                            {tumbol}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 5 }]}>รหัสไปรษณีย์</Text>
                    <TextInput
                        style={[stylesFont.FontSize6, stylesFont.FontFamilyText, { height: 40, textAlign: 'right' }]}
                        editable={false}
                        placeholder="รหัสไปรษณีย์"
                        value={zipcode} />
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Account_main
export class Account_main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeData: true,
            activeServices: true,
        };
    }
    setStateItem1 = (item1) => {
        this.setState({ activeData: true, item1 })
    }
    setStateItem2 = (item2) => {
        this.setState({ activeData: true, item2 })
    }
    getData = (item2) => {
        const { getData } = this.props
        var mc
        item2 == true ?
            mc = 'yes' :
            mc = 'no'
        this.setState({ activeData: false })
        getData({ main: mc })
    }
    render() {
        const { dataService } = this.props
        const { activeData, activeServices, item1, item2 } = this.state
        activeData == true &&
            this.getData(item2)
        activeServices == true && dataService && dataService.map((value) => {
            return ([
                this.setStateItem2(value.main_address == 0 ? false : true),
                this.setState({ activeServices: false })
            ])
        })
        return (
            <View>
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
                    <CheckBox
                        size={25}
                        checkedIcon='toggle-on'
                        checkedColor='#95F29F'
                        uncheckedIcon='toggle-off'
                        checked={item2}
                        onPress={() => this.setStateItem2(!item2)}
                    />
                </View>
            </View>
        );
    }
}
///----------------------------------------------------------------------------------------------->>>> Button_Bar
export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    activeSave = () => {
        const { getData } = this.props
        getData('AAA')
    }
    render() {
        const { dataBody } = this.props
        var bool
        dataBody && dataBody.amphur !== 'เขต/อำเภอ' && dataBody.province !== 'จังหวัด' &&
            dataBody.tumbol !== 'แขวง/ตำบล' && dataBody.firstname !== undefined && dataBody.lastname !== undefined &&
            dataBody.telephone_number !== undefined ?
            bool = true :
            bool = false;
        return (
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', }}>
                <TouchableOpacity activeOpacity={bool == true ? 0.2 : 1} onPress={bool == true ? () => this.activeSave() : null}>
                    <View style={{
                        height: 40, backgroundColor: bool == true ? mainColor : '#ECECEC'
                        , width, alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {
                            color: bool == true ? '#FFFFFF' : '#919191'
                        }]}>บันทึก</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}