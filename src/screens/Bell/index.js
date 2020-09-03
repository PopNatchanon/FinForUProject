///----------------------------------------------------------------------------------------------->>>> 
import { CardStyleInterpolators, } from '@react-navigation/stack';
///----------------------------------------------------------------------------------------------->>>> Main Screen
import BellScreen from './BellScreen';
///----------------------------------------------------------------------------------------------->>>> Sub Screen
import Detail_Pro from './DetailPro/Detail_Pro';
///----------------------------------------------------------------------------------------------->>>>
export default [
    { component: BellScreen, name: 'BellScreen', options: { cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid } },
    { component: Detail_Pro, name: 'Detail_Pro', options: { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }];