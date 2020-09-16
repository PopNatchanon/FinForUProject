///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
///----------------------------------------------------------------------------------------------->>>> Icon
import IconEntypo from 'react-native-vector-icons/Entypo';
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesFont from '../../../../style/stylesFont';
import stylesMain, { mainColor } from '../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../../customComponents';
import { GetServices } from '../../../../customComponents/Tools';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip, ip, } from '../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { FontFamilyBold, FontFamilyText, FontSize2, FontSize4, FontSize5, FontSize6 } = stylesFont;
const { FlexRow, FrameBackground, ItemCenter, SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(History);
function History(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const getSource = (v) => { setActiveGetSource(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: (v) => getSource(v) });
    }, [activeGetSource]);
    const MainProps = { ...props, cokie, currentUser };
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...MainProps} backArrow titleHead='ประวัติการถอนเงิน' />
        <Withdrawal_history {...MainProps} />
        <ExitApp {...MainProps} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Withdrawal_history = (props) => {
    const { cokie, currentUser, } = props;
    const [activeHistory, setActiveHistory] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const dataBody = { id_customer: currentUser?.id_customer };
    const uri = `${finip}/store_transfer/transfer_history`;
    const getData = (v) => { setActiveHistory(false); setDataService(v); };
    useEffect(() => {
        activeHistory && currentUser &&
            GetServices({ Authorization: cokie, dataBody, getDataSource: (v) => getData(v), uriPointer: uri, });
    }, [activeHistory && currentUser]);
    return <>
        {dataService?.length > 0 ? <Withdrawal_history_sub {...props} /> : <></>}
    </>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Withdrawal_history_sub = (props) => {
    const [activeBox, setActiveBox] = useState(false);
    return <>
        <TouchableOpacity onPress={() => setActiveBox(!activeBox)}>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={[FlexRow, FrameBackground, { justifyContent: 'space-around' }]}>
                    <View>
                        <Text style={[FontFamilyText, FontSize6, { color: '#B7B7B7' }]}>ถอนเงิน</Text>
                        <Text style={[FontFamilyText, FontSize5,]}>123124284349</Text>
                    </View>
                    <View>
                        <Text style={[FontFamilyBold, FontSize2,]}>1,000,000 THB</Text>
                        <Text style={[FontFamilyText, FontSize5, { color: '#B7B7B7', textAlign: 'right', }]}>
                            กรุงไทย<IconEntypo color={mainColor} name={activeBox ? 'chevron-up' : 'chevron-down'} size={20} /></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        {activeBox && <View style={[ItemCenter, { backgroundColor: '#FFFFFF', padding: 10 }]}>
            <Text style={[FontFamilyText, FontSize4]}>20/02/2020</Text>
            <FastImage source={{ uri: `${ip}/mysql/uploads/message/BBL-LOGO.jpg`, }} style={{ borderWidth: 3, height: 100, width: 100, }} />
            <Text style={[FontFamilyText, FontSize4]}>ธนาคารกรุงเทพ</Text>
            <Text style={[FontFamilyText, FontSize4]}>* *** *** *232</Text>
            <View style={[ItemCenter, { borderColor: '#C4C4C4', borderRadius: 5, borderWidth: 2, paddingHorizontal: 30 }]}>
                <Text style={[FontFamilyBold, FontSize4]}>สถานะ</Text>
                <View style={[ItemCenter, { backgroundColor: '#2CD583', borderRadius: 30, padding: 5 }]}>
                    <IconEntypo color='#FFFFFF' name='check' size={35} />
                </View>
                <Text style={[FontFamilyText, FontSize4]}>อนุมัติเสร็จสิ้น</Text>
            </View>
        </View>}
    </>;
};