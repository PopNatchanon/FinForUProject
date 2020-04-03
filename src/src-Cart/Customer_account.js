///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';
export const { width, height } = Dimensions.get('window');
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> Styles
import styles from '../../style/styleCart-src/styleCustomer_account';
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { ExitAppModule } from '../MainScreen';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '.././navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main
export default class Customer_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSave: false,
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
    }
    getData = (value) => {
        const { currentUser, dataBody } = this.state
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
    render() {
        const { dataBody } = this.state
        return (
            <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
                {
                    activeSave == true &&
                    <View />
                }
                <Appbar navigation={this.props.navigation} />
                <ScrollView>
                    <Account currentUser={this.state.currentUser} getData={this.getData.bind(this)} />
                    <Account_main getData={this.getData.bind(this)} />
                </ScrollView>
                <Button_Bar dataBody={dataBody} getData={this.getData2.bind(this)} />
                <ExitAppModule navigation={this.props.navigation} />
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
        return (
            <View style={[styles.Appbar]}>
                <View style={stylesMain.SafeAreaViewNB}>
                    <View style={[stylesMain.ItemCenter, { width: '100%', height: 50, flexDirection: 'row' }]}>
                        <View style={[stylesMain.ItemCenter, { flexDirection: 'row', marginLeft: '30%', marginRight: '30%' }]}>
                            <IconAntDesign name='mail' size={30} color='#FFFFFF' />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF', }]}>ที่อยู่ใหม่</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} >
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
            DataProvinces: [],
            DataAmphoes: [],
            DataTumbols: [],
            province: 'จังหวัด',
            amphoe: 'เขต/อำเภอ',
            tumbol: 'แขวง/ตำบล',
        };
    }
    getDataProvince() {
        fetch(finip + '/profile/province_mobile', {
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
            fetch(finip + '/profile/ajax_amphur', {
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
            fetch(finip + '/profile/ajax_tumbol', {
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
        const { activeData, address, amphoe, lastname, name, phone, province, tumbol, zipcode } = this.state
        let provinces = this.DataProvince()
        let amphoes = this.DataAmphoe()
        let tumbols = this.DataTumbol()
        activeData == true &&
            this.getData()
        return (
            <View>
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
        };
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { item1, item2 } = this.state
        if (
            ////>nextProps
            ////>nextState
            item1 !== nextState.item1 || item2 !== nextState.item2
        ) {
            return true
        }
        return false
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
        const { activeData, item1, item2 } = this.state
        activeData == true &&
            this.getData(item2)
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
                        onPress={this.setStateItem1.bind(this, !item1)}
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
                        onPress={this.setStateItem2.bind(this, !item2)}
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
                <TouchableOpacity activeOpacity={bool == true ? 0.2 : 1} onPress={bool == true ? this.activeSave.bind(this) : null}>
                    <View style={{
                        height: 40, backgroundColor: bool == true ? '#0A55A6' : '#ECECEC'
                        , width, alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {
                            color: bool == true ? '#FFFFFF' : '#919191'
                        }]}>บันทึก</Text>
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}