///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../style/stylesFont';
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../customComponents';
import { Seller_Comment } from '../Comment/Comment';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip, ip, } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontSize2, FontSize3, FontSize4, } = stylesFont;
const { FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
function Topic(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow titleHead='คะแนนของฉัน' />
        <ScrollView>
            <Seller_Score {...props} />
        </ScrollView>
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Seller_Score = (props) => {
    return <View>
        <View style={{ backgroundColor: '#4C9AE2', width: '100%', }}>
            <Text style={[FontFamilyBold, FontSize3, { color: '#FFFFFF', margin: 10 }]}> เรตติ้งร้าน </Text>
            <View style={ItemCenter}>
                <View style={[ItemCenter,
                    { backgroundColor: '#FFFFFF', borderRadius: 80, borderWidth: 1, height: 130, marginBottom: 10, width: 130, }]}>
                    <Text style={[FontFamilyBold, FontSize2]}>4.6 คะแนน</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <IconFontAwesome color='#FFAC33' name='star' size={20} />
                        <IconFontAwesome color='#FFAC33' name='star' size={20} />
                        <IconFontAwesome color='#FFAC33' name='star' size={20} />
                        <IconFontAwesome color='#FFAC33' name='star' size={20} />
                        <IconFontAwesome color='#FFAC33' name='star' size={20} />
                    </View>
                </View>
            </View>
        </View>
        <View style={[FrameBackground, { padding: 10 }]}>
            <Text style={[FontFamilyBold, FontSize4]}>ความคิดเห็น</Text>
        </View>
        <Seller_Comment {...props} Comment_Reply />
        <Seller_Comment {...props} Comment_Reply />
        <Seller_Comment {...props} Comment_Reply />
    </View>;
};