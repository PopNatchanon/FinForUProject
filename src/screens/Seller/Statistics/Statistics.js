///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../style/stylesFont';
import stylesMain from '../../../style/StylesMainScreen';
import stylesSeller from '../../../style/styleSeller-src/styleSellerScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../customComponents';
///----------------------------------------------------------------------------------------------->>>> Ip.
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize5, } = stylesFont;
const { FlexRow, ItemCenter, SafeAreaViews, } = stylesMain;
const { Seller_Setting_BoxTopic, } = stylesSeller;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
function Statistics(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='สถิติร้านร้านค้า' />
        <Seller_Statistics />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export const Seller_Statistics = (props) => {
    const Item1 = [{
        icon: <IconEntypo name='bar-graph' size={25} />,
        name: 'อัตราคำสั่งซื้อ',
        subItem: [{
            name: 'อัตราคำสั่งซื้อที่สำเร็จ',
            value: '0% ≥ 4.6',
        }, {
            name: 'อัตราการยกเลิกสินค้า',
            value: '0% ≤ 10%',
        }, {
            name: 'อัตราการคืนสินค้า/คืนเงิน',
            value: '0% ≤ 10%',
        }],
    }, {
        icon: <IconEntypo name='emoji-happy' size={25} />,
        name: 'ความพึงพอใจของลูกค้า',
        subItem: [{
            name: 'อัตราความคิดเห็นโดยรวม',
            value: '5 ≤ 10%',
        }, {
            name: 'อัตราการตอบกลับ',
            value: '57.00 % ≥ 75%',
        }, {
            name: 'เวลาในการตอบกลับ',
            value: 'ภายใน 1 วัน ≤ 1วัน',
        }],
    }];
    return <View>
        {Item1.map((v, i) => <View key={i}>
            <View style={[Seller_Setting_BoxTopic, { backgroundColor: '#E9E9E9' }]}>
                <View style={[FlexRow, ItemCenter]}>
                    {v.icon}
                    <Text style={[FontFamilyBold, FontSize5, { margin: 5 }]}>{v.name}</Text>
                </View>
            </View>
            {v.subItem.map((v2, i2) => <View key={`${i}-${i2}`} style={[ItemCenter, Seller_Setting_BoxTopic]}>
                <Text style={[FontFamilyText, FontSize5, { margin: 5 }]}>{v2.name}</Text>
                <Text style={[FontFamilyBold, FontSize5]}>{v2.value}</Text>
            </View>)}
        </View>)}
    </View>;
};