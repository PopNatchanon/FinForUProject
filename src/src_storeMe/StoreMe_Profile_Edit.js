import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    requireNativeComponent,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import NumberFormat from 'react-number-format';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../../style/stylestoreMe-src/styleStoreMeScreen';
import { CheckBox } from 'react-native-elements';
import { ip } from '../../navigator/IpConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppBar1 } from '../MainScreen';

export const { width, height } = Dimensions.get('window');

export default class StoreMe_Profile_Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#E9E9E9', }}>
                <AppBar1 backArrow  navigation={this.props.navigation} titleHead='แก้ไขรายละเอียดร้านค้า' />
                <ScrollView>
                    <StoreMe_SettingImage />
                    <StoreMe_Detail />
                    <StoreMe_SettingButton />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// ///------------------------------------------------------------------------------///

// export class Appbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     render() {
//         return (
//             <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 50, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, }} >
//                 <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
//                     <IconEntypo name='chevron-left' size={35} color='#0A55A6' />
//                 </TouchableOpacity>
//                 <Text style={{ marginTop: 10, fontSize: 16, }} >แก้ไขรายละเอียดร้านค้า</Text>
//                 <Text style={{ marginTop: 10, fontSize: 16, color: '#0A55A6', }} >บันทึก</Text>
//             </View>
//         );
//     }
// }

///------------------------------------------------------------------------------///


export class StoreMe_SettingImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../../icon/bgprofile.jpg')}
                    style={{ width: '100%', height: 150, }}

                />
                <View style={{ paddingLeft: 20, }}>
                    <View style={{ height: 100, width: 100, backgroundColor: '#FFFFFF', borderRadius: 50, marginTop: -130, }}>
                    </View>

                    <View style={{ height: 30, width: 110, marginTop: -50, }}>
                        <View style={{ height: 30, width: 30, backgroundColor: '#C4C4C4', alignSelf: 'flex-end', borderRadius: 15, borderColor: '#FFFFFF', borderWidth: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <IconFeather name='camera' size={17} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#222222', height: 30, width: 100, opacity: 0.1, }}>
                        <Text style={{ textAlign: 'center', }}>แก้ไข</Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 40, flexDirection: 'row-reverse', marginTop: -50, }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ textAlign: 'right', fontSize: 16, marginRight: 10, color: '#FFFFFF' }}>แตะเพื่อเปลี่ยน</Text>
                            <IconFeather name='camera' size={20} color='#FFFFFF' style={{ marginRight: 20, }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------///

export class StoreMe_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 15, width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', }}>
                    <TextInput
                        style={{ height: 40, borderColor: '#ECECEC', borderWidth: 1, width: '95%' }}
                        placeholder=" ชื่อร้าน"
                        fontSize={15}
                        maxLength={40}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}>
                    </TextInput>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 5, width: '100%', height: 'auto', padding: 10, }}>
                    <Text>  คำอธิบายรูปภาพ</Text>
                
                        <TouchableOpacity>
                            <View style={{
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 10,
                                width: 130,
                                height: 100,
                                borderColor: '#0A55A6',
                                borderWidth: 1,
                            }}>
                                <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                                <Text style={{ color: '#0A55A6', fontSize: 12, }}>+เพิ่มรูปภาพ</Text>
                            </View>
                        </TouchableOpacity>
                    
                </View>
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 5, width: '100%', height: 150, alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{ height: 130, borderColor: '#ECECEC', borderWidth: 1, width: '95%' }}>
                        <TextInput
                            fontSize={15}
                            placeholder="รายละเอียด"
                            multiline
                            editable
                            // maxLength={5000}
                            value={this.state.Detail}
                            onChangeText={(Detail) => this.setState({ Detail })}></TextInput>
                    </View>
                </View>
            </View>

        );
    }
}

///------------------------------------------------------------------------------///

export class StoreMe_SettingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styles.StoreMe_Up_ProductDetail}>
                    <Text style={styles.StoreMe_Up_ProductDetail_Text}>โทรศัพท์</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Up_ProductDetail}>
                    <Text style={styles.StoreMe_Up_ProductDetail_Text}>E-mail</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Up_ProductDetail}>
                    <Text style={styles.StoreMe_Up_ProductDetail_Text}>เพจ Facebook</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={styles.StoreMe_Up_ProductDetail}>
                    <Text style={styles.StoreMe_Up_ProductDetail_Text}>เผยแพร่สินค้า</Text>
                    <CheckBox
                        size={30}
                        containerStyle={{ marginTop: -5 }}
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

///------------------------------------------------------------------------------///