///----------------------------------------------------------------------------------------------->>>> React
import React from 'react';
import { Dimensions, SafeAreaView, } from 'react-native';
import { connect, } from 'react-redux';
import { checkCustomer, fetchData, multiFetchData, setFetchToStart, } from '../../../../../actions';
///----------------------------------------------------------------------------------------------->>>> Import
export const { width, height } = Dimensions.get('window');
///----------------------------------------------------------------------------------------------->>>> Icon
///----------------------------------------------------------------------------------------------->>>> styleSeller
import stylesMain from '../../../../../style/StylesMainScreen';
///----------------------------------------------------------------------------------------------->>>> Inside/Tools
import { AppBar, ExitApp, } from '../../../../../customComponents';
import { SettingList } from '../../Setting';
///----------------------------------------------------------------------------------------------->>>> Ip.
import { finip } from '../../../../../navigator/IpConfig';
///----------------------------------------------------------------------------------------------->>>> setup
const { SafeAreaViews } = stylesMain;
///----------------------------------------------------------------------------------------------->>>> Main
const mapStateToProps = (state) => ({ customerData: state.customerData, getFetchData: state.singleFetchDataFromService, });
const mapDispatchToProps = ({ checkCustomer, fetchData, multiFetchData, setFetchToStart, });
export default connect(mapStateToProps, mapDispatchToProps)(Document);
function Document(props) {
    return <SafeAreaView style={SafeAreaViews}>
        <AppBar {...props} backArrow saveBar titleHead='แก้ไขเอกสารการจดแจ้ง' />
        <Documents {...props} />
        <ExitApp {...props} />
    </SafeAreaView>;
};
///----------------------------------------แก้ไขเอกสารการจดแจ้ง--------------------------------------///
export const Documents = (props) => {
    const ListItem = [{
        name: 'แก้ไขบัญชีธนาคาร',
        subItem: [{
            name: 'บัญชีธนาคาร',
            setNavi: { goScreen: 'Seller_Setting_Edit_Bank', },
        }],
    }, {
        name: 'แก้ไขเอกสารจดแจ้ง',
        subItem: [{
            name: 'หนังสือจดทะเบียนบริษัท จากกรมพัฒนาธุรกิจการค้า',
            setNavi: { goScreen: 'Seller_Setting_Edit_DocumentCompany', },
        }, {
            name: 'สำเนาบัตรประชาชน/พาสปอร์ตของกรรมการผู้มีอำนาจลงนาม',
            setNavi: { goScreen: 'Seller_Setting_Edit_DocumentIdCard', },
        }, {
            name: 'ใบทะเบียนภาษีมูลค่าเพิ่ม',
            setNavi: { goScreen: 'Seller_Setting_Edit_DocumentVat', },
        }, {
            name: 'ใบจดทะเบียนเครื่องหมายการค้า',
            setNavi: { goScreen: 'Seller_Setting_Edit_DocumentTrademark', },
        }, {
            name: 'หนังสือรับรองการเป็นตัวแทนจำหน่าย (ไม่จำเป็นต้องระบุ)',
            setNavi: { goScreen: 'Seller_Setting_Edit_DocumentCertificate', },
        }, {
            name: 'สำเนาบัญชีธนาคารของผู้ขาย',
            setNavi: { goScreen: 'Seller_Setting_Edit_DocumentBank', },
        }],
    }];
    const ListProps = { ...props, ListItem };
    return <SettingList {...ListProps} />
};