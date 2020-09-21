///----------------------------------------------------------------------------------------------->>>> React
import React, { useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFeather from 'react-native-vector-icons/Feather';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, NavigationNavigate, } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize3, FontSize4, FontSize5, FontSize6, FontSize7, FontSize8, } = stylesFont;
const { BoxProduct1Image, FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='ตอบกลับความคิดเห็น' />
        <Seller_Comment_Reply />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Comment_Reply = (props) => {
    const [detail, serDetail] = useState('');
    return <View>
        <Seller_Comment />
        <View style={FrameBackground}>
            <Text style={[FontFamilyBold, FontSize4, { margin: 5 }]}>เขียนการตอบกลับ</Text>
            <View style={ItemCenter}>
                <View style={{ backgroundColor: '#E3E3E3', height: 120, margin: 5, padding: 5, width: '80%', }}>
                    <TextInput editable maxLength={5000} multiline onChangeText={(v) => serDetail(v)} placeholder=""
                        style={[FontFamilyText, FontSize5, { width: '100%' }]} value={detail} />
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={[ItemCenter,
                        { backgroundColor: mainColor, borderRadius: 5, height: 30, margin: 10, width: 100, }]}>
                        <Text style={[FontFamilyBold, FontSize5, { color: '#FFFFFF' }]}>ตอบกลับ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Comment = (props) => {
    const { Comment_Reply, } = props;
    const Image1 = { uri: `${ip}/mysql/uploads/products/2019-03-20-1553064759.jpg`, };
    return <View style={FrameBackground}>
        <View style={{
            borderBottomWidth: 1, borderColor: '#EAEAEA', flexDirection: 'row', height: 50, justifyContent: 'space-between',
            paddingHorizontal: 10, width: '100%',
        }}>
            <View style={FlexRow}>
                <View style={{ backgroundColor: '#C4C4C4', borderRadius: 20, height: 40, margin: 5, width: 40, }} />
                <Text style={[FontFamilyBold, FontSize6, { margin: 10, }]}>PPoo</Text>
            </View>
        </View>
        <View style={[FlexRow, { borderBottomWidth: 1, borderColor: '#EAEAEA', padding: 5, }]}>
            <View style={FlexRow}>
                <View style={{ height: 80, width: 80, }}>
                    <FastImage source={Image1} style={BoxProduct1Image} />
                </View>
                <View style={{ padding: 5, width: '55%' }}>
                    <Text style={[FontFamilyText, FontSize7]}>โคมไฟตกแต่งบ้าน มีหลากหลายสี</Text>
                    <Text style={[FontFamilyText, FontSize8, { color: '#A2A2A2' }]}>ตัวเลือกสินค้า:สีแดง</Text>
                    <Text style={[FontFamilyText, FontSize8]}>เหตุผลยกเลิกสินค้า :เนื่องจากเปลี่ยนใจ</Text>
                </View>
            </View>
            {Comment_Reply ?
                <TouchableOpacity style={[FlexRow, { alignItems: 'flex-end' }]} onPress={() =>
                    NavigationNavigate({ ...props, goScreen: 'Seller_Comment', })}>
                    <IconFeather name='edit' size={15} color='#20BDA1' />
                    <Text style={[FontFamilyText, FontSize7, { color: '#20BDA1' }]}> เขียนตอบกลับ</Text>
                </TouchableOpacity> : null}
        </View>
        <View style={ItemCenter}>
            <View style={{ backgroundColor: '#E3E3E3', height: 80, margin: 10, padding: 10, width: '80%', }}>
                <Text style={[FontFamilyBold, FontSize3, { color: '#A9A8A8' }]}>สินค้าร้านดีมากเลย</Text>
            </View>
        </View>
    </View>;
};