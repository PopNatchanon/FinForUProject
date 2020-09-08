///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions, Text, TextInput, TouchableOpacity, View,
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
import stylesMain from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetData, } from '../Tools';
import { NavigationNavigate } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
import { finip, ip, } from '../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>>
class AppSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGetCurrentUser: true,
            cartMobile: 0,
            currentUser: undefined,
            text: undefined,
        };
    };
    componentDidMount() {
        const { activeGetCurrentUser } = this.state;
        activeGetCurrentUser && GetData({
            getCokie: true, getSource: value => this.setState({
                activeGetCurrentUser: false, cokie: value.keycokie, currentUser: value.currentUser
            }), getUser: true,
        });
    };
    render() {
        const {
            activeCartList, AIColor, backArrow, borderBottomColor, cartBar, cartData, cartDataCount, chatBar, colorSet, filterBar,
            navigation, otherBar, searchBar, SearchText,
        } = this.props;
        const { cokie, currentUser, text, } = this.state;
        let setSubmit = () => text != undefined && text != ' ' &&
            NavigationNavigate({ goScreen: 'Main_Search', navigation, setData: { SearchText: text }, });
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
        if (colorSet) colorSet.map((value) => typeof value == 'object' ? colors.push(JSON.stringify(value)) : colors.push(value));
        !cartData?.isActive && !cartData?.isRefresh && cartData.data.length == 0 && cokie && currentUser?.id_customer &&
            activeCartList({ cokie: cokie, id_customer: currentUser?.id_customer });
        return <LinearGradient colors={colors} end={this.props.end} start={this.props.start} style={[stylesMain.Appbar,
        stylesMain.FlexRow, {
            borderBottomColor: this.props.noBottomColor ? colors[colors.length - 1] : borderBottomColor, borderBottomWidth: 2,
            borderColor: colors[colors.length - 1], borderWidth: 0, width,
        }]}>
            {backArrow && <View key={'backarrow'}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ goScreen: 'goBack', navigation })}
                    style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}>
                    <AIconEntypo name="chevron-left" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>
            </View>}
            {searchBar ?
                <TouchableOpacity activeOpacity={1} key={'searchBar'} style={{ marginRight: 3 }}>
                    <View style={[stylesMain.AppbarBody, stylesMain.FlexRow, stylesMain.ItemCenterVertical,
                    { borderColor: '#ffbf00', borderWidth: 1, height: 30, }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: allWidth, }]}>
                            <TextInput style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize5,
                            stylesMain.TextInput,]} maxLength={30} onChangeText={value => this.setState({ text: value })}
                                onSubmitEditing={() => setSubmit()} placeholder="ค้นหาสินค้า/ร้านค้า" value={text} />
                        </View>
                        <AIconAntDesign name="search1" size={18} style={[{ left: allWidth - 25, position: 'absolute', top: 4, }]} />
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity activeOpacity={1} key={'searchBar'} onPress={() => NavigationNavigate({
                    goScreen: SearchText ? 'goBack' : 'Main_Search', navigation, setData: { modeStore: false },
                })} style={{ marginRight: 3 }}>
                    <View style={[stylesMain.AppbarBody, stylesMain.FlexRow, stylesMain.ItemCenterVertical,
                    { borderColor: '#ffbf00', borderWidth: 1, height: 30, }]}>
                        <View style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { height: 30, width: allWidth, }]}>
                            <Text style={[stylesFont.FontCenter, stylesFont.FontFamilyText, stylesFont.FontSize5,
                            stylesMain.ItemCenterVertical]}>{SearchText ?? 'ค้นหาสินค้า/ร้านค้า'}</Text>
                        </View>
                        <AIconAntDesign name="search1" size={18} style={[{ left: allWidth - 25, position: 'absolute', top: 4, }]} />
                    </View>
                </TouchableOpacity>}
            {<View key={'storebar'} style={[stylesMain.FlexRow, stylesMain.ItemCenter, stylesMain.ItemCenterVertical]}>
                {filterBar && <TouchableOpacity key='filterBar' onPress={null/*() => navigation.push('Cart')*/}
                    style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}>
                    <AIconFeather name="filter" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {otherBar && <TouchableOpacity key='otherBar' onPress={null/*() => navigation.push('Cart')*/}
                    style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { width: 30, }]}>
                    <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {chatBar && <TouchableOpacity key='chatBar' onPress={() => currentUser ?
                    NavigationNavigate({ goScreen: 'Customer_Topic_Chat', navigation }) :
                    NavigationNavigate({ goScreen: 'Customer_Login', navigation, passHome: true })} style={[stylesMain.ItemCenter,
                    stylesMain.ItemCenterVertical, { width: 30, }]}>
                    <AIconAntDesign name="message1" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {cartBar && <TouchableOpacity key='cartBar' onPress={() => currentUser ?
                    NavigationNavigate({ goScreen: 'Cart', navigation }) :
                    NavigationNavigate({ goScreen: 'Customer_Login', navigation, passHome: true })} style={[stylesMain.ItemCenter,
                    stylesMain.ItemCenterVertical, { width: 30, }]}>
                    {((cartData?.isError) || cartDataCount <= 0) ?
                        <></> : <Animatable.Text style={[stylesFont.FontFamilyText, stylesFont.FontSize7, {
                            backgroundColor: 'red', borderColor: AIColor, borderRadius: 15, borderWidth: 1, bottom: 15, color: '#fff',
                            elevation: 1, height: 17, left: 18, position: 'absolute', textAlign: 'center', textAlignVertical: 'center',
                            width: 17,
                        }]}>{cartDataCount}</Animatable.Text>}
                    <IconAntDesign name="shoppingcart" size={25} style={{ color: '#fff' }} />
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
            getCokie: true, getSource: value => this.setState({
                activeGetCurrentUser: false, cokie: value.keycokie, currentUser: value.currentUser
            }), getUser: true,
        });
    };
    render() {
        const {
            AIColor, backArrow, backNavigation, borderBottomColor, cartData, cartListButtomDelete, chatBar, colorSet, deleteBar,
            getActivePost, goToTop, navigation, postBar, saveBar, searchBar, selectshare, storeBar, settingBar, titleHead, UpBankBar, helpkBar,
        } = this.props;
        const { currentUser } = this.state;
        const colors = [];
        if (colorSet) colorSet.map((value) => typeof value == 'object' ? colors.push(JSON.stringify(value)) : colors.push(value));
        return <LinearGradient colors={colors} end={this.props.end} start={this.props.start} style={[stylesMain.Appbar, stylesMain.FlexRow,
        {
            borderBottomColor: this.props.noBottomColor ? colors[colors.length - 1] : borderBottomColor, borderBottomWidth: 2,
            borderColor: colors[colors.length - 1], borderWidth: 0, justifyContent: 'space-between', width,
        }]}>
            <View style={[stylesMain.FlexRow, { alignContent: 'center' }]}>
                {backArrow && <TouchableOpacity activeOpacity={1} onPress={() => goToTop ?
                    NavigationNavigate({ goScreen: 'popToTop', navigation }) : backNavigation ? [route.params.backNavigation('goBack'),
                    NavigationNavigate({ goScreen: 'goBack', navigation })] : NavigationNavigate({ goScreen: 'goBack', navigation })}
                    style={[stylesMain.ItemCenter, stylesMain.ItemCenterVertical, { height: 50, width: 40, }]}>
                    <IconEntypo name="chevron-left" size={30} style={[stylesStore.Icon_appbar, { color: AIColor }]} />
                </TouchableOpacity>}
                <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesMain.ItemCenterVertical, stylesStore.Text_appbar,
                { marginTop: 'auto', marginLeft: backArrow ? 4 : 24, }]}>{titleHead ?? ''}</Text>
                {selectshare && <View style={{ marginVertical: 5 }}>
                    <ModalDropdown defaultValue={<Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize6,
                    stylesMain.ItemCenterVertical, stylesStore.Text_appbar,]}>แชร์ไปยัง
                            <IconEntypo name='chevron-down' size={25} style={{ color: '#FFFFFF' }} /></Text>}
                        dropdownStyle={[stylesMain.ItemCenter, {
                            borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, height: 90, width: 100,
                        }]} dropdownTextStyle={[stylesFont.FontFamilyText, stylesFont.FontSize6]}
                        options={['แชร์ไปยัง FIN', 'แชร์ไปยัง กลุ่ม']} textStyle={[stylesFont.FontFamilyBold, stylesFont.FontSize4,
                        stylesMain.ItemCenterVertical, stylesStore.Text_appbar, { color: '#FFFFFF' }]} />
                </View>}
            </View>
            <View style={stylesMain.FlexRow}>
                {searchBar && <TouchableOpacity key={'searchBar'} onPress={() => NavigationNavigate({
                    goScreen: 'Main_Search', navigation, setData: { modeStore: false },
                })} style={[stylesMain.ItemCenter, { width: 40 }]}>
                    <IconAntDesign name="search1" RightItem size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8 }]} />
                </TouchableOpacity>}
                {settingBar && <TouchableOpacity key={'settingBar'} onPress={() => NavigationNavigate({
                    goScreen: 'Seller_Setting', navigation
                })} style={[stylesMain.ItemCenter, { width: 40 }]}>
                    <IconMaterialCommunityIcons name="settings-outline" size={25} style={[stylesStore.Icon_appbar,
                    stylesMain.ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {chatBar && <TouchableOpacity key={'chatBar'} onPress={() => currentUser ?
                    NavigationNavigate({ goScreen: 'Customer_Topic_Chat', navigation, }) :
                    NavigationNavigate({ goScreen: 'Customer_Login', navigation, passHome: true })} style={[stylesMain.ItemCenter,
                    { width: 40 }]}>
                    <IconAntDesign name="message1" RightItem size={25} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8 }]} />
                </TouchableOpacity>}
                {storeBar && <TouchableOpacity key={'storeBar'} onPress={() => NavigationNavigate({
                    goScreen: 'Customer_Topic_FollowStore', navigation,
                })} style={[stylesMain.ItemCenter, { width: 40 }]}>
                    <IconFontAwesome5 name="store" RightItem size={20} style={[stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8 }]} />
                </TouchableOpacity>}
                {postBar && <TouchableOpacity key={'postBar'} onPress={() => getActivePost(true)} style={[stylesMain.ItemCenter,
                { width: 60 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8, width: 60, }]}>โพสต์</Text>
                </TouchableOpacity>}
                {saveBar && <TouchableOpacity key={'saveBar'} style={[stylesMain.ItemCenter, { width: 60 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8, width: 60, }]}>บันทึก</Text>
                </TouchableOpacity>}
                {UpBankBar && <TouchableOpacity key={'UpBankBar'} style={[stylesMain.ItemCenter, { width: 80 }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Setting_Topic', navigation, setData: { selectedIndex: 1 }, })}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8, width: 80, }]}>เพิ่มบัญชี</Text>
                </TouchableOpacity>}
                {helpkBar && <TouchableOpacity key={'helpkBar'} style={[stylesMain.ItemCenter, { width: 80 }]} onPress={() =>
                    NavigationNavigate({ goScreen: 'Customer_Topic_Help_Account', navigation, })}>
                    <Text style={[stylesFont.FontFamilyText, stylesFont.FontSize5, stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { marginRight: 8, width: 80, }]}>ช่วยเหลือ</Text>
                </TouchableOpacity>}
                {deleteBar && this.props.cartDataList.length > 0 && <TouchableOpacity key={'deleteBar'} onPress={() =>
                    cartListButtomDelete()} style={[stylesMain.ItemCenter, { width: 60 }]}>
                    <Text style={[stylesFont.FontFamilyBold, stylesFont.FontSize4, stylesStore.Icon_appbar, stylesMain.ItemCenterVertical,
                    { textAlign: 'center', width: 60, }]}>{cartData.buttomDelete ? 'เสร็จสิ้น' : 'ลบ'}</Text>
                </TouchableOpacity>}
            </View>
        </LinearGradient>;
    };
};
function AppBar(props) {
    const AnimatableAppBar = props.enableSearch ?
        Animatable.createAnimatableComponent(AppSearchBar) : Animatable.createAnimatableComponent(AppNoSearchBar);
    return <AnimatableAppBar {...props} />
};
AppBar.propTypes = {
    AIColor: PropTypes.string,
    borderBottomColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    enableSearch: PropTypes.bool,
    end: PropTypes.object,
    noBottomColor: PropTypes.bool,
    start: PropTypes.object,
};
AppBar.defaultProps = {
    AIColor: '#fff',
    borderBottomColor: '#ffbf00',
    colorSet: ['#10162dff', '#284d8fff'],
    enableSearch: false,
    end: { x: 0, y: 1 },
    noBottomColor: false,
    start: { x: 0, y: 0 },
};
export default AppBar;