///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Customer_Login from './Login';
import Customer_Profile from './Profile';
import Customer_Register from './Register';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Customer_OrderDetail from './OrderDetail/OrderDetail';
import Customer_Setting from './Setting/Setting';
import Customer_TotalOrder from './TotalOrder/TotalOrder';
///----------------------------------------------------------------------------------------------->>>> Sub Cancel
import Customer_Cancel_From from './Cancel/From/From';
import Customer_Cancel_Product from './Cancel/Product/Product';
///----------------------------------------------------------------------------------------------->>>> Sub ReturnProducts
import Customer_Return_ProductsFrom from './Return/ProductsFrom/ProductsFrom';
import Customer_Return_ProductsPro from './Return/ProductsPro/ProductsPro';
///----------------------------------------------------------------------------------------------->>>> Sub Setting
import Customer_Setting_Edit_Address from './Setting/Edit/Address/Address';
import Customer_Setting_Edit_Chat from './Setting/Edit/Chat/Chat';;
import Customer_Setting_Edit_Language from './Setting/Edit/Language/Language';
import Customer_Setting_Edit_Notification from './Setting/Edit/Notification/Notification';
import Customer_Setting_Edit_Pass from './Setting/Edit/Pass/Pass';
import Customer_Setting_Edit_Profile from './Setting/Edit/Profile/Profile';
///--------------------------------------------------------------------->>>> Sub Setting --------->>>> Sub Notification
import Customer_Setting_Edit_Notification_Alert from './Setting/Edit/Notification/Alert/Alert';
import Customer_Setting_Edit_Notification_Email from './Setting/Edit/Notification/Email/Email';
///----------------------------------------------------------------------------------------------->>>> Sub Topic
import Customer_Topic_Chat from './Topic/Chat/Chat';
import Customer_Topic_FollowStore from './Topic/FollowStore/FollowStore';
import Customer_Topic_Help from './Topic/Help/Help';
import Customer_Topic_Interested from './Topic/Interested/Interested';
import Customer_Topic_Latest from './Topic/Latest/Latest';
import Customer_Topic_Review from './Topic/Review/Review';
///--------------------------------------------------------------------->>>> Sub Topic ----------->>>> Sub Chat
import Customer_Topic_Chat_Cutomer from './Topic/Chat/Cutomer/Cutomer';
///--------------------------------------------------------------------->>>> Sub Topic ----------->>>> Sub Help
import Customer_Topic_Help_Account from './Topic/Help/Account/Account';
import Customer_Topic_Help_Detail from './Topic/Help/Detail/Detail';
///--------------------------------------------------------------------->>>> Sub Topic ----------->>>> Sub Review
import Customer_Topic_Review_Froms from './Topic/Review/Froms/Froms';
///---------------------------------------------------------------------------------------------->>>>
export default [{  ///--------------------------------------------------------------------------------->>>> Main Screen
    component: Customer_Login, name: 'Customer_Login',
    options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }
}, {
    component: Customer_Profile, name: 'Customer_Profile',
    options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }
}, {
    component: Customer_Register, name: 'Customer_Register',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    component: Customer_OrderDetail, name: 'Customer_OrderDetail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting, name: 'Customer_Setting',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_TotalOrder, name: 'Customer_TotalOrder',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Cancel
    component: Customer_Cancel_From, name: 'Customer_Cancel_From',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Cancel_Product, name: 'Customer_Cancel_Product',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub ReturnProducts
    component: Customer_Return_ProductsFrom, name: 'Customer_Return_ProductsFrom',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Return_ProductsPro, name: 'Customer_Return_ProductsPro',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Setting
    component: Customer_Setting_Edit_Address, name: 'Customer_Setting_Edit_Address',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting_Edit_Chat, name: 'Customer_Setting_Edit_Chat',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting_Edit_Language, name: 'Customer_Setting_Edit_Language',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting_Edit_Notification, name: 'Customer_Setting_Edit_Notification',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting_Edit_Pass, name: 'Customer_Setting_Edit_Pass',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting_Edit_Profile, name: 'Customer_Setting_Edit_Profile',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Setting --------->>>> Sub Notification
    component: Customer_Setting_Edit_Notification_Alert, name: 'Customer_Setting_Edit_Notification_Alert',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Setting_Edit_Notification_Email, name: 'Customer_Setting_Edit_Notification_Email',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///----------------------------------------------------------------------------------------------->>>> Sub Topic
    component: Customer_Topic_Chat, name: 'Customer_Topic_Chat',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Topic_FollowStore, name: 'Customer_Topic_FollowStore',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Topic_Help, name: 'Customer_Topic_Help',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Topic_Interested, name: 'Customer_Topic_Interested',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Topic_Latest, name: 'Customer_Topic_Latest',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Topic_Review, name: 'Customer_Topic_Review',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Topic ----------->>>> Sub Chat
    component: Customer_Topic_Chat_Cutomer, name: 'Customer_Topic_Chat_Cutomer',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Topic ----------->>>> Sub Help
    component: Customer_Topic_Help_Account, name: 'Customer_Topic_Help_Account',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, {
    component: Customer_Topic_Help_Detail, name: 'Customer_Topic_Help_Detail',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}, { ///--------------------------------------------------------------------->>>> Sub Topic ----------->>>> Sub Review
    component: Customer_Topic_Review_Froms, name: 'Customer_Topic_Review_Froms',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];