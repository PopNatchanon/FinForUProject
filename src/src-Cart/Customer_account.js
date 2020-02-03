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
                <Appbar />
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
                <Text style={{ marginLeft: 10, fontSize: 15, }}>ที่อยู่ใหม่</Text>

                <View>
                    <IconAntDesign RightItem name='closecircleo' size={25} color='#0A55A6' style={{ marginLeft: 160, marginRight: 10, }} />
                </View>
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
                // console.log("DataProvince")
                // console.log(responseJson)
                this.setState({
                    DataProvinces: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    getDataAmphoe(itemValue) {
        console.log(itemValue)
        if (itemValue != null) {
            console.log('province: ' + itemValue + ' get amphoe')
            console.log('processing...')
            this.setState({ province: itemValue, DataTumbols: [], tumbol: 'แขวง/ตำบล', amphoe: 'เขต/อำเภอ', zipcode: null });
            const { currentUser } = this.props
            var dataBody = {
                id_customer: currentUser,
                value_province: itemValue,
            };
            // console.log(dataBody)
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
        console.log(itemValue)
        if (itemValue != null) {
            // console.log('amphoe: ' + itemValue + ' get tumbol')
            // console.log('processing...')
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
            // console.log(dataBody)
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
                    // console.log(responseJson)
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
        // console.log('this.state')
        // console.log(this.state)
        return (
            <View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>ชื่อ-นามสกุล</Text>
                    <TextInput style={styles.TextInput, {
                    }}
                        placeholder="โปรดระบุ"
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>หมายเลขโทรศัพท์</Text>
                    <TextInput style={styles.TextInput, {
                    }}
                        placeholder="โปรดระบุ"
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>จังหวัด</Text>
                    <ModalDropdown
                        options={provinces}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3, {}]}
                        renderButtonText={(index) => { this.setState({ province: index }), this.getDataAmphoe(index) }}
                    >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            {province}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>เขต/อำเภอ</Text>
                    <ModalDropdown
                        options={amphoes}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3, {}]}
                        renderButtonText={(index) => this.getDataTumbol(index)}
                    >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            {amphoe}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>แขวง/ตำบล</Text>
                    <ModalDropdown
                        options={tumbols}
                        style={stylesMain.ItemCenterVertical}
                        textStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3]}
                        dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize3, {}]}
                        renderButtonText={(index) => this.setState({ tumbol: index })}
                    >
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3]}>
                            {tumbol}</Text>
                    </ModalDropdown>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>รหัสไปรษณีย์</Text>
                    <TextInput
                        style={styles.TextInput}
                        editable={false}
                        placeholder="รหัสไปรษณีย์"
                        value={this.state.zipcode}
                    />
                </View>
                <View style={styles.Account_Box_Text}>
                    <Text style={styles.Text}>รายละเอียดที่อยู่</Text>
                    <TextInput style={styles.TextInput, {
                        width: '50%'
                    }}
                        multiline
                        editable
                        // numberOfLines={4}
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
            <View style={{ marginTop: 5, }}>
                <View style={styles.Account_main_Box}>
                    <Text style={styles.Text}>ตั้งเป็นที่อยู่ตั้งต้น</Text>
                    <CheckBox
                        size={30}
                        checkedIcon='toggle-on'
                        checkedColor='#95F29F'
                        uncheckedIcon='toggle-off'
                        checked={this.state.item1}
                        onPress={() => this.setState({ item1: !this.state.item1 })}
                    />
                </View>
                <View style={styles.Account_main_Box}>
                    <Text style={styles.Text}>ตั้งเป็นที่อยู่ในการรับสินค้า</Text>
                    <CheckBox
                        size={30}
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
            <View style={styles.Button_Bar}>
                <Text style={styles.Button_Bar_Text}>เพิ่มที่อยู่</Text>
            </View>
        );
    }
}
