///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> Styles
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
import stylesProfile from '../../../style/StylesProfileScreen'
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews } = stylesMain;
const { ListMenuListIcon } = stylesProfile;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Finance);
function Finance(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='การเงิน' />
        <Finances {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Finances = (props) => {
    const Styles1 = {
        backgroundColor: '#FFFFFF', borderColor: '#ECECEC', borderRadius: 5, borderWidth: 1, marginVertical: 10, padding: 10, width: '49%',
    };
    return <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <View style={[ItemCenter, Styles1]}>
                <Text style={[FontFamilyBold, FontSize5]}>0 THB </Text>
                <Text style={[FontFamilyText, FontSize5]}>ยอดเงินที่ถอนได้</Text>
            </View>
            <View style={[ItemCenter, Styles1]}>
                <Text style={[FontFamilyBold, FontSize5]}>0 THB </Text>
                <Text style={[FontFamilyText, FontSize5]}>ยอดเงินที่ถอนแล้ว</Text>
            </View>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => NavigationNavigate({ ...props, goScreen: 'Seller_Money_History', })}>
            <View style={[FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
                <Text style={[FontFamilyText, FontSize5, { margin: 10 }]}>ประวัติการถอนเงิน</Text>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={ListMenuListIcon} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() =>
            NavigationNavigate({ ...props, goScreen: 'Seller_Money_PIN', setData: { Withdraw: 'Withdraw' }, })}>
            <View style={[FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
                <Text style={[FontFamilyText, FontSize5, { margin: 10 }]}>ถอนเงิน</Text>
                <IconEntypo color={mainColor} name='chevron-right' size={35} style={ListMenuListIcon} />
            </View>
        </TouchableOpacity>
    </View>
};