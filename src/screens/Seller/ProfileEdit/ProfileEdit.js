///----------------------------------------------------------------------------------------------->>>> React
import React, { useRef, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
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
///----------------------------------------------------------------------------------------------->>>> stylesSeller
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen';
import stylesProfileTopic from '../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6, } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, ItemCenterVertical, SafeAreaViews } = stylesMain;
const { HeadbarImage, } = stylesProfile;
const { Edit_Profile, } = stylesProfileTopic;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
function ProfileEdit(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='แก้ไขรายละเอียดร้านค้า' saveBar />
        <ScrollView>
            <Seller_SettingImage />
            <Seller_Up_Image />
            <Seller_Detail />
            <Seller_SettingButton />
        </ScrollView>
        <ExitApp {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export let Seller_SettingImage = (props) => {
    const { image, image_path, sendImageBackground, sendImageProfile } = props;
    const [activeAvatarSource, setActiveAvatarSource] = useState(false);
    const [avatarSource2, setAvatarSource2] = useState([]);
    const [avatarSource3, setAvatarSource3] = useState([]);
    const image_User = `${finip}/${image_path}/${image}`;
    activeAvatarSource && setActiveAvatarSource(false);
    let UploadImageBackground = () => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            setActiveAvatarSource(true); setAvatarSource2(response); sendImageBackground(response);
        });
    };
    let UploadImageProfile = () => {
        const options = { width: 200, height: 200, includeBase64: true, cropping: true, };
        ImagePicker.openPicker(options).then(response => {
            setActiveAvatarSource(true); setAvatarSource3(response); sendImageProfile(response);
        });
    };
    return <View>
        <View>
            <View style={stylesProfile.HeadbarImage}>
                {avatarSource2 ? <FastImage source={{ uri: avatarSource2.path }} style={stylesProfile.HeadbarImage} /> : null}
            </View>
            <View style={stylesSeller.Seller_SettingImageEdit_BG}>
                <TouchableOpacity onPress={() => UploadImageBackground()}>
                    <View style={FlexRow}>
                        <Text style={[FontFamilyBold, FontSize5, { textAlign: 'right', color: '#FFFFFF' }]}>
                            แตะเพื่อเปลี่ยน</Text>
                        <IconFeather name='camera' size={20} color='#FFFFFF' style={{ marginHorizontal: 10, }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ paddingLeft: 20, }}>
            <View style={[stylesSeller.Seller_SettingImage, ItemCenter]}>
                <FastImage source={{ uri: avatarSource3?.path ?? image_User ?? '' }} style={[ItemCenterVertical,
                    { height: '100%', width: '100%', borderRadius: 50, }]} />
            </View>
            <View style={stylesSeller.Seller_SettingImageIconBox}>
                <TouchableOpacity onPress={() => UploadImageProfile()}>
                    <View style={stylesSeller.Seller_SettingImageIconBox_Camara}>
                        <IconFeather name='camera' size={17} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export let Seller_Up_Image = (props) => {
    const [activeAvatarSource, setActiveAvatarSource] = useState([]);
    const [avatarSource, setAvatarSource] = useState([]);
    const [name, setName] = useState(undefined);
    activeAvatarSource && setActiveAvatarSource(false);
    let UploadImageSingle = (index) => {
        const { avatarSource } = this.state;
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response; setActiveAvatarSource(true); setAvatarSource(avatarSource);
        });
    };
    let UploadImageMultiple = () => {
        const { avatarSource } = this.state
        const options = { multiple: true, includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item));
            setActiveAvatarSource(true); setAvatarSource(avatarSource);
        });
    };
    let UploadImageData = () => {
        const { avatarSource } = this.state;
        var uri = `${ip}/sql/uploadimage/updateimage.php`;
        avatarSource && (
            fetch(uri, {
                method: "POST",
                body: avatarSource
            }).then(response => response.json()).then(response => {
                alert("Upload success!");
                setAvatarSource(null);
            }).catch(error => {
                alert("Upload failed!");
            })
        );
    };
    return <View style={FrameBackground}>
        <View style={[FrameBackground, ItemCenter, { paddingVertical: 5, marginTop: 15 }]}>
            <TextInput style={[FontFamilyText, FontSize5, stylesSeller.Seller_Detail_TextInput, { height: 50 }]}
                placeholder=" ชื่อร้าน" maxLength={40} value={name} onChangeText={(value) => setName(value)}>
            </TextInput>
        </View>
        <View style={FrameBackground}>
            <Text style={[FontFamilyText, FontSize4]}>  คำอธิบายรูปภาพ</Text>
            <ScrollView horizontal>
                {avatarSource ?
                    <>
                        {avatarSource.map((item, index) => {
                            return <TouchableOpacity onPress={() => UploadImageSingle(index)} key={index}>
                                <View style={[ItemCenter,
                                    { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                    <FastImage source={{ uri: item.path }}
                                        style={[ItemCenterVertical, { height: '100%', width: '100%' }]} />
                                </View>
                            </TouchableOpacity>;
                        })}
                        {avatarSource.length < 7 && <TouchableOpacity onPress={() => UploadImageMultiple()} key={'upload'}>
                            <View style={[ItemCenter,
                                { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                                <View style={[ItemCenterVertical, ItemCenter]}>
                                    <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                    <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>
                                        +เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                    </> :
                    <TouchableOpacity onPress={() => UploadImageMultiple()}>
                        <View style={[ItemCenter,
                            { marginTop: 10, marginLeft: 10, height: 150, width: 150, borderColor: mainColor, borderWidth: 1, }]}>
                            <View style={[ItemCenterVertical, ItemCenter]}>
                                <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                                <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>
                                    +เพิ่มรูปภาพ/วีดีโอ</Text>
                            </View>
                        </View>
                    </TouchableOpacity>}
            </ScrollView>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export let Seller_Detail = (props) => {
    const [detail, setDetail] = useState(undefined);
    return <View>
        {/* <View style={[FrameBackground, { paddingVertical: 5, marginTop: 5 }]}>
                    <TouchableOpacity>
                        <View style={stylesSeller.Seller_Detail_BoxUp_Image}>
                            <IconAntDesign RightItem name='camerao' size={35} color={mainColor} />
                            <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
        <View style={[FrameBackground, ItemCenter, { paddingVertical: 5, marginTop: 5 }]}>
            <View style={[stylesSeller.Seller_Detail_TextInput, { height: 130 }]}>
                <TextInput style={[FontFamilyText, FontSize5]} placeholder="รายละเอียด" multiline editable
                    value={detail} onChangeText={(value) => setDetail(value)}></TextInput>
            </View>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export let Seller_SettingButton = (props) => {
    const [phone, setPhone] = useState(undefined);
    const [release, setRelease] = useState(false);
    const Phone_numberSheet = useRef(null);
    let Phone_numberSheetBody = <>
        <View style={Edit_Profile}>
            <Text style={[FontFamilyBold, FontSize5]}>เบอร์โทรศัพท์</Text>
            <View style={Edit_Profile_Box}>
                <TextInput fontSize={15} placeholder="เบอร์โทรศัพท์" maxLength={10} value={phone} onChangeText={(value) =>
                    setPhone(value)} />
            </View>
        </View>
        <TouchableOpacity>
            <View style={Edit_Profile_Button_Save}>
                <Text style={[FontFamilyText, FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </>;
    return <View>
        <BottomSheet ref={Phone_numberSheet} height={200} duration={250}
            customStyles={{ container: { paddingTop: 20, alignItems: "center", } }}>
            {Phone_numberSheetBody}
        </BottomSheet>
        <TouchableOpacity onPress={() => Phone_numberSheet.current.open()}>
            <View style={stylesSeller.Seller_Up_ProductDetail}>
                <Text style={[FontFamilyText, FontSize5]}>โทรศัพท์</Text>
                <IconEntypo name='chevron-right' size={35} color={mainColor} />
            </View>
        </TouchableOpacity>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5]}>เพจ Facebook</Text>
            <IconEntypo name='chevron-right' size={35} color={mainColor} />
        </View>
        <View style={stylesSeller.Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5]}>เผยแพร่สินค้า</Text>
            <CheckBox size={30} containerStyle={{ marginTop: -5 }} checkedIcon='toggle-on' checkedColor='#95F29F'
                uncheckedIcon='toggle-off' checked={release} onPress={() => setRelease(!release)} />
        </View>
    </View>;
};