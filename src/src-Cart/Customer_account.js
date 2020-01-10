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


export default class Customer_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
                <Appbar navigation={this.props.navigation} />
                <Account />
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
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <IconAntDesign RightItem name='closecircleo' size={25} color='#0A55A6' style={{ marginLeft: 160, marginRight: 10, }} />
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
            name: '',
        };
    }

    render() {
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
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="จังหวัด" value="จังหวัด" />
                    </Picker>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>เขต/อำเภอ</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="เขต/อำเภอ" value="เขต/อำเภอ" />
                    </Picker>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>แขวง/ตำบล</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="แขวง/ตำบล" value="แขวง/ตำบล" />
                    </Picker>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>รหัสไปรษณีย์</Text>
                    <TextInput style={styles.TextInput, {
                    }}
                        placeholder="โปรดระบุ"
                        value={this.state.code}
                        onChangeText={(code) => this.setState({ code })}></TextInput>
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
