///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import FastImage from 'react-native-fast-image';
import ModalDropdown from 'react-native-modal-dropdown';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
import { ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, FontSize6, FontSize7, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
const { ListMenuList, ListMenuListSub, } = stylesProfile;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
function Profile(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='สมาชิกAffiliate' />
        <ScrollList {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const ScrollList = (props) => {
    return <ScrollView>
        <Business_Profile {...props} />
    </ScrollView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Business_Profile = (props) => {
    const ListDetail = [
        { name: 'ยอดเงินสะสม', detail: { percen: '+0 (+0.00%)', value: '0 THB' }, },
        { name: 'จำนวนคลิก', detail: { value: '0 ครั้ง' }, },
        { name: 'รายได้ต่อคลิก', detail: { percen: '+0 (+0.00%)', value: '0 THB' }, },
        { name: 'รายการสินค้า', setNavi: { goScreen: 'Business_Product' }, },
        { name: 'การเติบโต', setNavi: { goScreen: 'Business_Growth' }, }];
    return <>
        <View style={[FrameBackground, { alignItems: 'center', }]}>
            <View style={{
                backgroundColor: '#128BCE', borderColor: mainColor, borderRadius: 50, borderWidth: 2, height: 100, marginTop: 20, padding: 10,
                width: 100,
            }}>
                <FastImage resizeMode={FastImage.resizeMode.stretch} source={{ uri: `${ip}/MySQL/uploads/addmin/unnamed.png`, }}
                    style={BoxProduct1Image} />
            </View>
            <Text style={[FontFamilyBold, FontSize5, { marginTop: 10 }]}>ชื่อ นาย ชนะชัย โอชานะ</Text>
            <View style={[FlexRow, { justifyContent: 'space-between', marginBottom: 10, marginTop: 10, width: '80%', }]}>
                <View style={[FlexRow, ItemCenter,
                    { borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 30, width: '49%', }]}>
                    <Text style={[FontFamilyBold, FontSize5, { marginRight: 10 }]}>ยอดเงิน</Text>
                    <Text style={[FontFamilyText, FontSize5]}>77,700</Text>
                </View>
                <View style={[FlexRow, ItemCenter,
                    { borderColor: mainColor, borderRadius: 5, borderWidth: 2, height: 30, width: '49%', }]}>
                    <Text style={[FontFamilyBold, FontSize5, { marginRight: 10 }]}>แชร์</Text>
                    <Text style={[FontFamilyText, FontSize5]}>256</Text>
                </View>
            </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View style={[ListMenuList, { justifyContent: 'center', padding: 10 }]}>
                <View style={ListMenuListSub}>
                    <Text style={[FontFamilyText, FontSize6, { marginRight: 10 }]}>ระยะเวลา</Text>
                    <View style={{ alignItems: 'center', borderColor: '#EAEAEA', borderWidth: 1, width: '60%', }}>
                        <ModalDropdown defaultValue={'All'} dropdownStyle={
                            { borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, width: '43%', }} dropdownTextStyle={[FontFamilyText,
                                FontSize6, { textAlign: 'center' }]} options={['All', 'Today', 'Last 7 Days', 'This Month']}
                            textStyle={[FontFamilyText, FontSize6]} />
                    </View>
                </View>
            </View>
            {ListDetail.map((v, i) => <TouchableOpacity activeOpacity={1} key={i}
                onPress={() => v.setNavi ? NavigationNavigate({ ...props, ...v.setNavi }) : null}>
                <View style={[ListMenuList, { alignItems: 'center', padding: 10 }]}>
                    <Text style={[FontFamilyText, FontSize6]}>{v.name}</Text>
                    {v.detail ?
                        <View style={ListMenuListSub}>
                            {v.detail.percen && <Text style={[FontFamilyBold, FontSize7, { color: '#4DCD9A', marginRight: 10 }]}>
                                {v.detail.percen}</Text>}
                            {v.detail.value && <Text style={[FontFamilyText, FontSize6]}>{v.detail.value}</Text>}
                        </View> :
                        <IconEntypo color={mainColor} name='chevron-right' size={35} />}
                </View>
            </TouchableOpacity>)}
        </View>
    </>
};