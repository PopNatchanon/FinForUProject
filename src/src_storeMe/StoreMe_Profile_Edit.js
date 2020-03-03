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
import ImagePicker from 'react-native-image-crop-picker';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
                <AppBar1 backArrow navigation={this.props.navigation} titleHead='แก้ไขรายละเอียดร้านค้า' saveBar />
                <ScrollView>
                    <StoreMe_SettingImage />
                    <StoreMe_Up_Image />
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
            avatarSource: [],
        };
    }
    UploadImageBackground = () => {
        const options = {
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            console.log('Response = ', response);
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({ avatarSource2: response })
        });
    }
    UploadImageProfile = () => {
        const options = {
            includeBase64: true
        };
        ImagePicker.openPicker(options).then(response => {
            console.log('Response = ', response);
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({ avatarSource3: response })
        });
    }
    render() {
        const { avatarSource2, avatarSource3 } = this.state
        return (
            <View>
                <View>
                    <View style={stylesProfile.HeadbarImage}>
                        {
                            avatarSource2 ?
                                <FastImage
                                    source={{ uri: avatarSource2.path }}
                                    style={stylesProfile.HeadbarImage}
                                /> :
                                null
                        }
                    </View>
                    <View style={stylesStoreMe.StoreMe_SettingImageEdit_BG}>
                        <TouchableOpacity onPress={this.UploadImageBackground} >
                            <View style={stylesMain.FlexRow}>
                                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { textAlign: 'right', color: '#FFFFFF' }]}>แตะเพื่อเปลี่ยน</Text>
                                <IconFeather name='camera' size={20} color='#FFFFFF' style={{ marginHorizontal: 10, }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingLeft: 20, }}>
                    <View style={[stylesStoreMe.StoreMe_SettingImage, stylesMain.ItemCenter]}>
                        {
                            avatarSource3 ?
                                <FastImage
                                    source={{ uri: avatarSource3.path }}
                                    style={[stylesMain.ItemCenterVertical, { height: '100%', width: '100%', borderRadius: 50, }]}
                                />
                                :
                                <IconFontAwesome5 name="user-alt" size={50} color='#1a3263' />
                        }
                    </View>
                    <View style={stylesStoreMe.StoreMe_SettingImageIconBox}>
                        <TouchableOpacity onPress={this.UploadImageProfile} >
                            <View style={stylesStoreMe.StoreMe_SettingImageIconBox_Camara}>
                                <IconFeather name='camera' size={17} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

///------------------------------------------------------------------------------///
export class StoreMe_Up_Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    UploadImageData = () => {
        const { avatarSource } = this.state
        console.log('avatarSource2222')
        console.log(avatarSource)
        var uri = [ip, 'sql/uploadimage/updateimage.php'].join('/')
        avatarSource && (
            fetch(uri, {
                method: "POST",
                body: avatarSource
            })
                .then(response => response.json())
                .then(response => {
                    console.log("upload succes", response);
                    alert("Upload success!");
                    this.setState({ avatarSource: null });
                })
                .catch(error => {
                    console.log("upload error", error);
                    alert("Upload failed!");
                })
        )
    }
    render() {
        const { avatarSource } = this.state
        // console.log('avatarSource')
        // console.log(avatarSource)
        return (
            <View style={stylesMain.FrameBackground}>
                <View style={[stylesMain.FrameBackground, stylesMain.ItemCenter, { paddingVertical: 5, marginTop: 15 }]}>
                    <TextInput
                        style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesStoreMe.StoreMe_Detail_TextInput, { height: 50 }]}
                        placeholder=" ชื่อร้าน"
                        maxLength={40}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}>
                    </TextInput>
                </View>
                <View style={stylesMain.FrameBackground}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize4]}>  คำอธิบายรูปภาพ</Text>
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
                </View>
                {/* <TouchableOpacity onPress={this.UploadImageData} style={stylesMain.ItemCenter}>
            <Text style={[{ width: 75, height: 40, borderWidth: 1, borderColor: '#456488', marginTop: 10, textAlign: 'center', textAlignVertical: 'center', color: '#fff', backgroundColor: '#456488' }]}>Upload</Text>
          </TouchableOpacity> */}
            </View>
        )
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

                {/* <View style={[stylesMain.FrameBackground, { paddingVertical: 5, marginTop: 5 }]}>
                    <TouchableOpacity>
                        <View style={stylesStoreMe.StoreMe_Detail_BoxUp_Image}>
                            <IconAntDesign RightItem name='camerao' size={35} color='#0A55A6' />
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { color: '#0A55A6' }]}>+เพิ่มรูปภาพ</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
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