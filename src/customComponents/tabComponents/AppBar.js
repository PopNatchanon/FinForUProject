///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    // ScrollView, 
    Text, TextInput, TouchableOpacity, View,
} from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
export const { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain, { color_up, mainColor, appBarColor, } from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetData, } from '../Tools';
import { NavigationNavigate, Rgba2hex } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, finip } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
class AppSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            cartMobile: 0,
            currentUser: undefined,
            text: undefined,
        }
    }
    componentDidMount() {
        const { activeGetCurrentUser } = this.state;
        activeGetCurrentUser && GetData({
            getSource: value => {
                this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser });
            }, getUser: true,
        });
    };
    render() {
        const {
            activeCartList, AIColor, backArrow, cartBar, chatBar, colorSet, filterBar, getFetchData, navigation, otherBar,
            searchBar, SearchText,
        } = this.props;
        let setSubmit = () => {
            text != undefined && text != ' ' &&
                NavigationNavigate({ goScreen: 'SearchScreen', setData: { SearchText: text }, navigation });
        };
        activeCartList && console.log('activeCartList(getFetchData[cart_mobile]?.data');
        activeCartList && console.log(getFetchData['cart_mobile']?.data);
        const AIconAntDesign = Animatable.createAnimatableComponent(IconAntDesign);
        const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo);
        const AIconFeather = Animatable.createAnimatableComponent(IconFeather);
        const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5);
        var allWidth = width - 20;
        backArrow && (allWidth -= 30);
        cartBar && (allWidth -= 30);
        chatBar && (allWidth -= 30);
        filterBar && (allWidth -= 30);
        otherBar && (allWidth -= 30);
        const colors = [];
        console.log('colorSet')
        console.log(colorSet)
        if (colorSet) {
            colorSet.map((value) => typeof value == 'object' ? colors.push(JSON.stringify(value)) : colors.push(value));
        };
        console.log('LinearGradient')
        console.log(colors)
        return <LinearGradient colors={colors} start={this.props.start} end={this.props.end}
            style={[stylesMain.Appbar, stylesMain.FlexRow, {
                width, borderWidth: 0, borderBottomWidth: 1, borderColor: colors[colors.length - 1],
                borderBottomColor: colors[colors.length - 1],
            }]}>
            {/* <AStatusBar backgroundColor={ABGColor ?? mainColor} translucent /> */}
            {backArrow && <View key={'backarrow'}>
                <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]} activeOpacity={1}
                    onPress={() => { NavigationNavigate({ goScreen: 'goBack', navigation }); }}>
                    <AIconEntypo name="chevron-left" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>
            </View>}
            {searchBar ?
                <TouchableOpacity key={'searchBar'} activeOpacity={1} style={{ marginRight: 3 }}>
                    <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical, { height: 30, }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: allWidth, }]}>
                            <TextInput style={[stylesMain.TextInput, stylesFont.FontFamilyText, stylesFont.FontSize5,
                            stylesFont.FontCenter]} placeholder="ค้นหาสินค้า/ร้านค้า" value={text} maxLength={30} onSubmitEditing={() =>
                                setSubmit()} onChangeText={value => setText(value)} />
                        </View>
                        <AIconAntDesign name="search1" size={18} style={[{ top: 4, left: allWidth - 25, position: 'absolute' }]} />
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity key={'searchBar'} activeOpacity={1}
                    style={{ marginRight: 3 }} onPress={() => NavigationNavigate({
                        goScreen: SearchText ? 'goBack' : 'SearchScreen', setData: { modeStore: false }, navigation
                    })}>
                    <View style={[stylesMain.FlexRow, stylesMain.AppbarBody, stylesMain.ItemCenterVertical,
                    { height: 30, borderWidth: 1, borderColor: '#ffbf00', }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { height: 30, width: allWidth, }]}>
                            <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesFont.FontCenter,
                            stylesMain.ItemCenterVertical]}>{SearchText ?? 'ค้นหาสินค้า/ร้านค้า'}</Text>
                        </View>
                        <AIconAntDesign name="search1" size={18} style={[{ top: 4, left: allWidth - 25, position: 'absolute', }]} />
                    </View>
                </TouchableOpacity>}
            {<View key={'storebar'} style={[stylesMain.ItemCenter, stylesMain.FlexRow, stylesMain.ItemCenterVertical]}>
                {filterBar && <TouchableOpacity key='filterBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical,
                { width: 30, }]} onPress={null/*() => navigation.push('CartScreen')*/}>
                    <AIconFeather name="filter" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {otherBar && <TouchableOpacity key='otherBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical,
                { width: 30, }]} onPress={null/*() => navigation.push('CartScreen')*/}>
                    <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {chatBar && <TouchableOpacity key='chatBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}
                    onPress={() => currentUser ?
                        NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation }) :
                        NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
                    <AIconAntDesign name="message1" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {cartBar && <TouchableOpacity key='cartBar' style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}
                    onPress={() => currentUser ?
                        NavigationNavigate({ goScreen: 'CartScreen', navigation }) :
                        NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
                    <AIconAntDesign name="shoppingcart" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
            </View>}
        </LinearGradient>;
    };
};
class AppNoSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            currentUser: undefined,
            text: undefined,
        };
    };
    componentDidMount() {
        const { activeGetCurrentUser } = this.state;
        activeGetCurrentUser && GetData({
            getSource: value => {
                this.setState({ activeGetCurrentUser: false, currentUser: value.currentUser });
            }, getUser: true,
        });
    };
    render() {
        const {
            backArrow, backNavigation, ButtomDeleteAll, chatBar, colorSet, deleteBar, getActivePost, goToTop, navigation, propsFunction,
            postBar, saveBar, searchBar, settingBar, storeBar, titleHead, UpBankBar, selectshare,
        } = this.props;
        console.log('colorSet')
        console.log(colorSet)
        const colors = [];
        if (colorSet) {
            colorSet.map((value) => typeof value == 'object' ? colors.push(JSON.stringify(value)) : colors.push(value));
        };
        return <LinearGradient colors={colors} start={this.props.start} end={this.props.end}
            style={[stylesMain.Appbar, stylesMain.FlexRow, {
                width, borderWidth: 0, borderBottomWidth: 1, borderColor: colors[colors.length - 1],
                borderBottomColor: colors[colors.length - 1],
            }]}>
            {/* <AStatusBar backgroundColor={mainColor} /> */}
            <View style={stylesMain.FlexRow}>
                {backArrow &&
                    <TouchableOpacity style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 50, height: 50 }]}
                        activeOpacity={1} onPress={() => goToTop ?
                            NavigationNavigate({ goScreen: 'popToTop', navigation }) :
                            backNavigation ?
                                [route.params.backNavigation('goBack'),
                                NavigationNavigate({ goScreen: 'goBack', navigation })] :
                                NavigationNavigate({ goScreen: 'goBack', navigation })}>
                        <IconEntypo style={[stylesStore.Icon_appbar, { color: AIColor }]} name="chevron-left" size={30} />
                    </TouchableOpacity>}
                <Text style={[stylesStore.Text_appbar, stylesFont.FontSize4, stylesFont.FontFamilyBold,
                stylesMain.ItemCenterVertical]}>{titleHead ?? ''}</Text>
                {selectshare &&
                    <View style={{ marginVertical: 5 }}>
                        <ModalDropdown
                            options={['แชร์ไปยัง FIN', 'แชร์ไปยัง กลุ่ม']}
                            defaultValue={
                                <Text style={[stylesStore.Text_appbar, stylesFont.FontSize6, stylesFont.FontFamilyBold,
                                stylesMain.ItemCenterVertical]}>แชร์ไปยัง
                            <IconEntypo name='chevron-down' size={25} style={{ color: '#FFFFFF' }} /></Text>
                            }
                            textStyle={[stylesStore.Text_appbar, stylesFont.FontSize4, stylesFont.FontFamilyBold,
                            stylesMain.ItemCenterVertical, { color: '#FFFFFF' }]}
                            dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                            dropdownStyle={[stylesMain.ItemCenter, { borderColor: '#ECECEC', borderWidth: 1, borderRadius: 5, width: 100, height: 90 }]}>
                        </ModalDropdown>
                    </View>}
            </View>
            <View style={stylesMain.FlexRow}>
                {searchBar && <TouchableOpacity key={'searchBar'} style={[stylesMain.ItemCenter, { width: 40 }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'SearchScreen', setData: { modeStore: false }, navigation })}>
                    <IconAntDesign RightItem name="search1" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8 }]} />
                </TouchableOpacity>}
                {settingBar && <TouchableOpacity key={'settingBar'} style={[stylesMain.ItemCenter, { width: 40 }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Setting', navigation })}>
                    <IconMaterialCommunityIcons name="settings-outline" size={25} style={[stylesStore.Icon_appbar,
                    stylesMain.ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {chatBar && <TouchableOpacity key={'chatBar'} style={[stylesMain.ItemCenter, { width: 40 }]} onPress={() =>
                    currentUser ?
                        NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 1 }, navigation }) :
                        NavigationNavigate({ goScreen: 'LoginScreen', navigation, passHome: true })}>
                    <IconAntDesign RightItem name="message1" size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8 }]} />
                </TouchableOpacity>}
                {storeBar && <TouchableOpacity key={'storeBar'} style={[stylesMain.ItemCenter, { width: 40 }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Profile_Topic', setData: { selectedIndex: 3 }, navigation })}>
                    <IconFontAwesome5 RightItem name="store" size={20} style={[stylesStore.Icon_appbar,
                    stylesMain.ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {postBar && <TouchableOpacity key={'postBar'} style={[stylesMain.ItemCenter, { width: 60 }]} onPress={() =>
                    getActivePost(true)}>
                    <Text style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold,
                    stylesFont.FontSize4, { width: 60, marginRight: 8, }]}>โพสต์</Text>
                </TouchableOpacity>}
                {saveBar && <TouchableOpacity key={'saveBar'} style={[stylesMain.ItemCenter, { width: 60 }]}>
                    <Text style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold, stylesFont.FontSize4,
                    { width: 60, marginRight: 8, }]}>บันทึก</Text>
                </TouchableOpacity>}
                {UpBankBar && <TouchableOpacity key={'UpBankBar'} style={[stylesMain.ItemCenter, { width: 80 }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Setting_TopicStore', setData: { selectedIndex: 1 }, navigation })}>
                    <Text style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold,
                    stylesFont.FontSize4, { width: 80, marginRight: 8, }]}>เพิ่มบัญชี</Text>
                </TouchableOpacity>}
                {deleteBar && <TouchableOpacity key={'deleteBar'} onPress={() => propsFunction()} style={[stylesMain.ItemCenter,
                { width: 60 }]}>
                    <Text style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical, stylesFont.FontFamilyBold,
                    stylesFont.FontSize4, { width: 60, textAlign: 'center' }]}>{ButtomDeleteAll ? 'เสร็จสิ้น' : 'ลบ'}</Text>
                </TouchableOpacity>}
            </View>
        </LinearGradient>;
    };
};
function AppBar(props) {
    const AnimatableAppBar = props.enableSearch ?
        Animatable.createAnimatableComponent(AppSearchBar) :
        Animatable.createAnimatableComponent(AppNoSearchBar);;
    return <AnimatableAppBar {...props} />
}
AppBar.propTypes = {
    AIColor: PropTypes.string,
    enableSearch: PropTypes.bool,
    end: PropTypes.object,
    start: PropTypes.object,
}
AppBar.defaultProps = {
    AIColor: '#fff',
    colorSet: ['#10162dff', '#284d8fff'],
    enableSearch: false,
    end: { x: 0, y: 1 },
    start: { x: 0, y: 0 },
}
export default AppBar;