///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView, Image,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { Address_Customar } from '../../src_profile/src_Setting/Setting_Topic';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import ModalDropdown from 'react-native-modal-dropdown';
import NumberFormat from 'react-number-format';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesFont, { normalize } from '../../../style/stylesFont';
import stylesLogin from '../../../style/stylesLoginScreen';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar1 } from '../../../screens/MainScreen';
import { NavigationNavigateScreen, GetServices } from '../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> Main

export default class Setting_TopicStore extends Component {
    PathList() {
        const { navigation } = this.props
        const selectedIndex = navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification navigation={navigation} />
                        {/* แก้ไขเอกสารการจดแจ้ง */}
                    </View>
                )
            case 1:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='เพิ่มบัญชีธนาคาร' saveBar />
                        <Edit_Bank navigation={navigation} />
                        {/* แก้ไขบัญชีธนาคาร */}
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} />
                        {/* หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า */}
                    </View>
                )
            case 3:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} DetailHead='สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม' />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} DetailHead='ใบทะเบียนภาษีมูลค่าเพิ่ม' />
                    </View>
                )
            case 5:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} DetailHead='ใบจดทะเบียนเครื่องหมายการค้า' />
                    </View>
                )
            case 6:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} DetailHead='หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)' />
                    </View>
                )
            case 7:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} DetailHead='สำเนาบัญชีธนาคารของผู้ขาย' />
                    </View>
                )
            case 8:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={navigation} DetailHead='สำเนาบัญชีธนาคารของผู้ขาย' />
                    </View>
                )
            case 9:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='ที่อยู่ร้านค้าของฉัน' />
                        <Setting_Address_Store navigation={navigation} />
                    </View>
                )
            case 10:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='เพิ่มเลขพัสดุ' />
                        <Up_Code_Number />
                    </View>
                )
            case 11:
                return (
                    <View>
                        <AppBar1 backArrow navigation={navigation} titleHead='แก้ไขเลขพัสดุ' />
                        <Up_Code_Number />
                    </View>
                )
        }
    }
    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>{this.PathList()}</SafeAreaView>
        );
    }
}
///----------------------------------------แก้ไขเอกสารการจดแจ้ง--------------------------------------///
export class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขบัญชีธนาคาร</Text>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 1 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>บัญชีธนาคาร</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <View style={[stylesSeller.Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขเอกสารจดแจ้ง</Text>
                </View>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 2 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                            หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 3 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                            สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 4 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบทะเบียนภาษีมูลค่าเพิ่ม</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 5 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบจดทะเบียนเครื่องหมายการค้า</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 6 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>
                            หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationNavigateScreen({
                    goScreen: 'Setting_TopicStore', setDate: { selectedIndex: 7 }, navigation
                })}>
                    <View style={stylesSeller.Seller_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>สำเนาบัญชีธนาคารของผู้ขาย</Text>
                        <IconEntypo name='chevron-right' size={35} color={mainColor} />
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}
///----------------------------------------แก้ไขบัญชีธนาคาร--------------------------------------///
export class Edit_Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetServices: true,
            NameBank: 'กรุณาเลือกธนาคาร',
            NumberBank: '',
        };
    }
    getData = (dataService) => {
        this.setState({ activeGetServices: false, dataService })
    }
    getPickerItem = (itemValue) => {
        const { dataService } = this.state
        if (itemValue != null) {
            this.setState({
                NameBank: itemValue,
                selectedItem: dataService.bank_data
                    .map((value) => { return value })
                    .filter((value2) => { return value2.name_bank == itemValue }),
            })
        }
    }
    setStateText = (value) => {
        const { NumberBank } = this.state
        if (NumberBank.length < value.length && Number.isInteger(value.slice(-1) * 1) == false) {
            value = NumberBank;
        } else {
                this.setState({ NumberBank: value })
        };
    }
    render() {
        const { activeGetServices, dataService, NameBank, selectedItem, } = this.state
        const uri = `${finip}/store_transfer/bank_data`
        activeGetServices == true && GetServices({ uriPointer: uri, getDataSource: this.getData.bind(this) })
        let pickerItem = []
        if (dataService) {
            dataService.bank_data.map((value) => {
                return pickerItem.push(value.name_bank)
            });
        };
        var url_image;
        selectedItem && (url_image = `${finip}/${selectedItem[0].image_path}/${selectedItem[0].image}`);
        return (
            <View>
                <View style={{ padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อธนาคาร</Text>
                    <View style={[stylesSeller.Edit_Box]}>
                        <ModalDropdown
                            options={pickerItem}
                            style={[stylesMain.ItemCenterVertical,]}
                            textStyle={{ fontSize: normalize(20) }}
                            dropdownTextStyle={[stylesFont.FontFamilyText, { width: width * 0.933, textAlign: 'center', fontSize: normalize(20) }]}
                            renderButtonText={this.getPickerItem.bind(this)}>
                            <View style={[stylesMain.ItemCenter, { flexDirection: 'row', width: width * 1 }]}>
                                <View style={[stylesMain.ItemCenter, {
                                    flexDirection: 'row', width: width * 0.8, marginLeft: -10, marginRight: -10
                                }]}>
                                    {
                                        selectedItem && selectedItem[0].image &&
                                        <Image source={{ uri: url_image }} style={{ width: 40, aspectRatio: 1, marginRight: 4 }} />
                                    }
                                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, {
                                        textAlign: 'center',
                                    }]}>
                                        {NameBank}</Text>
                                </View>
                                <IconAntDesign name='caretdown' style={[stylesMain.ItemCenterVertical]} />
                            </View>
                        </ModalDropdown>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หมายเลขบัญชีธนาคาร</Text>
                    <View style={stylesSeller.Edit_Box}>
                        <TextInput
                            style={stylesFont.FontFamilyText}
                            keyboardType='number-pad'
                            // format="###-#-#####-#"
                            fontSize={15}
                            placeholder="กรุณากรอกหมายเลขบัญชีธนาคาร"
                            editable
                            maxLength={10}
                            value={this.state.NumberBank}
                            onChangeText={this.setStateText.bind(this)}></TextInput>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อบัญชีธนาคาร</Text>
                    <View style={stylesSeller.Edit_Box}>
                        <TextInput
                            style={stylesFont.FontFamilyText}
                            fontSize={15}
                            placeholder="กรุณากรอกชื่อบัญชีธนาคาร"
                            multiline
                            editable
                            maxLength={15}
                            value={this.state.NameCusBank}
                            onChangeText={(NameCusBank) => this.setState({ NameCusBank })}></TextInput>
                    </View>
                    <View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หน้าบัญชีธนาคาร</Text>
                        <View style={[stylesMain.FlexRow, { height: 50, justifyContent: 'space-around', marginBottom: 10 }]}>
                            <View style={{ width: '48%', borderColor: '#E9E9E9', borderWidth: 1, backgroundColor: '#FFFFFF', borderRadius: 5 }}></View>
                            <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.FlexRow, { width: '48%', borderColor: mainColor, borderWidth: 2, backgroundColor: '#FFFFFF', borderRadius: 5 }]}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: mainColor }]}>อัพโหลด</Text>
                                <IconEntypo name='upload' size={30} style={{ color: mainColor, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize8]}>สามารถอัพโหลดเอกสารได้ 1 ฉบับ ความละเอียดได้ไม่ 5 MB รองรับ .PNG .JPEG </Text>
                    </View>
                </View>
            </View>

        );
    }
}
///----------------------------------------แก้ไขเอกสารการจดแจ้ง --------------------------------------///
export class Notification_From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            date: new Date(),
            DataYear: [],
            DataMo: [],
            DataDay: [],
            activeNow: 0,
            avatarSource: [],
        };
    }
    UploadImageSingle = (index) => {
        const { avatarSource } = this.state
        const options = {
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response
            this.setState({ avatarSource })
        });
    }
    UploadImageMultiple = () => {
        const { avatarSource } = this.state
        const options = {
            multiple: true,
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item))
            this.setState({ avatarSource })
        });
    }
    // UploadImageData = () => {
    //     const { avatarSource } = this.state
    //     var uri = `${ip}/sql/uploadimage/updateimage.php`
    //     avatarSource && (
    //         fetch(uri, {
    //             method: "POST",
    //             body: avatarSource
    //         })
    //             .then(response => response.json())
    //             .then(response => {
    //                 alert("Upload success!");
    //                 this.setState({ avatarSource: null });
    //             })
    //             .catch(error => {
    //                 alert("Upload failed!");
    //             })
    //     )
    // }
    componentDidMount() {
        this.getDataYear()
        this.getDataMo(new Date())
        this.getDataDay(new Date())
    }
    getDataYear() {
        var dates = new Date().getFullYear();
        var box = [];
        for (var min = 1950; min <= parseInt(dates); min = min + 1) {
            box.push(String(min))
        }
        this.setState({ DataYear: box, date: new Date() })
    }
    getDataMo(itemValue) {
        const { date } = this.state
        if (itemValue != null) {
            const item = String(itemValue)
            this.setState({ date: new Date(date).setFullYear(item) })
            var box = [];
            for (var min = 0; min <= 11; min = min + 1) {
                box.push(String(min))
            }
            this.setState({ DataMo: box })
        }
    }
    getDataDay(itemValue) {
        const { date } = this.state
        if (itemValue != null) {
            const item = String(itemValue)
            this.setState({ date: new Date(date).setMonth(item) })
            var box = [];
            for (var min = 1; min <= 31; min = min + 1) {
                box.push(String(min))
            }
            this.setState({ DataDay: box })
        }
    }
    DataYear() {
        return (
            this.state.DataYear.map((item) => {
                return (
                    <Picker.Item label={item} value={item} key={item} />
                )
            })
        )
    }
    DataMo() {
        var months_thai = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
            "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
        var months_eng = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ]
        return (
            this.state.DataMo.map((item) => {
                return (
                    <Picker.Item label={months_thai[item]} value={item} key={item} />
                )
            })
        )
    }
    DataDay() {
        return (
            this.state.DataDay.map((item) => {
                return (
                    <Picker.Item label={item} value={item} key={item} />
                )
            })
        )
    }
    render() {
        const { avatarSource } = this.state
        const { DetailHead } = this.props
        const { activeNow, } = this.state
        activeNow < 2 ?
            this.setState({ activeNow: activeNow + 1, date: new Date('2000') }) :
            null
        const { date, } = this.state;
        let DataDay = this.DataDay()
        let DataMo = this.DataMo()
        let DataYear = this.DataYear()
        var day = new Date(date).getDate()
        var month = new Date(date).getMonth();
        var year = new Date(date).getFullYear();
        return (
            <View>
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center', marginTop: 10 }]}> {DetailHead ? DetailHead : 'หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า'} </Text>
                    <View style={{ padding: 10 }}>
                        <ScrollView horizontal>
                            {
                                avatarSource ? [
                                    avatarSource.map((item, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.UploadImageSingle(index)} key={index}>
                                                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                                    <FastImage
                                                        source={{ uri: item.path }}
                                                        style={[stylesMain.ItemCenterVertical, { height: '100%', width: '100%' }]}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }),
                                    avatarSource.length < 7 &&
                                    <TouchableOpacity onPress={() => this.UploadImageMultiple()} key={'upload'}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                                <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ] :
                                    <TouchableOpacity onPress={() => this.UploadImageMultiple()}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                                <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                            }
                        </ScrollView>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, { width: 250, marginTop: 10, color: '#B7B7B7' }]}>*กรุณาอัพโหลดเอกสารที่เป็นปัจจุบัน หากไม่ทำรายการ เราจะทำการถอนการขายสินค้าของท่านบนเว็บของเรา</Text>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginTop: 10 }]}>โปรดระบุวันหมดอายุ</Text>
                        <View style={{ width: '100%', alignItems: 'center', }}>
                            <View style={[stylesLogin.DateBox, stylesMain.ItemCenter]}>
                                <View style={stylesMain.FlexRow}>
                                    <View style={[stylesLogin.DateBoxBody, { width: 70, }]}>
                                        <Picker
                                            selectedValue={String(day)}
                                            style={stylesMain.BoxProduct1Image}
                                            itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { backgroundColor: '#fff' }]}
                                            onValueChange={(itemValue, itemIndex) => {
                                                this.setState({ date: new Date(date).setDate(itemValue) })
                                            }}>
                                            {DataDay}
                                        </Picker>
                                    </View>
                                    <View style={[stylesLogin.DateBoxBody, { width: 120, }]}>
                                        <Picker
                                            selectedValue={String(month)}
                                            style={stylesMain.BoxProduct1Image}
                                            itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { backgroundColor: '#fff' }]}
                                            onValueChange={(itemValue, itemIndex) => {
                                                this.getDataDay(itemValue)
                                            }}>
                                            {DataMo}
                                        </Picker>
                                    </View>
                                    <View style={stylesLogin.DateBoxBody}>
                                        <Picker
                                            selectedValue={String(year)}
                                            style={stylesMain.BoxProduct1Image}
                                            itemStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6, { backgroundColor: '#fff' }]}
                                            onValueChange={(itemValue, itemIndex) => {
                                                this.getDataMo(itemValue)
                                            }}>
                                            {DataYear}
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///
export class Setting_Address_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Address_Customar MainAddress />
                <Address_Customar />
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 475 }}>
                    <TouchableOpacity onPress={() => NavigationNavigateScreen({ goScreen: 'Customer_account', navigation })}>
                        <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize3, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
