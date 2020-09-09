///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Seller from './Seller';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Seller_Advertisement from './Advertisement/Advertisement';
import Seller_Cencel from './Cencel/Cencel';
import Seller_Comment from './Comment/Comment';
import Seller_Income from './Income/Income';
import Seller_Money from './Money/Money';
import Seller_ProfileEdit from './ProfileEdit/ProfileEdit';
import Seller_Scores from './Scores/Scores';
import Seller_Setting from './Setting/Setting';
import Seller_Statistics from './Statistics/Statistics';
import Seller_StoreProduct from './StoreProduct/StoreProduct';
import Seller_TotelOrder from './TotelOrder/TotelOrder';
import Seller_UpProduct from './UpProduct/UpProduct';
///----------------------------------------------------------------------------------------------->>>> Sub Advertisement
import Seller_Advertisement_Campaign from './Advertisement/Campaign/Campaign';
import Seller_Advertisement_CodeSale from './Advertisement/CodeSale/CodeSale';
import Seller_Advertisement_Packet from './Advertisement/Packet/Packet';
///--------------------------------------------------------------------->>>> Sub Advertisement --->>>> Sub Campaign
import Seller_Advertisement_Campaign_Product from './Advertisement/Campaign/Product/Product';
///--------------------------------------------------------------------->>>> Sub Advertisement --->>>> Sub CodeSale
import Seller_Advertisement_CodeSale_Forms from './Advertisement/CodeSale/Forms/Forms';
///--------------------------------------------------------------------->>>> Sub Advertisement --->>>> Sub Packet
import Seller_Advertisement_Packet_Buy from './Advertisement/Packet/Buy/Buy';
///----------------------------------------------------------------------------------------------->>>> Sub Detail
import Seller_Detail_Order from './Detail/Order/Order';
import Seller_Detail_Reviews from './Detail/Reviews/Reviews';
///----------------------------------------------------------------------------------------------->>>> Sub Money
import Seller_Money_Bank from './Money/Bank/Bank';
import Seller_Money_History from './Money/History/History';
import Seller_Money_PIN from './Money/PIN/PIN';
import Seller_Money_Withdrawal from './Money/Withdrawal/Withdrawal';
///--------------------------------------------------------------------->>>> Sub Bank ------------>>>> Sub Detail
import Seller_Money_Bank_Detail from './Money/Bank/Detail/Detail';
///--------------------------------------------------------------------->>>> Sub PIN ------------->>>> Sub Mail
import Seller_Money_PIN_Mail from './Money/PIN/Mail/Mail';
///----------------------------------------------------------------------------------------------->>>> Sub Return
import Seller_Return_Product from './Return/Product/Product';
import Seller_Return_ProductDetail from './Return/ProductDetail/ProductDetail';
///----------------------------------------------------------------------------------------------->>>> Sub Setting
import Seller_Setting_Address from './Setting/Address/Address';
import Seller_Setting_UpCodeNumber from './Setting/UpCodeNumber/UpCodeNumber';
///----------------------------------------------------------------------------------------------->>>> Sub Edit
import Seller_Setting_Edit_Bank from './Setting/Edit/Bank/Bank';
import Seller_Setting_Edit_Document from './Setting/Edit/Document/Document';
import Seller_Setting_Edit_DocumentBank from './Setting/Edit/DocumentBank/DocumentBank';
import Seller_Setting_Edit_DocumentCertificate from './Setting/Edit/DocumentCertificate/DocumentCertificate';
import Seller_Setting_Edit_DocumentCompany from './Setting/Edit/DocumentCompany/DocumentCompany';
import Seller_Setting_Edit_DocumentIdCard from './Setting/Edit/DocumentIdCard/DocumentIdCard';
import Seller_Setting_Edit_DocumentTrademark from './Setting/Edit/DocumentTrademark/DocumentTrademark';
import Seller_Setting_Edit_DocumentVat from './Setting/Edit/DocumentVat/DocumentVat';
import Seller_Setting_Edit_UpCodeNumber from './Setting/Edit/UpCodeNumber/UpCodeNumber';
///----------------------------------------------------------------------------------------------->>>> Sub UpProduct
import Seller_UpProduct_Forms from './UpProduct/Forms/Forms';
///----------------------------------------------------------------------------------------------->>>>
export default [{ ///---------------------------------------------------------------------------------->>>> Main Screen
    component: Seller, name: 'Seller',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen 
    component: Seller_Advertisement, name: 'Seller_Advertisement',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Cencel, name: 'Seller_Cencel',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Comment, name: 'Seller_Comment',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Income, name: 'Seller_Income',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Money, name: 'Seller_Money',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_ProfileEdit, name: 'Seller_ProfileEdit',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Scores, name: 'Seller_Scores',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting, name: 'Seller_Setting',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Statistics, name: 'Seller_Statistics',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_StoreProduct, name: 'Seller_StoreProduct',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_TotelOrder, name: 'Seller_TotelOrder',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_UpProduct, name: 'Seller_UpProduct',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Advertisement
    component: Seller_Advertisement_Campaign, name: 'Seller_Advertisement_Campaign',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Advertisement_CodeSale, name: 'Seller_Advertisement_CodeSale',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Advertisement_Packet, name: 'Seller_Advertisement_Packet',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Advertisement --->>>> Sub Campaign
    component: Seller_Advertisement_Campaign_Product, name: 'Seller_Advertisement_Campaign_Product',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Advertisement --->>>> Sub CodeSale
    component: Seller_Advertisement_CodeSale_Forms, name: 'Seller_Advertisement_CodeSale_Forms',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Advertisement --->>>> Sub Packet
    component: Seller_Advertisement_Packet_Buy, name: 'Seller_Advertisement_Packet_Buy',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Detail
    component: Seller_Detail_Order, name: 'Seller_Detail_Order',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Detail_Reviews, name: 'Seller_Detail_Reviews',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Money
    component: Seller_Money_Bank, name: 'Seller_Money_Bank',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Money_History, name: 'Seller_Money_History',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Money_PIN, name: 'Seller_Money_PIN',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Money_Withdrawal, name: 'Seller_Money_Withdrawal',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Bank ------------>>>> Sub Detail
    component: Seller_Money_Bank_Detail, name: 'Seller_Money_Bank_Detail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub PIN ------------->>>> Sub Mail
    component: Seller_Money_PIN_Mail, name: 'Seller_Money_PIN_Mail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Return
    component: Seller_Return_Product, name: 'Seller_Return_Product',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Return_ProductDetail, name: 'Seller_Return_ProductDetail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Setting
    component: Seller_Setting_Address, name: 'Seller_Setting_Address',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_UpCodeNumber, name: 'Seller_Setting_UpCodeNumber',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Edit
    component: Seller_Setting_Edit_Bank, name: 'Seller_Setting_Edit_Bank',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_Document, name: 'Seller_Setting_Edit_Document',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_DocumentBank, name: 'Seller_Setting_Edit_DocumentBank',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_DocumentCertificate, name: 'Seller_Setting_Edit_DocumentCertificate',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_DocumentCompany, name: 'Seller_Setting_Edit_DocumentCompany',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_DocumentIdCard, name: 'Seller_Setting_Edit_DocumentIdCard',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_DocumentTrademark, name: 'Seller_Setting_Edit_DocumentTrademark',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_DocumentVat, name: 'Seller_Setting_Edit_DocumentVat',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Seller_Setting_Edit_UpCodeNumber, name: 'Seller_Setting_Edit_UpCodeNumber',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub UpProduct
    component: Seller_UpProduct_Forms, name: 'Seller_UpProduct_Forms',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];