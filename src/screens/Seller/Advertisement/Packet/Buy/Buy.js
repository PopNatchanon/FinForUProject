///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
import stylesSeller from '../../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize4, FontSize5, } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
const { Seller_Advertisement_PacketTextInput, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Buy);
function Buy(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='จัดการโฆษณา' />
        <Seller_Advertisement_PacketBuy {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Advertisement_PacketBuy = (props) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [mail, setMail] = useState('');
    const [line, setLine] = useState('');
    const [checked, setChecked] = useState(true);
    return <View style={FrameBackground}>
        <Text style={[FontFamilyBold, FontSize3, { borderBottomWidth: 1, }]}> รายละเอียดผู้ติดต่อ</Text>
        <View style={{ padding: 10 }}>
            <View>
                <Text style={[FontFamilyBold, FontSize5, { marginVertical: 5 }]}>ชื่อผู้ติดต่อ*</Text>
                <View style={Seller_Advertisement_PacketTextInput}>
                    <TextInput onChangeText={(v) => setName(v)} placeholder="" style={[FontFamilyText, FontSize4,
                        { padding: 10, width: '100%', }]} value={name}>
                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={[FontFamilyBold, FontSize5, { marginVertical: 5 }]}>หมายเลขโทรศัพท์*</Text>
                <View style={Seller_Advertisement_PacketTextInput}>
                    <TextInput onChangeText={(v) => setTel(v)} placeholder="" style={[FontFamilyText, FontSize4,
                        { padding: 10, width: '100%', }]} value={tel}>
                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={[FontFamilyBold, FontSize5, { marginVertical: 5 }]}>อีเมล*</Text>
                <View style={Seller_Advertisement_PacketTextInput}>
                    <TextInput onChangeText={(v) => setMail(v)} placeholder="" style={[FontFamilyText, FontSize4,
                        { padding: 10, width: '100%', }]} value={mail}>
                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={[FontFamilyBold, FontSize5, { marginVertical: 5 }]}>LINE ID</Text>
                <View style={Seller_Advertisement_PacketTextInput}>
                    <TextInput onChangeText={(v) => setLine(v)} placeholder="" style={[FontFamilyText, FontSize4,
                        { padding: 10, width: '100%', }]} value={line}>
                    </TextInput>
                </View>
            </View>
            <Text style={[FontFamilyBold, FontSize5, { marginVertical: 5 }]}>เรื่องที่ติดต่อ</Text>
            <View style={FlexRow}>
                <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                <Text style={[FontFamilyText, FontSize5, { marginTop: 15 }]}>สนใจโฆษณาร้านกับ FIN (มีค่าใช้จ่าย)</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={[ItemCenter, {
                        backgroundColor: mainColor, borderColor: mainColor, borderRadius: 5, borderWidth: 1, marginLeft: 10, padding: 5,
                        width: 100
                    }]}>
                        <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>ติดต่อแอดมิน</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};