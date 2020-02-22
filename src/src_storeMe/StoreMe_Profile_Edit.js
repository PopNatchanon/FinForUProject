///----------------------------------------------------------------------------------------------->>>> React
import React, { Component } from 'react';
import {
    Dimensions, SafeAreaView, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
import BottomSheet from "react-native-raw-bottom-sheet";
import FastImage from 'react-native-fast-image';
import { CheckBox } from 'react-native-elements';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> stylesStoreMe
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesProfileTopic from '../../style/stylesProfile-src/stylesProfile_Topic';
import stylesProfile from '../../style/StylesProfileScreen';
import stylesStoreMe from '../../style/stylestoreMe-src/styleStoreMeScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> Main
import { AppBar1 } from '../MainScreen';


export default class StoreMe_Profile_Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={stylesMain.SafeAreaView}>
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขรายละเอียดร้านค้า' />
                <ScrollView>
                    <StoreMe_SettingImage />
                    <StoreMe_Detail />
                    <StoreMe_SettingButton />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

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
                    style={stylesProfile.HeadbarImage}

                />
                <View style={{ paddingLeft: 20, }}>
                    <View style={stylesStoreMe.StoreMe_SettingImage}>
                    </View>

                    <View style={stylesStoreMe.StoreMe_SettingImageIconBox}>
                        <View style={stylesStoreMe.StoreMe_SettingImageIconBox_Camara}>
                            <TouchableOpacity>
                                <IconFeather name='camera' size={17} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={stylesStoreMe.StoreMe_SettingBoxText_Edit}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'center', }]}>แก้ไข</Text>
                    </View>
                </View>

                <View style={stylesStoreMe.StoreMe_SettingImageEdit_BG}>
                    <TouchableOpacity>
                        <View style={stylesMain.FlexRow}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { textAlign: 'right', color: '#FFFFFF' }]}>แตะเพื่อเปลี่ยน</Text>
                            <IconFeather name='camera' size={20} color='#FFFFFF' style={{ marginHorizontal: 10, }} />
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
                <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { paddingVertical: 5, marginTop: 15 }]}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesStoreMe.StoreMe_Detail_TextInput, { height: 50 }]}
                        placeholder=" ชื่อร้าน"
                        maxLength={40}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}>
                    </TextInput>
                </View>
                <View style={[stylesMain.FrameBackground, { paddingVertical: 5, marginTop: 5 }]}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>  คำอธิบายรูปภาพ</Text>
                    <TouchableOpacity>
                        <View style={stylesStoreMe.StoreMe_Detail_BoxUp_Image}>
                            <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { paddingVertical: 5, marginTop: 5 }]}>
                    <View style={[stylesStoreMe.StoreMe_Detail_TextInput, { height: 130 }]}>
                        <TextInput
                            style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}
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
    Phone_numberSheetBody() {
        return (
            <>
                <View style={stylesProfileTopic.Edit_Profile}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เบอร์โทรศัพท์</Text>
                    <View style={stylesProfileTopic.Edit_Profile_Box}>
                        <TextInput
                            fontSize={15}
                            placeholder="เบอร์โทรศัพท์"
                            maxLength={10}
                            value={this.state.Phone}
                            onChangeText={(Phone) => this.setState({ Phone })}
                        />
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={stylesProfileTopic.Edit_Profile_Button_Save}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    render() {
        return (
            <View>
                <BottomSheet
                    ref={ref => {
                        this.Phone_numberSheet = ref;
                    }}
                    height={200}
                    duration={250}
                    customStyles={{
                        container: {
                            paddingTop: 20,
                            alignItems: "center",
                        }
                    }}
                >
                    {this.Phone_numberSheetBody()}
                </BottomSheet>
                <TouchableOpacity onPress={() => { this.Phone_numberSheet.open(); }}>
                    <View style={stylesStoreMe.StoreMe_Up_ProductDetail}>
                        <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>โทรศัพท์</Text>
                        <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                    </View>
                </TouchableOpacity>
                <View style={stylesStoreMe.StoreMe_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เพจ Facebook</Text>
                    <IconEntypo name='chevron-right' size={35} color='#0A55A6' />
                </View>
                <View style={stylesStoreMe.StoreMe_Up_ProductDetail}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5]}>เผยแพร่สินค้า</Text>
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