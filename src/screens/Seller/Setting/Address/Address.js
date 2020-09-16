///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
import stylesProfileTopic from '../../../../style/stylesProfile-src/stylesProfile_Topic';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { Address_Customar } from '../../../Customer/Setting/Edit/Address/Address';
import { AppBar, ExitApp, NavigationNavigate, } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyText, FontSize3, } = stylesFont;
const { SafeAreaViews } = stylesMain;
const { Edit_Profile_Button_Save } = stylesProfileTopic;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Address);
function Address(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ที่อยู่ร้านค้าของฉัน' />
        <Setting_Address_Store {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///------------------------------------------------------------------------------///
export let Setting_Address_Store = (props) => {
    return <View>
        <Address_Customar MainAddress />
        <Address_Customar />
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 475 }}>
            <TouchableOpacity onPress={() => NavigationNavigate({ ...props, goScreen: 'Cart_Account', })}>
                <View style={Edit_Profile_Button_Save}>
                    <Text style={[FontFamilyText, FontSize3, { color: '#FFFFFF' }]}>เพิ่มที่อยู่</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
};