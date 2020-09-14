///----------------------------------------------------------------------------------------------->>>> React
import React, { useRef, useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
import BottomSheet from "react-native-raw-bottom-sheet";
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain from '../../../../style/StylesMainScreen';
import stylesSeller from '../../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip, ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize4, FontSize5, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews, } = stylesMain;
const { BottomSheet_Botton, BottomSheet_Botton_cancel, BottomSheet_Botton_OK, BottomSheet_Box, SizeSheet_Boxsize, Up_product_Select
} = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow saveBar titleHead='เพิ่มสินค้า' />
        <Up_Product_Select {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Up_Product_Select = (props) => {
    const { route, } = props;
    const optionName = route.params?.optionName;
    const optionName2 = route.params?.optionName2;
    const optionValue = route.params?.optionValue;
    const optionValue2 = route.params?.optionValue2;
    const [price, setPrice] = useState(undefined);
    const [total, setTotal] = useState(undefined);
    const Edit_Body = useRef(null);
    const Edit_all_Body = <View>
        <Text style={[FontFamilyBold, FontSize3]}>ตั้งค่าราคาและจำนวนสินค้าในคลังทุกตัวเลือก</Text>
        <View style={FlexRow}>
            <View style={{ marginRight: 10, paddingTop: 15, width: 30, }}>
                <Text style={[FontFamilyBold, FontSize5]}>ราคา</Text>
            </View>
            <View style={[BottomSheet_Box, { width: 250 }]}>
                <TextInput style={[FontFamilyBold, FontSize5]} placeholder="0.00" editable onChangeText={(v) => setPrice(v)}>
                    {price}</TextInput>
            </View>
        </View>
        <View style={FlexRow}>
            <View style={{ marginRight: 10, paddingTop: 15, width: 30, }}>
                <Text style={[FontFamilyBold, FontSize5]}>คลัง</Text>
            </View>
            <View style={[BottomSheet_Box, { width: 250 }]}>
                <TextInput style={[FontFamilyBold, FontSize5]} placeholder="0" editable onChangeText={(v) => setTotal(v)}>{total}</TextInput>
            </View>
        </View>
        <View style={BottomSheet_Botton}>
            <TouchableOpacity onPress={() => Edit_Body.current.close()}>
                <View style={BottomSheet_Botton_cancel}>
                    <Text style={[FontFamilyBold, FontSize5]}>ยกเลิก</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => null}>
                <View style={BottomSheet_Botton_OK}>
                    <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF', }]}>ตกลง</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>;
    return <>
        <BottomSheet
            customStyles={{ container: { alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, } }}
            duration={250} height={250} ref={Edit_Body}>
            {Edit_all_Body()}
        </BottomSheet>
        <View style={[FlexRow, Up_product_Select]}>
            <Text style={[FontFamilyText, FontSize4]}>การตั้งค่าสำหรับทุกตัวเลือกสินค้า</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Edit_Body.current.open()}>
                <Text style={[FontFamilyBold, FontSize4]}>แก้ไขแบบชุด</Text>
            </TouchableOpacity>
        </View>
        <View style={[FlexRow, Up_product_Select]}>
            <View style={[ItemCenter, { width: '30%', }]}>
                <Text style={[FontFamilyBold, FontSize4]}>ตัวเลือกสินค้า</Text>
            </View>
            <View style={[ItemCenter, { width: '30%', }]}>
                <Text style={[FontFamilyBold, FontSize4]}>ราคา</Text>
            </View>
            <View style={[ItemCenter, { width: '30%', }]}>
                <Text style={[FontFamilyBold, FontSize4]}>คลัง</Text>
            </View>
        </View>
        <View style={{ marginVertical: 5, }}>
            <View style={{ flexDirection: 'row', width: '30%', }}>
                {optionValue && optionValue.map((v, i) => {
                    if (i == 0 && v.name) {
                        return optionValue2 && optionValue2.map((v2, i2) => {
                            if (i2 == 0 && v2.name) {
                                return <>
                                    <View style={[ItemCenter, { width: '50%', }]}>
                                        <Text style={[FontFamilyBold, FontSize4]}>{optionName}</Text>
                                    </View>
                                    <View style={[ItemCenter, { width: '50%', }]}>
                                        <Text style={[FontFamilyBold, FontSize4]}>{optionName2}</Text>
                                    </View>
                                </>;
                            } else if (i2 == 0) {
                                return <View style={[ItemCenter, { width: '100%', }]}>
                                    <Text style={[FontFamilyBold, FontSize4]}>{optionName}</Text>
                                </View>;
                            };
                        });
                    };
                })}
            </View>
            <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 5 }}>
                {optionValue && optionValue.map((v, i) => {
                    if (v.name) {
                        return optionValue2 && optionValue2.map((v2, i2) => {
                            if (v2.name) {
                                return <View key={`${i}:${i2}`} style={[FlexRow, Up_product_Select]}>
                                    <View style={{ flexDirection: 'row', width: '30%', }}>
                                        <View style={[ItemCenter, { width: '50%', }]}>
                                            <Text style={[FontFamilyBold, FontSize4]}>{i2 == 0 && v.name}</Text>
                                        </View>
                                        <View style={[ItemCenter, { width: '50%', }]}>
                                            <Text style={[FontFamilyBold, FontSize4]}>{v2.name}</Text>
                                        </View>
                                    </View>
                                    <View style={[ItemCenter, { width: '30%', }]}>
                                        <View style={SizeSheet_Boxsize} />
                                    </View>
                                    <View style={[ItemCenter, { width: '30%', }]}>
                                        <View style={SizeSheet_Boxsize} />
                                    </View>
                                </View>;
                            } else if (i2 == 0) {
                                return <View key={`${i}`} style={[FlexRow, Up_product_Select]}>
                                    <View style={{ flexDirection: 'row', width: '30%', }}>
                                        <View style={[ItemCenter, { width: '100%', }]}>
                                            <Text style={[FontFamilyBold, FontSize4]}>{i2 == 0 && v.name}</Text>
                                        </View>
                                    </View>
                                    <View style={[ItemCenter, { width: '30%', }]}>
                                        <View style={SizeSheet_Boxsize}>
                                            <TextInput />
                                        </View>
                                    </View>
                                    <View style={[ItemCenter, { width: '30%', }]}>
                                        <View style={SizeSheet_Boxsize} />
                                    </View>
                                </View>;
                            };
                        });
                    };
                })}
            </View>
        </View>
        {/* <View style={{ marginVertical: 5 }}>
                    <View style={[ItemCenter, { width: '30%' }]}>
                        <Text style={[FontFamilyBold, FontSize4]}>ขนาด</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 5 }}>
                        <View style={[FlexRow, Up_product_Select]}>
                            <View style={[ItemCenter, { width: '30%' }]}>
                                <Text style={[FontFamilyBold, FontSize4]}>XL</Text>
                            </View>
                            <View style={[ItemCenter, { width: '30%' }]}>
                                <View style={SizeSheet_Boxsize} />
                            </View>
                            <View style={[ItemCenter, { width: '30%' }]}>
                                <View style={SizeSheet_Boxsize} />
                            </View>
                        </View>
                        <View style={[FlexRow, Up_product_Select]}>
                            <View style={[ItemCenter, { width: '30%' }]}>
                                <Text style={[FontFamilyBold, FontSize4]}>L</Text>
                            </View>
                            <View style={[ItemCenter, { width: '30%' }]}>
                                <View style={SizeSheet_Boxsize} />
                            </View>
                            <View style={[ItemCenter, { width: '30%' }]}>
                                <View style={SizeSheet_Boxsize} />
                            </View>
                        </View>
                    </View>
                </View> */}
    </>;
};