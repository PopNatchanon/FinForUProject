///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, Picker, ScrollView,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import { Address_Customar } from '../../src_profile/src_Setting/Setting_Topic';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleStoreMe
import stylesMain from '../../../style/StylesMainScreen';
import stylesFont from '../../../style/stylesFont';
import stylesLogin from '../../../style/stylesLoginScreen';
import stylesStoreMe from '../../../style/stylestoreMe-src/styleStoreMeScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> Main
import { AppBar1 } from '../../MainScreen';

export default class Setting_TopicStore extends Component {
    PathList() {
        const selectedIndex = this.props.navigation.getParam('selectedIndex')
        switch (selectedIndex) {
            case 0:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification navigation={this.props.navigation} />
                        {/* แก้ไขเอกสารการจดแจ้ง */}
                    </View>
                )
            case 1:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขบัญชีธนาคาร' saveBar />
                        <Edit_Bank navigation={this.props.navigation} />
                        {/* แก้ไขบัญชีธนาคาร */}
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} />
                        {/* หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า */}
                    </View>
                )
            case 3:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} DetailHead='สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม' />
                    </View>
                )
            case 4:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} DetailHead='ใบทะเบียนภาษีมูลค่าเพิ่ม' />
                    </View>
                )
            case 5:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} DetailHead='ใบจดทะเบียนเครื่องหมายการค้า' />
                    </View>
                )
            case 6:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} DetailHead='หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)' />
                    </View>
                )
            case 7:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} DetailHead='สำเนาบัญชีธนาคารของผู้ขาย' />
                    </View>
                )
            case 8:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเอกสารการจดแจ้ง' saveBar />
                        <Notification_From navigation={this.props.navigation} DetailHead='สำเนาบัญชีธนาคารของผู้ขาย' />
                    </View>
                )
            case 9:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='ที่อยู่ร้านค้าของฉัน' />
                        <Setting_Address_Store navigation={this.props.navigation} />
                    </View>
                )
            case 10:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='เพิ่มเลขพัสดุ' />
                        <Up_Code_Number />
                    </View>
                )
            case 11:
                return (
                    <View>
                        <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขเลขพัสดุ' />
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
        return (
            <View>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขบัญชีธนาคาร</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 1 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>บัญชีธนาคาร</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={[stylesStoreMe.StoreMe_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 5 }]}>แก้ไขเอกสารจดแจ้ง</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 2 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 3 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 4 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบทะเบียนภาษีมูลค่าเพิ่ม</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 5 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>ใบจดทะเบียนเครื่องหมายการค้า</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 6 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Setting_TopicStore', { selectedIndex: 7 })}>
                    <View style={stylesStoreMe.StoreMe_Setting_BoxTopic}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { margin: 5 }]}>สำเนาบัญชีธนาคารของผู้ขาย</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
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
        };
    }
    render() {
        return (
            <View>
                <View style={{ padding: 10 }}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อธนาคาร</Text>
                    <View style={stylesStoreMe.Edit_Box}>
                        <Picker
                            selectedValue={this.state.language}
                            style={[stylesFont.FontFamilyText, { width: '100%' }]}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="กรุณาเลือกธนาคาร" value="java" />
                            <Picker.Item label="ธนาคารกรุงเทพ" value="java" />
                            <Picker.Item label="ธนาคารทหารไทย" value="js" />
                            <Picker.Item label="ธนาคารกสิกรไทย" value="js1" />
                            <Picker.Item label="ธนาคารไทยพานิชย์" value="js2" />
                            <Picker.Item label="ธนาคารกรุงศรี" value="js3" />
                            <Picker.Item label="ธนาคารธนชาต" value="js4" />
                            <Picker.Item label="ธนาคารกรุงไทย" value="js5" />
                        </Picker>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>หมายเลขบัญชีธนาคาร</Text>
                    <View style={stylesStoreMe.Edit_Box}>
                        <TextInput
                            style={stylesFont.FontFamilyText}
                            fontSize={15}
                            placeholder="กรุณากรอกหมายเลขบัญชีธนาคาร"
                            multiline
                            editable
                            maxLength={15}
                            value={this.state.NumberBank}
                            onChangeText={(NumberBank) => this.setState({ NumberBank })}></TextInput>
                    </View>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { margin: 10 }]}>ชื่อบัญชีธนาคาร</Text>
                    <View style={stylesStoreMe.Edit_Box}>
                        <TextInput
                            style={stylesFont.FontFamilyText}
                            fontSize={15}
                            placeholder="กรุณากรอกชื่อบัญชีธนาคาร"
                            multiline
                            editable
                            maxLength={15}
                            value={this.state.NameBank}
                            onChangeText={(NameBank) => this.setState({ NameBank })}></TextInput>
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
            console.log('Response = ', response);
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
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
            console.log('Response = ', response);
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item))
            this.setState({ avatarSource })
        });
    }
    // UploadImageData = () => {
    //     const { avatarSource } = this.state
    //     console.log('avatarSource2222')
    //     console.log(avatarSource)
    //     var uri = [ip, 'sql/uploadimage/updateimage.php'].join('/')
    //     avatarSource && (
    //         fetch(uri, {
    //             method: "POST",
    //             body: avatarSource
    //         })
    //             .then(response => response.json())
    //             .then(response => {
    //                 console.log("upload succes", response);
    //                 alert("Upload success!");
    //                 this.setState({ avatarSource: null });
    //             })
    //             .catch(error => {
    //                 console.log("upload error", error);
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
                                        {/* console.log(item) */ }
                                        return (
                                            <TouchableOpacity onPress={() => this.UploadImageSingle(index)} key={index}>
                                                <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                                                    <FastImage
                                                        source={{ uri: item.path }}
                                                        style={[stylesMain.ItemCenterVertical, { height: '100%', width: '100%' }]}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }),
                                    avatarSource.length < 7 &&
                                    <TouchableOpacity onPress={this.UploadImageMultiple} key={'upload'}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                                            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                                <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ] :
                                    <TouchableOpacity onPress={this.UploadImageMultiple}>
                                        <View style={[stylesMain.ItemCenter, { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: '#0A55A6', borderWidth: 1, }]}>
                                            <View style={[stylesMain.ItemCenterVertical, stylesMain.ItemCenter]}>
                                                <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                                                <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
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
        return (
            <View>
                <Address_Customar MainAddress />
                <Address_Customar />
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 475 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Customer_account')}>
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
                    <View style={stylesStoreMe.Up_Code_Number_BoxTextInput}>
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
                    <View style={[stylesStoreMe.BottomSheet_Botton, { paddingTop: 15 }]}>
                        <TouchableOpacity>
                            <View style={stylesStoreMe.BottomSheet_Botton_cancel}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ยกเลิก</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleOpen}>
                            <View style={stylesStoreMe.BottomSheet_Botton_OK}>
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
                        <SCLAlertButton theme="default" textStyle={stylesFont.FontFamilyText} onPress={this.handleClose} containerStyle={{ width: 150, }}>ยกเลิก</SCLAlertButton>
                        <SCLAlertButton theme="success" textStyle={stylesFont.FontFamilyText} onPress={this.handleClose} containerStyle={{ width: 150, }}>ยืนยัน</SCLAlertButton>
                    </View>
                </SCLAlert>
            </View>
        );
    }
}
