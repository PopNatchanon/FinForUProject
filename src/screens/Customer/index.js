///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import Customer_Login from './Login';
import Customer_Profile from './Profile';
import Customer_Register from './Register';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Customer_OrderDetail from './OrderDetail/OrderDetail';
import Customer_Setting from './Setting/Setting';
import Customer_Topic from './Topic/Topic';
import Customer_TotalOrder from './TotalOrder/TotalOrder';
///----------------------------------------------------------------------------------------------->>>> Sub Cancel
import Customer_Cancel_From from './Cancel/From/From';
import Customer_Cancel_Product from './Cancel/Product/Product';
///----------------------------------------------------------------------------------------------->>>> Sub ReturnProducts
import Customer_Return_ProductsFrom from './Return/ProductsFrom/ProductsFrom';
import Customer_Return_ProductsPro from './Return/ProductsPro/ProductsPro';
///----------------------------------------------------------------------------------------------->>>> Sub Setting
import Customer_Setting_Topic from './Setting/Topic/Topic';
///----------------------------------------------------------------------------------------------->>>>
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
    component: Customer_Topic, name: 'Customer_Topic',
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
    component: Customer_Setting_Topic, name: 'Customer_Setting_Topic',
    options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }
}];