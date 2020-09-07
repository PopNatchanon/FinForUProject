///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Order_Detail from './OrderDetail/Order_Detail';
import Profile_Topic from './ProfileTopic/Profile_Topic';
import SettingScreen from './Setting/SettingScreen';
import Total_Order from './TotalOrder/Total_Order';
///----------------------------------------------------------------------------------------------->>>> Sub Cancel
import CancelFrom from './Cancel/CancelFrom/CancelFrom';
import CancelProduct from './Cancel/CancelProduct/CancelProduct';
///----------------------------------------------------------------------------------------------->>>> Sub ReturnProducts
import ReturnProductsFrom from './ReturnProducts/ReturnProductsFrom/ReturnProductsFrom';
import ReturnProductsPro from './ReturnProducts/ReturnProductsPro/ReturnProductsPro';
///----------------------------------------------------------------------------------------------->>>> Sub Setting
import Setting_Topic from './Setting/SettingTopic/Setting_Topic';
///----------------------------------------------------------------------------------------------->>>>
export default [
    ///----------------------------------------------------------------------------------------------->>>> Main Screen
    { component: LoginScreen, name: 'LoginScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: ProfileScreen, name: 'ProfileScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: RegisterScreen, name: 'RegisterScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Screen
    { component: Order_Detail, name: 'Order_Detail', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Profile_Topic, name: 'Profile_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SettingScreen, name: 'SettingScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Total_Order, name: 'Total_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Cancel
    { component: CancelFrom, name: 'CancelFrom', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: CancelProduct, name: 'CancelProduct', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub ReturnProducts
    { component: ReturnProductsFrom, name: 'ReturnProductsFrom', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: ReturnProductsPro, name: 'ReturnProductsPro', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    ///----------------------------------------------------------------------------------------------->>>> Sub Setting
    { component: Setting_Topic, name: 'Setting_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];