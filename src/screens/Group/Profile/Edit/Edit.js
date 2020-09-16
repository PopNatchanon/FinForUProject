///----------------------------------------------------------------------------------------------->>>> React
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    Animated, Dimensions, SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList, Image, ListView,
} from 'react-native';
import { connect, useStore } from 'react-redux';
import {
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart,
} from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import BottomSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput } from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob'
import ModalDropdown from 'react-native-modal-dropdown';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesDetail from '../../../../style/StylesDetailScreen';
import stylesMain, { mainColor, appBarColor } from '../../../../style/StylesMainScreen';
import stylesFont from '../../../../style/stylesFont';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
import stylesTopic from '../../../../style/styleTopic';
import stylesProfile from '../../../../style/StylesProfileScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import {
    GetServices, GetCoupon, TabBar, LoadingScreen, GetData, GetServicesBlob,
} from '../../../../customComponents/Tools';
import { ImageGallery, GenArray, StarReview, NavigationNavigate, AppBar, } from '../../../../customComponents';
import { TodayProduct, Slide, ExitAppModule } from '../../../Main/Main';
import { Store_Detail } from '../../../Main/RecommendStore/RecommendStore';
import Dash from 'react-native-dash';
import { ProductBox, FeedBox, } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip } from '../../../../navigator/IpConfig';
import LinearGradient from 'react-native-linear-gradient';
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({
    cartData: state.cartData, customerData: state.customerData, getFetchData: state.singleFetchDataFromService,
    reduxDataBody: state.activeFetchData
});
const mapDispatchToProps = ({
    activeCartList, cartListChecked, cartListCheckedAll, cartListUpdate, checkCustomer, fetchData, multiFetchData, setDataEnd,
    setDataRefresh, setDataStart, setFetchToStart
});
export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);
function PostFeed(props) {
    return <SafeAreaView>
        <AppBar {...props} backArrow saveBar />
        <Profile_Edit />
    </SafeAreaView>
}
///----------------------------------------------------------------------------------------------->>>>
export let Profile_Edit = (props) => {
    const [name, setName] = useState('');
    const [Details, setDetails] = useState('');
    const [website, setWebsite] = useState('');
    const [Address, setAddress] = useState('');
    const [Birthday, setBirthday] = useState('');
    const [InputGender, setGender] = useState(false);
    const [item1, setItem1] = useState(false)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const Address_SheetRef = useRef(null)
    const Birthday_SheetRef = useRef(null)
    const Gender_SheetRef = useRef(null)
    let getName = (value) => {
        setActiveData(true);
        setName(value);
    };
    let onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    let showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    return <ScrollView>
        {/* ที่อยู่ */}
        <BottomSheet ref={Address_SheetRef} height={150} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={stylesMain.ItemCenter}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>ที่อยู่</Text>
                </View>
                <View style={{ height: 100, borderWidth: 1, borderRadius: 5 }}>
                    <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={200}
                        value={Address} onChangeText={(value) => setAddress(value)}>
                    </TextInput>
                </View>
            </View>
        </BottomSheet>
        {/* วันเกิด */}
        <BottomSheet ref={Birthday_SheetRef} height={110} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={stylesMain.ItemCenter}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>วันเกิด</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => showMode('date')} style={stylesMain.ItemCenter}>
                        <View style={[stylesMain.FlexRow, stylesMain.ItemCenter,
                        { borderWidth: 2, width: '60%', borderRadius: 5, paddingVertical: 5, borderColor: '#C5C5C5' }]}>
                            <IconFontAwesome name='calendar' size={20} color='rgb(29, 70, 204)' />
                            <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6, { marginLeft: 10 }]}>
                                {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                        </View>
                    </TouchableOpacity>
                    {show && <DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="spinner"
                        onChange={(event, selectedDate) => onChange(event, selectedDate)} />}
                </View>
            </View>
        </BottomSheet>
        {/* เพศ */}
        <BottomSheet ref={Gender_SheetRef} height={100} duration={250}
            customStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, } }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5]}>เพศ</Text>
                <View style={stylesMain.FlexRow}>
                    <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={InputGender}
                        onPress={() => setGender({ InputGender: true, })} />
                    <IconFontisto name='male' size={20} style={{ marginTop: 15, marginLeft: -10, color: mainColor }} />
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize5, { marginTop: 15, marginLeft: 10 }]}>ชาย</Text>
                    <CheckBox size={25} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={InputGender}
                        onPress={() => setGender({ InputGender: false, })} />
                    <IconFontisto name='female' size={20} style={{ marginTop: 15, marginLeft: -10, color: '#ff1ac6' }} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginTop: 15, marginLeft: 10 }]}>หญิง</Text>
                </View>
            </View>
        </BottomSheet>
        <FastImage style={{ width: '100%', height: 150, }} source={{ uri: `${ip}/MySQL/uploads/slide/NewStore/luxury_shop3.jpg`, }}
            resizeMode={FastImage.resizeMode.cover} />
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={[stylesMain.FlexRow, { justifyContent: 'center', marginTop: -30, }]}>
                <FastImage style={{ height: 110, width: 110, borderRadius: 60, borderColor: '#FFFFFF', borderWidth: 3, }}
                    source={{ uri: `${ip}/MySQL/uploads/Resize/Promotion/002.jpg`, }} resizeMode={FastImage.resizeMode.cover} />
                <TouchableOpacity style={[stylesMain.ItemCenter, {
                    backgroundColor: '#C4C4C4', padding: 10, borderRadius: 20, borderColor: '#FFFFFF', borderWidth: 2, width: 40,
                    height: 40, left: -40, top: 70
                }]}>
                    <IconFeather name='camera' size={17} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>ชื่อ</Text>
            <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5 }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={30}
                    value={name} onChangeText={(value) => setName(value)}>
                </TextInput>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>ประวัติ</Text>
            <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, height: 150 }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={5000}
                    value={Details} onChangeText={(value) => setDetails(value)}>
                </TextInput>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, { marginLeft: 10, }]}>เว็บไซต์</Text>
            <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 }}>
                <TextInput style={[stylesFont.FontFamilyText, stylesFont.FontSize6]} multiline editable maxLength={30} value={website}
                    onChangeText={(value) => setWebsite(value)}>
                </TextInput>
            </View>
        </View>
        <View style={{ backgroundColor: '#C4C4C4' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { margin: 10 }]}>ข้อมูลโปรไฟล์</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>ที่อยู่</Text>
            <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                    <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { width: '65%' }]}>อำเภอเชียรใหญ่ เป็นอำเภอหนึ่งในจังหวัดนครศรีธรรมราช</Text>
                </View>
                <TouchableOpacity onPress={() => { Address_SheetRef.current.open() }}>
                    <IconFeather name='edit' size={20} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>วันเกิด</Text>
            <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                    <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>29 มิถุนายน ค.ศ. 1995</Text>
                </View>
                <TouchableOpacity onPress={() => { Birthday_SheetRef.current.open() }}>
                    <IconFeather name='edit' size={20} />
                </TouchableOpacity>
            </View>
            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6, { marginLeft: 10 }]}>เพศ</Text>
            <View style={[stylesMain.FlexRow, { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }]}>
                <View style={[stylesMain.FlexRow, { alignItems: 'center' }]}>
                    <CheckBox size={25} checkedIcon='toggle-on' checkedColor='#95F29F' uncheckedIcon='toggle-off' checked={item1} />
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize6]}>ชาย</Text>
                </View>
                <TouchableOpacity onPress={() => { Gender_SheetRef.current.open() }}>
                    <IconFeather name='edit' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>;
};