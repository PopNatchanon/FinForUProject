///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import CancelScreen from './Cancel/CancelScreen';
import Order_Detail from './OrderDetail/Order_Detail';
import Profile_Topic from './ProfileTopic/Profile_Topic';
import Return_products from './ReturnProducts/Return_products';
import SettingScreen from './Setting/SettingScreen';
import Total_Order from './TotalOrder/Total_Order';
///----------------------------------------------------------------------------------------------->>>> Sub Setting
import Setting_Topic from './Setting/SettingTopic/Setting_Topic';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: LoginScreen, name: 'LoginScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: ProfileScreen, name: 'ProfileScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: RegisterScreen, name: 'RegisterScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: CancelScreen, name: 'CancelScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Order_Detail, name: 'Order_Detail', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Profile_Topic, name: 'Profile_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Return_products, name: 'Return_products', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: SettingScreen, name: 'SettingScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Total_Order, name: 'Total_Order', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } },
    { component: Setting_Topic, name: 'Setting_Topic', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];