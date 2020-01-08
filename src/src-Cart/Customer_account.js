import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/styleCart-src/styleCustomer_account';

export default class Customer_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#E9E9E9', flex: 1, }}>
                <Appbar />
                <Account />
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
            </View>
        );
    }
}

///--------------------------------------------------------------------------///


export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                onChangeText={(text) => this.state({ text })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>หมายเลขโทรศัพท์</Text>
                    <TextInput style={styles.TextInput, {
              }}
                placeholder="โปรดระบุ"
                onChangeText={(text) => this.state({ text })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>จังหวัด</Text>
                    <TextInput style={styles.TextInput, {
              }}
                placeholder="โปรดระบุ"
                onChangeText={(text) => this.state({ text })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>เขต/อำเภอ</Text>
                    <TextInput style={styles.TextInput, {
              }}
                placeholder="โปรดระบุ"
                onChangeText={(text) => this.state({ text })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>รหัสไปรษณีย์</Text>
                    <TextInput style={styles.TextInput, {
              }}
                placeholder="โปรดระบุ"
                onChangeText={(text) => this.state({ text })}></TextInput>
                </View>
                <View style={styles.Account_Box}>
                    <Text style={styles.Text}>รายละเอียดที่อยู่</Text>
                    <TextInput style={styles.TextInput, {
              }}
                placeholder="โปรดระบุรายละเอียดบ้านเลขที่, ตึก, ชื่อถนน และ อื่นๆที่จำเป็น"
                onChangeText={(text) => this.state({ text })}></TextInput>
                </View>
            </View>
        );
    }
}

///--------------------------------------------------------------------------///