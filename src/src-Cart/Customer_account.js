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
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { finip, ip } from '../../navigator/IpConfig';


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

        // console.log('tool:')
        // console.log(this.state.currentUser)
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
        if (itemValue != null) {
            this.setState({ province: itemValue });
            this.setState({ DataTumbols: [] })
            this.setState({ tumbol: null });
            this.setState({ amphoe: null })
            this.setState({ zipcode: null });
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
                    // console.log(responseJson)
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
    getDataTumbol(itemValue) {
        if (itemValue != null) {
            this.setState({ amphoe: itemValue })
            this.setState({ zipcode: itemValue.zipcode });
            const { currentUser } = this.props
            var dataBody = {
                id_customer: currentUser,
                value_amphur: itemValue.amphoe,
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
                    // console.log(responseJson)
                    this.setState({
                        DataTumbols: responseJson,
                    })
                })
                .catch((error) => {
                    console.error(error);
                })
        } else {
            this.setState({ DataTumbols: [] })
            this.setState({ tumbol: null });
            this.setState({ amphoe: null })
            this.setState({ zipcode: null });
        }
    }

    componentDidMount() {
        this.getDataProvince()
    }

    DataProvince() {
        return (
            this.state.DataProvinces.map((item) => {
                return (
                    <Picker.Item label={item.province} value={item.province} key={item.province} />
                )
            })
        )
    }
    DataAmphoe() {
        return (
            this.state.DataAmphoes.map((item) => {
                return (
                    <Picker.Item label={item.amphoe} value={item} key={item.amphoe} />
                )
            })
        )
    }
    DataTumbol() {
        return (
            this.state.DataTumbols.map((item) => {
                return (
                    <Picker.Item label={item.district} value={item.district} key={item.district} />
                )
            })
        )
    }

    render() {
        // console.log('///--------------------------------------------------------------///')
        // console.log(this.state)
        // console.log('///--------------------------------------------------------------///')
        let provinces = this.DataProvince()
        let amphoes = this.DataAmphoe()
        let tombols = this.DataTumbol()
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
                    <Picker
                        selectedValue={this.state.province}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.getDataAmphoe(itemValue);
                        }}>
                        <Picker.Item label="จังหวัด" />
                        {provinces}
                    </Picker>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>เขต/อำเภอ</Text>
                    <Picker
                        selectedValue={this.state.amphoe}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.getDataTumbol(itemValue);
                        }}>
                        <Picker.Item label="เขต/อำเภอ" />
                        {amphoes}
                    </Picker>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>แขวง/ตำบล</Text>
                    <Picker
                        selectedValue={this.state.tumbol}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ tumbol: itemValue })
                        }>
                        <Picker.Item label="แขวง/ตำบล" />
                        {tombols}
                    </Picker>
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
            </View>
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
