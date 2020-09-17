///----------------------------------------------------------------------------------------------->>>> React
import React, { useEffect, useState, } from 'react';
import { Dimensions, SafeAreaView, View, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { height, width } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain from '../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp } from '../../../customComponents';
import { GetData, GetServices } from '../../../customComponents/Tools';
import { SettingList } from '../Setting/Setting';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Money);
function Money(props) {
    const [activeGetSource, setActiveGetSource] = useState(true);
    const [cokie, setCokie] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const getSource = (v) => { setActiveGetSource(false); setCokie(v.keycokie); setCurrentUser(v.currentUser); };
    useEffect(() => {
        activeGetSource && GetData({ getCokie: true, getUser: true, getSource: (value) => getSource(value) });
    }, [activeGetSource]);
    const MainProps = { ...props, cokie, currentUser, };
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...MainProps} backArrow titleHead='ถอนเงิน' />
        <Withdraw_money {...MainProps} />
        <ExitApp {...MainProps} />
    </SafeAreaView>;
};
///----------------------------------------------------------------------------------------------->>>>
export let Withdraw_money = (props) => {
    const { cokie, currentUser, } = props;
    const [activeDataService, setActiveDataService] = useState(true);
    const [dataService, setDataService] = useState(undefined);
    const uri = `${finip}/store_transfer/check_pin`;
    const dataBody = { id_customer: currentUser?.id_customer };
    const getData = (value) => { setActiveDataService(false); setDataService(value); };
    useEffect(() => {
        activeDataService && currentUser &&
            GetServices({ Authorization: cokie, uriPointer: uri, dataBody, getDataSource: value => getData(value) });
    }, [activeDataService && currentUser]);
    const ListItem = [{
        subItem: [{
            name: 'ประวัติการถอนเงิน',
            setNavi: { goScreen: 'Seller_Money_PIN', setData: { Withdraw: 'History' }, },
        }, {
            name: 'ถอนเงิน',
            setNavi: { goScreen: 'Seller_Money_PIN', setData: { Withdraw: 'Withdraw' }, },
        }, {
            name: 'บัญชีธนาคาร',
            setNavi: { goScreen: 'Seller_Money_PIN', setData: { Withdraw: 'Bank' }, },
        }],
    }];
    const ListProps = { ...props, ListItem };
    return <View style={{ backgroundColor: '#FFFFFF', marginTop: 5 }}>
        <SettingList {...ListProps} />
    </View>;
};