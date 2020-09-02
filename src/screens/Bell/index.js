///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Screen
import BellScreen from './BellScreen';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: BellScreen, name: 'BellScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } }];