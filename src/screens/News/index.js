///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import NewsScreen from './NewsScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: NewsScreen, name: 'NewsScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } }];