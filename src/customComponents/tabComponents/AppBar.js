///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Text, TextInput, TouchableOpacity, View, } from 'react-native';
///----------------------------------------------------------------------------------------------->>>> Import
import * as Animatable from 'react-native-animatable';
export const { height, width } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../style/stylesFont';
import stylesMain from '../../style/StylesMainScreen';
import stylesStore from '../../style/StylesStoreScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { GetData, } from '../Tools';
import { NavigationNavigate } from '..';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontCenter, FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize6 } = stylesFont;
const { Appbar, AppbarBody, FlexRow, ItemCenter, ItemCenterVertical, TextInputs, } = stylesMain;
const { Icon_appbar, Text_appbar, } = stylesStore;
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
            getCokie: true, getSource: (v) => this.setState({
                activeGetCurrentUser: false, cokie: v.keycokie, currentUser: v.currentUser
            }), getUser: true,
        });
    };
    render() {
        const {
            activeCartList, AIColor, backArrow, borderBottomColor, cartBar, cartData, cartDataCount, chatBar, colorSet, filterBar,
            otherBar, route, searchBar, SearchText,
        } = this.props;
        const { cokie, currentUser, text, } = this.state;
        const routeProps = route.name;
        console.log('App--currentUser')
        console.log(currentUser)
        let setSubmit = () => text != undefined && text != ' ' &&
            NavigationNavigate({ ...this.props, goScreen: 'Main_Search', setData: { SearchText: text }, });
        const AIconAntDesign = Animatable.createAnimatableComponent(IconAntDesign);
        const AIconEntypo = Animatable.createAnimatableComponent(IconEntypo);
        const AIconFeather = Animatable.createAnimatableComponent(IconFeather);
        const AIconFontAwesome5 = Animatable.createAnimatableComponent(IconFontAwesome5);
        var allWidth = width - 30;
        backArrow && (allWidth -= 30);
        cartBar && (allWidth -= 25);
        chatBar && (allWidth -= 25);
        filterBar && (allWidth -= 25);
        otherBar && (allWidth -= 25);
        const colors = [];
        if (colorSet) colorSet.map((v) => typeof v == 'object' ? colors.push(JSON.stringify(v)) : colors.push(v));
        !cartData?.isActive && !cartData?.isRefresh && cartData.data.length == 0 && cokie && currentUser?.id_customer &&
            activeCartList({ cokie: cokie, id_customer: currentUser?.id_customer });
        const pathMain = ['Main', 'Feed', 'News', 'Bell', 'Customer_Login', 'Customer_Profile'];
        return <LinearGradient colors={colors} end={this.props.end} start={this.props.start} style={[Appbar,
            FlexRow, {
                borderBottomColor: this.props.noBottomColor ? colors[colors.length - 1] : borderBottomColor, borderBottomWidth: 2,
                borderColor: colors[colors.length - 1], borderWidth: 0, width,
            }]}>
            {backArrow && <View key={'backarrow'}>
                <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...this.props, goScreen: 'goBack', })}
                    style={[ItemCenter, ItemCenterVertical, { width: 35, }]}>
                    <AIconEntypo name="chevron-left" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>
            </View>}
            {searchBar ?
                <TouchableOpacity activeOpacity={1} key={'searchBar'} style={{ marginRight: 3 }}>
                    <View style={[AppbarBody, FlexRow, ItemCenterVertical,
                        { borderColor: '#ffbf00', borderWidth: 1, height: 30, }]}>
                        <View style={[ItemCenter, ItemCenterVertical, { width: allWidth, }]}>
                            <TextInput maxLength={30} onChangeText={(v) => this.setState({ text: v })} onSubmitEditing={() =>
                                setSubmit()} placeholder="ค้นหาสินค้า/ร้านค้า" style={[FontCenter, FontFamilyText, FontSize5, TextInputs]}
                                value={text} />
                        </View>
                        <AIconAntDesign name="search1" size={18} style={[{ left: allWidth - 25, position: 'absolute', top: 4, }]} />
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity activeOpacity={1} key={'searchBar'} onPress={() => NavigationNavigate({
                    ...this.props, goScreen: SearchText ? 'goBack' : 'Main_Search', setData: { modeStore: false },
                })} style={{ marginRight: 3 }}>
                    <View style={[AppbarBody, FlexRow, ItemCenterVertical,
                        { borderColor: '#ffbf00', borderWidth: 1, height: 30, }]}>
                        <View style={[ItemCenter, ItemCenterVertical, { height: 30, width: allWidth, }]}>
                            <Text style={[FontCenter, FontFamilyText, FontSize5,
                                ItemCenterVertical]}>{SearchText ?? 'ค้นหาสินค้า/ร้านค้า'}</Text>
                        </View>
                        <AIconAntDesign name="search1" size={18} style={[{ left: allWidth - 25, position: 'absolute', top: 4, }]} />
                    </View>
                </TouchableOpacity>}
            {<View key={'storebar'} style={[FlexRow, ItemCenter, ItemCenterVertical]}>
                {filterBar && <TouchableOpacity key='filterBar' onPress={null/*() => */}
                    style={[ItemCenter, ItemCenterVertical, { width: 30, }]}>
                    <AIconFeather name="filter" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {otherBar && <TouchableOpacity key='otherBar' onPress={null/*() => */}
                    style={[ItemCenter, ItemCenterVertical, { width: 30, }]}>
                    <AIconFontAwesome5 name="ellipsis-h" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {chatBar && <TouchableOpacity key='chatBar' onPress={() => currentUser ?
                    NavigationNavigate({ ...this.props, goScreen: 'Customer_Topic_Chat', }) :
                    NavigationNavigate({
                        ...this.props, goScreen: 'Customer_Login', passHome: pathMain.indexOf(routeProps) != -1 ? false : true
                    })} style={[ItemCenter, ItemCenterVertical, { width: 30, }]}>
                    <AIconAntDesign name="message1" size={25} style={{ color: AIColor }} />
                </TouchableOpacity>}
                {cartBar && <TouchableOpacity key='cartBar' onPress={() => currentUser ?
                    NavigationNavigate({ ...this.props, goScreen: 'Cart', }) :
                    NavigationNavigate({
                        ...this.props, goScreen: 'Customer_Login', passHome: pathMain.indexOf(routeProps) != -1 ? false : true
                    })} style={[ItemCenter, ItemCenterVertical, { width: 30, }]}>
                    {/* {((cartData?.isError) || cartDataCount <= 0) ?
                        <></> : <Animatable.Text style={[FontFamilyText, FontSize7, {
                            backgroundColor: 'red', borderColor: AIColor, borderRadius: 15, borderWidth: 1, bottom: 15, color: '#fff',
                            elevation: 1, height: 17, left: 18, position: 'absolute', textAlign: 'center', textAlignVertical: 'center',
                            width: 17,
                        }]}>{cartDataCount}</Animatable.Text>} */}
                    <IconAntDesign name="shoppingcart" size={25} style={{ color: '#fff' }} />
                </TouchableOpacity>}
            </View>}
        </LinearGradient>;
    };
}
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
            getCokie: true, getSource: (v) => this.setState({
                activeGetCurrentUser: false, cokie: v.keycokie, currentUser: v.currentUser
            }), getUser: true,
        });
    };
    render() {
        const {
            AIColor, backArrow, backNavigation, borderBottomColor, cartData, cartDataList, cartListButtomDelete, chatBar, colorSet, deleteBar,
            getActivePost, goToTop, postBar, saveBar, searchBar, selectshare, storeBar, settingBar, titleHead, UpBankBar, helpkBar,
        } = this.props;
        const { currentUser } = this.state;
        const colors = [];
        if (colorSet) colorSet.map((v) => typeof v == 'object' ? colors.push(JSON.stringify(v)) : colors.push(v));
        return <LinearGradient colors={colors} end={this.props.end} start={this.props.start} style={[Appbar, FlexRow, {
            borderBottomColor: this.props.noBottomColor ? colors[colors.length - 1] : borderBottomColor, borderBottomWidth: 2,
            borderColor: colors[colors.length - 1], borderWidth: 0, justifyContent: 'space-between', width,
        }]}>
            <View style={[FlexRow, { alignContent: 'center' }]}>
                {backArrow && <TouchableOpacity activeOpacity={1} onPress={() => goToTop ?
                    NavigationNavigate({ ...this.props, goScreen: 'popToTop', }) : backNavigation ? [route.params.backNavigation('goBack'),
                    NavigationNavigate({ ...this.props, goScreen: 'goBack', })] : NavigationNavigate({ ...this.props, goScreen: 'goBack', })}
                    style={[ItemCenter, ItemCenterVertical, { height: 50, width: 40, }]}>
                    <IconEntypo name="chevron-left" size={30} style={[Icon_appbar, { color: AIColor }]} />
                </TouchableOpacity>}
                <Text style={[FontFamilyBold, FontSize4, ItemCenterVertical, Text_appbar,
                    { marginTop: 'auto', marginLeft: backArrow ? 4 : 24, }]}>{titleHead ?? ''}</Text>
                {selectshare && <View style={{ marginVertical: 5 }}>
                    <ModalDropdown defaultValue={<Text style={[FontFamilyBold, FontSize6, ItemCenterVertical, Text_appbar]}>
                        แชร์ไปยัง <IconEntypo name='chevron-down' size={25} style={{ color: '#FFFFFF' }} /></Text>} dropdownStyle={[ItemCenter,
                            { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, height: 90, width: 100, }]}
                        dropdownTextStyle={[FontFamilyText, FontSize6]} options={['แชร์ไปยัง FIN', 'แชร์ไปยัง กลุ่ม']}
                        textStyle={[FontFamilyBold, FontSize4, ItemCenterVertical, Text_appbar, { color: '#FFFFFF' }]} />
                </View>}
            </View>
            <View style={FlexRow}>
                {searchBar && <TouchableOpacity key={'searchBar'} onPress={() =>
                    NavigationNavigate({ ...this.props, goScreen: 'Main_Search', setData: { modeStore: false }, })} style={[ItemCenter,
                        { width: 40 }]}>
                    <IconAntDesign name="search1" RightItem size={25} style={[Icon_appbar, ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {settingBar && <TouchableOpacity key={'settingBar'} onPress={() =>
                    NavigationNavigate({ goScreen: 'Seller_Setting', })} style={[ItemCenter, { width: 40 }]}>
                    <IconFeather name="settings" size={25} style={[Icon_appbar, ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {chatBar && <TouchableOpacity key={'chatBar'} onPress={() => currentUser ?
                    NavigationNavigate({ ...this.props, goScreen: 'Customer_Topic_Chat', }) :
                    NavigationNavigate({
                        ...this.props, goScreen: 'Customer_Login', passHome: pathMain.indexOf(routeProps) != -1 ? false : true
                    })} style={[ItemCenter, { width: 40 }]}>
                    <IconAntDesign name="message1" RightItem size={25} style={[Icon_appbar, ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {storeBar && <TouchableOpacity key={'storeBar'} onPress={() =>
                    NavigationNavigate({ ...this.props, goScreen: 'Customer_Topic_FollowStore', })} style={[ItemCenter, { width: 40 }]}>
                    <IconFontAwesome5 name="store" RightItem size={20} style={[Icon_appbar, ItemCenterVertical, { marginRight: 8 }]} />
                </TouchableOpacity>}
                {postBar && <TouchableOpacity key={'postBar'} onPress={() => getActivePost(true)} style={[ItemCenter, { width: 60 }]}>
                    <Text style={[FontFamilyBold, FontSize4, Icon_appbar, ItemCenterVertical, { marginRight: 8, width: 60, }]}>โพสต์</Text>
                </TouchableOpacity>}
                {saveBar && <TouchableOpacity key={'saveBar'} style={[ItemCenter, { width: 60 }]}>
                    <Text style={[FontFamilyBold, FontSize4, Icon_appbar, ItemCenterVertical, { marginRight: 8, width: 60, }]}>บันทึก</Text>
                </TouchableOpacity>}
                {UpBankBar && <TouchableOpacity key={'UpBankBar'} style={[ItemCenter, { width: 80 }]} onPress={() =>
                    NavigationNavigate({ ...this.props, goScreen: 'Seller_Setting_Edit_Bank', })}>
                    <Text style={[FontFamilyBold, FontSize4, Icon_appbar, ItemCenterVertical, { marginRight: 8, width: 80, }]}>
                        เพิ่มบัญชี</Text>
                </TouchableOpacity>}
                {helpkBar && <TouchableOpacity key={'helpkBar'} style={[ItemCenter, { width: 80 }]} onPress={() =>
                    NavigationNavigate({ ...this.props, goScreen: 'Customer_Topic_Help_Account', })}>
                    <Text style={[FontFamilyText, FontSize5, Icon_appbar, ItemCenterVertical, { marginRight: 8, width: 80, }]}>ช่วยเหลือ</Text>
                </TouchableOpacity>}
                {deleteBar && cartDataList?.length > 0 && <TouchableOpacity key={'deleteBar'} onPress={() =>
                    cartListButtomDelete()} style={[ItemCenter, { width: 60 }]}>
                    <Text style={[FontFamilyBold, FontSize4, Icon_appbar, ItemCenterVertical,
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