///------------------------------------------------------------------------------///
export class Up_Code_Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleOpen = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    get _renderHeader() {
        return (
            <IconFontAwesome name='check' size={50} color='white' />
        )
    }
    render() {
        return (
            <View style={stylesMain.FrameBackground}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, { margin: 10 }]}>กรอกเลขพัสดุ</Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={stylesSeller.Up_Code_Number_BoxTextInput}>
                        <TextInput
                            style={stylesFont.FontFamilyText}
                            fontSize={15}
                            placeholder=""
                            multiline
                            editable
                            maxLength={50}
                            value={this.state.NumberCode}
                            onChangeText={(NumberCode) => this.setState({ NumberCode })}>
                        </TextInput>
                        <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize7, { color: '#FF0000' }]}>*กรุณาตรวจเลขพัสดุ </Text>
                    </View>
                    <View style={[stylesSeller.BottomSheet_Botton, { paddingTop: 15 }]}>
                        <TouchableOpacity>
                            <View style={stylesSeller.BottomSheet_Botton_cancel}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleOpen()}>
                            <View style={stylesSeller.BottomSheet_Botton_OK}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <SCLAlert
                    theme="success"
                    headerIconComponent={this._renderHeader}
                    show={this.state.show}
                    title="กรุณาตรวจสอบหมายเลขพัสดุ"
                    titleStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize2]}
                    subtitle="tnt1237174823403268 "
                    subtitleStyle={stylesFont.FontFamilyText}
                    onRequestClose={() => null}
                >
                    <View style={[stylesMain.FlexRow, stylesMain.ItemCenter, { justifyContent: 'space-around' }]}>
                        <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยกเลิก</SCLAlertButton>
                        <SCLAlertButton theme="success" textStyle={stylesFont.FontFamilyText} onPress={() => this.handleClose()} containerStyle={{ padding: 10, paddingHorizontal: 40 }}>ยืนยัน</SCLAlertButton>
                    </View>
                </SCLAlert>
            </View>
        );
    }
}