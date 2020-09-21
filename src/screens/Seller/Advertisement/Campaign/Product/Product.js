///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import { CheckBox } from 'react-native-elements';
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize4, FontSize5, FontSize7, } = stylesFont;
const { BoxProduct1Image, FlexRow, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Product);
function Product(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='เลือกสินค้า' />
        <Seller_ProductSelect />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_ProductSelect = (props) => {
    const [checked, setChecked] = useState(true);
    const [text, setText] = useState('');
    return <>
        <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ borderColor: '#EAEAEA', borderWidth: 1, flexDirection: 'row', padding: 5, }}>
                    <Text style={[FontFamilyBold, FontSize4, { margin: 10 }]}>เลือกสินค้า</Text>
                    <View style={
                        { borderColor: '#EAEAEA', borderRadius: 5, borderWidth: 1, flexDirection: 'row', paddingLeft: 10, width: '65%', }}>
                        <TextInput onChangeText={(v) => setText(v)} placeholder='' style={[FontFamilyText, FontSize7, { width: '90%' }]}
                            value={text}>
                        </TextInput>
                        <TouchableOpacity>
                            <IconAntDesign name="search1" size={20} RightItem style={{ marginVertical: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Seller_Product />
            <Seller_Product />
        </ScrollView>
        <View style={[FlexRow, { backgroundColor: '#FFFFFF', justifyContent: 'space-between', }]}>
            <View style={FlexRow}>
                <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                <Text style={[FontFamilyBold, FontSize5, { marginTop: 15 }]}>เลือกทั้งหมด</Text>
            </View>
            <View style={[FlexRow, { marginRight: 10, marginVertical: 10, }]}>
                <TouchableOpacity>
                    <View style={[ItemCenter,
                        { borderColor: mainColor, borderRadius: 5, borderWidth: 1, padding: 5, width: 100, }]}>
                        <Text style={[FontFamilyBold, FontSize5, { color: mainColor }]}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[ItemCenter, {
                        backgroundColor: mainColor, borderColor: mainColor, borderRadius: 5, borderWidth: 1, marginLeft: 10, padding: 5,
                        width: 100
                    }]}>
                        <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>ตกลง</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Product = (props) => {
    const [checked, setChecked] = useState(true);
    const Image1 = { uri: `${ip}/mysql/uploads/products/2019-10-29-1572320317.jpg`, };
    return <View style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
        <View style={{ borderColor: '#EAEAEA', borderWidth: 1, flexDirection: 'row', padding: 10, }}>
            <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
            <View style={{ borderColor: '#EAEAEA', borderWidth: 1, height: 80, padding: 5, width: 80, }}>
                <FastImage source={Image1} style={BoxProduct1Image} />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={[FontFamilyText, FontSize7]}>กระเป๋าสะพายไหล่ Chanel</Text>
                <Text style={[FontFamilyText, FontSize7]}>จำนวน : 20</Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <View style={{ backgroundColor: '#EB4768', borderRadius: 5, padding: 5, }}>
                    <Text style={[FontFamilyBold, FontSize7, { color: '#FFFFFF' }]}>ไม่เหมาะสม</Text>
                </View>
            </View>
        </View>
    </View>;
};