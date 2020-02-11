import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Picker,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/styleCart-src/styleCustomer_account';
import stylesMain from '../../style/StylesMainScreen';
import stylesFont from '../../style/stylesFont';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { finip, ip } from '../../navigator/IpConfig';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Customer_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
        };
    }
    getDataasync = async () => {
        const currentUser = await AsyncStorage.getItem('@MyKey')
        this.setState({ currentUser: JSON.parse(currentUser) })
    }
    componentDidMount() {
        this.getDataasync()
    }
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
                <Appbar navigation={this.props.navigation} />
                <Account currentUser={this.state.currentUser} />
                <Account_main />
                <Button_Bar />
            </SafeAreaView>
        );
    }
}

///--------------------------------------------------------------------------///

export class Appbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.Appbar}>
                <IconAntDesign name='mail' size={30} />
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize3, { marginLeft: 10, }]}>ที่อยู่ใหม่</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <View>
                        <IconAntDesign RightItem name='closecircleo' size={25} color='#0A55A6' style={{ marginLeft: 160, marginRight: 10, }} />
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

///--------------------------------------------------------------------------///


export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                id_customer: currentUser,
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
                    this.setState({
                        DataAmphoes: responseJson,
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
            this.setState({ amphoe: itemValue, zipcode: zipcode[0] })
            const { currentUser } = this.props
            var dataBody = {
                id_customer: currentUser,
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
                        DataTumbols: responseJson,
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

    render() {
        const { province, amphoe, tumbol } = this.state
        let provinces = this.DataProvince()
        let amphoes = this.DataAmphoe()
        let tumbols = this.DataTumbol()
        return (
            <View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { marginTop: 5 }]}>ชื่อ-นามสกุล</Text>
                    <TextInput
                        style={[stylesFont.FontSize4, stylesFont.FontFamilyText, { height: 40 }]}
                        placeholder="โปรดระบุ"
                        maxLength={30}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { marginTop: 5 }]}>หมายเลขโทรศัพท์</Text>
                    <TextInput
                        style={[stylesFont.FontSize4, stylesFont.FontFamilyText, { height: 40 }]}
                        placeholder="โปรดระบุ"
                        maxLength={10}
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {marginTop:5}]}>จังหวัด</Text>
                    <ModalDropdown
                        options={provinces}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4, {}]}
                        renderButtonText={(index) => { this.setState({ province: index }), this.getDataAmphoe(index) }}
                    >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {province}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {marginTop:5}]}>เขต/อำเภอ</Text>
                    <ModalDropdown
                        options={amphoes}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4, {}]}
                        renderButtonText={(index) => this.getDataTumbol(index)}
                    >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {amphoe}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {marginTop:5}]}>แขวง/ตำบล</Text>
                    <ModalDropdown
                        options={tumbols}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize4, {}]}
                        renderButtonText={(index) => this.setState({ tumbol: index })}
                    >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>
                            {tumbol}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {marginTop:5}]}>รหัสไปรษณีย์</Text>
                    <TextInput
                        style={[stylesFont.FontSize4, stylesFont.FontFamilyText, { height: 40 }]}
                        editable={false}
                        placeholder="รหัสไปรษณีย์"
                        value={this.state.zipcode}
                    />
                </View>
                <View style={[styles.Account_Box,{height:100}]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { marginTop: 5 }]}>รายละเอียดที่อยู่</Text>
                    <TextInput style={[stylesFont.FontSize4, stylesFont.FontFamilyText, { height: 40 ,width:'60%', height:60,}]}
                        multiline
                        editable
                        placeholder="โปรดระบุรายละเอียดบ้านเลขที่, ตึก, ชื่อถนน และ อื่นๆที่จำเป็น"
                        value={this.state.text}
                        onChangeText={(text) => this.setState({ text })}></TextInput>
                </View>
            </View >
        );
    }
}

///--------------------------------------------------------------------------///


export class Account_main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={[styles.Account_Box]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {marginTop:5}]}>ตั้งเป็นที่อยู่ตั้งต้น</Text>
                    <CheckBox
                        size={25}
                        checkedIcon='toggle-on'
                        checkedColor='#95F29F'
                        uncheckedIcon='toggle-off'
                        checked={this.state.item1}
                        onPress={() => this.setState({ item1: !this.state.item1 })}
                    />
                </View>
                <View style={styles.Account_Box}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {marginTop:5}]}>ตั้งเป็นที่อยู่ในการรับสินค้า</Text>
                    <CheckBox
                        size={25}
                        checkedIcon='toggle-on'
                        checkedColor='#95F29F'
                        uncheckedIcon='toggle-off'
                        checked={this.state.item2}
                        onPress={() => this.setState({ item2: !this.state.item2 })}
                    />
                </View>

            </View>
        );
    }
}

///--------------------------------------------------------------------------///

export class Button_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 210, }}>
            <TouchableOpacity>
              <View style={{ height: 40, backgroundColor: '#0A55A6', width: 350, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize2, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}
