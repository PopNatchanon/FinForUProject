///----------------------------------------------------------------------------------------------->>>> React
import React, { useRef, useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
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
const { Edit_Profile, Edit_Profile_Box, Edit_Profile_Button_Save, } = stylesProfileTopic;
const { Seller_Detail_TextInput, Seller_SettingImage, Seller_SettingImageEdit_BG, Seller_SettingImageIconBox,
    Seller_SettingImageIconBox_Camara, Seller_Up_ProductDetail, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
function ProfileEdit(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow saveBar titleHead='แก้ไขรายละเอียดร้านค้า' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Seller_SettingImages />
        <Seller_Up_Image />
        <Seller_Detail />
        <Seller_SettingButton />
    </ScrollView>;
};
///------------------------------------------------------------------------------///
export const Seller_SettingImages = (props) => {
    const { image, image_path, sendImageBackground, sendImageProfile } = props;
    const [activeAvatarSource, setActiveAvatarSource] = useState(false);
    const [avatarSource2, setAvatarSource2] = useState([]);
    const [avatarSource3, setAvatarSource3] = useState([]);
    const Image1 = { uri: avatarSource2.path };
    const ImageUser = { uri: avatarSource3?.path ?? `${finip}/${image_path}/${image}` ?? '' };
    activeAvatarSource && setActiveAvatarSource(false);
    const UploadImageBackground = () => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            sendImageBackground(response); setActiveAvatarSource(true); setAvatarSource2(response);
        });
    };
    const UploadImageProfile = () => {
        const options = { cropping: true, height: 200, includeBase64: true, width: 200, };
        ImagePicker.openPicker(options).then(response => {
            sendImageProfile(response); setActiveAvatarSource(true); setAvatarSource3(response);
        });
    };
    return <View>
        <View>
            <View style={HeadbarImage}>
                {avatarSource2 ? <FastImage source={Image1} style={HeadbarImage} /> : null}
            </View>
            <View style={Seller_SettingImageEdit_BG}>
                <TouchableOpacity onPress={() => UploadImageBackground()}>
                    <View style={FlexRow}>
                        <Text style={[FontFamilyBold, FontSize5, { textAlign: 'right', color: '#FFFFFF' }]}>แตะเพื่อเปลี่ยน</Text>
                        <IconFeather name='camera' size={20} color='#FFFFFF' style={{ marginHorizontal: 10, }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ paddingLeft: 20, }}>
            <View style={[ItemCenter, Seller_SettingImage]}>
                <FastImage source={ImageUser} style={[ItemCenterVertical, { height: '100%', width: '100%', borderRadius: 50, }]} />
            </View>
            <View style={Seller_SettingImageIconBox}>
                <TouchableOpacity onPress={() => UploadImageProfile()}>
                    <View style={Seller_SettingImageIconBox_Camara}>
                        <IconFeather name='camera' size={17} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export const Seller_Up_Image = (props) => {
    const [activeAvatarSource, setActiveAvatarSource] = useState([]);
    const [avatarSource, setAvatarSource] = useState([]);
    const [name, setName] = useState(undefined);
    activeAvatarSource && setActiveAvatarSource(false);
    const UploadImageSingle = (index) => {
        const options = { includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            avatarSource[index] = response; setActiveAvatarSource(true);
            setAvatarSource(avatarSource);
        });
    };
    const UploadImageMultiple = () => {
        const options = { multiple: true, includeBase64: true };
        ImagePicker.openPicker(options).then(response => {
            response.map((item, index) => index + avatarSource.length <= 7 && avatarSource.push(item));
            setActiveAvatarSource(true); setAvatarSource(avatarSource);
        });
    };
    const UploadImageData = () => {
        const uri = `${ip}/sql/uploadimage/updateimage.php`;
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
            <TextInput maxLength={40} style={[FontFamilyText, FontSize5, Seller_Detail_TextInput, { height: 50 }]}
                placeholder=" ชื่อร้าน" value={name} onChangeText={(value) => setName(value)}>
            </TextInput>
        </View>
        <View style={FrameBackground}>
            <Text style={[FontFamilyText, FontSize4]}>คำอธิบายรูปภาพ</Text>
            <ScrollView horizontal>
                {avatarSource ?
                    <>
                        {avatarSource.map((v, i) => {
                            const Image1 = { uri: v.path };
                            return <TouchableOpacity key={i} onPress={() => UploadImageSingle(i)}>
                                <View style={[ItemCenter,
                                    { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
                                    <FastImage source={Image1} style={[ItemCenterVertical, { height: '100%', width: '100%' }]} />
                                </View>
                            </TouchableOpacity>
                        })}
                        {avatarSource.length < 7 && <TouchableOpacity key={'upload'} onPress={() => UploadImageMultiple()}>
                            <View style={[ItemCenter,
                                { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
                                <View style={[ItemCenterVertical, ItemCenter]}>
                                    <IconAntDesign color={mainColor} name='camerao' RightItem size={35} />
                                    <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                    </> :
                    <TouchableOpacity onPress={() => UploadImageMultiple()}>
                        <View style={[ItemCenter,
                            { borderColor: mainColor, borderWidth: 1, height: 150, marginLeft: 10, marginTop: 10, width: 150, }]}>
                            <View style={[ItemCenterVertical, ItemCenter]}>
                                <IconAntDesign color={mainColor} name='camerao' RightItem size={35} />
                                <Text style={[FontFamilyText, FontSize6, { color: mainColor }]}>+เพิ่มรูปภาพ/วีดีโอ</Text>
                            </View>
                        </View>
                    </TouchableOpacity>}
            </ScrollView>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export const Seller_Detail = (props) => {
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
        <View style={[FrameBackground, ItemCenter, { marginTop: 5, paddingVertical: 5, }]}>
            <View style={[Seller_Detail_TextInput, { height: 130 }]}>
                <TextInput editable multiline onChangeText={(v) => setDetail(v)} placeholder="รายละเอียด" style={[FontFamilyText, FontSize5]}
                    value={detail} />
            </View>
        </View>
    </View>;
};
///------------------------------------------------------------------------------///
export const Seller_SettingButton = (props) => {
    const [phone, setPhone] = useState(undefined);
    const [release, setRelease] = useState(false);
    const Phone_numberSheet = useRef(null);
    const Phone_numberSheetBody = <>
        <View style={Edit_Profile}>
            <Text style={[FontFamilyBold, FontSize5]}>เบอร์โทรศัพท์</Text>
            <View style={Edit_Profile_Box}>
                <TextInput fontSize={15} maxLength={10} onChangeText={(v) => setPhone(v)} placeholder="เบอร์โทรศัพท์" value={phone} />
            </View>
        </View>
        <TouchableOpacity>
            <View style={Edit_Profile_Button_Save}>
                <Text style={[FontFamilyText, FontSize4, { color: '#FFFFFF' }]}>บันทึก</Text>
            </View>
        </TouchableOpacity>
    </>;
    return <View>
        <BottomSheet customStyles={{ container: { alignItems: "center", paddingTop: 20, } }} duration={250} height={200}
            ref={Phone_numberSheet}>{Phone_numberSheetBody}</BottomSheet>
        <TouchableOpacity onPress={() => Phone_numberSheet.current.open()}>
            <View style={Seller_Up_ProductDetail}>
                <Text style={[FontFamilyText, FontSize5]}>โทรศัพท์</Text>
                <IconEntypo color={mainColor} name='chevron-right' size={35} />
            </View>
        </TouchableOpacity>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5]}>เพจ Facebook</Text>
            <IconEntypo color={mainColor} name='chevron-right' size={35} />
        </View>
        <View style={Seller_Up_ProductDetail}>
            <Text style={[FontFamilyText, FontSize5]}>เผยแพร่สินค้า</Text>
            <CheckBox size={30} checked={release} checkedColor='#95F29F' checkedIcon='toggle-on' containerStyle={{ marginTop: -5 }}
                onPress={() => setRelease(!release)} uncheckedIcon='toggle-off' />
        </View>
    </View>;
};