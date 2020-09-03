///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: LoginScreen, name: 'LoginScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: ProfileScreen, name: 'ProfileScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: RegisterScreen, name: 'RegisterScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];